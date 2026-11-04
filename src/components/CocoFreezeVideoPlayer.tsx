import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Subtitles } from 'lucide-react';
import { Language } from '../types';

interface SubtitleCue {
  start: number;
  end: number;
  text: string;
}

const ENGLISH_SUBTITLES: SubtitleCue[] = [
  { start: 0.5, end: 3.5, text: 'My name is Jonathan Pincay' },
  { start: 3.5, end: 8.5, text: 'and I have dedicated 20 years to the coconut harvest.' },
  { start: 8.5, end: 13.5, text: 'To know the true flavor of the coconut, it has to be tender,' },
  { start: 13.5, end: 18.0, text: 'with a color between green and yellowish.' },
  { start: 18.0, end: 24.5, text: 'When harvesting, you first have to thank the palm,' },
  { start: 24.5, end: 29.5, text: 'because they give us a delicious fruit—treat it with care' },
  { start: 29.5, end: 33.5, text: 'so the coconut arrives fresh to those who enjoy it.' },
  { start: 33.5, end: 37.5, text: 'So this gift from nature reaches your hands,' },
  { start: 37.5, end: 42.0, text: 'at Coco Freeze we unite field expertise with first-rate technology,' },
  { start: 42.0, end: 45.0, text: 'under safe processes guaranteeing the best of its origin.' },
  { start: 45.0, end: 48.2, text: '100% coconut water, refreshing and full of life.' },
];

interface CocoFreezeVideoPlayerProps {
  src?: string;
  language?: Language;
}

export const CocoFreezeVideoPlayer: React.FC<CocoFreezeVideoPlayerProps> = ({
  src = '/VIDEO-COCO-FREEZE-2026.mp4',
  language = 'es',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(true);

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
    const newMuted = !isMuted;
    video.muted = newMuted;
    if (!newMuted) {
      video.volume = 0.9;
    }
    setIsMuted(newMuted);
  };

  const toggleSubtitles = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSubtitlesEnabled((prev) => !prev);
  };

  const activeEnglishCue =
    language === 'en' && subtitlesEnabled
      ? ENGLISH_SUBTITLES.find(
          (cue) => currentTime >= cue.start && currentTime <= cue.end
        )
      : null;

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
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* English subtitles overlay covering the bottom burned-in Spanish subs */}
      {activeEnglishCue && (
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none max-w-[92%] sm:max-w-[84%] min-w-[280px] sm:min-w-[420px] text-center px-4 py-1.5 sm:px-6 sm:py-2 rounded-xl sm:rounded-2xl bg-black/95 text-white font-medium text-xs sm:text-sm md:text-base border border-white/25 shadow-2xl backdrop-blur-md transition-all duration-200">
          <p className="leading-snug drop-shadow-md">{activeEnglishCue.text}</p>
        </div>
      )}

      {/* Play/Pause subtle overlay indicator on hover */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors pointer-events-none flex items-center justify-center">
        {!isPlaying && (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-stone-900 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
          </div>
        )}
      </div>

      {/* Floating controls */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        {language === 'en' && (
          <button
            type="button"
            onClick={toggleSubtitles}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full backdrop-blur-md text-xs sm:text-sm font-bold transition-all shadow-xl cursor-pointer hover:scale-105 active:scale-95 border ${
              subtitlesEnabled
                ? 'bg-sky-600/90 text-white border-sky-300/40'
                : 'bg-black/75 text-white/70 border-white/20'
            }`}
            aria-label="Toggle English Subtitles"
            title="Toggle English Subtitles"
          >
            <Subtitles className="w-4 h-4" />
            <span>EN Subtitles</span>
          </button>
        )}

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
              <span>{language === 'en' ? 'Unmute' : 'Activar Sonido'}</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
              <span>{language === 'en' ? 'Mute' : 'Sonido Activo'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
