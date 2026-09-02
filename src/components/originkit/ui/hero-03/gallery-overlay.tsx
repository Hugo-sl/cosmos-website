// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useEffect, useId, type KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import GalleryTunnel from "@/components/originkit/ui/hero-03/gallery-tunnel";
import { useTunnelConfig } from "@/components/originkit/ui/hero-03/use-tunnel-size";

/** Public asset URLs — use a function so preview rewriters stay stable. */
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

const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

type GalleryOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export const GalleryOverlay = ({ open, onClose }: GalleryOverlayProps) => {
  const titleId = useId();
  const reduceMotion = useReducedMotion();
  const { tunnelSize, fade, boost } = useTunnelConfig();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleBackdropKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
      className="fixed inset-0 z-50 flex flex-col bg-[#F9F8F5]"
    >
      <h2 id={titleId} className="sr-only">
        Interactive portrait gallery tunnel
      </h2>

      <div className="relative z-10 flex items-center justify-between px-4 py-4 android-sm:px-6 desktop-sm:px-8">
        <p className="font-tight text-[15px] tracking-[-0.3px] text-[#1d1d1d]/70">
          Hold to speed up · Esc to close
        </p>
        <button
          type="button"
          aria-label="Close gallery"
          onClick={onClose}
          className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-lg border border-solid border-[#c8c8c8] bg-white px-4 font-tight text-[14px] font-medium tracking-[-0.28px] text-[#1d1d1d] transition-[opacity,transform] duration-200 ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1d] active:scale-[0.97] [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90"
        >
          Close
        </button>
      </div>

      <div
        className="relative min-h-0 flex-1"
        onKeyDown={handleBackdropKeyDown}
      >
        <GalleryTunnel
          background="#F9F8F5"
          lineColor="#D5D2C8"
          lineOpacity={50}
          grid={4}
          tunnelSize={tunnelSize}
          speed={reduceMotion ? 0 : 9}
          boost={reduceMotion ? 0 : boost}
          fade={fade}
          label={false}
          images={TUNNEL_IMAGES}
        />
      </div>
    </motion.div>
  );
};
