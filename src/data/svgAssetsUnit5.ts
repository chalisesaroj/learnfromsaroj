import { SvgAsset } from './svgAssets';

export const SVG_FIGURES_UNIT5: Record<string, SvgAsset> = {
  u5_fig1: {
    id: 'u5_fig1',
    filename: 'u5_fig1_static_characteristics.svg',
    title: 'Figure 5.1: Static Characteristics of Measurement Systems',
    topicRef: '5.1 Static Characteristics',
    description:
      'Clean visualization of static performance metrics: Accuracy vs. Precision target dartboards, static calibration curve with sensitivity slope, Hysteresis loop, and Dead Band / Threshold zones.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 5.1: Static Characteristics of Measurement Systems · Performance Metrics
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit V · Section 5.1
  </text>

  <!-- Panel 1: Accuracy vs Precision (4 Dartboards) -->
  <rect x="50" y="130" width="480" height="730" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="75" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    A. Accuracy vs. Precision
  </text>
  <text x="75" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Target Bullseye &amp; Error Distributions
  </text>

  <!-- Target 1: High Accuracy, High Precision -->
  <g transform="translate(170, 310)">
    <circle r="70" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
    <circle r="46" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <circle r="23" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
    <circle r="7" fill="#ef4444" />
    <circle cx="2" cy="-3" r="4.5" fill="#1e40af" />
    <circle cx="-3" cy="2" r="4.5" fill="#1e40af" />
    <circle cx="3" cy="2" r="4.5" fill="#1e40af" />
    <circle cx="-2" cy="-2" r="4.5" fill="#1e40af" />
    <text x="0" y="95" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#047857" text-anchor="middle">High Accuracy</text>
    <text x="0" y="118" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#047857" text-anchor="middle">High Precision</text>
  </g>

  <!-- Target 2: Low Accuracy, High Precision -->
  <g transform="translate(410, 310)">
    <circle r="70" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
    <circle r="46" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <circle r="23" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
    <circle r="7" fill="#ef4444" />
    <circle cx="40" cy="-36" r="4.5" fill="#b91c1c" />
    <circle cx="44" cy="-33" r="4.5" fill="#b91c1c" />
    <circle cx="37" cy="-40" r="4.5" fill="#b91c1c" />
    <circle cx="42" cy="-38" r="4.5" fill="#b91c1c" />
    <text x="0" y="95" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309" text-anchor="middle">Low Accuracy</text>
    <text x="0" y="118" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#b45309" text-anchor="middle">High Precision (Bias)</text>
  </g>

  <!-- Target 3: High Accuracy, Low Precision -->
  <g transform="translate(170, 560)">
    <circle r="70" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
    <circle r="46" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <circle r="23" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
    <circle r="7" fill="#ef4444" />
    <circle cx="-32" cy="-24" r="4.5" fill="#6366f1" />
    <circle cx="35" cy="22" r="4.5" fill="#6366f1" />
    <circle cx="-20" cy="35" r="4.5" fill="#6366f1" />
    <circle cx="28" cy="-28" r="4.5" fill="#6366f1" />
    <text x="0" y="95" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#4338ca" text-anchor="middle">High Accuracy</text>
    <text x="0" y="118" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#4338ca" text-anchor="middle">Low Precision (Scatter)</text>
  </g>

  <!-- Target 4: Low Accuracy, Low Precision -->
  <g transform="translate(410, 560)">
    <circle r="70" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
    <circle r="46" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <circle r="23" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.5" />
    <circle r="7" fill="#ef4444" />
    <circle cx="25" cy="-55" r="4.5" fill="#64748b" />
    <circle cx="58" cy="-25" r="4.5" fill="#64748b" />
    <circle cx="45" cy="-45" r="4.5" fill="#64748b" />
    <circle cx="10" cy="-60" r="4.5" fill="#64748b" />
    <text x="0" y="95" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#64748b" text-anchor="middle">Low Accuracy</text>
    <text x="0" y="118" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#64748b" text-anchor="middle">Low Precision</text>
  </g>

  <!-- Bottom Legend Bar Panel 1 -->
  <rect x="70" y="730" width="440" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <circle cx="95" cy="760" r="6" fill="#1e40af" />
  <text x="115" y="765" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Target Center = True Measurand Value</text>
  <circle cx="95" cy="800" r="6" fill="#b91c1c" />
  <text x="115" y="805" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Points = Individual Sensor Readings</text>

  <!-- Panel 2: Calibration Curve & Sensitivity Slope -->
  <rect x="560" y="130" width="480" height="730" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="585" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    B. Static Sensitivity &amp; Linearity
  </text>
  <text x="585" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Calibration Curve &amp; Sensitivity Slope
  </text>

  <!-- Graph Axes Panel 2 -->
  <g transform="translate(620, 300)">
    <line x1="0" y1="0" x2="360" y2="0" stroke="#f1f5f9" stroke-width="1.5" />
    <line x1="0" y1="100" x2="360" y2="100" stroke="#f1f5f9" stroke-width="1.5" />
    <line x1="0" y1="200" x2="360" y2="200" stroke="#f1f5f9" stroke-width="1.5" />
    <line x1="0" y1="300" x2="360" y2="300" stroke="#f1f5f9" stroke-width="1.5" />

    <!-- Axes -->
    <line x1="0" y1="300" x2="380" y2="300" stroke="#334155" stroke-width="2.5" />
    <line x1="0" y1="300" x2="0" y2="-30" stroke="#334155" stroke-width="2.5" />
    <polygon points="380,300 370,295 370,305" fill="#334155" />
    <polygon points="0,-30 -5,-20 5,-20" fill="#334155" />
    <text x="365" y="335" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#334155">Input Measurand (x)</text>
    <text x="-15" y="-42" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#334155">Output Reading (y)</text>

    <!-- Linear Calibration Line -->
    <line x1="30" y1="270" x2="340" y2="30" stroke="#2563eb" stroke-width="3" />
    <text x="260" y="20" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">Linear Calibration Line</text>

    <!-- Sensitivity Slope Triangle -->
    <polygon points="150,177 240,177 240,107" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,3" />
    <text x="195" y="202" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1d4ed8" text-anchor="middle">Δx</text>
    <text x="262" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1d4ed8">Δy</text>
    <text x="140" y="135" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#2563eb">Sensitivity Slope (K)</text>

    <!-- Actual Non-Linear Curve -->
    <path d="M 30 270 Q 150 200 220 120 T 340 30" fill="none" stroke="#d97706" stroke-width="2.5" stroke-dasharray="7,4" />
    <text x="120" y="240" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#d97706">Actual Non-Linear Response</text>

    <!-- Non-Linearity Deviation Arrow -->
    <line x1="170" y1="161" x2="190" y2="135" stroke="#dc2626" stroke-width="2" />
    <text x="200" y="150" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">Max Deviation</text>
  </g>

  <!-- Bottom Legend Bar Panel 2 -->
  <rect x="580" y="730" width="440" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <line x1="605" y1="765" x2="645" y2="765" stroke="#2563eb" stroke-width="3" />
  <text x="655" y="770" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Slope = Sensitivity Factor (K)</text>
  <line x1="605" y1="805" x2="645" y2="805" stroke="#d97706" stroke-width="2.5" stroke-dasharray="6,3" />
  <text x="655" y="810" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Deviation = Non-Linearity</text>

  <!-- Panel 3: Hysteresis & Dead Band -->
  <rect x="1070" y="130" width="480" height="730" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="1095" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    C. Hysteresis &amp; Dead Band
  </text>
  <text x="1095" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Directional Lag &amp; Insensitivity Regions
  </text>

  <!-- Graph Axes Panel 3 -->
  <g transform="translate(1130, 300)">
    <!-- Axes -->
    <line x1="0" y1="300" x2="380" y2="300" stroke="#334155" stroke-width="2.5" />
    <line x1="0" y1="300" x2="0" y2="-30" stroke="#334155" stroke-width="2.5" />
    <polygon points="380,300 370,295 370,305" fill="#334155" />
    <polygon points="0,-30 -5,-20 5,-20" fill="#334155" />
    <text x="365" y="335" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#334155">Input (x)</text>
    <text x="-15" y="-42" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#334155">Output (y)</text>

    <!-- Dead Band near origin -->
    <rect x="0" y="293" width="55" height="14" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2" />
    <text x="27" y="335" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#b91c1c" text-anchor="middle">Dead Band</text>
    <line x1="55" y1="285" x2="55" y2="315" stroke="#ef4444" stroke-width="2" />
    <text x="60" y="280" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#dc2626">Threshold</text>

    <!-- Increasing Loading Path -->
    <path d="M 55 300 Q 220 230 350 40" fill="none" stroke="#16a34a" stroke-width="3.5" />
    <polygon points="200,222 188,228 194,218" fill="#16a34a" />
    <text x="220" y="240" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d">Loading Path (Up)</text>

    <!-- Decreasing Unloading Path -->
    <path d="M 350 40 Q 170 90 55 300" fill="none" stroke="#d97706" stroke-width="3.5" stroke-dasharray="8,4" />
    <polygon points="180,108 192,102 186,112" fill="#d97706" />
    <text x="95" y="105" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309">Unloading Path (Down)</text>

    <!-- Hysteresis Width Double Arrow -->
    <line x1="190" y1="125" x2="190" y2="205" stroke="#7c3aed" stroke-width="2.5" />
    <polygon points="190,125 185,137 195,137" fill="#7c3aed" />
    <polygon points="190,205 185,193 195,193" fill="#7c3aed" />
    <text x="205" y="170" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#6d28d9">Hysteresis (h)</text>
  </g>

  <!-- Bottom Legend Bar Panel 3 -->
  <rect x="1090" y="730" width="440" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
  <line x1="1115" y1="765" x2="1155" y2="765" stroke="#16a34a" stroke-width="3" />
  <text x="1165" y="770" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Increasing Measurand Input</text>
  <line x1="1115" y1="805" x2="1155" y2="805" stroke="#d97706" stroke-width="3" stroke-dasharray="6,3" />
  <text x="1165" y="810" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Decreasing Measurand Input</text>
</svg>`
  },

  u5_fig2: {
    id: 'u5_fig2',
    filename: 'u5_fig2_dynamic_characteristics_rise_delay.svg',
    title: 'Figure 5.2: Dynamic Step Response Metrics & Transient Timing',
    topicRef: '5.2 Dynamic Characteristics',
    description:
      'Widescreen clean transient step response curve illustrating Delay Time (td), Rise Time (tr), Peak Time (tp), Maximum Percent Overshoot (Mp), and Settling Time (ts). Free from formulas and long paragraphs.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 5.2: Dynamic Step Response · Transient Metrics &amp; Timing Landmarks
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit V · Section 5.2
  </text>

  <!-- Main Canvas Area -->
  <rect x="50" y="130" width="1500" height="630" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />

  <!-- Coordinate System -->
  <g transform="translate(160, 620)">
    <!-- 2% Settling Tolerance Band -->
    <rect x="0" y="-367" width="1240" height="14" fill="#dcfce7" opacity="0.65" />
    <rect x="0" y="-353" width="1240" height="14" fill="#dcfce7" opacity="0.65" />
    
    <!-- Steady State Line y_ss = 1.0 (at y = -360) -->
    <line x1="0" y1="-360" x2="1240" y2="-360" stroke="#059669" stroke-width="2.5" stroke-dasharray="10,5" />
    <text x="1255" y="-355" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#059669">Steady-State Level (yss)</text>
    <text x="1255" y="-378" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#15803d">+2% Error Band</text>
    <text x="1255" y="-330" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#15803d">-2% Error Band</text>

    <!-- Percentage Reference Lines -->
    <line x1="0" y1="-36" x2="1240" y2="-36" stroke="#e2e8f0" stroke-dasharray="5,5" />
    <text x="-45" y="-30" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#94a3b8">10%</text>

    <line x1="0" y1="-180" x2="1240" y2="-180" stroke="#cbd5e1" stroke-dasharray="5,5" />
    <text x="-45" y="-174" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#64748b">50%</text>

    <line x1="0" y1="-324" x2="1240" y2="-324" stroke="#e2e8f0" stroke-dasharray="5,5" />
    <text x="-45" y="-318" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#94a3b8">90%</text>

    <!-- Step Input Profile (dashed grey) -->
    <line x1="-30" y1="0" x2="0" y2="0" stroke="#94a3b8" stroke-width="2" />
    <line x1="0" y1="0" x2="0" y2="-360" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="6,4" />
    <line x1="0" y1="-360" x2="200" y2="-360" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="6,4" />
    <text x="40" y="-375" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#64748b">Step Input x(t)</text>

    <!-- Main Coordinate Axes -->
    <line x1="0" y1="0" x2="1260" y2="0" stroke="#1e293b" stroke-width="3" />
    <line x1="0" y1="0" x2="0" y2="-520" stroke="#1e293b" stroke-width="3" />
    <polygon points="1260,0 1248,-6 1248,6" fill="#1e293b" />
    <polygon points="0,-520 -6,-508 6,-508" fill="#1e293b" />
    <text x="1235" y="38" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b">Time (t)</text>
    <text x="-25" y="-535" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b">Response y(t)</text>

    <!-- High-Resolution Transient Underdamped Curve -->
    <path d="M 0 0 C 40 -8 75 -40 125 -180 C 160 -280 195 -320 235 -360 C 275 -400 300 -485 330 -485 C 385 -485 460 -300 550 -315 C 640 -330 715 -380 775 -372 C 850 -365 910 -355 970 -358 L 1230 -360"
          fill="none" stroke="#2563eb" stroke-width="4" />

    <!-- 1. Pure Dead Time t0 -->
    <line x1="0" y1="0" x2="30" y2="0" stroke="#f59e0b" stroke-width="5" />
    <text x="15" y="26" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706" text-anchor="middle">t0</text>

    <!-- 2. Delay Time td (50% point) -->
    <line x1="125" y1="0" x2="125" y2="-180" stroke="#64748b" stroke-dasharray="5,4" stroke-width="1.8" />
    <circle cx="125" cy="-180" r="6" fill="#2563eb" />
    <circle cx="125" cy="0" r="5" fill="#1e293b" />
    <text x="125" y="28" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e293b" text-anchor="middle">td</text>

    <!-- 3. Rise Time tr (10% to 90% interval) -->
    <line x1="72" y1="0" x2="72" y2="-36" stroke="#7c3aed" stroke-dasharray="5,4" stroke-width="1.8" />
    <line x1="205" y1="0" x2="205" y2="-324" stroke="#7c3aed" stroke-dasharray="5,4" stroke-width="1.8" />
    <line x1="72" y1="-100" x2="205" y2="-100" stroke="#7c3aed" stroke-width="2.5" />
    <polygon points="72,-100 82,-105 82,-95" fill="#7c3aed" />
    <polygon points="205,-100 195,-105 195,-95" fill="#7c3aed" />
    <text x="138" y="-112" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#7c3aed" text-anchor="middle">Rise Time (tr)</text>

    <!-- 4. Peak Time tp & Peak Point -->
    <line x1="330" y1="0" x2="330" y2="-485" stroke="#dc2626" stroke-dasharray="5,4" stroke-width="2" />
    <circle cx="330" cy="-485" r="7" fill="#dc2626" />
    <circle cx="330" cy="0" r="5" fill="#dc2626" />
    <text x="330" y="28" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626" text-anchor="middle">tp</text>

    <!-- 5. Maximum Peak Overshoot Mp (Vertical bracket) -->
    <line x1="375" y1="-360" x2="375" y2="-485" stroke="#dc2626" stroke-width="3" />
    <polygon points="375,-360 370,-372 380,-372" fill="#dc2626" />
    <polygon points="375,-485 370,-473 380,-473" fill="#dc2626" />
    <text x="390" y="-420" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#dc2626">Max Overshoot (Mp)</text>

    <!-- 6. Settling Time ts (2% band entry) -->
    <line x1="970" y1="0" x2="970" y2="-360" stroke="#059669" stroke-dasharray="5,4" stroke-width="2" />
    <circle cx="970" cy="-358" r="6" fill="#059669" />
    <circle cx="970" cy="0" r="5" fill="#059669" />
    <text x="970" y="28" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#059669" text-anchor="middle">Settling Time (ts)</text>
  </g>

  <!-- Bottom Metric Callout Chips (Clean, no formulas, no paragraphs) -->
  <g transform="translate(50, 780)">
    <rect x="0" y="0" width="280" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="20" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">1. Delay Time (td)</text>
    <text x="20" y="54" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">50% Steady-State Threshold</text>

    <rect x="305" y="0" width="280" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="325" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#7c3aed">2. Rise Time (tr)</text>
    <text x="325" y="54" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">10% to 90% Transition Span</text>

    <rect x="610" y="0" width="280" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="630" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626">3. Peak Time (tp)</text>
    <text x="630" y="54" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">First Maximum Crest Point</text>

    <rect x="915" y="0" width="280" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="935" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626">4. Peak Overshoot (Mp)</text>
    <text x="935" y="54" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Normalized Surge Above yss</text>

    <rect x="1220" y="0" width="280" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="1240" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">5. Settling Time (ts)</text>
    <text x="1240" y="54" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Permanent Entry to ±2% Band</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 5.3: Measurement System Order Taxonomy · Physical Energy Reservoirs
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit V · Section 5.3
  </text>

  <!-- 3 Columns for 0th, 1st, and 2nd Order Models -->

  <!-- Column 1: Zero-Order System -->
  <g transform="translate(50, 130)">
    <rect width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="60" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
    <text x="30" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af">
      Zero-Order System (n = 0)
    </text>

    <!-- Transduction Block Diagram -->
    <g transform="translate(30, 85)">
      <rect width="420" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="30" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#64748b">Input f(t)</text>
      <line x1="90" y1="55" x2="140" y2="55" stroke="#2563eb" stroke-width="3" />
      <polygon points="140,55 130,50 130,60" fill="#2563eb" />

      <rect x="145" y="25" width="130" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
      <text x="210" y="52" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1d4ed8" text-anchor="middle">Static Gain</text>
      <text x="210" y="72" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1d4ed8" text-anchor="middle">(Gain K)</text>

      <line x1="280" y1="55" x2="330" y2="55" stroke="#2563eb" stroke-width="3" />
      <polygon points="330,55 320,50 320,60" fill="#2563eb" />
      <text x="340" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">Output y(t)</text>
    </g>

    <!-- Physical Archetype Illustration: Potentiometer Divider -->
    <g transform="translate(30, 220)">
      <rect width="420" height="230" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e293b">Physical Archetype: Potentiometer</text>
      
      <!-- Resistor track -->
      <rect x="60" y="60" width="300" height="25" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="2" />
      <text x="40" y="115" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">0V</text>
      <text x="345" y="115" font-family="system-ui, sans-serif" font-size="15" fill="#dc2626">+Vs</text>

      <!-- Wiper -->
      <polygon points="210,60 200,95 220,95" fill="#2563eb" />
      <line x1="210" y1="95" x2="210" y2="150" stroke="#2563eb" stroke-width="3" />
      <circle cx="210" cy="150" r="5" fill="#2563eb" />
      <text x="225" y="155" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">Output (Vout)</text>

      <line x1="210" y1="40" x2="210" y2="10" stroke="#047857" stroke-width="3" />
      <polygon points="210,10 205,22 215,22" fill="#047857" />
      <text x="225" y="25" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#047857">Position (x)</text>
    </g>

    <!-- Visual Architecture Spec Cards -->
    <g transform="translate(30, 475)">
      <rect width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Energy Storage Mechanism:</text>
      <text x="20" y="52" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#2563eb">Zero Energy Storage (Pure Resistor)</text>

      <rect y="85" width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="113" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Dynamic Characteristic:</text>
      <text x="20" y="137" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">Instantaneous · Zero Phase Delay</text>

      <rect y="170" width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="198" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Real-World Examples:</text>
      <text x="20" y="222" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Potentiometer · Metal Foil Strain Gauge</text>
    </g>
  </g>

  <!-- Column 2: First-Order System -->
  <g transform="translate(560, 130)">
    <rect width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="60" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.2" />
    <text x="30" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#6d28d9">
      First-Order System (n = 1)
    </text>

    <!-- Transduction Block Diagram -->
    <g transform="translate(30, 85)">
      <rect width="420" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="25" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#64748b">Input f(t)</text>
      <line x1="85" y1="55" x2="135" y2="55" stroke="#7c3aed" stroke-width="3" />
      <polygon points="135,55 125,50 125,60" fill="#7c3aed" />

      <rect x="140" y="25" width="140" height="60" rx="6" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="2" />
      <text x="210" y="50" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#5b21b6" text-anchor="middle">Single Reservoir</text>
      <text x="210" y="70" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#5b21b6" text-anchor="middle">(Time Constant τ)</text>

      <line x1="285" y1="55" x2="335" y2="55" stroke="#7c3aed" stroke-width="3" />
      <polygon points="335,55 325,50 325,60" fill="#7c3aed" />
      <text x="345" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">Output y(t)</text>
    </g>

    <!-- Physical Archetype Illustration: Clinical Thermometer -->
    <g transform="translate(30, 220)">
      <rect width="420" height="230" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e293b">Physical Archetype: Thermometer</text>

      <!-- Glass Bulb & Stem -->
      <rect x="80" y="65" width="180" height="18" rx="4" fill="#e0e7ff" stroke="#6366f1" stroke-width="2" />
      <circle cx="280" cy="74" r="32" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2.5" />
      <circle cx="280" cy="74" r="18" fill="#ef4444" />
      <rect x="80" y="70" width="180" height="8" fill="#ef4444" />

      <!-- Heat flow convective arrows -->
      <line x1="280" y1="125" x2="280" y2="110" stroke="#dc2626" stroke-width="3" />
      <polygon points="280,110 275,118 285,118" fill="#dc2626" />

      <line x1="330" y1="74" x2="315" y2="74" stroke="#dc2626" stroke-width="3" />
      <polygon points="315,74 323,69 323,79" fill="#dc2626" />

      <text x="280" y="150" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Heat Flux (Convection)</text>
      <text x="80" y="115" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#4338ca">Glass Capillary Stem</text>
    </g>

    <!-- Visual Architecture Spec Cards -->
    <g transform="translate(30, 475)">
      <rect width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Energy Storage Mechanism:</text>
      <text x="20" y="52" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#7c3aed">One Storage Reservoir (Thermal Capacity)</text>

      <rect y="85" width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="113" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Dynamic Characteristic:</text>
      <text x="20" y="137" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">Exponential Relaxation · Low-Pass Filter</text>

      <rect y="170" width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="198" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Real-World Examples:</text>
      <text x="20" y="222" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Thermocouple · Thermistor · RTD · RC Filter</text>
    </g>
  </g>

  <!-- Column 3: Second-Order System -->
  <g transform="translate(1070, 130)">
    <rect width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="60" rx="10" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2" />
    <text x="30" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#b91c1c">
      Second-Order System (n = 2)
    </text>

    <!-- Transduction Block Diagram -->
    <g transform="translate(30, 85)">
      <rect width="420" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#64748b">Input f(t)</text>
      <line x1="80" y1="55" x2="130" y2="55" stroke="#dc2626" stroke-width="3" />
      <polygon points="130,55 120,50 120,60" fill="#dc2626" />

      <rect x="135" y="25" width="150" height="60" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="2" />
      <text x="210" y="50" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#991b1b" text-anchor="middle">Dual Reservoirs</text>
      <text x="210" y="70" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#991b1b" text-anchor="middle">(Natural Freq &amp; Damping)</text>

      <line x1="290" y1="55" x2="340" y2="55" stroke="#dc2626" stroke-width="3" />
      <polygon points="340,55 330,50 330,60" fill="#dc2626" />
      <text x="350" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">Output y(t)</text>
    </g>

    <!-- Physical Archetype Illustration: Produce Scale -->
    <g transform="translate(30, 220)">
      <rect width="420" height="230" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e293b">Physical Archetype: Produce Scale</text>

      <!-- Scale Pan -->
      <rect x="140" y="55" width="140" height="12" rx="3" fill="#94a3b8" />
      <ellipse cx="190" cy="48" rx="20" ry="10" fill="#d97706" />
      <ellipse cx="225" cy="46" rx="22" ry="11" fill="#b45309" />
      <text x="210" y="32" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#b45309" text-anchor="middle">Load Mass</text>

      <!-- Spring & Damper Base -->
      <g transform="translate(170, 70)">
        <!-- Spring k -->
        <path d="M 15 0 L 15 15 L 28 25 L 2 40 L 28 55 L 2 70 L 15 80 L 15 95" fill="none" stroke="#2563eb" stroke-width="2.5" />
        <text x="35" y="55" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb">Spring (k)</text>

        <!-- Damper c -->
        <line x1="65" y1="0" x2="65" y2="40" stroke="#dc2626" stroke-width="2" />
        <rect x="52" y="40" width="26" height="30" fill="none" stroke="#dc2626" stroke-width="2" />
        <line x1="58" y1="52" x2="72" y2="52" stroke="#dc2626" stroke-width="3" />
        <line x1="65" y1="70" x2="65" y2="95" stroke="#dc2626" stroke-width="2" />
        <text x="85" y="60" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">Damper (c)</text>
      </g>
    </g>

    <!-- Visual Architecture Spec Cards -->
    <g transform="translate(30, 475)">
      <rect width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Energy Storage Mechanism:</text>
      <text x="20" y="52" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#dc2626">Two Exchanging Reservoirs (Mass + Spring)</text>

      <rect y="85" width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="113" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Dynamic Characteristic:</text>
      <text x="20" y="137" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">Oscillatory Ringing · Resonance Peak</text>

      <rect y="170" width="420" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="198" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Real-World Examples:</text>
      <text x="20" y="222" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#1e293b">Produce Scale · Accelerometer · Manometer</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 5.4: Zero-Order Systems · Potentiometer Divider &amp; Bode Flatness
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit V · Section 5.4
  </text>

  <!-- Left: Potentiometer Displacement Divider Circuit -->
  <rect x="50" y="130" width="730" height="730" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    A. Physical Implementation: Linear Potentiometer
  </text>
  <text x="80" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Direct mechanical displacement to voltage division
  </text>

  <!-- Circuit Diagram Schematic -->
  <g transform="translate(130, 240)">
    <!-- Supply rails -->
    <text x="40" y="30" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">+Vs (Excitation Voltage)</text>
    <line x1="140" y1="40" x2="140" y2="80" stroke="#dc2626" stroke-width="3" />
    <circle cx="140" cy="40" r="5" fill="#dc2626" />

    <!-- Potentiometer Track -->
    <rect x="115" y="80" width="50" height="340" rx="4" fill="#f8fafc" stroke="#334155" stroke-width="2.5" />
    <!-- Resistor coils -->
    <path d="M 125 100 L 155 112 L 125 128 L 155 144 L 125 160 L 155 176 L 125 192 L 155 208 L 125 224 L 155 240 L 125 256 L 155 272 L 125 288 L 155 304 L 125 320 L 155 336 L 125 352 L 155 368 L 125 384 L 155 400" 
          fill="none" stroke="#64748b" stroke-width="2.5" />
    <text x="25" y="240" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#334155">Length L</text>
    <text x="25" y="265" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">Resistance R</text>

    <!-- Ground at bottom -->
    <line x1="140" y1="420" x2="140" y2="470" stroke="#334155" stroke-width="3" />
    <line x1="110" y1="470" x2="170" y2="470" stroke="#334155" stroke-width="3" />
    <line x1="120" y1="480" x2="160" y2="480" stroke="#334155" stroke-width="2.5" />
    <line x1="130" y1="490" x2="150" y2="490" stroke="#334155" stroke-width="2" />
    <text x="185" y="475" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">Ground (0V)</text>

    <!-- Wiper Slider -->
    <g transform="translate(150, 240)">
      <polygon points="0,0 28,-14 28,14" fill="#2563eb" />
      <line x1="28" y1="0" x2="220" y2="0" stroke="#2563eb" stroke-width="3.5" />
      <circle cx="220" cy="0" r="6" fill="#2563eb" />
      <text x="235" y="6" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#2563eb">Output (Vout)</text>

      <!-- Wiper mechanical arm -->
      <line x1="120" y1="-120" x2="120" y2="0" stroke="#047857" stroke-width="4" stroke-dasharray="8,4" />
      <polygon points="120,-120 114,-105 126,-105" fill="#047857" />
      <text x="135" y="-100" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#047857">Input Motion (x)</text>
    </g>
  </g>

  <!-- Right: Input/Output Tracking & Flat Frequency Bode Plot -->
  <rect x="820" y="130" width="730" height="730" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="850" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    B. Instantaneous Tracking &amp; Bode Flatness
  </text>
  <text x="850" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Waveform fidelity &amp; zero phase distortion
  </text>

  <!-- Arbitrary Signal Tracking Comparison -->
  <g transform="translate(860, 235)">
    <rect x="0" y="0" width="650" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e293b">Time-Domain Signal Tracking:</text>
    
    <!-- Input x(t) dashed grey -->
    <path d="M 40 160 C 80 80 130 200 190 110 C 240 40 280 180 340 130 C 400 80 460 190 530 90 L 600 140" 
          fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="7,4" />
    <text x="520" y="55" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#64748b">Input Measurand</text>

    <!-- Output y(t) solid blue -->
    <path d="M 40 180 C 80 60 130 230 190 100 C 240 10 280 210 340 135 C 400 60 460 220 530 70 L 600 150" 
          fill="none" stroke="#2563eb" stroke-width="3.5" />
    <text x="490" y="235" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">Sensor Output</text>
    <text x="30" y="235" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#059669">Zero Time Delay · Zero Phase Lag</text>
  </g>

  <!-- Bode Plots (Magnitude & Phase) -->
  <g transform="translate(860, 525)">
    <rect x="0" y="0" width="650" height="315" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="20" y="30" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e293b">Frequency-Domain Response (Bode):</text>

    <!-- Magnitude Plot -->
    <g transform="translate(40, 50)">
      <line x1="50" y1="20" x2="550" y2="20" stroke="#f1f5f9" stroke-width="1.5" />
      <line x1="50" y1="70" x2="550" y2="70" stroke="#cbd5e1" stroke-width="1.5" />
      <line x1="50" y1="70" x2="50" y2="10" stroke="#334155" stroke-width="2" />
      <text x="-5" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">Magnitude</text>
      <line x1="50" y1="35" x2="550" y2="35" stroke="#2563eb" stroke-width="3.5" />
      <text x="250" y="25" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">Flat Response Across All Frequencies</text>
    </g>

    <!-- Phase Plot -->
    <g transform="translate(40, 160)">
      <line x1="50" y1="30" x2="550" y2="30" stroke="#cbd5e1" stroke-width="1.5" />
      <line x1="50" y1="80" x2="550" y2="80" stroke="#f1f5f9" stroke-width="1.5" />
      <line x1="50" y1="80" x2="50" y2="10" stroke="#334155" stroke-width="2" />
      <text x="5" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">Phase</text>
      <line x1="50" y1="30" x2="550" y2="30" stroke="#059669" stroke-width="3.5" />
      <text x="250" y="20" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">0° In-Phase Across All Frequencies</text>
      <text x="260" y="95" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">Excitation Frequency (ω)</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 5.5: First-Order Systems · Step Relaxation, Ramp Delay &amp; Frequency Attenuation
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit V · Section 5.5
  </text>

  <!-- Panel 1: Step Response & Thermometer Model -->
  <rect x="50" y="130" width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="75" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    A. Step Transient Relaxation
  </text>
  <text x="75" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Thermometer bulb &amp; time constant milestones
  </text>

  <!-- Thermometer Bulb Physical Schematic -->
  <g transform="translate(75, 220)">
    <rect x="0" y="0" width="430" height="150" rx="8" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.2" />
    <path d="M 30 75 L 140 75 Q 160 75 170 60 Q 185 40 205 40 Q 225 40 240 60 Q 250 75 260 75" 
          fill="none" stroke="#6d28d9" stroke-width="3" />
    <circle cx="210" cy="80" r="32" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2.5" />
    <text x="210" y="85" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#4338ca" text-anchor="middle">Sensing Tip</text>
    
    <!-- Convective heat flux arrows -->
    <line x1="160" y1="40" x2="185" y2="60" stroke="#dc2626" stroke-width="2.5" />
    <polygon points="185,60 176,55 183,47" fill="#dc2626" />
    <line x1="260" y1="40" x2="235" y2="60" stroke="#dc2626" stroke-width="2.5" />
    <polygon points="235,60 237,47 244,55" fill="#dc2626" />
    <text x="210" y="25" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Convective Heat Transfer</text>
    <text x="35" y="45" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#1e293b">Medium Temp</text>
    <text x="35" y="125" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#6d28d9">Glass Stem</text>
  </g>

  <!-- Step Response Curve Graph -->
  <g transform="translate(100, 600)">
    <!-- Asymptote -->
    <line x1="0" y1="-180" x2="380" y2="-180" stroke="#059669" stroke-width="2" stroke-dasharray="6,4" />
    <text x="230" y="-190" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">Steady State (100%)</text>

    <!-- Axes -->
    <line x1="0" y1="0" x2="400" y2="0" stroke="#1e293b" stroke-width="2.5" />
    <line x1="0" y1="0" x2="0" y2="-210" stroke="#1e293b" stroke-width="2.5" />
    <polygon points="400,0 390,-5 390,5" fill="#1e293b" />
    <polygon points="0,-210 -5,-200 5,-200" fill="#1e293b" />
    <text x="390" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Time</text>
    <text x="-15" y="-215" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Output</text>

    <!-- Initial tangent -->
    <line x1="0" y1="0" x2="70" y2="-180" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" />

    <!-- Step response curve -->
    <path d="M 0 0 Q 50 -105 100 -140 T 210 -172 T 380 -180" fill="none" stroke="#2563eb" stroke-width="3.5" />

    <!-- 1 Tau marker -->
    <line x1="70" y1="0" x2="70" y2="-114" stroke="#dc2626" stroke-dasharray="4,3" />
    <circle cx="70" cy="-114" r="5" fill="#dc2626" />
    <text x="70" y="25" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">1τ (63.2%)</text>

    <!-- 5 Tau marker -->
    <line x1="350" y1="0" x2="350" y2="-179" stroke="#059669" stroke-dasharray="4,3" />
    <circle cx="350" cy="-179" r="5" fill="#059669" />
    <text x="350" y="25" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669" text-anchor="middle">5τ (99.3%)</text>
  </g>

  <!-- Panel 1 Bottom Summary Box -->
  <g transform="translate(75, 740)">
    <rect width="430" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
    <text x="20" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Transient Milestones:</text>
    <text x="20" y="58" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#2563eb">• 1τ = 63.2% Response</text>
    <text x="220" y="58" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#059669">• 5τ = 99.3% Settling</text>
    <text x="20" y="82" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Strictly monotonic · Zero overshoot</text>
  </g>

  <!-- Panel 2: Ramp Response & Dynamic Error -->
  <rect x="560" y="130" width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="585" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    B. Dynamic Ramp Tracking
  </text>
  <text x="585" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Steady-state time delay &amp; dynamic error
  </text>

  <!-- Ramp Response Graph -->
  <g transform="translate(610, 500)">
    <!-- Axes -->
    <line x1="0" y1="0" x2="400" y2="0" stroke="#1e293b" stroke-width="2.5" />
    <line x1="0" y1="0" x2="0" y2="-300" stroke="#1e293b" stroke-width="2.5" />
    <polygon points="400,0 390,-5 390,5" fill="#1e293b" />
    <polygon points="0,-300 -5,-290 5,-290" fill="#1e293b" />
    <text x="390" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Time</text>
    <text x="-15" y="-310" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Response</text>

    <!-- Ideal Ramp Input Line -->
    <line x1="0" y1="0" x2="350" y2="-280" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="6,4" />
    <text x="240" y="-250" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#64748b">Input Ramp</text>

    <!-- Actual Response Curve -->
    <path d="M 0 0 C 40 -10 80 -45 140 -115 L 350 -235" fill="none" stroke="#7c3aed" stroke-width="3.5" />
    <text x="270" y="-180" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#7c3aed">Sensor Output</text>

    <!-- Horizontal Time Lag Arrow (Δt = tau) -->
    <line x1="190" y1="-155" x2="250" y2="-155" stroke="#dc2626" stroke-width="2.5" />
    <polygon points="190,-155 198,-159 198,-151" fill="#dc2626" />
    <polygon points="250,-155 242,-159 242,-151" fill="#dc2626" />
    <text x="220" y="-165" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">Time Lag (Δt = τ)</text>

    <!-- Vertical Dynamic Error Arrow (e_ss) -->
    <line x1="290" y1="-232" x2="290" y2="-188" stroke="#d97706" stroke-width="2.5" />
    <polygon points="290,-232 286,-224 294,-224" fill="#d97706" />
    <polygon points="290,-188 286,-196 294,-196" fill="#d97706" />
    <text x="302" y="-208" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706">Dynamic Error (ess)</text>
  </g>

  <!-- Panel 2 Bottom Summary Box -->
  <g transform="translate(585, 740)">
    <rect width="430" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
    <text x="20" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Steady-State Ramp Tracking:</text>
    <text x="20" y="58" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#dc2626">• Permanent Time Delay = τ</text>
    <text x="20" y="82" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#d97706">• Steady-State Error = K · Ramp Rate · τ</text>
  </g>

  <!-- Panel 3: Sinusoidal Response & Bode Rolloff -->
  <rect x="1070" y="130" width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="1095" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    C. Harmonic Bode Response
  </text>
  <text x="1095" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Low-pass filtering &amp; quasi-static zone
  </text>

  <!-- Frequency Plots -->
  <g transform="translate(1120, 260)">
    <!-- Top: Magnitude M(w) -->
    <rect x="0" y="0" width="100" height="130" fill="#f0fdf4" opacity="0.7" />
    <text x="50" y="15" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">Quasi-Static</text>

    <line x1="0" y1="130" x2="380" y2="130" stroke="#334155" stroke-width="2" />
    <line x1="0" y1="130" x2="0" y2="10" stroke="#334155" stroke-width="2" />
    <text x="-40" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">|M|</text>
    <text x="5" y="38" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">1.0 (0 dB)</text>
    <text x="5" y="75" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">0.707 (-3 dB)</text>
    <line x1="0" y1="70" x2="380" y2="70" stroke="#fca5a5" stroke-dasharray="4,4" />

    <!-- Magnitude Curve -->
    <path d="M 0 35 Q 140 40 180 70 T 360 125" fill="none" stroke="#2563eb" stroke-width="3.5" />
    <circle cx="180" cy="70" r="5" fill="#dc2626" />
    <text x="180" y="155" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Cutoff Frequency (1/τ)</text>

    <!-- Bottom: Phase Shift -->
    <g transform="translate(0, 180)">
      <line x1="0" y1="120" x2="380" y2="120" stroke="#334155" stroke-width="2" />
      <line x1="0" y1="120" x2="0" y2="10" stroke="#334155" stroke-width="2" />
      <text x="-40" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">Phase</text>
      <text x="5" y="25" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">0°</text>
      <text x="5" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">-45°</text>
      <text x="5" y="105" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">-90°</text>
      <line x1="0" y1="60" x2="380" y2="60" stroke="#cbd5e1" stroke-dasharray="4,4" />

      <!-- Phase Curve -->
      <path d="M 0 20 Q 120 25 180 60 T 360 105" fill="none" stroke="#059669" stroke-width="3.5" />
      <circle cx="180" cy="60" r="5" fill="#dc2626" />
    </g>
  </g>

  <!-- Panel 3 Bottom Summary Box -->
  <g transform="translate(1095, 740)">
    <rect width="430" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1" />
    <text x="20" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Frequency Landmarks:</text>
    <text x="20" y="58" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#16a34a">• Quasi-Static: M ≥ 0.995, φ ≤ 5.7°</text>
    <text x="20" y="82" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#dc2626">• Cutoff Corner: M = 0.707 (-3 dB), φ = -45°</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 5.6: Second-Order Systems · Produce Scale Model, Damping Regimes &amp; Resonance
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit V · Section 5.6
  </text>

  <!-- Left: Step Responses of 4 Damping Regimes & Produce Scale Diagram -->
  <rect x="50" y="130" width="820" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="80" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    A. Produce Scale Model &amp; Damping Regimes
  </text>
  <text x="80" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Mass-spring-damper transient step responses
  </text>

  <!-- Diagram of Produce Weight Scale -->
  <g transform="translate(80, 220)">
    <rect x="0" y="0" width="760" height="135" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
    
    <!-- Scale Pan with Produce -->
    <rect x="50" y="25" width="160" height="16" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
    <ellipse cx="100" cy="16" rx="22" ry="11" fill="#d97706" />
    <ellipse cx="138" cy="14" rx="24" ry="12" fill="#b45309" />
    <ellipse cx="170" cy="18" rx="20" ry="10" fill="#d97706" />
    <text x="130" y="-8" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309" text-anchor="middle">Produce Load Mass</text>

    <!-- Scale Mechanism Box -->
    <rect x="40" y="52" width="180" height="72" rx="4" fill="#ffffff" stroke="#334155" stroke-width="2" />
    <!-- Spring k -->
    <path d="M 75 52 L 75 62 L 90 70 L 65 80 L 90 90 L 65 100 L 75 108 L 75 124" fill="none" stroke="#2563eb" stroke-width="2.5" />
    <text x="95" y="85" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">Spring (k)</text>
    <!-- Dashpot c -->
    <rect x="145" y="70" width="30" height="30" fill="none" stroke="#dc2626" stroke-width="2" />
    <line x1="135" y1="85" x2="160" y2="85" stroke="#dc2626" stroke-width="3" />
    <line x1="175" y1="85" x2="190" y2="85" stroke="#dc2626" stroke-width="2" />
    <text x="155" y="118" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">Damper (c)</text>

    <!-- Dial Pointer Indicator -->
    <circle cx="320" cy="70" r="46" fill="#ffffff" stroke="#334155" stroke-width="2.5" />
    <line x1="320" y1="70" x2="348" y2="42" stroke="#dc2626" stroke-width="3" />
    <circle cx="320" cy="70" r="5" fill="#334155" />
    <text x="320" y="105" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b" text-anchor="middle">Dial Pointer</text>

    <!-- Essential Parameters Box -->
    <rect x="420" y="20" width="320" height="95" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <text x="440" y="48" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Scale Dynamic Parameters:</text>
    <text x="440" y="75" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#2563eb">• Natural Frequency (Stiffness &amp; Mass)</text>
    <text x="440" y="100" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#dc2626">• Damping Ratio (Dashpot Viscosity)</text>
  </g>

  <!-- Step Response Chart -->
  <g transform="translate(110, 580)">
    <!-- Steady state line -->
    <line x1="0" y1="-180" x2="680" y2="-180" stroke="#059669" stroke-width="2" stroke-dasharray="6,4" />
    <text x="690" y="-175" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">Final Reading</text>

    <!-- Axes -->
    <line x1="0" y1="0" x2="710" y2="0" stroke="#1e293b" stroke-width="2.5" />
    <line x1="0" y1="0" x2="0" y2="-210" stroke="#1e293b" stroke-width="2.5" />
    <polygon points="710,0 700,-5 700,5" fill="#1e293b" />
    <polygon points="0,-210 -5,-200 5,-200" fill="#1e293b" />
    <text x="700" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Time</text>
    <text x="-15" y="-220" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Displacement</text>

    <!-- 1. Undamped (zeta = 0): pure cosine oscillation -->
    <path d="M 0 0 C 40 -10 80 -90 120 -180 C 160 -270 200 -360 240 -360 C 280 -360 320 -270 360 -180 C 400 -90 440 0 480 0 C 520 0 560 -90 600 -180 L 680 -330" 
          fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4" />

    <!-- 2. Underdamped (zeta = 0.2): produce scale wobbles -->
    <path d="M 0 0 C 35 -15 70 -90 110 -180 C 130 -225 160 -275 190 -275 C 230 -275 270 -140 320 -140 C 370 -140 410 -200 450 -195 C 490 -190 530 -175 570 -180 L 680 -180" 
          fill="none" stroke="#2563eb" stroke-width="3" />

    <!-- 3. Optimal Damping (zeta = 0.707): minimal 4.3% overshoot -->
    <path d="M 0 0 C 50 -20 100 -110 150 -170 C 180 -190 220 -187 260 -180 L 680 -180" 
          fill="none" stroke="#047857" stroke-width="3" />

    <!-- 4. Critically Damped (zeta = 1.0): fastest without overshoot -->
    <path d="M 0 0 C 60 -15 120 -90 180 -140 C 240 -168 320 -178 420 -180 L 680 -180" 
          fill="none" stroke="#d97706" stroke-width="3.5" stroke-dasharray="8,4" />

    <!-- 5. Overdamped (zeta = 2.0): sluggish slow rise -->
    <path d="M 0 0 C 80 -10 180 -50 280 -105 C 400 -140 520 -168 640 -178 L 680 -179" 
          fill="none" stroke="#64748b" stroke-width="2.5" />
  </g>

  <!-- Legend Box for Damping Regimes (Clean, no formulas) -->
  <g transform="translate(80, 755)">
    <rect width="760" height="90" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <line x1="20" y1="28" x2="55" y2="28" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3" />
    <text x="65" y="33" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">Undamped (Perpetual Ringing)</text>

    <line x1="390" y1="28" x2="425" y2="28" stroke="#2563eb" stroke-width="3" />
    <text x="435" y="33" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb">Underdamped (Overshoot &amp; Wobble)</text>

    <line x1="20" y1="65" x2="55" y2="65" stroke="#d97706" stroke-width="3.5" stroke-dasharray="6,3" />
    <text x="65" y="70" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#d97706">Critically Damped (Fastest No Overshoot)</text>

    <line x1="390" y1="65" x2="425" y2="65" stroke="#64748b" stroke-width="2.5" />
    <text x="435" y="70" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#64748b">Overdamped (Sluggish Creep)</text>
  </g>

  <!-- Right: Frequency Response & Resonance Curves -->
  <rect x="890" y="130" width="660" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="920" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    B. Harmonic Frequency Resonance
  </text>
  <text x="920" y="198" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">
    Resonant peaking &amp; bandwidth flatness
  </text>

  <!-- Frequency Response Graph -->
  <g transform="translate(940, 420)">
    <!-- Flat 1.0 line -->
    <line x1="0" y1="-100" x2="560" y2="-100" stroke="#cbd5e1" stroke-dasharray="4,4" />
    <text x="5" y="-108" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">Flat Response (Gain = 1.0)</text>

    <!-- Axes -->
    <line x1="0" y1="0" x2="580" y2="0" stroke="#1e293b" stroke-width="2.5" />
    <line x1="0" y1="0" x2="0" y2="-210" stroke="#1e293b" stroke-width="2.5" />
    <polygon points="580,0 570,-5 570,5" fill="#1e293b" />
    <polygon points="0,-210 -5,-200 5,-200" fill="#1e293b" />
    <text x="540" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Frequency Ratio</text>
    <text x="-20" y="-220" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e293b">Magnification</text>

    <!-- Natural Resonance Frequency marker -->
    <line x1="220" y1="0" x2="220" y2="-200" stroke="#dc2626" stroke-dasharray="4,3" />
    <text x="220" y="25" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">Resonance Point (Ratio = 1.0)</text>

    <!-- Curve for Light Damping (High Resonance Peak) -->
    <path d="M 0 -100 Q 150 -105 210 -200 Q 230 -200 280 -60 T 540 -12" fill="none" stroke="#2563eb" stroke-width="3.5" />
    <circle cx="215" cy="-200" r="5" fill="#2563eb" />
    <text x="230" y="-195" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">Resonant Peak (Light Damping)</text>

    <!-- Curve for Optimal Damping (Max Flat) -->
    <path d="M 0 -100 C 120 -100 180 -100 220 -115 Q 280 -50 540 -12" fill="none" stroke="#047857" stroke-width="3" />
    <text x="320" y="-95" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#047857">Optimal Flat Bandwidth</text>

    <!-- Curve for Heavy Damping -->
    <path d="M 0 -100 Q 120 -75 220 -40 T 540 -8" fill="none" stroke="#64748b" stroke-width="2.5" />
    <text x="140" y="-50" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">Heavy Damping</text>
  </g>

  <!-- Physical Analogy Badges Right Panel -->
  <g transform="translate(920, 560)">
    <rect width="600" height="120" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
    <text x="25" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e40af">Physical Intuition Models:</text>
    <text x="25" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#dc2626">• Playground Swing: Pushing in phase with natural motion builds peak amplitude</text>
    <text x="25" y="95" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#b45309">• Unbalanced Car Wheel: Highway speed matches vehicle suspension frequency</text>
  </g>

  <!-- Design Guidelines Summary Right -->
  <g transform="translate(920, 700)">
    <rect width="600" height="145" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="25" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Instrumentation Design Guidelines:</text>
    <text x="25" y="62" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#2563eb">• Visual Indicators (Produce Scales): Tuned to Critical Damping (Zero Bounce)</text>
    <text x="25" y="92" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#047857">• Electronic Transducers (Accelerometers): Tuned to Optimal Flat Bandwidth</text>
    <text x="25" y="122" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#1e293b">• Phase Lag Invariant: Exactly -90° Phase Shift at Natural Resonance</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 5.7: Real-World Sensor Architectures · Physical Cutaways by System Order
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit V · Section 5.7
  </text>

  <!-- 3 Physical Cutaway Columns -->

  <!-- Column 1: Zero-Order Sensor Architecture -->
  <g transform="translate(50, 130)">
    <rect width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="60" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
    <text x="30" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af">
      1. Zero-Order Architecture
    </text>

    <!-- Cantilever Beam & Foil Strain Gauge Cutaway -->
    <g transform="translate(30, 85)">
      <rect width="420" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e293b">Bonded Metal Foil Strain Gauge</text>

      <!-- Fixed Support Wall -->
      <rect x="30" y="55" width="25" height="170" fill="#334155" />
      <line x1="20" y1="65" x2="30" y2="55" stroke="#64748b" stroke-width="1.5" />
      <line x1="20" y1="105" x2="30" y2="95" stroke="#64748b" stroke-width="1.5" />
      <line x1="20" y1="145" x2="30" y2="135" stroke="#64748b" stroke-width="1.5" />
      <line x1="20" y1="185" x2="30" y2="175" stroke="#64748b" stroke-width="1.5" />

      <!-- Elastic Cantilever Beam -->
      <rect x="55" y="110" width="260" height="32" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
      <text x="140" y="132" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#475569">Elastic Specimen</text>

      <!-- Bonded Foil Gauge Grid -->
      <rect x="80" y="98" width="100" height="12" rx="2" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8" />
      <text x="130" y="90" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#a16207" text-anchor="middle">Metallic Foil Grid</text>

      <!-- Applied Force Vector -->
      <line x1="290" y1="50" x2="290" y2="105" stroke="#dc2626" stroke-width="3.5" />
      <polygon points="290,105 284,92 296,92" fill="#dc2626" />
      <text x="290" y="42" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">Applied Load</text>

      <!-- Lead wires to bridge -->
      <path d="M 180 104 Q 220 104 250 170" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3" />
      <rect x="250" y="160" width="140" height="70" rx="6" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="320" y="188" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e40af" text-anchor="middle">Wheatstone Bridge</text>
      <text x="320" y="212" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#059669" text-anchor="middle">Instant Voltage Out</text>
    </g>

    <!-- Architectural Key Facts -->
    <g transform="translate(30, 365)">
      <rect width="420" height="100" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Physical Transduction Mechanism:</text>
      <text x="20" y="58" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Direct Piezoresistive Resistance Shift</text>
      <text x="20" y="82" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Zero dynamic lag up to structural acoustic limit</text>

      <rect y="120" width="420" height="100" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="150" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Typical Industrial Applications:</text>
      <text x="20" y="178" font-family="system-ui, sans-serif" font-size="15" fill="#1e40af">• Structural Impact Strain Gauges</text>
      <text x="20" y="202" font-family="system-ui, sans-serif" font-size="15" fill="#1e40af">• Linear Displacement Potentiometers</text>

      <rect y="240" width="420" height="95" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
      <text x="20" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1d4ed8">Transduction Verdict:</text>
      <text x="20" y="295" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#059669">Zero-Order · Instantaneous Pure Gain</text>
      <text x="20" y="318" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Static calibration valid across operating range</text>
    </g>
  </g>

  <!-- Column 2: First-Order Sensor Architecture -->
  <g transform="translate(560, 130)">
    <rect width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="60" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.2" />
    <text x="30" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#6d28d9">
      2. First-Order Architecture
    </text>

    <!-- Convective Thermocouple Bead Cutaway -->
    <g transform="translate(30, 85)">
      <rect width="420" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e293b">Thermocouple in Convective Fluid</text>

      <!-- Conduit Wall -->
      <rect x="30" y="55" width="360" height="15" fill="#475569" />
      <rect x="30" y="225" width="360" height="15" fill="#475569" />

      <!-- Flowing Fluid with Streamlines -->
      <path d="M 40 100 Q 140 105 240 95 T 380 100" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6,4" />
      <path d="M 40 145 Q 140 150 240 140 T 380 145" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6,4" />
      <path d="M 40 190 Q 140 195 240 185 T 380 190" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6,4" />
      <text x="340" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#2563eb">Fluid Flow (h)</text>

      <!-- Thermocouple Probe Insertion -->
      <rect x="180" y="55" width="40" height="85" rx="3" fill="#e2e8f0" stroke="#475569" stroke-width="2" />
      <line x1="190" y1="140" x2="200" y2="165" stroke="#dc2626" stroke-width="3" />
      <line x1="210" y1="140" x2="200" y2="165" stroke="#1d4ed8" stroke-width="3" />
      <!-- Welded bead -->
      <circle cx="200" cy="165" r="12" fill="#334155" stroke="#0f172a" stroke-width="2" />
      <circle cx="200" cy="165" r="7" fill="#f59e0b" />
      <text x="200" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">Sensing Bead</text>

      <!-- Convection Heat Flux Arrows -->
      <line x1="150" y1="165" x2="182" y2="165" stroke="#ea580c" stroke-width="2.5" />
      <polygon points="182,165 174,161 174,169" fill="#ea580c" />
    </g>

    <!-- Architectural Key Facts -->
    <g transform="translate(30, 365)">
      <rect width="420" height="100" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Physical Transduction Mechanism:</text>
      <text x="20" y="58" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Convective Thermal Energy Balance</text>
      <text x="20" y="82" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Single thermal storage reservoir creates time lag</text>

      <rect y="120" width="420" height="100" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="150" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Typical Industrial Applications:</text>
      <text x="20" y="178" font-family="system-ui, sans-serif" font-size="15" fill="#6d28d9">• Bare &amp; Thermowell Thermocouples</text>
      <text x="20" y="202" font-family="system-ui, sans-serif" font-size="15" fill="#6d28d9">• Industrial RTD (Pt100) &amp; Thermistor Probes</text>

      <rect y="240" width="420" height="95" rx="8" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.2" />
      <text x="20" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#6d28d9">Transduction Verdict:</text>
      <text x="20" y="295" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#059669">First-Order · Exponential Relaxation</text>
      <text x="20" y="318" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Requires 5τ waiting time to achieve 99.3% accuracy</text>
    </g>
  </g>

  <!-- Column 3: Second-Order Sensor Architecture -->
  <g transform="translate(1070, 130)">
    <rect width="480" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="60" rx="10" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2" />
    <text x="30" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#b91c1c">
      3. Second-Order Architecture
    </text>

    <!-- Seismic Mass Accelerometer Cutaway -->
    <g transform="translate(30, 85)">
      <rect width="420" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e293b">Piezoelectric Vibration Accelerometer</text>

      <!-- Sensor Housing Cutaway -->
      <rect x="50" y="55" width="320" height="180" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="2.5" />
      <rect x="70" y="70" width="280" height="150" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5" />

      <!-- Mounting Stud Base -->
      <rect x="180" y="235" width="60" height="18" fill="#475569" stroke="#1e293b" stroke-width="2" />
      <text x="210" y="260" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#475569" text-anchor="middle">Mounting Base</text>

      <!-- Piezoelectric Crystal Rings -->
      <rect x="150" y="170" width="120" height="20" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
      <text x="210" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#854d0e" text-anchor="middle">Piezo Crystals (Spring k)</text>

      <!-- Seismic Proof Mass -->
      <rect x="140" y="115" width="140" height="55" rx="4" fill="#64748b" stroke="#1e293b" stroke-width="2" />
      <text x="210" y="148" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#ffffff" text-anchor="middle">Seismic Mass (m)</text>

      <!-- Preload Bolt Spring -->
      <line x1="210" y1="85" x2="210" y2="115" stroke="#dc2626" stroke-width="3" />
      <text x="210" y="100" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">Preload</text>
    </g>

    <!-- Architectural Key Facts -->
    <g transform="translate(30, 365)">
      <rect width="420" height="100" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Physical Transduction Mechanism:</text>
      <text x="20" y="58" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Seismic Mass Inertia &amp; Crystal Elasticity</text>
      <text x="20" y="82" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Two exchanging energy reservoirs (kinetic + elastic)</text>

      <rect y="120" width="420" height="100" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="20" y="150" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Typical Industrial Applications:</text>
      <text x="20" y="178" font-family="system-ui, sans-serif" font-size="15" fill="#b91c1c">• Piezo Vibration &amp; Shock Accelerometers</text>
      <text x="20" y="202" font-family="system-ui, sans-serif" font-size="15" fill="#b91c1c">• Produce Scales &amp; Pressure Capsules</text>

      <rect y="240" width="420" height="95" rx="8" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2" />
      <text x="20" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">Transduction Verdict:</text>
      <text x="20" y="295" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#059669">Second-Order · Harmonic Resonance</text>
      <text x="20" y="318" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Must operate below 20% fn to avoid resonance distortion</text>
    </g>
  </g>
</svg>`
  }
};
