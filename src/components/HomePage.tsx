import React from 'react';
import { Language } from '../types';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { TransitionSection } from './TransitionSection';
import { BrandsSection } from './BrandsSection';
import { OriginSection } from './OriginSection';
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
      {/* Top Navbar: Menú, ECOPACIFIC, Idiomas */}
      <Navbar
        currentPath={currentPath}
        onNavigate={onNavigate}
        language={language}
        onLanguageChange={onLanguageChange}
        onOpenContact={() => onNavigate('/contacto')}
      />

      <main className="flex-grow">
        {/* 1. Hero / Inicio con video en caja redondeada */}
        <Hero
          language={language}
          onExploreBrands={() => {
            const el = document.getElementById('marcas');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Transición: Más de 20 años transformando lo que nace del campo */}
        <TransitionSection language={language} />

        {/* 3. Nuestras Marcas */}
        <BrandsSection
          language={language}
          onSelectBrand={(slug) => onNavigate(`/marcas/${slug}`)}
        />

        {/* 4. Agricultores */}
        <OriginSection language={language} />
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
