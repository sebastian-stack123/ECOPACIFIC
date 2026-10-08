import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Language } from '../types';

interface TransitionSectionProps {
  language: Language;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ language }) => {
  return (
    <section id="transicion" className="relative py-24 sm:py-32 bg-[#FBF9F5] text-stone-900 overflow-hidden border-b border-stone-200/60">
      {/* Decorative subtle brand watermark in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black text-[#1E5638] tracking-tighter whitespace-nowrap">
        ECOPACIFIC
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10 text-center flex flex-col items-center">
        {/* Innovando Alimentos Saludables: Centrado, más grande, sin burbujita ni punto */}
        <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#286E48] text-center mb-4 block">
          {language === 'es'
            ? 'Innovando Alimentos Saludables'
            : 'Innovating Healthy Foods'}
        </span>

        {/* Título Principal: Centrado */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1E5638] tracking-tight leading-[1.08] text-center max-w-4xl mx-auto mb-6 text-balance">
          {language === 'es'
            ? 'Más de 20 años transformando lo que nace del campo.'
            : 'Over 20 years transforming what grows from the land.'}
        </h2>

        {/* Texto Ecopacific cree que un producto...: Centrado */}
        <p className="text-lg sm:text-xl md:text-2xl text-stone-700 font-normal leading-relaxed text-center max-w-3xl mx-auto mb-10 text-balance">
          {language === 'es'
            ? 'Ecopacific cree que un producto debe ser delicioso, saludable, innovador y natural.'
            : 'Ecopacific believes that a product must be delicious, healthy, innovative, and natural.'}
        </p>

        {/* Botón Nuestras Marcas abajo de todo, centrado y señalando hacia abajo */}
        <a
          href="#marcas"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#1E5638] hover:bg-[#18482E] shadow-md hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>{language === 'es' ? 'Nuestras marcas' : 'Our brands'}</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
