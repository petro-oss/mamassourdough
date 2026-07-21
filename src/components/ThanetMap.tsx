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
          0%, 100% { transform: translateY(0px); opacity: 0.65; }
          50%       { transform: translateY(-7px); opacity: 1; }
        }
        @keyframes tmr-spread {
          0%   { stroke-dashoffset: 500; opacity: 0; }
          30%  { opacity: 0.7; }
          100% { stroke-dashoffset: 0; opacity: 0.5; }
        }
        @keyframes tmr-glow {
          0%, 100% { opacity: 0.25; }
          50%       { opacity: 0.55; }
        }
        .tmr-anim-1    { animation: tmr-rise 3.8s ease-in-out infinite 0.0s; }
        .tmr-anim-2    { animation: tmr-rise 3.4s ease-in-out infinite 0.7s; }
        .tmr-anim-3    { animation: tmr-rise 4.0s ease-in-out infinite 1.4s; }
        .tmr-anim-4    { animation: tmr-rise 3.6s ease-in-out infinite 2.0s; }
        .tmr-anim-5    { animation: tmr-rise 3.2s ease-in-out infinite 2.6s; }
        .tmr-anim-home { animation: tmr-rise 4.2s ease-in-out infinite 0.3s; }
        .tmr-b1 { animation: tmr-bubble 2.2s ease-in-out infinite 0.0s; }
        .tmr-b2 { animation: tmr-bubble 2.8s ease-in-out infinite 0.4s; }
        .tmr-b3 { animation: tmr-bubble 2.0s ease-in-out infinite 0.9s; }
        .tmr-b4 { animation: tmr-bubble 3.1s ease-in-out infinite 0.2s; }
        .tmr-b5 { animation: tmr-bubble 2.5s ease-in-out infinite 1.2s; }
        .tmr-spread { animation: tmr-spread 2.8s ease-out forwards; stroke-dasharray: 500; stroke-dashoffset: 500; }
        .tmr-sp2 { animation-delay: 0.3s; }
        .tmr-sp3 { animation-delay: 0.6s; }
        .tmr-sp4 { animation-delay: 0.9s; }
        .tmr-sp5 { animation-delay: 1.2s; }
        .tmr-glow { animation: tmr-glow 4s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox="0 0 620 460"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", minWidth: 340, width: "100%", borderRadius: 16, border: "0.5px solid #D4C0A0", background: "#FBF5EA" }}
        aria-label="Mama's Sourdough rising and spreading across Thanet — five stockist locations shown as bread loaves"
      >
        <defs>
          <radialGradient id="tmr-landGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#F0E6D2"/>
            <stop offset="100%" stopColor="#E4D5BB"/>
          </radialGradient>
          <radialGradient id="tmr-crustAmber" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#EDB050"/>
            <stop offset="65%" stopColor="#C4852A"/>
            <stop offset="100%" stopColor="#8A5010"/>
          </radialGradient>
          <radialGradient id="tmr-crustBrown" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#D49060"/>
            <stop offset="65%" stopColor="#8B6347"/>
            <stop offset="100%" stopColor="#5A3820"/>
          </radialGradient>
          <radialGradient id="tmr-crustGreen" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#B8B870"/>
            <stop offset="65%" stopColor="#6A7A48"/>
            <stop offset="100%" stopColor="#3A5028"/>
          </radialGradient>
          <radialGradient id="tmr-crustDark" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#806040"/>
            <stop offset="65%" stopColor="#4A3020"/>
            <stop offset="100%" stopColor="#2C1A0E"/>
          </radialGradient>
          <radialGradient id="tmr-crustHome" cx="38%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#F0C060"/>
            <stop offset="55%" stopColor="#C4852A"/>
            <stop offset="100%" stopColor="#6A3808"/>
          </radialGradient>
          <radialGradient id="tmr-spreadBlob" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C4852A" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#C4852A" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Sea */}
        <rect width="620" height="460" fill="#E8F2F8"/>
        <line x1="0" y1="90"  x2="620" y2="90"  stroke="#D0E4F0" strokeWidth="0.7"/>
        <line x1="0" y1="150" x2="620" y2="150" stroke="#D0E4F0" strokeWidth="0.7"/>
        <line x1="0" y1="380" x2="620" y2="380" stroke="#D0E4F0" strokeWidth="0.7"/>
        <line x1="0" y1="430" x2="620" y2="430" stroke="#D0E4F0" strokeWidth="0.7"/>
        <text x="55"  y="58"  fontFamily="Georgia,serif" fontSize="11" fill="#A8C8D8" letterSpacing="4" fontStyle="italic">north sea</text>
        <text x="35"  y="435" fontFamily="Georgia,serif" fontSize="11" fill="#A8C8D8" letterSpacing="3" fontStyle="italic">kent</text>

        {/* Thanet landmass */}
        <path
          d="M 96,218 C 92,192 106,168 126,156 C 148,142 168,126 194,110
             C 218,96 248,72 286,62 C 312,54 336,50 368,58
             C 394,65 418,78 442,98 C 466,118 484,142 496,168
             C 508,192 514,212 516,234 C 520,256 518,276 514,294
             C 510,312 502,326 490,342 C 476,360 458,376 434,386
             C 408,396 372,400 338,398 C 302,396 262,390 226,380
             C 190,370 156,352 128,330 C 102,310 88,282 84,256
             C 80,236 82,224 96,218 Z"
          fill="url(#tmr-landGrad)" stroke="#C8B090" strokeWidth="1.5"
        />

        {/* Flour dust */}
        {[[210,210,3],[330,160,2],[290,290,2.5],[400,230,2],[170,270,2],[440,290,3],[250,330,2],[360,310,2]].map(([cx,cy,r],i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#EDE0C4" opacity="0.55"/>
        ))}

        {/* Glow from home bakery */}
        <ellipse className="tmr-glow" cx="472" cy="324" rx="150" ry="130" fill="url(#tmr-spreadBlob)"/>

        {/* Spread paths */}
        <path className="tmr-spread"      d="M 472,324 Q 330,270 148,178" fill="none" stroke="#C4852A" strokeWidth="2.8" strokeLinecap="round" strokeDasharray="1,11"/>
        <path className="tmr-spread tmr-sp2" d="M 472,324 Q 370,248 210,130" fill="none" stroke="#C4852A" strokeWidth="2.8" strokeLinecap="round" strokeDasharray="1,11"/>
        <path className="tmr-spread tmr-sp3" d="M 472,324 Q 438,214 340,88"  fill="none" stroke="#C4852A" strokeWidth="2.8" strokeLinecap="round" strokeDasharray="1,11"/>
        <path className="tmr-spread tmr-sp4" d="M 472,324 Q 478,282 494,232" fill="none" stroke="#C4852A" strokeWidth="2.8" strokeLinecap="round" strokeDasharray="1,11"/>
        <path className="tmr-spread tmr-sp5" d="M 472,324 Q 468,316 462,306" fill="none" stroke="#C4852A" strokeWidth="2"   strokeLinecap="round" strokeDasharray="1,8"/>

        {/* ── BREAD LOAVES — outer <g> = SVG positioning, inner <g> = CSS animation ── */}

        {/* HOME BAKERY — Stirling Way */}
        <g transform="translate(472,322)">
          <g className="tmr-anim-home">
            <ellipse cx="0" cy="16" rx="34" ry="10" fill="#7A3808" opacity="0.18"/>
            <ellipse cx="0" cy="8"  rx="34" ry="13" fill="#8A4A10"/>
            <path d="M-32,8 Q-32,-24 0,-28 Q32,-24 32,8 Z" fill="url(#tmr-crustHome)"/>
            <ellipse cx="0" cy="-6" rx="26" ry="11" fill="#F0C870" opacity="0.28"/>
            <path d="M-9,-12 Q0,-18 9,-12" stroke="#8A4808" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
            <path d="M-6,-4  Q0,-10 6,-4"  stroke="#8A4808" strokeWidth="1"   fill="none" strokeLinecap="round"/>
            <text x="0" y="5" fontFamily="sans-serif" fontSize="13" fill="white" textAnchor="middle" opacity="0.85">🏠</text>
            <rect x="-52" y="22" width="104" height="38" rx="8" fill="#2C1A0E" opacity="0.88"/>
            <text x="0" y="37"  fontFamily="Georgia,serif" fontSize="12" fill="#FAF6F0" textAnchor="middle" fontStyle="italic">mama&apos;s kitchen</text>
            <text x="0" y="52"  fontFamily="monospace"    fontSize="9"  fill="#C4852A" textAnchor="middle" letterSpacing="1.2">STIRLING WAY</text>
          </g>
        </g>

        {/* CRUMB & DELI — Westgate */}
        <g transform="translate(148,178)">
          <g className="tmr-anim-1">
            <ellipse cx="0" cy="14" rx="28" ry="8"  fill="#8B4A10" opacity="0.16"/>
            <ellipse cx="0" cy="7"  rx="28" ry="11" fill="#9A5C20"/>
            <path d="M-26,7 Q-26,-18 0,-22 Q26,-18 26,7 Z" fill="url(#tmr-crustAmber)"/>
            <ellipse cx="0" cy="-4" rx="20" ry="9"  fill="#FFCA6A" opacity="0.28"/>
            <path d="M-8,-9  Q0,-15 8,-9"  stroke="#7A4010" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-5,-3  Q0,-8  5,-3"  stroke="#7A4010" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b1" cx="-15" cy="-26" r="4"   fill="#C4852A" opacity="0.55"/>
            <circle className="tmr-b2" cx="2"   cy="-33" r="3"   fill="#D4956A" opacity="0.45"/>
            <circle className="tmr-b3" cx="14"  cy="-24" r="2.5" fill="#C4852A" opacity="0.5"/>
            <rect x="-46" y="20" width="92" height="42" rx="8" fill="white" opacity="0.93"/>
            <text x="0" y="36" fontFamily="Georgia,serif" fontSize="12" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Crumb &amp; Deli</text>
            <text x="0" y="49" fontFamily="monospace"    fontSize="9"  fill="#C4852A" textAnchor="middle" letterSpacing="0.8">Westgate · Wed &amp; Sat</text>
            <text x="0" y="58" fontFamily="monospace"    fontSize="8"  fill="#8B6347" textAnchor="middle">Mixed loaves · Focaccia · Rye</text>
          </g>
        </g>

        {/* SHAHLA'S CAKES — Westbrook */}
        <g transform="translate(210,130)">
          <g className="tmr-anim-2">
            <ellipse cx="0" cy="14" rx="26" ry="8"  fill="#6B3A1A" opacity="0.16"/>
            <ellipse cx="0" cy="7"  rx="26" ry="10" fill="#7A4A2A"/>
            <path d="M-24,7 Q-24,-16 0,-20 Q24,-16 24,7 Z" fill="url(#tmr-crustBrown)"/>
            <ellipse cx="0" cy="-3" rx="18" ry="8"  fill="#D4A080" opacity="0.28"/>
            <path d="M-7,-8  Q0,-13 7,-8"  stroke="#5A3010" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-4,-2  Q0,-7  4,-2"  stroke="#5A3010" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b4" cx="-12" cy="-22" r="3.5" fill="#8B6347" opacity="0.55"/>
            <circle className="tmr-b5" cx="6"   cy="-29" r="2.5" fill="#A07850" opacity="0.45"/>
            <circle className="tmr-b1" cx="15"  cy="-20" r="2"   fill="#8B6347" opacity="0.5"/>
            <rect x="-46" y="18" width="92" height="42" rx="8" fill="white" opacity="0.93"/>
            <text x="0" y="34" fontFamily="Georgia,serif" fontSize="12" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Shahla&apos;s Cakes</text>
            <text x="0" y="47" fontFamily="monospace"    fontSize="9"  fill="#8B6347" textAnchor="middle" letterSpacing="0.8">Westbrook · Fridays</text>
            <text x="0" y="56" fontFamily="monospace"    fontSize="8"  fill="#8B6347" textAnchor="middle">White sourdough · Focaccia</text>
          </g>
        </g>

        {/* GRAIN GROCER — Cliftonville */}
        <g transform="translate(340,88)">
          <g className="tmr-anim-3">
            <ellipse cx="0" cy="14" rx="28" ry="8"  fill="#2A3A20" opacity="0.16"/>
            <ellipse cx="0" cy="7"  rx="28" ry="11" fill="#3A5030"/>
            <path d="M-26,7 Q-26,-18 0,-22 Q26,-18 26,7 Z" fill="url(#tmr-crustGreen)"/>
            <ellipse cx="0" cy="-4" rx="20" ry="9"  fill="#B0C080" opacity="0.28"/>
            <path d="M-8,-9  Q0,-15 8,-9"  stroke="#2A3818" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-5,-3  Q0,-8  5,-3"  stroke="#2A3818" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b2" cx="-14" cy="-24" r="3.5" fill="#4A6741" opacity="0.55"/>
            <circle className="tmr-b3" cx="4"   cy="-31" r="2.5" fill="#6A8050" opacity="0.45"/>
            <circle className="tmr-b5" cx="15"  cy="-22" r="2.5" fill="#4A6741" opacity="0.5"/>
            <rect x="-48" y="20" width="96" height="42" rx="8" fill="white" opacity="0.93"/>
            <text x="0" y="36" fontFamily="Georgia,serif" fontSize="12" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Grain Grocer</text>
            <text x="0" y="49" fontFamily="monospace"    fontSize="9"  fill="#4A6741" textAnchor="middle" letterSpacing="0.8">Cliftonville · Thurs–Sat</text>
            <text x="0" y="58" fontFamily="monospace"    fontSize="8"  fill="#8B6347" textAnchor="middle">Wholemeal sourdough</text>
          </g>
        </g>

        {/* FLOWERS & FELICITIES — Broadstairs */}
        <g transform="translate(494,232)">
          <g className="tmr-anim-4">
            <ellipse cx="0" cy="14" rx="30" ry="9"  fill="#2A3A20" opacity="0.16"/>
            <ellipse cx="0" cy="7"  rx="30" ry="12" fill="#3A5030"/>
            <path d="M-28,7 Q-28,-20 0,-24 Q28,-20 28,7 Z" fill="url(#tmr-crustGreen)"/>
            <ellipse cx="0" cy="-5" rx="22" ry="10" fill="#B0C080" opacity="0.28"/>
            <path d="M-9,-10 Q0,-17 9,-10" stroke="#2A3818" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path d="M-5,-3  Q0,-9  5,-3"  stroke="#2A3818" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b4" cx="-16" cy="-27" r="4"   fill="#4A6741" opacity="0.55"/>
            <circle className="tmr-b1" cx="4"   cy="-34" r="3"   fill="#6A8050" opacity="0.45"/>
            <circle className="tmr-b2" cx="17"  cy="-24" r="2.5" fill="#4A6741" opacity="0.5"/>
            <rect x="-56" y="20" width="112" height="42" rx="8" fill="white" opacity="0.93"/>
            <text x="0" y="35" fontFamily="Georgia,serif" fontSize="11" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Flowers &amp; Felicities</text>
            <text x="0" y="48" fontFamily="monospace"    fontSize="9"  fill="#4A6741" textAnchor="middle" letterSpacing="0.8">Broadstairs · Thursdays</text>
            <text x="0" y="57" fontFamily="monospace"    fontSize="8"  fill="#8B6347" textAnchor="middle">White &amp; wholemeal sourdough</text>
          </g>
        </g>

        {/* UNION CAFE — Ramsgate */}
        <g transform="translate(462,306)">
          <g className="tmr-anim-5">
            <ellipse cx="0" cy="12" rx="24" ry="7"  fill="#1A0C04" opacity="0.2"/>
            <ellipse cx="0" cy="6"  rx="24" ry="10" fill="#2C1A0E"/>
            <path d="M-22,6 Q-22,-15 0,-18 Q22,-15 22,6 Z" fill="url(#tmr-crustDark)"/>
            <ellipse cx="0" cy="-3" rx="17" ry="7"  fill="#906040" opacity="0.35"/>
            <path d="M-7,-7 Q0,-12 7,-7" stroke="#1A0804" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            <path d="M-4,-1 Q0,-6  4,-1" stroke="#1A0804" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <circle className="tmr-b3" cx="-12" cy="-20" r="3"   fill="#6B4A2A" opacity="0.55"/>
            <circle className="tmr-b5" cx="8"   cy="-26" r="2.5" fill="#8B5A30" opacity="0.5"/>
            <rect x="-44" y="16" width="88" height="42" rx="8" fill="white" opacity="0.93"/>
            <text x="0" y="31" fontFamily="Georgia,serif" fontSize="12" fill="#2C1A0E" textAnchor="middle" fontStyle="italic">Union Cafe</text>
            <text x="0" y="44" fontFamily="monospace"    fontSize="9"  fill="#6B4A2A" textAnchor="middle" letterSpacing="0.8">Ramsgate · Tues–Sat</text>
            <text x="0" y="53" fontFamily="monospace"    fontSize="8"  fill="#8B6347" textAnchor="middle">Wholemeal · Focaccia</text>
          </g>
        </g>

        {/* Title badge */}
        <rect x="20" y="18" width="186" height="54" rx="10" fill="#2C1A0E" opacity="0.91"/>
        <text x="32" y="38"  fontFamily="Georgia,serif" fontSize="15" fill="#FAF6F0" fontStyle="italic">mama&apos;s sourdough</text>
        <text x="32" y="52"  fontFamily="monospace"    fontSize="9"  fill="#C4852A" letterSpacing="1.5">RISING ACROSS THANET</text>
        <line x1="32" y1="57" x2="194" y2="57" stroke="#C4852A" strokeWidth="0.5"/>
        <text x="32" y="66"  fontFamily="monospace"    fontSize="8"  fill="#8B6347" letterSpacing="0.5">5 stockists · baked with love</text>

        {/* Legend */}
        <circle cx="30" cy="447" r="5" fill="#C4852A" opacity="0.65"/>
        <text x="40" y="451" fontFamily="monospace" fontSize="9" fill="#8B6347">bubbles rising = fresh bread delivered that day</text>
      </svg>
    </div>
  );
}
