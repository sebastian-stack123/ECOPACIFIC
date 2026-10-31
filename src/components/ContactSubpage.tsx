import React from 'react';
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Clock,
  Building2,
  Send,
} from 'lucide-react';
import { Language } from '../types';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface ContactSubpageProps {
  language: Language;
  onNavigateHome: () => void;
  onNavigate: (path: string) => void;
  onLanguageChange: (lang: Language) => void;
}

export const ContactSubpage: React.FC<ContactSubpageProps> = ({
  language,
  onNavigateHome,
  onNavigate,
  onLanguageChange,
}) => {
  const isEs = language === 'es';

  return (
    <div className="min-h-screen flex flex-col bg-[#5B8C2A] text-white selection:bg-white selection:text-[#5B8C2A]">
      {/* Top Navbar */}
      <Navbar
        currentPath="/contacto"
        onNavigate={onNavigate}
        language={language}
        onLanguageChange={onLanguageChange}
        onOpenContact={() => {}}
      />

      {/* Contenido Principal de Contacto */}
      <main className="flex-grow pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-sm">
              {isEs ? 'Hablemos directamente' : "Let's talk directly"}
            </h1>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed font-light text-balance">
              {isEs
                ? 'Sin formularios largos ni esperas. Comunícate al instante con nuestro equipo por WhatsApp o envíanos un correo directo.'
                : 'No long forms, no waiting. Reach out to our team instantly via WhatsApp or send us a direct email.'}
            </p>
          </div>

          {/* Tarjetas Principales de Contacto Directo: WhatsApp & Correo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {/* Tarjeta WhatsApp */}
            <div className="rounded-3xl bg-white text-stone-900 p-7 sm:p-9 shadow-2xl border border-white/50 flex flex-col justify-between hover:shadow-emerald-950/20 transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {isEs ? 'Atención Inmediata' : 'Fast Response'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-2">
                  {isEs ? 'WhatsApp Directo' : 'Direct WhatsApp'}
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEs
                    ? 'Chatea con nuestro equipo comercial y de atención. Ideal para pedidos, consultas sobre productos, precios y distribución rápida.'
                    : 'Chat with our sales and customer care team. Ideal for orders, product inquiries, pricing, and rapid distribution.'}
                </p>

                <div className="space-y-2 mb-6 text-xs sm:text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isEs ? 'Horario: Lun a Vie 08:30 - 17:30' : 'Hours: Mon to Fri 08:30 - 17:30'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>+593 98 930 0156</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/593989300156?text=Hola%20EcoPacific%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isEs ? 'Escribir por WhatsApp' : 'Chat on WhatsApp'}</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </a>
            </div>

            {/* Tarjeta Correo Electrónico Directo */}
            <div className="rounded-3xl bg-white text-stone-900 p-7 sm:p-9 shadow-2xl border border-white/50 flex flex-col justify-between hover:shadow-emerald-950/20 transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#5B8C2A] text-white flex items-center justify-center shadow-lg shadow-[#5B8C2A]/30">
                    <Mail className="w-8 h-8" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-stone-100 text-stone-700 border border-stone-200">
                    {isEs ? 'Institucional & Ventas' : 'Corporate & Sales'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-2">
                  {isEs ? 'Correo Electrónico' : 'Direct Email'}
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {isEs
                    ? 'Escríbenos directamente para cotizaciones corporativas, compras mayoristas, exportaciones o alianzas agrícolas con el campo.'
                    : 'Write to us directly for corporate quotes, wholesale orders, exports, or agricultural partnerships.'}
                </p>

                <div className="space-y-2 mb-6 text-xs sm:text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#5B8C2A] shrink-0" />
                    <span>{isEs ? 'Atención a distribuidores y empresas' : 'Retailers & enterprise support'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#5B8C2A] shrink-0" />
                    <span className="font-semibold text-stone-700">info@ecopacific.com.ec</span>
                  </div>
                </div>
              </div>

              <a
                href="mailto:info@ecopacific.com.ec?subject=Contacto%20EcoPacific%20-%20Consulta"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#5B8C2A] hover:bg-[#4a7322] text-white font-extrabold text-base shadow-lg shadow-[#5B8C2A]/30 hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-5 h-5" />
                <span>{isEs ? 'Enviar Correo Electrónico' : 'Send an Email'}</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </a>
            </div>
          </div>

          {/* Información de Planta, Ubicación y Mapa */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/25 p-6 sm:p-10 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-black uppercase tracking-wider text-yellow-300 block">
                  {isEs ? 'Planta de Producción & Oficinas' : 'Production Plant & Headquarters'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  EcoPacific S.A.
                </h3>
                <div className="space-y-3 text-sm sm:text-base text-white/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Parque Industrial El Carmen, Calle H lote 13
                      <br />
                      Km 2 ½ vía Sangolquí – Amaguaña, Sangolquí, Ecuador
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-300 shrink-0" />
                    <a href="tel:+593989300156" className="hover:underline font-bold text-white">
                      +593 98 930 0156
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-yellow-300 shrink-0" />
                    <a href="mailto:info@ecopacific.com.ec" className="hover:underline font-bold text-white">
                      info@ecopacific.com.ec
                    </a>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href="https://cl.linkedin.com/company/ecopacific-s.a."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>{isEs ? 'Perfil en LinkedIn' : 'LinkedIn Profile'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Calle+H+lote+13+Parque+Industrial+El+Carmen+Km+2+1%2F2+via+Sangolqui+-+Amaguana+Sangolqui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-white/15 hover:bg-white/25 px-4 py-2.5 rounded-xl transition-all"
                  >
                    <span>{isEs ? 'Abrir en Google Maps' : 'Open in Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Minimapa */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-white/30 shadow-2xl bg-black/20 aspect-video">
                  <iframe
                    title="Minimapa Ubicación EcoPacific"
                    src="https://maps.google.com/maps?q=Calle%20H%20lote%2013%2C%20Parque%20Industrial%20El%20Carmen%2C%20Km%202%20%C2%BD%20v%C3%ADa%20Sangolqu%C3%AD%20-%20Amagua%C3%B1a%2C%20Sangolqu%C3%AD&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer corporativo */}
      <Footer
        language={language}
        onNavigate={onNavigate}
        onOpenNosotros={() => onNavigate('/nosotros')}
        onOpenSostenibilidad={() => onNavigate('/sostenibilidad')}
        onOpenContact={() => onNavigate('/contacto')}
      />
    </div>
  );
};
