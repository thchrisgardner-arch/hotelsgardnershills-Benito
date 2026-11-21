"use client";

import { L } from "@/components/ui/L";
import { Logo } from "@/components/ui/Logo";
import { site, menuPrincipal, legales } from "@/data/site";
import { useLang, type Clave } from "@/lib/i18n";

const conInicio = [{ label: "Inicio", en: "Home", href: "/" }, ...menuPrincipal];
const porRuta = (hrefs: string[]) => conInicio.filter((m) => hrefs.includes(m.href));
const cols: { titulo: Clave; links: typeof menuPrincipal }[] = [
  { titulo: "hotel", links: porRuta(["/", "/cabanas", "/servicios", "/gastronomia"]) },
  { titulo: "explorar", links: porRuta(["/galeria", "/reservas", "/contacto"]) },
];

/** Footer del wireframe / XD: «Una experiencia que nunca olvidarás» + logo a todo el ancho */
export function Footer() {
  const { contact, instagram, facebook } = site;
  const { lang, t } = useLang();
  return (
    <footer id="contacto" className="border-t border-granate/15 bg-crema px-[var(--gutter)] pb-28 pt-20 text-granate sm:pt-24 lg:sticky lg:bottom-0 lg:z-0 lg:pb-20 lg:pt-[calc(var(--header-h)+1.5rem)]">
      {/* En escritorio el footer queda fijo debajo de la cabecera: el espacio superior la deja libre para que no tape los títulos */}
      {/* Móvil: título y contacto a lo ancho; Hotel y Explorar en dos columnas */}
      <div className="grid gap-14 max-md:grid-cols-2 max-md:gap-x-6 max-md:gap-y-12 lg:grid-cols-12">
        <div className="max-md:col-span-2 lg:col-span-5">
          {/* Sin animación de revelado: al final de la página el disparador podía no alcanzarse */}
          <p className="text-[0.92rem] uppercase tracking-[0.3em] text-granate">{t("sede1")}</p>
          <p className="t-italic mt-6 text-left text-[clamp(2.6rem,5vw,5.2rem)] leading-[1] lg:text-[clamp(2.6rem,4.2vw,4.4rem)]">
            {t("sede2")}
            <br />
            {t("sede3")}
            <br />
            {t("sede4")}
          </p>
          {/* Sin botón de reserva aquí (2026-11-20): la reserva sigue en el enlace «Reservas» de Explorar */}
        </div>

        {cols.map((c, ci) => (
          <nav key={c.titulo} aria-label={c.titulo} className="lg:col-span-2">
            <h2 className="mb-5 text-[0.875rem] font-normal uppercase tracking-[0.2em] text-granate">{t(c.titulo)}</h2>
            <ul className="space-y-2.5 text-[1.2rem]">
              {c.links.map((l, li) => (
                // Móvil: el último enlace de Hotel (Gastronomía & Bar) se muestra abajo, centrado entre las dos columnas
                <li key={l.href} className={ci === 0 && li === c.links.length - 1 ? "max-md:hidden" : undefined}>
                  <L href={l.href} className="inline-flex min-h-11 items-center transition-colors hover:text-carmesi lg:min-h-0">{lang === "en" ? l.en : l.label}</L>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        {cols[0].links.length > 0 && (() => {
          const l = cols[0].links[cols[0].links.length - 1];
          return (
            <div className="col-span-2 -mt-10 text-center text-[1.2rem] md:hidden">
              <L href={l.href} className="inline-flex min-h-11 items-center whitespace-nowrap transition-colors hover:text-carmesi">{lang === "en" ? l.en : l.label}</L>
            </div>
          );
        })()}

        <div className="max-md:col-span-2 lg:col-span-3">
          <h2 className="mb-5 text-[0.875rem] font-normal uppercase tracking-[0.2em] text-granate">{t("contacto")}</h2>
          <ul className="space-y-2.5 text-[1.2rem]">
            <li><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-carmesi">WhatsApp {contact.whatsappLabel}</a></li>
            <li><a href={`mailto:${contact.email}`} className="hover:text-carmesi">{contact.email}</a></li>
            <li className="text-granate">{t("ubicacion")}</li>
          </ul>
        </div>
      </div>

      {/* Logo limitado por alto de pantalla para que todo el footer quepa en una vista */}
      <div data-reveal className="mt-14 sm:mt-16 lg:mt-8">
        <Logo className="mx-auto w-[min(100%,62vh,820px)] lg:w-[min(100%,48vh,820px)]" />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 lg:mt-6 text-[1rem] font-normal uppercase tracking-[0.16em] text-granate max-md:text-[0.875rem] max-md:tracking-[0.12em]">
        <div className="flex flex-wrap gap-x-10 gap-y-1">
          {legales.map((l) => (
            <L key={l.href} href={l.href} className="inline-flex min-h-11 items-center transition-colors hover:text-carmesi">{t(l.clave)}</L>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {/* Redes en línea negra (Facebook, Instagram, YouTube, LinkedIn); se activan al poner la URL en data/site.ts */}
          {[
            {
              label: "Facebook",
              href: facebook,
              icon: <><circle cx="12" cy="12" r="9.5" /><path d="M13.2 19.5v-6.3h2.1l.3-2.4h-2.4V9.3c0-.7.2-1.2 1.2-1.2h1.3V6c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.3v1.6H8.5v2.4h2.1v6.3" /></>,
            },
            {
              label: "Instagram",
              href: instagram,
              icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" /></>,
            },
            {
              label: "YouTube",
              href: site.youtube,
              icon: <><rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.2v5.6l4.8-2.8z" /></>,
            },
            {
              label: "LinkedIn",
              href: site.linkedin,
              icon: <><rect x="3" y="3" width="18" height="18" rx="2.5" /><path d="M7.5 10v6.5M7.5 7.3v.1M11 16.5V10m0 3c0-1.8 1-3 2.6-3S16 11.1 16 13v3.5" /></>,
            },
          ].map((r) => (
            <a
              key={r.label}
              href={r.href ?? undefined}
              target={r.href ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={r.label}
              className={`grid h-11 w-11 place-items-center text-granate transition-colors hover:text-carmesi ${r.href ? "" : "pointer-events-none"}`}
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {r.icon}
              </svg>
            </a>
          ))}
          <span className="ml-2 normal-case tracking-normal text-[1.1rem]">© 2027 Gardners Hills</span>
        </div>
      </div>
    </footer>
  );
}
