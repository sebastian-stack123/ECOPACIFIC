import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
        {/* Simple, Non-overwhelming Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#5B8C2A] mb-1.5 block">
              ECOPACIFIC
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#5B8C2A]">
              {t.brandsSection.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md sm:text-right">
            {language === 'es'
              ? 'Más de 200 productos en todo el Ecuador.'
              : 'Over 200 products across Ecuador.'}
          </p>
        </div>

        {/* 4 Compact Cards Side-by-Side (2 cols mobile, 4 cols desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {brandsList.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.slug)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-72 sm:h-80 flex flex-col justify-end bg-stone-900 border border-stone-200"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              </div>

              {/* Compact Card Content */}
              <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-between h-full">
                {/* Brand dot badge */}
                <div className="flex justify-end">
                  <span
                    className="w-3 h-3 rounded-full border border-white shadow-xs"
                    style={{ backgroundColor: brand.colors.buttonBg }}
                    title={brand.name}
                  />
                </div>

                {/* Bottom details */}
                <div>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-white mb-1">
                    {brand.name}
                  </h3>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-2xs sm:text-xs text-white/80 font-medium">
                      {language === 'es' ? 'Ver marca' : 'View brand'}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#5B8C2A] flex items-center justify-center transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
