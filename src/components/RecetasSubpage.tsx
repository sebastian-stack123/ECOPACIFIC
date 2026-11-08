import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Language } from '../types';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface RecetasSubpageProps {
  language: Language;
  onNavigateHome: () => void;
  onNavigate: (path: string) => void;
  onLanguageChange: (lang: Language) => void;
  onOpenContact?: () => void;
}

export const RecetasSubpage: React.FC<RecetasSubpageProps> = ({
  language,
  onNavigateHome,
  onNavigate,
  onLanguageChange,
  onOpenContact,
}) => {
  const isEs = language === 'es';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1A3815] text-white selection:bg-[#5B8C2A] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentPath="/recetas/"
        onNavigate={onNavigate}
        language={language}
        onLanguageChange={onLanguageChange}
        onOpenContact={onOpenContact || (() => onNavigate('/contacto'))}
      />

      {/* Main Content */}
      <main className="flex-grow pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-3xl mx-auto w-full text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-6">
            {isEs ? 'Recetas' : 'Recipes'}
          </h1>

          {/* Subtitle & description */}
          <p className="text-lg sm:text-2xl text-emerald-100/90 font-medium max-w-2xl mx-auto mb-4">
            {isEs
              ? 'Espacio culinario en preparación'
              : 'Culinary space in preparation'}
          </p>

          <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed mb-10 text-balance">
            {isEs
              ? 'Muy pronto compartiremos recetas saludables, fáciles y llenas de sabor utilizando nuestros aceites de coco, aceites de aguacate, bebidas vegetales y productos naturales EcoLove.'
              : 'Very soon we will share wholesome, easy, and flavorful recipes crafted with our coconut oils, avocado oils, plant-based drinks, and natural EcoLove essentials.'}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/marcas/ecolove')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-stone-900 font-bold text-sm hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isEs ? 'Volver a EcoLove' : 'Back to EcoLove'}</span>
            </button>

            <button
              type="button"
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-sm transition-all cursor-pointer"
            >
              <span>{isEs ? 'Ir al inicio' : 'Go to Home'}</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={onNavigate}
        language={language}
        onOpenNosotros={() => onNavigate('/nosotros')}
        onOpenSostenibilidad={() => onNavigate('/sostenibilidad')}
        onOpenContact={onOpenContact || (() => onNavigate('/contacto'))}
      />
    </div>
  );
};
