// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useState } from "react";
import { GalleryOverlay } from "@/components/originkit/ui/hero-03/gallery-overlay";
import { HeroContent } from "@/components/originkit/ui/hero-03/hero-content";
import { PerspectiveBackground } from "@/components/originkit/ui/hero-03/perspective-background";

export const Section12Hero = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handleExplore = () => {
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
  };

  const handleBook = () => {
    window.location.href = "/contact";
  };

  return (
    <section
      aria-label="Portrait perspective gallery"
      className="relative isolate w-full overflow-hidden bg-[#F9F8F5]"
    >
      <div className="relative mx-auto flex h-[100dvh] min-h-[560px] w-full max-w-[1600px] flex-col wide-lg:max-w-none">
        <PerspectiveBackground />

        <div className="pointer-events-none relative z-20 flex flex-1 flex-col items-center justify-center px-4 pb-8 pt-20 sm:pb-12 sm:pt-24 ipad:px-12 desktop-sm:px-6 desktop-sm:pb-20 desktop-sm:pt-6">
          <HeroContent onExplore={handleExplore} onBook={handleBook} />
        </div>
      </div>

      <GalleryOverlay open={galleryOpen} onClose={handleCloseGallery} />
    </section>
  );
};
