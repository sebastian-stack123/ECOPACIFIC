import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BRANDS_DATA } from '../data/brandsData';
import ecopacificLogo from '../assets/ecopacificlogo.png';

interface FooterProps {
  language: Language;
  onNavigate: (path: string) => void;
  onOpenNosotros: () => void;
  onOpenSostenibilidad: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenNosotros,
  onOpenSostenibilidad,
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <footer className="bg-[#5B8C2A] text-white pt-16 pb-12 border-t border-[#4A7422]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/20">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center cursor-pointer hover:opacity-90 transition-opacity text-left"
              aria-label="ECOPACIFIC Inicio"
            >
              <img
                src={ecopacificLogo}
                alt="ECOPACIFIC"
                className="h-8 sm:h-9 w-auto max-w-[190px] object-contain"
              />
            </button>
            <p className="text-sm text-white/90 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="text-xs text-white/85 pt-1 space-y-1">
              <p className="font-semibold text-white">Parque Industrial El Carmen</p>
              <p>Km 2 ½ vía Sangolquí – Amaguaña</p>
              <p className="text-white font-medium underline underline-offset-2">Email: info@ecopacific.com.ec</p>
            </div>

            {/* Trabaja con nosotros: Visible pero no tan grande */}
            <div className="pt-3">
              <a
                href="https://cl.linkedin.com/company/ecopacific-s.a."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#5B8C2A] bg-white hover:bg-stone-50 transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>{language === 'es' ? 'Trabaja con nosotros' : 'Join our team'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-black">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-stone-100 transition-colors cursor-pointer"
                >
                  {language === 'es' ? 'Inicio' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenNosotros}
                  className="hover:text-stone-100 transition-colors cursor-pointer text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <a
                  href="#marcas"
                  className="hover:text-stone-100 transition-colors cursor-pointer block"
                >
                  {t.nav.brands}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSostenibilidad}
                  className="hover:text-stone-100 transition-colors cursor-pointer text-left"
                >
                  {t.nav.sustainability}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-stone-100 transition-colors cursor-pointer text-left"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Brand Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-white font-black">
              {t.footer.brandsHeading}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.values(BRANDS_DATA).map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => onNavigate(`/marcas/${brand.slug}`)}
                  className="text-left text-white/90 hover:text-white py-1 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span
                    className="w-2 h-2 rounded-full border border-white/50"
                    style={{ backgroundColor: brand.colors.buttonBg }}
                  />
                  <span>{brand.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 gap-4">
          <p>© {new Date().getFullYear()} ECOPACIFIC S.A. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex gap-6">
            <span>Parque Industrial El Carmen</span>
            <span>info@ecopacific.com.ec</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
