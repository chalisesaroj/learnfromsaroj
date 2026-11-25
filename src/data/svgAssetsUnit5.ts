import { SvgAsset } from './svgAssets';

export const SVG_FIGURES_UNIT5: Record<string, SvgAsset> = {
  u5_fig1: {
    id: 'u5_fig1',
    filename: 'u5_fig1_static_characteristics.svg',
    title: 'Figure 5.1: Static Characteristics of Measurement Systems',
    topicRef: '5.1 Static Characteristics',
    description:
      'Clean visualization of static performance metrics: Accuracy vs. Precision target dartboards, static calibration curve with sensitivity slope, Hysteresis loop, and Dead Band / Threshold zones.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 5.1: Static Characteristics · Performance Metrics
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit V · Sec 5.1
  </text>

  <!-- Panel 1: Accuracy vs Precision (4 Dartboards) -->
  <rect x="48" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="72" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    A. Accuracy vs. Precision
  </text>
  <text x="72" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Bullseye Target &amp; Dispersion
  </text>

  <!-- Target 1: High Accuracy, High Precision -->
  <g transform="translate(170, 304)">
    <circle r="66" fill="#f8fafc" stroke="#64748b" stroke-width="1.8" />
    <circle r="44" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />
    <circle r="22" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
    <circle r="7" fill="#ef4444" />
    <circle cx="2" cy="-3" r="4.5" fill="#1e40af" />
    <circle cx="-3" cy="2" r="4.5" fill="#1e40af" />
    <circle cx="3" cy="2" r="4.5" fill="#1e40af" />
    <circle cx="-2" cy="-2" r="4.5" fill="#1e40af" />
    <text x="0" y="96" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857" text-anchor="middle">High Accuracy</text>
    <text x="0" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857" text-anchor="middle">High Precision</text>
  </g>

  <!-- Target 2: Low Accuracy, High Precision -->
  <g transform="translate(410, 304)">
    <circle r="66" fill="#f8fafc" stroke="#64748b" stroke-width="1.8" />
    <circle r="44" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />
    <circle r="22" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
    <circle r="7" fill="#ef4444" />
    <circle cx="38" cy="-34" r="4.5" fill="#b91c1c" />
    <circle cx="42" cy="-31" r="4.5" fill="#b91c1c" />
    <circle cx="35" cy="-38" r="4.5" fill="#b91c1c" />
    <circle cx="40" cy="-36" r="4.5" fill="#b91c1c" />
    <text x="0" y="96" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">Low Accuracy</text>
    <text x="0" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">High Prec. (Bias)</text>
  </g>

  <!-- Target 3: High Accuracy, Low Precision -->
  <g transform="translate(170, 548)">
    <circle r="66" fill="#f8fafc" stroke="#64748b" stroke-width="1.8" />
    <circle r="44" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />
    <circle r="22" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
    <circle r="7" fill="#ef4444" />
    <circle cx="-30" cy="-22" r="4.5" fill="#4338ca" />
    <circle cx="33" cy="20" r="4.5" fill="#4338ca" />
    <circle cx="-18" cy="33" r="4.5" fill="#4338ca" />
    <circle cx="26" cy="-26" r="4.5" fill="#4338ca" />
    <text x="0" y="96" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#4338ca" text-anchor="middle">High Accuracy</text>
    <text x="0" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#4338ca" text-anchor="middle">Low Prec. (Scatter)</text>
  </g>

  <!-- Target 4: Low Accuracy, Low Precision -->
  <g transform="translate(410, 548)">
    <circle r="66" fill="#f8fafc" stroke="#64748b" stroke-width="1.8" />
    <circle r="44" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />
    <circle r="22" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
    <circle r="7" fill="#ef4444" />
    <circle cx="24" cy="-52" r="4.5" fill="#475569" />
    <circle cx="54" cy="-24" r="4.5" fill="#475569" />
    <circle cx="42" cy="-42" r="4.5" fill="#475569" />
    <circle cx="10" cy="-56" r="4.5" fill="#475569" />
    <text x="0" y="96" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#334155" text-anchor="middle">Low Accuracy</text>
    <text x="0" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Low Precision</text>
  </g>

  <!-- Bottom Legend Bar Panel 1 -->
  <rect x="68" y="724" width="444" height="116" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <circle cx="92" cy="762" r="7" fill="#1e40af" />
  <text x="114" y="769" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Target Center = True Value</text>
  <circle cx="92" cy="806" r="7" fill="#b91c1c" />
  <text x="114" y="813" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Dots = Sensor Readings</text>

  <!-- Panel 2: Calibration Curve & Sensitivity Slope -->
  <rect x="558" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="582" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    B. Sensitivity &amp; Linearity
  </text>
  <text x="582" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Calibration Slope &amp; Deviation
  </text>

  <!-- Graph Axes Panel 2 -->
  <g transform="translate(612, 316)">
    <line x1="0" y1="0" x2="376" y2="0" stroke="#e2e8f0" stroke-width="1.5" />
    <line x1="0" y1="100" x2="376" y2="100" stroke="#e2e8f0" stroke-width="1.5" />
    <line x1="0" y1="200" x2="376" y2="200" stroke="#e2e8f0" stroke-width="1.5" />
    <line x1="0" y1="300" x2="376" y2="300" stroke="#e2e8f0" stroke-width="1.5" />

    <!-- Axes -->
    <line x1="0" y1="300" x2="386" y2="300" stroke="#0f172a" stroke-width="2.8" />
    <line x1="0" y1="300" x2="0" y2="-36" stroke="#0f172a" stroke-width="2.8" />
    <polygon points="386,300 374,294 374,306" fill="#0f172a" />
    <polygon points="0,-36 -6,-24 6,-24" fill="#0f172a" />
    <text x="193" y="344" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a" text-anchor="middle">Input Measurand (x) →</text>
    <text x="12" y="-44" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Output Reading (y)</text>

    <!-- Linear Calibration Line -->
    <line x1="28" y1="274" x2="352" y2="28" stroke="#2563eb" stroke-width="3.5" />
    <text x="200" y="16" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Linear Fit</text>

    <!-- Sensitivity Slope Triangle -->
    <polygon points="150,181 244,181 244,110" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3" />
    <text x="197" y="210" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">Δx</text>
    <text x="258" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Δy</text>
    <text x="108" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Slope K</text>

    <!-- Actual Non-Linear Curve -->
    <path d="M 28 274 Q 150 202 224 122 T 352 28" fill="none" stroke="#d97706" stroke-width="3" stroke-dasharray="7,4" />
    <text x="115" y="254" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">Non-Linear Curve</text>

    <!-- Non-Linearity Deviation Arrow -->
    <line x1="172" y1="164" x2="196" y2="136" stroke="#dc2626" stroke-width="2.5" />
    <text x="216" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">Max Dev.</text>
  </g>

  <!-- Bottom Legend Bar Panel 2 -->
  <rect x="578" y="724" width="444" height="116" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <line x1="600" y1="762" x2="644" y2="762" stroke="#2563eb" stroke-width="4" />
  <text x="658" y="769" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Slope = Sensitivity (K)</text>
  <line x1="600" y1="806" x2="644" y2="806" stroke="#d97706" stroke-width="3.5" stroke-dasharray="6,3" />
  <text x="658" y="813" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Gap = Non-Linearity Error</text>

  <!-- Panel 3: Hysteresis & Dead Band -->
  <rect x="1068" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="1092" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    C. Hysteresis &amp; Dead Band
  </text>
  <text x="1092" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Directional Lag &amp; Threshold
  </text>

  <!-- Graph Axes Panel 3 -->
  <g transform="translate(1122, 316)">
    <line x1="0" y1="300" x2="386" y2="300" stroke="#0f172a" stroke-width="2.8" />
    <line x1="0" y1="300" x2="0" y2="-36" stroke="#0f172a" stroke-width="2.8" />
    <polygon points="386,300 374,294 374,306" fill="#0f172a" />
    <polygon points="0,-36 -6,-24 6,-24" fill="#0f172a" />
    <text x="275" y="344" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Input (x) →</text>
    <text x="12" y="-44" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Output (y)</text>

    <!-- Dead Band near origin -->
    <rect x="0" y="292" width="60" height="16" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" />
    <text x="48" y="344" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b91c1c" text-anchor="middle">Dead Band</text>
    <line x1="60" y1="282" x2="60" y2="316" stroke="#dc2626" stroke-width="2.5" />
    <text x="68" y="284" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">Threshold</text>

    <!-- Increasing Loading Path -->
    <path d="M 60 300 Q 225 228 356 36" fill="none" stroke="#16a34a" stroke-width="4" />
    <polygon points="205,220 191,227 198,215" fill="#16a34a" />
    <text x="224" y="238" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d">Loading (Up)</text>

    <!-- Decreasing Unloading Path -->
    <path d="M 356 36 Q 175 88 60 300" fill="none" stroke="#d97706" stroke-width="4" stroke-dasharray="8,4" />
    <polygon points="184,106 198,99 191,111" fill="#d97706" />
    <text x="26" y="76" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309">Unloading (Down)</text>

    <!-- Hysteresis Width Double Arrow -->
    <line x1="196" y1="122" x2="196" y2="206" stroke="#7c3aed" stroke-width="3" />
    <polygon points="196,122 190,136 202,136" fill="#7c3aed" />
    <polygon points="196,206 190,192 202,192" fill="#7c3aed" />
    <text x="212" y="168" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9">Hysteresis</text>
  </g>

  <!-- Bottom Legend Bar Panel 3 -->
  <rect x="1088" y="724" width="444" height="116" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <line x1="1110" y1="762" x2="1154" y2="762" stroke="#16a34a" stroke-width="4" />
  <text x="1168" y="769" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Increasing Input (Up)</text>
  <line x1="1110" y1="806" x2="1154" y2="806" stroke="#d97706" stroke-width="4" stroke-dasharray="6,3" />
  <text x="1168" y="813" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Decreasing Input (Down)</text>
</svg>`
  },

  u5_fig2: {
    id: 'u5_fig2',
    filename: 'u5_fig2_dynamic_characteristics_rise_delay.svg',
    title: 'Figure 5.2: Dynamic Step Response Metrics & Transient Timing',
    topicRef: '5.2 Dynamic Characteristics',
    description:
      'Widescreen clean transient step response curve illustrating Delay Time (td), Rise Time (tr), Peak Time (tp), Maximum Percent Overshoot (Mp), and Settling Time (ts). Free from formulas and long paragraphs.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 5.2: Dynamic Step Response · Transient Metrics
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit V · Sec 5.2
  </text>

  <!-- Main Canvas Area -->
  <rect x="48" y="128" width="1504" height="618" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Coordinate System -->
  <g transform="translate(150, 650)">
    <!-- 2% Settling Tolerance Band -->
    <rect x="0" y="-364" width="1110" height="16" fill="#dcfce7" opacity="0.7" />
    <rect x="0" y="-348" width="1110" height="16" fill="#dcfce7" opacity="0.7" />

    <!-- Steady State Line y_ss = 1.0 (at y = -356) -->
    <line x1="0" y1="-356" x2="1110" y2="-356" stroke="#059669" stroke-width="3" stroke-dasharray="10,5" />
    <text x="1126" y="-350" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#047857">Steady State (yss)</text>
    <text x="1126" y="-384" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">+2% Band</text>
    <text x="1126" y="-316" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">-2% Band</text>

    <!-- Percentage Reference Lines -->
    <line x1="0" y1="-36" x2="1110" y2="-36" stroke="#cbd5e1" stroke-dasharray="5,5" />
    <text x="-16" y="-29" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155" text-anchor="end">10%</text>

    <line x1="0" y1="-178" x2="1110" y2="-178" stroke="#94a3b8" stroke-dasharray="5,5" />
    <text x="-16" y="-171" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="end">50%</text>

    <line x1="0" y1="-320" x2="1110" y2="-320" stroke="#cbd5e1" stroke-dasharray="5,5" />
    <text x="-16" y="-313" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155" text-anchor="end">90%</text>

    <!-- Step Input Profile -->
    <line x1="-26" y1="0" x2="0" y2="0" stroke="#64748b" stroke-width="2.5" />
    <line x1="0" y1="0" x2="0" y2="-356" stroke="#64748b" stroke-width="3" stroke-dasharray="6,4" />
    <line x1="0" y1="-356" x2="220" y2="-356" stroke="#64748b" stroke-width="3" stroke-dasharray="6,4" />
    <text x="36" y="-374" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155">Step Input x(t)</text>

    <!-- Main Coordinate Axes -->
    <line x1="0" y1="0" x2="1140" y2="0" stroke="#0f172a" stroke-width="3" />
    <line x1="0" y1="0" x2="0" y2="-482" stroke="#0f172a" stroke-width="3" />
    <polygon points="1140,0 1126,-6 1126,6" fill="#0f172a" />
    <polygon points="0,-482 -6,-468 6,-468" fill="#0f172a" />
    <text x="1156" y="10" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#0f172a">Time (t) →</text>
    <text x="16" y="-476" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#0f172a">Response y(t)</text>

    <!-- High-Resolution Transient Underdamped Curve -->
    <path d="M 0 0 C 40 -8 75 -40 125 -178 C 160 -276 195 -316 235 -356 C 275 -396 300 -470 330 -470 C 385 -470 460 -296 550 -312 C 640 -326 715 -376 775 -368 C 850 -361 910 -351 970 -354 L 1110 -356"
          fill="none" stroke="#2563eb" stroke-width="4.5" />

    <!-- 1. Pure Dead Time t0 -->
    <line x1="0" y1="0" x2="32" y2="0" stroke="#d97706" stroke-width="6" />
    <text x="16" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">t0</text>

    <!-- 2. Delay Time td (50% point) -->
    <line x1="125" y1="0" x2="125" y2="-178" stroke="#475569" stroke-dasharray="5,4" stroke-width="2" />
    <circle cx="125" cy="-178" r="7" fill="#2563eb" />
    <circle cx="125" cy="0" r="6" fill="#0f172a" />
    <text x="125" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">td</text>

    <!-- 3. Rise Time tr (10% to 90% interval) -->
    <line x1="72" y1="0" x2="72" y2="-36" stroke="#7c3aed" stroke-dasharray="5,4" stroke-width="2" />
    <line x1="205" y1="0" x2="205" y2="-320" stroke="#7c3aed" stroke-dasharray="5,4" stroke-width="2" />
    <line x1="72" y1="-98" x2="205" y2="-98" stroke="#7c3aed" stroke-width="3" />
    <polygon points="72,-98 84,-104 84,-92" fill="#7c3aed" />
    <polygon points="205,-98 193,-104 193,-92" fill="#7c3aed" />
    <text x="148" y="-114" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#6d28d9" text-anchor="middle">Rise Time (tr)</text>

    <!-- 4. Peak Time tp & Peak Point -->
    <line x1="330" y1="0" x2="330" y2="-470" stroke="#dc2626" stroke-dasharray="5,4" stroke-width="2.5" />
    <circle cx="330" cy="-470" r="8" fill="#dc2626" />
    <circle cx="330" cy="0" r="6" fill="#dc2626" />
    <text x="330" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#dc2626" text-anchor="middle">tp</text>

    <!-- 5. Maximum Peak Overshoot Mp -->
    <line x1="378" y1="-356" x2="378" y2="-470" stroke="#dc2626" stroke-width="3.5" />
    <polygon points="378,-356 372,-370 384,-370" fill="#dc2626" />
    <polygon points="378,-470 372,-456 384,-456" fill="#dc2626" />
    <text x="396" y="-412" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#dc2626">Max Overshoot (Mp)</text>

    <!-- 6. Settling Time ts -->
    <line x1="965" y1="0" x2="965" y2="-356" stroke="#059669" stroke-dasharray="5,4" stroke-width="2.5" />
    <circle cx="965" cy="-354" r="7" fill="#059669" />
    <circle cx="965" cy="0" r="6" fill="#059669" />
    <text x="965" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#047857" text-anchor="middle">Settling Time (ts)</text>
  </g>

  <!-- Bottom Metric Callout Chips -->
  <g transform="translate(48, 764)">
    <rect x="0" y="0" width="286" height="92" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
    <text x="16" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">1. Delay Time (td)</text>
    <text x="16" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">50% Steady State</text>

    <rect x="304" y="0" width="286" height="92" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
    <text x="320" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#6d28d9">2. Rise Time (tr)</text>
    <text x="320" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">10% → 90% Span</text>

    <rect x="608" y="0" width="286" height="92" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
    <text x="624" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#dc2626">3. Peak Time (tp)</text>
    <text x="624" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">First Peak Crest</text>

    <rect x="912" y="0" width="286" height="92" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
    <text x="928" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#dc2626">4. Overshoot (Mp)</text>
    <text x="928" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Surge Above yss</text>

    <rect x="1216" y="0" width="288" height="92" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
    <text x="1232" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#047857">5. Settling (ts)</text>
    <text x="1232" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Inside ±2% Band</text>
  </g>
</svg>`
  },

  u5_fig3: {
    id: 'u5_fig3',
    filename: 'u5_fig3_generalized_taxonomy_archetypes.svg',
    title: 'Figure 5.3: Generalized Mathematical Taxonomy & Physical Archetypes',
    topicRef: '5.3 Mathematical Modeling',
    description:
      'Architectural block diagram comparing Zero-Order, First-Order, and Second-Order measurement systems. Focused strictly on physical energy reservoirs and signal transduction.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 5.3: System Order Taxonomy · Energy Reservoirs
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit V · Sec 5.3
  </text>

  <!-- Column 1: Zero-Order System -->
  <g transform="translate(48, 130)">
    <rect width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="484" height="62" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
    <text x="24" y="41" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#1e40af">
      Zero-Order System (n = 0)
    </text>

    <!-- Transduction Block Diagram -->
    <g transform="translate(24, 80)">
      <rect width="436" height="108" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="16" y="61" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#334155">In f(t)</text>
      <line x1="88" y1="54" x2="128" y2="54" stroke="#2563eb" stroke-width="3" />
      <polygon points="128,54 118,48 118,60" fill="#2563eb" />

      <rect x="132" y="18" width="160" height="72" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
      <text x="212" y="49" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">Static Gain</text>
      <text x="212" y="77" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">(Gain K)</text>

      <line x1="296" y1="54" x2="334" y2="54" stroke="#2563eb" stroke-width="3" />
      <polygon points="334,54 324,48 324,60" fill="#2563eb" />
      <text x="342" y="61" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">Out y(t)</text>
    </g>

    <!-- Physical Archetype Illustration: Potentiometer Divider -->
    <g transform="translate(24, 206)">
      <rect width="436" height="224" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Archetype: Potentiometer</text>

      <rect x="64" y="90" width="308" height="28" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2" />
      <text x="46" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155">0V</text>
      <text x="348" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626">+Vs</text>

      <polygon points="218,90 206,126 230,126" fill="#2563eb" />
      <line x1="218" y1="126" x2="218" y2="184" stroke="#2563eb" stroke-width="3.5" />
      <circle cx="218" cy="184" r="6" fill="#2563eb" />
      <text x="234" y="192" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Vout</text>

      <line x1="218" y1="80" x2="218" y2="48" stroke="#047857" stroke-width="3.5" />
      <polygon points="218,48 212,62 224,62" fill="#047857" />
      <text x="234" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">Motion (x)</text>
    </g>

    <!-- Visual Architecture Spec Cards -->
    <g transform="translate(24, 448)">
      <rect width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Energy Storage:</text>
      <text x="18" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8">Zero Storage (Pure Resistor)</text>

      <rect y="94" width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="126" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Dynamic Response:</text>
      <text x="18" y="158" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">Instantaneous · Zero Phase Lag</text>

      <rect y="188" width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="220" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Real-World Examples:</text>
      <text x="18" y="252" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">Potentiometer · Foil Strain Gauge</text>
    </g>
  </g>

  <!-- Column 2: First-Order System -->
  <g transform="translate(558, 130)">
    <rect width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="484" height="62" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.2" />
    <text x="24" y="41" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#6d28d9">
      First-Order System (n = 1)
    </text>

    <!-- Transduction Block Diagram -->
    <g transform="translate(24, 80)">
      <rect width="436" height="108" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="16" y="61" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#334155">In f(t)</text>
      <line x1="88" y1="54" x2="128" y2="54" stroke="#7c3aed" stroke-width="3" />
      <polygon points="128,54 118,48 118,60" fill="#7c3aed" />

      <rect x="132" y="18" width="160" height="72" rx="6" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2" />
      <text x="212" y="49" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#5b21b6" text-anchor="middle">1 Reservoir</text>
      <text x="212" y="77" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#5b21b6" text-anchor="middle">(Time Const. τ)</text>

      <line x1="296" y1="54" x2="334" y2="54" stroke="#7c3aed" stroke-width="3" />
      <polygon points="334,54 324,48 324,60" fill="#7c3aed" />
      <text x="342" y="61" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">Out y(t)</text>
    </g>

    <!-- Physical Archetype Illustration: Clinical Thermometer -->
    <g transform="translate(24, 206)">
      <rect width="436" height="224" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Archetype: Thermometer</text>

      <rect x="64" y="76" width="184" height="22" rx="4" fill="#e0e7ff" stroke="#6366f1" stroke-width="2" />
      <circle cx="268" cy="87" r="34" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2.5" />
      <circle cx="268" cy="87" r="19" fill="#ef4444" />
      <rect x="64" y="82" width="184" height="10" fill="#ef4444" />

      <line x1="268" y1="150" x2="268" y2="128" stroke="#dc2626" stroke-width="3.5" />
      <polygon points="268,128 262,138 274,138" fill="#dc2626" />

      <line x1="330" y1="87" x2="308" y2="87" stroke="#dc2626" stroke-width="3.5" />
      <polygon points="308,87 318,81 318,93" fill="#dc2626" />

      <text x="268" y="182" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Convection Heat Flux</text>
      <text x="64" y="138" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#4338ca">Capillary Stem</text>
    </g>

    <!-- Visual Architecture Spec Cards -->
    <g transform="translate(24, 448)">
      <rect width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Energy Storage:</text>
      <text x="18" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">One Reservoir (Thermal Capacity)</text>

      <rect y="94" width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="126" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Dynamic Response:</text>
      <text x="18" y="158" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">Exponential · Low-Pass Filter</text>

      <rect y="188" width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="220" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Real-World Examples:</text>
      <text x="18" y="252" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">Thermocouple · RTD · RC Filter</text>
    </g>
  </g>

  <!-- Column 3: Second-Order System -->
  <g transform="translate(1068, 130)">
    <rect width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="484" height="62" rx="10" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2" />
    <text x="24" y="41" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#b91c1c">
      Second-Order System (n = 2)
    </text>

    <!-- Transduction Block Diagram -->
    <g transform="translate(24, 80)">
      <rect width="436" height="108" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="16" y="61" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#334155">In f(t)</text>
      <line x1="88" y1="54" x2="128" y2="54" stroke="#dc2626" stroke-width="3" />
      <polygon points="128,54 118,48 118,60" fill="#dc2626" />

      <rect x="132" y="18" width="160" height="72" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="2" />
      <text x="212" y="49" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#991b1b" text-anchor="middle">2 Reservoirs</text>
      <text x="212" y="77" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#991b1b" text-anchor="middle">(ωn &amp; Damping ζ)</text>

      <line x1="296" y1="54" x2="334" y2="54" stroke="#dc2626" stroke-width="3" />
      <polygon points="334,54 324,48 324,60" fill="#dc2626" />
      <text x="342" y="61" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">Out y(t)</text>
    </g>

    <!-- Physical Archetype Illustration: Produce Scale -->
    <g transform="translate(24, 206)">
      <rect width="436" height="224" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Archetype: Produce Scale</text>

      <rect x="148" y="88" width="140" height="14" rx="3" fill="#64748b" />
      <ellipse cx="196" cy="78" rx="20" ry="10" fill="#d97706" />
      <ellipse cx="232" cy="76" rx="22" ry="11" fill="#b45309" />
      <text x="348" y="84" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">Load Mass</text>

      <g transform="translate(174, 106)">
        <path d="M 16 0 L 16 14 L 30 24 L 4 38 L 30 52 L 4 66 L 16 76 L 16 92" fill="none" stroke="#2563eb" stroke-width="3" />
        <text x="-16" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="end">Spring (k)</text>

        <line x1="72" y1="0" x2="72" y2="38" stroke="#dc2626" stroke-width="2.5" />
        <rect x="58" y="38" width="28" height="30" fill="none" stroke="#dc2626" stroke-width="2.5" />
        <line x1="64" y1="52" x2="80" y2="52" stroke="#dc2626" stroke-width="3.5" />
        <line x1="72" y1="68" x2="72" y2="92" stroke="#dc2626" stroke-width="2.5" />
        <text x="98" y="58" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">Damper (c)</text>
      </g>
    </g>

    <!-- Visual Architecture Spec Cards -->
    <g transform="translate(24, 448)">
      <rect width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Energy Storage:</text>
      <text x="18" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626">Two Reservoirs (Mass + Spring)</text>

      <rect y="94" width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="126" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Dynamic Response:</text>
      <text x="18" y="158" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">Oscillation · Resonance Peak</text>

      <rect y="188" width="436" height="80" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="220" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Real-World Examples:</text>
      <text x="18" y="252" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">Scale · Accelerometer · Manometer</text>
    </g>
  </g>
</svg>`
  },

  u5_fig4: {
    id: 'u5_fig4',
    filename: 'u5_fig4_zero_order_system.svg',
    title: 'Figure 5.4: Zero-Order System Architecture & Frequency Invariance',
    topicRef: '5.4 Zero-Order Systems',
    description:
      'Zero-order physical system: Potentiometer displacement divider schematic, time-domain waveform tracking with zero phase lag, and flat frequency Bode response.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 5.4: Zero-Order Systems · Divider &amp; Bode Flatness
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit V · Sec 5.4
  </text>

  <!-- Left: Potentiometer Displacement Divider Circuit -->
  <rect x="48" y="130" width="736" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="76" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    A. Physical Linear Potentiometer
  </text>
  <text x="76" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Direct mechanical displacement to voltage ratio
  </text>

  <!-- Circuit Diagram Schematic -->
  <g transform="translate(150, 250)">
    <text x="30" y="26" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#dc2626">+Vs (Excitation Supply)</text>
    <line x1="145" y1="38" x2="145" y2="82" stroke="#dc2626" stroke-width="3.5" />
    <circle cx="145" cy="38" r="6" fill="#dc2626" />

    <rect x="118" y="82" width="54" height="330" rx="4" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5" />
    <path d="M 128 102 L 160 114 L 128 130 L 160 146 L 128 162 L 160 178 L 128 194 L 160 210 L 128 226 L 160 242 L 128 258 L 160 274 L 128 290 L 160 306 L 128 322 L 160 338 L 128 354 L 160 370 L 128 386 L 160 400"
          fill="none" stroke="#475569" stroke-width="2.5" />
    <text x="-8" y="238" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Length L</text>
    <text x="-8" y="268" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155">Total R</text>

    <line x1="145" y1="412" x2="145" y2="465" stroke="#1e293b" stroke-width="3.5" />
    <line x1="112" y1="465" x2="178" y2="465" stroke="#1e293b" stroke-width="3.5" />
    <line x1="122" y1="476" x2="168" y2="476" stroke="#1e293b" stroke-width="3" />
    <line x1="132" y1="487" x2="158" y2="487" stroke="#1e293b" stroke-width="2.5" />
    <text x="194" y="472" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155">Ground (0V)</text>

    <g transform="translate(154, 240)">
      <polygon points="0,0 32,-16 32,16" fill="#2563eb" />
      <line x1="32" y1="0" x2="210" y2="0" stroke="#2563eb" stroke-width="4" />
      <circle cx="210" cy="0" r="7" fill="#2563eb" />
      <text x="226" y="7" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#1d4ed8">Vout</text>

      <line x1="118" y1="-116" x2="118" y2="0" stroke="#047857" stroke-width="4" stroke-dasharray="8,4" />
      <polygon points="118,-116 111,-100 125,-100" fill="#047857" />
      <text x="136" y="-88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#047857">Input Motion (x)</text>
    </g>
  </g>

  <!-- Right: Input/Output Tracking & Flat Frequency Bode Plot -->
  <rect x="816" y="130" width="736" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="844" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    B. Instantaneous Tracking &amp; Flat Bode
  </text>
  <text x="844" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Zero distortion and zero phase delay
  </text>

  <!-- Arbitrary Signal Tracking Comparison -->
  <g transform="translate(848, 232)">
    <rect x="0" y="0" width="672" height="270" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="20" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Time-Domain Signal Tracking:</text>

    <path d="M 40 165 C 80 85 130 205 190 115 C 240 45 280 185 340 135 C 400 85 460 195 530 95 L 610 145"
          fill="none" stroke="#64748b" stroke-width="3.5" stroke-dasharray="7,4" />
    <text x="480" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155">Input Measurand</text>

    <path d="M 40 185 C 80 65 130 235 190 105 C 240 20 280 215 340 140 C 400 65 460 225 530 75 L 610 155"
          fill="none" stroke="#2563eb" stroke-width="4" />
    <text x="468" y="246" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Sensor Output</text>
    <text x="24" y="246" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">Zero Time Lag · 0° Phase</text>
  </g>

  <!-- Bode Plots (Magnitude & Phase) -->
  <g transform="translate(848, 524)">
    <rect x="0" y="0" width="672" height="316" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="20" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Frequency-Domain Bode Response:</text>

    <!-- Magnitude Plot -->
    <g transform="translate(36, 56)">
      <line x1="120" y1="24" x2="600" y2="24" stroke="#e2e8f0" stroke-width="1.5" />
      <line x1="120" y1="78" x2="600" y2="78" stroke="#94a3b8" stroke-width="2" />
      <line x1="120" y1="78" x2="120" y2="10" stroke="#0f172a" stroke-width="2.5" />
      <text x="108" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="end">Gain |M|</text>
      <line x1="120" y1="42" x2="600" y2="42" stroke="#2563eb" stroke-width="4" />
      <text x="360" y="26" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">Flat Across All Frequencies</text>
    </g>

    <!-- Phase Plot -->
    <g transform="translate(36, 170)">
      <line x1="120" y1="34" x2="600" y2="34" stroke="#94a3b8" stroke-width="2" />
      <line x1="120" y1="84" x2="600" y2="84" stroke="#e2e8f0" stroke-width="1.5" />
      <line x1="120" y1="84" x2="120" y2="10" stroke="#0f172a" stroke-width="2.5" />
      <text x="108" y="42" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857" text-anchor="end">Phase φ</text>
      <line x1="120" y1="34" x2="600" y2="34" stroke="#059669" stroke-width="4" />
      <text x="360" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857" text-anchor="middle">0° In-Phase Across Bandwidth</text>
      <text x="360" y="114" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Excitation Frequency (ω) →</text>
    </g>
  </g>
</svg>`
  },

  u5_fig5: {
    id: 'u5_fig5',
    filename: 'u5_fig5_first_order_step_ramp_freq.svg',
    title: 'Figure 5.5: First-Order System Dynamic Responses',
    topicRef: '5.5 First-Order Systems',
    description:
      'First-order system dynamics: Clinical thermometer physical bulb, exponential step response with 63.2% and 99.3% milestones, dynamic ramp tracking with delay, and Bode low-pass roll-off.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 5.5: First-Order Dynamics · Step, Ramp &amp; Roll-Off
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit V · Sec 5.5
  </text>

  <!-- Panel 1: Step Response & Thermometer Model -->
  <rect x="48" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="72" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    A. Step Relaxation
  </text>
  <text x="72" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Bulb lag &amp; time constant τ
  </text>

  <!-- Thermometer Bulb Physical Schematic -->
  <g transform="translate(70, 222)">
    <rect x="0" y="0" width="440" height="148" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.4" />
    <path d="M 28 84 L 220 84" fill="none" stroke="#6d28d9" stroke-width="4" />
    <circle cx="290" cy="84" r="36" fill="#e0e7ff" stroke="#4f46e5" stroke-width="3" />
    <text x="290" y="91" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#3730a3" text-anchor="middle">Bulb</text>

    <line x1="230" y1="42" x2="256" y2="62" stroke="#dc2626" stroke-width="3" />
    <polygon points="256,62 246,57 253,48" fill="#dc2626" />
    <line x1="350" y1="42" x2="324" y2="62" stroke="#dc2626" stroke-width="3" />
    <polygon points="324,62 327,48 334,57" fill="#dc2626" />
    <text x="290" y="28" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Heat Convection</text>
    <text x="26" y="48" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Fluid Temp</text>
    <text x="26" y="128" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">Glass Stem</text>
  </g>

  <!-- Step Response Curve Graph -->
  <g transform="translate(92, 622)">
    <line x1="0" y1="-176" x2="386" y2="-176" stroke="#059669" stroke-width="2.5" stroke-dasharray="6,4" />
    <text x="195" y="-188" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">Steady State (100%)</text>

    <line x1="0" y1="0" x2="404" y2="0" stroke="#0f172a" stroke-width="2.8" />
    <line x1="0" y1="0" x2="0" y2="-212" stroke="#0f172a" stroke-width="2.8" />
    <polygon points="404,0 392,-5 392,5" fill="#0f172a" />
    <polygon points="0,-212 -5,-200 5,-200" fill="#0f172a" />
    <text x="356" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Time</text>
    <text x="12" y="-210" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Output</text>

    <line x1="0" y1="0" x2="76" y2="-176" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4,4" />
    <path d="M 0 0 Q 52 -104 106 -138 T 218 -169 T 386 -176" fill="none" stroke="#2563eb" stroke-width="4" />

    <line x1="76" y1="0" x2="76" y2="-112" stroke="#dc2626" stroke-dasharray="4,3" stroke-width="2" />
    <circle cx="76" cy="-112" r="6" fill="#dc2626" />
    <text x="86" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">1τ (63.2%)</text>

    <line x1="340" y1="0" x2="340" y2="-175" stroke="#059669" stroke-dasharray="4,3" stroke-width="2" />
    <circle cx="340" cy="-175" r="6" fill="#059669" />
    <text x="275" y="-140" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">5τ (99.3%)</text>
  </g>

  <!-- Panel 1 Bottom Summary Box -->
  <g transform="translate(70, 720)">
    <rect width="440" height="118" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Transient Milestones:</text>
    <text x="18" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8">• 1τ = 63.2%   • 5τ = 99.3%</text>
    <text x="18" y="100" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Monotonic rise · Zero overshoot</text>
  </g>

  <!-- Panel 2: Ramp Response & Dynamic Error -->
  <rect x="558" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="582" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    B. Dynamic Ramp Tracking
  </text>
  <text x="582" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Steady-state lag τ &amp; dynamic error
  </text>

  <!-- Ramp Response Graph -->
  <g transform="translate(604, 588)">
    <line x1="0" y1="0" x2="396" y2="0" stroke="#0f172a" stroke-width="2.8" />
    <line x1="0" y1="0" x2="0" y2="-320" stroke="#0f172a" stroke-width="2.8" />
    <polygon points="396,0 384,-5 384,5" fill="#0f172a" />
    <polygon points="0,-320 -5,-308 5,-308" fill="#0f172a" />
    <text x="342" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Time</text>
    <text x="12" y="-312" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Response</text>

    <line x1="0" y1="0" x2="346" y2="-280" stroke="#64748b" stroke-width="3" stroke-dasharray="6,4" />
    <text x="176" y="-264" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155">Input Ramp</text>

    <path d="M 0 0 C 40 -10 80 -45 140 -115 L 346 -232" fill="none" stroke="#7c3aed" stroke-width="4" />
    <text x="230" y="-128" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9">Sensor Output</text>

    <line x1="186" y1="-152" x2="246" y2="-152" stroke="#dc2626" stroke-width="3" />
    <polygon points="186,-152 196,-157 196,-147" fill="#dc2626" />
    <polygon points="246,-152 236,-157 236,-147" fill="#dc2626" />
    <text x="210" y="-172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Lag (Δt = τ)</text>

    <line x1="290" y1="-235" x2="290" y2="-194" stroke="#b45309" stroke-width="3" />
    <polygon points="290,-235 285,-225 295,-225" fill="#b45309" />
    <polygon points="290,-194 285,-204 295,-204" fill="#b45309" />
    <text x="394" y="-208" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="end">Error (ess)</text>
  </g>

  <!-- Panel 2 Bottom Summary Box -->
  <g transform="translate(580, 720)">
    <rect width="440" height="118" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Steady-State Ramp Law:</text>
    <text x="18" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626">• Permanent Time Lag = τ</text>
    <text x="18" y="100" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">• Error ess = K · Slope · τ</text>
  </g>

  <!-- Panel 3: Sinusoidal Response & Bode Rolloff -->
  <rect x="1068" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="1092" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    C. Harmonic Bode Roll-Off
  </text>
  <text x="1092" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Low-pass filter &amp; -3 dB cutoff
  </text>

  <!-- Frequency Plots -->
  <g transform="translate(1148, 252)">
    <rect x="0" y="0" width="124" height="145" fill="#f0fdf4" opacity="0.85" />
    <text x="62" y="24" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">Flat Band</text>

    <line x1="0" y1="145" x2="368" y2="145" stroke="#0f172a" stroke-width="2.5" />
    <line x1="0" y1="145" x2="0" y2="10" stroke="#0f172a" stroke-width="2.5" />
    <text x="-14" y="42" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="end">|M|</text>
    <text x="12" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155">1.0 (0 dB)</text>
    <text x="12" y="96" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">0.707 (-3 dB)</text>
    <line x1="0" y1="86" x2="368" y2="86" stroke="#fca5a5" stroke-dasharray="4,4" stroke-width="2" />

    <path d="M 0 46 Q 140 50 184 86 T 356 140" fill="none" stroke="#2563eb" stroke-width="4" />
    <circle cx="184" cy="86" r="6" fill="#dc2626" />
    <text x="184" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Cutoff Corner (1/τ)</text>

    <!-- Bottom: Phase Shift -->
    <g transform="translate(0, 224)">
      <line x1="0" y1="130" x2="368" y2="130" stroke="#0f172a" stroke-width="2.5" />
      <line x1="0" y1="130" x2="0" y2="10" stroke="#0f172a" stroke-width="2.5" />
      <text x="-14" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857" text-anchor="end">φ</text>
      <text x="12" y="26" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155">0°</text>
      <text x="12" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">-45°</text>
      <text x="12" y="116" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155">-90°</text>
      <line x1="0" y1="64" x2="368" y2="64" stroke="#cbd5e1" stroke-dasharray="4,4" stroke-width="2" />

      <path d="M 0 22 Q 124 28 184 64 T 356 114" fill="none" stroke="#059669" stroke-width="4" />
      <circle cx="184" cy="64" r="6" fill="#dc2626" />
      <text x="184" y="162" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Frequency (ω) →</text>
    </g>
  </g>

  <!-- Panel 3 Bottom Summary Box -->
  <g transform="translate(1090, 720)">
    <rect width="440" height="118" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Frequency Landmarks:</text>
    <text x="18" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">• Flat Band: M ≥ 0.995, φ ≤ 5.7°</text>
    <text x="18" y="100" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626">• Cutoff: M = 0.707 (-3 dB), -45°</text>
  </g>
</svg>`
  },

  u5_fig6: {
    id: 'u5_fig6',
    filename: 'u5_fig6_second_order_damping_regimes.svg',
    title: 'Figure 5.6: Second-Order System Dynamics · Produce Scale & Damping Regimes',
    topicRef: '5.6 Second-Order Systems',
    description:
      'Second-order system analysis: Produce scale mechanical schematic, transient step curves across 4 damping regimes, and frequency response resonance curves.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 5.6: Second-Order Dynamics · Damping &amp; Resonance
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit V · Sec 5.6
  </text>

  <!-- Left: Step Responses of 4 Damping Regimes & Produce Scale Diagram -->
  <rect x="48" y="128" width="816" height="732" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="74" y="168" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    A. Produce Scale Model &amp; Damping Regimes
  </text>
  <text x="74" y="198" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Mass-spring-damper step responses
  </text>

  <!-- Diagram of Produce Weight Scale -->
  <g transform="translate(74, 214)">
    <rect x="0" y="0" width="764" height="148" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />

    <!-- Scale Pan with Produce -->
    <rect x="34" y="34" width="160" height="16" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
    <ellipse cx="84" cy="24" rx="22" ry="11" fill="#d97706" />
    <ellipse cx="122" cy="22" rx="24" ry="12" fill="#b45309" />
    <ellipse cx="154" cy="26" rx="20" ry="10" fill="#d97706" />
    <text x="206" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309">Load (m)</text>

    <!-- Scale Mechanism Box -->
    <rect x="24" y="58" width="240" height="78" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2" />
    <path d="M 52 58 L 52 68 L 66 76 L 42 86 L 66 96 L 42 106 L 52 114 L 52 136" fill="none" stroke="#2563eb" stroke-width="3" />
    <text x="74" y="92" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">k</text>
    <rect x="132" y="76" width="32" height="30" fill="none" stroke="#dc2626" stroke-width="2.5" />
    <line x1="118" y1="91" x2="148" y2="91" stroke="#dc2626" stroke-width="3.5" />
    <line x1="164" y1="91" x2="180" y2="91" stroke="#dc2626" stroke-width="2.5" />
    <text x="190" y="98" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">Damper</text>

    <!-- Dial Pointer Indicator -->
    <circle cx="338" cy="74" r="46" fill="#ffffff" stroke="#334155" stroke-width="2.5" />
    <line x1="338" y1="74" x2="366" y2="46" stroke="#dc2626" stroke-width="3.5" />
    <circle cx="338" cy="74" r="5" fill="#334155" />
    <text x="338" y="140" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a" text-anchor="middle">Dial</text>

    <!-- Essential Parameters Box -->
    <rect x="408" y="16" width="340" height="116" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="424" y="46" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Dynamic Parameters:</text>
    <text x="424" y="80" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8">• Natural Freq (ωn)</text>
    <text x="424" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626">• Damping Ratio (ζ)</text>
  </g>

  <!-- Step Response Chart -->
  <g transform="translate(104, 624)">
    <line x1="0" y1="-150" x2="620" y2="-150" stroke="#059669" stroke-width="2.5" stroke-dasharray="6,4" />
    <text x="630" y="-143" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">Final Value</text>

    <line x1="0" y1="0" x2="680" y2="0" stroke="#0f172a" stroke-width="2.8" />
    <line x1="0" y1="0" x2="0" y2="-218" stroke="#0f172a" stroke-width="2.8" />
    <polygon points="680,0 668,-5 668,5" fill="#0f172a" />
    <polygon points="0,-218 -5,-206 5,-206" fill="#0f172a" />
    <text x="692" y="8" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Time</text>
    <text x="12" y="-212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Displacement</text>

    <!-- 1. Undamped (zeta = 0) -->
    <path d="M 0 0 C 36 -8 72 -75 110 -150 C 148 -225 186 -240 224 -240 C 262 -240 300 -225 338 -150 C 376 -75 414 0 452 0 C 490 0 528 -75 566 -150 L 620 -225"
          fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,4" />

    <!-- 2. Underdamped -->
    <path d="M 0 0 C 34 -12 68 -75 104 -150 C 124 -192 154 -225 184 -225 C 224 -225 264 -116 314 -116 C 364 -116 404 -168 444 -164 C 484 -158 524 -146 564 -150 L 620 -150"
          fill="none" stroke="#2563eb" stroke-width="3.5" />

    <!-- 3. Optimal Damping (zeta = 0.707) -->
    <path d="M 0 0 C 48 -18 96 -94 146 -142 C 176 -160 216 -156 256 -150 L 620 -150"
          fill="none" stroke="#047857" stroke-width="3.5" />

    <!-- 4. Critically Damped (zeta = 1.0) -->
    <path d="M 0 0 C 56 -12 114 -75 174 -118 C 234 -140 314 -148 414 -150 L 620 -150"
          fill="none" stroke="#d97706" stroke-width="4" stroke-dasharray="8,4" />

    <!-- 5. Overdamped -->
    <path d="M 0 0 C 76 -8 176 -42 276 -88 C 396 -118 516 -140 620 -149"
          fill="none" stroke="#475569" stroke-width="3" />
  </g>

  <!-- Legend Box for Damping Regimes -->
  <g transform="translate(74, 728)">
    <rect width="764" height="114" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
    <line x1="20" y1="36" x2="54" y2="36" stroke="#dc2626" stroke-width="3" stroke-dasharray="4,3" />
    <text x="64" y="43" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">Undamped (Ringing)</text>

    <line x1="392" y1="36" x2="426" y2="36" stroke="#2563eb" stroke-width="4" />
    <text x="436" y="43" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Underdamped (Wobble)</text>

    <line x1="20" y1="84" x2="54" y2="84" stroke="#d97706" stroke-width="4" stroke-dasharray="6,3" />
    <text x="64" y="91" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309">Critical (Fast, No Surge)</text>

    <line x1="392" y1="84" x2="426" y2="84" stroke="#475569" stroke-width="3.5" />
    <text x="436" y="91" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#334155">Overdamped (Sluggish)</text>
  </g>

  <!-- Right: Frequency Response & Resonance Curves -->
  <rect x="888" y="128" width="664" height="732" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="914" y="168" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    B. Harmonic Frequency Resonance
  </text>
  <text x="914" y="198" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Resonant peaking &amp; bandwidth flatness
  </text>

  <!-- Frequency Response Graph -->
  <g transform="translate(932, 434)">
    <line x1="0" y1="-100" x2="554" y2="-100" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="2" />
    <text x="12" y="-110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155">Gain = 1.0 (Flat)</text>

    <line x1="0" y1="0" x2="574" y2="0" stroke="#0f172a" stroke-width="2.8" />
    <line x1="0" y1="0" x2="0" y2="-212" stroke="#0f172a" stroke-width="2.8" />
    <polygon points="574,0 562,-5 562,5" fill="#0f172a" />
    <polygon points="0,-212 -5,-200 5,-200" fill="#0f172a" />
    <text x="574" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a" text-anchor="end">Freq Ratio →</text>
    <text x="12" y="-202" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Gain |M|</text>

    <line x1="216" y1="0" x2="216" y2="-198" stroke="#dc2626" stroke-dasharray="4,3" stroke-width="2" />
    <text x="216" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Resonance (r = 1.0)</text>

    <path d="M 0 -100 Q 148 -105 206 -196 Q 226 -196 276 -60 T 536 -12" fill="none" stroke="#2563eb" stroke-width="4" />
    <circle cx="212" cy="-196" r="6" fill="#2563eb" />
    <text x="230" y="-186" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Resonant Peak (Low ζ)</text>

    <path d="M 0 -100 C 118 -100 176 -100 216 -114 Q 276 -50 536 -12" fill="none" stroke="#047857" stroke-width="3.5" />
    <text x="294" y="-92" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857">Optimal Flat Band</text>

    <path d="M 0 -100 Q 118 -75 216 -40 T 536 -8" fill="none" stroke="#475569" stroke-width="3" />
    <text x="104" y="-44" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155">Heavy ζ</text>
  </g>

  <!-- Physical Analogy Badges Right Panel -->
  <g transform="translate(914, 514)">
    <rect width="612" height="148" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.4" />
    <text x="20" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1e40af">Physical Intuition Models:</text>
    <text x="20" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626">• Swing: In-phase pushes build peak height</text>
    <text x="20" y="114" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">• Unbalanced Tire: Highway speed hits fn</text>
  </g>

  <!-- Design Guidelines Summary Right -->
  <g transform="translate(914, 678)">
    <rect width="612" height="164" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
    <text x="20" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Design Selection Rules:</text>
    <text x="20" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8">• Scales: Critical Damping (ζ ≈ 1.0)</text>
    <text x="20" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">• Accelerometers: Optimal Flat (ζ ≈ 0.707)</text>
    <text x="20" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e293b">• Resonance Invariant: Phase = -90° at ωn</text>
  </g>
</svg>`
  },

  u5_fig7: {
    id: 'u5_fig7',
    filename: 'u5_fig7_real_world_systems_zoo.svg',
    title: 'Figure 5.7: Real-World Sensor Taxonomy: Zero, First & Second-Order Systems',
    topicRef: '5.7 Real-World Examples',
    description:
      'Comparative engineering catalog showing physical cross-sectional cutaways of Zero-Order (strain gauge), First-Order (thermocouple bead), and Second-Order (piezoelectric accelerometer) sensors. Free of math formulas and wordy paragraphs.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 5.7: Real-World Sensors · Cutaways by System Order
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit V · Sec 5.7
  </text>

  <!-- Column 1: Zero-Order Sensor Architecture -->
  <g transform="translate(48, 130)">
    <rect width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="484" height="62" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
    <text x="24" y="41" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#1e40af">
      1. Zero-Order Architecture
    </text>

    <!-- Cantilever Beam & Foil Strain Gauge Cutaway -->
    <g transform="translate(24, 80)">
      <rect width="436" height="264" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Bonded Foil Strain Gauge</text>

      <rect x="24" y="64" width="26" height="176" fill="#334155" />
      <rect x="50" y="122" width="256" height="36" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
      <text x="166" y="147" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Elastic Beam</text>

      <rect x="74" y="106" width="118" height="16" rx="2" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
      <text x="133" y="96" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#a16207" text-anchor="middle">Foil Grid</text>

      <line x1="316" y1="68" x2="316" y2="122" stroke="#dc2626" stroke-width="4" />
      <polygon points="316,122 309,108 323,108" fill="#dc2626" />
      <text x="342" y="62" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Load Force</text>

      <path d="M 192 114 Q 230 114 256 174" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,3" />
      <rect x="234" y="168" width="184" height="76" rx="6" fill="#ffffff" stroke="#3b82f6" stroke-width="1.8" />
      <text x="326" y="200" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e40af" text-anchor="middle">Bridge Amp</text>
      <text x="326" y="228" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857" text-anchor="middle">Instant Volts</text>
    </g>

    <!-- Architectural Key Facts -->
    <g transform="translate(24, 362)">
      <rect width="436" height="106" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Transduction Physics:</text>
      <text x="18" y="66" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Direct piezoresistive ΔR shift</text>
      <text x="18" y="94" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Zero lag below acoustic limit</text>

      <rect y="120" width="436" height="106" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="154" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Industrial Uses:</text>
      <text x="18" y="186" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e40af">• Impact &amp; load cell gauges</text>
      <text x="18" y="214" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e40af">• Linear position potentiometers</text>

      <rect y="240" width="436" height="106" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.4" />
      <text x="18" y="274" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1d4ed8">System Verdict:</text>
      <text x="18" y="306" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">Zero-Order · Instant Pure Gain</text>
      <text x="18" y="334" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Static calibration holds cleanly</text>
    </g>
  </g>

  <!-- Column 2: First-Order Sensor Architecture -->
  <g transform="translate(558, 130)">
    <rect width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="484" height="62" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.2" />
    <text x="24" y="41" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#6d28d9">
      2. First-Order Architecture
    </text>

    <!-- Convective Thermocouple Bead Cutaway -->
    <g transform="translate(24, 80)">
      <rect width="436" height="264" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Thermocouple in Flowing Fluid</text>

      <rect x="24" y="58" width="388" height="16" fill="#475569" />
      <rect x="24" y="232" width="388" height="16" fill="#475569" />

      <path d="M 36 108 Q 140 113 240 103 T 396 108" fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-dasharray="6,4" />
      <path d="M 36 154 Q 140 159 240 149 T 396 154" fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-dasharray="6,4" />
      <path d="M 36 198 Q 140 203 240 193 T 396 198" fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-dasharray="6,4" />
      <text x="342" y="96" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">Flow (h)</text>

      <rect x="196" y="58" width="44" height="82" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="2" />
      <line x1="208" y1="140" x2="218" y2="168" stroke="#dc2626" stroke-width="3.5" />
      <line x1="228" y1="140" x2="218" y2="168" stroke="#1d4ed8" stroke-width="3.5" />
      <circle cx="218" cy="168" r="14" fill="#334155" stroke="#0f172a" stroke-width="2" />
      <circle cx="218" cy="168" r="8" fill="#f59e0b" />
      <text x="218" y="210" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a" text-anchor="middle">Hot Bead</text>

      <line x1="154" y1="168" x2="196" y2="168" stroke="#ea580c" stroke-width="3" />
      <polygon points="196,168 184,162 184,174" fill="#ea580c" />
    </g>

    <!-- Architectural Key Facts -->
    <g transform="translate(24, 362)">
      <rect width="436" height="106" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Transduction Physics:</text>
      <text x="18" y="66" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Convective thermal energy lag</text>
      <text x="18" y="94" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Single heat capacity storage</text>

      <rect y="120" width="436" height="106" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="154" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Industrial Uses:</text>
      <text x="18" y="186" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#6d28d9">• Bare &amp; sheathed thermocouples</text>
      <text x="18" y="214" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#6d28d9">• PT100 RTD &amp; thermistor probes</text>

      <rect y="240" width="436" height="106" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.4" />
      <text x="18" y="274" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#6d28d9">System Verdict:</text>
      <text x="18" y="306" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">First-Order · Exponential</text>
      <text x="18" y="334" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Wait 5τ for 99.3% steady accuracy</text>
    </g>
  </g>

  <!-- Column 3: Second-Order Sensor Architecture -->
  <g transform="translate(1068, 130)">
    <rect width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="484" height="62" rx="10" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2" />
    <text x="24" y="41" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#b91c1c">
      3. Second-Order Architecture
    </text>

    <!-- Seismic Mass Accelerometer Cutaway -->
    <g transform="translate(24, 80)">
      <rect width="436" height="264" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Piezo Vibration Accelerometer</text>

      <rect x="44" y="54" width="348" height="172" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2.5" />
      <rect x="64" y="68" width="308" height="144" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />

      <rect x="178" y="226" width="80" height="18" fill="#475569" stroke="#1e293b" stroke-width="2" />
      <text x="342" y="252" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Mount Base</text>

      <rect x="122" y="170" width="192" height="32" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
      <text x="218" y="193" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#854d0e" text-anchor="middle">Piezo Crystal (k)</text>

      <rect x="122" y="114" width="192" height="52" rx="4" fill="#475569" stroke="#1e293b" stroke-width="2" />
      <text x="218" y="147" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#ffffff" text-anchor="middle">Seismic Mass m</text>

      <line x1="218" y1="84" x2="218" y2="114" stroke="#dc2626" stroke-width="3.5" />
      <text x="234" y="100" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">Preload</text>
    </g>

    <!-- Architectural Key Facts -->
    <g transform="translate(24, 362)">
      <rect width="436" height="106" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Transduction Physics:</text>
      <text x="18" y="66" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Seismic mass &amp; crystal spring</text>
      <text x="18" y="94" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Kinetic + elastic exchange</text>

      <rect y="120" width="436" height="106" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
      <text x="18" y="154" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a">Industrial Uses:</text>
      <text x="18" y="186" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#b91c1c">• Piezo vibration accelerometers</text>
      <text x="18" y="214" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#b91c1c">• Produce scales &amp; manometers</text>

      <rect y="240" width="436" height="106" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.4" />
      <text x="18" y="274" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#dc2626">System Verdict:</text>
      <text x="18" y="306" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">Second-Order · Resonance</text>
      <text x="18" y="334" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Operate below 20% fn for flatness</text>
    </g>
  </g>
</svg>`
  }
};
