import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface CocoFreezeVideoPlayerProps {
  src?: string;
}

export const CocoFreezeVideoPlayer: React.FC<CocoFreezeVideoPlayerProps> = ({
  src = '/VIDEO-COCO-FREEZE-2026.mp4',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            // Attempt to play with sound; fallback to muted if browser blocks autoplay with sound
            video.muted = isMuted;
            video.volume = 0.85;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {
                  // Autoplay with sound was blocked by browser; play muted
                  video.muted = true;
                  setIsMuted(true);
                  video.play()
                    .then(() => setIsPlaying(true))
                    .catch((err) => console.warn('Video play error:', err));
                });
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: [0.1, 0.35, 0.7],
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setUserInteracted(true);
    if (video.paused) {
      video.play().then(() => setIsPlaying(true));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    setUserInteracted(true);
    const newMuted = !isMuted;
    video.muted = newMuted;
    if (!newMuted) {
      video.volume = 0.9;
    }
    setIsMuted(newMuted);
  };

  return (
    <div
      ref={containerRef}
      onClick={togglePlay}
      className="relative w-full max-w-5xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl bg-black aspect-video border-2 border-white/20 group cursor-pointer"
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-contain bg-black"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Play/Pause subtle overlay indicator on hover */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors pointer-events-none flex items-center justify-center">
        {!isPlaying && (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-stone-900 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
          </div>
        )}
      </div>

      {/* Floating sound toggle */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={toggleMute}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 hover:bg-black/90 text-white backdrop-blur-md text-xs sm:text-sm font-bold transition-all shadow-xl cursor-pointer hover:scale-105 active:scale-95 border border-white/20"
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
          title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-yellow-300 stroke-[2.5]" />
              <span>Activar Sonido</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
              <span>Sonido Activo</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
