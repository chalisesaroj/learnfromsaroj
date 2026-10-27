/**
 * Vector SVG assets for Unit II: Digital Signal Processing (10 hrs)
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 *
 * Professional Engineering Standard:
 * - Pure #ffffff clean white canvas background
 * - Isolated math: zero raw unformatted code-like formulas in SVG text
 * - Clean visual hierarchy: zero multi-line explanatory paragraphs in SVG
 * - 16:9 widescreen viewBox="0 0 1600 900"
 * - High-contrast academic typography, vector markers, and circuit schematics
 */

import { SvgAsset } from './svgAssets';

export const SVG_FIGURES_UNIT2: Record<string, SvgAsset> = {
  u2_fig1: {
    id: "u2_fig1",
    filename: "u2_fig1_signal_taxonomy.svg",
    title: "Figure 2.1: Taxonomy and Classification of Signals",
    description: "Classification of signals into continuous vs discrete, deterministic vs random, periodic vs aperiodic, and energy vs power signals.",
    topicRef: "2.1 Types of Signals",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.1: Signal Taxonomy · Time, Value, Predictability &amp; Energy Classifications
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.1
  </text>

  <!-- Quadrant 1: Continuous vs Discrete -->
  <g transform="translate(50, 130)">
    <rect width="730" height="345" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">
      1. Time &amp; Value Domain: Continuous vs. Discrete
    </text>

    <!-- Continuous waveform -->
    <g transform="translate(30, 70)">
      <rect width="320" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="85" x2="300" y2="85" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="20" y1="20" x2="20" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 20 85 Q 70 20, 120 85 T 220 85 T 300 85" fill="none" stroke="#2563eb" stroke-width="3"/>
      <text x="160" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">Analog Continuum</text>
      <text x="160" y="165" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Continuous Time &amp; Amplitude</text>
    </g>

    <!-- Discrete stem plot -->
    <g transform="translate(380, 70)">
      <rect width="320" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="85" x2="300" y2="85" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="20" y1="20" x2="20" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Stems -->
      <line x1="45" y1="85" x2="45" y2="55" stroke="#059669" stroke-width="2.5"/><circle cx="45" cy="55" r="4.5" fill="#059669"/>
      <line x1="80" y1="85" x2="80" y2="30" stroke="#059669" stroke-width="2.5"/><circle cx="80" cy="30" r="4.5" fill="#059669"/>
      <line x1="115" y1="85" x2="115" y2="85" stroke="#059669" stroke-width="2.5"/><circle cx="115" cy="85" r="4.5" fill="#059669"/>
      <line x1="150" y1="85" x2="150" y2="130" stroke="#059669" stroke-width="2.5"/><circle cx="150" cy="130" r="4.5" fill="#059669"/>
      <line x1="185" y1="85" x2="185" y2="85" stroke="#059669" stroke-width="2.5"/><circle cx="185" cy="85" r="4.5" fill="#059669"/>
      <line x1="220" y1="85" x2="220" y2="40" stroke="#059669" stroke-width="2.5"/><circle cx="220" cy="40" r="4.5" fill="#059669"/>
      <line x1="255" y1="85" x2="255" y2="95" stroke="#059669" stroke-width="2.5"/><circle cx="255" cy="95" r="4.5" fill="#059669"/>
      <text x="160" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669" text-anchor="middle">Sampled &amp; Quantized</text>
      <text x="160" y="165" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Uniform Sampling Intervals</text>
    </g>

    <!-- Bottom Metric Chips -->
    <g transform="translate(30, 260)">
      <rect x="0" y="0" width="320" height="65" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Continuous Characteristics:</text>
      <text x="15" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#2563eb">Infinite Resolution · Noise Susceptible</text>

      <rect x="350" y="0" width="320" height="65" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Discrete Characteristics:</text>
      <text x="15" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#059669">N-Bit Word Representation · Robust</text>
    </g>
  </g>

  <!-- Quadrant 2: Periodic vs Aperiodic -->
  <g transform="translate(820, 130)">
    <rect width="730" height="345" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b45309">
      2. Periodicity: Periodic vs. Aperiodic
    </text>

    <!-- Periodic waveform -->
    <g transform="translate(30, 70)">
      <rect width="320" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="85" x2="300" y2="85" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 20 85 Q 55 25, 90 85 T 160 85 T 230 85 T 300 85" fill="none" stroke="#d97706" stroke-width="3"/>
      <line x1="90" y1="140" x2="160" y2="140" stroke="#d97706" stroke-width="2"/>
      <polygon points="90,140 96,136 96,144" fill="#d97706"/>
      <polygon points="160,140 154,136 154,144" fill="#d97706"/>
      <text x="125" y="132" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#d97706" text-anchor="middle">Period T0</text>
      <text x="160" y="165" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Discrete Line Harmonic Spectrum</text>
    </g>

    <!-- Aperiodic waveform -->
    <g transform="translate(380, 70)">
      <rect width="320" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="85" x2="300" y2="85" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 20 85 L 80 85 Q 120 85, 160 25 Q 200 85, 240 85 L 300 85" fill="none" stroke="#dc2626" stroke-width="3"/>
      <text x="160" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">Transient / Shock Pulse</text>
      <text x="160" y="165" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Continuous Energy Spectral Density</text>
    </g>

    <!-- Bottom Metric Chips -->
    <g transform="translate(30, 260)">
      <rect x="0" y="0" width="320" height="65" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Periodic Landmark:</text>
      <text x="15" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#d97706">Repeats Indefinitely · Fixed Harmonics</text>

      <rect x="350" y="0" width="320" height="65" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Aperiodic Landmark:</text>
      <text x="15" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#dc2626">Non-Repeating · Transient Energy</text>
    </g>
  </g>

  <!-- Quadrant 3: Deterministic vs Random -->
  <g transform="translate(50, 500)">
    <rect width="730" height="360" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#6d28d9">
      3. Predictability: Deterministic vs. Stochastic Noise
    </text>

    <!-- Deterministic + Noise Graph -->
    <g transform="translate(30, 70)">
      <rect width="670" height="175" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="85" x2="650" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Pure signal wave -->
      <path d="M 20 85 Q 60 25, 100 85 T 180 85 T 260 85 T 340 85 T 420 85 T 500 85 T 580 85 T 650 85" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
      <!-- Noise overlay -->
      <path d="M 20 85 L 40 76 L 60 92 L 80 72 L 100 90 L 120 75 L 140 94 L 160 74 L 180 91 L 200 76 L 220 95 L 240 75 L 260 92 L 280 77 L 300 93 L 320 78 L 340 90 L 360 76 L 380 94 L 400 75 L 420 92 L 440 77 L 460 94 L 480 76 L 500 91 L 520 77 L 540 93 L 560 76 L 580 92 L 600 78 L 620 94 L 640 76 L 650 85" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="335" y="150" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Deterministic Signal + Stochastic Random Noise</text>
    </g>

    <!-- Bottom Metric Chips -->
    <g transform="translate(30, 265)">
      <rect x="0" y="0" width="320" height="75" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Deterministic Transduction:</text>
      <text x="15" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#7c3aed">Exact Closed-Form Formulation</text>
      <text x="15" y="68" font-family="system-ui, sans-serif" font-size="13" fill="#64748b">Predictable at all instances</text>

      <rect x="350" y="0" width="320" height="75" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="15" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a">Random / Stochastic Noise:</text>
      <text x="15" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#dc2626">Statistical &amp; Spectral Descriptors</text>
      <text x="15" y="68" font-family="system-ui, sans-serif" font-size="13" fill="#64748b">Mean, variance, autocorrelation, PSD</text>
    </g>
  </g>

  <!-- Quadrant 4: Energy vs Power Signals -->
  <g transform="translate(820, 500)">
    <rect width="730" height="360" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
      4. Energy vs. Power Signal Classifications
    </text>

    <!-- Energy Box -->
    <g transform="translate(30, 70)">
      <rect width="670" height="120" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">A. Energy Signal Classification</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">Finite Total Energy · Zero Average Power</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Physical Transients: Lightning discharge, impact shocks, decaying pulses</text>
      <rect x="520" y="25" width="130" height="70" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="585" y="55" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e40af" text-anchor="middle">E &lt; ∞</text>
      <text x="585" y="78" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e40af" text-anchor="middle">P_avg = 0</text>
    </g>

    <!-- Power Box -->
    <g transform="translate(30, 205)">
      <rect width="670" height="120" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#16a34a">B. Power Signal Classification</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">Infinite Total Energy · Finite Non-Zero Power</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">Continuous Waves: Sine waves, square clocks, steady vibration, stationary noise</text>
      <rect x="520" y="25" width="130" height="70" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="585" y="55" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d" text-anchor="middle">E = ∞</text>
      <text x="585" y="78" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d" text-anchor="middle">0 &lt; P &lt; ∞</text>
    </g>
  </g>
</svg>`
  },

  u2_fig2: {
    id: "u2_fig2",
    filename: "u2_fig2_sampling_and_aliasing.svg",
    title: "Figure 2.2: Nyquist-Shannon Sampling Theorem & Aliasing Folding",
    description: "Time-domain sampling and frequency-domain spectral replicas showing how undersampling (fs < 2 fmax) folds high frequencies into the baseband.",
    topicRef: "2.2 Acquisition and Properties of Digital Signals",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.2: Nyquist-Shannon Sampling Theorem · Spectral Replicas &amp; Aliasing Fold-Over
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.2
  </text>

  <!-- Left: Proper Sampling (No Aliasing) -->
  <g transform="translate(50, 130)">
    <rect width="730" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="55" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="36" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#15803d">
      Case A: Proper Sampling (fs ≥ 2 · fmax) · Guard Band Present
    </text>

    <!-- Spectrum representation -->
    <g transform="translate(30, 85)">
      <rect width="670" height="300" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="30" y1="220" x2="640" y2="220" stroke="#0f172a" stroke-width="2"/>
      <line x1="335" y1="40" x2="335" y2="220" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.5"/>
      <text x="335" y="250" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a" text-anchor="middle">f = 0 (Baseband)</text>

      <!-- Baseband Spectrum Triangle -->
      <polygon points="275,220 335,80 395,220" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
      <text x="335" y="145" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">Original X(f)</text>
      <text x="395" y="242" font-family="system-ui, sans-serif" font-size="16" fill="#1d4ed8" text-anchor="middle">+fmax</text>
      <text x="275" y="242" font-family="system-ui, sans-serif" font-size="16" fill="#1d4ed8" text-anchor="middle">-fmax</text>

      <!-- Replica at +fs -->
      <polygon points="495,220 555,80 615,220" fill="#dcfce7" stroke="#059669" stroke-width="2.5"/>
      <text x="555" y="242" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669" text-anchor="middle">+fs</text>

      <!-- Replica at -fs -->
      <polygon points="55,220 115,80 175,220" fill="#dcfce7" stroke="#059669" stroke-width="2.5"/>
      <text x="115" y="242" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669" text-anchor="middle">-fs</text>

      <!-- Guard Band indicator -->
      <line x1="395" y1="160" x2="495" y2="160" stroke="#059669" stroke-width="2.5"/>
      <line x1="395" y1="152" x2="395" y2="168" stroke="#059669" stroke-width="2.5"/>
      <line x1="495" y1="152" x2="495" y2="168" stroke="#059669" stroke-width="2.5"/>
      <text x="445" y="150" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d" text-anchor="middle">Guard Band &gt; 0</text>
    </g>

    <!-- Technical Specification Cards -->
    <g transform="translate(30, 420)">
      <rect width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#15803d">Nyquist Sampling Criterion:</text>
      <text x="25" y="58" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">• Sampling Rate: fs ≥ 2 · fmax (Nyquist Rate)</text>
      <text x="25" y="80" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Nyquist Limit: f_Nyquist = fs / 2 (Folding Boundary)</text>

      <rect y="110" width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="142" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Spectral Separation Status:</text>
      <text x="25" y="168" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">• Replicas completely isolated with zero spectral overlap</text>
      <text x="25" y="190" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Exact analog waveform reconstruction mathematically guaranteed</text>

      <rect y="220" width="670" height="70" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="25" y="248" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#166534">Reconstruction Technique:</text>
      <text x="25" y="272" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#15803d">Whittaker-Shannon Ideal Sinc Interpolation Filter</text>
    </g>
  </g>

  <!-- Right: Undersampling & Aliasing Overlap -->
  <g transform="translate(820, 130)">
    <rect width="730" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="55" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
    <text x="25" y="36" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#b91c1c">
      Case B: Undersampling (fs &lt; 2 · fmax) · Spectral Overlap Distortion
    </text>

    <!-- Aliased spectrum representation -->
    <g transform="translate(30, 85)">
      <rect width="670" height="300" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="30" y1="220" x2="640" y2="220" stroke="#0f172a" stroke-width="2"/>
      <line x1="335" y1="40" x2="335" y2="220" stroke="#94a3b8" stroke-dasharray="4,4" stroke-width="1.5"/>
      <text x="335" y="250" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a" text-anchor="middle">f = 0 (Baseband)</text>

      <!-- Overlapping Triangles -->
      <polygon points="235,220 335,80 435,220" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
      <polygon points="375,220 475,80 575,220" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>

      <!-- Overlap Region -->
      <polygon points="375,220 405,150 435,220" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
      <text x="405" y="195" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#991b1b" text-anchor="middle">Overlap</text>

      <text x="475" y="250" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#dc2626" text-anchor="middle">fs &lt; 2·fmax</text>
      <text x="335" y="145" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">Original</text>
      <text x="515" y="145" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626" text-anchor="middle">Folded Ghost</text>
    </g>

    <!-- Technical Specification Cards -->
    <g transform="translate(30, 420)">
      <rect width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#dc2626">Aliasing Phenomenon:</text>
      <text x="25" y="58" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">• High-frequency energy folds across the Nyquist folding boundary</text>
      <text x="25" y="80" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Appears as false, corrupt low-frequency "ghost" tones in baseband</text>

      <rect y="110" width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="142" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Information Loss:</text>
      <text x="25" y="168" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#b91c1c">• Irreversible corruption: software post-processing CANNOT remove aliasing</text>
      <text x="25" y="190" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Corrupts both amplitude and phase spectrum permanently</text>

      <rect y="220" width="670" height="70" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
      <text x="25" y="248" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#991b1b">Mandatory Engineering Defense:</text>
      <text x="25" y="272" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">Hardware Analog Anti-Aliasing Low-Pass Filter (AA-LPF) BEFORE ADC</text>
    </g>
  </g>
</svg>`
  },

  u2_fig3: {
    id: "u2_fig3",
    filename: "u2_fig3_dsp_signal_chain.svg",
    title: "Figure 2.3: End-to-End DSP Signal Conditioning & Processing Pipeline",
    description: "Detailed signal flow from sensor through analog anti-aliasing filter, S/H, ADC, DSP digital filter/FFT engine, and host output display.",
    topicRef: "2.3 Signal Conditioning & 2.4 Processing",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.3: End-to-End DSP Pipeline · Transduction, Conditioning, Digitization &amp; DSP Core
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.3
  </text>

  <!-- Stage Blocks Pipeline (5 Stages) -->
  <g transform="translate(50, 140)">
    <!-- Stage 1: Transducer -->
    <g transform="translate(0, 0)">
      <rect width="270" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="270" height="50" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="135" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e40af" text-anchor="middle">1. Physical Sensor</text>

      <g transform="translate(20, 75)">
        <rect width="230" height="150" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="115" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Physical Field</text>
        <text x="115" y="60" font-family="system-ui, sans-serif" font-size="15" fill="#475569" text-anchor="middle">Pressure · Vibration</text>
        <text x="115" y="85" font-family="system-ui, sans-serif" font-size="15" fill="#475569" text-anchor="middle">Temperature · Strain</text>
        <text x="115" y="115" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#2563eb" text-anchor="middle">Continuous Analog</text>
      </g>
      <text x="135" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#0f172a" text-anchor="middle">Output: Microvolts / pC</text>
      <text x="135" y="300" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">High Source Impedance</text>
    </g>

    <!-- Arrow 1 -> 2 -->
    <line x1="270" y1="170" x2="305" y2="170" stroke="#2563eb" stroke-width="3"/>
    <polygon points="305,170 295,165 295,175" fill="#2563eb"/>

    <!-- Stage 2: Analog Conditioning & Anti-Aliasing -->
    <g transform="translate(305, 0)">
      <rect width="280" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="280" height="50" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="140" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#b45309" text-anchor="middle">2. Analog Conditioning</text>

      <g transform="translate(20, 75)">
        <rect width="240" height="150" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="120" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Front-End Preamp</text>
        <text x="120" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">Instrumentation Amp (INA)</text>
        <text x="120" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">Galvanic Isolation Barrier</text>
        <text x="120" y="115" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Hardware AA-LPF</text>
      </g>
      <text x="140" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#d97706" text-anchor="middle">Scaled Span: ±10 V</text>
      <text x="140" y="300" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Noise Bandwidth Limited</text>
    </g>

    <!-- Arrow 2 -> 3 -->
    <line x1="585" y1="170" x2="620" y2="170" stroke="#d97706" stroke-width="3"/>
    <polygon points="620,170 610,165 610,175" fill="#d97706"/>

    <!-- Stage 3: ADC Quantization -->
    <g transform="translate(620, 0)">
      <rect width="270" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="270" height="50" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="135" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d" text-anchor="middle">3. A/D Digitizer</text>

      <g transform="translate(20, 75)">
        <rect width="230" height="150" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="115" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Sampling &amp; Hold</text>
        <text x="115" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">Stable Clock Rate (fs)</text>
        <text x="115" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">16-Bit / 24-Bit ADC</text>
        <text x="115" y="115" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#059669" text-anchor="middle">Discrete Time &amp; Value</text>
      </g>
      <text x="135" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d" text-anchor="middle">Digital Word Stream</text>
      <text x="135" y="300" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Binary Integer Arrays</text>
    </g>

    <!-- Arrow 3 -> 4 -->
    <line x1="890" y1="170" x2="925" y2="170" stroke="#059669" stroke-width="3"/>
    <polygon points="925,170 915,165 915,175" fill="#059669"/>

    <!-- Stage 4: DSP Core Algorithms -->
    <g transform="translate(925, 0)">
      <rect width="290" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="290" height="50" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <text x="145" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#6d28d9" text-anchor="middle">4. DSP Algorithms</text>

      <g transform="translate(20, 75)">
        <rect width="250" height="150" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="125" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Digital Engine</text>
        <text x="125" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">Digital Filtering (FIR / IIR)</text>
        <text x="125" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">Windowing (Hanning)</text>
        <text x="125" y="115" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#7c3aed" text-anchor="middle">Radix-2 FFT Engine</text>
      </g>
      <text x="145" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#7c3aed" text-anchor="middle">Spectral Decomposition</text>
      <text x="145" y="300" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Magnitude &amp; Phase Arrays</text>
    </g>

    <!-- Arrow 4 -> 5 -->
    <line x1="1215" y1="170" x2="1250" y2="170" stroke="#7c3aed" stroke-width="3"/>
    <polygon points="1250,170 1240,165 1240,175" fill="#7c3aed"/>

    <!-- Stage 5: Output & Presentation -->
    <g transform="translate(1250, 0)">
      <rect width="250" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="250" height="50" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
      <text x="125" y="32" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#b91c1c" text-anchor="middle">5. Presentation &amp; HMI</text>

      <g transform="translate(20, 75)">
        <rect width="210" height="150" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="105" y="30" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Engineering Insights</text>
        <text x="105" y="60" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">FFT Line Spectrum</text>
        <text x="105" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#475569" text-anchor="middle">STFT Spectrogram Map</text>
        <text x="105" y="115" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Automated Alarms</text>
      </g>
      <text x="125" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#b91c1c" text-anchor="middle">Operator Dashboard</text>
      <text x="125" y="300" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Predictive Diagnostics</text>
    </g>
  </g>

  <!-- Lower Detail: Stage Responsibilities Summary -->
  <g transform="translate(50, 520)">
    <rect width="1500" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="40" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
      Architectural Roles Across the Signal Conditioning &amp; Digitization Pipeline
    </text>

    <!-- Stage 2 Card -->
    <g transform="translate(35, 65)">
      <rect width="450" height="240" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#d97706">Stage 2: Analog Front-End Role</text>
      <text x="25" y="70" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• High CMRR Differential Amplification</text>
      <text x="25" y="95" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Kills 50 Hz common-mode mains hum and ground noise</text>
      <text x="25" y="130" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Anti-Aliasing Low-Pass Filter</text>
      <text x="25" y="155" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Attenuates high frequencies above Nyquist limit before ADC</text>
      <text x="25" y="195" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#d97706">Constraint: fc ≤ fs / 2</text>
    </g>

    <!-- Stage 3 Card -->
    <g transform="translate(525, 65)">
      <rect width="450" height="240" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d">Stage 3: Quantization &amp; Sampling Role</text>
      <text x="25" y="70" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Sample-and-Hold Stability</text>
      <text x="25" y="95" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Freezes voltage level while converter resolves bits</text>
      <text x="25" y="130" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Finite Bit-Depth Resolution</text>
      <text x="25" y="155" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Quantizes continuous voltage into discrete counts</text>
      <text x="25" y="195" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d">Dynamic Range: +6.02 dB per Bit</text>
    </g>

    <!-- Stage 4 Card -->
    <g transform="translate(1015, 65)">
      <rect width="450" height="240" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#7c3aed">Stage 4: DSP Core Engine Role</text>
      <text x="25" y="70" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Real-Time Digital Filtering</text>
      <text x="25" y="95" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Linear-phase FIR and recursive IIR noise removal</text>
      <text x="25" y="130" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Fast Fourier Transformation</text>
      <text x="25" y="155" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Radix-2 butterfly architecture accelerates spectral decomposition</text>
      <text x="25" y="195" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#7c3aed">Speedup: O(N log2 N) vs O(N²)</text>
    </g>
  </g>
</svg>`
  },

  u2_fig4: {
    id: "u2_fig4",
    filename: "u2_fig4_fir_vs_iir_filters.svg",
    title: "Figure 2.4: Digital Filter Architectures — FIR vs. IIR Structures",
    description: "Architectural comparison of Finite Impulse Response (FIR) tapped-delay line vs Infinite Impulse Response (IIR) recursive feedback structures.",
    topicRef: "2.4 Signal Processing Techniques",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.4: Digital Filter Architectures · Tapped-Delay FIR vs. Recursive Feedback IIR
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.4
  </text>

  <!-- Left: FIR Filter Architecture -->
  <g transform="translate(50, 130)">
    <rect width="730" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="55" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#1e40af">
      FIR: Finite Impulse Response (Tapped Delay Line Structure)
    </text>

    <!-- Signal Flow Diagram -->
    <g transform="translate(30, 85)">
      <rect width="670" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="45" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">x[n] Input</text>
      <line x1="110" y1="40" x2="160" y2="40" stroke="#2563eb" stroke-width="2.5"/>

      <!-- Delay Units z^-1 -->
      <rect x="160" y="20" width="70" height="40" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="195" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">z⁻¹</text>

      <line x1="230" y1="40" x2="290" y2="40" stroke="#2563eb" stroke-width="2.5"/>
      <rect x="290" y="20" width="70" height="40" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="325" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">z⁻¹</text>

      <line x1="360" y1="40" x2="420" y2="40" stroke="#2563eb" stroke-width="2.5"/>
      <rect x="420" y="20" width="70" height="40" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="455" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">z⁻¹</text>

      <line x1="490" y1="40" x2="550" y2="40" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,4"/>

      <!-- Multipliers b_k -->
      <line x1="130" y1="40" x2="130" y2="105" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="130" cy="120" r="18" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="130" y="126" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e40af" text-anchor="middle">b0</text>

      <line x1="260" y1="40" x2="260" y2="105" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="260" cy="120" r="18" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="260" y="126" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e40af" text-anchor="middle">b1</text>

      <line x1="390" y1="40" x2="390" y2="105" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="390" cy="120" r="18" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="390" y="126" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e40af" text-anchor="middle">b2</text>

      <line x1="530" y1="40" x2="530" y2="105" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="530" cy="120" r="18" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="530" y="126" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e40af" text-anchor="middle">bM</text>

      <!-- Summation line -->
      <line x1="130" y1="138" x2="130" y2="190" stroke="#2563eb" stroke-width="2"/>
      <line x1="260" y1="138" x2="260" y2="190" stroke="#2563eb" stroke-width="2"/>
      <line x1="390" y1="138" x2="390" y2="190" stroke="#2563eb" stroke-width="2"/>
      <line x1="530" y1="138" x2="530" y2="190" stroke="#2563eb" stroke-width="2"/>
      <line x1="130" y1="190" x2="580" y2="190" stroke="#2563eb" stroke-width="2.5"/>
      <polygon points="580,190 570,185 570,195" fill="#2563eb"/>
      <text x="595" y="195" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#2563eb">y[n] Output</text>
    </g>

    <!-- Characteristics Cards -->
    <g transform="translate(30, 375)">
      <rect width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#15803d">Architectural Stability Guarantee:</text>
      <text x="25" y="58" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">• Strictly Unconditionally Stable: all poles fixed at z = 0 (origin)</text>
      <text x="25" y="80" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• No feedback path exists; cannot oscillate or diverge</text>

      <rect y="110" width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="142" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0284c7">Linear Phase Property:</text>
      <text x="25" y="168" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">• Constant Group Delay: symmetric coefficients (bk = b_{M-k})</text>
      <text x="25" y="190" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Zero waveform distortion across all passband harmonics</text>

      <rect y="220" width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="252" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#b45309">Design &amp; Computational Tradeoff:</text>
      <text x="25" y="278" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">• High filter order (M &gt; 50) needed for sharp cutoff transitions</text>
      <text x="25" y="300" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Windowing (Hanning, Blackman) or Parks-McClellan Remez exchange</text>
    </g>
  </g>

  <!-- Right: IIR Filter Architecture -->
  <g transform="translate(820, 130)">
    <rect width="730" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="55" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
    <text x="25" y="36" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#b45309">
      IIR: Infinite Impulse Response (Recursive Feedback Structure)
    </text>

    <!-- Signal Flow Diagram -->
    <g transform="translate(30, 85)">
      <rect width="670" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="45" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">x[n] Input</text>

      <!-- Forward and Feedback loops -->
      <line x1="110" y1="40" x2="200" y2="40" stroke="#d97706" stroke-width="2.5"/>
      <circle cx="220" cy="40" r="18" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <text x="220" y="46" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#d97706" text-anchor="middle">+</text>

      <line x1="238" y1="40" x2="330" y2="40" stroke="#d97706" stroke-width="2.5"/>
      <rect x="330" y="20" width="70" height="40" rx="6" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
      <text x="365" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706" text-anchor="middle">z⁻¹</text>

      <line x1="400" y1="40" x2="510" y2="40" stroke="#d97706" stroke-width="2.5"/>
      <polygon points="510,40 500,35 500,45" fill="#d97706"/>
      <text x="525" y="45" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#d97706">y[n] Output</text>

      <!-- Feedback Branch -->
      <path d="M 460 40 L 460 145 L 370 145" fill="none" stroke="#dc2626" stroke-width="2"/>
      <rect x="300" y="125" width="70" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
      <text x="335" y="150" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">-a1</text>
      <path d="M 300 145 L 220 145 L 220 58" fill="none" stroke="#dc2626" stroke-width="2"/>
      <polygon points="220,58 215,68 225,68" fill="#dc2626"/>
      <text x="335" y="195" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">Recursive Feedback Loop</text>
    </g>

    <!-- Characteristics Cards -->
    <g transform="translate(30, 375)">
      <rect width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#15803d">Computational Efficiency Advantage:</text>
      <text x="25" y="58" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">• Extremely Sharp Cutoff with minimal orders (N = 4 to 8)</text>
      <text x="25" y="80" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Classical Analog Prototypes: Butterworth, Chebyshev, Elliptic</text>

      <rect y="110" width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="142" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#dc2626">Critical Stability Risk:</text>
      <text x="25" y="168" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">• Quantization noise can shift poles outside unit circle (|z| ≥ 1)</text>
      <text x="25" y="190" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Requires second-order sections (biquads) for numerical stability</text>

      <rect y="220" width="670" height="90" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="252" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#b45309">Phase Characteristics:</text>
      <text x="25" y="278" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">• Non-Linear Phase (varying group delay alters complex pulse shapes)</text>
      <text x="25" y="300" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">• Best suited where magnitude roll-off matters more than wave shape</text>
    </g>
  </g>
</svg>`
  },

  u2_fig5: {
    id: "u2_fig5",
    filename: "u2_fig5_fourier_decomposition.svg",
    title: "Figure 2.5: Fourier Transform — Time Domain to Orthogonal Frequency Spectrum",
    description: "Visualization of composite time wave being unbundled into individual sinusoidal frequency components with discrete magnitude and phase spikes.",
    topicRef: "2.5 Fourier Transform & Spectral Analysis",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.5: Fourier Transform · Composite Time Waveform to Orthogonal Frequency Spectrum
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.5
  </text>

  <!-- Left: Time-Domain Composite Waveform -->
  <g transform="translate(50, 130)">
    <rect width="730" height="440" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">
      A. Time-Domain Signal View: Composite Multi-Frequency Signal
    </text>

    <g transform="translate(30, 75)">
      <rect width="670" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="125" x2="650" y2="125" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="20" y1="20" x2="20" y2="230" stroke="#94a3b8" stroke-width="1.5"/>

      <!-- Composite Waveform -->
      <path d="M 20 125 C 60 20, 100 230, 150 70 C 190 -10, 230 190, 280 125 C 330 60, 370 250, 420 100 C 470 10, 510 210, 560 125 C 600 70, 630 160, 650 125" 
            fill="none" stroke="#2563eb" stroke-width="3.5"/>
      <text x="600" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">Composite Wave</text>
      <text x="335" y="210" font-family="system-ui, sans-serif" font-size="15" fill="#64748b" text-anchor="middle">Superposition of Fundamental (50 Hz) + Harmonics (150 Hz, 250 Hz)</text>
    </g>

    <!-- Bottom Metric Card -->
    <g transform="translate(30, 345)">
      <rect width="670" height="75" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Time Domain Limitation:</text>
      <text x="20" y="54" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#2563eb">Difficult to identify individual harmonic amplitudes and frequencies by inspection</text>
    </g>
  </g>

  <!-- Right: Frequency-Domain Spectral Bins -->
  <g transform="translate(820, 130)">
    <rect width="730" height="440" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
      B. Frequency-Domain View: Orthogonal Line Spectrum
    </text>

    <g transform="translate(30, 75)">
      <rect width="670" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="40" y1="200" x2="640" y2="200" stroke="#0f172a" stroke-width="2"/>
      <line x1="40" y1="30" x2="40" y2="200" stroke="#0f172a" stroke-width="2"/>
      <text x="640" y="225" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Frequency (Hz)</text>
      <text x="10" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">|X(f)|</text>

      <!-- Harmonic 1: 50 Hz -->
      <line x1="160" y1="200" x2="160" y2="60" stroke="#2563eb" stroke-width="4"/>
      <circle cx="160" cy="60" r="6" fill="#2563eb"/>
      <text x="160" y="225" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">50 Hz</text>
      <text x="160" y="48" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">A1 (1.00)</text>

      <!-- Harmonic 2: 150 Hz -->
      <line x1="320" y1="200" x2="320" y2="110" stroke="#059669" stroke-width="4"/>
      <circle cx="320" cy="110" r="6" fill="#059669"/>
      <text x="320" y="225" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669" text-anchor="middle">150 Hz</text>
      <text x="320" y="98" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#059669" text-anchor="middle">A2 (0.50)</text>

      <!-- Harmonic 3: 250 Hz -->
      <line x1="480" y1="200" x2="480" y2="150" stroke="#d97706" stroke-width="4"/>
      <circle cx="480" cy="150" r="6" fill="#d97706"/>
      <text x="480" y="225" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706" text-anchor="middle">250 Hz</text>
      <text x="480" y="138" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#d97706" text-anchor="middle">A3 (0.25)</text>
    </g>

    <!-- Bottom Metric Card -->
    <g transform="translate(30, 345)">
      <rect width="670" height="75" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Spectral Transformation Benefit:</text>
      <text x="20" y="54" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#059669">Unbundles entangled time wave into distinct orthogonal frequency spikes</text>
    </g>
  </g>

  <!-- Lower Panel: Forward Analysis vs Inverse Synthesis -->
  <g transform="translate(50, 595)">
    <rect width="1500" height="265" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
      Continuous Fourier Transform (CTFT) Analysis &amp; Synthesis Principles
    </text>

    <!-- Analysis Card -->
    <g transform="translate(35, 60)">
      <rect width="700" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e40af">
        1. Forward Fourier Analysis (Time → Frequency)
      </text>
      <text x="25" y="70" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">
        Decomposes arbitrary time signal x(t) against complex exponential basis functions
      </text>
      <text x="25" y="100" font-family="system-ui, sans-serif" font-size="15" fill="#475569">
        • Magnitude Spectrum |X(f)| reveals exact harmonic power and crest amplitudes
      </text>
      <text x="25" y="125" font-family="system-ui, sans-serif" font-size="15" fill="#475569">
        • Phase Spectrum ∠X(f) preserves relative time alignments and waveform shape
      </text>
      <text x="25" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e40af">
        Analytical Mapping: Frequency Domain Decomposition
      </text>
    </g>

    <!-- Synthesis Card -->
    <g transform="translate(765, 60)">
      <rect width="700" height="180" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d">
        2. Inverse Fourier Synthesis (Frequency → Time)
      </text>
      <text x="25" y="70" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">
        Reconstructs the original time waveform by summing all spectral sinusoids
      </text>
      <text x="25" y="100" font-family="system-ui, sans-serif" font-size="15" fill="#475569">
        • Perfect reconstruction guaranteed if frequency bandwidth is preserved
      </text>
      <text x="25" y="125" font-family="system-ui, sans-serif" font-size="15" fill="#475569">
        • Serves as basis for digital audio synthesizers and inverse filtering
      </text>
      <text x="25" y="155" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#15803d">
        Analytical Mapping: Time Domain Reconstruction
      </text>
    </g>
  </g>
</svg>`
  },

  u2_fig6: {
    id: "u2_fig6",
    filename: "u2_fig6_dft_leakage_and_windowing.svg",
    title: "Figure 2.6: Discrete Fourier Transform (DFT), Leakage & Windowing",
    description: "Frequency resolution bins Δf = fs/N, spectral leakage caused by non-integer cycle truncation, and side-lobe suppression using Hanning window.",
    topicRef: "2.6 Discrete Fourier Transform & Windowing",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.6: Discrete Fourier Transform (DFT) · Spectral Leakage &amp; Windowing Suppression
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.6
  </text>

  <!-- Left: Rectangular Window with Severe Leakage -->
  <g transform="translate(50, 130)">
    <rect width="730" height="460" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b91c1c">
      A. Rectangular Window (Abrupt Cutoff) → High Spectral Leakage
    </text>

    <g transform="translate(30, 75)">
      <rect width="670" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="30" y1="200" x2="630" y2="200" stroke="#0f172a" stroke-width="2"/>
      
      <!-- Sinc response with high side lobes -->
      <path d="M 60 200 Q 120 180, 180 200 Q 240 160, 280 200 L 335 40 L 390 200 Q 430 160, 490 200 Q 550 180, 610 200" 
            fill="none" stroke="#dc2626" stroke-width="3.5"/>
      <text x="335" y="30" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#dc2626" text-anchor="middle">Central Peak at f0</text>
      <text x="220" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b91c1c">Side-Lobe: -13 dB</text>
      <text x="450" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b91c1c">Severe Energy Spreading</text>
    </g>

    <!-- Bottom Specs Card -->
    <g transform="translate(30, 355)">
      <rect width="670" height="85" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626">Rectangular Window Limitations:</text>
      <text x="20" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a">• Abrupt signal truncation at record boundaries creates step discontinuities</text>
      <text x="20" y="70" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">• Scalloping loss up to 3.92 dB; energy leaks into adjacent frequency bins</text>
    </g>
  </g>

  <!-- Right: Hanning Window with Clean Sidelobe Suppression -->
  <g transform="translate(820, 130)">
    <rect width="730" height="460" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
      B. Hanning Window (Smooth Taper) → Side-Lobe Suppression
    </text>

    <g transform="translate(30, 75)">
      <rect width="670" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="30" y1="200" x2="630" y2="200" stroke="#0f172a" stroke-width="2"/>
      
      <!-- Suppressed Sidelobes response -->
      <path d="M 60 200 L 230 200 Q 280 198, 305 190 L 335 40 L 365 190 Q 390 198, 440 200 L 610 200" 
            fill="none" stroke="#059669" stroke-width="3.5"/>
      <text x="335" y="30" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669" text-anchor="middle">Clean Main Lobe</text>
      <text x="460" y="175" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d">Side-Lobe: -32 dB (Suppressed!)</text>
    </g>

    <!-- Bottom Specs Card -->
    <g transform="translate(30, 355)">
      <rect width="670" height="85" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d">Hanning Window Advantages:</text>
      <text x="20" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a">• Smooth cosine tapering to zero at both record endpoints eliminates edge shock</text>
      <text x="20" y="70" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">• Side-lobes attenuated by 32 dB; weak neighboring harmonics emerge clearly</text>
    </g>
  </g>

  <!-- Lower Panel: Resolution Metrics & Trade-Offs -->
  <g transform="translate(50, 615)">
    <rect width="1500" height="245" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
      DFT Spectral Bin Resolution &amp; Window Selection Guidelines
    </text>

    <!-- Metric Card 1 -->
    <g transform="translate(35, 60)">
      <rect width="460" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#2563eb">Frequency Bin Resolution (Δf)</text>
      <text x="25" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Bin Spacing: Δf = fs / N = 1 / T_record</text>
      <text x="25" y="95" font-family="system-ui, sans-serif" font-size="14" fill="#475569">To improve resolution Δf, total record duration T_record MUST increase</text>
      <text x="25" y="130" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb">Key Takeaway: Zero-padding increases display points, NOT true resolution</text>
    </g>

    <!-- Metric Card 2 -->
    <g transform="translate(520, 60)">
      <rect width="460" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669">Window Comparison: Hanning vs Flat-Top</text>
      <text x="25" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Hanning / Hamming: Best for frequency resolution</text>
      <text x="25" y="95" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Narrow main lobe allows distinguishing closely-spaced vibration harmonics</text>
      <text x="25" y="130" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#059669">• Flat-Top: Best for precise amplitude calibration (scalloping loss &lt; 0.01 dB)</text>
    </g>

    <!-- Metric Card 3 -->
    <g transform="translate(1005, 60)">
      <rect width="460" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#7c3aed">Window Selection Rule of Thumb</text>
      <text x="25" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• General Continuous Vibration: Hanning Window</text>
      <text x="25" y="95" font-family="system-ui, sans-serif" font-size="14" fill="#475569">• Transient Impact / Hammer Shocks: Rectangular or Exponential Window</text>
      <text x="25" y="130" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#7c3aed">• Calibrated Acoustic Level Testing: Flat-Top Window</text>
    </g>
  </g>
</svg>`
  },

  u2_fig7: {
    id: "u2_fig7",
    filename: "u2_fig7_fft_butterfly_dit.svg",
    title: "Figure 2.7: Fast Fourier Transform (FFT) Radix-2 Cooley-Tukey Butterfly Flow Graph",
    description: "Decimation-In-Time 8-point FFT computation structure showing bit-reversal indexing, twiddle factor multipliers, and O(N log2 N) speedup.",
    topicRef: "2.7 Fast Fourier Transform",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.7: Fast Fourier Transform (FFT) · Cooley-Tukey Radix-2 Butterfly Graph &amp; Complexity
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.7
  </text>

  <!-- Left: Butterfly Computational Unit Diagram -->
  <g transform="translate(50, 130)">
    <rect width="730" height="460" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#6d28d9">
      Fundamental 2-Point Butterfly Computational Unit
    </text>

    <!-- Butterfly Diagram -->
    <g transform="translate(40, 85)">
      <rect width="650" height="230" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      
      <!-- Inputs -->
      <text x="35" y="70" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Node A</text>
      <text x="35" y="170" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#0f172a">Node B</text>

      <!-- Twiddle multiplier -->
      <line x1="120" y1="165" x2="220" y2="165" stroke="#7c3aed" stroke-width="3"/>
      <circle cx="245" cy="165" r="24" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="245" y="172" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#6d28d9" text-anchor="middle">WN^k</text>

      <!-- Crossing Lines -->
      <line x1="120" y1="65" x2="440" y2="65" stroke="#2563eb" stroke-width="3"/>
      <line x1="269" y1="165" x2="440" y2="65" stroke="#059669" stroke-width="3"/>

      <line x1="120" y1="65" x2="440" y2="165" stroke="#2563eb" stroke-width="3"/>
      <line x1="269" y1="165" x2="440" y2="165" stroke="#dc2626" stroke-width="3"/>
      <text x="340" y="145" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#dc2626">-1</text>

      <!-- Outputs -->
      <circle cx="440" cy="65" r="16" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="440" y="71" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#2563eb" text-anchor="middle">+</text>
      <text x="475" y="72" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#2563eb">X = A + B · WN^k</text>

      <circle cx="440" cy="165" r="16" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="440" y="171" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626" text-anchor="middle">+</text>
      <text x="475" y="172" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">Y = A - B · WN^k</text>
    </g>

    <!-- Butterfly Specs -->
    <g transform="translate(30, 345)">
      <rect width="670" height="95" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#6d28d9">Butterfly Algorithmic Features:</text>
      <text x="20" y="54" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• In-Place Computation: Outputs X and Y overwrite registers of A and B</text>
      <text x="20" y="76" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">• Twiddle Factor Symmetry: Eliminates redundant sine/cosine calculations</text>
    </g>
  </g>

  <!-- Right: Algorithmic Complexity Comparison Table -->
  <g transform="translate(820, 130)">
    <rect width="730" height="460" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="50" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
      Computational Benchmark: Direct DFT O(N²) vs. Radix-2 FFT O(N log2 N)
    </text>

    <!-- Table of values -->
    <g transform="translate(30, 75)">
      <rect width="670" height="260" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      
      <!-- Table Header -->
      <rect x="0" y="0" width="670" height="45" rx="8" fill="#e2e8f0"/>
      <text x="60" y="28" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Size N</text>
      <text x="210" y="28" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#dc2626">Direct DFT (N²)</text>
      <text x="410" y="28" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669">Radix-2 FFT (N log2 N)</text>
      <text x="590" y="28" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#2563eb">Speedup</text>

      <!-- Row 1 -->
      <line x1="0" y1="45" x2="670" y2="45" stroke="#cbd5e1" stroke-width="1"/>
      <text x="60" y="80" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">64</text>
      <text x="210" y="80" font-family="system-ui, sans-serif" font-size="16" fill="#dc2626">4,096 ops</text>
      <text x="410" y="80" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">384 ops</text>
      <text x="590" y="80" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#2563eb">10.7×</text>

      <!-- Row 2 -->
      <line x1="0" y1="100" x2="670" y2="100" stroke="#cbd5e1" stroke-width="1"/>
      <text x="60" y="135" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">256</text>
      <text x="210" y="135" font-family="system-ui, sans-serif" font-size="16" fill="#dc2626">65,536 ops</text>
      <text x="410" y="135" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">2,048 ops</text>
      <text x="590" y="135" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#2563eb">32.0×</text>

      <!-- Row 3 -->
      <line x1="0" y1="155" x2="670" y2="155" stroke="#cbd5e1" stroke-width="1"/>
      <text x="60" y="190" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0f172a">1,024</text>
      <text x="210" y="190" font-family="system-ui, sans-serif" font-size="16" fill="#dc2626">1,048,576 ops</text>
      <text x="410" y="190" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">10,240 ops</text>
      <text x="590" y="190" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#2563eb">102.4×</text>

      <!-- Row 4 -->
      <line x1="0" y1="210" x2="670" y2="210" stroke="#cbd5e1" stroke-width="1"/>
      <text x="60" y="245" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">4,096</text>
      <text x="210" y="245" font-family="system-ui, sans-serif" font-size="16" fill="#dc2626">16,777,216 ops</text>
      <text x="410" y="245" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">49,152 ops</text>
      <text x="590" y="245" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#2563eb">341.3×</text>
    </g>

    <!-- Table Specs -->
    <g transform="translate(30, 355)">
      <rect width="670" height="85" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="26" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d">Real-World DAQ Impact:</text>
      <text x="20" y="50" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a">• Transforms unfeasible N² calculations into sub-millisecond microcontroller execution</text>
      <text x="20" y="70" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">• Enables continuous real-time 48 kHz acoustic analysis and live vibration order tracking</text>
    </g>
  </g>

  <!-- Lower Panel: Decimation-in-Time Architecture -->
  <g transform="translate(50, 615)">
    <rect width="1500" height="245" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
      Divide-and-Conquer Decimation-in-Time (DIT) Strategy
    </text>

    <g transform="translate(35, 60)">
      <rect width="700" height="155" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#2563eb">
        1. Recursive Sub-Sequence Splitting
      </text>
      <text x="25" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">
        Splits N-point time sequence recursively into even-indexed and odd-indexed halves
      </text>
      <text x="25" y="95" font-family="system-ui, sans-serif" font-size="14" fill="#475569">
        • Halving continues until reaching trivial 2-point butterfly operations
      </text>
      <text x="25" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#2563eb">
        Log2(N) sequential stages; each stage performs N/2 parallel butterfly units
      </text>
    </g>

    <g transform="translate(765, 60)">
      <rect width="700" height="155" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669">
        2. Bit-Reversal Input Ordering
      </text>
      <text x="25" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">
        Input array is pre-sorted via bit-reversal indexing; outputs emerge in natural order
      </text>
      <text x="25" y="95" font-family="system-ui, sans-serif" font-size="14" fill="#475569">
        • Hardware DSP index registers handle bit-reversal sorting with zero overhead
      </text>
      <text x="25" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#059669">
        Standard algorithm across all modern embedded platforms (ARM Cortex, TI C2000, FPGA)
      </text>
    </g>
  </g>
</svg>`
  },

  u2_fig8: {
    id: "u2_fig8",
    filename: "u2_fig8_stft_spectrogram_presentation.svg",
    title: "Figure 2.8: Processing & Presentation — Short-Time Fourier Transform (STFT) Spectrogram",
    description: "Time-frequency joint presentation comparing stationary FFT vs. dynamic windowed STFT spectrogram displaying a frequency chirp across time.",
    topicRef: "2.9 Processing & Presentation of Data",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <linearGradient id="spectroGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="50%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
  </defs>

  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.8: Data Presentation · Joint Time-Frequency STFT Spectrogram &amp; Uncertainty Limit
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.9
  </text>

  <!-- Left: STFT Spectrogram Heatmap -->
  <g transform="translate(50, 130)">
    <rect width="880" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="880" height="55" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#1e40af">
      2D Spectrogram: Joint Time-Frequency Energy Density Heatmap
    </text>

    <!-- Spectrogram Canvas Area -->
    <g transform="translate(30, 80)">
      <rect width="820" height="380" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      
      <!-- Grid -->
      <line x1="90" y1="330" x2="780" y2="330" stroke="#475569" stroke-width="1.5"/>
      <line x1="90" y1="40" x2="90" y2="330" stroke="#475569" stroke-width="1.5"/>

      <!-- Frequency Chirp Trajectory with heat gradient -->
      <path d="M 110 300 C 240 290, 360 220, 500 140 C 600 90, 680 60, 750 50" 
            fill="none" stroke="url(#spectroGrad)" stroke-width="16" stroke-linecap="round" opacity="0.9"/>

      <!-- Second tone at fixed 1 kHz -->
      <line x1="260" y1="190" x2="720" y2="190" stroke="#eab308" stroke-width="8" stroke-linecap="round" opacity="0.8"/>
      <text x="730" y="195" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#eab308">Constant 1 kHz Tone</text>
      <text x="755" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#ef4444">Chirp Tone (Run-Up)</text>

      <!-- Axis Labels -->
      <text x="435" y="365" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#cbd5e1" text-anchor="middle">Time Elapsed (t) →</text>
      <text x="45" y="185" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#cbd5e1" transform="rotate(-90 45 185)" text-anchor="middle">Frequency (f) →</text>
    </g>

    <!-- Lower Explanation Cards -->
    <g transform="translate(30, 490)">
      <rect width="820" height="100" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e40af">Sliding Window Transduction Principle:</text>
      <text x="25" y="60" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Sliding window localizes signal segments in time prior to computing FFT</text>
      <text x="25" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">• Reveals frequency shifts, machine run-up chirps, and transient fault bursts</text>

      <rect y="120" width="820" height="95" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="152" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669">Industrial Application Value:</text>
      <text x="25" y="180" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Machine Condition Monitoring: Bearing fault harmonics and rotor gear mesh</text>
      <text x="25" y="202" font-family="system-ui, sans-serif" font-size="14" fill="#64748b">• Speech Recognition, Seismic Impact Analysis, and Sonar Tracking</text>
    </g>
  </g>

  <!-- Right: Heisenberg-Gabor Uncertainty Tradeoff -->
  <g transform="translate(950, 130)">
    <rect width="600" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="600" height="55" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
    <text x="25" y="36" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#b45309">
      Heisenberg-Gabor Uncertainty Principle
    </text>

    <!-- Fundamental Limit Card -->
    <g transform="translate(30, 80)">
      <rect width="540" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="35" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">Fundamental Resolution Bound:</text>
      
      <rect x="25" y="55" width="490" height="70" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
      <text x="270" y="98" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#b91c1c" text-anchor="middle">
        Δt · Δf ≥ 1 / (4π)
      </text>

      <text x="25" y="160" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Cannot achieve simultaneously infinite time &amp; frequency resolution</text>
      <text x="25" y="188" font-family="system-ui, sans-serif" font-size="14" fill="#475569">• Narrow Window: High temporal resolution, poor frequency resolution</text>
      <text x="25" y="215" font-family="system-ui, sans-serif" font-size="14" fill="#475569">• Wide Window: Precise harmonic frequency bins, blurred event timing</text>
    </g>

    <!-- Presentation Best Practices -->
    <g transform="translate(30, 360)">
      <text x="0" y="25" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#15803d">
        Engineering Presentation Best Practices:
      </text>

      <rect x="0" y="45" width="540" height="295" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      
      <text x="20" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0284c7">1. Logarithmic Decibel Scaling (dB):</text>
      <text x="20" y="62" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">Compresses huge dynamic range; displays weak harmonics</text>

      <text x="20" y="115" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d">2. Power Spectral Density (PSD):</text>
      <text x="20" y="142" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">Normalizes for bin bandwidth; independent of record length</text>

      <text x="20" y="195" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#7c3aed">3. Proper Physical Axis Units:</text>
      <text x="20" y="222" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Convert discrete index k to physical Hertz: f = k · fs / N</text>
      <text x="20" y="248" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Clearly document window function type and sampling frequency fs</text>
      <text x="20" y="275" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#15803d">Ensures reproducible, textbook-grade presentation</text>
    </g>
  </g>
</svg>`
  },

  u2_fig_dewesoft_daq: {
    id: "u2_fig_dewesoft_daq",
    filename: "u2_fig9_dewesoft_daq_architecture.svg",
    title: "Figure 2.3A: Modern Data Acquisition (DAQ) System Architecture (Dewesoft Model)",
    description: "The complete 4-pillar modern DAQ architecture: Physical World/Sensors, Advanced Signal Conditioning (Galvanic Isolation, Excitation, Anti-Aliasing), High-Resolution ADC, and Real-Time DSP Processing Software.",
    topicRef: "2.3 Signal Conditioning & DAQ Architecture",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.3A: Complete Modern Data Acquisition (DAQ) System Architecture · Dewesoft Model
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.3
  </text>

  <!-- 4 Main Pillar Columns -->
  <g transform="translate(50, 135)">
    <!-- Column 1: Physical World & Sensors -->
    <g transform="translate(0, 0)">
      <rect width="350" height="500" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="350" height="52" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="175" y="34" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">1. Physical Sensors</text>

      <g transform="translate(20, 75)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Transducer Categories:</text>
        
        <rect x="0" y="38" width="310" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="65" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Temperature (Thermocouple, RTD, NTC)</text>

        <rect x="0" y="90" width="310" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="117" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Vibration (IEPE / ICP Accelerometers)</text>

        <rect x="0" y="142" width="310" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="169" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Strain &amp; Force (Wheatstone Bridge Cells)</text>

        <rect x="0" y="194" width="310" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="221" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• Pressure &amp; Sound (Piezoresistive &amp; Mics)</text>

        <rect x="0" y="246" width="310" height="42" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="273" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">• High Voltage &amp; Current Transducers</text>

        <rect x="0" y="310" width="310" height="90" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
        <text x="155" y="340" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e40af" text-anchor="middle">Physical Raw Outputs</text>
        <text x="155" y="370" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#2563eb" text-anchor="middle">μV · mV · pC · Ohms</text>
      </g>
    </g>

    <!-- Arrow 1 -> 2 -->
    <line x1="350" y1="285" x2="385" y2="285" stroke="#2563eb" stroke-width="3"/>
    <polygon points="385,285 375,280 375,290" fill="#2563eb"/>

    <!-- Column 2: Advanced Signal Conditioning -->
    <g transform="translate(385, 0)">
      <rect width="360" height="500" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="360" height="52" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="180" y="34" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">2. Signal Conditioning</text>

      <g transform="translate(20, 75)">
        <rect x="0" y="0" width="320" height="75" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309">Galvanic Isolation (&gt;1000 V)</text>
        <text x="15" y="54" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Breaks ground loops; kills common-mode noise</text>

        <rect x="0" y="85" width="320" height="75" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="113" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309">Sensor Power / Excitation</text>
        <text x="15" y="139" font-family="system-ui, sans-serif" font-size="14" fill="#475569">IEPE 4mA current, Bridge 5V/10V, CJC for TC</text>

        <rect x="0" y="170" width="320" height="75" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="198" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309">Differential Pre-Amp (INA)</text>
        <text x="15" y="224" font-family="system-ui, sans-serif" font-size="14" fill="#475569">High CMRR &gt;110 dB; Programmable Gain</text>

        <rect x="0" y="255" width="320" height="85" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.2"/>
        <text x="15" y="283" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626">Anti-Aliasing Filter (AA-LPF)</text>
        <text x="15" y="309" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#dc2626">Cutoff fc ≤ fs / 2 (Butterworth / Elliptic)</text>
        <text x="15" y="327" font-family="system-ui, sans-serif" font-size="13" fill="#991b1b">Mandatory hardware filter before ADC</text>

        <rect x="0" y="350" width="320" height="50" rx="6" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
        <text x="160" y="380" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#b45309" text-anchor="middle">Standardized Span: ±10 V</text>
      </g>
    </g>

    <!-- Arrow 2 -> 3 -->
    <line x1="745" y1="285" x2="780" y2="285" stroke="#d97706" stroke-width="3"/>
    <polygon points="780,285 770,280 770,290" fill="#d97706"/>

    <!-- Column 3: ADC Digitization Engine -->
    <g transform="translate(780, 0)">
      <rect width="350" height="500" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="350" height="52" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="175" y="34" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">3. A/D Converter (ADC)</text>

      <g transform="translate(20, 75)">
        <rect x="0" y="0" width="310" height="75" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d">Sample &amp; Hold (S/H)</text>
        <text x="15" y="54" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Precise clock rate fs; aperture jitter &lt; 10 ps</text>

        <rect x="0" y="85" width="310" height="95" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="113" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d">24-Bit Sigma-Delta (ΣΔ)</text>
        <text x="15" y="139" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Oversampling + digital decimation filter</text>
        <text x="15" y="163" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#059669">Dewesoft DualCoreADC: &gt;160 dB Range</text>

        <rect x="0" y="190" width="310" height="75" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="218" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#15803d">Multi-Channel Synchronization</text>
        <text x="15" y="244" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Zero inter-channel phase delay skew</text>

        <rect x="0" y="275" width="310" height="125" rx="8" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
        <text x="155" y="305" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#166534" text-anchor="middle">Quantization Resolution</text>
        <text x="155" y="335" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d" text-anchor="middle">Step Size: 1.19 μV (24-bit)</text>
        <text x="155" y="365" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d" text-anchor="middle">Digital Stream: 24-bit Integers</text>
      </g>
    </g>

    <!-- Arrow 3 -> 4 -->
    <line x1="1130" y1="285" x2="1165" y2="285" stroke="#059669" stroke-width="3"/>
    <polygon points="1165,285 1155,280 1155,290" fill="#059669"/>

    <!-- Column 4: DAQ Software & DSP Processor -->
    <g transform="translate(1165, 0)">
      <rect width="335" height="500" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="335" height="52" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <text x="167" y="34" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">4. DAQ Software &amp; DSP</text>

      <g transform="translate(20, 75)">
        <rect x="0" y="0" width="295" height="60" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="26" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#6d28d9">Time-Domain Scope</text>
        <text x="15" y="48" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Real-time waveforms &amp; lossless logging</text>

        <rect x="0" y="70" width="295" height="60" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="96" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#6d28d9">Real-Time FFT Analyzer</text>
        <text x="15" y="118" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Radix-2 FFT spectral decomposition</text>

        <rect x="0" y="140" width="295" height="60" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="166" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#6d28d9">Digital Filters (FIR / IIR)</text>
        <text x="15" y="188" font-family="system-ui, sans-serif" font-size="14" fill="#475569">High-pass, bandpass, notch filters</text>

        <rect x="0" y="210" width="295" height="60" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="15" y="236" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#6d28d9">STFT Spectrogram</text>
        <text x="15" y="258" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Time-frequency waterfall analysis</text>

        <rect x="0" y="280" width="295" height="120" rx="8" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
        <text x="147" y="315" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#6d28d9" text-anchor="middle">Order Tracking &amp; Diagnostics</text>
        <text x="147" y="345" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#7c3aed" text-anchor="middle">RPM-Synchronized Vibration</text>
        <text x="147" y="375" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">HMI Dashboard &amp; SCADA Output</text>
      </g>
    </g>
  </g>

  <!-- Lower Engineering Principles Banner -->
  <g transform="translate(50, 655)">
    <rect width="1500" height="205" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
      Three Non-Negotiable Dewesoft Engineering Principles for DAQ Systems
    </text>

    <g transform="translate(35, 60)">
      <rect width="460" height="125" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e40af">1. Galvanic Isolation Is Mandatory</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">High isolation (&gt;1000V) eliminates ground loops</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Protects sensitive ADC inputs and eliminates 50 Hz mains hum</text>
    </g>

    <g transform="translate(520, 60)">
      <rect width="460" height="125" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#b45309">2. Hardware Anti-Aliasing (AA-LPF)</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">Filtering must occur prior to the digitizer</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Software algorithms cannot remove folded aliased frequencies once sampled</text>
    </g>

    <g transform="translate(1005, 60)">
      <rect width="460" height="125" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#15803d">3. Dynamic Range &amp; Bit Depth</text>
      <text x="20" y="60" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">Dual 24-bit ADCs offer &gt;160 dB dynamic range</text>
      <text x="20" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Captures tiny micro-vibrations alongside large impact shock loads without re-ranging</text>
    </g>
  </g>
</svg>`
  },

  u2_fig_conditioning_matrix: {
    id: "u2_fig_conditioning_matrix",
    filename: "u2_fig10_sensor_conditioning_matrix.svg",
    title: "Figure 2.3B: Universal Sensor Signal Conditioning Topologies (Dewesoft Matrix)",
    description: "Detailed hardware conditioning circuits for Strain Gauges (Bridge completion), IEPE Accelerometers (Constant current), Thermocouples (CJC & isolation), and High Voltage/Current.",
    topicRef: "2.3 Signal Conditioning Topologies",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.3B: Universal Sensor Signal Conditioning Circuit Topologies · Multi-Sensor Standard
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.3
  </text>

  <!-- 4 Circuit Quadrants -->
  <g transform="translate(50, 130)">
    <!-- Quadrant 1: Strain Gauge Bridge Conditioning -->
    <g transform="translate(0, 0)">
      <rect width="730" height="350" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="730" height="50" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">
        A. Strain Gauge &amp; Bridge Sensors (Load Cells, Torque)
      </text>

      <g transform="translate(30, 70)">
        <rect width="280" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="140" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Wheatstone Bridge Front-End</text>
        <line x1="140" y1="50" x2="80" y2="105" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="140" y1="50" x2="200" y2="105" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="80" y1="105" x2="140" y2="160" stroke="#2563eb" stroke-width="2.5"/>
        <line x1="200" y1="105" x2="140" y2="160" stroke="#2563eb" stroke-width="2.5"/>
        <circle cx="140" cy="50" r="5" fill="#2563eb"/>
        <circle cx="140" cy="160" r="5" fill="#2563eb"/>
        <text x="140" y="190" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e40af" text-anchor="middle">Stable Excitation (2.5V, 5V, 10V)</text>
      </g>

      <g transform="translate(340, 70)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Conditioning Architecture:</text>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Bridge completion (Quarter 120Ω/350Ω, Half, Full)</text>
        <text x="0" y="85" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Ultra-stable excitation with remote sense leads</text>
        <text x="0" y="115" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Shunt calibration resistor for auto-tare &amp; span verification</text>
        <text x="0" y="145" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• High-gain differential INA (Gain = 100 to 1000)</text>
        <text x="0" y="180" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#1e40af">Typical Sensitivity: ±1 mV/V to ±10 mV/V</text>
      </g>
    </g>

    <!-- Quadrant 2: IEPE / ICP Accelerometers -->
    <g transform="translate(770, 0)">
      <rect width="730" height="350" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="730" height="50" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
        B. IEPE / ICP Vibration Sensors &amp; Microphones
      </text>

      <g transform="translate(30, 70)">
        <rect width="280" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="140" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Constant Current Source</text>
        <circle cx="140" cy="85" r="26" fill="#ffffff" stroke="#059669" stroke-width="2"/>
        <text x="140" y="92" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669" text-anchor="middle">4 mA</text>
        <line x1="140" y1="58" x2="140" y2="45" stroke="#059669" stroke-width="2.5"/>
        <line x1="140" y1="112" x2="140" y2="130" stroke="#059669" stroke-width="2.5"/>
        <text x="140" y="160" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#166534" text-anchor="middle">24 VDC Excitation Compliance</text>
      </g>

      <g transform="translate(340, 70)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Conditioning Architecture:</text>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Constant current generator (2 to 20 mA excitation)</text>
        <text x="0" y="85" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• AC-coupling capacitor strips out DC sensor bias (8–12V)</text>
        <text x="0" y="115" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• High input impedance eliminates sensor loading errors</text>
        <text x="0" y="145" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• TEDS (IEEE 1451.4) digital transducer electronic sheet</text>
        <text x="0" y="180" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d">Typical Span: ±5 V pk (100 mV/g)</text>
      </g>
    </g>

    <!-- Quadrant 3: Thermocouple & RTD Temperature -->
    <g transform="translate(0, 375)">
      <rect width="730" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="730" height="50" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b45309">
        C. Thermocouple &amp; RTD Temperature Front-End
      </text>

      <g transform="translate(30, 70)">
        <rect width="280" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="140" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">Cold Junction Compensation</text>
        <rect x="50" y="60" width="180" height="50" rx="6" fill="#ffffff" stroke="#d97706" stroke-width="1.5"/>
        <text x="140" y="90" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706" text-anchor="middle">Isothermal Terminal</text>
        <text x="140" y="145" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#475569" text-anchor="middle">Pt1000 Cold Junction Sensor</text>
      </g>

      <g transform="translate(340, 70)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Conditioning Architecture:</text>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Cold Junction Compensation (CJC) reference compensation</text>
        <text x="0" y="85" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• High galvanic isolation (&gt;1000V) against dangerous high-potential</text>
        <text x="0" y="115" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Open thermocouple detection (pull-up burnout circuit)</text>
        <text x="0" y="145" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Polynomial linearization engine executed in real-time</text>
        <text x="0" y="180" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#b45309">Typical Span: ±10 mV to ±100 mV</text>
      </g>
    </g>

    <!-- Quadrant 4: High Voltage & Current -->
    <g transform="translate(770, 375)">
      <rect width="730" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="730" height="50" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <text x="25" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#6d28d9">
        D. High Voltage, Current &amp; Power Analysis Front-End
      </text>

      <g transform="translate(30, 70)">
        <rect width="280" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="140" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a" text-anchor="middle">CAT IV Isolation Barrier</text>
        <line x1="60" y1="90" x2="110" y2="90" stroke="#7c3aed" stroke-width="2.5"/>
        <line x1="110" y1="65" x2="110" y2="115" stroke="#7c3aed" stroke-width="3"/>
        <line x1="170" y1="65" x2="170" y2="115" stroke="#7c3aed" stroke-width="3"/>
        <line x1="170" y1="90" x2="220" y2="90" stroke="#7c3aed" stroke-width="2.5"/>
        <text x="140" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#6d28d9" text-anchor="middle">1000 V CAT III / CAT IV</text>
      </g>

      <g transform="translate(340, 70)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Conditioning Architecture:</text>
        <text x="0" y="55" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Precision frequency-compensated high-voltage divider</text>
        <text x="0" y="85" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Closed-loop Hall effect or Rogowski flux coils for current</text>
        <text x="0" y="115" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• Channel-to-channel and channel-to-ground isolation</text>
        <text x="0" y="145" font-family="system-ui, sans-serif" font-size="15" fill="#334155">• High analog bandwidth for inverter PWM switching analysis</text>
        <text x="0" y="180" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#6d28d9">Typical Span: Up to ±1000 V / ±1000 A</text>
      </g>
    </g>
  </g>
</svg>`
  },

  u2_fig_quantization_bits: {
    id: "u2_fig_quantization_bits",
    filename: "u2_fig11_adc_bit_depth_comparison.svg",
    title: "Figure 2.2B: ADC Bit Depth & Quantization Step Size Resolution Comparison",
    description: "Visual comparison of 8-bit (256 levels), 12-bit (4,096 levels), 16-bit (65,536 levels), and 24-bit (16,777,216 levels) quantization on continuous sensor waveforms, illustrating step size and SQNR.",
    topicRef: "2.2 ADC Quantization & Resolution",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.2B: ADC Bit Depth &amp; Resolution · 8-bit vs 12-bit vs 16-bit vs 24-bit Performance
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Section 2.2
  </text>

  <!-- 4 Bit-Depth Panels -->
  <g transform="translate(50, 135)">
    <!-- 8-Bit Panel -->
    <g transform="translate(0, 0)">
      <rect width="350" height="500" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="350" height="50" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
      <text x="175" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">8-Bit ADC (Legacy MCU)</text>

      <g transform="translate(20, 70)">
        <rect width="310" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="20" y1="85" x2="290" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
        <path d="M 20 85 L 50 85 L 50 35 L 110 35 L 110 20 L 160 20 L 160 35 L 200 35 L 200 85 L 230 85 L 230 145 L 265 145 L 265 85 L 290 85" 
              fill="none" stroke="#dc2626" stroke-width="3.5"/>
        <text x="155" y="160" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">Coarse, Visible Staircase</text>
      </g>

      <g transform="translate(20, 260)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">• Quantization Levels: 256 Levels</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626">• Step Size (±10V span): 78.1 mV</text>
        <text x="0" y="84" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Dynamic Range: 49.9 dB SQNR</text>
        <text x="0" y="114" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• High Noise Floor: σq = 22.5 mV</text>
        
        <rect x="0" y="135" width="310" height="85" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
        <text x="155" y="165" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#991b1b" text-anchor="middle">High Noise Floor</text>
        <text x="155" y="195" font-family="system-ui, sans-serif" font-size="14" fill="#b91c1c" text-anchor="middle">Weak harmonics buried under noise</text>
      </g>
    </g>

    <!-- 12-Bit Panel -->
    <g transform="translate(385, 0)">
      <rect width="350" height="500" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="350" height="50" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="175" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">12-Bit ADC (General Lab)</text>

      <g transform="translate(20, 70)">
        <rect width="310" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="20" y1="85" x2="290" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
        <path d="M 20 85 Q 75 20, 155 20 T 290 85" fill="none" stroke="#d97706" stroke-width="2.5"/>
        <text x="155" y="160" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706" text-anchor="middle">Fine Discrete Steps</text>
      </g>

      <g transform="translate(20, 260)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">• Quantization Levels: 4,096 Levels</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706">• Step Size (±10V span): 4.88 mV</text>
        <text x="0" y="84" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Dynamic Range: 74.0 dB SQNR</text>
        <text x="0" y="114" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Noise Floor: σq = 1.41 mV</text>
        
        <rect x="0" y="135" width="310" height="85" rx="6" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
        <text x="155" y="165" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#b45309" text-anchor="middle">Moderate Resolution</text>
        <text x="155" y="195" font-family="system-ui, sans-serif" font-size="14" fill="#78350f" text-anchor="middle">Adequate for static DC monitoring</text>
      </g>
    </g>

    <!-- 16-Bit Panel -->
    <g transform="translate(770, 0)">
      <rect width="350" height="500" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="350" height="50" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="175" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">16-Bit ADC (Industrial Test)</text>

      <g transform="translate(20, 70)">
        <rect width="310" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="20" y1="85" x2="290" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
        <path d="M 20 85 Q 75 20, 155 20 T 290 85" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <text x="155" y="160" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">Visually Seamless Waveform</text>
      </g>

      <g transform="translate(20, 260)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">• Quantization Levels: 65,536 Levels</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">• Step Size (±10V span): 305 μV</text>
        <text x="0" y="84" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Dynamic Range: 98.1 dB SQNR</text>
        <text x="0" y="114" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Low Noise Floor: σq = 88.1 μV</text>
        
        <rect x="0" y="135" width="310" height="85" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
        <text x="155" y="165" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#1e40af" text-anchor="middle">High Precision Standard</text>
        <text x="155" y="195" font-family="system-ui, sans-serif" font-size="14" fill="#1e3a8a" text-anchor="middle">Automotive NVH &amp; acoustics standard</text>
      </g>
    </g>

    <!-- 24-Bit Panel (Dewesoft Benchmark) -->
    <g transform="translate(1155, 0)">
      <rect width="345" height="500" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="345" height="50" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="172" y="33" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">24-Bit ADC (Dewesoft DualCore)</text>

      <g transform="translate(20, 70)">
        <rect width="305" height="170" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="20" y1="85" x2="285" y2="85" stroke="#cbd5e1" stroke-width="1.5"/>
        <path d="M 20 85 Q 75 20, 152 20 T 285 85" fill="none" stroke="#059669" stroke-width="3"/>
        <text x="152" y="160" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669" text-anchor="middle">Pristine Analog Equivalence</text>
      </g>

      <g transform="translate(20, 260)">
        <text x="0" y="24" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">• Quantization Levels: 16.7M Levels</text>
        <text x="0" y="54" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669">• Step Size (±10V span): 1.19 μV</text>
        <text x="0" y="84" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Dynamic Range: 146.2 dB SQNR</text>
        <text x="0" y="114" font-family="system-ui, sans-serif" font-size="15" fill="#475569">• Ultra-Low Noise: σq = 0.34 μV</text>
        
        <rect x="0" y="135" width="305" height="85" rx="6" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
        <text x="152" y="165" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#166534" text-anchor="middle">&gt;160 dB Dynamic Range</text>
        <text x="152" y="195" font-family="system-ui, sans-serif" font-size="14" fill="#15803d" text-anchor="middle">Eliminates analog pre-amplifier ranging</text>
      </g>
    </g>
  </g>

  <!-- Lower Formulation Banner -->
  <g transform="translate(50, 655)">
    <rect width="1500" height="205" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
      Theoretical Quantization Performance Landmarks
    </text>

    <g transform="translate(35, 60)">
      <rect width="460" height="125" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e40af">Voltage Resolution Step (LSB)</text>
      <text x="20" y="62" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">Smallest resolvable voltage increment</text>
      <text x="20" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Calculated across full-scale input span divided by total digital codes</text>
      <text x="20" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#1e40af">Halves for every added bit of resolution</text>
    </g>

    <g transform="translate(520, 60)">
      <rect width="460" height="125" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#059669">RMS Quantization Noise Power</text>
      <text x="20" y="62" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">Theoretical uniform roundoff error</text>
      <text x="20" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#475569">Assumes error distribution is uniformly spread across [-ΔV/2, +ΔV/2]</text>
      <text x="20" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#059669">Forms the fundamental theoretical noise floor</text>
    </g>

    <g transform="translate(1005, 60)">
      <rect width="460" height="125" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#7c3aed">Dynamic Range Scaling Rule</text>
      <text x="20" y="62" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0f172a">+6.02 dB Dynamic Range per Added Bit</text>
      <text x="20" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#475569">A 16-bit ADC delivers 98 dB SQNR; a 24-bit ADC delivers over 146 dB SQNR</text>
      <text x="20" y="115" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#7c3aed">Enables measuring microvolts without saturation</text>
    </g>
  </g>
</svg>`
  },

  u2_fig_case_study: {
    id: "u2_fig_case_study",
    filename: "u2_fig12_end_to_end_case_study.svg",
    title: "Figure 2.10: Complete End-to-End Solved Case Study: Gas Turbine Vibration & Temperature DAQ Pipeline",
    description: "Complete trace of a real-world rotating machinery DAQ system from IEPE vibration accelerometer through signal conditioning, anti-aliasing filter, ADC quantization, Hanning windowing, and 4096-pt FFT spectral analysis.",
    topicRef: "Unit II Comprehensive Solved Case Study",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="80" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.10: Industrial Case Study · Gas Turbine Vibration DAQ Pipeline &amp; Fault Diagnostics
  </text>
  <text x="1320" y="86" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Unit II · Solved Case Study
  </text>

  <!-- Complete 6-Stage Pipeline Flowchart -->
  <g transform="translate(50, 135)">
    <!-- Stage 1: Machine & Sensor -->
    <g transform="translate(0, 0)">
      <rect width="235" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="235" height="48" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="117" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#1e40af" text-anchor="middle">Stage 1: Sensor</text>

      <g transform="translate(15, 65)">
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Gas Turbine Rotor:</text>
        <text x="0" y="46" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• 12,000 RPM (200 Hz 1X)</text>
        <text x="0" y="72" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Blade Pass: 1,000 Hz</text>
        <text x="0" y="98" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Bearing Cage: 2,400 Hz</text>
        <text x="0" y="124" font-family="system-ui, sans-serif" font-size="14" fill="#dc2626">• Inverter EMI: 25 kHz</text>

        <rect x="0" y="145" width="205" height="110" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="102" y="175" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">IEPE Accelerometer</text>
        <text x="102" y="202" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a" text-anchor="middle">Sensitivity: 100 mV/g</text>
        <text x="102" y="230" font-family="system-ui, sans-serif" font-size="14" fill="#64748b" text-anchor="middle">Range: ±50 g (±5 V)</text>
      </g>
    </g>

    <!-- Arrow 1 -> 2 -->
    <line x1="235" y1="170" x2="255" y2="170" stroke="#2563eb" stroke-width="2.5"/>
    <polygon points="255,170 247,166 247,174" fill="#2563eb"/>

    <!-- Stage 2: Signal Conditioning & AA-LPF -->
    <g transform="translate(255, 0)">
      <rect width="245" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="245" height="48" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="122" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#b45309" text-anchor="middle">Stage 2: Conditioning</text>

      <g transform="translate(15, 65)">
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Analog Front-End:</text>
        <text x="0" y="46" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• 4mA Current Supply</text>
        <text x="0" y="72" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• AC Coupling (0.5 Hz HPF)</text>
        <text x="0" y="98" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Diff Amp (CMRR &gt;100 dB)</text>

        <rect x="0" y="125" width="215" height="130" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
        <text x="107" y="155" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">Hardware AA-LPF</text>
        <text x="107" y="182" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#991b1b" text-anchor="middle">6th-Order Butterworth</text>
        <text x="107" y="208" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#dc2626" text-anchor="middle">Cutoff: fc = 5 kHz</text>
        <text x="107" y="235" font-family="system-ui, sans-serif" font-size="13" fill="#7f1d1d" text-anchor="middle">-84 dB at 25 kHz EMI</text>
      </g>
    </g>

    <!-- Arrow 2 -> 3 -->
    <line x1="500" y1="170" x2="520" y2="170" stroke="#d97706" stroke-width="2.5"/>
    <polygon points="520,170 512,166 512,174" fill="#d97706"/>

    <!-- Stage 3: Sampling & S/H -->
    <g transform="translate(520, 0)">
      <rect width="235" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="235" height="48" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="117" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#15803d" text-anchor="middle">Stage 3: S/H Sampling</text>

      <g transform="translate(15, 65)">
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Nyquist Strategy:</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d">• Rate: fs = 20 kS/s</text>
        <text x="0" y="74" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Period: Ts = 50 μs</text>
        <text x="0" y="100" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#166534">• Nyquist: 10 kHz</text>
        <text x="0" y="126" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Guard Band: 5 to 10 kHz</text>

        <rect x="0" y="145" width="205" height="110" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="102" y="175" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d" text-anchor="middle">Aperture Jitter Bound</text>
        <text x="102" y="202" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#166534" text-anchor="middle">Clock Jitter: ta &lt; 1.59 ns</text>
        <text x="102" y="230" font-family="system-ui, sans-serif" font-size="13" fill="#475569" text-anchor="middle">Guarantees 16-bit fidelity</text>
      </g>
    </g>

    <!-- Arrow 3 -> 4 -->
    <line x1="755" y1="170" x2="775" y2="170" stroke="#15803d" stroke-width="2.5"/>
    <polygon points="775,170 767,166 767,174" fill="#15803d"/>

    <!-- Stage 4: ADC Quantization -->
    <g transform="translate(775, 0)">
      <rect width="235" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="235" height="48" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="117" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#b45309" text-anchor="middle">Stage 4: Quantizer</text>

      <g transform="translate(15, 65)">
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">16-Bit SAR ADC:</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Span: ±10V (20V FSR)</text>
        <text x="0" y="74" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#b45309">• Levels: 65,536 Codes</text>
        <text x="0" y="100" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#b45309">• Step: ΔV = 305.2 μV</text>

        <rect x="0" y="125" width="205" height="130" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="102" y="155" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#b45309" text-anchor="middle">Noise &amp; Resolution</text>
        <text x="102" y="182" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#92400e" text-anchor="middle">Min Resolvable: 0.003 g</text>
        <text x="102" y="208" font-family="system-ui, sans-serif" font-size="14" fill="#78350f" text-anchor="middle">SQNR: 98.08 dB</text>
        <text x="102" y="235" font-family="system-ui, sans-serif" font-size="13" fill="#64748b" text-anchor="middle">RMS Noise: 88.1 μV</text>
      </g>
    </g>

    <!-- Arrow 4 -> 5 -->
    <line x1="1010" y1="170" x2="1030" y2="170" stroke="#b45309" stroke-width="2.5"/>
    <polygon points="1030,170 1022,166 1022,174" fill="#b45309"/>

    <!-- Stage 5: DSP Buffer & Windowing -->
    <g transform="translate(1030, 0)">
      <rect width="235" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="235" height="48" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <text x="117" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#6d28d9" text-anchor="middle">Stage 5: Windowing</text>

      <g transform="translate(15, 65)">
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">DSP Record Buffer:</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#6d28d9">• N = 4096 Samples</text>
        <text x="0" y="74" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• T_rec = 0.2048 s</text>
        <text x="0" y="100" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#6d28d9">• Bin: Δf = 4.88 Hz</text>

        <rect x="0" y="125" width="205" height="130" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
        <text x="102" y="155" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#6d28d9" text-anchor="middle">Hanning Window</text>
        <text x="102" y="182" font-family="system-ui, sans-serif" font-size="14" fill="#4c1d95" text-anchor="middle">Tapers ends to zero</text>
        <text x="102" y="208" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#6d28d9" text-anchor="middle">Side-Lobes: -32 dB</text>
        <text x="102" y="235" font-family="system-ui, sans-serif" font-size="13" fill="#4c1d95" text-anchor="middle">Suppresses leakage</text>
      </g>
    </g>

    <!-- Arrow 5 -> 6 -->
    <line x1="1265" y1="170" x2="1285" y2="170" stroke="#7c3aed" stroke-width="2.5"/>
    <polygon points="1285,170 1277,166 1277,174" fill="#7c3aed"/>

    <!-- Stage 6: FFT Spectral Analysis & Diagnostics -->
    <g transform="translate(1285, 0)">
      <rect width="215" height="340" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="215" height="48" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
      <text x="107" y="32" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#b91c1c" text-anchor="middle">Stage 6: FFT Core</text>

      <g transform="translate(15, 65)">
        <text x="0" y="20" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Radix-2 FFT Engine:</text>
        <text x="0" y="48" font-family="system-ui, sans-serif" font-size="14" fill="#334155">• Complexity: N log2 N</text>
        <text x="0" y="74" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#b91c1c">• Ops: 49,152 MACs</text>
        <text x="0" y="100" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#059669">• 341× Faster than DFT</text>

        <rect x="0" y="125" width="185" height="130" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="92" y="155" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#b91c1c" text-anchor="middle">Diagnostic Spectrum</text>
        <text x="92" y="182" font-family="system-ui, sans-serif" font-size="14" fill="#9f1239" text-anchor="middle">2048 Frequency Bins</text>
        <text x="92" y="208" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#b91c1c" text-anchor="middle">Span: 0 to 10 kHz</text>
        <text x="92" y="235" font-family="system-ui, sans-serif" font-size="13" fill="#881337" text-anchor="middle">Automated Machine Alarms</text>
      </g>
    </g>
  </g>

  <!-- Lower Section: Solved Output Vibration Spectrum Plot -->
  <g transform="translate(50, 500)">
    <rect width="1500" height="360" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="35" y="38" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
      Solved Diagnostic Output: FFT Spectrum &amp; Automated Rotating Machine Fault Identification
    </text>

    <!-- Spectrum Display Box -->
    <g transform="translate(35, 60)">
      <rect width="1430" height="270" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="80" y1="210" x2="1380" y2="210" stroke="#0f172a" stroke-width="2"/>
      <line x1="80" y1="30" x2="80" y2="210" stroke="#0f172a" stroke-width="2"/>
      <text x="1380" y="235" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Frequency (Hz)</text>
      <text x="35" y="35" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">|X(f)| (g)</text>

      <!-- Grid lines -->
      <line x1="220" y1="40" x2="220" y2="210" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="420" y1="40" x2="420" y2="210" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="720" y1="40" x2="720" y2="210" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="1100" y1="40" x2="1100" y2="210" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>

      <!-- Peak 1: 1X Rotor Unbalance (200 Hz) -->
      <line x1="220" y1="210" x2="220" y2="60" stroke="#2563eb" stroke-width="4.5"/>
      <circle cx="220" cy="60" r="6" fill="#2563eb"/>
      <text x="220" y="48" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb" text-anchor="middle">1.25 g</text>
      <text x="220" y="235" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#2563eb" text-anchor="middle">200 Hz (1X Rotor Unbalance)</text>

      <!-- Peak 2: 2X Shaft Misalignment (400 Hz) -->
      <line x1="420" y1="210" x2="420" y2="120" stroke="#d97706" stroke-width="4.5"/>
      <circle cx="420" cy="120" r="6" fill="#d97706"/>
      <text x="420" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#d97706" text-anchor="middle">0.65 g</text>
      <text x="420" y="235" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#d97706" text-anchor="middle">400 Hz (2X Shaft Misalignment)</text>

      <!-- Peak 3: Blade Pass Frequency (1,000 Hz) -->
      <line x1="720" y1="210" x2="720" y2="90" stroke="#059669" stroke-width="4.5"/>
      <circle cx="720" cy="90" r="6" fill="#059669"/>
      <text x="720" y="78" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669" text-anchor="middle">0.95 g</text>
      <text x="720" y="235" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#059669" text-anchor="middle">1,000 Hz (Blade Pass Frequency)</text>

      <!-- Peak 4: Bearing Defect (2,400 Hz) -->
      <line x1="1100" y1="210" x2="1100" y2="150" stroke="#7c3aed" stroke-width="4.5"/>
      <circle cx="1100" cy="150" r="6" fill="#7c3aed"/>
      <text x="1100" y="138" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#7c3aed" text-anchor="middle">0.38 g</text>
      <text x="1100" y="235" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#7c3aed" text-anchor="middle">2,400 Hz (Bearing Cage Outer Race)</text>

      <!-- Eliminated 25 kHz note -->
      <rect x="1220" y="45" width="190" height="90" rx="6" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="1315" y="72" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#15803d" text-anchor="middle">25 kHz Inverter Noise:</text>
      <text x="1315" y="96" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#166534" text-anchor="middle">100% Rejected</text>
      <text x="1315" y="118" font-family="system-ui, sans-serif" font-size="13" fill="#15803d" text-anchor="middle">by 6th-Order AA Filter</text>
    </g>
  </g>
</svg>`
  }
};
