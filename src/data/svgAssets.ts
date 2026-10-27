/**
 * Unit I Vector SVG Assets: Fundamentals of Measurement Systems
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 *
 * Design Guidelines Enforced:
 * 1. Zero mathematical equations or formulas embedded inside SVG graphics.
 * 2. Zero paragraphs or walls of text inside SVG graphics.
 * 3. High-contrast clean styling for 16:9 projection (1600 x 900 canvas).
 * 4. Distinct functional block diagrams, clear signal flows, and accurate physical diagrams.
 */

export interface SvgAsset {
  id: string;
  filename: string;
  title: string;
  description: string;
  topicRef: string;
  svgContent: string;
}

export const SVG_FIGURES: Record<string, SvgAsset> = {
  fig1: {
    id: "fig1",
    filename: "fig1_measurement_methods.svg",
    title: "Figure 1: Comparison of Measurement Methods",
    description: "Visual architecture comparing Direct Comparison, Deflection Method, and Null-Balance Method.",
    topicRef: "1.1 Methods of Measurements",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <marker id="arrBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
    </marker>
    <marker id="arrAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
    </marker>
    <marker id="arrGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a" />
    </marker>
  </defs>

  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="30" y="30" width="1540" height="840" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="70" y="85" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">Three Fundamental Measurement Principles</text>
  <text x="70" y="118" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Comparing signal interaction, restoring forces, and power extraction from the measured source</text>

  <!-- Card 1: Direct Comparison -->
  <g transform="translate(70, 160)">
    <rect width="460" height="660" rx="14" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
    <rect x="0" y="0" width="460" height="56" rx="14" fill="#e0f2fe"/>
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0369a1">1. Direct Comparison</text>

    <!-- Visual: Steel ruler measuring a block -->
    <g transform="translate(40, 100)">
      <!-- Unknown object -->
      <rect x="20" y="30" width="220" height="60" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="130" y="66" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0369a1" text-anchor="middle">Unknown Length</text>
      
      <!-- Calibrated scale directly placed next to it -->
      <rect x="20" y="110" width="340" height="50" rx="2" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <!-- Scale graduation tick marks -->
      <line x1="20" y1="110" x2="20" y2="135" stroke="#0f172a" stroke-width="2"/>
      <line x1="60" y1="110" x2="60" y2="125" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="100" y1="110" x2="100" y2="135" stroke="#0f172a" stroke-width="2"/>
      <line x1="140" y1="110" x2="140" y2="125" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="180" y1="110" x2="180" y2="135" stroke="#0f172a" stroke-width="2"/>
      <line x1="220" y1="110" x2="220" y2="125" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="240" y1="110" x2="240" y2="145" stroke="#e11d48" stroke-width="3"/> <!-- Measurement edge -->
      <line x1="260" y1="110" x2="260" y2="125" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="300" y1="110" x2="300" y2="135" stroke="#0f172a" stroke-width="2"/>
      <line x1="340" y1="110" x2="340" y2="125" stroke="#0f172a" stroke-width="1.5"/>
      <text x="190" y="185" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#475569" text-anchor="middle">Calibrated Reference Standard (Ruler)</text>
      
      <circle cx="240" cy="110" r="14" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="240" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#dc2626" text-anchor="middle">Read</text>
    </g>

    <!-- Architecture summary -->
    <g transform="translate(35, 340)">
      <rect width="390" height="280" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="24" y="38" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Working Mechanism:</text>
      <text x="24" y="72" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• Physical comparison side-by-side</text>
      <text x="24" y="104" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• No intermediate energy conversion</text>
      <text x="24" y="136" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• Human eye reads the scale boundary</text>

      <text x="24" y="184" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Common Workshop Examples:</text>
      <text x="24" y="218" font-family="system-ui, sans-serif" font-size="16" fill="#0369a1">• Steel rule &amp; measuring tape</text>
      <text x="24" y="248" font-family="system-ui, sans-serif" font-size="16" fill="#0369a1">• Vernier calipers &amp; micrometers</text>
    </g>
  </g>

  <!-- Card 2: Deflection Method -->
  <g transform="translate(570, 160)">
    <rect width="460" height="660" rx="14" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
    <rect x="0" y="0" width="460" height="56" rx="14" fill="#fef3c7"/>
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#b45309">2. Deflection Method</text>

    <!-- Visual: Pointer, Spring & Scale Dial -->
    <g transform="translate(40, 90)">
      <!-- Input Force Arrow -->
      <line x1="20" y1="80" x2="110" y2="80" stroke="#0284c7" stroke-width="4" marker-end="url(#arrBlue)"/>
      <text x="65" y="60" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0284c7" text-anchor="middle">Input Force</text>

      <!-- Mechanical Spring -->
      <path d="M 120 80 Q 135 60, 150 80 T 180 80 T 210 80 T 240 80" fill="none" stroke="#d97706" stroke-width="4"/>
      <text x="180" y="60" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#b45309" text-anchor="middle">Restoring Spring</text>

      <!-- Pivot & Pointer Dial -->
      <circle cx="280" cy="150" r="10" fill="#0f172a"/>
      <path d="M 230 70 A 90 90 0 0 1 330 70" fill="none" stroke="#94a3b8" stroke-width="4"/>
      <line x1="280" y1="150" x2="310" y2="65" stroke="#ef4444" stroke-width="4"/>
      <polygon points="310,65 304,78 316,75" fill="#ef4444"/>

      <!-- Dial tick marks -->
      <line x1="240" y1="76" x2="235" y2="66" stroke="#475569" stroke-width="2"/>
      <line x1="280" y1="60" x2="280" y2="50" stroke="#475569" stroke-width="2"/>
      <line x1="320" y1="76" x2="325" y2="66" stroke="#475569" stroke-width="2"/>

      <text x="280" y="200" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#475569" text-anchor="middle">Pointer Deflects Along Calibrated Arc</text>
    </g>

    <!-- Architecture summary -->
    <g transform="translate(35, 340)">
      <rect width="390" height="280" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="24" y="38" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Working Mechanism:</text>
      <text x="24" y="72" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• Input force pushes against internal spring</text>
      <text x="24" y="104" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• Needle stops where forces balance</text>
      <text x="24" y="136" font-family="system-ui, sans-serif" font-size="16" fill="#dc2626">• Draws continuous power (Loading Effect)</text>

      <text x="24" y="184" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Common Workshop Examples:</text>
      <text x="24" y="218" font-family="system-ui, sans-serif" font-size="16" fill="#b45309">• Motorbike speedometer dial</text>
      <text x="24" y="248" font-family="system-ui, sans-serif" font-size="16" fill="#b45309">• Bourdon air pressure gauge &amp; spring balance</text>
    </g>
  </g>

  <!-- Card 3: Null-Balance Method -->
  <g transform="translate(1070, 160)">
    <rect width="460" height="660" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <rect x="0" y="0" width="460" height="56" rx="14" fill="#dcfce7"/>
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#15803d">3. Null-Balance Method</text>

    <!-- Visual: Balanced Beam / Bridge with Zero Center Detector -->
    <g transform="translate(40, 90)">
      <!-- Central Fulcrum & Beam -->
      <polygon points="190,140 170,180 210,180" fill="#475569"/>
      <line x1="50" y1="140" x2="330" y2="140" stroke="#0f172a" stroke-width="5"/>

      <!-- Left Pan: Unknown -->
      <line x1="70" y1="140" x2="70" y2="180" stroke="#64748b" stroke-width="2"/>
      <rect x="40" y="180" width="60" height="12" rx="2" fill="#cbd5e1"/>
      <rect x="50" y="155" width="40" height="25" rx="3" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
      <text x="70" y="172" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0369a1" text-anchor="middle">Measurand</text>

      <!-- Right Pan: Adjustable Standard Weights -->
      <line x1="310" y1="140" x2="310" y2="180" stroke="#64748b" stroke-width="2"/>
      <rect x="280" y="180" width="60" height="12" rx="2" fill="#cbd5e1"/>
      <rect x="290" y="155" width="40" height="25" rx="3" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
      <text x="310" y="172" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#15803d" text-anchor="middle">Standard</text>

      <!-- Center Null Detector Needle at 0 -->
      <circle cx="190" cy="90" r="32" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
      <line x1="190" y1="90" x2="190" y2="65" stroke="#16a34a" stroke-width="3"/>
      <circle cx="190" cy="90" r="4" fill="#0f172a"/>
      <text x="190" y="112" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#16a34a" text-anchor="middle">NULL (0)</text>
    </g>

    <!-- Architecture summary -->
    <g transform="translate(35, 340)">
      <rect width="390" height="280" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="24" y="38" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Working Mechanism:</text>
      <text x="24" y="72" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• Opposing standard adjusted until balance</text>
      <text x="24" y="104" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• Detector needle points to dead center (Zero)</text>
      <text x="24" y="136" font-family="system-ui, sans-serif" font-size="16" fill="#16a34a">• Draws zero energy at null (No Loading!)</text>

      <text x="24" y="184" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Common Workshop Examples:</text>
      <text x="24" y="218" font-family="system-ui, sans-serif" font-size="16" fill="#15803d">• Wheatstone resistance bridge</text>
      <text x="24" y="248" font-family="system-ui, sans-serif" font-size="16" fill="#15803d">• Analytical laboratory beam balance</text>
    </g>
  </g>
</svg>`
  },

  fig2: {
    id: "fig2",
    filename: "fig2_analog_vs_digital.svg",
    title: "Figure 2: Analog Continuous Signal vs. Digital Staircase",
    description: "Visualizing continuous-time analog wave vs. discrete-time sampling, ADC stair-step quantization, and quantization error.",
    topicRef: "1.2 Analog Vs. Digital Instruments",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="30" y="30" width="1540" height="840" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="70" y="85" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">Continuous Analog Waveform vs. Digital Quantized Steps</text>
  <text x="70" y="118" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Showing discrete sampling intervals in time and rounding to distinct binary voltage levels</text>

  <!-- Main Comparison Chart -->
  <g transform="translate(70, 160)">
    <rect width="1020" height="650" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- Horizontal Quantization Grid Lines -->
    <line x1="120" y1="540" x2="960" y2="540" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="545" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="end">Level 0 [000]</text>

    <line x1="120" y1="470" x2="960" y2="470" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="475" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="end">Level 1 [001]</text>

    <line x1="120" y1="400" x2="960" y2="400" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="405" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="end">Level 2 [010]</text>

    <line x1="120" y1="330" x2="960" y2="330" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="335" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="end">Level 3 [011]</text>

    <line x1="120" y1="260" x2="960" y2="260" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="265" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="end">Level 4 [100]</text>

    <line x1="120" y1="190" x2="960" y2="190" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="195" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="end">Level 5 [101]</text>

    <line x1="120" y1="120" x2="960" y2="120" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="125" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="end">Level 6 [110]</text>

    <line x1="120" y1="50" x2="960" y2="50" stroke="#e2e8f0" stroke-width="1"/>
    <text x="100" y="55" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="end">Level 7 [111]</text>

    <!-- Axes -->
    <line x1="120" y1="570" x2="960" y2="570" stroke="#0f172a" stroke-width="2"/> <!-- Time -->
    <line x1="120" y1="30" x2="120" y2="570" stroke="#0f172a" stroke-width="2"/>  <!-- Voltage -->
    <text x="540" y="615" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">Time Axis (t) →</text>
    <text x="35" y="300" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a" transform="rotate(-90 35 300)" text-anchor="middle">Voltage (V) →</text>

    <!-- Continuous Analog Curve (Smooth Blue) -->
    <path d="M 120 540 C 240 500, 280 70, 440 60 C 580 50, 640 530, 780 520 C 860 510, 920 280, 960 260" 
          fill="none" stroke="#0284c7" stroke-width="4.5"/>

    <!-- Digital Staircase (Bold Orange Steps) -->
    <path d="M 120 540 L 190 540 L 190 470 L 260 470 L 260 260 L 330 260 L 330 120 L 400 120 L 400 50 L 470 50 L 470 50 L 540 50 L 540 120 L 610 120 L 610 330 L 680 330 L 680 470 L 750 470 L 750 540 L 820 540 L 820 400 L 890 400 L 890 260 L 960 260"
          fill="none" stroke="#d97706" stroke-width="4"/>

    <!-- Sampling Markers (Green dots) -->
    <circle cx="190" cy="470" r="6" fill="#16a34a"/>
    <circle cx="260" cy="260" r="6" fill="#16a34a"/>
    <circle cx="330" cy="120" r="6" fill="#16a34a"/>
    <circle cx="400" cy="50" r="6" fill="#16a34a"/>
    <circle cx="470" cy="50" r="6" fill="#16a34a"/>
    <circle cx="540" cy="120" r="6" fill="#16a34a"/>
    <circle cx="610" cy="330" r="6" fill="#16a34a"/>
    <circle cx="680" cy="470" r="6" fill="#16a34a"/>
    <circle cx="750" cy="540" r="6" fill="#16a34a"/>
    <circle cx="820" cy="400" r="6" fill="#16a34a"/>
    <circle cx="890" cy="260" r="6" fill="#16a34a"/>

    <!-- Step height label -->
    <line x1="840" y1="400" x2="840" y2="470" stroke="#dc2626" stroke-width="3"/>
    <text x="855" y="440" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626">Step Size</text>
  </g>

  <!-- Right Side Key Insight Panel -->
  <g transform="translate(1120, 160)">
    <rect width="410" height="650" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="45" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">Visual Legend</text>

    <!-- Legend 1 -->
    <g transform="translate(30, 80)">
      <line x1="0" y1="12" x2="50" y2="12" stroke="#0284c7" stroke-width="4.5"/>
      <text x="65" y="18" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0284c7">Continuous Analog</text>
      <text x="0" y="48" font-family="system-ui, sans-serif" font-size="15" fill="#475569">Smooth, uninterrupted real physical voltage with infinite possible levels.</text>
    </g>

    <!-- Legend 2 -->
    <g transform="translate(30, 180)">
      <line x1="0" y1="12" x2="50" y2="12" stroke="#d97706" stroke-width="4"/>
      <text x="65" y="18" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#d97706">Quantized Digital</text>
      <text x="0" y="48" font-family="system-ui, sans-serif" font-size="15" fill="#475569">Staircase approximations. Value must snap to the nearest available digital level.</text>
    </g>

    <!-- Legend 3 -->
    <g transform="translate(30, 280)">
      <circle cx="15" cy="12" r="7" fill="#16a34a"/>
      <text x="45" y="18" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#16a34a">Sampling Moments</text>
      <text x="0" y="48" font-family="system-ui, sans-serif" font-size="15" fill="#475569">Regular clock intervals where the ADC takes an instantaneous measurement snapshot.</text>
    </g>

    <!-- Insight Box -->
    <g transform="translate(25, 410)">
      <rect width="360" height="200" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="20" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Key Physical Takeaway:</text>
      <text x="20" y="70" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Analog is continuous in time and amplitude.</text>
      <text x="20" y="105" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Digital is discrete in time (samples) and discrete in voltage (steps).</text>
      <text x="20" y="145" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#dc2626">• The vertical gap between the blue wave and orange step is Quantization Error.</text>
    </g>
  </g>
</svg>`
  },

  fig3: {
    id: "fig3",
    filename: "fig3_daq_architecture.svg",
    title: "Figure 3: Generalized Data Acquisition (DAQ) System Pipeline",
    description: "End-to-end signal flow from physical measurand through transducer, analog conditioning, isolation, multiplexer, S/H, ADC, to processor.",
    topicRef: "1.3 Data Acquisition Pipeline (DAQ)",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <marker id="arrChain" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
    </marker>
  </defs>

  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="30" y="30" width="1540" height="840" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="70" y="85" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">Generalized Measurement System &amp; DAQ Pipeline</text>
  <text x="70" y="118" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">The unbroken functional chain from real physical quantity to digital engineering display</text>

  <!-- Stage 1: Measurand -->
  <g transform="translate(60, 200)">
    <rect width="210" height="340" rx="12" fill="#ffffff" stroke="#64748b" stroke-width="2"/>
    <rect width="210" height="50" rx="12" fill="#f1f5f9"/>
    <text x="105" y="33" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">1. Measurand</text>
    
    <circle cx="105" cy="120" r="40" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
    <text x="105" y="128" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#0f172a" text-anchor="middle">Input</text>

    <text x="105" y="200" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#334155" text-anchor="middle">Physical State:</text>
    <text x="105" y="235" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">• Hot Steam Temp</text>
    <text x="105" y="265" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">• Pipe Pressure</text>
    <text x="105" y="295" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">• Bridge Vibration</text>
  </g>

  <line x1="270" y1="370" x2="310" y2="370" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 2: Sensor / Transducer -->
  <g transform="translate(310, 200)">
    <rect width="220" height="340" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <rect width="220" height="50" rx="12" fill="#e0f2fe"/>
    <text x="110" y="33" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0369a1" text-anchor="middle">2. Sensor / Transducer</text>

    <rect x="30" y="80" width="160" height="70" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
    <text x="110" y="112" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0369a1" text-anchor="middle">Energy Converter</text>
    <text x="110" y="135" font-family="system-ui, sans-serif" font-size="14" fill="#0284c7" text-anchor="middle">Physics → Electrical</text>

    <text x="110" y="195" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#334155" text-anchor="middle">Sensor Types:</text>
    <text x="110" y="225" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">• Thermocouple (mV)</text>
    <text x="110" y="255" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">• Strain Gauge (ΔR)</text>
    <text x="110" y="285" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">• Piezoelectric (Charge)</text>
  </g>

  <line x1="530" y1="370" x2="570" y2="370" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 3: Signal Conditioning -->
  <g transform="translate(570, 160)">
    <rect width="290" height="420" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <rect width="290" height="50" rx="12" fill="#fef3c7"/>
    <text x="145" y="33" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#b45309" text-anchor="middle">3. Signal Conditioning</text>

    <!-- Sub-block 1: Amplifier -->
    <rect x="25" y="75" width="240" height="65" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="145" y="102" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309" text-anchor="middle">Amplification</text>
    <text x="145" y="125" font-family="system-ui, sans-serif" font-size="14" fill="#78350f" text-anchor="middle">Boosts tiny millivolts to Volts</text>

    <!-- Sub-block 2: Filter -->
    <rect x="25" y="155" width="240" height="65" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="145" y="182" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309" text-anchor="middle">Anti-Aliasing Filter</text>
    <text x="145" y="205" font-family="system-ui, sans-serif" font-size="14" fill="#78350f" text-anchor="middle">Removes noise &amp; high freqs</text>

    <!-- Sub-block 3: Isolation -->
    <rect x="25" y="235" width="240" height="65" rx="6" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="145" y="262" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309" text-anchor="middle">Galvanic Isolation</text>
    <text x="145" y="285" font-family="system-ui, sans-serif" font-size="14" fill="#78350f" text-anchor="middle">Breaks hazardous ground loops</text>

    <text x="145" y="340" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#334155" text-anchor="middle">Cleans, protects, and standardizes</text>
    <text x="145" y="370" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Prepares signal for conversion</text>
  </g>

  <line x1="860" y1="370" x2="900" y2="370" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 4: MUX & S/H -->
  <g transform="translate(900, 200)">
    <rect width="210" height="340" rx="12" fill="#ffffff" stroke="#db2777" stroke-width="2"/>
    <rect width="210" height="50" rx="12" fill="#fce7f3"/>
    <text x="105" y="33" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#be185d" text-anchor="middle">4. MUX &amp; S/H</text>

    <rect x="25" y="80" width="160" height="65" rx="6" fill="#fdf2f8" stroke="#db2777" stroke-width="1.5"/>
    <text x="105" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#be185d" text-anchor="middle">Channel Switch</text>
    <text x="105" y="130" font-family="system-ui, sans-serif" font-size="13" fill="#64748b" text-anchor="middle">Shares 1 ADC across inputs</text>

    <rect x="25" y="160" width="160" height="65" rx="6" fill="#fdf2f8" stroke="#db2777" stroke-width="1.5"/>
    <text x="105" y="188" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#be185d" text-anchor="middle">Sample &amp; Hold</text>
    <text x="105" y="210" font-family="system-ui, sans-serif" font-size="13" fill="#64748b" text-anchor="middle">Freezes voltage steady</text>

    <text x="105" y="270" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">Ensures zero voltage blur</text>
    <text x="105" y="295" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">during conversion window</text>
  </g>

  <line x1="1110" y1="370" x2="1150" y2="370" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 5: ADC -->
  <g transform="translate(1150, 200)">
    <rect width="180" height="340" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <rect width="180" height="50" rx="12" fill="#dcfce7"/>
    <text x="90" y="33" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d" text-anchor="middle">5. A/D Converter</text>

    <circle cx="90" cy="120" r="40" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <text x="90" y="128" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#15803d" text-anchor="middle">ADC</text>

    <text x="90" y="200" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#334155" text-anchor="middle">Digital Output:</text>
    <text x="90" y="235" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">Binary 0s and 1s</text>
    <text x="90" y="265" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">12-bit, 16-bit, 24-bit</text>
    <text x="90" y="295" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">Resolution Codes</text>
  </g>

  <line x1="1330" y1="370" x2="1370" y2="370" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 6: Host & Display -->
  <g transform="translate(1370, 200)">
    <rect width="170" height="340" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <rect width="170" height="50" rx="12" fill="#ede9fe"/>
    <text x="85" y="33" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#6d28d9" text-anchor="middle">6. Host / Screen</text>

    <rect x="20" y="80" width="130" height="80" rx="6" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="85" y="115" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#6d28d9" text-anchor="middle">Screen</text>
    <text x="85" y="140" font-family="system-ui, sans-serif" font-size="13" fill="#6d28d9" text-anchor="middle">Graph &amp; Number</text>

    <text x="85" y="200" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#334155" text-anchor="middle">Features:</text>
    <text x="85" y="235" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">• Real-time Plot</text>
    <text x="85" y="265" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">• Cloud Storage</text>
    <text x="85" y="295" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">• Alarm Safety</text>
  </g>

  <!-- Bottom Flow Summary Bar -->
  <g transform="translate(60, 620)">
    <rect width="1480" height="190" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="40" y="40" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">Summary of Physical Conversions Along the Chain:</text>

    <g transform="translate(40, 75)">
      <circle cx="15" cy="20" r="15" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5"/>
      <text x="15" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0f172a" text-anchor="middle">A</text>
      <text x="40" y="25" font-family="system-ui, sans-serif" font-size="16" fill="#334155"><tspan font-weight="700">Real World:</tspan> Physical quantity exists independently in the machinery or environment.</text>

      <circle cx="15" cy="55" r="15" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
      <text x="15" y="61" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0284c7" text-anchor="middle">B</text>
      <text x="40" y="60" font-family="system-ui, sans-serif" font-size="16" fill="#334155"><tspan font-weight="700">Analog Domain:</tspan> Converted to weak electrical signal, amplified, filtered, and buffered.</text>

      <circle cx="15" cy="90" r="15" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
      <text x="15" y="96" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#16a34a" text-anchor="middle">C</text>
      <text x="40" y="95" font-family="system-ui, sans-serif" font-size="16" fill="#334155"><tspan font-weight="700">Digital Domain:</tspan> Sampled into discrete binary numbers for computer logging, control, and display.</text>
    </g>
  </g>
</svg>`
  },

  fig4: {
    id: "fig4",
    filename: "fig4_calibration_hysteresis.svg",
    title: "Figure 4: Instrument Calibration Curve and Hysteresis Loop",
    description: "Detailed calibration characteristics showing ascending vs. descending paths, maximum hysteresis error, sensitivity slope, and zero/span offsets.",
    topicRef: "1.4 Static Calibration & Instrument Characteristics",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <marker id="arrUp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
    </marker>
    <marker id="arrDown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
  </defs>

  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="30" y="30" width="1540" height="840" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="70" y="85" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">Static Calibration Curve &amp; Hysteresis Loop</text>
  <text x="70" y="118" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Showing loading (increasing input) vs. unloading (decreasing input) and sensitivity slope</text>

  <!-- Left Main Graph -->
  <g transform="translate(70, 160)">
    <rect width="980" height="650" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- Grid lines -->
    <line x1="120" y1="530" x2="900" y2="530" stroke="#f1f5f9" stroke-width="1"/>
    <line x1="120" y1="410" x2="900" y2="410" stroke="#f1f5f9" stroke-width="1"/>
    <line x1="120" y1="290" x2="900" y2="290" stroke="#f1f5f9" stroke-width="1"/>
    <line x1="120" y1="170" x2="900" y2="170" stroke="#f1f5f9" stroke-width="1"/>

    <!-- Coordinate Axes -->
    <line x1="120" y1="550" x2="920" y2="550" stroke="#0f172a" stroke-width="2.5"/> <!-- X Axis -->
    <line x1="120" y1="50" x2="120" y2="550" stroke="#0f172a" stroke-width="2.5"/>  <!-- Y Axis -->
    
    <text x="520" y="605" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">Standard Known Input Quantity (x) [e.g., Applied Pressure in bar] →</text>
    <text x="40" y="300" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a" transform="rotate(-90 40 300)" text-anchor="middle">Indicated Instrument Output (y) [e.g., Output Voltage in Volts] →</text>

    <!-- Ideal Linear Reference Line (Dashed Slate) -->
    <line x1="120" y1="550" x2="880" y2="90" stroke="#94a3b8" stroke-width="2" stroke-dasharray="8,8"/>
    <text x="890" y="95" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#64748b">Ideal Linear Response</text>

    <!-- Ascending Path Curve (Green: Increasing Input) -->
    <path d="M 120 550 Q 450 400, 880 90" fill="none" stroke="#16a34a" stroke-width="4.5"/>
    <line x1="360" y1="440" x2="380" y2="425" stroke="#16a34a" stroke-width="4.5" marker-end="url(#arrUp)"/>

    <!-- Descending Path Curve (Red: Decreasing Input) -->
    <path d="M 880 90 Q 550 240, 120 550" fill="none" stroke="#dc2626" stroke-width="4.5"/>
    <line x1="640" y1="215" x2="620" y2="230" stroke="#dc2626" stroke-width="4.5" marker-end="url(#arrDown)"/>

    <!-- Vertical Hysteresis Gap -->
    <line x1="500" y1="285" x2="500" y2="365" stroke="#d97706" stroke-width="3"/>
    <line x1="485" y1="285" x2="515" y2="285" stroke="#d97706" stroke-width="2"/>
    <line x1="485" y1="365" x2="515" y2="365" stroke="#d97706" stroke-width="2"/>
    <circle cx="500" cy="285" r="5" fill="#dc2626"/>
    <circle cx="500" cy="365" r="5" fill="#16a34a"/>

    <text x="525" y="325" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#d97706">Hysteresis Gap</text>
    <text x="525" y="348" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Directional Lag</text>

    <!-- Sensitivity Slope Triangle -->
    <polygon points="680,240 800,240 800,150" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
    <text x="740" y="265" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0284c7" text-anchor="middle">Change in Input</text>
    <text x="815" y="200" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0284c7">Change in Output</text>
    <text x="690" y="190" font-family="system-ui, sans-serif" font-size="17" font-weight="800" fill="#0369a1">Slope = Sensitivity</text>
  </g>

  <!-- Right Side Explanation Panel -->
  <g transform="translate(1080, 160)">
    <rect width="450" height="650" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="45" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">Calibration Takeaways</text>

    <!-- Block 1: Ascending -->
    <g transform="translate(30, 80)">
      <line x1="0" y1="12" x2="45" y2="12" stroke="#16a34a" stroke-width="4.5"/>
      <text x="60" y="18" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d">Ascending Run (Going Up)</text>
      <text x="0" y="48" font-family="system-ui, sans-serif" font-size="15" fill="#475569">Increasing the input from minimum to maximum. Instrument output gradually rises.</text>
    </g>

    <!-- Block 2: Descending -->
    <g transform="translate(30, 180)">
      <line x1="0" y1="12" x2="45" y2="12" stroke="#dc2626" stroke-width="4.5"/>
      <text x="60" y="18" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">Descending Run (Going Down)</text>
      <text x="0" y="48" font-family="system-ui, sans-serif" font-size="15" fill="#475569">Decreasing input back to zero. Output lags behind and stays slightly higher.</text>
    </g>

    <!-- Block 3: Why Hysteresis Happens -->
    <g transform="translate(25, 290)">
      <rect width="400" height="320" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="20" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Physical Causes of Hysteresis:</text>
      <text x="20" y="70" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="700">Mechanical Friction:</tspan> Gear teeth and pivot friction.</text>
      <text x="20" y="105" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="700">Elastic Lag:</tspan> Diaphragm or spring does not snap back immediately.</text>
      <text x="20" y="145" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• <tspan font-weight="700">Magnetic Domains:</tspan> Iron core magnetization lag.</text>

      <line x1="20" y1="180" x2="380" y2="180" stroke="#e2e8f0" stroke-width="1"/>

      <text x="20" y="215" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0369a1">What is Sensitivity?</text>
      <text x="20" y="245" font-family="system-ui, sans-serif" font-size="15" fill="#475569">The steeper the slope, the more sensitive the meter. A small input change gives a big output needle swing.</text>
    </g>
  </g>
</svg>`
  },

  fig5: {
    id: "fig5",
    filename: "fig5_uncertainty_and_snr.svg",
    title: "Figure 5: Systematic Bias vs. Random Gaussian Error Spread",
    description: "Systematic bias vs random Gaussian distribution intervals (68.3%, 95.4%, 99.7%) and frequency-domain Signal-to-Noise Ratio (SNR).",
    topicRef: "1.5 Measurement Errors & Uncertainty (ISO GUM)",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <linearGradient id="bellGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.02"/>
    </linearGradient>
    <marker id="arrAmber5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706"/>
    </marker>
  </defs>

  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="30" y="30" width="1540" height="840" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="70" y="85" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">Understanding Measurement Errors: Bias vs. Random Spread</text>
  <text x="70" y="118" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Visualizing systematic offset (bias) and random repeated measurement dispersion</text>

  <!-- Left Panel: Gaussian Bell Curve -->
  <g transform="translate(70, 160)">
    <rect width="780" height="650" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="45" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0284c7">Repeated Measurement Distribution</text>

    <!-- Horizontal Axis -->
    <line x1="60" y1="520" x2="720" y2="520" stroke="#0f172a" stroke-width="2"/>
    <text x="390" y="565" font-family="system-ui, sans-serif" font-size="17" font-weight="600" fill="#475569" text-anchor="middle">Measured Value Scale (x) →</text>

    <!-- True Value Line (Red Solid) -->
    <line x1="280" y1="110" x2="280" y2="520" stroke="#dc2626" stroke-width="2.5"/>
    <text x="280" y="95" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">True Target Value</text>

    <!-- Measured Average Mean Line (Blue Dashed) -->
    <line x1="430" y1="110" x2="430" y2="520" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6,6"/>
    <text x="430" y="95" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0284c7" text-anchor="middle">Average of Readings</text>

    <!-- Systematic Bias Arrow (Horizontal shift) -->
    <line x1="280" y1="150" x2="430" y2="150" stroke="#d97706" stroke-width="3" marker-end="url(#arrAmber5)"/>
    <text x="355" y="140" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706" text-anchor="middle">Systematic Error (Bias)</text>

    <!-- Bell Curve Shaded Area -->
    <path d="M 120 520 C 240 520, 330 480, 380 340 C 410 220, 430 180, 430 180 C 430 180, 450 220, 480 340 C 530 480, 620 520, 740 520 Z"
          fill="url(#bellGradient)"/>

    <!-- Bell Curve Outline -->
    <path d="M 120 520 C 240 520, 330 480, 380 340 C 410 220, 430 180, 430 180 C 430 180, 450 220, 480 340 C 530 480, 620 520, 740 520"
          fill="none" stroke="#0284c7" stroke-width="3.5"/>

    <!-- Spread Boundaries (Random Dispersion) -->
    <line x1="370" y1="520" x2="370" y2="350" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="490" y1="520" x2="490" y2="350" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/>
    <line x1="370" y1="380" x2="490" y2="380" stroke="#16a34a" stroke-width="2"/>
    <text x="430" y="370" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d" text-anchor="middle">Random Spread (Precision Zone)</text>

    <!-- Bottom explanation card -->
    <rect x="40" y="580" width="700" height="50" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <text x="390" y="612" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a" text-anchor="middle">Bias shifts the center • Random error widens the bell curve</text>
  </g>

  <!-- Right Panel: Dartboard Analogy & SNR -->
  <g transform="translate(880, 160)">
    <rect width="650" height="650" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="45" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">Accuracy vs. Precision Explained</text>

    <!-- Four Dartboard Squares -->
    <g transform="translate(35, 75)">
      <!-- Board 1: Accurate & Precise -->
      <rect x="0" y="0" width="270" height="240" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
      <text x="135" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d" text-anchor="middle">High Accuracy &amp; High Precision</text>
      <!-- Target rings -->
      <circle cx="135" cy="120" r="50" fill="none" stroke="#86efac" stroke-width="2"/>
      <circle cx="135" cy="120" r="25" fill="none" stroke="#86efac" stroke-width="2"/>
      <circle cx="135" cy="120" r="6" fill="#dc2626"/>
      <!-- Tight cluster at center -->
      <circle cx="134" cy="119" r="4" fill="#0f172a"/>
      <circle cx="137" cy="122" r="4" fill="#0f172a"/>
      <circle cx="133" cy="123" r="4" fill="#0f172a"/>
      <circle cx="136" cy="118" r="4" fill="#0f172a"/>
      <text x="135" y="205" font-family="system-ui, sans-serif" font-size="14" fill="#15803d" text-anchor="middle">Tightly clustered at bullseye</text>
      <text x="135" y="225" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#475569" text-anchor="middle">(Ideal measurement!)</text>

      <!-- Board 2: High Precision, Low Accuracy -->
      <rect x="310" y="0" width="270" height="240" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
      <text x="445" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309" text-anchor="middle">High Precision, Poor Accuracy</text>
      <!-- Target rings -->
      <circle cx="445" cy="120" r="50" fill="none" stroke="#fde68a" stroke-width="2"/>
      <circle cx="445" cy="120" r="25" fill="none" stroke="#fde68a" stroke-width="2"/>
      <circle cx="445" cy="120" r="6" fill="#dc2626"/>
      <!-- Tight cluster way off to side -->
      <circle cx="475" cy="85" r="4" fill="#0f172a"/>
      <circle cx="478" cy="88" r="4" fill="#0f172a"/>
      <circle cx="473" cy="89" r="4" fill="#0f172a"/>
      <circle cx="476" cy="84" r="4" fill="#0f172a"/>
      <text x="445" y="205" font-family="system-ui, sans-serif" font-size="14" fill="#b45309" text-anchor="middle">Tightly clustered off-target</text>
      <text x="445" y="225" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#475569" text-anchor="middle">(Has Zero Error / Bias!)</text>
    </g>

    <!-- Signal vs Noise Spike Graphic -->
    <g transform="translate(35, 340)">
      <rect width="580" height="280" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Signal-to-Noise Ratio (SNR) Concept:</text>
      
      <!-- Mini frequency axis -->
      <line x1="30" y1="210" x2="540" y2="210" stroke="#0f172a" stroke-width="1.5"/>
      <text x="500" y="235" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Frequency</text>

      <!-- Noise grass -->
      <path d="M 30 180 Q 70 195, 110 185 T 190 190 T 270 185 T 350 190 T 430 185 T 510 190 L 540 185" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <text x="50" y="165" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#64748b">Random Background Noise Floor</text>

      <!-- Signal Spike -->
      <line x1="270" y1="70" x2="270" y2="210" stroke="#16a34a" stroke-width="4"/>
      <circle cx="270" cy="70" r="6" fill="#16a34a"/>
      <text x="270" y="55" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d" text-anchor="middle">True Sensor Signal Peak</text>

      <line x1="310" y1="70" x2="310" y2="185" stroke="#0284c7" stroke-width="2.5"/>
      <text x="325" y="130" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0284c7">High SNR = Clean Clear Reading</text>
    </g>
  </g>
</svg>`
  },

  fig6: {
    id: "fig6",
    filename: "fig6_intrusive_vs_nonintrusive.svg",
    title: "Figure 6: Intrusive Sensing vs. Non-Intrusive Sensing",
    description: "Flow and temperature measurement comparison: intrusive head loss and boundary layer disturbance vs non-intrusive acoustic and radiative sensing.",
    topicRef: "1.6 Intrusive vs. Non-Intrusive Sensing",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <marker id="arrFlow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7"/>
    </marker>
  </defs>

  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="30" y="30" width="1540" height="840" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="70" y="85" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">Intrusive vs. Non-Intrusive Measurement</text>
  <text x="70" y="118" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Direct contact disturbing the process vs. external sensing without breaking the system boundary</text>

  <!-- Left: Intrusive Sensing -->
  <g transform="translate(70, 160)">
    <rect width="700" height="660" rx="14" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="0" y="0" width="700" height="56" rx="14" fill="#fee2e2"/>
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#b91c1c">Intrusive Sensing (Inside the Process)</text>

    <!-- Pipe Cross Section with Probe -->
    <g transform="translate(50, 90)">
      <!-- Pipe walls -->
      <rect x="0" y="40" width="600" height="18" fill="#64748b"/>
      <rect x="0" y="180" width="600" height="18" fill="#64748b"/>

      <!-- Fluid Flow Arrows -->
      <line x1="30" y1="85" x2="160" y2="85" stroke="#0284c7" stroke-width="3" marker-end="url(#arrFlow)"/>
      <line x1="30" y1="120" x2="160" y2="120" stroke="#0284c7" stroke-width="3" marker-end="url(#arrFlow)"/>
      <line x1="30" y1="155" x2="160" y2="155" stroke="#0284c7" stroke-width="3" marker-end="url(#arrFlow)"/>
      <text x="90" y="70" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0284c7">Smooth Fluid Flow</text>

      <!-- Intrusive Thermowell / Probe inserted through wall -->
      <rect x="260" y="0" width="36" height="130" rx="4" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
      <circle cx="278" cy="125" r="12" fill="#ef4444"/>
      <text x="278" y="160" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#dc2626" text-anchor="middle">Probe Tip</text>

      <!-- Turbulent Eddies Behind Probe -->
      <path d="M 310 85 Q 340 70, 360 90 T 400 80" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
      <path d="M 310 120 Q 350 140, 380 115 T 440 130" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="430" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#d97706">Flow Turbulence &amp; Pressure Drop</text>
    </g>

    <!-- Circuit Loading Visual -->
    <g transform="translate(50, 310)">
      <rect width="600" height="310" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="24" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Characteristics &amp; Drawbacks:</text>
      <text x="24" y="70" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• <tspan font-weight="700">Probe enters the fluid or wire:</tspan> Physical penetration.</text>
      <text x="24" y="105" font-family="system-ui, sans-serif" font-size="16" fill="#dc2626">• <tspan font-weight="700">Causes system disturbance:</tspan> Pressure drops, pipe wear, leaks.</text>
      <text x="24" y="140" font-family="system-ui, sans-serif" font-size="16" fill="#dc2626">• <tspan font-weight="700">Circuit Loading Effect:</tspan> Voltmeter steals current from circuit.</text>

      <line x1="24" y1="170" x2="576" y2="170" stroke="#e2e8f0" stroke-width="1"/>

      <text x="24" y="205" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Typical Examples:</text>
      <text x="24" y="240" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Thermocouple thermowell screwed into a pipe</text>
      <text x="24" y="270" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• In-line orifice plate flowmeter (obstructs pipe flow)</text>
    </g>
  </g>

  <!-- Right: Non-Intrusive Sensing -->
  <g transform="translate(830, 160)">
    <rect width="700" height="660" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <rect x="0" y="0" width="700" height="56" rx="14" fill="#dcfce7"/>
    <text x="24" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#15803d">Non-Intrusive Sensing (External / Non-Contact)</text>

    <!-- Pipe Cross Section with Clamp-on Sensors -->
    <g transform="translate(50, 90)">
      <!-- Pipe walls -->
      <rect x="0" y="40" width="600" height="18" fill="#64748b"/>
      <rect x="0" y="180" width="600" height="18" fill="#64748b"/>

      <!-- Smooth Fluid Flow (Undisturbed) -->
      <line x1="30" y1="85" x2="550" y2="85" stroke="#0284c7" stroke-width="3" marker-end="url(#arrFlow)"/>
      <line x1="30" y1="120" x2="550" y2="120" stroke="#0284c7" stroke-width="3" marker-end="url(#arrFlow)"/>
      <line x1="30" y1="155" x2="550" y2="155" stroke="#0284c7" stroke-width="3" marker-end="url(#arrFlow)"/>
      <text x="290" y="70" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0284c7">Fluid Flows 100% Freely and Undisturbed</text>

      <!-- Clamp-on Ultrasonic Transducers on Outside Surface -->
      <rect x="180" y="10" width="70" height="30" rx="4" fill="#16a34a"/>
      <text x="215" y="30" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">Clamp TX</text>

      <rect x="360" y="198" width="70" height="30" rx="4" fill="#16a34a"/>
      <text x="395" y="218" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">Clamp RX</text>

      <!-- Diagonal Acoustic Sound Wave Beam -->
      <line x1="215" y1="40" x2="395" y2="198" stroke="#16a34a" stroke-width="3" stroke-dasharray="6,6"/>
      <text x="330" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#15803d">Sound Wave Through Pipe</text>
    </g>

    <!-- Non-Intrusive Benefits Card -->
    <g transform="translate(50, 310)">
      <rect width="600" height="310" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="24" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Characteristics &amp; Advantages:</text>
      <text x="24" y="70" font-family="system-ui, sans-serif" font-size="16" fill="#334155">• <tspan font-weight="700">Zero pipe cutting or drilling:</tspan> Sensor clamps on outside.</text>
      <text x="24" y="105" font-family="system-ui, sans-serif" font-size="16" fill="#16a34a">• <tspan font-weight="700">Zero pressure loss:</tspan> Never impedes fluid flow or leaks.</text>
      <text x="24" y="140" font-family="system-ui, sans-serif" font-size="16" fill="#16a34a">• <tspan font-weight="700">Zero electrical loading:</tspan> Hall-effect sensor clips around wire.</text>

      <line x1="24" y1="170" x2="576" y2="170" stroke="#e2e8f0" stroke-width="1"/>

      <text x="24" y="205" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Typical Examples:</text>
      <text x="24" y="240" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Clamp-on ultrasonic transit-time flowmeter</text>
      <text x="24" y="270" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Non-contact infrared temperature gun &amp; thermal camera</text>
    </g>
  </g>
</svg>`
  },

  fig7: {
    id: "fig7",
    filename: "fig7_ground_loops_and_isolation.svg",
    title: "Figure 7: Electrical Safety: Ground Loops and Galvanic Isolation",
    description: "Hazardous ground loop circulating current vs optical isolation barrier and IEC 61010-1 overvoltage installation categories (CAT I to CAT IV).",
    topicRef: "1.7 Electrical Safety & Ground Loop Isolation",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <marker id="arrRedLoop" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
  </defs>

  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="30" y="30" width="1540" height="840" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- Header -->
  <text x="70" y="85" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">Electrical Safety: Ground Loops &amp; Galvanic Isolation</text>
  <text x="70" y="118" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">How multiple earth grounds create noise loops and how optical barriers provide absolute protection</text>

  <!-- Top Panel: The Ground Loop Hazard -->
  <g transform="translate(70, 150)">
    <rect width="900" height="310" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
    <rect x="0" y="0" width="900" height="42" rx="12" fill="#fee2e2"/>
    <text x="24" y="28" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#b91c1c">The Problem: Dangerous Ground Loop Across Distant Machines</text>

    <!-- Machine A -->
    <rect x="50" y="70" width="160" height="110" rx="8" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
    <text x="130" y="110" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0369a1" text-anchor="middle">Machine A</text>
    <text x="130" y="135" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Sensor Site</text>

    <!-- Earth Ground A -->
    <line x1="130" y1="180" x2="130" y2="230" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="110" y1="230" x2="150" y2="230" stroke="#0f172a" stroke-width="3"/>
    <line x1="118" y1="238" x2="142" y2="238" stroke="#0f172a" stroke-width="2"/>
    <line x1="124" y1="246" x2="136" y2="246" stroke="#0f172a" stroke-width="1.5"/>
    <text x="130" y="270" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#475569" text-anchor="middle">Ground A (Earth)</text>

    <!-- Machine B -->
    <rect x="690" y="70" width="160" height="110" rx="8" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
    <text x="770" y="110" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0369a1" text-anchor="middle">Machine B</text>
    <text x="770" y="135" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">DAQ Computer</text>

    <!-- Earth Ground B -->
    <line x1="770" y1="180" x2="770" y2="230" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="750" y1="230" x2="790" y2="230" stroke="#0f172a" stroke-width="3"/>
    <line x1="758" y1="238" x2="782" y2="238" stroke="#0f172a" stroke-width="2"/>
    <line x1="764" y1="246" x2="776" y2="246" stroke="#0f172a" stroke-width="1.5"/>
    <text x="770" y="270" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#475569" text-anchor="middle">Ground B (Earth)</text>

    <!-- Signal Cable (Top) -->
    <line x1="210" y1="105" x2="690" y2="105" stroke="#0284c7" stroke-width="3"/>
    <text x="450" y="95" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0284c7" text-anchor="middle">Signal Wire</text>

    <!-- Cable Shield Ground (Return) -->
    <line x1="210" y1="145" x2="690" y2="145" stroke="#dc2626" stroke-width="3.5"/>
    <line x1="480" y1="145" x2="420" y2="145" stroke="#dc2626" stroke-width="3.5" marker-end="url(#arrRedLoop)"/>
    <text x="450" y="172" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Circulating Noise Current Loop (50 Hz Hum!)</text>

    <!-- Ground Difference -->
    <line x1="130" y1="240" x2="770" y2="240" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
    <text x="450" y="230" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Ground Voltage Difference Between Factory Buildings</text>
  </g>

  <!-- Bottom Left Panel: Solution via Optical Isolation -->
  <g transform="translate(70, 485)">
    <rect width="900" height="340" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
    <rect x="0" y="0" width="900" height="42" rx="12" fill="#dcfce7"/>
    <text x="24" y="28" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d">The Solution: Galvanic Optical Isolation (Breaking the Loop)</text>

    <g transform="translate(60, 70)">
      <!-- Input Side -->
      <rect x="0" y="20" width="180" height="140" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
      <text x="90" y="55" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0369a1" text-anchor="middle">Input Domain</text>
      <!-- LED Emitter -->
      <polygon points="120,95 100,80 100,110" fill="#e11d48"/>
      <line x1="80" y1="95" x2="100" y2="95" stroke="#e11d48" stroke-width="3"/>
      <line x1="120" y1="95" x2="140" y2="95" stroke="#e11d48" stroke-width="3"/>
      <text x="90" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#e11d48" text-anchor="middle">Infrared LED</text>

      <!-- Physical Air / Glass Gap (Barrier) -->
      <rect x="230" y="0" width="100" height="180" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,6"/>
      <text x="280" y="80" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#475569" text-anchor="middle">Air / Glass</text>
      <text x="280" y="105" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#15803d" text-anchor="middle">Isolation</text>
      <text x="280" y="130" font-family="system-ui, sans-serif" font-size="13" fill="#64748b" text-anchor="middle">Barrier</text>

      <!-- Light Beams across gap -->
      <line x1="150" y1="95" x2="220" y2="95" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,3"/>
      <line x1="150" y1="85" x2="220" y2="85" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
      <line x1="150" y1="105" x2="220" y2="105" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>

      <!-- Output Side -->
      <rect x="380" y="20" width="180" height="140" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="470" y="55" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d" text-anchor="middle">Output Domain</text>
      <!-- Phototransistor Receiver -->
      <circle cx="470" cy="95" r="20" fill="none" stroke="#16a34a" stroke-width="2"/>
      <text x="470" y="140" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#15803d" text-anchor="middle">Phototransistor</text>

      <text x="280" y="205" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a" text-anchor="middle">NO Metal Connection: Electricity → Light → Electricity!</text>
      <text x="280" y="230" font-family="system-ui, sans-serif" font-size="14" fill="#15803d" text-anchor="middle">Ground loop current cannot flow. Protects computer from thousands of volts.</text>
    </g>
  </g>

  <!-- Right Panel: IEC 61010-1 Overvoltage Categories -->
  <g transform="translate(1000, 150)">
    <rect width="530" height="675" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="45" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">IEC Safety Overvoltage Categories</text>
    <text x="30" y="72" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">Matching tool ratings to danger levels</text>

    <!-- Category IV -->
    <g transform="translate(25, 95)">
      <rect width="480" height="110" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#dc2626">CAT IV: Utility Origin (Highest Risk)</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Outdoor power lines, electricity meters, main service drop.</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#dc2626">• Withstands massive lightning strikes &amp; power surges.</text>
    </g>

    <!-- Category III -->
    <g transform="translate(25, 220)">
      <rect width="480" height="110" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ea580c">CAT III: Building Distribution</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Factory switchboards, circuit breakers, 3-phase motors.</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#ea580c">• High energy distribution inside industrial facilities.</text>
    </g>

    <!-- Category II -->
    <g transform="translate(25, 345)">
      <rect width="480" height="110" rx="8" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#ca8a04">CAT II: Wall Sockets &amp; Appliances</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Standard 230V wall outlets, workshop tools, bench power supplies.</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#ca8a04">• Equipment plugged into standard household/shop receptacles.</text>
    </g>

    <!-- Category I -->
    <g transform="translate(25, 470)">
      <rect width="480" height="110" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#16a34a">CAT I: Protected Electronics (Lowest Risk)</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Battery-powered handheld meters, low-voltage DC rails.</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#16a34a">• Isolated secondary electronic circuits (5V, 12V, 24V).</text>
    </g>

    <text x="265" y="640" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Rule: Never use a CAT I or II meter on a CAT III/IV panel!</text>
  </g>
</svg>`
  }
};
