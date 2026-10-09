import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Footer } from './Footer';
import { NuestraHistoriaSection } from './NuestraHistoriaSection';
import heroCitrusImg from '../assets/images/hero_citrus_harvest_1790733004665.jpg';
import farmPanoramaImg from '../assets/images/hero_ecopacific_farm_1790632675187.jpg';
import ecopacificLogo from '../assets/ecopacificlogo.png';

interface NosotrosSubpageProps {
  language: Language;
  onNavigateHome: () => void;
  onNavigate: (path: string) => void;
  onOpenContact: () => void;
}

export const NosotrosSubpage: React.FC<NosotrosSubpageProps> = ({
  language,
  onNavigateHome,
  onNavigate,
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[language];
  const h = t.historySection;

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-stone-900 flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#5B8C2A] text-white shadow-md border-b border-[#4A7422]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3.5 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center cursor-pointer hover:opacity-90 transition-opacity focus:outline-hidden"
            aria-label="ECOPACIFIC Inicio"
            title={language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
          >
            <img
              src={ecopacificLogo}
              alt="ECOPACIFIC"
              className="h-8 sm:h-10 w-auto object-contain drop-shadow-sm"
            />
          </button>

          <span className="text-xs uppercase tracking-widest text-white/90 font-bold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            {language === 'es' ? 'Nuestra Empresa' : 'Our Company'}
          </span>
        </div>
      </header>

      {/* Hero Banner: Con font rellenito */}
      <div className="relative py-24 sm:py-36 bg-[#5B8C2A] text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={heroCitrusImg}
            alt="EcoPacific Naturaleza y Cosecha"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-40 scale-105"
          />
          <div className="absolute inset-0 bg-[#5B8C2A]/85 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5B8C2A] via-transparent to-[#5B8C2A]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
            {h.title}
          </h1>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-yellow-200 tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-xs">
            {h.lead}
          </p>
        </div>
      </div>

      {/* NUESTRA HISTORIA: El Viaje del Coco */}
      <NuestraHistoriaSection language={language} />

      {/* Imagen normal después del coco y antes de nuestros pilares */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 mt-16 sm:mt-24 mb-12 sm:mb-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-300/80 bg-stone-200 aspect-[16/9] sm:aspect-[21/9]">
          <img
            src={farmPanoramaImg}
            alt="Campos y cosecha de frutas en Ecuador"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Valores Corporativos (Nuestros Pilares llamativos) */}
      <section className="py-20 sm:py-28 bg-white border-t border-stone-200/80">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 space-y-16">
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#5B8C2A] block mb-2">
                {h.valoresTitle}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#5B8C2A] tracking-tight">
                {h.valoresSubtitle}
              </h2>
            </div>

            {/* Cajas llamativas y limpias sin números ni etiquetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1: Responsabilidad */}
              <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#5B8C2A] to-[#446B1D] text-white border border-[#4A7422] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group">
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                  {h.val1Title}
                </h4>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-light">
                  {h.val1Desc}
                </p>
              </div>

              {/* Card 2: Integridad */}
              <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#5B8C2A] to-[#446B1D] text-white border border-[#4A7422] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group">
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                  {h.val2Title}
                </h4>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-light">
                  {h.val2Desc}
                </p>
              </div>

              {/* Card 3: Amor */}
              <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#5B8C2A] to-[#446B1D] text-white border border-[#4A7422] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group">
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                  {h.val3Title}
                </h4>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-light">
                  {h.val3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Trabaja con nosotros CTA */}
          <div className="p-10 rounded-3xl bg-[#5B8C2A] text-white text-center flex flex-col items-center gap-6 shadow-xl">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {language === 'es' ? '¿Quieres ser parte de nuestro equipo?' : 'Want to join our team?'}
              </h3>
              <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto">
                {language === 'es'
                  ? 'Conoce nuestras oportunidades laborales a través de nuestro perfil oficial en LinkedIn.'
                  : 'Discover our career opportunities through our official LinkedIn profile.'}
              </p>
            </div>

            <a
              href="https://cl.linkedin.com/company/ecopacific-s.a."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5B8C2A] bg-white hover:bg-stone-50 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <span>{language === 'es' ? 'Trabaja con nosotros (LinkedIn)' : 'Work with us (LinkedIn)'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer
        language={language}
        onNavigate={onNavigate}
        onOpenNosotros={() => onNavigate('/nosotros')}
        onOpenSostenibilidad={() => onNavigate('/sostenibilidad')}
        onOpenContact={onOpenContact}
      />
    </div>
  );
};
