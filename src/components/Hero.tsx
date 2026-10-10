import React from 'react';
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
        {/* YouTube Background Video: Looping non-stop and muted */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube-nocookie.com/embed/ahkl1jnSpKE?autoplay=1&mute=1&loop=1&playlist=ahkl1jnSpKE&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1"
            title="EcoPacific Video"
            className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 scale-125 sm:scale-110 pointer-events-none border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Fallback Image in case video is loading */}
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
    </section>
  );
};
