interface ProjectIllustrationProps {
  projectId: number;
}

/** Custom SVG illustrations tailored to each CV project. */
export default function ProjectIllustration({ projectId }: ProjectIllustrationProps) {
  switch (projectId) {
    case 1:
      // SauceDemo UI Automation Framework (Playwright Cross-Browser)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" aria-hidden="true">
          <rect width="400" height="220" fill="#150c1a" />
          <circle cx="330" cy="40" r="70" fill="#6ee7b7" fillOpacity="0.08" />
          <circle cx="70" cy="180" r="60" fill="#f472b6" fillOpacity="0.08" />
          {/* Browser Frame */}
          <rect x="36" y="26" width="328" height="168" rx="14" fill="#1f1326" stroke="#fbcfe8" strokeOpacity="0.18" />
          <rect x="36" y="26" width="328" height="28" rx="14" fill="#2c1b35" />
          <circle cx="56" cy="40" r="4" fill="#f472b6" />
          <circle cx="70" cy="40" r="4" fill="#fdba74" />
          <circle cx="84" cy="40" r="4" fill="#6ee7b7" />
          {/* Browser Tabs */}
          <rect x="108" y="32" width="66" height="16" rx="5" fill="#6ee7b7" fillOpacity="0.2" />
          <text x="141" y="43" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Chromium</text>
          <rect x="180" y="32" width="58" height="16" rx="5" fill="#c4b5fd" fillOpacity="0.2" />
          <text x="209" y="43" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily="monospace">Firefox</text>
          <rect x="244" y="32" width="58" height="16" rx="5" fill="#fdba74" fillOpacity="0.2" />
          <text x="273" y="43" textAnchor="middle" fill="#fdba74" fontSize="8" fontFamily="monospace">WebKit</text>
          {/* Test Rows */}
          <rect x="54" y="70" width="292" height="28" rx="8" fill="#150c1a" stroke="#6ee7b7" strokeOpacity="0.3" />
          <circle cx="72" cy="84" r="6" fill="#6ee7b7" />
          <path d="M69 84 l2 2 l4 -4" stroke="#0d0710" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="88" y="80" width="140" height="8" rx="4" fill="#fdf4f8" fillOpacity="0.8" />
          <rect x="276" y="77" width="56" height="14" rx="7" fill="#6ee7b7" fillOpacity="0.2" />
          <text x="304" y="87" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">PASS</text>

          <rect x="54" y="108" width="292" height="28" rx="8" fill="#150c1a" stroke="#6ee7b7" strokeOpacity="0.3" />
          <circle cx="72" cy="122" r="6" fill="#6ee7b7" />
          <path d="M69 122 l2 2 l4 -4" stroke="#0d0710" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="88" y="118" width="165" height="8" rx="4" fill="#fdf4f8" fillOpacity="0.65" />
          <rect x="276" y="115" width="56" height="14" rx="7" fill="#6ee7b7" fillOpacity="0.2" />
          <text x="304" y="125" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">PASS</text>

          <rect x="54" y="146" width="292" height="28" rx="8" fill="#150c1a" stroke="#f472b6" strokeOpacity="0.25" />
          <circle cx="72" cy="160" r="6" fill="#f472b6" />
          <rect x="88" y="156" width="120" height="8" rx="4" fill="#b8a2b6" fillOpacity="0.6" />
          <rect x="256" y="153" width="76" height="14" rx="7" fill="#f472b6" fillOpacity="0.2" />
          <text x="294" y="163" textAnchor="middle" fill="#f472b6" fontSize="8" fontFamily="monospace">21 CI RUNS</text>
        </svg>
      );

    case 2:
      // Restful-Booker API Testing Suite (Postman & Request Chaining)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" aria-hidden="true">
          <rect width="400" height="220" fill="#150c1a" />
          <circle cx="80" cy="50" r="65" fill="#f472b6" fillOpacity="0.08" />
          <circle cx="320" cy="175" r="70" fill="#c4b5fd" fillOpacity="0.08" />
          {/* Left Request Node */}
          <rect x="28" y="42" width="136" height="58" rx="12" fill="#1f1326" stroke="#f472b6" strokeOpacity="0.4" />
          <rect x="40" y="54" width="38" height="16" rx="6" fill="#f472b6" />
          <text x="59" y="65" textAnchor="middle" fill="#0d0710" fontSize="8" fontWeight="bold" fontFamily="monospace">POST</text>
          <text x="86" y="65" fill="#fdf4f8" fontSize="10" fontFamily="monospace">/auth</text>
          <text x="40" y="86" fill="#b8a2b6" fontSize="8" fontFamily="monospace">token -&gt; env.set()</text>

          {/* Arrow */}
          <path d="M168 71 H230" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="4 3" />
          <polygon points="230,66 240,71 230,76" fill="#6ee7b7" />

          {/* Right Chained Node */}
          <rect x="242" y="42" width="130" height="58" rx="12" fill="#1f1326" stroke="#6ee7b7" strokeOpacity="0.4" />
          <rect x="254" y="54" width="34" height="16" rx="6" fill="#fdba74" />
          <text x="271" y="65" textAnchor="middle" fill="#0d0710" fontSize="8" fontWeight="bold" fontFamily="monospace">PUT</text>
          <text x="294" y="65" fill="#fdf4f8" fontSize="9" fontFamily="monospace">/booking</text>
          <text x="254" y="86" fill="#6ee7b7" fontSize="8" fontFamily="monospace">200 OK &lt; 300ms</text>

          {/* Bottom Assertions Bar */}
          <rect x="28" y="124" width="344" height="68" rx="14" fill="#1f1326" stroke="#fbcfe8" strokeOpacity="0.15" />
          <text x="46" y="146" fill="#fbcfe8" fontSize="9" fontFamily="monospace">POST-RESPONSE ASSERTIONS (14/14)</text>
          <rect x="46" y="158" width="70" height="20" rx="10" fill="#6ee7b7" fillOpacity="0.2" />
          <text x="81" y="171" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">200 OK</text>
          <rect x="126" y="158" width="76" height="20" rx="10" fill="#c4b5fd" fillOpacity="0.2" />
          <text x="164" y="171" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily="monospace">201 DEL</text>
          <rect x="212" y="158" width="70" height="20" rx="10" fill="#fdba74" fillOpacity="0.2" />
          <text x="247" y="171" textAnchor="middle" fill="#fdba74" fontSize="8" fontFamily="monospace">403 SEC</text>
          <rect x="292" y="158" width="66" height="20" rx="10" fill="#f472b6" fillOpacity="0.2" />
          <text x="325" y="171" textAnchor="middle" fill="#f472b6" fontSize="8" fontFamily="monospace">404</text>
        </svg>
      );

    case 3:
      // SauceDemo Manual QA Portfolio (IEEE 829, RTM, Bug Reports)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" aria-hidden="true">
          <rect width="400" height="220" fill="#150c1a" />
          <circle cx="320" cy="60" r="65" fill="#c4b5fd" fillOpacity="0.09" />
          {/* RTM Sheet */}
          <rect x="34" y="28" width="218" height="164" rx="14" fill="#1f1326" stroke="#c4b5fd" strokeOpacity="0.3" />
          <rect x="34" y="28" width="218" height="30" rx="14" fill="#2c1b35" />
          <text x="52" y="47" fill="#fdf4f8" fontSize="10" fontFamily="monospace">IEEE 829 &amp; RTM MATRIX</text>
          {[0, 1, 2, 3].map((row) => (
            <g key={row} transform={`translate(48, ${72 + row * 28})`}>
              <rect width="44" height="18" rx="5" fill="#c4b5fd" fillOpacity="0.2" />
              <text x="22" y="12" textAnchor="middle" fill="#c4b5fd" fontSize="7" fontFamily="monospace">REQ_0{row + 1}</text>
              <rect x="52" width="62" height="18" rx="5" fill="#150c1a" />
              <text x="83" y="12" textAnchor="middle" fill="#fdf4f8" fontSize="7" fontFamily="monospace">TC_0{row + 1}</text>
              <rect x="122" width="64" height="18" rx="5" fill={row === 2 ? '#f472b6' : '#6ee7b7'} fillOpacity="0.22" />
              <text x="154" y="12" textAnchor="middle" fill={row === 2 ? '#f472b6' : '#6ee7b7'} fontSize="7" fontFamily="monospace">
                {row === 2 ? 'BUG_001' : 'PASS'}
              </text>
            </g>
          ))}
          {/* Right Summary Card */}
          <rect x="268" y="42" width="98" height="136" rx="14" fill="#1f1326" stroke="#f472b6" strokeOpacity="0.35" />
          <circle cx="317" cy="86" r="24" fill="#150c1a" stroke="#f472b6" strokeWidth="3" />
          <text x="317" y="90" textAnchor="middle" fill="#fdf4f8" fontSize="11" fontWeight="bold" fontFamily="monospace">24 TC</text>
          <text x="317" y="132" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontFamily="monospace">10 Scenarios</text>
          <text x="317" y="150" textAnchor="middle" fill="#f472b6" fontSize="9" fontFamily="monospace">7 Bugs</text>
        </svg>
      );

    case 4:
      // PrintSphere (3D T-Shirt Customization & E-Commerce)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" aria-hidden="true">
          <rect width="400" height="220" fill="#150c1a" />
          <circle cx="195" cy="110" r="85" fill="#fdba74" fillOpacity="0.08" />
          {/* 3D Viewport */}
          <rect x="44" y="28" width="212" height="164" rx="16" fill="#1f1326" stroke="#fdba74" strokeOpacity="0.35" />
          {/* T-Shirt Silhouette */}
          <path
            d="M115 62 L134 54 C142 62 158 62 166 54 L185 62 L205 84 L190 98 L178 88 L178 158 L122 158 L122 88 L110 98 L95 84 Z"
            fill="#2c1b35"
            stroke="#fdba74"
            strokeWidth="2"
          />
          {/* Isometric 3D Cube Emblem */}
          <polygon points="150,86 168,96 150,106 132,96" fill="#fdba74" />
          <polygon points="132,96 150,106 150,126 132,116" fill="#f472b6" fillOpacity="0.8" />
          <polygon points="168,96 150,106 150,126 168,116" fill="#c4b5fd" fillOpacity="0.8" />

          {/* Right Controls Panel */}
          <rect x="270" y="28" width="88" height="164" rx="14" fill="#1f1326" stroke="#fbcfe8" strokeOpacity="0.18" />
          <text x="314" y="50" textAnchor="middle" fill="#fbcfe8" fontSize="8" fontFamily="monospace">3D STUDIO</text>
          <circle cx="294" cy="76" r="9" fill="#f472b6" />
          <circle cx="314" cy="76" r="9" fill="#fdba74" />
          <circle cx="334" cy="76" r="9" fill="#c4b5fd" />
          <rect x="284" y="102" width="60" height="22" rx="6" fill="#150c1a" />
          <text x="314" y="116" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">RBAC OK</text>
          <rect x="284" y="134" width="60" height="22" rx="6" fill="#fdba74" fillOpacity="0.2" />
          <text x="314" y="148" textAnchor="middle" fill="#fdba74" fontSize="8" fontFamily="monospace">PAYHERE</text>
        </svg>
      );

    case 5:
      // LankaTransit (Bus Reservation & Management System)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" aria-hidden="true">
          <rect width="400" height="220" fill="#150c1a" />
          <circle cx="310" cy="50" r="70" fill="#fbcfe8" fillOpacity="0.07" />
          {/* Route Map Line */}
          <path d="M52 156 C 120 110, 220 180, 346 116" stroke="#f472b6" strokeWidth="2.5" strokeDasharray="6 4" />
          <circle cx="52" cy="156" r="7" fill="#6ee7b7" />
          <circle cx="200" cy="148" r="7" fill="#fdba74" />
          <circle cx="346" cy="116" r="7" fill="#f472b6" />
          {/* Bus Card */}
          <rect x="44" y="30" width="196" height="92" rx="14" fill="#1f1326" stroke="#fbcfe8" strokeOpacity="0.25" />
          <rect x="64" y="48" width="96" height="44" rx="10" fill="#2c1b35" stroke="#fbcfe8" strokeWidth="1.5" />
          <rect x="74" y="56" width="22" height="14" rx="3" fill="#c4b5fd" fillOpacity="0.5" />
          <rect x="102" y="56" width="22" height="14" rx="3" fill="#c4b5fd" fillOpacity="0.5" />
          <rect x="130" y="56" width="20" height="14" rx="3" fill="#6ee7b7" fillOpacity="0.5" />
          <circle cx="84" cy="94" r="7" fill="#f472b6" />
          <circle cx="140" cy="94" r="7" fill="#f472b6" />
          <text x="174" y="64" fill="#fdf4f8" fontSize="9" fontFamily="monospace">ADMIN</text>
          <text x="174" y="80" fill="#6ee7b7" fontSize="8" fontFamily="monospace">CRUD</text>
          {/* Right Reservation Badge */}
          <rect x="256" y="30" width="102" height="66" rx="12" fill="#1f1326" stroke="#6ee7b7" strokeOpacity="0.35" />
          <text x="307" y="56" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontFamily="monospace">BOOKINGS</text>
          <text x="307" y="76" textAnchor="middle" fill="#fdf4f8" fontSize="11" fontWeight="bold" fontFamily="monospace">VERIFIED</text>
        </svg>
      );

    default:
      // Course Feedback System (CFS) (Django REST + React)
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full" fill="none" aria-hidden="true">
          <rect width="400" height="220" fill="#150c1a" />
          <circle cx="80" cy="170" r="65" fill="#6ee7b7" fillOpacity="0.08" />
          {/* Dashboard Window */}
          <rect x="40" y="28" width="320" height="164" rx="16" fill="#1f1326" stroke="#6ee7b7" strokeOpacity="0.3" />
          <text x="62" y="54" fill="#fdf4f8" fontSize="10" fontFamily="monospace">COURSE FEEDBACK API</text>
          <rect x="250" y="40" width="90" height="20" rx="10" fill="#6ee7b7" fillOpacity="0.2" />
          <text x="295" y="53" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">DJANGO DRF</text>
          {/* Bar Chart */}
          <rect x="66" y="128" width="26" height="44" rx="6" fill="#c4b5fd" fillOpacity="0.7" />
          <rect x="104" y="102" width="26" height="70" rx="6" fill="#f472b6" fillOpacity="0.8" />
          <rect x="142" y="84" width="26" height="88" rx="6" fill="#6ee7b7" />
          <rect x="180" y="114" width="26" height="58" rx="6" fill="#fdba74" fillOpacity="0.8" />
          {/* API Endpoint Cards */}
          <rect x="228" y="84" width="112" height="24" rx="7" fill="#150c1a" />
          <text x="284" y="99" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">GET /degrees/</text>
          <rect x="228" y="116" width="112" height="24" rx="7" fill="#150c1a" />
          <text x="284" y="131" textAnchor="middle" fill="#f472b6" fontSize="8" fontFamily="monospace">POST /feedback/</text>
          <rect x="228" y="148" width="112" height="24" rx="7" fill="#150c1a" />
          <text x="284" y="163" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontFamily="monospace">MySQL Sync</text>
        </svg>
      );
  }
}
