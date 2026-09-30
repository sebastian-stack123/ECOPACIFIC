import React from 'react';
import { Users, HeartHandshake, Sprout } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import dhoyImg from '../assets/images/brand_dhoy_citrus_1790632694674.jpg';

interface OriginSectionProps {
  language: Language;
}

export const OriginSection: React.FC<OriginSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];
  const o = t.originSection;

  return (
    <section id="origen" className="py-24 sm:py-36 bg-[#FBF9F5] text-stone-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Intro */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#286E48] font-bold mb-3 block">
            {o.title}
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#1E5638] leading-[1.08] mb-4">
            {o.subtitle}
          </h2>
          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-light">
            {o.lead}
          </p>
        </div>

        {/* Visual + 3 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Visual */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-sm bg-stone-200 min-h-[300px] lg:min-h-[360px]">
            <img
              src={dhoyImg}
              alt="Agricultores de Manabí y Ecuador"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#143D27]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1E5638] text-white text-xs font-semibold uppercase tracking-wider mb-2">
                Manabí & Ecuador
              </span>
              <p className="text-lg sm:text-xl font-bold leading-snug">
                Más de 100 pequeños agricultores aliados.
              </p>
            </div>
          </div>

          {/* 3 Focused Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#1E5638] flex items-center justify-center shrink-0 border border-green-200/60">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  {o.point1Title}
                </h4>
                <p className="text-xs text-stone-600">
                  {o.point1Desc}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#1E5638] flex items-center justify-center shrink-0 border border-green-200/60">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  {o.point2Title}
                </h4>
                <p className="text-xs text-stone-600">
                  {o.point2Desc}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-[#1E5638] flex items-center justify-center shrink-0 border border-green-200/60">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">
                  {o.point3Title}
                </h4>
                <p className="text-xs text-stone-600">
                  {o.point3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
