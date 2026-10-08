import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Heart, Target } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface NosotrosModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const NosotrosModal: React.FC<NosotrosModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const t = UI_TRANSLATIONS[language];
  const h = t.historySection;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#18482E] text-white rounded-3xl shadow-2xl overflow-hidden border border-[#286E48] z-10 max-h-[90vh] flex flex-col">
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#286E48]/80 bg-[#16432B]/95 sticky top-0 z-20 backdrop-blur-xs">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-green-300 font-bold px-3 py-1 rounded-full bg-[#1E5638] border border-[#286E48]">
              ECOPACIFIC S.A.
            </span>
            <span className="text-xs text-green-200/80 font-medium">
              {language === 'es' ? 'Nuestra Empresa' : 'Our Company'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1E5638] text-white hover:bg-[#286E48] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-stone-100">
          {/* Main Title & Lead */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {h.title}
            </h2>
            <p className="text-base sm:text-lg text-green-100/90 font-light leading-relaxed">
              {h.lead}
            </p>
          </div>

          {/* 4 Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#1E5638]/70 border border-[#286E48] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {h.stat1Number}
              </div>
              <div className="text-xs text-green-100/80 font-medium">
                {h.stat1Label}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E5638]/70 border border-[#286E48] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-green-200 mb-1">
                {h.stat2Number}
              </div>
              <div className="text-xs text-green-100/80 font-medium">
                {h.stat2Label}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E5638]/70 border border-[#286E48] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {h.stat3Number}
              </div>
              <div className="text-xs text-green-100/80 font-medium">
                {h.stat3Label}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E5638]/70 border border-[#286E48] text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-green-200 mb-1">
                {h.stat4Number}
              </div>
              <div className="text-xs text-green-100/80 font-medium">
                {h.stat4Label}
              </div>
            </div>
          </div>

          {/* Misión & Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#143D27] border border-[#286E48] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-300">
                <Target className="w-4 h-4" />
                <span>{h.visionTitle}</span>
              </div>
              <p className="text-lg font-bold text-white leading-snug">
                {h.visionText}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#143D27] border border-[#286E48] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-300">
                <ShieldCheck className="w-4 h-4" />
                <span>{h.misionTitle}</span>
              </div>
              <p className="text-base text-green-100 leading-snug">
                {h.misionText}
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-green-300">
                {h.valoresTitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {h.valoresSubtitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-[#1E5638]/60 border border-[#286E48]">
                <h4 className="text-sm font-bold text-white mb-1">
                  {h.val1Title}
                </h4>
                <p className="text-xs text-green-100/80 leading-relaxed">
                  {h.val1Desc}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1E5638]/60 border border-[#286E48]">
                <h4 className="text-sm font-bold text-white mb-1">
                  {h.val2Title}
                </h4>
                <p className="text-xs text-green-100/80 leading-relaxed">
                  {h.val2Desc}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#1E5638]/60 border border-[#286E48]">
                <h4 className="text-sm font-bold text-white mb-1">
                  {h.val3Title}
                </h4>
                <p className="text-xs text-green-100/80 leading-relaxed">
                  {h.val3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Action: Trabaja con nosotros */}
          <div className="pt-4 border-t border-[#286E48] flex justify-center">
            <a
              href="https://cl.linkedin.com/company/ecopacific-s.a."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#18482E] bg-white hover:bg-stone-100 transition-all shadow-md"
            >
              <span>{language === 'es' ? 'Trabaja con nosotros (LinkedIn)' : 'Work with us (LinkedIn)'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
