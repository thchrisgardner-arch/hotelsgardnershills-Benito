/**
 * Cabañas de Gardners Hills · sede San Benito Abad (Sucre): 8 en total, 4 Refugio y 4 Premium.
 * Nombres, slugs, capacidad y textos según el brief de la sede San Benito (2026-11-21).
 * Medidas, camas y precios se mantienen de la versión Villanueva (precios de ejemplo).
 * Los slugs viejos (Villanueva) redirigen a los nuevos en next.config.ts (slugsViejos).
 *
 * TODO PENDIENTE: confirmar con el cliente medidas, camas, capacidad y servicios de cada cabaña en la sede San Benito.
 * Fotos: fotografía de la sede San Benito (public/images/san-benito, 2026-11-21).
 */
import type { Lang } from "@/lib/routes";
import { MAQUETA, fotosCabana } from "@/lib/maqueta";

export type CategoriaSlug = "refugio" | "premium";

export type Categoria = { slug: CategoriaSlug; nombre: string; intro: string };
export type TarifaId = "basica" | "media" | "premium";

export type Cabana = {
  slug: string;
  nombre: string;
  categoria: CategoriaSlug;
  frase: string;
  descripcion: string;
  /** Versión corta (unas 3 líneas) para las tarjetas del listado */
  resumen: string;
  area: string;
  capacidad: string;
  /** Huéspedes máximos (para el buscador de reservas) */
  maxHuespedes: number;
  /** Tarifa que le corresponde (data/tarifas.ts): basica = Refugio, media = Refugio con jacuzzi, premium = Premium. Confirmado por el cliente 2026-11-20 */
  tarifa: TarifaId;
  camas: string;
  instalaciones: string[];
  destacados: string[];
  servicios: string[];
  fotos: string[];
};

export const categorias: Categoria[] = [
  {
    slug: "refugio",
    nombre: "Refugio",
    intro: "Comodidad y practicidad a la sombra: cama Queen, aire acondicionado, ducha tipo lluvia y todo lo necesario para descansar del calor.",
  },
  {
    slug: "premium",
    nombre: "Premium",
    intro: "Más espacio, patio privado y tina. Cabañas para 3 y 4 personas, pensadas también para venir en familia.",
  },
];

const F = (n: string) => `/images/san-benito/${n}.webp`;

const serviciosMedium = [
  "Wi-Fi",
  "Aire acondicionado",
  "Baño privado",
  "Ducha tipo lluvia",
  "Espejo de piso a techo",
  "Armario",
  "Amenidades de baño",
  "Ropa de cama de algodón",
];
const serviciosMediumPlus = [...serviciosMedium, "Terraza con jacuzzi", "Amenidades exclusivas Gardners Hills"];
const serviciosPremium = [
  ...serviciosMedium,
  "Patio privado",
  "Tina",
  "Amenidades exclusivas Gardners Hills",
  "Batas y pantuflas",
  "Smart TV",
];

export const cabanas: Cabana[] = [
  // ── Refugio ──
  {
    slug: "cienaga-de-machado",
    nombre: "Cabaña Ciénaga de Machado",
    categoria: "refugio",
    frase: "Comodidad y practicidad.",
    descripcion:
      "Perfecta para quienes buscan comodidad y practicidad. Con un diseño moderno y funcional, tiene cama Queen, aire acondicionado, ducha tipo lluvia, espejo de piso a techo y un armario práctico. Con 18–20 m² frescos y en calma, es el espacio ideal para descansar después de un día de sol.",
    resumen: "Moderna y funcional: cama Queen, ducha tipo lluvia y espejo de piso a techo. 18–20 m² frescos y en calma para el descanso perfecto.",
    area: "18–20 m²",
    capacidad: "2 personas",
    maxHuespedes: 2,
    tarifa: "basica",
    camas: "1 Queen",
    instalaciones: ["Aire acondicionado", "Espejo de piso a techo"],
    destacados: ["Aire acondicionado", "Espejo de piso a techo"],
    servicios: serviciosMedium,
    fotos: [F("cabana-atardecer-piscina"), F("nicho-velas"), F("ventanal-cortina")],
  },
  {
    slug: "punta-de-blanco",
    nombre: "Cabaña Punta de Blanco",
    categoria: "refugio",
    frase: "Lo esencial, en su justa medida.",
    descripcion:
      "Lo esencial, en su justa medida. Una cama Queen para descansar sin prisa, aire acondicionado, una ducha tipo lluvia para empezar el día, un espejo de piso a techo y un armario para dejarlo todo en su lugar. Con 18–20 m², es un refugio sencillo y acogedor para dos a orillas del agua.",
    resumen: "Un refugio sencillo y acogedor para dos: cama Queen, ducha tipo lluvia y todo en su lugar. 18–20 m² de calma a orillas del agua.",
    area: "18–20 m²",
    capacidad: "2 personas",
    maxHuespedes: 2,
    tarifa: "basica",
    camas: "1 Queen",
    instalaciones: ["Aire acondicionado", "Armario"],
    destacados: ["Aire acondicionado", "Armario"],
    servicios: serviciosMedium,
    fotos: [F("ventanal-arco-interior"), F("toalla-tumbona"), F("textura-palma")],
  },
  {
    slug: "dona-luisa",
    nombre: "Cabaña Doña Luisa",
    categoria: "refugio",
    frase: "Más espacio para tomártelo con calma.",
    descripcion:
      "Más espacio para instalarte y tomártelo con calma. Una cama Queen, aire acondicionado, una ducha tipo lluvia y una terraza tranquila para disfrutar de un café o ver caer el sol sobre la ciénaga. El jacuzzi de la terraza está ahí para lo que surja, y las amenidades exclusivas de Gardners Hills se encargan del resto. Con 22–24 m². Simple, fácil, justo lo que necesitas.",
    resumen: "Cama Queen y una terraza con jacuzzi para el café de la mañana o para ver caer el sol sobre la ciénaga.",
    area: "22–24 m²",
    capacidad: "2 personas",
    maxHuespedes: 2,
    tarifa: "media",
    camas: "1 Queen",
    instalaciones: ["Terraza", "Jacuzzi", "Aire acondicionado"],
    destacados: ["Terraza", "Jacuzzi", "Aire acondicionado"],
    servicios: serviciosMediumPlus,
    fotos: [F("vista-cabana-piscina"), F("bebida-piscina"), F("jarron-palma")],
  },
  {
    slug: "rio-san-jorge",
    nombre: "Cabaña Río San Jorge",
    categoria: "refugio",
    frase: "Más espacio, más experiencias.",
    descripcion:
      "Más espacio, más experiencias, más de todo lo que te encanta. Con 22–24 m², la cabaña Río San Jorge tiene cama Queen, aire acondicionado, un baño amplio con una ducha increíble, jacuzzi en la terraza, mucha luz natural gracias a sus ventanas y las amenidades exclusivas de Gardners Hills.",
    resumen: "Baño amplio, mucha luz natural y jacuzzi en la terraza. 22–24 m² con las amenidades exclusivas de Gardners Hills.",
    area: "22–24 m²",
    capacidad: "2 personas",
    maxHuespedes: 2,
    tarifa: "media",
    camas: "1 Queen",
    instalaciones: ["Terraza", "Jacuzzi", "Aire acondicionado"],
    destacados: ["Terraza", "Jacuzzi", "Aire acondicionado"],
    servicios: serviciosMediumPlus,
    fotos: [F("terraza-vista-cienaga"), F("duchas-exteriores"), F("agua-piscina")],
  },
  // ── Premium ──
  {
    slug: "tacasuan",
    nombre: "Cabaña Tacasuán",
    categoria: "premium",
    frase: "La casa del rey.",
    descripcion:
      "La casa del rey, ese lugar donde todos quieren estar. Más espacio, más sombra, más formas de relajarse. Tacasuán, con su patio privado y su tina, tiene todo lo que te encanta, solo o en familia.",
    resumen: "El lugar donde todos quieren estar: más espacio, sombra y un patio privado para relajarte a tu manera, solo o en familia.",
    area: "36 m² + patio",
    capacidad: "3 personas",
    maxHuespedes: 3,
    tarifa: "premium",
    camas: "1 King + sofá cama",
    instalaciones: ["Patio privado", "Tina", "Ideal en familia"],
    destacados: ["Patio privado", "Tina", "Ideal en familia"],
    servicios: serviciosPremium,
    fotos: [F("cabana-patio-tina-2"), F("pareja-piscina"), F("piscina-escalones")],
  },
  {
    slug: "brisa-de-la-mojana",
    nombre: "Cabaña Brisa de La Mojana",
    categoria: "premium",
    frase: "Para dejarse llevar por la brisa.",
    descripcion:
      "Para dejarse llevar por la brisa. Un espacio amplio y abierto, con patio privado para sentir la brisa del agua y dejar que las horas pasen sin prisa. Brisa de La Mojana es ideal para quienes quieren desconectarse sin renunciar a nada, en pareja o en familia.",
    resumen: "Amplia y abierta, con patio privado para sentir la brisa del agua mientras las horas pasan sin prisa.",
    area: "36 m² + patio",
    capacidad: "3 personas",
    maxHuespedes: 3,
    tarifa: "premium",
    camas: "1 King + sofá cama",
    instalaciones: ["Patio privado", "Tina", "Ideal en familia"],
    destacados: ["Patio privado", "Tina", "Ideal en familia"],
    servicios: serviciosPremium,
    fotos: [F("cabana-patio-tina"), F("lectura-piscina"), F("borde-piscina")],
  },
  {
    slug: "atardecer-en-jegua",
    nombre: "Cabaña Atardecer en Jegua",
    categoria: "premium",
    frase: "Un dúplex diseñado para sorprender.",
    descripcion:
      "Para quienes buscan el máximo espacio y comodidad, Atardecer en Jegua es un dúplex de dos niveles diseñado para sorprender, con el segundo piso abierto al atardecer y un patio privado con tina.",
    resumen: "Un dúplex de dos niveles para quienes buscan el máximo espacio, con el segundo piso abierto al atardecer.",
    area: "48 m² en dos niveles + patio",
    capacidad: "4 personas",
    maxHuespedes: 4,
    tarifa: "premium",
    camas: "1 King + 1 Queen",
    instalaciones: ["Dúplex", "Patio privado", "Tina"],
    destacados: ["Dúplex", "Patio privado", "Tina"],
    servicios: serviciosPremium,
    fotos: [F("duplex-escalera"), F("atardecer-terraza-copas"), F("cienaga-garzas-atardecer")],
  },
  {
    slug: "villa-de-san-benito",
    nombre: "Cabaña Villa de San Benito",
    categoria: "premium",
    frase: "La más grande y exclusiva.",
    descripcion:
      "La cabaña más grande y exclusiva de Gardners Hills, diseñada para quienes buscan privacidad y un descanso sin interrupciones. Con espacio para cuatro, patio privado y tina, es ideal para familias que vienen a la peregrinación.",
    resumen: "La cabaña más grande de Gardners Hills, pensada para la privacidad y el descanso sin interrupciones. Ideal para familias que vienen a la peregrinación.",
    area: "60 m² + patio",
    capacidad: "4 personas",
    maxHuespedes: 4,
    tarifa: "premium",
    camas: "1 King + 2 sencillas",
    instalaciones: ["Patio privado", "Tina", "Ideal en familia"],
    destacados: ["Patio privado", "Tina", "Ideal en familia"],
    servicios: serviciosPremium,
    fotos: [F("cabana-familiar-interior"), F("cocina-comedor"), F("vista-aerea")],
  },
];

/* ───────────── Inglés ─────────────
 * Los nombres propios de las cabañas no se traducen. */
type Trad = Pick<Cabana, "frase" | "descripcion" | "resumen" | "area" | "capacidad" | "camas" | "instalaciones" | "destacados" | "servicios">;

const T: Record<string, string> = {
  "Wi-Fi": "Wi-Fi",
  "Aire acondicionado": "Air conditioning",
  "Baño privado": "Private bathroom",
  "Ducha tipo lluvia": "Rain shower",
  "Espejo de piso a techo": "Floor-to-ceiling mirror",
  Armario: "Wardrobe",
  "Amenidades de baño": "Bath amenities",
  "Ropa de cama de algodón": "Cotton bed linen",
  "Terraza con jacuzzi": "Terrace with jacuzzi",
  "Amenidades exclusivas Gardners Hills": "Exclusive Gardners Hills amenities",
  "Patio privado": "Private patio",
  Tina: "Bathtub",
  "Batas y pantuflas": "Bathrobes and slippers",
  "Smart TV": "Smart TV",
  Terraza: "Terrace",
  Jacuzzi: "Jacuzzi",
  Dúplex: "Duplex",
  "Cama Queen": "Queen bed",
  "Jacuzzi en la terraza": "Jacuzzi on the terrace",
  "Amenidades exclusivas": "Exclusive amenities",
  "Baño amplio": "Spacious bathroom",
  "Luz natural": "Natural light",
  "Zona de estar": "Lounge area",
  "Espacio abierto": "Open space",
  "Dúplex de dos niveles": "Two-level duplex",
  "La más grande": "The largest",
  "Máxima privacidad": "Maximum privacy",
  "Ideal en familia": "Ideal for families",
};
const tr = (l: string[]) => l.map((x) => T[x] ?? x);

const EN: Record<string, Omit<Trad, "instalaciones" | "destacados" | "servicios">> = {
  "cienaga-de-machado": {
    frase: "Comfort and practicality.",
    descripcion: "Perfect for those looking for comfort and practicality. With a modern, functional design, it has a Queen bed, air conditioning, a rain shower, a floor-to-ceiling mirror and a practical wardrobe. At 18–20 m², cool and calm, it is the ideal space to rest after a day in the sun.",
    resumen: "Modern and functional: Queen bed, rain shower and floor-to-ceiling mirror. 18–20 m², cool and calm, for the perfect rest.",
    area: "18–20 m²", capacidad: "2 guests", camas: "1 Queen",
  },
  "punta-de-blanco": {
    frase: "The essentials, in just the right measure.",
    descripcion: "The essentials, in just the right measure. A Queen bed to rest unhurried, air conditioning, a rain shower to start the day, a floor-to-ceiling mirror and a wardrobe to keep everything in its place. At 18–20 m², it is a simple, cosy refuge for two by the water.",
    resumen: "A simple, cosy refuge for two: Queen bed, rain shower and everything in its place. 18–20 m² of calm by the water.",
    area: "18–20 m²", capacidad: "2 guests", camas: "1 Queen",
  },
  "dona-luisa": {
    frase: "More space to take it easy.",
    descripcion: "More space to settle in and take it easy. A Queen bed, air conditioning, a rain shower and a quiet terrace to enjoy a coffee or watch the sun go down over the wetland. The terrace jacuzzi is there for whatever comes up, and the exclusive Gardners Hills amenities take care of the rest. 22–24 m². Simple, easy, just what you need.",
    resumen: "A Queen bed and a terrace with jacuzzi for morning coffee or to watch the sun go down over the wetland.",
    area: "22–24 m²", capacidad: "2 guests", camas: "1 Queen",
  },
  "rio-san-jorge": {
    frase: "More space, more experiences.",
    descripcion: "More space, more experiences, more of everything you love. At 22–24 m², the Río San Jorge cabin has a Queen bed, air conditioning, a spacious bathroom with an amazing shower, a jacuzzi on the terrace, plenty of natural light from its windows and the exclusive Gardners Hills amenities.",
    resumen: "Spacious bathroom, plenty of natural light and a jacuzzi on the terrace. 22–24 m² with exclusive Gardners Hills amenities.",
    area: "22–24 m²", capacidad: "2 guests", camas: "1 Queen",
  },
  "tacasuan": {
    frase: "The king's house.",
    descripcion: "The king's house, the place everyone wants to be. More space, more shade, more ways to relax. Tacasuán, with its private patio and bathtub, has everything you love, on your own or with your family.",
    resumen: "The place everyone wants to be: more space, shade and a private patio to relax your way, on your own or with your family.",
    area: "36 m² + patio", capacidad: "3 guests", camas: "1 King + sofa bed",
  },
  "brisa-de-la-mojana": {
    frase: "Let the breeze carry you.",
    descripcion: "Let the breeze carry you. A wide, open space with a private patio to feel the breeze off the water and let the hours go by unhurried. Brisa de La Mojana is ideal for those who want to disconnect without giving anything up, as a couple or as a family.",
    resumen: "Wide and open, with a private patio to feel the breeze off the water while the hours go by unhurried.",
    area: "36 m² + patio", capacidad: "3 guests", camas: "1 King + sofa bed",
  },
  "atardecer-en-jegua": {
    frase: "A duplex designed to surprise.",
    descripcion: "For those seeking maximum space and comfort, Atardecer en Jegua is a two-level duplex designed to surprise, with the upper floor open to the sunset and a private patio with bathtub.",
    resumen: "A two-level duplex for those seeking maximum space, with the upper floor open to the sunset.",
    area: "48 m² on two levels + patio", capacidad: "4 guests", camas: "1 King + 1 Queen",
  },
  "villa-de-san-benito": {
    frase: "The largest and most exclusive.",
    descripcion: "The largest and most exclusive cabin at Gardners Hills, designed for those seeking privacy and uninterrupted rest. With room for four, a private patio and a bathtub, it is ideal for families coming for the pilgrimage.",
    resumen: "The largest cabin at Gardners Hills, designed for privacy and uninterrupted rest. Ideal for families coming for the pilgrimage.",
    area: "60 m² + patio", capacidad: "4 guests", camas: "1 King + 2 singles",
  },
};

const CAT_EN: Record<CategoriaSlug, string> = {
  refugio: "Comfort and practicality in the shade: Queen bed, air conditioning, rain shower and everything you need to rest from the heat.",
  premium: "More space, a private patio and a bathtub. Cabins for 3 and 4 guests, also designed for families.",
};

/** Cabaña en el idioma pedido (los nombres propios no cambian) */
export function enIdioma(c: Cabana, lang: Lang): Cabana {
  // Maqueta local: fotos de referencia por cabaña (lib/maqueta.ts)
  const base = MAQUETA ? { ...c, fotos: fotosCabana(cabanas.indexOf(c)) } : c;
  if (lang === "es") return base;
  return { ...base, ...EN[c.slug], instalaciones: tr(c.instalaciones), destacados: tr(c.destacados), servicios: tr(c.servicios) };
}
export const cabanasL = (lang: Lang = "es") => cabanas.map((c) => enIdioma(c, lang));
export const categoriasL = (lang: Lang = "es"): Categoria[] =>
  lang === "es" ? categorias : categorias.map((c) => ({ ...c, intro: CAT_EN[c.slug] }));

export const totalCabanas = cabanas.length;
export const getCabana = (slug: string, lang: Lang = "es") => {
  const c = cabanas.find((x) => x.slug === slug);
  return c ? enIdioma(c, lang) : undefined;
};
export const getCategoria = (slug: CategoriaSlug, lang: Lang = "es") => categoriasL(lang).find((c) => c.slug === slug)!;
export const cabanasDe = (slug: CategoriaSlug, lang: Lang = "es") => cabanasL(lang).filter((c) => c.categoria === slug);
/** «Cabaña Tacasuán» → «Tacasuán» */
export const nombreCorto = (c: Cabana) => c.nombre.replace(/^Cabaña /, "");
