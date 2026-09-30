import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { BRANDS_DATA } from '../data/brandsData';

interface FooterProps {
  language: Language;
  onNavigate: (path: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onNavigate,
  onOpenContact,
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <footer className="bg-[#18482E] text-green-100/90 pt-20 pb-12 border-t border-[#286E48]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#286E48]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('/')}
              className="text-2xl font-black tracking-wider text-white hover:text-green-200 transition-colors text-left cursor-pointer"
            >
              ECOPACIFIC
            </button>
            <p className="text-sm text-green-100/80 leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="text-xs text-green-200/80 pt-2 space-y-1">
              <p className="font-semibold text-white">Parque Industrial El Carmen</p>
              <p>Km 2 ½ vía Sangolquí – Amaguaña</p>
              <p className="text-green-300 font-medium">Email: info@ecopacific.com.ec</p>
            </div>
            <div className="pt-2">
              <a
                href="https://cl.linkedin.com/company/ecopacific-s.a."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-300 hover:text-white underline underline-offset-4"
              >
                <span>Trabaja con nosotros (LinkedIn)</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-green-400 font-semibold">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2 text-sm text-green-200/80">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#origen"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Origen
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Brands List */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-green-400 font-semibold">
              {t.footer.brandsHeading}
            </h4>
            <ul className="space-y-2 text-sm text-green-200/80">
              {Object.values(BRANDS_DATA).map((brand) => (
                <li key={brand.id}>
                  <button
                    onClick={() => onNavigate(`/marcas/${brand.slug}`)}
                    className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-2"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: brand.colors.buttonBg }}
                    />
                    <span>{brand.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-green-400 font-semibold">
              {t.footer.contactHeading}
            </h4>
            <div className="space-y-2 text-xs text-green-200/80">
              <p className="font-semibold text-white">Quito – Sangolquí</p>
              <p>info@ecopacific.com.ec</p>
              <button
                onClick={onOpenContact}
                className="mt-2 inline-block text-xs font-medium text-green-300 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                {language === 'es' ? 'Enviar mensaje' : 'Send message'}
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-green-300/60 gap-4">
          <p>
            &copy; {new Date().getFullYear()} ECOPACIFIC. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <span>{t.footer.privacy}</span>
            <span>{t.footer.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
