/**
 * Textos legales de Gardners Hills (borrador, 2026-11-19).
 * Redactados con la estructura habitual de los sitios de hotel de referencia y el marco colombiano
 * (Ley 1581 de 2012 y Decreto 1377 de 2013 de protección de datos; Ley 1480 de 2011, Estatuto del
 * Consumidor; Ley 679 de 2001 y Ley 1336 de 2009 contra la explotación sexual de menores).
 *
 * TODO PENDIENTE (sede San Benito): razón social, NIT, número de RNT, dirección, horarios definitivos y
 * política de cancelación. Revisión por un abogado antes de publicar.
 */
import { site } from "@/data/site";
import type { Seccion } from "@/components/layout/LegalPage";

export const ACTUALIZADO = "19 de noviembre de 2026";

const responsable = `Gardners Hills (razón social y NIT por confirmar), hotel de cabañas ubicado en San Benito Abad, Sucre, Colombia. Correo: ${site.contact.email}. Teléfono y WhatsApp: ${site.contact.whatsappLabel}.`;

export const terminos: { intro: string; secciones: Seccion[] } = {
  intro:
    "Estos términos regulan el uso de este sitio web y las reservas de alojamiento en Gardners Hills. Al navegar por el sitio o solicitar una reserva, aceptas lo que se explica a continuación.",
  secciones: [
    {
      titulo: "Quiénes somos",
      parrafos: [responsable, "Prestador de servicios turísticos inscrito en el Registro Nacional de Turismo (RNT por confirmar)."],
    },
    {
      titulo: "Uso del sitio",
      parrafos: [
        "El sitio tiene como fin informar sobre el hotel, sus cabañas y servicios, y facilitar solicitudes de reserva. Te comprometes a usarlo de forma lícita y a no alterar su funcionamiento.",
        "Las fotografías, textos, logotipos y diseños son propiedad de Gardners Hills o se usan con autorización. No pueden reproducirse sin permiso escrito.",
      ],
    },
    {
      titulo: "Solicitudes de reserva",
      parrafos: [
        "Las solicitudes enviadas desde el sitio (por WhatsApp, correo o formulario) no constituyen una reserva confirmada. La reserva queda confirmada cuando Gardners Hills la confirma por escrito y, si aplica, se recibe el anticipo acordado.",
        "En la confirmación se indican el tipo de cabaña, las fechas, el número de huéspedes, la tarifa total con impuestos y las condiciones de pago y cancelación.",
      ],
    },
    {
      titulo: "Tarifas y pagos",
      parrafos: [
        "Las tarifas se expresan en pesos colombianos (COP) e incluyen los impuestos aplicables, salvo que se indique lo contrario. Pueden variar según temporada, disponibilidad y duración de la estancia.",
        "Los huéspedes extranjeros no residentes pueden estar exentos de IVA sobre el alojamiento según la normativa vigente, presentando la documentación migratoria correspondiente.",
      ],
    },
    {
      titulo: "Cancelaciones y cambios",
      parrafos: [
        "Las condiciones de cancelación dependen de la tarifa y la temporada, y se informan antes de confirmar la reserva. Como regla general, los cambios de fecha están sujetos a disponibilidad.",
        "En los casos en que la ley lo permita, el derecho de retracto se ejercerá en los términos del Estatuto del Consumidor (Ley 1480 de 2011).",
      ],
    },
    {
      titulo: "Llegada, salida y estancia",
      lista: [
        "Check-in a partir de las 3:00 p. m. y check-out hasta las 12:00 m. (horarios provisionales; se confirman en la reserva).",
        "Todos los huéspedes, incluidos los menores, deben presentar documento de identidad al llegar, de acuerdo con la ley colombiana.",
        "Los menores de edad deben alojarse con sus padres o con un adulto autorizado por escrito.",
        "La capacidad de cada cabaña es la indicada en su ficha y no puede superarse.",
        "Gardners Hills es un espacio para el descanso: pedimos respetar el silencio de las demás cabañas, especialmente en la noche.",
        "No está permitido fumar dentro de las cabañas.",
      ],
    },
    {
      titulo: "Responsabilidad",
      parrafos: [
        "El huésped responde por los daños que cause en las cabañas o instalaciones. Gardners Hills no se hace responsable por objetos de valor no depositados en la caja fuerte.",
        "La información del sitio se revisa con cuidado, pero puede contener errores o cambiar sin aviso. Lo confirmado por escrito en la reserva prevalece sobre lo publicado.",
      ],
    },
    {
      titulo: "Protección de menores",
      parrafos: [
        "Gardners Hills rechaza la explotación, la pornografía, el turismo sexual y cualquier forma de abuso sexual de niños, niñas y adolescentes, en cumplimiento de la Ley 679 de 2001 y la Ley 1336 de 2009. Cualquier caso será denunciado ante las autoridades.",
      ],
    },
    {
      titulo: "Peticiones, quejas y reclamos",
      parrafos: [
        `Puedes enviar peticiones, quejas, reclamos o sugerencias a ${site.contact.email}. Responderemos dentro de los plazos legales.`,
      ],
    },
    {
      titulo: "Ley aplicable",
      parrafos: ["Estos términos se rigen por las leyes de la República de Colombia."],
    },
  ],
};

export const privacidad: { intro: string; secciones: Seccion[] } = {
  intro:
    "En Gardners Hills cuidamos tus datos con la misma calma con la que cuidamos tu estancia. Esta política explica qué datos recogemos, para qué los usamos y cómo puedes ejercer tus derechos, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.",
  secciones: [
    { titulo: "Responsable del tratamiento", parrafos: [responsable] },
    {
      titulo: "Datos que recogemos",
      lista: [
        "Datos de identificación y contacto: nombre, documento, correo, teléfono y país.",
        "Datos de la reserva: fechas, número de huéspedes, preferencias y solicitudes especiales.",
        "Datos de pago, tratados por las entidades financieras o pasarelas correspondientes.",
        "Datos de navegación recogidos mediante cookies, según la Política de cookies.",
      ],
    },
    {
      titulo: "Para qué los usamos",
      lista: [
        "Gestionar solicitudes, reservas, pagos y facturación.",
        "Cumplir obligaciones legales, como el registro de huéspedes y los reportes a autoridades migratorias y de turismo.",
        "Atender peticiones, quejas y reclamos.",
        "Enviarte información y ofertas de Gardners Hills, solo si lo autorizas. Puedes retirar esa autorización en cualquier momento.",
        "Mejorar el sitio web y nuestros servicios.",
      ],
    },
    {
      titulo: "Tus derechos",
      parrafos: ["Como titular de los datos puedes:"],
      lista: [
        "Conocer, actualizar y rectificar tus datos.",
        "Solicitar prueba de la autorización otorgada.",
        "Ser informado sobre el uso que se da a tus datos.",
        "Revocar la autorización o pedir la supresión de tus datos cuando no exista un deber legal de conservarlos.",
        "Presentar quejas ante la Superintendencia de Industria y Comercio.",
      ],
    },
    {
      titulo: "Cómo ejercerlos",
      parrafos: [
        `Escríbenos a ${site.contact.email} indicando tu nombre, documento y la solicitud. Las consultas se responden en un máximo de diez (10) días hábiles y los reclamos en un máximo de quince (15) días hábiles, según la ley.`,
      ],
    },
    {
      titulo: "Con quién compartimos tus datos",
      parrafos: [
        "Solo con proveedores que nos ayudan a prestar el servicio (por ejemplo, plataformas de reserva, pago, correo o mensajería) y con autoridades cuando la ley lo exige. Estos proveedores pueden estar fuera de Colombia; en ese caso exigimos niveles adecuados de protección.",
      ],
    },
    {
      titulo: "Conservación y seguridad",
      parrafos: [
        "Conservamos los datos durante el tiempo necesario para las finalidades descritas y los plazos que exija la ley. Aplicamos medidas técnicas y administrativas razonables para protegerlos.",
      ],
    },
    {
      titulo: "Cambios en esta política",
      parrafos: ["Podemos actualizar esta política. La versión vigente es siempre la publicada en este sitio, con su fecha de actualización."],
    },
  ],
};

export const cookies: { intro: string; secciones: Seccion[] } = {
  intro:
    "Este sitio usa cookies: pequeños archivos que se guardan en tu navegador. Aquí te contamos cuáles usamos y cómo puedes gestionarlas.",
  secciones: [
    {
      titulo: "Cookies necesarias",
      parrafos: [
        "Permiten que el sitio funcione y recuerdan tus preferencias, como si ya viste la animación de entrada y tu decisión sobre las cookies. No requieren tu consentimiento.",
      ],
      lista: ["gh-intro-seen: evita repetir la animación de entrada en la misma visita.", "gh-cookies: tu elección en el aviso de cookies."],
    },
    {
      titulo: "Cookies de analítica",
      parrafos: [
        "Solo se activan si las aceptas. Nos ayudan a entender cuántas personas visitan el sitio y qué páginas consultan, de forma agregada. Podemos usar Google Analytics; en ese caso Google trata los datos según su propia política.",
      ],
    },
    {
      titulo: "Cómo gestionarlas",
      parrafos: [
        "Puedes aceptar o rechazar las cookies de analítica en el aviso que aparece en tu primera visita. Para cambiar tu decisión, borra las cookies y los datos del sitio desde la configuración de tu navegador y vuelve a entrar.",
      ],
    },
    {
      titulo: "Más información",
      parrafos: [`Si tienes preguntas sobre las cookies o tus datos, escríbenos a ${site.contact.email}.`],
    },
  ],
};
