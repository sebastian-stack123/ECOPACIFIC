import React from 'react';
import { Language } from '../types';
import cocofreezefotoinicioImg from '../assets/images/cocofreezefotoinicio.png';

interface TransitionSectionProps {
  language: Language;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ language }) => {
  return (
    <>
      {/* 1. SECCIÓN DE INICIO: Fondo verde acortado y más compacto */}
      <section id="inicio" className="relative pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 bg-[#5B8C2A] text-white overflow-hidden border-b border-[#4A7422]">
        {/* Subtle decorative brand watermark in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.05] text-[16vw] font-black text-white tracking-tighter whitespace-nowrap">
          ECOPACIFIC
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 text-center flex flex-col items-center">
          {/* Subtítulo: Innovando Alimentos Saludables */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/85 text-center mb-2.5 block drop-shadow-xs">
            {language === 'es'
              ? 'Innovando Alimentos Saludables'
              : 'Innovating Healthy Foods'}
          </span>

          {/* Título Principal: Transformamos lo que nace del campo */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] text-center max-w-3xl mx-auto text-balance drop-shadow-xs">
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
            src={cocofreezefotoinicioImg}
            alt="EcoPacific - Coco Freeze en el inicio"
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
