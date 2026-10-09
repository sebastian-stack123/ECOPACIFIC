import React from 'react';
import { Leaf, ShieldAlert, Droplets } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Footer } from './Footer';
import dhoyImg from '../assets/images/brand_dhoy_citrus_1790632694674.jpg';
import ecopacificLogo from '../assets/ecopacificlogo.png';

interface SustainabilitySubpageProps {
  language: Language;
  onNavigateHome: () => void;
  onNavigate: (path: string) => void;
  onOpenContact: () => void;
}

export const SustainabilitySubpage: React.FC<SustainabilitySubpageProps> = ({
  language,
  onNavigateHome,
  onNavigate,
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[language];
  const s = t.sustainabilitySection;

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col">
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
            {language === 'es' ? 'Sostenibilidad' : 'Sustainability'}
          </span>
        </div>
      </header>

      {/* Hero Banner with Centered Content */}
      <div className="relative py-24 sm:py-36 bg-[#5B8C2A] text-white overflow-hidden text-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={dhoyImg}
            alt="EcoPacific Campo y Sostenibilidad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-40 scale-105"
          />
          <div className="absolute inset-0 bg-[#5B8C2A]/85 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5B8C2A] via-transparent to-[#5B8C2A]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90 mb-3 block text-center">
            ECOPACIFIC S.A.
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 leading-tight text-center">
            {s.title}
          </h1>
          <p className="text-xl sm:text-2xl text-white font-medium max-w-2xl mx-auto leading-relaxed text-center">
            {s.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content with 100% Centered Text */}
      <main className="flex-grow max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-16 text-center">
        {/* Official Environmental Statement (Centered) */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-stone-200 shadow-sm text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B8C2A] mb-4 block text-center">
            {language === 'es' ? 'Compromiso Ambiental' : 'Environmental Commitment'}
          </span>
          <p className="text-lg sm:text-xl md:text-2xl text-stone-800 font-light leading-relaxed text-center">
            {language === 'es'
              ? '«El éxito de Ecopacific S.A. se basa en la preservación de un ambiente natural y sano. Trabajamos para asegurar una actividad duradera de los campos a través de prácticas agrícolas de bajo impacto y nos esforzamos por reducir nuestra huella ambiental, eliminando el desperdicio y minimizando el uso de materiales no reciclables, además contamos con una política para minimizar el uso de energía y agua.»'
              : '«The success of Ecopacific S.A. is built upon preserving a clean and healthy natural environment. We work to ensure long-term vitality across the land through low-impact farming practices, and we strive to reduce our footprint by eliminating waste, minimizing non-recyclable materials, and strictly optimizing energy and water usage.»'}
          </p>
        </div>

        {/* 3 Pillars (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-4 border border-[#5B8C2A]/30">
              <Leaf className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 text-center">
              {language === 'es' ? 'Bajo impacto agrícola' : 'Low agricultural impact'}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed text-center">
              {language === 'es'
                ? 'Prácticas agrícolas responsables que cuidan la tierra y aseguran una actividad duradera en los campos.'
                : 'Responsible farming practices that preserve the soil and ensure long-term vitality.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-4 border border-[#5B8C2A]/30">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 text-center">
              {language === 'es' ? 'Cero desperdicio' : 'Zero waste'}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed text-center">
              {language === 'es'
                ? 'Eliminando el desperdicio y minimizando el uso de materiales no reciclables en todos nuestros empaques.'
                : 'Eliminating waste and minimizing the use of non-recyclable materials across our packaging.'}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-4 border border-[#5B8C2A]/30">
              <Droplets className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 mb-2 text-center">
              {language === 'es' ? 'Ahorro de energía y agua' : 'Energy & water savings'}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed text-center">
              {language === 'es'
                ? 'Política estricta para minimizar el consumo de energía y agua en todas las fases de producción.'
                : 'Strict policies designed to minimize energy and water consumption in all production phases.'}
            </p>
          </div>
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
