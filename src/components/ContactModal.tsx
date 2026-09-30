import React, { useState } from 'react';
import { X, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Language } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  language,
  onClose,
}) => {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'distribucion',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-12">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">
                {language === 'es' ? 'Mensaje enviado con éxito' : 'Message Sent Successfully'}
              </h3>
              <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                {language === 'es'
                  ? 'Gracias por tu interés en EcoPacific. Nuestro equipo corporativo se pondrá en contacto a la brevedad.'
                  : 'Thank you for your interest in EcoPacific. Our corporate team will reach out to you shortly.'}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                {language === 'es' ? 'Cerrar ventana' : 'Close window'}
              </button>
            </div>
          ) : (
            <div>
              <span className="text-xs uppercase tracking-widest text-[#286E48] font-semibold mb-2 block">
                {language === 'es' ? 'Contacto Corporativo' : 'Corporate Contact'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-2">
                {language === 'es' ? 'Hablemos de negocios y origen' : 'Let’s talk origin & business'}
              </h3>
              <p className="text-sm text-stone-600 mb-8">
                {language === 'es'
                  ? 'Distribución nacional e internacional, alianzas con agricultores o consultas de marcas.'
                  : 'Domestic and international distribution, farmer alliances, or brand inquiries.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1">
                      {language === 'es' ? 'Nombre completo *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1E5638] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1">
                      {language === 'es' ? 'Correo corporativo *' : 'Corporate Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@empresa.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1E5638] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1">
                      {language === 'es' ? 'Empresa u Organización' : 'Company / Organization'}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={language === 'es' ? 'Ej. Cadena retail / Distribuidora' : 'e.g. Retail / Distributor'}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1E5638] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-stone-700 block mb-1">
                      {language === 'es' ? 'Motivo de consulta' : 'Inquiry Type'}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1E5638] focus:border-transparent bg-white"
                    >
                      <option value="distribucion">
                        {language === 'es' ? 'Distribución & Cadenas Comerciales' : 'Distribution & Retail Chains'}
                      </option>
                      <option value="marcas">
                        {language === 'es' ? 'Portafolio de Marcas' : 'Brand Portfolio'}
                      </option>
                      <option value="agricultura">
                        {language === 'es' ? 'Alianzas Agrícolas / Finca NDP' : 'Agricultural Alliances / NDP Farm'}
                      </option>
                      <option value="foodservice">
                        {language === 'es' ? 'Food Service & Restaurantes' : 'Food Service & Restaurants'}
                      </option>
                      <option value="otro">
                        {language === 'es' ? 'Otro asunto corporativo' : 'Other Corporate Inquiries'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    {language === 'es' ? 'Mensaje *' : 'Message *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      language === 'es'
                        ? 'Cuéntanos cómo podemos colaborar...'
                        : 'Tell us how we can collaborate...'
                    }
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#1E5638] focus:border-transparent resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs text-stone-500">
                    info@ecopacific.com.ec · Parque Industrial El Carmen, Sangolquí – Amaguaña
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    {language === 'es' ? 'Enviar solicitud' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
