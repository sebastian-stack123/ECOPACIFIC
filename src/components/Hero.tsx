import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onExploreBrands?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const sendCommand = (func: string, args: unknown[] = []) => {
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args }),
          '*'
        );
      }
    } catch {
      // Ignore cross-origin error if any
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      sendCommand('unMute');
      setIsMuted(false);
    } else {
      sendCommand('mute');
      setIsMuted(true);
    }
  };

  // Pausa el video si bajas lo suficiente para que no se vea, y lo reanuda al volver a estar visible
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendCommand('playVideo');
          } else {
            sendCommand('pauseVideo');
          }
        });
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(currentSection);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#18270f] via-[#13200b] to-[#0e1708] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#5B8C2A]/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#5B8C2A]/10 blur-[120px] rounded-full" />
      </div>

      {/* Cuadro redondeado grande que cubre la mayor parte de la sección con el video */}
      <div className="relative z-10 w-full max-w-5xl xl:max-w-6xl mx-auto flex items-center justify-center">
        <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/80 border border-white/20 ring-1 ring-black/40 bg-black group">
          <iframe
            ref={iframeRef}
            src="https://www.youtube-nocookie.com/embed/ahkl1jnSpKE?autoplay=1&mute=1&loop=1&playlist=ahkl1jnSpKE&controls=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1"
            title="EcoPacific Video"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          {/* Botón flotante para activar / silenciar sonido */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/25 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-emerald-400" />
                <span>{language === 'es' ? 'Activar sonido' : 'Enable sound'}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>{language === 'es' ? 'Silenciar' : 'Mute'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

