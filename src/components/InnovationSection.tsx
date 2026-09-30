import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface InnovationSectionProps {
  language: Language;
}

export const InnovationSection: React.FC<InnovationSectionProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: t.innovationSection.step1,
      desc: t.innovationSection.step1Desc,
      details:
        language === 'es'
          ? 'Cocos cosechados en su punto, naranjas seleccionadas en huerto, aguacates en punto exacto y vegetales cosechados frescos.'
          : 'Coconuts picked at their peak, oranges chosen in the grove, avocados at optimum ripeness, and fresh-picked vegetables.'
    },
    {
      num: '02',
      title: t.innovationSection.step2,
      desc: t.innovationSection.step2Desc,
      details:
        language === 'es'
          ? 'Prensado en frío que conserva enzimas y nutrientes, extracción tecnológica suave sin alterar el sabor, y envasado en atmósfera protectora sin aditivos artificiales.'
          : 'Cold pressed extraction safeguarding enzymes and nutrients, gentle extraction respecting fruit purity, and protective atmosphere without artificial additives.'
    },
    {
      num: '03',
      title: t.innovationSection.step3,
      desc: t.innovationSection.step3Desc,
      details:
        language === 'es'
          ? 'Botellas herméticas, aceites en spray dosificadores, empaques listos para cocinar y shots funcionales listos para tomar.'
          : 'Hermetic bottles, precision spray oils, ready-to-cook fresh cut packs, and functional daily shots.'
    },
    {
      num: '04',
      title: t.innovationSection.step4,
      desc: t.innovationSection.step4Desc,
      details:
        language === 'es'
          ? 'Frescura genuina, sabor de fruta de verdad, practicidad en la cocina familiar y bienestar natural sin complicaciones.'
          : 'Genuine freshness, authentic fruit flavor, seamless kitchen practicality, and uncomplicated natural wellness.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F4F7F5] text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#286E48] font-semibold mb-2 block">
            {language === 'es' ? 'Del Origen a tu Mesa' : 'From Origin to Table'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1E5638] mb-4 leading-tight text-balance">
            {t.innovationSection.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed text-balance">
            {t.innovationSection.subtitle}
          </p>
        </div>

        {/* Soft, Clean Editorial Journey: Origen -> Cuidado -> Empaque -> Consumidor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[190px] ${
                  isCurrent
                    ? 'bg-white border-2 border-[#1E5638] shadow-md ring-4 ring-green-100/50'
                    : 'bg-white/80 border border-stone-200 hover:bg-white hover:border-stone-300 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold tracking-wider ${
                        isCurrent ? 'text-[#1E5638]' : 'text-stone-400'
                      }`}
                    >
                      Paso {step.num}
                    </span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-stone-300" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-100 text-xs">
                  <span
                    className={isCurrent ? 'text-[#1E5638] font-bold' : 'text-stone-400'}
                  >
                    {isCurrent
                      ? language === 'es'
                        ? 'Seleccionado'
                        : 'Selected'
                      : language === 'es'
                      ? 'Ver detalle'
                      : 'View detail'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector - Soft, Calm Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#286E48] font-bold mb-1.5 block">
              {steps[activeStep].title}
            </span>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
              {steps[activeStep].details}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs text-[#1E5638] bg-green-50 px-4 py-2 rounded-full border border-green-200/70">
            <CheckCircle2 className="w-4 h-4 text-[#286E48]" />
            <span className="font-medium">
              {language === 'es'
                ? 'Sabor auténtico y natural'
                : 'Pure & authentic flavor'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
