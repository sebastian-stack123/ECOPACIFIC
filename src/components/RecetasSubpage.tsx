import React, { useState, useEffect } from 'react';
import { ArrowLeft, Menu, X, Utensils, ChefHat, Sparkles, Heart } from 'lucide-react';
import { Language } from '../types';
import ecoloveTransparentImg from '../assets/images/ecolove_transparent.png';

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const renderEcoLoveLogo = () => (
    <div className="w-13 h-13 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center p-2 sm:p-2.5 shadow-md shrink-0 overflow-hidden">
      <img
        src={ecoloveTransparentImg}
        alt="EcoLove"
        className="w-[80%] sm:w-[82%] h-auto max-h-[80%] object-contain drop-shadow-xs"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#1A3815] text-white selection:bg-[#5B8C2A] selection:text-white">
      {/* ========================================================
          1. NAVBAR SUPERIOR ESTILO ECOLOVE
          ======================================================== */}
      <header className="sticky top-0 left-0 right-0 z-40 shadow-lg bg-[#1A3815] transition-colors border-b border-green-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between relative">
          {/* IZQUIERDA: Menú de 3 rayitas */}
          <div className="flex items-center gap-3 z-10">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -ml-2 rounded-xl text-white hover:bg-white/15 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* CENTRO: Logo oficial de EcoLove COMPLETAMENTE CENTRADO */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto z-10 max-w-[55%] sm:max-w-[65%]">
            <button
              type="button"
              onClick={() => onNavigate('/marcas/ecolove')}
              className="cursor-pointer flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none"
              aria-label="EcoLove Inicio"
            >
              {renderEcoLoveLogo()}
            </button>
          </div>

          {/* DERECHA: Enlace a EcoLove y selector de idioma */}
          <div className="flex items-center gap-2.5 sm:gap-4 z-10">
            <button
              type="button"
              onClick={() => onNavigate('/marcas/ecolove')}
              className="hidden sm:inline-block text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:text-yellow-300 transition-colors cursor-pointer"
            >
              {isEs ? 'PRODUCTOS' : 'PRODUCTS'}
            </button>

            {onLanguageChange && (
              <div className="flex items-center bg-black/25 backdrop-blur-xs border border-white/30 rounded-full p-0.5 text-xs text-white shadow-xs font-sans tracking-normal select-none">
                <button
                  type="button"
                  onClick={() => onLanguageChange('es')}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold font-sans text-xs leading-none flex items-center justify-center ${
                    language === 'es'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-white/90 hover:text-white'
                  }`}
                  aria-label="Cambiar idioma a Español"
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold font-sans text-xs leading-none flex items-center justify-center ${
                    language === 'en'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-white/90 hover:text-white'
                  }`}
                  aria-label="Change language to English"
                >
                  EN
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ========================================================
          DRAWER LATERAL (Menú de 3 Rayitas con estilo EcoLove)
          ======================================================== */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop con desenfoque suave */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Panel deslizante con el color de EcoLove */}
          <div className="relative w-80 max-w-[85vw] h-full shadow-2xl p-6 flex flex-col justify-between z-10 transition-transform bg-[#1A3815]">
            <div>
              {/* Header del menú con logo y botón cerrar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div className="min-h-11 flex items-center">
                  {renderEcoLoveLogo()}
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1.5 rounded-lg text-white hover:bg-white/15 transition-colors cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Enlaces de navegación */}
              <nav className="mt-8 flex flex-col gap-4 text-base font-bold text-white">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onNavigateHome();
                  }}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-center cursor-pointer text-yellow-300 font-bold"
                >
                  <ArrowLeft className="w-4 h-4 shrink-0" />
                  <span className="text-center">{isEs ? 'Ecopacific Corporativo' : 'Corporate Ecopacific'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onNavigate('/marcas/ecolove');
                  }}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left cursor-pointer"
                >
                  {isEs ? 'Inicio EcoLove' : 'EcoLove Home'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onNavigate('/marcas/ecolove#historia');
                  }}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left cursor-pointer"
                >
                  {isEs ? 'Historia' : 'Story'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onNavigate('/marcas/ecolove#productos');
                  }}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left cursor-pointer"
                >
                  {isEs ? 'Productos' : 'Products'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onNavigate('/recetas/');
                  }}
                  className="px-3 py-2.5 rounded-xl bg-white/15 text-yellow-300 text-left cursor-pointer flex items-center justify-between"
                >
                  <span>{isEs ? 'Recetas' : 'Recipes'}</span>
                  <span className="text-xs bg-yellow-400/20 text-yellow-200 px-2 py-0.5 rounded-full font-bold">EcoLove</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsDrawerOpen(false);
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      onNavigate('/contacto');
                    }
                  }}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left cursor-pointer flex items-center justify-between"
                >
                  <span>{isEs ? 'Contacto' : 'Contact'}</span>
                </button>
              </nav>
            </div>

            {/* Pie del menú con selector de idioma */}
            <div className="pt-6 border-t border-white/15 flex flex-col gap-4">
              {onLanguageChange && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80 font-medium">
                    {isEs ? 'Idioma / Language:' : 'Language / Idioma:'}
                  </span>
                  <div className="flex items-center bg-black/25 border border-white/30 rounded-full p-0.5 text-xs text-white shadow-xs font-sans tracking-normal select-none">
                    <button
                      type="button"
                      onClick={() => onLanguageChange('es')}
                      className={`px-2.5 py-1 rounded-full font-bold font-sans text-xs leading-none flex items-center justify-center transition-all cursor-pointer ${
                        language === 'es' ? 'bg-white text-stone-900 shadow-xs' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      ES
                    </button>
                    <button
                      type="button"
                      onClick={() => onLanguageChange('en')}
                      className={`px-2.5 py-1 rounded-full font-bold font-sans text-xs leading-none flex items-center justify-center transition-all cursor-pointer ${
                        language === 'en' ? 'bg-white text-stone-900 shadow-xs' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              )}
              <div className="text-xs text-white/70 flex items-center justify-between">
                <span>Ecopacific S.A.</span>
                <span className="text-[10px] uppercase font-bold text-yellow-300">EcoLove</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          2. CONTENIDO PRINCIPAL: RECETAS ECOLOVE
          ======================================================== */}
      <main className="flex-grow py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-3xl mx-auto w-full text-center">
          {/* Badge decorativo con icono */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
            <Utensils className="w-4 h-4" />
            <span>{isEs ? 'Cocina Saludable · EcoLove' : 'Healthy Kitchen · EcoLove'}</span>
          </div>

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

          {/* Feature Highlights en tarjetas discretas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <ChefHat className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white mb-1">
                  {isEs ? 'Fáciles y Rápidas' : 'Quick & Easy'}
                </h2>
                <p className="text-xs text-white/70">
                  {isEs ? 'Preparaciones prácticas para el día a día' : 'Practical preparations for your daily routine'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Heart className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white mb-1">
                  {isEs ? '100% Natural' : '100% Natural'}
                </h2>
                <p className="text-xs text-white/70">
                  {isEs ? 'Ingredientes puros y nutritivos' : 'Pure and nourishing ingredients'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white mb-1">
                  {isEs ? 'Sabor Auténtico' : 'Authentic Flavor'}
                </h2>
                <p className="text-xs text-white/70">
                  {isEs ? 'Toques únicos con aceites y bebidas EcoLove' : 'Unique touches with EcoLove oils and drinks'}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/marcas/ecolove')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-stone-900 font-bold text-sm hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isEs ? 'Volver a EcoLove' : 'Back to EcoLove'}</span>
            </button>

            <button
              type="button"
              onClick={onNavigateHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium text-sm transition-all cursor-pointer"
            >
              <span>{isEs ? 'Ir a Ecopacific' : 'Go to Ecopacific'}</span>
            </button>
          </div>
        </div>
      </main>

      {/* ========================================================
          3. FOOTER OFICIAL DE ECOLOVE (Con logo al medio y redes sociales de EcoLove)
          ======================================================== */}
      <footer className="py-14 sm:py-20 text-white relative overflow-hidden bg-[#1A3815] border-t border-green-900/50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center justify-center text-center gap-6">
          {/* Logo centrado en el medio como cierre principal de EcoLove */}
          <div className="flex items-center justify-center scale-110 sm:scale-125 my-1">
            {renderEcoLoveLogo()}
          </div>

          {/* Redes Sociales Oficiales de EcoLove */}
          <div className="flex flex-col items-center gap-3 pt-1">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">
              {isEs ? 'Síguenos en nuestras redes' : 'Follow us on social media'}
            </span>
            <div className="flex items-center justify-center gap-4 sm:gap-5">
              {/* Instagram de EcoLove */}
              <a
                href="https://www.instagram.com/ecolove_ec/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EcoLove Instagram @ecolove_ec"
                title="EcoLove Instagram (@ecolove_ec)"
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-110 shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-108 active:scale-95 ring-4 ring-white/30 cursor-pointer"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook de EcoLove */}
              <a
                href="https://www.facebook.com/ecoloveec/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EcoLove Facebook @ecoloveec"
                title="EcoLove Facebook (@ecoloveec)"
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1877F2] hover:bg-[#166fe5] shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-108 active:scale-95 ring-4 ring-white/30 cursor-pointer"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Botones de navegación de pie de página centrados */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('/marcas/ecolove')}
              className="inline-flex items-center justify-center text-center gap-2.5 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold transition-all cursor-pointer shadow-md hover:text-yellow-300 text-sm"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5] shrink-0" />
              <span>{isEs ? 'Regresar a EcoLove' : 'Return to EcoLove'}</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="inline-flex items-center justify-center text-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white/90 font-medium transition-all cursor-pointer shadow-md hover:text-white text-sm"
            >
              <span>{isEs ? 'Regresar al portal ECOPACIFIC' : 'Return to ECOPACIFIC portal'}</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
