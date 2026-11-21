import { Foto as Image } from "@/components/ui/Foto";
import { Lines } from "@/components/ui/Lines";
import type { Lang } from "@/lib/routes";

/** «Esencia — Un encuentro entre pasado y presente». Textos del manual. */
export function Esencia({ lang }: { lang: Lang }) {
  const t = {
    es: {
      k: "Esencia",
      l1: "Un encuentro entre",
      l2: "pasado y presente.",
      p1: "Antes de convertirse en un espacio de alojamiento exclusivo, el terreno donde hoy se encuentran las cabañas era la casa de los abuelos: un lugar lleno de recuerdos y tradición familiar. Esta transformación le otorgó un nuevo propósito, manteniendo viva la esencia de sus raíces.",
      p2a: "El nombre nace del apellido de Christopher Gardner, cuya historia inspiró la película",
      peli: "En busca de la felicidad",
      p2b: ": perseverancia, sueños y nuevos comienzos.",
      alt: "Jardín y cabañas de Gardners Hills",
    },
    en: {
      k: "Essence",
      l1: "Where the past",
      l2: "meets the present.",
      p1: "Before becoming an exclusive place to stay, the land where the cabins stand today was the grandparents’ home: a place full of memories and family tradition. This transformation gave it a new purpose while keeping the essence of its roots alive.",
      p2a: "The name comes from the surname of Christopher Gardner, whose story inspired the film",
      peli: "The Pursuit of Happyness",
      p2b: ": perseverance, dreams and new beginnings.",
      alt: "Garden and cabins at Gardners Hills",
    },
  }[lang];
  return (
    <section id="esencia" aria-labelledby="esencia-title" className="grid lg:grid-cols-2">
      <figure data-reveal-media className="relative min-h-[50vh] overflow-hidden bg-rosa lg:min-h-[90vh]">
        <div data-media-inner className="absolute inset-0">
          <Image src="/images/san-benito/cabanas-piscina.webp" alt={t.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </figure>
      <div className="flex flex-col justify-between gap-16 bg-granate px-[var(--gutter)] py-20 text-marfil sm:px-16 lg:py-24">
        <div>
          <p data-reveal className="text-[0.875rem] font-normal uppercase tracking-[0.24em] text-marfil">
            {t.k}
          </p>
          <Lines
            id="esencia-title"
            className="t-recto mt-5 font-[family-name:var(--font-display)] text-[clamp(2.4rem,4.4vw,4.6rem)] leading-[1]"
            lines={[t.l1, <span key="p" className="t-italic text-rosa">{t.l2}</span>]}
          />
        </div>
        <div className="max-w-lg space-y-6 text-[1.2rem] leading-[1.4] text-marfil">
          <p data-reveal>{t.p1}</p>
          <p data-reveal>
            {t.p2a} <em className="t-italic text-[1.15em]">{t.peli}</em>
            {t.p2b}
          </p>
        </div>
      </div>
    </section>
  );
}
