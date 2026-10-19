import React from 'react';
import { Language } from '../types';
import featuredJuicesImg from '../assets/images/bebidas_tropicales_en_la_cosecha.png';

interface TransitionSectionProps {
  language: Language;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ language }) => {
  return (
    <>
      {/* 1. SECCIÓN DE INICIO: Fondo verde como el menú, texto bajado y sin imagen */}
      <section id="inicio" className="relative pt-44 sm:pt-52 md:pt-60 pb-28 sm:pb-36 bg-[#5B8C2A] text-white overflow-hidden border-b border-[#4A7422]">
        {/* Subtle decorative brand watermark in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.06] text-[18vw] font-black text-white tracking-tighter whitespace-nowrap">
          ECOPACIFIC
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10 text-center flex flex-col items-center">
          {/* Subtítulo: Innovando Alimentos Saludables */}
          <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-white/85 text-center mb-4 block drop-shadow-xs">
            {language === 'es'
              ? 'Innovando Alimentos Saludables'
              : 'Innovating Healthy Foods'}
          </span>

          {/* Título Principal: Transformamos lo que nace del campo */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] text-center max-w-4xl mx-auto text-balance drop-shadow-xs">
            {language === 'es'
              ? 'Transformamos lo que nace del campo'
              : 'Transforming what grows from the land'}
          </h1>
        </div>
      </section>

      {/* 2. FOTO PRODUCTOS DESTACADOS: Abajo del inicio y arriba de nuestras marcas, SOLO LA FOTO NINGÚN TEXTO */}
      <section className="bg-[#FBF9F5] py-8 sm:py-14 px-4 sm:px-8 border-b border-stone-200/60">
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-stone-300/80 bg-stone-100 aspect-[4/3] sm:aspect-[16/10] md:h-[560px]">
          <img
            src={featuredJuicesImg}
            alt="EcoPacific - Bebidas tropicales en la cosecha"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
          />
        </div>
      </section>
    </>
  );
};
