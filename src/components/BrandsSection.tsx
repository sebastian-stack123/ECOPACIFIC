import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import cocoFreezeImg from '../assets/images/cocofreezeimagenmenu.jpg';
import dhoyImg from '../assets/images/dhoyimagenmenu.jpg';
import ecoloveImg from '../assets/images/imagenmenuecolove.jpg';
import hortilistoImg from '../assets/images/hortilistoimagenlogo.jpg';

interface BrandsSectionProps {
  language: Language;
  onSelectBrand: (slug: string) => void;
}

const HOMEPAGE_BRANDS = [
  { id: 'coco-freeze', name: 'Coco Freeze', slug: 'coco-freeze', heroImage: cocoFreezeImg },
  { id: 'dhoy', name: "D'Hoy", slug: 'dhoy', heroImage: dhoyImg },
  { id: 'ecolove', name: 'EcoLove', slug: 'ecolove', heroImage: ecoloveImg },
  { id: 'hortilisto', name: 'Hortilisto', slug: 'hortilisto', heroImage: hortilistoImg },
];

export const BrandsSection: React.FC<BrandsSectionProps> = ({
  language,
  onSelectBrand,
}) => {
  const t = UI_TRANSLATIONS[language];

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

        {/* 4 Cards con SOLO el logo sin modificaciones */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HOMEPAGE_BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.slug)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-56 sm:h-64 flex items-center justify-center bg-white border border-stone-200/90 hover:border-[#5B8C2A] p-4 sm:p-6"
            >
              <img
                src={brand.heroImage}
                alt={brand.name}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
