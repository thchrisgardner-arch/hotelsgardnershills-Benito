import type { Metadata } from "next";
import { MotionController } from "@/components/layout/MotionController";
import { PageHero } from "@/components/layout/PageHero";
import { Lines } from "@/components/ui/Lines";
import { Arch } from "@/components/ui/Arch";
import { Pill } from "@/components/ui/Pill";
import { Experiencias } from "@/components/sections/Experiencias";
import { ActividadesLista } from "@/components/sections/ActividadesLista";
import { ReservaBanda } from "@/components/sections/ReservaBanda";
import { servicios } from "@/data/servicios";
import { site } from "@/data/site";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return meta(lang, "/servicios", {
    es: { title: "Servicios", description: "Hotel, piscina y actividades cerca de Gardners Hills: la ciénaga, el río San Jorge y la Basílica del Señor de los Milagros en San Benito Abad, Sucre." },
    en: { title: "Services", description: "Hotel, pool and nearby activities at Gardners Hills: the wetland, the San Jorge River and the Basilica of the Lord of Miracles in San Benito Abad, Sucre." },
  });
}

/** Servicios: intro, tarjetas, actividades, banda en píldora y experiencias */
export default async function ServiciosPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = {
    es: {
      titulo: "Servicios", alt: "Jardín de Gardners Hills",
      l1: "Descubre nuestros servicios", l2a: "en",
      p: "Todo lo que necesitas para que la calma continúe más allá de la cabaña. Escríbenos y te ayudamos a preparar tu estancia.",
      cta: "Reservar ahora", altServ: "Espacio de",
      banda1: "Diseña", banda2: "tu experiencia",
      bandaP: "Cuéntanos qué buscas —descanso, celebración o desconexión— y preparamos tu estancia contigo.",
      wa: "Escríbenos por WhatsApp", waMsg: "Hola, Gardners Hills. Quiero diseñar mi experiencia.",
    },
    en: {
      titulo: "Services", alt: "Garden at Gardners Hills",
      l1: "Discover our services", l2a: "at",
      p: "Everything you need so the calm continues beyond the cabin. Write to us and we will help you plan your stay.",
      cta: "Book now", altServ: "Area:",
      banda1: "Design", banda2: "your experience",
      bandaP: "Tell us what you are looking for — rest, celebration or disconnection — and we will plan your stay with you.",
      wa: "Message us on WhatsApp", waMsg: "Hello, Gardners Hills. I would like to design my experience.",
    },
  }[lang];
  return (
    <>
      <MotionController />
      <main>
        <PageHero titulo={t.titulo} kicker={lang === "es" ? "Hotel · Piscina · Ciénaga · Basílica" : "Hotel · Pool · Wetland · Basilica"} foto="/images/cabanas/cabanas-jardin.jpg" alt={t.alt} />

        {/* Intro */}
        <section className="px-[var(--gutter)] py-28 sm:py-36">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <Lines
              as="h2"
              className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.8vw,4.8rem)] leading-[1.02] text-granate"
              lines={[t.l1, <>{t.l2a} <span key="i" className="t-italic">Gardners Hills</span></>]}
            />
            <div className="lg:justify-self-end">
              <p data-reveal className="max-w-md text-granate">
                {t.p}
              </p>
              <div data-reveal className="mt-8">
                <Pill href="/reservas">{t.cta}</Pill>
              </div>
            </div>
          </div>

          <ul className="mt-20 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map((s) => (
              <li key={s.id} id={s.id} className="flex flex-col">
                <Arch src={s.foto} alt={`${t.altServ} ${s.titulo[lang]} · Gardners Hills`} className="aspect-[3/4] w-full" sizes="(min-width: 768px) 32vw, 100vw" />
                <h3 className="mt-7 flex flex-col items-start gap-2 text-granate">
                  <span className="text-[0.875rem] font-normal uppercase tracking-[0.24em]">Hills</span>
                  <span className="t-italic text-[2.6rem] leading-none">{s.titulo[lang]}</span>
                </h3>
                <p data-reveal className="mt-4 text-granate">{s.texto[lang]}</p>
              </li>
            ))}
          </ul>
        </section>

        <ActividadesLista lang={lang} />

        {/* Banda en píldora */}
        <section className="px-[var(--gutter)] pb-28 sm:pb-36">
          <div className="mx-auto flex min-h-[340px] max-w-6xl flex-col items-center justify-center rounded-[3rem] border border-granate/30 px-6 py-14 text-center sm:rounded-full sm:px-10 sm:py-16">
            <Lines
              as="p"
              className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,5rem)] leading-none text-granate"
              lines={[<><span key="i" className="t-italic">{t.banda1}</span> {t.banda2}</>]}
            />
            <p data-reveal className="mt-6 max-w-lg text-granate">
              {t.bandaP}
            </p>
            <div data-reveal className="mt-8">
              <Pill href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(t.waMsg)}`} target="_blank" rel="noreferrer">
                {t.wa}
              </Pill>
            </div>
          </div>
        </section>

        <Experiencias lang={lang} />
        <ReservaBanda lang={lang} />
      </main>
    </>
  );
}
