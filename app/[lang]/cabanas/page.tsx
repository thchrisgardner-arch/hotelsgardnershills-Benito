import type { Metadata } from "next";
import { Suspense } from "react";
import { MotionController } from "@/components/layout/MotionController";
import { PageHero } from "@/components/layout/PageHero";
import { Cabanas } from "@/components/sections/Cabanas";
import { ReservaBanda } from "@/components/sections/ReservaBanda";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  const m = meta(lang, "/cabanas", {
    es: { title: "Cabañas · Gardners Hills San Benito Abad", description: "8 cabañas Refugio y Premium de arquitectura blanca y madera, con aire acondicionado y piscina, junto a la ciénaga en San Benito Abad, Sucre." },
    en: { title: "Cabins · Gardners Hills San Benito Abad", description: "8 Refugio and Premium cabins of white architecture and wood, with air conditioning and a pool, by the wetland in San Benito Abad, Sucre." },
  });
  // Título completo sin la plantilla «· Gardners Hills» del layout
  return { ...m, title: { absolute: m.title as string } };
}

export default async function CabanasPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = {
    es: { kicker: "Bienvenidos", alt: "Cabaña de Gardners Hills con ventanal en arco", banda: "Elige tus fechas y reserva tu cabaña." },
    en: { kicker: "Welcome", alt: "Gardners Hills cabin with an arched window", banda: "Choose your dates and book your cabin." },
  }[lang];
  return (
    <>
      <MotionController />
      <main>
        <PageHero titulo="Gardners Hills" kicker={t.kicker} foto="/images/cabanas/cabana-arco.jpg" alt={t.alt} />
        <Suspense>
          <Cabanas />
        </Suspense>
        <ReservaBanda lang={lang} texto={t.banda} />
      </main>
    </>
  );
}
