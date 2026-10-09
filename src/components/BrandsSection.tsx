import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BRANDS_DATA } from '../data/brandsData';

interface BrandsSectionProps {
  language: Language;
  onSelectBrand: (slug: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({
  language,
  onSelectBrand,
}) => {
  const t = UI_TRANSLATIONS[language];
  const brandsList = Object.values(BRANDS_DATA);

  return (
    <section id="marcas" className="py-16 sm:py-24 bg-white text-stone-900 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Centered Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#5B8C2A] mb-2 block">
            ECOPACIFIC
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#5B8C2A] mb-3">
            {t.brandsSection.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-stone-700 max-w-xl mx-auto">
            {language === 'es'
              ? 'Más de 200 productos en todo el Ecuador.'
              : 'Over 200 products across Ecuador.'}
          </p>
        </div>

        {/* 4 Cards Side-by-Side (2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {brandsList.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.slug)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-72 sm:h-84 flex flex-col justify-end items-center bg-stone-900 border border-stone-200"
            >
              {/* Image with subtle zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={brand.heroImage}
                  alt={brand.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out brightness-90"
                />
                {/* Legibility Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              </div>

              {/* Centered Large Brand Name */}
              <div className="relative z-10 p-5 sm:p-6 w-full flex flex-col items-center justify-end text-center pb-6 sm:pb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-3xl font-black tracking-tight text-white text-center drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                  {brand.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
