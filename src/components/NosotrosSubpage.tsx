import React from 'react';
import { ArrowLeft, Target, ShieldCheck, Heart, Award, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Footer } from './Footer';
import heroCitrusImg from '../assets/images/hero_citrus_harvest_1790733004665.jpg';

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
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col">
      {/* Top Bar (Style like BrandSubpage) */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#18482E] text-white shadow-md border-b border-[#286E48]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-green-200 hover:text-white transition-colors px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'es' ? 'Volver al Inicio' : 'Back to Home'}</span>
            </button>
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white hidden sm:inline">
              ECOPACIFIC
            </span>
          </div>

          <span className="text-xs uppercase tracking-widest text-green-300 font-bold">
            {language === 'es' ? 'Nuestra Empresa' : 'Our Company'}
          </span>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative py-24 sm:py-36 bg-[#18482E] text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={heroCitrusImg}
            alt="EcoPacific Naturaleza y Cosecha"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-40 scale-105"
          />
          <div className="absolute inset-0 bg-[#18482E]/85 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18482E] via-transparent to-[#18482E]/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-green-300 mb-3 block">
            ECOPACIFIC S.A.
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
            {h.title}
          </h1>
          <p className="text-xl sm:text-2xl text-green-100/90 font-light max-w-3xl mx-auto leading-relaxed">
            {h.lead}
          </p>
        </div>
      </div>

      {/* Main Corporate Content */}
      <main className="flex-grow max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-16">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm text-center">
            <div className="text-3xl sm:text-5xl font-black text-[#1E5638] mb-1">
              {h.stat1Number}
            </div>
            <div className="text-xs sm:text-sm text-stone-600 font-semibold uppercase tracking-wider">
              {h.stat1Label}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm text-center">
            <div className="text-3xl sm:text-5xl font-black text-[#286E48] mb-1">
              {h.stat2Number}
            </div>
            <div className="text-xs sm:text-sm text-stone-600 font-semibold uppercase tracking-wider">
              {h.stat2Label}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm text-center">
            <div className="text-3xl sm:text-5xl font-black text-[#1E5638] mb-1">
              {h.stat3Number}
            </div>
            <div className="text-xs sm:text-sm text-stone-600 font-semibold uppercase tracking-wider">
              {h.stat3Label}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm text-center">
            <div className="text-3xl sm:text-5xl font-black text-[#286E48] mb-1">
              {h.stat4Number}
            </div>
            <div className="text-xs sm:text-sm text-stone-600 font-semibold uppercase tracking-wider">
              {h.stat4Label}
            </div>
          </div>
        </div>

        {/* Corporate Purpose Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-sm text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#286E48] mb-3 block">
            {language === 'es' ? 'Nuestra Filosofía' : 'Our Philosophy'}
          </span>
          <p className="text-xl sm:text-2xl text-stone-800 font-light leading-relaxed">
            {language === 'es'
              ? '«Ecopacific cree que un producto debe ser delicioso, saludable, innovador y natural. Brindamos más de 200 productos a todo el Ecuador. Estamos orgullosos de liderar la categoría de jugos y frutas en el canal moderno del país.»'
              : '«Ecopacific believes that a product must be delicious, healthy, innovative, and natural. We provide over 200 products across Ecuador and are proud to lead the fruit and juice category in the country\'s modern retail canal.»'}
          </p>
        </div>

        {/* Visión y Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#286E48] px-3 py-1 rounded-full bg-green-50 border border-green-200">
              <Target className="w-4 h-4" />
              <span>{h.visionTitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E5638]">
              {h.visionText}
            </h3>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#286E48] px-3 py-1 rounded-full bg-green-50 border border-green-200">
              <ShieldCheck className="w-4 h-4" />
              <span>{h.misionTitle}</span>
            </div>
            <p className="text-xl sm:text-2xl font-normal text-stone-800 leading-snug">
              {h.misionText}
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#286E48] block mb-2">
              {h.valoresTitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E5638]">
              {h.valoresSubtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#1E5638] flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="text-lg font-bold text-stone-900">
                {h.val1Title}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                {h.val1Desc}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#1E5638] flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="text-lg font-bold text-stone-900">
                {h.val2Title}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                {h.val2Desc}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#1E5638] flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="text-lg font-bold text-stone-900">
                {h.val3Title}
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                {h.val3Desc}
              </p>
            </div>
          </div>
        </div>

        {/* Trabaja con nosotros CTA */}
        <div className="p-10 rounded-3xl bg-[#18482E] text-white text-center flex flex-col items-center gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {language === 'es' ? '¿Quieres ser parte de nuestro equipo?' : 'Want to join our team?'}
            </h3>
            <p className="text-sm sm:text-base text-green-100/80 max-w-md mx-auto">
              {language === 'es'
                ? 'Conoce nuestras oportunidades laborales a través de nuestro perfil oficial en LinkedIn.'
                : 'Discover our career opportunities through our official LinkedIn profile.'}
            </p>
          </div>

          <a
            href="https://cl.linkedin.com/company/ecopacific-s.a."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#18482E] bg-white hover:bg-stone-100 transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <span>{language === 'es' ? 'Trabaja con nosotros (LinkedIn)' : 'Work with us (LinkedIn)'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </main>

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
