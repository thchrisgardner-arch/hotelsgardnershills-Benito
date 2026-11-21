"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";

/**
 * Mapa embebido dentro del marco + pestañas de rutas (carro, avión, bus). Sede San Benito Abad, Sucre.
 * TODO PENDIENTE: coordenadas de la sede (data/site.ts → location.mapsUrl). Mientras tanto el mapa apunta al pueblo.
 */
type Modo = "carro" | "avion" | "bus";

const RUTAS: Record<Modo, { es: { titulo: string; pasos: string[] }; en: { titulo: string; pasos: string[] } }> = {
  carro: {
    // TODO PENDIENTE: tiempo real de viaje desde Sincelejo
    es: {
      titulo: "En carro",
      pasos: [
        "Desde Sincelejo, 51 km por carretera.",
        "Desde Cartagena, Montería o Barranquilla, primero hasta Sincelejo.",
        "Al llegar a San Benito Abad te compartimos por WhatsApp la ubicación exacta y las indicaciones finales.",
      ],
    },
    en: {
      titulo: "By car",
      pasos: [
        "From Sincelejo, 51 km by road.",
        "From Cartagena, Montería or Barranquilla, first head to Sincelejo.",
        "When you reach San Benito Abad we will share the exact location and final directions on WhatsApp.",
      ],
    },
  },
  avion: {
    es: {
      titulo: "En avión",
      pasos: [
        "Aeropuerto Las Brujas, en Corozal, que sirve a Sincelejo.",
        "Desde allí, por carretera hasta San Benito Abad.",
      ],
    },
    en: {
      titulo: "By plane",
      pasos: [
        "Las Brujas airport in Corozal, which serves Sincelejo.",
        "From there, by road to San Benito Abad.",
      ],
    },
  },
  bus: {
    // TODO PENDIENTE: empresas y horarios de bus
    es: {
      titulo: "En bus",
      pasos: [
        "Terminal de Sincelejo y conexión hasta San Benito Abad.",
        "Avísanos tu hora de llegada y te indicamos cómo llegar desde el pueblo hasta las cabañas.",
      ],
    },
    en: {
      titulo: "By bus",
      pasos: [
        "Sincelejo bus terminal and a connection to San Benito Abad.",
        "Let us know your arrival time and we will tell you how to get from the town to the cabins.",
      ],
    },
  },
};

export function RutasMapa({ mapsUrl }: { mapsUrl?: string | null }) {
  const { lang } = useLang();
  const [modo, setModo] = useState<Modo>("carro");
  const t = {
    es: { tabs: "Cómo llegar", mapa: "Mapa de San Benito Abad, Sucre", abrir: "Abrir en Google Maps", ejemplo: "Rutas de ejemplo · verificar con el hotel", lluvias: "En temporada de lluvias, consúltanos el estado de la vía antes de viajar." },
    en: { tabs: "How to get here", mapa: "Map of San Benito Abad, Sucre", abrir: "Open in Google Maps", ejemplo: "Sample routes · to be confirmed by the hotel", lluvias: "In the rainy season, ask us about road conditions before you travel." },
  }[lang];
  const q = encodeURIComponent("San Benito Abad, Sucre, Colombia");
  const embed = `https://maps.google.com/maps?q=${q}&z=13&hl=${lang}&output=embed`;
  const abrir = mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${q}`;
  const ruta = RUTAS[modo][lang];

  return (
    <div className="space-y-8">
      {/* Mapa embebido dentro del marco en píldora */}
      <div className="relative h-[320px] overflow-hidden rounded-[999px] border border-granate/30 bg-marfil/40 sm:h-[360px]">
        <iframe
          title={t.mapa}
          src={embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale"
        />
      </div>
      <a href={abrir} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-[0.92rem] uppercase tracking-[0.2em] text-granate underline-offset-4 hover:underline">
        {t.abrir} →
      </a>

      {/* Pestañas de rutas */}
      <div>
        <div role="tablist" aria-label={t.tabs} className="flex flex-wrap gap-x-8 gap-y-2">
          {(Object.keys(RUTAS) as Modo[]).map((m) => (
            <button
              key={m}
              id={`tab-ruta-${m}`}
              role="tab"
              type="button"
              aria-selected={modo === m}
              aria-controls="panel-ruta"
              onClick={() => setModo(m)}
              className={`relative min-h-11 text-[0.92rem] uppercase tracking-[0.2em] transition-colors ${modo === m ? "text-carmesi" : "text-granate/70 hover:text-granate"}`}
            >
              {RUTAS[m][lang].titulo}
              <span className={`absolute -bottom-px left-0 h-px w-full origin-left bg-carmesi transition-transform duration-500 ${modo === m ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          ))}
        </div>
        <div id="panel-ruta" role="tabpanel" aria-labelledby={`tab-ruta-${modo}`} className="mt-6">
          <ol className="space-y-3 text-granate">
            {ruta.pasos.map((p, i) => (
              <li key={p} className="flex gap-4">
                <span aria-hidden className="font-[family-name:var(--font-display)] text-[1.4rem] leading-none text-carmesi">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-granate">{t.lluvias}</p>
          <p className="mt-6 inline-block border border-granate px-3 py-1 text-[0.875rem] uppercase tracking-[0.16em] text-granate">{t.ejemplo}</p>
        </div>
      </div>
    </div>
  );
}
