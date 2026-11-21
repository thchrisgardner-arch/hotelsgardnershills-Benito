import type { NextConfig } from "next";

/**
 * Slugs de cabañas de la versión Villanueva → nombres de la sede San Benito.
 * (Aquí y no en data/: next.config no resuelve los alias @/ de los datos.)
 */
const slugsViejos: Record<string, string> = {
  "cabo-de-la-vela": "cienaga-de-machado",
  "dunas-de-taroa": "punta-de-blanco",
  "pilon-de-azucar": "dona-luisa",
  "serrania-del-perija": "rio-san-jorge",
  "golden-dunes": "tacasuan",
  "wind-of-jepira": "brisa-de-la-mojana",
  "sunset-ridge": "atardecer-en-jegua",
  "spirit-of-the-cape": "villa-de-san-benito",
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return Object.entries(slugsViejos).flatMap(([viejo, nuevo]) => [
      { source: `/cabanas/${viejo}`, destination: `/cabanas/${nuevo}`, permanent: true },
      { source: `/en/cabins/${viejo}`, destination: `/en/cabins/${nuevo}`, permanent: true },
    ]);
  },
};

export default nextConfig;
