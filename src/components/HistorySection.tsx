import React from 'react';
import { Target, Heart, ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface HistorySectionProps {
  language: Language;
}

export const HistorySection: React.FC<HistorySectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];
  const h = t.historySection;

  return (
    <section id="nosotros" className="py-24 sm:py-36 bg-[#18482E] text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header Block: Minimal & Direct */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-green-300 font-bold mb-3 block">
            ECOPACIFIC S.A.
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4 leading-[1.08]">
            {h.title}
          </h2>
          <p className="text-lg sm:text-xl text-green-100/90 leading-relaxed font-light">
            {h.lead}
          </p>
        </div>

        {/* 4 Authentic Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 pb-10 border-b border-[#286E48]">
          <div className="p-5 rounded-2xl bg-[#1E5638]/70 border border-[#286E48]">
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              {h.stat1Number}
            </div>
            <div className="text-xs text-green-100/80 font-medium">
              {h.stat1Label}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-[#1E5638]/70 border border-[#286E48]">
            <div className="text-3xl sm:text-4xl font-extrabold text-green-200 mb-1">
              {h.stat2Number}
            </div>
            <div className="text-xs text-green-100/80 font-medium">
              {h.stat2Label}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-[#1E5638]/70 border border-[#286E48]">
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
              {h.stat3Number}
            </div>
            <div className="text-xs text-green-100/80 font-medium">
              {h.stat3Label}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-[#1E5638]/70 border border-[#286E48]">
            <div className="text-3xl sm:text-4xl font-extrabold text-green-200 mb-1">
              {h.stat4Number}
            </div>
            <div className="text-xs text-green-100/80 font-medium">
              {h.stat4Label}
            </div>
          </div>
        </div>

        {/* VISIÓN & MISIÓN: Direct & Punchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#1E5638]/80 border border-[#286E48]">
            <div className="flex items-center gap-2 text-green-300 font-bold uppercase tracking-wider text-xs mb-2">
              <Target className="w-4 h-4 text-green-300" />
              <span>{h.visionTitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              "{h.visionText}"
            </h3>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#1E5638]/80 border border-[#286E48]">
            <div className="flex items-center gap-2 text-green-300 font-bold uppercase tracking-wider text-xs mb-2">
              <Award className="w-4 h-4 text-green-300" />
              <span>{h.misionTitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              "{h.misionText}"
            </h3>
          </div>
        </div>

        {/* VALORES: 3 Clean Minimal Cards */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-green-300 font-bold mb-4 block">
            {h.valoresSubtitle}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#1E5638]/60 border border-[#286E48]">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-green-300" />
                <h4 className="text-base font-bold text-white">{h.val1Title}</h4>
              </div>
              <p className="text-xs text-green-100/80">{h.val1Desc}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E5638]/90 border border-green-300/50">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-green-300" />
                <h4 className="text-base font-bold text-white">{h.val2Title}</h4>
              </div>
              <p className="text-xs text-green-100">{h.val2Desc}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1E5638]/60 border border-[#286E48]">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-green-300" />
                <h4 className="text-base font-bold text-white">{h.val3Title}</h4>
              </div>
              <p className="text-xs text-green-100/80">{h.val3Desc}</p>
            </div>
          </div>
        </div>

        {/* Fusión & LinkedIn CTA: Super simple bar */}
        <div className="p-6 rounded-2xl bg-[#143D27] border border-[#286E48] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-green-300 font-semibold mb-0.5">
              Fusión de emprendimientos · 2008
            </div>
            <div className="text-base font-bold text-white">
              Limón Ecopacific + Coco Freeze + Hortilisto
            </div>
          </div>
          <a
            href={h.workWithUsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#18482E] text-xs font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors shadow-sm shrink-0"
          >
            <span>{h.workWithUs}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
