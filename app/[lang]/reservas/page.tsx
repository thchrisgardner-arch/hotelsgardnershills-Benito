import type { Metadata } from "next";
import { Suspense } from "react";
import { MotionController } from "@/components/layout/MotionController";
import { Motor } from "@/components/booking/Motor";
import { Politicas } from "@/components/sections/Politicas";
import { getLang, meta, type LangParams } from "@/lib/lang";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return meta(lang, "/reservas", {
    es: { title: "Reservas", description: "Solicita tu reserva en Gardners Hills, hotel de cabañas en San Benito Abad, Sucre. Respuesta en menos de 24 horas." },
    en: { title: "Book your stay", description: "Request your booking at Gardners Hills, a cabin hotel in San Benito Abad, Sucre. Reply within 24 hours." },
  });
}

/** Página de reserva: todos los CTA «Reservar» del sitio llegan aquí (con la cabaña elegida si viene de una ficha). */
export default async function ReservasPage({ params }: LangParams) {
  const lang = await getLang(params);
  return (
    <>
      <MotionController />
      <main>
        <Suspense>
          <Motor />
        </Suspense>
        <Politicas lang={lang} className="border-t border-granate/15" />
      </main>
    </>
  );
}
