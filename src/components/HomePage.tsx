import React from 'react';
import { Language } from '../types';
import { Navbar } from './Navbar';
import { TransitionSection } from './TransitionSection';
import { BrandsSection } from './BrandsSection';
import { Footer } from './Footer';

interface HomePageProps {
  currentPath: string;
  language: Language;
  onNavigate: (path: string) => void;
  onLanguageChange: (lang: Language) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentPath,
  language,
  onNavigate,
  onLanguageChange,
}) => {
  return (
    <>
      {/* Top Navbar: Menú con 3 rayas, ECOPACIFIC, Idiomas */}
      <Navbar
        currentPath={currentPath}
        onNavigate={onNavigate}
        language={language}
        onLanguageChange={onLanguageChange}
        onOpenContact={() => onNavigate('/contacto')}
      />

      <main className="flex-grow">
        {/* 1. Transición: Transformamos lo que nace del campo */}
        <TransitionSection language={language} />

        {/* 2. Nuestras Marcas */}
        <BrandsSection
          language={language}
          onSelectBrand={(slug) => onNavigate(`/marcas/${slug}`)}
        />
      </main>

      {/* Footer Corporativo */}
      <Footer
        language={language}
        onNavigate={onNavigate}
        onOpenNosotros={() => onNavigate('/nosotros')}
        onOpenSostenibilidad={() => onNavigate('/sostenibilidad')}
        onOpenContact={() => onNavigate('/contacto')}
      />
    </>
  );
};
