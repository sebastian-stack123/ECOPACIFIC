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
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [language, setLanguage] = useState<Language>('es');
  const [contactModalOpen, setContactModalOpen] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#1E5638] selection:text-white">
      {activeBrand ? (
        /* Subpágina de marca independiente (ej. Coco Freeze) */
        <BrandSubpage
          brand={activeBrand}
          language={language}
          onNavigateHome={() => navigateTo('/')}
          onNavigateBrand={(slug) => navigateTo(`/marcas/${slug}`)}
          onOpenContact={() => setContactModalOpen(true)}
        />
      ) : isNosotros ? (
        /* Subpágina completa de Nuestra Empresa (Nosotros) */
        <NosotrosSubpage
          language={language}
          onNavigateHome={() => navigateTo('/')}
          onNavigate={navigateTo}
          onOpenContact={() => setContactModalOpen(true)}
        />
      ) : isSostenibilidad ? (
        /* Subpágina completa de Sostenibilidad con texto 100% centrado */
        <SustainabilitySubpage
          language={language}
          onNavigateHome={() => navigateTo('/')}
          onNavigate={navigateTo}
          onOpenContact={() => setContactModalOpen(true)}
        />
      ) : (
        /* Página Principal */
        <>
          {/* Top Navbar: Menú, ECOPACIFIC, Idiomas Y NADA MÁS */}
          <Navbar
            currentPath={currentPath}
            onNavigate={navigateTo}
            language={language}
            onLanguageChange={setLanguage}
            onOpenContact={() => setContactModalOpen(true)}
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

            {/* 4. Agricultores: Texto centrado en el medio sin burbuja y foto grande centrada abajo */}
            <OriginSection language={language} />
          </main>

          {/* Footer Corporativo */}
          <Footer
            language={language}
            onNavigate={navigateTo}
            onOpenNosotros={() => navigateTo('/nosotros')}
            onOpenSostenibilidad={() => navigateTo('/sostenibilidad')}
            onOpenContact={() => setContactModalOpen(true)}
          />
        </>
      )}

      {/* Modal Contacto */}
      <ContactModal
        isOpen={contactModalOpen}
        language={language}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
