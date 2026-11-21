/**
 * Resumen de políticas de estancia (fichas de cabaña y /reservas).
 * ⚠ TEXTO DE EJEMPLO: horarios, cancelación, estancia mínima, niños y mascotas deben confirmarse
 * con el hotel.
 * TODO PENDIENTE: confirmar con el cliente para la sede San Benito (check-in, check-out, estancia mínima,
 * mascotas, humo y cancelación). En la interfaz se muestra la marca «Texto de ejemplo» mientras EJEMPLO = true.
 */
export const POLITICAS_EJEMPLO = true;

type Texto = { es: string; en: string };
export type Politica = { id: string; titulo: Texto; texto: Texto };

export const politicas: Politica[] = [
  {
    id: "horarios",
    titulo: { es: "Check-in y check-out", en: "Check-in and check-out" },
    texto: { es: "Check-in desde las 3:00 p. m. · Check-out hasta las 12:00 m.", en: "Check-in from 3:00 pm · Check-out until 12:00 pm." },
  },
  {
    id: "cancelacion",
    titulo: { es: "Cancelación", en: "Cancellation" },
    texto: {
      // Regla y ejemplos en lib/cancelacion.ts; la fecha exacta se calcula en el resumen de la reserva
      es: "Gratis durante las 24 horas siguientes a tu reserva, siempre que falten más de 24 horas para el check-in. Si llegas antes, el plazo termina 24 horas antes del check-in. Después, se cobra la primera noche.",
      en: "Free within 24 hours of booking, as long as check-in is more than 24 hours away. If you arrive sooner, the window closes 24 hours before check-in. After that, the first night is charged.",
    },
  },
  {
    id: "minima",
    titulo: { es: "Estancia mínima", en: "Minimum stay" },
    texto: {
      es: "1 noche · 2 noches en fines de semana festivos y temporada alta. En las semanas de peregrinación (marzo y septiembre) la estancia mínima puede ser distinta.",
      en: "1 night · 2 nights on holiday weekends and in high season. During the pilgrimage weeks (March and September) the minimum stay may differ.",
    }, // TODO PENDIENTE: estancia mínima en peregrinaciones
  },
  {
    id: "ninos",
    titulo: { es: "Niños", en: "Children" },
    texto: {
      es: "Bienvenidos en todas las cabañas. Las Premium, para 3 y 4 personas, son ideales en familia. Menores de 18 años, con documento y acompañados por un adulto.",
      en: "Welcome in every cabin. The Premium cabins, for 3 and 4 guests, are ideal for families. Guests under 18 must bring ID and stay with an adult.",
    },
  },
  {
    id: "mascotas",
    titulo: { es: "Mascotas", en: "Pets" },
    texto: { es: "No se admiten mascotas, salvo perros de asistencia.", en: "Pets are not allowed, except assistance dogs." },
  },
];
