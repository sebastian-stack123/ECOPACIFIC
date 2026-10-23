import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface FloatingWhatsAppButtonProps {
  language?: Language;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  language = 'es',
}) => {
  const phoneNumber = '593989300156';
  const defaultMessage =
    language === 'es'
      ? 'Hola EcoPacific, quisiera más información sobre sus productos.'
      : 'Hello EcoPacific, I would like more information about your products.';

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      aria-label="WhatsApp EcoPacific"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-none flex items-center"
    >
      <div className="relative group pointer-events-auto flex items-center">
        {/* Tooltip bubble on desktop hover */}
        <span className="hidden sm:inline-block absolute right-full mr-3 px-3 py-1.5 rounded-full bg-stone-900/90 text-white text-xs font-semibold shadow-lg backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          {language === 'es' ? 'Contáctanos por WhatsApp' : 'Chat on WhatsApp'}
        </span>

        {/* Floating Action Button con hitbox estricto (solo interactuable al tocarlo directamente) */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir chat de WhatsApp con EcoPacific"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-hidden ring-4 ring-white/30 cursor-pointer pointer-events-auto"
          style={{ touchAction: 'manipulation' }}
        >
          {/* Subtle breathing ripple */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

          {/* WhatsApp Icon */}
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 fill-white stroke-none pointer-events-none" />
        </a>
      </div>
    </div>
  );
};
