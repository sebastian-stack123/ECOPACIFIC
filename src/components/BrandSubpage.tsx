import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, ArrowUpRight, Check, Droplets, Sparkles, Sun, Leaf } from 'lucide-react';
import { Brand, Product, Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BRANDS_DATA } from '../data/brandsData';
import { ProductDetailModal } from './ProductDetailModal';
import ecopacificLogo from '../assets/ecopacificlogo.png';

interface BrandSubpageProps {
  brand: Brand;
  language: Language;
  onNavigateHome: () => void;
  onNavigateBrand: (slug: string) => void;
  onOpenContact: () => void;
}

export const BrandSubpage: React.FC<BrandSubpageProps> = ({
  brand,
  language,
  onNavigateHome,
  onNavigateBrand,
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFamilyFilter, setActiveFamilyFilter] = useState<string>('all');

  const otherBrands = Object.values(BRANDS_DATA).filter((b) => b.id !== brand.id);

  const displayedFamilies =
    activeFamilyFilter === 'all'
      ? brand.families
      : brand.families.filter((f) => f.id === activeFamilyFilter);

  // Brand-specific distinct aesthetic details
  const getBrandLogoStyle = () => {
    switch (brand.id) {
      case 'coco-freeze':
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-yellow-400 text-sky-950 flex items-center justify-center font-black text-xs shadow-md">
              CF
            </div>
            <span className="text-2xl font-black tracking-tight text-white uppercase">
              COCO <span className="text-yellow-400">FREEZE</span>
            </span>
          </div>
        );
      case 'dhoy':
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shadow-md">
              DH
            </div>
            <span className="text-2xl font-black tracking-wider text-white">
              DHOY<span className="text-emerald-400">.</span>
            </span>
          </div>
        );
      case 'ecolove':
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-lime-400 text-stone-900 flex items-center justify-center font-bold text-xs shadow-md">
              ♥
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white lowercase">
              eco<span className="text-lime-300">love</span>
            </span>
          </div>
        );
      case 'hortilisto':
        return (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-teal-400 text-black flex items-center justify-center font-black text-xs shadow-md">
              HL
            </div>
            <span className="text-2xl font-black tracking-widest text-white uppercase">
              HORTI<span className="text-teal-400">LISTO</span>
            </span>
          </div>
        );
      default:
        return <span className="text-2xl font-black text-white">{brand.name}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* ========================================================
          STANDALONE BRAND TOP BAR / NAVBAR (Feels like its own website!)
          ======================================================== */}
      <header
        className="sticky top-0 left-0 right-0 z-40 shadow-lg transition-colors border-b"
        style={{
          backgroundColor: brand.colors.navBg,
          borderColor: 'rgba(255, 255, 255, 0.15)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          {/* Brand Logo Zone */}
          <div className="flex items-center gap-6">
            <a
              href="#brand-hero"
              className="cursor-pointer focus-visible:outline-none"
            >
              {getBrandLogoStyle()}
            </a>

            {/* Back to EcoPacific Subtle Marker */}
            <button
              onClick={onNavigateHome}
              className="hidden lg:flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors px-2.5 py-1 rounded-full bg-black/20 hover:bg-black/30 border border-white/10 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>EcoPacific Corporativo</span>
            </button>
          </div>

          {/* Standalone Brand Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-white">
            <a
              href="#historia"
              className="hover:opacity-80 transition-opacity"
              style={{ color: brand.colors.navText }}
            >
              {t.brandDetail.storyHeading}
            </a>
            <a
              href="#hitos"
              className="hover:opacity-80 transition-opacity"
              style={{ color: brand.colors.navText }}
            >
              {t.brandDetail.milestonesHeading}
            </a>
            <a
              href="#portafolio"
              className="hover:opacity-80 transition-opacity"
              style={{ color: brand.colors.navText }}
            >
              {t.brandDetail.portfolioHeading}
            </a>
            <button
              onClick={onOpenContact}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              style={{ color: brand.colors.navText }}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Standalone Brand Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('portafolio');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer border"
              style={{
                backgroundColor: brand.colors.buttonBg,
                color: brand.colors.buttonText,
                borderColor: brand.colors.buttonBorder,
              }}
            >
              Ver Portafolio
            </button>

            <button
              onClick={onNavigateHome}
              className="md:hidden p-1.5 rounded-lg bg-black/20 hover:bg-black/30 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Volver a ECOPACIFIC"
              title="Volver a ECOPACIFIC"
            >
              <img
                src={ecopacificLogo}
                alt="ECOPACIFIC"
                className="h-6 w-auto object-contain"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================
          1. DECLARACIÓN DE VALOR - Hero de Marca con Identidad Visual Propia
          ======================================================== */}
      <section
        id="brand-hero"
        className="relative py-24 sm:py-32 overflow-hidden text-white border-b-8"
        style={{
          borderColor: brand.colors.accent,
        }}
      >
        {/* Visual concept background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src={brand.heroImage}
            alt={brand.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-50 scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${brand.colors.footerBg} 0%, rgba(10, 10, 10, 0.8) 60%, rgba(0, 0, 0, 0.4) 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            {/* Tagline kicker */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-md"
              style={{
                backgroundColor: brand.colors.subKickerBg,
                color: brand.colors.subKickerText,
              }}
            >
              <span>{brand.colors.vibrantTag}</span>
            </div>

            {/* Declaración de Valor en tipografía grande y contundente */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05] text-balance drop-shadow-lg">
              &ldquo;{brand.valueStatement}&rdquo;
            </h1>

            <p className="text-lg sm:text-2xl text-stone-100 font-medium mb-10 leading-relaxed text-balance">
              {brand.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#portafolio"
                className="px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2"
                style={{
                  backgroundColor: brand.colors.buttonBg,
                  color: brand.colors.buttonText,
                  borderColor: brand.colors.buttonBorder,
                }}
              >
                Explorar productos {brand.name} &darr;
              </a>
              <button
                onClick={onOpenContact}
                className="px-6 py-4 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-colors cursor-pointer"
              >
                Distribuir esta marca
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HISTORIA & 3. HITOS DE LA MARCA
          ======================================================== */}
      <section id="historia" className="py-20 sm:py-28 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* 2. Historia */}
            <div className="lg:col-span-5">
              <div
                className="inline-block px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest mb-3"
                style={{
                  backgroundColor: brand.colors.badgeBg,
                  color: brand.colors.badgeText,
                }}
              >
                {t.brandDetail.storyHeading}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight mb-6 leading-tight">
                {brand.storyTitle}
              </h2>
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                {brand.storyText}
              </p>
            </div>

            {/* 3. Hitos de la Marca */}
            <div id="hitos" className="lg:col-span-7">
              <div
                className="inline-block px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest mb-4"
                style={{
                  backgroundColor: brand.colors.badgeBg,
                  color: brand.colors.badgeText,
                }}
              >
                {t.brandDetail.milestonesHeading}
              </div>

              <div className="space-y-4">
                {brand.milestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className="p-6 rounded-2xl bg-white border-2 shadow-xs hover:shadow-md transition-all"
                    style={{
                      borderColor: brand.colors.cardAccentBorder,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-white shadow-xs"
                        style={{ backgroundColor: brand.colors.primary }}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-stone-900">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. FAMILIAS DE PRODUCTOS & 5. FICHAS DE PRODUCTO
          ======================================================== */}
      <section className="py-24 sm:py-32 bg-white" id="portafolio">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b-2 border-stone-100">
            <div>
              <div
                className="inline-block px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest mb-2"
                style={{
                  backgroundColor: brand.colors.badgeBg,
                  color: brand.colors.badgeText,
                }}
              >
                {t.brandDetail.portfolioHeading}
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
                Portafolio {brand.name}
              </h2>
            </div>

            {/* Interactive Category Tabs with vibrant brand accent */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFamilyFilter('all')}
                className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-xs border ${
                  activeFamilyFilter === 'all'
                    ? 'scale-105 shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border-transparent'
                }`}
                style={
                  activeFamilyFilter === 'all'
                    ? {
                        backgroundColor: brand.colors.buttonBg,
                        color: brand.colors.buttonText,
                        borderColor: brand.colors.buttonBorder,
                      }
                    : {}
                }
              >
                Todas ({brand.products.length})
              </button>
              {brand.families.map((fam) => (
                <button
                  key={fam.id}
                  onClick={() => setActiveFamilyFilter(fam.id)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-xs border ${
                    activeFamilyFilter === fam.id
                      ? 'scale-105 shadow-md'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border-transparent'
                  }`}
                  style={
                    activeFamilyFilter === fam.id
                      ? {
                          backgroundColor: brand.colors.buttonBg,
                          color: brand.colors.buttonText,
                          borderColor: brand.colors.buttonBorder,
                        }
                      : {}
                  }
                >
                  {fam.name} ({fam.productIds.length})
                </button>
              ))}
            </div>
          </div>

          {/* Families List with Distinct Presentation Blocks */}
          <div className="space-y-20">
            {displayedFamilies.map((family) => {
              const familyProducts = brand.products.filter(
                (p) => p.familyId === family.id
              );

              return (
                <div key={family.id} className="space-y-10">
                  {/* Categoría destacada en bloque de color (REQUISITO CRÍTICO DEL DOCUMENTO) */}
                  <div
                    className="p-8 sm:p-10 rounded-3xl shadow-xl transition-all border-l-8"
                    style={{
                      backgroundColor: brand.colors.blockBg,
                      color: brand.colors.blockText,
                      borderColor: brand.colors.accent,
                    }}
                  >
                    <div className="max-w-4xl">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="px-2.5 py-0.5 rounded text-xs font-mono font-black uppercase tracking-wider"
                          style={{
                            backgroundColor: brand.colors.badgeBg,
                            color: brand.colors.badgeText,
                          }}
                        >
                          Categoría
                        </span>
                        <span className="text-xs font-black uppercase tracking-widest opacity-90">
                          {family.name}
                        </span>
                      </div>
                      <p className="text-xl sm:text-3xl font-extrabold leading-snug">
                        {family.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Fichas de producto de esta familia (ORDEN REQUERIDO: 1. Nombre 2. Imagen 3. Frase emocional 4. Presentaciones 5. Info técnica) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {familyProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => setSelectedProduct(product)}
                        className="group bg-white rounded-3xl p-6 sm:p-8 border-2 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                        style={{
                          borderColor: brand.colors.cardAccentBorder,
                        }}
                      >
                        <div>
                          {/* 1. Nombre del producto (Grande y claramente visible) */}
                          <div className="flex items-start justify-between gap-3 mb-4">
                            <h3 className="text-xl sm:text-2xl font-black text-stone-900 group-hover:opacity-80 transition-opacity">
                              {product.name}
                            </h3>
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-xs border"
                              style={{
                                backgroundColor: brand.colors.buttonBg,
                                color: brand.colors.buttonText,
                                borderColor: brand.colors.buttonBorder,
                              }}
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>

                          {/* 2. Imagen grande y protagonista */}
                          <div className="relative rounded-2xl bg-stone-50 overflow-hidden mb-6 aspect-[4/3] flex items-center justify-center p-4 border border-stone-100">
                            <img
                              src={product.imageUrl || brand.heroImage}
                              alt={product.name}
                              referrerPolicy="no-referrer"
                              className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                            />
                            <div className="absolute top-3 left-3">
                              <span
                                className="px-2.5 py-0.5 rounded-full text-xs font-bold shadow-xs"
                                style={{
                                  backgroundColor: brand.colors.navCtaBg,
                                  color: brand.colors.navCtaText,
                                }}
                              >
                                {brand.name}
                              </span>
                            </div>
                          </div>

                          {/* 3. Descripción emocional (Con mucho protagonismo) */}
                          <div className="mb-6 p-4 rounded-xl bg-stone-50 border border-stone-100">
                            <p className="text-sm sm:text-base font-medium text-stone-800 leading-snug italic">
                              &ldquo;{product.emotionalDescription}&rdquo;
                            </p>
                          </div>

                          {/* 4. Presentaciones (Mostradas dentro de la misma ficha) */}
                          <div className="mb-6">
                            <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-2.5">
                              {t.brandDetail.presentationsLabel}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {product.presentations.map((pres) => (
                                <span
                                  key={pres}
                                  className="px-3 py-1 rounded-full text-xs font-medium bg-stone-50 text-stone-700 border border-stone-200/80 shadow-2xs hover:bg-stone-100 transition-colors"
                                >
                                  {pres}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* 5. Información técnica (En segundo nivel visual) */}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CIERRE VISUAL DE MARCA & FOOTER EXCLUSIVO DE LA MARCA
          ======================================================== */}
      <section
        className="py-24 sm:py-32 text-white relative overflow-hidden"
        style={{
          backgroundColor: brand.colors.footerBg,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <span
              className="px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest mb-4 inline-block"
              style={{
                backgroundColor: brand.colors.navCtaBg,
                color: brand.colors.navCtaText,
              }}
            >
              {brand.name}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight text-balance">
              {brand.closingStatement}
            </h2>
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full font-black uppercase tracking-wider text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2"
              style={{
                backgroundColor: brand.colors.buttonBg,
                color: brand.colors.buttonText,
                borderColor: brand.colors.buttonBorder,
              }}
            >
              {t.brandDetail.contactBrand}
            </button>
          </div>

          {/* Ecosistema de marcas selector */}
          <div className="pt-12 border-t border-white/10">
            <span className="text-xs uppercase tracking-widest text-white/70 font-bold mb-6 block">
              {t.brandDetail.exploreOtherBrands}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherBrands.map((other) => (
                <button
                  key={other.id}
                  onClick={() => onNavigateBrand(other.slug)}
                  className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-white/40 text-left transition-all group cursor-pointer hover:bg-black/60 flex flex-col justify-between"
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
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ color: other.colors.buttonBg }}
                      />
                    </div>
                    <p className="text-xs text-white/80 line-clamp-2 mb-4">
                      {other.valueStatement}
                    </p>
                  </div>

                  {/* Each sub-section button in that brand's specific color */}
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border self-start shadow-sm"
                    style={{
                      backgroundColor: other.colors.buttonBg,
                      color: other.colors.buttonText,
                      borderColor: other.colors.buttonBorder,
                    }}
                  >
                    <span>{other.name}</span>
                    <span>&rarr;</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quiet Corporate Endorsement */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">{brand.name}</span>
              <span>·</span>
              <span>Una marca del ecosistema ECOPACIFIC</span>
            </div>
            <button
              onClick={onNavigateHome}
              className="text-white hover:underline font-semibold"
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
