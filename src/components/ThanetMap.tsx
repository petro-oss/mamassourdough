const shops = [
  {
    x: 138, y: 158,
    name: "Crumb & Deli",
    area: "Westgate",
    color: "#C4852A",
    labelAnchor: "start" as const,
    lx: 154, ly: 154, ly2: 167,
  },
  {
    x: 200, y: 112,
    name: "Shahla's Cakes",
    area: "Westbrook",
    color: "#8B6347",
    labelAnchor: "middle" as const,
    lx: 200, ly: 130, ly2: 143,
  },
  {
    x: 328, y: 72,
    name: "Grain Grocer",
    area: "Cliftonville",
    color: "#4A6741",
    labelAnchor: "middle" as const,
    lx: 328, ly: 90, ly2: 103,
  },
  {
    x: 478, y: 212,
    name: "Flowers & Felicities",
    area: "Broadstairs",
    color: "#4A6741",
    labelAnchor: "end" as const,
    lx: 462, ly: 208, ly2: 221,
  },
  {
    x: 462, y: 300,
    name: "Union Cafe",
    area: "Ramsgate",
    color: "#6B4A2A",
    labelAnchor: "end" as const,
    lx: 446, ly: 296, ly2: 309,
  },
];

// Approximate Thanet coastline path
const COAST = `
  M 82,202
  C 86,178 102,158 122,148
  C 143,138 162,122 186,108
  C 208,94 236,72 272,62
  C 296,55 318,52 348,58
  C 372,63 396,72 420,90
  C 444,108 462,130 473,156
  C 483,178 490,196 494,216
  C 498,234 498,252 496,270
  C 494,288 488,300 478,316
  C 466,334 450,350 428,360
  C 404,370 370,374 338,374
  C 304,374 264,371 228,364
  C 192,357 160,342 132,322
  C 106,304 86,280 80,256
  C 74,235 76,216 82,202 Z
`.trim();

export function ThanetMap() {
  return (
    <div className="w-full rounded-3xl overflow-hidden border border-[#EAE0D5] shadow-sm">
      <svg
        viewBox="0 0 580 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        aria-label="Map of Thanet showing Mama's Sourdough stockist locations"
      >
        {/* Sea */}
        <rect width="580" height="400" fill="#D8E8F0" />

        {/* Subtle sea lines */}
        {[60, 110, 160, 210, 260, 310, 360].map((y) => (
          <line key={y} x1="0" y1={y} x2="580" y2={y} stroke="#C4D8E8" strokeWidth="0.6" />
        ))}

        {/* Land */}
        <path d={COAST} fill="#F2EAE0" stroke="#C4A882" strokeWidth="1.5" />

        {/* Subtle inland texture */}
        <path d={COAST} fill="url(#landTexture)" opacity="0.3" />
        <defs>
          <pattern id="landTexture" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="0.6" fill="#8B6347" />
          </pattern>
        </defs>

        {/* KENT label in sea */}
        <text x="70" y="360" fontFamily="monospace" fontSize="8" fill="#8BAABF"
          letterSpacing="3" textAnchor="middle" opacity="0.7">KENT</text>
        <text x="530" y="55" fontFamily="monospace" fontSize="8" fill="#8BAABF"
          letterSpacing="2" textAnchor="middle" opacity="0.7">NORTH SEA</text>

        {/* North arrow */}
        <g transform="translate(540,340)">
          <circle r="16" fill="white" stroke="#EAE0D5" strokeWidth="1" opacity="0.85" />
          <polygon points="0,-11 -3.5,4 0,1 3.5,4" fill="#C4852A" />
          <polygon points="0,11 -3.5,-4 0,-1 3.5,-4" fill="#D4BFA8" />
          <text x="0" y="22" fontFamily="monospace" fontSize="7" fill="#8B6347"
            textAnchor="middle" letterSpacing="1">N</text>
        </g>

        {/* Mama's Sourdough badge */}
        <g transform="translate(86,345)">
          <rect x="-4" y="-13" width="112" height="28" rx="5" fill="white" opacity="0.88" />
          <text fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#2C1A0E"
            letterSpacing="0.5">mama&apos;s sourdough</text>
          <text y="11" fontFamily="monospace" fontSize="6.5" fill="#C4852A"
            letterSpacing="1.5">STOCKISTS ACROSS THANET</text>
        </g>

        {/* Shop pins */}
        {shops.map((s) => (
          <g key={s.name}>
            {/* Pulse ring */}
            <circle cx={s.x} cy={s.y} r="13" fill={s.color} opacity="0.15" />
            {/* Pin */}
            <circle cx={s.x} cy={s.y} r="7" fill={s.color} />
            <circle cx={s.x} cy={s.y} r="3" fill="white" opacity="0.7" />

            {/* Label background */}
            <rect
              x={s.labelAnchor === "end" ? s.lx - 106 : s.labelAnchor === "middle" ? s.lx - 53 : s.lx - 2}
              y={s.ly - 12}
              width={s.name.length > 14 ? 112 : 100}
              height={28}
              rx="4"
              fill="white"
              opacity="0.82"
            />

            {/* Area label */}
            <text
              x={s.lx} y={s.ly}
              fontFamily="monospace" fontSize="7.5"
              fill={s.color} textAnchor={s.labelAnchor}
              letterSpacing="1.5" fontWeight="bold"
            >
              {s.area.toUpperCase()}
            </text>

            {/* Shop name */}
            <text
              x={s.lx} y={s.ly2}
              fontFamily="Georgia, serif" fontSize="9.5"
              fill="#2C1A0E" textAnchor={s.labelAnchor}
              fontStyle="italic"
            >
              {s.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
