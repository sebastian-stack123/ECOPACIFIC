import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  language,
  onLanguageChange,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const t = UI_TRANSLATIONS[language];
  const isHomePage = currentPath === '/';

  // Toggle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [drawerOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleGoHome = () => {
    setDrawerOpen(false);
    if (!isHomePage) {
      onNavigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBrandsClick = () => {
    setDrawerOpen(false);
    if (!isHomePage) {
      onNavigate('/');
      setTimeout(() => {
        document.querySelector('#marcas')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.querySelector('#marcas')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isTransparent = !isScrolled && isHomePage;

  return (
    <>
      {/* Top Navbar: Menú, ECOPACIFIC, Idiomas Y NADA MÁS */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent py-5 sm:py-6 border-b border-transparent'
            : 'bg-[#18482E]/95 backdrop-blur-md shadow-md py-3.5 sm:py-4 border-b border-[#286E48]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between relative">
          {/* Left: 3 Elegant Bars */}
          <div className="flex items-center">
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 sm:p-2.5 rounded-full hover:bg-white/15 transition-all cursor-pointer flex items-center justify-center group focus-visible:outline-none"
              aria-label="Abrir menú de navegación"
            >
              <div className="w-7 h-5 flex flex-col justify-between items-start transition-transform group-hover:scale-110">
                <span className="w-7 h-0.5 bg-white rounded-full transition-all group-hover:w-6" />
                <span className="w-5.5 h-0.5 bg-white rounded-full transition-all group-hover:w-7" />
                <span className="w-6.5 h-0.5 bg-white rounded-full transition-all group-hover:w-5" />
              </div>
            </button>
          </div>

          {/* Center: ECOPACIFIC */}
          <div className="absolute left-1/2 -translate-x-1/2 select-none">
            <button
              onClick={handleGoHome}
              className="text-2xl sm:text-3xl font-black tracking-wider text-white hover:opacity-90 transition-opacity cursor-pointer focus-visible:outline-none"
              aria-label="ECOPACIFIC Inicio"
            >
              ECOPACIFIC
            </button>
          </div>

          {/* Right: Solamente selector de idioma (Y NADA MÁS) */}
          <div className="flex items-center">
            <div className="flex items-center bg-black/25 backdrop-blur-xs border border-white/20 rounded-full p-0.5 text-xs text-white">
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  language === 'es'
                    ? 'bg-white text-[#18482E] shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  language === 'en'
                    ? 'bg-white text-[#18482E] shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Menu Drawer from the Left */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
          drawerOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`relative w-full max-w-sm sm:max-w-md bg-[#16432B] text-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10 border-r border-[#286E48] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden transform transition-transform duration-300 ease-out ${
            drawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#286E48]">
              <button
                onClick={handleGoHome}
                className="text-2xl font-black tracking-wider text-white text-left cursor-pointer"
              >
                ECOPACIFIC
              </button>

              <button
                onClick={() => setDrawerOpen(false)}
                className="w-10 h-10 rounded-full bg-[#1E5638] text-white flex items-center justify-center border border-[#286E48] hover:bg-[#286E48] transition-colors cursor-pointer"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links del Menú */}
            <div className="py-8 space-y-4">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onNavigate('/nosotros');
                }}
                className="block w-full text-left text-2xl sm:text-3xl font-extrabold text-white hover:text-green-300 transition-colors py-2 cursor-pointer flex items-center justify-between group"
              >
                <span>{t.nav.about}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-green-300" />
              </button>

              <button
                onClick={handleBrandsClick}
                className="block w-full text-left text-2xl sm:text-3xl font-extrabold text-white hover:text-green-300 transition-colors py-2 cursor-pointer flex items-center justify-between group"
              >
                <span>{t.nav.brands}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-green-300" />
              </button>

              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onNavigate('/sostenibilidad');
                }}
                className="block w-full text-left text-2xl sm:text-3xl font-extrabold text-white hover:text-green-300 transition-colors py-2 cursor-pointer flex items-center justify-between group"
              >
                <span>{t.nav.sustainability}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-green-300" />
              </button>

              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenContact();
                }}
                className="block w-full text-left text-2xl sm:text-3xl font-extrabold text-white hover:text-green-300 transition-colors py-2 cursor-pointer flex items-center justify-between group"
              >
                <span>{t.nav.contact}</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-green-300" />
              </button>

              {/* Trabaja con nosotros dentro del menú */}
              <div className="pt-6 border-t border-[#286E48]/80">
                <a
                  href="https://cl.linkedin.com/company/ecopacific-s.a."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-green-100 bg-[#1E5638] hover:bg-[#286E48] border border-[#286E48] transition-all"
                >
                  <span>{language === 'es' ? 'Trabaja con nosotros' : 'Join our team'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer info inside Drawer */}
          <div className="pt-6 border-t border-[#286E48] flex items-center justify-between text-xs text-green-200/80">
            <span>ECOPACIFIC S.A.</span>
            <div className="flex gap-2">
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 rounded-full ${
                  language === 'es' ? 'bg-white text-[#18482E] font-bold' : 'text-white/70'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full ${
                  language === 'en' ? 'bg-white text-[#18482E] font-bold' : 'text-white/70'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
