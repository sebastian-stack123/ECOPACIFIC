import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand, Product, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BRANDS_DATA } from '../data/brandsData';
import { ProductDetailModal } from './ProductDetailModal';
import cocofreezeLogoTransparent from '../assets/images/cocofreeze_logo_transparent.png';
import cocofreezePortadaImg from '../assets/images/cocofreeze_portada_2026.jpg';
import aguaDeCocoCategoryImg from '../assets/images/cocofreeze_aguadecoco.png';
import saboresDeCocoImg from '../assets/images/sabores_de_coco.png';
import cocosStoryImg from '../assets/images/cocos.jpg';
import dhoyStoryImg from '../assets/images/dhoy.jpg';
import dhoyMenuImg from '../assets/images/dhoyimagenmenu.jpg';
import dhoyImg from '../assets/images/dhoy_marca.jpg';
import dhoyJugo100Img from '../assets/images/dhoy_jugo100.png';
import dhoyShotImg from '../assets/images/dhoy_shot.png';
import dhoyColdPressedImg from '../assets/images/dhoy_coldpressed.png';
import ecoloveImg from '../assets/images/ecolove_nuevo.png';
import ecoloveTransparentImg from '../assets/images/ecolove_transparent.png';
import ecoloveMenuImg from '../assets/images/imagenmenuecolove.jpg';
import hortilistoLogoImg from '../assets/images/hortilisto_nuevo.png';
import hortilistoTransparentImg from '../assets/images/hortilisto_transparent.png';
import hortilistoMenuImg from '../assets/images/hortilistoimagenlogo.jpg';
import { CocoFreezeVideoPlayer } from './CocoFreezeVideoPlayer';
import cocofreeze2006BotellaImg from '../assets/images/cocofreeze_2006_botella_azul.png';
import screenshot2010Img from '../assets/images/screenshot_2010.png';
import cocosRefrigeradoraImg from '../assets/images/cocos_refrigeradora.jpg';
import dhoyantiguatImg from '../assets/images/dhoyantiguat.png';
import dhoyfabricaImg from '../assets/images/dhoyfabrica.png';
import dhoyshotshitosImg from '../assets/images/dhoyshotshitos.png';
import dhoy2026BotellaImg from '../assets/images/dhoy_2026_botella.jpg';
import naturalezaMesaRusticaImg from '../assets/images/dhoy_naturaleza_fresca_mesa_rustica.png';
import lafabricaImg from '../assets/images/lafabrica-1.jpg';
import campo3Img from '../assets/images/campo3.jpg';
import fotoEcopacificImg from '../assets/images/fotoecopacific.jpg';
import bebidasTropicalesImg from '../assets/images/bebidas_tropicales_en_la_cosecha.png';

// DHOY Categorías portadas (primer producto de cada categoría)
import dhoy355mlImg from '../assets/EP_DHOY_355ML_1.png';
import dhoyNaranjaZanaImg from '../assets/355-naranjazana.jpg';
import dhoyColdPitahayaImg from '../assets/COLD-PRESSED-PITAHAYA.png';
import dhoyShotInmuniImg from '../assets/JENGIBRE.jpg';
import dhoySabilaImg from '../assets/sabila.png';

interface BrandSubpageProps {
  brand?: Brand;
  brandSlug?: string;
  language: Language;
  onNavigateHome: () => void;
  onNavigateBrand: (slug: string) => void;
  onOpenContact: () => void;
}

export const BrandSubpage: React.FC<BrandSubpageProps> = ({
  brand: brandProp,
  brandSlug,
  language,
  onNavigateHome,
  onNavigateBrand,
  onOpenContact,
}) => {
  const brand = brandProp || (brandSlug ? BRANDS_DATA[brandSlug] : null) || BRANDS_DATA['coco-freeze'];
  const t = UI_TRANSLATIONS[language];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFamilyId, setSelectedFamilyId] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // Ref & scroll tracker for the zigzag rolling coconut (Coco Freeze) and orange (DHOY)
  const historyTimelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    if (brand.id !== 'coco-freeze' && brand.id !== 'dhoy') return;

    const handleScroll = () => {
      if (!historyTimelineRef.current) return;
      const rect = historyTimelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalDist = rect.height;
      if (totalDist <= 0) return;

      const currentPos = viewportHeight * 0.65 - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [brand.id]);

  // Lock body scroll and handle Escape key when pop-up is active
  useEffect(() => {
    if (selectedFamilyId || selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProduct) {
          setSelectedProduct(null);
        } else if (selectedFamilyId) {
          setSelectedFamilyId(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedFamilyId, selectedProduct]);

  const otherBrands = Object.values(BRANDS_DATA).filter((b) => b.id !== brand.id);

  // Helper to get brand hero image
  const getBrandHeroImage = () => {
    switch (brand.id) {
      case 'coco-freeze':
        return cocofreezePortadaImg;
      case 'dhoy':
        return dhoyMenuImg;
      case 'ecolove':
        return ecoloveMenuImg;
      case 'hortilisto':
        return hortilistoMenuImg;
      default:
        return brand.heroImage;
    }
  };

  // Helper to get brand story image
  const getBrandStoryImage = () => {
    switch (brand.id) {
      case 'coco-freeze':
        return cocosStoryImg;
      case 'dhoy':
        return dhoyStoryImg;
      case 'ecolove':
        return ecoloveMenuImg;
      case 'hortilisto':
        return hortilistoMenuImg;
      default:
        return cocosStoryImg;
    }
  };

  // Helper to get category images
  const getFamilyImage = (familyId: string, index: number) => {
    if (brand.id === 'coco-freeze') {
      return familyId === 'agua-de-coco' || index === 0
        ? aguaDeCocoCategoryImg
        : saboresDeCocoImg;
    }
    if (brand.id === 'dhoy') {
      if (familyId === 'jugo-de-naranja' || index === 0) return dhoy355mlImg;
      if (familyId === 'mezclas-de-fruta' || index === 1) return dhoyNaranjaZanaImg;
      if (familyId === 'cold-pressed' || index === 2) return dhoyColdPitahayaImg;
      if (familyId === 'shots' || index === 3) return dhoyShotInmuniImg;
      if (familyId === 'especialidades-dhoy' || index === 4) return dhoySabilaImg;
      return dhoy355mlImg;
    }
    if (brand.id === 'ecolove') {
      return index === 0 ? ecoloveMenuImg : ecoloveImg;
    }
    if (brand.id === 'hortilisto') {
      return index === 0 ? hortilistoMenuImg : hortilistoLogoImg;
    }
    return brand.heroImage;
  };

  // Helper to get milestone images paired with each milestone
  const getMilestoneImage = (index: number) => {
    if (brand.id === 'coco-freeze') {
      if (index === 0) return { img: cocosRefrigeradoraImg, alt: '2004 El comienzo - 200 cocos' };
      if (index === 1) return { img: cocofreeze2006BotellaImg, alt: '2006 Del coco a la botella' };
      if (index === 2) return { img: screenshot2010Img, alt: '2010 Aprender desde el cultivo' };
      return { img: cocofreezePortadaImg, alt: '2026 Cosechado en su punto' };
    }
    if (brand.id === 'dhoy') {
      if (index === 0) return { img: dhoyStoryImg, alt: "2009 Nace DHOY" };
      if (index === 1) return { img: dhoyantiguatImg, alt: "2011 Llegamos a más personas" };
      if (index === 2) return { img: dhoyfabricaImg, alt: "2012 Tecnología para cuidar la fruta" };
      if (index === 3) return { img: dhoyshotshitosImg, alt: "2016 Nacen los shots" };
      return { img: dhoy2026BotellaImg, alt: "2026 Fruta de verdad" };
    }
    if (brand.id === 'ecolove') {
      if (index === 0) return { img: ecoloveMenuImg, alt: "2017 Primeros pasos" };
      if (index === 1) return { img: ecoloveImg, alt: "2018 Llegan los aceites" };
      if (index === 2) return { img: ecoloveTransparentImg, alt: "2021 Bebidas vegetales" };
      if (index === 3) return { img: fotoEcopacificImg, alt: "2022 Nuevas opciones" };
      return { img: bebidasTropicalesImg, alt: "2026 Bienestar diario" };
    }
    return { img: brand.heroImage, alt: brand.name };
  };

  // Helper for brand logo in navbar
  const renderNavbarLogo = () => {
    switch (brand.id) {
      case 'coco-freeze':
        return (
          <img
            src={cocofreezeLogoTransparent}
            alt="Coco Freeze"
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-md"
          />
        );
      case 'dhoy':
        return (
          <div className="w-13 h-13 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md shrink-0 overflow-hidden">
            <img
              src={dhoyImg}
              alt="D'Hoy"
              className="w-[88%] h-auto max-h-full object-contain"
            />
          </div>
        );
      case 'ecolove':
        return (
          <div className="w-13 h-13 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center p-1.5 shadow-md shrink-0 overflow-hidden">
            <img
              src={ecoloveTransparentImg}
              alt="EcoLove"
              className="w-[82%] h-auto max-h-full object-contain drop-shadow-xs"
            />
          </div>
        );
      case 'hortilisto':
        return (
          <div className="w-13 h-13 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-md shrink-0 overflow-hidden">
            <img
              src={hortilistoTransparentImg}
              alt="Hortilisto"
              className="w-[90%] h-auto max-h-full object-contain"
            />
          </div>
        );
      default:
        return <span className="text-xl sm:text-2xl font-black text-white">{brand.name}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* ========================================================
          1. NAVBAR SUPERIOR UNIFICADO (Estructura idéntica para todas las marcas)
          ======================================================== */}
      <header
        className="sticky top-0 left-0 right-0 z-40 shadow-lg transition-colors"
        style={{
          backgroundColor: brand.colors.navBg,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between relative">
          {/* IZQUIERDA: Menú de 3 rayitas */}
          <div className="flex items-center gap-3 z-10">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -ml-2 rounded-xl text-white hover:bg-white/15 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* CENTRO: Logo oficial de la marca COMPLETAMENTE CENTRADO */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto z-10 max-w-[55%] sm:max-w-[65%]">
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none"
              aria-label={`${brand.name} Inicio`}
            >
              {renderNavbarLogo()}
            </button>
          </div>

          {/* DERECHA: PRODUCTOS (sin burbuja, texto directo) */}
          <div className="flex items-center gap-4 z-10">
            <a
              href="#productos"
              className="text-xs sm:text-sm font-black uppercase tracking-wider text-white hover:text-yellow-300 transition-colors cursor-pointer"
            >
              PRODUCTOS
            </a>
          </div>
        </div>
      </header>

      {/* ========================================================
          DRAWER LATERAL (Menú de 3 Rayitas)
          ======================================================== */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop con desenfoque suave */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Panel deslizante con el color del menú */}
          <div
            className="relative w-80 max-w-[85vw] h-full shadow-2xl p-6 flex flex-col justify-between z-10 transition-transform"
            style={{ backgroundColor: brand.colors.navBg }}
          >
            <div>
              {/* Header del menú con logo y botón cerrar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div className="min-h-11 flex items-center">
                  {renderNavbarLogo()}
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1.5 rounded-lg text-white hover:bg-white/15 transition-colors cursor-pointer"
                  aria-label="Cerrar menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Enlaces de navegación */}
              <nav className="mt-8 flex flex-col gap-4 text-base font-bold text-white">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onNavigateHome();
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-left cursor-pointer text-yellow-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Ecopacific Corporativo</span>
                </button>

                <a
                  href="#valor"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left"
                >
                  {brand.id === 'coco-freeze' ? 'Cosechado en su punto' : 'Inicio'}
                </a>

                {brand.milestones && brand.milestones.length > 0 && (
                  <a
                    href="#historia"
                    onClick={() => setIsDrawerOpen(false)}
                    className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left"
                  >
                    Historia
                  </a>
                )}

                <a
                  href="#productos"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left"
                >
                  Productos
                </a>
              </nav>
            </div>

            {/* Pie del menú */}
            <div className="pt-6 border-t border-white/15 text-xs text-white/70 flex items-center justify-between">
              <span>EcoPacific S.A.</span>
              <span className="text-[10px] uppercase font-bold text-yellow-300">{brand.name}</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          1. INICIO / DECLARACIÓN (Lo primero en pantalla debajo del navbar para todas las marcas)
          ======================================================== */}
      <section
        id="valor"
        className={`pt-12 sm:pt-16 pb-14 sm:pb-20 text-center transition-colors duration-500 ${
          brand.id === 'coco-freeze'
            ? 'bg-[#009FE3] text-white'
            : brand.id === 'dhoy'
            ? 'bg-[#3b6e22] text-white'
            : 'bg-white text-stone-900'
        }`}
      >
        <div id="cosechado-en-su-punto" className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2
            className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 flex flex-col items-center gap-2 ${
              brand.id === 'coco-freeze' || brand.id === 'dhoy' ? 'text-white drop-shadow-xs' : 'text-stone-900'
            }`}
          >
            {brand.id === 'dhoy' ? (
              <>
                <span>DE FAMILIA Y DEL CAMPO.</span>
                <span>SABE A FRUTA DE VERDAD.</span>
              </>
            ) : (
              <span>{brand.valueStatement}</span>
            )}
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-10 sm:mb-14 text-balance ${
              brand.id === 'coco-freeze' || brand.id === 'dhoy' ? 'text-white/95' : 'text-stone-700'
            }`}
          >
            {brand.id === 'coco-freeze'
              ? 'Todo comienza en el campo. Seleccionamos cocos en su punto ideal de cosecha para llevar a cada botella ese sabor naturalmente dulce, fresco y auténtico que hace especial al coco. Más de 20 años cerca del origen nos han enseñado algo simple: cuando el coco se cosecha en su punto, se siente en cada sorbo.'
              : brand.shortDescription}
          </p>

          {/* Video interactivo para Coco Freeze */}
          {brand.id === 'coco-freeze' && (
            <CocoFreezeVideoPlayer src="/VIDEO-COCO-FREEZE-2026.mp4" />
          )}

          {/* Imagen debajo de inicio para DHOY */}
          {brand.id === 'dhoy' && (
            <div className="max-w-5xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[16/9] sm:aspect-[21/9] md:h-[460px] bg-white/10 backdrop-blur-sm">
              <img
                src={naturalezaMesaRusticaImg}
                alt="D'Hoy - Naturaleza fresca en la mesa rústica"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
              />
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          2. HISTORIA Y LOS HITOS (Para marcas con historia: Coco Freeze, D'Hoy, EcoLove; Hortilisto no tiene)
          ======================================================== */}
      {brand.milestones && brand.milestones.length > 0 && brand.storyTitle && (
        <section
          id="historia"
          className={`py-20 sm:py-28 transition-colors duration-500 ${
            brand.id === 'coco-freeze'
              ? 'bg-[#0087C1] text-white border-t border-b border-sky-400/30'
              : brand.id === 'dhoy'
              ? 'bg-[#315b1d] text-white border-t border-b border-lime-600/30'
              : 'bg-[#F8FAFC]'
          }`}
        >
          <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
            <span
              className={`text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2 ${
                brand.id === 'coco-freeze'
                  ? 'text-yellow-300'
                  : brand.id === 'dhoy'
                  ? 'text-yellow-300'
                  : 'text-stone-400'
              }`}
            >
              Historia
            </span>
            <h2
              className={`text-3xl sm:text-5xl font-black tracking-tight mb-6 ${
                brand.id === 'coco-freeze' || brand.id === 'dhoy' ? 'text-white' : 'text-stone-900'
              }`}
            >
              {brand.storyTitle}
            </h2>
            <p
              className={`text-base sm:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-12 text-balance ${
                brand.id === 'coco-freeze' || brand.id === 'dhoy' ? 'text-white/90' : 'text-stone-700'
              }`}
            >
              {brand.storyText}
            </p>

            {/* Timeline en zigzag (con coco rodante verde para Coco Freeze, naranjita para D'Hoy, y fotos emparejadas para cada hito) */}
            <div
              ref={historyTimelineRef}
              className="relative max-w-5xl mx-auto mt-14 py-6"
            >
              {/* Coco rodante verde natural en zigzag (SOLO para Coco Freeze) */}
              {brand.id === 'coco-freeze' && (
                <div
                  className="absolute pointer-events-none z-20 transition-transform duration-75 will-change-transform hidden md:flex items-center justify-center"
                  style={{
                    top: `${Math.min(Math.max(scrollProgress * 88, 3), 92)}%`,
                    left: `${50 + 36 * Math.cos(scrollProgress * Math.PI * 3)}%`,
                    transform: `translate(-50%, -50%) rotate(${scrollProgress * 1440}deg)`,
                  }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]" fill="none">
                      <defs>
                        <radialGradient id="cocoShellGradGreen" cx="36%" cy="32%" r="68%">
                          <stop offset="0%" stopColor="#86EFAC" />
                          <stop offset="28%" stopColor="#4ADE80" />
                          <stop offset="70%" stopColor="#22C55E" />
                          <stop offset="100%" stopColor="#15803D" />
                        </radialGradient>
                        <linearGradient id="cocoCalyxGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4D7C0F" />
                          <stop offset="50%" stopColor="#65A30D" />
                          <stop offset="100%" stopColor="#A3E635" />
                        </linearGradient>
                      </defs>
                      {/* Corona / sépalos de la pipa verde */}
                      <path d="M48 9 L52 9 L51.5 17 L48.5 17 Z" fill="#65A30D" />
                      <path d="M50 16 C42 9, 32 10, 29 16 C37 17, 43 21, 46 25 Z" fill="url(#cocoCalyxGrad)" stroke="#3F6212" strokeWidth="0.8" />
                      <path d="M50 16 C58 8, 68 9, 71 15 C63 17, 57 21, 54 25 Z" fill="url(#cocoCalyxGrad)" stroke="#3F6212" strokeWidth="0.8" />
                      <path d="M50 16 C46 22, 54 22, 50 26 Z" fill="#84CC16" />
                      {/* Cuerpo de la pipa verde */}
                      <ellipse cx="50" cy="56" rx="37" ry="39" fill="url(#cocoShellGradGreen)" stroke="#16A34A" strokeWidth="2" />
                      {/* Brillo suave de coco fresco */}
                      <path d="M30 40 C36 30, 48 26, 62 28 C56 26, 40 28, 30 40 Z" fill="#FFFFFF" opacity="0.35" />
                      <ellipse cx="36" cy="46" rx="14" ry="7" fill="#FFFFFF" opacity="0.22" transform="rotate(-30 36 46)" />
                      {/* Marcas naturales suaves de coco */}
                      <ellipse cx="42" cy="48" rx="3.5" ry="4.5" fill="#15803D" opacity="0.45" />
                      <ellipse cx="58" cy="48" rx="3.5" ry="4.5" fill="#15803D" opacity="0.45" />
                      <ellipse cx="50" cy="66" rx="4" ry="5" fill="#15803D" opacity="0.45" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Naranjita rodante grande y notoria en zigzag (SOLO para DHOY) */}
              {brand.id === 'dhoy' && (
                <div
                  className="absolute pointer-events-none z-20 transition-transform duration-75 will-change-transform hidden md:flex items-center justify-center"
                  style={{
                    top: `${Math.min(Math.max(scrollProgress * 88, 3), 92)}%`,
                    left: `${50 + 36 * Math.cos(scrollProgress * Math.PI * 3)}%`,
                    transform: `translate(-50%, -50%) rotate(${scrollProgress * 1440}deg)`,
                  }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]" fill="none">
                      <defs>
                        <radialGradient id="orangeSkinGrad" cx="38%" cy="32%" r="68%">
                          <stop offset="0%" stopColor="#FED7AA" />
                          <stop offset="25%" stopColor="#FB923C" />
                          <stop offset="70%" stopColor="#EA580C" />
                          <stop offset="100%" stopColor="#C2410C" />
                        </radialGradient>
                        <linearGradient id="leafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#15803D" />
                          <stop offset="100%" stopColor="#4ADE80" />
                        </linearGradient>
                      </defs>
                      {/* Leaves */}
                      <path d="M50 20 C38 8, 23 12, 20 22 C30 24, 40 22, 50 20 Z" fill="url(#leafGrad)" stroke="#166534" strokeWidth="0.8" />
                      <path d="M50 20 C58 10, 72 12, 76 20 C66 22, 58 22, 50 20 Z" fill="url(#leafGrad)" stroke="#166534" strokeWidth="0.8" />
                      {/* Stem */}
                      <path d="M48 24 L52 24 L51 15 L49 15 Z" fill="#78350F" />
                      {/* Orange Body */}
                      <circle cx="50" cy="56" r="38" fill="url(#orangeSkinGrad)" stroke="#9A3412" strokeWidth="1.5" />
                      {/* Sheen */}
                      <ellipse cx="38" cy="44" rx="14" ry="9" fill="#FFF7ED" opacity="0.3" transform="rotate(-20 38 44)" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Hitos e imágenes emparejadas en zigzag */}
              <div className="space-y-12 md:space-y-16">
                {brand.milestones.map((milestone, idx) => {
                  const isRightCard = idx % 2 === 0;
                  const { img: milestoneImg, alt: milestoneAlt } = getMilestoneImage(idx);

                  const textCard = (
                    <div
                      className="p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center flex flex-col justify-center min-h-[200px]"
                      style={{ backgroundColor: brand.colors.navBg }}
                    >
                      <span className="text-3xl sm:text-4xl font-black text-yellow-300 tracking-tight block mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-black text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                        {milestone.description}
                      </p>
                    </div>
                  );

                  const imageCard = (
                    <div className="w-full rounded-3xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all">
                      <img
                        src={milestoneImg}
                        alt={milestoneAlt}
                        className="w-full h-auto block object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                    </div>
                  );

                  return (
                    <div
                      key={milestone.year}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center"
                    >
                      <div className={isRightCard ? 'order-2 md:order-1' : 'order-1'}>
                        {isRightCard ? imageCard : textCard}
                      </div>
                      <div className={isRightCard ? 'order-1 md:order-2' : 'order-2'}>
                        {isRightCard ? textCard : imageCard}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          3. PRODUCTOS (Para todas las marcas)
          ======================================================== */}
      <section
        className={`py-20 sm:py-28 transition-colors duration-500 ${
          brand.id === 'coco-freeze'
            ? 'bg-[#009FE3] text-white'
            : brand.id === 'dhoy'
            ? 'bg-[#3b6e22] text-white'
            : 'bg-white text-stone-900'
        }`}
        id="productos"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <h2
              className={`text-3xl sm:text-5xl font-black tracking-tight ${
                brand.id === 'coco-freeze' || brand.id === 'dhoy' ? 'text-white drop-shadow-xs' : 'text-stone-900'
              }`}
            >
              Productos
            </h2>
          </div>

          {/* Cuadros interactivos de categorías */}
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {brand.families.map((family, idx) => (
              <div
                key={family.id}
                onClick={() => setSelectedFamilyId(family.id)}
                className={`group rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer flex flex-col items-center justify-between bg-white text-stone-900 shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full ${
                  brand.families.length === 2
                    ? 'sm:w-[calc(50%-1.25rem)] max-w-md'
                    : 'sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[360px]'
                }`}
              >
                <div className="w-full h-72 sm:h-80 md:h-96 rounded-2xl bg-white p-3 sm:p-5 flex items-center justify-center overflow-hidden shadow-inner">
                  <img
                    src={getFamilyImage(family.id, idx)}
                    alt={family.name}
                    className="max-h-full max-w-full w-auto h-auto object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-6 text-center flex flex-col items-center w-full">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFamilyId(family.id);
                    }}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base sm:text-lg font-black shadow-md hover:shadow-xl transition-all group-hover:scale-105 active:scale-95 text-white cursor-pointer"
                    style={{ backgroundColor: brand.colors.buttonBg }}
                  >
                    <span>{family.name}</span>
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          POP-UP DE CASI TODA LA PANTALLA PARA VER PRODUCTOS
          ======================================================== */}
      {selectedFamilyId && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8 animate-fadeIn"
          onClick={() => setSelectedFamilyId(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Pop-up con Título, Tagline y Botón X bien visible */}
            <div className="sticky top-0 z-20 px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between border-b border-stone-200 bg-white/95 backdrop-blur-md">
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="w-3.5 h-12 rounded-full shrink-0"
                  style={{ backgroundColor: brand.colors.buttonBg }}
                />
                <div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-400 block">
                    {brand.name} · Categoría
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight uppercase">
                    {brand.families.find((f) => f.id === selectedFamilyId)?.name}
                  </h3>
                  {brand.families.find((f) => f.id === selectedFamilyId)?.tagline && (
                    <p className="text-xs sm:text-sm text-stone-600 font-medium mt-1 max-w-2xl leading-snug">
                      {brand.families.find((f) => f.id === selectedFamilyId)?.tagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Botón X grande y claramente visible */}
              <button
                onClick={() => setSelectedFamilyId(null)}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-stone-100 hover:bg-stone-200 active:scale-95 text-stone-800 flex items-center justify-center transition-all cursor-pointer shadow-md hover:rotate-90 duration-200 shrink-0 ml-4"
                aria-label="Cerrar pop up"
              >
                <X className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Contenido scrolleable de los productos */}
            <div className="overflow-y-auto p-6 sm:p-10 flex-1 bg-stone-50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {brand.products
                  .filter((p) => p.familyId === selectedFamilyId)
                  .map((product) => (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className="group bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 border border-stone-100"
                    >
                      <div>
                        {/* 1. Nombre del producto (altura fija para alineación simétrica y perfecta de todas las fotos) */}
                        <div className="h-16 sm:h-20 flex items-center justify-between gap-3 mb-3">
                          <h4 className="text-xl sm:text-2xl font-black text-stone-900 group-hover:opacity-80 transition-opacity line-clamp-2 leading-tight">
                            {product.name}
                          </h4>
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-xs text-white"
                            style={{ backgroundColor: brand.colors.buttonBg }}
                          >
                            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        </div>

                        {/* 2. Imagen del producto (visible 100% de la botella en cualquier pantalla) */}
                        <div className="relative rounded-2xl bg-stone-50 overflow-hidden mb-5 h-72 sm:h-80 md:h-88 flex items-center justify-center p-3 sm:p-5">
                          <img
                            src={product.imageUrl || brand.heroImage}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="max-h-full max-w-full w-auto h-auto object-contain object-center group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                          />
                        </div>

                        {/* Descripción exacta del producto */}
                        {product.emotionalDescription && (
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 font-normal">
                            {product.emotionalDescription}
                          </p>
                        )}

                        {/* 3. Presentaciones */}
                        <div className="mb-4">
                          <span className="text-xs uppercase tracking-wider text-stone-400 font-bold block mb-2">
                            {t.brandDetail.presentationsLabel}:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {product.presentations.map((pres) => (
                              <span
                                key={pres}
                                className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 shadow-2xs hover:bg-stone-200 transition-colors"
                              >
                                {pres}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 4. Información técnica SOLO si existe para la marca */}
                      {product.technicalInfo && (product.technicalInfo.ingredients || product.technicalInfo.conservation || product.technicalInfo.origin) && (
                        <div className="pt-3 border-t border-stone-100 text-xs text-stone-600 space-y-1.5">
                          {product.technicalInfo.ingredients && (
                            <div>
                              <span className="font-bold text-stone-800">
                                {t.brandDetail.ingredients}:
                              </span>{' '}
                              {product.technicalInfo.ingredients}
                            </div>
                          )}
                          {product.technicalInfo.conservation && (
                            <div>
                              <span className="font-bold text-stone-800">
                                {t.brandDetail.conservation}:
                              </span>{' '}
                              {product.technicalInfo.conservation}
                            </div>
                          )}
                          {product.technicalInfo.origin && (
                            <div>
                              <span className="font-bold text-stone-800">
                                {t.brandDetail.origin}:
                              </span>{' '}
                              {product.technicalInfo.origin}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {/* Footer del Pop-up con botón para cerrar */}
            <div className="px-6 sm:px-10 py-4 bg-white border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-medium">
                {brand.name} · {brand.products.filter((p) => p.familyId === selectedFamilyId).length} productos disponibles
              </span>
              <button
                onClick={() => setSelectedFamilyId(null)}
                className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
              >
                Cerrar &times;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          5. CIERRE CON EL LOGO AL MEDIO (Sin "una marca del ecosistema ecopacific")
          ======================================================== */}
      <footer
        className="py-14 sm:py-20 text-white relative overflow-hidden"
        style={{
          backgroundColor: brand.colors.navBg,
        }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center justify-center text-center gap-6">
          {/* Logo centrado en el medio como cierre principal */}
          <div className="flex items-center justify-center scale-110 sm:scale-125 my-1">
            {renderNavbarLogo()}
          </div>

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold transition-all cursor-pointer shadow-md hover:text-yellow-300 text-sm"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Regresar al portal ECOPACIFIC</span>
          </button>
        </div>
      </footer>

      {/* Modal para Ficha Individual Completa */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          brand={brand}
          language={language}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
