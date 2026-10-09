import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Language } from '../types';
import heroCitrusImg from '../assets/images/hero_citrus_harvest_1790733004665.jpg';

interface HeroProps {
  language: Language;
  onExploreBrands: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onExploreBrands }) => {
  const handleScrollDown = () => {
    const el = document.querySelector('#transicion') || document.querySelector('#marcas');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Fullscreen Video / Media Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* HTML5 Background Video with High-Res Poster */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroCitrusImg}
          className="w-full h-full object-cover object-center scale-105"
        >
          <source
            src="https://archive.org/download/car_000063/car_000063_p1_access.mp4"
            type="video/mp4"
          />
        </video>

        {/* Fallback Image in case video is loading or paused */}
        <img
          src={heroCitrusImg}
          alt="Cosecha de frutas frescas, cítricos y cocos de ECOPACIFIC"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center absolute inset-0 -z-10"
        />

        {/* Very Subtle Cinematic Scrim to ensure AA text contrast while preserving video brilliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/45" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/20 to-black/60" />
      </div>

      {/* Central Minimal, High-Impact Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center select-none">
        {/* Main Headline: "Del campo a tu día." */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-6 leading-[1.02] text-balance drop-shadow-xl">
          {language === 'es' ? 'Del campo a tu día.' : 'From the farm to your day.'}
        </h1>

        {/* Subline: "Alimentos y bebidas creados desde el origen." */}
        <p className="text-lg sm:text-2xl md:text-3xl text-stone-100 font-light max-w-3xl mb-10 leading-relaxed text-balance drop-shadow-md">
          {language === 'es'
            ? 'Alimentos y bebidas creados desde el origen.'
            : 'Food and beverages crafted from the source.'}
        </p>

        {/* Single CTA: "Descubre EcoPacific" */}
        <button
          onClick={handleScrollDown}
          className="px-10 py-4 sm:px-12 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-wider text-[#5B8C2A] bg-white hover:bg-stone-100 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
        >
          {language === 'es' ? 'Descubre EcoPacific' : 'Discover EcoPacific'}
        </button>
      </div>

      {/* Bottom Scroll Cue */}
      <button
        onClick={handleScrollDown}
        aria-label="Desplazar hacia abajo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
