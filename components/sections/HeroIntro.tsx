"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Pill } from "@/components/ui/Pill";
import { useLang } from "@/lib/i18n";
import { finishIntro, motion, prefersReducedMotion } from "@/lib/motion";

const KEY = "gh-intro-seen";
// Proporciones de las dos piezas del logotipo (public/brand/logo-gardners.png y logo-hills.png)
const RATIO_G = 1766 / 336;
const RATIO_H = 1178 / 414;

function Word({ src, ratio, className, label, part }: { src: string; ratio: number; className: string; label?: string; part: "a" | "b" }) {
  return (
    <span
      data-word-a={part === "a" ? "" : undefined}
      data-word-b={part === "b" ? "" : undefined}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`logo-mask absolute text-marfil will-change-transform ${className}`}
      style={{ aspectRatio: String(ratio), WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` }}
    />
  );
}

/**
 * Hero con intro inspirada en Casa Momo:
 * 1) fondo oscuro, las dos palabras del logo aparecen juntas en el centro
 * 2) se separan  3) se abre una ventana redondeada con el video
 * 4) la ventana se expande a pantalla completa y las palabras viajan a esquinas opuestas
 * 5) aparecen el menú, el texto del hero y la barra de reservas.
 */
export function HeroIntro() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    const frame = el?.querySelector<HTMLElement>("[data-frame]");
    const a = el?.querySelector<HTMLElement>("[data-word-a]");
    const b = el?.querySelector<HTMLElement>("[data-word-b]");
    if (!el || !frame || !a || !b) return;
    const fades = el.querySelectorAll<HTMLElement>("[data-intro-fade]");
    const html = document.documentElement;

    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}

    // La marca de "vista" se guarda al terminar (en desarrollo React ejecuta el efecto dos veces)
    const end = () => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      html.classList.remove("intro-playing");
      el.removeAttribute("data-intro-active");
      motion.lenis?.start();
      finishIntro();
    };
    const mostrarChrome = () => el.removeAttribute("data-intro-active");

    if (prefersReducedMotion() || seen) {
      mostrarChrome();
      gsap.set(frame, { clipPath: "inset(0% 0% 0% 0% round 0px)" });
      gsap.set([a, b], { autoAlpha: 0 });
      gsap.fromTo(fades, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6, onComplete: end });
      return;
    }

    html.classList.add("intro-playing");
    motion.lenis?.stop();

    // Posición final (definida por CSS) → calculamos los estados intermedios centrados
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    const centro = (r: DOMRect) => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
    const ca = centro(ra);
    const cb = centro(rb);
    const par = (s: number, gap: number) => {
      const wA = ra.width * s;
      const wB = rb.width * s;
      const left = vw / 2 - (wA + gap + wB) / 2;
      return {
        a: { x: left + wA / 2 - ca.x, y: vh / 2 - ca.y, scale: s },
        b: { x: left + wA + gap + wB / 2 - cb.x, y: vh / 2 - cb.y, scale: s },
      };
    };
    const juntos = par(0.3, vw * 0.015);
    const separados = par(0.36, vw * 0.12);
    const ventana = par(0.46, vw * 0.24);

    // Destino final: el logo pequeño del menú. Cada palabra vuelve a su lugar dentro del logo
    // (posiciones medidas en public/brand/logo-wordmark.png) → el logotipo queda completo, no separado.
    const logoMenu = document.querySelector<HTMLElement>("header [data-logo-menu]");
    const L = logoMenu?.getBoundingClientRect() ?? new DOMRect(vw / 2 - 68, 12, 136, 57);
    const destino = (r: DOMRect, c: { x: number; y: number }, f: { left: number; top: number; width: number }, ratio: number) => {
      const w = L.width * f.width;
      const h = w / ratio;
      const cx = L.left + L.width * f.left + w / 2;
      const cy = L.top + L.height * f.top + h / 2;
      return { x: cx - c.x, y: cy - c.y, scale: w / r.width };
    };
    const finA = destino(ra, ca, { left: 0.00113, top: 0.00268, width: 0.9983 }, RATIO_G);
    const finB = destino(rb, cb, { left: 0.16733, top: 0.4437, width: 0.66591 }, RATIO_H);

    gsap.set(frame, { clipPath: "inset(50% 50% 50% 50% round 0px)" });
    gsap.set(a, { ...juntos.a, autoAlpha: 0, transformOrigin: "50% 50%" });
    gsap.set(b, { ...juntos.b, autoAlpha: 0, transformOrigin: "50% 50%" });
    gsap.set(fades, { autoAlpha: 0, y: 18 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" }, onComplete: end });
    tl.to(a, { autoAlpha: 1, duration: 0.9, ease: "power2.out" }, 0.25)
      .to(b, { autoAlpha: 1, duration: 0.9, ease: "power2.out" }, 0.55)
      // las palabras se separan
      .to(a, { ...separados.a, duration: 0.9 }, 1.45)
      .to(b, { ...separados.b, duration: 0.9 }, 1.45)
      // ventana redondeada con el video
      .to(frame, { clipPath: "inset(24% 30% 24% 30% round 260px)", duration: 1, ease: "expo.out" }, 2.05)
      .to(a, { ...ventana.a, duration: 1 }, 2.05)
      .to(b, { ...ventana.b, duration: 1 }, 2.05)
      // expansión a pantalla completa; las palabras se reúnen y se reducen hasta el logo del menú
      .to(frame, { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1.4, ease: "expo.inOut" }, 2.95)
      .to(a, { ...finA, duration: 1.4, ease: "expo.inOut" }, 2.95)
      .to(b, { ...finB, duration: 1.4, ease: "expo.inOut" }, 2.95)
      .call(() => {
        html.classList.remove("intro-playing");
        mostrarChrome();
      }, [], 4.15)
      // relevo: aparece el logo real del menú y se retiran las piezas animadas
      .to([a, b], { autoAlpha: 0, duration: 0.5, ease: "power1.out" }, 4.45)
      .to(fades, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" }, 4.0);

    return () => {
      tl.kill();
      html.classList.remove("intro-playing");
    };
  }, []);

  const { lang } = useLang();
  const video = useRef<HTMLVideoElement>(null);
  const [pausado, setPausado] = useState(false);
  const alternar = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPausado(false);
    } else {
      v.pause();
      setPausado(true);
    }
  };
  const T = {
    es: { kicker: "Junto a la ciénaga de Machado", sub: "Ocho cabañas con piscina y aire acondicionado en San Benito Abad, Sucre.", cta: "Conoce las cabañas", pausa: "Pausar el video", play: "Reproducir el video", inicial: "A", resto: "quí, el lujo es el silencio." },
    en: { kicker: "By the Ciénaga de Machado wetland", sub: "Eight cabins with pool and air conditioning in San Benito Abad, Sucre.", cta: "Discover the cabins", pausa: "Pause the video", play: "Play the video", inicial: "H", resto: "ere, silence is the luxury." },
  }[lang];

  return (
    <section
      id="inicio"
      ref={root}
      data-header-light
      data-intro-active=""
      aria-label="Gardners Hills"
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-granate text-marfil"
    >
      {/* Ventana con el video (se abre y se expande en la intro) */}
      <div data-frame className="absolute inset-0" style={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}>
        {/* Video de la sede San Benito; el poster (foto de la piscina) se ve mientras carga o si el navegador no lo reproduce */}
        <video
          ref={video}
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/hero-san-benito.mp4"
          poster="/images/san-benito/cabanas-piscina.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div aria-hidden className="absolute inset-0 bg-black/40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
      </div>

      {/* Logotipo en dos piezas: posición final en esquinas opuestas */}
      {/* Piezas animadas del logotipo (solo durante la intro; al final las releva el logo del menú) */}
      <Word
        part="a"
        src="/brand/logo-gardners.png"
        ratio={RATIO_G}
        className="left-[var(--gutter)] top-[calc(var(--header-h)+2vh)] w-[min(54vw,980px)]"
      />
      <Word
        part="b"
        src="/brand/logo-hills.png"
        ratio={RATIO_H}
        className="bottom-[150px] right-[var(--gutter)] w-[min(36vw,654px)]"
      />

      {/* Texto del hero centrado; título inclinado como la portada de Gastronomía de la referencia */}
      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center px-[var(--gutter)] text-center">
        <p data-intro-fade className="text-[0.92rem] uppercase tracking-[0.3em] text-marfil">
          {T.kicker}
        </p>
        {/* Título en una línea en escritorio: inicial en sans light y el resto en cursiva serif; escala con clamp */}
        <div data-intro-fade className="mt-6">
          <h1 className="text-[clamp(2.4rem,6vw,6.6rem)] leading-[1.02] lg:whitespace-nowrap">
            <span className="font-[family-name:var(--font-sans)] font-light not-italic">{T.inicial}</span>
            <span className="t-italic">{T.resto}</span>
          </h1>
        </div>
        <p data-intro-fade className="mt-10 text-marfil">{T.sub}</p>
        <div data-intro-fade className="mt-7">
          <Pill href="/cabanas" tone="blanco">
            {T.cta}
          </Pill>
        </div>
      </div>

      {/* Pausar / reproducir el video (accesibilidad) */}
      <button
        type="button"
        data-intro-fade
        onClick={alternar}
        aria-label={pausado ? T.play : T.pausa}
        aria-pressed={pausado}
        className="absolute bottom-6 left-[var(--gutter)] z-10 grid h-11 w-11 place-items-center rounded-full border border-marfil/80 text-marfil transition-colors hover:bg-marfil hover:text-granate max-md:bottom-[92px]"
      >
        {pausado ? (
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M4 2.5v11l9-5.5z" /></svg>
        ) : (
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" /></svg>
        )}
      </button>
    </section>
  );
}
