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
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header Banner -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 3.1: Strain Gauge Anatomy, Dimensional Strain &amp; Gauge Factor (GF)
  </text>
  <text x="1250" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit III · Section 3.1
  </text>

  <!-- Left: Physical Strain Gauge Anatomy -->
  <rect x="50" y="140" width="720" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Physical Anatomy of a Metal Foil Strain Gauge
  </text>

  <!-- Substrate / Polyimide Backing -->
  <rect x="130" y="210" width="560" height="420" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" stroke-dasharray="6,4" />
  <text x="150" y="245" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#854d0e">
    Polyimide / Epoxy Carrier Matrix (Backing: 25 μm thick)
  </text>

  <!-- Solder Tabs -->
  <rect x="160" y="300" width="100" height="60" rx="6" fill="#94a3b8" stroke="#475569" stroke-width="2" />
  <text x="180" y="337" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Tab A</text>
  <rect x="160" y="480" width="100" height="60" rx="6" fill="#94a3b8" stroke="#475569" stroke-width="2" />
  <text x="180" y="517" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Tab B</text>

  <!-- Lead wire connections -->
  <path d="M 100 330 L 160 330" stroke="#dc2626" stroke-width="5" stroke-linecap="round" />
  <path d="M 100 510 L 160 510" stroke="#2563eb" stroke-width="5" stroke-linecap="round" />
  <circle cx="100" cy="330" r="7" fill="#dc2626" />
  <circle cx="100" cy="510" r="7" fill="#2563eb" />
  <text x="75" y="315" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#dc2626">+Lead</text>
  <text x="75" y="540" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">-Lead</text>

  <!-- Grid Loops (Constantan / Karma foil alloy) -->
  <path d="
    M 260 330 L 590 330
    A 25 25 0 0 1 590 380
    L 300 380
    A 25 25 0 0 0 300 430
    L 590 430
    A 25 25 0 0 1 590 480
    L 300 480
    A 25 25 0 0 0 300 530
    L 590 530
    A 25 25 0 0 1 590 580
    L 300 580
    L 260 510
  " fill="none" stroke="#b45309" stroke-width="6.5" stroke-linejoin="round" />

  <!-- Dimension line for active gauge length -->
  <line x1="300" y1="650" x2="590" y2="650" stroke="#0f172a" stroke-width="2" />
  <line x1="300" y1="640" x2="300" y2="660" stroke="#0f172a" stroke-width="2" />
  <line x1="590" y1="640" x2="590" y2="660" stroke="#0f172a" stroke-width="2" />
  <text x="360" y="680" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">
    Active Gauge Length L₀ (1 mm – 30 mm)
  </text>

  <!-- Strain Direction Indicator -->
  <g transform="translate(680, 420)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#dc2626" stroke-width="4" marker-end="url(#arrowRed)" />
    <text x="-5" y="-15" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">Tension ε</text>
  </g>

  <!-- Annotations / Specs Box -->
  <rect x="80" y="710" width="660" height="120" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="100" y="745" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#0f172a">
    Typical Nominal Resistance R₀:
  </text>
  <text x="390" y="745" font-family="monospace" font-size="19" font-weight="700" fill="#2563eb">
    120 Ω, 350 Ω, 1000 Ω (±0.2%)
  </text>
  <text x="100" y="780" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • Grid material: Constantan (55% Cu, 45% Ni) or Karma alloy foil (5 μm thickness)
  </text>
  <text x="100" y="810" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • End loops thickened to minimize unwanted transverse sensitivity (&lt; 1%)
  </text>

  <!-- Right: Mathematical Gauge Factor Derivation & Physics -->
  <rect x="800" y="140" width="750" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="830" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Gauge Factor (GF) Mathematical Derivation
  </text>

  <!-- Card 1: Resistance formula and logarithmic differentiation -->
  <rect x="830" y="205" width="690" height="190" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
  <text x="850" y="235" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">
    1. Cylindrical Conductor Resistance Model:
  </text>
  <text x="870" y="275" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8">
    R = ρ · (L / A) = ρ · L / (π r²)
  </text>
  <text x="850" y="315" font-family="system-ui, sans-serif" font-size="18" fill="#1e293b">
    Taking natural logarithms and differentiating completely:
  </text>
  <text x="870" y="355" font-family="monospace" font-size="21" font-weight="700" fill="#0f172a">
    ln(R) = ln(ρ) + ln(L) - 2 ln(r)  ⟹  (dR / R) = (dρ / ρ) + (dL / L) - 2 (dr / r)
  </text>

  <!-- Card 2: Poisson ratio substitution -->
  <rect x="830" y="410" width="690" height="190" rx="8" fill="#fdf4ff" stroke="#f0abfc" stroke-width="1.2" />
  <text x="850" y="440" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#701a75">
    2. Poisson's Ratio (ν) and Dimensional Contraction:
  </text>
  <text x="870" y="480" font-family="system-ui, sans-serif" font-size="19" fill="#334155">
    Axial strain: <tspan font-family="monospace" font-weight="700" fill="#0f172a">ε = dL / L</tspan> · Lateral strain: <tspan font-family="monospace" font-weight="700" fill="#0f172a">dr / r = -ν · ε</tspan>
  </text>
  <text x="850" y="520" font-family="system-ui, sans-serif" font-size="19" fill="#1e293b">
    Substituting back into the total differential:
  </text>
  <text x="870" y="565" font-family="monospace" font-size="22" font-weight="700" fill="#86198f">
    (dR / R) = (dL / L) + 2 ν (dL / L) + (dρ / ρ) = [ 1 + 2ν + (dρ/ρ)/ε ] · ε
  </text>

  <!-- Card 3: Final Gauge Factor Definition -->
  <rect x="830" y="615" width="690" height="225" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
  <text x="850" y="650" font-family="system-ui, sans-serif" font-size="21" font-weight="700" fill="#065f46">
    3. Fundamental Definition of Gauge Factor:
  </text>
  <text x="870" y="700" font-family="monospace" font-size="26" font-weight="800" fill="#047857">
    GF = (ΔR / R₀) / ε = 1 + 2ν + (Δρ / ρ₀) / ε
  </text>
  <text x="850" y="745" font-family="system-ui, sans-serif" font-size="18" fill="#1e293b">
    • <tspan font-weight="700" fill="#047857">1 + 2ν (Geometric effect):</tspan> For metals (ν ≈ 0.3), yields ≈ 1.6.
  </text>
  <text x="850" y="775" font-family="system-ui, sans-serif" font-size="18" fill="#1e293b">
    • <tspan font-weight="700" fill="#047857">Piezoresistive effect (Δρ/ρ)/ε:</tspan> Metal foils (GF ≈ 2.0 – 2.2); Semiconductors (GF ≈ +100 to +150).
  </text>
  <text x="850" y="805" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#b91c1c">
    Critical Significance: GF converts minute microstrains (με = 10⁻⁶) into measurable electrical ΔR.
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
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 3.2: Structural Comparison — Bonded Foil vs. Unbonded Wire Strain Gauges
  </text>
  <text x="1250" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit III · Section 3.2
  </text>

  <!-- Left Column: Bonded Strain Gauge -->
  <rect x="50" y="140" width="720" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <rect x="70" y="155" width="680" height="42" rx="6" fill="#eff6ff" />
  <text x="85" y="184" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af">
    A. Bonded Metal Foil Strain Gauge (Surface Mount)
  </text>

  <!-- Specimen Block -->
  <rect x="100" y="440" width="620" height="120" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
  <text x="250" y="510" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Structural Test Specimen (Steel / Aluminum)
  </text>

  <!-- Adhesive Layer -->
  <rect x="150" y="410" width="520" height="30" fill="#fde047" stroke="#ca8a04" stroke-width="1.5" />
  <text x="260" y="432" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#854d0e">
    Adhesive Matrix (Cyanoacrylate / Epoxy: 10–15 μm)
  </text>

  <!-- Carrier Backing -->
  <rect x="170" y="375" width="480" height="35" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5" />
  <text x="280" y="400" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#9a3412">
    Polyimide Backing Film (25 μm)
  </text>

  <!-- Etched Metal Foil -->
  <rect x="210" y="340" width="400" height="35" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
  <text x="290" y="365" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#ffffff">
    Photo-Etched Metal Foil Grid (5 μm)
  </text>

  <!-- Protective Coating -->
  <rect x="180" y="315" width="460" height="25" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3" />
  <text x="310" y="333" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#0369a1">
    Protective Polyurethane Seal
  </text>

  <!-- Shear Strain Transmission Arrows -->
  <g stroke="#2563eb" stroke-width="3" fill="#2563eb">
    <path d="M 120 425 L 145 425 M 145 425 L 135 420 M 145 425 L 135 430" />
    <path d="M 700 425 L 675 425 M 675 425 L 685 420 M 675 425 L 685 430" />
  </g>
  <text x="240" y="270" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">
    Shear transfer: Specimen Strain ⟹ Adhesive ⟹ Foil Grid
  </text>

  <!-- Bonded Specs Table -->
  <rect x="80" y="585" width="660" height="250" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="100" y="618" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#0f172a">
    Key Bonded Characteristics:
  </text>
  <text x="100" y="652" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • Directly glued to test structure; measures surface strain field.
  </text>
  <text x="100" y="685" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • High strain limit: Up to 3% to 5% (30,000 to 50,000 με).
  </text>
  <text x="100" y="718" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • Excellent frequency response: Up to &gt;100 kHz for dynamic impact shock.
  </text>
  <text x="100" y="751" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • Vulnerable to adhesive creep, thermal mismatch, and moisture ingress.
  </text>
  <text x="100" y="788" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#16a34a">
    Primary Applications: Aerospace airframes, bridges, strain load cells, torque shafts.
  </text>

  <!-- Right Column: Unbonded Strain Gauge -->
  <rect x="800" y="140" width="750" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <rect x="820" y="155" width="710" height="42" rx="6" fill="#fef2f2" />
  <text x="835" y="184" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#991b1b">
    B. Unbonded Fine-Wire Strain Gauge (Flexure Mechanism)
  </text>

  <!-- Frame Graphic -->
  <!-- Fixed Outer Frame -->
  <path d="M 860 230 L 1480 230 L 1480 540 L 860 540 Z M 920 280 L 1420 280 L 1420 490 L 920 490 Z" fill="#e2e8f0" stroke="#475569" stroke-width="2" />
  <text x="1060" y="260" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#334155">
    Fixed Stator Frame (Anchor)
  </text>

  <!-- Movable Armature -->
  <rect x="1100" y="320" width="140" height="130" rx="8" fill="#cbd5e1" stroke="#0f172a" stroke-width="2.5" />
  <text x="1120" y="380" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Movable
  </text>
  <text x="1120" y="405" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Armature
  </text>

  <!-- Motion Rod -->
  <line x1="1170" y1="450" x2="1170" y2="570" stroke="#0f172a" stroke-width="5" />
  <circle cx="1170" cy="570" r="8" fill="#dc2626" />
  <text x="1190" y="565" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#dc2626">
    Displacement x(t) Input
  </text>

  <!-- Insulated Pins & Suspended Filaments -->
  <!-- Stator Pin 1 & 2 -->
  <circle cx="960" cy="350" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="960" cy="420" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <!-- Armature Pins -->
  <circle cx="1110" cy="350" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1110" cy="420" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <!-- Stator Pin 3 & 4 -->
  <circle cx="1380" cy="350" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1380" cy="420" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <!-- Armature Right Pins -->
  <circle cx="1230" cy="350" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />
  <circle cx="1230" cy="420" r="8" fill="#f59e0b" stroke="#78350f" stroke-width="2" />

  <!-- Suspended Wire 1 (Tension Increases) -->
  <line x1="960" y1="350" x2="1110" y2="350" stroke="#dc2626" stroke-width="3" stroke-dasharray="2,1" />
  <text x="1005" y="340" font-family="monospace" font-size="16" font-weight="700" fill="#dc2626">R₁ (+ΔR)</text>

  <!-- Suspended Wire 2 (Tension Decreases) -->
  <line x1="960" y1="420" x2="1110" y2="420" stroke="#2563eb" stroke-width="3" stroke-dasharray="2,1" />
  <text x="1005" y="445" font-family="monospace" font-size="16" font-weight="700" fill="#2563eb">R₂ (-ΔR)</text>

  <!-- Suspended Wire 3 & 4 -->
  <line x1="1230" y1="350" x2="1380" y2="350" stroke="#2563eb" stroke-width="3" stroke-dasharray="2,1" />
  <text x="1280" y="340" font-family="monospace" font-size="16" font-weight="700" fill="#2563eb">R₃ (-ΔR)</text>

  <line x1="1230" y1="420" x2="1380" y2="420" stroke="#dc2626" stroke-width="3" stroke-dasharray="2,1" />
  <text x="1280" y="445" font-family="monospace" font-size="16" font-weight="700" fill="#dc2626">R₄ (+ΔR)</text>

  <!-- Unbonded Specs Table -->
  <rect x="830" y="585" width="690" height="250" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="850" y="618" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#0f172a">
    Key Unbonded Characteristics:
  </text>
  <text x="850" y="652" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • Free-standing resistance wire (0.025 mm diam.) suspended across insulating posts.
  </text>
  <text x="850" y="685" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • Eliminates adhesive shear lag and organic adhesive degradation over time.
  </text>
  <text x="850" y="718" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • Extremely high sensitivity to microscopic mechanical displacements (down to 10 μm).
  </text>
  <text x="850" y="751" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    • Delicate mechanism; restricted to low-shock internal transducer enclosures.
  </text>
  <text x="850" y="788" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#991b1b">
    Primary Applications: Seismic accelerometers, differential pressure diaphragms.
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
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 3.3: Ballast (Potentiometer) Circuit — Schematic, Transfer Function &amp; Sensitivity Peak
  </text>
  <text x="1250" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit III · Section 3.3.1
  </text>

  <!-- Left: Circuit Schematic -->
  <rect x="50" y="140" width="700" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Ballast Circuit Topology
  </text>

  <!-- DC Supply Eb -->
  <line x1="160" y1="240" x2="160" y2="400" stroke="#0f172a" stroke-width="3" />
  <circle cx="160" cy="240" r="6" fill="#0f172a" />
  <text x="100" y="245" font-family="monospace" font-size="24" font-weight="700" fill="#2563eb">+Eb</text>
  <text x="90" y="275" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">(DC Source)</text>

  <!-- Wire to Ballast Resistor -->
  <line x1="160" y1="240" x2="300" y2="240" stroke="#0f172a" stroke-width="3" />
  <line x1="300" y1="240" x2="300" y2="290" stroke="#0f172a" stroke-width="3" />

  <!-- Ballast Resistor Rb -->
  <rect x="275" y="290" width="50" height="100" fill="#f8fafc" stroke="#0f172a" stroke-width="3" />
  <text x="340" y="345" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">Rb</text>
  <text x="340" y="375" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">(Ballast Resistor)</text>

  <!-- Intermediate Node (Output pick-off) -->
  <line x1="300" y1="390" x2="300" y2="460" stroke="#0f172a" stroke-width="3" />
  <circle cx="300" cy="460" r="7" fill="#dc2626" />
  <text x="245" y="450" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626">Node A</text>

  <!-- Strain Gauge Rg -->
  <line x1="300" y1="460" x2="300" y2="520" stroke="#0f172a" stroke-width="3" />
  <rect x="275" y="520" width="50" height="100" fill="#eff6ff" stroke="#2563eb" stroke-width="3" />
  <line x1="260" y1="630" x2="340" y2="510" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowBlue)" />
  <text x="340" y="575" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#2563eb">Rg(t)</text>
  <text x="340" y="605" font-family="monospace" font-size="18" fill="#1e40af">= R₀ + ΔR(t)</text>

  <!-- Ground Connection -->
  <line x1="300" y1="620" x2="300" y2="690" stroke="#0f172a" stroke-width="3" />
  <line x1="270" y1="690" x2="330" y2="690" stroke="#0f172a" stroke-width="3" />
  <line x1="280" y1="700" x2="320" y2="700" stroke="#0f172a" stroke-width="3" />
  <line x1="290" y1="710" x2="310" y2="710" stroke="#0f172a" stroke-width="3" />
  <text x="330" y="715" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">GND</text>

  <!-- AC Coupling Branch -->
  <line x1="300" y1="460" x2="450" y2="460" stroke="#0f172a" stroke-width="3" />
  <!-- Capacitor C -->
  <line x1="450" y1="435" x2="450" y2="485" stroke="#0f172a" stroke-width="4" />
  <line x1="465" y1="435" x2="465" y2="485" stroke="#0f172a" stroke-width="4" />
  <text x="445" y="420" font-family="monospace" font-size="20" font-weight="700" fill="#0f172a">C</text>
  <text x="410" y="510" font-family="system-ui, sans-serif" font-size="15" fill="#64748b">(Blocks large DC bias)</text>

  <line x1="465" y1="460" x2="600" y2="460" stroke="#0f172a" stroke-width="3" />
  <circle cx="600" cy="460" r="6" fill="#0f172a" />
  <text x="615" y="468" font-family="monospace" font-size="22" font-weight="700" fill="#dc2626">+ eₒ(t)</text>
  <text x="615" y="495" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">(Dynamic Output)</text>

  <!-- DC Total Output note -->
  <rect x="80" y="740" width="640" height="95" rx="8" fill="#fef2f2" stroke="#fecaca" stroke-width="1.2" />
  <text x="100" y="770" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#991b1b">
    Critical Limitation of Ballast Circuit:
  </text>
  <text x="100" y="805" font-family="system-ui, sans-serif" font-size="17" fill="#7f1d1d">
    Output has a massive DC pedestal voltage <tspan font-family="monospace" font-weight="700">E_DC = Eb · Rg / (Rb + Rg)</tspan>. Cannot measure static strain (DC) without complex offset subtraction!
  </text>

  <!-- Right: Mathematical Equations & Sensitivity Plot -->
  <rect x="780" y="140" width="770" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="810" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Transfer Function &amp; Sensitivity Optimization
  </text>

  <!-- Mathematical Card -->
  <rect x="810" y="205" width="710" height="210" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
  <text x="830" y="235" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">
    Mathematical Formulations:
  </text>
  <text x="850" y="275" font-family="monospace" font-size="22" font-weight="700" fill="#1d4ed8">
    eₒ = Eb · [ (R₀ + ΔR) / (Rb + R₀ + ΔR) ]
  </text>
  <text x="850" y="315" font-family="system-ui, sans-serif" font-size="18" fill="#1e293b">
    Let resistance ratio <tspan font-family="monospace" font-weight="700">m = Rb / R₀</tspan>. Small-signal dynamic output:
  </text>
  <text x="850" y="355" font-family="monospace" font-size="22" font-weight="700" fill="#0f172a">
    Δeₒ = Eb · [ m / (1 + m)² ] · (ΔR / R₀) = Eb · [ m / (1 + m)² ] · GF · ε
  </text>
  <text x="850" y="395" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#047857">
    Circuit Sensitivity: <tspan font-family="monospace">S_c = deₒ / dε = Eb · GF · [ m / (1 + m)² ]</tspan>
  </text>

  <!-- Sensitivity Plot (m vs Normalized Sensitivity) -->
  <rect x="810" y="430" width="710" height="400" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="830" y="460" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#0f172a">
    Plot: Circuit Sensitivity Factor η = m / (1 + m)² vs. Resistance Ratio m
  </text>

  <!-- Coordinate Axes -->
  <line x1="880" y1="760" x2="1460" y2="760" stroke="#0f172a" stroke-width="2.5" />
  <line x1="880" y1="760" x2="880" y2="490" stroke="#0f172a" stroke-width="2.5" />
  <text x="1460" y="795" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">m = Rb / R₀</text>
  <text x="820" y="500" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">η(m)</text>

  <!-- Curve: m/(1+m)^2 -->
  <!-- Peak at m=1, η=0.25 (scaled) -->
  <path d="
    M 880 760
    C 940 700, 1000 580, 1080 540
    C 1140 540, 1260 620, 1440 710
  " fill="none" stroke="#2563eb" stroke-width="4.5" />

  <!-- Dotted peak indicator at m = 1 -->
  <line x1="1080" y1="540" x2="1080" y2="760" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" />
  <line x1="880" y1="540" x2="1080" y2="540" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" />
  <circle cx="1080" cy="540" r="7" fill="#dc2626" />

  <text x="1055" y="790" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626">m = 1.0 (Rb = R₀)</text>
  <text x="830" y="545" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626">0.25</text>
  <text x="1100" y="530" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#dc2626">
    GLOBAL MAXIMUM: S_c,max = (1/4) · Eb · GF
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
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 3.4: Wheatstone Bridge Architectures — Quarter, Half &amp; Full Bridge Operations
  </text>
  <text x="1250" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit III · Section 3.3.2
  </text>

  <!-- 3 Columns for Quarter, Half, and Full Bridge -->

  <!-- COLUMN 1: QUARTER BRIDGE (1 Active Gauge) -->
  <rect x="50" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="65" y="155" width="450" height="40" rx="6" fill="#eff6ff" />
  <text x="85" y="182" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1d4ed8">
    1. Quarter Bridge (1 Active)
  </text>

  <!-- Diamond Bridge 1 -->
  <g transform="translate(290, 310)">
    <!-- Bridge Lines -->
    <path d="M 0 -80 L 80 0 L 0 80 L -80 0 Z" fill="none" stroke="#64748b" stroke-width="3" />
    <!-- Arms -->
    <!-- R1 Active -->
    <rect x="-60" y="-60" width="40" height="20" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" transform="rotate(-45 -40 -50)" />
    <text x="-95" y="-55" font-family="monospace" font-size="18" font-weight="700" fill="#dc2626">R₁ (Active)</text>

    <!-- R2 Dummy/Fixed -->
    <rect x="20" y="-60" width="40" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(45 40 -50)" />
    <text x="45" y="-55" font-family="monospace" font-size="18" font-weight="700" fill="#475569">R₂ (Fixed)</text>

    <!-- R4 Fixed -->
    <rect x="-60" y="40" width="40" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(45 -40 50)" />
    <text x="-95" y="65" font-family="monospace" font-size="18" font-weight="700" fill="#475569">R₄ (Fixed)</text>

    <!-- R3 Fixed -->
    <rect x="20" y="40" width="40" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(-45 40 50)" />
    <text x="45" y="65" font-family="monospace" font-size="18" font-weight="700" fill="#475569">R₃ (Fixed)</text>

    <!-- Excitation & Output Nodes -->
    <circle cx="0" cy="-80" r="6" fill="#2563eb" />
    <text x="-15" y="-95" font-family="monospace" font-size="18" font-weight="700" fill="#2563eb">+E</text>
    <circle cx="0" cy="80" r="6" fill="#2563eb" />
    <text x="-15" y="105" font-family="monospace" font-size="18" font-weight="700" fill="#2563eb">GND</text>
    <circle cx="-80" cy="0" r="6" fill="#dc2626" />
    <circle cx="80" cy="0" r="6" fill="#dc2626" />
    <text x="-12" y="5" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626">Vₒ</text>
  </g>

  <!-- Output Formulation Card 1 -->
  <rect x="70" y="440" width="440" height="395" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="90" y="475" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Output Transfer Equation:
  </text>
  <text x="90" y="515" font-family="monospace" font-size="21" font-weight="700" fill="#1d4ed8">
    Vₒ = (E / 4) · (ΔR₁ / R₀)
  </text>
  <text x="90" y="555" font-family="monospace" font-size="22" font-weight="700" fill="#2563eb">
    Vₒ = (1 / 4) · E · GF · ε
  </text>
  <text x="90" y="605" font-family="system-ui, sans-serif" font-size="17" font-weight="600" fill="#0f172a">
    Relative Sensitivity Factor:
  </text>
  <text x="90" y="640" font-family="monospace" font-size="24" font-weight="800" fill="#2563eb">
    1× Base Sensitivity
  </text>
  <text x="90" y="685" font-family="system-ui, sans-serif" font-size="16" fill="#334155">
    • Measures axial or bending strain.
  </text>
  <text x="90" y="715" font-family="system-ui, sans-serif" font-size="16" fill="#334155">
    • Has slight non-linearity error at large strains: ΔR/R₀ / (2 + ΔR/R₀).
  </text>
  <text x="90" y="750" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#b91c1c">
    • Requires 3-wire lead circuit to suppress lead resistance shifts!
  </text>

  <!-- COLUMN 2: HALF BRIDGE (2 Active Gauges in Bending) -->
  <rect x="560" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="575" y="155" width="450" height="40" rx="6" fill="#fdf4ff" />
  <text x="595" y="182" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#86198f">
    2. Half Bridge (2 Active: Bending)
  </text>

  <!-- Diamond Bridge 2 -->
  <g transform="translate(800, 310)">
    <path d="M 0 -80 L 80 0 L 0 80 L -80 0 Z" fill="none" stroke="#64748b" stroke-width="3" />
    <!-- R1 Active Tension -->
    <rect x="-60" y="-60" width="40" height="20" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" transform="rotate(-45 -40 -50)" />
    <text x="-120" y="-55" font-family="monospace" font-size="17" font-weight="700" fill="#dc2626">R₁ (+ε Tension)</text>

    <!-- R2 Active Compression -->
    <rect x="-60" y="40" width="40" height="20" rx="3" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" transform="rotate(45 -40 50)" />
    <text x="-135" y="65" font-family="monospace" font-size="17" font-weight="700" fill="#2563eb">R₄ (-ε Comp.)</text>

    <!-- R2 Fixed -->
    <rect x="20" y="-60" width="40" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(45 40 -50)" />
    <text x="45" y="-55" font-family="monospace" font-size="17" font-weight="700" fill="#475569">R₂ (Fixed)</text>
    <!-- R3 Fixed -->
    <rect x="20" y="40" width="40" height="20" rx="3" fill="#94a3b8" stroke="#475569" stroke-width="1.5" transform="rotate(-45 40 50)" />
    <text x="45" y="65" font-family="monospace" font-size="17" font-weight="700" fill="#475569">R₃ (Fixed)</text>

    <!-- Nodes -->
    <circle cx="0" cy="-80" r="6" fill="#2563eb" />
    <circle cx="0" cy="80" r="6" fill="#2563eb" />
    <circle cx="-80" cy="0" r="6" fill="#dc2626" />
    <circle cx="80" cy="0" r="6" fill="#dc2626" />
    <text x="-12" y="5" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626">Vₒ</text>
  </g>

  <!-- Output Formulation Card 2 -->
  <rect x="580" y="440" width="440" height="395" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="600" y="475" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Output Transfer Equation:
  </text>
  <text x="600" y="515" font-family="monospace" font-size="21" font-weight="700" fill="#86198f">
    Vₒ = (E / 4) · [ (ΔR₁/R₀) - (ΔR₄/R₀) ]
  </text>
  <text x="600" y="555" font-family="monospace" font-size="22" font-weight="700" fill="#86198f">
    Vₒ = (1 / 2) · E · GF · ε
  </text>
  <text x="600" y="605" font-family="system-ui, sans-serif" font-size="17" font-weight="600" fill="#0f172a">
    Relative Sensitivity Factor:
  </text>
  <text x="600" y="640" font-family="monospace" font-size="24" font-weight="800" fill="#86198f">
    2× Sensitivity (Doubled!)
  </text>
  <text x="600" y="685" font-family="system-ui, sans-serif" font-size="16" fill="#334155">
    • Gauges on opposite beam faces (top in tension, bottom in compression).
  </text>
  <text x="600" y="715" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">
    • AUTOMATIC TEMPERATURE COMPENSATION! Temperature shifts cancel out.
  </text>
  <text x="600" y="750" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">
    • Rejects unwanted axial tension thrust completely.
  </text>

  <!-- COLUMN 3: FULL BRIDGE (4 Active Gauges in Bending) -->
  <rect x="1070" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="1085" y="155" width="450" height="40" rx="6" fill="#ecfdf5" />
  <text x="1105" y="182" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#047857">
    3. Full Bridge (4 Active: Max Sensitivity)
  </text>

  <!-- Diamond Bridge 3 -->
  <g transform="translate(1310, 310)">
    <path d="M 0 -80 L 80 0 L 0 80 L -80 0 Z" fill="none" stroke="#64748b" stroke-width="3" />
    <!-- All 4 Active -->
    <rect x="-60" y="-60" width="40" height="20" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" transform="rotate(-45 -40 -50)" />
    <text x="-120" y="-55" font-family="monospace" font-size="17" font-weight="700" fill="#dc2626">R₁ (+ε)</text>

    <rect x="20" y="-60" width="40" height="20" rx="3" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" transform="rotate(45 40 -50)" />
    <text x="45" y="-55" font-family="monospace" font-size="17" font-weight="700" fill="#2563eb">R₂ (-ε)</text>

    <rect x="-60" y="40" width="40" height="20" rx="3" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" transform="rotate(45 -40 50)" />
    <text x="-120" y="65" font-family="monospace" font-size="17" font-weight="700" fill="#2563eb">R₄ (-ε)</text>

    <rect x="20" y="40" width="40" height="20" rx="3" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" transform="rotate(-45 40 50)" />
    <text x="45" y="65" font-family="monospace" font-size="17" font-weight="700" fill="#dc2626">R₃ (+ε)</text>

    <!-- Nodes -->
    <circle cx="0" cy="-80" r="6" fill="#2563eb" />
    <circle cx="0" cy="80" r="6" fill="#2563eb" />
    <circle cx="-80" cy="0" r="6" fill="#dc2626" />
    <circle cx="80" cy="0" r="6" fill="#dc2626" />
    <text x="-12" y="5" font-family="monospace" font-size="20" font-weight="700" fill="#dc2626">Vₒ</text>
  </g>

  <!-- Output Formulation Card 3 -->
  <rect x="1090" y="440" width="440" height="395" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="1110" y="475" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Output Transfer Equation:
  </text>
  <text x="1110" y="515" font-family="monospace" font-size="20" font-weight="700" fill="#047857">
    Vₒ = (E/4)·[(ΔR₁-ΔR₂+ΔR₃-ΔR₄)/R₀]
  </text>
  <text x="1110" y="555" font-family="monospace" font-size="24" font-weight="800" fill="#047857">
    Vₒ = E · GF · ε
  </text>
  <text x="1110" y="605" font-family="system-ui, sans-serif" font-size="17" font-weight="600" fill="#0f172a">
    Relative Sensitivity Factor:
  </text>
  <text x="1110" y="640" font-family="monospace" font-size="24" font-weight="800" fill="#047857">
    4× Maximum Sensitivity!
  </text>
  <text x="1110" y="685" font-family="system-ui, sans-serif" font-size="16" fill="#334155">
    • Two top surface tension gauges + two bottom compression gauges.
  </text>
  <text x="1110" y="715" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">
    • Exact mathematical linearity (zero second-order non-linear terms).
  </text>
  <text x="1110" y="750" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#059669">
    • Full rejection of temperature drift and axial axial loads.
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
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 3.5: Constant Current Circuit — Precision 4-Wire Kelvin Architecture &amp; Perfect Linearity
  </text>
  <text x="1250" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit III · Section 3.3.3
  </text>

  <!-- Left: Circuit Diagram -->
  <rect x="50" y="140" width="760" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    4-Wire Kelvin Constant Current Circuit
  </text>

  <!-- Current Source Symbol -->
  <g transform="translate(180, 360)">
    <circle cx="0" cy="0" r="45" fill="#eff6ff" stroke="#2563eb" stroke-width="3" />
    <path d="M 0 -25 L 0 25 M 0 25 L -10 10 M 0 25 L 10 10" stroke="#2563eb" stroke-width="3" fill="none" />
    <text x="-90" y="5" font-family="monospace" font-size="24" font-weight="700" fill="#2563eb">Is</text>
    <text x="-120" y="35" font-family="system-ui, sans-serif" font-size="16" fill="#64748b">(Constant Current)</text>
  </g>

  <!-- Wire Line 1 (Force +) with lead resistance r_L1 -->
  <line x1="180" y1="315" x2="180" y2="240" stroke="#0f172a" stroke-width="3" />
  <line x1="180" y1="240" x2="350" y2="240" stroke="#0f172a" stroke-width="3" />
  <!-- Lead Resistor r_L1 -->
  <rect x="350" y="225" width="45" height="30" fill="#f1f5f9" stroke="#64748b" stroke-width="2" />
  <text x="355" y="215" font-family="monospace" font-size="16" font-weight="600" fill="#475569">r_L1</text>
  <line x1="395" y1="240" x2="520" y2="240" stroke="#0f172a" stroke-width="3" />

  <!-- Wire Line 4 (Force -) with lead resistance r_L4 -->
  <line x1="180" y1="405" x2="180" y2="480" stroke="#0f172a" stroke-width="3" />
  <line x1="180" y1="480" x2="350" y2="480" stroke="#0f172a" stroke-width="3" />
  <rect x="350" y="465" width="45" height="30" fill="#f1f5f9" stroke="#64748b" stroke-width="2" />
  <text x="355" y="515" font-family="monospace" font-size="16" font-weight="600" fill="#475569">r_L4</text>
  <line x1="395" y1="480" x2="520" y2="480" stroke="#0f172a" stroke-width="3" />

  <!-- Remote Strain Gauge at the specimen -->
  <rect x="520" y="190" width="180" height="340" rx="10" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" stroke-dasharray="6,4" />
  <text x="540" y="220" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#854d0e">
    Remote Specimen Zone
  </text>

  <!-- Gauge Resistor Rg -->
  <line x1="610" y1="240" x2="610" y2="300" stroke="#0f172a" stroke-width="3" />
  <rect x="585" y="300" width="50" height="120" fill="#ffffff" stroke="#dc2626" stroke-width="3" />
  <text x="645" y="350" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#dc2626">Rg</text>
  <text x="645" y="380" font-family="monospace" font-size="17" fill="#b91c1c">= R₀ + ΔR</text>
  <line x1="610" y1="420" x2="610" y2="480" stroke="#0f172a" stroke-width="3" />

  <!-- 4-Wire Sense Connections (Sense + and Sense -) -->
  <circle cx="610" cy="270" r="6" fill="#2563eb" />
  <line x1="610" y1="270" x2="420" y2="270" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,2" />
  <!-- Lead r_L2 -->
  <rect x="375" y="258" width="45" height="24" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" />
  <text x="382" y="275" font-family="monospace" font-size="14" font-weight="600" fill="#2563eb">r_L2</text>
  <line x1="375" y1="270" x2="280" y2="270" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,2" />

  <circle cx="610" cy="450" r="6" fill="#2563eb" />
  <line x1="610" y1="450" x2="420" y2="450" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,2" />
  <!-- Lead r_L3 -->
  <rect x="375" y="438" width="45" height="24" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" />
  <text x="382" y="455" font-family="monospace" font-size="14" font-weight="600" fill="#2563eb">r_L3</text>
  <line x1="375" y1="450" x2="280" y2="450" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4,2" />

  <!-- High-Impedance Instrumentation Amplifier -->
  <g transform="translate(240, 360)">
    <polygon points="0,-60 60,0 0,60" fill="#f8fafc" stroke="#0f172a" stroke-width="2.5" />
    <text x="12" y="-15" font-family="monospace" font-size="20" font-weight="700" fill="#0f172a">+</text>
    <text x="15" y="25" font-family="monospace" font-size="22" font-weight="700" fill="#0f172a">-</text>
    <line x1="60" y1="0" x2="110" y2="0" stroke="#0f172a" stroke-width="3" />
    <circle cx="110" cy="0" r="6" fill="#dc2626" />
    <text x="120" y="8" font-family="monospace" font-size="22" font-weight="700" fill="#dc2626">V_out</text>
  </g>
  <text x="190" y="445" font-family="system-ui, sans-serif" font-size="15" font-weight="600" fill="#0284c7">
    High Input Impedance (Z_in &gt; 10 GΩ, I_sense ≈ 0)
  </text>

  <!-- Mechanism Explanation Box -->
  <rect x="80" y="600" width="700" height="235" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2" />
  <text x="100" y="635" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#166534">
    Why the 4-Wire Kelvin Method Eliminates Lead Wire Error:
  </text>
  <text x="100" y="670" font-family="system-ui, sans-serif" font-size="17" fill="#1e293b">
    • <tspan font-weight="700">Force Leads (L1 &amp; L4):</tspan> Carry the full excitation current <tspan font-family="monospace">Is</tspan> from source to gauge.
  </text>
  <text x="100" y="705" font-family="system-ui, sans-serif" font-size="17" fill="#1e293b">
    • <tspan font-weight="700">Sense Leads (L2 &amp; L3):</tspan> Connect strictly across gauge terminals to an op-amp with &gt;10 GΩ input impedance.
  </text>
  <text x="100" y="740" font-family="system-ui, sans-serif" font-size="17" fill="#1e293b">
    • <tspan font-weight="700">Zero Current Drop:</tspan> Since <tspan font-family="monospace">I_sense ≈ 0</tspan>, voltage drop <tspan font-family="monospace">V_drop = I_sense · r_L = 0</tspan>.
  </text>
  <text x="100" y="775" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#15803d">
    Result: Long cables (100+ meters) introduce zero resistance offset or thermal drift!
  </text>

  <!-- Right: Mathematical Comparison vs Wheatstone Bridge -->
  <rect x="840" y="140" width="710" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="870" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Mathematical Transfer Analysis &amp; Linearity
  </text>

  <!-- Card: Constant Current Transfer -->
  <rect x="870" y="210" width="650" height="230" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
  <text x="890" y="245" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">
    Constant Current Transfer Equation:
  </text>
  <text x="910" y="290" font-family="monospace" font-size="24" font-weight="700" fill="#1d4ed8">
    V_sense = Is · Rg = Is · (R₀ + ΔR)
  </text>
  <text x="890" y="335" font-family="system-ui, sans-serif" font-size="18" fill="#1e293b">
    Subtracting the initial baseline voltage <tspan font-family="monospace" font-weight="700">V₀ = Is · R₀</tspan>:
  </text>
  <text x="910" y="380" font-family="monospace" font-size="24" font-weight="800" fill="#0f172a">
    ΔV_out = Is · ΔR = Is · R₀ · GF · ε
  </text>
  <text x="890" y="420" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#16a34a">
    PERFECT INTRINSIC LINEARITY: Output is 100% linear with zero non-linear denominator!
  </text>

  <!-- Comparison Table -->
  <rect x="870" y="465" width="650" height="370" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="890" y="500" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#0f172a">
    Comparison: Constant Current vs. Constant Voltage Bridge
  </text>

  <g transform="translate(890, 520)">
    <!-- Header -->
    <rect x="0" y="0" width="610" height="40" fill="#e2e8f0" rx="4" />
    <text x="15" y="26" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Feature</text>
    <text x="180" y="26" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Wheatstone Bridge (V_exc)</text>
    <text x="420" y="26" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">Constant Current (I_s)</text>

    <!-- Row 1 -->
    <text x="15" y="75" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#334155">Non-Linearity</text>
    <text x="180" y="75" font-family="system-ui, sans-serif" font-size="16" fill="#b91c1c">ΔR/(2R₀+ΔR) non-linear</text>
    <text x="420" y="75" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#16a34a">0.00% (Strictly Linear)</text>

    <!-- Row 2 -->
    <text x="15" y="125" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#334155">Sensitivity S</text>
    <text x="180" y="125" font-family="system-ui, sans-serif" font-size="16" fill="#334155">S = (1/4)·E·GF (Quarter)</text>
    <text x="420" y="125" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#2563eb">S = Is·R₀·GF (Double!)</text>

    <!-- Row 3 -->
    <text x="15" y="175" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#334155">Lead Wire Drop</text>
    <text x="180" y="175" font-family="system-ui, sans-serif" font-size="16" fill="#b91c1c">Attenuates V_exc across wire</text>
    <text x="420" y="175" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#16a34a">Eliminated via 4-wire Kelvin</text>

    <!-- Row 4 -->
    <text x="15" y="225" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#334155">Self-Heating</text>
    <text x="180" y="225" font-family="system-ui, sans-serif" font-size="16" fill="#334155">P = V_g² / R₀ (varies with R)</text>
    <text x="420" y="225" font-family="system-ui, sans-serif" font-size="16" fill="#334155">P = Is² · R₀ (strictly stable)</text>

    <!-- Row 5 -->
    <text x="15" y="275" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#334155">Circuit Cost</text>
    <text x="180" y="275" font-family="system-ui, sans-serif" font-size="16" fill="#16a34a">Simple DC voltage reg.</text>
    <text x="420" y="275" font-family="system-ui, sans-serif" font-size="16" fill="#334155">Precision current ref. required</text>
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
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 3.6: Adjacent Arm Balancing — Dummy Gauge Temperature Compensation
  </text>
  <text x="1250" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit III · Section 3.4.1
  </text>

  <!-- Left: Physical Mechanical Setup -->
  <rect x="50" y="140" width="700" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Physical Installation: Active Gauge vs. Dummy Gauge
  </text>

  <!-- Specimen 1: Active Member under Tension P -->
  <rect x="100" y="230" width="280" height="300" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
  <text x="130" y="265" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Loaded Test Specimen
  </text>

  <!-- Active Gauge R1 on Specimen 1 -->
  <rect x="150" y="320" width="180" height="110" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <path d="M 180 345 L 300 345 M 300 375 L 180 375 M 180 405 L 300 405" stroke="#b45309" stroke-width="4" stroke-linecap="round" />
  <text x="180" y="335" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#991b1b">Active Gauge (R₁)</text>
  <text x="160" y="445" font-family="monospace" font-size="16" font-weight="700" fill="#b91c1c">ΔR₁ = ΔR_strain + ΔR_temp</text>

  <!-- Load Arrows -->
  <g stroke="#dc2626" stroke-width="4" fill="#dc2626">
    <path d="M 240 200 L 240 220 M 240 200 L 230 210 M 240 200 L 250 210" />
    <path d="M 240 560 L 240 540 M 240 560 L 230 550 M 240 560 L 250 550" />
    <text x="210" y="185" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#dc2626">Load P</text>
  </g>

  <!-- Specimen 2: Unstressed Dummy Block (Identical Material, Same Temp T) -->
  <rect x="440" y="280" width="260" height="200" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
  <text x="460" y="315" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Unstressed Dummy Block
  </text>

  <!-- Dummy Gauge R2 -->
  <rect x="480" y="340" width="180" height="110" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
  <path d="M 510 365 L 630 365 M 630 395 L 510 395 M 510 425 L 630 425" stroke="#15803d" stroke-width="4" stroke-linecap="round" />
  <text x="510" y="355" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#166534">Dummy Gauge (R₂)</text>
  <text x="500" y="465" font-family="monospace" font-size="16" font-weight="700" fill="#15803d">ΔR₂ = 0 + ΔR_temp</text>

  <!-- Thermal Bath Envelope (Both experience same temperature T) -->
  <rect x="80" y="580" width="640" height="90" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
  <text x="100" y="615" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#b91c1c">
    Thermal Environment Condition:
  </text>
  <text x="100" y="648" font-family="system-ui, sans-serif" font-size="17" fill="#7f1d1d">
    Both specimens are thermally bonded so <tspan font-family="monospace" font-weight="700">T₁ = T₂</tspan>. Dummy block is free of mechanical strain (<tspan font-family="monospace">ε_dummy = 0</tspan>).
  </text>

  <!-- Key Rule Callout -->
  <rect x="80" y="690" width="640" height="145" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
  <text x="100" y="725" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#1e3a8a">
    Golden Bridge Rule for Adjacent Arm Cancellation:
  </text>
  <text x="100" y="760" font-family="system-ui, sans-serif" font-size="17" fill="#1e293b">
    In any Wheatstone bridge:
  </text>
  <text x="120" y="795" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8">
    ΔVₒ = (E / 4) · [ (ΔR₁ / R₀) - (ΔR₂ / R₀) ]
  </text>
  <text x="100" y="825" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#15803d">
    Identical temperature resistance increments in adjacent arms SUBTRACT TO EXACT ZERO!
  </text>

  <!-- Right: Wheatstone Bridge Circuit & Exact Proof -->
  <rect x="780" y="140" width="770" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="810" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Bridge Wiring &amp; Mathematical Cancellation Proof
  </text>

  <!-- Bridge Diamond -->
  <g transform="translate(1000, 320)">
    <path d="M 0 -90 L 90 0 L 0 90 L -90 0 Z" fill="none" stroke="#64748b" stroke-width="3" />

    <!-- Arm 1: Active Gauge R1 -->
    <rect x="-65" y="-65" width="45" height="22" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="2" transform="rotate(-45 -42 -54)" />
    <text x="-140" y="-60" font-family="monospace" font-size="18" font-weight="700" fill="#b91c1c">R₁ (Active)</text>

    <!-- Arm 2: Adjacent Dummy Gauge R2 -->
    <rect x="20" y="-65" width="45" height="22" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="2" transform="rotate(45 42 -54)" />
    <text x="50" y="-60" font-family="monospace" font-size="18" font-weight="700" fill="#15803d">R₂ (Dummy)</text>

    <!-- Arm 4: Fixed Resistor R4 -->
    <rect x="-65" y="45" width="45" height="22" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" transform="rotate(45 -42 54)" />
    <text x="-120" y="70" font-family="monospace" font-size="18" font-weight="700" fill="#475569">R₄ (Fixed)</text>

    <!-- Arm 3: Fixed Resistor R3 -->
    <rect x="20" y="45" width="45" height="22" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" transform="rotate(-45 42 54)" />
    <text x="50" y="70" font-family="monospace" font-size="18" font-weight="700" fill="#475569">R₃ (Fixed)</text>

    <!-- Excitation & Output Nodes -->
    <circle cx="0" cy="-90" r="7" fill="#2563eb" />
    <text x="-15" y="-105" font-family="monospace" font-size="20" font-weight="700" fill="#2563eb">+E</text>
    <circle cx="0" cy="90" r="7" fill="#2563eb" />
    <text x="-15" y="115" font-family="monospace" font-size="20" font-weight="700" fill="#2563eb">GND</text>
    <circle cx="-90" cy="0" r="7" fill="#dc2626" />
    <circle cx="90" cy="0" r="7" fill="#dc2626" />
    <text x="-15" y="5" font-family="monospace" font-size="24" font-weight="700" fill="#dc2626">Vₒ</text>
  </g>

  <!-- Step by Step Math Card -->
  <rect x="810" y="460" width="710" height="375" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="830" y="495" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0f172a">
    Step-by-Step Algebraic Proof:
  </text>

  <text x="830" y="535" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    1. Active gauge change with strain <tspan font-family="monospace">ε</tspan> and temperature change <tspan font-family="monospace">ΔT</tspan>:
  </text>
  <text x="850" y="570" font-family="monospace" font-size="20" font-weight="700" fill="#b91c1c">
    ΔR₁ = R₀ · GF · ε + R₀ · (β + GF·(α_s - α_g)) · ΔT
  </text>

  <text x="830" y="615" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    2. Dummy gauge change (zero mechanical strain <tspan font-family="monospace">ε = 0</tspan>, same <tspan font-family="monospace">ΔT</tspan>):
  </text>
  <text x="850" y="650" font-family="monospace" font-size="20" font-weight="700" fill="#15803d">
    ΔR₂ = 0 + R₀ · (β + GF·(α_s - α_g)) · ΔT
  </text>

  <text x="830" y="695" font-family="system-ui, sans-serif" font-size="18" fill="#334155">
    3. Substituting into adjacent-arm bridge transfer equation:
  </text>
  <text x="850" y="735" font-family="monospace" font-size="21" font-weight="700" fill="#1d4ed8">
    Vₒ = (E / 4) · [ (ΔR₁ / R₀) - (ΔR₂ / R₀) ]
  </text>
  <text x="850" y="775" font-family="monospace" font-size="23" font-weight="800" fill="#047857">
    Vₒ = (E / 4) · [ GF · ε + (ΔR_T / R₀) - (ΔR_T / R₀) ] = (1 / 4) · E · GF · ε
  </text>
  <text x="830" y="815" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#15803d">
    Conclusion: Thermal terms cancel out 100% analytically, leaving pure strain response!
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
  <!-- Pure White Background -->
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Header -->
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 3.7: Self-Temperature Compensated (STC) Gauges — Metallurgical Matching
  </text>
  <text x="1250" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit III · Section 3.4.2
  </text>

  <!-- Left: Physical Matching Principle -->
  <rect x="50" y="140" width="700" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Physical Origin of Thermal Apparent Strain
  </text>

  <!-- Specimen Expands with Temp ΔT -->
  <rect x="80" y="220" width="640" height="160" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
  <text x="100" y="255" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Specimen Thermal Expansion: α_s (e.g. Steel = 11 ppm/°C, Aluminum = 23 ppm/°C)
  </text>

  <!-- Gauge Foil Bonded on top -->
  <rect x="140" y="290" width="520" height="60" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="160" y="325" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#854d0e">
    Foil Alloy Expansion: α_g &amp; Resistance Temp Coeff: β = (1/R₀)(dR/dT)
  </text>

  <!-- Two competing physical mechanisms -->
  <rect x="80" y="410" width="640" height="230" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2" />
  <text x="100" y="445" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#1e3a8a">
    Two Opposing Physical Thermal Effects:
  </text>

  <text x="100" y="485" font-family="system-ui, sans-serif" font-size="18" fill="#1e293b">
    1. <tspan font-weight="700" fill="#2563eb">Differential Thermal Expansion:</tspan> The specimen expands faster than the foil, stretching it mechanically by:
  </text>
  <text x="120" y="525" font-family="monospace" font-size="21" font-weight="700" fill="#2563eb">
    ε_thermal = (α_specimen - α_gauge) · ΔT
  </text>

  <text x="100" y="570" font-family="system-ui, sans-serif" font-size="18" fill="#1e293b">
    2. <tspan font-weight="700" fill="#b91c1c">Thermal Coefficient of Resistivity (TCR):</tspan> The alloy's electrical resistivity changes intrinsically with temperature:
  </text>
  <text x="120" y="610" font-family="monospace" font-size="21" font-weight="700" fill="#b91c1c">
    (ΔR / R₀)_resistivity = β · ΔT
  </text>

  <!-- STC Condition Box -->
  <rect x="80" y="660" width="640" height="175" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
  <text x="100" y="695" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#166534">
    The STC Metallurgical Balance Condition:
  </text>
  <text x="100" y="735" font-family="monospace" font-size="22" font-weight="800" fill="#15803d">
    β + GF · (α_specimen - α_gauge) = 0
  </text>
  <text x="100" y="775" font-family="system-ui, sans-serif" font-size="17" fill="#1e293b">
    By precise metallurgical cold-working and heat-treatment of Constantan or Karma foil, manufacturers deliberately tune <tspan font-family="monospace" font-weight="700">β</tspan> to exactly counter <tspan font-family="monospace">GF · (α_s - α_g)</tspan>!
  </text>
  <text x="100" y="810" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#166534">
    Single gauge in Quarter Bridge requires NO dummy gauge over working range!
  </text>

  <!-- Right: Apparent Strain vs. Temperature Curve -->
  <rect x="780" y="140" width="770" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="810" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Thermal Apparent Strain vs. Temperature Characteristics
  </text>

  <!-- Graph Container -->
  <rect x="810" y="210" width="710" height="420" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />

  <!-- Coordinates -->
  <line x1="880" y1="420" x2="1470" y2="420" stroke="#64748b" stroke-width="2" />
  <line x1="1170" y1="240" x2="1170" y2="600" stroke="#64748b" stroke-width="2" />

  <text x="1460" y="450" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Temp (°C)</text>
  <text x="825" y="260" font-family="system-ui, sans-serif" font-size="17" font-weight="700" fill="#0f172a">Apparent Strain ε_app (με)</text>

  <!-- Tick Labels -->
  <text x="880" y="445" font-family="monospace" font-size="15" fill="#64748b">-50°</text>
  <text x="1020" y="445" font-family="monospace" font-size="15" fill="#64748b">0°</text>
  <text x="1160" y="445" font-family="monospace" font-size="16" font-weight="700" fill="#0f172a">24°C (Ref)</text>
  <text x="1310" y="445" font-family="monospace" font-size="15" fill="#64748b">100°</text>
  <text x="1440" y="445" font-family="monospace" font-size="15" fill="#64748b">150°</text>

  <!-- Uncompensated Regular Gauge (Steep Slanted Line) -->
  <path d="M 900 580 L 1450 250" stroke="#dc2626" stroke-width="3" stroke-dasharray="6,4" fill="none" />
  <text x="1350" y="270" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626">
    Uncompensated Gauge (drifts &gt; 500 με)
  </text>

  <!-- Self-Temperature Compensated (Flat U-Shaped Polynomial Curve near zero) -->
  <path d="
    M 900 480
    C 1050 435, 1120 415, 1170 420
    C 1220 425, 1340 410, 1450 490
  " stroke="#16a34a" stroke-width="4.5" fill="none" />
  <circle cx="1170" cy="420" r="7" fill="#16a34a" />
  <text x="1040" y="390" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#16a34a">
    STC Gauge: Near-Zero Drift (±10 με over -20°C to +120°C)
  </text>

  <!-- STC Code Reference Callout -->
  <rect x="810" y="650" width="710" height="185" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="830" y="685" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">
    Standard Commercial STC Number Designation:
  </text>
  <text x="830" y="720" font-family="system-ui, sans-serif" font-size="17" fill="#334155">
    • <tspan font-family="monospace" font-weight="700" fill="#2563eb">STC-13:</tspan> Matched to mild &amp; structural steel (<tspan font-family="monospace">α_s ≈ 11 to 13 ppm/°C</tspan>).
  </text>
  <text x="830" y="755" font-family="system-ui, sans-serif" font-size="17" fill="#334155">
    • <tspan font-family="monospace" font-weight="700" fill="#2563eb">STC-23:</tspan> Matched to 2024 / 7075 aluminum alloys (<tspan font-family="monospace">α_s ≈ 23 ppm/°C</tspan>).
  </text>
  <text x="830" y="790" font-family="system-ui, sans-serif" font-size="17" fill="#334155">
    • <tspan font-family="monospace" font-weight="700" fill="#2563eb">STC-06:</tspan> Matched to titanium &amp; stainless austenitic steel (<tspan font-family="monospace">α_s ≈ 6 to 9 ppm/°C</tspan>).
  </text>
</svg>`
  }
};
