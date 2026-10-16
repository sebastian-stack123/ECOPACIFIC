import React from 'react';

interface CoconutLoaderProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
}

export const CoconutLoader: React.FC<CoconutLoaderProps> = ({
  label = 'EcoPacific',
  size = 'md',
  fullScreen = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-4 select-none">
      {/* Floating coconut container */}
      <div className="relative flex flex-col items-center animate-coco-bob">
        {/* Glow ambient background */}
        <div className="absolute -inset-4 bg-[#5B8C2A]/20 rounded-full blur-xl pointer-events-none" />

        {/* Coconut SVG with 360 spin */}
        <div
          className={`${sizeMap[size]} relative animate-coco-spin origin-center will-change-transform`}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-md"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gradients */}
            <defs>
              {/* Outer coconut shell gradient */}
              <radialGradient id="cocoShell" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#8C532B" />
                <stop offset="45%" stopColor="#5E3416" />
                <stop offset="100%" stopColor="#381D0B" />
              </radialGradient>

              {/* Coconut inner fiber subtle gradient */}
              <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E1607" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1A0C04" stopOpacity="0.8" />
              </linearGradient>

              {/* Tropical palm sprout leaf at top */}
              <linearGradient id="sproutGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A7422" />
                <stop offset="100%" stopColor="#84CC16" />
              </linearGradient>
            </defs>

            {/* Small palm sprout at the top of the coconut */}
            <path
              d="M50 14 C46 6, 36 4, 32 8 C38 10, 44 16, 46 22 Z"
              fill="url(#sproutGrad)"
            />
            <path
              d="M50 14 C54 5, 64 6, 68 11 C62 11, 56 17, 53 23 Z"
              fill="url(#sproutGrad)"
            />

            {/* Coconut Shell (organic oval) */}
            <ellipse
              cx="50"
              cy="54"
              rx="37"
              ry="40"
              fill="url(#cocoShell)"
              stroke="#2A1406"
              strokeWidth="2.5"
            />

            {/* Coconut organic fibers / striations */}
            <path
              d="M30 28 Q24 52 32 78"
              stroke="url(#fiberGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M50 20 Q48 54 51 88"
              stroke="url(#fiberGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M70 28 Q76 52 68 78"
              stroke="url(#fiberGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* The 3 iconic Coconut Eyes (germination pores) */}
            {/* Eye 1 */}
            <ellipse cx="40" cy="42" rx="4.5" ry="5.5" fill="#1C0D05" />
            <circle cx="39" cy="40.5" r="1.5" fill="#4A2813" />

            {/* Eye 2 */}
            <ellipse cx="60" cy="42" rx="4.5" ry="5.5" fill="#1C0D05" />
            <circle cx="59" cy="40.5" r="1.5" fill="#4A2813" />

            {/* Eye 3 (mouth/lower pore) */}
            <ellipse cx="50" cy="62" rx="5" ry="6" fill="#1C0D05" />
            <circle cx="49" cy="60.5" r="1.6" fill="#4A2813" />
          </svg>
        </div>

        {/* Synchronized dynamic shadow underneath */}
        <div className="w-12 h-2.5 bg-black/60 rounded-full blur-[2px] mt-2 animate-coco-shadow will-change-transform" />
      </div>

      {/* Solo el coco girando sin texto ni botón titilante */}
    </div>
  );

  if (!fullScreen) {
    return content;
  }

  return (
    <div className="min-h-screen w-full bg-[#0d1607] flex items-center justify-center p-6">
      {content}
    </div>
  );
};
