import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';

import farmPanoramaImg from '../assets/images/hero_ecopacific_farm_1790632675187.jpg';
import manabiCropsImg from '../assets/images/brand_dhoy_citrus_1790632694674.jpg';
import cocoFreezeStoryImg from '../assets/images/brand_coco_freeze_1790632685019.jpg';
import fusionFruitsImg from '../assets/images/harvest_fruits_transition_1791495675009.jpg';
import closingOrchardImg from '../assets/images/hero_citrus_harvest_1790733004665.jpg';
import fundadoresImg from '../assets/images/ecopacificfotofundadores.jpg';

interface NuestraHistoriaSectionProps {
  language: Language;
}

export const NuestraHistoriaSection: React.FC<NuestraHistoriaSectionProps> = ({ language }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Track scroll position within this section with requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!trackRef.current) return;

      animationFrameId = requestAnimationFrame(() => {
        const rect = trackRef.current?.getBoundingClientRect();
        if (!rect) return;

        const windowHeight = window.innerHeight;
        const trackHeight = rect.height;
        const currentY = windowHeight * 0.5 - rect.top;
        const progress = Math.max(0, Math.min(1, currentY / trackHeight));

        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /* ========================================================
     ZIGZAG COCONUT ROLLING POSITION CALCULATION
     Tramo 1 (0.00 -> 0.26): De izquierda (12%) a derecha (88%)
     Tramo 2 (0.26 -> 0.53): De derecha (88%) a izquierda (12%)
     Tramo 3 (0.53 -> 0.78): De izquierda (12%) a derecha (88%)
     Tramo 4 (0.78 -> 1.00): De derecha (88%) a centro (50%)
     ======================================================== */
  const calculateCoconutState = (p: number) => {
    let xPercent = 12;
    let rotationDegrees = 0;
    let yPercent = p * 100;

    if (p <= 0.26) {
      // Tramo 1: Rueda hacia la DERECHA
      const t = p / 0.26;
      xPercent = 12 + t * 76;
      rotationDegrees = t * 720;
    } else if (p <= 0.53) {
      // Tramo 2: Rueda hacia la IZQUIERDA
      const t = (p - 0.26) / 0.27;
      xPercent = 88 - t * 76;
      rotationDegrees = 720 - t * 720;
    } else if (p <= 0.78) {
      // Tramo 3: Rueda hacia la DERECHA
      const t = (p - 0.53) / 0.25;
      xPercent = 12 + t * 76;
      rotationDegrees = t * 720;
    } else {
      // Tramo 4: Rueda hacia el CENTRO
      const t = (p - 0.78) / 0.22;
      xPercent = 88 - t * 38;
      rotationDegrees = 720 - t * 360;
    }

    return { xPercent, yPercent, rotationDegrees };
  };

  const { xPercent, yPercent, rotationDegrees } = calculateCoconutState(scrollProgress);

  return (
    <section
      ref={containerRef}
      id="viaje-del-coco"
      className="relative bg-[#FAF6EE] text-stone-900 overflow-hidden select-none"
    >
      {/* ========================================================
          1. INTRODUCCIÓN EDITORIAL
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-10 text-center">
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#5B8C2A] mb-3 block">
          {language === 'es' ? 'NUESTRA HISTORIA' : 'OUR STORY'}
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#5B8C2A] mb-6 leading-[1.08] text-balance">
          {language === 'es'
            ? 'Raíces en el campo, sueños en grande.'
            : 'Roots in the land, dreams in grande.'}
        </h2>

        <p className="text-lg sm:text-2xl text-stone-700 font-normal max-w-3xl mx-auto leading-relaxed text-balance mb-10">
          {language === 'es'
            ? 'Una familia manabita, un campo lleno de vida y la visión de llevar lo mejor de Ecuador más lejos.'
            : 'A family from Manabí, fertile lands full of life, and the vision to bring Ecuador’s best further.'}
        </p>

        {/* Fotografía Panorámica Agrícola */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-stone-300/80 bg-stone-200 aspect-[16/9] sm:aspect-[21/9]">
          <img
            src={farmPanoramaImg}
            alt="Entorno agrícola ecuatoriano - EcoPacific"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ========================================================
            MISIÓN Y VISIÓN
            Letras grandes en Misión y Visión, textos breves y elegantes
            ======================================================== */}
        <div className="max-w-4xl mx-auto text-center mt-20 sm:mt-28 space-y-16 sm:space-y-20">
          {/* Misión */}
          <div className="space-y-4">
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#5B8C2A]">
              {language === 'es' ? 'Misión' : 'Mission'}
            </h3>
            <p className="text-lg sm:text-2xl text-stone-700 font-normal max-w-2xl mx-auto leading-relaxed text-balance">
              {language === 'es'
                ? 'Con valores Cristianos innovamos alimentos saludables para generar prosperidad.'
                : 'With Christian values, we innovate healthy foods to generate prosperity.'}
            </p>
          </div>

          {/* Visión */}
          <div className="space-y-4">
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#5B8C2A]">
              {language === 'es' ? 'Visión' : 'Vision'}
            </h3>
            <p className="text-lg sm:text-2xl text-stone-700 font-normal max-w-2xl mx-auto leading-relaxed text-balance">
              {language === 'es'
                ? 'Ser líderes innovando alimentos saludables.'
                : 'To be leaders innovating healthy foods.'}
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          IMAGEN DE LADO A LADO (EDGE-TO-EDGE) / IMAGEN LARGA
          Foto de Fundadores Ecopacific: después de Misión y Visión y antes del viaje del coco
          ======================================================== */}
      <div className="w-full mt-14 sm:mt-20 mb-8 overflow-hidden h-[340px] sm:h-[480px] lg:h-[580px] bg-stone-900/5">
        <img
          src={fundadoresImg}
          alt={language === 'es' ? 'Fundadores de Ecopacific' : 'Ecopacific Founders'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ========================================================
          2. EL RECORRIDO DEL COCO (TRACK PRINCIPAL)
          ======================================================== */}
      <div ref={trackRef} className="relative max-w-6xl mx-auto px-6 sm:px-12 pb-32 pt-16">
        {/* ========================================================
            FONDO EVOLUTIVO CONTINUO: SILUETAS DE INFRAESTRUCTURA
            ======================================================== */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* TRAMO 1 (Playa tropical y palmeras) */}
          <div className="absolute top-0 left-0 right-0 h-[28%] opacity-20 text-[#5B8C2A]">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M 0 150 Q 250 180 500 150 T 1000 150 L 1000 600 L 0 600 Z" opacity="0.3" />
              <path d="M 0 240 Q 300 270 600 230 T 1000 250 L 1000 600 L 0 600 Z" opacity="0.4" />
              <g transform="translate(60, 40) scale(0.65)" opacity="0.75">
                <path d="M 80 400 Q 110 250 150 120 Q 155 110 150 105 Q 140 110 135 125 Q 95 250 70 400 Z" />
                <path d="M 150 105 Q 180 60 250 70 Q 230 100 150 110 Z" />
                <path d="M 150 105 Q 210 90 270 120 Q 240 140 150 110 Z" />
                <path d="M 150 105 Q 190 140 220 190 Q 185 170 150 110 Z" />
                <path d="M 150 105 Q 110 50 40 70 Q 70 100 150 110 Z" />
                <path d="M 150 105 Q 90 80 20 120 Q 60 140 150 110 Z" />
                <path d="M 150 105 Q 100 140 70 190 Q 115 170 150 110 Z" />
              </g>
              <g transform="translate(850, 90) scale(0.45)" opacity="0.5">
                <path d="M 80 400 Q 100 260 140 120 Q 145 110 140 105 Q 130 110 125 125 Q 90 260 70 400 Z" />
                <path d="M 140 105 Q 170 60 240 70 Q 220 100 140 110 Z" />
                <path d="M 140 105 Q 100 50 30 70 Q 60 100 140 110 Z" />
              </g>
            </svg>
          </div>

          {/* TRAMO 2 & 3 (Pueblo rural, casas sencillas, caminos) */}
          <div className="absolute top-[28%] left-0 right-0 h-[45%] opacity-18 text-[#3F3B36]">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 800"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M 0 350 Q 280 280 550 340 T 1000 320 L 1000 800 L 0 800 Z" opacity="0.4" />
              <g transform="translate(120, 240) scale(0.55)" opacity="0.8">
                <polygon points="50,120 120,50 190,120" />
                <rect x="65" y="120" width="110" height="90" />
                <path d="M 200 180 L 320 180 M 200 195 L 320 195 M 220 170 L 220 210 M 260 170 L 260 210 M 300 170 L 300 210" stroke="currentColor" strokeWidth="6" />
              </g>
              <g transform="translate(720, 360) scale(0.6)" opacity="0.8">
                <polygon points="40,110 100,50 160,110" />
                <rect x="50" y="110" width="100" height="80" />
                <circle cx="210" cy="110" r="40" />
                <rect x="205" y="140" width="10" height="60" />
              </g>
            </svg>
          </div>

          {/* TRAMO 4 (Ciudad desarrollada, infraestructuras) */}
          <div className="absolute top-[72%] left-0 right-0 bottom-0 opacity-16 text-[#1E293B]">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <rect x="80" y="280" width="60" height="220" />
              <rect x="150" y="220" width="80" height="280" />
              <rect x="240" y="180" width="90" height="320" />
              <rect x="340" y="240" width="70" height="260" />
              <polygon points="420,320 500,270 580,320" />
              <rect x="430" y="320" width="140" height="180" />
              <rect x="640" y="200" width="90" height="300" />
              <rect x="740" y="260" width="80" height="240" />
              <rect x="830" y="160" width="100" height="340" />
            </svg>
          </div>
        </div>

        {/* ========================================================
            TRAYECTORIA VISUAL CONTINUA (ZIGZAG TRACK)
            Visible en escritorio y tablet (md:block)
            ======================================================== */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 1000 2400" preserveAspectRatio="none" fill="none">
            <path
              d="M 120 220 
                 C 550 240, 880 500, 880 750 
                 C 880 1000, 120 1200, 120 1450 
                 C 120 1700, 880 1850, 880 2050 
                 C 880 2200, 600 2300, 500 2350"
              stroke="#D6CEBE"
              strokeWidth="6"
              strokeDasharray="8 8"
              strokeLinecap="round"
              className="opacity-60"
            />
          </svg>
        </div>

        {/* ========================================================
            EL COCO PROTAGONISTA MÁS GRANDE QUE RUEDA
            Visible en escritorio y tablet (md:block)
            ======================================================== */}
        {!prefersReducedMotion && (
          <div
            className="hidden md:block absolute z-20 pointer-events-none transition-transform duration-75 ease-out"
            style={{
              left: `${xPercent}%`,
              top: `${yPercent}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-28 sm:w-36 h-6 bg-black/25 rounded-full blur-xs" />

            <div
              className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-2xl"
              style={{
                transform: `rotate(${rotationDegrees}deg)`,
                transformOrigin: 'center center',
              }}
            >
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <defs>
                  <radialGradient id="coconutShellGradBig" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#9C6B5A" />
                    <stop offset="35%" stopColor="#7E4737" />
                    <stop offset="70%" stopColor="#52291C" />
                    <stop offset="100%" stopColor="#2E130B" />
                  </radialGradient>
                  <radialGradient id="coconutEyeGradBig" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#2D1108" />
                    <stop offset="100%" stopColor="#140603" />
                  </radialGradient>
                </defs>

                <path
                  d="M 60 8 C 96 8, 114 36, 114 62 C 114 92, 94 114, 60 114 C 26 114, 6 92, 6 62 C 6 36, 24 8, 60 8 Z"
                  fill="url(#coconutShellGradBig)"
                  stroke="#38170E"
                  strokeWidth="2"
                />

                <path d="M 60 8 Q 54 45 60 114" stroke="#5C3123" strokeWidth="2.5" strokeDasharray="3 4" opacity="0.65" />
                <path d="M 28 22 Q 35 65 33 102" stroke="#5C3123" strokeWidth="2" strokeDasharray="2 3" opacity="0.55" />
                <path d="M 92 22 Q 85 65 87 102" stroke="#5C3123" strokeWidth="2" strokeDasharray="2 3" opacity="0.55" />

                <ellipse cx="42" cy="34" rx="24" ry="16" fill="#FFFFFF" opacity="0.14" transform="rotate(-20 42 34)" />

                <ellipse cx="44" cy="46" rx="6.5" ry="8" fill="url(#coconutEyeGradBig)" stroke="#1F0803" strokeWidth="1.5" />
                <ellipse cx="72" cy="44" rx="6.5" ry="8" fill="url(#coconutEyeGradBig)" stroke="#1F0803" strokeWidth="1.5" />
                <ellipse cx="58" cy="68" rx="8" ry="6.5" fill="url(#coconutEyeGradBig)" stroke="#1F0803" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        )}

        {/* ========================================================
            3. ETAPAS NARRATIVAS (TEXTO E IMAGEN UNO AL LADO DEL OTRO)
            ======================================================== */}
        <div className="relative z-10 space-y-28 sm:space-y-40">
          {/* ETAPA 1: DÉCADA DE 1990 */}
          <div
            data-stage-item
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center pt-6"
          >
            <div className="space-y-4">
              <span className="text-sm sm:text-base font-black uppercase tracking-widest text-[#EA580C] block">
                {language === 'es' ? 'Década de 1990 · Manabí' : '1990s · Manabí'}
              </span>

              <h3 className="text-3xl sm:text-5xl font-black text-[#5B8C2A] tracking-tight leading-tight">
                {language === 'es' ? 'Todo comenzó en el campo.' : 'It all started in the field.'}
              </h3>

              <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal text-balance">
                {language === 'es'
                  ? 'Javier Barcia cultivaba tomates, maíz, limones y pimientos en su finca de 40 hectáreas en Manabí. Junto a su familia, comenzó a construir una historia ligada a la agricultura.'
                  : 'Javier Barcia cultivated tomatoes, corn, lemons, and peppers on his 40-hectare farm in Manabí. Alongside his family, he began building a story intertwined with agriculture.'}
              </p>
            </div>

            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-300 bg-stone-200 aspect-[16/10] w-full">
                <img
                  src={manabiCropsImg}
                  alt="Cultivos y trabajo agrícola en Manabí"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* ETAPA 2: 2003–2004 */}
          <div
            data-stage-item
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center"
          >
            <div className="order-2 md:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-300 bg-stone-200 aspect-[16/10] w-full">
                <img
                  src={cocoFreezeStoryImg}
                  alt="Cocos frescos y nacimiento de Coco Freeze"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-4 order-1 md:order-2">
              <span className="text-sm sm:text-base font-black uppercase tracking-widest text-[#EA580C] block">
                2003–2004 · Quito & Manabí
              </span>

              <h3 className="text-3xl sm:text-5xl font-black text-[#5B8C2A] tracking-tight leading-tight">
                {language === 'es' ? 'Una idea que cambió todo.' : 'An idea that changed everything.'}
              </h3>

              <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal text-balance">
                {language === 'es'
                  ? 'La familia comenzó a vender limones a Supermaxi. En 2004, Kevin Barcia llevó 200 cocos a Quito y los vendió en minutos. Así nació Coco Freeze.'
                  : 'The family began selling lemons to Supermaxi. In 2004, Kevin Barcia brought 200 coconuts to Quito and sold them in minutes. Thus Coco Freeze was born.'}
              </p>
            </div>
          </div>

          {/* ETAPA 3: 2008 */}
          <div
            data-stage-item
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center"
          >
            <div className="space-y-4">
              <span className="text-sm sm:text-base font-black uppercase tracking-widest text-[#EA580C] block">
                2008 · Fundación
              </span>

              <h3 className="text-3xl sm:text-5xl font-black text-[#5B8C2A] tracking-tight leading-tight">
                {language === 'es' ? 'Nace Ecopacific.' : 'Ecopacific is born.'}
              </h3>

              <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal text-balance">
                {language === 'es'
                  ? 'La unión de Limón Ecopacific, Coco Freeze y Hortilisto dio origen a Ecopacific S.A., combinando experiencia agrícola e innovación alimentaria.'
                  : 'The union of Limón Ecopacific, Coco Freeze, and Hortilisto gave birth to Ecopacific S.A., merging agricultural experience and food innovation.'}
              </p>
            </div>

            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-300 bg-stone-200 aspect-[16/10] w-full">
                <img
                  src={fusionFruitsImg}
                  alt="Limones, cocos y frutas ecuatorianas - Nace Ecopacific"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* ETAPA 4: HOY */}
          <div
            data-stage-item
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center"
          >
            <div className="space-y-6">
              <span className="text-sm sm:text-base font-black uppercase tracking-widest text-[#EA580C] block">
                {language === 'es' ? 'Hoy · Consolidación Nacional' : 'Today · National Expansion'}
              </span>

              <h3 className="text-3xl sm:text-5xl font-black text-[#5B8C2A] tracking-tight leading-tight">
                {language === 'es' ? 'Seguimos creciendo.' : 'We continue growing.'}
              </h3>

              <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal text-balance">
                {language === 'es'
                  ? 'Ecopacific conecta el campo ecuatoriano con miles de consumidores.'
                  : 'Ecopacific connects the Ecuadorian countryside with thousands of consumers.'}
              </p>

              {/* 4 Cifras Oficiales Reales */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#5B8C2A]">2008</div>
                  <div className="text-2xs sm:text-xs font-semibold text-stone-600 mt-1 uppercase tracking-wider">
                    {language === 'es' ? 'Año de fundación' : 'Foundation year'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#5B8C2A]">+200</div>
                  <div className="text-2xs sm:text-xs font-semibold text-stone-600 mt-1 uppercase tracking-wider">
                    {language === 'es' ? 'Productos en Ecuador' : 'Products in Ecuador'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#5B8C2A]">N.º 1</div>
                  <div className="text-2xs sm:text-xs font-semibold text-stone-600 mt-1 uppercase tracking-wider">
                    {language === 'es' ? 'Líder en jugos y frutas' : 'Leader in juices & fruit'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#5B8C2A]">+100</div>
                  <div className="text-2xs sm:text-xs font-semibold text-stone-600 mt-1 uppercase tracking-wider">
                    {language === 'es' ? 'Agricultores aliados' : 'Allied farmers'}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-300 bg-stone-200 aspect-[16/10] w-full">
                <img
                  src={closingOrchardImg}
                  alt="Ecopacific conectando el campo con los consumidores"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            4. CIERRE DE LA HISTORIA
            "Lo mejor de Ecuador, para el mundo."
            ======================================================== */}
        <div className="mt-28 sm:mt-40 p-8 sm:p-16 rounded-3xl bg-[#5B8C2A] text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img
              src={closingOrchardImg}
              alt="Frutas creciendo en el campo ecuatoriano"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <svg viewBox="0 0 120 120" className="w-11 h-11">
                <path
                  d="M 60 10 C 95 10, 112 38, 112 62 C 112 90, 92 112, 60 112 C 28 112, 8 90, 8 62 C 8 36, 25 10, 60 10 Z"
                  fill="#9C6B5A"
                />
                <ellipse cx="44" cy="46" rx="6.5" ry="8" fill="#1F0803" />
                <ellipse cx="72" cy="44" rx="6.5" ry="8" fill="#1F0803" />
                <ellipse cx="58" cy="68" rx="8" ry="6.5" fill="#1F0803" />
              </svg>
            </div>

            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight text-balance">
              {language === 'es'
                ? 'Lo mejor de Ecuador, para el mundo.'
                : 'The best of Ecuador, for the world.'}
            </h3>

            <p className="text-base sm:text-xl text-green-100/90 font-light max-w-xl mx-auto leading-relaxed text-balance">
              {language === 'es'
                ? 'Desde las palmeras de Manabí hasta las ciudades del Ecuador, cada producto lleva consigo el valor del campo y la frescura de nuestro origen.'
                : 'From the palm groves of Manabí to Ecuador’s modern cities, every product carries the value of the countryside and the freshness of our origin.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
