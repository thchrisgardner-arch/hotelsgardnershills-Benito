/**
 * Pestañas Hotel / Piscina / Ciénaga / Basílica (sede San Benito Abad).
 * Spa y gimnasio no están confirmados para esta sede, por eso no aparecen.
 * TODO PENDIENTE: foto real de la sede para cada pestaña.
 */
type Texto = { es: string; en: string };
export type Servicio = {
  id: string;
  titulo: Texto;
  texto: Texto;
  cta: { label: Texto; href: string };
  foto: string | null;
};

const EXPLORAR = { es: "Explorar", en: "Explore" };

export const servicios: Servicio[] = [
  {
    id: "hotel",
    titulo: { es: "Hotel", en: "Hotel" },
    texto: {
      es: "Cabañas de arquitectura blanca y madera junto al agua. Un diseño minimalista y funcional que dialoga con el entorno y deja que la luz, la brisa y la ciénaga sean protagonistas.",
      en: "Cabins of white architecture and wood by the water. A minimalist, functional design that converses with the surroundings and lets light, breeze and wetland take centre stage.",
    },
    cta: { label: EXPLORAR, href: "/cabanas" },
    foto: "/images/cabanas/cabana-arco.jpg", // TODO PENDIENTE: foto real de la sede
  },
  {
    id: "piscina",
    titulo: { es: "Piscina", en: "Pool" },
    texto: {
      es: "El centro del lugar. Agua fresca, deck para asolearse y sombra para las horas de calor.",
      en: "The heart of the place. Cool water, a sun deck and shade for the hottest hours.",
    },
    cta: { label: EXPLORAR, href: "/servicios" },
    foto: null, // TODO PENDIENTE: foto real de la piscina
  },
  {
    id: "cienaga",
    titulo: { es: "Ciénaga", en: "Wetland" },
    texto: {
      es: "La ciénaga de Machado rodea el pueblo. Amaneceres quietos y atardeceres que se reflejan en el agua.",
      en: "The Ciénaga de Machado wetland surrounds the town. Still sunrises and sunsets reflected on the water.",
    },
    cta: { label: EXPLORAR, href: "/servicios#cienaga-de-machado" },
    foto: null, // TODO PENDIENTE: foto real de la ciénaga
  },
  {
    id: "basilica",
    titulo: { es: "Basílica", en: "Basilica" },
    // TODO PENDIENTE: distancia real en minutos hasta la basílica
    texto: {
      es: "La Basílica Menor del Señor de los Milagros, a pocos minutos.",
      en: "The Minor Basilica of the Lord of Miracles, a few minutes away.",
    },
    cta: { label: EXPLORAR, href: "/servicios#basilica-senor-de-los-milagros" },
    foto: null, // TODO PENDIENTE: foto real de la basílica
  },
];
