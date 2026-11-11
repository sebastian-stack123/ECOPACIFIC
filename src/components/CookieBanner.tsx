import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Check, X, Settings2, ExternalLink } from 'lucide-react';
import { Language } from '../types';

declare global {
  interface Window {
    __initGTM?: () => void;
    __removeCookies?: () => void;
    __gtmLoaded?: boolean;
  }
}

export type CookieConsentType = 'accepted' | 'necessary' | 'declined' | null;

interface CookieBannerProps {
  language: Language;
  onNavigate: (path: string) => void;
  cookieConsent: CookieConsentType;
  onConsentChange: (status: 'accepted' | 'necessary' | 'declined') => void;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  language,
  onNavigate,
  cookieConsent,
  onConsentChange,
  isOpen,
  onClose,
  onOpen,
}) => {
  const isEs = language === 'es';
  const [showSettings, setShowSettings] = useState(false);
  const [allowAnalytics, setAllowAnalytics] = useState(cookieConsent === 'accepted');

  useEffect(() => {
    setAllowAnalytics(cookieConsent === 'accepted');
  }, [cookieConsent]);

  const handleAcceptAll = () => {
    onConsentChange('accepted');
    if (typeof window !== 'undefined' && window.__initGTM) {
      window.__initGTM();
    }
    setShowSettings(false);
    onClose();
  };

  const handleAcceptNecessary = () => {
    onConsentChange('necessary');
    if (typeof window !== 'undefined' && window.__removeCookies) {
      window.__removeCookies();
    }
    setShowSettings(false);
    onClose();
  };

  const handleSavePreferences = () => {
    if (allowAnalytics) {
      handleAcceptAll();
    } else {
      handleAcceptNecessary();
    }
  };

  // Show banner if not yet decided or if opened via footer
  const isBannerVisible = isOpen || cookieConsent === null;

  if (!isBannerVisible) return null;

  return (
    <div
      role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-banner-title"
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-1.75rem)] sm:w-[92vw] max-w-xl z-50 animate-fadeIn"
        >
          <div className="bg-[#0e1709]/95 border-2 border-[#5B8C2A] rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 text-white backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5B8C2A] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Cookie className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 id="cookie-banner-title" className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                    {isEs ? 'Privacidad y Cookies' : 'Privacy & Cookie Consent'}
                  </h3>
                  <span className="text-[11px] font-black text-[#5B8C2A] uppercase tracking-wider block">
                    Ecopacific
                  </span>
                </div>
              </div>

              {/* Close button if user already made a decision in the past */}
              {cookieConsent !== null && (
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label={isEs ? 'Cerrar aviso' : 'Close notice'}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Explanation text */}
            {!showSettings ? (
              <>
                <p className="text-xs sm:text-sm text-stone-200/95 leading-relaxed mb-4 text-balance">
                  {isEs
                    ? 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas para mejorar tu experiencia. Las cookies analíticas no se recopilan ni activan hasta que las aceptas expresamente.'
                    : 'We use necessary technical cookies to operate our site and analytical cookies to improve your experience. Analytical and tracking cookies are never set or activated until you explicitly accept them.'}
                </p>

                {/* Read policy link */}
                <div className="mb-5 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate('/politica-de-cookies/');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-yellow-300 hover:text-yellow-200 underline underline-offset-4 font-semibold transition-colors cursor-pointer"
                  >
                    <span>{isEs ? 'Leer nuestra Política de Cookies' : 'Read our Cookie Policy'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#5B8C2A] hover:bg-[#4A7422] text-white text-xs sm:text-sm font-black shadow-lg hover:shadow-xl transition-all hover:scale-102 active:scale-98 cursor-pointer text-center"
                  >
                    <Check className="w-4 h-4 stroke-[3] shrink-0" />
                    <span>{isEs ? 'Aceptar todas' : 'Accept all'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleAcceptNecessary}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer text-center"
                  >
                    <span>{isEs ? 'Aceptar solo las necesarias' : 'Accept only essential'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowSettings(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-stone-300 text-xs font-semibold transition-colors cursor-pointer text-center"
                    title={isEs ? 'Personalizar cookies' : 'Customize cookies'}
                  >
                    <Settings2 className="w-4 h-4 shrink-0" />
                    <span>{isEs ? 'Configurar' : 'Preferences'}</span>
                  </button>
                </div>
              </>
            ) : (
              /* Settings / Granular Preferences */
              <div className="space-y-4">
                <p className="text-xs text-stone-300 leading-relaxed">
                  {isEs
                    ? 'Elige qué categorías de cookies permites en tu navegador:'
                    : 'Choose which categories of cookies you allow in your browser:'}
                </p>

                {/* Option 1: Essential Cookies */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#5B8C2A]" />
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {isEs ? 'Cookies Técnicas y Esenciales' : 'Essential Technical Cookies'}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-stone-300/80 leading-normal">
                      {isEs
                        ? 'Indispensables para la navegación, seguridad y funcionamiento del sitio.'
                        : 'Required for navigation, security, and core website operation.'}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#5B8C2A] px-2.5 py-1 rounded-full border border-[#4A7422] shrink-0">
                    {isEs ? 'Siempre activas' : 'Always active'}
                  </span>
                </div>

                {/* Option 2: Analytical Cookies */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Cookie className="w-4 h-4 text-[#5B8C2A]" />
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {isEs ? 'Cookies Analíticas y Estadísticas' : 'Analytical & Statistics Cookies'}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-stone-300/80 leading-normal">
                      {isEs
                        ? 'Google Tag Manager y métricas anónimas para comprender el uso y mejorar la plataforma.'
                        : 'Google Tag Manager and anonymous metrics to understand traffic and improve our portal.'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={allowAnalytics}
                      onChange={(e) => setAllowAnalytics(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#5B8C2A]"></div>
                  </label>
                </div>

                {/* Actions for settings */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#5B8C2A] hover:bg-[#4A7422] text-white text-xs sm:text-sm font-black shadow-md transition-all cursor-pointer"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>{isEs ? 'Guardar preferencias' : 'Save preferences'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>{isEs ? 'Volver' : 'Back'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    };
