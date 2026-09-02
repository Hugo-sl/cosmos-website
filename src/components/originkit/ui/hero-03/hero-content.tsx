// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/originkit/ui/hero-03/button";

/** ease-out-cubic */
const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

type HeroContentProps = {
  onExplore: () => void;
  onBook: () => void;
};

export const HeroContent = ({ onExplore, onBook }: HeroContentProps) => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 14, filter: "blur(4px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: {
            type: "tween" as const,
            duration: 0.45,
            ease: EASE_OUT,
            delay,
          },
        };

  return (
    <div className="pointer-events-none relative z-20 flex w-full max-w-[378px] flex-col items-center gap-[34px] ipad:max-w-[490px] ipad:gap-[44px] desktop-sm:max-w-[502px] desktop-sm:gap-8">
      {/* Soft cream veil so tunnel lines don't fight the type */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[360px] -translate-x-1/2 -translate-y-1/2 bg-[#F9F8F5] blur-[36px] ipad:h-[497px] ipad:w-[591px] ipad:blur-[56px] desktop-sm:h-[364px] desktop-sm:w-[433px] desktop-sm:blur-[41px]"
      />

      <div className="relative flex w-full flex-col items-center gap-[34px] ipad:gap-[44px] desktop-sm:gap-8">
        <div className="flex w-full flex-col items-center gap-[17px] ipad:gap-[22px] desktop-sm:gap-4">
          <motion.h1
            {...reveal(0.12)}
            className="w-full max-w-[378px] text-center font-serif-display text-[56px] font-bold leading-[54px] tracking-[-1.38px] text-[#1d1d1d] text-balance ipad:max-w-[490px] ipad:text-[76px] ipad:leading-[75px] ipad:tracking-[-1.86px] desktop-sm:max-w-[502px] desktop-sm:text-[88px] desktop-sm:leading-[80px] desktop-sm:tracking-[-2.04px]"
          >
            COSMOS
          </motion.h1>

          <motion.p
            {...reveal(0.22)}
            className="w-full max-w-[338px] text-center font-serif-display italic text-[16px] leading-normal tracking-[-0.28px] text-[#1d1d1d]/80 text-pretty ipad:max-w-[438px] ipad:text-[20px] ipad:tracking-[-0.36px] desktop-sm:max-w-[360px] desktop-sm:text-[20px] desktop-sm:leading-[28px] desktop-sm:tracking-[-0.34px]"
          >
            « L'Énergie du Street Art. La Rigueur de l'Action Painting. »
          </motion.p>
        </div>

        <motion.div
          {...reveal(0.32)}
          className="pointer-events-auto flex flex-nowrap items-center justify-center gap-[17px] ipad:gap-[22px] desktop-sm:gap-4"
        >
          <Button variant="primary" aria-label="Explorer la Galerie" onClick={onExplore}>
            Explorer la Galerie
          </Button>
          <Button variant="secondary" aria-label="Visite d'Atelier" onClick={onBook}>
            Visite d'Atelier
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
