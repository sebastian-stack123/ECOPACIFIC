import React from 'react';
import { Language } from '../types';
import dhoyImg from '../assets/images/brand_dhoy_citrus_1790632694674.jpg';

interface OriginSectionProps {
  language: Language;
}

export const OriginSection: React.FC<OriginSectionProps> = ({ language }) => {
  return (
    <section id="origen" className="py-20 sm:py-32 bg-[#FBF9F5] text-stone-900 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Centered Headers & Copy */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          {/* Agricultores sin burbuja, más grande y visible al igual que Innovando Alimentos Saludables */}
          <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-[#286E48] text-center mb-4 block">
            {language === 'es' ? 'Agricultores' : 'Farmers'}
          </span>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1E5638] leading-[1.08] mb-6">
            {language === 'es' ? 'El éxito comienza en el campo.' : 'Success begins in the field.'}
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-stone-700 font-normal leading-relaxed max-w-3xl mx-auto">
            {language === 'es'
              ? 'Apoyamos a más de 100 pequeños agricultores de Ecuador con confianza, cercanía y prácticas responsables'
              : 'We support over 100 small farmers across Ecuador with trust, proximity, and responsible practices'}
          </p>
        </div>

        {/* Large Centered Photo without text overlay or cards */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-stone-200 border border-stone-300/60 aspect-[16/9] sm:aspect-[21/9]">
          <img
            src={dhoyImg}
            alt="Agricultores de Ecuador - EcoPacific"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
