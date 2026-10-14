import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Language } from './types';
import { CoconutLoader } from './components/CoconutLoader';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

// Dynamic lazy imports: Only the page currently requested by the user is loaded.
// Other pages and their assets are NOT fetched until navigated to.
const HomePage = lazy(() =>
  import('./components/HomePage').then((m) => ({ default: m.HomePage }))
);
const NosotrosSubpage = lazy(() =>
  import('./components/NosotrosSubpage').then((m) => ({ default: m.NosotrosSubpage }))
);
const SustainabilitySubpage = lazy(() =>
  import('./components/SustainabilitySubpage').then((m) => ({ default: m.SustainabilitySubpage }))
);
const BrandSubpage = lazy(() =>
  import('./components/BrandSubpage').then((m) => ({ default: m.BrandSubpage }))
);
const ContactSubpage = lazy(() =>
  import('./components/ContactSubpage').then((m) => ({ default: m.ContactSubpage }))
);

const PageLoadingFallback: React.FC = () => (
  <CoconutLoader label="EcoPacific" fullScreen />
);

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

  const isNosotros = currentPath === '/nosotros';
  const isSostenibilidad = currentPath === '/sostenibilidad';
  const isContacto = currentPath === '/contacto';

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#5B8C2A] selection:text-white">
      <Suspense fallback={<PageLoadingFallback />}>
        {activeBrandSlug ? (
          /* Subpágina de marca independiente cargada bajo demanda */
          <BrandSubpage
            brandSlug={activeBrandSlug}
            language={language}
            onNavigateHome={() => navigateTo('/')}
            onNavigateBrand={(slug) => navigateTo(`/marcas/${slug}`)}
            onOpenContact={() => navigateTo('/contacto')}
          />
        ) : isNosotros ? (
          /* Subpágina completa de Nuestra Empresa cargada bajo demanda */
          <NosotrosSubpage
            language={language}
            onNavigateHome={() => navigateTo('/')}
            onNavigate={navigateTo}
            onLanguageChange={setLanguage}
            onOpenContact={() => navigateTo('/contacto')}
          />
        ) : isSostenibilidad ? (
          /* Subpágina completa de Sostenibilidad cargada bajo demanda */
          <SustainabilitySubpage
            language={language}
            onNavigateHome={() => navigateTo('/')}
            onNavigate={navigateTo}
            onLanguageChange={setLanguage}
            onOpenContact={() => navigateTo('/contacto')}
          />
        ) : isContacto ? (
          /* Sección de Contacto cargada bajo demanda */
          <ContactSubpage
            language={language}
            onNavigateHome={() => navigateTo('/')}
            onNavigate={navigateTo}
            onLanguageChange={setLanguage}
          />
        ) : (
          <HomePage
            currentPath={currentPath}
            language={language}
            onNavigate={navigateTo}
            onLanguageChange={setLanguage}
          />
        )}
      </Suspense>

      {/* Acceso directo flotante a WhatsApp siempre visible en toda la web */}
      <FloatingWhatsAppButton language={language} />
    </div>
  );
}
