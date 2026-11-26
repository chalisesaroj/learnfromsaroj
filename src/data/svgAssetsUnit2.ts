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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.1: Signal Taxonomy · Time, Periodicity, Predictability &amp; Energy
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.1
  </text>

  <!-- Quadrant 1: Continuous vs Discrete -->
  <g transform="translate(35, 125)">
    <rect width="745" height="360" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="52" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af">
      1. Time &amp; Value Domain: Continuous vs. Discrete
    </text>

    <!-- Continuous waveform -->
    <g transform="translate(25, 66)">
      <rect width="335" height="178" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="68" x2="315" y2="68" stroke="#64748b" stroke-width="1.5"/>
      <line x1="20" y1="16" x2="20" y2="118" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 20 68 Q 70 16, 120 68 T 220 68 T 315 68" fill="none" stroke="#2563eb" stroke-width="3.5"/>
      <text x="167" y="136" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Analog Continuum</text>
      <text x="167" y="164" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Continuous Time &amp; Value</text>
    </g>

    <!-- Discrete stem plot -->
    <g transform="translate(385, 66)">
      <rect width="335" height="178" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="68" x2="315" y2="68" stroke="#64748b" stroke-width="1.5"/>
      <line x1="20" y1="16" x2="20" y2="118" stroke="#64748b" stroke-width="1.5"/>
      <!-- Stems -->
      <line x1="48" y1="68" x2="48" y2="40" stroke="#059669" stroke-width="3"/><circle cx="48" cy="40" r="5" fill="#059669"/>
      <line x1="88" y1="68" x2="88" y2="22" stroke="#059669" stroke-width="3"/><circle cx="88" cy="22" r="5" fill="#059669"/>
      <line x1="128" y1="68" x2="128" y2="68" stroke="#059669" stroke-width="3"/><circle cx="128" cy="68" r="5" fill="#059669"/>
      <line x1="168" y1="68" x2="168" y2="106" stroke="#059669" stroke-width="3"/><circle cx="168" cy="106" r="5" fill="#059669"/>
      <line x1="208" y1="68" x2="208" y2="68" stroke="#059669" stroke-width="3"/><circle cx="208" cy="68" r="5" fill="#059669"/>
      <line x1="248" y1="68" x2="248" y2="30" stroke="#059669" stroke-width="3"/><circle cx="248" cy="30" r="5" fill="#059669"/>
      <line x1="288" y1="68" x2="288" y2="82" stroke="#059669" stroke-width="3"/><circle cx="288" cy="82" r="5" fill="#059669"/>
      <text x="167" y="136" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Sampled &amp; Quantized</text>
      <text x="167" y="164" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Uniform Sampling Step</text>
    </g>

    <!-- Bottom Metric Chips -->
    <g transform="translate(25, 258)">
      <rect x="0" y="0" width="335" height="84" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="16" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Continuous Signals:</text>
      <text x="16" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e40af">Infinite Res · Noise-Prone</text>

      <rect x="360" y="0" width="335" height="84" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="376" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Discrete Signals:</text>
      <text x="376" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">N-Bit Words · Noise-Robust</text>
    </g>
  </g>

  <!-- Quadrant 2: Periodic vs Aperiodic -->
  <g transform="translate(820, 125)">
    <rect width="745" height="360" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="52" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
    <text x="25" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b45309">
      2. Periodicity: Periodic vs. Aperiodic
    </text>

    <!-- Periodic waveform -->
    <g transform="translate(25, 66)">
      <rect width="335" height="178" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="64" x2="315" y2="64" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 20 64 Q 55 14, 90 64 T 160 64 T 230 64 T 300 64" fill="none" stroke="#d97706" stroke-width="3.5"/>
      <line x1="90" y1="126" x2="160" y2="126" stroke="#b45309" stroke-width="2.5"/>
      <polygon points="90,126 98,121 98,131" fill="#b45309"/>
      <polygon points="160,126 152,121 152,131" fill="#b45309"/>
      <text x="125" y="114" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">Period T0</text>
      <text x="167" y="164" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Discrete Line Harmonics</text>
    </g>

    <!-- Aperiodic waveform -->
    <g transform="translate(385, 66)">
      <rect width="335" height="178" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="78" x2="315" y2="78" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 20 78 L 85 78 Q 125 78, 167 20 Q 210 78, 250 78 L 315 78" fill="none" stroke="#dc2626" stroke-width="3.5"/>
      <text x="167" y="136" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Transient / Shock Pulse</text>
      <text x="167" y="164" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Continuous Energy PSD</text>
    </g>

    <!-- Bottom Metric Chips -->
    <g transform="translate(25, 258)">
      <rect x="0" y="0" width="335" height="84" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="16" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Periodic Signal:</text>
      <text x="16" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#b45309">Repeats · Fixed Harmonics</text>

      <rect x="360" y="0" width="335" height="84" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="376" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Aperiodic Signal:</text>
      <text x="376" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#b91c1c">Non-Repeating · Transient</text>
    </g>
  </g>

  <!-- Quadrant 3: Deterministic vs Random -->
  <g transform="translate(35, 505)">
    <rect width="745" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="52" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="25" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9">
      3. Predictability: Deterministic vs. Stochastic Noise
    </text>

    <!-- Deterministic + Noise Graph -->
    <g transform="translate(25, 66)">
      <rect width="695" height="164" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="20" y1="74" x2="675" y2="74" stroke="#94a3b8" stroke-width="1.5"/>
      <!-- Pure signal wave -->
      <path d="M 20 74 Q 60 18, 100 74 T 180 74 T 260 74 T 340 74 T 420 74 T 500 74 T 580 74 T 675 74" fill="none" stroke="#7c3aed" stroke-width="3"/>
      <!-- Noise overlay -->
      <path d="M 20 74 L 40 65 L 60 81 L 80 61 L 100 79 L 120 64 L 140 83 L 160 63 L 180 80 L 200 65 L 220 84 L 240 64 L 260 81 L 280 66 L 300 82 L 320 67 L 340 79 L 360 65 L 380 83 L 400 64 L 420 81 L 440 66 L 460 83 L 480 65 L 500 80 L 520 66 L 540 82 L 560 65 L 580 81 L 600 67 L 620 83 L 640 65 L 675 74" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,2"/>
      <text x="347" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Deterministic Signal + Stochastic Random Noise</text>
    </g>

    <!-- Bottom Metric Chips -->
    <g transform="translate(25, 242)">
      <rect x="0" y="0" width="335" height="98" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="16" y="30" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Deterministic:</text>
      <text x="16" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#6d28d9">Closed-Form Equation</text>
      <text x="16" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Predictable at all times t</text>

      <rect x="360" y="0" width="335" height="98" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="376" y="30" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Stochastic Noise:</text>
      <text x="376" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#b91c1c">Statistical &amp; PSD Model</text>
      <text x="376" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Mean, variance &amp; PSD</text>
    </g>
  </g>

  <!-- Quadrant 4: Energy vs Power Signals -->
  <g transform="translate(820, 505)">
    <rect width="745" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="52" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">
      4. Energy vs. Power Signal Classifications
    </text>

    <!-- Energy Box -->
    <g transform="translate(25, 68)">
      <rect width="695" height="128" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0369a1">A. Energy Signal Classification</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Finite Energy · Zero Average Power</text>
      <text x="20" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Shocks, lightning &amp; decaying pulses</text>
      <rect x="525" y="22" width="150" height="84" rx="6" fill="#eff6ff" stroke="#93c5fd" stroke-width="1"/>
      <text x="600" y="56" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="middle">E &lt; ∞</text>
      <text x="600" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="middle">P_avg = 0</text>
    </g>

    <!-- Power Box -->
    <g transform="translate(25, 210)">
      <rect width="695" height="128" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">B. Power Signal Classification</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Infinite Energy · Finite Non-Zero Power</text>
      <text x="20" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Sine waves, clocks &amp; steady noise</text>
      <rect x="525" y="22" width="150" height="84" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="600" y="56" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d" text-anchor="middle">E = ∞</text>
      <text x="600" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d" text-anchor="middle">0 &lt; P &lt; ∞</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.2: Nyquist-Shannon Sampling · Spectral Replicas &amp; Aliasing
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.2
  </text>

  <!-- Left: Proper Sampling (No Aliasing) -->
  <g transform="translate(35, 125)">
    <rect width="745" height="735" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">
      Case A: Proper Sampling (fs ≥ 2·fmax) · Guard Band
    </text>

    <!-- Spectrum representation -->
    <g transform="translate(25, 72)">
      <rect width="695" height="276" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="25" y1="205" x2="670" y2="205" stroke="#0f172a" stroke-width="2"/>
      <line x1="347" y1="35" x2="347" y2="205" stroke="#64748b" stroke-dasharray="4,4" stroke-width="1.5"/>
      <text x="347" y="262" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">f = 0 (Baseband)</text>

      <!-- Baseband Spectrum Triangle -->
      <polygon points="277,205 347,68 417,205" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
      <text x="347" y="140" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Original X(f)</text>
      <text x="424" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e40af" text-anchor="middle">+fmax</text>
      <text x="268" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e40af" text-anchor="middle">-fmax</text>

      <!-- Replica at +fs -->
      <polygon points="515,205 585,68 655,205" fill="#dcfce7" stroke="#059669" stroke-width="2.5"/>
      <text x="585" y="234" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">+fs</text>

      <!-- Replica at -fs -->
      <polygon points="40,205 110,68 180,205" fill="#dcfce7" stroke="#059669" stroke-width="2.5"/>
      <text x="110" y="234" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">-fs</text>

      <!-- Guard Band indicator -->
      <line x1="417" y1="156" x2="515" y2="156" stroke="#15803d" stroke-width="2.5"/>
      <line x1="417" y1="148" x2="417" y2="164" stroke="#15803d" stroke-width="2.5"/>
      <line x1="515" y1="148" x2="515" y2="164" stroke="#15803d" stroke-width="2.5"/>
      <text x="466" y="142" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Guard &gt; 0</text>
    </g>

    <!-- Technical Specification Cards -->
    <g transform="translate(25, 368)">
      <rect width="695" height="108" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">Nyquist Sampling Criterion:</text>
      <text x="20" y="66" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Sampling Rate: fs ≥ 2 · fmax (Nyquist Rate)</text>
      <text x="20" y="94" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Nyquist Limit: f_Nyquist = fs / 2 (Folding Limit)</text>

      <rect y="124" width="695" height="108" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="158" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Spectral Separation Status:</text>
      <text x="20" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">• Replicas remain isolated with zero spectral overlap</text>
      <text x="20" y="218" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Exact analog reconstruction mathematically assured</text>

      <rect y="248" width="695" height="92" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
      <text x="20" y="282" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#166534">Reconstruction Technique:</text>
      <text x="20" y="318" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">Whittaker-Shannon Ideal Sinc Interpolation Filter</text>
    </g>
  </g>

  <!-- Right: Undersampling & Aliasing Overlap -->
  <g transform="translate(820, 125)">
    <rect width="745" height="735" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c">
      Case B: Undersampling (fs &lt; 2·fmax) · Aliasing Overlap
    </text>

    <!-- Aliased spectrum representation -->
    <g transform="translate(25, 72)">
      <rect width="695" height="276" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="25" y1="205" x2="670" y2="205" stroke="#0f172a" stroke-width="2"/>
      <line x1="325" y1="35" x2="325" y2="205" stroke="#64748b" stroke-dasharray="4,4" stroke-width="1.5"/>
      <text x="325" y="258" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">f = 0 (Baseband)</text>

      <!-- Overlapping Triangles -->
      <polygon points="215,205 325,68 435,205" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5"/>
      <polygon points="365,205 475,68 585,205" fill="#fee2e2" stroke="#dc2626" stroke-width="2.5"/>

      <!-- Overlap Region -->
      <polygon points="365,205 400,142 435,205" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>
      <text x="400" y="196" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#7f1d1d" text-anchor="middle">Overlap</text>

      <text x="515" y="236" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">fs &lt; 2·fmax</text>
      <text x="325" y="138" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Original</text>
      <text x="515" y="138" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Folded Ghost</text>
    </g>

    <!-- Technical Specification Cards -->
    <g transform="translate(25, 368)">
      <rect width="695" height="108" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c">Aliasing Phenomenon:</text>
      <text x="20" y="66" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• High-frequency energy folds across Nyquist limit</text>
      <text x="20" y="94" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Appears as false, corrupt low-frequency "ghost" tones</text>

      <rect y="124" width="695" height="108" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="158" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Information Loss:</text>
      <text x="20" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#b91c1c">• Software post-processing CANNOT remove aliasing</text>
      <text x="20" y="218" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Corrupts amplitude and phase spectrum permanently</text>

      <rect y="248" width="695" height="92" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1"/>
      <text x="20" y="282" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#991b1b">Mandatory Engineering Defense:</text>
      <text x="20" y="318" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">Hardware Anti-Aliasing Low-Pass Filter BEFORE ADC</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.3: End-to-End DSP Pipeline · Conditioning, ADC &amp; DSP Core
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.3
  </text>

  <!-- Stage Blocks Pipeline (5 Stages: 5 x 286 + 4 x 25 = 1530) -->
  <g transform="translate(35, 125)">
    <!-- Stage 1: Transducer -->
    <g transform="translate(0, 0)">
      <rect width="286" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="286" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="143" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">1. Physical Sensor</text>

      <g transform="translate(14, 72)">
        <rect width="258" height="172" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="129" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Physical Field</text>
        <text x="129" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Pressure · Vibration</text>
        <text x="129" y="106" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Temp · Strain</text>
        <text x="129" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Continuous Analog</text>
      </g>
      <text x="143" y="286" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Output: μV / pC</text>
      <text x="143" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">High Source Imp.</text>
    </g>

    <!-- Arrow 1 -> 2 -->
    <line x1="286" y1="178" x2="311" y2="178" stroke="#2563eb" stroke-width="3.5"/>
    <polygon points="311,178 300,171 300,185" fill="#2563eb"/>

    <!-- Stage 2: Analog Conditioning & Anti-Aliasing -->
    <g transform="translate(311, 0)">
      <rect width="286" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="286" height="54" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="143" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">2. Conditioning</text>

      <g transform="translate(14, 72)">
        <rect width="258" height="172" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="129" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Front-End Preamp</text>
        <text x="129" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Instr. Amp (INA)</text>
        <text x="129" y="106" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Galvanic Isolation</text>
        <text x="129" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Hardware AA-LPF</text>
      </g>
      <text x="143" y="286" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">Scaled Span: ±10 V</text>
      <text x="143" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Bandwidth Limited</text>
    </g>

    <!-- Arrow 2 -> 3 -->
    <line x1="597" y1="178" x2="622" y2="178" stroke="#d97706" stroke-width="3.5"/>
    <polygon points="622,178 611,171 611,185" fill="#d97706"/>

    <!-- Stage 3: ADC Quantization -->
    <g transform="translate(622, 0)">
      <rect width="286" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="286" height="54" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="143" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">3. A/D Digitizer</text>

      <g transform="translate(14, 72)">
        <rect width="258" height="172" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="129" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Sample &amp; Hold</text>
        <text x="129" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Stable Clock (fs)</text>
        <text x="129" y="106" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">16 / 24-Bit ADC</text>
        <text x="129" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Discrete Words</text>
      </g>
      <text x="143" y="286" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Digital Word Stream</text>
      <text x="143" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Binary Integers</text>
    </g>

    <!-- Arrow 3 -> 4 -->
    <line x1="908" y1="178" x2="933" y2="178" stroke="#059669" stroke-width="3.5"/>
    <polygon points="933,178 922,171 922,185" fill="#059669"/>

    <!-- Stage 4: DSP Core Algorithms -->
    <g transform="translate(933, 0)">
      <rect width="286" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="286" height="54" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <text x="143" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">4. DSP Algorithms</text>

      <g transform="translate(14, 72)">
        <rect width="258" height="172" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="129" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Digital Engine</text>
        <text x="129" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">FIR / IIR Filters</text>
        <text x="129" y="106" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Hanning Window</text>
        <text x="129" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">Radix-2 FFT Core</text>
      </g>
      <text x="143" y="286" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">Spectral Engine</text>
      <text x="143" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Mag &amp; Phase Arrays</text>
    </g>

    <!-- Arrow 4 -> 5 -->
    <line x1="1219" y1="178" x2="1244" y2="178" stroke="#7c3aed" stroke-width="3.5"/>
    <polygon points="1244,178 1233,171 1233,185" fill="#7c3aed"/>

    <!-- Stage 5: Output & Presentation -->
    <g transform="translate(1244, 0)">
      <rect width="286" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="286" height="54" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
      <text x="143" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">5. Display &amp; HMI</text>

      <g transform="translate(14, 72)">
        <rect width="258" height="172" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="129" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Visual Insights</text>
        <text x="129" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">FFT Line Spectrum</text>
        <text x="129" y="106" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">STFT Spectrogram</text>
        <text x="129" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Automated Alarms</text>
      </g>
      <text x="143" y="286" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Operator Dashboard</text>
      <text x="143" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Fault Diagnostics</text>
    </g>
  </g>

  <!-- Lower Detail: Stage Responsibilities Summary -->
  <g transform="translate(35, 505)">
    <rect width="1530" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="42" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="700" fill="#0f172a">
      Architectural Roles Across the Signal Conditioning &amp; Digitization Pipeline
    </text>

    <!-- Stage 2 Card -->
    <g transform="translate(30, 66)">
      <rect width="474" height="265" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b45309">Stage 2: Analog Front-End</text>
      <text x="20" y="78" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• High CMRR Differential Gain</text>
      <text x="20" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">  Kills 50 Hz mains &amp; ground hum</text>
      <text x="20" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Anti-Aliasing Low-Pass Filter</text>
      <text x="20" y="184" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">  Blocks energy above Nyquist limit</text>
      <text x="20" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">Constraint: fc ≤ fs / 2</text>
    </g>

    <!-- Stage 3 Card -->
    <g transform="translate(528, 66)">
      <rect width="474" height="265" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">Stage 3: Sampling &amp; ADC</text>
      <text x="20" y="78" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Sample-and-Hold Stability</text>
      <text x="20" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">  Freezes voltage during conversion</text>
      <text x="20" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Finite Bit-Depth Quantization</text>
      <text x="20" y="184" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">  Maps voltage to discrete levels</text>
      <text x="20" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Dynamic Range: +6.02 dB / Bit</text>
    </g>

    <!-- Stage 4 Card -->
    <g transform="translate(1026, 66)">
      <rect width="474" height="265" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9">Stage 4: DSP Core Engine</text>
      <text x="20" y="78" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Real-Time Digital Filtering</text>
      <text x="20" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">  Linear-phase FIR &amp; recursive IIR</text>
      <text x="20" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Fast Fourier Transformation</text>
      <text x="20" y="184" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">  Radix-2 butterfly spectral core</text>
      <text x="20" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">Speedup: O(N log2 N) vs O(N²)</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.4: Digital Filters · Tapped-Delay FIR vs. Recursive Feedback IIR
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.4
  </text>

  <!-- Left: FIR Filter Architecture -->
  <g transform="translate(35, 125)">
    <rect width="745" height="735" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      FIR: Finite Impulse Response (Tapped Delay Line)
    </text>

    <!-- Signal Flow Diagram -->
    <g transform="translate(25, 72)">
      <rect width="695" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="52" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">x[n]</text>
      <line x1="78" y1="45" x2="140" y2="45" stroke="#2563eb" stroke-width="3"/>

      <!-- Delay Units z^-1 -->
      <rect x="140" y="23" width="70" height="44" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="175" y="52" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">z⁻¹</text>

      <line x1="210" y1="45" x2="270" y2="45" stroke="#2563eb" stroke-width="3"/>
      <rect x="270" y="23" width="70" height="44" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="305" y="52" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">z⁻¹</text>

      <line x1="340" y1="45" x2="400" y2="45" stroke="#2563eb" stroke-width="3"/>
      <rect x="400" y="23" width="70" height="44" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="435" y="52" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">z⁻¹</text>

      <line x1="470" y1="45" x2="535" y2="45" stroke="#2563eb" stroke-width="3" stroke-dasharray="5,4"/>

      <!-- Multipliers b_k -->
      <line x1="110" y1="45" x2="110" y2="108" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="110" cy="128" r="20" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="110" y="135" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">b0</text>

      <line x1="240" y1="45" x2="240" y2="108" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="240" cy="128" r="20" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="240" y="135" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">b1</text>

      <line x1="370" y1="45" x2="370" y2="108" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="370" cy="128" r="20" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="370" y="135" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">b2</text>

      <line x1="510" y1="45" x2="510" y2="108" stroke="#2563eb" stroke-width="2.5"/>
      <circle cx="510" cy="128" r="20" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="510" y="135" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">bM</text>

      <!-- Summation line -->
      <line x1="110" y1="148" x2="110" y2="198" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="240" y1="148" x2="240" y2="198" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="370" y1="148" x2="370" y2="198" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="510" y1="148" x2="510" y2="198" stroke="#2563eb" stroke-width="2.5"/>
      <line x1="110" y1="198" x2="570" y2="198" stroke="#2563eb" stroke-width="3"/>
      <polygon points="570,198 558,191 558,205" fill="#2563eb"/>
      <text x="582" y="205" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">y[n]</text>
    </g>

    <!-- Characteristics Cards -->
    <g transform="translate(25, 342)">
      <rect width="695" height="114" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">Architectural Stability Guarantee:</text>
      <text x="20" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Unconditionally Stable: all poles fixed at z = 0</text>
      <text x="20" y="98" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Zero feedback path; cannot oscillate or diverge</text>

      <rect y="130" width="695" height="114" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="164" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0369a1">Linear Phase Property:</text>
      <text x="20" y="198" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Constant Group Delay: symmetric taps (bk = b_{M-k})</text>
      <text x="20" y="228" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Zero waveform phase distortion across passband</text>

      <rect y="260" width="695" height="114" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="294" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b45309">Design &amp; Computational Tradeoff:</text>
      <text x="20" y="328" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Higher filter order (M &gt; 50) for sharp cutoffs</text>
      <text x="20" y="358" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Hanning / Blackman windows or Remez design</text>
    </g>
  </g>

  <!-- Right: IIR Filter Architecture -->
  <g transform="translate(820, 125)">
    <rect width="745" height="735" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b45309">
      IIR: Infinite Impulse Response (Recursive Feedback)
    </text>

    <!-- Signal Flow Diagram -->
    <g transform="translate(25, 72)">
      <rect width="695" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">x[n]</text>

      <!-- Forward and Feedback loops -->
      <line x1="78" y1="47" x2="185" y2="47" stroke="#d97706" stroke-width="3"/>
      <circle cx="205" cy="47" r="20" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <text x="205" y="55" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b45309" text-anchor="middle">+</text>

      <line x1="225" y1="47" x2="315" y2="47" stroke="#d97706" stroke-width="3"/>
      <rect x="315" y="25" width="76" height="44" rx="6" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
      <text x="353" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">z⁻¹</text>

      <line x1="391" y1="47" x2="545" y2="47" stroke="#d97706" stroke-width="3"/>
      <polygon points="545,47 533,40 533,54" fill="#d97706"/>
      <text x="560" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b45309">y[n] Output</text>

      <!-- Feedback Branch -->
      <path d="M 470 47 L 470 148 L 391 148" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <rect x="315" y="126" width="76" height="44" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="353" y="155" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">-a1</text>
      <path d="M 315 148 L 205 148 L 205 67" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <polygon points="205,67 198,79 212,79" fill="#dc2626"/>
      <text x="347" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c" text-anchor="middle">Recursive Feedback Loop</text>
    </g>

    <!-- Characteristics Cards -->
    <g transform="translate(25, 342)">
      <rect width="695" height="114" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">Computational Efficiency Advantage:</text>
      <text x="20" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Sharp cutoff transitions with low orders (N = 4–8)</text>
      <text x="20" y="98" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Prototypes: Butterworth, Chebyshev &amp; Elliptic</text>

      <rect y="130" width="695" height="114" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="164" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c">Critical Stability Risk:</text>
      <text x="20" y="198" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Quantization can shift poles to unit circle (|z| ≥ 1)</text>
      <text x="20" y="228" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Use second-order sections (biquads) for stability</text>

      <rect y="260" width="695" height="114" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="294" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b45309">Phase Characteristics:</text>
      <text x="20" y="328" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Non-Linear Phase: group delay alters pulse shape</text>
      <text x="20" y="358" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Best when magnitude roll-off outweighs phase</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.5: Fourier Transform · Time Waveform to Orthogonal Spectrum
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.5
  </text>

  <!-- Left: Time-Domain Composite Waveform -->
  <g transform="translate(35, 125)">
    <rect width="745" height="445" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      A. Time-Domain Composite Multi-Frequency Signal
    </text>

    <g transform="translate(25, 72)">
      <rect width="695" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="25" y1="120" x2="670" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="25" y1="20" x2="25" y2="215" stroke="#94a3b8" stroke-width="1.5"/>

      <!-- Composite Waveform -->
      <path d="M 25 120 C 65 20, 105 220, 160 65 C 200 -5, 240 185, 295 120 C 345 55, 385 235, 440 95 C 490 10, 535 205, 585 120 C 625 65, 650 155, 670 120" 
            fill="none" stroke="#2563eb" stroke-width="3.5"/>
      <text x="675" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="end">Composite Wave</text>
      <text x="347" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">Superposition: 50 Hz Fundamental + 150 &amp; 250 Hz Harmonics</text>
    </g>

    <!-- Bottom Metric Card -->
    <g transform="translate(25, 338)">
      <rect width="695" height="88" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Time Domain Limitation:</text>
      <text x="20" y="66" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e40af">Hard to isolate individual harmonic peaks by visual inspection</text>
    </g>
  </g>

  <!-- Right: Frequency-Domain Spectral Bins -->
  <g transform="translate(820, 125)">
    <rect width="745" height="445" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#15803d">
      B. Frequency-Domain Orthogonal Line Spectrum
    </text>

    <g transform="translate(25, 72)">
      <rect width="695" height="250" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="60" y1="196" x2="670" y2="196" stroke="#0f172a" stroke-width="2"/>
      <line x1="60" y1="25" x2="60" y2="196" stroke="#0f172a" stroke-width="2"/>
      <text x="670" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="end">Freq (Hz)</text>
      <text x="74" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">|X(f)|</text>

      <!-- Harmonic 1: 50 Hz -->
      <line x1="175" y1="196" x2="175" y2="62" stroke="#2563eb" stroke-width="4.5"/>
      <circle cx="175" cy="62" r="6.5" fill="#2563eb"/>
      <text x="175" y="228" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">50 Hz</text>
      <text x="175" y="44" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">A1 (1.00)</text>

      <!-- Harmonic 2: 150 Hz -->
      <line x1="340" y1="196" x2="340" y2="112" stroke="#059669" stroke-width="4.5"/>
      <circle cx="340" cy="112" r="6.5" fill="#059669"/>
      <text x="340" y="228" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">150 Hz</text>
      <text x="340" y="94" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">A2 (0.50)</text>

      <!-- Harmonic 3: 250 Hz -->
      <line x1="505" y1="196" x2="505" y2="152" stroke="#d97706" stroke-width="4.5"/>
      <circle cx="505" cy="152" r="6.5" fill="#d97706"/>
      <text x="505" y="228" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">250 Hz</text>
      <text x="505" y="134" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">A3 (0.25)</text>
    </g>

    <!-- Bottom Metric Card -->
    <g transform="translate(25, 338)">
      <rect width="695" height="88" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Spectral Transformation Benefit:</text>
      <text x="20" y="66" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">Unbundles entangled wave into distinct orthogonal spikes</text>
    </g>
  </g>

  <!-- Lower Panel: Forward Analysis vs Inverse Synthesis -->
  <g transform="translate(35, 590)">
    <rect width="1530" height="270" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="40" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="700" fill="#0f172a">
      Continuous Fourier Transform (CTFT) Analysis &amp; Synthesis Principles
    </text>

    <!-- Analysis Card -->
    <g transform="translate(30, 60)">
      <rect width="720" height="190" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af">
        1. Forward Fourier Analysis (Time → Frequency)
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">
        Decomposes x(t) onto complex exponential basis functions
      </text>
      <text x="25" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">
        • Magnitude |X(f)| reveals harmonic power &amp; amplitudes
      </text>
      <text x="25" y="140" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">
        • Phase ∠X(f) preserves relative timing &amp; wave shape
      </text>
      <text x="25" y="174" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">
        Mapping: Frequency Domain Spectral Decomposition
      </text>
    </g>

    <!-- Synthesis Card -->
    <g transform="translate(780, 60)">
      <rect width="720" height="190" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">
        2. Inverse Fourier Synthesis (Frequency → Time)
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">
        Reconstructs time waveform by summing all sinusoids
      </text>
      <text x="25" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">
        • Exact recovery when Nyquist bandwidth is preserved
      </text>
      <text x="25" y="140" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">
        • Core basis for audio synthesis &amp; inverse filtering
      </text>
      <text x="25" y="174" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">
        Mapping: Time Domain Waveform Reconstruction
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.6: Discrete Fourier Transform · Leakage &amp; Windowing
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.6
  </text>

  <!-- Left: Rectangular Window with Severe Leakage -->
  <g transform="translate(35, 125)">
    <rect width="745" height="450" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b91c1c">
      A. Rectangular Window → High Spectral Leakage
    </text>

    <g transform="translate(25, 72)">
      <rect width="695" height="248" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="30" y1="205" x2="665" y2="205" stroke="#0f172a" stroke-width="2"/>
      
      <!-- Sinc response with high side lobes -->
      <path d="M 60 205 Q 125 182, 190 205 Q 250 155, 292 205 L 347 48 L 402 205 Q 445 155, 505 205 Q 570 182, 635 205" 
            fill="none" stroke="#dc2626" stroke-width="3.5"/>
      <text x="347" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c" text-anchor="middle">Central Peak at f0</text>
      <text x="260" y="135" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="end">Side-Lobe: -13 dB</text>
      <text x="435" y="135" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">Severe Spread</text>
    </g>

    <!-- Bottom Specs Card -->
    <g transform="translate(25, 334)">
      <rect width="695" height="98" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="30" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c">Rectangular Window Limitations:</text>
      <text x="20" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Abrupt boundary truncation adds edge discontinuities</text>
      <text x="20" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Up to 3.92 dB scalloping loss leaks across adjacent bins</text>
    </g>
  </g>

  <!-- Right: Hanning Window with Clean Sidelobe Suppression -->
  <g transform="translate(820, 125)">
    <rect width="745" height="450" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#15803d">
      B. Hanning Window → Side-Lobe Suppression
    </text>

    <g transform="translate(25, 72)">
      <rect width="695" height="248" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="30" y1="205" x2="665" y2="205" stroke="#0f172a" stroke-width="2"/>
      
      <!-- Suppressed Sidelobes response -->
      <path d="M 60 205 L 240 205 Q 290 202, 315 192 L 347 48 L 380 192 Q 405 202, 455 205 L 635 205" 
            fill="none" stroke="#059669" stroke-width="3.5"/>
      <text x="347" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d" text-anchor="middle">Clean Main Lobe</text>
      <text x="670" y="168" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="end">Side-Lobe: -32 dB (Suppressed)</text>
    </g>

    <!-- Bottom Specs Card -->
    <g transform="translate(25, 334)">
      <rect width="695" height="98" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="30" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">Hanning Window Advantages:</text>
      <text x="20" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Smooth cosine taper eliminates boundary edge shock</text>
      <text x="20" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Weak nearby harmonics emerge clearly (-32 dB lobes)</text>
    </g>
  </g>

  <!-- Lower Panel: Resolution Metrics & Trade-Offs -->
  <g transform="translate(35, 595)">
    <rect width="1530" height="265" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="700" fill="#0f172a">
      DFT Spectral Bin Resolution &amp; Window Selection Guidelines
    </text>

    <!-- Metric Card 1 -->
    <g transform="translate(30, 56)">
      <rect width="474" height="190" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af">Frequency Bin Resolution (Δf)</text>
      <text x="20" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Δf = fs / N = 1 / T_record</text>
      <text x="20" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Longer T_record sharpens Δf</text>
      <text x="20" y="148" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">Zero-padding only interpolates plot</text>
    </g>

    <!-- Metric Card 2 -->
    <g transform="translate(528, 56)">
      <rect width="474" height="190" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">Hanning vs. Flat-Top</text>
      <text x="20" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Hanning: sharp frequency resolution</text>
      <text x="20" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">  separates close vibration peaks</text>
      <text x="20" y="148" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">• Flat-Top: &lt; 0.01 dB amplitude error</text>
    </g>

    <!-- Metric Card 3 -->
    <g transform="translate(1026, 56)">
      <rect width="474" height="190" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9">Window Selection Rules</text>
      <text x="20" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Continuous Vibration: Hanning</text>
      <text x="20" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Impact Shocks: Rectangular</text>
      <text x="20" y="148" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">• Acoustic Calibration: Flat-Top</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.7: Fast Fourier Transform (FFT) · Radix-2 Butterfly &amp; Speedup
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.7
  </text>

  <!-- Left: Butterfly Computational Unit Diagram -->
  <g transform="translate(35, 125)">
    <rect width="745" height="450" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#6d28d9">
      Fundamental 2-Point Butterfly Computational Unit
    </text>

    <!-- Butterfly Diagram -->
    <g transform="translate(25, 72)">
      <rect width="695" height="248" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      
      <!-- Inputs -->
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="800" fill="#0f172a">Node A</text>
      <text x="25" y="180" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="800" fill="#0f172a">Node B</text>

      <!-- Twiddle multiplier -->
      <line x1="120" y1="173" x2="215" y2="173" stroke="#7c3aed" stroke-width="3"/>
      <circle cx="245" cy="173" r="30" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>
      <text x="245" y="180" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">WN^k</text>

      <!-- Crossing Lines -->
      <line x1="120" y1="67" x2="430" y2="67" stroke="#2563eb" stroke-width="3"/>
      <line x1="275" y1="173" x2="430" y2="67" stroke="#059669" stroke-width="3"/>

      <line x1="120" y1="67" x2="430" y2="173" stroke="#2563eb" stroke-width="3"/>
      <line x1="275" y1="173" x2="430" y2="173" stroke="#dc2626" stroke-width="3"/>
      <text x="350" y="158" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#b91c1c" text-anchor="middle">-1</text>

      <!-- Outputs -->
      <circle cx="430" cy="67" r="18" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
      <text x="430" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="middle">+</text>
      <text x="462" y="75" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">X = A + B · WN^k</text>

      <circle cx="430" cy="173" r="18" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
      <text x="430" y="180" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c" text-anchor="middle">+</text>
      <text x="462" y="181" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b91c1c">Y = A - B · WN^k</text>
    </g>

    <!-- Butterfly Specs -->
    <g transform="translate(25, 334)">
      <rect width="695" height="98" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="30" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9">Butterfly Algorithmic Features:</text>
      <text x="20" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• In-Place Memory: X &amp; Y overwrite A &amp; B registers</text>
      <text x="20" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Twiddle symmetry eliminates redundant trig operations</text>
    </g>
  </g>

  <!-- Right: Algorithmic Complexity Comparison Table -->
  <g transform="translate(820, 125)">
    <rect width="745" height="450" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#15803d">
      Benchmark: Direct DFT O(N²) vs. Radix-2 FFT
    </text>

    <!-- Table of values -->
    <g transform="translate(25, 72)">
      <rect width="695" height="248" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      
      <!-- Table Header -->
      <rect x="0" y="0" width="695" height="44" rx="8" fill="#e2e8f0"/>
      <text x="25" y="29" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Size N</text>
      <text x="155" y="29" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">Direct DFT (N²)</text>
      <text x="385" y="29" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Radix-2 FFT</text>
      <text x="670" y="29" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="end">Speedup</text>

      <!-- Row 1 -->
      <line x1="0" y1="44" x2="695" y2="44" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="79" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">64</text>
      <text x="155" y="79" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#b91c1c">4,096 ops</text>
      <text x="385" y="79" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">384 ops</text>
      <text x="670" y="79" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e40af" text-anchor="end">10.7×</text>

      <!-- Row 2 -->
      <line x1="0" y1="95" x2="695" y2="95" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="130" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">256</text>
      <text x="155" y="130" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#b91c1c">65,536 ops</text>
      <text x="385" y="130" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">2,048 ops</text>
      <text x="670" y="130" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e40af" text-anchor="end">32.0×</text>

      <!-- Row 3 -->
      <line x1="0" y1="146" x2="695" y2="146" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="181" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">1,024</text>
      <text x="155" y="181" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#b91c1c">1,048,576 ops</text>
      <text x="385" y="181" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">10,240 ops</text>
      <text x="670" y="181" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e40af" text-anchor="end">102.4×</text>

      <!-- Row 4 -->
      <line x1="0" y1="197" x2="695" y2="197" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">4,096</text>
      <text x="155" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#b91c1c">16,777,216 ops</text>
      <text x="385" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">49,152 ops</text>
      <text x="670" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e40af" text-anchor="end">341.3×</text>
    </g>

    <!-- Table Specs -->
    <g transform="translate(25, 334)">
      <rect width="695" height="98" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="30" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">Real-World DAQ Impact:</text>
      <text x="20" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Turns N² burden into sub-millisecond MCU execution</text>
      <text x="20" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Powers live 48 kHz audio &amp; vibration order tracking</text>
    </g>
  </g>

  <!-- Lower Panel: Decimation-in-Time Architecture -->
  <g transform="translate(35, 595)">
    <rect width="1530" height="265" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="700" fill="#0f172a">
      Divide-and-Conquer Decimation-in-Time (DIT) Strategy
    </text>

    <g transform="translate(30, 56)">
      <rect width="720" height="190" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af">
        1. Recursive Sub-Sequence Splitting
      </text>
      <text x="25" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">
        Splits N-point array recursively into even &amp; odd halves
      </text>
      <text x="25" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">
        • Halves sequence down to 2-point butterfly blocks
      </text>
      <text x="25" y="148" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">
        Log2(N) stages, each running N/2 parallel butterflies
      </text>
    </g>

    <g transform="translate(780, 56)">
      <rect width="720" height="190" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">
        2. Bit-Reversal Input Ordering
      </text>
      <text x="25" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">
        Pre-sorts inputs via bit-reversal; outputs emerge ordered
      </text>
      <text x="25" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">
        • Hardware DSP address registers sort with zero delay
      </text>
      <text x="25" y="148" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">
        Standard across ARM Cortex, TI C2000 &amp; FPGA cores
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
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
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.8: Data Presentation · Joint Time-Frequency STFT Spectrogram
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.9
  </text>

  <!-- Left: STFT Spectrogram Heatmap -->
  <g transform="translate(35, 125)">
    <rect width="880" height="740" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="880" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      2D Spectrogram: Joint Time-Frequency Heatmap
    </text>

    <!-- Spectrogram Canvas Area -->
    <g transform="translate(30, 76)">
      <rect width="820" height="370" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      
      <!-- Grid -->
      <line x1="100" y1="315" x2="790" y2="315" stroke="#64748b" stroke-width="2"/>
      <line x1="100" y1="35" x2="100" y2="315" stroke="#64748b" stroke-width="2"/>

      <!-- Frequency Chirp Trajectory with heat gradient -->
      <path d="M 120 290 C 250 280, 380 210, 520 130 C 620 80, 700 55, 765 45" 
            fill="none" stroke="url(#spectroGrad)" stroke-width="16" stroke-linecap="round" opacity="0.92"/>

      <!-- Second tone at fixed 1 kHz -->
      <line x1="230" y1="185" x2="765" y2="185" stroke="#eab308" stroke-width="8" stroke-linecap="round" opacity="0.88"/>
      <text x="765" y="220" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#fde047" text-anchor="end">Constant 1 kHz Tone</text>
      <text x="615" y="45" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#fca5a5" text-anchor="end">Chirp Tone (Run-Up)</text>

      <!-- Axis Labels -->
      <text x="445" y="352" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#e2e8f0" text-anchor="middle">Time Elapsed (t) →</text>
      <text x="50" y="175" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#e2e8f0" transform="rotate(-90 50 175)" text-anchor="middle">Frequency (f) →</text>
    </g>

    <!-- Lower Explanation Cards -->
    <g transform="translate(30, 466)">
      <rect width="820" height="118" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">Sliding Window Transduction Principle:</text>
      <text x="25" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Window localizes short time slices before computing FFT</text>
      <text x="25" y="98" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Tracks frequency chirps, run-ups, and transient bursts</text>

      <rect y="136" width="820" height="118" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="170" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#15803d">Industrial Application Value:</text>
      <text x="25" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Bearing fault harmonics &amp; rotor gear-mesh diagnostics</text>
      <text x="25" y="234" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Speech analysis, seismic shocks, and sonar tracking</text>
    </g>
  </g>

  <!-- Right: Heisenberg-Gabor Uncertainty Tradeoff -->
  <g transform="translate(935, 125)">
    <rect width="630" height="740" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="630" height="54" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b45309">
      Heisenberg-Gabor Uncertainty Limit
    </text>

    <!-- Fundamental Limit Card -->
    <g transform="translate(25, 76)">
      <rect width="580" height="258" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b91c1c">Fundamental Resolution Bound:</text>
      
      <rect x="25" y="54" width="530" height="68" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
      <text x="290" y="98" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="800" fill="#991b1b" text-anchor="middle">
        Δt · Δf ≥ 1 / (4π)
      </text>

      <text x="25" y="156" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Cannot maximize time &amp; Δf together</text>
      <text x="25" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Narrow Window: sharp time, coarse Δf</text>
      <text x="25" y="224" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Wide Window: fine Δf, blurred timing</text>
    </g>

    <!-- Presentation Best Practices -->
    <g transform="translate(25, 354)">
      <text x="0" y="26" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#15803d">
        Engineering Presentation Best Practices:
      </text>

      <rect x="0" y="42" width="580" height="322" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      
      <text x="22" y="78" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0369a1">1. Logarithmic Decibel Scaling (dB):</text>
      <text x="22" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Compresses range; reveals weak harmonics</text>

      <text x="22" y="156" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">2. Power Spectral Density (PSD):</text>
      <text x="22" y="186" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Normalizes bin width across durations</text>

      <text x="22" y="234" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9">3. Proper Physical Axis Units:</text>
      <text x="22" y="266" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Map bin k to Hertz: f = k · fs / N</text>
      <text x="22" y="296" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• State window type and rate fs</text>
      <text x="22" y="334" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Ensures reproducible engineering plots</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.3A: Modern Data Acquisition (DAQ) Architecture · Dewesoft Model
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.3
  </text>

  <!-- 4 Main Pillar Columns (4 x 360 + 3 x 30 = 1530) -->
  <g transform="translate(35, 125)">
    <!-- Column 1: Physical World & Sensors -->
    <g transform="translate(0, 0)">
      <rect width="360" height="515" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="360" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="180" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="middle">1. Physical Sensors</text>

      <g transform="translate(16, 70)">
        <text x="4" y="22" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Transducer Categories:</text>
        
        <rect x="0" y="36" width="328" height="46" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="66" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Temp (TC, RTD, NTC)</text>

        <rect x="0" y="92" width="328" height="46" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Vibration (IEPE / ICP)</text>

        <rect x="0" y="148" width="328" height="46" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="178" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Strain (Bridge Cells)</text>

        <rect x="0" y="204" width="328" height="46" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="234" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Pressure &amp; Acoustic Mics</text>

        <rect x="0" y="260" width="328" height="46" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="290" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• High Voltage &amp; Current</text>

        <rect x="0" y="322" width="328" height="100" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
        <text x="164" y="358" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="middle">Physical Raw Outputs</text>
        <text x="164" y="394" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">μV · mV · pC · Ohms</text>
      </g>
    </g>

    <!-- Arrow 1 -> 2 -->
    <line x1="360" y1="258" x2="390" y2="258" stroke="#2563eb" stroke-width="3.5"/>
    <polygon points="390,258 378,251 378,265" fill="#2563eb"/>

    <!-- Column 2: Advanced Signal Conditioning -->
    <g transform="translate(390, 0)">
      <rect width="360" height="515" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="360" height="54" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="180" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b45309" text-anchor="middle">2. Signal Conditioning</text>

      <g transform="translate(16, 70)">
        <rect x="0" y="0" width="328" height="76" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="30" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">Galvanic Isolation (&gt;1 kV)</text>
        <text x="14" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Breaks ground-loop hum</text>

        <rect x="0" y="86" width="328" height="76" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="116" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">Sensor Excitation</text>
        <text x="14" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">IEPE 4mA · Bridge 5V/10V</text>

        <rect x="0" y="172" width="328" height="76" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="202" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">Diff. Pre-Amp (INA)</text>
        <text x="14" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">CMRR &gt;110 dB · Prog Gain</text>

        <rect x="0" y="258" width="328" height="98" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1.2"/>
        <text x="14" y="288" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">Anti-Aliasing (AA-LPF)</text>
        <text x="14" y="316" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#991b1b">Cutoff fc ≤ fs / 2</text>
        <text x="14" y="344" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#7f1d1d">Hardware filter pre-ADC</text>

        <rect x="0" y="368" width="328" height="54" rx="6" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
        <text x="164" y="402" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b45309" text-anchor="middle">Output Span: ±10 V</text>
      </g>
    </g>

    <!-- Arrow 2 -> 3 -->
    <line x1="750" y1="258" x2="780" y2="258" stroke="#d97706" stroke-width="3.5"/>
    <polygon points="780,258 768,251 768,265" fill="#d97706"/>

    <!-- Column 3: ADC Digitization Engine -->
    <g transform="translate(780, 0)">
      <rect width="360" height="515" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="360" height="54" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="180" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d" text-anchor="middle">3. A/D Converter (ADC)</text>

      <g transform="translate(16, 70)">
        <rect x="0" y="0" width="328" height="76" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="30" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Sample &amp; Hold (S/H)</text>
        <text x="14" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Clock fs · jitter &lt; 10 ps</text>

        <rect x="0" y="86" width="328" height="106" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="116" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">24-Bit Sigma-Delta (ΣΔ)</text>
        <text x="14" y="146" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Oversample + decimation</text>
        <text x="14" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">DualCoreADC: &gt;160 dB</text>

        <rect x="0" y="202" width="328" height="76" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Multi-Channel Sync</text>
        <text x="14" y="262" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Zero inter-channel skew</text>

        <rect x="0" y="290" width="328" height="132" rx="8" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
        <text x="164" y="324" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#166534" text-anchor="middle">Quantization Depth</text>
        <text x="164" y="362" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Step: 1.19 μV (24-bit)</text>
        <text x="164" y="396" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Stream: 24-bit Words</text>
      </g>
    </g>

    <!-- Arrow 3 -> 4 -->
    <line x1="1140" y1="258" x2="1170" y2="258" stroke="#059669" stroke-width="3.5"/>
    <polygon points="1170,258 1158,251 1158,265" fill="#059669"/>

    <!-- Column 4: DAQ Software & DSP Processor -->
    <g transform="translate(1170, 0)">
      <rect width="360" height="515" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="360" height="54" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <text x="180" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9" text-anchor="middle">4. DAQ Software &amp; DSP</text>

      <g transform="translate(16, 70)">
        <rect x="0" y="0" width="328" height="68" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="28" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">Time-Domain Scope</text>
        <text x="14" y="56" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Lossless raw logging</text>

        <rect x="0" y="76" width="328" height="68" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">Real-Time FFT Analyzer</text>
        <text x="14" y="132" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Radix-2 FFT spectrum</text>

        <rect x="0" y="152" width="328" height="68" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="180" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">Digital Filters (FIR/IIR)</text>
        <text x="14" y="208" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">HPF, BPF &amp; notch filters</text>

        <rect x="0" y="228" width="328" height="68" rx="6" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="14" y="256" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">STFT Spectrogram</text>
        <text x="14" y="284" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Time-freq waterfall view</text>

        <rect x="0" y="306" width="328" height="116" rx="8" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
        <text x="164" y="340" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9" text-anchor="middle">Order Tracking &amp; HMI</text>
        <text x="164" y="372" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#5b21b6" text-anchor="middle">RPM-Sync Vibration</text>
        <text x="164" y="402" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">SCADA &amp; Alarm Outputs</text>
      </g>
    </g>
  </g>

  <!-- Lower Engineering Principles Banner -->
  <g transform="translate(35, 660)">
    <rect width="1530" height="200" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="700" fill="#0f172a">
      Three Non-Negotiable Engineering Principles for Modern DAQ Systems
    </text>

    <g transform="translate(30, 58)">
      <rect width="474" height="122" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af">1. Galvanic Isolation Is Mandatory</text>
      <text x="20" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Isolation (&gt;1 kV) stops ground loops</text>
      <text x="20" y="98" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Eliminates 50 Hz mains interference</text>
    </g>

    <g transform="translate(528, 58)">
      <rect width="474" height="122" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b45309">2. Hardware Anti-Aliasing (AA-LPF)</text>
      <text x="20" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Filter strictly before ADC sampling</text>
      <text x="20" y="98" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Software cannot fix folded aliases</text>
    </g>

    <g transform="translate(1026, 58)">
      <rect width="474" height="122" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">3. Dynamic Range &amp; Bit Depth</text>
      <text x="20" y="68" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Dual 24-bit ADCs yield &gt;160 dB</text>
      <text x="20" y="98" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Captures μV ripples &amp; large shocks</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="42" width="1530" height="68" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="60" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="27" font-weight="700" fill="#0f172a">
    Figure 2.3B: Universal Sensor Conditioning Circuit Topologies
  </text>
  <text x="1540" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#2563eb" text-anchor="end">
    Unit II · Section 2.3
  </text>

  <!-- 4 Circuit Quadrants (2 x 745 + 40 = 1530) -->
  <g transform="translate(35, 130)">
    <!-- Quadrant 1: Strain Gauge Bridge Conditioning -->
    <g transform="translate(0, 0)">
      <rect width="745" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="745" height="52" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="24" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
        A. Strain Gauge &amp; Bridge Sensors (Load, Torque)
      </text>

      <g transform="translate(20, 70)">
        <rect width="245" height="265" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="122" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Wheatstone Bridge</text>
        <line x1="122" y1="58" x2="62" y2="115" stroke="#2563eb" stroke-width="3"/>
        <line x1="122" y1="58" x2="182" y2="115" stroke="#2563eb" stroke-width="3"/>
        <line x1="62" y1="115" x2="122" y2="172" stroke="#2563eb" stroke-width="3"/>
        <line x1="182" y1="115" x2="122" y2="172" stroke="#2563eb" stroke-width="3"/>
        <circle cx="122" cy="58" r="6" fill="#2563eb"/>
        <circle cx="122" cy="172" r="6" fill="#2563eb"/>
        <text x="122" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Excitation:</text>
        <text x="122" y="242" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e40af" text-anchor="middle">2.5V / 5V / 10V</text>
      </g>

      <g transform="translate(285, 76)">
        <text x="0" y="22" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Conditioning Architecture:</text>
        <text x="0" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Quarter, Half &amp; Full Bridge</text>
        <text x="0" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Precision V_exc + sense leads</text>
        <text x="0" y="144" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Shunt cal resistor for span</text>
        <text x="0" y="184" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• High-gain INA (100–1000×)</text>
        <text x="0" y="236" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">Span: ±1 to ±10 mV/V</text>
      </g>
    </g>

    <!-- Quadrant 2: IEPE / ICP Accelerometers -->
    <g transform="translate(785, 0)">
      <rect width="745" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="745" height="52" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="24" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#15803d">
        B. IEPE / ICP Accelerometers &amp; Microphones
      </text>

      <g transform="translate(20, 70)">
        <rect width="245" height="265" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="122" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Current Source</text>
        <circle cx="122" cy="115" r="34" fill="#ffffff" stroke="#059669" stroke-width="2.5"/>
        <text x="122" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857" text-anchor="middle">4 mA</text>
        <line x1="122" y1="81" x2="122" y2="56" stroke="#059669" stroke-width="3"/>
        <line x1="122" y1="149" x2="122" y2="176" stroke="#059669" stroke-width="3"/>
        <text x="122" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#166534" text-anchor="middle">24 VDC Supply</text>
        <text x="122" y="242" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d" text-anchor="middle">Compliance</text>
      </g>

      <g transform="translate(285, 76)">
        <text x="0" y="22" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Conditioning Architecture:</text>
        <text x="0" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Constant current (2–20 mA)</text>
        <text x="0" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• AC cap strips 8–12 V bias</text>
        <text x="0" y="144" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• High Z_in prevents loading</text>
        <text x="0" y="184" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• TEDS (IEEE 1451.4) auto-ID</text>
        <text x="0" y="236" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Span: ±5 V pk (100 mV/g)</text>
      </g>
    </g>

    <!-- Quadrant 3: Thermocouple & RTD Temperature -->
    <g transform="translate(0, 375)">
      <rect width="745" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="745" height="52" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="24" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b45309">
        C. Thermocouple &amp; RTD Temperature Front-End
      </text>

      <g transform="translate(20, 70)">
        <rect width="245" height="265" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="122" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Cold Junction</text>
        <rect x="26" y="76" width="193" height="72" rx="6" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
        <text x="122" y="119" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">Isothermal Block</text>
        <text x="122" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Pt1000 CJC</text>
        <text x="122" y="242" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">Reference</text>
      </g>

      <g transform="translate(285, 76)">
        <text x="0" y="22" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Conditioning Architecture:</text>
        <text x="0" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Cold Junction Comp. (CJC)</text>
        <text x="0" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Isolation (&gt; 1,000 V rated)</text>
        <text x="0" y="144" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Open-TC burnout detection</text>
        <text x="0" y="184" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Polynomial linearization</text>
        <text x="0" y="236" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">Span: ±10 mV to ±100 mV</text>
      </g>
    </g>

    <!-- Quadrant 4: High Voltage & Current -->
    <g transform="translate(785, 375)">
      <rect width="745" height="355" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="745" height="52" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <text x="24" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#6d28d9">
        D. High Voltage, Current &amp; Power Front-End
      </text>

      <g transform="translate(20, 70)">
        <rect width="245" height="265" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="122" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">CAT IV Barrier</text>
        <line x1="42" y1="115" x2="94" y2="115" stroke="#7c3aed" stroke-width="3"/>
        <line x1="94" y1="80" x2="94" y2="150" stroke="#7c3aed" stroke-width="4"/>
        <line x1="150" y1="80" x2="150" y2="150" stroke="#7c3aed" stroke-width="4"/>
        <line x1="150" y1="115" x2="202" y2="115" stroke="#7c3aed" stroke-width="3"/>
        <text x="122" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">1000 V CAT III</text>
        <text x="122" y="242" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#6d28d9" text-anchor="middle">&amp; CAT IV Rated</text>
      </g>

      <g transform="translate(285, 76)">
        <text x="0" y="22" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Conditioning Architecture:</text>
        <text x="0" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Compensated HV divider</text>
        <text x="0" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Hall effect &amp; Rogowski coil</text>
        <text x="0" y="144" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Ch-to-Ch &amp; GND isolation</text>
        <text x="0" y="184" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• High BW for PWM inverters</text>
        <text x="0" y="236" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">Span: ±1000 V / ±1000 A</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="42" width="1530" height="68" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="60" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="27" font-weight="700" fill="#0f172a">
    Figure 2.2B: ADC Bit Depth · 8-Bit vs 12-Bit vs 16-Bit vs 24-Bit
  </text>
  <text x="1540" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#2563eb" text-anchor="end">
    Unit II · Section 2.2
  </text>

  <!-- 4 Bit-Depth Panels (4 x 364 + 3 x 24 = 1528) -->
  <g transform="translate(36, 130)">
    <!-- 8-Bit Panel -->
    <g transform="translate(0, 0)">
      <rect width="364" height="505" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="364" height="52" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
      <text x="182" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c" text-anchor="middle">8-Bit ADC (Legacy)</text>

      <g transform="translate(18, 68)">
        <rect width="328" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="20" y1="80" x2="308" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M 20 80 L 52 80 L 52 34 L 116 34 L 116 18 L 170 18 L 170 34 L 212 34 L 212 80 L 244 80 L 244 126 L 280 126 L 280 80 L 308 80"
              fill="none" stroke="#dc2626" stroke-width="3.5"/>
        <text x="164" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Coarse Staircase</text>
      </g>

      <g transform="translate(18, 256)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">• Levels: 256 (2⁸)</text>
        <text x="0" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">• Step (±10V): 78.1 mV</text>
        <text x="0" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• SQNR: 49.9 dB</text>
        <text x="0" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Noise: σq = 22.5 mV</text>

        <rect x="0" y="142" width="328" height="88" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
        <text x="164" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#991b1b" text-anchor="middle">High Noise Floor</text>
        <text x="164" y="210" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#b91c1c" text-anchor="middle">Buried weak harmonics</text>
      </g>
    </g>

    <!-- 12-Bit Panel -->
    <g transform="translate(388, 0)">
      <rect width="364" height="505" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="364" height="52" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="182" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b45309" text-anchor="middle">12-Bit ADC (Lab)</text>

      <g transform="translate(18, 68)">
        <rect width="328" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="20" y1="80" x2="308" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M 20 80 Q 82 18, 164 18 T 308 80" fill="none" stroke="#d97706" stroke-width="3"/>
        <text x="164" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">Fine Discrete Steps</text>
      </g>

      <g transform="translate(18, 256)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">• Levels: 4,096 (2¹²)</text>
        <text x="0" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">• Step (±10V): 4.88 mV</text>
        <text x="0" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• SQNR: 74.0 dB</text>
        <text x="0" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Noise: σq = 1.41 mV</text>

        <rect x="0" y="142" width="328" height="88" rx="6" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
        <text x="164" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">Moderate Resolution</text>
        <text x="164" y="210" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#78350f" text-anchor="middle">Good for static DC</text>
      </g>
    </g>

    <!-- 16-Bit Panel -->
    <g transform="translate(776, 0)">
      <rect width="364" height="505" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="364" height="52" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="182" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="middle">16-Bit ADC (Test)</text>

      <g transform="translate(18, 68)">
        <rect width="328" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="20" y1="80" x2="308" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M 20 80 Q 82 18, 164 18 T 308 80" fill="none" stroke="#2563eb" stroke-width="3"/>
        <text x="164" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">Seamless Waveform</text>
      </g>

      <g transform="translate(18, 256)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">• Levels: 65,536 (2¹⁶)</text>
        <text x="0" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8">• Step (±10V): 305 μV</text>
        <text x="0" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• SQNR: 98.1 dB</text>
        <text x="0" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Noise: σq = 88.1 μV</text>

        <rect x="0" y="142" width="328" height="88" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
        <text x="164" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e40af" text-anchor="middle">High Precision</text>
        <text x="164" y="210" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a" text-anchor="middle">NVH &amp; acoustics std</text>
      </g>
    </g>

    <!-- 24-Bit Panel (Dewesoft Benchmark) -->
    <g transform="translate(1164, 0)">
      <rect width="364" height="505" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="364" height="52" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="182" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d" text-anchor="middle">24-Bit DualCore</text>

      <g transform="translate(18, 68)">
        <rect width="328" height="165" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <line x1="20" y1="80" x2="308" y2="80" stroke="#94a3b8" stroke-width="1.5"/>
        <path d="M 20 80 Q 82 18, 164 18 T 308 80" fill="none" stroke="#059669" stroke-width="3.5"/>
        <text x="164" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Analog Equivalence</text>
      </g>

      <g transform="translate(18, 256)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">• Levels: 16.7M (2²⁴)</text>
        <text x="0" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">• Step (±10V): 1.19 μV</text>
        <text x="0" y="88" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• SQNR: 146.2 dB</text>
        <text x="0" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Noise: σq = 0.34 μV</text>

        <rect x="0" y="142" width="328" height="88" rx="6" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
        <text x="164" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#166534" text-anchor="middle">&gt;160 dB Range</text>
        <text x="164" y="210" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#15803d" text-anchor="middle">No preamp ranging</text>
      </g>
    </g>
  </g>

  <!-- Lower Formulation Banner -->
  <g transform="translate(36, 652)">
    <rect width="1528" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="28" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="700" fill="#0f172a">
      Theoretical Quantization Performance Landmarks
    </text>

    <g transform="translate(28, 56)">
      <rect width="474" height="134" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af">Voltage Resolution Step (LSB)</text>
      <text x="20" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Smallest resolvable voltage step</text>
      <text x="20" y="92" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Full-scale span divided by 2^N</text>
      <text x="20" y="120" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">Halves per added bit of depth</text>
    </g>

    <g transform="translate(527, 56)">
      <rect width="474" height="134" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">RMS Quantization Noise Power</text>
      <text x="20" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">Uniform roundoff noise σq</text>
      <text x="20" y="92" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Error spread on [-ΔV/2, +ΔV/2]</text>
      <text x="20" y="120" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Sets theoretical noise floor</text>
    </g>

    <g transform="translate(1026, 56)">
      <rect width="474" height="134" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9">Dynamic Range Scaling Rule</text>
      <text x="20" y="64" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">+6.02 dB SQNR per Added Bit</text>
      <text x="20" y="92" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">16-bit: 98 dB · 24-bit: 146 dB</text>
      <text x="20" y="120" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">Measures μV without saturation</text>
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
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="42" width="1530" height="68" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="60" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="27" font-weight="700" fill="#0f172a">
    Figure 2.10: Case Study · Gas Turbine Vibration DAQ Pipeline &amp; Diagnostics
  </text>
  <text x="1540" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#2563eb" text-anchor="end">
    Unit II · Solved Case Study
  </text>

  <!-- Complete 6-Stage Pipeline Flowchart (6 x 240 + 5 x 18 = 1530) -->
  <g transform="translate(35, 130)">
    <!-- Stage 1: Machine & Sensor -->
    <g transform="translate(0, 0)">
      <rect width="240" height="350" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="240" height="50" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="120" y="33" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e40af" text-anchor="middle">1. Sensor</text>

      <g transform="translate(14, 68)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Turbine Rotor:</text>
        <text x="0" y="50" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• 12k RPM (200Hz)</text>
        <text x="0" y="80" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Blade: 1,000 Hz</text>
        <text x="0" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Cage: 2,400 Hz</text>
        <text x="0" y="140" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">• EMI: 25 kHz</text>

        <rect x="0" y="158" width="212" height="108" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        <text x="106" y="186" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">IEPE Sensor</text>
        <text x="106" y="216" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a" text-anchor="middle">Gain: 100 mV/g</text>
        <text x="106" y="246" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">Span: ±50g (±5V)</text>
      </g>
    </g>

    <!-- Arrow 1 -> 2 -->
    <line x1="240" y1="175" x2="258" y2="175" stroke="#2563eb" stroke-width="3"/>
    <polygon points="258,175 249,170 249,180" fill="#2563eb"/>

    <!-- Stage 2: Signal Conditioning & AA-LPF -->
    <g transform="translate(258, 0)">
      <rect width="240" height="350" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="240" height="50" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="120" y="33" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">2. Conditioning</text>

      <g transform="translate(14, 68)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Front-End:</text>
        <text x="0" y="50" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• 4 mA IEPE Bias</text>
        <text x="0" y="80" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• 0.5 Hz AC-Cpl</text>
        <text x="0" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• CMRR &gt; 100 dB</text>

        <rect x="0" y="132" width="212" height="134" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
        <text x="106" y="160" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b91c1c" text-anchor="middle">AA-LPF Filter</text>
        <text x="106" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#7f1d1d" text-anchor="middle">6th-Ord Butterw.</text>
        <text x="106" y="220" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">fc = 5.0 kHz</text>
        <text x="106" y="250" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#7f1d1d" text-anchor="middle">-84 dB @ 25 kHz</text>
      </g>
    </g>

    <!-- Arrow 2 -> 3 -->
    <line x1="498" y1="175" x2="516" y2="175" stroke="#d97706" stroke-width="3"/>
    <polygon points="516,175 507,170 507,180" fill="#d97706"/>

    <!-- Stage 3: Sampling & S/H -->
    <g transform="translate(516, 0)">
      <rect width="240" height="350" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="240" height="50" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
      <text x="120" y="33" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">3. S/H Sampling</text>

      <g transform="translate(14, 68)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Nyquist Plan:</text>
        <text x="0" y="50" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">• fs = 20 kS/s</text>
        <text x="0" y="80" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Ts = 50 μs</text>
        <text x="0" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#166534">• Nyq: 10 kHz</text>
        <text x="0" y="140" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Guard: 5–10kHz</text>

        <rect x="0" y="158" width="212" height="108" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        <text x="106" y="186" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Jitter Bound</text>
        <text x="106" y="216" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#166534" text-anchor="middle">ta &lt; 1.59 ns</text>
        <text x="106" y="246" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">16-Bit Fidelity</text>
      </g>
    </g>

    <!-- Arrow 3 -> 4 -->
    <line x1="756" y1="175" x2="774" y2="175" stroke="#15803d" stroke-width="3"/>
    <polygon points="774,175 765,170 765,180" fill="#15803d"/>

    <!-- Stage 4: ADC Quantization -->
    <g transform="translate(774, 0)">
      <rect width="240" height="350" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="240" height="50" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
      <text x="120" y="33" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">4. Quantizer</text>

      <g transform="translate(14, 68)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">16-Bit SAR:</text>
        <text x="0" y="50" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Span: ±10 V</text>
        <text x="0" y="80" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">• 65,536 Codes</text>
        <text x="0" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">• ΔV = 305.2 μV</text>

        <rect x="0" y="132" width="212" height="134" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        <text x="106" y="160" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">Noise Floor</text>
        <text x="106" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#78350f" text-anchor="middle">Min: 0.003 g</text>
        <text x="106" y="220" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#78350f" text-anchor="middle">SQNR: 98.1 dB</text>
        <text x="106" y="250" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">σq: 88.1 μV</text>
      </g>
    </g>

    <!-- Arrow 4 -> 5 -->
    <line x1="1014" y1="175" x2="1032" y2="175" stroke="#b45309" stroke-width="3"/>
    <polygon points="1032,175 1023,170 1023,180" fill="#b45309"/>

    <!-- Stage 5: DSP Buffer & Windowing -->
    <g transform="translate(1032, 0)">
      <rect width="240" height="350" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="240" height="50" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
      <text x="120" y="33" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9" text-anchor="middle">5. Windowing</text>

      <g transform="translate(14, 68)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">DSP Buffer:</text>
        <text x="0" y="50" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">• N = 4,096 Pts</text>
        <text x="0" y="80" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• T = 0.2048 s</text>
        <text x="0" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">• Δf = 4.88 Hz</text>

        <rect x="0" y="132" width="212" height="134" rx="6" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1"/>
        <text x="106" y="160" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">Hanning Win</text>
        <text x="106" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#4c1d95" text-anchor="middle">Smooth Taper</text>
        <text x="106" y="220" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">Lobes: -32 dB</text>
        <text x="106" y="250" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#4c1d95" text-anchor="middle">Low Leakage</text>
      </g>
    </g>

    <!-- Arrow 5 -> 6 -->
    <line x1="1272" y1="175" x2="1290" y2="175" stroke="#7c3aed" stroke-width="3"/>
    <polygon points="1290,175 1281,170 1281,180" fill="#7c3aed"/>

    <!-- Stage 6: FFT Spectral Analysis & Diagnostics -->
    <g transform="translate(1290, 0)">
      <rect width="240" height="350" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect width="240" height="50" rx="10" fill="#fee2e2" stroke="#fecaca" stroke-width="1"/>
      <text x="120" y="33" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b91c1c" text-anchor="middle">6. FFT Core</text>

      <g transform="translate(14, 68)">
        <text x="0" y="20" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Radix-2 FFT:</text>
        <text x="0" y="50" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• O(N log2 N)</text>
        <text x="0" y="80" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">• 49,152 MACs</text>
        <text x="0" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">• 341× Faster</text>

        <rect x="0" y="132" width="212" height="134" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
        <text x="106" y="160" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Diagnostics</text>
        <text x="106" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#7f1d1d" text-anchor="middle">2,048 Freq Bins</text>
        <text x="106" y="220" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Span: 0–10 kHz</text>
        <text x="106" y="250" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#7f1d1d" text-anchor="middle">Fault Alarms</text>
      </g>
    </g>
  </g>

  <!-- Lower Section: Solved Output Vibration Spectrum Plot -->
  <g transform="translate(35, 500)">
    <rect width="1530" height="360" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="700" fill="#0f172a">
      Solved Diagnostic Output: FFT Spectrum &amp; Automated Rotor Fault Identification
    </text>

    <!-- Spectrum Display Box -->
    <g transform="translate(30, 58)">
      <rect width="1470" height="282" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="95" y1="205" x2="1325" y2="205" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="95" y1="28" x2="95" y2="205" stroke="#0f172a" stroke-width="2.5"/>
      <text x="1340" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">f (Hz)</text>
      <text x="112" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">|X(f)| (g)</text>

      <!-- Grid lines -->
      <line x1="250" y1="45" x2="250" y2="205" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="510" y1="45" x2="510" y2="205" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="800" y1="45" x2="800" y2="205" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="1080" y1="45" x2="1080" y2="205" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>

      <!-- Peak 1: 1X Rotor Unbalance (200 Hz) -->
      <line x1="250" y1="205" x2="250" y2="62" stroke="#2563eb" stroke-width="5"/>
      <circle cx="250" cy="62" r="7" fill="#2563eb"/>
      <text x="250" y="46" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">1.25 g</text>
      <text x="250" y="238" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">200 Hz</text>
      <text x="250" y="264" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e40af" text-anchor="middle">1X Unbalance</text>

      <!-- Peak 2: 2X Shaft Misalignment (400 Hz) -->
      <line x1="510" y1="205" x2="510" y2="122" stroke="#d97706" stroke-width="5"/>
      <circle cx="510" cy="122" r="7" fill="#d97706"/>
      <text x="510" y="106" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">0.65 g</text>
      <text x="510" y="238" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">400 Hz</text>
      <text x="510" y="264" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#92400e" text-anchor="middle">2X Misalignment</text>

      <!-- Peak 3: Blade Pass Frequency (1,000 Hz) -->
      <line x1="800" y1="205" x2="800" y2="92" stroke="#059669" stroke-width="5"/>
      <circle cx="800" cy="92" r="7" fill="#059669"/>
      <text x="800" y="76" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">0.95 g</text>
      <text x="800" y="238" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">1,000 Hz</text>
      <text x="800" y="264" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#166534" text-anchor="middle">Blade Pass</text>

      <!-- Peak 4: Bearing Defect (2,400 Hz) -->
      <line x1="1080" y1="205" x2="1080" y2="148" stroke="#7c3aed" stroke-width="5"/>
      <circle cx="1080" cy="148" r="7" fill="#7c3aed"/>
      <text x="1080" y="132" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9" text-anchor="middle">0.38 g</text>
      <text x="1080" y="238" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9" text-anchor="middle">2,400 Hz</text>
      <text x="1080" y="264" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#5b21b6" text-anchor="middle">Bearing Defect</text>

      <!-- Eliminated 25 kHz note -->
      <rect x="1185" y="25" width="260" height="108" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
      <text x="1315" y="56" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">25 kHz EMI Noise:</text>
      <text x="1315" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#166534" text-anchor="middle">100% Rejected</text>
      <text x="1315" y="116" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d" text-anchor="middle">by 6th-Order AA</text>
    </g>
  </g>
</svg>`
  },

  // =========================================================================
  // SIMPLER CASE STUDY DEDICATED STEP-BY-STEP GRAPHS
  // =========================================================================
  u2_case_step2_graph: {
    id: "u2_case_step2_graph",
    filename: "u2_case_step2_sensor_waveforms.svg",
    title: "Case Study Step 2 Graph: Physical Measurands & Raw Analog Sensor Outputs",
    description: "Time-domain voltage waveforms generated by the LM35 temperature sensor (0.750V DC) and piezoelectric accelerometer (50 Hz AC with 10 kHz industrial welder noise).",
    topicRef: "Case Study: Step 2",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="75" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="27" font-weight="700" fill="#0f172a">
    Step 2 Graph: Raw Analog Sensor Signals from Induction Motor
  </text>
  <text x="1525" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#2563eb" text-anchor="end">
    Case Study · Stage 2
  </text>

  <!-- Left Card: Channel 1 Temperature DC Waveform -->
  <g transform="translate(50, 135)">
    <rect width="730" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="54" rx="10" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b91c1c">
      Channel 1: Casing Temperature (LM35 Sensor)
    </text>

    <!-- Graph Area -->
    <g transform="translate(30, 74)">
      <rect width="670" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="110" y1="315" x2="580" y2="315" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="110" y1="40" x2="110" y2="315" stroke="#0f172a" stroke-width="2.5"/>
      <text x="592" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">t (ms)</text>
      <text x="125" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Voltage V (Volts)</text>

      <!-- Grid lines -->
      <line x1="110" y1="120" x2="580" y2="120" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="110" y1="215" x2="580" y2="215" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="100" y="127" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="end">0.750 V</text>
      <text x="100" y="222" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">0.500 V</text>
      <text x="100" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">0.000 V</text>

      <!-- Time ticks -->
      <text x="220" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">20 ms</text>
      <text x="330" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">40 ms</text>
      <text x="440" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">60 ms</text>
      <text x="550" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">80 ms</text>

      <!-- Stable DC Signal Line -->
      <line x1="110" y1="120" x2="575" y2="120" stroke="#dc2626" stroke-width="4.5"/>
      <circle cx="220" cy="120" r="6" fill="#dc2626"/>
      <circle cx="330" cy="120" r="6" fill="#dc2626"/>
      <circle cx="440" cy="120" r="6" fill="#dc2626"/>
      <circle cx="550" cy="120" r="6" fill="#dc2626"/>

      <!-- Value Callout Badge -->
      <rect x="210" y="54" width="350" height="46" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
      <text x="385" y="84" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#991b1b" text-anchor="middle">
        V_out = 0.750 V DC (75.0 °C)
      </text>
    </g>

    <!-- Transduction Details Box -->
    <g transform="translate(30, 478)">
      <rect width="670" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
        Transduction Physics:
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Sensor: LM35 Precision Centigrade IC
      </text>
      <text x="25" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">
        • Gain: S = 10.0 mV/°C (-55 °C to +150 °C)
      </text>
      <text x="25" y="150" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Output: 75.0 °C × 0.010 V/°C = 0.750 V DC
      </text>
      <text x="25" y="188" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">
        • Character: Quasi-static DC (zero AC ripple)
      </text>
    </g>
  </g>

  <!-- Right Card: Channel 2 Vibration Waveform with Noise -->
  <g transform="translate(820, 135)">
    <rect width="730" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      Channel 2: 50 Hz Vibration + 10 kHz Noise
    </text>

    <!-- Graph Area -->
    <g transform="translate(30, 74)">
      <rect width="670" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="115" y1="205" x2="580" y2="205" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="115" y1="40" x2="115" y2="335" stroke="#0f172a" stroke-width="2.5"/>
      <text x="592" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">t (ms)</text>
      <text x="130" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Voltage V (mV)</text>

      <!-- Grid lines -->
      <line x1="115" y1="90" x2="580" y2="90" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="115" y1="320" x2="580" y2="320" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="105" y="97" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="end">+150 mV</text>
      <text x="105" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">0 mV</text>
      <text x="105" y="327" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="end">-150 mV</text>

      <!-- Time ticks: 50 Hz period = 20 ms (150px per cycle, 115..565) -->
      <line x1="265" y1="45" x2="265" y2="335" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="415" y1="45" x2="415" y2="335" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="565" y1="45" x2="565" y2="335" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="265" y="364" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">20 ms (1 Cyc)</text>
      <text x="415" y="364" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">40 ms (2 Cyc)</text>
      <text x="565" y="364" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">60 ms</text>

      <!-- Clean 50 Hz fundamental reference path -->
      <path d="M 115 205 Q 152.5 90, 190 205 T 265 205 T 340 205 T 415 205 T 490 205 T 565 205" fill="none" stroke="#93c5fd" stroke-width="2.5" stroke-dasharray="6,4"/>

      <!-- Noisy 50 Hz + 10 kHz signal path -->
      <path d="M 115 205
        L 120 175 L 125 195 L 130 155 L 135 140 L 140 160 L 145 120 L 150 135 L 152 90 L 157 82 L 162 102 L 167 88 L 172 110 L 177 125 L 182 155 L 186 145 L 190 205
        L 195 225 L 200 210 L 205 245 L 210 265 L 215 250 L 220 285 L 225 275 L 228 315 L 233 326 L 238 308 L 243 320 L 248 298 L 253 278 L 258 248 L 262 258 L 265 205
        L 270 175 L 275 195 L 280 155 L 285 140 L 290 160 L 295 120 L 300 135 L 302 90 L 307 82 L 312 102 L 317 88 L 322 110 L 327 125 L 332 155 L 336 145 L 340 205
        L 345 225 L 350 210 L 355 245 L 360 265 L 365 250 L 370 285 L 375 275 L 378 315 L 383 326 L 388 308 L 393 320 L 398 298 L 403 278 L 408 248 L 412 258 L 415 205
        L 420 175 L 425 195 L 430 155 L 435 140 L 440 160 L 445 120 L 450 135 L 452 90 L 457 82 L 462 102 L 467 88 L 472 110 L 477 125 L 482 155 L 486 145 L 490 205
        L 495 225 L 500 210 L 505 245 L 510 265 L 515 250 L 520 285 L 525 275 L 528 315 L 533 326 L 538 308 L 543 320 L 548 298 L 553 278 L 558 248 L 562 258 L 565 205"
        fill="none" stroke="#2563eb" stroke-width="3"/>

      <!-- Annotations -->
      <rect x="260" y="32" width="385" height="42" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
      <text x="452" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">
        10 kHz Switching Noise Superimposed
      </text>
    </g>

    <!-- Transduction Details Box -->
    <g transform="translate(30, 478)">
      <rect width="670" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
        Vibration Physics &amp; Noise Problem:
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Sensor: Piezo Accelerometer (100 mV/(m/s²))
      </text>
      <text x="25" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">
        • Signal: 50.0 Hz shaft wave (3,000 RPM)
      </text>
      <text x="25" y="150" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Peak: 1.50 m/s² → v(t) = 0.150·sin(100πt) V
      </text>
      <text x="25" y="188" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">
        • Threat: 10 kHz noise causes severe aliasing!
      </text>
    </g>
  </g>
</svg>`
  },

  u2_case_step3_graph: {
    id: "u2_case_step3_graph",
    filename: "u2_case_step3_analog_filter_and_level_shift.svg",
    title: "Case Study Step 3 Graph: Anti-Aliasing Low-Pass Filter & Level Shifting",
    description: "4th-order Butterworth anti-aliasing filter Bode plot rejecting 10 kHz noise, and op-amp level shifter centering the vibration wave at +2.500V DC.",
    topicRef: "Case Study: Step 3",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="75" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="27" font-weight="700" fill="#0f172a">
    Step 3 Graph: Anti-Aliasing Filter &amp; DC Level Shift
  </text>
  <text x="1525" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#2563eb" text-anchor="end">
    Case Study · Stage 3
  </text>

  <!-- Left Card: Anti-Aliasing Filter Bode Plot -->
  <g transform="translate(50, 135)">
    <rect width="730" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="54" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#047857">
      4th-Order Butterworth Response (fc = 200 Hz)
    </text>

    <!-- Graph Area -->
    <g transform="translate(30, 74)">
      <rect width="670" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="95" y1="315" x2="555" y2="315" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="95" y1="45" x2="95" y2="315" stroke="#0f172a" stroke-width="2.5"/>
      <text x="568" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">f (Log)</text>
      <text x="112" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Gain |H(f)| (dB)</text>

      <!-- Grid lines -->
      <line x1="95" y1="90" x2="555" y2="90" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="95" y1="130" x2="555" y2="130" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="95" y1="210" x2="555" y2="210" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="85" y="97" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857" text-anchor="end">0 dB</text>
      <text x="85" y="137" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="end">-3 dB</text>
      <text x="85" y="217" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">-40 dB</text>
      <text x="85" y="297" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="end">-80 dB</text>

      <!-- Frequency grid lines -->
      <line x1="175" y1="50" x2="175" y2="315" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="295" y1="50" x2="295" y2="315" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="415" y1="50" x2="415" y2="315" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="530" y1="50" x2="530" y2="315" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="175" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">50 Hz</text>
      <text x="295" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857" text-anchor="middle">200 Hz</text>
      <text x="415" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">1 kHz</text>
      <text x="530" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">10 kHz</text>

      <!-- Passband Green Shading -->
      <rect x="95" y="90" width="200" height="225" fill="#ecfdf5" opacity="0.7"/>
      <text x="195" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#047857" text-anchor="middle">Passband</text>
      <text x="195" y="218" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#059669" text-anchor="middle">(0 dB)</text>

      <!-- Butterworth Curve -->
      <path d="M 95 90 L 215 90 Q 268 90, 295 130 T 415 230 T 530 290 L 555 300" fill="none" stroke="#059669" stroke-width="4.5"/>
      <circle cx="175" cy="90" r="6" fill="#2563eb"/>
      <circle cx="295" cy="130" r="6" fill="#047857"/>
      <circle cx="530" cy="290" r="7" fill="#b91c1c"/>

      <!-- Rejection Badge -->
      <rect x="388" y="140" width="265" height="76" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="520" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#991b1b" text-anchor="middle">10 kHz Rejected:</text>
      <text x="520" y="202" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b91c1c" text-anchor="middle">&gt; 72 dB Loss</text>
    </g>

    <!-- Filter Principles Box -->
    <g transform="translate(30, 478)">
      <rect width="670" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
        Filter Architecture &amp; Rationale:
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • 4th-Order Butterworth LPF (Sallen-Key Op-Amp)
      </text>
      <text x="25" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">
        • fc = 200 Hz (0.0 dB error at 50 Hz wave)
      </text>
      <text x="25" y="150" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Rolloff: -80 dB/decade (-24 dB/octave)
      </text>
      <text x="25" y="188" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">
        • Crushes 10 kHz noise before ADC sampling!
      </text>
    </g>
  </g>

  <!-- Right Card: Conditioned & Level-Shifted Output Waveform -->
  <g transform="translate(820, 135)">
    <rect width="730" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="54" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#6d28d9">
      Conditioned Output: 50 Hz Wave at +2.500 V DC
    </text>

    <!-- Graph Area -->
    <g transform="translate(30, 74)">
      <rect width="670" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="165" y1="315" x2="575" y2="315" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="165" y1="45" x2="165" y2="315" stroke="#0f172a" stroke-width="2.5"/>
      <text x="588" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">t (ms)</text>
      <text x="180" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Voltage V (Volts)</text>

      <!-- Voltage thresholds -->
      <line x1="165" y1="95" x2="575" y2="95" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="165" y1="180" x2="575" y2="180" stroke="#9333ea" stroke-width="2" stroke-dasharray="6,4"/>
      <line x1="165" y1="265" x2="575" y2="265" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="155" y="102" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="end">2.650 V (Pk)</text>
      <text x="155" y="187" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#7e22ce" text-anchor="end">2.500 V (DC)</text>
      <text x="155" y="272" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="end">2.350 V (Min)</text>
      <text x="155" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">0.000 V</text>

      <!-- Time ticks: 20 ms, 40 ms, 60 ms -->
      <line x1="295" y1="50" x2="295" y2="315" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="430" y1="50" x2="430" y2="315" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="565" y1="50" x2="565" y2="315" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="295" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">20 ms</text>
      <text x="430" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">40 ms</text>
      <text x="565" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">60 ms</text>

      <!-- Pure, Cleaned, Centered 50 Hz Sinusoid -->
      <path d="M 165 180 Q 198 95, 230 180 T 295 180 T 363 180 T 430 180 T 498 180 T 565 180"
        fill="none" stroke="#7c3aed" stroke-width="4.5"/>
      <circle cx="198" cy="138" r="5" fill="#7c3aed"/>
      <circle cx="263" cy="222" r="5" fill="#7c3aed"/>
      <circle cx="329" cy="138" r="5" fill="#7c3aed"/>
      <circle cx="396" cy="222" r="5" fill="#7c3aed"/>

      <!-- Center Bias Callout -->
      <rect x="215" y="48" width="420" height="40" rx="6" fill="#f5f3ff" stroke="#a78bfa" stroke-width="1.2"/>
      <text x="425" y="75" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">
        Shifted +2.500 V DC (0–5 V ADC Safe)
      </text>
    </g>

    <!-- Conditioning Details Box -->
    <g transform="translate(30, 478)">
      <rect width="670" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
        Why DC Level Shifting Is Vital:
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Single-supply ADCs accept strictly 0 to +5.0 V.
      </text>
      <text x="25" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">
        • Raw ±150 mV AC clips negative half-cycles!
      </text>
      <text x="25" y="150" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Op-Amp Summer: v_in = 2.50 + 0.15·sin(100πt)
      </text>
      <text x="25" y="188" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">
        • Safe span [2.35 V, 2.65 V] inside ADC rails.
      </text>
    </g>
  </g>
</svg>`
  },

  u2_case_step4_graph: {
    id: "u2_case_step4_graph",
    filename: "u2_case_step4_adc_sampling_and_quantization.svg",
    title: "Case Study Step 4 Graph: 12-Bit ADC Sampling Grid & Staircase Quantization",
    description: "Uniform time sampling at 1000 S/s capturing 20 samples per 50 Hz cycle, and 12-bit binary quantization mapping voltages to integer codes (614, 1925, 2048, 2171).",
    topicRef: "Case Study: Step 4",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="75" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="27" font-weight="700" fill="#0f172a">
    Step 4 Graph: 12-Bit ADC Sampling (1000 S/s) &amp; Integer Codes
  </text>
  <text x="1525" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#2563eb" text-anchor="end">
    Case Study · Stage 4
  </text>

  <!-- Left Card: Time Sampling Grid (fs = 1000 S/s, Ts = 1 ms) -->
  <g transform="translate(50, 135)">
    <rect width="730" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      Time Discretization: 20 Samples / Cycle (Ts = 1.0 ms)
    </text>

    <!-- Graph Area -->
    <g transform="translate(30, 74)">
      <rect width="670" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="110" y1="205" x2="580" y2="205" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="110" y1="40" x2="110" y2="335" stroke="#0f172a" stroke-width="2.5"/>
      <text x="592" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">t (ms)</text>
      <text x="125" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">V (Volts)</text>

      <!-- Center Line 2.5V -->
      <text x="100" y="212" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">2.500 V</text>
      <text x="100" y="102" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="end">2.650 V</text>
      <text x="100" y="322" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="end">2.350 V</text>

      <!-- Analog continuous wave behind (faint) -->
      <path d="M 110 205 Q 225 75, 340 205 T 570 205" fill="none" stroke="#94a3b8" stroke-width="3"/>

      <!-- 20 Discrete Sample Stems and Dots across 20 ms (dx = 23px per ms) -->
      <g stroke="#059669" stroke-width="2.5">
        <line x1="110" y1="205" x2="110" y2="205"/><circle cx="110" cy="205" r="5" fill="#059669"/>
        <line x1="133" y1="205" x2="133" y2="172"/><circle cx="133" cy="172" r="5" fill="#059669"/>
        <line x1="156" y1="205" x2="156" y2="145"/><circle cx="156" cy="145" r="5" fill="#059669"/>
        <line x1="179" y1="205" x2="179" y2="123"/><circle cx="179" cy="123" r="5" fill="#059669"/>
        <line x1="202" y1="205" x2="202" y2="110"/><circle cx="202" cy="110" r="5" fill="#059669"/>
        <line x1="225" y1="205" x2="225" y2="105"/><circle cx="225" cy="105" r="6" fill="#047857"/>
        <line x1="248" y1="205" x2="248" y2="110"/><circle cx="248" cy="110" r="5" fill="#059669"/>
        <line x1="271" y1="205" x2="271" y2="123"/><circle cx="271" cy="123" r="5" fill="#059669"/>
        <line x1="294" y1="205" x2="294" y2="145"/><circle cx="294" cy="145" r="5" fill="#059669"/>
        <line x1="317" y1="205" x2="317" y2="172"/><circle cx="317" cy="172" r="5" fill="#059669"/>
        <line x1="340" y1="205" x2="340" y2="205"/><circle cx="340" cy="205" r="5" fill="#059669"/>
        <line x1="363" y1="205" x2="363" y2="238"/><circle cx="363" cy="238" r="5" fill="#059669"/>
        <line x1="386" y1="205" x2="386" y2="265"/><circle cx="386" cy="265" r="5" fill="#059669"/>
        <line x1="409" y1="205" x2="409" y2="287"/><circle cx="409" cy="287" r="5" fill="#059669"/>
        <line x1="432" y1="205" x2="432" y2="300"/><circle cx="432" cy="300" r="5" fill="#059669"/>
        <line x1="455" y1="205" x2="455" y2="305"/><circle cx="455" cy="305" r="6" fill="#047857"/>
        <line x1="478" y1="205" x2="478" y2="300"/><circle cx="478" cy="300" r="5" fill="#059669"/>
        <line x1="501" y1="205" x2="501" y2="287"/><circle cx="501" cy="287" r="5" fill="#059669"/>
        <line x1="524" y1="205" x2="524" y2="265"/><circle cx="524" cy="265" r="5" fill="#059669"/>
        <line x1="547" y1="205" x2="547" y2="238"/><circle cx="547" cy="238" r="5" fill="#059669"/>
        <line x1="570" y1="205" x2="570" y2="205"/><circle cx="570" cy="205" r="5" fill="#059669"/>
      </g>

      <!-- Annotations -->
      <text x="350" y="366" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">
        1 Cycle of 50 Hz Motor Wave = 20.0 ms Duration
      </text>
      <rect x="225" y="34" width="420" height="40" rx="6" fill="#ecfdf5" stroke="#22c55e" stroke-width="1.2"/>
      <text x="435" y="61" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#065f46" text-anchor="middle">
        fs = 1000 Hz &gt;&gt; 100 Hz (10× Nyquist)
      </text>
    </g>

    <!-- Sampling Details Box -->
    <g transform="translate(30, 478)">
      <rect width="670" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
        Sampling Timing Strategy:
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Clock Rate: fs = 1000 Samples/s (1 kS/s)
      </text>
      <text x="25" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">
        • Sampling Period: Ts = 1 / fs = 1.0 ms (1000 μs)
      </text>
      <text x="25" y="150" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Nyquist Criterion: 1000 Hz &gt; 2 × 50 Hz (10× margin)
      </text>
      <text x="25" y="188" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">
        • Fidelity: 20 clean points trace each sine cycle
      </text>
    </g>
  </g>

  <!-- Right Card: Quantization Staircase & Digital Codes -->
  <g transform="translate(820, 135)">
    <rect width="730" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="54" rx="10" fill="#fef3c7" stroke="#fde68a" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#b45309">
      Amplitude Quantization: 12-Bit Staircase &amp; Codes
    </text>

    <!-- Graph Area -->
    <g transform="translate(30, 74)">
      <rect width="670" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Voltage scale -->
      <line x1="170" y1="330" x2="575" y2="330" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="170" y1="40" x2="170" y2="330" stroke="#0f172a" stroke-width="2.5"/>
      <text x="588" y="337" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Sample n</text>
      <text x="185" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Digital Code D</text>

      <!-- Digital Codes Labels -->
      <line x1="170" y1="80" x2="575" y2="80" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>
      <line x1="170" y1="190" x2="575" y2="190" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
      <line x1="170" y1="300" x2="575" y2="300" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>

      <text x="160" y="87" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="end">2171 (2.65V)</text>
      <text x="160" y="197" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a" text-anchor="end">2048 (2.50V)</text>
      <text x="160" y="307" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="end">1925 (2.35V)</text>

      <!-- Quantization Staircase Steps (dx = 20px per step, x=170..570) -->
      <path d="M 170 190
        H 190 V 164 H 210 V 140 H 230 V 120 H 250 V 110 H 270 V 80
        H 290 V 110 H 310 V 120 H 330 V 140 H 350 V 164 H 370 V 190
        H 390 V 216 H 410 V 240 H 430 V 260 H 450 V 270 H 470 V 300
        H 490 V 270 H 510 V 260 H 530 V 240 H 550 V 216 H 570 V 190"
        fill="none" stroke="#d97706" stroke-width="3.5"/>

      <!-- Distinct Integer Code Badges -->
      <rect x="360" y="34" width="235" height="38" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.2"/>
      <text x="477" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#92400e" text-anchor="middle">
        Peak: D = 2171
      </text>

      <rect x="360" y="144" width="235" height="38" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.2"/>
      <text x="477" y="170" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e293b" text-anchor="middle">
        Bias: D = 2048
      </text>

      <!-- Channel 1 Temperature Callout Plaque -->
      <rect x="182" y="218" width="230" height="68" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="297" y="246" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#991b1b" text-anchor="middle">
        Ch1 Temp (0.75 V)
      </text>
      <text x="297" y="274" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b91c1c" text-anchor="middle">
        Code D = 614
      </text>
    </g>

    <!-- Quantization Math Details Box -->
    <g transform="translate(30, 478)">
      <rect width="670" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
        12-Bit Binary Conversion Calculations:
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Bit Depth: N = 12 bits → 2¹² = 4,096 codes
      </text>
      <text x="25" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">
        • Resolution: ΔV = 5.00 V / 4096 = 1.2207 mV/LSB
      </text>
      <text x="25" y="150" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Temp: 0.750 V / 1.221 mV = 614 (001001100110)
      </text>
      <text x="25" y="188" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">
        • Vib Pk: 2.650 V / 1.221 mV = 2171 (100001111011)
      </text>
    </g>
  </g>
</svg>`
  },

  u2_case_step5_graph: {
    id: "u2_case_step5_graph",
    filename: "u2_case_step5_memory_buffer_and_logging.svg",
    title: "Case Study Step 5 Graph: Computer Memory Storage & On-Disk Data Logging",
    description: "Architecture of microcontroller RAM circular DMA ring buffer and structured on-disk CSV/binary time-stamped logging.",
    topicRef: "Case Study: Step 5",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="75" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="27" font-weight="700" fill="#0f172a">
    Step 5 Graph: Microcontroller RAM Buffer &amp; On-Disk File Logging
  </text>
  <text x="1525" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#2563eb" text-anchor="end">
    Case Study · Stage 5
  </text>

  <!-- Left Card: RAM Circular DMA Buffer Architecture -->
  <g transform="translate(50, 135)">
    <rect width="730" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      Microcontroller RAM: Circular DMA Ring Buffer
    </text>

    <!-- Ring Buffer Diagram -->
    <g transform="translate(30, 74)">
      <rect width="670" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Circular Track -->
      <circle cx="335" cy="192" r="150" fill="none" stroke="#cbd5e1" stroke-width="44"/>

      <!-- Buffer Segments -->
      <path d="M 335 42 A 150 150 0 0 1 485 192" fill="none" stroke="#93c5fd" stroke-width="44"/>
      <path d="M 485 192 A 150 150 0 0 1 335 342" fill="none" stroke="#2563eb" stroke-width="44"/>

      <!-- Center Inner Hub -->
      <circle cx="335" cy="192" r="122" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <text x="335" y="168" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">
        RAM Ring Buffer
      </text>
      <text x="335" y="200" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">
        1,000 Words
      </text>
      <text x="335" y="230" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">
        (1.0 s History)
      </text>

      <!-- Write Pointer Badge (From ADC) -->
      <g transform="translate(450, 18)">
        <rect width="205" height="74" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
        <text x="102" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#166534" text-anchor="middle">
          ADC DMA Write
        </text>
        <text x="102" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d" text-anchor="middle">
          Every 1.0 ms
        </text>
      </g>

      <!-- Read Pointer Badge (To DSP/FFT) -->
      <g transform="translate(15, 290)">
        <rect width="205" height="74" rx="8" fill="#f5f3ff" stroke="#a78bfa" stroke-width="1.5"/>
        <text x="102" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9" text-anchor="middle">
          DSP Read Ptr
        </text>
        <text x="102" y="60" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#5b21b6" text-anchor="middle">
          Reads 1024 pts
        </text>
      </g>
    </g>

    <!-- Buffer Details Box -->
    <g transform="translate(30, 478)">
      <rect width="670" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
        Embedded Firmware Implementation:
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">
        uint16_t vib_buf[1000];  // 2 KB SRAM
      </text>
      <text x="25" y="110" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">
        uint16_t temp_buf[1000]; // 2 KB SRAM
      </text>
      <text x="25" y="152" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • DMA transfers ADC data at 0% CPU load
      </text>
      <text x="25" y="190" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">
        • Ring buffer guarantees zero dropped samples
      </text>
    </g>
  </g>

  <!-- Right Card: On-Disk Structured Logging & File Formats -->
  <g transform="translate(820, 135)">
    <rect width="730" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="730" height="54" rx="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
      On-Disk Storage: Timestamped CSV &amp; Binary Logs
    </text>

    <!-- File Structure Area -->
    <g transform="translate(30, 74)">
      <rect width="670" height="385" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

      <!-- Terminal Header -->
      <rect width="670" height="44" rx="8" fill="#1e293b"/>
      <circle cx="24" cy="22" r="6" fill="#ef4444"/>
      <circle cx="44" cy="22" r="6" fill="#f59e0b"/>
      <circle cx="64" cy="22" r="6" fill="#10b981"/>
      <text x="355" y="29" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#e2e8f0" text-anchor="middle">
        motor_log_2026_10_28.csv
      </text>

      <!-- CSV Code Lines -->
      <g transform="translate(22, 76)" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20">
        <text x="0" y="22" font-size="20" fill="#38bdf8" font-weight="700" font-family="'Times New Roman', Times, 'Liberation Serif', serif">Time,         TCode, TempC, VCode, Vib_mps2</text>
        <line x1="0" y1="36" x2="626" y2="36" stroke="#334155" stroke-width="1.5"/>

        <text x="0" y="72" font-size="20" fill="#f8fafc" font-family="'Times New Roman', Times, 'Liberation Serif', serif">14:00:00.000,   614, 74.95,  2048,  +0.000</text>
        <text x="0" y="112" font-size="20" fill="#f8fafc" font-family="'Times New Roman', Times, 'Liberation Serif', serif">14:00:00.001,   614, 74.95,  2095,  +0.465</text>
        <text x="0" y="152" font-size="20" fill="#f8fafc" font-family="'Times New Roman', Times, 'Liberation Serif', serif">14:00:00.002,   614, 74.95,  2137,  +0.882</text>
        <text x="0" y="192" font-size="20" fill="#4ade80" font-weight="700" font-family="'Times New Roman', Times, 'Liberation Serif', serif">14:00:00.005,   614, 74.95,  2171,  +1.500 [PK]</text>
        <text x="0" y="232" font-size="20" fill="#f8fafc" font-family="'Times New Roman', Times, 'Liberation Serif', serif">14:00:00.010,   614, 74.95,  2048,  +0.000</text>
        <text x="0" y="272" font-size="20" fill="#fca5a5" font-weight="700" font-family="'Times New Roman', Times, 'Liberation Serif', serif">14:00:00.015,   614, 74.95,  1925,  -1.500 [MN]</text>
      </g>
    </g>

    <!-- Storage Details Box -->
    <g transform="translate(30, 478)">
      <rect width="670" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
        Storage Budget &amp; Unit Conversion:
      </text>
      <text x="25" y="74" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#1e293b">
        • Data Rate: 2 Ch × 1000 S/s × 2 B = 4.0 KB/s
      </text>
      <text x="25" y="112" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8">
        • Daily Archival: 345.6 MB/day (Fits 32GB SD)
      </text>
      <text x="25" y="150" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">
        • Temp = Code × 1.221 mV / 10 mV/°C
      </text>
      <text x="25" y="188" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">
        • Vib = (Code - 2048) × 1.221 mV / 100 mV/(m/s²)
      </text>
    </g>
  </g>
</svg>`
  },

  u2_case_step6_graph: {
    id: "u2_case_step6_graph",
    filename: "u2_case_step6_fft_screen_display.svg",
    title: "Case Study Step 6 Graph: Real-Time Computer Display & 1024-Point FFT Diagnostics",
    description: "Operator GUI presenting reconstructed time-domain waveforms, digital temperature readout, and real-time 1024-point FFT displaying a sharp 50 Hz diagnostic spike with ISO alarm thresholds.",
    topicRef: "Case Study: Step 6",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="75" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="27" font-weight="700" fill="#0f172a">
    Step 6 Graph: Live Dashboard &amp; 1024-Point FFT Diagnostics
  </text>
  <text x="1525" y="89" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#2563eb" text-anchor="end">
    Case Study · Stage 6
  </text>

  <!-- Upper Half: Operator Time-Domain Waveforms & Gauges -->
  <g transform="translate(50, 135)">
    <rect width="1500" height="300" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="1500" height="48" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
    <text x="25" y="33" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#0f172a">
      Live Operator Dashboard: Time-Domain Oscilloscope &amp; Digital Gauges
    </text>

    <!-- Temperature Gauge Card -->
    <g transform="translate(25, 65)">
      <rect width="400" height="215" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
      <text x="200" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#991b1b" text-anchor="middle">
        CASING TEMPERATURE
      </text>
      <text x="200" y="108" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="52" font-weight="900" fill="#b91c1c" text-anchor="middle">
        74.95 °C
      </text>
      <rect x="85" y="130" width="230" height="40" rx="6" fill="#dcfce7" stroke="#22c55e" stroke-width="1.2"/>
      <text x="200" y="157" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">
        STATUS: NORMAL
      </text>
      <text x="200" y="198" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">
        Alarm Limit: 80.0 °C
      </text>
    </g>

    <!-- Live Time Waveform Oscilloscope -->
    <g transform="translate(450, 65)">
      <rect width="1025" height="215" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

      <!-- Grid lines -->
      <line x1="145" y1="100" x2="995" y2="100" stroke="#334155" stroke-width="1.2" stroke-dasharray="4,4"/>
      <line x1="145" y1="40" x2="995" y2="40" stroke="#334155" stroke-width="1.2" stroke-dasharray="4,4"/>
      <line x1="145" y1="160" x2="995" y2="160" stroke="#334155" stroke-width="1.2" stroke-dasharray="4,4"/>

      <text x="132" y="47" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#38bdf8" text-anchor="end">+1.5 m/s²</text>
      <text x="132" y="107" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#cbd5e1" text-anchor="end">0.0 m/s²</text>
      <text x="132" y="167" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#38bdf8" text-anchor="end">-1.5 m/s²</text>

      <!-- Smooth Reconstructed Waveform -->
      <path d="M 145 100
        Q 198 40, 251 100 T 357 100 T 463 100 T 569 100 T 675 100 T 781 100 T 887 100 T 993 100"
        fill="none" stroke="#38bdf8" stroke-width="4"/>

      <text x="570" y="198" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#e2e8f0" text-anchor="middle">
        Window: 80 ms (4 × 50 Hz Cycles) · Noise-Free
      </text>
    </g>
  </g>

  <!-- Lower Half: Real-Time 1024-Point FFT Diagnostic Spectrum -->
  <g transform="translate(50, 455)">
    <rect width="1500" height="400" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="1500" height="48" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="25" y="33" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#6d28d9">
      DSP Output: 1024-Point Fast Fourier Transform (FFT) Diagnostic Spectrum
    </text>

    <!-- Spectrum Display Area -->
    <g transform="translate(25, 65)">
      <rect width="1450" height="315" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="105" y1="245" x2="1320" y2="245" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="105" y1="30" x2="105" y2="245" stroke="#0f172a" stroke-width="2.5"/>
      <text x="1335" y="252" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">f (Hz)</text>
      <text x="122" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Magnitude (m/s²)</text>

      <!-- Alarm Threshold Line (2.0 m/s²) -->
      <line x1="105" y1="70" x2="1320" y2="70" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="7,5"/>
      <rect x="1080" y="24" width="340" height="38" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
      <text x="1250" y="50" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#991b1b" text-anchor="middle">
        ISO Limit: 2.00 m/s²
      </text>

      <!-- Grid lines -->
      <line x1="220" y1="40" x2="220" y2="245" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="470" y1="40" x2="470" y2="245" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="720" y1="40" x2="720" y2="245" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="970" y1="40" x2="970" y2="245" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="1220" y1="40" x2="1220" y2="245" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3"/>

      <!-- Ticks -->
      <text x="220" y="280" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">50 Hz (1X)</text>
      <text x="470" y="280" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">150 Hz</text>
      <text x="720" y="280" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">250 Hz</text>
      <text x="970" y="280" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">350 Hz</text>
      <text x="1220" y="280" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">500 Hz (Nyq)</text>

      <text x="92" y="77" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626" text-anchor="end">2.00</text>
      <text x="92" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="end">1.50</text>
      <text x="92" y="187" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">0.50</text>
      <text x="92" y="250" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">0.00</text>

      <!-- Noise Floor (< 0.05 m/s²) -->
      <path d="M 105 241 L 160 242 L 195 240 L 214 242 L 220 115 L 226 242 L 320 243 L 470 241 L 720 242 L 970 243 L 1220 241 L 1320 242"
        fill="none" stroke="#2563eb" stroke-width="2.5"/>

      <!-- Dominant 50 Hz Spectral Peak -->
      <line x1="220" y1="245" x2="220" y2="115" stroke="#2563eb" stroke-width="6"/>
      <circle cx="220" cy="115" r="7" fill="#2563eb"/>

      <!-- Peak Callout Badge -->
      <rect x="242" y="92" width="355" height="44" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="419" y="121" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e40af" text-anchor="middle">
        Bin 51: 1.50 m/s² @ 49.8 Hz
      </text>

      <!-- Diagnostic Diagnosis Box -->
      <g transform="translate(650, 100)">
        <rect width="740" height="120" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="24" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#166534">
          AUTOMATED MACHINE DIAGNOSTICS:
        </text>
        <text x="24" y="72" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">
          • Dominant 1X peak at 50 Hz; harmonic levels normal.
        </text>
        <text x="24" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#15803d">
          • Zero bearing cage or gear mesh defects detected.
        </text>
      </g>
    </g>
  </g>
</svg>`
  },

  u2_fig_analog_filters: {
    id: "u2_fig_analog_filters",
    filename: "u2_fig3c_analog_filter_comparison.svg",
    title: "Figure 2.3C: Analog Anti-Aliasing Filters — Butterworth vs. Chebyshev vs. Bessel",
    description: "Comparison of magnitude rolloff |H(f)| and step/pulse time-domain phase response across Butterworth, Chebyshev Type I, and Bessel analog filter families.",
    topicRef: "2.3 Signal Conditioning",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.3C: Analog Filter Families · Butterworth vs. Chebyshev vs. Bessel
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.3
  </text>

  <!-- Left Panel: Frequency Magnitude Response |H(f)| -->
  <g transform="translate(35, 125)">
    <rect width="745" height="480" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      A. Magnitude Rolloff |H(f)| (Steepness vs. Passband Ripple)
    </text>

    <g transform="translate(25, 72)">
      <rect width="695" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="95" y1="320" x2="660" y2="320" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="95" y1="35" x2="95" y2="320" stroke="#0f172a" stroke-width="2.5"/>

      <!-- Cutoff marker fc -->
      <line x1="285" y1="45" x2="285" y2="320" stroke="#64748b" stroke-width="1.8" stroke-dasharray="6,4"/>
      <line x1="95" y1="85" x2="650" y2="85" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,4"/>
      <line x1="95" y1="120" x2="650" y2="120" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4,4"/>

      <text x="84" y="92" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="end">0 dB</text>
      <text x="84" y="128" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="end">-3 dB</text>
      <text x="84" y="295" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="end">-60 dB</text>
      <text x="285" y="355" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a" text-anchor="middle">Cutoff fc</text>
      <text x="580" y="355" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a" text-anchor="middle">Frequency f →</text>

      <!-- Chebyshev (Red): Passband ripple + steepest drop -->
      <path d="M 95 85 Q 130 62, 165 85 T 235 85 Q 262 64, 285 110 L 395 298 L 620 315"
            fill="none" stroke="#dc2626" stroke-width="3.8"/>

      <!-- Butterworth (Blue): Flat passband + medium steep drop -->
      <path d="M 95 85 L 220 86 Q 268 88, 285 120 Q 350 220, 490 298 L 635 314"
            fill="none" stroke="#2563eb" stroke-width="4"/>

      <!-- Bessel (Green): Gentle gradual drop -->
      <path d="M 95 85 Q 190 92, 285 135 Q 410 205, 635 288"
            fill="none" stroke="#059669" stroke-width="3.8" stroke-dasharray="10,4"/>

      <!-- Legend Box -->
      <rect x="390" y="32" width="285" height="122" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>
      <line x1="408" y1="60" x2="450" y2="60" stroke="#2563eb" stroke-width="4"/>
      <text x="462" y="67" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">Butterworth (Flat)</text>
      <line x1="408" y1="96" x2="450" y2="96" stroke="#dc2626" stroke-width="4"/>
      <text x="462" y="103" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">Chebyshev (Steep)</text>
      <line x1="408" y1="132" x2="450" y2="132" stroke="#059669" stroke-width="4" stroke-dasharray="8,3"/>
      <text x="462" y="139" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Bessel (Gradual)</text>
    </g>
  </g>

  <!-- Right Panel: Time-Domain Pulse/Step Response -->
  <g transform="translate(820, 125)">
    <rect width="745" height="480" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#15803d">
      B. Step Response (Phase Linearity &amp; Pulse Ringing)
    </text>

    <g transform="translate(25, 72)">
      <rect width="695" height="385" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <line x1="80" y1="315" x2="660" y2="315" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="80" y1="35" x2="80" y2="315" stroke="#0f172a" stroke-width="2.5"/>

      <!-- Ideal step reference -->
      <path d="M 80 315 L 175 315 L 175 145 L 650 145" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-dasharray="6,4"/>
      <text x="645" y="132" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#475569" text-anchor="end">Ideal Step Input (1.0)</text>

      <!-- Chebyshev: Large overshoot and persistent ringing -->
      <path d="M 80 315 L 175 315 Q 225 50, 265 190 Q 305 90, 345 170 Q 385 120, 425 158 Q 465 135, 515 148 L 650 145"
            fill="none" stroke="#dc2626" stroke-width="3.5"/>

      <!-- Butterworth: Moderate overshoot -->
      <path d="M 80 315 L 175 315 Q 235 98, 290 158 Q 345 136, 405 147 L 650 145"
            fill="none" stroke="#2563eb" stroke-width="3.8"/>

      <!-- Bessel: Clean, near-zero overshoot -->
      <path d="M 80 315 L 175 315 Q 250 142, 330 145 L 650 145"
            fill="none" stroke="#059669" stroke-width="4.2"/>

      <text x="245" y="54" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b91c1c">Chebyshev Ringing (~25%)</text>
      <text x="355" y="218" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d">Bessel: Zero Ringing (Linear Phase)</text>
      <text x="370" y="355" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a" text-anchor="middle">Time t →</text>
    </g>
  </g>

  <!-- Bottom Decision Matrix Cards -->
  <g transform="translate(35, 625)">
    <rect width="1530" height="235" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="30" y="38" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="700" fill="#0f172a">
      Engineering Selection Guide: Choosing the Right Hardware Anti-Aliasing Filter
    </text>

    <g transform="translate(30, 56)">
      <rect width="474" height="160" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.2"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af">1. Butterworth (General DAQ)</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Maximally flat 0 dB passband</text>
      <text x="20" y="102" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Best for steady FFT vibration</text>
      <text x="20" y="136" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">Default choice for AC/spectral work</text>
    </g>

    <g transform="translate(528, 56)">
      <rect width="474" height="160" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.2"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#b91c1c">2. Chebyshev (Tight Guard Band)</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Steepest cliff near cutoff fc</text>
      <text x="20" y="102" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Trades ±0.5 dB passband ripple</text>
      <text x="20" y="136" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c">Avoid on sharp impact pulses</text>
    </g>

    <g transform="translate(1026, 56)">
      <rect width="474" height="160" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">3. Bessel (Transient / Pulses)</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#0f172a">• Constant group delay (no skew)</text>
      <text x="20" y="102" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">• Preserves square edges &amp; ECG peaks</text>
      <text x="20" y="136" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">Needs higher fs (gentle rolloff)</text>
    </g>
  </g>
</svg>`
  },

  u2_fig_convolution_correlation: {
    id: "u2_fig_convolution_correlation",
    filename: "u2_fig4a_convolution_and_correlation.svg",
    title: "Figure 2.4A: Time-Domain Processing — Discrete Convolution & Cross-Correlation",
    description: "Visual step-by-step trace of discrete convolution x[n] * h[n] sliding overlap mechanics and cross-correlation R_xy[l] echo delay detection in noisy signals.",
    topicRef: "2.4 Signal Processing Techniques",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.4A: Time-Domain DSP · Discrete Convolution &amp; Cross-Correlation
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.4
  </text>

  <!-- Left Panel: Discrete Convolution Mechanics -->
  <g transform="translate(35, 125)">
    <rect width="745" height="735" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      A. Convolution y[n] = x[n] * h[n] (Flip, Shift, Multiply, Add)
    </text>

    <!-- Input x[n] and Kernel h[n] -->
    <g transform="translate(25, 72)">
      <rect width="695" height="195" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <!-- x[n] = {1, 2, 3} -->
      <text x="25" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">Input Signal x[n] = {1, 2, 3}</text>
      <line x1="45" y1="150" x2="320" y2="150" stroke="#0f172a" stroke-width="2"/>
      <line x1="90" y1="150" x2="90" y2="122" stroke="#2563eb" stroke-width="4"/><circle cx="90" cy="122" r="6" fill="#2563eb"/>
      <line x1="175" y1="150" x2="175" y2="94" stroke="#2563eb" stroke-width="4"/><circle cx="175" cy="94" r="6" fill="#2563eb"/>
      <line x1="260" y1="150" x2="260" y2="66" stroke="#2563eb" stroke-width="4"/><circle cx="260" cy="66" r="6" fill="#2563eb"/>
      <text x="90" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">1</text>
      <text x="175" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">2</text>
      <text x="260" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">3</text>

      <!-- h[n] = {0.5, 0.5} -->
      <text x="385" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">Filter h[n] = {0.5, 0.5}</text>
      <line x1="400" y1="150" x2="660" y2="150" stroke="#0f172a" stroke-width="2"/>
      <line x1="470" y1="150" x2="470" y2="105" stroke="#d97706" stroke-width="4"/><circle cx="470" cy="105" r="6" fill="#d97706"/>
      <line x1="560" y1="150" x2="560" y2="105" stroke="#d97706" stroke-width="4"/><circle cx="560" cy="105" r="6" fill="#d97706"/>
      <text x="470" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">0.5</text>
      <text x="560" y="176" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309" text-anchor="middle">0.5</text>
    </g>

    <!-- Step-by-Step Sliding Overlap Output y[n] -->
    <g transform="translate(25, 285)">
      <rect width="695" height="260" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2"/>
      <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">
        Smoothed Output y[n] = {0.5, 1.5, 2.5, 1.5}  (Length = 3 + 2 - 1 = 4)
      </text>
      <line x1="85" y1="200" x2="640" y2="200" stroke="#0f172a" stroke-width="2.5"/>

      <line x1="150" y1="200" x2="150" y2="174" stroke="#059669" stroke-width="5"/><circle cx="150" cy="174" r="7" fill="#059669"/>
      <text x="150" y="156" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">0.5</text>
      <text x="150" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">n = 0</text>

      <line x1="285" y1="200" x2="285" y2="122" stroke="#059669" stroke-width="5"/><circle cx="285" cy="122" r="7" fill="#059669"/>
      <text x="285" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">1.5</text>
      <text x="285" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">n = 1</text>

      <line x1="420" y1="200" x2="420" y2="70" stroke="#059669" stroke-width="5"/><circle cx="420" cy="70" r="7" fill="#059669"/>
      <text x="420" y="56" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">2.5</text>
      <text x="420" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">n = 2</text>

      <line x1="555" y1="200" x2="555" y2="122" stroke="#059669" stroke-width="5"/><circle cx="555" cy="122" r="7" fill="#059669"/>
      <text x="555" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">1.5</text>
      <text x="555" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">n = 3</text>
    </g>

    <!-- Step Calculations Summary -->
    <g transform="translate(25, 565)">
      <rect width="695" height="150" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">2-Point Moving-Average Calculation:</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• n=0: 1×0.5 = 0.5      |   n=1: 1×0.5 + 2×0.5 = 1.5</text>
      <text x="20" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• n=2: 2×0.5 + 3×0.5 = 2.5 |   n=3: 3×0.5 = 1.5</text>
      <text x="20" y="136" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">Time Convolution ↔ Frequency Multiplication!</text>
    </g>
  </g>

  <!-- Right Panel: Cross-Correlation Echo Detection -->
  <g transform="translate(820, 125)">
    <rect width="745" height="735" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#6d28d9">
      B. Cross-Correlation R_xy[l] (Echo &amp; Delay Detection)
    </text>

    <!-- Transmitted Pulse vs Noisy Delayed Echo -->
    <g transform="translate(25, 72)">
      <rect width="695" height="235" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="32" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">1. Reference Chirp x[n] &amp; Noisy Echo y[n]</text>

      <!-- Clean pulse at left -->
      <line x1="40" y1="100" x2="655" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 40 100 L 105 100 L 125 52 L 150 100 L 175 68 L 195 100 L 655 100" fill="none" stroke="#2563eb" stroke-width="3.2"/>
      <text x="150" y="42" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Tx Pulse</text>

      <!-- Noisy signal with hidden delayed pulse at x=470 -->
      <line x1="40" y1="190" x2="655" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
      <path d="M 40 190 L 70 178 L 100 202 L 140 180 L 180 198 L 220 182 L 260 200 L 300 184 L 340 196 L 380 182 L 420 195 L 440 148 L 465 204 L 490 156 L 515 196 L 550 182 L 590 202 L 630 180 L 655 190"
            fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <text x="475" y="138" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">Echo Buried in Noise</text>
    </g>

    <!-- Correlation Output Peak at Lag d -->
    <g transform="translate(25, 325)">
      <rect width="695" height="220" rx="8" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.2"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#6d28d9">
        2. Cross-Correlation Peak Reveals Exact Delay Lag (l = d)
      </text>

      <line x1="65" y1="178" x2="650" y2="178" stroke="#0f172a" stroke-width="2.5"/>
      <path d="M 65 174 L 150 170 L 240 176 L 330 168 L 400 175 L 445 55 L 490 175 L 560 172 L 645 174"
            fill="none" stroke="#7c3aed" stroke-width="4"/>
      <circle cx="445" cy="55" r="7" fill="#6d28d9"/>
      <line x1="445" y1="55" x2="445" y2="178" stroke="#6d28d9" stroke-width="2" stroke-dasharray="5,4"/>

      <rect x="468" y="64" width="205" height="68" rx="6" fill="#ffffff" stroke="#7c3aed" stroke-width="1.5"/>
      <text x="570" y="94" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9" text-anchor="middle">Sharp Peak</text>
      <text x="570" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Lag d → Distance</text>

      <text x="445" y="206" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9" text-anchor="middle">Delay Lag l = d</text>
    </g>

    <!-- Bottom Comparison Card -->
    <g transform="translate(25, 565)">
      <rect width="695" height="150" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Convolution vs. Correlation Key Difference:</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Convolution FLIPS h[n] → models linear filter physics</text>
      <text x="20" y="104" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Correlation DOES NOT flip → measures waveform similarity</text>
      <text x="20" y="136" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9">Auto-Correlation R_xx pulls hidden sine waves out of noise!</text>
    </g>
  </g>
</svg>`
  },

  u2_fig_dft_4pt_intuition: {
    id: "u2_fig_dft_4pt_intuition",
    filename: "u2_fig6a_dft_twiddle_clock_and_bins.svg",
    title: "Figure 2.6A: DFT Intuition — Twiddle Clock-Hand W4^k & 4-Point Spectral Bins",
    description: "Complex unit circle phasor angles for N=4 (W4^0=+1, W4^1=-j, W4^2=-1, W4^3=+j) alongside the exact 4-point DFT magnitude spectrum of x[n] = {1, 0, 2, 1}.",
    topicRef: "2.6 Discrete Fourier Transform",
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <rect width="1600" height="900" fill="#ffffff"/>
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Title Banner -->
  <rect x="35" y="40" width="1530" height="65" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2"/>
  <text x="65" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="26" font-weight="700" fill="#0f172a">
    Figure 2.6A: DFT Intuition · Twiddle Clock-Hand (W4) &amp; 4-Point Spectrum
  </text>
  <text x="1535" y="81" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af" text-anchor="end">
    Unit II · Section 2.6
  </text>

  <!-- Left Panel: Complex Unit Circle Clock-Hand W4 -->
  <g transform="translate(35, 125)">
    <rect width="745" height="735" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#1e40af">
      A. Twiddle Factor W4 = exp(-j·2π/4) = -j (Clockwise Steps)
    </text>

    <g transform="translate(25, 72)">
      <rect width="695" height="450" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>

      <!-- Axes -->
      <line x1="120" y1="225" x2="575" y2="225" stroke="#64748b" stroke-width="2"/>
      <line x1="347" y1="45" x2="347" y2="405" stroke="#64748b" stroke-width="2"/>
      <text x="582" y="232" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">Re</text>
      <text x="360" y="48" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a">+j Im</text>

      <!-- Unit Circle -->
      <circle cx="347" cy="225" r="145" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="6,4"/>

      <!-- Clockwise curved arrow -->
      <path d="M 455 115 A 155 155 0 0 1 498 205" fill="none" stroke="#d97706" stroke-width="3.5"/>
      <polygon points="498,205 489,192 503,190" fill="#d97706"/>
      <text x="512" y="140" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#b45309">-90° / step</text>

      <!-- 4 Clock Points -->
      <circle cx="492" cy="225" r="11" fill="#15803d"/>
      <text x="515" y="218" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#15803d">W4⁰ = +1 (0°)</text>

      <circle cx="347" cy="370" r="11" fill="#dc2626"/>
      <text x="347" y="405" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#b91c1c" text-anchor="middle">W4¹ = -j (-90°)</text>

      <circle cx="202" cy="225" r="11" fill="#1e40af"/>
      <text x="182" y="218" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1e40af" text-anchor="end">W4² = -1 (-180°)</text>

      <circle cx="347" cy="80" r="11" fill="#6d28d9"/>
      <text x="347" y="65" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#6d28d9" text-anchor="middle">W4³ = +j (-270°)</text>
    </g>

    <g transform="translate(25, 540)">
      <rect width="695" height="175" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Why the Twiddle Factor Makes DFT Easy:</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Bin k = 0 (DC): W4^(0·n) = 1 → simply adds all samples!</text>
      <text x="20" y="106" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Bin k = 1: rotates 1 quadrant clockwise per sample step</text>
      <text x="20" y="142" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e40af">• Bin k = 2 (Nyquist): alternates +1, -1, +1, -1</text>
    </g>
  </g>

  <!-- Right Panel: Input Signal & 4-Point Magnitude Spectrum -->
  <g transform="translate(820, 125)">
    <rect width="745" height="735" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
    <rect width="745" height="54" rx="10" fill="#dcfce7" stroke="#bbf7d0" stroke-width="1"/>
    <text x="25" y="36" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#15803d">
      B. Example: x[n] = {1, 0, 2, 1} → 4-Point DFT Bins
    </text>

    <!-- Time Input Plot -->
    <g transform="translate(25, 72)">
      <rect width="695" height="205" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#1e40af">Time Sequence x[n] = {1, 0, 2, 1}</text>
      <line x1="70" y1="152" x2="630" y2="152" stroke="#0f172a" stroke-width="2"/>
      <line x1="160" y1="152" x2="160" y2="106" stroke="#2563eb" stroke-width="5"/><circle cx="160" cy="106" r="7" fill="#2563eb"/>
      <line x1="300" y1="152" x2="300" y2="152" stroke="#2563eb" stroke-width="5"/><circle cx="300" cy="152" r="7" fill="#2563eb"/>
      <line x1="440" y1="152" x2="440" y2="60" stroke="#2563eb" stroke-width="5"/><circle cx="440" cy="60" r="7" fill="#2563eb"/>
      <line x1="580" y1="152" x2="580" y2="106" stroke="#2563eb" stroke-width="5"/><circle cx="580" cy="106" r="7" fill="#2563eb"/>
      <text x="160" y="182" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">x[0] = 1</text>
      <text x="300" y="182" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">x[1] = 0</text>
      <text x="440" y="182" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">x[2] = 2</text>
      <text x="580" y="182" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">x[3] = 1</text>
    </g>

    <!-- DFT Magnitude Spectrum Plot -->
    <g transform="translate(25, 295)">
      <rect width="695" height="230" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#15803d">DFT Magnitude |X[k]| (4 Frequency Bins)</text>
      <line x1="70" y1="178" x2="630" y2="178" stroke="#0f172a" stroke-width="2.5"/>

      <!-- Bin 0: 4.0 -->
      <line x1="160" y1="178" x2="160" y2="62" stroke="#059669" stroke-width="6"/><circle cx="160" cy="62" r="7" fill="#059669"/>
      <text x="160" y="50" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">|X[0]| = 4</text>
      <text x="160" y="208" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">k = 0 (DC)</text>

      <!-- Bin 1: sqrt(2) = 1.414 -->
      <line x1="300" y1="178" x2="300" y2="137" stroke="#059669" stroke-width="6"/><circle cx="300" cy="137" r="7" fill="#059669"/>
      <text x="300" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">1.414</text>
      <text x="300" y="208" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">k = 1</text>

      <!-- Bin 2: 2.0 -->
      <line x1="440" y1="178" x2="440" y2="120" stroke="#059669" stroke-width="6"/><circle cx="440" cy="120" r="7" fill="#059669"/>
      <text x="440" y="105" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">|X[2]| = 2</text>
      <text x="440" y="208" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">k = 2 (Nyq)</text>

      <!-- Bin 3: sqrt(2) = 1.414 -->
      <line x1="580" y1="178" x2="580" y2="137" stroke="#7c3aed" stroke-width="6"/><circle cx="580" cy="137" r="7" fill="#7c3aed"/>
      <text x="580" y="122" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#6d28d9" text-anchor="middle">1.414</text>
      <text x="580" y="208" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#6d28d9" text-anchor="middle">k = 3 (Conj)</text>
    </g>

    <g transform="translate(25, 540)">
      <rect width="695" height="175" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
      <text x="20" y="34" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="700" fill="#0f172a">Conjugate Symmetry for Real Signals:</text>
      <text x="20" y="70" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• X[1] = -1 + j   and   X[3] = -1 - j  (Exact conjugate pair!)</text>
      <text x="20" y="106" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Only bins k = 0 to N/2 carry unique frequency info</text>
      <text x="20" y="142" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">• Parseval Check: 1²+0²+2²+1² = 6 = (16+2+4+2)/4 ✓</text>
    </g>
  </g>
</svg>`
  }
};


