import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand, Product, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BRANDS_DATA } from '../data/brandsData';
import { ProductDetailModal } from './ProductDetailModal';
import cocofreezeLogoTransparent from '../assets/images/cocofreeze_logo_transparent.png';
import cocofreezePortadaImg from '../assets/images/cocofreeze_portada_2026.jpg';
import aguaDeCocoCategoryImg from '../assets/images/cocofreezeimagenmenu.jpg';
import saboresCategoryImg from '../assets/images/bebidas_tropicales_en_la_finca.jpg';
import cocosStoryImg from '../assets/images/cocos.jpg';
import dhoyStoryImg from '../assets/images/dhoy.jpg';
import dhoyMenuImg from '../assets/images/dhoyimagenmenu.jpg';
import dhoyImg from '../assets/images/dhoy_marca.jpg';
import ecoloveImg from '../assets/images/ecolove_nuevo.png';
import ecoloveMenuImg from '../assets/images/imagenmenuecolove.jpg';
import hortilistoLogoImg from '../assets/images/hortilisto_nuevo.png';
import hortilistoMenuImg from '../assets/images/hortilistoimagenlogo.jpg';

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

  // Ref & scroll tracker for the single zigzag rolling element in history
  const historyTimelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
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
  }, []);

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
        : saboresCategoryImg;
    }
    if (brand.id === 'dhoy') {
      return index === 0 ? dhoyMenuImg : dhoyStoryImg;
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
          <img
            src={dhoyImg}
            alt="D'Hoy"
            className="h-8 sm:h-10 w-auto object-contain rounded-md drop-shadow-sm"
          />
        );
      case 'ecolove':
        return (
          <img
            src={ecoloveImg}
            alt="EcoLove"
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-md"
          />
        );
      case 'hortilisto':
        return (
          <img
            src={hortilistoLogoImg}
            alt="Hortilisto"
            className="h-8 sm:h-10 w-auto object-contain drop-shadow-sm"
          />
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
                <div className="h-9 flex items-center">
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

                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    onOpenContact();
                  }}
                  className="px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-left cursor-pointer"
                >
                  {t.nav.contact}
                </button>
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
          3. PRODUCTOS (Ubicados antes de la historia, sin delineados)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-white" id="productos">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Título Productos Centrado, sin palabras secundarias ni delineados */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
              Productos
            </h2>
          </div>

          {/* Cuadros interactivos de categorías con imagen (sin delineados) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {brand.families.slice(0, 2).map((family, idx) => {
              const isSelected = selectedFamilyId === family.id;
              return (
                <div
                  key={family.id}
                  onClick={() => {
                    setSelectedFamilyId(isSelected ? null : family.id);
                    setTimeout(() => {
                      document.getElementById('brand-products-list')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className={`group rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col items-center ${
                    isSelected
                      ? 'shadow-2xl scale-[1.02]'
                      : 'bg-[#FAFAF8] shadow-md hover:shadow-xl hover:bg-white'
                  }`}
                  style={{
                    backgroundColor: isSelected ? `${brand.colors.navBg}18` : undefined,
                  }}
                >
                  <div className="w-full h-64 sm:h-72 rounded-2xl bg-white p-4 flex items-center justify-center overflow-hidden shadow-inner">
                    <img
                      src={getFamilyImage(family.id, idx)}
                      alt={family.name}
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <h3
                      className="text-2xl sm:text-3xl font-black transition-colors"
                      style={{
                        color: isSelected ? brand.colors.primary : '#0f172a',
                      }}
                    >
                      {family.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Despliegue interactivo de los productos de la categoría seleccionada (sin delineados) */}
          <div id="brand-products-list">
            {selectedFamilyId && (
              <div className="pt-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
                  <h4 className="text-2xl font-black text-stone-900">
                    Productos: {brand.families.find((f) => f.id === selectedFamilyId)?.name}
                  </h4>
                  <button
                    onClick={() => setSelectedFamilyId(null)}
                    className="text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 cursor-pointer"
                  >
                    Ocultar productos &times;
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {brand.products
                    .filter((p) => p.familyId === selectedFamilyId)
                    .map((product) => (
                      <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="group bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          {/* 1. Nombre del producto */}
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <h3 className="text-xl sm:text-2xl font-black text-stone-900 group-hover:opacity-80 transition-opacity">
                              {product.name}
                            </h3>
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-xs text-white"
                              style={{ backgroundColor: brand.colors.buttonBg }}
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>

                          {/* 2. Imagen del producto (sin delineado) */}
                          <div className="relative rounded-2xl bg-stone-50 overflow-hidden mb-6 aspect-[4/3] flex items-center justify-center p-4">
                            <img
                              src={product.imageUrl || brand.heroImage}
                              alt={product.name}
                              referrerPolicy="no-referrer"
                              className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                            />
                          </div>

                          {/* 3. Frase emocional (sin delineado) */}
                          <div
                            className="mb-6 p-4 rounded-xl"
                            style={{ backgroundColor: `${brand.colors.navBg}12` }}
                          >
                            <p className="text-sm sm:text-base font-medium text-stone-800 leading-snug italic">
                              &ldquo;{product.emotionalDescription}&rdquo;
                            </p>
                          </div>

                          {/* 4. Presentaciones */}
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

                        {/* 5. Información técnica */}
                        <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1">
                          {product.technicalInfo.conservation && (
                            <div className="truncate">
                              <span className="font-bold text-stone-700">
                                {t.brandDetail.conservation}:
                              </span>{' '}
                              {product.technicalInfo.conservation}
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
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. HISTORIA (Cajas del color del menú, zigzag Derecha / Izquierda)
          ======================================================== */}
      <section id="historia" className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
          {/* Título centrado arriba */}
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-6">
            {brand.storyTitle}
          </h2>

          {/* Texto descriptivo centrado */}
          <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-normal max-w-3xl mx-auto mb-10 text-balance">
            {brand.storyText}
          </p>

          {/* Imagen central de la historia (sin delineado) */}
          <div className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white mb-20">
            <div className="relative aspect-[16/10]">
              <img
                src={getBrandStoryImage()}
                alt={brand.storyTitle}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Línea de tiempo en zigzag interactiva */}
          <div
            ref={historyTimelineRef}
            className="relative max-w-4xl mx-auto mt-14 py-6"
          >
            {/* Elemento rodante grande y notorio (sin burbuja blanca, solo el gráfico natural con sombra 3D) */}
            <div
              className="absolute pointer-events-none z-20 transition-transform duration-75 will-change-transform hidden md:flex items-center justify-center"
              style={{
                top: `${Math.min(Math.max(scrollProgress * 88, 2), 92)}%`,
                // Zigzag sincronizado con las tarjetas: empieza en la derecha (84%), luego izquierda (16%), etc.
                left: `${50 + 34 * Math.cos(scrollProgress * Math.PI * 3)}%`,
                transform: `translate(-50%, -50%) rotate(${scrollProgress * 1440}deg)`,
              }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                {brand.id === 'coco-freeze' ? (
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
                ) : (
                  <div
                    className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center p-3 text-white text-2xl font-black"
                    style={{ backgroundColor: brand.colors.accent || brand.colors.primary }}
                  >
                    ★
                  </div>
                )}
              </div>
            </div>

            {/* Tarjetas alternadas:
                1. El comienzo -> DERECHA
                2. Del coco a la botella -> IZQUIERDA
                3. Aprender desde el cultivo -> DERECHA
                4. El último (Cosechado en su punto) -> IZQUIERDA
                Fondo del color del menú (navBg), años fuera de burbuja y títulos centrados
            */}
            <div className="space-y-12 md:space-y-16">
              {brand.milestones.map((milestone, idx) => {
                // idx 0: Derecha, idx 1: Izquierda, idx 2: Derecha, idx 3: Izquierda
                const isRight = idx % 2 === 0;
                return (
                  <div
                    key={milestone.year}
                    className="relative flex flex-col md:flex-row items-center"
                  >
                    {/* Columna Izquierda (para hitos impares: idx 1, idx 3) */}
                    <div className={`w-full md:w-1/2 ${!isRight ? 'md:pr-10' : 'md:hidden'}`}>
                      {!isRight && (
                        <div
                          className="p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center"
                          style={{ backgroundColor: brand.colors.navBg }}
                        >
                          {/* Año fuera de burbuja, centrado arriba del título */}
                          <span className="text-2xl sm:text-3xl font-black text-yellow-300 tracking-tight block mb-1">
                            {milestone.year}
                          </span>
                          {/* Título centrado */}
                          <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                            {milestone.title}
                          </h3>
                          {/* Descripción centrada */}
                          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Columna Derecha (para hitos pares: idx 0, idx 2) */}
                    <div className={`w-full md:w-1/2 ${isRight ? 'md:pl-10 md:ml-auto' : 'hidden md:block'}`}>
                      {isRight && (
                        <div
                          className="p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center"
                          style={{ backgroundColor: brand.colors.navBg }}
                        >
                          {/* Año fuera de burbuja, centrado arriba del título */}
                          <span className="text-2xl sm:text-3xl font-black text-yellow-300 tracking-tight block mb-1">
                            {milestone.year}
                          </span>
                          {/* Título centrado */}
                          <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                            {milestone.title}
                          </h3>
                          {/* Descripción centrada */}
                          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FOOTER EXCLUSIVO (Color del menú navBg)
          ======================================================== */}
      <section
        className="py-16 sm:py-24 text-white relative overflow-hidden"
        style={{
          backgroundColor: brand.colors.navBg,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Ecosistema de marcas selector */}
          <div>
            <span className="text-xs uppercase tracking-widest text-white/70 font-bold mb-6 block">
              {t.brandDetail.exploreOtherBrands}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherBrands.map((other) => (
                <button
                  key={other.id}
                  onClick={() => onNavigateBrand(other.slug)}
                  className="p-6 rounded-2xl bg-black/25 hover:bg-black/40 text-left transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: other.colors.buttonBg }}
                        />
                        <span className="text-lg font-black text-white transition-colors">
                          {other.name}
                        </span>
                      </div>
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-yellow-300"
                      />
                    </div>
                    <p className="text-xs text-white/80 line-clamp-2 mb-4">
                      {other.valueStatement}
                    </p>
                  </div>

                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider self-start shadow-sm bg-white/10 hover:bg-white/20 text-white"
                  >
                    <span>{other.name}</span>
                    <span>&rarr;</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Retorno corporativo */}
          <div className="mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">{brand.name}</span>
              <span>·</span>
              <span>Una marca del ecosistema ECOPACIFIC</span>
            </div>
            <button
              onClick={onNavigateHome}
              className="text-white hover:underline font-semibold cursor-pointer"
            >
              ← Regresar al portal ECOPACIFIC
            </button>
          </div>
        </div>
      </section>

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
