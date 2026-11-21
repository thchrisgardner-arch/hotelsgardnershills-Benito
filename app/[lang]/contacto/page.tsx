import type { Metadata } from "next";
import { MotionController } from "@/components/layout/MotionController";
import { Lines } from "@/components/ui/Lines";
import { Foto as Image } from "@/components/ui/Foto";
import { ContactTabs } from "@/components/contact/ContactTabs";
import { RutasMapa } from "@/components/contact/RutasMapa";
import { site } from "@/data/site";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return meta(lang, "/contacto", {
    es: { title: "Contacto", description: "Contacta a Gardners Hills por WhatsApp o correo y descubre cómo llegar a San Benito Abad, Sucre." },
    en: { title: "Contact", description: "Contact Gardners Hills by WhatsApp or email and find out how to get to San Benito Abad, Sucre." },
  });
}

/**
 * Estructura de la página «Contact & Arrival» de la referencia: apertura tipográfica centrada,
 * secciones a dos columnas, mapa con rutas y contacto directo.
 */
export default async function ContactoPage({ params }: LangParams) {
  const lang = await getLang(params);
  const { contact, location } = site;
  const h2 = "t-recto font-[family-name:var(--font-display)] text-[clamp(2.2rem,4vw,4.2rem)] leading-[1] text-carmesi";
  const t = {
    es: {
      titulo: ["Contacto", "y llegada"], escribenos: "Escríbenos", escribenosP: "Elige el canal que prefieras. Te ayudamos a planear tu estancia en Gardners Hills.",
      llegar: ["Cómo llegar a", "Gardners Hills"], donde: "Dónde estamos",
      dondeP: "En San Benito Abad, Sucre, junto a la ciénaga de Machado y a pocos minutos de la basílica. Escríbenos y te compartimos la ubicación exacta y las indicaciones para llegar.",
      pendiente: "Datos de contacto de ejemplo · por confirmar para la sede San Benito",
      directo: "Contacto directo", reservas: "Reservas y consultas", telefono: "Teléfono", correo: "Correo",
    },
    en: {
      titulo: ["Contact", "and arrival"], escribenos: "Write to us", escribenosP: "Choose the channel you prefer. We will help you plan your stay at Gardners Hills.",
      llegar: ["How to get to", "Gardners Hills"], donde: "Where we are",
      dondeP: "In San Benito Abad, Sucre, by the Ciénaga de Machado wetland and a few minutes from the basilica. Write to us and we will share the exact location and directions.",
      pendiente: "Sample contact details · to be confirmed for the San Benito location",
      directo: "Direct contact", reservas: "Bookings and enquiries", telefono: "Phone", correo: "Email",
    },
  }[lang];

  return (
    <>
      <MotionController />
      <main>
        {/* Portada con foto de la recepción de la sede */}
        <section data-header-light className="relative isolate mb-28 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-granate px-[var(--gutter)] pb-20 pt-[calc(var(--header-h)+3rem)] text-center text-marfil sm:mb-36">
          {/* Foto de fondo con velo oscuro (mismo tratamiento que las demás portadas) */}
          <div aria-hidden className="absolute inset-0 -z-10">
            <Image src="/images/san-benito/recepcion-fachada.webp" alt="" fill sizes="100vw" priority className="object-cover" />
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <p data-reveal className="text-[0.92rem] font-normal uppercase tracking-[0.3em] text-marfil">
            San Benito Abad · Sucre
          </p>
          <Lines as="h1" className="t-hero t-italic mt-8 text-[clamp(3.2rem,10vw,10rem)] leading-[0.92]" lines={t.titulo} />
          <address data-reveal className="mt-12 space-y-1 not-italic text-marfil">
            {location.address && <p>{location.address}</p>}
            <p>
              {location.town}, {location.region} · {location.country}
            </p>
            <p>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:opacity-70">
                {contact.whatsappLabel}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:opacity-70">
                {contact.email}
              </a>
            </p>
            {/* TODO PENDIENTE: dirección, teléfono, WhatsApp, correo y RNT de la sede San Benito (data/site.ts) */}
            <p className="pt-3 text-[0.875rem] uppercase tracking-[0.16em] text-marfil/70">{t.pendiente}</p>
          </address>
        </section>

        {/* Escríbenos: título + pestañas */}
        <section className="grid gap-14 px-[var(--gutter)] pb-28 sm:pb-36 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Lines as="h2" className={h2} lines={[t.escribenos]} />
            <p data-reveal className="mt-8 max-w-sm text-granate">
              {t.escribenosP}
            </p>
          </div>
          <div data-reveal className="lg:col-span-7 lg:col-start-6">
            <ContactTabs />
          </div>
        </section>

        {/* Cómo llegar: mapa embebido + rutas */}
        <section className="grid gap-14 border-t border-granate/15 px-[var(--gutter)] py-28 sm:py-36 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Lines as="h2" className={h2} lines={t.llegar} />
            <div data-reveal className="mt-8 max-w-sm">
              <p className="text-carmesi">{t.donde}</p>
              <p className="mt-2 text-granate">{t.dondeP}</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <RutasMapa mapsUrl={location.mapsUrl} />
          </div>
        </section>

        {/* Contacto directo */}
        <section className="border-t border-granate/15 px-[var(--gutter)] py-24 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,3rem)] leading-none text-carmesi lg:col-span-4">{t.directo}</h2>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-3">
              <li>
                <p className="text-[0.98rem] text-granate">{t.reservas}</p>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="mt-1 inline-flex min-h-11 items-center text-carmesi underline decoration-carmesi/40 underline-offset-4 hover:text-granate">
                  WhatsApp {contact.whatsappLabel}
                </a>
              </li>
              <li>
                <p className="text-[0.98rem] text-granate">{t.telefono}</p>
                <a href={`tel:${contact.phone?.replace(/\s/g, "")}`} className="mt-1 inline-flex min-h-11 items-center text-carmesi underline decoration-carmesi/40 underline-offset-4 hover:text-granate">
                  {contact.phone}
                </a>
              </li>
              <li>
                <p className="text-[0.98rem] text-granate">{t.correo}</p>
                <a href={`mailto:${contact.email}`} className="mt-1 inline-flex min-h-11 items-center break-all text-carmesi underline decoration-carmesi/40 underline-offset-4 hover:text-granate">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
