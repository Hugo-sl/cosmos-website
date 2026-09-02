import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ChevronRight, Sparkles, Layers } from 'lucide-react';

export interface ArtworkInfo {
  src: string;
  title: string;
}

interface Hero03Props {
  title?: string;
  subtitle?: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  artworks: ArtworkInfo[];
}

export const Hero03: React.FC<Hero03Props> = ({
  title = 'COSMOS',
  subtitle = '« L’Énergie du Street Art. La Rigueur de l’Action Painting. »',
  badge = 'SCÉNOGRAPHIE 3D ORIGINKIT — PERSPECTIVE TUNNEL',
  ctaText = "Entrer dans l'Exposition",
  ctaLink = '/galerie',
  artworks = [],
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const mainArt = artworks[0]?.src;
  const leftWallArts = artworks.slice(1, 4);
  const rightWallArts = artworks.slice(4, 7);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full overflow-hidden select-none bg-[#090807] text-[#F9F8F5] flex items-center justify-center"
      style={{ perspective: '1100px' }}
    >
      {/* 3D World Stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {/* Center Depth Focal Wall (Focal Painting) */}
        {mainArt && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-[500px] sm:w-[720px] h-[340px] sm:h-[480px] bg-[#141413] border-2 border-[#C4B59D]/40 rounded-lg overflow-hidden shadow-[0_0_80px_rgba(196,181,157,0.25)]"
            style={{ transform: 'translateZ(-550px)' }}
          >
            <img src={mainArt} alt={artworks[0]?.title || 'Artwork'} className="w-full h-full object-cover brightness-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-[#090807]/40" />
          </motion.div>
        )}

        {/* Left 3D Perspective Wall Panel */}
        <div
          className="absolute left-[-15%] sm:left-[-5%] top-1/2 -translate-y-1/2 flex flex-col gap-6"
          style={{ transform: 'rotateY(55deg) translateZ(-150px) scale(0.95)' }}
        >
          {leftWallArts.map((art, idx) => (
            <div key={idx} className="w-60 sm:w-80 h-40 sm:h-52 bg-[#141413] border border-white/20 rounded-md overflow-hidden shadow-2xl relative group">
              <img src={art.src} alt={art.title} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-2 bg-[#090807]/90 text-[10px] font-mono text-[#C4B59D] font-bold uppercase tracking-wider">
                {art.title}
              </div>
            </div>
          ))}
        </div>

        {/* Right 3D Perspective Wall Panel */}
        <div
          className="absolute right-[-15%] sm:right-[-5%] top-1/2 -translate-y-1/2 flex flex-col gap-6"
          style={{ transform: 'rotateY(-55deg) translateZ(-150px) scale(0.95)' }}
        >
          {rightWallArts.map((art, idx) => (
            <div key={idx} className="w-60 sm:w-80 h-40 sm:h-52 bg-[#141413] border border-white/20 rounded-md overflow-hidden shadow-2xl relative group">
              <img src={art.src} alt={art.title} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-2 bg-[#090807]/90 text-[10px] font-mono text-[#C4B59D] font-bold uppercase tracking-wider">
                {art.title}
              </div>
            </div>
          ))}
        </div>

        {/* Floor Subtle Grid */}
        <div
          className="absolute bottom-[-35%] w-[1600px] h-[800px] opacity-30 pointer-events-none"
          style={{
            transform: 'rotateX(78deg) translateZ(-180px)',
            backgroundImage: 'radial-gradient(circle, rgba(196,181,157,0.4) 1px, transparent 1px)',
            backgroundSize: '35px 35px',
          }}
        />
      </motion.div>

      {/* Subtle Ambient Vignette (Kept Light so artworks shine) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_45%,#090807_95%)] pointer-events-none" />

      {/* Floating Center Stage Content */}
      <div className="relative z-30 h-full w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between pt-28 pb-10 pointer-events-auto">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#C4B59D] font-bold">
            <Sparkles className="w-4 h-4 text-[#C4B59D]" />
            <span>{badge}</span>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-mono text-[#9C9991] tracking-widest hidden sm:flex">
            <span>ORIGINKIT BETA</span>
            <span>·</span>
            <span>10 ŒUVRES</span>
          </div>
        </div>

        {/* Center Monumental Title & Glass Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="my-auto text-center max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-mono uppercase tracking-[0.3em] text-[#C4B59D] font-bold shadow-2xl">
            <Layers className="w-3.5 h-3.5" />
            <span>EXPOSITION MONOGRAPHIQUE 3D</span>
          </div>

          <h1 className="font-serif-display text-7xl sm:text-9xl lg:text-[13rem] font-bold tracking-tighter leading-[0.8] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            {title}
          </h1>

          <p className="font-serif-display italic text-2xl sm:text-4xl text-[#C4B59D] font-normal leading-snug max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        </motion.div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/15 pt-6">
          <div className="text-[10px] font-mono text-[#9C9991] uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C4B59D] animate-pulse" />
            <span>Inclinez le curseur pour explorer la profondeur 3D</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#F9F8F5] text-[#141413] text-xs font-mono uppercase tracking-[0.2em] font-bold hover:bg-[#C4B59D] transition-colors shadow-2xl"
            >
              <span>{ctaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#exhibition-details"
              className="p-4 bg-[#141413]/80 backdrop-blur-md border border-white/20 text-[#F9F8F5] hover:bg-[#F9F8F5] hover:text-[#141413] transition-colors"
              aria-label="Défiler vers la suite"
            >
              <ChevronRight className="w-4 h-4 rotate-90" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero03;
