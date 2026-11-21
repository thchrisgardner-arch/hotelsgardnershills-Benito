import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { terminos, ACTUALIZADO } from "@/data/legales";
import { terms, UPDATED } from "@/data/legales-en";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return meta(lang, "/terminos", {
    es: { title: "Términos y condiciones", description: "Términos y condiciones de Gardners Hills, hotel de cabañas en San Benito Abad, Sucre." },
    en: { title: "Terms and conditions", description: "Terms and conditions of Gardners Hills, cabin hotel in San Benito Abad, Sucre." },
  });
}

export default async function Page({ params }: LangParams) {
  const lang = await getLang(params);
  const d = lang === "es" ? terminos : terms;
  return (
    <LegalPage
      lang={lang}
      titulo={lang === "es" ? "Términos" : "Terms"}
      ruta="/terminos"
      actualizado={lang === "es" ? ACTUALIZADO : UPDATED}
      intro={d.intro}
      secciones={d.secciones}
    />
  );
}
