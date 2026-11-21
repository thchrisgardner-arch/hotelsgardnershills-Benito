"use client";

import { createContext, useContext } from "react";
import { localizar, type Lang } from "@/lib/routes";

/**
 * Idioma activo (ES / EN). Lo fija app/[lang]/layout.tsx según la URL (/ o /en/…).
 * - t(clave): textos compartidos de la interfaz (cabecera, footer, cookies…)
 * - href(ruta): convierte una ruta canónica en español a la URL del idioma activo
 * Los textos propios de cada página viven en su componente (objeto { es, en }).
 */
export type { Lang } from "@/lib/routes";

const dict = {
  reservar: { es: "Reservar", en: "Book" },
  abrirMenu: { es: "Abrir menú", en: "Open menu" },
  cerrarMenu: { es: "Cerrar menú", en: "Close menu" },
  idioma: { es: "Cambiar idioma", en: "Change language" },
  menuPrincipal: { es: "Principal", en: "Main" },
  inicio: { es: "Gardners Hills, inicio", en: "Gardners Hills, home" },
  saltar: { es: "Saltar al contenido", en: "Skip to content" },
  frase1: { es: "Un refugio donde", en: "A refuge where" },
  frase2: { es: "el tiempo se detiene.", en: "time stands still." },
  reservarEstancia: { es: "Reservar tu estancia", en: "Book your stay" },
  reservarAhora: { es: "Reservar ahora", en: "Book now" },
  sede1: { es: "San Benito Abad", en: "San Benito Abad" },
  sede2: { es: "El corazón", en: "The beating" },
  sede3: { es: "palpitante del", en: "heart of the" },
  sede4: { es: "hotel", en: "hotel" },
  hotel: { es: "Hotel", en: "Hotel" },
  explorar: { es: "Explorar", en: "Explore" },
  contacto: { es: "Contacto", en: "Contact" },
  ubicacion: { es: "San Benito Abad, Sucre · Colombia", en: "San Benito Abad, Sucre · Colombia" },
  terminos: { es: "Términos y condiciones", en: "Terms and conditions" },
  privacidad: { es: "Política de privacidad", en: "Privacy policy" },
  cookies: { es: "Política de cookies", en: "Cookie policy" },
  cookiesTexto: {
    es: "Usamos cookies propias para que el sitio funcione y, si lo aceptas, cookies de analítica para entender cómo lo usas.",
    en: "We use our own cookies to make the site work and, if you accept, analytics cookies to understand how you use it.",
  },
  cookiesCorto: { es: "Usamos cookies para mejorar tu visita.", en: "We use cookies to improve your visit." },
  cookiesAceptar: { es: "Aceptar", en: "Accept" },
  cookiesRechazar: { es: "Solo necesarias", en: "Necessary only" },
  cookiesMas: { es: "Más información", en: "Learn more" },
  whatsapp: { es: "Escríbenos por WhatsApp", en: "Message us on WhatsApp" },
  whatsappMsg: { es: "Hola, Gardners Hills. Quisiera más información.", en: "Hello, Gardners Hills. I would like more information." },
  descubreMas: { es: "Descubre más", en: "Discover more" },
} as const;

export type Clave = keyof typeof dict;

const Ctx = createContext<Lang>("es");

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <Ctx.Provider value={lang}>{children}</Ctx.Provider>;
}

export function useLang() {
  const lang = useContext(Ctx);
  const t = (k: Clave) => dict[k][lang];
  const href = (ruta: string) => localizar(ruta, lang);
  return { lang, t, href };
}
