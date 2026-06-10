export function SineWaveBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* dark blue tinch-wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,35,72,0.10) 0%, rgba(20,52,108,0.16) 45%, rgba(10,28,60,0.22) 100%)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="swBlueA" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0" />
            <stop offset="50%" stopColor="#1E3A8A" stopOpacity="1" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="swBlueB" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0F2348" stopOpacity="0" />
            <stop offset="50%" stopColor="#0F2348" stopOpacity="1" />
            <stop offset="100%" stopColor="#0F2348" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="swBlueC" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3B5BA9" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B5BA9" stopOpacity="1" />
            <stop offset="100%" stopColor="#3B5BA9" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Layered sea-wave paths. Wider (overflows viewBox) so x-translate
            scroll loops seamlessly. */}
        <g fill="none" strokeLinecap="round">
          <path
            className="sw-wave sw-wave-1"
            stroke="url(#swBlueA)"
            strokeOpacity="0.55"
            strokeWidth="1.4"
            d="M-400,330
               C-260,290 -120,370 40,330
               S320,290 480,330
               S760,370 920,330
               S1200,290 1360,330
               S1640,370 1800,330
               S2080,290 2240,330"
          />
          <path
            className="sw-wave sw-wave-2"
            stroke="url(#swBlueB)"
            strokeOpacity="0.45"
            strokeWidth="1.6"
            d="M-400,380
               C-240,320 -80,440 80,380
               S400,320 560,380
               S880,440 1040,380
               S1360,320 1520,380
               S1840,440 2000,380
               S2320,320 2480,380"
          />
          <path
            className="sw-wave sw-wave-3"
            stroke="url(#swBlueC)"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            d="M-400,430
               C-220,360 -40,500 140,430
               S500,360 680,430
               S1040,500 1220,430
               S1580,360 1760,430
               S2120,500 2300,430
               S2660,360 2840,430"
          />
          <path
            className="sw-wave sw-wave-4"
            stroke="url(#swBlueA)"
            strokeOpacity="0.25"
            strokeWidth="1"
            d="M-400,260
               C-260,220 -120,310 40,260
               S320,220 480,260
               S760,310 920,260
               S1200,220 1360,260
               S1640,310 1800,260
               S2080,220 2240,260"
          />
        </g>
      </svg>

      <style>{`
        .sw-wave {
          transform-origin: center;
          will-change: transform;
        }
        /* Horizontal current — different speeds & directions = parallax sea */
        .sw-wave-1 { animation: sw-flow-left  22s linear infinite, sw-swell 7s ease-in-out infinite; }
        .sw-wave-2 { animation: sw-flow-right 28s linear infinite, sw-swell 9s ease-in-out infinite; }
        .sw-wave-3 { animation: sw-flow-left  36s linear infinite, sw-swell 11s ease-in-out infinite; }
        .sw-wave-4 { animation: sw-flow-right 18s linear infinite, sw-swell 6s ease-in-out infinite; }

        @keyframes sw-flow-left {
          0%   { transform: translateX(0)     translateY(0); }
          100% { transform: translateX(-400px) translateY(0); }
        }
        @keyframes sw-flow-right {
          0%   { transform: translateX(-400px) translateY(0); }
          100% { transform: translateX(0)      translateY(0); }
        }
        /* gentle swell rides on top of the horizontal flow */
        @keyframes sw-swell {
          0%, 100% { translate: 0 0; }
          50%      { translate: 0 -10px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sw-wave { animation: none; }
        }
      `}</style>
    </div>
  );
}
