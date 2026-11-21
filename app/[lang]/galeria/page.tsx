import type { Metadata } from "next";
import { MotionController } from "@/components/layout/MotionController";
import { PageHero } from "@/components/layout/PageHero";
import { Gallery } from "@/components/gallery/Gallery";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Lines } from "@/components/ui/Lines";
import { ReservaBanda } from "@/components/sections/ReservaBanda";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return meta(lang, "/galeria", {
    es: { title: "Galería", description: "Fotografías de las cabañas y el entorno de Gardners Hills en San Benito Abad, Sucre." },
    en: { title: "Gallery", description: "Photos of the cabins and surroundings of Gardners Hills in San Benito Abad, Sucre." },
  });
}

/** Galería: carrusel + cuadrícula alineada con visor */
export default async function GaleriaPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = {
    es: { titulo: "Galería", kicker: "Cabañas · Entorno", h: <>Nuestra <span key="i" className="t-italic">galería</span></>, todas: "Todas las fotos" },
    en: { titulo: "Gallery", kicker: "Cabins · Surroundings", h: <>Our <span key="i" className="t-italic">gallery</span></>, todas: "All photos" },
  }[lang];
  return (
    <>
      <MotionController />
      <main>
        <PageHero titulo={t.titulo} kicker={t.kicker} foto="/images/san-benito/terraza-vista-cienaga.webp" />
        <section id="galeria" className="py-28 sm:py-36">
          <Lines as="h2" className="t-recto text-center font-[family-name:var(--font-display)] text-[clamp(2.4rem,5.4vw,5.4rem)] leading-none text-granate" lines={[t.h]} />
          <div className="mt-16">
            <Gallery />
          </div>
        </section>
        <section aria-label={t.todas} className="border-t border-granate/15 px-[var(--gutter)] py-28 sm:py-36">
          <GalleryGrid />
        </section>
        <ReservaBanda lang={lang} />
      </main>
    </>
  );
}
