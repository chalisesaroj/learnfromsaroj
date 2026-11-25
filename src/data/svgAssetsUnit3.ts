import { SvgAsset } from './svgAssets';

export const SVG_FIGURES_UNIT3: Record<string, SvgAsset> = {
  u3_fig1: {
    id: 'u3_fig1',
    filename: 'u3_fig1_gauge_factor.svg',
    title: 'Figure 3.1: Strain Gauge Anatomy & Gauge Factor Derivation',
    topicRef: '3.1 Gauge Factor',
    description:
      'Detailed schematic of metallic foil strain gauge geometry and analytical breakdown of dimensional changes versus piezoresistive resistivity modulation.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626" />
    </marker>
  </defs>
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.1: Strain Gauge Anatomy &amp; Gauge Factor (GF)
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8" text-anchor="end">
    Unit III · Section 3.1
  </text>

  <!-- Left: Physical Strain Gauge Anatomy -->
  <rect x="45" y="130" width="730" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="75" y="172" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Physical Anatomy of Metal Foil Strain Gauge
  </text>

  <!-- Substrate / Polyimide Backing -->
  <rect x="115" y="198" width="560" height="405" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" stroke-dasharray="6,4" />
  <text x="395" y="232" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700" fill="#854d0e" text-anchor="middle">
    Polyimide Carrier Backing (25 μm thick)
  </text>

  <!-- Solder Tabs -->
  <rect x="145" y="285" width="105" height="60" rx="6" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
  <text x="197" y="323" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Tab A</text>
  <rect x="145" y="470" width="105" height="60" rx="6" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
  <text x="197" y="508" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Tab B</text>

  <!-- Lead wire connections -->
  <path d="M 90 315 L 145 315" stroke="#dc2626" stroke-width="5" stroke-linecap="round" />
  <path d="M 90 500 L 145 500" stroke="#2563eb" stroke-width="5" stroke-linecap="round" />
  <circle cx="90" cy="315" r="7" fill="#dc2626" />
  <circle cx="90" cy="500" r="7" fill="#2563eb" />
  <text x="58" y="295" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">+Lead</text>
  <text x="58" y="542" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1d4ed8">-Lead</text>

  <!-- Grid Loops -->
  <path d="
    M 250 315 L 580 315
    A 25 25 0 0 1 580 365
    L 290 365
    A 25 25 0 0 0 290 415
    L 580 415
    A 25 25 0 0 1 580 465
    L 290 465
    A 25 25 0 0 0 290 515
    L 580 515
    A 25 25 0 0 1 580 565
    L 290 565
    L 250 500
  " fill="none" stroke="#b45309" stroke-width="6.5" stroke-linejoin="round" />

  <!-- Dimension line for active gauge length -->
  <line x1="290" y1="628" x2="580" y2="628" stroke="#0f172a" stroke-width="2.5" />
  <line x1="290" y1="616" x2="290" y2="640" stroke="#0f172a" stroke-width="2.5" />
  <line x1="580" y1="616" x2="580" y2="640" stroke="#0f172a" stroke-width="2.5" />
  <text x="435" y="666" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a" text-anchor="middle">
    Active Gauge Length L₀ (1–30 mm)
  </text>

  <!-- Strain Direction Indicator -->
  <g transform="translate(650, 415)">
    <line x1="0" y1="0" x2="85" y2="0" stroke="#dc2626" stroke-width="4.5" marker-end="url(#arrowRed)" />
    <text x="42" y="-16" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#dc2626" text-anchor="middle">Tension ε</text>
  </g>

  <!-- Annotations / Specs Box -->
  <rect x="65" y="688" width="690" height="154" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="85" y="724" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">
    Nominal Resistance R₀: <tspan font-family="monospace" fill="#1d4ed8">120 Ω, 350 Ω, 1000 Ω (±0.2%)</tspan>
  </text>
  <text x="85" y="762" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Grid foil: Constantan (55Cu-45Ni) or Karma (5 μm)
  </text>
  <text x="85" y="800" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Thick end loops cut transverse sensitivity (&lt; 1%)
  </text>

  <!-- Right: Mathematical Gauge Factor Derivation & Physics -->
  <rect x="795" y="130" width="760" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="825" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Gauge Factor (GF) Mathematical Derivation
  </text>

  <!-- Card 1 -->
  <rect x="820" y="196" width="710" height="196" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
  <text x="840" y="232" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#1e3a8a">
    1. Cylindrical Conductor Resistance Model:
  </text>
  <text x="860" y="272" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8">
    R = ρ · (L / A) = ρ · L / (π r²)
  </text>
  <text x="840" y="314" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    Taking logs and differentiating completely:
  </text>
  <text x="860" y="358" font-family="monospace" font-size="21" font-weight="700" fill="#0f172a">
    dR/R = dρ/ρ + dL/L - 2(dr/r)
  </text>

  <!-- Card 2 -->
  <rect x="820" y="408" width="710" height="196" rx="8" fill="#fdf4ff" stroke="#f0abfc" stroke-width="1.5" />
  <text x="840" y="444" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#701a75">
    2. Poisson's Ratio (ν) &amp; Contraction:
  </text>
  <text x="860" y="484" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    Axial: <tspan font-family="monospace" font-weight="700" fill="#0f172a">ε = dL/L</tspan> · Lateral: <tspan font-family="monospace" font-weight="700" fill="#0f172a">dr/r = -ν · ε</tspan>
  </text>
  <text x="840" y="526" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    Substituting back into total differential:
  </text>
  <text x="860" y="570" font-family="monospace" font-size="21" font-weight="700" fill="#86198f">
    dR/R = [ 1 + 2ν + (dρ/ρ)/ε ] · ε
  </text>

  <!-- Card 3 -->
  <rect x="820" y="620" width="710" height="222" rx="8" fill="#ecfdf5" stroke="#86efac" stroke-width="1.5" />
  <text x="840" y="656" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#065f46">
    3. Fundamental Gauge Factor Definition:
  </text>
  <text x="860" y="704" font-family="monospace" font-size="24" font-weight="800" fill="#047857">
    GF = (ΔR / R₀) / ε = 1 + 2ν + (Δρ/ρ₀)/ε
  </text>
  <text x="840" y="748" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • <tspan font-weight="700" fill="#047857">1 + 2ν (Geometry):</tspan> Metals (ν ≈ 0.3) yield ≈ 1.6.
  </text>
  <text x="840" y="782" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • <tspan font-weight="700" fill="#047857">Piezoresistive:</tspan> Foils GF ≈ 2.0; Semicond. +120.
  </text>
  <text x="840" y="818" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b91c1c">
    Converts microstrain (με) into measurable ΔR.
  </text>
</svg>`
  },

  u3_fig2: {
    id: 'u3_fig2',
    filename: 'u3_fig2_bonded_vs_unbonded.svg',
    title: 'Figure 3.2: Bonded vs. Unbonded Strain Gauge Architectures',
    topicRef: '3.2 Bonded and Unbonded Gauges',
    description:
      'Comparative engineering structural cross-section showing bonded foil on substrate versus unbonded suspended filament flexure mechanism.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.2: Bonded Foil vs. Unbonded Wire Strain Gauges
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8" text-anchor="end">
    Unit III · Section 3.2
  </text>

  <!-- Left Column: Bonded Strain Gauge -->
  <rect x="45" y="130" width="735" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="65" y="148" width="695" height="48" rx="6" fill="#eff6ff" />
  <text x="85" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af">
    A. Bonded Metal Foil Gauge (Surface Mount)
  </text>

  <!-- Specimen Block -->
  <rect x="95" y="438" width="635" height="115" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
  <text x="412" y="504" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a" text-anchor="middle">
    Structural Test Specimen (Steel / Aluminum)
  </text>

  <!-- Adhesive Layer -->
  <rect x="145" y="404" width="535" height="34" fill="#fde047" stroke="#ca8a04" stroke-width="1.5" />
  <text x="412" y="428" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#713f12" text-anchor="middle">
    Adhesive Matrix (Epoxy: 10–15 μm)
  </text>

  <!-- Carrier Backing -->
  <rect x="165" y="366" width="495" height="38" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5" />
  <text x="412" y="393" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#9a3412" text-anchor="middle">
    Polyimide Backing Film (25 μm)
  </text>

  <!-- Etched Metal Foil -->
  <rect x="195" y="328" width="435" height="38" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
  <text x="412" y="355" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">
    Photo-Etched Metal Foil Grid (5 μm)
  </text>

  <!-- Protective Coating -->
  <rect x="165" y="294" width="495" height="34" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3" />
  <text x="412" y="319" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1" text-anchor="middle">
    Protective Polyurethane Seal
  </text>

  <!-- Shear Strain Transmission Arrows -->
  <g stroke="#1d4ed8" stroke-width="3.5" fill="#1d4ed8">
    <path d="M 105 421 L 140 421 M 140 421 L 128 415 M 140 421 L 128 427" />
    <path d="M 720 421 L 685 421 M 685 421 L 697 415 M 685 421 L 697 427" />
  </g>
  <text x="412" y="254" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">
    Shear Transfer: Specimen ⟹ Adhesive ⟹ Foil Grid
  </text>

  <!-- Bonded Specs Table -->
  <rect x="65" y="575" width="695" height="268" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="85" y="610" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">
    Key Bonded Characteristics:
  </text>
  <text x="85" y="648" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Glued to structure; measures surface strain field.
  </text>
  <text x="85" y="684" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Strain limit: up to 3–5% (30,000–50,000 με).
  </text>
  <text x="85" y="720" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Bandwidth &gt;100 kHz for dynamic impact shock.
  </text>
  <text x="85" y="756" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Sensitive to adhesive creep &amp; moisture ingress.
  </text>
  <text x="85" y="800" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
    Uses: Airframes, bridges, load cells, torque shafts.
  </text>

  <!-- Right Column: Unbonded Strain Gauge -->
  <rect x="800" y="130" width="755" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="820" y="148" width="715" height="48" rx="6" fill="#fef2f2" />
  <text x="840" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#991b1b">
    B. Unbonded Wire Gauge (Flexure Mechanism)
  </text>

  <!-- Fixed Outer Frame -->
  <path d="M 860 220 L 1495 220 L 1495 520 L 860 520 Z M 920 272 L 1435 272 L 1435 468 L 920 468 Z" fill="#e2e8f0" stroke="#475569" stroke-width="2" />
  <text x="1177" y="254" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">
    Fixed Stator Frame (Anchor)
  </text>

  <!-- Movable Armature -->
  <rect x="1107" y="305" width="140" height="130" rx="8" fill="#cbd5e1" stroke="#0f172a" stroke-width="2.5" />
  <text x="1177" y="362" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">
    Movable
  </text>
  <text x="1177" y="390" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">
    Armature
  </text>

  <!-- Motion Rod -->
  <line x1="1177" y1="435" x2="1177" y2="550" stroke="#0f172a" stroke-width="5" />
  <circle cx="1177" cy="550" r="8" fill="#dc2626" />
  <text x="1198" y="556" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">
    Displacement x(t)
  </text>

  <!-- Pins -->
  <circle cx="960" cy="338" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="960" cy="408" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1115" cy="338" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1115" cy="408" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1395" cy="338" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1395" cy="408" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1240" cy="338" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1240" cy="408" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />

  <!-- Suspended Wires -->
  <line x1="960" y1="338" x2="1115" y2="338" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="3,2" />
  <text x="1037" y="324" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626" text-anchor="middle">R₁ (+ΔR)</text>

  <line x1="960" y1="408" x2="1115" y2="408" stroke="#1d4ed8" stroke-width="3.5" stroke-dasharray="3,2" />
  <text x="1037" y="440" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">R₂ (-ΔR)</text>

  <line x1="1240" y1="338" x2="1395" y2="338" stroke="#1d4ed8" stroke-width="3.5" stroke-dasharray="3,2" />
  <text x="1317" y="324" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">R₃ (-ΔR)</text>

  <line x1="1240" y1="408" x2="1395" y2="408" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="3,2" />
  <text x="1317" y="440" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626" text-anchor="middle">R₄ (+ΔR)</text>

  <!-- Unbonded Specs Table -->
  <rect x="820" y="575" width="715" height="268" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="840" y="610" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">
    Key Unbonded Characteristics:
  </text>
  <text x="840" y="648" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Free-standing 25 μm wire on insulating posts.
  </text>
  <text x="840" y="684" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Zero adhesive shear lag or organic bond aging.
  </text>
  <text x="840" y="720" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • High sensitivity down to 10 μm displacement.
  </text>
  <text x="840" y="756" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Delicate; restricted to sealed transducer housings.
  </text>
  <text x="840" y="800" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#991b1b">
    Uses: Seismic accelerometers, pressure diaphragms.
  </text>
</svg>`
  },

  u3_fig3: {
    id: 'u3_fig3',
    filename: 'u3_fig3_ballast_circuit.svg',
    title: 'Figure 3.3: Ballast Circuit Schematic & Sensitivity Maximization',
    topicRef: '3.3.1 Ballast Circuit',
    description:
      'Circuit diagram of the ballast/potentiometric strain circuit with AC coupling capacitor, transfer equations, and optimal sensitivity curve at Rb = Rg.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
    </marker>
  </defs>
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.3: Ballast Circuit · Topology &amp; Sensitivity Peak
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8" text-anchor="end">
    Unit III · Section 3.3.1
  </text>

  <!-- Left: Circuit Schematic -->
  <rect x="45" y="130" width="705" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="75" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Ballast (Potentiometer) Circuit Topology
  </text>

  <!-- DC Supply Eb -->
  <line x1="155" y1="225" x2="155" y2="395" stroke="#0f172a" stroke-width="3" />
  <circle cx="155" cy="225" r="7" fill="#0f172a" />
  <text x="70" y="232" font-family="monospace" font-size="24" font-weight="700" fill="#1d4ed8">+Eb</text>
  <text x="65" y="264" font-family="system-ui, sans-serif" font-size="20" fill="#334155">(DC Source)</text>

  <!-- Wire to Ballast Resistor -->
  <line x1="155" y1="225" x2="295" y2="225" stroke="#0f172a" stroke-width="3" />
  <line x1="295" y1="225" x2="295" y2="275" stroke="#0f172a" stroke-width="3" />

  <!-- Ballast Resistor Rb -->
  <rect x="270" y="275" width="50" height="95" fill="#f8fafc" stroke="#0f172a" stroke-width="3" />
  <text x="335" y="322" font-family="system-ui, sans-serif" font-size="23" font-weight="700" fill="#0f172a">Rb</text>
  <text x="335" y="352" font-family="system-ui, sans-serif" font-size="20" fill="#334155">(Ballast Resistor)</text>

  <!-- Intermediate Node -->
  <line x1="295" y1="370" x2="295" y2="435" stroke="#0f172a" stroke-width="3" />
  <circle cx="295" cy="435" r="8" fill="#dc2626" />
  <text x="200" y="425" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626">Node A</text>

  <!-- Strain Gauge Rg -->
  <line x1="295" y1="435" x2="295" y2="490" stroke="#0f172a" stroke-width="3" />
  <rect x="270" y="490" width="50" height="95" fill="#eff6ff" stroke="#2563eb" stroke-width="3" />
  <line x1="255" y1="595" x2="335" y2="480" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowBlue)" />
  <text x="340" y="538" font-family="system-ui, sans-serif" font-size="23" font-weight="700" fill="#1d4ed8">Rg(t)</text>
  <text x="340" y="568" font-family="monospace" font-size="20" font-weight="700" fill="#1e40af">= R₀ + ΔR(t)</text>

  <!-- Ground Connection -->
  <line x1="295" y1="585" x2="295" y2="635" stroke="#0f172a" stroke-width="3" />
  <line x1="265" y1="635" x2="325" y2="635" stroke="#0f172a" stroke-width="3" />
  <line x1="275" y1="645" x2="315" y2="645" stroke="#0f172a" stroke-width="3" />
  <line x1="285" y1="655" x2="305" y2="655" stroke="#0f172a" stroke-width="3" />
  <text x="335" y="652" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155">GND</text>

  <!-- AC Coupling Branch -->
  <line x1="295" y1="435" x2="435" y2="435" stroke="#0f172a" stroke-width="3" />
  <line x1="435" y1="410" x2="435" y2="460" stroke="#0f172a" stroke-width="4" />
  <line x1="450" y1="410" x2="450" y2="460" stroke="#0f172a" stroke-width="4" />
  <text x="442" y="395" font-family="monospace" font-size="22" font-weight="700" fill="#0f172a" text-anchor="middle">C</text>
  <text x="442" y="492" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="middle">(Blocks DC)</text>

  <line x1="450" y1="435" x2="575" y2="435" stroke="#0f172a" stroke-width="3" />
  <circle cx="575" cy="435" r="7" fill="#0f172a" />
  <text x="592" y="442" font-family="monospace" font-size="23" font-weight="700" fill="#dc2626">+ eₒ(t)</text>
  <text x="592" y="472" font-family="system-ui, sans-serif" font-size="20" fill="#334155">(AC Out)</text>

  <!-- DC Total Output note -->
  <rect x="70" y="685" width="655" height="152" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
  <text x="90" y="720" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#991b1b">
    Critical Limitation of Ballast Circuit:
  </text>
  <text x="90" y="756" font-family="system-ui, sans-serif" font-size="20" fill="#7f1d1d">
    Huge DC pedestal <tspan font-family="monospace" font-weight="700">E_DC = Eb·Rg/(Rb+Rg)</tspan> masks small Δeₒ.
  </text>
  <text x="90" y="792" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#7f1d1d">
    Cannot measure static (DC) strain without offset drift.
  </text>

  <!-- Right: Mathematical Equations & Sensitivity Plot -->
  <rect x="770" y="130" width="785" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="800" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Transfer Function &amp; Sensitivity Optimization
  </text>

  <!-- Mathematical Card -->
  <rect x="795" y="196" width="735" height="225" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
  <text x="815" y="232" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#1e3a8a">
    Mathematical Formulations:
  </text>
  <text x="835" y="272" font-family="monospace" font-size="21" font-weight="700" fill="#1d4ed8">
    eₒ = Eb · [ (R₀ + ΔR) / (Rb + R₀ + ΔR) ]
  </text>
  <text x="815" y="314" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    With resistance ratio <tspan font-family="monospace" font-weight="700">m = Rb / R₀</tspan>, small-signal Δeₒ:
  </text>
  <text x="835" y="356" font-family="monospace" font-size="21" font-weight="700" fill="#0f172a">
    Δeₒ = Eb · [ m / (1 + m)² ] · GF · ε
  </text>
  <text x="815" y="398" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#047857">
    Sensitivity: <tspan font-family="monospace">S_c = Eb · GF · m / (1 + m)²</tspan>
  </text>

  <!-- Sensitivity Plot -->
  <rect x="795" y="438" width="735" height="400" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="815" y="472" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">
    Plot: Sensitivity Factor η = m/(1+m)² vs. Ratio m
  </text>

  <line x1="880" y1="760" x2="1465" y2="760" stroke="#0f172a" stroke-width="2.5" />
  <line x1="880" y1="760" x2="880" y2="505" stroke="#0f172a" stroke-width="2.5" />
  <text x="1480" y="795" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="end">m = Rb / R₀</text>
  <text x="820" y="518" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">η(m)</text>

  <path d="
    M 880 760
    C 940 700, 1000 585, 1080 545
    C 1140 545, 1260 625, 1445 712
  " fill="none" stroke="#2563eb" stroke-width="4.5" />

  <line x1="1080" y1="545" x2="1080" y2="760" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4" />
  <line x1="880" y1="545" x2="1080" y2="545" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4" />
  <circle cx="1080" cy="545" r="8" fill="#dc2626" />

  <text x="1080" y="795" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626" text-anchor="middle">m = 1 (Rb = R₀)</text>
  <text x="868" y="552" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626" text-anchor="end">0.25</text>
  <text x="1105" y="534" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">
    MAX PEAK: S_c,max = ¼ · Eb · GF
  </text>
</svg>`
  },

  u3_fig4: {
    id: 'u3_fig4',
    filename: 'u3_fig4_wheatstone_bridge_configurations.svg',
    title: 'Figure 3.4: Wheatstone Bridge Configurations — Quarter, Half & Full Bridge',
    topicRef: '3.3.2 Bridge Circuits',
    description:
      'Comprehensive comparative topology of Quarter-Bridge, Half-Bridge bending, and Full-Bridge cantilever with algebraic sensitivity factors (1x, 2x, 4x).',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.4: Wheatstone Bridge — Quarter, Half &amp; Full Bridge
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8" text-anchor="end">
    Unit III · Section 3.3.2
  </text>

  <!-- COLUMN 1: QUARTER BRIDGE -->
  <rect x="45" y="130" width="490" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="60" y="146" width="460" height="46" rx="6" fill="#eff6ff" />
  <text x="290" y="177" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af" text-anchor="middle">
    1. Quarter Bridge (1 Active)
  </text>

  <!-- Diamond Bridge 1 -->
  <g transform="translate(290, 315)">
    <path d="M 0 -80 L 80 0 L 0 80 L -80 0 Z" fill="none" stroke="#64748b" stroke-width="3" />
    <rect x="-58" y="-58" width="38" height="20" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" transform="rotate(-45 -39 -48)" />
    <text x="-72" y="-52" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626" text-anchor="end">R₁ (+ε)</text>

    <rect x="20" y="-58" width="38" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(45 39 -48)" />
    <text x="72" y="-52" font-family="monospace" font-size="20" font-weight="700" fill="#334155">R₂ (Fix)</text>

    <rect x="-58" y="38" width="38" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(45 -39 48)" />
    <text x="-72" y="64" font-family="monospace" font-size="20" font-weight="700" fill="#334155" text-anchor="end">R₄ (Fix)</text>

    <rect x="20" y="38" width="38" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(-45 39 48)" />
    <text x="72" y="64" font-family="monospace" font-size="20" font-weight="700" fill="#334155">R₃ (Fix)</text>

    <circle cx="0" cy="-80" r="6" fill="#2563eb" />
    <text x="0" y="-95" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">+E</text>
    <circle cx="0" cy="80" r="6" fill="#2563eb" />
    <text x="0" y="106" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">GND</text>
    <circle cx="-80" cy="0" r="6" fill="#dc2626" />
    <circle cx="80" cy="0" r="6" fill="#dc2626" />
    <text x="0" y="8" font-family="monospace" font-size="22" font-weight="700" fill="#dc2626" text-anchor="middle">Vₒ</text>
  </g>

  <rect x="65" y="445" width="450" height="395" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="85" y="482" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">
    Transfer Equation:
  </text>
  <text x="85" y="520" font-family="monospace" font-size="21" font-weight="700" fill="#1e40af">
    Vₒ = (E / 4) · (ΔR₁ / R₀)
  </text>
  <text x="85" y="558" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8">
    Vₒ = (1/4) · E · GF · ε
  </text>
  <text x="85" y="605" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">
    Sensitivity Factor:
  </text>
  <text x="85" y="640" font-family="monospace" font-size="24" font-weight="800" fill="#1d4ed8">
    1× Base Sensitivity
  </text>
  <text x="85" y="688" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Measures axial or bending strain.
  </text>
  <text x="85" y="724" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Non-linear at high strain levels.
  </text>
  <text x="85" y="764" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#b91c1c">
    • Needs 3-wire circuit for lead drop!
  </text>

  <!-- COLUMN 2: HALF BRIDGE -->
  <rect x="555" y="130" width="490" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="570" y="146" width="460" height="46" rx="6" fill="#fdf4ff" />
  <text x="800" y="177" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#86198f" text-anchor="middle">
    2. Half Bridge (2 Active: Bending)
  </text>

  <!-- Diamond Bridge 2 -->
  <g transform="translate(800, 315)">
    <path d="M 0 -80 L 80 0 L 0 80 L -80 0 Z" fill="none" stroke="#64748b" stroke-width="3" />
    <rect x="-58" y="-58" width="38" height="20" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" transform="rotate(-45 -39 -48)" />
    <text x="-72" y="-52" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626" text-anchor="end">R₁ (+ε)</text>

    <rect x="-58" y="38" width="38" height="20" rx="3" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" transform="rotate(45 -39 48)" />
    <text x="-72" y="64" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="end">R₄ (-ε)</text>

    <rect x="20" y="-58" width="38" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(45 39 -48)" />
    <text x="72" y="-52" font-family="monospace" font-size="20" font-weight="700" fill="#334155">R₂ (Fix)</text>

    <rect x="20" y="38" width="38" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(-45 39 48)" />
    <text x="72" y="64" font-family="monospace" font-size="20" font-weight="700" fill="#334155">R₃ (Fix)</text>

    <circle cx="0" cy="-80" r="6" fill="#2563eb" />
    <text x="0" y="-95" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">+E</text>
    <circle cx="0" cy="80" r="6" fill="#2563eb" />
    <text x="0" y="106" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">GND</text>
    <circle cx="-80" cy="0" r="6" fill="#dc2626" />
    <circle cx="80" cy="0" r="6" fill="#dc2626" />
    <text x="0" y="8" font-family="monospace" font-size="22" font-weight="700" fill="#dc2626" text-anchor="middle">Vₒ</text>
  </g>

  <rect x="575" y="445" width="450" height="395" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="595" y="482" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">
    Transfer Equation:
  </text>
  <text x="595" y="520" font-family="monospace" font-size="20" font-weight="700" fill="#86198f">
    Vₒ = (E/4)·[(ΔR₁ - ΔR₄)/R₀]
  </text>
  <text x="595" y="558" font-family="monospace" font-size="22" font-weight="700" fill="#86198f">
    Vₒ = (1/2) · E · GF · ε
  </text>
  <text x="595" y="605" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">
    Sensitivity Factor:
  </text>
  <text x="595" y="640" font-family="monospace" font-size="24" font-weight="800" fill="#86198f">
    2× Sensitivity (Doubled)
  </text>
  <text x="595" y="688" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • Top (+ε) &amp; bottom (-ε) beam faces.
  </text>
  <text x="595" y="724" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#047857">
    • Auto thermal drift cancellation!
  </text>
  <text x="595" y="764" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#047857">
    • Rejects unwanted axial thrust load.
  </text>

  <!-- COLUMN 3: FULL BRIDGE -->
  <rect x="1065" y="130" width="490" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="1080" y="146" width="460" height="46" rx="6" fill="#ecfdf5" />
  <text x="1310" y="177" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#047857" text-anchor="middle">
    3. Full Bridge (4 Active: Max Gain)
  </text>

  <!-- Diamond Bridge 3 -->
  <g transform="translate(1310, 315)">
    <path d="M 0 -80 L 80 0 L 0 80 L -80 0 Z" fill="none" stroke="#64748b" stroke-width="3" />
    <rect x="-58" y="-58" width="38" height="20" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" transform="rotate(-45 -39 -48)" />
    <text x="-72" y="-52" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626" text-anchor="end">R₁ (+ε)</text>

    <rect x="20" y="-58" width="38" height="20" rx="3" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" transform="rotate(45 39 -48)" />
    <text x="72" y="-52" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8">R₂ (-ε)</text>

    <rect x="-58" y="38" width="38" height="20" rx="3" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" transform="rotate(45 -39 48)" />
    <text x="-72" y="64" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="end">R₄ (-ε)</text>

    <rect x="20" y="38" width="38" height="20" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" transform="rotate(-45 39 48)" />
    <text x="72" y="64" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626">R₃ (+ε)</text>

    <circle cx="0" cy="-80" r="6" fill="#2563eb" />
    <text x="0" y="-95" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">+E</text>
    <circle cx="0" cy="80" r="6" fill="#2563eb" />
    <text x="0" y="106" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">GND</text>
    <circle cx="-80" cy="0" r="6" fill="#dc2626" />
    <circle cx="80" cy="0" r="6" fill="#dc2626" />
    <text x="0" y="8" font-family="monospace" font-size="22" font-weight="700" fill="#dc2626" text-anchor="middle">Vₒ</text>
  </g>

  <rect x="1085" y="445" width="450" height="395" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="1105" y="482" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">
    Transfer Equation:
  </text>
  <text x="1105" y="520" font-family="monospace" font-size="20" font-weight="700" fill="#047857">
    Vₒ = (E/4)[(ΔR₁-ΔR₂+ΔR₃-ΔR₄)/R₀]
  </text>
  <text x="1105" y="558" font-family="monospace" font-size="24" font-weight="800" fill="#047857">
    Vₒ = E · GF · ε
  </text>
  <text x="1105" y="605" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">
    Sensitivity Factor:
  </text>
  <text x="1105" y="640" font-family="monospace" font-size="24" font-weight="800" fill="#047857">
    4× Max Sensitivity!
  </text>
  <text x="1105" y="688" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • 2 top (+ε) + 2 bottom (-ε) gauges.
  </text>
  <text x="1105" y="724" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#047857">
    • Exact linearity (zero 2nd-order error).
  </text>
  <text x="1105" y="764" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#047857">
    • Full thermal &amp; axial load rejection.
  </text>
</svg>`
  },

  u3_fig5: {
    id: 'u3_fig5',
    filename: 'u3_fig5_constant_current_circuit.svg',
    title: 'Figure 3.5: Constant Current Strain Gauge Circuit (Kelvin 4-Wire)',
    topicRef: '3.3.3 Constant Current Circuit',
    description:
      'Circuit topology with precision current source Is, strain gauge Rg, and 4-wire Kelvin lead connections guaranteeing zero non-linearity error and lead-wire immunity.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.5: Constant Current 4-Wire Kelvin Circuit
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8" text-anchor="end">
    Unit III · Section 3.3.3
  </text>

  <!-- Left: Circuit Diagram -->
  <rect x="45" y="130" width="765" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="75" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    4-Wire Kelvin Constant Current Topology
  </text>

  <!-- Current Source Symbol -->
  <g transform="translate(155, 365)">
    <circle cx="0" cy="0" r="42" fill="#eff6ff" stroke="#1d4ed8" stroke-width="3" />
    <path d="M 0 -22 L 0 22 M 0 22 L -10 8 M 0 22 L 10 8" stroke="#1d4ed8" stroke-width="3" fill="none" />
    <text x="-60" y="-8" font-family="monospace" font-size="24" font-weight="700" fill="#1d4ed8" text-anchor="end">Is</text>
    <text x="-52" y="26" font-family="system-ui, sans-serif" font-size="20" fill="#334155" text-anchor="end">Source</text>
  </g>

  <!-- Wire Line 1 (Force +) -->
  <line x1="155" y1="323" x2="155" y2="230" stroke="#0f172a" stroke-width="3" />
  <line x1="155" y1="230" x2="340" y2="230" stroke="#0f172a" stroke-width="3" />
  <rect x="340" y="214" width="60" height="32" fill="#f1f5f9" stroke="#475569" stroke-width="2" />
  <text x="370" y="204" font-family="monospace" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">r_L1</text>
  <line x1="400" y1="230" x2="540" y2="230" stroke="#0f172a" stroke-width="3" />

  <!-- Wire Line 4 (Force -) -->
  <line x1="155" y1="407" x2="155" y2="500" stroke="#0f172a" stroke-width="3" />
  <line x1="155" y1="500" x2="340" y2="500" stroke="#0f172a" stroke-width="3" />
  <rect x="340" y="484" width="60" height="32" fill="#f1f5f9" stroke="#475569" stroke-width="2" />
  <text x="370" y="542" font-family="monospace" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">r_L4</text>
  <line x1="400" y1="500" x2="540" y2="500" stroke="#0f172a" stroke-width="3" />

  <!-- Remote Strain Gauge Zone -->
  <rect x="520" y="190" width="265" height="350" rx="10" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" stroke-dasharray="6,4" />
  <text x="652" y="220" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e" text-anchor="middle">
    Remote Specimen
  </text>

  <!-- Gauge Resistor Rg -->
  <line x1="595" y1="230" x2="595" y2="305" stroke="#0f172a" stroke-width="3" />
  <rect x="570" y="305" width="50" height="120" fill="#ffffff" stroke="#dc2626" stroke-width="3" />
  <text x="635" y="355" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#dc2626">Rg</text>
  <text x="635" y="390" font-family="monospace" font-size="20" font-weight="700" fill="#991b1b">= R₀ + ΔR</text>
  <line x1="595" y1="425" x2="595" y2="500" stroke="#0f172a" stroke-width="3" />

  <!-- 4-Wire Sense Connections -->
  <circle cx="595" cy="272" r="6" fill="#2563eb" />
  <line x1="595" y1="272" x2="430" y2="272" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,3" />
  <rect x="355" y="256" width="75" height="32" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" />
  <text x="392" y="279" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">r_L2</text>
  <line x1="355" y1="272" x2="265" y2="272" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,3" />
  <line x1="265" y1="272" x2="265" y2="342" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,3" />

  <circle cx="595" cy="458" r="6" fill="#2563eb" />
  <line x1="595" y1="458" x2="430" y2="458" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,3" />
  <rect x="355" y="442" width="75" height="32" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" />
  <text x="392" y="465" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">r_L3</text>
  <line x1="355" y1="458" x2="265" y2="458" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,3" />
  <line x1="265" y1="458" x2="265" y2="388" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="5,3" />

  <!-- High-Z InAmp -->
  <g transform="translate(265, 365)">
    <polygon points="0,-52 65,0 0,52" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5" />
    <text x="12" y="-12" font-family="monospace" font-size="22" font-weight="700" fill="#0f172a">+</text>
    <text x="15" y="28" font-family="monospace" font-size="22" font-weight="700" fill="#0f172a">-</text>
    <line x1="65" y1="0" x2="115" y2="0" stroke="#0f172a" stroke-width="3" />
    <circle cx="115" cy="0" r="6" fill="#dc2626" />
    <text x="126" y="8" font-family="monospace" font-size="22" font-weight="700" fill="#dc2626">V_out</text>
  </g>
  <text x="395" y="578" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1" text-anchor="middle">
    High Z_in (&gt;10 GΩ): Sense Current I_sense ≈ 0
  </text>

  <!-- Mechanism Explanation Box -->
  <rect x="65" y="600" width="725" height="242" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
  <text x="85" y="636" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#166534">
    How 4-Wire Kelvin Eliminates Lead Wire Error:
  </text>
  <text x="85" y="676" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • <tspan font-weight="700">Force Leads (L1, L4):</tspan> Carry full current <tspan font-family="monospace">Is</tspan> to gauge.
  </text>
  <text x="85" y="714" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • <tspan font-weight="700">Sense Leads (L2, L3):</tspan> Tap gauge via &gt;10 GΩ op-amp.
  </text>
  <text x="85" y="752" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • <tspan font-weight="700">Zero Drop:</tspan> <tspan font-family="monospace">I_sense ≈ 0 ⟹ V_drop = I_sense·r_L = 0</tspan>.
  </text>
  <text x="85" y="794" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
    Long 100+ m cables cause ZERO offset or drift!
  </text>

  <!-- Right: Mathematical Comparison -->
  <rect x="830" y="130" width="725" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="860" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Transfer Analysis &amp; Bridge Comparison
  </text>

  <!-- Card: Constant Current Transfer -->
  <rect x="855" y="196" width="675" height="236" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
  <text x="875" y="232" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#1e3a8a">
    Constant Current Transfer Equation:
  </text>
  <text x="895" y="276" font-family="monospace" font-size="23" font-weight="700" fill="#1d4ed8">
    V_sense = Is · Rg = Is · (R₀ + ΔR)
  </text>
  <text x="875" y="318" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    Subtracting baseline <tspan font-family="monospace" font-weight="700">V₀ = Is · R₀</tspan>:
  </text>
  <text x="895" y="362" font-family="monospace" font-size="24" font-weight="800" fill="#0f172a">
    ΔV_out = Is · ΔR = Is · R₀ · GF · ε
  </text>
  <text x="875" y="406" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
    100% LINEAR: Zero non-linear denominator!
  </text>

  <!-- Comparison Table -->
  <rect x="855" y="452" width="675" height="390" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="875" y="488" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">
    Constant Current vs. Wheatstone Bridge
  </text>

  <g transform="translate(875, 510)">
    <rect x="0" y="0" width="635" height="44" fill="#e2e8f0" rx="4" />
    <text x="12" y="29" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">Feature</text>
    <text x="195" y="29" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">Bridge (V_exc)</text>
    <text x="415" y="29" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">Current (Is)</text>

    <text x="12" y="84" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155">Linearity</text>
    <text x="195" y="84" font-family="system-ui, sans-serif" font-size="20" fill="#b91c1c">Non-linear ΔR</text>
    <text x="415" y="84" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">0% Error (Linear)</text>

    <line x1="0" y1="106" x2="635" y2="106" stroke="#e2e8f0" stroke-width="1" />
    <text x="12" y="142" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155">Sensitivity</text>
    <text x="195" y="142" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">¼ · E · GF</text>
    <text x="415" y="142" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1d4ed8">Is·R₀·GF (2×)</text>

    <line x1="0" y1="164" x2="635" y2="164" stroke="#e2e8f0" stroke-width="1" />
    <text x="12" y="200" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155">Lead Drop</text>
    <text x="195" y="200" font-family="system-ui, sans-serif" font-size="20" fill="#b91c1c">Attenuates V_exc</text>
    <text x="415" y="200" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">Zero (4-Wire)</text>

    <line x1="0" y1="222" x2="635" y2="222" stroke="#e2e8f0" stroke-width="1" />
    <text x="12" y="258" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155">Self-Heat</text>
    <text x="195" y="258" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">V²/R (Varies)</text>
    <text x="415" y="258" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">Is²·R (Stable)</text>

    <line x1="0" y1="280" x2="635" y2="280" stroke="#e2e8f0" stroke-width="1" />
    <text x="12" y="314" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155">Source</text>
    <text x="195" y="314" font-family="system-ui, sans-serif" font-size="20" fill="#15803d">Simple DC Reg.</text>
    <text x="415" y="314" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">Precision I-Ref</text>
  </g>
</svg>`
  },

  u3_fig6: {
    id: 'u3_fig6',
    filename: 'u3_fig6_adjacent_arm_temp_compensation.svg',
    title: 'Figure 3.6: Adjacent Arm Temperature Balancing (Dummy Gauge Technique)',
    topicRef: '3.4.1 Adjacent Arm Balancing',
    description:
      'Schematic and mechanical layout of dummy gauge temperature compensation showing adjacent arm mathematical subtraction that cancels thermal drift.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.6: Adjacent Arm Dummy Gauge Compensation
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8" text-anchor="end">
    Unit III · Section 3.4.1
  </text>

  <!-- Left: Physical Mechanical Setup -->
  <rect x="45" y="130" width="715" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="75" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Installation: Active vs. Dummy Gauge
  </text>

  <!-- Specimen 1 -->
  <rect x="80" y="232" width="305" height="270" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
  <text x="232" y="268" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">
    Loaded Test Specimen
  </text>

  <rect x="122" y="295" width="220" height="115" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="232" y="324" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#991b1b" text-anchor="middle">Active Gauge (R₁)</text>
  <path d="M 155 348 L 310 348 M 310 374 L 155 374 M 155 400 L 310 400" stroke="#b45309" stroke-width="4" stroke-linecap="round" />
  <text x="232" y="450" font-family="monospace" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="middle">ΔR₁ = ΔR_ε + ΔR_T</text>

  <g stroke="#dc2626" stroke-width="4" fill="#dc2626">
    <path d="M 232 200 L 232 224 M 232 200 L 222 212 M 232 200 L 242 212" />
    <path d="M 232 534 L 232 510 M 232 534 L 222 522 M 232 534 L 242 522" />
    <text x="255" y="216" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#dc2626">Load P</text>
  </g>

  <!-- Specimen 2 -->
  <rect x="425" y="258" width="305" height="225" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
  <text x="577" y="294" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">
    Unstressed Dummy Block
  </text>

  <rect x="467" y="316" width="220" height="115" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
  <text x="577" y="345" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#166534" text-anchor="middle">Dummy Gauge (R₂)</text>
  <path d="M 500 368 L 655 368 M 655 394 L 500 394 M 500 420 L 655 420" stroke="#15803d" stroke-width="4" stroke-linecap="round" />
  <text x="577" y="466" font-family="monospace" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">ΔR₂ = 0 + ΔR_T</text>

  <!-- Thermal Environment -->
  <rect x="70" y="548" width="665" height="118" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
  <text x="90" y="584" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#b91c1c">
    Thermal Environment Condition:
  </text>
  <text x="90" y="618" font-family="system-ui, sans-serif" font-size="20" fill="#7f1d1d">
    Same material &amp; temp (<tspan font-family="monospace" font-weight="700">T₁ = T₂</tspan>), dummy unloaded (<tspan font-family="monospace" font-weight="700">ε = 0</tspan>).
  </text>

  <!-- Golden Rule Callout -->
  <rect x="70" y="684" width="665" height="158" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
  <text x="90" y="720" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#1e3a8a">
    Golden Adjacent-Arm Bridge Rule:
  </text>
  <text x="90" y="762" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8">
    ΔVₒ = (E / 4) · [ (ΔR₁ / R₀) - (ΔR₂ / R₀) ]
  </text>
  <text x="90" y="806" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
    Identical thermal shifts in R₁ &amp; R₂ subtract to ZERO!
  </text>

  <!-- Right: Bridge Circuit & Algebraic Proof -->
  <rect x="780" y="130" width="775" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="810" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Bridge Wiring &amp; Thermal Cancellation Proof
  </text>

  <!-- Bridge Diamond -->
  <g transform="translate(1165, 315)">
    <path d="M 0 -85 L 85 0 L 0 85 L -85 0 Z" fill="none" stroke="#64748b" stroke-width="3" />
    <rect x="-62" y="-62" width="42" height="22" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2" transform="rotate(-45 -41 -51)" />
    <text x="-85" y="-54" font-family="monospace" font-size="20" font-weight="700" fill="#b91c1c" text-anchor="end">R₁ (Active)</text>

    <rect x="20" y="-62" width="42" height="22" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="2" transform="rotate(45 41 -51)" />
    <text x="85" y="-54" font-family="monospace" font-size="20" font-weight="700" fill="#15803d">R₂ (Dummy)</text>

    <rect x="-62" y="40" width="42" height="22" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" transform="rotate(45 -41 51)" />
    <text x="-85" y="64" font-family="monospace" font-size="20" font-weight="700" fill="#334155" text-anchor="end">R₄ (Fixed)</text>

    <rect x="20" y="40" width="42" height="22" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" transform="rotate(-45 41 51)" />
    <text x="85" y="64" font-family="monospace" font-size="20" font-weight="700" fill="#334155">R₃ (Fixed)</text>

    <circle cx="0" cy="-85" r="7" fill="#2563eb" />
    <text x="0" y="-100" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">+E</text>
    <circle cx="0" cy="85" r="7" fill="#2563eb" />
    <text x="0" y="112" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">GND</text>
    <circle cx="-85" cy="0" r="7" fill="#dc2626" />
    <circle cx="85" cy="0" r="7" fill="#dc2626" />
    <text x="0" y="8" font-family="monospace" font-size="24" font-weight="700" fill="#dc2626" text-anchor="middle">Vₒ</text>
  </g>

  <!-- Algebraic Proof Card -->
  <rect x="805" y="455" width="725" height="387" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="825" y="492" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
    Step-by-Step Algebraic Proof:
  </text>

  <text x="825" y="532" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    1. Active gauge (strain <tspan font-family="monospace">ε</tspan> + temp shift <tspan font-family="monospace">ΔT</tspan>):
  </text>
  <text x="845" y="570" font-family="monospace" font-size="21" font-weight="700" fill="#b91c1c">
    ΔR₁ = R₀·GF·ε + R₀·(β + GF·(α_s - α_g))·ΔT
  </text>

  <text x="825" y="618" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    2. Dummy gauge (<tspan font-family="monospace">ε = 0</tspan>, identical <tspan font-family="monospace">ΔT</tspan>):
  </text>
  <text x="845" y="656" font-family="monospace" font-size="21" font-weight="700" fill="#15803d">
    ΔR₂ = 0 + R₀·(β + GF·(α_s - α_g))·ΔT
  </text>

  <text x="825" y="704" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    3. Substituting into adjacent-arm bridge formula:
  </text>
  <text x="845" y="742" font-family="monospace" font-size="21" font-weight="700" fill="#1d4ed8">
    Vₒ = (E/4)·[GF·ε + ΔR_T/R₀ - ΔR_T/R₀]
  </text>
  <text x="845" y="782" font-family="monospace" font-size="23" font-weight="800" fill="#047857">
    ⟹ Vₒ = (1 / 4) · E · GF · ε
  </text>
  <text x="825" y="822" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d">
    Thermal terms cancel 100%, leaving pure strain!
  </text>
</svg>`
  },

  u3_fig7: {
    id: 'u3_fig7',
    filename: 'u3_fig7_self_temp_compensation.svg',
    title: 'Figure 3.7: Self-Temperature Compensated (STC) Gauges & Thermal Apparent Strain',
    topicRef: '3.4.2 Self-Temperature Compensation',
    description:
      'Operating principle of STC strain gauges matching alloy temperature coefficient of resistance (TCR) against specimen thermal expansion (CTE) over temperature curves.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.7: Self-Temperature Compensated (STC) Gauges
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8" text-anchor="end">
    Unit III · Section 3.4.2
  </text>

  <!-- Left: Physical Matching Principle -->
  <rect x="45" y="130" width="715" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="75" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Physical Origin of Thermal Apparent Strain
  </text>

  <!-- Specimen Expands -->
  <rect x="70" y="196" width="665" height="162" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
  <text x="90" y="232" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">
    Specimen CTE α_s: Steel 11 ppm/°C, Al 23 ppm/°C
  </text>
  <rect x="105" y="260" width="595" height="76" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="402" y="294" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e" text-anchor="middle">
    Foil Expansion α_g &amp; Temp Coefficient β
  </text>
  <text x="402" y="324" font-family="monospace" font-size="20" font-weight="700" fill="#713f12" text-anchor="middle">
    β = (1 / R₀) · (dR / dT)
  </text>

  <!-- Opposing mechanisms -->
  <rect x="70" y="376" width="665" height="248" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
  <text x="90" y="412" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#1e3a8a">
    Two Opposing Thermal Mechanisms:
  </text>
  <text x="90" y="452" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    1. <tspan font-weight="700" fill="#1d4ed8">Differential Expansion:</tspan> Substrate stretches foil:
  </text>
  <text x="115" y="490" font-family="monospace" font-size="21" font-weight="700" fill="#1d4ed8">
    ε_thermal = (α_specimen - α_gauge) · ΔT
  </text>
  <text x="90" y="542" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    2. <tspan font-weight="700" fill="#b91c1c">Alloy Resistivity (TCR):</tspan> Resistance shifts with T:
  </text>
  <text x="115" y="580" font-family="monospace" font-size="21" font-weight="700" fill="#b91c1c">
    (ΔR / R₀)_resistivity = β · ΔT
  </text>

  <!-- STC Condition Box -->
  <rect x="70" y="642" width="665" height="200" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
  <text x="90" y="678" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#166534">
    STC Metallurgical Balance Condition:
  </text>
  <text x="90" y="722" font-family="monospace" font-size="22" font-weight="800" fill="#15803d">
    β + GF · (α_specimen - α_gauge) = 0
  </text>
  <text x="90" y="766" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    Cold-worked foil tunes <tspan font-family="monospace" font-weight="700">β</tspan> to cancel expansion mismatch.
  </text>
  <text x="90" y="804" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#166534">
    Single Quarter-Bridge gauge needs NO dummy gauge!
  </text>

  <!-- Right: Curve -->
  <rect x="780" y="130" width="775" height="730" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="810" y="172" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">
    Apparent Strain vs. Temperature Curves
  </text>

  <!-- Graph Container -->
  <rect x="805" y="196" width="725" height="420" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />

  <line x1="875" y1="415" x2="1485" y2="415" stroke="#475569" stroke-width="2" />
  <line x1="1180" y1="240" x2="1180" y2="590" stroke="#475569" stroke-width="2" />

  <text x="1485" y="452" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a" text-anchor="end">Temp (°C)</text>
  <text x="825" y="234" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">Apparent Strain ε_app (με)</text>

  <text x="885" y="446" font-family="monospace" font-size="20" fill="#334155">-50°</text>
  <text x="1020" y="446" font-family="monospace" font-size="20" fill="#334155">0°</text>
  <text x="1180" y="446" font-family="monospace" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">24°C Ref</text>
  <text x="1325" y="446" font-family="monospace" font-size="20" fill="#334155">100°</text>

  <!-- Uncompensated Regular Gauge -->
  <path d="M 900 570 L 1460 250" stroke="#dc2626" stroke-width="3.5" stroke-dasharray="7,4" fill="none" />
  <text x="1450" y="236" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626" text-anchor="end">
    Uncompensated (&gt; 500 με drift)
  </text>

  <!-- STC Gauge Curve -->
  <path d="
    M 900 475
    C 1050 432, 1125 410, 1180 415
    C 1235 420, 1345 405, 1460 485
  " stroke="#16a34a" stroke-width="5" fill="none" />
  <circle cx="1180" cy="415" r="8" fill="#16a34a" />
  <text x="1180" y="380" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">
    STC Gauge: ±10 με (-20°C to +120°C)
  </text>

  <!-- STC Code Reference Callout -->
  <rect x="805" y="636" width="725" height="206" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="825" y="672" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">
    Standard Commercial STC Number Codes:
  </text>
  <text x="825" y="714" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • <tspan font-family="monospace" font-weight="700" fill="#1d4ed8">STC-13:</tspan> Mild &amp; structural steel (11–13 ppm/°C).
  </text>
  <text x="825" y="754" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • <tspan font-family="monospace" font-weight="700" fill="#1d4ed8">STC-23:</tspan> Aluminum alloys 2024/7075 (23 ppm/°C).
  </text>
  <text x="825" y="794" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">
    • <tspan font-family="monospace" font-weight="700" fill="#1d4ed8">STC-06:</tspan> Titanium &amp; stainless steel (6–9 ppm/°C).
  </text>
</svg>`
  },

  u3_fig_deformation: {
    id: 'u3_fig_deformation',
    filename: 'u3_fig_deformation.svg',
    title: 'Figure 3.8: From Tensile Force to Microscopic Grid Strain',
    topicRef: '3.1 Mechanical Deformation to Electrical Resistance',
    description: 'Visualization of specimen elongation L to L+ΔL and Poisson lateral contraction under axial tensile load.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.8: Applied Tensile Force ⟹ Microscopic Strain
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#0f766e" text-anchor="end">
    Unit III · Section 3.1
  </text>

  <!-- Panel 1: Original Specimen -->
  <g transform="translate(45, 135)">
    <rect width="480" height="715" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="52" rx="8" fill="#eff6ff" />
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af">
      1. Original Specimen (F = 0 N)
    </text>

    <rect x="90" y="105" width="300" height="200" rx="6" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
    <text x="240" y="212" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b" text-anchor="middle">Steel Rod (L₀, A₀)</text>
    <line x1="90" y1="335" x2="390" y2="335" stroke="#0f172a" stroke-width="2.5" />
    <line x1="90" y1="324" x2="90" y2="346" stroke="#0f172a" stroke-width="2.5" />
    <line x1="390" y1="324" x2="390" y2="346" stroke="#0f172a" stroke-width="2.5" />
    <text x="240" y="372" font-family="monospace" font-size="23" font-weight="700" fill="#0f172a" text-anchor="middle">Length L₀</text>

    <rect x="55" y="425" width="370" height="170" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5" />
    <text x="240" y="468" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#854d0e" text-anchor="middle">Foil Grid Rest Resistance</text>
    <text x="240" y="518" font-family="monospace" font-size="28" font-weight="800" fill="#0f172a" text-anchor="middle">R = 120.000 Ω</text>
    <text x="240" y="562" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">Strain: ε = 0.000 με</text>
  </g>

  <!-- Panel 2: Applied Force -->
  <g transform="translate(560, 135)">
    <rect width="480" height="715" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="52" rx="8" fill="#fff7ed" />
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#c2410c">
      2. Applied Tensile Force (+F)
    </text>

    <path d="M 24 205 L 88 205 M 88 205 L 68 194 M 88 205 L 68 216" stroke="#dc2626" stroke-width="5" stroke-linecap="round" fill="none" />
    <path d="M 456 205 L 392 205 M 392 205 L 412 194 M 392 205 L 412 216" stroke="#dc2626" stroke-width="5" stroke-linecap="round" fill="none" />

    <text x="24" y="168" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#dc2626">← Force F</text>
    <text x="456" y="168" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#dc2626" text-anchor="end">Force F →</text>

    <rect x="96" y="115" width="288" height="180" rx="6" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
    <text x="240" y="212" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#9a3412" text-anchor="middle">Stress σ = F / A</text>

    <rect x="28" y="330" width="424" height="350" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="48" y="372" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">Mechanical Sequence:</text>
    <text x="48" y="424" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">1. Force pulls atomic lattice apart.</text>
    <text x="48" y="476" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">2. Rod elongates axially by <tspan font-weight="700" fill="#1d4ed8">+ΔL</tspan>.</text>
    <text x="48" y="528" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">3. Poisson effect shrinks width <tspan font-weight="700" fill="#dc2626">-ΔW</tspan>.</text>
    <text x="48" y="580" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">4. Epoxy bonds transfer strain to foil.</text>
    <text x="48" y="638" font-family="monospace" font-size="22" font-weight="700" fill="#0f766e">Strain: ε = ΔL / L₀</text>
  </g>

  <!-- Panel 3: Strained State -->
  <g transform="translate(1075, 135)">
    <rect width="480" height="715" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="480" height="52" rx="8" fill="#f0fdf4" />
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#166534">
      3. Strained Specimen (L₀ + ΔL)
    </text>

    <rect x="42" y="120" width="396" height="170" rx="6" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" />
    <text x="240" y="212" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#14532d" text-anchor="middle">Elongated Rod (L₀ + ΔL)</text>
    <line x1="42" y1="335" x2="438" y2="335" stroke="#15803d" stroke-width="2.5" />
    <line x1="42" y1="324" x2="42" y2="346" stroke="#15803d" stroke-width="2.5" />
    <line x1="438" y1="324" x2="438" y2="346" stroke="#15803d" stroke-width="2.5" />
    <text x="240" y="372" font-family="monospace" font-size="23" font-weight="700" fill="#15803d" text-anchor="middle">L₀ + ΔL (Stretched)</text>

    <rect x="45" y="425" width="390" height="190" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5" />
    <text x="240" y="468" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#854d0e" text-anchor="middle">Resistance Increases:</text>
    <text x="240" y="518" font-family="monospace" font-size="28" font-weight="800" fill="#dc2626" text-anchor="middle">R = 120.240 Ω</text>
    <text x="240" y="562" font-family="monospace" font-size="21" font-weight="700" fill="#15803d" text-anchor="middle">ΔR = +0.240 Ω (+0.20%)</text>
    <text x="240" y="596" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#334155" text-anchor="middle">For ε = 1000 με, GF = 2.0</text>
  </g>
</svg>`
  },

  u3_fig_measurement_chain: {
    id: 'u3_fig_measurement_chain',
    filename: 'u3_fig_measurement_chain.svg',
    title: 'Figure 3.9: Complete Strain Measurement Signal Chain',
    topicRef: '3.3 Measurement Chain Architecture',
    description: 'End-to-end signal flow from mechanical force, to micro-strain, to resistance change, Wheatstone bridge, instrumentation amplifier, ADC, and computer display.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.9: End-to-End Strain Measurement Signal Chain
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#0f766e" text-anchor="end">
    Unit III · Section 3.3
  </text>

  <!-- Row 1: Stages 1 -> 2 -> 3 -->
  <!-- Stage 1 -->
  <g transform="translate(55, 138)">
    <rect width="465" height="330" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2" />
    <text x="24" y="42" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#1e3a8a">1. Applied Physical Force</text>
    <rect x="24" y="64" width="417" height="96" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="232" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#dc2626" text-anchor="middle">Mechanical Load Input</text>
    <text x="232" y="140" font-family="monospace" font-size="26" font-weight="800" fill="#0f172a" text-anchor="middle">F = 15.0 kN</text>
    <text x="24" y="198" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Applied structural stress σ (MPa)</text>
    <text x="24" y="232" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Pressurized casing or wing root</text>
    <rect x="24" y="256" width="417" height="54" rx="6" fill="#dbeafe" />
    <text x="232" y="290" font-family="monospace" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Measurand: Stress σ = F / A</text>
  </g>
  <path d="M 526 303 L 558 303 M 558 303 L 544 292 M 558 303 L 544 314" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none" />

  <!-- Stage 2 -->
  <g transform="translate(568, 138)">
    <rect width="465" height="330" rx="12" fill="#fefce8" stroke="#fde047" stroke-width="2" />
    <text x="24" y="42" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#854d0e">2. Elastic Deformation</text>
    <rect x="24" y="64" width="417" height="96" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="232" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#b45309" text-anchor="middle">Specimen Micro-Strain</text>
    <text x="232" y="140" font-family="monospace" font-size="26" font-weight="800" fill="#0f172a" text-anchor="middle">ε = +800 με</text>
    <text x="24" y="198" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Relative elongation ε = ΔL / L₀</text>
    <text x="24" y="232" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Sub-micrometer lattice stretch</text>
    <rect x="24" y="256" width="417" height="54" rx="6" fill="#fef08a" />
    <text x="232" y="290" font-family="monospace" font-size="20" font-weight="700" fill="#713f12" text-anchor="middle">Hooke's Law: ε = σ / E</text>
  </g>
  <path d="M 1039 303 L 1071 303 M 1071 303 L 1057 292 M 1071 303 L 1057 314" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none" />

  <!-- Stage 3 -->
  <g transform="translate(1080, 138)">
    <rect width="465" height="330" rx="12" fill="#fff7ed" stroke="#fdba74" stroke-width="2" />
    <text x="24" y="42" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#9a3412">3. Strain Gauge ΔR</text>
    <rect x="24" y="64" width="417" height="96" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="232" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#c2410c" text-anchor="middle">Resistance Modulation</text>
    <text x="232" y="140" font-family="monospace" font-size="26" font-weight="800" fill="#0f172a" text-anchor="middle">ΔR = +0.1968 Ω</text>
    <text x="24" y="198" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• R₀ = 120 Ω, GF = 2.05 foil</text>
    <text x="24" y="232" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Tiny ΔR/R₀ ≈ 0.164% change</text>
    <rect x="24" y="256" width="417" height="54" rx="6" fill="#fed7aa" />
    <text x="232" y="290" font-family="monospace" font-size="20" font-weight="700" fill="#7c2d12" text-anchor="middle">Transduction: ΔR = R₀·GF·ε</text>
  </g>

  <!-- Step-down Flow Connector from Stage 3 to Stage 4 -->
  <path d="M 1312 472 L 1312 496 L 287 496 L 287 518 M 287 518 L 276 504 M 287 518 L 298 504" stroke="#0f172a" stroke-width="3.5" stroke-linejoin="round" fill="none" />

  <!-- Row 2: Stages 4 -> 5 -> 6 -->
  <!-- Stage 4 -->
  <g transform="translate(55, 524)">
    <rect width="465" height="330" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2" />
    <text x="24" y="42" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#14532d">4. Wheatstone Bridge</text>
    <rect x="24" y="64" width="417" height="96" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="232" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#15803d" text-anchor="middle">Differential Voltage V₀</text>
    <text x="232" y="140" font-family="monospace" font-size="26" font-weight="800" fill="#0f172a" text-anchor="middle">V₀ = 4.10 mV</text>
    <text x="24" y="198" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Zero DC baseline at balanced zero</text>
    <text x="24" y="232" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Temperature drift compensated</text>
    <rect x="24" y="256" width="417" height="54" rx="6" fill="#bbf7d0" />
    <text x="232" y="290" font-family="monospace" font-size="20" font-weight="700" fill="#14532d" text-anchor="middle">V₀ ≈ (V_EX / 4) · GF · ε</text>
  </g>
  <path d="M 526 689 L 558 689 M 558 689 L 544 678 M 558 689 L 544 700" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none" />

  <!-- Stage 5 -->
  <g transform="translate(568, 524)">
    <rect width="465" height="330" rx="12" fill="#fdf4ff" stroke="#f0abfc" stroke-width="2" />
    <text x="24" y="42" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#701a75">5. InAmp &amp; 16-Bit ADC</text>
    <rect x="24" y="64" width="417" height="96" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="232" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#a21caf" text-anchor="middle">Amplification + Digitization</text>
    <text x="232" y="140" font-family="monospace" font-size="26" font-weight="800" fill="#0f172a" text-anchor="middle">Gain = 1000×</text>
    <text x="24" y="198" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Boosts 4.10 mV → 4.10 V clean</text>
    <text x="24" y="232" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Anti-aliasing LPF + 16-bit ADC</text>
    <rect x="24" y="256" width="417" height="54" rx="6" fill="#f5d0fe" />
    <text x="232" y="290" font-family="monospace" font-size="20" font-weight="700" fill="#701a75" text-anchor="middle">Conditioned: V_amp = 4.100 V</text>
  </g>
  <path d="M 1039 689 L 1071 689 M 1071 689 L 1057 678 M 1071 689 L 1057 700" stroke="#0f172a" stroke-width="4" stroke-linecap="round" fill="none" />

  <!-- Stage 6 -->
  <g transform="translate(1080, 524)">
    <rect width="465" height="330" rx="12" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
    <text x="24" y="42" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#0f172a">6. DAQ Display &amp; HMI</text>
    <rect x="24" y="64" width="417" height="96" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
    <text x="44" y="96" font-family="monospace" font-size="20" font-weight="700" fill="#4ade80">LIVE READOUT:</text>
    <text x="44" y="138" font-family="monospace" font-size="25" font-weight="800" fill="#ffffff">800.0 με</text>
    <text x="422" y="138" font-family="monospace" font-size="21" font-weight="700" fill="#38bdf8" text-anchor="end">160.0 MPa</text>
    <text x="24" y="198" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Real-time stress logging &amp; alarms</text>
    <text x="24" y="232" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Fatigue cycle &amp; ISO compliance</text>
    <rect x="24" y="256" width="417" height="54" rx="6" fill="#e2e8f0" />
    <text x="232" y="290" font-family="monospace" font-size="20" font-weight="700" fill="#0f172a" text-anchor="middle">Status: Safety Margin OK</text>
  </g>
</svg>`
  },

  u3_fig_applications: {
    id: 'u3_fig_applications',
    filename: 'u3_fig_applications.svg',
    title: 'Figure 3.10: Real-World Industrial & Engineering Applications',
    topicRef: '3.4 Practical Applications & Modern Metrology',
    description: 'Four major engineering domains: Load cells, Structural health monitoring of bridges, Automotive torque and chassis testing, and Material universal testing machines.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="45" y="40" width="1510" height="72" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="70" y="86" font-family="system-ui, sans-serif" font-size="30" font-weight="700" fill="#0f172a">
    Figure 3.10: Industrial Applications of Strain Gauges
  </text>
  <text x="1530" y="85" font-family="monospace" font-size="22" font-weight="700" fill="#0f766e" text-anchor="end">
    Unit III · Section 3.4
  </text>

  <!-- App 1: Industrial Load Cells -->
  <g transform="translate(45, 132)">
    <rect width="740" height="352" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="740" height="50" rx="8" fill="#eff6ff" />
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af">
      1. Industrial Load Cells &amp; Weighing
    </text>
    <rect x="22" y="68" width="235" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="140" y="106" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1d4ed8" text-anchor="middle">S-Beam Cell</text>
    <rect x="48" y="138" width="184" height="118" rx="6" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
    <text x="140" y="205" font-family="monospace" font-size="22" font-weight="800" fill="#0f172a" text-anchor="middle">LOAD CELL</text>
    <circle cx="140" cy="156" r="10" fill="#ef4444" />
    <circle cx="140" cy="236" r="10" fill="#ef4444" />
    <text x="278" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">Architecture &amp; Features:</text>
    <text x="278" y="148" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Full Wheatstone bridge (4 active arms).</text>
    <text x="278" y="196" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Hermetic IP68 stainless housing.</text>
    <text x="278" y="244" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Rated capacity: 500 g to 500 tonnes.</text>
    <text x="278" y="292" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Legal-for-trade truck &amp; silo scales.</text>
  </g>

  <!-- App 2: Structural Health Monitoring -->
  <g transform="translate(815, 132)">
    <rect width="740" height="352" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="740" height="50" rx="8" fill="#f0fdf4" />
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#166534">
      2. Structural Health Monitoring (SHM)
    </text>
    <rect x="22" y="68" width="235" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="140" y="106" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#15803d" text-anchor="middle">Bridge Truss</text>
    <path d="M 38 258 L 140 144 L 242 258 Z M 88 258 L 140 144 L 192 258 Z" fill="none" stroke="#475569" stroke-width="4" />
    <circle cx="140" cy="186" r="10" fill="#16a34a" />
    <text x="278" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">Architecture &amp; Features:</text>
    <text x="278" y="148" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Continuous Rainflow fatigue tracking.</text>
    <text x="278" y="196" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Weldment stress hotspot sensors.</text>
    <text x="278" y="244" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Automated seismic event detection.</text>
    <text x="278" y="292" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Solar wireless bridge telemetry nodes.</text>
  </g>

  <!-- App 3: Automobile & Powertrain Testing -->
  <g transform="translate(45, 504)">
    <rect width="740" height="352" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="740" height="50" rx="8" fill="#fff7ed" />
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#c2410c">
      3. Automotive Shaft Torque Telemetry
    </text>
    <rect x="22" y="68" width="235" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="140" y="106" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#c2410c" text-anchor="middle">Torque Shaft</text>
    <rect x="38" y="172" width="204" height="60" rx="4" fill="#cbd5e1" stroke="#475569" stroke-width="2" />
    <line x1="112" y1="172" x2="168" y2="232" stroke="#dc2626" stroke-width="4" />
    <line x1="168" y1="172" x2="112" y2="232" stroke="#2563eb" stroke-width="4" />
    <text x="278" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">Architecture &amp; Features:</text>
    <text x="278" y="148" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• ±45° rosette gauges on drive shafts.</text>
    <text x="278" y="196" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Isolates torsion; rejects bending.</text>
    <text x="278" y="244" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Wireless RF telemetry to 15k RPM.</text>
    <text x="278" y="292" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Multi-axis road load acquisition.</text>
  </g>

  <!-- App 4: Material Testing UTM -->
  <g transform="translate(815, 504)">
    <rect width="740" height="352" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <rect width="740" height="50" rx="8" fill="#fdf4ff" />
    <text x="24" y="34" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#86198f">
      4. Material Testing &amp; UTM Verification
    </text>
    <rect x="22" y="68" width="235" height="260" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <text x="140" y="106" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#86198f" text-anchor="middle">UTM Frame</text>
    <rect x="65" y="142" width="150" height="128" fill="none" stroke="#475569" stroke-width="3.5" />
    <line x1="140" y1="142" x2="140" y2="270" stroke="#dc2626" stroke-width="5" />
    <text x="278" y="102" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#0f172a">Architecture &amp; Features:</text>
    <text x="278" y="148" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Stress-strain curves: E &amp; yield σ_y.</text>
    <text x="278" y="196" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Poisson's ratio ν via T-rosettes.</text>
    <text x="278" y="244" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Ceramic cement bonds up to 800°C.</text>
    <text x="278" y="292" font-family="system-ui, sans-serif" font-size="20" fill="#1e293b">• Fracture crack propagation tests.</text>
  </g>
</svg>`
  }
};
