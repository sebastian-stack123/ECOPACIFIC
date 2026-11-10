import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, FileText, Cookie, Mail, MapPin, Phone } from 'lucide-react';
import { Language } from '../types';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export type LegalDocType = 'terminos' | 'privacidad' | 'cookies';

interface LegalSubpageProps {
  type: LegalDocType;
  language: Language;
  onNavigateHome: () => void;
  onNavigate: (path: string) => void;
  onLanguageChange: (lang: Language) => void;
  onOpenContact?: () => void;
}

export const LegalSubpage: React.FC<LegalSubpageProps> = ({
  type,
  language,
  onNavigateHome,
  onNavigate,
  onLanguageChange,
  onOpenContact,
}) => {
  const isEs = language === 'es';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const currentPath =
    type === 'terminos'
      ? '/terminos-y-condiciones/'
      : type === 'privacidad'
      ? '/politica-de-privacidad/'
      : '/politica-de-cookies/';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF5] text-stone-900 selection:bg-[#5B8C2A] selection:text-white font-sans">
      {/* Top Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={onNavigate}
        language={language}
        onLanguageChange={onLanguageChange}
        onOpenContact={onOpenContact || (() => onNavigate('/contacto'))}
      />

      {/* Hero Header */}
      <header className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#1A3815] text-white px-4 sm:px-6 lg:px-8 border-b border-green-900/40">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / back link */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-200 hover:text-white mb-6 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{isEs ? 'Regresar al inicio' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 text-yellow-300">
              {type === 'terminos' && <FileText className="w-6 h-6" />}
              {type === 'privacidad' && <ShieldCheck className="w-6 h-6" />}
              {type === 'cookies' && <Cookie className="w-6 h-6" />}
            </div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300">
              {isEs ? 'Legal · EcoPacific' : 'Legal · EcoPacific'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 text-balance">
            {type === 'terminos' && (isEs ? 'Términos y condiciones de uso' : 'Terms and Conditions of Use')}
            {type === 'privacidad' &&
              (isEs
                ? 'Política de privacidad y protección de datos personales'
                : 'Privacy Policy and Personal Data Protection')}
            {type === 'cookies' && (isEs ? 'Política de cookies' : 'Cookie Policy')}
          </h1>

          <p className="text-xs sm:text-sm text-white/75 font-medium">
            {isEs ? 'Última actualización: 2026' : 'Last updated: 2026'}
          </p>

          {/* Quick tabs to switch between the 3 legal documents */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/15">
            <button
              type="button"
              onClick={() => onNavigate('/terminos-y-condiciones/')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                type === 'terminos'
                  ? 'bg-white text-stone-900 shadow-md'
                  : 'bg-white/10 text-white/90 hover:bg-white/20 border border-white/20'
              }`}
            >
              {isEs ? 'Términos y condiciones' : 'Terms & Conditions'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/politica-de-privacidad/')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                type === 'privacidad'
                  ? 'bg-white text-stone-900 shadow-md'
                  : 'bg-white/10 text-white/90 hover:bg-white/20 border border-white/20'
              }`}
            >
              {isEs ? 'Política de privacidad' : 'Privacy Policy'}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/politica-de-cookies/')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                type === 'cookies'
                  ? 'bg-white text-stone-900 shadow-md'
                  : 'bg-white/10 text-white/90 hover:bg-white/20 border border-white/20'
              }`}
            >
              {isEs ? 'Política de cookies' : 'Cookie Policy'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Document Content */}
      <main className="flex-grow py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-stone-200">
          {/* ========================================================
              1. TÉRMINOS Y CONDICIONES
              ======================================================== */}
          {type === 'terminos' && (
            <article className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-8">
              <div className="p-5 rounded-2xl bg-[#F4F7EE] border border-[#5B8C2A]/20 text-stone-800 text-sm sm:text-base font-medium">
                {isEs ? (
                  <p className="m-0">
                    Bienvenido al sitio web de <strong>Ecopacific</strong>. Al acceder y navegar por este sitio web,
                    aceptas los presentes Términos y Condiciones de Uso. Te recomendamos leerlos antes de utilizar
                    nuestros servicios digitales.
                  </p>
                ) : (
                  <p className="m-0">
                    Welcome to the <strong>Ecopacific</strong> website. By accessing and browsing this website, you
                    accept these Terms and Conditions of Use. We recommend reading them before using our digital
                    services.
                  </p>
                )}
              </div>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">1.</span>{' '}
                  {isEs ? 'Información general' : 'General Information'}
                </h2>
                <p>
                  {isEs ? (
                    <>
                      Este sitio web es administrado por <strong>ECOPACIFIC S.A.</strong>, en adelante «Ecopacific», con
                      domicilio en Parque Industrial El Carmen, Km 2 ½ vía Sangolquí – Amaguaña, Ecuador.
                    </>
                  ) : (
                    <>
                      This website is managed by <strong>ECOPACIFIC S.A.</strong>, hereinafter «Ecopacific», located at
                      Parque Industrial El Carmen, Km 2 ½ vía Sangolquí – Amaguaña, Ecuador.
                    </>
                  )}
                </p>
                <p>
                  {isEs
                    ? 'Su finalidad es proporcionar información sobre la empresa, sus actividades, marcas, productos y servicios, así como facilitar el contacto con clientes, proveedores y personas interesadas.'
                    : 'Its purpose is to provide information about the company, its activities, brands, products, and services, as well as facilitate contact with customers, suppliers, and interested parties.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">2.</span>{' '}
                  {isEs ? 'Uso del sitio web' : 'Use of the Website'}
                </h2>
                <p>
                  {isEs
                    ? 'El usuario se compromete a utilizar este sitio web de manera responsable, lícita y conforme a la legislación vigente.'
                    : 'The user agrees to use this website responsibly, lawfully, and in compliance with applicable law.'}
                </p>
                <p className="font-semibold text-stone-800">{isEs ? 'Queda prohibido:' : 'It is prohibited to:'}</p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li>
                    {isEs
                      ? 'Utilizar el sitio web con fines ilegales o fraudulentos.'
                      : 'Use the website for illegal or fraudulent purposes.'}
                  </li>
                  <li>
                    {isEs
                      ? 'Intentar acceder sin autorización a los sistemas, servidores o bases de datos de la empresa.'
                      : 'Attempt unauthorized access to the company’s systems, servers, or databases.'}
                  </li>
                  <li>
                    {isEs
                      ? 'Introducir código malicioso o realizar actividades que puedan afectar el funcionamiento del sitio.'
                      : 'Introduce malicious code or carry out activities that may affect website operations.'}
                  </li>
                  <li>
                    {isEs
                      ? 'Utilizar, copiar o distribuir los contenidos del sitio sin autorización, salvo en los casos permitidos por la ley.'
                      : 'Use, copy, or distribute website content without authorization, except where permitted by law.'}
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">3.</span>{' '}
                  {isEs ? 'Información sobre productos y marcas' : 'Information on Products and Brands'}
                </h2>
                <p>
                  {isEs
                    ? 'Ecopacific procura mantener actualizada la información presentada sobre sus productos, marcas y actividades empresariales.'
                    : 'Ecopacific seeks to keep information on its products, brands, and corporate activities up to date.'}
                </p>
                <p>
                  {isEs
                    ? 'Las imágenes, descripciones, características y demás contenidos tienen carácter informativo y pueden estar sujetos a modificaciones sin previo aviso.'
                    : 'Images, descriptions, characteristics, and other content are informative and subject to modification without prior notice.'}
                </p>
                <p>
                  {isEs
                    ? 'La disponibilidad, presentación y características de los productos pueden variar.'
                    : 'Product availability, packaging, and characteristics may vary.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">4.</span>{' '}
                  {isEs ? 'Propiedad intelectual' : 'Intellectual Property'}
                </h2>
                <p>
                  {isEs
                    ? 'Los textos, fotografías, diseños, logotipos, elementos gráficos, marcas y demás contenidos publicados en este sitio web pertenecen a Ecopacific o se utilizan con las autorizaciones correspondientes.'
                    : 'Texts, photographs, designs, logos, graphic elements, trademarks, and other content published on this website belong to Ecopacific or are used with proper authorization.'}
                </p>
                <p>
                  {isEs
                    ? 'Queda prohibida su reproducción, modificación, distribución o utilización comercial sin autorización previa del titular de los derechos, salvo cuando la legislación aplicable lo permita.'
                    : 'Reproduction, modification, distribution, or commercial exploitation without prior written consent from the rights holder is prohibited, except as permitted by law.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">5.</span>{' '}
                  {isEs ? 'Enlaces externos' : 'External Links'}
                </h2>
                <p>
                  {isEs
                    ? 'Este sitio web puede contener enlaces a páginas o plataformas de terceros. Ecopacific no controla necesariamente sus contenidos, políticas de privacidad, disponibilidad o condiciones de uso.'
                    : 'This website may contain links to third-party pages or platforms. Ecopacific does not necessarily control their content, privacy policies, availability, or terms of use.'}
                </p>
                <p>
                  {isEs
                    ? 'El acceso a dichos sitios se realiza bajo responsabilidad del usuario.'
                    : 'Access to such websites is at the user’s own responsibility.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">6.</span>{' '}
                  {isEs ? 'Disponibilidad del sitio' : 'Website Availability'}
                </h2>
                <p>
                  {isEs
                    ? 'Ecopacific procura mantener el sitio web disponible y funcionando correctamente. Sin embargo, no garantiza que el acceso sea ininterrumpido o que esté libre de errores técnicos.'
                    : 'Ecopacific strives to keep the website available and operating properly. However, uninterrupted access or absence of technical errors cannot be guaranteed.'}
                </p>
                <p>
                  {isEs
                    ? 'La empresa podrá realizar mantenimientos, actualizaciones o modificaciones cuando sea necesario.'
                    : 'The company may perform maintenance, updates, or modifications whenever necessary.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">7.</span>{' '}
                  {isEs ? 'Limitación de responsabilidad' : 'Limitation of Liability'}
                </h2>
                <p>
                  {isEs
                    ? 'Ecopacific no será responsable por daños derivados de interrupciones ajenas a su control, problemas de conexión, fallos de terceros o uso indebido del sitio web, en la medida permitida por la legislación aplicable.'
                    : 'Ecopacific shall not be liable for damages resulting from interruptions outside its control, connectivity failures, third-party errors, or misuse of the website, to the extent permitted by law.'}
                </p>
                <p>
                  {isEs
                    ? 'Nada de lo establecido en estos términos limita los derechos que la legislación ecuatoriana reconoce a los usuarios y consumidores.'
                    : 'Nothing in these terms limits rights recognized to users and consumers by Ecuadorian legislation.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">8.</span>{' '}
                  {isEs ? 'Modificaciones' : 'Modifications'}
                </h2>
                <p>
                  {isEs
                    ? 'Ecopacific podrá actualizar estos Términos y Condiciones cuando sea necesario. Las modificaciones serán publicadas en esta misma página e indicarán su fecha de actualización.'
                    : 'Ecopacific may update these Terms and Conditions when necessary. Modifications will be posted on this page indicating their update date.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">9.</span>{' '}
                  {isEs ? 'Legislación aplicable' : 'Applicable Law'}
                </h2>
                <p>
                  {isEs
                    ? 'Estos términos se interpretarán conforme a las leyes vigentes de la República del Ecuador. Cualquier controversia será tratada ante las autoridades competentes, de acuerdo con la legislación aplicable.'
                    : 'These terms are governed by the laws of the Republic of Ecuador. Any controversy will be brought before competent authorities under applicable legislation.'}
                </p>
              </section>

              <section className="space-y-4 pt-4 border-t border-stone-200">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">10.</span>{' '}
                  {isEs ? 'Contacto' : 'Contact Information'}
                </h2>
                <p>
                  {isEs
                    ? 'Para consultas relacionadas con estos Términos y Condiciones, puedes comunicarte con nosotros:'
                    : 'For inquiries regarding these Terms and Conditions, please contact us:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-stone-50 p-5 rounded-2xl border border-stone-200">
                  <div>
                    <span className="font-bold text-stone-900 block">{isEs ? 'Empresa:' : 'Company:'}</span>
                    <span>ECOPACIFIC S.A.</span>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">{isEs ? 'Correo electrónico:' : 'Email:'}</span>
                    <a href="mailto:info@ecopacific.com.ec" className="text-[#5B8C2A] hover:underline">
                      info@ecopacific.com.ec
                    </a>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">{isEs ? 'Dirección:' : 'Address:'}</span>
                    <span>Parque Industrial El Carmen, Km 2 ½ vía Sangolquí – Amaguaña, Ecuador</span>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">{isEs ? 'Teléfono:' : 'Phone:'}</span>
                    <span>+593 99 942 2244</span>
                  </div>
                </div>
              </section>
            </article>
          )}

          {/* ========================================================
              2. POLÍTICA DE PRIVACIDAD
              ======================================================== */}
          {type === 'privacidad' && (
            <article className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-8">
              <div className="p-5 rounded-2xl bg-[#F4F7EE] border border-[#5B8C2A]/20 text-stone-800 text-sm sm:text-base font-medium">
                {isEs ? (
                  <>
                    <p className="m-0 mb-2">
                      En <strong>Ecopacific</strong> respetamos la privacidad de nuestros usuarios y nos comprometemos a
                      proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos,
                      almacenamos y protegemos la información personal proporcionada a través de nuestro sitio web.
                    </p>
                    <p className="m-0 font-semibold text-[#5B8C2A]">
                      El tratamiento de datos personales se realizará conforme a la Ley Orgánica de Protección de Datos
                      Personales del Ecuador y demás normativa aplicable.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="m-0 mb-2">
                      At <strong>Ecopacific</strong> we respect user privacy and are committed to protecting personal
                      data. This Privacy Policy explains how we collect, use, store, and safeguard personal information
                      provided through our website.
                    </p>
                    <p className="m-0 font-semibold text-[#5B8C2A]">
                      Personal data processing complies with the Organic Law on Personal Data Protection of Ecuador and
                      other applicable regulations.
                    </p>
                  </>
                )}
              </div>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">1.</span>{' '}
                  {isEs ? 'Responsable del tratamiento' : 'Data Controller'}
                </h2>
                <p>
                  {isEs
                    ? 'El responsable del tratamiento de los datos personales es:'
                    : 'The entity responsible for personal data processing is:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-stone-50 p-5 rounded-2xl border border-stone-200">
                  <div>
                    <span className="font-bold text-stone-900 block">{isEs ? 'Razón social:' : 'Corporate Name:'}</span>
                    <span>ECOPACIFIC S.A.</span>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">RUC:</span>
                    <span>1792198944001</span>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">{isEs ? 'Domicilio:' : 'Address:'}</span>
                    <span>Parque Industrial El Carmen, Km 2 ½ vía Sangolquí – Amaguaña, Ecuador</span>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">{isEs ? 'Correo de contacto:' : 'Contact Email:'}</span>
                    <a href="mailto:info@ecopacific.com.ec" className="text-[#5B8C2A] hover:underline">
                      info@ecopacific.com.ec
                    </a>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block">{isEs ? 'Teléfono:' : 'Phone:'}</span>
                    <span>+593 99 942 2244</span>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">2.</span>{' '}
                  {isEs ? 'Datos personales que podemos recopilar' : 'Personal Data We May Collect'}
                </h2>
                <p>
                  {isEs
                    ? 'Dependiendo de las interacciones que realices con nuestro sitio web, podemos recopilar las siguientes categorías de información:'
                    : 'Depending on your interactions with our website, we may collect the following categories of information:'}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li>
                    <strong>{isEs ? 'Datos de identificación:' : 'Identification data:'}</strong>{' '}
                    {isEs ? 'nombre y apellidos.' : 'first and last names.'}
                  </li>
                  <li>
                    <strong>{isEs ? 'Datos de contacto:' : 'Contact data:'}</strong>{' '}
                    {isEs
                      ? 'correo electrónico, número de teléfono y otros datos que decidas proporcionar.'
                      : 'email, phone number, and other details you voluntarily provide.'}
                  </li>
                  <li>
                    <strong>{isEs ? 'Información de comunicación:' : 'Communication information:'}</strong>{' '}
                    {isEs ? 'contenido de los mensajes o solicitudes que nos envíes.' : 'content of messages or requests sent to us.'}
                  </li>
                  <li>
                    <strong>{isEs ? 'Información profesional:' : 'Professional information:'}</strong>{' '}
                    {isEs
                      ? 'cuando una persona se postule a una oportunidad laboral y proporcione voluntariamente su currículum u otra información relacionada.'
                      : 'when applying for job opportunities and voluntarily providing resumes or credentials.'}
                  </li>
                  <li>
                    <strong>{isEs ? 'Datos técnicos y de navegación:' : 'Technical and browsing data:'}</strong>{' '}
                    {isEs
                      ? 'dirección IP, tipo de dispositivo, navegador, páginas visitadas y datos de interacción, cuando sean recopilados mediante herramientas técnicas o analíticas.'
                      : 'IP address, device type, browser, pages visited, and interaction telemetry when gathered via analytical tools.'}
                  </li>
                </ul>
                <p className="text-xs text-stone-500 italic">
                  {isEs
                    ? 'Ecopacific no solicita información personal que no resulte necesaria para las finalidades indicadas.'
                    : 'Ecopacific does not request personal data that is not strictly necessary for the indicated purposes.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">3.</span>{' '}
                  {isEs ? 'Finalidades del tratamiento' : 'Purposes of Processing'}
                </h2>
                <p>{isEs ? 'Los datos personales podrán utilizarse para:' : 'Personal data may be processed to:'}</p>
                <ul className="list-disc pl-6 space-y-1.5 text-stone-600">
                  <li>{isEs ? 'Responder consultas, solicitudes y mensajes enviados por los usuarios.' : 'Respond to user inquiries, requests, and messages.'}</li>
                  <li>{isEs ? 'Gestionar comunicaciones comerciales y empresariales.' : 'Manage corporate and business communications.'}</li>
                  <li>{isEs ? 'Atender solicitudes de clientes, proveedores y socios comerciales.' : 'Serve customer, vendor, and business partner inquiries.'}</li>
                  <li>{isEs ? 'Recibir y evaluar postulaciones laborales.' : 'Receive and review job applications.'}</li>
                  <li>{isEs ? 'Mejorar el funcionamiento, contenido y experiencia de navegación del sitio web.' : 'Improve website performance, content, and browsing experience.'}</li>
                  <li>{isEs ? 'Mantener la seguridad de la página y prevenir usos indebidos.' : 'Maintain website security and prevent fraudulent misuse.'}</li>
                  <li>{isEs ? 'Cumplir obligaciones legales aplicables.' : 'Fulfill applicable statutory obligations.'}</li>
                </ul>
                <p>
                  {isEs
                    ? 'Los datos no serán utilizados para finalidades incompatibles con aquellas para las cuales fueron recopilados, salvo que exista una base legal que lo permita.'
                    : 'Data will not be processed for incompatible purposes unless authorized by legal grounds.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">4.</span>{' '}
                  {isEs ? 'Base legal del tratamiento' : 'Legal Basis for Processing'}
                </h2>
                <p>
                  {isEs
                    ? 'El tratamiento de datos personales se realizará sobre una base de legitimación válida conforme a la legislación ecuatoriana, según corresponda a cada actividad.'
                    : 'Processing takes place on valid legal grounds recognized under Ecuadorian law.'}
                </p>
                <p>
                  {isEs
                    ? 'Estas bases podrán incluir el consentimiento del titular, la aplicación de medidas precontractuales o contractuales, el cumplimiento de obligaciones legales u otras bases legítimas reconocidas por la normativa aplicable.'
                    : 'Grounds may include user consent, pre-contractual measures, fulfillment of contracts, or legal obligations.'}
                </p>
                <p>
                  {isEs
                    ? 'Cuando el tratamiento requiera consentimiento, este será solicitado de manera libre, específica, informada e inequívoca.'
                    : 'Where consent is required, it will be freely given, specific, informed, and unambiguous.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">5.</span>{' '}
                  {isEs ? 'Conservación de los datos' : 'Data Retention'}
                </h2>
                <p>
                  {isEs
                    ? 'Los datos personales se conservarán durante el tiempo necesario para cumplir las finalidades para las que fueron recopilados y atender las obligaciones legales correspondientes.'
                    : 'Personal data is retained only as long as necessary to fulfill collection purposes and meet legal obligations.'}
                </p>
                <p>
                  {isEs
                    ? 'Una vez cumplidas dichas finalidades y vencidos los plazos legales aplicables, los datos serán eliminados, anonimizados o tratados conforme a los procedimientos permitidos por la legislación.'
                    : 'Once purposes expire, data is securely erased, anonymized, or processed under legally permitted procedures.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">6.</span>{' '}
                  {isEs ? 'Comunicación y transferencia de datos' : 'Data Sharing and Transfers'}
                </h2>
                <p className="font-semibold text-stone-800">
                  {isEs ? 'Ecopacific no comercializa los datos personales de sus usuarios.' : 'Ecopacific does not sell user personal data.'}
                </p>
                <p>
                  {isEs
                    ? 'Cuando resulte necesario para el funcionamiento del sitio web o para la prestación de servicios, determinados proveedores tecnológicos podrán acceder a información personal bajo las condiciones y garantías correspondientes.'
                    : 'When necessary for site operations or service delivery, trusted technological vendors may access information subject to strict contractual safeguards.'}
                </p>
                <p>
                  {isEs
                    ? 'Entre estos proveedores podrán encontrarse servicios de alojamiento web, infraestructura tecnológica, seguridad, almacenamiento y análisis de tráfico, siempre que efectivamente sean utilizados por la empresa.'
                    : 'Vendors may include hosting providers, cloud infrastructure, cybersecurity services, and web analytics.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">7.</span>{' '}
                  {isEs ? 'Seguridad de la información' : 'Information Security'}
                </h2>
                <p>
                  {isEs
                    ? 'Ecopacific adopta medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración, divulgación o destrucción.'
                    : 'Ecopacific implements reasonable technical and organizational measures to safeguard personal data against unauthorized access, loss, alteration, or disclosure.'}
                </p>
                <p className="text-xs text-stone-500 italic">
                  {isEs
                    ? 'Sin embargo, ningún sistema de transmisión o almacenamiento electrónico puede garantizar seguridad absoluta.'
                    : 'However, no electronic transmission or storage method can guarantee absolute security.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">8.</span>{' '}
                  {isEs ? 'Derechos de los titulares' : 'Data Subject Rights'}
                </h2>
                <p>
                  {isEs
                    ? 'De acuerdo con la legislación ecuatoriana, los titulares de datos personales podrán ejercer los derechos que les reconoce la normativa, entre ellos:'
                    : 'Under Ecuadorian law, data subjects may exercise recognized rights, including:'}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-stone-600">
                  <li><strong>{isEs ? 'Acceso:' : 'Access:'}</strong> {isEs ? 'conocer qué datos personales son tratados.' : 'know what personal data is processed.'}</li>
                  <li><strong>{isEs ? 'Rectificación y actualización:' : 'Rectification:'}</strong> {isEs ? 'solicitar la corrección de información incorrecta o incompleta.' : 'request correction of inaccurate or incomplete information.'}</li>
                  <li><strong>{isEs ? 'Eliminación:' : 'Erasure:'}</strong> {isEs ? 'solicitar la supresión de sus datos cuando corresponda legalmente.' : 'request erasure when legally applicable.'}</li>
                  <li><strong>{isEs ? 'Oposición:' : 'Objection:'}</strong> {isEs ? 'oponerse a determinados tratamientos en los casos previstos por la ley.' : 'object to specific processing activities.'}</li>
                  <li><strong>{isEs ? 'Suspensión:' : 'Restriction:'}</strong> {isEs ? 'solicitar la limitación o suspensión del tratamiento cuando corresponda.' : 'request limitation or suspension of processing.'}</li>
                  <li><strong>{isEs ? 'Portabilidad:' : 'Portability:'}</strong> {isEs ? 'solicitar la entrega o transmisión de sus datos en los casos legalmente establecidos.' : 'receive personal data in structured format.'}</li>
                  <li><strong>{isEs ? 'Revocación del consentimiento:' : 'Consent Withdrawal:'}</strong> {isEs ? 'retirar el consentimiento otorgado, cuando el tratamiento se base en él.' : 'withdraw previously granted consent.'}</li>
                </ul>
                <p>
                  {isEs ? (
                    <>
                      Para ejercer estos derechos, el titular podrá enviar una solicitud a{' '}
                      <a href="mailto:info@ecopacific.com.ec" className="text-[#5B8C2A] font-semibold underline">
                        info@ecopacific.com.ec
                      </a>
                      , indicando el derecho que desea ejercer y proporcionando la información necesaria para verificar su identidad.
                    </>
                  ) : (
                    <>
                      To exercise these rights, submit a request to{' '}
                      <a href="mailto:info@ecopacific.com.ec" className="text-[#5B8C2A] font-semibold underline">
                        info@ecopacific.com.ec
                      </a>{' '}
                      specifying the right invoked and proof of identity.
                    </>
                  )}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">9.</span>{' '}
                  {isEs ? 'Datos de menores de edad' : 'Minors’ Privacy'}
                </h2>
                <p>
                  {isEs
                    ? 'Este sitio web no está diseñado específicamente para recopilar datos personales de niños, niñas o adolescentes.'
                    : 'This website is not specifically designed to gather personal data from children or adolescents.'}
                </p>
                <p>
                  {isEs
                    ? 'Cuando el tratamiento de sus datos requiera autorización de sus representantes legales, esta será obtenida conforme a la legislación aplicable.'
                    : 'Where minor data processing requires legal guardian authorization, it will be obtained in accordance with law.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">10.</span>{' '}
                  {isEs ? 'Modificaciones de esta política' : 'Policy Modifications'}
                </h2>
                <p>
                  {isEs
                    ? 'Ecopacific podrá actualizar esta Política de Privacidad para reflejar cambios legales, tecnológicos u operativos.'
                    : 'Ecopacific may update this Privacy Policy to reflect legal, technological, or operational changes.'}
                </p>
                <p>
                  {isEs
                    ? 'La versión vigente estará disponible en esta página y mostrará su fecha de última actualización.'
                    : 'The current version will remain accessible on this page indicating its date of update.'}
                </p>
              </section>

              <section className="space-y-4 pt-4 border-t border-stone-200">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">11.</span>{' '}
                  {isEs ? 'Contacto de privacidad' : 'Privacy Contact'}
                </h2>
                <p>
                  {isEs
                    ? 'Para consultas, solicitudes o reclamos relacionados con el tratamiento de datos personales, puedes comunicarte con:'
                    : 'For queries, requests, or claims related to personal data processing, contact:'}
                </p>
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-sm space-y-1.5">
                  <p className="font-bold text-stone-900">ECOPACIFIC S.A.</p>
                  <p>Correo electrónico: <a href="mailto:info@ecopacific.com.ec" className="text-[#5B8C2A] underline">info@ecopacific.com.ec</a></p>
                  <p>Dirección: Parque Industrial El Carmen, Km 2 ½ vía Sangolquí – Amaguaña, Ecuador</p>
                  <p>Teléfono: +593 99 942 2244</p>
                </div>
              </section>
            </article>
          )}

          {/* ========================================================
              3. POLÍTICA DE COOKIES
              ======================================================== */}
          {type === 'cookies' && (
            <article className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-8">
              <div className="p-5 rounded-2xl bg-[#F4F7EE] border border-[#5B8C2A]/20 text-stone-800 text-sm sm:text-base font-medium">
                {isEs ? (
                  <>
                    <p className="m-0 mb-2">
                      En <strong>Ecopacific</strong> utilizamos cookies y tecnologías similares para permitir el correcto
                      funcionamiento de nuestro sitio web, mejorar la experiencia de navegación y, cuando corresponda,
                      obtener información estadística sobre su utilización.
                    </p>
                    <p className="m-0 text-stone-600 text-xs sm:text-sm">
                      Esta política explica qué son las cookies, para qué pueden utilizarse y cómo puedes gestionar tus preferencias.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="m-0 mb-2">
                      At <strong>Ecopacific</strong> we use cookies and similar technologies to ensure proper website
                      functionality, enhance browsing experiences, and collect statistical usage telemetry when applicable.
                    </p>
                    <p className="m-0 text-stone-600 text-xs sm:text-sm">
                      This policy explains what cookies are, why they are used, and how you can manage your preferences.
                    </p>
                  </>
                )}
              </div>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">1.</span>{' '}
                  {isEs ? '¿Qué son las cookies?' : 'What are Cookies?'}
                </h2>
                <p>
                  {isEs
                    ? 'Las cookies son pequeños archivos de texto que los sitios web pueden almacenar en el navegador o dispositivo del usuario cuando visita una página.'
                    : 'Cookies are small text files stored on your browser or device when visiting a web page.'}
                </p>
                <p>
                  {isEs
                    ? 'Permiten recordar determinadas preferencias, facilitar la navegación, mantener funciones técnicas y recopilar información sobre el uso del sitio.'
                    : 'They allow systems to remember preferences, facilitate navigation, preserve technical functions, and gather usage telemetry.'}
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">2.</span>{' '}
                  {isEs ? 'Tipos de cookies' : 'Types of Cookies'}
                </h2>
                <p>
                  {isEs
                    ? 'Nuestro sitio web podrá utilizar las siguientes categorías de cookies, dependiendo de las herramientas que se encuentren habilitadas:'
                    : 'Our website may utilize the following cookie categories depending on enabled tools:'}
                </p>

                <div className="space-y-3 pl-2">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h3 className="font-bold text-stone-900 text-base mb-1">
                      {isEs ? 'Cookies necesarias' : 'Strictly Necessary Cookies'}
                    </h3>
                    <p className="text-sm text-stone-600 m-0">
                      {isEs
                        ? 'Son aquellas indispensables para el funcionamiento, la seguridad y la disponibilidad del sitio web. Permiten, por ejemplo, mantener determinadas funciones técnicas y gestionar las preferencias de privacidad.'
                        : 'Indispensable for core site functionality, security, and uptime. They manage technical operations and privacy preferences.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h3 className="font-bold text-stone-900 text-base mb-1">
                      {isEs ? 'Cookies de preferencias' : 'Preference Cookies'}
                    </h3>
                    <p className="text-sm text-stone-600 m-0">
                      {isEs
                        ? 'Permiten recordar configuraciones seleccionadas por el usuario, como determinadas preferencias de navegación e idioma.'
                        : 'Remember user selections such as language and browsing configurations.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h3 className="font-bold text-stone-900 text-base mb-1">
                      {isEs ? 'Cookies analíticas o estadísticas' : 'Analytical or Statistical Cookies'}
                    </h3>
                    <p className="text-sm text-stone-600 m-0">
                      {isEs
                        ? 'Permiten obtener información sobre cómo los visitantes utilizan el sitio web, como las páginas consultadas, la duración de las visitas y las interacciones, ayudando a mejorar su contenido.'
                        : 'Provide telemetry on site traffic, pages visited, and user interactions to help enhance content and responsiveness.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h3 className="font-bold text-stone-900 text-base mb-1">
                      {isEs ? 'Cookies de marketing' : 'Marketing Cookies'}
                    </h3>
                    <p className="text-sm text-stone-600 m-0">
                      {isEs
                        ? 'Podrían utilizarse para medir campañas publicitarias o mostrar contenido promocional personalizado, siempre que estas tecnologías estén implementadas y exista la autorización correspondiente cuando sea necesaria.'
                        : 'May measure promotional campaign effectiveness subject to prior consent where applicable.'}
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">3.</span>{' '}
                  {isEs ? 'Cookies de terceros' : 'Third-Party Cookies'}
                </h2>
                <p>
                  {isEs
                    ? 'Algunas funciones del sitio web pueden depender de servicios tecnológicos proporcionados por terceros. Estos proveedores podrían utilizar cookies o tecnologías similares de acuerdo con sus propias políticas de privacidad y cookies.'
                    : 'Certain features may rely on third-party technological providers who store cookies in accordance with their respective privacy policies.'}
                </p>
                <p>
                  {isEs
                    ? 'La utilización de estas tecnologías dependerá de las herramientas efectivamente integradas en el sitio web.'
                    : 'Usage depends upon features integrated into the live platform.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">4.</span>{' '}
                  {isEs ? 'Gestión de cookies' : 'Managing Cookies'}
                </h2>
                <p>
                  {isEs
                    ? 'Al ingresar al sitio web, el usuario podrá gestionar sus preferencias de cookies mediante el mecanismo de configuración disponible, cuando corresponda.'
                    : 'Users may manage cookie preferences through the available consent mechanisms upon visiting.'}
                </p>
                <p>
                  {isEs
                    ? 'También es posible configurar el navegador para bloquear o eliminar determinadas cookies. Sin embargo, algunas funciones del sitio podrían verse afectadas.'
                    : 'You can configure your browser to block or clear cookies, though some technical features may be affected.'}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">5.</span>{' '}
                  {isEs ? 'Conservación de cookies' : 'Cookie Retention'}
                </h2>
                <p>{isEs ? 'Las cookies pueden ser:' : 'Cookies may be:'}</p>
                <ul className="list-disc pl-6 space-y-1.5 text-stone-600">
                  <li>
                    <strong>{isEs ? 'De sesión:' : 'Session cookies:'}</strong>{' '}
                    {isEs ? 'se eliminan al cerrar el navegador.' : 'deleted upon closing the browser.'}
                  </li>
                  <li>
                    <strong>{isEs ? 'Persistentes:' : 'Persistent cookies:'}</strong>{' '}
                    {isEs
                      ? 'permanecen almacenadas durante un período determinado o hasta que el usuario las elimine.'
                      : 'remain stored for a set period or until manually cleared.'}
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">6.</span>{' '}
                  {isEs ? 'Actualizaciones de esta política' : 'Policy Updates'}
                </h2>
                <p>
                  {isEs
                    ? 'Ecopacific podrá modificar esta Política de Cookies para reflejar cambios en las tecnologías utilizadas, en la configuración del sitio web o en la legislación aplicable.'
                    : 'Ecopacific may amend this Cookie Policy to reflect technical updates or legal changes.'}
                </p>
                <p>
                  {isEs
                    ? 'La versión actualizada estará disponible en esta misma página.'
                    : 'The updated version is always accessible on this page.'}
                </p>
              </section>

              <section className="space-y-4 pt-4 border-t border-stone-200">
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#5B8C2A]">7.</span>{' '}
                  {isEs ? 'Contacto' : 'Contact Information'}
                </h2>
                <p>
                  {isEs
                    ? 'Si tienes preguntas sobre nuestra Política de Cookies, puedes comunicarte con nosotros:'
                    : 'If you have questions regarding our Cookie Policy, please contact us:'}
                </p>
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 text-sm space-y-1.5">
                  <p className="font-bold text-stone-900">ECOPACIFIC S.A.</p>
                  <p>Correo electrónico: <a href="mailto:info@ecopacific.com.ec" className="text-[#5B8C2A] underline">info@ecopacific.com.ec</a></p>
                  <p>Dirección: Parque Industrial El Carmen, Km 2 ½ vía Sangolquí – Amaguaña, Ecuador</p>
                  <p>Teléfono: +593 99 942 2244</p>
                </div>
              </section>
            </article>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={onNavigate}
        language={language}
        onOpenNosotros={() => onNavigate('/nosotros')}
        onOpenSostenibilidad={() => onNavigate('/sostenibilidad')}
        onOpenContact={onOpenContact || (() => onNavigate('/contacto'))}
      />
    </div>
  );
};
