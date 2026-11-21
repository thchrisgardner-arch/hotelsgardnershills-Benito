import { categoriasL, cabanasDe } from "@/data/cabanas";
import { Lines } from "@/components/ui/Lines";
import { Arch } from "@/components/ui/Arch";
import { Pill } from "@/components/ui/Pill";
import { L } from "@/components/ui/L";
import type { Lang } from "@/lib/routes";

/** Resumen de cabañas para la portada: solo las dos categorías; el detalle vive en /cabanas */
export function CabanasResumen({ lang }: { lang: Lang }) {
  const t = {
    es: { k: "Cabañas", l1: "Un refugio propio", l2: "junto a la ciénaga", p: "Arquitectura blanca y madera a orillas del agua, con piscina y aire acondicionado. Una invitación a detenerse, respirar y encontrar equilibrio.", cta: "Ver todas las cabañas", n: "cabañas", alt: "Cabañas de la categoría" },
    en: { k: "Cabins", l1: "A refuge of your own", l2: "by the wetland", p: "White architecture and wood by the water, with a pool and air conditioning. An invitation to pause, breathe and find balance.", cta: "See all cabins", n: "cabins", alt: "Cabins in the category" },
  }[lang];
  return (
    <section id="cabanas" aria-labelledby="cabanas-res-title" className="border-t border-granate/15 px-[var(--gutter)] py-28 sm:py-36">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <p data-reveal className="text-[0.875rem] font-normal uppercase tracking-[0.24em] text-carmesi">
            {t.k}
          </p>
          <Lines id="cabanas-res-title" className="t-recto t-italic mt-5 text-[clamp(2.6rem,5vw,5rem)] leading-[1] text-carmesi" lines={[t.l1, t.l2]} />
        </div>
        <div className="lg:justify-self-end lg:text-right">
          <p data-reveal className="max-w-md text-granate lg:ml-auto">
            {t.p}
          </p>
          <div data-reveal className="mt-8">
            <Pill href="/cabanas">{t.cta}</Pill>
          </div>
        </div>
      </div>

      <ul className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {categoriasL(lang).map((cat) => {
          const lista = cabanasDe(cat.slug, lang);
          return (
            <li key={cat.slug}>
              <L href={`/cabanas?categoria=${cat.slug}#listado`} className="group block" data-cursor>
                <Arch src={lista[0]?.fotos[0]} alt={`${t.alt} ${cat.nombre}`} className="aspect-[16/10] w-full" sizes="(min-width: 640px) 48vw, 100vw" hoverZoom />
                <div className="mt-7 flex items-baseline justify-between gap-6 border-b border-granate/20 pb-4">
                  <span className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,3vw,3rem)] leading-none text-carmesi">{cat.nombre}</span>
                  <span className="whitespace-nowrap text-[0.875rem] uppercase tracking-[0.18em] text-granate">
                    {lista.length} {t.n}
                    <span aria-hidden className="ml-3 inline-block text-granate transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </span>
                </div>
                <p className="mt-4 max-w-lg text-granate">{cat.intro}</p>
              </L>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
