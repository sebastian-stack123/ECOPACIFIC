import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { BRANDS_DATA } from './data/brandsData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TransitionSection } from './components/TransitionSection';
import { BrandsSection } from './components/BrandsSection';
import { OriginSection } from './components/OriginSection';
import { NosotrosSubpage } from './components/NosotrosSubpage';
import { SustainabilitySubpage } from './components/SustainabilitySubpage';
import { BrandSubpage } from './components/BrandSubpage';
import { ContactSubpage } from './components/ContactSubpage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [language, setLanguage] = useState<Language>('es');

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine active view
  const brandSlugMatch = currentPath.match(/^\/marcas\/([a-z0-9-]+)/);
  const activeBrandSlug = brandSlugMatch ? brandSlugMatch[1] : null;
  const activeBrand = activeBrandSlug ? BRANDS_DATA[activeBrandSlug] : null;

  const isNosotros = currentPath === '/nosotros';
  const isSostenibilidad = currentPath === '/sostenibilidad';
  const isContacto = currentPath === '/contacto';

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#5B8C2A] selection:text-white">
      {activeBrand ? (
        /* Subpágina de marca independiente (ej. Coco Freeze) */
        <BrandSubpage
          brand={activeBrand}
          language={language}
          onNavigateHome={() => navigateTo('/')}
          onNavigateBrand={(slug) => navigateTo(`/marcas/${slug}`)}
          onOpenContact={() => navigateTo('/contacto')}
        />
      ) : isNosotros ? (
        /* Subpágina completa de Nuestra Empresa (Nosotros) */
        <NosotrosSubpage
          language={language}
          onNavigateHome={() => navigateTo('/')}
          onNavigate={navigateTo}
          onOpenContact={() => navigateTo('/contacto')}
        />
      ) : isSostenibilidad ? (
        /* Subpágina completa de Sostenibilidad */
        <SustainabilitySubpage
          language={language}
          onNavigateHome={() => navigateTo('/')}
          onNavigate={navigateTo}
          onOpenContact={() => navigateTo('/contacto')}
        />
      ) : isContacto ? (
        /* Sección propia de Contacto (no modal, fondo verde, sin inicio) */
        <ContactSubpage
          language={language}
          onNavigateHome={() => navigateTo('/')}
          onNavigate={navigateTo}
          onLanguageChange={setLanguage}
        />
      ) : (
        /* Página Principal */
        <>
          {/* Top Navbar: Menú, ECOPACIFIC, Idiomas */}
          <Navbar
            currentPath={currentPath}
            onNavigate={navigateTo}
            language={language}
            onLanguageChange={setLanguage}
            onOpenContact={() => navigateTo('/contacto')}
          />

          <main className="flex-grow">
            {/* 1. Hero / Inicio */}
            <Hero
              language={language}
              onExploreBrands={() => {
                const el = document.getElementById('marcas');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 2. Transición: Más de 20 años transformando lo que nace del campo */}
            <TransitionSection language={language} />

            {/* 3. Nuestras Marcas: Compactas una al lado de la otra */}
            <BrandsSection
              language={language}
              onSelectBrand={(slug) => navigateTo(`/marcas/${slug}`)}
            />

            {/* 4. Agricultores */}
            <OriginSection language={language} />
          </main>

          {/* Footer Corporativo */}
          <Footer
            language={language}
            onNavigate={navigateTo}
            onOpenNosotros={() => navigateTo('/nosotros')}
            onOpenSostenibilidad={() => navigateTo('/sostenibilidad')}
            onOpenContact={() => navigateTo('/contacto')}
          />
        </>
      )}
    </div>
  );
}
