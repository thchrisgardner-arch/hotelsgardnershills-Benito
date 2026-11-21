export type BrandColor =
  | "granate"
  | "carmesi"
  | "coral"
  | "marfil"
  | "rosa"
  | "verde"
  | "dorado"
  | "blanco";

/**
 * Color único para todos los espacios de foto mientras no haya fotografía oficial.
 * Cambiar a `null` para volver a usar el tono definido en cada dato.
 */
export const PLACEHOLDER_COLOR: BrandColor | null = "rosa";

/**
 * Interruptor de fotografías. En false, todas las imágenes del sitio se ocultan y sus espacios
 * quedan en gris (decisión del cliente, 2026-11-19). El video del hero no se ve afectado.
 * Cambiar a true para volver a mostrar las fotos.
 * Desde 2026-11-21 se muestran las fotos de la sede San Benito (public/images/san-benito).
 */
export const MOSTRAR_FOTOS = true; // fotografía de la sede San Benito (2026-11-21)

/** Fondo + color de línea/texto con contraste suficiente sobre ese fondo */
export const tone: Record<BrandColor, { bg: string; fg: string }> = {
  granate: { bg: "bg-granate", fg: "text-rosa" },
  carmesi: { bg: "bg-carmesi", fg: "text-marfil" },
  coral: { bg: "bg-coral", fg: "text-marfil" },
  marfil: { bg: "bg-marfil", fg: "text-carmesi" },
  rosa: { bg: "bg-rosa", fg: "text-granate" },
  verde: { bg: "bg-verde", fg: "text-dorado" },
  dorado: { bg: "bg-dorado", fg: "text-granate" },
  blanco: { bg: "bg-blanco", fg: "text-carmesi" },
};
