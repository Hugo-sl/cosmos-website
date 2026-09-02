// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useReducedMotion } from "framer-motion";
import GalleryTunnel from "@/components/originkit/ui/hero-03/gallery-tunnel";
import { useTunnelConfig } from "@/components/originkit/ui/hero-03/use-tunnel-size";

/** Public asset URLs for all 10 COSMOS artworks */
function asset(file: string) {
  return `/originkit/hero-03/${file}`;
}

const TUNNEL_IMAGES = [
  { src: asset("cosmos-the-wall.webp"), alt: "The Wall" },
  { src: asset("cosmos-cuba-libre.webp"), alt: "Cuba Libre" },
  { src: asset("cosmos-sierra-nevada.webp"), alt: "Sierra Nevada" },
  { src: asset("cosmos-stoned-again.webp"), alt: "Stoned Again" },
  { src: asset("cosmos-romeo-juliette.webp"), alt: "Roméo & Juliette" },
  { src: asset("cosmos-only-you.webp"), alt: "Only You" },
  { src: asset("cosmos-20-minutes.webp"), alt: "20 Minutes" },
  { src: asset("cosmos-entity.webp"), alt: "Entity" },
  { src: asset("cosmos-camping-car.webp"), alt: "Camping Car" },
  { src: asset("cosmos-various-letters.webp"), alt: "Various Letters" },
];

/**
 * Animated Three.js gallery tunnel.
 * Click/hold empty areas to boost; UI stays clickable above.
 */
export const PerspectiveBackground = () => {
  const reduceMotion = useReducedMotion();
  const { tunnelSize, fade, boost } = useTunnelConfig();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      <GalleryTunnel
        background="#F9F8F5"
        lineColor="#D5D2C8"
        lineOpacity={45}
        grid={4}
        tunnelSize={tunnelSize}
        speed={reduceMotion ? 0 : 9}
        boost={reduceMotion ? 0 : boost}
        fade={fade}
        label={false}
        images={TUNNEL_IMAGES}
        style={{ width: "100%", height: "100%" }}
      />

      {/* Soft center veil — matching COSMOS site paper background (#F9F8F5) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,248,245,0.55)_0%,rgba(249,248,245,0.22)_40%,transparent_64%)] ipad:bg-[radial-gradient(ellipse_at_center,rgba(249,248,245,0.62)_0%,rgba(249,248,245,0.3)_38%,transparent_62%)] desktop-sm:bg-[radial-gradient(ellipse_at_center,rgba(249,248,245,0.72)_0%,rgba(249,248,245,0.38)_36%,transparent_60%)]" />
    </div>
  );
};
