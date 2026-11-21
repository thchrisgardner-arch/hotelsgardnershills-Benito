import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { privacidad, ACTUALIZADO } from "@/data/legales";
import { privacy, UPDATED } from "@/data/legales-en";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return meta(lang, "/privacidad", {
    es: { title: "Política de privacidad", description: "Política de privacidad de Gardners Hills, hotel de cabañas en San Benito Abad, Sucre." },
    en: { title: "Privacy policy", description: "Privacy policy of Gardners Hills, cabin hotel in San Benito Abad, Sucre." },
  });
}

export default async function Page({ params }: LangParams) {
  const lang = await getLang(params);
  const d = lang === "es" ? privacidad : privacy;
  return (
    <LegalPage
      lang={lang}
      titulo={lang === "es" ? "Privacidad" : "Privacy"}
      ruta="/privacidad"
      actualizado={lang === "es" ? ACTUALIZADO : UPDATED}
      intro={d.intro}
      secciones={d.secciones}
    />
  );
}
