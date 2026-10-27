import { SvgAsset } from './svgAssets';

export const SVG_FIGURES_UNIT4: Record<string, SvgAsset> = {
  u4_fig1: {
    id: 'u4_fig1',
    filename: 'u4_fig1_sensor_transducer_classification.svg',
    title: 'Figure 4.1: Sensor vs. Transducer Architecture & Active/Passive Taxonomy',
    topicRef: '4.1 Sensors and Transducers',
    description:
      'Functional block diagram differentiating sensing element from transduction stage, paired with active (self-generating) vs passive (externally excited) transducer taxonomy.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.1: Sensor &amp; Transducer Anatomy · Active vs. Passive Classification
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit IV · Section 4.1
  </text>

  <!-- Left: Sensor vs Transducer Signal Chain -->
  <rect x="50" y="140" width="730" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    A. Sensor vs. Transducer Signal Chain
  </text>
  <text x="80" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#64748b">
    Physical measurand to usable electrical analog output
  </text>

  <!-- Input Measurand Block -->
  <rect x="80" y="250" width="160" height="110" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="160" y="295" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Physical</text>
  <text x="160" y="325" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Measurand</text>
  <text x="160" y="390" font-family="system-ui, sans-serif" font-size="18" fill="#64748b" text-anchor="middle">Force, Pressure, Temp</text>

  <!-- Arrow 1 -->
  <path d="M 240 305 L 290 305" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrow-blue)" />
  <polygon points="290,305 280,299 280,311" fill="#3b82f6" />

  <!-- Sensing Element Block -->
  <rect x="290" y="250" width="200" height="110" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" />
  <text x="390" y="285" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#92400e" text-anchor="middle">Primary Sensor</text>
  <text x="390" y="315" font-family="system-ui, sans-serif" font-size="18" fill="#78350f" text-anchor="middle">(Detector Stage)</text>
  <text x="390" y="342" font-family="system-ui, sans-serif" font-size="18" fill="#b45309" text-anchor="middle">Diaphragm, Bimetal</text>
  <text x="390" y="390" font-family="system-ui, sans-serif" font-size="18" fill="#64748b" text-anchor="middle">Output: Deflection / Strain</text>

  <!-- Arrow 2 -->
  <path d="M 490 305 L 540 305" stroke="#f59e0b" stroke-width="3" />
  <polygon points="540,305 530,299 530,311" fill="#f59e0b" />

  <!-- Transduction Element Block -->
  <rect x="540" y="250" width="210" height="110" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
  <text x="645" y="285" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#065f46" text-anchor="middle">Transduction</text>
  <text x="645" y="315" font-family="system-ui, sans-serif" font-size="18" fill="#047857" text-anchor="middle">(Energy Converter)</text>
  <text x="645" y="342" font-family="system-ui, sans-serif" font-size="18" fill="#059669" text-anchor="middle">Piezo, Foil Grid, LVDT</text>
  <text x="645" y="390" font-family="system-ui, sans-serif" font-size="18" fill="#64748b" text-anchor="middle">Output: ΔR, ΔC, ΔV</text>

  <!-- Transducer Boundary Box (Dashed) -->
  <rect x="275" y="230" width="490" height="190" rx="10" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4" />
  <text x="520" y="445" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#1d4ed8" text-anchor="middle">Complete Transducer Unit</text>

  <!-- Signal Conditioning & Display Row -->
  <path d="M 645 420 L 645 490 L 590 490" stroke="#10b981" stroke-width="3" />
  <polygon points="590,490 600,484 600,496" fill="#10b981" />

  <rect x="360" y="460" width="230" height="90" rx="8" fill="#f1f5f9" stroke="#64748b" stroke-width="2" />
  <text x="475" y="495" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Signal Conditioning</text>
  <text x="475" y="525" font-family="system-ui, sans-serif" font-size="18" fill="#475569" text-anchor="middle">Bridge, Amp, Filter, ADC</text>

  <path d="M 360 505 L 300 505" stroke="#64748b" stroke-width="3" />
  <polygon points="300,505 310,499 310,511" fill="#64748b" />

  <rect x="100" y="460" width="200" height="90" rx="8" fill="#faf5ff" stroke="#a855f7" stroke-width="2" />
  <text x="200" y="495" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#6b21a8" text-anchor="middle">Display / Controller</text>
  <text x="200" y="525" font-family="system-ui, sans-serif" font-size="18" fill="#7e22ce" text-anchor="middle">DAQs, PLC, PC Screen</text>

  <!-- Key Distinction Note -->
  <rect x="80" y="600" width="670" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="100" y="635" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">Technical Distinction:</text>
  <text x="100" y="670" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• Sensor: Directly perceives physical change (e.g., Bourdon tube tip moves with pressure).</text>
  <text x="100" y="705" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• Transducer: Converts input energy into an electrical analog (voltage, current, frequency).</text>
  <text x="100" y="740" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• Transfer Function: Static sensitivity K = Δ(Output) / Δ(Input) in linear operating range.</text>
  <text x="100" y="775" font-family="system-ui, sans-serif" font-size="18" fill="#2563eb" font-weight="600">• All electrical transducers are sensors, but not all sensors are electrical transducers.</text>

  <!-- Right: Active vs Passive Transducers -->
  <rect x="810" y="140" width="740" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="840" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    B. Classification: Active vs. Passive Transducers
  </text>
  <text x="840" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#64748b">
    Energy source criteria for physical-to-electrical signal conversion
  </text>

  <!-- Active Column -->
  <rect x="840" y="240" width="330" height="340" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" />
  <text x="1005" y="275" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#15803d" text-anchor="middle">Active (Self-Generating)</text>
  <text x="860" y="310" font-family="system-ui, sans-serif" font-size="18" fill="#166534">• Zero external power required.</text>
  <text x="860" y="340" font-family="system-ui, sans-serif" font-size="18" fill="#166534">• Directly generates EMF or charge.</text>
  <text x="860" y="375" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#14532d">Core Examples:</text>
  <text x="880" y="405" font-family="system-ui, sans-serif" font-size="18" fill="#166534">1. Thermocouple (Seebeck effect)</text>
  <text x="880" y="435" font-family="system-ui, sans-serif" font-size="18" fill="#166534">2. Piezoelectric crystal (Force → Q)</text>
  <text x="880" y="465" font-family="system-ui, sans-serif" font-size="18" fill="#166534">3. Photovoltaic cell (Light → V)</text>
  <text x="880" y="495" font-family="system-ui, sans-serif" font-size="18" fill="#166534">4. Tachometer generator (RPM → V)</text>
  <rect x="860" y="520" width="290" height="40" rx="6" fill="#dcfce7" stroke="#86efac" />
  <text x="1005" y="546" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#14532d" text-anchor="middle">Input Energy → Output Signal Energy</text>

  <!-- Passive Column -->
  <rect x="1190" y="240" width="340" height="340" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="1360" y="275" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af" text-anchor="middle">Passive (Externally Excited)</text>
  <text x="1210" y="310" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Requires auxiliary voltage/current.</text>
  <text x="1210" y="340" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Modulates R, L, or C parameter.</text>
  <text x="1210" y="375" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#172554">Core Examples:</text>
  <text x="1230" y="405" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">1. Strain gauge (ΔR with strain)</text>
  <text x="1230" y="435" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">2. RTD &amp; Thermistor (ΔR with Temp)</text>
  <text x="1230" y="465" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">3. LVDT (Inductive core displacement)</text>
  <text x="1230" y="495" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">4. Capacitive pressure cell (ΔC)</text>
  <rect x="1210" y="520" width="300" height="40" rx="6" fill="#dbeafe" stroke="#93c5fd" />
  <text x="1360" y="546" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#1e3a8a" text-anchor="middle">Power Supply + Modulated Parameter</text>

  <!-- Static vs Dynamic Characteristics Comparison -->
  <rect x="840" y="600" width="690" height="230" rx="8" fill="#fafaf9" stroke="#d6d3d1" stroke-width="1.5" />
  <text x="860" y="635" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1c1917">Sensor Selection Criteria:</text>
  <text x="860" y="670" font-family="system-ui, sans-serif" font-size="18" fill="#44403c">1. Static: Accuracy, Precision, Sensitivity, Linearity, Hysteresis, Resolution, Dead-band.</text>
  <text x="860" y="705" font-family="system-ui, sans-serif" font-size="18" fill="#44403c">2. Dynamic: Time constant (τ), Natural frequency (ωₙ), Damping ratio (ζ), Step response.</text>
  <text x="860" y="740" font-family="system-ui, sans-serif" font-size="18" fill="#44403c">3. Environmental: Temperature coefficient, hermetic sealing, vibration tolerance, EMI immunity.</text>
  <text x="860" y="775" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#047857">Rule: Match sensor bandwidth to measurand frequency to prevent phase lag &amp; attenuation.</text>
</svg>`,
  },

  u4_fig2: {
    id: 'u4_fig2',
    filename: 'u4_fig2_force_moment_torque_loadcells.svg',
    title: 'Figure 4.2: Force, Moment & Torque Measurement: Load Cell Architectures',
    topicRef: '4.2 Force, Moment and Torque Measurement',
    description:
      'Structural engineering schematics of S-beam, Shear-beam, Column canister load cells, multi-axis 6-DOF force/moment decoupling, and rotary torque shaft telemetry.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.2: Force, Moment &amp; Torque Transducers · Load Cells &amp; Rotary Telemetry
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit IV · Section 4.2
  </text>

  <!-- Panel 1: S-Type & Shear Beam Load Cells -->
  <rect x="50" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="75" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">1. Load Cell Types (Force)</text>
  <text x="75" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">S-Beam (Tension/Comp) &amp; Shear Beam</text>

  <!-- S-Beam Diagram -->
  <rect x="80" y="240" width="420" height="230" rx="8" fill="#f8fafc" stroke="#94a3b8" />
  <path d="M 160 270 L 320 270 L 320 310 L 220 310 L 220 370 L 320 370 L 320 440 L 160 440 L 160 400 L 260 400 L 260 340 L 160 340 Z" fill="#cbd5e1" stroke="#334155" stroke-width="2.5" />
  <line x1="240" y1="250" x2="240" y2="270" stroke="#dc2626" stroke-width="4" marker-end="url(#arr)" />
  <text x="250" y="265" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">Force F (Tension)</text>
  <circle cx="240" cy="355" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="240" y="361" font-family="monospace" font-size="18" font-weight="700" fill="#854d0e" text-anchor="middle">SG</text>
  <text x="80" y="495" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#0f172a">S-Type: High symmetry for tension &amp; compression.</text>
  <text x="80" y="525" font-family="system-ui, sans-serif" font-size="18" fill="#475569">Full bridge on central bending flexure web cancels</text>
  <text x="80" y="550" font-family="system-ui, sans-serif" font-size="18" fill="#475569">off-axis bending and ambient thermal expansion.</text>

  <!-- Shear Beam Specs -->
  <rect x="80" y="580" width="420" height="250" rx="8" fill="#eff6ff" stroke="#93c5fd" />
  <text x="100" y="615" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">Shear Beam &amp; Column Cells:</text>
  <text x="100" y="650" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Shear Web: 45° rosette measures principal shear</text>
  <text x="100" y="680" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">  τ = V·Q / (I·b). Insensitive to load application point.</text>
  <text x="100" y="715" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Column/Canister: High capacity (>100 kN) trucks,</text>
  <text x="100" y="745" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">  silos, railway weighbridges with dual-axis gauges.</text>
  <text x="100" y="780" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e40af">Sensitivity: 2.0 mV/V rated full-scale output.</text>

  <!-- Panel 2: Multi-Axis 6-DOF Force & Moment Measurement -->
  <rect x="560" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="585" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">2. Multi-Axis 6-DOF Decoupling</text>
  <text x="585" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Simultaneous Fx, Fy, Fz &amp; Mx, My, Mz</text>

  <!-- 3D Coordinate Axis Diagram -->
  <rect x="590" y="240" width="420" height="230" rx="8" fill="#f8fafc" stroke="#94a3b8" />
  <!-- Center hub -->
  <circle cx="800" cy="350" r="40" fill="#e2e8f0" stroke="#334155" stroke-width="3" />
  <!-- X, Y, Z vectors -->
  <line x1="800" y1="350" x2="940" y2="350" stroke="#2563eb" stroke-width="4" />
  <polygon points="940,350 930,344 930,356" fill="#2563eb" />
  <text x="950" y="356" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#2563eb">Fx</text>

  <line x1="800" y1="350" x2="800" y2="260" stroke="#dc2626" stroke-width="4" />
  <polygon points="800,260 794,270 806,270" fill="#dc2626" />
  <text x="810" y="270" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">Fz</text>

  <line x1="800" y1="350" x2="710" y2="410" stroke="#16a34a" stroke-width="4" />
  <polygon points="710,410 715,400 725,408" fill="#16a34a" />
  <text x="680" y="425" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#16a34a">Fy</text>

  <!-- Curved Moment Arrows -->
  <path d="M 860 330 A 25 25 0 0 1 860 370" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,2" />
  <text x="870" y="385" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#2563eb">Mx</text>

  <path d="M 780 290 A 25 25 0 0 1 820 290" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,2" />
  <text x="825" y="305" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">Mz</text>

  <!-- Calibration Decoupling Matrix -->
  <rect x="590" y="490" width="420" height="340" rx="8" fill="#faf5ff" stroke="#d8b4fe" />
  <text x="610" y="525" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#7e22ce">Cross-Talk Decoupling Matrix:</text>
  <text x="610" y="560" font-family="monospace" font-size="18" fill="#581c87">[F] = [C] · [V]</text>
  <text x="610" y="595" font-family="system-ui, sans-serif" font-size="18" fill="#4c1d95">• Multi-axis flexures experience mechanical cross-talk</text>
  <text x="610" y="625" font-family="system-ui, sans-serif" font-size="18" fill="#4c1d95">  (load in Z induces parasitic strain on X/Y gauges).</text>
  <text x="610" y="660" font-family="system-ui, sans-serif" font-size="18" fill="#4c1d95">• A 6x6 calibration matrix [C] multiplies raw bridge</text>
  <text x="610" y="690" font-family="system-ui, sans-serif" font-size="18" fill="#4c1d95">  voltages [V1...V6] to yield decoupled forces &amp; moments.</text>
  <text x="610" y="730" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#6b21a8">Applications:</text>
  <text x="610" y="760" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">• Wind tunnel aircraft balances</text>
  <text x="610" y="790" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">• Robotic wrist force-torque feedback (Haptics)</text>

  <!-- Panel 3: Torque Measurement Systems -->
  <rect x="1070" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="1095" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">3. Torque Measurement Systems</text>
  <text x="1095" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Shaft Torsion &amp; Telemetry vs Slip-Rings</text>

  <!-- Shaft Torsion Diagram -->
  <rect x="1100" y="240" width="420" height="230" rx="8" fill="#f8fafc" stroke="#94a3b8" />
  <!-- Rotating shaft cylinder -->
  <rect x="1140" y="310" width="340" height="70" rx="6" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <!-- Torque rotational arrows -->
  <path d="M 1130 315 A 30 30 0 0 1 1130 375" fill="none" stroke="#d97706" stroke-width="4" />
  <polygon points="1135,375 1125,382 1132,367" fill="#d97706" />
  <text x="1110" y="300" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#d97706">Torque T</text>

  <!-- 45-degree chevron strain gauges on shaft -->
  <rect x="1280" y="325" width="60" height="40" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2" transform="rotate(45 1310 345)" />
  <text x="1310" y="420" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#854d0e" text-anchor="middle">±45° Principal Shear Rosette</text>

  <!-- Formula & Transmission methods -->
  <rect x="1100" y="490" width="420" height="340" rx="8" fill="#fefce8" stroke="#fef08a" />
  <text x="1120" y="525" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e">Torsional Mechanics:</text>
  <text x="1120" y="560" font-family="monospace" font-size="18" fill="#713f12">τ_max = 16·T / (π·d³),  ε = ± τ_max / (2·G)</text>
  <text x="1120" y="595" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Principal tension &amp; compression occur at ±45° to shaft axis.</text>
  <text x="1120" y="625" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• 4-gauge full bridge eliminates bending &amp; axial thrust!</text>
  <text x="1120" y="665" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#78350f">Data Transmission From Rotating Shaft:</text>
  <text x="1120" y="700" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">1. Slip-Rings: Physical carbon/silver brush contacts (wear, electrical contact noise at high RPM).</text>
  <text x="1120" y="745" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">2. Wireless Telemetry / Rotary Transformers: Contactless RF link + inductive power (maintenance-free, >20k RPM).</text>
  <text x="1120" y="790" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d">Reaction Torque Sensors: For non-rotating torque.</text>
</svg>`,
  },

  u4_fig3: {
    id: 'u4_fig3',
    filename: 'u4_fig3_pressure_sensors_manometer_bourdon.svg',
    title: 'Figure 4.3: Pressure Measurement: U-Tube Manometer, Bourdon Tube & MEMS',
    topicRef: '4.3.2 Pressure gauge/sensors',
    description:
      'Comparative engineering diagrams of primary liquid manometer hydrostatic balance, mechanical C-type Bourdon tube elasticity, and piezoresistive silicon MEMS diaphragm.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.3: Pressure Measurement Instruments · Hydrostatic, Elastic &amp; MEMS
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit IV · Section 4.3.2
  </text>

  <!-- Panel 1: U-Tube Manometer -->
  <rect x="50" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="75" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">1. U-Tube Manometer</text>
  <text x="75" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Primary Hydrostatic Pressure Standard</text>

  <!-- U-Tube Glass Drawing -->
  <rect x="80" y="240" width="420" height="280" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Left column -->
  <rect x="180" y="270" width="40" height="200" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <!-- Bottom link -->
  <rect x="180" y="430" width="160" height="40" fill="#0284c7" stroke="#0284c7" />
  <!-- Right column -->
  <rect x="300" y="270" width="40" height="200" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <!-- Liquid levels -->
  <rect x="181" y="380" width="38" height="60" fill="#0284c7" />
  <rect x="301" y="320" width="38" height="120" fill="#0284c7" />

  <!-- Pressures & Delta H -->
  <text x="180" y="260" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">P₁ (Process)</text>
  <text x="300" y="260" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#16a34a">P₂ (Atm / Ref)</text>
  <line x1="225" y1="380" x2="295" y2="380" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,2" />
  <line x1="345" y1="320" x2="380" y2="320" stroke="#dc2626" stroke-width="1.5" />
  <line x1="345" y1="380" x2="380" y2="380" stroke="#dc2626" stroke-width="1.5" />
  <line x1="370" y1="320" x2="370" y2="380" stroke="#dc2626" stroke-width="2.5" />
  <text x="390" y="355" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">Δh</text>

  <!-- Governing Equation & Notes -->
  <rect x="80" y="540" width="420" height="290" rx="8" fill="#f0f9ff" stroke="#bae6fd" />
  <text x="100" y="575" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1">Hydrostatic Balance:</text>
  <text x="100" y="610" font-family="monospace" font-size="20" font-weight="700" fill="#0284c7">ΔP = P₁ - P₂ = ρ_m · g · Δh</text>
  <text x="100" y="645" font-family="system-ui, sans-serif" font-size="18" fill="#0c4a6e">• Primary Standard: Requires no calibration!</text>
  <text x="100" y="675" font-family="system-ui, sans-serif" font-size="18" fill="#0c4a6e">• Liquids: Water (ρ=1000 kg/m³), Mercury (ρ=13,546 kg/m³).</text>
  <text x="100" y="705" font-family="system-ui, sans-serif" font-size="18" fill="#0c4a6e">• Inclined Tube Manometer: Multiplies reading length</text>
  <text x="100" y="735" font-family="system-ui, sans-serif" font-size="18" fill="#0c4a6e">  L = Δh / sin(θ) for high sensitivity at low ΔP.</text>
  <text x="100" y="770" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#0369a1">Limitations: Slow dynamic response, fragile glass.</text>

  <!-- Panel 2: Bourdon Tube Gauge -->
  <rect x="560" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="585" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">2. C-Type Bourdon Tube</text>
  <text x="585" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Elastic Deflection &amp; Sector-Pinion Gearing</text>

  <!-- Bourdon Mechanism Schematic -->
  <rect x="590" y="240" width="420" height="280" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Curved C-tube -->
  <path d="M 720 480 A 100 100 0 1 1 880 340" fill="none" stroke="#64748b" stroke-width="18" stroke-linecap="round" />
  <!-- Pressure Inlet -->
  <rect x="690" y="460" width="60" height="30" rx="4" fill="#334155" />
  <text x="640" y="482" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">Pressure P</text>
  <!-- Tip deflection arrow -->
  <line x1="880" y1="340" x2="930" y2="310" stroke="#dc2626" stroke-width="3" />
  <polygon points="930,310 920,313 924,324" fill="#dc2626" />
  <text x="940" y="315" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">Tip Motion</text>
  <!-- Linkage & Pointer -->
  <line x1="880" y1="340" x2="810" y2="380" stroke="#f59e0b" stroke-width="3" />
  <circle cx="810" cy="380" r="10" fill="#f59e0b" />
  <line x1="810" y1="380" x2="770" y2="320" stroke="#0f172a" stroke-width="4" />
  <text x="730" y="315" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Pointer Dial</text>

  <!-- Bourdon Notes -->
  <rect x="590" y="540" width="420" height="290" rx="8" fill="#fefce8" stroke="#fef08a" />
  <text x="610" y="575" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e">Elastic Principle:</text>
  <text x="610" y="610" font-family="system-ui, sans-serif" font-size="18" fill="#713f12">• Oval/elliptical cross-section tube uncurls towards</text>
  <text x="610" y="635" font-family="system-ui, sans-serif" font-size="18" fill="#713f12">  circular section when internal pressure rises.</text>
  <text x="610" y="665" font-family="system-ui, sans-serif" font-size="18" fill="#713f12">• Linkage + toothed sector/pinion magnifies small tip</text>
  <text x="610" y="690" font-family="system-ui, sans-serif" font-size="18" fill="#713f12">  deflection (2-3 mm) into 270° dial pointer sweep.</text>
  <text x="610" y="725" font-family="system-ui, sans-serif" font-size="18" fill="#713f12">• Range: 100 kPa to 700 MPa (Vacuum to hydraulic).</text>
  <text x="610" y="760" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#854d0e">Types: C-type, Helical (higher motion), Spiral.</text>

  <!-- Panel 3: MEMS Piezoresistive Diaphragm -->
  <rect x="1070" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="1095" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">3. Digital MEMS Pressure Sensors</text>
  <text x="1095" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Micromachined Silicon Diaphragm</text>

  <!-- MEMS Diaphragm Schematic -->
  <rect x="1100" y="240" width="420" height="280" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Silicon substrate -->
  <rect x="1140" y="370" width="90" height="80" fill="#94a3b8" />
  <rect x="1390" y="370" width="90" height="80" fill="#94a3b8" />
  <rect x="1140" y="370" width="340" height="15" fill="#38bdf8" />
  <!-- Deflected thin diaphragm (center) -->
  <path d="M 1230 370 Q 1310 395 1390 370" fill="none" stroke="#0284c7" stroke-width="6" />
  <text x="1310" y="340" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626" text-anchor="middle">Pressure P ↓</text>
  <!-- Diffused piezoresistors -->
  <circle cx="1245" cy="370" r="6" fill="#dc2626" />
  <circle cx="1375" cy="370" r="6" fill="#dc2626" />
  <text x="1310" y="440" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">Etched Cavity (Reference Vacuum / Gauge)</text>

  <!-- MEMS Specs -->
  <rect x="1100" y="540" width="420" height="290" rx="8" fill="#fdf4ff" stroke="#f0abfc" />
  <text x="1120" y="575" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#86198f">MEMS Architecture:</text>
  <text x="1120" y="610" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">• Piezoresistive: Boron-doped resistor bridge diffused</text>
  <text x="1120" y="635" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">  into etched silicon diaphragm edges (high stress zone).</text>
  <text x="1120" y="665" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">• High GF (GF ≈ 100-150 vs. 2.0 in metal foil).</text>
  <text x="1120" y="695" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">• Integrated ASIC: On-chip calibration, temperature</text>
  <text x="1120" y="720" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">  compensation, and I2C / SPI digital output.</text>
  <text x="1120" y="755" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#86198f">• Piezoelectric Alternative: Quartz/PZT for dynamic blast.</text>
</svg>`,
  },

  u4_fig4: {
    id: 'u4_fig4',
    filename: 'u4_fig4_flow_measurement_pitot_venturi.svg',
    title: 'Figure 4.4: Flow Measurement: Pitot-Static Probe & Obstruction Meters',
    topicRef: '4.3.1 Flow meter and pitot probes',
    description:
      'Governing aerodynamics of Pitot-static tube Bernoulli stagnation derivation alongside Venturi tube differential pressure and discharge coefficients.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.4: Flow Velocity &amp; Discharge Measurement · Pitot-Static Tube &amp; Venturi
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit IV · Section 4.3.1
  </text>

  <!-- Left: Pitot-Static Tube -->
  <rect x="50" y="140" width="730" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    A. Pitot-Static Probe Aerodynamics
  </text>
  <text x="80" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">
    Stagnation pressure vs. static pressure &amp; Bernoulli derivation
  </text>

  <!-- Pitot Probe Drawing -->
  <rect x="80" y="240" width="670" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Streamlines -->
  <line x1="100" y1="300" x2="300" y2="300" stroke="#38bdf8" stroke-width="3" />
  <line x1="100" y1="340" x2="260" y2="340" stroke="#38bdf8" stroke-width="3" />
  <line x1="100" y1="380" x2="260" y2="380" stroke="#38bdf8" stroke-width="3" />
  <line x1="100" y1="420" x2="300" y2="420" stroke="#38bdf8" stroke-width="3" />
  <text x="120" y="280" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0284c7">Freestream Flow: v, P_static</text>

  <!-- Outer tube (Static) -->
  <path d="M 280 340 L 520 340 L 520 270" fill="none" stroke="#64748b" stroke-width="8" />
  <path d="M 280 380 L 520 380 L 520 450" fill="none" stroke="#64748b" stroke-width="8" />
  <!-- Inner tube (Total/Stagnation) -->
  <path d="M 260 360 L 600 360 L 600 270" fill="none" stroke="#dc2626" stroke-width="6" />

  <!-- Static Ports -->
  <circle cx="380" cy="336" r="4" fill="#0284c7" />
  <circle cx="380" cy="384" r="4" fill="#0284c7" />
  <text x="360" y="320" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0284c7">Static Ports (P_s)</text>

  <!-- Stagnation Port (Tip) -->
  <circle cx="260" cy="360" r="5" fill="#dc2626" />
  <text x="220" y="405" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">Stagnation Pt (P_t)</text>

  <!-- Differential Manometer / Sensor Connection -->
  <rect x="500" y="245" width="220" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" />
  <text x="610" y="277" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e40af" text-anchor="middle">ΔP = P_t - P_s</text>

  <!-- Derivation Card -->
  <rect x="80" y="520" width="670" height="310" rx="8" fill="#eff6ff" stroke="#93c5fd" />
  <text x="100" y="555" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">Bernoulli Flow Velocity Derivation:</text>
  <text x="100" y="590" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8">P_total = P_static + 0.5 · ρ · v²</text>
  <text x="100" y="630" font-family="monospace" font-size="22" font-weight="700" fill="#dc2626">v = C_p · sqrt( 2 · (P_total - P_static) / ρ )</text>
  <text x="100" y="670" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• C_p: Probe calibration factor (typically 0.98 - 1.00 for well-aligned probe).</text>
  <text x="100" y="700" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Angle of Attack Sensitivity: Errors remain &lt;1% within ±10° yaw/pitch.</text>
  <text x="100" y="730" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Compressible Flow Correction: Use Rayleigh Pitot formula when Mach > 0.3.</text>
  <text x="100" y="765" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#1e40af">Applications: Aircraft airspeed indicators (ASI), wind tunnel velocity surveys.</text>

  <!-- Right: Venturi & Obstruction Flow Meters -->
  <rect x="810" y="140" width="740" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="840" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    B. Obstruction Flow Meters: Venturi, Orifice &amp; Nozzle
  </text>
  <text x="840" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">
    Continuity equation &amp; differential pressure across constriction
  </text>

  <!-- Venturi Tube Drawing -->
  <rect x="840" y="240" width="680" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Convergent-Divergent Profile -->
  <path d="M 870 290 L 1020 290 L 1090 330 L 1150 330 L 1320 290 L 1480 290 L 1480 430 L 1320 430 L 1150 390 L 1090 390 L 1020 430 L 870 430 Z" fill="#e2e8f0" stroke="#334155" stroke-width="2.5" />
  <!-- Inlet Tap -->
  <circle cx="950" cy="290" r="5" fill="#2563eb" />
  <line x1="950" y1="290" x2="950" y2="260" stroke="#2563eb" stroke-width="3" />
  <text x="930" y="255" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#2563eb">P₁, A₁, v₁</text>
  <!-- Throat Tap -->
  <circle cx="1120" cy="330" r="5" fill="#dc2626" />
  <line x1="1120" y1="330" x2="1120" y2="260" stroke="#dc2626" stroke-width="3" />
  <text x="1100" y="255" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">P₂, A₂, v₂</text>
  <!-- Diffuser Angle Note -->
  <text x="1220" y="370" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#475569">Diffuser (5°-7° cone for low head loss)</text>

  <!-- Discharge Equation Card -->
  <rect x="840" y="520" width="680" height="310" rx="8" fill="#f0fdf4" stroke="#86efac" />
  <text x="860" y="555" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#166534">Volumetric Discharge Rate Q:</text>
  <text x="860" y="595" font-family="monospace" font-size="20" font-weight="700" fill="#15803d">Q = C_d · A₂ · sqrt( 2 · (P₁ - P₂) / [ ρ · (1 - β⁴) ] )</text>
  <text x="860" y="630" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">Where diameter ratio β = d₂ / d₁.</text>
  <text x="860" y="665" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#166534">Comparison of Differential Obstruction Types:</text>
  <text x="860" y="695" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">• Venturi Tube: C_d ≈ 0.98. Permanent pressure loss only 10-15% (smooth recovery).</text>
  <text x="860" y="725" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">• Flow Nozzle: C_d ≈ 0.96. Moderate permanent pressure loss (30-50%).</text>
  <text x="860" y="755" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">• Orifice Plate: C_d ≈ 0.60 - 0.62. Low cost, but highest permanent head loss (60-80%).</text>
  <text x="860" y="785" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#15803d">• Hydraulic/Pneumatic Systems: Flow control valves adjust throttling aperture.</text>
</svg>`,
  },

  u4_fig5: {
    id: 'u4_fig5',
    filename: 'u4_fig5_flow_visualization_piv_schlieren_bos.svg',
    title: 'Figure 4.5: Optical Flow Visualization: PIV, Schlieren & BOS',
    topicRef: '4.3.3 Flow visualization: PIV, Schlieren, and BOS',
    description:
      'Optical setups for Particle Image Velocimetry (PIV laser sheet & cross-correlation), Z-type Schlieren imaging with knife-edge, and Background Oriented Schlieren (BOS).',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.5: Optical Flow Visualization · PIV, Z-Type Schlieren &amp; BOS
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit IV · Section 4.3.3
  </text>

  <!-- Left: Particle Image Velocimetry (PIV) -->
  <rect x="50" y="140" width="730" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    A. Particle Image Velocimetry (PIV)
  </text>
  <text x="80" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">
    Quantitative planar velocity field: Laser light sheet &amp; cross-correlation
  </text>

  <!-- PIV Schematic Diagram -->
  <rect x="80" y="240" width="670" height="270" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Nd:YAG Pulsed Laser -->
  <rect x="100" y="270" width="140" height="70" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="2" />
  <text x="170" y="305" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#b91c1c" text-anchor="middle">Nd:YAG Laser</text>
  <text x="170" y="328" font-family="system-ui, sans-serif" font-size="18" fill="#991b1b" text-anchor="middle">532 nm (Green)</text>

  <!-- Cylindrical Lens forming sheet -->
  <path d="M 240 305 L 310 305" stroke="#ef4444" stroke-width="4" />
  <rect x="310" y="280" width="20" height="50" rx="3" fill="#cbd5e1" stroke="#475569" />
  <text x="320" y="270" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#475569" text-anchor="middle">Sheet Optics</text>

  <!-- Expanded Laser Sheet -->
  <polygon points="330,305 600,250 600,470" fill="#86efac" opacity="0.3" stroke="#22c55e" stroke-width="2" />
  <text x="440" y="360" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d">Light Sheet &amp; Seeding Particles</text>

  <!-- High-Speed CCD Camera -->
  <rect x="420" y="440" width="120" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="480" y="475" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1d4ed8" text-anchor="middle">PIV Camera</text>
  <line x1="480" y1="440" x2="480" y2="380" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2" />

  <!-- PIV Method Notes -->
  <rect x="80" y="530" width="670" height="300" rx="8" fill="#f0fdf4" stroke="#86efac" />
  <text x="100" y="565" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#166534">PIV Measurement Principle:</text>
  <text x="100" y="600" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">1. Seeding Particles: Flow seeded with ~1-5 μm tracer particles (olive oil, smoke, TiO₂)</text>
  <text x="100" y="625" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">   that faithfully track streamlines without slip (Stokes number St &lt;&lt; 0.1).</text>
  <text x="100" y="660" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">2. Double-Pulse Illumination: Laser fires two short pulses separated by time Δt.</text>
  <text x="100" y="695" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">3. Cross-Correlation: Frame is divided into small interrogation windows (e.g. 32x32 px).</text>
  <text x="100" y="725" font-family="monospace" font-size="18" font-weight="700" fill="#15803d">   Velocity Vector: v = Δs / Δt</text>
  <text x="100" y="760" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">4. Full-field 2D/3D (Stereo-PIV) velocity vectors without inserting physical probes!</text>

  <!-- Right: Z-Type Schlieren & BOS -->
  <rect x="810" y="140" width="740" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="840" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    B. Schlieren Imaging &amp; BOS
  </text>
  <text x="840" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">
    Density gradient (dn/dy) visualization in compressible &amp; thermal flows
  </text>

  <!-- Z-Type Schlieren Diagram -->
  <rect x="840" y="240" width="680" height="270" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Light source -->
  <circle cx="870" cy="450" r="12" fill="#fbbf24" stroke="#d97706" />
  <text x="870" y="480" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#b45309" text-anchor="middle">Point Source</text>
  <!-- Mirror 1 -->
  <path d="M 940 400 Q 930 450 940 500" fill="none" stroke="#2563eb" stroke-width="8" />
  <text x="940" y="390" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb" text-anchor="middle">Concave M₁</text>
  <!-- Test Section (Parallel rays) -->
  <line x1="940" y1="450" x2="1400" y2="280" stroke="#fbbf24" stroke-width="2" />
  <rect x="1100" y="320" width="100" height="80" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2" />
  <text x="1150" y="365" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626" text-anchor="middle">Shock Wave / Flow</text>
  <!-- Mirror 2 -->
  <path d="M 1400 240 Q 1410 290 1400 340" fill="none" stroke="#2563eb" stroke-width="8" />
  <text x="1400" y="230" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb" text-anchor="middle">Concave M₂</text>
  <!-- Knife Edge & Camera -->
  <line x1="1400" y1="290" x2="1480" y2="430" stroke="#fbbf24" stroke-width="2" />
  <line x1="1475" y1="410" x2="1475" y2="440" stroke="#0f172a" stroke-width="5" />
  <text x="1440" y="455" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Knife Edge</text>

  <!-- Schlieren Physics Card -->
  <rect x="840" y="530" width="680" height="300" rx="8" fill="#fefce8" stroke="#fef08a" />
  <text x="860" y="565" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e">Gladstone-Dale Physics &amp; BOS:</text>
  <text x="860" y="600" font-family="monospace" font-size="20" font-weight="700" fill="#713f12">n - 1 = K_GD · ρ,   Deflection Angle: ε_y = (1/n) · ∫ (∂n/∂y) dz</text>
  <text x="860" y="640" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Refraction: Light bends towards optically denser fluid (higher density / cold regions).</text>
  <text x="860" y="670" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Knife Edge: Blocks deflected rays, creating intensity contrast proportional to ∂ρ/∂y.</text>
  <text x="860" y="705" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#78350f">Background Oriented Schlieren (BOS):</text>
  <text x="860" y="735" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Requires NO mirrors or knife-edges! Uses high-contrast random dot pattern.</text>
  <text x="860" y="765" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Image cross-correlation reveals apparent pixel displacement δ caused by refractive index gradients.</text>
</svg>`,
  },

  u4_fig6: {
    id: 'u4_fig6',
    filename: 'u4_fig6_temperature_rtd_thermocouple.svg',
    title: 'Figure 4.6: Thermal Sensors: RTD (PT100) vs. Thermocouple (Seebeck Effect)',
    topicRef: '4.4 Thermal measurement',
    description:
      'Comparison of RTD resistance thermometry with 3/4-wire Kelvin lead compensation and Thermocouple thermoelectric Seebeck loop with Cold Junction Compensation (CJC).',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.6: Temperature Instrumentation · RTD (PT100) &amp; Thermocouple (CJC)
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit IV · Section 4.4
  </text>

  <!-- Left: RTD (PT100) Resistance Thermometer -->
  <rect x="50" y="140" width="730" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    A. Resistance Temperature Detector (RTD PT100)
  </text>
  <text x="80" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">
    Positive temperature coefficient (PTC) &amp; 3-wire lead compensation
  </text>

  <!-- RTD Circuit Diagram (3-wire bridge) -->
  <rect x="80" y="240" width="670" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Bridge resistors -->
  <rect x="180" y="290" width="70" height="35" rx="4" fill="#fed7aa" stroke="#ea580c" />
  <text x="215" y="313" font-family="monospace" font-size="18" font-weight="700" fill="#9a3412" text-anchor="middle">R₁</text>

  <rect x="340" y="290" width="70" height="35" rx="4" fill="#fed7aa" stroke="#ea580c" />
  <text x="375" y="313" font-family="monospace" font-size="18" font-weight="700" fill="#9a3412" text-anchor="middle">R₂</text>

  <rect x="180" y="390" width="70" height="35" rx="4" fill="#fed7aa" stroke="#ea580c" />
  <text x="215" y="413" font-family="monospace" font-size="18" font-weight="700" fill="#9a3412" text-anchor="middle">R₃</text>

  <!-- PT100 Sensor Probe -->
  <rect x="520" y="375" width="110" height="60" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" />
  <text x="575" y="410" font-family="monospace" font-size="18" font-weight="700" fill="#0369a1" text-anchor="middle">PT100 RTD</text>

  <!-- 3 Lead wires with resistance r_L -->
  <line x1="375" y1="325" x2="520" y2="390" stroke="#dc2626" stroke-width="2.5" />
  <text x="440" y="360" font-family="monospace" font-size="18" font-weight="600" fill="#dc2626">Lead 1 (r_L)</text>

  <line x1="280" y1="370" x2="520" y2="405" stroke="#16a34a" stroke-width="2.5" />
  <text x="390" y="400" font-family="monospace" font-size="18" font-weight="600" fill="#16a34a">Lead 2 (Sense)</text>

  <line x1="215" y1="425" x2="630" y2="425" stroke="#dc2626" stroke-width="2.5" />
  <text x="440" y="445" font-family="monospace" font-size="18" font-weight="600" fill="#dc2626">Lead 3 (r_L)</text>

  <!-- RTD Specs -->
  <rect x="80" y="520" width="670" height="310" rx="8" fill="#eff6ff" stroke="#93c5fd" />
  <text x="100" y="555" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">Callendar-Van Dusen Equation:</text>
  <text x="100" y="590" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8">R(T) = R₀ · [ 1 + A·T + B·T² ]   (for T ≥ 0 °C)</text>
  <text x="100" y="625" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• PT100 Standard: R₀ = 100.00 Ω at 0 °C. Alpha α = 0.00385 Ω/Ω/°C.</text>
  <text x="100" y="655" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• 3-Wire Compensation: Places identical lead resistance r_L into opposite bridge arms,</text>
  <text x="100" y="680" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">  canceling ambient temperature fluctuations along the lead cable!</text>
  <text x="100" y="715" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Self-Heating Error: Keep excitation current I &lt; 1 mA (P = I²R &lt; 0.1 mW).</text>
  <text x="100" y="745" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#1e40af">Pros/Cons: Extremely high precision (±0.05 °C), but slower response than thermocouple.</text>

  <!-- Right: Thermocouple & CJC -->
  <rect x="810" y="140" width="740" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="840" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    B. Thermocouple &amp; Cold Junction Compensation (CJC)
  </text>
  <text x="840" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">
    Seebeck effect loop voltage &amp; isothermal reference block
  </text>

  <!-- Thermocouple Circuit Diagram -->
  <rect x="840" y="240" width="680" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <!-- Hot Junction -->
  <circle cx="920" cy="370" r="10" fill="#dc2626" />
  <text x="920" y="340" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626" text-anchor="middle">Hot Junction (T_hot)</text>
  <text x="920" y="415" font-family="system-ui, sans-serif" font-size="18" fill="#475569" text-anchor="middle">Welded bead</text>

  <!-- Wire A (e.g. Alumel / Copper) -->
  <path d="M 920 370 C 1020 310, 1150 310, 1260 330" fill="none" stroke="#2563eb" stroke-width="4" />
  <text x="1080" y="315" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#2563eb">Metal A (e.g., Chromel)</text>

  <!-- Wire B (e.g. Constantan / Alumel) -->
  <path d="M 920 370 C 1020 430, 1150 430, 1260 410" fill="none" stroke="#ea580c" stroke-width="4" />
  <text x="1080" y="450" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#ea580c">Metal B (e.g., Alumel)</text>

  <!-- Isothermal Reference Block (CJC) -->
  <rect x="1240" y="300" width="160" height="140" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="1320" y="330" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#854d0e" text-anchor="middle">CJC Block (T_ref)</text>
  <rect x="1270" y="345" width="100" height="30" rx="4" fill="#ffffff" stroke="#ca8a04" />
  <text x="1320" y="367" font-family="monospace" font-size="18" font-weight="600" fill="#854d0e" text-anchor="middle">RTD/IC Sensor</text>

  <!-- Voltmeter -->
  <circle cx="1470" cy="370" r="22" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
  <text x="1470" y="377" font-family="monospace" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">V</text>
  <line x1="1380" y1="330" x2="1450" y2="360" stroke="#0f172a" stroke-width="2" />
  <line x1="1380" y1="410" x2="1450" y2="380" stroke="#0f172a" stroke-width="2" />

  <!-- Thermocouple Physics Notes -->
  <rect x="840" y="520" width="680" height="310" rx="8" fill="#fefce8" stroke="#fef08a" />
  <text x="860" y="555" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e">Seebeck Effect &amp; CJC Compensation:</text>
  <text x="860" y="590" font-family="monospace" font-size="20" font-weight="700" fill="#713f12">V_net = ∫_{T_ref}^{T_hot} (S_A - S_B) dT ≈ S_AB · (T_hot - T_ref)</text>
  <text x="860" y="625" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Voltmeter only measures temperature DIFFERENCE between Hot and Cold junctions.</text>
  <text x="860" y="655" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Cold Junction Compensation (CJC): Measure T_ref with local semiconductor sensor</text>
  <text x="860" y="680" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">  and add software offset V(T_ref) to reconstruct absolute T_hot!</text>
  <text x="860" y="715" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#78350f">Standard Calibration Types:</text>
  <text x="860" y="745" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Type K (Chromel-Alumel): 41 μV/°C, -200 °C to +1250 °C (Most widely used general purpose).</text>
  <text x="860" y="775" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Type J (Iron-Constantan): 51 μV/°C; Type T (Copper-Constantan): High sub-zero stability.</text>
</svg>`,
  },

  u4_fig7: {
    id: 'u4_fig7',
    filename: 'u4_fig7_pyrometry_speed_distance.svg',
    title: 'Figure 4.7: Radiation Pyrometry, Ultrasonic TOF & Vibration Sensors',
    topicRef: '4.5 & 4.6 Pyrometry, Distance and Speed Sensors',
    description:
      'Thermal radiation blackbody curves for pyrometry, ultrasonic pulse-echo time-of-flight distance ranging, and seismic piezoelectric vibration accelerometer.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.7: Non-Contact Pyrometry, Ultrasonic TOF Ranging &amp; Accelerometers
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit IV · Section 4.5 &amp; 4.6
  </text>

  <!-- Panel 1: Radiation Pyrometry & Infrared -->
  <rect x="50" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="75" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">1. Radiation Pyrometry</text>
  <text x="75" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Stefan-Boltzmann &amp; Wien's Law</text>

  <!-- Radiation Curve Canvas -->
  <rect x="80" y="240" width="420" height="230" rx="8" fill="#f8fafc" stroke="#94a3b8" />
  <!-- Axes -->
  <line x1="110" y1="440" x2="470" y2="440" stroke="#334155" stroke-width="2" />
  <line x1="110" y1="440" x2="110" y2="260" stroke="#334155" stroke-width="2" />
  <text x="290" y="465" font-family="system-ui, sans-serif" font-size="18" fill="#334155" text-anchor="middle">Wavelength λ (μm)</text>
  <text x="90" y="260" font-family="system-ui, sans-serif" font-size="18" fill="#334155">E_λ</text>

  <!-- Planck Curves for Different Temperatures -->
  <!-- 2000 K -->
  <path d="M 115 435 Q 160 270 230 380 T 450 435" fill="none" stroke="#ef4444" stroke-width="3" />
  <text x="210" y="280" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#ef4444">T = 2000 K</text>
  <!-- 1500 K -->
  <path d="M 115 438 Q 180 320 260 400 T 450 438" fill="none" stroke="#f59e0b" stroke-width="2.5" />
  <text x="270" y="335" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#d97706">1500 K</text>
  <!-- 1000 K -->
  <path d="M 115 439 Q 210 380 310 420 T 450 439" fill="none" stroke="#3b82f6" stroke-width="2" />
  <text x="320" y="390" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#2563eb">1000 K</text>

  <!-- Stefan-Boltzmann Law Card -->
  <rect x="80" y="490" width="420" height="340" rx="8" fill="#fef2f2" stroke="#fca5a5" />
  <text x="100" y="525" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#991b1b">Stefan-Boltzmann Law:</text>
  <text x="100" y="560" font-family="monospace" font-size="20" font-weight="700" fill="#b91c1c">E = ε · σ · T⁴</text>
  <text x="100" y="595" font-family="system-ui, sans-serif" font-size="18" fill="#7f1d1d">• σ = 5.6703 × 10⁻⁸ W/(m²·K⁴).</text>
  <text x="100" y="625" font-family="system-ui, sans-serif" font-size="18" fill="#7f1d1d">• Emissivity ε (0 &lt; ε &lt; 1): Surface radiation efficiency.</text>
  <text x="100" y="655" font-family="system-ui, sans-serif" font-size="18" fill="#7f1d1d">• Wien's Displacement Law: λ_max · T = 2898 μm·K.</text>
  <text x="100" y="690" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#991b1b">Instruments:</text>
  <text x="100" y="720" font-family="system-ui, sans-serif" font-size="18" fill="#7f1d1d">• Disappearing Filament: Match lamp brightness to target.</text>
  <text x="100" y="750" font-family="system-ui, sans-serif" font-size="18" fill="#7f1d1d">• Infrared Thermometers: Measure 8-14 μm band.</text>
  <text x="100" y="780" font-family="system-ui, sans-serif" font-size="18" fill="#7f1d1d">• Thermal Cameras: Focal plane microbolometer arrays.</text>

  <!-- Panel 2: Ultrasonic Distance & Speed Sensors -->
  <rect x="560" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="585" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">2. Ultrasonic Distance &amp; Speed</text>
  <text x="585" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Time-of-Flight (TOF) &amp; Acoustic Doppler</text>

  <!-- Ultrasonic Pulse Echo Diagram -->
  <rect x="590" y="240" width="420" height="230" rx="8" fill="#f8fafc" stroke="#94a3b8" />
  <!-- Transceiver -->
  <rect x="610" y="310" width="80" height="80" rx="6" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" />
  <text x="650" y="345" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#3730a3" text-anchor="middle">TX / RX</text>
  <text x="650" y="370" font-family="system-ui, sans-serif" font-size="18" fill="#4338ca" text-anchor="middle">40 kHz</text>

  <!-- Emitted waves (Blue) -->
  <path d="M 700 330 A 30 30 0 0 1 700 370" fill="none" stroke="#2563eb" stroke-width="3" />
  <path d="M 730 315 A 50 50 0 0 1 730 385" fill="none" stroke="#2563eb" stroke-width="3" />
  <path d="M 760 300 A 70 70 0 0 1 760 400" fill="none" stroke="#2563eb" stroke-width="3" />
  <text x="730" y="290" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">Transmit Burst</text>

  <!-- Reflected Echo (Orange dashed) -->
  <path d="M 830 310 A 60 60 0 0 0 830 390" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,3" />
  <text x="830" y="420" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#d97706">Echo Return</text>

  <!-- Target wall -->
  <rect x="940" y="280" width="30" height="150" rx="4" fill="#64748b" />
  <text x="955" y="265" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#334155" text-anchor="middle">Target</text>

  <!-- TOF Formula Card -->
  <rect x="590" y="490" width="420" height="340" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
  <text x="610" y="525" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">Time-of-Flight Physics:</text>
  <text x="610" y="560" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8">d = ( c_air · Δt ) / 2</text>
  <text x="610" y="595" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Sound Speed in Air: c ≈ 331.3 + 0.606·T(°C) m/s.</text>
  <text x="610" y="625" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Temperature Compensation: Ultrasonic sensors must</text>
  <text x="610" y="650" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">  measure ambient temperature to prevent ±10% errors!</text>
  <text x="610" y="685" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e40af">Doppler Speed Radar / Ultrasound:</text>
  <text x="610" y="715" font-family="monospace" font-size="18" fill="#1e40af">f_d = ( 2 · v_target · f₀ · cos(θ) ) / c</text>
  <text x="610" y="750" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• LiDAR Alternative: Optical pulse TOF (c = 3×10⁸ m/s)</text>
  <text x="610" y="780" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">  for millimeter precision autonomous vehicles.</text>

  <!-- Panel 3: Piezoelectric Vibration Accelerometer -->
  <rect x="1070" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="1095" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">3. Vibration Accelerometers</text>
  <text x="1095" y="210" font-family="system-ui, sans-serif" font-size="18" fill="#64748b">Piezoelectric Seismic Mass Transducer</text>

  <!-- Accelerometer Schematic -->
  <rect x="1100" y="240" width="420" height="230" rx="8" fill="#f8fafc" stroke="#94a3b8" />
  <!-- Case -->
  <rect x="1150" y="260" width="320" height="190" rx="6" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
  <!-- Seismic Mass -->
  <rect x="1230" y="280" width="160" height="45" rx="4" fill="#94a3b8" stroke="#334155" />
  <text x="1310" y="310" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a" text-anchor="middle">Seismic Mass m</text>
  <!-- Piezoelectric Crystal Elements -->
  <rect x="1230" y="335" width="160" height="30" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="1310" y="357" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#854d0e" text-anchor="middle">Piezoelectric PZT (q=d₃₃·F)</text>
  <!-- Base -->
  <rect x="1180" y="385" width="260" height="40" fill="#cbd5e1" stroke="#334155" />
  <text x="1310" y="410" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e293b" text-anchor="middle">Sensor Base (Mounted to Machine)</text>
  <line x1="1310" y1="440" x2="1310" y2="465" stroke="#dc2626" stroke-width="4" />
  <polygon points="1310,465 1303,453 1317,453" fill="#dc2626" />
  <text x="1335" y="460" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">a(t)</text>

  <!-- Accelerometer Physics Card -->
  <rect x="1100" y="490" width="420" height="340" rx="8" fill="#faf5ff" stroke="#d8b4fe" />
  <text x="1120" y="525" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#7e22ce">Seismic Mass Mechanics:</text>
  <text x="1120" y="560" font-family="monospace" font-size="20" font-weight="700" fill="#6b21a8">F_inertia = m · a,   q = d₃₃ · (m · a)</text>
  <text x="1120" y="595" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">• Charge output is directly proportional to acceleration a.</text>
  <text x="1120" y="625" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">• Natural Frequency: Operates linearly up to 0.2 × fₙ</text>
  <text x="1120" y="650" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">  (often 10 kHz - 50 kHz for machinery condition monitoring).</text>
  <text x="1120" y="685" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#6b21a8">Condition Monitoring Standards:</text>
  <text x="1120" y="715" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">• ISO 10816 Vibration Severity (RMS velocity in mm/s).</text>
  <text x="1120" y="745" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">• Charge Amplifier / IEPE (ICP): Built-in FET converts</text>
  <text x="1120" y="775" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">  high-impedance pC charge to low-impedance voltage.</text>
</svg>`,
  },
};
