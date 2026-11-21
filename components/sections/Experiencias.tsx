import { experiencias } from "@/data/experiencias";
import { Lines } from "@/components/ui/Lines";
import { Arch } from "@/components/ui/Arch";
import { L } from "@/components/ui/L";
import type { Lang } from "@/lib/routes";

/** «El tiempo para disfrutar sin prisa»: fila de tarjetas alineadas; cada una enlaza a su página */
export function Experiencias({ lang }: { lang: Lang }) {
  const t = {
    es: { k: "Experiencias", l1: "El tiempo para", l2a: "disfrutar", l2b: "sin prisa.", mas: "Descubre más", alt: "Imagen de la experiencia" },
    en: { k: "Experiences", l1: "Time to enjoy", l2a: "life,", l2b: "unhurried.", mas: "Discover more", alt: "Image of the experience" },
  }[lang];
  return (
    <section id="experiencias" aria-labelledby="exp-title" className="px-[var(--gutter)] py-28 text-center sm:py-36">
      <p data-reveal className="text-[0.875rem] font-normal uppercase tracking-[0.24em] text-granate">
        {t.k}
      </p>
      <Lines
        id="exp-title"
        className="t-recto mx-auto mt-4 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.6vw,4.6rem)] leading-[1.02] text-granate"
        lines={[t.l1, <>{t.l2a} <span key="i" className="t-italic">{t.l2b}</span></>]}
      />

      <ul className="mt-20 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {experiencias.map((e) => (
          <li key={e.id}>
            <L href={e.href} className="group flex flex-col items-center" data-cursor>
              <Arch shape="circle" src={e.foto} alt={`${t.alt}: ${e.titulo[lang]}`} className="aspect-square w-full max-w-[260px]" hoverZoom />
              <h3 data-reveal className="mt-7 text-[0.92rem] font-normal uppercase tracking-[0.2em] text-granate">
                {e.titulo[lang]}
              </h3>
              <p data-reveal className="mt-3 max-w-[18rem] text-[1.2rem] leading-[1.4] text-granate">
                {e.texto[lang]}
              </p>
              <span className="mt-4 inline-flex min-h-11 items-center border-b border-transparent text-[0.875rem] uppercase tracking-[0.16em] text-granate transition-colors group-hover:border-granate">
                {t.mas} <span aria-hidden className="ml-2">→</span>
              </span>
            </L>
          </li>
        ))}
      </ul>
    </section>
  );
}
