import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BRANDS_DATA } from '../data/brandsData';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = UI_TRANSLATIONS[language];
  const isHomePage = currentPath === '/';

  // Detect scroll to toggle transparent -> solid/glass navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (hashOrPath: string) => {
    setMobileMenuOpen(false);

    if (hashOrPath.startsWith('#')) {
      if (!isHomePage) {
        onNavigate('/');
        setTimeout(() => {
          const el = document.querySelector(hashOrPath);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        const el = document.querySelector(hashOrPath);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(hashOrPath);
    }
  };

  const isTransparent = !isScrolled && isHomePage;

  return (
    <>
      {/* Top Navbar: Transparent over Hero, Glass/Solid on Scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent py-6 border-b border-transparent'
            : 'bg-[#18482E]/95 backdrop-blur-md shadow-md py-4 border-b border-[#286E48]/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo ECOPACIFIC */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left cursor-pointer focus-visible:outline-none"
            aria-label="ECOPACIFIC Inicio"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-white transition-opacity hover:opacity-90">
              ECOPACIFIC
            </span>
          </button>

          {/* Desktop Navigation Links (Spacious, Minimalist, Tropicana-style) */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-semibold tracking-wide text-white">
            <button
              onClick={() => handleLinkClick('#nosotros')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              {t.nav.about}
            </button>

            <button
              onClick={() => handleLinkClick('#marcas')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              {t.nav.brands}
            </button>

            <button
              onClick={() => handleLinkClick('#sostenibilidad')}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              {t.nav.sustainability}
            </button>

            <button
              onClick={onOpenContact}
              className="hover:text-green-200 transition-colors cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Controls: Language Selector + Mobile Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Selector: Clean Pill */}
            <div className="flex items-center bg-black/25 backdrop-blur-xs border border-white/20 rounded-full p-0.5 text-xs text-white">
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  language === 'es'
                    ? 'bg-white text-[#18482E] shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer font-bold ${
                  language === 'en'
                    ? 'bg-white text-[#18482E] shadow-xs'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full bg-black/25 text-white border border-white/20 hover:bg-black/40 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu (Tropicana-inspired Fullscreen Experience) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#16432B] text-white flex flex-col justify-between p-8 overflow-y-auto animate-fadeIn md:hidden">
          {/* Top Bar inside Fullscreen Menu */}
          <div className="flex items-center justify-between pb-6 border-b border-[#286E48]/80">
            <span className="text-2xl font-black tracking-wider text-white">
              ECOPACIFIC
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-[#1E5638] text-white flex items-center justify-center border border-[#286E48] hover:bg-[#286E48] transition-colors cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Editorial Links */}
          <div className="py-10 space-y-6">
            <button
              onClick={() => handleLinkClick('/')}
              className="block w-full text-left text-3xl sm:text-4xl font-black text-white hover:text-green-300 transition-colors cursor-pointer"
            >
              {language === 'es' ? 'Inicio' : 'Home'}
            </button>

            <button
              onClick={() => handleLinkClick('#nosotros')}
              className="block w-full text-left text-3xl sm:text-4xl font-black text-white hover:text-green-300 transition-colors cursor-pointer"
            >
              {t.nav.about}
            </button>

            <div>
              <button
                onClick={() => handleLinkClick('#marcas')}
                className="block w-full text-left text-3xl sm:text-4xl font-black text-white hover:text-green-300 transition-colors cursor-pointer mb-3"
              >
                {t.nav.brands}
              </button>
              {/* Brand Quick Links */}
              <div className="grid grid-cols-2 gap-2 pl-2">
                {Object.values(BRANDS_DATA).map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => handleLinkClick(`/marcas/${brand.slug}`)}
                    className="p-3 rounded-xl bg-[#1E5638]/60 border border-[#286E48] text-left text-xs font-bold text-white flex items-center gap-2 hover:bg-[#1E5638] transition-colors"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: brand.colors.buttonBg }}
                    />
                    <span>{brand.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('#sostenibilidad')}
              className="block w-full text-left text-3xl sm:text-4xl font-black text-white hover:text-green-300 transition-colors cursor-pointer"
            >
              {t.nav.sustainability}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="block w-full text-left text-3xl sm:text-4xl font-black text-white hover:text-green-300 transition-colors cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Bottom Info inside Fullscreen Menu */}
          <div className="pt-6 border-t border-[#286E48]/80 flex items-center justify-between text-xs text-green-200/80">
            <span>ECOPACIFIC &copy; {new Date().getFullYear()}</span>
            <div className="flex gap-2">
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-3 py-1 rounded-full ${
                  language === 'es' ? 'bg-white text-[#18482E] font-bold' : 'text-white/70'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full ${
                  language === 'en' ? 'bg-white text-[#18482E] font-bold' : 'text-white/70'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
