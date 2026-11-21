import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { MotionController } from "@/components/layout/MotionController";
import { Lines } from "@/components/ui/Lines";
import { Arch } from "@/components/ui/Arch";
import { Foto as Image } from "@/components/ui/Foto";
import { Pill } from "@/components/ui/Pill";
import { L } from "@/components/ui/L";
import { CabanaCard } from "@/components/rooms/CabanaCard";
import { Politicas } from "@/components/sections/Politicas";
import { cabanas, cabanasDe, getCabana, getCategoria, nombreCorto } from "@/data/cabanas";
import { cop, desde, getTarifa } from "@/data/tarifas";
import { esLang, localizar, LANGS, type Lang } from "@/lib/routes";
import { meta } from "@/lib/lang";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LANGS.flatMap((lang) => cabanas.map((c) => ({ lang, slug: c.slug })));
}

async function leer(params: Props["params"]) {
  const { lang, slug } = await params;
  if (!esLang(lang)) notFound();
  return { lang: lang as Lang, slug };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await leer(params);
  const es = getCabana(slug, "es");
  const en = getCabana(slug, "en");
  if (!es || !en) return {};
  return meta(lang, `/cabanas/${slug}`, {
    es: { title: es.nombre, description: `${es.nombre} en Gardners Hills, San Benito Abad, Sucre: ${es.area}, ${es.capacidad}, ${es.camas}. ${es.resumen}` },
    en: { title: `${nombreCorto(en)} cabin`, description: `${nombreCorto(en)} cabin at Gardners Hills, San Benito Abad, Sucre: ${en.area}, ${en.capacidad}, ${en.camas}. ${en.resumen}` },
  });
}

/** Elementos que van en la columna «En el baño» de las comodidades */
const DEL_BANO = /baño|ducha|tina|amenidades|batas|espejo|bath|shower|tub|amenities|robe|mirror/i;

const Icono = ({ d }: { d: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] shrink-0 text-granate" fill="none" stroke="currentColor" strokeWidth="1.3">
    {d}
  </svg>
);
const iconos = {
  area: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  personas: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-4 3.6-6 7-6s6.2 2 7 6" /></>,
  cama: <path d="M3 18v-6h18v6M3 15h18M5 12V8h14v4" />,
  precio: <><circle cx="12" cy="12" r="8.5" /><path d="M14.5 9.2c-.4-.8-1.3-1.2-2.5-1.2-1.5 0-2.5.7-2.5 1.8 0 2.6 5.2 1.3 5.2 4 0 1.1-1.1 1.9-2.7 1.9-1.3 0-2.3-.5-2.7-1.4M12 6.5v1.5m0 8v1.5" /></>,
  punto: <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />,
};

/**
 * Ficha de cada cabaña. Hero propio + estructura de la página de habitación de Grand Hotel Miramare:
 * barra de secciones centrada, frase grande, texto + datos, reserva, tríptico, comodidades,
 * políticas y «Otras cabañas». El botón Reservar lleva a /reservas con la cabaña ya elegida.
 */
export default async function CabanaPage({ params }: Props) {
  const { lang, slug } = await leer(params);
  if (slug === "medium" || slug === "refugio" || slug === "premium") redirect(localizar(`/cabanas?categoria=${slug === "medium" ? "refugio" : slug}#listado`, lang));
  const c = getCabana(slug, lang);
  if (!c) notFound();
  const categoria = getCategoria(c.categoria, lang);
  const otras = cabanasDe(c.categoria, lang).filter((o) => o.slug !== c.slug);
  const reservar = `/reservas?cabana=${c.slug}`;
  const tarifa = getTarifa(c.tarifa);

  const T = {
    es: {
      reservar: "Reservar esta cabaña",
      todas: "← Todas las cabañas",
      anclas: ["Descripción", "Galería", "Comodidades", "Políticas", "Otras cabañas"],
      verComodidades: "Ver todas las comodidades",
      desde: "Desde", noche: "noche",
      enCabana: "En la cabaña", enBano: "En el baño",
      otras: "Otras cabañas", verTodas: "Ver todas",
      foto: "foto", nav: "Secciones de la cabaña",
      tarifaNota: "Tarifa por noche, impuestos incluidos.",
    },
    en: {
      reservar: "Book this cabin",
      todas: "← All cabins",
      anclas: ["Description", "Gallery", "Amenities", "Policies", "Other cabins"],
      verComodidades: "See all amenities",
      desde: "From", noche: "night",
      enCabana: "In the cabin", enBano: "In the bathroom",
      otras: "Other cabins", verTodas: "See all",
      foto: "photo", nav: "Cabin sections",
      tarifaNota: "Nightly rate, taxes included.",
    },
  }[lang];

  // Frase grande = primera oración; el resto va como párrafo
  const corte = c.descripcion.indexOf(". ");
  const frase = corte > 0 ? c.descripcion.slice(0, corte + 1) : c.descripcion;
  const resto = corte > 0 ? c.descripcion.slice(corte + 2) : "";

  const datos: { icono: keyof typeof iconos; texto: string }[] = [
    { icono: "area", texto: c.area },
    { icono: "personas", texto: c.capacidad },
    { icono: "cama", texto: c.camas },
    { icono: "precio", texto: `${T.desde} ${cop(desde(c.tarifa))} / ${T.noche} · ${tarifa.nombre[lang]}` },
    ...c.instalaciones.map((t) => ({ icono: "punto" as const, texto: t })),
  ];
  const mitad = Math.ceil(datos.length / 2);
  const enCabana = c.servicios.filter((s) => !DEL_BANO.test(s));
  const enBano = c.servicios.filter((s) => DEL_BANO.test(s));
  const ids = ["descripcion", "galeria", "comodidades", "politicas", "otras"];

  return (
    <>
      <MotionController />
      <main>
        {/* Portada */}
        <section data-header-light className="relative overflow-hidden bg-granate text-marfil">
          {/* Foto de la cabaña de fondo con velo oscuro (solo si las fotos están activas) */}
          {c.fotos[0] && (
            <div aria-hidden className="absolute inset-0">
              <Image src={c.fotos[0]} alt="" fill sizes="100vw" priority className="object-cover" />
              <div className="absolute inset-0 bg-black/45" />
            </div>
          )}
          <div className="relative flex min-h-[86vh] flex-col items-center justify-center px-[var(--gutter)] pb-24 pt-[calc(var(--header-h)+4rem)] text-center">
            <p data-reveal className="text-[0.92rem] font-normal uppercase tracking-[0.3em] text-marfil">
              <L href={`/cabanas?categoria=${c.categoria}#listado`} className="inline-flex min-h-11 items-center hover:underline">
                {categoria.nombre}
              </L>
            </p>
            <Lines as="h1" className="t-hero t-italic mt-6 text-[clamp(3.2rem,10vw,10.5rem)] leading-[0.92]" lines={[nombreCorto(c)]} />
            <p data-reveal className="mt-10 text-marfil">{c.frase}</p>
            <div data-reveal className="mt-7">
              <Pill href={reservar} tone="marfil">{T.reservar}</Pill>
            </div>
          </div>
        </section>

        {/* Barra de secciones (centrada) */}
        <nav aria-label={T.nav} className="sticky top-[var(--header-h)] z-20 border-b border-granate/15 bg-crema/95 px-[var(--gutter)] backdrop-blur">
          <ul className="flex snap-x justify-start gap-8 overflow-x-auto py-1 text-center text-[0.875rem] uppercase tracking-[0.18em] text-granate [scrollbar-width:none] sm:justify-center lg:gap-12 [&::-webkit-scrollbar]:hidden">
            <li className="shrink-0 snap-start">
              <L href="/cabanas" className="inline-flex min-h-11 items-center transition-opacity hover:opacity-70">{T.todas}</L>
            </li>
            {ids.map((id, k) => (
              <li key={id} className="shrink-0 snap-start">
                <a href={`#${id}`} className="inline-flex min-h-11 items-center transition-opacity hover:opacity-70">{T.anclas[k]}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Descripción: frase grande centrada + texto y datos */}
        <section id="descripcion" className="scroll-mt-40 px-[var(--gutter)] py-24 sm:py-36">
          <Lines
            as="h2"
            className="mx-auto max-w-5xl text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,4.2rem)] leading-[1.08] text-granate"
            lines={[frase]}
          />
          <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-14">
            <div data-reveal className="space-y-5 text-granate">
              {resto ? <p>{resto}</p> : <p>{c.frase}</p>}
              <ul className="flex flex-wrap gap-3 pt-2">
                {c.destacados.map((d) => (
                  <li key={d} className="border border-granate/30 px-4 py-2 text-[0.875rem] uppercase tracking-[0.14em] text-granate">{d}</li>
                ))}
              </ul>
            </div>
            <div data-reveal className="grid gap-x-10 gap-y-4 self-start text-granate sm:grid-cols-2">
              {[datos.slice(0, mitad), datos.slice(mitad)].map((col, k) => (
                <ul key={k} className="space-y-4">
                  {col.map((d) => (
                    <li key={d.texto} className="flex items-center gap-3">
                      <Icono d={iconos[d.icono]} />
                      {d.texto}
                    </li>
                  ))}
                  {k === 1 && (
                    <li>
                      <a href="#comodidades" className="inline-flex min-h-11 items-center border-b border-granate/40 text-granate transition-colors hover:border-granate">
                        {T.verComodidades}
                      </a>
                    </li>
                  )}
                </ul>
              ))}
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-6xl text-[0.95rem] text-granate">{T.tarifaNota}</p>
          <div data-reveal className="mt-12 flex justify-center">
            <Pill href={reservar} tone="solid">{T.reservar}</Pill>
          </div>
        </section>

        {/* Galería: tríptico alineado */}
        <section id="galeria" aria-label={T.anclas[1]} className="scroll-mt-40 px-[var(--gutter)]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
            {c.fotos.map((f, k) => (
              <Arch key={f + k} src={f} alt={`${c.nombre}, ${T.foto} ${k + 1}`} className="aspect-[4/5] w-full" sizes="(min-width: 640px) 32vw, 100vw" />
            ))}
          </div>
        </section>

        {/* Comodidades en dos columnas */}
        <section id="comodidades" className="scroll-mt-40 px-[var(--gutter)] py-24 sm:py-36">
          <div className="mx-auto grid max-w-6xl gap-14 sm:grid-cols-2">
            {[
              { titulo: T.enCabana, items: enCabana },
              { titulo: T.enBano, items: enBano },
            ].map((g) => (
              <div key={g.titulo}>
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,2.8vw,2.8rem)] leading-none text-granate">{g.titulo}</h2>
                <ul data-reveal className="mt-8 space-y-3 text-granate">
                  {g.items.map((s) => (
                    <li key={s} className="flex items-center gap-3 border-b border-granate/10 pb-3">
                      <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-granate" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Políticas */}
        <Politicas lang={lang} className="border-t border-granate/15" />

        {/* Otras cabañas de la misma categoría */}
        <section id="otras" className="scroll-mt-40 border-t border-granate/15 px-[var(--gutter)] py-24 sm:py-36">
          <p data-reveal className="text-center text-[0.92rem] uppercase tracking-[0.3em] text-granate">{T.otras}</p>
          <h2 className="mt-4 text-center font-[family-name:var(--font-display)] text-[clamp(2.4rem,4.4vw,4.4rem)] leading-[1.02] text-granate">{categoria.nombre}</h2>
          <ul className="mt-16 grid gap-x-8 gap-y-20 lg:grid-cols-2">
            {otras.slice(0, 2).map((o) => (
              <li key={o.slug}>
                <CabanaCard cabana={o} />
              </li>
            ))}
          </ul>
          {otras.length > 2 && (
            <div className="mt-16 flex justify-center">
              <Pill href={`/cabanas?categoria=${c.categoria}#listado`}>{T.verTodas}</Pill>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
