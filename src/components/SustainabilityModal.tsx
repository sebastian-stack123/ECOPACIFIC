import React, { useEffect } from 'react';
import { X, Leaf, ShieldAlert, Droplets } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface SustainabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const SustainabilityModal: React.FC<SustainabilityModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const t = UI_TRANSLATIONS[language];
  const s = t.sustainabilitySection;

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
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] text-stone-900 rounded-3xl shadow-2xl overflow-hidden border border-stone-300/80 z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-stone-200 bg-white/90 sticky top-0 z-20 backdrop-blur-xs">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#5B8C2A] font-bold px-3 py-1 rounded-full bg-stone-100 border border-[#5B8C2A]/30">
              ECOPACIFIC S.A.
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {language === 'es' ? 'Sostenibilidad' : 'Sustainability'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Centered Content */}
        <div className="p-6 sm:p-12 overflow-y-auto space-y-10 text-center">
          {/* Main Titles Centered */}
          <div className="max-w-2xl mx-auto space-y-3 text-center">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#5B8C2A] leading-tight text-center">
              {s.title}
            </h2>
            <p className="text-xl sm:text-2xl text-[#5B8C2A] font-medium text-center">
              {s.subtitle}
            </p>
          </div>

          {/* Official Paragraph Centered */}
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-sm text-center">
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed text-center">
              {language === 'es'
                ? 'El éxito de Ecopacific S.A. se basa en la preservación de un ambiente natural y sano. Trabajamos para asegurar una actividad duradera de los campos a través de prácticas agrícolas de bajo impacto y nos esforzamos por reducir nuestra huella ambiental, eliminando el desperdicio y minimizando el uso de materiales no reciclables, además contamos con una política para minimizar el uso de energía y agua.'
                : 'The success of Ecopacific S.A. is built upon preserving a clean and healthy natural environment. We work to ensure long-term vitality across the land through low-impact farming practices, and we strive to reduce our footprint by eliminating waste, minimizing non-recyclable materials, and strictly optimizing energy and water usage.'}
            </p>
          </div>

          {/* 3 Environmental Pillars Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-3 border border-[#5B8C2A]/30">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#5B8C2A] mb-2 text-center">
                {language === 'es' ? 'Bajo impacto agrícola' : 'Low agricultural impact'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-center">
                {language === 'es'
                  ? 'Prácticas agrícolas responsables que cuidan la tierra y aseguran una actividad duradera.'
                  : 'Responsible agricultural practices that care for the soil and preserve long-term vitality.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-3 border border-[#5B8C2A]/30">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#5B8C2A] mb-2 text-center">
                {language === 'es' ? 'Cero desperdicio' : 'Zero waste'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-center">
                {language === 'es'
                  ? 'Eliminando el desperdicio y minimizando el uso de materiales no reciclables.'
                  : 'Eliminating waste and minimizing the use of non-recyclable packaging materials.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-stone-100 text-[#5B8C2A] flex items-center justify-center mb-3 border border-[#5B8C2A]/30">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#5B8C2A] mb-2 text-center">
                {language === 'es' ? 'Ahorro de agua y energía' : 'Energy & water savings'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-center">
                {language === 'es'
                  ? 'Política estricta para minimizar el consumo de energía y agua en todos los procesos.'
                  : 'Strict operational policies designed to minimize energy and water consumption.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
