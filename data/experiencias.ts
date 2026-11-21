/**
 * Categorías editoriales de experiencia (concepto, no servicios cerrados).
 * Textos de la sede San Benito Abad. Cada una enlaza a la página relacionada.
 */
type Texto = { es: string; en: string };
export type Experiencia = {
  id: string;
  titulo: Texto;
  texto: Texto;
  href: string;
  icono: "waves" | "trees" | "utensils" | "sunset";
};

export const experiencias: Experiencia[] = [
  {
    id: "piscina",
    titulo: { es: "Piscina", en: "Pool" },
    texto: { es: "Agua, sombra y silencio para las horas de más sol.", en: "Water, shade and silence for the sunniest hours." },
    href: "/servicios",
    icono: "waves",
  },
  {
    id: "naturaleza",
    titulo: { es: "Naturaleza", en: "Nature" },
    texto: {
      es: "Cierra los ojos, escucha el agua, siente la brisa. La ciénaga a la vista, siempre.",
      en: "Close your eyes, listen to the water, feel the breeze. The wetland always in sight.",
    },
    href: "/servicios#actividades",
    icono: "trees",
  },
  {
    id: "gastronomia",
    titulo: { es: "Gastronomía", en: "Food" },
    // TODO PENDIENTE: confirmar si hay servicio de comida en la sede San Benito; si no, reemplazar por
    // DESCANSO: «Aquí, el lujo es el tiempo, el espacio y el silencio.» (icono "moon", href "/cabanas")
    texto: { es: "Sabores de río y de sabana, servidos sin prisa.", en: "Flavours of the river and the savannah, served unhurried." },
    href: "/gastronomia",
    icono: "utensils",
  },
  {
    id: "momentos",
    titulo: { es: "Momentos especiales", en: "Special moments" },
    texto: { es: "Cada atardecer sobre el agua es una promesa de renovación.", en: "Every sunset over the water is a promise of renewal." },
    href: "/servicios",
    icono: "sunset",
  },
];
