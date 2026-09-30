import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import heroCitrusImg from '../assets/images/hero_citrus_harvest_1790733004665.jpg';

interface CtaSectionProps {
  language: Language;
  onExplore: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ language, onExplore }) => {
  return (
    <section className="relative py-24 sm:py-36 bg-[#18482E] text-white overflow-hidden">
      {/* Background Photograph with subtle darkening scrim */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src={heroCitrusImg}
          alt="Frutas frescas de ECOPACIFIC"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-40 scale-105"
        />
        <div className="absolute inset-0 bg-[#18482E]/85 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18482E] via-transparent to-[#18482E]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1E5638]/90 text-green-100 text-xs font-semibold uppercase tracking-widest mb-6 border border-[#286E48] shadow-xs">
          <span>{language === 'es' ? 'ECOPACIFIC Corporativo' : 'ECOPACIFIC Corporate'}</span>
        </div>

        {/* Title: Exact Slogan */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-tight text-balance">
          {language === 'es' ? 'Innovando Alimentos Saludables' : 'Innovating Healthy Foods'}
        </h2>

        {/* Subtitle: Exact Slogan */}
        <p className="max-w-2xl text-lg sm:text-xl text-green-100/90 font-light mb-8 leading-relaxed text-balance">
          {language === 'es'
            ? 'Conoce más de nuestro trabajo y nuestra empresa.'
            : 'Learn more about our work and our company.'}
        </p>

        {/* Official company description previously stated */}
        <div className="max-w-3xl p-6 sm:p-8 rounded-2xl bg-[#143D27]/80 border border-[#286E48] backdrop-blur-xs text-stone-100 text-sm sm:text-base leading-relaxed mb-8 text-balance">
          {language === 'es' ? (
            <p>
              Ecopacific cree que un producto debe ser delicioso, saludable, innovador y natural.
              Brindamos más de 200 productos a todo el Ecuador y estamos orgullosos de liderar la
              categoría de jugos y frutas en el canal moderno del país, fundada el 2008 a través de
              la fusión de emprendimientos familiares: Limón Ecopacific, Coco Freeze y Hortilisto.
            </p>
          ) : (
            <p>
              Ecopacific believes that a product must be delicious, healthy, innovative, and natural.
              We provide over 200 products throughout Ecuador and are proud to lead the fruit and juice
              category in modern retail, founded in 2008 by merging Limón Ecopacific, Coco Freeze, and Hortilisto.
            </p>
          )}
        </div>

        {/* CTA Buttons: Conoce nuestra empresa & Trabaja con nosotros */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-[#18482E] bg-white hover:bg-stone-50 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{language === 'es' ? 'Conoce nuestra empresa' : 'Our company'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://cl.linkedin.com/company/ecopacific-s.a."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-medium text-white hover:text-green-200 rounded-full border border-white/30 hover:border-white transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{language === 'es' ? 'Trabaja con nosotros' : 'Join our team'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
