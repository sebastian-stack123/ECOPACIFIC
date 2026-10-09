import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Language } from '../types';
import harvestFruitsImg from '../assets/images/harvest_fruits_transition_1791495675009.jpg';

interface TransitionSectionProps {
  language: Language;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ language }) => {
  return (
    <section id="transicion" className="relative py-20 sm:py-28 bg-[#FBF9F5] text-stone-900 overflow-hidden border-b border-stone-200/60">
      {/* Decorative subtle brand watermark in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black text-[#5B8C2A] tracking-tighter whitespace-nowrap">
        ECOPACIFIC
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10 text-center flex flex-col items-center">
        {/* Innovando Alimentos Saludables: Centrado, más grande, sin burbujita ni punto */}
        <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#5B8C2A] text-center mb-4 block">
          {language === 'es'
            ? 'Innovando Alimentos Saludables'
            : 'Innovating Healthy Foods'}
        </span>

        {/* Título Principal: Centrado */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#5B8C2A] tracking-tight leading-[1.08] text-center max-w-4xl mx-auto mb-10 text-balance">
          {language === 'es'
            ? 'Más de 20 años transformando lo que nace del campo.'
            : 'Over 20 years transforming what grows from the land.'}
        </h2>

        {/* Fotografía de Cosecha Fresca antes de Nuestras Marcas */}
        <div className="w-full max-w-4xl mb-10 rounded-3xl overflow-hidden shadow-2xl border border-stone-300/70 bg-stone-200 aspect-[16/9] sm:aspect-[21/9]">
          <img
            src={harvestFruitsImg}
            alt="Cosecha fresca y origen natural de EcoPacific"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
          />
        </div>

        {/* Botón Nuestras Marcas abajo de la imagen, centrado y señalando hacia abajo */}
        <a
          href="#marcas"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#5B8C2A] hover:bg-[#4A7422] shadow-md hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>{language === 'es' ? 'Nuestras marcas' : 'Our brands'}</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
