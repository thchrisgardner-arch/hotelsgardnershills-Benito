import { Lines } from "@/components/ui/Lines";
import { Arch } from "@/components/ui/Arch";
import { Pill } from "@/components/ui/Pill";
import { actividades } from "@/data/actividades";
import type { Lang } from "@/lib/routes";

/** Actividades en los alrededores (dentro de Servicios) */
export function ActividadesLista({ lang }: { lang: Lang }) {
  const t = {
    es: { aria: "Actividades", l1: "Explora lo que", l2a: "te espera", l2b: "cerca", p: "San Benito Abad está a orillas de la ciénaga y del río San Jorge: fe, agua y vida de pueblo para descubrir sin prisa, y volver a la calma de la cabaña al final del día.", cta: "Reservar ahora" },
    en: { aria: "Activities", l1: "Explore what", l2a: "awaits you", l2b: "nearby", p: "San Benito Abad lies on the banks of the wetland and the San Jorge River: faith, water and small-town life to discover unhurried, then return to the calm of your cabin at the end of the day.", cta: "Book now" },
  }[lang];
  return (
    <section id="actividades" aria-label={t.aria} className="scroll-mt-24 border-t border-granate/15 px-[var(--gutter)] py-28 sm:py-36">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <Lines
          as="h2"
          className="t-recto font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.8vw,4.8rem)] leading-[1.02] text-granate"
          lines={[t.l1, <>{t.l2a} <span key="i" className="t-italic">{t.l2b}</span></>]}
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

      <ul className="mt-20 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {actividades.map((a, i) => (
          // id = ancla enlazada desde la portada; scroll-mt compensa la cabecera fija
          <li key={a.id} id={a.id} className="flex scroll-mt-[calc(var(--header-h)+1.5rem)] flex-col">
            <Arch src={a.foto} alt={a.titulo[lang]} className="aspect-[4/5] w-full" />
            <div data-reveal className="mt-7 flex items-baseline justify-between border-b border-granate/20 pb-3">
              <h3 className="font-[family-name:var(--font-display)] text-[2rem] leading-none text-granate">{a.titulo[lang]}</h3>
              <span className="text-[0.875rem] font-normal tracking-[0.18em] text-granate">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <p data-reveal className="mt-4 text-granate">{a.texto[lang]}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
