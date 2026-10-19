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
import cocofreezeAntiguaImg from '../assets/images/cocofreezeantigua.png';
import screenshot2010Img from '../assets/images/screenshot_2026_10_15.png';

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

  // Ref & scroll tracker for the single zigzag rolling coconut (Coco Freeze only)
  const historyTimelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    if (brand.id !== 'coco-freeze') return;

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
      if (familyId === '100-jugo' || index === 0) return dhoyJugo100Img;
      if (familyId === 'shot' || index === 1) return dhoyShotImg;
      if (familyId === 'cold-pressed' || index === 2) return dhoyColdPressedImg;
      return dhoyImg;
    }
    if (brand.id === 'ecolove') {
      return index === 0 ? ecoloveMenuImg : ecoloveImg;
    }
    if (brand.id === 'hortilisto') {
      return index === 0 ? hortilistoMenuImg : hortilistoLogoImg;
    }
    return brand.heroImage;
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          {/* IZQUIERDA: Menú de 3 rayitas */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 -ml-2 rounded-xl text-white hover:bg-white/15 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* CENTRO: Logo oficial de la marca (transparente, sin fondo blanco ni líneas) */}
          <a
            href="#brand-hero"
            className="cursor-pointer flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            {renderNavbarLogo()}
          </a>

          {/* DERECHA: PRODUCTOS (sin burbuja, texto directo) */}
          <div className="flex items-center gap-4">
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
                  href="#productos"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left"
                >
                  Productos
                </a>

                <a
                  href="#historia"
                  onClick={() => setIsDrawerOpen(false)}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left"
                >
                  Historia
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
          2. PORTADA / INICIO (Cuadro redondeado sin textos ni delineados)
          ======================================================== */}
      <section id="brand-hero" className="w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-10 sm:pb-14">
        <div className="w-full h-[65vh] sm:h-[80vh] md:h-[85vh] rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl bg-stone-100">
          <img
            src={getBrandHeroImage()}
            alt={brand.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* ========================================================
          COCO FREEZE: 
          1. Portada / Inicio
          2. Sección 'COSECHADO EN SU PUNTO' con texto y video abajo
          3. Sección 'HISTORIA' (con timeline en zigzag y las 4 fotos integradas)
          4. Sección 'PRODUCTOS' (con botones azules directos y pop-up)
          
          OTRAS MARCAS (D'Hoy, EcoLove, Hortilisto):
          1. Portada / Inicio
          2. Productos
          3. Historia
          ======================================================== */}

      {brand.id === 'coco-freeze' ? (
        <>
          {/* 1. SECCIÓN COSECHADO EN SU PUNTO + VIDEO INTERACTIVO */}
          <section className="pt-14 sm:pt-20 pb-14 sm:pb-20 bg-white text-center">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">
              {/* Título: COSECHADO EN SU PUNTO centrado y grande como el de Productos */}
              <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-6">
                COSECHADO EN SU PUNTO
              </h2>

              {/* Texto explicativo en letras más pequeñas */}
              <p className="text-base sm:text-lg md:text-xl text-stone-700 leading-relaxed font-normal max-w-3xl mx-auto mb-10 sm:mb-14 text-balance">
                Todo comienza en el campo. Seleccionamos cocos en su punto ideal de cosecha para llevar a cada botella ese sabor naturalmente dulce, fresco y auténtico que hace especial al coco. Más de 20 años cerca del origen nos han enseñado algo simple: cuando el coco se cosecha en su punto, se siente en cada sorbo.
              </p>

              {/* Video en un recuadro redondeado grande que se reproduce con sonido mientras aparece en pantalla */}
              <CocoFreezeVideoPlayer videoId="5Bsu-sFegGE" />
            </div>
          </section>

          {/* 2. HISTORIA Y LOS HITOS (con las 4 fotos en zigzag) */}
          <section id="historia" className="py-20 sm:py-28 bg-[#F8FAFC]">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-6">
                {brand.storyTitle}
              </h2>
              <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal max-w-3xl mx-auto mb-12 text-balance">
                {brand.storyText}
              </p>

              {/* Timeline en zigzag con coco rodante y fotos emparejadas */}
              <div
                ref={historyTimelineRef}
                className="relative max-w-5xl mx-auto mt-14 py-6"
              >
                {/* Coco rodante grande y notorio en zigzag */}
                <div
                  className="absolute pointer-events-none z-20 transition-transform duration-75 will-change-transform hidden md:flex items-center justify-center"
                  style={{
                    top: `${Math.min(Math.max(scrollProgress * 88, 3), 92)}%`,
                    left: `${50 + 36 * Math.cos(scrollProgress * Math.PI * 3)}%`,
                    transform: `translate(-50%, -50%) rotate(${scrollProgress * 1440}deg)`,
                  }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]" fill="none">
                      <defs>
                        <radialGradient id="cocoShellGrad" cx="35%" cy="30%" r="70%">
                          <stop offset="0%" stopColor="#8C532B" />
                          <stop offset="45%" stopColor="#5E3416" />
                          <stop offset="100%" stopColor="#381D0B" />
                        </radialGradient>
                        <linearGradient id="cocoSprout" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4A7422" />
                          <stop offset="100%" stopColor="#84CC16" />
                        </linearGradient>
                      </defs>
                      <path d="M50 14 C46 6, 36 4, 32 8 C38 10, 44 16, 46 22 Z" fill="url(#cocoSprout)" />
                      <path d="M50 14 C54 5, 64 6, 68 11 C62 11, 56 17, 53 23 Z" fill="url(#cocoSprout)" />
                      <ellipse cx="50" cy="54" rx="37" ry="40" fill="url(#cocoShellGrad)" stroke="#2A1406" strokeWidth="2.5" />
                      <ellipse cx="40" cy="42" rx="4.5" ry="5.5" fill="#1C0D05" />
                      <circle cx="39" cy="40.5" r="1.5" fill="#4A2813" />
                      <ellipse cx="60" cy="42" rx="4.5" ry="5.5" fill="#1C0D05" />
                      <circle cx="59" cy="40.5" r="1.5" fill="#4A2813" />
                      <ellipse cx="50" cy="62" rx="5" ry="6" fill="#1C0D05" />
                      <circle cx="49" cy="60.5" r="1.6" fill="#4A2813" />
                    </svg>
                  </div>
                </div>

                {/* Hitos e imágenes emparejadas:
                    2004: Foto 200 cocos a la izquierda, Texto a la derecha
                    2006: Texto a la izquierda, Foto Coco Freeze Antigua a la derecha
                    2010: Foto Screenshot a la izquierda, Texto a la derecha
                    2026: Texto a la izquierda, Foto Portada 2026 a la derecha
                */}
                <div className="space-y-12 md:space-y-16">
                  {brand.milestones.map((milestone, idx) => {
                    const isRightCard = idx % 2 === 0;

                    let milestoneImg = cocosStoryImg;
                    let milestoneAlt = '2004 El comienzo - 200 cocos';
                    if (idx === 1) {
                      milestoneImg = cocofreezeAntiguaImg;
                      milestoneAlt = '2006 Del coco a la botella - Coco Freeze Antigua';
                    } else if (idx === 2) {
                      milestoneImg = screenshot2010Img;
                      milestoneAlt = '2010 Aprender desde el cultivo';
                    } else if (idx === 3) {
                      milestoneImg = cocofreezePortadaImg;
                      milestoneAlt = '2026 Cosechado en su punto';
                    }

                    const textCard = (
                      <div
                        className="p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center h-full flex flex-col justify-center min-h-[190px]"
                        style={{ backgroundColor: brand.colors.navBg }}
                      >
                        <span className="text-2xl sm:text-3xl font-black text-yellow-300 tracking-tight block mb-1">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                          {milestone.description}
                        </p>
                      </div>
                    );

                    const imageCard = (
                      <div className="w-full rounded-3xl overflow-hidden shadow-xl bg-white border border-stone-200/70 aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center p-3 group hover:shadow-2xl transition-shadow min-h-[190px]">
                        <img
                          src={milestoneImg}
                          alt={milestoneAlt}
                          className="w-full h-full object-contain rounded-2xl group-hover:scale-102 transition-transform duration-300"
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

          {/* 3. PRODUCTOS DESPUÉS DE LA HISTORIA */}
          <section className="py-20 sm:py-28 bg-white" id="productos">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
                  Productos
                </h2>
              </div>

              {/* Cuadros interactivos de categorías: solo botón azul con el nombre y la flecha, sin título repetido ni palabra 'Ver' */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {brand.families.map((family, idx) => (
                  <div
                    key={family.id}
                    onClick={() => setSelectedFamilyId(family.id)}
                    className="group rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer flex flex-col items-center justify-between bg-[#FAFAF8] shadow-md hover:shadow-2xl hover:bg-white hover:-translate-y-1"
                  >
                    <div className="w-full h-64 sm:h-72 rounded-2xl bg-white p-4 flex items-center justify-center overflow-hidden shadow-inner">
                      <img
                        src={getFamilyImage(family.id, idx)}
                        alt={family.name}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-6 text-center flex flex-col items-center w-full">
                      {/* Solo botón azul con el nombre de la categoría y la flecha */}
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
        </>
      ) : (
        /* OTRAS MARCAS (D'Hoy, EcoLove, Hortilisto): Productos y luego Historia */
        <>
          {/* PRODUCTOS */}
          <section className="py-20 sm:py-28 bg-white" id="productos">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
                  Productos
                </h2>
              </div>

              {/* Cuadros interactivos de categorías */}
              <div
                className={`grid grid-cols-1 ${
                  brand.families.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
                } gap-8 max-w-5xl mx-auto`}
              >
                {brand.families.map((family, idx) => (
                  <div
                    key={family.id}
                    onClick={() => setSelectedFamilyId(family.id)}
                    className="group rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer flex flex-col items-center justify-between bg-[#FAFAF8] shadow-md hover:shadow-2xl hover:bg-white hover:-translate-y-1"
                  >
                    <div className="w-full h-64 sm:h-72 rounded-2xl bg-white p-4 flex items-center justify-center overflow-hidden shadow-inner">
                      <img
                        src={getFamilyImage(family.id, idx)}
                        alt={family.name}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
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

          {/* HISTORIA */}
          <section id="historia" className="py-20 sm:py-28 bg-[#F8FAFC]">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-6">
                {brand.storyTitle}
              </h2>
              <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal max-w-3xl mx-auto mb-10 text-balance">
                {brand.storyText}
              </p>

              {/* Imagen central de la historia */}
              <div className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white mb-16">
                <div className="relative aspect-[16/10]">
                  <img
                    src={getBrandStoryImage()}
                    alt={brand.storyTitle}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Hitos centrados */}
              <div className="max-w-2xl mx-auto space-y-8 mt-14">
                {brand.milestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className="p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center"
                    style={{ backgroundColor: brand.colors.navBg }}
                  >
                    <span className="text-2xl sm:text-3xl font-black text-yellow-300 tracking-tight block mb-1">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

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
            {/* Header del Pop-up con Título y Botón X bien visible */}
            <div className="sticky top-0 z-20 px-6 sm:px-10 py-5 sm:py-6 flex items-center justify-between border-b border-stone-200 bg-white/95 backdrop-blur-md">
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="w-3.5 h-10 rounded-full"
                  style={{ backgroundColor: brand.colors.buttonBg }}
                />
                <div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-400 block">
                    {brand.name} · Categoría
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
                    {brand.families.find((f) => f.id === selectedFamilyId)?.name}
                  </h3>
                </div>
              </div>

              {/* Botón X grande y claramente visible */}
              <button
                onClick={() => setSelectedFamilyId(null)}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-stone-100 hover:bg-stone-200 active:scale-95 text-stone-800 flex items-center justify-center transition-all cursor-pointer shadow-md hover:rotate-90 duration-200"
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
                        {/* 1. Nombre del producto */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <h4 className="text-xl sm:text-2xl font-black text-stone-900 group-hover:opacity-80 transition-opacity">
                            {product.name}
                          </h4>
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-xs text-white"
                            style={{ backgroundColor: brand.colors.buttonBg }}
                          >
                            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                          </div>
                        </div>

                        {/* 2. Imagen del producto */}
                        <div className="relative rounded-2xl bg-stone-50 overflow-hidden mb-6 aspect-[4/3] flex items-center justify-center p-4">
                          <img
                            src={product.imageUrl || brand.heroImage}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                          />
                        </div>

                        {/* 3. Presentaciones */}
                        <div className="mb-6">
                          <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-2.5">
                            {t.brandDetail.presentationsLabel}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {product.presentations.map((pres) => (
                              <span
                                key={pres}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 shadow-2xs hover:bg-stone-200 transition-colors"
                              >
                                {pres}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 4. Información técnica completa */}
                      <div className="pt-4 border-t border-stone-100 text-xs text-stone-600 space-y-2">
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
                        <div className="pt-2 text-right">
                          <span
                            className="text-xs font-black uppercase tracking-wider group-hover:underline"
                            style={{ color: brand.colors.primary }}
                          >
                            {t.brandDetail.viewSheet} &rarr;
                          </span>
                        </div>
                      </div>
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
          5. FOOTER EXCLUSIVO (Color del menú navBg, SIN BOTONES DE OTRAS MARCAS)
          ======================================================== */}
      <footer
        className="py-12 sm:py-16 text-white relative overflow-hidden"
        style={{
          backgroundColor: brand.colors.navBg,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between text-sm text-white/80 gap-6">
          <div className="flex items-center gap-3">
            <span className="font-black text-white text-base tracking-wide">{brand.name}</span>
            <span>·</span>
            <span>Una marca del ecosistema ECOPACIFIC</span>
          </div>
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-all cursor-pointer shadow-xs hover:text-yellow-300"
          >
            <ArrowLeft className="w-4 h-4" />
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
