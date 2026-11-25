import { SvgAsset } from './svgAssets';

export const SVG_FIGURES_UNIT4: Record<string, SvgAsset> = {
  u4_fig1: {
    id: 'u4_fig1',
    filename: 'u4_fig1_sensor_transducer_classification.svg',
    title: 'Figure 4.1: Sensor vs. Transducer Architecture & Active/Passive Taxonomy',
    topicRef: '4.1 Sensors and Transducers',
    description:
      'Functional block diagram differentiating sensing element from transduction stage, paired with active (self-generating) vs passive (externally excited) transducer taxonomy.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 4.1: Sensor &amp; Transducer Anatomy · Active vs. Passive
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit IV · Sec 4.1
  </text>

  <!-- Left: Sensor vs Transducer Signal Chain -->
  <rect x="48" y="130" width="734" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="76" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    A. Sensor vs. Transducer Signal Chain
  </text>
  <text x="76" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Physical measurand to usable electrical output
  </text>

  <!-- Input Measurand Block -->
  <rect x="76" y="248" width="168" height="114" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="160" y="294" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1e40af" text-anchor="middle">Physical</text>
  <text x="160" y="326" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1e40af" text-anchor="middle">Measurand</text>
  <text x="160" y="392" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">Force, Temp</text>

  <path d="M 244 305 L 284 305" stroke="#3b82f6" stroke-width="3.5" />
  <polygon points="284,305 272,298 272,312" fill="#3b82f6" />

  <!-- Sensing Element Block -->
  <rect x="288" y="248" width="204" height="114" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <text x="390" y="284" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#92400e" text-anchor="middle">Primary Sensor</text>
  <text x="390" y="314" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#78350f" text-anchor="middle">(Detector)</text>
  <text x="390" y="344" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#b45309" text-anchor="middle">Diaphragm</text>
  <text x="390" y="392" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">Strain / Motion</text>

  <path d="M 492 305 L 532 305" stroke="#d97706" stroke-width="3.5" />
  <polygon points="532,305 520,298 520,312" fill="#d97706" />

  <!-- Transduction Element Block -->
  <rect x="536" y="248" width="214" height="114" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
  <text x="643" y="284" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#065f46" text-anchor="middle">Transducer</text>
  <text x="643" y="314" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#047857" text-anchor="middle">(Converter)</text>
  <text x="643" y="344" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#047857" text-anchor="middle">Foil, LVDT</text>
  <text x="643" y="392" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">ΔR, ΔC, ΔV</text>

  <!-- Transducer Boundary Box -->
  <rect x="274" y="226" width="488" height="190" rx="10" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4" />
  <text x="518" y="446" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1d4ed8" text-anchor="middle">Complete Transducer Assembly</text>

  <!-- Signal Conditioning & Display Row -->
  <path d="M 643 416 L 643 506 L 594 506" stroke="#10b981" stroke-width="3.5" />
  <polygon points="594,506 606,499 606,513" fill="#10b981" />

  <rect x="356" y="464" width="234" height="92" rx="8" fill="#f1f5f9" stroke="#475569" stroke-width="2" />
  <text x="473" y="502" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0f172a" text-anchor="middle">Conditioning</text>
  <text x="473" y="534" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155" text-anchor="middle">Bridge, Amp, ADC</text>

  <path d="M 356 506 L 304 506" stroke="#475569" stroke-width="3.5" />
  <polygon points="304,506 316,499 316,513" fill="#475569" />

  <rect x="86" y="464" width="214" height="92" rx="8" fill="#faf5ff" stroke="#9333ea" stroke-width="2" />
  <text x="193" y="502" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#6b21a8" text-anchor="middle">Host / Display</text>
  <text x="193" y="534" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#6b21a8" text-anchor="middle">DAQ, PLC, Screen</text>

  <!-- Key Distinction Note -->
  <rect x="76" y="588" width="676" height="250" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="96" y="626" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#0f172a">Technical Distinction:</text>
  <text x="96" y="666" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Sensor: Senses physical change (e.g., Bourdon tube tip)</text>
  <text x="96" y="704" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Transducer: Converts energy into electrical output</text>
  <text x="96" y="742" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">• Sensitivity: Static slope K = ΔOutput / ΔInput</text>
  <text x="96" y="786" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1d4ed8" font-weight="700">• Every transducer is a sensor; not every sensor</text>
  <text x="112" y="814" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1d4ed8" font-weight="700">produces an electrical output.</text>

  <!-- Right: Active vs Passive Transducers -->
  <rect x="810" y="130" width="742" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="838" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    B. Classification: Active vs. Passive
  </text>
  <text x="838" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Power source requirement for signal conversion
  </text>

  <!-- Active Column -->
  <rect x="836" y="232" width="336" height="336" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" />
  <text x="1004" y="268" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="800" fill="#15803d" text-anchor="middle">Active (Self-Generating)</text>
  <text x="852" y="306" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">• No external power needed</text>
  <text x="852" y="338" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">• Generates voltage or charge</text>
  <text x="852" y="378" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#14532d">Core Examples:</text>
  <text x="862" y="410" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#166534">1. Thermocouple (Seebeck)</text>
  <text x="862" y="440" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#166534">2. Piezo crystal (Force → Q)</text>
  <text x="862" y="470" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#166534">3. Solar cell (Light → V)</text>
  <text x="862" y="500" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#166534">4. Tachometer (RPM → V)</text>
  <rect x="852" y="518" width="304" height="38" rx="6" fill="#dcfce7" stroke="#86efac" />
  <text x="1004" y="544" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#14532d" text-anchor="middle">Input Energy → Output</text>

  <!-- Passive Column -->
  <rect x="1192" y="232" width="336" height="336" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="1360" y="268" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="23" font-weight="800" fill="#1e40af" text-anchor="middle">Passive (Ext. Excited)</text>
  <text x="1208" y="306" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• Needs excitation supply</text>
  <text x="1208" y="338" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• Modulates R, L, or C value</text>
  <text x="1208" y="378" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#172554">Core Examples:</text>
  <text x="1218" y="410" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">1. Strain gauge (ΔR)</text>
  <text x="1218" y="440" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">2. RTD &amp; Thermistor (ΔR)</text>
  <text x="1218" y="470" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">3. LVDT core coil (ΔL)</text>
  <text x="1218" y="500" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">4. Capacitive cell (ΔC)</text>
  <rect x="1208" y="518" width="304" height="38" rx="6" fill="#dbeafe" stroke="#93c5fd" />
  <text x="1360" y="544" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e3a8a" text-anchor="middle">Excitation + Δ(R, L, C)</text>

  <!-- Static vs Dynamic Characteristics Comparison -->
  <rect x="836" y="588" width="692" height="250" rx="8" fill="#fafaf9" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="858" y="626" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#0f172a">Sensor Selection Criteria:</text>
  <text x="858" y="666" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">1. Static: Accuracy, Sensitivity, Linearity, Hysteresis</text>
  <text x="858" y="704" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">2. Dynamic: Time constant (τ), Natural freq (ωn), ζ</text>
  <text x="858" y="742" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e293b">3. Environment: Temp drift, sealing, shock &amp; EMI</text>
  <text x="858" y="786" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">Rule: Keep sensor bandwidth well above signal</text>
  <text x="858" y="814" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#047857">frequency to prevent lag and attenuation.</text>
</svg>`,
  },

  u4_fig2: {
    id: 'u4_fig2',
    filename: 'u4_fig2_force_moment_torque_loadcells.svg',
    title: 'Figure 4.2: Force, Moment & Torque Measurement: Load Cell Architectures',
    topicRef: '4.2 Force, Moment and Torque Measurement',
    description:
      'Structural engineering schematics of S-beam, Shear-beam, Column canister load cells, multi-axis 6-DOF force/moment decoupling, and rotary torque shaft telemetry.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 4.2: Force, Moment &amp; Torque · Load Cells &amp; Telemetry
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit IV · Sec 4.2
  </text>

  <!-- Panel 1: S-Type & Shear Beam Load Cells -->
  <rect x="48" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="72" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">1. Force Load Cells</text>
  <text x="72" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">S-Beam &amp; Shear-Beam Flexures</text>

  <!-- S-Beam Diagram -->
  <rect x="72" y="224" width="436" height="226" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.4" />
  <path d="M 154 258 L 314 258 L 314 298 L 214 298 L 214 358 L 314 358 L 314 428 L 154 428 L 154 388 L 254 388 L 254 328 L 154 328 Z" fill="#cbd5e1" stroke="#334155" stroke-width="2.5" />
  <line x1="234" y1="236" x2="234" y2="258" stroke="#dc2626" stroke-width="4" />
  <text x="252" y="252" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">Force F (Tension)</text>
  <circle cx="234" cy="343" r="18" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="234" y="350" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#854d0e" text-anchor="middle">SG</text>

  <text x="72" y="482" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">S-Type Tension / Compression:</text>
  <text x="72" y="514" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">Full bridge on central web cancels</text>
  <text x="72" y="544" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#334155">off-axis bending &amp; thermal drift.</text>

  <!-- Shear Beam Specs -->
  <rect x="72" y="572" width="436" height="266" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.4" />
  <text x="92" y="610" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1e40af">Shear &amp; Column Cells:</text>
  <text x="92" y="648" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• Shear Web: ±45° gauges measure</text>
  <text x="108" y="676" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">principal shear τ = VQ/(Ib)</text>
  <text x="92" y="714" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• Column Cell: Heavy (&gt;100 kN)</text>
  <text x="108" y="742" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">truck scales &amp; silo hoppers</text>
  <text x="92" y="786" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Rated Output: 2.0 mV/V typical</text>

  <!-- Panel 2: Multi-Axis 6-DOF Force & Moment Measurement -->
  <rect x="558" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="582" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">2. 6-DOF Decoupling</text>
  <text x="582" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">Multi-axis Fx, Fy, Fz &amp; Mx, My, Mz</text>

  <!-- 3D Coordinate Axis Diagram -->
  <rect x="582" y="224" width="436" height="226" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.4" />
  <circle cx="792" cy="338" r="40" fill="#e2e8f0" stroke="#334155" stroke-width="3" />
  <line x1="792" y1="338" x2="932" y2="338" stroke="#2563eb" stroke-width="4" />
  <polygon points="932,338 920,331 920,345" fill="#2563eb" />
  <text x="944" y="345" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#2563eb">Fx</text>

  <line x1="792" y1="338" x2="792" y2="248" stroke="#dc2626" stroke-width="4" />
  <polygon points="792,248 785,260 799,260" fill="#dc2626" />
  <text x="806" y="264" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#dc2626">Fz</text>

  <line x1="792" y1="338" x2="702" y2="398" stroke="#16a34a" stroke-width="4" />
  <polygon points="702,398 708,386 718,396" fill="#16a34a" />
  <text x="666" y="416" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#15803d">Fy</text>

  <path d="M 852 316 A 26 26 0 0 1 852 360" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="4,2" />
  <text x="866" y="378" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#2563eb">Mx</text>

  <path d="M 772 280 A 26 26 0 0 1 812 280" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="4,2" />
  <text x="822" y="294" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">Mz</text>

  <!-- Calibration Decoupling Matrix -->
  <rect x="582" y="472" width="436" height="366" rx="8" fill="#faf5ff" stroke="#c084fc" stroke-width="1.4" />
  <text x="602" y="510" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#7e22ce">Cross-Talk Decoupling:</text>
  <text x="602" y="548" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#581c87">[F] = [C] · [V]</text>
  <text x="602" y="590" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#4c1d95">• Single axis load induces</text>
  <text x="616" y="618" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#4c1d95">cross-talk on other axes.</text>
  <text x="602" y="658" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#4c1d95">• 6×6 matrix [C] decouples</text>
  <text x="616" y="686" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#4c1d95">raw bridge voltages [V].</text>
  <text x="602" y="732" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#6b21a8">Applications:</text>
  <text x="602" y="768" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#581c87">• Wind tunnel model balances</text>
  <text x="602" y="802" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#581c87">• Robotic wrist haptic sensors</text>

  <!-- Panel 3: Torque Measurement Systems -->
  <rect x="1068" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="1092" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">3. Torque Transducers</text>
  <text x="1092" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">Shaft Torsion &amp; Rotary Telemetry</text>

  <!-- Shaft Torsion Diagram -->
  <rect x="1092" y="224" width="436" height="226" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.4" />
  <rect x="1142" y="302" width="336" height="72" rx="6" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <path d="M 1130 306 A 32 32 0 0 1 1130 370" fill="none" stroke="#d97706" stroke-width="4.5" />
  <polygon points="1136,370 1124,378 1132,360" fill="#d97706" />
  <text x="1114" y="284" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#b45309">Torque T</text>

  <rect x="1280" y="318" width="60" height="40" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2" transform="rotate(45 1310 338)" />
  <text x="1310" y="422" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#854d0e" text-anchor="middle">±45° Shear Rosette</text>

  <!-- Formula & Transmission methods -->
  <rect x="1092" y="472" width="436" height="366" rx="8" fill="#fefce8" stroke="#fde047" stroke-width="1.4" />
  <text x="1112" y="510" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#854d0e">Torsional Mechanics:</text>
  <text x="1112" y="546" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#713f12">τ_max = 16·T / (π·d³)</text>
  <text x="1112" y="584" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• ±45° full bridge cancels axial</text>
  <text x="1126" y="612" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">&amp; bending loads cleanly!</text>
  <text x="1112" y="654" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#78350f">Rotating Shaft Telemetry:</text>
  <text x="1112" y="690" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">1. Slip-Rings: Carbon brushes</text>
  <text x="1136" y="718" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">(wears at high RPM)</text>
  <text x="1112" y="756" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">2. Wireless RF / Inductive:</text>
  <text x="1136" y="784" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">Contactless (&gt;20k RPM)</text>
  <text x="1112" y="822" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d">Reaction sensors: non-rotating</text>
</svg>`,
  },

  u4_fig3: {
    id: 'u4_fig3',
    filename: 'u4_fig3_pressure_sensors_manometer_bourdon.svg',
    title: 'Figure 4.3: Pressure Measurement: U-Tube Manometer, Bourdon Tube & MEMS',
    topicRef: '4.3.2 Pressure gauge/sensors',
    description:
      'Comparative engineering diagrams of primary liquid manometer hydrostatic balance, mechanical C-type Bourdon tube elasticity, and piezoresistive silicon MEMS diaphragm.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 4.3: Pressure Sensors · Manometer, Bourdon &amp; MEMS
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit IV · Sec 4.3.2
  </text>

  <!-- Panel 1: U-Tube Manometer -->
  <rect x="48" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="72" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">1. U-Tube Manometer</text>
  <text x="72" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">Primary Hydrostatic Standard</text>

  <!-- U-Tube Glass Drawing -->
  <rect x="72" y="224" width="436" height="278" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <rect x="172" y="274" width="44" height="196" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <rect x="172" y="430" width="168" height="40" fill="#0284c7" stroke="#0284c7" />
  <rect x="296" y="274" width="44" height="196" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <rect x="174" y="382" width="40" height="56" fill="#0284c7" />
  <rect x="298" y="320" width="40" height="118" fill="#0284c7" />

  <text x="150" y="258" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">P₁ (Process)</text>
  <text x="336" y="258" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#15803d" text-anchor="middle">P₂ (Ref)</text>
  <line x1="220" y1="382" x2="294" y2="382" stroke="#475569" stroke-width="2" stroke-dasharray="4,2" />
  <line x1="348" y1="320" x2="388" y2="320" stroke="#dc2626" stroke-width="2" />
  <line x1="348" y1="382" x2="388" y2="382" stroke="#dc2626" stroke-width="2" />
  <line x1="376" y1="320" x2="376" y2="382" stroke="#dc2626" stroke-width="3" />
  <text x="396" y="358" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#dc2626">Δh</text>

  <!-- Governing Equation & Notes -->
  <rect x="72" y="522" width="436" height="316" rx="8" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.4" />
  <text x="92" y="560" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#0369a1">Hydrostatic Balance:</text>
  <text x="92" y="598" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#0369a1">ΔP = ρ_m · g · Δh</text>
  <text x="92" y="638" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#0c4a6e">• Primary standard: No cal needed</text>
  <text x="92" y="674" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#0c4a6e">• Water (1000) / Mercury (13,546)</text>
  <text x="92" y="712" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#0c4a6e">• Inclined Tube: L = Δh / sin(θ)</text>
  <text x="108" y="742" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#0c4a6e">amplifies low ΔP reading</text>
  <text x="92" y="794" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0369a1">Con: Slow response, glass tube</text>

  <!-- Panel 2: Bourdon Tube Gauge -->
  <rect x="558" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="582" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">2. C-Type Bourdon Tube</text>
  <text x="582" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">Elastic Tube &amp; Sector Gearing</text>

  <!-- Bourdon Mechanism Schematic -->
  <rect x="582" y="224" width="436" height="278" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <path d="M 716 462 A 96 96 0 1 1 872 326" fill="none" stroke="#64748b" stroke-width="18" stroke-linecap="round" />
  <rect x="686" y="446" width="60" height="32" rx="4" fill="#334155" />
  <text x="634" y="486" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Press. P</text>

  <line x1="872" y1="326" x2="922" y2="298" stroke="#dc2626" stroke-width="3.5" />
  <polygon points="922,298 910,302 915,313" fill="#dc2626" />
  <text x="922" y="282" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Tip Motion</text>

  <line x1="872" y1="326" x2="804" y2="372" stroke="#d97706" stroke-width="3.5" />
  <circle cx="804" cy="372" r="10" fill="#d97706" />
  <line x1="804" y1="372" x2="762" y2="312" stroke="#0f172a" stroke-width="4.5" />
  <text x="720" y="306" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a">Pointer</text>

  <!-- Bourdon Notes -->
  <rect x="582" y="522" width="436" height="316" rx="8" fill="#fefce8" stroke="#fde047" stroke-width="1.4" />
  <text x="602" y="560" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#854d0e">Elastic Principle:</text>
  <text x="602" y="600" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Oval tube uncurls toward circular</text>
  <text x="616" y="628" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">shape as pressure rises</text>
  <text x="602" y="668" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Gear amplifies 2–3 mm tip</text>
  <text x="616" y="696" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">motion to 270° dial sweep</text>
  <text x="602" y="738" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Range: 100 kPa to 700 MPa</text>
  <text x="602" y="794" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#854d0e">Types: C-tube, Helical, Spiral</text>

  <!-- Panel 3: MEMS Piezoresistive Diaphragm -->
  <rect x="1068" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="1092" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">3. MEMS Pressure</text>
  <text x="1092" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">Silicon Diaphragm Transducer</text>

  <!-- MEMS Diaphragm Schematic -->
  <rect x="1092" y="224" width="436" height="278" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <rect x="1136" y="362" width="90" height="82" fill="#94a3b8" />
  <rect x="1394" y="362" width="90" height="82" fill="#94a3b8" />
  <rect x="1136" y="362" width="348" height="16" fill="#38bdf8" />
  <path d="M 1226 362 Q 1310 390 1394 362" fill="none" stroke="#0284c7" stroke-width="6" />
  <text x="1310" y="328" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#dc2626" text-anchor="middle">Pressure P ↓</text>
  <circle cx="1244" cy="362" r="7" fill="#dc2626" />
  <circle cx="1376" cy="362" r="7" fill="#dc2626" />
  <text x="1310" y="472" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a" text-anchor="middle">Etched Reference Cavity</text>

  <!-- MEMS Specs -->
  <rect x="1092" y="522" width="436" height="316" rx="8" fill="#fdf4ff" stroke="#e879f9" stroke-width="1.4" />
  <text x="1112" y="560" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#86198f">MEMS Architecture:</text>
  <text x="1112" y="600" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#701a75">• Doped silicon bridge at</text>
  <text x="1126" y="628" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#701a75">high-stress diaphragm edges</text>
  <text x="1112" y="668" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#701a75">• High GF (100–150 vs 2.0 foil)</text>
  <text x="1112" y="706" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#701a75">• On-chip ASIC calibration &amp;</text>
  <text x="1126" y="734" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#701a75">I2C / SPI digital readout</text>
  <text x="1112" y="794" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#86198f">Piezo crystal used for blast P</text>
</svg>`,
  },

  u4_fig4: {
    id: 'u4_fig4',
    filename: 'u4_fig4_flow_measurement_pitot_venturi.svg',
    title: 'Figure 4.4: Flow Measurement: Pitot-Static Probe & Obstruction Meters',
    topicRef: '4.3.1 Flow meter and pitot probes',
    description:
      'Governing aerodynamics of Pitot-static tube Bernoulli stagnation derivation alongside Venturi tube differential pressure and discharge coefficients.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 4.4: Flow &amp; Velocity · Pitot-Static Tube &amp; Venturi
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit IV · Sec 4.3.1
  </text>

  <!-- Left: Pitot-Static Tube -->
  <rect x="48" y="130" width="734" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="76" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    A. Pitot-Static Probe Aerodynamics
  </text>
  <text x="76" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Stagnation vs. static pressure &amp; Bernoulli law
  </text>

  <!-- Pitot Probe Drawing -->
  <rect x="76" y="224" width="678" height="274" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <line x1="98" y1="306" x2="294" y2="306" stroke="#38bdf8" stroke-width="3.5" />
  <line x1="98" y1="346" x2="254" y2="346" stroke="#38bdf8" stroke-width="3.5" />
  <line x1="98" y1="386" x2="254" y2="386" stroke="#38bdf8" stroke-width="3.5" />
  <line x1="98" y1="426" x2="294" y2="426" stroke="#38bdf8" stroke-width="3.5" />
  <text x="98" y="280" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0369a1">Freestream: v, P_s</text>

  <path d="M 276 346 L 520 346 L 520 282" fill="none" stroke="#475569" stroke-width="9" />
  <path d="M 276 386 L 520 386 L 520 456" fill="none" stroke="#475569" stroke-width="9" />
  <path d="M 256 366 L 610 366 L 610 282" fill="none" stroke="#dc2626" stroke-width="6.5" />

  <circle cx="380" cy="342" r="5" fill="#0284c7" />
  <circle cx="380" cy="390" r="5" fill="#0284c7" />
  <text x="380" y="326" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0369a1" text-anchor="middle">Static Ports (P_s)</text>

  <circle cx="256" cy="366" r="7" fill="#dc2626" />
  <text x="278" y="454" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Stagnation Pt (P_t)</text>

  <rect x="492" y="236" width="236" height="52" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
  <text x="610" y="270" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1e40af" text-anchor="middle">ΔP = P_t − P_s</text>

  <!-- Derivation Card -->
  <rect x="76" y="518" width="678" height="320" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.4" />
  <text x="96" y="556" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#1e40af">Bernoulli Flow Velocity Derivation:</text>
  <text x="96" y="596" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1d4ed8">P_total = P_static + 0.5 · ρ · v²</text>
  <text x="96" y="636" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#dc2626">v = C_p · sqrt( 2 · (P_t - P_s) / ρ )</text>
  <text x="96" y="680" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• C_p: Probe calibration factor (0.98 – 1.00 typical)</text>
  <text x="96" y="716" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• Alignment: Error stays &lt;1% within ±10° yaw angle</text>
  <text x="96" y="752" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• High speed: Use compressible Pitot law at M &gt; 0.3</text>
  <text x="96" y="794" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Uses: Aircraft airspeed (ASI) &amp; wind tunnels</text>

  <!-- Right: Venturi & Obstruction Flow Meters -->
  <rect x="810" y="130" width="742" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="838" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    B. Obstruction Flow Meters
  </text>
  <text x="838" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Venturi tube, flow nozzle &amp; orifice plate
  </text>

  <!-- Venturi Tube Drawing -->
  <rect x="838" y="224" width="686" height="274" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <path d="M 868 298 L 1020 298 L 1094 342 L 1164 342 L 1344 298 L 1492 298 L 1492 436 L 1344 436 L 1164 396 L 1094 396 L 1020 436 L 868 436 Z" fill="#e2e8f0" stroke="#334155" stroke-width="2.5" />

  <circle cx="950" cy="298" r="6" fill="#2563eb" />
  <line x1="950" y1="298" x2="950" y2="266" stroke="#2563eb" stroke-width="3.5" />
  <text x="950" y="256" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">P₁, A₁, v₁</text>

  <circle cx="1128" cy="342" r="6" fill="#dc2626" />
  <line x1="1128" y1="342" x2="1128" y2="266" stroke="#dc2626" stroke-width="3.5" />
  <text x="1128" y="256" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">P₂, A₂, v₂</text>

  <text x="1285" y="476" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Diffuser (5°–7° recovery cone)</text>

  <!-- Discharge Equation Card -->
  <rect x="838" y="518" width="686" height="320" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.4" />
  <text x="858" y="556" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#166534">Volumetric Discharge Rate Q:</text>
  <text x="858" y="596" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#15803d">Q = C_d · A₂ · √[ 2·ΔP / (ρ·(1 - β⁴)) ]</text>
  <text x="858" y="636" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">Diameter ratio β = d₂ / d₁</text>
  <text x="858" y="676" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#166534">Obstruction Meter Comparison:</text>
  <text x="858" y="714" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">• Venturi: C_d ≈ 0.98 (only 10–15% head loss)</text>
  <text x="858" y="750" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">• Flow Nozzle: C_d ≈ 0.96 (30–50% head loss)</text>
  <text x="858" y="786" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">• Orifice Plate: C_d ≈ 0.61 (low cost, 60–80% loss)</text>
</svg>`,
  },

  u4_fig5: {
    id: 'u4_fig5',
    filename: 'u4_fig5_flow_visualization_piv_schlieren_bos.svg',
    title: 'Figure 4.5: Optical Flow Visualization: PIV, Schlieren & BOS',
    topicRef: '4.3.3 Flow visualization: PIV, Schlieren, and BOS',
    description:
      'Optical setups for Particle Image Velocimetry (PIV laser sheet & cross-correlation), Z-type Schlieren imaging with knife-edge, and Background Oriented Schlieren (BOS).',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 4.5: Optical Flow · PIV, Z-Type Schlieren &amp; BOS
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit IV · Sec 4.3.3
  </text>

  <!-- Left: Particle Image Velocimetry (PIV) -->
  <rect x="48" y="130" width="734" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="76" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    A. Particle Image Velocimetry (PIV)
  </text>
  <text x="76" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Planar velocity vectors via laser sheet &amp; camera
  </text>

  <!-- PIV Schematic Diagram -->
  <rect x="76" y="224" width="678" height="278" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <rect x="94" y="266" width="166" height="84" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2" />
  <text x="177" y="302" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b91c1c" text-anchor="middle">Nd:YAG Laser</text>
  <text x="177" y="332" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#991b1b" text-anchor="middle">532 nm Green</text>

  <path d="M 260 308 L 322 308" stroke="#ef4444" stroke-width="4.5" />
  <rect x="322" y="278" width="24" height="60" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
  <text x="334" y="264" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#334155" text-anchor="middle">Lens</text>

  <polygon points="346,308 690,242 690,468" fill="#86efac" opacity="0.35" stroke="#16a34a" stroke-width="2.5" />
  <text x="530" y="352" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#15803d" text-anchor="middle">Laser Light Sheet</text>
  <text x="530" y="382" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#166534" text-anchor="middle">&amp; Tracer Particles</text>

  <rect x="410" y="424" width="164" height="64" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="492" y="464" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1d4ed8" text-anchor="middle">PIV Camera</text>
  <line x1="492" y1="424" x2="492" y2="388" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="4,2" />

  <!-- PIV Method Notes -->
  <rect x="76" y="520" width="678" height="318" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.4" />
  <text x="96" y="558" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#166534">PIV Measurement Principle:</text>
  <text x="96" y="596" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">1. Seeding: 1–5 μm oil/TiO₂ particles track flow</text>
  <text x="114" y="624" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">without slip (Stokes number St &lt;&lt; 0.1)</text>
  <text x="96" y="662" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">2. Double Pulse: Laser fires two flashes at Δt</text>
  <text x="96" y="700" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#14532d">3. Cross-Correlation across 32×32 px windows</text>
  <text x="96" y="738" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#15803d">   Velocity Vector: v = Δs / Δt</text>
  <text x="96" y="782" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d">4. Non-intrusive 2D / 3D velocity field map</text>

  <!-- Right: Z-Type Schlieren & BOS -->
  <rect x="810" y="130" width="742" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="838" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    B. Schlieren Imaging &amp; BOS
  </text>
  <text x="838" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Density gradient (∂n/∂y) shock visualization
  </text>

  <!-- Z-Type Schlieren Diagram -->
  <rect x="838" y="224" width="686" height="278" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <circle cx="886" cy="430" r="14" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
  <text x="900" y="476" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309" text-anchor="middle">LED Source</text>

  <path d="M 960 368 Q 946 426 960 484" fill="none" stroke="#2563eb" stroke-width="8" />
  <text x="960" y="348" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">Mirror M₁</text>

  <line x1="960" y1="426" x2="1376" y2="294" stroke="#f59e0b" stroke-width="3" />
  <rect x="1102" y="318" width="154" height="84" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3" />
  <text x="1179" y="366" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Shock Flow</text>

  <path d="M 1376 246 Q 1390 294 1376 342" fill="none" stroke="#2563eb" stroke-width="8" />
  <text x="1426" y="256" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Mirror M₂</text>

  <line x1="1376" y1="294" x2="1466" y2="424" stroke="#f59e0b" stroke-width="3" />
  <line x1="1460" y1="404" x2="1460" y2="438" stroke="#0f172a" stroke-width="6" />
  <text x="1436" y="476" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a" text-anchor="middle">Knife Edge</text>

  <!-- Schlieren Physics Card -->
  <rect x="838" y="520" width="686" height="318" rx="8" fill="#fefce8" stroke="#fde047" stroke-width="1.4" />
  <text x="858" y="558" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#854d0e">Gladstone-Dale Physics &amp; Deflection:</text>
  <text x="858" y="598" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#713f12">n - 1 = K · ρ,   ε_y = (1/n) · ∫ (∂n/∂y) dz</text>
  <text x="858" y="640" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Light bends toward higher density fluid zones</text>
  <text x="858" y="676" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Knife-edge converts refraction angle into contrast</text>
  <text x="858" y="722" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#78350f">Background Oriented Schlieren (BOS):</text>
  <text x="858" y="758" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• No mirrors needed — uses random dot backdrop</text>
  <text x="858" y="794" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Tracks pixel shift δ from refractive index gradients</text>
</svg>`,
  },

  u4_fig6: {
    id: 'u4_fig6',
    filename: 'u4_fig6_temperature_rtd_thermocouple.svg',
    title: 'Figure 4.6: Thermal Sensors: RTD (PT100) vs. Thermocouple (Seebeck Effect)',
    topicRef: '4.4 Thermal measurement',
    description:
      'Comparison of RTD resistance thermometry with 3/4-wire Kelvin lead compensation and Thermocouple thermoelectric Seebeck loop with Cold Junction Compensation (CJC).',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 4.6: Temperature · RTD (PT100) &amp; Thermocouple (CJC)
  </text>
  <text x="1310" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit IV · Sec 4.4
  </text>

  <!-- Left: RTD (PT100) Resistance Thermometer -->
  <rect x="48" y="130" width="734" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="76" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    A. Resistance Detector (RTD PT100)
  </text>
  <text x="76" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Positive temp coefficient (PTC) &amp; 3-wire compensation
  </text>

  <!-- RTD Circuit Diagram -->
  <rect x="76" y="224" width="678" height="274" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <rect x="134" y="270" width="76" height="40" rx="4" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
  <text x="172" y="297" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#9a3412" text-anchor="middle">R₁</text>

  <rect x="304" y="270" width="76" height="40" rx="4" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
  <text x="342" y="297" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#9a3412" text-anchor="middle">R₂</text>

  <rect x="134" y="394" width="76" height="40" rx="4" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
  <text x="172" y="421" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#9a3412" text-anchor="middle">R₃</text>

  <rect x="572" y="344" width="150" height="72" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <text x="647" y="388" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#0369a1" text-anchor="middle">PT100 RTD</text>

  <line x1="380" y1="290" x2="572" y2="356" stroke="#dc2626" stroke-width="3" />
  <text x="480" y="310" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626" text-anchor="middle">Lead 1 (r_L)</text>

  <line x1="256" y1="364" x2="572" y2="380" stroke="#16a34a" stroke-width="3" />
  <text x="414" y="362" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Sense Lead</text>

  <line x1="210" y1="422" x2="647" y2="422" stroke="#dc2626" stroke-width="3" />
  <text x="430" y="456" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#dc2626" text-anchor="middle">Lead 3 (r_L)</text>

  <!-- RTD Specs -->
  <rect x="76" y="518" width="678" height="320" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.4" />
  <text x="96" y="556" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#1e40af">Callendar-Van Dusen Equation:</text>
  <text x="96" y="596" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1d4ed8">R(T) = R₀ · [ 1 + A·T + B·T² ]   (T ≥ 0 °C)</text>
  <text x="96" y="638" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• PT100: R₀ = 100.0 Ω at 0 °C (α = 0.00385 /°C)</text>
  <text x="96" y="676" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• 3-Wire Bridge cancels matching lead r_L drift</text>
  <text x="112" y="704" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">across opposite Wheatstone bridge arms</text>
  <text x="96" y="744" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• Keep excitation I &lt; 1 mA to avoid self-heating</text>
  <text x="96" y="794" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">Best accuracy (±0.05 °C), slower than TC</text>

  <!-- Right: Thermocouple & CJC -->
  <rect x="810" y="130" width="742" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="838" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">
    B. Thermocouple &amp; Cold Junction (CJC)
  </text>
  <text x="838" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">
    Seebeck loop voltage &amp; isothermal reference
  </text>

  <!-- Thermocouple Circuit Diagram -->
  <rect x="838" y="224" width="686" height="274" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.4" />
  <circle cx="940" cy="364" r="12" fill="#dc2626" />
  <text x="940" y="330" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626" text-anchor="middle">Hot (T_hot)</text>
  <text x="940" y="418" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">Weld Bead</text>

  <path d="M 940 364 C 1020 298, 1130 298, 1226 324" fill="none" stroke="#2563eb" stroke-width="4.5" />
  <text x="1084" y="294" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8" text-anchor="middle">Metal A (Chromel)</text>

  <path d="M 940 364 C 1020 430, 1130 430, 1226 404" fill="none" stroke="#ea580c" stroke-width="4.5" />
  <text x="1084" y="456" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#c2410c" text-anchor="middle">Metal B (Alumel)</text>

  <rect x="1226" y="292" width="184" height="148" rx="8" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="1318" y="328" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#854d0e" text-anchor="middle">CJC (T_ref)</text>
  <rect x="1244" y="352" width="148" height="44" rx="6" fill="#ffffff" stroke="#ca8a04" stroke-width="1.5" />
  <text x="1318" y="381" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#854d0e" text-anchor="middle">IC / RTD</text>

  <circle cx="1478" cy="364" r="26" fill="#eff6ff" stroke="#2563eb" stroke-width="2.5" />
  <text x="1478" y="372" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="24" font-weight="800" fill="#1e40af" text-anchor="middle">V</text>
  <line x1="1410" y1="330" x2="1454" y2="352" stroke="#0f172a" stroke-width="2.5" />
  <line x1="1410" y1="398" x2="1454" y2="376" stroke="#0f172a" stroke-width="2.5" />

  <!-- Thermocouple Physics Notes -->
  <rect x="838" y="518" width="686" height="320" rx="8" fill="#fefce8" stroke="#fde047" stroke-width="1.4" />
  <text x="858" y="556" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#854d0e">Seebeck Effect &amp; CJC:</text>
  <text x="858" y="596" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#713f12">V_net ≈ S_AB · (T_hot − T_ref)</text>
  <text x="858" y="638" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Reads ΔT between Hot &amp; Cold junctions only</text>
  <text x="858" y="676" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• CJC measures T_ref and adds software offset</text>
  <text x="858" y="722" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#78350f">Common Calibration Types:</text>
  <text x="858" y="758" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Type K: 41 μV/°C, -200 to +1250 °C (general)</text>
  <text x="858" y="794" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#713f12">• Type J: 51 μV/°C  ·  Type T: high cryogenic stability</text>
</svg>`,
  },

  u4_fig7: {
    id: 'u4_fig7',
    filename: 'u4_fig7_pyrometry_speed_distance.svg',
    title: 'Figure 4.7: Radiation Pyrometry, Ultrasonic TOF & Vibration Sensors',
    topicRef: '4.5 & 4.6 Pyrometry, Distance and Speed Sensors',
    description:
      'Thermal radiation blackbody curves for pyrometry, ultrasonic pulse-echo time-of-flight distance ranging, and seismic piezoelectric vibration accelerometer.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%" font-family="'Times New Roman', Times, 'Liberation Serif', serif">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="48" y="42" width="1504" height="68" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="72" y="86" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="30" font-weight="800" fill="#0f172a">
    Figure 4.7: Pyrometry, Ultrasonic TOF &amp; Accelerometers
  </text>
  <text x="1290" y="85" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="700" fill="#2563eb">
    Unit IV · 4.5–4.6
  </text>

  <!-- Panel 1: Radiation Pyrometry & Infrared -->
  <rect x="48" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="72" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">1. Radiation Pyrometry</text>
  <text x="72" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">Stefan-Boltzmann &amp; Wien Laws</text>

  <!-- Radiation Curve Canvas -->
  <rect x="72" y="224" width="436" height="236" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.4" />
  <line x1="114" y1="422" x2="478" y2="422" stroke="#0f172a" stroke-width="2.5" />
  <line x1="114" y1="422" x2="114" y2="250" stroke="#0f172a" stroke-width="2.5" />
  <text x="296" y="450" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Wavelength λ (μm)</text>
  <text x="86" y="264" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e293b">Eλ</text>

  <path d="M 120 417 Q 166 254 236 364 T 456 417" fill="none" stroke="#dc2626" stroke-width="3.5" />
  <text x="206" y="268" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#dc2626">T = 2000 K</text>
  <path d="M 120 420 Q 186 304 266 384 T 456 420" fill="none" stroke="#d97706" stroke-width="3" />
  <text x="272" y="324" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309">1500 K</text>
  <path d="M 120 421 Q 216 364 316 402 T 456 421" fill="none" stroke="#2563eb" stroke-width="2.5" />
  <text x="330" y="378" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">1000 K</text>

  <!-- Stefan-Boltzmann Law Card -->
  <rect x="72" y="480" width="436" height="358" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.4" />
  <text x="92" y="518" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#991b1b">Stefan-Boltzmann Law:</text>
  <text x="92" y="556" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#b91c1c">E = ε · σ · T⁴</text>
  <text x="92" y="596" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#7f1d1d">• σ = 5.67 × 10⁻⁸ W/(m²·K⁴)</text>
  <text x="92" y="630" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#7f1d1d">• Emissivity ε (0–1): surface factor</text>
  <text x="92" y="664" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#7f1d1d">• Wien Law: λ_max · T = 2898 μm·K</text>
  <text x="92" y="710" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#991b1b">Instruments:</text>
  <text x="92" y="746" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#7f1d1d">• Optical filament pyrometer</text>
  <text x="92" y="778" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#7f1d1d">• IR gun (8–14 μm band)</text>
  <text x="92" y="810" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#7f1d1d">• Microbolometer IR camera</text>

  <!-- Panel 2: Ultrasonic Distance & Speed Sensors -->
  <rect x="558" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="582" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">2. Ultrasonic Ranging</text>
  <text x="582" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">Time-of-Flight &amp; Doppler</text>

  <!-- Ultrasonic Pulse Echo Diagram -->
  <rect x="582" y="224" width="436" height="236" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.4" />
  <rect x="600" y="300" width="96" height="84" rx="6" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" />
  <text x="648" y="336" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#3730a3" text-anchor="middle">TX / RX</text>
  <text x="648" y="366" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#4338ca" text-anchor="middle">40 kHz</text>

  <path d="M 708 320 A 30 30 0 0 1 708 364" fill="none" stroke="#2563eb" stroke-width="3.5" />
  <path d="M 738 306 A 50 50 0 0 1 738 378" fill="none" stroke="#2563eb" stroke-width="3.5" />
  <path d="M 768 292 A 70 70 0 0 1 768 392" fill="none" stroke="#2563eb" stroke-width="3.5" />
  <text x="724" y="274" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1d4ed8">TX Burst</text>

  <path d="M 848 304 A 60 60 0 0 0 848 384" fill="none" stroke="#d97706" stroke-width="3.5" stroke-dasharray="6,3" />
  <text x="824" y="422" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#b45309">Echo</text>

  <rect x="944" y="272" width="32" height="156" rx="4" fill="#64748b" />
  <text x="954" y="256" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e293b" text-anchor="middle">Target</text>

  <!-- TOF Formula Card -->
  <rect x="582" y="480" width="436" height="358" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.4" />
  <text x="602" y="518" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1e40af">Time-of-Flight Physics:</text>
  <text x="602" y="556" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="22" font-weight="800" fill="#1d4ed8">d = ( c_air · Δt ) / 2</text>
  <text x="602" y="596" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• c ≈ 331.3 + 0.606·T(°C) m/s</text>
  <text x="602" y="630" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• Temp sensing avoids ±10% drift</text>
  <text x="602" y="676" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#1e40af">Doppler Radar / Ultrasound:</text>
  <text x="602" y="714" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="700" fill="#1d4ed8">f_d = (2 · v · f₀ · cosθ) / c</text>
  <text x="602" y="756" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">• LiDAR uses laser pulse TOF</text>
  <text x="616" y="786" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#1e3a8a">(c = 3×10⁸ m/s, mm accuracy)</text>

  <!-- Panel 3: Piezoelectric Vibration Accelerometer -->
  <rect x="1068" y="130" width="484" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="1092" y="172" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="25" font-weight="800" fill="#0f172a">3. Accelerometers</text>
  <text x="1092" y="204" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="500" fill="#334155">Piezoelectric Seismic Mass</text>

  <!-- Accelerometer Schematic -->
  <rect x="1092" y="224" width="436" height="236" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.4" />
  <rect x="1142" y="244" width="336" height="176" rx="6" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
  <rect x="1212" y="264" width="196" height="46" rx="4" fill="#94a3b8" stroke="#334155" />
  <text x="1310" y="294" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#0f172a" text-anchor="middle">Seismic Mass m</text>

  <rect x="1212" y="320" width="196" height="34" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="1310" y="344" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#854d0e" text-anchor="middle">Piezo PZT (q=d₃₃F)</text>

  <rect x="1174" y="366" width="272" height="40" fill="#cbd5e1" stroke="#334155" />
  <text x="1310" y="394" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" font-weight="800" fill="#1e293b" text-anchor="middle">Machine Mount Base</text>

  <line x1="1310" y1="422" x2="1310" y2="452" stroke="#dc2626" stroke-width="4.5" />
  <polygon points="1310,452 1303,438 1317,438" fill="#dc2626" />
  <text x="1334" y="448" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#dc2626">a(t)</text>

  <!-- Accelerometer Physics Card -->
  <rect x="1092" y="480" width="436" height="358" rx="8" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.4" />
  <text x="1112" y="518" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#7e22ce">Seismic Mass Mechanics:</text>
  <text x="1112" y="556" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#6b21a8">F = m·a,  q = d₃₃·(m·a)</text>
  <text x="1112" y="596" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#581c87">• Charge q proportional to a(t)</text>
  <text x="1112" y="630" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#581c87">• Linear flat band up to 0.2 × fn</text>
  <text x="1126" y="658" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#581c87">(typically 10–50 kHz natural fn)</text>
  <text x="1112" y="706" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="21" font-weight="800" fill="#6b21a8">Monitoring Standards:</text>
  <text x="1112" y="744" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#581c87">• ISO 10816 Vibration (mm/s)</text>
  <text x="1112" y="778" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#581c87">• IEPE / ICP builds FET preamp</text>
  <text x="1126" y="806" font-family="'Times New Roman', Times, 'Liberation Serif', serif" font-size="20" fill="#581c87">inside sensor housing</text>
</svg>`,
  },
};
