import { site } from "@/data/site";
import { cabanasL, totalCabanas } from "@/data/cabanas";
import { localizar, type Lang } from "@/lib/routes";

/**
 * Datos estructurados (schema.org) del hotel para buscadores, en el idioma de la página.
 * TODO PENDIENTE: dirección, teléfono y coordenadas (geo) de la sede San Benito en data/site.ts.
 */
export function JsonLd({ lang }: { lang: Lang }) {
  const es = lang === "es";
  const data = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    inLanguage: es ? "es-CO" : "en",
    description: es
      ? "Cabañas con piscina y aire acondicionado junto a la ciénaga, a pocos minutos de la Basílica del Señor de los Milagros en San Benito Abad, Sucre."
      : "Cabins with a pool and air conditioning by the wetland, a few minutes from the Basilica of the Lord of Miracles in San Benito Abad, Sucre, Colombia.",
    url: `${site.url}${localizar("/", lang)}`,
    image: `${site.url}/opengraph-image`,
    email: site.contact.email ?? undefined,
    telephone: site.contact.phone ?? undefined,
    address: {
      "@type": "PostalAddress",
      ...(site.location.address ? { streetAddress: site.location.address } : {}),
      addressLocality: site.location.town,
      addressRegion: site.location.region,
      addressCountry: "CO",
    },
    numberOfRooms: totalCabanas,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: es ? "Piscina" : "Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: es ? "Aire acondicionado" : "Air conditioning", value: true },
      // TODO PENDIENTE: confirmar restaurante y bar en la sede San Benito
      { "@type": "LocationFeatureSpecification", name: es ? "Restaurante y bar" : "Restaurant and bar", value: true },
    ],
    containsPlace: cabanasL(lang).map((c) => ({
      "@type": "HotelRoom",
      name: c.nombre,
      url: `${site.url}${localizar(`/cabanas/${c.slug}`, lang)}`,
      floorSize: { "@type": "QuantitativeValue", value: parseInt(c.area), unitCode: "MTK" },
      occupancy: { "@type": "QuantitativeValue", maxValue: c.maxHuespedes, description: c.capacidad },
    })),
    sameAs: [site.instagram, site.facebook, site.youtube, site.linkedin].filter(Boolean),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
