"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { Foto as Image } from "@/components/ui/Foto";
import { Logo } from "@/components/ui/Logo";
import { Pill } from "@/components/ui/Pill";
import { L } from "@/components/ui/L";
import { menuPrincipal, menuSecundario } from "@/data/site";
import { motion } from "@/lib/motion";
import { useLang } from "@/lib/i18n";
import { canonica, cambiarIdioma, LANGS } from "@/lib/routes";

/**
 * Cabecera fija.
 *  - Escritorio (≥ 1024 px): menú completo a ambos lados del logo centrado + es/en + Reservar.
 *  - Tablet y móvil: hamburguesa, logo centrado y Reservar; el menú se abre a pantalla completa.
 * El selector es/en lleva a la misma página en el otro idioma.
 */
export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const { lang, t } = useLang();
  const actual = canonica(pathname).path;
  const activo = (href: string) => (href === "/" ? actual === "/" : actual === href || actual.startsWith(href + "/"));
  const nav = menuPrincipal.filter((m) => m.href !== "/reservas");
  const izquierda = nav.slice(0, 3);
  const derecha = nav.slice(3);
  const label = (m: (typeof menuPrincipal)[number]) => (lang === "en" ? m.en : m.label);

  // Claro sobre la cabecera oscura de cada página ([data-header-light]); sólido al pasarla.
  useEffect(() => {
    let limite = 0;
    const medir = () => {
      const hero = document.querySelector<HTMLElement>("[data-header-light]");
      limite = hero ? Math.max(hero.offsetTop + hero.offsetHeight - 90, 0) : 0;
    };
    const onScroll = () => setSolid(!limite || window.scrollY > limite);
    medir();
    onScroll();
    const onResize = () => {
      medir();
      onScroll();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  useEffect(() => {
    const el = menu.current;
    if (!el) return;
    if (open) {
      motion.lenis?.stop();
      gsap.set(el, { display: "grid" });
      const tl = gsap.timeline();
      tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, ease: "power2.out" })
        .fromTo(el.querySelectorAll("[data-m-link]"), { yPercent: 110 }, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.05 }, 0.1)
        .fromTo(el.querySelectorAll("[data-m-fade]"), { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.06 }, 0.35)
        .fromTo(el.querySelector("[data-m-card]"), { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "expo.out" }, 0.2);
      el.querySelector<HTMLButtonElement>("[data-m-close]")?.focus();
    } else {
      motion.lenis?.start();
      gsap.to(el, { autoAlpha: 0, duration: 0.35, ease: "power2.in", onComplete: () => void gsap.set(el, { display: "none" }) });
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Al cambiar de página se cierra el menú
  useEffect(() => setOpen(false), [pathname]);

  const color = solid ? "text-granate" : "text-marfil";
  const enlace = "relative inline-flex min-h-11 items-center text-[0.95rem] font-normal tracking-[0.04em] lg:text-[1.1rem] transition-opacity hover:opacity-70";

  const Idiomas = ({ className = "" }: { className?: string }) => (
    <div role="group" aria-label={t("idioma")} className={`flex items-center gap-1 text-[0.95rem] uppercase tracking-[0.16em] lg:text-[1.05rem] ${className}`}>
      {LANGS.map((l, k) => (
        <span key={l} className="flex items-center gap-1">
          {k > 0 && <span aria-hidden className="opacity-50">/</span>}
          {/* Recarga completa: cambia el layout raíz (<html lang>) y reinicia las animaciones */}
          <a
            href={cambiarIdioma(pathname, l)}
            hrefLang={l}
            lang={l}
            aria-current={lang === l ? "true" : undefined}
            aria-label={l === "es" ? "Español" : "English"}
            className={`grid min-h-11 min-w-8 place-items-center transition-opacity ${lang === l ? "opacity-100 underline underline-offset-4" : "opacity-70 hover:opacity-100"}`}
          >
            {l}
          </a>
        </span>
      ))}
    </div>
  );

  return (
    <>
      <header
        data-chrome
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-700 ease-[var(--ease-soft)] ${
          solid ? "border-b border-granate/15 bg-crema/95 backdrop-blur-sm" : "border-b border-transparent"
        }`}
      >
        <div className={`grid h-[var(--header-h)] grid-cols-[1fr_auto_1fr] items-center gap-4 px-[var(--gutter)] ${color}`}>
          {/* Izquierda: hamburguesa (< 1024) o enlaces (≥ 1024) */}
          <div className="flex items-center justify-self-start">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="menu-principal"
              aria-label={t("abrirMenu")}
              className="group flex h-11 w-12 flex-col justify-center gap-[7px] lg:hidden"
            >
              <span className="h-px w-10 bg-current" />
              <span className="h-px w-10 bg-current transition-[width] duration-500 group-hover:w-7" />
              <span className="h-px w-10 bg-current" />
            </button>
            <nav aria-label={t("menuPrincipal")} className="hidden lg:block">
              <ul className="flex items-center gap-8 xl:gap-10">
                {izquierda.map((m) => (
                  <li key={m.href}>
                    <L href={m.href} aria-current={activo(m.href) ? "page" : undefined} className={`${enlace} ${activo(m.href) ? "underline underline-offset-[6px]" : ""}`}>
                      {label(m)}
                    </L>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* data-logo-menu: destino final de la intro del hero */}
          <L href="/" aria-label={t("inicio")} className="block w-[96px] sm:w-[120px] lg:w-[172px]">
            <span data-logo-menu className="block">
              <Logo className="w-full" />
            </span>
          </L>

          {/* Derecha: enlaces (≥ 1024), idioma y Reservar */}
          <div className="flex items-center justify-self-end gap-5 xl:gap-8">
            <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
              {derecha.map((m) => (
                <li key={m.href}>
                  <L href={m.href} aria-current={activo(m.href) ? "page" : undefined} className={`${enlace} ${activo(m.href) ? "underline underline-offset-[6px]" : ""}`}>
                    {label(m)}
                  </L>
                </li>
              ))}
            </ul>
            <Idiomas className="hidden sm:flex" />
            <L
              href="/reservas"
              className={`inline-flex min-h-11 items-center border px-4 text-[0.875rem] font-normal uppercase tracking-[0.16em] transition-colors sm:px-5 lg:min-h-12 lg:px-6 lg:text-[0.95rem] ${
                solid ? "border-granate bg-granate text-crema hover:bg-carmesi" : "border-blanco bg-blanco text-granate hover:bg-marfil hover:border-marfil"
              }`}
            >
              {t("reservar")}
            </L>
          </div>
        </div>
      </header>

      {/* Menú a pantalla completa (tablet y móvil) */}
      <div
        id="menu-principal"
        ref={menu}
        role="dialog"
        aria-modal="true"
        aria-label={t("menuPrincipal")}
        style={{ display: "none" }}
        className="fixed inset-0 z-[60] grid-rows-[auto_1fr] overflow-y-auto bg-crema text-carmesi"
        onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
      >
        <div className="grid h-[var(--header-h)] grid-cols-[1fr_auto_1fr] items-center px-[var(--gutter)]">
          <button data-m-close type="button" onClick={() => setOpen(false)} aria-label={t("cerrarMenu")} className="relative h-11 w-11 justify-self-start">
            <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
          </button>
          <L href="/" aria-label={t("inicio")} className="block w-[96px] sm:w-[120px]">
            <Logo className="w-full" />
          </L>
          <Idiomas className="justify-self-end text-granate" />
        </div>

        <div className="grid gap-12 px-[var(--gutter)] pb-12 pt-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:pt-10">
          <div className="flex flex-col justify-between gap-14 lg:h-full">
            <nav aria-label={t("menuPrincipal")}>
              <ul>
                {menuPrincipal.map((n) => (
                  <li key={n.href} className="overflow-hidden">
                    <L
                      data-m-link
                      href={n.href}
                      aria-current={activo(n.href) ? "page" : undefined}
                      className={`group inline-flex items-baseline gap-4 py-0.5 font-[family-name:var(--font-menu)] text-[clamp(2.2rem,4.2vw,4.2rem)] leading-[1.06] transition-colors hover:text-carmesi ${
                        activo(n.href) ? "italic text-carmesi" : "text-granate"
                      }`}
                    >
                      <span className="transition-transform duration-500 ease-[var(--ease-soft)] group-hover:translate-x-2 group-hover:italic">{label(n)}</span>
                    </L>
                  </li>
                ))}
              </ul>
            </nav>
            <div data-m-fade className="flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-granate/15 pt-6 text-[0.95rem] font-normal uppercase tracking-[0.16em] text-granate">
              <span>San Benito Abad · Sucre</span>
              {menuSecundario.map((n) => (
                <a key={n.href} href={n.href} target={n.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-[1.2rem] normal-case tracking-normal hover:text-carmesi">
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          <div data-m-card className="mx-auto hidden w-full max-w-[380px] flex-col items-center text-center sm:flex">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-rosa">
              <Image
                src="/images/san-benito/vista-cabana-piscina.webp"
                alt={lang === "es" ? "Vista desde una cabaña de Gardners Hills hacia la piscina" : "View from a Gardners Hills cabin towards the pool"}
                fill
                sizes="460px"
                className="object-cover"
              />
            </div>
            <p className="t-italic mt-8 text-[clamp(1.8rem,2.6vw,2.6rem)] leading-[1.05] text-granate">
              {t("frase1")}
              <br />
              {t("frase2")}
            </p>
            <div className="mt-7">
              <Pill href="/reservas">{t("reservarEstancia")}</Pill>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
