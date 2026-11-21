import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { cookies, ACTUALIZADO } from "@/data/legales";
import { cookiesEn, UPDATED } from "@/data/legales-en";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return meta(lang, "/cookies", {
    es: { title: "Política de cookies", description: "Política de cookies de Gardners Hills, hotel de cabañas en San Benito Abad, Sucre." },
    en: { title: "Cookie policy", description: "Cookie policy of Gardners Hills, cabin hotel in San Benito Abad, Sucre." },
  });
}

export default async function Page({ params }: LangParams) {
  const lang = await getLang(params);
  const d = lang === "es" ? cookies : cookiesEn;
  return (
    <LegalPage
      lang={lang}
      titulo={lang === "es" ? "Cookies" : "Cookies"}
      ruta="/cookies"
      actualizado={lang === "es" ? ACTUALIZADO : UPDATED}
      intro={d.intro}
      secciones={d.secciones}
    />
  );
}
