import React from 'react';
import { Leaf, Droplets, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface SustainabilitySectionProps {
  language: Language;
}

export const SustainabilitySection: React.FC<SustainabilitySectionProps> = ({
  language,
}) => {
  const t = UI_TRANSLATIONS[language];
  const s = t.sustainabilitySection;

  return (
    <section id="sostenibilidad" className="py-24 sm:py-36 bg-[#F3EFE6] text-stone-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-stone-900 mb-3 leading-[1.08]">
            {s.title}
          </h2>
          <p className="text-xl sm:text-2xl text-[#5B8C2A] font-medium">
            {s.subtitle}
          </p>
        </div>

        {/* 3 Direct Environmental Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-3 border border-[#5B8C2A]/30">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#5B8C2A] mb-1">
              Prácticas agrícolas de bajo impacto
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Técnicas sostenibles que preservan la vitalidad del suelo en los campos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-3 border border-[#5B8C2A]/30">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#5B8C2A] mb-1">
              Reducción de huella y cero desperdicio
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Eliminamos el desperdicio y minimizamos el uso de materiales no reciclables.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-3 border border-[#5B8C2A]/30">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#5B8C2A] mb-1">
              Política de energía y agua
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Optimización activa de consumo de agua y energía en todas las plantas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
