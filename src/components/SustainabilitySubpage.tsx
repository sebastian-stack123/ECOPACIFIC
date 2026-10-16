import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import fotoEcopacificImg from '../assets/images/fotoecopacific.jpg';
import campo3Img from '../assets/images/campo3.jpg';
import fabricaAereaImg from '../assets/images/fabrica_aerea_1791937872449.jpg';
import laFabricaImg from '../assets/images/lafabrica.jpg';

interface SustainabilitySubpageProps {
  language: Language;
  onNavigateHome: () => void;
  onNavigate: (path: string) => void;
  onLanguageChange?: (lang: Language) => void;
  onOpenContact: () => void;
}

export const SustainabilitySubpage: React.FC<SustainabilitySubpageProps> = ({
  language,
  onNavigateHome,
  onNavigate,
  onLanguageChange = () => {},
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[language];
  const s = t.sustainabilitySection;

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col">
      {/* Top Navbar con menú de 3 rayas visible */}
      <Navbar
        currentPath="/sostenibilidad"
        onNavigate={onNavigate}
        language={language}
        onLanguageChange={onLanguageChange}
        onOpenContact={onOpenContact}
      />

      {/* Hero Banner: Franja verde compacta y elegante */}
      <div className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 bg-[#5B8C2A] text-white overflow-hidden text-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={fotoEcopacificImg}
            alt="EcoPacific Campo y Sostenibilidad"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-60 opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-[#5B8C2A]/85 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5B8C2A] via-transparent to-[#5B8C2A]/90" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight text-center">
            {s.title}
          </h1>
          <p className="text-sm sm:text-base text-white/90 font-medium max-w-xl mx-auto leading-relaxed text-center">
            {s.subtitle}
          </p>
        </div>
      </div>

      {/* IMAGEN: Arriba de Compromiso Ambiental (campo3 cubriendo toda la zona) */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-8 sm:pt-12">
        <div className="w-full h-64 sm:h-96 md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200">
          <img
            src={campo3Img}
            alt="Campos y cultivos de frutas EcoPacific"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* COMPROMISO AMBIENTAL: Título y frase */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 pt-12 sm:pt-16 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#5B8C2A] mb-5 text-center">
          {language === 'es' ? 'COMPROMISO AMBIENTAL' : 'ENVIRONMENTAL COMMITMENT'}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-stone-600 font-normal leading-relaxed text-center max-w-3xl mx-auto">
          {language === 'es'
            ? '«El éxito de Ecopacific S.A. se basa en la preservación de un ambiente natural y sano. Trabajamos para asegurar una actividad duradera de los campos a través de prácticas agrícolas de bajo impacto y nos esforzamos por reducir nuestra huella ambiental, eliminando el desperdicio y minimizando el uso de materiales no reciclables, además contamos con una política para minimizar el uso de energía y agua.»'
            : '«The success of Ecopacific S.A. is built upon preserving a clean and healthy natural environment. We work to ensure long-term vitality across the land through low-impact farming practices, and we strive to reduce our footprint by eliminating waste, minimizing non-recyclable materials, and strictly optimizing energy and water usage.»'}
        </p>
      </section>

      {/* IMAGEN 2: Foto aérea de la fábrica EcoPacific (reemplaza maracuyá en las manos) */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        <div className="w-full h-64 sm:h-96 md:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200">
          <img
            src={fabricaAereaImg}
            alt="Planta de producción y fábrica agroindustrial EcoPacific"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* PILARES EN TODA LA PANTALLA: NO en cajas, uno arriba del otro, sin símbolos/hojitas, títulos grandes y texto más pequeño */}
      <main className="w-full max-w-5xl mx-auto px-6 sm:px-10 pb-12 sm:pb-16 space-y-16 sm:space-y-24 text-center">
        {/* 1. Bajo impacto agrícola / ambiental */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#5B8C2A] tracking-tight mb-4 text-center">
            {language === 'es' ? 'Bajo impacto ambiental' : 'Low environmental impact'}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed text-center max-w-3xl">
            {language === 'es'
              ? 'Prácticas agrícolas responsables que cuidan la tierra y aseguran una actividad duradera en los campos, preservando los nutrientes del suelo y el equilibrio del ecosistema.'
              : 'Responsible farming practices that care for the land and ensure long-term vitality across fields, preserving soil health and ecological balance.'}
          </p>
        </div>

        {/* 2. Cero desperdicio */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#5B8C2A] tracking-tight mb-4 text-center">
            {language === 'es' ? 'Cero desperdicio' : 'Zero waste'}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed text-center max-w-3xl">
            {language === 'es'
              ? 'Eliminando el desperdicio en todos nuestros procesos y minimizando activamente el uso de materiales no reciclables en todos nuestros empaques y operaciones.'
              : 'Eliminating waste throughout our processes and actively minimizing the use of non-recyclable materials across all packaging and operations.'}
          </p>
        </div>

        {/* 3. Ahorro de energía */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#5B8C2A] tracking-tight mb-4 text-center">
            {language === 'es' ? 'Ahorro de energía' : 'Energy savings'}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed text-center max-w-3xl">
            {language === 'es'
              ? 'Política estricta de eficiencia para optimizar el consumo de energía y agua en todas las fases de producción y centros de distribución.'
              : 'Strict efficiency policy to optimize energy and water consumption across all production phases and distribution facilities.'}
          </p>
        </div>
      </main>

      {/* IMAGEN: Abajo de ahorro de energía (lafabrica.jpg) */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 pb-20 sm:pb-28">
        <div className="w-full h-64 sm:h-96 md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-stone-200">
          <img
            src={laFabricaImg}
            alt="EcoPacific - Planta y fábrica de producción"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>
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
