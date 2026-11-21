/**
 * Galería: fotogramas del video oficial de Villanueva, provisionales.
 * TODO PENDIENTE: fotos reales (cabañas, piscina, ciénaga al amanecer y al atardecer, basílica, pueblo).
 * Añadir nuevas fotos aquí (alt en español e inglés).
 */
export type Pieza = { id: string; src: string | null; alt: string; altEn?: string };

export const galeria: Pieza[] = [
  { id: "g1", src: "/images/cabanas/cabanas-panoramica.jpg", alt: "Vista panorámica de las cabañas de Gardners Hills", altEn: "Panoramic view of the Gardners Hills cabins" },
  { id: "g2", src: "/images/cabanas/cabana-fachada.jpg", alt: "Fachada blanca con ventanal en arco de una cabaña", altEn: "White façade of a cabin with an arched window" },
  { id: "g3", src: "/images/cabanas/cabanas-jardin.jpg", alt: "Jardín y cabañas al amanecer", altEn: "Garden and cabins at sunrise" },
  { id: "g4", src: "/images/cabanas/cabana-terraza.jpg", alt: "Terrazas de madera de las cabañas", altEn: "Wooden terraces of the cabins" },
  // TODO PENDIENTE: reemplazar por foto de ciénaga o piscina (esta muestra montaña)
  { id: "g5", src: "/images/cabanas/cabanas-sierra.jpg", alt: "Las cabañas al caer la tarde", altEn: "The cabins as the afternoon falls" },
  { id: "g6", src: "/images/cabanas/cabana-arco.jpg", alt: "Ventanal en arco y terraza de una cabaña", altEn: "Arched window and terrace of a cabin" },
];
