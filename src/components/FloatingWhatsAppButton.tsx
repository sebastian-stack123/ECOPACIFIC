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
    <aside
      aria-label="WhatsApp EcoPacific"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group pointer-events-auto"
    >
      {/* Tooltip bubble on desktop hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-stone-900/90 text-white text-xs font-semibold shadow-lg backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {language === 'es' ? 'Contáctanos por WhatsApp' : 'Chat on WhatsApp'}
      </span>

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp con EcoPacific"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-hidden ring-4 ring-white/30"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 fill-white stroke-none" />
      </a>
    </aside>
  );
};
