"use client";

export function ThanetMap() {
  return (
    <div className="w-full" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
      <style>{`
        @keyframes tmr-rise {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes tmr-bubble {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50%       { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes tmr-spread {
          0%   { stroke-dashoffset: 600; opacity: 0; }
          25%  { opacity: 0.65; }
          100% { stroke-dashoffset: 0; opacity: 0.45; }
        }
        @keyframes tmr-glow {
          0%, 100% { opacity: 0.2; }
          50%       { opacity: 0.5; }
        }
        .tmr-a1    { animation: tmr-rise 3.8s ease-in-out infinite 0.0s; }
        .tmr-a2    { animation: tmr-rise 3.4s ease-in-out infinite 0.7s; }
        .tmr-a3    { animation: tmr-rise 4.0s ease-in-out infinite 1.4s; }
        .tmr-a4    { animation: tmr-rise 3.6s ease-in-out infinite 2.0s; }
        .tmr-a5    { animation: tmr-rise 3.2s ease-in-out infinite 2.6s; }
        .tmr-b1 { animation: tmr-bubble 2.2s ease-in-out infinite 0.0s; }
        .tmr-b2 { animation: tmr-bubble 2.8s ease-in-out infinite 0.5s; }
        .tmr-b3 { animation: tmr-bubble 2.0s ease-in-out infinite 1.0s; }
        .tmr-b4 { animation: tmr-bubble 3.1s ease-in-out infinite 0.3s; }
        .tmr-b5 { animation: tmr-bubble 2.5s ease-in-out infinite 1.5s; }
        .tmr-sp  { animation: tmr-spread 2.8s ease-out forwards; stroke-dasharray: 600; stroke-dashoffset: 600; }
        .tmr-sp2 { animation-delay: 0.3s; }
        .tmr-sp3 { animation-delay: 0.6s; }
        .tmr-sp4 { animation-delay: 0.9s; }
        .tmr-sp5 { animation-delay: 1.2s; }
        .tmr-glow { animation: tmr-glow 4s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox="0 0 620 460"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", minWidth: 340, width: "100%", borderRadius: 16, border: "0.5px solid #D4C0A0", background: "#E8F4F8" }}
        aria-label="Map of Thanet showing mama's sourdough spreading across five stockist locations"
      >
        <defs>
          <radialGradient id="tmr-lg" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#EDE4CC"/>
            <stop offset="100%" stopColor="#D8C8A8"/>
          </radialGradient>
          <radialGradient id="tmr-ca" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#EDB050"/>
            <stop offset="65%" stopColor="#C4852A"/>
            <stop offset="100%" stopColor="#8A5010"/>
          </radialGradient>
          <radialGradient id="tmr-cb" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#D49060"/>
            <stop offset="65%" stopColor="#8B6347"/>
            <stop offset="100%" stopColor="#5A3820"/>
          </radialGradient>
          <radialGradient id="tmr-cg" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#B8B870"/>
            <stop offset="65%" stopColor="#6A7A48"/>
            <stop offset="100%" stopColor="#3A5028"/>
          </radialGradient>
          <radialGradient id="tmr-cd" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#806040"/>
            <stop offset="65%" stopColor="#4A3020"/>
            <stop offset="100%" stopColor="#2C1A0E"/>
          </radialGradient>
          <radialGradient id="tmr-blob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4852A" stopOpacity="0.22"/>
            <stop offset="100%" stopColor="#C4852A" stopOpacity="0"/>
          </radialGradient>
          <filter id="tmr-shadow" x="-5%" y="-5%" width="115%" height="125%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#8B6347" floodOpacity="0.18"/>
          </filter>
        </defs>

        {/* Sea background */}
        <rect width="620" height="460" fill="#E8F4F8"/>

        {/* Sea texture lines */}
        {[55,105,160,215,390,428,445].map((y,i) => (
          <line key={i} x1="0" y1={y} x2="620" y2={y} stroke="#C4DCE8" strokeWidth="0.6" opacity="0.65"/>
        ))}

        {/* Sea labels */}
        <text x="28"  y="48"  fontFamily="Georgia,serif" fontSize="11" fill="#8AAFC0" letterSpacing="3"   fontStyle="italic">north sea</text>
        <text x="28"  y="440" fontFamily="Georgia,serif" fontSize="10" fill="#8AAFC0" letterSpacing="2.5" fontStyle="italic">kent</text>
        <text x="592" y="400" fontFamily="Georgia,serif" fontSize="9"  fill="#8AAFC0" letterSpacing="1.5" fontStyle="italic" textAnchor="middle" transform="rotate(-90,592,400)">english channel</text>

        {/*
          REALISTIC THANET OUTLINE — clockwise from SW (Birchington/Wantsum edge)
          North coast:  Birchington → Westgate → Westbrook → Margate → Cliftonville → North Foreland
          East coast:   North Foreland → Kingsgate Bay → Broadstairs → Ramsgate
          South coast:  Ramsgate → Pegwell Bay → Richborough/Stour
          West edge:    Stour north to Birchington
        */}
        <path
          d="
            M 112,256
            C 106,226 108,196 122,172
            C 136,148 158,132 192,124
            C 224,116 258,110 294,104
            C 326,98  358,96  396,100
            C 432,104 470,118 506,146
            C 530,162 544,186 540,216
            C 534,246 518,272 500,298
            C 482,322 460,346 438,368
            C 418,388 394,406 364,418
            C 334,430 300,434 266,430
            C 238,426 210,416 188,402
            C 168,388 152,368 142,344
            C 132,320 130,292 132,268
            C 134,254 142,248 112,256
            Z
          "
          fill="url(#tmr-lg)"
          stroke="#B4A07A"
          strokeWidth="1.8"
          filter="url(#tmr-shadow)"
        />

        {/* East-coast cliff detail */}
        <path d="M 534,220 Q 530,226 526,230" stroke="#C0A070" strokeWidth="1.2" fill="none" opacity="0.55"/>
        <path d="M 524,244 Q 520,250 516,254" stroke="#C0A070" strokeWidth="1.2" fill="none" opacity="0.5"/>
        <path d="M 510,268 Q 506,274 502,278" stroke="#C0A070" strokeWidth="1.2" fill="none" opacity="0.45"/>
        <path d="M 496,292 Q 492,298 488,302" stroke="#C0A070" strokeWidth="1.2" fill="none" opacity="0.4"/>

        {/* Subtle town location dots */}
        <circle cx="192" cy="200" r="2.5" fill="#B4A07A" opacity="0.5"/>
        <circle cx="248" cy="188" r="2.5" fill="#B4A07A" opacity="0.5"/>
        <circle cx="320" cy="178" r="2.5" fill="#B4A07A" opacity="0.5"/>
        <circle cx="410" cy="168" r="2.5" fill="#B4A07A" opacity="0.5"/>
        <circle cx="500" cy="305" r="2.5" fill="#B4A07A" opacity="0.5"/>
        <circle cx="420" cy="352" r="2.5" fill="#B4A07A" opacity="0.5"/>

        {/* Flour-dust flecks */}
        {[[240,268,3],[318,238,2.5],[374,272,2],[432,248,2.5],[278,318,2],[358,328,2],[316,188,2],[448,308,2]].map(([cx,cy,r],i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#E4D4B0" opacity="0.45"/>
        ))}

        {/* Home-bakery warmth glow */}
        <ellipse className="tmr-glow" cx="440" cy="356" rx="135" ry="115" fill="url(#tmr-blob)"/>

        {/* Spread paths from home kitchen */}
        <path className="tmr-sp"           d="M 440,356 Q 325,308 236,202" fill="none" stroke="#C4852A" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1,10"/>
        <path className="tmr-sp tmr-sp2"   d="M 440,356 Q 300,295 178,210" fill="none" stroke="#C4852A" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1,10"/>
        <path className="tmr-sp tmr-sp3"   d="M 440,356 Q 398,258 410,168" fill="none" stroke="#C4852A" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1,10"/>
        <path className="tmr-sp tmr-sp4"   d="M 440,356 Q 464,326 494,274" fill="none" stroke="#C4852A" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="1,10"/>
        <path className="tmr-sp tmr-sp5"   d="M 440,356 Q 426,352 412,348" fill="none" stroke="#C4852A" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1,7"/>

        {/* ── LOAVES — outer <g> positions in SVG space, inner <g> holds CSS animation ── */}

        {/* SHAHLA'S CAKES — Westbrook · label RIGHT (away from Crumb & Deli) */}
        <g transform="translate(236,194)">
          <g className="tmr-a1">
            <ellipse cx="0" cy="14" rx="26" ry="8"  fill="#6B3A1A" opacity="0.14"/>
            <ellipse cx="0" cy="7"  rx="26" ry="10" fill="#7A4A2A"/>
            <path d="M-24,7 Q-24,-16 0,-20 Q24,-16 24,7 Z" fill="url(#tmr-cb)"/>
            <ellipse cx="0" cy="-2" rx="18" ry="8" fill="#D4A080" opacity="0.22"/>
            <path d="M-7,-7 Q0,-12 7,-7"  stroke="#5A3010" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-4,-1 Q0,-6  4,-1"  stroke="#5A3010" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b1" cx="-12" cy="-22" r="3.5" fill="#8B6347" opacity="0.6"/>
            <circle className="tmr-b2" cx="5"   cy="-28" r="2.5" fill="#A07850" opacity="0.5"/>
            <circle className="tmr-b3" cx="14"  cy="-19" r="2"   fill="#8B6347" opacity="0.5"/>
            {/* label anchored RIGHT so it doesn't overlap Crumb & Deli to the left */}
            <rect x="6" y="17" width="88" height="26" rx="6" fill="white" opacity="0.95"/>
            <text x="50" y="29" fontFamily="Georgia,serif" fontSize="10" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Shahla&apos;s Cakes</text>
            <text x="50" y="40" fontFamily="monospace"    fontSize="7"  fill="#8B6347" textAnchor="middle" letterSpacing="0.3">Westbrook · Fridays</text>
          </g>
        </g>

        {/* CRUMB & DELI — Westgate · label LEFT (into sea, away from Shahla's) */}
        <g transform="translate(160,206)">
          <g className="tmr-a2">
            <ellipse cx="0" cy="14" rx="26" ry="8"  fill="#8B4A10" opacity="0.14"/>
            <ellipse cx="0" cy="7"  rx="26" ry="10" fill="#9A5C20"/>
            <path d="M-24,7 Q-24,-16 0,-20 Q24,-16 24,7 Z" fill="url(#tmr-ca)"/>
            <ellipse cx="0" cy="-2" rx="18" ry="8" fill="#FFCA6A" opacity="0.22"/>
            <path d="M-7,-7 Q0,-12 7,-7"  stroke="#7A4010" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-4,-1 Q0,-6  4,-1"  stroke="#7A4010" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b4" cx="-13" cy="-22" r="3.5" fill="#C4852A" opacity="0.6"/>
            <circle className="tmr-b5" cx="5"   cy="-28" r="2.5" fill="#D4956A" opacity="0.5"/>
            <circle className="tmr-b1" cx="13"  cy="-19" r="2"   fill="#C4852A" opacity="0.5"/>
            {/* label anchored LEFT, floats into sea — standard map practice */}
            <rect x="-88" y="17" width="84" height="26" rx="6" fill="white" opacity="0.95"/>
            <text x="-46" y="29" fontFamily="Georgia,serif" fontSize="10" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Crumb &amp; Deli</text>
            <text x="-46" y="40" fontFamily="monospace"    fontSize="7"  fill="#C4852A" textAnchor="middle" letterSpacing="0.3">Westgate · Wed &amp; Sat</text>
          </g>
        </g>

        {/* GRAIN GROCER — Cliftonville */}
        <g transform="translate(408,162)">
          <g className="tmr-a3">
            <ellipse cx="0" cy="14" rx="28" ry="8"  fill="#2A3A20" opacity="0.14"/>
            <ellipse cx="0" cy="7"  rx="28" ry="10" fill="#3A5030"/>
            <path d="M-26,7 Q-26,-18 0,-22 Q26,-18 26,7 Z" fill="url(#tmr-cg)"/>
            <ellipse cx="0" cy="-3" rx="20" ry="8" fill="#B0C080" opacity="0.22"/>
            <path d="M-8,-8 Q0,-14 8,-8" stroke="#2A3818" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-5,-2 Q0,-7  5,-2" stroke="#2A3818" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b2" cx="-14" cy="-24" r="3.5" fill="#4A6741" opacity="0.6"/>
            <circle className="tmr-b3" cx="4"   cy="-31" r="2.5" fill="#6A8050" opacity="0.5"/>
            <circle className="tmr-b5" cx="15"  cy="-22" r="2.5" fill="#4A6741" opacity="0.5"/>
            <rect x="-50" y="17" width="100" height="26" rx="6" fill="white" opacity="0.95"/>
            <text x="0" y="29" fontFamily="Georgia,serif" fontSize="10" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Grain Grocer</text>
            <text x="0" y="40" fontFamily="monospace"    fontSize="7"  fill="#4A6741" textAnchor="middle" letterSpacing="0.3">Cliftonville · Thu–Sat</text>
          </g>
        </g>

        {/* FLOWERS & FELICITIES — Broadstairs · label LEFT, name on two lines */}
        <g transform="translate(496,270)">
          <g className="tmr-a4">
            <ellipse cx="0" cy="14" rx="28" ry="8"  fill="#2A3A20" opacity="0.14"/>
            <ellipse cx="0" cy="7"  rx="28" ry="10" fill="#3A5030"/>
            <path d="M-26,7 Q-26,-18 0,-22 Q26,-18 26,7 Z" fill="url(#tmr-cg)"/>
            <ellipse cx="0" cy="-3" rx="20" ry="8" fill="#B0C080" opacity="0.22"/>
            <path d="M-8,-8 Q0,-14 8,-8" stroke="#2A3818" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-5,-2 Q0,-7  5,-2" stroke="#2A3818" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b3" cx="-14" cy="-25" r="3.5" fill="#4A6741" opacity="0.6"/>
            <circle className="tmr-b4" cx="4"   cy="-32" r="2.5" fill="#6A8050" opacity="0.5"/>
            <circle className="tmr-b1" cx="16"  cy="-23" r="2.5" fill="#4A6741" opacity="0.5"/>
            {/* label LEFT, name wraps to 2 lines, 3-line box */}
            <rect x="-106" y="5" width="100" height="36" rx="6" fill="white" opacity="0.95"/>
            <text x="-56" y="18" fontFamily="Georgia,serif" fontSize="10" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Flowers &amp;</text>
            <text x="-56" y="29" fontFamily="Georgia,serif" fontSize="10" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Felicities</text>
            <text x="-56" y="38" fontFamily="monospace"    fontSize="7"  fill="#4A6741" textAnchor="middle" letterSpacing="0.3">Broadstairs · Thursdays</text>
          </g>
        </g>

        {/* UNION CAFE — Ramsgate */}
        <g transform="translate(410,348)">
          <g className="tmr-a5">
            <ellipse cx="0" cy="12" rx="24" ry="7"  fill="#1A0C04" opacity="0.17"/>
            <ellipse cx="0" cy="6"  rx="24" ry="9"  fill="#2C1A0E"/>
            <path d="M-22,6 Q-22,-14 0,-18 Q22,-14 22,6 Z" fill="url(#tmr-cd)"/>
            <ellipse cx="0" cy="-2" rx="17" ry="7" fill="#906040" opacity="0.28"/>
            <path d="M-7,-6 Q0,-11 7,-6" stroke="#1A0804" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-4,-1 Q0,-5  4,-1" stroke="#1A0804" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b5" cx="-11" cy="-20" r="3"   fill="#6B4A2A" opacity="0.6"/>
            <circle className="tmr-b2" cx="6"   cy="-26" r="2.5" fill="#8B5A30" opacity="0.5"/>
            <rect x="-46" y="13" width="92" height="26" rx="6" fill="white" opacity="0.95"/>
            <text x="0" y="25" fontFamily="Georgia,serif" fontSize="10" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Union Cafe</text>
            <text x="0" y="36" fontFamily="monospace"    fontSize="7"  fill="#6B4A2A" textAnchor="middle" letterSpacing="0.3">Ramsgate · Tues–Sat</text>
          </g>
        </g>

        {/* HOME KITCHEN — Stirling Way, Ramsgate (gold star pin, spread lines radiate from here) */}
        <g transform="translate(440,356)">
          <circle cx="0" cy="0" r="11" fill="#C4852A" opacity="0.85"/>
          <circle cx="0" cy="0" r="7.5" fill="#F0C060"/>
          <text x="0" y="4" fontFamily="sans-serif" fontSize="10" fill="#2C1A0E" textAnchor="middle">★</text>
          <text x="0" y="-16" fontFamily="Georgia,serif" fontSize="8" fill="#2C1A0E" textAnchor="middle" fontStyle="italic" opacity="0.85">mama&apos;s kitchen</text>
          <text x="0" y="-6"  fontFamily="monospace"    fontSize="6" fill="#8B6347" textAnchor="middle" letterSpacing="0.8">STIRLING WAY</text>
        </g>

        {/* Title badge */}
        <rect x="18" y="16" width="188" height="56" rx="10" fill="#2C1A0E" opacity="0.90"/>
        <text x="30" y="36"  fontFamily="Georgia,serif" fontSize="15" fill="#FAF6F0" fontStyle="italic">mama&apos;s sourdough</text>
        <text x="30" y="50"  fontFamily="monospace"    fontSize="9"  fill="#C4852A" letterSpacing="1.5">RISING ACROSS THANET</text>
        <line x1="30" y1="56" x2="196" y2="56" stroke="#C4852A" strokeWidth="0.5"/>
        <text x="30" y="65"  fontFamily="monospace"    fontSize="8"  fill="#8B6347" letterSpacing="0.5">5 stockists · baked with love ★</text>

        {/* Legend */}
        <circle cx="26"  cy="448" r="5"  fill="#C4852A" opacity="0.7"/>
        <text x="36"  y="452" fontFamily="monospace" fontSize="8" fill="#8B7050">bubbles = fresh bread delivered that day</text>
      </svg>
    </div>
  );
}
