import React from 'react';
import { X, Sparkles, ShieldCheck, Thermometer, MapPin, PackageCheck } from 'lucide-react';
import { Product, Brand, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface ProductDetailModalProps {
  product: Product | null;
  brand: Brand;
  language: Language;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  brand,
  language,
  onClose,
}) => {
  if (!product) return null;
  const t = UI_TRANSLATIONS[language];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border-4"
        style={{ borderColor: brand.colors.borderAccent }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer shadow-md"
          aria-label={t.brandDetail.modalClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Layout adhering to: foto -> nombre -> frase emocional -> presentaciones -> información técnica */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* 1 & 2. Protagonist Product Photo */}
          <div
            className="md:col-span-5 relative flex items-center justify-center min-h-[300px] md:min-h-[480px] p-8"
            style={{ backgroundColor: brand.colors.secondary }}
          >
            <img
              src={product.imageUrl || brand.heroImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-[360px] w-auto object-contain drop-shadow-2xl"
            />
            <div className="absolute bottom-4 left-4">
              <span
                className="px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md border"
                style={{
                  backgroundColor: brand.colors.buttonBg,
                  color: brand.colors.buttonText,
                  borderColor: brand.colors.buttonBorder,
                }}
              >
                {brand.name}
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Product Category Label */}
              <div
                className="inline-block px-2.5 py-0.5 rounded text-xs font-black uppercase tracking-wider mb-3"
                style={{
                  backgroundColor: brand.colors.badgeBg,
                  color: brand.colors.badgeText,
                }}
              >
                {brand.families.find((f) => f.id === product.familyId)?.name || 'Portafolio'}
              </div>

              {/* 1. Nombre del Producto (Grande y claramente visible) */}
              <h3 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight mb-4">
                {product.name}
              </h3>

              {/* 3. Descripción Emocional (Con gran protagonismo) */}
              <div
                className="p-4 sm:p-5 rounded-2xl border mb-6"
                style={{
                  backgroundColor: brand.colors.secondary,
                  borderColor: brand.colors.cardAccentBorder,
                }}
              >
                <p className="text-base sm:text-lg font-medium text-stone-800 leading-relaxed italic">
                  &ldquo;{product.emotionalDescription}&rdquo;
                </p>
              </div>

              {/* 4. Presentaciones (Mostrar tamaños disponibles) */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block mb-2.5">
                  {t.brandDetail.presentationsLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.presentations.map((size) => (
                    <span
                      key={size}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-stone-100/80 text-stone-800 border border-stone-200/90 shadow-2xs hover:bg-stone-200/60 transition-colors"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Información Técnica (En segundo nivel visual) */}
              <div className="pt-6 border-t border-stone-200 space-y-3">
                <span className="text-xs uppercase tracking-wider text-stone-400 font-bold block">
                  {t.brandDetail.techSpecsLabel}
                </span>

                {product.technicalInfo.ingredients && (
                  <div className="text-xs text-stone-600">
                    <span className="font-bold text-stone-800">
                      {t.brandDetail.ingredients}:
                    </span>{' '}
                    {product.technicalInfo.ingredients}
                  </div>
                )}

                {product.technicalInfo.conservation && (
                  <div className="text-xs text-stone-600">
                    <span className="font-bold text-stone-800">
                      {t.brandDetail.conservation}:
                    </span>{' '}
                    {product.technicalInfo.conservation}
                  </div>
                )}

                {product.technicalInfo.origin && (
                  <div className="text-xs text-stone-600">
                    <span className="font-bold text-stone-800">
                      {t.brandDetail.origin}:
                    </span>{' '}
                    {product.technicalInfo.origin}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-medium">
                {brand.name} · ECOPACIFIC
              </span>
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-black uppercase tracking-wider rounded-full shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border"
                style={{
                  backgroundColor: brand.colors.buttonBg,
                  color: brand.colors.buttonText,
                  borderColor: brand.colors.buttonBorder,
                }}
              >
                {t.brandDetail.modalClose}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
