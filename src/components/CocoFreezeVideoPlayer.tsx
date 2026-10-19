import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface CocoFreezeVideoPlayerProps {
  videoId?: string;
}

export const CocoFreezeVideoPlayer: React.FC<CocoFreezeVideoPlayerProps> = ({
  videoId = '5Bsu-sFegGE',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Load YouTube IFrame API
  useEffect(() => {
    let isMounted = true;

    const initPlayer = () => {
      if (!containerRef.current || playerRef.current || !window.YT || !window.YT.Player) {
        return;
      }

      playerRef.current = new window.YT.Player('coco-freeze-yt-player', {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            if (!isMounted) return;
            setIsPlayerReady(true);
            try {
              // Set initial volume
              event.target.setVolume(85);
            } catch (e) {
              console.warn('YT volume set error:', e);
            }
          },
          onStateChange: (event: any) => {
            if (!isMounted) return;
            // 1: playing, 2: paused
            if (event.data === 1) {
              setIsPlaying(true);
            } else if (event.data === 2 || event.data === 0) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingScript = document.getElementById('youtube-iframe-api-script');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        if (isMounted) initPlayer();
      };
    }

    return () => {
      isMounted = false;
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // ignore
        }
        playerRef.current = null;
      }
    };
  }, [videoId]);

  // IntersectionObserver: Play with sound when visible, pause when out of view
  useEffect(() => {
    if (!isPlayerReady || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!playerRef.current) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            try {
              // Try to play and unmute
              playerRef.current.unMute();
              playerRef.current.setVolume(85);
              playerRef.current.playVideo();
              setIsMuted(false);
            } catch (e) {
              try {
                // If browser autoplay policy requires mute first
                playerRef.current.mute();
                playerRef.current.playVideo();
                setIsMuted(true);
              } catch (err) {
                console.warn('Autoplay error:', err);
              }
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.25) {
            try {
              playerRef.current.pauseVideo();
            } catch (e) {
              // ignore
            }
          }
        });
      },
      {
        threshold: [0.1, 0.4, 0.7],
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isPlayerReady]);

  const toggleMute = () => {
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(85);
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (e) {
      console.warn('Error toggling mute', e);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden shadow-2xl bg-stone-900 aspect-video md:aspect-[16/10] border-2 border-stone-100 group"
    >
      <div id="coco-freeze-yt-player" className="w-full h-full object-cover" />

      {/* Floating sound status indicator and toggle */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/75 hover:bg-black/90 text-white backdrop-blur-md text-xs font-bold transition-all shadow-lg cursor-pointer"
        aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
        title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-yellow-300" />
            <span className="hidden sm:inline">Activar Sonido</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Sonido Activo</span>
          </>
        )}
      </button>
    </div>
  );
};
