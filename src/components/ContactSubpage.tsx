import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Heart,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { Language } from '../types';
import ecopacificLogo from '../assets/ecopacificlogo.png';
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
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    topic: 'productos',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#5B8C2A] text-white selection:bg-white selection:text-[#5B8C2A]">
      {/* Top Bar dedicada para la sección de Contacto */}
      <header className="sticky top-0 z-40 bg-[#5B8C2A]/95 backdrop-blur-md border-b border-[#4A7422] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          {/* Botón Volver al inicio */}
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer backdrop-blur-xs border border-white/20 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'es' ? 'Volver al inicio' : 'Back to home'}</span>
          </button>

          {/* Logo ECOPACIFIC */}
          <button
            onClick={onNavigateHome}
            className="flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="ECOPACIFIC Inicio"
          >
            <img
              src={ecopacificLogo}
              alt="ECOPACIFIC"
              className="h-8 sm:h-10 w-auto object-contain drop-shadow-xs"
            />
          </button>

          {/* Selector de idioma */}
          <div className="flex gap-1.5 p-1 rounded-full bg-black/15 border border-white/20">
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-3 py-1 rounded-full text-xs transition-all font-bold cursor-pointer ${
                language === 'es'
                  ? 'bg-white text-[#5B8C2A] shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded-full text-xs transition-all font-bold cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#5B8C2A] shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal de la Sección de Contacto */}
      <main className="flex-grow py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header de la sección */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-black tracking-widest uppercase mb-4 border border-white/25 shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>{language === 'es' ? 'EcoPacific · Contacto Directo' : 'EcoPacific · Direct Contact'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-sm">
              {language === 'es' ? '¿En qué te podemos ayudar?' : 'How can we help you?'}
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light text-balance">
              {language === 'es'
                ? 'Escríbenos directamente o déjanos un mensaje. Ya seas cliente, distribuidor, agricultor o aliado del campo, siempre nos encanta conversar.'
                : 'Reach out to us directly or leave us a message. Whether you are a customer, distributor, farmer, or field partner, we would love to hear from you.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Columna Izquierda: WhatsApp Inmediato y Canales Directos */}
            <div className="lg:col-span-5 space-y-6">
              {/* Tarjeta WhatsApp Inmediato */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white text-stone-900 shadow-xl border border-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 block">
                      {language === 'es' ? 'Canal Rápido' : 'Fast Channel'}
                    </span>
                    <h2 className="text-xl font-black text-stone-900 leading-tight">
                      {language === 'es' ? 'Atención por WhatsApp' : 'Chat via WhatsApp'}
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                  {language === 'es'
                    ? '¿Prefieres una respuesta inmediata? Escríbenos directamente y nuestro equipo te atenderá al instante.'
                    : 'Looking for a quick answer? Chat with our team right away on WhatsApp.'}
                </p>
                <a
                  href="https://wa.me/593998765432?text=Hola%20EcoPacific%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{language === 'es' ? 'Abrir chat de WhatsApp' : 'Open WhatsApp Chat'}</span>
                </a>
              </div>

              {/* Tarjeta de Información y Canales */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white space-y-5">
                <h3 className="text-base font-black uppercase tracking-wider text-white/90">
                  {language === 'es' ? 'Canales directos' : 'Direct channels'}
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">
                        {language === 'es' ? 'Correo electrónico' : 'Email'}
                      </p>
                      <a
                        href="mailto:info@ecopacific.com.ec"
                        className="text-white font-bold hover:underline"
                      >
                        info@ecopacific.com.ec
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">
                        {language === 'es' ? 'Teléfono PBX' : 'Phone'}
                      </p>
                      <a
                        href="tel:+59352698000"
                        className="text-white font-bold hover:underline"
                      >
                        +593 5 269 8000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">
                        {language === 'es' ? 'Planta y Oficinas' : 'Headquarters'}
                      </p>
                      <p className="text-white/95 font-medium leading-relaxed">
                        Parque Industrial El Carmen, Manabí — Ecuador
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 text-white mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-semibold uppercase tracking-wider">
                        {language === 'es' ? 'Horario' : 'Hours'}
                      </p>
                      <p className="text-white/95 font-medium">
                        {language === 'es' ? 'Lunes a Viernes: 8:00 - 17:00' : 'Monday to Friday: 8:00 - 17:00'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/15">
                  <a
                    href="https://cl.linkedin.com/company/ecopacific-s.a."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white/90 hover:text-white transition-colors"
                  >
                    <span>{language === 'es' ? 'Conoce nuestro equipo en LinkedIn' : 'Visit our LinkedIn profile'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Formulario Amigable */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#FDFCF9] text-stone-900 shadow-2xl border border-stone-200/80">
                {submitted ? (
                  <div className="text-center py-12 sm:py-16 space-y-5">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-[#5B8C2A] flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
                      {language === 'es' ? '¡Mensaje recibido con gusto!' : 'Message Received with Joy!'}
                    </h2>
                    <p className="text-stone-600 max-w-md mx-auto text-base leading-relaxed">
                      {language === 'es'
                        ? 'Muchas gracias por escribirnos. Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo muy pronto.'
                        : 'Thank you for reaching out. Our team will review your message and get back to you shortly.'}
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', contact: '', topic: 'productos', message: '' });
                        }}
                        className="px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-bold transition-all cursor-pointer"
                      >
                        {language === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                      </button>
                      <button
                        onClick={onNavigateHome}
                        className="px-8 py-3 rounded-full bg-[#5B8C2A] hover:bg-[#4A7422] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                      >
                        {language === 'es' ? 'Volver al inicio' : 'Back to home'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                        {language === 'es' ? 'Déjanos tu mensaje' : 'Leave us a message'}
                      </h2>
                      <p className="text-sm text-stone-600 mt-1">
                        {language === 'es'
                          ? 'Completa los campos a continuación y te responderemos a la brevedad.'
                          : 'Fill in the fields below and we will get back to you shortly.'}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                            {language === 'es' ? 'Tu nombre' : 'Your name'} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={language === 'es' ? 'Ej. María Barcia' : 'e.g. Maria Barcia'}
                            className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8C2A] focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                            {language === 'es' ? 'Teléfono o WhatsApp' : 'Phone or WhatsApp'} *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            placeholder={language === 'es' ? '099... o tu correo' : 'Phone or email'}
                            className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8C2A] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                          {language === 'es' ? '¿Sobre qué te gustaría hablar?' : 'Topic'}
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8C2A] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="productos">
                            {language === 'es' ? 'Conocer o comprar productos' : 'Products & availability'}
                          </option>
                          <option value="distribucion">
                            {language === 'es' ? 'Distribución y tiendas' : 'Distribution & retail'}
                          </option>
                          <option value="campo">
                            {language === 'es' ? 'Agricultores y alianzas del campo' : 'Farmers & field alliances'}
                          </option>
                          <option value="otro">
                            {language === 'es' ? 'Otro mensaje o sugerencia' : 'General inquiry or feedback'}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                          {language === 'es' ? 'Tu mensaje' : 'Your message'} *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={
                            language === 'es'
                              ? 'Cuéntanos en qué te podemos ayudar...'
                              : 'Tell us how we can help you...'
                          }
                          className="w-full px-4 py-3 text-sm rounded-xl bg-stone-50 border border-stone-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5B8C2A] focus:border-transparent resize-none transition-all"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs text-stone-500">
                          <Mail className="w-4 h-4 text-[#5B8C2A]" />
                          <span>info@ecopacific.com.ec</span>
                        </div>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#5B8C2A] hover:bg-[#4A7422] text-white text-sm font-bold shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <span>{language === 'es' ? 'Enviar mensaje' : 'Send message'}</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer corporativo al final de la sección */}
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
