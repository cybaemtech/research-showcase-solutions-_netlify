export function SineWaveBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="swFade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3B6D11" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B6D11" stopOpacity="1" />
            <stop offset="100%" stopColor="#3B6D11" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="swFade2" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#2D4A1E" stopOpacity="0" />
            <stop offset="50%" stopColor="#2D4A1E" stopOpacity="1" />
            <stop offset="100%" stopColor="#2D4A1E" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* three layered sine paths, gently drifting */}
        <g fill="none" strokeWidth="1.25">
          <path
            className="sw-line sw-line-1"
            stroke="url(#swFade)"
            strokeOpacity="0.55"
            d="M-200,320 Q120,220 440,320 T1080,320 T1720,320"
          />
          <path
            className="sw-line sw-line-2"
            stroke="url(#swFade2)"
            strokeOpacity="0.4"
            d="M-200,360 Q160,270 520,360 T1240,360 T1880,360"
          />
          <path
            className="sw-line sw-line-3"
            stroke="url(#swFade)"
            strokeOpacity="0.3"
            d="M-200,400 Q200,330 600,400 T1400,400 T2040,400"
          />
          <path
            className="sw-line sw-line-4"
            stroke="url(#swFade2)"
            strokeOpacity="0.22"
            d="M-200,260 Q140,180 480,260 T1160,260 T1840,260"
          />
        </g>
      </svg>

      <style>{`
        .sw-line {
          transform-origin: center;
          will-change: transform;
        }
        .sw-line-1 { animation: sw-drift 18s ease-in-out infinite; }
        .sw-line-2 { animation: sw-drift 24s ease-in-out infinite reverse; }
        .sw-line-3 { animation: sw-drift 30s ease-in-out infinite; }
        .sw-line-4 { animation: sw-drift 22s ease-in-out infinite reverse; }

        @keyframes sw-drift {
          0%   { transform: translateX(0)      translateY(0); }
          50%  { transform: translateX(-40px)  translateY(-6px); }
          100% { transform: translateX(0)      translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .sw-line { animation: none; }
        }
      `}</style>
    </div>
  );
}
