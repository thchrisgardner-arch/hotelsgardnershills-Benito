"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categoriasL, cabanasDe, totalCabanas, type CategoriaSlug } from "@/data/cabanas";
import { Lines } from "@/components/ui/Lines";
import { Arch } from "@/components/ui/Arch";
import { CabanaCard } from "@/components/rooms/CabanaCard";
import { FiltroCategorias } from "@/components/rooms/FiltroCategorias";
import { useLang } from "@/lib/i18n";

/**
 * Cabañas: introducción centrada, tríptico de imágenes y fichas por categoría.
 * Filtros Todas / Refugio / Premium (los mismos de /reservas); ?categoria=… los preselecciona.
 */
export function Cabanas() {
  const { lang } = useLang();
  const params = useSearchParams();
  const inicial = params.get("categoria");
  const [filtro, setFiltro] = useState<CategoriaSlug | "todas">(inicial === "refugio" || inicial === "premium" ? inicial : "todas");
  useEffect(() => {
    if (inicial === "refugio" || inicial === "premium") setFiltro(inicial);
  }, [inicial]);

  const t = {
    es: {
      k: "Cabañas",
      l1: "Un refugio propio",
      l2: "junto a la ciénaga",
      lema: "Abre el ventanal y deja que la luz y la brisa del agua entren contigo.",
      p: `${totalCabanas} cabañas en dos categorías, Refugio y Premium, de arquitectura blanca y madera, todas con aire acondicionado. Un diseño minimalista y funcional que dialoga con el entorno.`,
      a: ["Pasillo cubierto entre las cabañas", "Cabaña con ventanal en arco junto a la piscina al atardecer", "Duchas exteriores junto a la piscina"],
    },
    en: {
      k: "Cabins",
      l1: "A refuge of your own",
      l2: "by the wetland",
      lema: "Open the window and let the light and the breeze off the water come in with you.",
      p: `${totalCabanas} cabins in two categories, Refugio and Premium, of white architecture and wood, all with air conditioning. A minimalist, functional design that converses with its surroundings.`,
      a: ["Covered walkway between the cabins", "Cabin with an arched window by the pool at sunset", "Outdoor showers by the pool"],
    },
  }[lang];
  const cats = categoriasL(lang).filter((c) => filtro === "todas" || c.slug === filtro);

  return (
    <section id="cabanas" aria-labelledby="cabanas-title" className="border-t border-granate/15 py-28 sm:py-36">
      {/* Introducción */}
      <div className="px-[var(--gutter)] text-center">
        <p data-reveal className="text-[0.875rem] font-normal uppercase tracking-[0.24em] text-carmesi">
          {t.k}
        </p>
        <Lines id="cabanas-title" className="t-recto t-italic mx-auto mt-6 max-w-4xl text-[clamp(2.6rem,6vw,6.2rem)] leading-[0.98] text-carmesi" lines={[t.l1, t.l2]} />
        <p data-reveal className="mx-auto mt-10 max-w-md text-[1.02rem] font-normal uppercase leading-[1.5] tracking-[0.12em] text-granate">
          {t.lema}
        </p>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-granate">
          {t.p}
        </p>
      </div>

      {/* Tríptico alineado */}
      <div className="mt-20 grid grid-cols-[1fr_1.45fr_1fr] gap-3 px-[var(--gutter)] sm:gap-6">
        <Arch src="/images/san-benito/pasillo-cubierto.webp" alt={t.a[0]} className="h-[clamp(12rem,34vw,36rem)] w-full" sizes="25vw" />
        <Arch src="/images/san-benito/cabana-atardecer-piscina.webp" alt={t.a[1]} className="h-[clamp(12rem,34vw,36rem)] w-full" sizes="40vw" />
        <Arch src="/images/san-benito/duchas-exteriores.webp" alt={t.a[2]} className="h-[clamp(12rem,34vw,36rem)] w-full" sizes="25vw" />
      </div>

      {/* Filtros */}
      <div id="listado" className="mt-24 flex scroll-mt-28 justify-center px-[var(--gutter)]">
        <FiltroCategorias valor={filtro} onChange={setFiltro} />
      </div>

      {/* Fichas por categoría */}
      {cats.map((cat) => (
        <div key={cat.slug} id={cat.slug} className="mt-16 scroll-mt-28 px-[var(--gutter)] sm:mt-20">
          <div className="mb-14 grid gap-6 border-b border-granate/15 pb-6 lg:grid-cols-2 lg:items-end">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,3.6vw,3.6rem)] leading-none text-carmesi">{cat.nombre}</h2>
            <p className="max-w-md text-granate lg:justify-self-end lg:text-right">{cat.intro}</p>
          </div>
          <ul className="grid gap-x-8 gap-y-20 lg:grid-cols-2">
            {cabanasDe(cat.slug, lang).map((c) => (
              <li key={c.slug}>
                <CabanaCard cabana={c} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
