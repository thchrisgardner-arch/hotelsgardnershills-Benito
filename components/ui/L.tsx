"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLang } from "@/lib/i18n";

/**
 * Enlace interno que respeta el idioma activo: recibe la ruta canónica en español
 * («/cabanas/tacasuan») y la convierte a la URL del idioma («/en/cabins/tacasuan»).
 * Enlaces externos, anclas y correos pasan tal cual.
 */
export function L({ href, ...rest }: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const { href: loc } = useLang();
  if (!href.startsWith("/")) return <a href={href} {...(rest as ComponentProps<"a">)} />;
  return <Link href={loc(href)} {...rest} />;
}
