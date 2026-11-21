/**
 * Actividades cercanas a San Benito Abad, Sucre.
 * NO se publican distancias, horarios ni operadores hasta verificarlos.
 */
type Texto = { es: string; en: string };
export type Actividad = {
  id: string;
  titulo: Texto;
  texto: Texto;
  icono: "church" | "waves" | "droplets" | "footprints" | "utensils" | "landmark";
  /** TODO PENDIENTE: foto del edificio de la basílica (hoy se usa una escena de devoción) */
  foto: string | null;
};

export const actividades: Actividad[] = [
  {
    // El id es también el ancla en Servicios (/servicios#… y /en/services#…), enlazada desde la portada
    id: "basilica-senor-de-los-milagros",
    titulo: { es: "Basílica del Señor de los Milagros", en: "Basilica of the Lord of Miracles" },
    texto: {
      es: "Uno de los lugares de peregrinación más visitados del Caribe colombiano. Su Cristo llegó a la villa en 1678.",
      en: "One of the most visited pilgrimage sites in the Colombian Caribbean. Its Christ arrived in the town in 1678.",
    },
    icono: "church",
    foto: "/images/san-benito/devocion-velas.webp",
  },
  {
    id: "cienaga-de-machado",
    titulo: { es: "Ciénaga de Machado", en: "Ciénaga de Machado" },
    // TODO PENDIENTE: confirmar operador de paseos en canoa
    texto: {
      es: "Agua tranquila hasta donde alcanza la vista. Paseos en canoa al amanecer y atardeceres que se reflejan en la superficie.",
      en: "Still water as far as the eye can see. Canoe rides at sunrise and sunsets reflected on the surface.",
    },
    icono: "waves",
    foto: "/images/san-benito/canoa-cienaga-amanecer.webp",
  },
  {
    id: "rio-san-jorge",
    titulo: { es: "Río San Jorge", en: "San Jorge River" },
    texto: {
      es: "El río que da nombre a la región y marca el ritmo de los pueblos de la orilla.",
      en: "The river that gives the region its name and sets the rhythm of the riverside towns.",
    },
    icono: "droplets",
    foto: "/images/san-benito/cienaga-garzas-atardecer.webp",
  },
  {
    id: "peregrinaciones",
    titulo: { es: "Peregrinaciones", en: "Pilgrimages" },
    texto: {
      es: "Dos fechas al año llenan el pueblo de fe: la Fiesta del Perdón en marzo y el 14 de septiembre.",
      en: "Twice a year the town fills with faith: the Feast of Forgiveness in March and on 14 September.",
    },
    icono: "footprints",
    foto: "/images/san-benito/procesion-velas.webp",
  },
  {
    id: "gastronomia-local",
    titulo: { es: "Cocina de la región", en: "Regional cuisine" },
    texto: { es: "Sabores de río y de sabana a pocos pasos.", en: "Flavours of the river and the savannah just steps away." },
    icono: "utensils",
    foto: "/images/san-benito/plato-pescado.webp",
  },
  {
    id: "pueblo",
    titulo: { es: "El pueblo", en: "The town" },
    texto: { es: "Calles tranquilas, plaza y vida local para descubrir a pie.", en: "Quiet streets, a main square and local life to discover on foot." },
    icono: "landmark",
    foto: "/images/san-benito/plaza-pueblo.webp",
  },
];
