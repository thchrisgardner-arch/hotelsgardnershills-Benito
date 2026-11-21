/** Galería: fotografía de la sede San Benito (2026-11-21). Añadir nuevas fotos aquí (alt en español e inglés). */
export type Pieza = { id: string; src: string | null; alt: string; altEn?: string };

const I = (n: string) => `/images/san-benito/${n}.webp`;

export const galeria: Pieza[] = [
  { id: "g1", src: I("cabanas-piscina"), alt: "Cabañas de Gardners Hills frente a la piscina", altEn: "Gardners Hills cabins facing the pool" },
  { id: "g2", src: I("cabana-atardecer-piscina"), alt: "Cabaña con ventanal en arco junto a la piscina al atardecer", altEn: "Cabin with an arched window by the pool at sunset" },
  { id: "g3", src: I("terraza-vista-cienaga"), alt: "Terraza de una cabaña con vista a la ciénaga", altEn: "Cabin terrace overlooking the wetland" },
  { id: "g4", src: I("canoa-cienaga-amanecer"), alt: "Paseo en canoa por la ciénaga al amanecer", altEn: "Canoe ride on the wetland at sunrise" },
  { id: "g5", src: I("cienaga-garzas-atardecer"), alt: "Garzas sobre la ciénaga al atardecer", altEn: "Egrets over the wetland at sunset" },
  { id: "g6", src: I("cabana-patio-tina-2"), alt: "Patio privado con tina de una cabaña Premium", altEn: "Private patio with bathtub in a Premium cabin" },
  { id: "g7", src: I("cabana-familiar-interior"), alt: "Interior de la cabaña familiar", altEn: "Interior of the family cabin" },
  { id: "g8", src: I("piscina-escalones"), alt: "Escalones de la piscina", altEn: "Pool steps" },
  { id: "g9", src: I("desayuno-flotante"), alt: "Desayuno servido junto a la piscina", altEn: "Breakfast served by the pool" },
  { id: "g10", src: I("pasillo-cubierto"), alt: "Pasillo cubierto entre las cabañas", altEn: "Covered walkway between the cabins" },
  { id: "g11", src: I("duplex-escalera"), alt: "Escalera del dúplex", altEn: "Duplex staircase" },
  { id: "g12", src: I("vista-aerea"), alt: "Vista aérea de Gardners Hills con la ciénaga al fondo", altEn: "Aerial view of Gardners Hills with the wetland behind" },
];
