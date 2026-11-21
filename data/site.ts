/**
 * Datos generales del hotel.
 * Lo que es `null` está PENDIENTE de confirmar: la interfaz lo muestra como "Por confirmar".
 * Sede San Benito Abad (Sucre).
 * TODO PENDIENTE: teléfono, WhatsApp, correo, dirección, coordenadas y RNT de la sede San Benito.
 * Mientras llegan, se mantiene la línea de la marca (confirmada para Villanueva el 2026-11-18) para que
 * WhatsApp y el correo sigan funcionando; en Contacto se avisa que está por confirmar para esta sede.
 */
export const site = {
  name: "Gardners Hills",
  descriptor: "Hotel in San Benito Abad",
  location: {
    town: "San Benito Abad",
    region: "Sucre",
    country: "Colombia",
    address: null as string | null, // TODO PENDIENTE: dirección de la sede
    mapsUrl: null as string | null, // TODO PENDIENTE: coordenadas / enlace de Google Maps
    /** Registro Nacional de Turismo. TODO PENDIENTE */
    rnt: null as string | null,
  },
  contact: {
    /** Formato internacional sin "+" ni espacios */
    /** Número único de WhatsApp para todo el sitio (unificado por el cliente 2026-11-18) */
    whatsapp: "573001458356" as string | null,
    whatsappLabel: "+57 300 145 8356",
    email: "hotel@gardnerhills.co" as string | null,
    phone: "+57 300 145 8356" as string | null,
    whatsappFlotante: "573001458356",
  },
  instagram: null as string | null,
  facebook: null as string | null,
  youtube: null as string | null,
  linkedin: null as string | null,
  bookingEngine: null as string | null,
  url: "https://gardnerhills.co", // dominio inferido del correo; confirmar
};

/**
 * Menú a pantalla completa. Estructura inspirada en Grand Hotel Miramare;
 * el contenido es el de Gardners Hills (secciones del wireframe V2).
 */
export const menuPrincipal = [
  { label: "Cabañas", en: "Cabins", href: "/cabanas" },
  { label: "Servicios", en: "Services", href: "/servicios" },
  { label: "Gastronomía & Bar", en: "Food & Bar", href: "/gastronomia" },
  { label: "Galería", en: "Gallery", href: "/galeria" },
  { label: "Reservas", en: "Bookings", href: "/reservas" },
  { label: "Contacto", en: "Contact", href: "/contacto" },
];

/** Páginas legales (footer) */
export const legales = [
  { clave: "terminos", href: "/terminos" },
  { clave: "privacidad", href: "/privacidad" },
  { clave: "cookies", href: "/cookies" },
] as const;
export const menuSecundario = [
  { label: "WhatsApp +57 300 145 8356", href: "https://wa.me/573001458356" },
  { label: "hotel@gardnerhills.co", href: "mailto:hotel@gardnerhills.co" },
];
