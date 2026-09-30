import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { BRANDS_DATA } from './data/brandsData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TransitionSection } from './components/TransitionSection';
import { BrandsSection } from './components/BrandsSection';
import { HistorySection } from './components/HistorySection';
import { OriginSection } from './components/OriginSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { CtaSection } from './components/CtaSection';
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

  // Determine if viewing a specific brand subpage
  const brandSlugMatch = currentPath.match(/^\/marcas\/([a-z0-9-]+)/);
  const activeBrandSlug = brandSlugMatch ? brandSlugMatch[1] : null;
  const activeBrand = activeBrandSlug ? BRANDS_DATA[activeBrandSlug] : null;

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#1E5638] selection:text-white">
      {activeBrand ? (
        /* ========================================================
           SUBPÁGINA INDEPENDIENTE DE MARCA
           Se siente 100% como su propia web independiente
           ======================================================== */
        <BrandSubpage
          brand={activeBrand}
          language={language}
          onNavigateHome={() => navigateTo('/')}
          onNavigateBrand={(slug) => navigateTo(`/marcas/${slug}`)}
          onOpenContact={() => setContactModalOpen(true)}
        />
      ) : (
        /* ========================================================
           HOMEPAGE CORPORATIVA ECOPACIFIC
           Estilo Tropicana: Verde fresco vibrante, amarillo brillante y blanco
           ======================================================== */
        <>
          {/* Global Corporate Navbar */}
          <Navbar
            currentPath={currentPath}
            onNavigate={navigateTo}
            language={language}
            onLanguageChange={setLanguage}
            onOpenContact={() => setContactModalOpen(true)}
          />

          <main className="flex-grow">
            <Hero
              language={language}
              onExploreBrands={() => {
                const el = document.getElementById('marcas');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <TransitionSection language={language} />

            <BrandsSection
              language={language}
              onSelectBrand={(slug) => navigateTo(`/marcas/${slug}`)}
            />

            <HistorySection language={language} />

            <OriginSection language={language} />

            <SustainabilitySection language={language} />

            <CtaSection
              language={language}
              onExplore={() => {
                const el = document.getElementById('nosotros');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </main>

          {/* Global Corporate Footer */}
          <Footer
            language={language}
            onNavigate={navigateTo}
            onOpenContact={() => setContactModalOpen(true)}
          />
        </>
      )}

      {/* Corporate Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        language={language}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
