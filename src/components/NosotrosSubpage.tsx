import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import fotoEcopacificImg from '../assets/images/fotoecopacific.jpg';

interface NosotrosSubpageProps {
  language: Language;
  onNavigateHome: () => void;
  onNavigate: (path: string) => void;
  onLanguageChange?: (lang: Language) => void;
  onOpenContact: () => void;
}

export const NosotrosSubpage: React.FC<NosotrosSubpageProps> = ({
  language,
  onNavigate,
  onLanguageChange = () => {},
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[language];
  const h = t.historySection;

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-stone-900 flex flex-col">
      {/* Top Navbar con menú de 3 rayas visible */}
      <Navbar
        currentPath="/nosotros"
        onNavigate={onNavigate}
        language={language}
        onLanguageChange={onLanguageChange}
        onOpenContact={onOpenContact}
      />

      {/* Hero Banner: Nuestra Empresa */}
      <div className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 bg-[#5B8C2A] text-white overflow-hidden text-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={fotoEcopacificImg}
            alt="EcoPacific Origen y Naturaleza"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-60 opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-[#5B8C2A]/85 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5B8C2A] via-transparent to-[#5B8C2A]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-200 block mb-3">
            {language === 'es' ? 'Nuestra Empresa' : 'Our Company'}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-tight">
            {h.title}
          </h1>
          <p className="text-lg sm:text-2xl font-bold text-yellow-200 tracking-tight leading-snug max-w-2xl mx-auto drop-shadow-xs">
            {h.lead}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {/* ========================================================
            1. VALORES CORPORATIVOS (PUESTOS ARRIBA DE MISIÓN Y VISIÓN)
            ======================================================== */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#5B8C2A] block mb-2">
              {h.valoresTitle}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#5B8C2A] tracking-tight">
              {h.valoresSubtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Responsabilidad */}
            <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#5B8C2A] to-[#446B1D] text-white border border-[#4A7422] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                {h.val1Title}
              </h3>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-light">
                {h.val1Desc}
              </p>
            </div>

            {/* Card 2: Integridad */}
            <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#5B8C2A] to-[#446B1D] text-white border border-[#4A7422] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                {h.val2Title}
              </h3>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-light">
                {h.val2Desc}
              </p>
            </div>

            {/* Card 3: Amor */}
            <div className="p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#5B8C2A] to-[#446B1D] text-white border border-[#4A7422] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden group">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                {h.val3Title}
              </h3>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-light">
                {h.val3Desc}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. MISIÓN Y VISIÓN
            ======================================================== */}
        <section className="bg-white rounded-3xl p-8 sm:p-14 shadow-lg border border-stone-200/80 text-center space-y-12 sm:space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#5B8C2A] block">
              {language === 'es' ? 'NUESTRO PROPÓSITO' : 'OUR PURPOSE'}
            </span>
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#5B8C2A]">
              {language === 'es' ? 'Misión' : 'Mission'}
            </h3>
            <p className="text-lg sm:text-2xl text-stone-700 font-normal leading-relaxed text-balance">
              {language === 'es'
                ? 'Con valores Cristianos innovamos alimentos saludables para generar prosperidad.'
                : 'With Christian values, we innovate healthy foods to generate prosperity.'}
            </p>
          </div>

          <div className="w-16 h-0.5 bg-[#5B8C2A]/30 mx-auto" />

          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#5B8C2A] block">
              {language === 'es' ? 'NUESTRO HORIZONTE' : 'OUR HORIZON'}
            </span>
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#5B8C2A]">
              {language === 'es' ? 'Visión' : 'Vision'}
            </h3>
            <p className="text-lg sm:text-2xl text-stone-700 font-normal leading-relaxed text-balance">
              {language === 'es'
                ? 'Ser líderes innovando alimentos saludables.'
                : 'To be leaders innovating healthy foods.'}
            </p>
          </div>
        </section>

        {/* ========================================================
            3. HISTORIA DE ECOPACIFIC (CORTA: UN SOLO PÁRRAFO, INICIA EN 2008)
            ======================================================== */}
        <section className="p-8 sm:p-14 rounded-3xl bg-[#F4EFE6] border border-stone-300/80 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#5B8C2A] block">
            {language === 'es' ? 'NUESTRA HISTORIA' : 'OUR STORY'}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#5B8C2A] tracking-tight">
            {language === 'es'
              ? 'Nacidos en el 2008 desde el origen del campo'
              : 'Born in 2008 from the land'}
          </h2>

          <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal text-balance max-w-3xl mx-auto">
            {language === 'es'
              ? 'Ecopacific cree que un producto debe ser delicioso, saludable, innovador y natural. Brindamos más de 200 productos a todo el Ecuador. Estamos orgullosos de liderar la categoría de jugos y frutas en el canal moderno del país. Ecopacific se fundó el 2008 a través de la fusión de emprendimientos familiares: Limón Ecopacific, Coco Freeze y Hortilisto.'
              : 'Ecopacific believes that a product must be delicious, healthy, innovative, and natural. We provide over 200 products across Ecuador. We are proud to lead the juice and fruit category in the country’s modern channel. Ecopacific was founded in 2008 through the merger of family ventures: Limón Ecopacific, Coco Freeze, and Hortilisto.'}
          </p>

          <div className="pt-4">
            <button
              onClick={() => {
                onNavigate('/');
                setTimeout(() => {
                  document.querySelector('#marcas')?.scrollIntoView({ behavior: 'smooth' });
                }, 120);
              }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#5B8C2A] hover:bg-[#4A7422] shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 active:scale-95"
            >
              <span>{language === 'es' ? 'Conoce nuestras marcas' : 'Explore our brands'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ========================================================
            4. TRABAJA CON NOSOTROS (LINKEDIN CTA)
            ======================================================== */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#5B8C2A] text-white text-center flex flex-col items-center gap-6 shadow-xl">
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
        </section>
      </div>

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
