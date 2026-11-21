import type { Metadata, Viewport } from "next";
/*
 * Fuentes autoalojadas (paquetes @fontsource): no dependen de Google Fonts al compilar,
 * que es lo que rompía el build en Vercel ("An error occurred in next/font").
 * - Instrument Serif: provisional hasta recibir Palo Compressed Medium (AUDITORIA-FASE-1.md §4)
 * - Inter: respaldo para equipos sin Helvetica Neue
 */
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource-variable/inter/wght.css";
import "../globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/navigation/Header";
import { MobileBookBar } from "@/components/navigation/MobileBookBar";
import { Footer } from "@/components/layout/Footer";
import { BookingBar } from "@/components/booking/BookingBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { CursorSello } from "@/components/ui/CursorSello";
import { LangProvider } from "@/lib/i18n";
import { JsonLd } from "@/components/layout/JsonLd";
import { getLang, type LangParams } from "@/lib/lang";
import { alternativos, LANGS } from "@/lib/routes";

/** Layout raíz por idioma: /… (es) y /en/… (en). El <html lang> sale de la URL. */
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export const dynamicParams = false;

const TXT = {
  es: {
    title: "Gardners Hills · Hotel de cabañas en San Benito Abad, Sucre",
    description: "Cabañas con piscina y aire acondicionado junto a la ciénaga, a pocos minutos de la Basílica del Señor de los Milagros en San Benito Abad, Sucre.",
    og: "Gardners Hills · Un refugio en la naturaleza",
    keywords: ["hotel en San Benito Abad", "cabañas en San Benito Abad Sucre", "hospedaje cerca de la Basílica del Señor de los Milagros", "cabañas con piscina en Sucre", "escapadas desde Sincelejo"],
  },
  en: {
    title: "Gardners Hills · Cabin hotel in San Benito Abad, Sucre",
    description: "Cabins with a pool and air conditioning by the wetland, a few minutes from the Basilica of the Lord of Miracles in San Benito Abad, Sucre, Colombia.",
    og: "Gardners Hills · A refuge in nature",
    keywords: ["hotel San Benito Abad", "cabins San Benito Abad Sucre", "where to stay near the Basilica of the Lord of Miracles", "cabins with pool Sucre Colombia"],
  },
};

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  const t = TXT[lang];
  return {
    metadataBase: new URL(site.url),
    title: { default: t.title, template: "%s · Gardners Hills" },
    description: t.description,
    keywords: t.keywords,
    openGraph: { type: "website", locale: lang === "es" ? "es_CO" : "en_US", siteName: "Gardners Hills", title: t.og, description: t.description },
    alternates: alternativos("/", lang),
  };
}

export const viewport: Viewport = {
  themeColor: "#100f0e",
};

export default async function RootLayout({ children, params }: LangParams & { children: React.ReactNode }) {
  const lang = await getLang(params);
  return (
    <html lang={lang}>
      <body>
        <LangProvider lang={lang}>
          <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-crema focus:p-3">
            {lang === "es" ? "Saltar al contenido" : "Skip to content"}
          </a>
          <Header />
          {/* Efecto «cortina» (referencia Grand Hotel Miramare): en escritorio el contenido pasa por encima
              y al final se desliza dejando ver el footer, que queda fijo detrás (ver Footer: sticky bottom-0) */}
          <div id="contenido" className="relative z-10 bg-crema lg:border-b lg:border-granate/10">
            {children}
          </div>
          <Footer />
          <MobileBookBar />
          <BookingBar />
          <WhatsAppButton />
          <CookieBanner />
          <CursorSello />
          <JsonLd lang={lang} />
        </LangProvider>
      </body>
    </html>
  );
}
