/**
 * Gastronomía & Bar. Estructura tomada de la página de restaurantes de Grand Hotel Miramare;
 * el contenido es de Gardners Hills en voz de marca. Carta, horarios y chef por confirmar (no se inventan).
 * TODO PENDIENTE: confirmar si la sede San Benito tiene restaurante y bar.
 */
type Texto = { es: string; en: string };
export type Espacio = {
  id: string;
  titulo: Texto;
  texto: Texto;
  detalles: { icono: "plato" | "reloj" | "agua" | "copa"; texto: Texto }[];
  foto: string | null;
  /** Carta (URL completa o PDF). Mientras no llegue, «Ver carta menú» la pide por WhatsApp. */
  carta?: string | null;
};

export const gastronomiaIntro: Texto = {
  es: "Un café al amanecer junto a la ciénaga. Una mesa larga sin prisa. Una copa cuando cae la tarde. En Gardners Hills, la buena mesa es otra forma de quedarse.",
  en: "Coffee at sunrise by the wetland. A long, unhurried table. A drink as the afternoon fades. At Gardners Hills, good food is another way of staying.",
};

export const gastronomiaFrase: Texto = {
  es: "Sabores de río y de sabana, servidos sin prisa.",
  en: "Flavours of the river and the savannah, served unhurried.",
};

export const espacios: Espacio[] = [
  {
    id: "restaurante",
    titulo: { es: "Restaurante", en: "Restaurant" },
    texto: {
      es: "La cocina como encuentro: platos sencillos, ingredientes de la región y el tiempo justo para disfrutarlos, con la luz y la brisa de la ciénaga como compañía.",
      en: "Cooking as a meeting point: simple dishes, regional ingredients and just the right time to enjoy them, with the light and the breeze off the wetland for company.",
    },
    detalles: [{ icono: "agua", texto: { es: "Con la ciénaga a la vista.", en: "With the wetland in view." } }],
    foto: "/images/san-benito/plato-pescado.webp",
  },
  {
    id: "bar",
    titulo: { es: "Bar", en: "Bar" },
    texto: {
      es: "Cuando el día se apaga, el bar abre la conversación. Una bebida fría, una copa tranquila y la calma de la noche en San Benito Abad.",
      en: "As the day winds down, the bar opens the conversation. A cold drink, a quiet glass and the calm of the San Benito Abad night.",
    },
    detalles: [],
    foto: "/images/san-benito/bebida-piscina.webp",
  },
];
