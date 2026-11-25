/**
 * Unit I Vector SVG Assets: Fundamentals of Measurement Systems
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 *
 * Design Guidelines Enforced:
 * 1. Zero mathematical equations or formulas embedded inside SVG graphics.
 * 2. Zero paragraphs or walls of text inside SVG graphics.
 * 3. High-contrast clean styling for 16:9 projection (1600 x 900 canvas) with >= 20px text floor.
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
  <rect x="28" y="28" width="1544" height="844" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Header -->
  <text x="64" y="84" font-family="system-ui, sans-serif" font-size="33" font-weight="800" fill="#0f172a">Three Fundamental Measurement Principles</text>
  <text x="64" y="120" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#334155">Comparing signal interaction, restoring forces, and energy extraction from the source</text>

  <!-- Card 1: Direct Comparison -->
  <g transform="translate(64, 152)">
    <rect width="468" height="688" rx="14" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <rect x="0" y="0" width="468" height="62" rx="14" fill="#e0f2fe"/>
    <text x="24" y="40" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#0369a1">1. Direct Comparison</text>

    <!-- Visual: Steel ruler measuring a block -->
    <g transform="translate(34, 88)">
      <rect x="16" y="22" width="230" height="62" rx="6" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="131" y="61" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0369a1" text-anchor="middle">Unknown Length</text>

      <rect x="16" y="110" width="368" height="52" rx="3" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <line x1="16" y1="110" x2="16" y2="136" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="60" y1="110" x2="60" y2="126" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="104" y1="110" x2="104" y2="136" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="148" y1="110" x2="148" y2="126" stroke="#0f172a" stroke-width="1.5"/>
      <line x1="192" y1="110" x2="192" y2="136" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="246" y1="110" x2="246" y2="150" stroke="#e11d48" stroke-width="3.5"/>
      <line x1="292" y1="110" x2="292" y2="136" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="338" y1="110" x2="338" y2="126" stroke="#0f172a" stroke-width="1.5"/>
      <text x="200" y="192" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Calibrated Reference Ruler</text>

      <rect x="212" y="76" width="68" height="32" rx="16" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="246" y="99" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Read</text>
    </g>

    <!-- Architecture summary -->
    <g transform="translate(24, 320)">
      <rect width="420" height="340" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="20" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Working Mechanism:</text>
      <text x="20" y="76" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Side-by-side physical check</text>
      <text x="20" y="112" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• No signal energy conversion</text>
      <text x="20" y="148" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Eye reads scale match directly</text>

      <line x1="20" y1="176" x2="400" y2="176" stroke="#e2e8f0" stroke-width="1.5"/>

      <text x="20" y="216" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Workshop Examples:</text>
      <text x="20" y="254" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#0369a1">• Steel rule &amp; measuring tape</text>
      <text x="20" y="290" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#0369a1">• Vernier calipers &amp; micrometers</text>
    </g>
  </g>

  <!-- Card 2: Deflection Method -->
  <g transform="translate(566, 152)">
    <rect width="468" height="688" rx="14" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <rect x="0" y="0" width="468" height="62" rx="14" fill="#fef3c7"/>
    <text x="24" y="40" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#b45309">2. Deflection Method</text>

    <!-- Visual: Pointer, Spring & Scale Dial -->
    <g transform="translate(30, 82)">
      <line x1="20" y1="95" x2="112" y2="95" stroke="#0284c7" stroke-width="4.5" marker-end="url(#arrBlue)"/>
      <text x="64" y="70" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0284c7" text-anchor="middle">Input Force</text>

      <path d="M 124 95 Q 139 72, 154 95 T 184 95 T 214 95 T 244 95" fill="none" stroke="#d97706" stroke-width="4.5"/>
      <text x="192" y="42" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">Restoring Spring</text>

      <circle cx="315" cy="158" r="10" fill="#0f172a"/>
      <path d="M 260 76 A 92 92 0 0 1 370 76" fill="none" stroke="#64748b" stroke-width="4.5"/>
      <line x1="315" y1="158" x2="346" y2="70" stroke="#dc2626" stroke-width="4.5"/>
      <polygon points="346,70 338,84 352,81" fill="#dc2626"/>

      <line x1="272" y1="82" x2="266" y2="70" stroke="#334155" stroke-width="2.5"/>
      <line x1="315" y1="64" x2="315" y2="52" stroke="#334155" stroke-width="2.5"/>
      <line x1="358" y1="82" x2="364" y2="70" stroke="#334155" stroke-width="2.5"/>

      <text x="204" y="206" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Pointer Sweeps Along Calibrated Arc</text>
    </g>

    <!-- Architecture summary -->
    <g transform="translate(24, 320)">
      <rect width="420" height="340" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="20" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Working Mechanism:</text>
      <text x="20" y="76" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Input pushes opposing spring</text>
      <text x="20" y="112" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Needle stops at force balance</text>
      <text x="20" y="148" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">• Extracts power (Loading Error)</text>

      <line x1="20" y1="176" x2="400" y2="176" stroke="#e2e8f0" stroke-width="1.5"/>

      <text x="20" y="216" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Workshop Examples:</text>
      <text x="20" y="254" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#b45309">• Analog speedometer dial</text>
      <text x="20" y="290" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#b45309">• Bourdon pressure gauge &amp; scale</text>
    </g>
  </g>

  <!-- Card 3: Null-Balance Method -->
  <g transform="translate(1068, 152)">
    <rect width="468" height="688" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <rect x="0" y="0" width="468" height="62" rx="14" fill="#dcfce7"/>
    <text x="24" y="40" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#15803d">3. Null-Balance Method</text>

    <!-- Visual: Balanced Beam / Bridge with Zero Center Detector -->
    <g transform="translate(34, 82)">
      <polygon points="200,145 178,186 222,186" fill="#475569"/>
      <line x1="56" y1="145" x2="344" y2="145" stroke="#0f172a" stroke-width="5"/>

      <line x1="76" y1="145" x2="76" y2="188" stroke="#475569" stroke-width="2.5"/>
      <rect x="34" y="188" width="84" height="14" rx="3" fill="#cbd5e1"/>
      <rect x="44" y="152" width="64" height="36" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
      <text x="76" y="224" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1" text-anchor="middle">Unknown</text>

      <line x1="324" y1="145" x2="324" y2="188" stroke="#475569" stroke-width="2.5"/>
      <rect x="282" y="188" width="84" height="14" rx="3" fill="#cbd5e1"/>
      <rect x="292" y="152" width="64" height="36" rx="4" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
      <text x="324" y="224" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Standard</text>

      <circle cx="200" cy="78" r="46" fill="#ffffff" stroke="#16a34a" stroke-width="2.5"/>
      <line x1="200" y1="74" x2="200" y2="42" stroke="#16a34a" stroke-width="3.5"/>
      <circle cx="200" cy="74" r="5" fill="#0f172a"/>
      <text x="200" y="104" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">NULL (0)</text>
    </g>

    <!-- Architecture summary -->
    <g transform="translate(24, 320)">
      <rect width="420" height="340" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="20" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Working Mechanism:</text>
      <text x="20" y="76" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Adjust reference until balanced</text>
      <text x="20" y="112" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Detector rests strictly at Zero</text>
      <text x="20" y="148" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">• Zero energy drain at null balance</text>

      <line x1="20" y1="176" x2="400" y2="176" stroke="#e2e8f0" stroke-width="1.5"/>

      <text x="20" y="216" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Workshop Examples:</text>
      <text x="20" y="254" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#15803d">• Wheatstone resistance bridge</text>
      <text x="20" y="290" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#15803d">• Precision analytical beam balance</text>
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
  <rect x="28" y="28" width="1544" height="844" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Header -->
  <text x="64" y="84" font-family="system-ui, sans-serif" font-size="32" font-weight="800" fill="#0f172a">Continuous Analog Waveform vs. Digital Quantized Steps</text>
  <text x="64" y="120" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#334155">Discrete sampling intervals in time and rounding to distinct binary voltage levels</text>

  <!-- Main Comparison Chart -->
  <g transform="translate(64, 152)">
    <rect width="1010" height="688" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- Horizontal Quantization Grid Lines -->
    <line x1="185" y1="540" x2="965" y2="540" stroke="#e2e8f0" stroke-width="1.2"/>
    <text x="172" y="547" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">Lv 0 [000]</text>

    <line x1="185" y1="470" x2="965" y2="470" stroke="#e2e8f0" stroke-width="1.2"/>
    <text x="172" y="477" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">Lv 1 [001]</text>

    <line x1="185" y1="400" x2="965" y2="400" stroke="#e2e8f0" stroke-width="1.2"/>
    <text x="172" y="407" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">Lv 2 [010]</text>

    <line x1="185" y1="330" x2="965" y2="330" stroke="#e2e8f0" stroke-width="1.2"/>
    <text x="172" y="337" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">Lv 3 [011]</text>

    <line x1="185" y1="260" x2="965" y2="260" stroke="#e2e8f0" stroke-width="1.2"/>
    <text x="172" y="267" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">Lv 4 [100]</text>

    <line x1="185" y1="190" x2="965" y2="190" stroke="#e2e8f0" stroke-width="1.2"/>
    <text x="172" y="197" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">Lv 5 [101]</text>

    <line x1="185" y1="120" x2="965" y2="120" stroke="#e2e8f0" stroke-width="1.2"/>
    <text x="172" y="127" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">Lv 6 [110]</text>

    <line x1="185" y1="50" x2="965" y2="50" stroke="#e2e8f0" stroke-width="1.2"/>
    <text x="172" y="57" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">Lv 7 [111]</text>

    <!-- Axes -->
    <line x1="185" y1="575" x2="965" y2="575" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="185" y1="30" x2="185" y2="575" stroke="#0f172a" stroke-width="2.5"/>
    <text x="575" y="630" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">Time Axis (t) →</text>
    <text x="36" y="310" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a" transform="rotate(-90 36 310)" text-anchor="middle">Voltage (V) →</text>

    <!-- Continuous Analog Curve -->
    <path d="M 185 540 C 295 500, 335 70, 480 60 C 610 50, 665 530, 795 520 C 870 510, 925 280, 965 260"
          fill="none" stroke="#0284c7" stroke-width="5"/>

    <!-- Digital Staircase -->
    <path d="M 185 540 L 250 540 L 250 470 L 315 470 L 315 260 L 380 260 L 380 120 L 445 120 L 445 50 L 575 50 L 575 120 L 640 120 L 640 330 L 705 330 L 705 470 L 770 470 L 770 540 L 835 540 L 835 400 L 900 400 L 900 260 L 965 260"
          fill="none" stroke="#d97706" stroke-width="4.5"/>

    <!-- Sampling Markers -->
    <circle cx="250" cy="470" r="7" fill="#16a34a"/>
    <circle cx="315" cy="260" r="7" fill="#16a34a"/>
    <circle cx="380" cy="120" r="7" fill="#16a34a"/>
    <circle cx="445" cy="50" r="7" fill="#16a34a"/>
    <circle cx="510" cy="50" r="7" fill="#16a34a"/>
    <circle cx="575" cy="120" r="7" fill="#16a34a"/>
    <circle cx="640" cy="330" r="7" fill="#16a34a"/>
    <circle cx="705" cy="470" r="7" fill="#16a34a"/>
    <circle cx="770" cy="540" r="7" fill="#16a34a"/>
    <circle cx="835" cy="400" r="7" fill="#16a34a"/>
    <circle cx="900" cy="260" r="7" fill="#16a34a"/>

    <!-- Step height label -->
    <line x1="850" y1="400" x2="850" y2="470" stroke="#dc2626" stroke-width="3.5"/>
    <line x1="836" y1="400" x2="864" y2="400" stroke="#dc2626" stroke-width="2.5"/>
    <line x1="836" y1="470" x2="864" y2="470" stroke="#dc2626" stroke-width="2.5"/>
    <text x="872" y="442" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#dc2626">1 LSB Step</text>
  </g>

  <!-- Right Side Key Insight Panel -->
  <g transform="translate(1096, 152)">
    <rect width="440" height="688" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="46" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#0f172a">Visual Legend</text>

    <!-- Legend 1 -->
    <g transform="translate(28, 76)">
      <line x1="0" y1="14" x2="46" y2="14" stroke="#0284c7" stroke-width="5"/>
      <text x="58" y="21" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0284c7">Continuous Analog</text>
      <text x="0" y="54" font-family="system-ui, sans-serif" font-size="20" fill="#334155">Smooth physical voltage with</text>
      <text x="0" y="80" font-family="system-ui, sans-serif" font-size="20" fill="#334155">infinite possible values.</text>
    </g>

    <!-- Legend 2 -->
    <g transform="translate(28, 184)">
      <line x1="0" y1="14" x2="46" y2="14" stroke="#d97706" stroke-width="5"/>
      <text x="58" y="21" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#d97706">Quantized Digital</text>
      <text x="0" y="54" font-family="system-ui, sans-serif" font-size="20" fill="#334155">Staircase approximation snapped</text>
      <text x="0" y="80" font-family="system-ui, sans-serif" font-size="20" fill="#334155">to nearest binary code level.</text>
    </g>

    <!-- Legend 3 -->
    <g transform="translate(28, 292)">
      <circle cx="14" cy="14" r="8" fill="#16a34a"/>
      <text x="36" y="21" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#15803d">Sampling Moments</text>
      <text x="0" y="54" font-family="system-ui, sans-serif" font-size="20" fill="#334155">Clock pulses where ADC freezes</text>
      <text x="0" y="80" font-family="system-ui, sans-serif" font-size="20" fill="#334155">and captures each snapshot.</text>
    </g>

    <!-- Insight Box -->
    <g transform="translate(20, 412)">
      <rect width="400" height="252" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="20" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Key Takeaways:</text>
      <text x="20" y="76" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Analog: continuous time &amp; level</text>
      <text x="20" y="112" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Digital: sampled &amp; rounded steps</text>
      <text x="20" y="156" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">• Gap between curves equals</text>
      <text x="34" y="184" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">Quantization Error (±0.5 LSB)</text>
      <text x="20" y="226" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1">• More ADC bits = smaller steps</text>
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
  <rect x="28" y="28" width="1544" height="844" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Header -->
  <text x="64" y="84" font-family="system-ui, sans-serif" font-size="33" font-weight="800" fill="#0f172a">Generalized Measurement System &amp; DAQ Pipeline</text>
  <text x="64" y="120" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#334155">The unbroken signal chain from physical quantity to digital engineering display</text>

  <!-- Stage 1: Measurand -->
  <g transform="translate(52, 188)">
    <rect width="208" height="360" rx="12" fill="#ffffff" stroke="#475569" stroke-width="2"/>
    <rect width="208" height="56" rx="12" fill="#f1f5f9"/>
    <text x="104" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">1. Measurand</text>

    <circle cx="104" cy="126" r="44" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    <text x="104" y="135" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#0f172a" text-anchor="middle">Input</text>

    <text x="104" y="210" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Physical State:</text>
    <text x="104" y="246" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Steam Temp</text>
    <text x="104" y="280" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Pipe Pressure</text>
    <text x="104" y="314" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Structural Strain</text>
  </g>

  <line x1="260" y1="368" x2="288" y2="368" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 2: Sensor / Transducer -->
  <g transform="translate(292, 188)">
    <rect width="224" height="360" rx="12" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <rect width="224" height="56" rx="12" fill="#e0f2fe"/>
    <text x="112" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0369a1" text-anchor="middle">2. Sensor</text>

    <rect x="16" y="76" width="192" height="82" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
    <text x="112" y="109" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#0369a1" text-anchor="middle">Transducer</text>
    <text x="112" y="139" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#0284c7" text-anchor="middle">Physics → Volts</text>

    <text x="112" y="202" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Sensor Types:</text>
    <text x="112" y="238" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Thermocouple</text>
    <text x="112" y="272" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Strain Gauge</text>
    <text x="112" y="306" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Piezo Crystal</text>
  </g>

  <line x1="516" y1="368" x2="544" y2="368" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 3: Signal Conditioning -->
  <g transform="translate(548, 152)">
    <rect width="290" height="432" rx="12" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <rect width="290" height="56" rx="12" fill="#fef3c7"/>
    <text x="145" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#b45309" text-anchor="middle">3. Conditioning</text>

    <rect x="18" y="74" width="254" height="78" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="145" y="106" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#b45309" text-anchor="middle">Amplification</text>
    <text x="145" y="136" font-family="system-ui, sans-serif" font-size="20" fill="#78350f" text-anchor="middle">Boosts mV up to Volts</text>

    <rect x="18" y="168" width="254" height="78" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="145" y="200" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#b45309" text-anchor="middle">Anti-Aliasing Filter</text>
    <text x="145" y="230" font-family="system-ui, sans-serif" font-size="20" fill="#78350f" text-anchor="middle">Cuts high-freq noise</text>

    <rect x="18" y="262" width="254" height="78" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>
    <text x="145" y="294" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#b45309" text-anchor="middle">Galvanic Isolation</text>
    <text x="145" y="324" font-family="system-ui, sans-serif" font-size="20" fill="#78350f" text-anchor="middle">Breaks ground loops</text>

    <text x="145" y="376" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Cleans &amp; standardizes</text>
    <text x="145" y="406" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">signal before ADC stage</text>
  </g>

  <line x1="838" y1="368" x2="866" y2="368" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 4: MUX & S/H -->
  <g transform="translate(870, 188)">
    <rect width="220" height="360" rx="12" fill="#ffffff" stroke="#db2777" stroke-width="2"/>
    <rect width="220" height="56" rx="12" fill="#fce7f3"/>
    <text x="110" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#be185d" text-anchor="middle">4. MUX &amp; S/H</text>

    <rect x="16" y="76" width="188" height="82" rx="8" fill="#fdf2f8" stroke="#db2777" stroke-width="1.5"/>
    <text x="110" y="109" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#be185d" text-anchor="middle">Multiplexer</text>
    <text x="110" y="139" font-family="system-ui, sans-serif" font-size="20" fill="#475569" text-anchor="middle">Shares 1 ADC</text>

    <rect x="16" y="176" width="188" height="82" rx="8" fill="#fdf2f8" stroke="#db2777" stroke-width="1.5"/>
    <text x="110" y="209" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#be185d" text-anchor="middle">Sample &amp; Hold</text>
    <text x="110" y="239" font-family="system-ui, sans-serif" font-size="20" fill="#475569" text-anchor="middle">Locks voltage</text>

    <text x="110" y="298" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#1e293b" text-anchor="middle">Prevents sample</text>
    <text x="110" y="328" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#1e293b" text-anchor="middle">blur in ADC</text>
  </g>

  <line x1="1090" y1="368" x2="1118" y2="368" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 5: ADC -->
  <g transform="translate(1122, 188)">
    <rect width="204" height="360" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <rect width="204" height="56" rx="12" fill="#dcfce7"/>
    <text x="102" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#15803d" text-anchor="middle">5. ADC</text>

    <circle cx="102" cy="126" r="44" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <text x="102" y="135" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#15803d" text-anchor="middle">ADC</text>

    <text x="102" y="210" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Digital Output:</text>
    <text x="102" y="246" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">Binary 0s &amp; 1s</text>
    <text x="102" y="280" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">12 / 16 / 24-bit</text>
    <text x="102" y="314" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">Quantized Codes</text>
  </g>

  <line x1="1326" y1="368" x2="1354" y2="368" stroke="#0284c7" stroke-width="4" marker-end="url(#arrChain)"/>

  <!-- Stage 6: Host & Display -->
  <g transform="translate(1358, 188)">
    <rect width="190" height="360" rx="12" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
    <rect width="190" height="56" rx="12" fill="#ede9fe"/>
    <text x="95" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#6d28d9" text-anchor="middle">6. Host / PC</text>

    <rect x="16" y="78" width="158" height="86" rx="8" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5"/>
    <text x="95" y="114" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#6d28d9" text-anchor="middle">Screen</text>
    <text x="95" y="144" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#6d28d9" text-anchor="middle">Plot &amp; Data</text>

    <text x="95" y="210" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Features:</text>
    <text x="95" y="246" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Live Plots</text>
    <text x="95" y="280" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Disk Logging</text>
    <text x="95" y="314" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">• Alarm Trips</text>
  </g>

  <!-- Bottom Flow Summary Bar -->
  <g transform="translate(52, 616)">
    <rect width="1496" height="224" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="36" y="46" font-family="system-ui, sans-serif" font-size="25" font-weight="800" fill="#0f172a">Physical Signal Conversions Along the Chain:</text>

    <g transform="translate(36, 74)">
      <circle cx="18" cy="20" r="17" fill="#f1f5f9" stroke="#475569" stroke-width="1.8"/>
      <text x="18" y="27" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0f172a" text-anchor="middle">A</text>
      <text x="50" y="27" font-family="system-ui, sans-serif" font-size="21" fill="#1e293b"><tspan font-weight="800">Real World:</tspan> Physical quantity exists directly inside machinery or process fluid.</text>

      <circle cx="18" cy="68" r="17" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
      <text x="18" y="75" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0284c7" text-anchor="middle">B</text>
      <text x="50" y="75" font-family="system-ui, sans-serif" font-size="21" fill="#1e293b"><tspan font-weight="800">Analog Domain:</tspan> Converted to electrical signal, amplified, filtered, and isolated.</text>

      <circle cx="18" cy="116" r="17" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
      <text x="18" y="123" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#16a34a" text-anchor="middle">C</text>
      <text x="50" y="123" font-family="system-ui, sans-serif" font-size="21" fill="#1e293b"><tspan font-weight="800">Digital Domain:</tspan> Sampled into binary numbers for storage, control, and plots.</text>
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
  <rect x="28" y="28" width="1544" height="844" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Header -->
  <text x="64" y="84" font-family="system-ui, sans-serif" font-size="33" font-weight="800" fill="#0f172a">Static Calibration Curve &amp; Hysteresis Loop</text>
  <text x="64" y="120" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#334155">Loading (increasing input) vs. unloading (decreasing input) and sensitivity slope</text>

  <!-- Left Main Graph -->
  <g transform="translate(64, 152)">
    <rect width="968" height="688" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

    <!-- Grid lines -->
    <line x1="125" y1="530" x2="900" y2="530" stroke="#f1f5f9" stroke-width="1.5"/>
    <line x1="125" y1="410" x2="900" y2="410" stroke="#f1f5f9" stroke-width="1.5"/>
    <line x1="125" y1="290" x2="900" y2="290" stroke="#f1f5f9" stroke-width="1.5"/>
    <line x1="125" y1="170" x2="900" y2="170" stroke="#f1f5f9" stroke-width="1.5"/>

    <!-- Coordinate Axes -->
    <line x1="125" y1="560" x2="915" y2="560" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="125" y1="55" x2="125" y2="560" stroke="#0f172a" stroke-width="2.5"/>

    <text x="520" y="618" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">Applied Standard Input (x) [Pressure, bar] →</text>
    <text x="54" y="315" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a" transform="rotate(-90 54 315)" text-anchor="middle">Measured Output (y) [Voltage, V] →</text>

    <!-- Ideal Linear Reference Line -->
    <line x1="125" y1="560" x2="875" y2="95" stroke="#64748b" stroke-width="2.5" stroke-dasharray="8,8"/>
    <text x="728" y="72" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155">Ideal Linear Line</text>

    <!-- Ascending Path Curve (Green: Increasing Input) -->
    <path d="M 125 560 Q 450 410, 875 95" fill="none" stroke="#16a34a" stroke-width="5"/>
    <line x1="365" y1="450" x2="385" y2="435" stroke="#16a34a" stroke-width="5" marker-end="url(#arrUp)"/>

    <!-- Descending Path Curve (Red: Decreasing Input) -->
    <path d="M 875 95 Q 550 245, 125 560" fill="none" stroke="#dc2626" stroke-width="5"/>
    <line x1="635" y1="220" x2="615" y2="235" stroke="#dc2626" stroke-width="5" marker-end="url(#arrDown)"/>

    <!-- Vertical Hysteresis Gap -->
    <line x1="495" y1="290" x2="495" y2="375" stroke="#d97706" stroke-width="3.5"/>
    <line x1="478" y1="290" x2="512" y2="290" stroke="#d97706" stroke-width="2.5"/>
    <line x1="478" y1="375" x2="512" y2="375" stroke="#d97706" stroke-width="2.5"/>
    <circle cx="495" cy="290" r="6" fill="#dc2626"/>
    <circle cx="495" cy="375" r="6" fill="#16a34a"/>

    <text x="524" y="330" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#b45309">Hysteresis Gap</text>
    <text x="524" y="360" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155">Directional Lag</text>

    <!-- Sensitivity Slope Triangle -->
    <polygon points="670,255 810,255 810,150" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
    <text x="740" y="286" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0369a1" text-anchor="middle">Δ Input (Δx)</text>
    <text x="822" y="210" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0369a1">Δ Output</text>
    <text x="645" y="160" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#0369a1" text-anchor="end">Sensitivity Slope</text>
  </g>

  <!-- Right Side Explanation Panel -->
  <g transform="translate(1056, 152)">
    <rect width="480" height="688" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="46" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#0f172a">Calibration Takeaways</text>

    <!-- Block 1: Ascending -->
    <g transform="translate(28, 76)">
      <line x1="0" y1="14" x2="45" y2="14" stroke="#16a34a" stroke-width="5"/>
      <text x="58" y="21" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#15803d">Ascending (Loading)</text>
      <text x="0" y="54" font-family="system-ui, sans-serif" font-size="20" fill="#334155">Increasing input from min to max;</text>
      <text x="0" y="80" font-family="system-ui, sans-serif" font-size="20" fill="#334155">output rises along lower curve.</text>
    </g>

    <!-- Block 2: Descending -->
    <g transform="translate(28, 184)">
      <line x1="0" y1="14" x2="45" y2="14" stroke="#dc2626" stroke-width="5"/>
      <text x="58" y="21" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#dc2626">Descending (Unloading)</text>
      <text x="0" y="54" font-family="system-ui, sans-serif" font-size="20" fill="#334155">Decreasing input back to zero;</text>
      <text x="0" y="80" font-family="system-ui, sans-serif" font-size="20" fill="#334155">output lags and stays higher.</text>
    </g>

    <!-- Block 3: Why Hysteresis Happens -->
    <g transform="translate(22, 294)">
      <rect width="436" height="368" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="20" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Causes of Hysteresis:</text>
      <text x="20" y="76" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• <tspan font-weight="700">Friction:</tspan> Pivot &amp; gear tooth drag</text>
      <text x="20" y="114" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• <tspan font-weight="700">Elastic Lag:</tspan> Delayed spring recovery</text>
      <text x="20" y="152" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• <tspan font-weight="700">Magnetism:</tspan> Core remanence lag</text>

      <line x1="20" y1="184" x2="416" y2="184" stroke="#cbd5e1" stroke-width="1.5"/>

      <text x="20" y="224" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0369a1">What is Sensitivity?</text>
      <text x="20" y="262" font-family="system-ui, sans-serif" font-size="20" fill="#334155">Steeper slope = higher sensitivity.</text>
      <text x="20" y="294" font-family="system-ui, sans-serif" font-size="20" fill="#334155">Small input changes yield large,</text>
      <text x="20" y="326" font-family="system-ui, sans-serif" font-size="20" fill="#334155">clear output needle deflections.</text>
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
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.03"/>
    </linearGradient>
    <marker id="arrAmber5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706"/>
    </marker>
  </defs>

  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="28" y="28" width="1544" height="844" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Header -->
  <text x="64" y="84" font-family="system-ui, sans-serif" font-size="32" font-weight="800" fill="#0f172a">Measurement Errors: Systematic Bias vs. Random Spread</text>
  <text x="64" y="120" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#334155">Visualizing systematic offset (accuracy) and random repeated dispersion (precision)</text>

  <!-- Left Panel: Gaussian Bell Curve -->
  <g transform="translate(64, 152)">
    <rect width="756" height="688" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="32" y="48" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#0369a1">Repeated Measurement Distribution</text>

    <!-- Horizontal Axis -->
    <line x1="56" y1="530" x2="700" y2="530" stroke="#0f172a" stroke-width="2.5"/>
    <text x="378" y="576" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#334155" text-anchor="middle">Measured Value Scale (x) →</text>

    <!-- True Value Line -->
    <line x1="250" y1="120" x2="250" y2="530" stroke="#dc2626" stroke-width="3"/>
    <text x="242" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#dc2626" text-anchor="middle">True Value</text>

    <!-- Measured Average Mean Line -->
    <line x1="450" y1="120" x2="450" y2="530" stroke="#0284c7" stroke-width="3" stroke-dasharray="6,6"/>
    <text x="462" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#0284c7" text-anchor="middle">Sample Mean</text>

    <!-- Systematic Bias Arrow -->
    <line x1="250" y1="162" x2="444" y2="162" stroke="#d97706" stroke-width="3.5" marker-end="url(#arrAmber5)"/>
    <text x="350" y="148" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#b45309" text-anchor="middle">Systematic Bias</text>

    <!-- Bell Curve -->
    <path d="M 140 530 C 260 530, 350 485, 400 350 C 430 230, 450 190, 450 190 C 450 190, 470 230, 500 350 C 550 485, 640 530, 720 530 Z"
          fill="url(#bellGradient)"/>
    <path d="M 140 530 C 260 530, 350 485, 400 350 C 430 230, 450 190, 450 190 C 450 190, 470 230, 500 350 C 550 485, 640 530, 720 530"
          fill="none" stroke="#0284c7" stroke-width="4"/>

    <!-- Spread Boundaries -->
    <line x1="382" y1="530" x2="382" y2="355" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="518" y1="530" x2="518" y2="355" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
    <line x1="382" y1="395" x2="518" y2="395" stroke="#16a34a" stroke-width="2.5"/>
    <text x="450" y="382" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">Random Spread (Precision)</text>

    <!-- Bottom explanation card -->
    <rect x="36" y="598" width="684" height="62" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
    <text x="378" y="637" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a" text-anchor="middle">Bias shifts the peak • Random noise widens the bell</text>
  </g>

  <!-- Right Panel: Dartboard Analogy & SNR -->
  <g transform="translate(844, 152)">
    <rect width="692" height="688" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="32" y="48" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#0f172a">Accuracy vs. Precision Explained</text>

    <!-- Two Dartboard Squares -->
    <g transform="translate(32, 76)">
      <!-- Board 1 -->
      <rect x="0" y="0" width="298" height="266" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
      <text x="149" y="34" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#15803d" text-anchor="middle">Accurate &amp; Precise</text>
      <circle cx="149" cy="126" r="52" fill="none" stroke="#86efac" stroke-width="2.5"/>
      <circle cx="149" cy="126" r="26" fill="none" stroke="#86efac" stroke-width="2.5"/>
      <circle cx="149" cy="126" r="7" fill="#dc2626"/>
      <circle cx="148" cy="125" r="4.5" fill="#0f172a"/>
      <circle cx="152" cy="128" r="4.5" fill="#0f172a"/>
      <circle cx="146" cy="129" r="4.5" fill="#0f172a"/>
      <circle cx="150" cy="122" r="4.5" fill="#0f172a"/>
      <text x="149" y="212" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Clustered on bullseye</text>
      <text x="149" y="242" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">(Ideal measurement)</text>

      <!-- Board 2 -->
      <rect x="330" y="0" width="298" height="266" rx="10" fill="#fffbeb" stroke="#d97706" stroke-width="1.8"/>
      <text x="479" y="34" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#b45309" text-anchor="middle">Precise, Low Accuracy</text>
      <circle cx="479" cy="126" r="52" fill="none" stroke="#fde68a" stroke-width="2.5"/>
      <circle cx="479" cy="126" r="26" fill="none" stroke="#fde68a" stroke-width="2.5"/>
      <circle cx="479" cy="126" r="7" fill="#dc2626"/>
      <circle cx="512" cy="90" r="4.5" fill="#0f172a"/>
      <circle cx="516" cy="93" r="4.5" fill="#0f172a"/>
      <circle cx="509" cy="95" r="4.5" fill="#0f172a"/>
      <circle cx="514" cy="88" r="4.5" fill="#0f172a"/>
      <text x="479" y="212" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">Clustered off-target</text>
      <text x="479" y="242" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">(Zero Offset / Bias!)</text>
    </g>

    <!-- Signal vs Noise Spike Graphic -->
    <g transform="translate(32, 368)">
      <rect width="628" height="292" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="24" y="38" font-family="system-ui, sans-serif" font-size="23" font-weight="800" fill="#0f172a">Signal-to-Noise Ratio (SNR) Concept:</text>

      <line x1="28" y1="230" x2="598" y2="230" stroke="#0f172a" stroke-width="2"/>
      <text x="592" y="264" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155" text-anchor="end">Frequency (Hz) →</text>

      <path d="M 28 195 Q 72 210, 114 200 T 198 205 T 282 200 T 366 205 T 450 200 T 534 205 L 598 198" fill="none" stroke="#64748b" stroke-width="2.5"/>
      <text x="40" y="176" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155">Background Noise</text>

      <line x1="280" y1="84" x2="280" y2="230" stroke="#16a34a" stroke-width="4.5"/>
      <circle cx="280" cy="84" r="7" fill="#16a34a"/>
      <text x="280" y="68" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#15803d" text-anchor="middle">True Signal Peak</text>

      <line x1="330" y1="84" x2="330" y2="200" stroke="#0284c7" stroke-width="3"/>
      <text x="348" y="138" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#0369a1">High SNR = Clean Data</text>
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
  <rect x="28" y="28" width="1544" height="844" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Header -->
  <text x="64" y="84" font-family="system-ui, sans-serif" font-size="33" font-weight="800" fill="#0f172a">Intrusive vs. Non-Intrusive Measurement</text>
  <text x="64" y="120" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#334155">Direct process contact vs. external sensing without breaking the boundary</text>

  <!-- Left: Intrusive Sensing -->
  <g transform="translate(64, 152)">
    <rect width="712" height="688" rx="14" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
    <rect x="0" y="0" width="712" height="62" rx="14" fill="#fee2e2"/>
    <text x="26" y="40" font-family="system-ui, sans-serif" font-size="25" font-weight="800" fill="#b91c1c">Intrusive Sensing (Inside Process)</text>

    <!-- Pipe Cross Section with Probe -->
    <g transform="translate(46, 86)">
      <rect x="0" y="44" width="620" height="18" fill="#475569"/>
      <rect x="0" y="182" width="620" height="18" fill="#475569"/>

      <line x1="24" y1="88" x2="170" y2="88" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arrFlow)"/>
      <line x1="24" y1="122" x2="170" y2="122" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arrFlow)"/>
      <line x1="24" y1="156" x2="170" y2="156" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arrFlow)"/>
      <text x="20" y="30" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1">Incoming Flow</text>

      <rect x="245" y="0" width="38" height="132" rx="4" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
      <circle cx="264" cy="126" r="12" fill="#dc2626"/>
      <text x="264" y="168" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Probe Tip</text>

      <path d="M 302 90 Q 332 72, 355 94 T 405 84" fill="none" stroke="#d97706" stroke-width="3"/>
      <path d="M 302 126 Q 345 148, 378 122 T 445 136" fill="none" stroke="#d97706" stroke-width="3"/>
      <text x="315" y="30" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#b45309">Turbulence &amp; Pressure Drop</text>
    </g>

    <!-- Characteristics Card -->
    <g transform="translate(36, 314)">
      <rect width="640" height="346" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="24" y="40" font-family="system-ui, sans-serif" font-size="23" font-weight="800" fill="#0f172a">Characteristics &amp; Drawbacks:</text>
      <text x="24" y="80" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• <tspan font-weight="700">Penetrates pipe or circuit:</tspan> Requires direct contact</text>
      <text x="24" y="118" font-family="system-ui, sans-serif" font-size="20" fill="#dc2626">• <tspan font-weight="700">Disturbs system:</tspan> Pressure loss, wear, leak risk</text>
      <text x="24" y="156" font-family="system-ui, sans-serif" font-size="20" fill="#dc2626">• <tspan font-weight="700">Loading Effect:</tspan> Draws energy from measured path</text>

      <line x1="24" y1="186" x2="616" y2="186" stroke="#cbd5e1" stroke-width="1.5"/>

      <text x="24" y="226" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Typical Examples:</text>
      <text x="24" y="264" font-family="system-ui, sans-serif" font-size="20" fill="#334155">• Thermowell probe screwed into a steam pipe</text>
      <text x="24" y="302" font-family="system-ui, sans-serif" font-size="20" fill="#334155">• In-line orifice plate (restricts fluid flow)</text>
    </g>
  </g>

  <!-- Right: Non-Intrusive Sensing -->
  <g transform="translate(824, 152)">
    <rect width="712" height="688" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <rect x="0" y="0" width="712" height="62" rx="14" fill="#dcfce7"/>
    <text x="26" y="40" font-family="system-ui, sans-serif" font-size="25" font-weight="800" fill="#15803d">Non-Intrusive Sensing (Non-Contact)</text>

    <!-- Pipe Cross Section with Clamp-on Sensors -->
    <g transform="translate(46, 86)">
      <rect x="0" y="44" width="620" height="18" fill="#475569"/>
      <rect x="0" y="182" width="620" height="18" fill="#475569"/>

      <line x1="24" y1="88" x2="575" y2="88" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arrFlow)"/>
      <line x1="24" y1="122" x2="575" y2="122" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arrFlow)"/>
      <line x1="24" y1="156" x2="575" y2="156" stroke="#0284c7" stroke-width="3.5" marker-end="url(#arrFlow)"/>
      <text x="340" y="30" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1">Undisturbed Fluid Flow</text>

      <rect x="135" y="6" width="112" height="38" rx="6" fill="#16a34a"/>
      <text x="191" y="32" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#ffffff" text-anchor="middle">Clamp TX</text>

      <rect x="370" y="200" width="112" height="38" rx="6" fill="#16a34a"/>
      <text x="426" y="226" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#ffffff" text-anchor="middle">Clamp RX</text>

      <line x1="191" y1="44" x2="426" y2="200" stroke="#15803d" stroke-width="3.5" stroke-dasharray="7,6"/>
      <text x="330" y="114" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d">Ultrasonic Beam</text>
    </g>

    <!-- Non-Intrusive Benefits Card -->
    <g transform="translate(36, 314)">
      <rect width="640" height="346" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="24" y="40" font-family="system-ui, sans-serif" font-size="23" font-weight="800" fill="#0f172a">Characteristics &amp; Advantages:</text>
      <text x="24" y="80" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• <tspan font-weight="700">Zero cutting or drilling:</tspan> Mounts externally</text>
      <text x="24" y="118" font-family="system-ui, sans-serif" font-size="20" fill="#15803d">• <tspan font-weight="700">Zero pressure drop:</tspan> No pipe leaks or drag</text>
      <text x="24" y="156" font-family="system-ui, sans-serif" font-size="20" fill="#15803d">• <tspan font-weight="700">Zero circuit loading:</tspan> Hall probe clips around</text>

      <line x1="24" y1="186" x2="616" y2="186" stroke="#cbd5e1" stroke-width="1.5"/>

      <text x="24" y="226" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Typical Examples:</text>
      <text x="24" y="264" font-family="system-ui, sans-serif" font-size="20" fill="#334155">• Clamp-on ultrasonic transit-time flowmeter</text>
      <text x="24" y="302" font-family="system-ui, sans-serif" font-size="20" fill="#334155">• Infrared thermometer &amp; thermal camera</text>
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
  <rect x="28" y="28" width="1544" height="844" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Header -->
  <text x="64" y="84" font-family="system-ui, sans-serif" font-size="32" font-weight="800" fill="#0f172a">Electrical Safety: Ground Loops &amp; Galvanic Isolation</text>
  <text x="64" y="120" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#334155">Multiple earth grounds create noise loops; optical barriers isolate high voltage</text>

  <!-- Top Panel: The Ground Loop Hazard -->
  <g transform="translate(64, 148)">
    <rect width="896" height="328" rx="12" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
    <rect x="0" y="0" width="896" height="48" rx="12" fill="#fee2e2"/>
    <text x="24" y="32" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#b91c1c">Problem: Ground Loop Current Across Distant Grounds</text>

    <!-- Machine A -->
    <rect x="44" y="72" width="180" height="106" rx="8" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
    <text x="134" y="114" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0369a1" text-anchor="middle">Machine A</text>
    <text x="134" y="148" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">Sensor Site</text>

    <!-- Earth Ground A -->
    <line x1="134" y1="178" x2="134" y2="230" stroke="#0f172a" stroke-width="3"/>
    <line x1="112" y1="230" x2="156" y2="230" stroke="#0f172a" stroke-width="3.5"/>
    <line x1="120" y1="240" x2="148" y2="240" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="126" y1="250" x2="142" y2="250" stroke="#0f172a" stroke-width="2"/>
    <text x="134" y="286" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Ground A</text>

    <!-- Machine B -->
    <rect x="672" y="72" width="180" height="106" rx="8" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
    <text x="762" y="114" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0369a1" text-anchor="middle">Machine B</text>
    <text x="762" y="148" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">DAQ Host</text>

    <!-- Earth Ground B -->
    <line x1="762" y1="178" x2="762" y2="230" stroke="#0f172a" stroke-width="3"/>
    <line x1="740" y1="230" x2="784" y2="230" stroke="#0f172a" stroke-width="3.5"/>
    <line x1="748" y1="240" x2="776" y2="240" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="754" y1="250" x2="770" y2="250" stroke="#0f172a" stroke-width="2"/>
    <text x="762" y="286" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Ground B</text>

    <!-- Signal Cable (Top) -->
    <line x1="224" y1="104" x2="672" y2="104" stroke="#0284c7" stroke-width="3.5"/>
    <text x="448" y="92" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1" text-anchor="middle">Signal Wire</text>

    <!-- Cable Shield Ground (Return) -->
    <line x1="224" y1="148" x2="672" y2="148" stroke="#dc2626" stroke-width="4"/>
    <line x1="485" y1="148" x2="415" y2="148" stroke="#dc2626" stroke-width="4" marker-end="url(#arrRedLoop)"/>
    <text x="448" y="182" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Circulating 50 Hz Noise Loop</text>

    <!-- Ground Difference -->
    <line x1="134" y1="245" x2="762" y2="245" stroke="#64748b" stroke-width="2.5" stroke-dasharray="5,5"/>
    <text x="448" y="232" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">Earth Potential Difference (ΔV)</text>
  </g>

  <!-- Bottom Left Panel: Solution via Optical Isolation -->
  <g transform="translate(64, 496)">
    <rect width="896" height="346" rx="12" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <rect x="0" y="0" width="896" height="48" rx="12" fill="#dcfce7"/>
    <text x="24" y="32" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#15803d">Solution: Galvanic Optical Isolation (Breaks Ground Loop)</text>

    <g transform="translate(48, 66)">
      <!-- Input Side -->
      <rect x="0" y="16" width="220" height="148" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
      <text x="110" y="50" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#0369a1" text-anchor="middle">Input Domain</text>
      <polygon points="128,96 100,78 100,114" fill="#e11d48"/>
      <line x1="72" y1="96" x2="100" y2="96" stroke="#e11d48" stroke-width="3.5"/>
      <line x1="128" y1="96" x2="156" y2="96" stroke="#e11d48" stroke-width="3.5"/>
      <text x="110" y="146" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#be123c" text-anchor="middle">Infrared LED</text>

      <!-- Physical Air / Glass Gap (Barrier) -->
      <rect x="284" y="0" width="212" height="180" rx="8" fill="#f1f5f9" stroke="#475569" stroke-width="2" stroke-dasharray="6,6"/>
      <text x="390" y="54" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#1e293b" text-anchor="middle">Glass / Air</text>
      <text x="390" y="96" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#15803d" text-anchor="middle">Isolation</text>
      <text x="390" y="138" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#334155" text-anchor="middle">Barrier (kV)</text>

      <!-- Light Beams across gap -->
      <line x1="226" y1="96" x2="278" y2="96" stroke="#d97706" stroke-width="3.5" stroke-dasharray="4,4"/>
      <line x1="226" y1="80" x2="278" y2="80" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4,4"/>
      <line x1="226" y1="112" x2="278" y2="112" stroke="#d97706" stroke-width="2.5" stroke-dasharray="4,4"/>

      <!-- Output Side -->
      <rect x="560" y="16" width="220" height="148" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="670" y="50" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#15803d" text-anchor="middle">Output Domain</text>
      <circle cx="670" cy="96" r="24" fill="none" stroke="#16a34a" stroke-width="2.5"/>
      <text x="670" y="146" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Phototransistor</text>

      <text x="390" y="218" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#0f172a" text-anchor="middle">NO Metal Bridge: Electricity → Light → Electricity!</text>
      <text x="390" y="248" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#15803d" text-anchor="middle">Blocks ground loop noise &amp; protects DAQ from high voltage.</text>
    </g>
  </g>

  <!-- Right Panel: IEC 61010-1 Overvoltage Categories -->
  <g transform="translate(984, 148)">
    <rect width="552" height="694" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="44" font-family="system-ui, sans-serif" font-size="25" font-weight="800" fill="#0f172a">IEC Safety Overvoltage Categories</text>
    <text x="28" y="74" font-family="system-ui, sans-serif" font-size="20" font-weight="500" fill="#334155">Match meter rating to circuit energy risk</text>

    <!-- Category IV -->
    <g transform="translate(24, 96)">
      <rect width="504" height="118" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
      <text x="20" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#dc2626">CAT IV: Utility Origin (Highest)</text>
      <text x="20" y="68" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Overhead lines, meters, service drop</text>
      <text x="20" y="100" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#b91c1c">• Handles lightning &amp; grid surges</text>
    </g>

    <!-- Category III -->
    <g transform="translate(24, 228)">
      <rect width="504" height="118" rx="8" fill="#fff7ed" stroke="#f97316" stroke-width="1.8"/>
      <text x="20" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#ea580c">CAT III: Building Distribution</text>
      <text x="20" y="68" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Switchboards, breakers, 3-ph motors</text>
      <text x="20" y="100" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#c2410c">• Fixed industrial power feeders</text>
    </g>

    <!-- Category II -->
    <g transform="translate(24, 360)">
      <rect width="504" height="118" rx="8" fill="#fefce8" stroke="#eab308" stroke-width="1.8"/>
      <text x="20" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#a16207">CAT II: Wall Sockets &amp; Tools</text>
      <text x="20" y="68" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• 230V outlets, shop tools, bench PSUs</text>
      <text x="20" y="100" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#a16207">• Plug-in lab &amp; domestic appliances</text>
    </g>

    <!-- Category I -->
    <g transform="translate(24, 492)">
      <rect width="504" height="118" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.8"/>
      <text x="20" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#15803d">CAT I: Low-Voltage Electronics</text>
      <text x="20" y="68" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Battery meters, low-voltage PCBs</text>
      <text x="20" y="100" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#15803d">• Isolated DC rails (5V, 12V, 24V)</text>
    </g>

    <text x="276" y="656" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#dc2626" text-anchor="middle">Rule: Never probe CAT III/IV with a CAT I/II meter!</text>
  </g>
</svg>`
  },

  fig_cal_methods: {
    id: "fig_cal_methods",
    filename: "fig4b_calibration_methods.svg",
    title: "Figure 4B: Single-Point, Two-Point & Multi-Point Calibration Comparison",
    description: "Visual side-by-side comparison of offset correction (Single-Point), zero + span slope alignment (Two-Point), and full-range least-squares regression with non-linearity detection (Multi-Point).",
    topicRef: "1.4 Static Calibration & Instrument Characteristics",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <marker id="arrCalTeal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f766e"/>
    </marker>
    <marker id="arrCalRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
  </defs>

  <!-- Clean Canvas -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="28" y="28" width="1544" height="844" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Header -->
  <text x="60" y="84" font-family="system-ui, sans-serif" font-size="31" font-weight="800" fill="#0f172a">Calibration Strategies: Single-Point vs. Two-Point vs. Multi-Point</text>
  <text x="60" y="120" font-family="system-ui, sans-serif" font-size="22" font-weight="500" fill="#334155">How the count of reference points determines which systematic errors are removed</text>

  <!-- PANEL 1: SINGLE-POINT CALIBRATION -->
  <g transform="translate(60, 148)">
    <rect width="474" height="694" rx="14" fill="#ffffff" stroke="#0284c7" stroke-width="2"/>
    <rect x="0" y="0" width="474" height="62" rx="14" fill="#e0f2fe"/>
    <text x="22" y="40" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#0369a1">1. Single-Point (Offset Only)</text>

    <!-- Plot Box -->
    <g transform="translate(24, 80)">
      <rect width="426" height="316" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <line x1="68" y1="262" x2="394" y2="262" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="68" y1="28" x2="68" y2="262" stroke="#0f172a" stroke-width="2.5"/>
      <text x="230" y="296" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">True Input (x)</text>
      <text x="32" y="146" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" transform="rotate(-90 32 146)" text-anchor="middle">Reading (y)</text>

      <!-- Raw Shifted Line -->
      <line x1="68" y1="204" x2="380" y2="34" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="7,5"/>
      <text x="245" y="48" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#dc2626">Raw Shifted</text>

      <!-- Corrected Line -->
      <line x1="68" y1="262" x2="380" y2="92" stroke="#0284c7" stroke-width="4.5"/>
      <text x="242" y="160" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0369a1">Calibrated</text>

      <circle cx="68" cy="204" r="8" fill="#dc2626" stroke="#ffffff" stroke-width="2"/>
      <circle cx="68" cy="262" r="8" fill="#16a34a" stroke="#ffffff" stroke-width="2"/>
      <line x1="96" y1="204" x2="96" y2="255" stroke="#0f766e" stroke-width="3.5" marker-end="url(#arrCalTeal)"/>
      <text x="112" y="232" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0f766e">Bias Shift</text>
      <text x="112" y="256" font-family="system-ui, sans-serif" font-size="20" fill="#334155">(1 Ref Pt)</text>
    </g>

    <!-- Summary Specs -->
    <g transform="translate(24, 412)">
      <rect width="426" height="258" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="18" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">How It Works:</text>
      <text x="18" y="72" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Checks offset at 1 fixed standard</text>
      <text x="18" y="106" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Subtracts constant bias everywhere</text>
      <text x="18" y="148" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d">✓ Fixes: Zero / Baseline Drift</text>
      <text x="18" y="184" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#dc2626">✕ Blind To: Slope Drift &amp; Curves</text>
      <text x="18" y="230" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1">Ex: Scale Tare, 0°C Ice Bath</text>
    </g>
  </g>

  <!-- PANEL 2: TWO-POINT CALIBRATION -->
  <g transform="translate(562, 148)">
    <rect width="474" height="694" rx="14" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
    <rect x="0" y="0" width="474" height="62" rx="14" fill="#fef3c7"/>
    <text x="22" y="40" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#b45309">2. Two-Point (Zero + Span)</text>

    <!-- Plot Box -->
    <g transform="translate(24, 80)">
      <rect width="426" height="316" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <line x1="68" y1="262" x2="394" y2="262" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="68" y1="28" x2="68" y2="262" stroke="#0f172a" stroke-width="2.5"/>
      <text x="230" y="296" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">True Input (x)</text>
      <text x="32" y="146" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" transform="rotate(-90 32 146)" text-anchor="middle">Reading (y)</text>

      <!-- Uncalibrated Drifted Line -->
      <line x1="68" y1="220" x2="380" y2="122" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="7,5"/>
      <text x="255" y="168" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#dc2626">Drifted Slope</text>

      <!-- Calibrated Target Line -->
      <line x1="68" y1="262" x2="380" y2="52" stroke="#d97706" stroke-width="4.5"/>
      <text x="160" y="70" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#b45309">True Span</text>

      <circle cx="110" cy="233" r="9" fill="#16a34a" stroke="#ffffff" stroke-width="2.5"/>
      <text x="128" y="246" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d">Pt 1 (Low)</text>

      <circle cx="348" cy="74" r="9" fill="#16a34a" stroke="#ffffff" stroke-width="2.5"/>
      <text x="332" y="54" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="end">Pt 2 (High)</text>

      <line x1="348" y1="126" x2="348" y2="88" stroke="#0f766e" stroke-width="3.5" marker-end="url(#arrCalTeal)"/>
    </g>

    <!-- Summary Specs -->
    <g transform="translate(24, 412)">
      <rect width="426" height="258" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="18" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">How It Works:</text>
      <text x="18" y="72" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Tests 2 points (Low &amp; High span)</text>
      <text x="18" y="106" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Solves true slope S &amp; intercept</text>
      <text x="18" y="148" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d">✓ Fixes: Zero Offset &amp; Span Drift</text>
      <text x="18" y="184" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#dc2626">✕ Blind To: Mid-Range Bowing</text>
      <text x="18" y="230" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b45309">Ex: 4–20 mA Loop, pH 4 &amp; 7</text>
    </g>
  </g>

  <!-- PANEL 3: MULTI-POINT CALIBRATION -->
  <g transform="translate(1064, 148)">
    <rect width="474" height="694" rx="14" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
    <rect x="0" y="0" width="474" height="62" rx="14" fill="#dcfce7"/>
    <text x="22" y="40" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#15803d">3. Multi-Point (Full Range)</text>

    <!-- Plot Box -->
    <g transform="translate(24, 80)">
      <rect width="426" height="316" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <line x1="68" y1="262" x2="394" y2="262" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="68" y1="28" x2="68" y2="262" stroke="#0f172a" stroke-width="2.5"/>
      <text x="230" y="296" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">True Input (x)</text>
      <text x="32" y="146" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" transform="rotate(-90 32 146)" text-anchor="middle">Reading (y)</text>

      <!-- Bowed Nonlinear Actual Curve -->
      <path d="M 80 250 Q 212 106, 368 56" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="6,5"/>

      <!-- OLS Best-Fit Line -->
      <line x1="80" y1="250" x2="368" y2="56" stroke="#16a34a" stroke-width="4"/>
      <text x="266" y="156" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d">OLS Fit</text>

      <!-- 6 Measured Data Points -->
      <circle cx="80" cy="250" r="7" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="138" cy="192" r="7" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="195" cy="142" r="7" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="252" cy="102" r="7" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="310" cy="74" r="7" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="368" cy="56" r="7" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>

      <!-- Residual Non-Linearity Gap -->
      <line x1="195" y1="142" x2="195" y2="173" stroke="#dc2626" stroke-width="3.5"/>
      <text x="104" y="106" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#dc2626">Residual</text>
      <text x="90" y="130" font-family="system-ui, sans-serif" font-size="20" fill="#dc2626">(Non-Lin.)</text>
    </g>

    <!-- Summary Specs -->
    <g transform="translate(24, 412)">
      <rect width="426" height="258" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="18" y="36" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">How It Works:</text>
      <text x="18" y="72" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Tests N ≥ 5 points across full scale</text>
      <text x="18" y="106" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Fits Least-Squares / curve model</text>
      <text x="18" y="148" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#15803d">✓ Fixes: Zero, Span &amp; Hysteresis</text>
      <text x="18" y="184" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#0369a1">★ Gold Standard: ISO/IEC 17025</text>
      <text x="18" y="230" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">Ex: Deadweight Tester, Load Cell</text>
    </g>
  </g>
</svg>`
  }
};
