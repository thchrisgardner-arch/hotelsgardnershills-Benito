import { Foto as Image } from "@/components/ui/Foto";
import { Lines } from "@/components/ui/Lines";
import { MOSTRAR_FOTOS } from "@/lib/brand";
import type { Lang } from "@/lib/routes";

/** Imagen a sangre «Un refugio privado — Inmerso en la naturaleza» */
export function Refugio({ lang }: { lang: Lang }) {
  const t = {
    es: { k: "Un refugio privado", l1: "Inmerso en", l2: "la naturaleza", p: "Cierra los ojos, escucha el agua, siente la brisa de la ciénaga. Aquí, la vida se experimenta a otro ritmo.", alt: "Cabañas de Gardners Hills al caer la tarde" },
    en: { k: "A private refuge", l1: "Immersed", l2: "in nature", p: "Close your eyes, listen to the water, feel the breeze off the wetland. Here, life is lived at a different pace.", alt: "Gardners Hills cabins as the afternoon falls" },
  }[lang];
  return (
    <section
      id="entorno"
      aria-labelledby="entorno-title"
      className={`relative h-[90vh] min-h-[560px] overflow-hidden ${MOSTRAR_FOTOS ? "text-marfil" : "bg-rosa text-granate"}`}
    >
      <div data-parallax="0.08" className="absolute inset-[-8%_0]">
        {/* TODO PENDIENTE: reemplazar por foto de ciénaga o piscina (la actual muestra montaña) */}
        <Image src="/images/cabanas/cabanas-sierra.jpg" alt={t.alt} fill sizes="100vw" className="object-cover" />
      </div>
      {MOSTRAR_FOTOS && <div aria-hidden className="absolute inset-0 bg-black/40" />}
      <div className="relative flex h-full flex-col items-center justify-between px-[var(--gutter)] py-20 text-center">
        <div>
          <p data-reveal className="text-[0.875rem] font-normal uppercase tracking-[0.3em]">
            {t.k}
          </p>
          <Lines id="entorno-title" className="t-italic mt-3 text-[clamp(2.8rem,6.4vw,6.4rem)] leading-none" lines={[t.l1, t.l2]} />
        </div>
        <p data-reveal className="max-w-2xl text-[1.2rem] leading-[1.4]">
          {t.p}
        </p>
      </div>
    </section>
  );
}
