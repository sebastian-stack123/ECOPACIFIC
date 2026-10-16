import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import cocoFreezeImg from '../assets/images/imagencocofreeze.jpg';
import dhoyImg from '../assets/images/dhoy_marca.jpg';
import ecoloveImg from '../assets/images/imagenmenuecolove.jpg';
import hortilistoImg from '../assets/images/hortilistoimagenlogo.jpg';

interface BrandsSectionProps {
  language: Language;
  onSelectBrand: (slug: string) => void;
}

interface BrandCardItem {
  id: string;
  name: string;
  slug: string;
  heroImage: string;
  imageFit: 'cover' | 'contain';
  objectPosition?: string;
  imageScale?: string;
  boxPadding?: string;
}

const HOMEPAGE_BRANDS: BrandCardItem[] = [
  {
    id: 'coco-freeze',
    name: 'Coco Freeze',
    slug: 'coco-freeze',
    heroImage: cocoFreezeImg,
    imageFit: 'contain',
    objectPosition: 'center center',
    imageScale: 'scale-[1.14] sm:scale-[1.18] group-hover:scale-[1.24]',
    boxPadding: 'p-1',
  },
  {
    id: 'dhoy',
    name: "D'Hoy",
    slug: 'dhoy',
    heroImage: dhoyImg,
    imageFit: 'contain',
    objectPosition: 'center center',
    imageScale: 'scale-95 group-hover:scale-105',
    boxPadding: 'p-4 sm:p-5',
  },
  {
    id: 'ecolove',
    name: 'EcoLove',
    slug: 'ecolove',
    heroImage: ecoloveImg,
    imageFit: 'cover',
    objectPosition: 'center 8%',
    imageScale: 'scale-100 group-hover:scale-105',
    boxPadding: 'p-0',
  },
  {
    id: 'hortilisto',
    name: 'Hortilisto',
    slug: 'hortilisto',
    heroImage: hortilistoImg,
    imageFit: 'cover',
    objectPosition: 'center 10%',
    imageScale: 'scale-100 group-hover:scale-105',
    boxPadding: 'p-0',
  },
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
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
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

        {/* 4 Cards bonitas en cuadros con imagen y nombre */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOMEPAGE_BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.slug)}
              className="group relative bg-[#FAFAF8] hover:bg-white rounded-3xl p-5 sm:p-6 border-2 border-stone-200/90 hover:border-[#5B8C2A] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-2"
            >
              <div>
                {/* Cuadro contenedor de la imagen */}
                <div
                  className={`w-full h-56 sm:h-64 rounded-2xl bg-white ${
                    brand.boxPadding || 'p-0'
                  } flex items-center justify-center overflow-hidden border border-stone-200/70 shadow-inner group-hover:border-[#5B8C2A]/40 transition-colors relative`}
                >
                  <img
                    src={brand.heroImage}
                    alt={brand.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    style={{
                      objectPosition: brand.objectPosition || 'center center',
                    }}
                    className={`w-full h-full transition-transform duration-500 ${
                      brand.imageFit === 'cover'
                        ? 'object-cover'
                        : 'object-contain'
                    } ${brand.imageScale || ''}`}
                  />
                </div>

                {/* Título de la marca sin descripciones */}
                <div className="mt-4">
                  <h3 className="text-2xl font-black text-stone-900 group-hover:text-[#5B8C2A] transition-colors">
                    {brand.name}
                  </h3>
                </div>
              </div>

              {/* Pie del cuadro con botón de acción */}
              <div className="mt-5 pt-3.5 border-t border-stone-200/60 flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5B8C2A]">
                <span>{language === 'es' ? 'Ver marca' : 'Explore brand'}</span>
                <div className="w-8 h-8 rounded-full bg-[#5B8C2A]/10 group-hover:bg-[#5B8C2A] text-[#5B8C2A] group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
