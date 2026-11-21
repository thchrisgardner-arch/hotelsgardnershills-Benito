/**
 * Reseñas de huéspedes.
 *
 * ⚠ TEXTOS DE EJEMPLO (sede San Benito, 2026-11-21): nombres, fechas y textos inventados a pedido del cliente para ver el
 * diseño. NO son reseñas reales ni de personas reales; los avatares son ilustraciones, no fotos.
 * Antes de lanzar el sitio hay que reemplazarlas por reseñas reales (Airbnb, Booking, Google…), con permiso,
 * y entonces sí con la foto de cada huésped (campo `foto`) y la `fuente`.
 */
type Texto = { es: string; en: string };
export type Resena = {
  id: string;
  autor: string;
  /** Línea secundaria bajo el nombre (ciudad o «Huésped desde…») */
  detalle: Texto;
  /** Mes y año de la estancia */
  fecha: Texto;
  foto?: string | null;
  nota: number; // sobre 5
  texto: Texto;
  fuente?: string;
};

// EJEMPLO: reemplazar por reseñas reales enlazadas a Google o Booking antes de publicar
export const resenas: Resena[] = [
  {
    id: "r1", autor: "Mariana", nota: 5,
    detalle: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
    fecha: { es: "octubre de 2026", en: "October 2026" },
    texto: {
      es: "La Cabaña Tacasuán era impecable. Al caer la tarde, el patio con el agua al fondo se volvió nuestro lugar favorito.",
      en: "The Tacasuán cabin was spotless. As the afternoon fell, the patio with the water behind became our favourite spot.",
    },
  },
  {
    id: "r2", autor: "Luz Marina", nota: 5,
    detalle: { es: "Medellín, Colombia", en: "Medellín, Colombia" },
    fecha: { es: "septiembre de 2026", en: "September 2026" },
    texto: {
      es: "Vinimos con los niños por la basílica y nos quedamos por la calma. Volver a la cabaña después del pueblo fue lo mejor del viaje.",
      en: "We came with the kids for the basilica and stayed for the calm. Coming back to the cabin after the town was the best part of the trip.",
    },
  },
  {
    id: "r3", autor: "Andrés y Laura", nota: 5,
    detalle: { es: "Cartagena, Colombia", en: "Cartagena, Colombia" },
    fecha: { es: "agosto de 2026", en: "August 2026" },
    texto: {
      es: "Con el calor de la región, la piscina y el aire acondicionado hicieron toda la diferencia.",
      en: "With the heat of the region, the pool and the air conditioning made all the difference.",
    },
  },
  {
    id: "r4", autor: "Isabella", nota: 5,
    detalle: { es: "Barranquilla, Colombia", en: "Barranquilla, Colombia" },
    fecha: { es: "julio de 2026", en: "July 2026" },
    texto: {
      es: "Atardeceres sobre la ciénaga que no se olvidan. Diseño sencillo, mucha luz y silencio.",
      en: "Sunsets over the wetland you never forget. Simple design, lots of light and silence.",
    },
  },
  {
    id: "r5", autor: "Gabriel", nota: 5,
    detalle: { es: "Sincelejo, Colombia", en: "Sincelejo, Colombia" },
    fecha: { es: "junio de 2026", en: "June 2026" },
    texto: {
      es: "Cerca de Sincelejo y aun así lejos de todo. Exactamente lo que buscábamos para el puente.",
      en: "Close to Sincelejo and yet far from everything. Exactly what we were looking for on the long weekend.",
    },
  },
];

/** Cantidad de tarjetas de espacio reservado mientras no haya reseñas */
export const resenasPlaceholder = 4;
