import { ImageResponse } from "next/og";

/** Imagen para compartir en redes (Open Graph / Twitter): fondo negro y nombre en serif */
export const alt = "Gardners Hills · Hotel de cabañas en San Benito Abad, Sucre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function Image() {
  // Fuentes copiadas en app/_fonts para no depender del directorio de trabajo del servidor
  const [serif, serifIt] = await Promise.all([
    fetch(new URL("./_fonts/instrument-serif-latin-400-normal.woff", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("./_fonts/instrument-serif-latin-400-italic.woff", import.meta.url)).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#100f0e", color: "#f5f5f5", padding: "64px 72px", fontFamily: "Serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#bdbdba", fontFamily: "sans-serif" }}>
          <span>San Benito Abad · Sucre</span>
          <span>Hotel de cabañas</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, lineHeight: 0.9, textTransform: "uppercase" }}>Gardners Hills</div>
          <div style={{ fontSize: 58, marginTop: 24, fontStyle: "italic", color: "#d6d6d3" }}>Un refugio donde el tiempo se detiene.</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Serif", data: serif, style: "normal", weight: 400 },
        { name: "Serif", data: serifIt, style: "italic", weight: 400 },
      ],
    },
  );
}
