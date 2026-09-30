import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { Language } from '../types';

interface TransitionSectionProps {
  language: Language;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ language }) => {
  return (
    <section id="transicion" className="relative py-20 sm:py-28 bg-[#FBF9F5] text-stone-900 overflow-hidden border-b border-stone-200/60">
      {/* Decorative subtle brand watermark in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] text-[18vw] font-black text-[#1E5638] tracking-tighter whitespace-nowrap">
        ECOPACIFIC
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="max-w-4xl">
          {/* Official Slogan Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E5638]/10 text-[#1E5638] text-xs font-bold uppercase tracking-widest mb-6 border border-[#1E5638]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E5638]" />
            <span>
              {language === 'es'
                ? 'Innovando Alimentos Saludables'
                : 'Innovating Healthy Foods'}
            </span>
          </div>

          {/* Statement requested by the user */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1E5638] tracking-tight leading-[1.08] text-balance mb-6">
            {language === 'es'
              ? 'Más de 20 años transformando lo que nace del campo.'
              : 'Over 20 years transforming what grows from the land.'}
          </h2>

          {/* Real corporate text without invented marketing copy */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-200">
            <p className="text-base sm:text-lg text-stone-700 font-normal leading-relaxed">
              {language === 'es'
                ? 'Ecopacific cree que un producto debe ser delicioso, saludable, innovador y natural.'
                : 'Ecopacific believes that a product must be delicious, healthy, innovative, and natural.'}
            </p>

            <a
              href="#marcas"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#1E5638] hover:text-[#18482E] shrink-0"
            >
              <span>{language === 'es' ? 'Nuestras marcas' : 'Our brands'}</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
