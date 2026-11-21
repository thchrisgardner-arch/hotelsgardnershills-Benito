import { Arch } from "@/components/ui/Arch";
import { Lines } from "@/components/ui/Lines";
import type { Lang } from "@/lib/routes";

/** «Descubre un destino donde la calma y la naturaleza se encuentran» con dos imágenes alineadas */
export function Destino({ lang }: { lang: Lang }) {
  const t = {
    es: {
      l1: <>Descubre <span key="a" className="text-carmesi">un destino</span></>,
      l2: "donde la calma y la naturaleza",
      l3: "se encuentran.",
      p: "Gardners Hills nació con la idea de ofrecer un refugio íntimo en la naturaleza, donde la serenidad del entorno se combina con un diseño moderno y funcional. Nuestras cabañas miran a la ciénaga en San Benito Abad, Sucre, a pocos minutos de la basílica.",
      a1: "Fachada blanca con ventanal en arco de una cabaña de Gardners Hills",
      a2: "Fila de cabañas de Gardners Hills frente a la piscina",
    },
    en: {
      l1: <>Discover <span key="a" className="text-carmesi">a destination</span></>,
      l2: "where calm and nature",
      l3: "come together.",
      p: "Gardners Hills was born from the idea of offering an intimate refuge in nature, where the serenity of the surroundings meets modern, functional design. Our cabins look out over the wetland in San Benito Abad, Sucre, a few minutes from the basilica.",
      a1: "White façade with an arched window of a Gardners Hills cabin",
      a2: "Row of Gardners Hills cabins facing the pool",
    },
  }[lang];
  return (
    <section id="casa" aria-labelledby="casa-title" className="px-[var(--gutter)] py-28 text-center sm:py-36">
      <Lines
        id="casa-title"
        className="t-recto mx-auto max-w-5xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,4.6vw,4.6rem)] leading-[1.02] text-granate"
        lines={[t.l1, t.l2, <span key="b" className="t-italic">{t.l3}</span>]}
      />
      <p data-reveal className="mx-auto mt-10 max-w-2xl text-[1.2rem] leading-[1.4] text-granate">
        {t.p}
      </p>
      <div className="mt-20 grid gap-6 sm:mt-24 sm:grid-cols-2">
        <Arch src="/images/san-benito/recepcion-fachada.webp" alt={t.a1} className="aspect-[4/5] w-full" sizes="(min-width: 640px) 48vw, 100vw" />
        <Arch src="/images/san-benito/cabanas-piscina.webp" alt={t.a2} className="aspect-[4/5] w-full" sizes="(min-width: 640px) 48vw, 100vw" />
      </div>
    </section>
  );
}
