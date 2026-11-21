import type { Metadata } from "next";
import { MotionController } from "@/components/layout/MotionController";
import { Lines } from "@/components/ui/Lines";
import { Arch } from "@/components/ui/Arch";
import { Pill } from "@/components/ui/Pill";
import { L } from "@/components/ui/L";
import { ReservaBanda } from "@/components/sections/ReservaBanda";
import { espacios, gastronomiaFrase, gastronomiaIntro, type Espacio } from "@/data/gastronomia";
import { site } from "@/data/site";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return meta(lang, "/gastronomia", {
    es: { title: "Gastronomía & Bar", description: "Restaurante y bar en Gardners Hills, San Benito Abad, Sucre: sabores sencillos, servidos sin prisa." },
    en: { title: "Food & Bar", description: "Restaurant and bar at Gardners Hills, San Benito Abad, Sucre: simple flavours, served unhurried." },
  });
}

const iconos: Record<Espacio["detalles"][number]["icono"], React.ReactNode> = {
  plato: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="3.5" /></>,
  reloj: <><circle cx="12" cy="12" r="8" /><path d="M12 7.5V12l3 2" /></>,
  agua: <path d="M3 10c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0M3 15c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />,
  copa: <path d="M7 4h10l-5 7zM12 11v8M8.5 19h7" />,
};

/** Estructura de la página de restaurantes de Grand Hotel Miramare con el lenguaje visual de Gardners Hills */
export default async function GastronomiaPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = {
    es: {
      kicker: "Gastronomía & Bar", titulo: ["El sabor", "del río y la sabana"], espacios: "Espacios",
      altIntro: "Desayuno servido junto a la piscina en Gardners Hills",
      carta: "Ver carta menú", consultar: "Consultar por WhatsApp", msg: (e: string) => `Hola, quiero información sobre el ${e} de Gardners Hills.`,
      msgCarta: (e: string) => `Hola, ¿me pueden compartir la carta del ${e} de Gardners Hills?`,
      mas: ["Más allá", "de la mesa"],
      tarjetas: [
        { titulo: "Cabañas", texto: "Arquitectura blanca y madera junto a la ciénaga.", href: "/cabanas", foto: "/images/san-benito/cabana-atardecer-piscina.webp" },
        { titulo: "Actividades", texto: "La basílica, la ciénaga y el río San Jorge a pocos minutos.", href: "/servicios#actividades", foto: "/images/san-benito/canoa-cienaga-amanecer.webp" },
        { titulo: "Servicios", texto: "Piscina y sombra para que la calma continúe.", href: "/servicios", foto: "/images/san-benito/cabanas-piscina.webp" },
      ],
      banda: "Una mesa sin prisa te espera en Gardners Hills.",
    },
    en: {
      kicker: "Food & Bar", titulo: ["The taste", "of river and savannah"], espacios: "Spaces",
      altIntro: "Breakfast served by the pool at Gardners Hills",
      carta: "View menu", consultar: "Ask on WhatsApp", msg: (e: string) => `Hello, I would like information about the Gardners Hills ${e}.`,
      msgCarta: (e: string) => `Hello, could you share the menu of the Gardners Hills ${e}?`,
      mas: ["Beyond", "the table"],
      tarjetas: [
        { titulo: "Cabins", texto: "White architecture and wood by the wetland.", href: "/cabanas", foto: "/images/san-benito/cabana-atardecer-piscina.webp" },
        { titulo: "Activities", texto: "The basilica, the wetland and the San Jorge River a few minutes away.", href: "/servicios#actividades", foto: "/images/san-benito/canoa-cienaga-amanecer.webp" },
        { titulo: "Services", texto: "A pool and shade so the calm carries on.", href: "/servicios", foto: "/images/san-benito/cabanas-piscina.webp" },
      ],
      banda: "An unhurried table awaits you at Gardners Hills.",
    },
  }[lang];
  const wa = (e: string) => `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(t.msg(e))}`;
  // Carta: PDF/URL si existe; mientras tanto se pide por WhatsApp (pendiente en PENDIENTES.md)
  const carta = (e: Espacio) => e.carta ?? `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(t.msgCarta(e.titulo[lang].toLowerCase()))}`;

  return (
    <>
      <MotionController />
      <main>
        {/* Portada: rótulo + título en cursiva centrado */}
        <section data-header-light className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-granate px-[var(--gutter)] text-center text-marfil">
          <div>
            <p data-reveal className="text-[0.92rem] font-normal uppercase tracking-[0.3em] text-marfil">
              {t.kicker}
            </p>
            <Lines as="h1" className="t-hero t-italic mt-8 text-[clamp(3.2rem,10vw,10.5rem)] leading-[0.92]" lines={t.titulo} />
          </div>
        </section>

        {/* Intro: imagen a la izquierda, texto a la derecha */}
        <section className="grid gap-12 px-[var(--gutter)] py-28 sm:py-36 lg:grid-cols-12 lg:items-center">
          <Arch src="/images/san-benito/desayuno-flotante.webp" alt={t.altIntro} className="aspect-[4/5] w-full lg:col-span-5" sizes="(min-width: 1024px) 40vw, 100vw" />
          <p data-reveal className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.3vw,3.4rem)] leading-[1.15] text-granate lg:col-span-6 lg:col-start-7">
            {gastronomiaIntro[lang]}
          </p>
        </section>

        <section className="px-[var(--gutter)] pb-28 text-center sm:pb-36">
          <Lines as="p" className="t-recto mx-auto max-w-5xl font-[family-name:var(--font-display)] text-[clamp(2rem,4.2vw,4.4rem)] leading-[1.05] text-granate" lines={[gastronomiaFrase[lang]]} />
        </section>

        {/* Espacios */}
        <section aria-label={t.espacios} className="space-y-28 px-[var(--gutter)] pb-28 sm:space-y-36 sm:pb-36">
          {espacios.map((e) => (
            <article key={e.id} id={e.id} className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <Arch src={e.foto} alt={`${e.titulo[lang]} · Gardners Hills`} className="aspect-[4/5] w-full lg:col-span-5" sizes="(min-width: 1024px) 40vw, 100vw" />
              <div className="lg:col-span-6 lg:col-start-7">
                <Lines as="h2" className="t-recto font-[family-name:var(--font-display)] text-[clamp(2.6rem,5vw,5.2rem)] leading-[1] text-granate" lines={[e.titulo[lang]]} />
                <p data-reveal className="mt-8 max-w-md text-granate">{e.texto[lang]}</p>
                {e.detalles.length > 0 && (
                  <ul data-reveal className="mt-8 space-y-3 text-granate">
                    {e.detalles.map((d) => (
                      <li key={d.texto.es} className="flex items-center gap-4">
                        <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
                          {iconos[d.icono]}
                        </svg>
                        {d.texto[lang]}
                      </li>
                    ))}
                  </ul>
                )}
                <div data-reveal className="mt-10 flex flex-wrap gap-4">
                  <Pill href={carta(e)} tone="solid" target="_blank" rel="noreferrer">{t.carta}</Pill>
                  <Pill href={wa(e.titulo[lang].toLowerCase())} target="_blank" rel="noreferrer">
                    {t.consultar}
                  </Pill>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Más allá de la mesa */}
        <section className="border-t border-granate/15 px-[var(--gutter)] py-28 sm:py-36">
          <Lines as="h2" className="t-recto font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.8vw,4.8rem)] leading-[1.02] text-granate" lines={[<>{t.mas[0]} <span key="i" className="t-italic">{t.mas[1]}</span></>]} />
          <ul className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-3">
            {t.tarjetas.map((m) => (
              <li key={m.href}>
                <L href={m.href} className="group block" data-cursor>
                  <Arch shape="pill" src={m.foto} alt={m.titulo} className="aspect-[4/5] w-full" sizes="(min-width: 768px) 32vw, 100vw" hoverZoom />
                  <h3 className="mt-7 border-b border-granate/20 pb-3 t-italic text-[2.6rem] leading-none text-granate transition-colors group-hover:text-carmesi">{m.titulo}</h3>
                  <p data-reveal className="mt-4 text-granate">{m.texto}</p>
                </L>
              </li>
            ))}
          </ul>
        </section>

        <ReservaBanda lang={lang} texto={t.banda} />
      </main>
    </>
  );
}
