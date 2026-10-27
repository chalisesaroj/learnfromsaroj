/**
 * Unit IV: Measurement Systems (10 hrs)
 * Complete Quarto Reveal.js presentation package and curriculum
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 */

import { SlideData } from './lectureContent';

export const UNIT4_SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    title: "Unit IV: Measurement Systems",
    subtitle: "Sensors & Transducers, Force/Torque/Moment, Pressure & Flow, Optical Visualization (PIV/Schlieren/BOS), Thermal, Pyrometry & Motion Sensors",
    sectionTag: "Unit IV · 10 Hours",
    type: "title",
    speakerNotes: "Welcome students to Unit IV: Measurement Systems. This comprehensive 10-hour module is the practical cornerstone of instrumentation engineering, covering physical sensor hardware from mechanical force and fluid flow to advanced optical diagnostics and thermal infrared sensors."
  },
  {
    id: 2,
    title: "Course Learning Objectives",
    subtitle: "Core engineering competencies mandated by university curriculum",
    sectionTag: "Syllabus Objectives",
    type: "objectives",
    bullets: [
      "**Identify the principles and types of sensors and transducers**: Distinguish between primary sensors and electrical transducers, active (self-generating) vs passive (externally excited) devices.",
      "**Measure force, torque, and moment accurately**: Apply strain gauge load cells (S-beam, shear web, column), 6-DOF cross-talk decoupling matrices, and rotary shaft torque telemetry.",
      "**Apply pressure and flow measurement tools**: Derive Pitot-static Bernoulli velocity equations, configure Venturi/orifice obstruction meters, and apply manometers & MEMS silicon diaphragms.",
      "**Employ advanced optical flow visualization techniques**: Understand Particle Image Velocimetry (PIV), Z-type Schlieren knife-edge optics ($dn/dy$), and Background Oriented Schlieren (BOS).",
      "**Utilize thermal, pyrometry, and vibration sensors**: Formulate RTD Callendar-Van Dusen 3-wire lead compensation, thermocouple Seebeck CJC loops, Stefan-Boltzmann radiation, and piezoelectric seismic accelerometers."
    ],
    speakerNotes: "Emphasize that the goal is not merely memorizing formulas, but understanding how to select the right sensor for industrial applications, avoid systematic installation errors, and calibrate real data acquisition systems."
  },
  {
    id: 3,
    title: "Unit IV Curriculum Roadmap",
    subtitle: "Structured 10-hour lecture distribution across 6 core technical domains",
    sectionTag: "Curriculum Overview",
    type: "roadmap",
    columns: {
      left: [
        "**4.1 Sensors and Transducers**: Operational definitions, functional stages, active vs passive taxonomy, transfer characteristics.",
        "**4.2 Force, Moment & Torque**: Load cell architectures (S-type, shear beam, column), 6-DOF multi-axis decoupling, rotary torque shaft telemetry.",
        "**4.3 Flow & Pressure Measurement**: Pitot-static probes, Venturi meters, manometers, Bourdon tubes, MEMS silicon piezoresistive diaphragms."
      ],
      right: [
        "**4.3.3-4.3.4 Flow Visualization & Fluid Power**: PIV laser sheet correlation, Z-type Schlieren density gradients ($dn/dy$), BOS, hydraulic/pneumatic circuits.",
        "**4.4 Thermal Measurement**: Liquid-in-glass, RTD PT100 3-wire bridge, thermocouple Seebeck loops & cold junction compensation (CJC).",
        "**4.5 & 4.6 Pyrometry, Distance & Speed**: Stefan-Boltzmann $E=\\epsilon\\sigma T^4$, optical pyrometry, ultrasonic TOF ranging, and piezoelectric vibration accelerometers."
      ]
    },
    speakerNotes: "Walk students through the progression: we start with fundamental sensor definitions (4.1), tackle mechanical measurements (4.2), fluid dynamics and optical imaging (4.3), and finish with thermal, radiation, and dynamic motion sensors (4.4-4.6)."
  },
  {
    id: 4,
    title: "Why Measurement Systems Matter",
    subtitle: "From aerospace telemetry to precision industrial automation",
    sectionTag: "Engineering Motivation",
    type: "why-matters",
    bullets: [
      "**Control System Foundation**: Modern automation, robotics, and flight control rely 100% on fast, low-noise sensor inputs. No control algorithm can outperform a noisy or lagging sensor.",
      "**Aerodynamic & Turbomachinery Testing**: Wind tunnel testing requires simultaneous multi-axis balance measurement, Pitot rake flow mapping, and non-intrusive Schlieren shock visualization.",
      "**Predictive Machinery Maintenance**: Piezoelectric accelerometers and infrared thermography detect bearing fatigue and thermal hotspots hundreds of hours before catastrophic plant failure.",
      "**Energy Efficiency & Billing**: Custody transfer of oil, gas, and steam relies on high-accuracy differential pressure Venturi and ultrasonic flow meters operating under severe conditions."
    ],
    speakerNotes: "Give students real-world examples: aircraft airspeed pitot icing causing crashes, rocket engine test stands requiring 6-DOF load cells, and power plant boiler thermocouples operating above 1000 °C."
  },
  {
    id: 5,
    title: "4.1 Sensors vs. Transducers: Anatomy & Signal Chain",
    subtitle: "Clarifying definitions and the multi-stage conversion of measurands",
    sectionTag: "Section 4.1 · Fundamentals",
    type: "content",
    bullets: [
      "**Sensor (Detector)**: The primary physical element that directly interacts with the measurand and undergoes a predictable physical change (e.g., Bourdon tube tip deflects, bimetallic strip bends).",
      "**Transducer**: A complete device that converts input energy from one physical domain into a usable output in another domain—typically an electrical signal ($V$, $I$, or $f$).",
      "**Two-Stage Transducer Architecture**:",
      "1. *Primary Sensing Element*: Converts measurand into an intermediate mechanical displacement or strain (e.g., elastic diaphragm).",
      "2. *Secondary Transduction Element*: Converts intermediate mechanical state into an electrical parameter (e.g., piezoresistive bridge converts strain to $\\Delta V$).",
      "**Rule of Thumb**: *All electrical transducers contain sensors, but not all sensors are electrical transducers* (e.g., a mercury-in-glass thermometer is a pure sensor without electrical transduction)."
    ],
    speakerNotes: "Ensure students do not use the terms sensor and transducer interchangeably on university exams. A sensor detects; a transducer converts energy form."
  },
  {
    id: 6,
    title: "4.1 Transducer Taxonomy: Active vs. Passive",
    subtitle: "Energy origin classification governing signal conditioning complexity",
    sectionTag: "Section 4.1 · Fundamentals",
    type: "content",
    columns: {
      left: [
        "**Active Transducers (Self-Generating)**:",
        "• **Power Source**: Zero external excitation required; extracts energy directly from measurand.",
        "• **Mechanism**: Direct conversion of physical energy into EMF or electric charge.",
        "• **Core Examples**: Thermocouple (Seebeck EMF), Piezoelectric crystal (Q = d·F), Photovoltaic cell, Tachometer generator.",
        "• **Limitation**: Cannot measure purely static DC force in charge mode due to leakage resistance."
      ],
      right: [
        "**Passive Transducers (Externally Excited)**:",
        "• **Power Source**: Requires external auxiliary DC/AC excitation power supply.",
        "• **Mechanism**: Modulates an electrical passive circuit parameter ($R$, $L$, or $C$).",
        "• **Core Examples**: Strain gauge ($\\Delta R$), RTD PT100 ($\\Delta R$), LVDT (inductive core $\\Delta M$), Capacitive pressure cell ($\\Delta C$).",
        "• **Advantage**: Excellent for both steady-state (DC) and dynamic (AC) measurement."
      ]
    },
    speakerNotes: "Highlight the critical trade-off: active transducers like piezoelectric crystals are self-generating but cannot measure purely static force because charge bleeds off through cable insulation resistance."
  },
  {
    id: 7,
    title: "Figure 4.1: Sensor & Transducer Classification",
    subtitle: "Functional signal chain and taxonomy of active vs passive transducers",
    sectionTag: "Figure 4.1 · Vector Asset",
    type: "figure",
    figureKey: "u4_fig1",
    speakerNotes: "Walk students through Figure 4.1: on the left, the cascade from physical measurand through primary sensor, transduction element, signal conditioning, to display. On the right, the comparison between self-generating active devices and externally excited passive devices."
  },
  {
    id: 8,
    title: "4.1 Sensor Transfer Characteristics & Performance Metrics",
    subtitle: "Static sensitivity, linearity, hysteresis, and bandwidth matching",
    sectionTag: "Section 4.1 · Sensor Metrics",
    type: "content",
    bullets: [
      "**Static Sensitivity ($K$)**: Slope of the calibration curve relating output change to input change: $K = \\frac{dy}{dx}$. A linear sensor has constant $K$ across full-scale range.",
      "**Linearity & Non-Linearity**: Maximum deviation of the calibration curve from an idealized best-fit straight line, expressed as $\\pm \\% \\text{ FSO}$ (Full Scale Output).",
      "**Hysteresis & Repeatability**: Difference in output reading for the same input measurand depending on whether the input was approached from increasing or decreasing direction.",
      "**Dynamic Bandwidth & Response Time**: For 1st-order systems (thermometers), governed by time constant $\\tau$ ($63.2\\%$ response). For 2nd-order systems (accelerometers), governed by natural frequency $\\omega_n$ and damping ratio $\\zeta$ ($0.65-0.70$ gives flat frequency response up to $0.2\\,\\omega_n$)."
    ],
    speakerNotes: "Remind students of Unit I concepts: sensitivity is the derivative of the transfer function, and operating beyond the linear range introduces severe harmonic distortion."
  },
  {
    id: 9,
    title: "4.2 Force Measurement: Load Cell Principles",
    subtitle: "Elastic spring elements combined with Wheatstone strain gauge bridges",
    sectionTag: "Section 4.2 · Force & Torque",
    type: "content",
    bullets: [
      "**Working Principle**: An external force applied to an engineered elastic spring element generates internal strain $\\epsilon$. Foil strain gauges bonded to the flexure convert $\\epsilon$ into resistance change $\\Delta R$.",
      "**Hooke's Law & Axial Strain**: For a uniform column under force $F$, axial stress $\\sigma = F/A$ yields axial strain $\\epsilon_{\\text{axial}} = \\frac{F}{A \\cdot E}$, where $E$ is Young's modulus.",
      "**Full-Bridge Cancellation**: By wiring 4 active strain gauges in a full Wheatstone bridge (2 in tension $+$, 2 in compression $-$), output voltage is quadrupled:",
      "$$\\frac{V_{\\text{out}}}{V_{\\text{ex}}} = GF \\cdot \\epsilon_{\\text{axial}} \\cdot (1 + \\nu)$$",
      "**Inherent Benefits**: Cancels off-axis side loads, eliminates temperature drift, and provides rated output typically around $2.0\\,\\text{mV/V}$ at full load."
    ],
    speakerNotes: "Stress why 4-gauge full bridges are the universal industrial standard for load cells: they provide $4\\times$ output sensitivity while passively canceling ambient temperature expansion and bending moments."
  },
  {
    id: 10,
    title: "4.2.1 Commercial Load Cell Types & Data Acquisition",
    subtitle: "S-Beam, shear web, and canister column architectures for distinct load regimes",
    sectionTag: "Section 4.2.1 · Load Cells",
    type: "content",
    bullets: [
      "**S-Type (S-Beam)**: Central bending web flexure with upper/lower threaded lugs ($25\\,\\text{kg}$ to $10\\,\\text{tonnes}$). Used in suspended hoppers, crane scales, and tensile test stands.",
      "**Shear Beam / Bending**: Measures principal shear stress $\\tau = VQ/Ib$ at $45^\\circ$ ($500\\,\\text{kg}$ to $20\\,\\text{tonnes}$). Immune to shifting load positions on platform scales.",
      "**Column / Canister**: Solid alloy steel cylinder in compression ($20\\,\\text{tonnes}$ to $500+\\,\\text{tonnes}$). High capacity for truck weighbridges, railway scales, and silos.",
      "**Pancake / Low-Profile**: Diaphragm shear web with high stiffness and low profile ($1\\,\\text{tonne}$ to $100\\,\\text{tonnes}$). Automotive crash testing and aerospace test rigs.",
      "**Data Acquisition**: Instrumentation amplifiers with high CMRR (>100 dB), 24-bit delta-sigma ADCs, 6-wire ratiometric sense leads to cancel cable resistance."
    ],
    speakerNotes: "Point out why shear beam load cells have largely replaced simple bending beam load cells: shear stress at the neutral axis is independent of the distance from the load point, making them immune to shifting weight positions on a platform."
  },
  {
    id: 11,
    title: "4.2.2 Strain Gauge Construction in Force Transducers",
    subtitle: "Foil alloy selection, bonding adhesive creep, and sealing hermetics",
    sectionTag: "Section 4.2.2 · Construction",
    type: "content",
    bullets: [
      "**Foil Alloy**: Constantan (Cu-Ni alloy, $GF \\approx 2.05$) or Karma (Ni-Cr alloy, $GF \\approx 2.1$) etched onto a $25\\,\\mu\\text{m}$ polyimide backing film.",
      "**Adhesive Layer**: Heat-cured epoxy or phenolic adhesives provide rigid, creep-free shear transfer between the metal flexure and the foil grid over millions of load cycles.",
      "**Zero-Balance & Span Compensation Resistors**: Integrated on-flexure copper and nickel foil resistors calibrate zero offset to within $\\pm 0.1\\%\\,\\text{FSO}$ and compensate modulus drop of steel flexures with rising temperature ($E$ drops $\\sim 0.02\\%/^\\circ\\text{C}$).",
      "**Hermetic Sealing**: Stainless steel laser-welded bellows or IP68 potted silicone rubber prevents humidity penetration, eliminating insulation resistance degradation."
    ],
    speakerNotes: "Explain modulus compensation: steel softens slightly as temperature increases, causing greater strain for the same force. A temperature-sensitive resistor in series with excitation reduces bridge voltage just enough to keep overall calibration constant."
  },
  {
    id: 12,
    title: "4.2.3 Multi-Axis Force & Moment Decoupling (6-DOF)",
    subtitle: "Simultaneous measurement of $F_x, F_y, F_z$ and $M_x, M_y, M_z$ with calibration matrices",
    sectionTag: "Section 4.2.3 · 6-DOF Balances",
    type: "content",
    bullets: [
      "**The Multi-Axis Challenge**: In robotics and wind tunnels, aerodynamic bodies experience 3 forces and 3 moments simultaneously. Single flexures exhibit mechanical cross-talk.",
      "**Linear Decoupling Matrix**: 6 independent Wheatstone bridge output channels $[V] = [V_1, V_2, \\dots, V_6]^T$ relate to orthogonal loads $[F] = [F_x, F_y, F_z, M_x, M_y, M_z]^T$ via a $6\\times 6$ calibration matrix $[C]$:",
      "$$\\begin{bmatrix} F_x \\\\ F_y \\\\ F_z \\\\ M_x \\\\ M_y \\\\ M_z \\end{bmatrix} = \\begin{bmatrix} C_{11} & C_{12} & \\cdots & C_{16} \\\\ C_{21} & C_{22} & \\cdots & C_{26} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ C_{61} & C_{62} & \\cdots & C_{66} \\end{bmatrix} \\begin{bmatrix} V_1 \\\\ V_2 \\\\ V_3 \\\\ V_4 \\\\ V_5 \\\\ V_6 \\end{bmatrix}$$",
      "**Cross-Talk Calibration**: Off-diagonal terms $C_{ij}$ mathematically subtract parasitic strains induced by non-axial loading components."
    ],
    speakerNotes: "Describe a robotic wrist sensor: when grasping an object, the robot needs to know both gripping force and tilting moment. Digital signal processors multiply the 6 voltages by the calibration matrix at 10 kHz in real time."
  },
  {
    id: 13,
    title: "4.2.4 Torque Measurement Systems: Shaft Torsion & Telemetry",
    subtitle: "Principal $\\pm 45^\\circ$ shear strain rosettes, slip rings vs. wireless inductive telemetry",
    sectionTag: "Section 4.2.4 · Torque Systems",
    type: "content",
    bullets: [
      "**Torsional Stress & Principal Strains**: When a solid circular shaft of diameter $d$ transmits torque $T$, max surface shear stress is $\\tau = \\frac{16\\,T}{\\pi d^3}$.",
      "**$45^\\circ$ Principal Axes**: Pure shear resolves into equal tensile strain ($+45^\\circ$) and compressive strain ($-45^\\circ$) along shaft helices:",
      "$$\\epsilon = \\pm \\frac{\\tau}{2G} = \\pm \\frac{8\\,T}{\\pi G d^3}$$",
      "**Full Torque Bridge**: Four strain gauges oriented along the $+45^\\circ$ and $-45^\\circ$ principal axes produce a bridge output completely immune to axial tension and bending moments!",
      "**Data Transmission From Rotating Shafts**:",
      "1. *Slip-Ring Assemblies*: Physical silver-graphite brushes contacting rotating bronze rings. Simple, but suffers brush bounce, electrical contact noise, and wear above $3000\\,\\text{RPM}$.",
      "2. *Wireless Telemetry / Rotary Transformers*: Digital RF transmitter and inductive rotary transformers deliver contactless power and transmission at over $25,000\\,\\text{RPM}$ without maintenance."
    ],
    speakerNotes: "Highlight why the full bridge arrangement is brilliant for torque: pure bending produces equal strains on opposite gauges that cancel out in the bridge, leaving only the pure torsional signal."
  },
  {
    id: 14,
    title: "Figure 4.2: Force, Moment & Torque Transducers",
    subtitle: "Load cell flexures, 6-DOF cross-talk matrix, and rotary torque shaft telemetry",
    sectionTag: "Figure 4.2 · Vector Asset",
    type: "figure",
    figureKey: "u4_fig2",
    speakerNotes: "Point out the three panels of Figure 4.2: Panel 1 shows S-beam and shear beam load cell flexures; Panel 2 details the 6-DOF coordinate frame and calibration matrix; Panel 3 illustrates rotating shaft torque telemetry."
  },
  {
    id: 15,
    title: "4.3 Pressure Measurement: Hydrostatic Manometers",
    subtitle: "U-tube hydrostatic balance and inclined tube sensitivity enhancement",
    sectionTag: "Section 4.3.2 · Pressure Gauges",
    type: "content",
    bullets: [
      "**Hydrostatic Working Principle**: Differential pressure $\\Delta P = P_1 - P_2$ supports a vertical column of liquid with density $\\rho_m$:",
      "$$\\Delta P = P_1 - P_2 = \\rho_m \\cdot g \\cdot \\Delta h$$",
      "**Primary Standard Status**: Manometers require no calibration because density $\\rho_m$, local gravity $g$, and column height $\\Delta h$ are primary physical dimensions.",
      "**Inclined Tube Manometer**: For very small gas pressure drops ($< 1\\,\\text{kPa}$), angling one leg at inclination angle $\\theta$ stretches the liquid meniscus scale length $L$:",
      "$$L = \\frac{\\Delta h}{\\sin(\\theta)} \\quad \\implies \\quad \\text{Sensitivity Gain} = \\frac{1}{\\sin(\\theta)}$$",
      "**Practical Limitations**: Fragile glass, fluid meniscus surface tension capillary errors, and slow dynamic response (cannot measure rapid pressure transients)."
    ],
    speakerNotes: "Explain that an angle of 10 degrees yields a magnification factor of nearly 6x, making 1 mm of water head easily readable as 5.7 mm along the slant."
  },
  {
    id: 16,
    title: "4.3.2 Elastic & Digital Pressure Sensors: Bourdon & MEMS",
    subtitle: "Mechanical Bourdon tubes alongside micromachined silicon piezoresistive diaphragms",
    sectionTag: "Section 4.3.2 · Elastic & MEMS",
    type: "content",
    columns: {
      left: [
        "**C-Type Bourdon Tube Gauge**:",
        "• **Mechanism**: Elliptical cross-section tube uncurls elastically under internal pressure.",
        "• **Movement**: Toothed rack and pinion gear magnifies 2-3 mm tip deflection into 270° dial pointer sweep.",
        "• **Pressure Range**: 100 kPa to 700 MPa (industrial boilers, hydraulic lines).",
        "• **Advantage**: Zero electrical power required; operates during total electrical failure."
      ],
      right: [
        "**Piezoresistive Silicon MEMS**:",
        "• **Mechanism**: Boron-doped resistor Wheatstone bridge diffused into micro-etched silicon diaphragm.",
        "• **Performance**: High gauge factor (GF ≈ 100-150), 0.05% FSO accuracy.",
        "• **Bandwidth**: Ultra-fast microsecond response (10 kHz to 500 kHz).",
        "• **Interface**: On-chip ASIC amplifier with analog 4-20 mA or digital I2C/SPI output."
      ]
    },
    speakerNotes: "Contrast the durability of passive Bourdon gauges (used everywhere in boiler rooms because they indicate pressure even during total power failure) with MEMS sensors (used in automotive ECUs and smartphones)."
  },
  {
    id: 17,
    title: "Figure 4.3: Pressure Measurement Instruments",
    subtitle: "U-tube manometer hydrostatic standard, Bourdon elasticity, and MEMS diaphragm",
    sectionTag: "Figure 4.3 · Vector Asset",
    type: "figure",
    figureKey: "u4_fig3",
    speakerNotes: "Guide students through Figure 4.3: observe the liquid column balance in Panel 1, the rack-and-pinion movement translating Bourdon tip motion in Panel 2, and the micro-etched silicon cavity with diffused resistors in Panel 3."
  },
  {
    id: 18,
    title: "4.3.1 Flow Velocity: Pitot-Static Probe Aerodynamics",
    subtitle: "Stagnation pressure, static pressure, and Bernoulli velocity formulation",
    sectionTag: "Section 4.3.1 · Flow Measurement",
    type: "content",
    bullets: [
      "**Bernoulli Energy Equation along a Streamline**:",
      "$$P_{\\text{static}} + \\frac{1}{2}\\,\\rho\\,v^2 = P_{\\text{total}} = P_{\\text{stagnation}}$$",
      "**Pitot-Static Tube Geometry**:",
      "1. *Stagnation Port*: Open central hole pointing directly into oncoming flow, bringing fluid to zero velocity ($v=0$). Measures total pressure $P_t$.",
      "2. *Static Ports*: Small flush holes drilled circumferentially around the outer tube wall perpendicular to streamlines. Measures undisturbed static pressure $P_s$.",
      "**Flow Velocity Formulation**:",
      "$$v = C_p \\cdot \\sqrt{\\frac{2\\,(P_{\\text{total}} - P_{\\text{static}})}{\\rho}} = C_p \\cdot \\sqrt{\\frac{2\\,\\Delta P}{\\rho}}$$",
      "**Calibration Factor ($C_p$)**: For well-designed commercial probes, $C_p \\approx 0.995 \\pm 0.005$. Yaw and pitch misalignment within $\\pm 10^\\circ$ induces $< 1\\%$ velocity error."
    ],
    speakerNotes: "Walk through the derivation carefully. Make sure students realize that the differential pressure transmitter measures dynamic pressure $q = 0.5 \\rho v^2$, and velocity is non-linearly proportional to the square root of differential pressure."
  },
  {
    id: 19,
    title: "4.3.1 Obstruction Flow Meters: Venturi, Orifice & Nozzle",
    subtitle: "Continuity equation, differential pressure constriction, and discharge coefficient $C_d$",
    sectionTag: "Section 4.3.1 · Flow Meters",
    type: "content",
    bullets: [
      "**Continuity & Head Loss**:",
      "$$Q = A_1\\,v_1 = A_2\\,v_2 \\quad \\implies \\quad v_2 = v_1 \\cdot \\left(\\frac{d_1}{d_2}\\right)^2$$",
      "**Volumetric Discharge Rate ($Q$) Formulation**:",
      "$$Q = C_d \\cdot A_2 \\cdot \\sqrt{\\frac{2\\,(P_1 - P_2)}{\\rho \\cdot (1 - \\beta^4)}} \\quad \\text{where } \\beta = \\frac{d_2}{d_1}$$",
      "**Comparison of Obstruction Elements**:",
      "• **Venturi Tube**: Gradual $21^\\circ$ converging cone and $5^\\circ-7^\\circ$ diverging diffuser. $C_d \\approx 0.98$. Permanent pressure loss is only $10-15\\%$ of $\\Delta P$.",
      "• **Flow Nozzle**: Smooth rounded inlet with abrupt exit. $C_d \\approx 0.96$. Moderate permanent head loss ($30-50\\%$).",
      "• **Sharp-Edged Orifice Plate**: Thin plate with circular orifice. $C_d \\approx 0.60-0.62$. Inexpensive to manufacture, but causes high permanent head loss ($60-80\\%$)."
    ],
    speakerNotes: "Explain the economic trade-off: an orifice plate costs a few hundred dollars, while a Venturi meter costs thousands. However, in continuous pipeline pumping, the permanent pressure loss of an orifice plate consumes thousands of dollars of pumping electricity annually."
  },
  {
    id: 20,
    title: "Figure 4.4: Flow Velocity & Discharge Instrumentation",
    subtitle: "Pitot-static probe streamline stagnation and Venturi tube differential pressure",
    sectionTag: "Figure 4.4 · Vector Asset",
    type: "figure",
    figureKey: "u4_fig4",
    speakerNotes: "Review Figure 4.4: highlight the stagnation tip and static ports on the Pitot tube on the left, and the converging-diverging profile of the Venturi tube with pressure taps on the right."
  },
  {
    id: 21,
    title: "4.3.3 Optical Flow Visualization: PIV",
    subtitle: "Particle Image Velocimetry for full-field non-intrusive quantitative velocity mapping",
    sectionTag: "Section 4.3.3 · Visualization",
    type: "content",
    bullets: [
      "**Non-Intrusive Measurement**: Unlike Pitot probes, PIV does not insert physical probes that disturb the flow field. It illuminates tracer particles with a planar pulsed laser sheet.",
      "**Tracer Seeding & Stokes Number ($St$)**: Flow is seeded with microscopic droplets or particles ($1-5\\,\\mu\\text{m}$, e.g. olive oil mist, DEHS, TiO$_2$). Particles must follow streamlines without slip:",
      "$$St = \\frac{\\tau_p}{\\tau_f} = \\frac{\\rho_p \\cdot d_p^2 \\cdot v}{18\\,\\mu \\cdot L} \\ll 0.1$$",
      "**Double-Pulse Imaging**: A dual-cavity Nd:YAG laser ($532\\,\\text{nm}$) fires two pulses separated by microsecond delay $\\Delta t$. A high-speed digital camera records two successive particle frames.",
      "**Cross-Correlation Processing**: The field is subdivided into small interrogation areas ($32\\times 32$ pixels). Spatial cross-correlation computes average pixel displacement $\\Delta s$:",
      "$$\\vec{v} = \\frac{\\Delta \\vec{s}}{\\Delta t} \\quad \\implies \\quad \\text{Yields thousands of 2D velocity vectors simultaneously!}$$"
    ],
    speakerNotes: "Emphasize why PIV revolutionized aerodynamics: in a single laser firing, researchers get the entire instantaneous velocity field, wake vortices, and boundary layer separation profiles."
  },
  {
    id: 22,
    title: "4.3.3 Optical Flow Visualization: Z-Type Schlieren Imaging",
    subtitle: "Visualizing density gradients in compressible flows and thermal plumes via refraction",
    sectionTag: "Section 4.3.3 · Schlieren",
    type: "content",
    bullets: [
      "**Gladstone-Dale Relation**: In gases, refractive index $n$ is directly proportional to gas density $\\rho$:",
      "$$n - 1 = K_{\\text{GD}} \\cdot \\rho \\quad \\implies \\quad \\nabla n = K_{\\text{GD}} \\cdot \\nabla \\rho$$",
      "**Refractive Ray Deflection**: When parallel light rays pass through density gradients (shock waves, heated air, fuel jets), rays deflect by angular deflection $\\epsilon_y$:",
      "$$\\epsilon_y = \\frac{1}{n_0} \\int \\frac{\\partial n}{\\partial y}\\,dz = \\frac{K_{\\text{GD}}}{n_0} \\int \\frac{\\partial \\rho}{\\partial y}\\,dz$$",
      "**Z-Type Schlieren Optical Architecture**:",
      "• Two off-axis parabolic mirrors collimate a point source into a parallel beam through the test section and refocus light to a focal point.",
      "• **Knife-Edge (Foucault Cutoff)**: Placed at the focal point to block deflected rays. Deflections toward the knife edge appear darker; deflections away appear brighter.",
      "**Result**: Shock waves ($Ma > 1$) and supersonic expansion fans appear with razor-sharp contrast on camera screens."
    ],
    speakerNotes: "Clarify to students that Schlieren images do NOT measure density directly; they measure the *first spatial derivative* of density $\\frac{\\partial \\rho}{\\partial y}$."
  },
  {
    id: 23,
    title: "4.3.3 Background Oriented Schlieren (BOS)",
    subtitle: "Large-scale optical density diagnostics without bulky mirrors or knife-edges",
    sectionTag: "Section 4.3.3 · BOS",
    type: "content",
    bullets: [
      "**The BOS Advantage**: Classical Schlieren mirrors are limited to $\\sim 1\\,\\text{meter}$ diameter and cost over $\\$100,000$. BOS operates outdoors at full aircraft scale with a single camera!",
      "**Operating Principle**: A high-contrast random speckle or dot pattern is placed behind the flow field (or natural ground/desert features are used).",
      "**Digital Cross-Correlation**: The camera records a reference background frame (no flow) and a test frame (with supersonic jet or thermal plume).",
      "**Apparent Pixel Shift ($\\vec{\\delta}$)**: Density gradients refract light, causing background dots to appear shifted by displacement $\\vec{\\delta}$:",
      "$$\\vec{\\delta} = M \\cdot Z_D \\cdot \\vec{\\epsilon} \\quad \\implies \\quad \\text{Directly proportional to } \\int \\nabla \\rho\\,dz$$",
      "**Applications**: In-flight supersonic shock wave imaging (NASA T-38 flights over desert ground), full-scale helicopter rotor blade vortices, and explosion blast waves."
    ],
    speakerNotes: "Highlight NASA's famous supersonic shock wave images of two jets flying past each other: they used BOS with the Mojave desert terrain as the background speckle pattern!"
  },
  {
    id: 24,
    title: "Figure 4.5: Optical Flow Visualization Suite",
    subtitle: "PIV laser sheet correlation, Z-type Schlieren optics, and BOS pattern tracking",
    sectionTag: "Figure 4.5 · Vector Asset",
    type: "figure",
    figureKey: "u4_fig5",
    speakerNotes: "Examine Figure 4.5: on the left is the PIV laser sheet and cross-correlation window; on the right is the Z-type Schlieren mirror layout with knife edge and the BOS speckle displacement principle."
  },
  {
    id: 25,
    title: "4.3.4 Hydraulic & Pneumatic Systems: Fluid Power Sensing",
    subtitle: "Pressure relief valves, flow control throttling, and fluid power diagnostics",
    sectionTag: "Section 4.3.4 · Fluid Power",
    type: "content",
    bullets: [
      "**Fluid Power Principle**: Hydraulic systems utilize incompressible oil ($800-900\\,\\text{kg/m}^3$) for high-force transmission ($10-35\\,\\text{MPa}$); pneumatic systems utilize compressible air ($0.4-0.8\\,\\text{MPa}$) for high-speed, clean actuation.",
      "**Pressure Regulation & Sensing**:",
      "• *Direct-Acting Relief Valve*: Spring-loaded poppet cracks open when $P \\cdot A_{\\text{seat}} > F_{\\text{spring}}$, protecting piping from destructive pressure spikes.",
      "• *Pressure Transducers*: Piezoresistive pressure transmitters mounted downstream of pumps monitor hydraulic ripple and cavitating valves.",
      "**Flow Control & Throttling**:",
      "• *Meter-In vs. Meter-Out Circuits*: Meter-out throttling controls overrunning cylinder loads by creating dynamic backpressure.",
      "• *Turbine & Electromagnetic Flowmeters*: Monitor hydraulic fluid delivery and identify internal pump leakage."
    ],
    speakerNotes: "Remind students that hydraulic circuits experience rapid water-hammer pressure spikes up to $300\\%$ of working pressure when solenoid valves slam shut, requiring sensors with high proof pressure ratings."
  },
  {
    id: 26,
    title: "4.4 Thermal Measurement: RTD (PT100) Resistance Thermometry",
    subtitle: "Positive temperature coefficient of platinum, Callendar-Van Dusen equation, and 3-wire bridge",
    sectionTag: "Section 4.4 · Thermal Sensors",
    type: "content",
    bullets: [
      "**Operating Principle**: Pure metals exhibit positive temperature coefficients (PTC). As temperature rises, lattice vibrations scatter conduction electrons, increasing electrical resistance.",
      "**Callendar-Van Dusen Equation (for $T \\ge 0^\\circ\\text{C}$)**:",
      "$$R(T) = R_0 \\cdot \\left[ 1 + A\\cdot T + B\\cdot T^2 \\right]$$",
      "**PT100 Standard**: Platinum element with nominal resistance $R_0 = 100.00\\,\\Omega$ at $0^\\circ\\text{C}$ and alpha coefficient $\\alpha = 0.00385\\,\\Omega/\\Omega/^\\circ\\text{C}$.",
      "**3-Wire Lead Resistance Compensation**:",
      "• Long copper lead wires add parasitic resistance $r_L$ that changes with ambient room temperature.",
      "• Connecting 3 wires places one lead resistance in the RTD bridge arm and an identical lead resistance in the adjacent reference arm, *perfectly canceling lead resistance drift* at bridge equilibrium!",
      "**Self-Heating Error**: Excitation current must be limited to $I \\le 1\\,\\text{mA}$ to keep internal $I^2 R$ dissipation below $0.1\\,\\text{mW}$."
    ],
    speakerNotes: "Emphasize why RTDs are the gold standard for precision process engineering: repeatability is unmatched ($\\pm 0.05\\,^\\circ\\text{C}$), but excitation current must be strictly kept below 1 mA to prevent self-heating."
  },
  {
    id: 27,
    title: "4.4 Thermocouples & Cold Junction Compensation (CJC)",
    subtitle: "Seebeck thermoelectric effect, standard calibrations (K, J, T), and isothermal block compensation",
    sectionTag: "Section 4.4 · Thermocouples",
    type: "content",
    bullets: [
      "**Seebeck Effect**: When two dissimilar conductor alloys (A and B) are joined at two junctions held at different temperatures ($T_{\\text{hot}}$ and $T_{\\text{cold}}$), a net thermoelectric EMF is generated:",
      "$$V_{\\text{net}} = \\int_{T_{\\text{ref}}}^{T_{\\text{hot}}} (S_A - S_B)\\,dT \\approx S_{AB} \\cdot (T_{\\text{hot}} - T_{\\text{ref}})$$",
      "**Cold Junction Compensation (CJC)**: Thermocouples only measure temperature *difference* $\\Delta T$. To determine absolute temperature $T_{\\text{hot}}$, modern DAQs measure terminal reference temperature $T_{\\text{ref}}$ with a local thermistor/RTD on the terminal block and add software equivalent voltage:",
      "$$V(T_{\\text{hot}}) = V_{\\text{measured}} + V_{\\text{table}}(T_{\\text{ref}})$$",
      "**Standard Thermocouple Calibrations**:",
      "• **Type K (Chromel-Alumel)**: $41\\,\\mu\\text{V}/^\\circ\\text{C}$, range $-200^\\circ\\text{C}$ to $+1250^\\circ\\text{C}$. Most popular general-purpose industrial thermocouple.",
      "• **Type J (Iron-Constantan)**: $51\\,\\mu\\text{V}/^\\circ\\text{C}$, range $-40^\\circ\\text{C}$ to $+750^\\circ\\text{C}$. High sensitivity, oxidizing atmospheres.",
      "• **Type T (Copper-Constantan)**: $40\\,\\mu\\text{V}/^\\circ\\text{C}$, range $-200^\\circ\\text{C}$ to $+350^\\circ\\text{C}$. Excellent stability in cryogenic/sub-zero regimes."
    ],
    speakerNotes: "Highlight a common student exam blunder: thermocouples do NOT measure absolute hot junction temperature directly. Without cold junction compensation, reading fluctuates with room temperature!"
  },
  {
    id: 28,
    title: "Figure 4.6: Thermal Sensors & Signal Conditioning",
    subtitle: "RTD PT100 3-wire bridge circuit and Thermocouple Seebeck loop with isothermal CJC block",
    sectionTag: "Figure 4.6 · Vector Asset",
    type: "figure",
    figureKey: "u4_fig6",
    speakerNotes: "Review Figure 4.6: Panel A demonstrates the 3-wire bridge balancing lead resistance $r_L$; Panel B diagrams the Seebeck loop with the isothermal CJC reference block and ADC reading."
  },
  {
    id: 29,
    title: "4.5 Pyrometry & Non-Contact Infrared Measurement",
    subtitle: "Stefan-Boltzmann total emissive power, Wien's displacement, and emissivity $\\epsilon$",
    sectionTag: "Section 4.5 · Pyrometry",
    type: "content",
    bullets: [
      "**Thermal Radiation Physics**: All matter at temperature $T > 0\\,\\text{K}$ continuously emits electromagnetic radiation due to molecular thermal agitation.",
      "**Stefan-Boltzmann Law (Total Radiated Power)**:",
      "$$E = \\epsilon \\cdot \\sigma \\cdot T^4 \\quad \\text{where } \\sigma = 5.6703 \\times 10^{-8}\\,\\frac{\\text{W}}{\\text{m}^2\\cdot \\text{K}^4}$$",
      "**Wien's Displacement Law (Peak Wavelength)**:",
      "$$\\lambda_{\\text{max}} \\cdot T = 2898\\,\\mu\\text{m}\\cdot \\text{K}$$",
      "**Emissivity ($\\epsilon$) Challenge**: $\\epsilon = 1.0$ for an ideal blackbody. Real surfaces have $\\epsilon < 1$ (e.g. polished aluminum $\\epsilon \\approx 0.05$; human skin / matte paint $\\epsilon \\approx 0.95-0.98$). Incorrect emissivity input causes massive temperature calculation errors!",
      "**Non-Contact Advantages**: Can measure molten steel at $1600^\\circ\\text{C}$, moving conveyor parts, high-voltage substations, and objects without thermal loading error."
    ],
    speakerNotes: "Warn students about the $T^4$ power law: because emitted radiation scales with the fourth power of absolute temperature, a small temperature rise produces a massive increase in radiated energy."
  },
  {
    id: 30,
    title: "4.5 Infrared Thermography & Optical Pyrometers",
    subtitle: "Disappearing filament optical pyrometers and uncooled microbolometer thermal cameras",
    sectionTag: "Section 4.5 · IR Thermography",
    type: "content",
    bullets: [
      "**Disappearing Filament Optical Pyrometer**: Operator looks through an optical telescope at a hot furnace ($T > 700^\\circ\\text{C}$). The current through an internal calibrated tungsten lamp filament is adjusted until the filament brightness matches the background furnace and 'disappears' at $\\lambda = 0.65\\,\\mu\\text{m}$.",
      "**Infrared Thermometers (Spot Pyrometers)**: Focus infrared energy ($8-14\\,\\mu\\text{m}$ atmospheric transmission window) onto a thermopile or pyroelectric detector with optical distance-to-spot ratio (e.g., $D:S = 50:1$).",
      "**Thermal Imaging Cameras**: Utilize two-dimensional focal plane arrays (FPA) of uncooled vanadium oxide (VOx) microbolometers ($640\\times 480$ pixels). Incident IR radiation changes microbolometer resistance, generating full-color radiometric thermal maps.",
      "**Applications**: Electrical switchgear hotspot detection, building heat loss audits, aerospace composite delamination testing."
    ],
    speakerNotes: "Explain the distance-to-spot ratio: with a 50:1 ratio, at 50 feet away, the sensor measures an average temperature circle of 1 foot in diameter. If the target is smaller than the spot, background readings contaminate the measurement."
  },
  {
    id: 31,
    title: "4.6 Distance & Speed: Ultrasonic Sensors & Doppler",
    subtitle: "Time-of-flight acoustic pulse echo ranging, temperature correction, and Doppler velocity",
    sectionTag: "Section 4.6 · Ultrasonic & Speed",
    type: "content",
    bullets: [
      "**Ultrasonic Time-of-Flight (TOF) Ranging**: A piezoelectric transducer ($40\\,\\text{kHz}$) emits an acoustic burst and measures the round-trip echo return time $\\Delta t$:",
      "$$d = \\frac{c_{\\text{air}} \\cdot \\Delta t}{2}$$",
      "**Temperature Sensitivity of Sound Speed**: Sound velocity in air depends strongly on thermodynamic temperature:",
      "$$c_{\\text{air}} = \\sqrt{\\gamma \\cdot R_{\\text{specific}} \\cdot T_{\\text{kelvin}}} \\approx 331.3 + 0.606 \\cdot T(^\\circ\\text{C}) \\quad [\\text{m/s}]$$",
      "**Crucial Rule**: A $10^\\circ\\text{C}$ temperature shift causes a $\\approx 1.8\\%$ distance error! Commercial ultrasonic level gauges must incorporate a temperature probe to correct $c_{\\text{air}}$.",
      "**Acoustic / Radar Doppler Speed Sensor**:",
      "$$f_d = \\frac{2 \\cdot v_{\\text{target}} \\cdot f_0 \\cdot \\cos(\\theta)}{c}$$",
      "Measures target velocity $v_{\\text{target}}$ directly from frequency shift $f_d$."
    ],
    speakerNotes: "Highlight why ultrasonic sensors are widely used for tank liquid level monitoring: they sit safely outside corrosive chemicals and liquids, bouncing acoustic pulses off the fluid surface."
  },
  {
    id: 32,
    title: "4.6 Vibration Sensors: Piezoelectric Accelerometers",
    subtitle: "Seismic mass-spring-damper dynamics, charge generation, and IEPE / ICP preamplifiers",
    sectionTag: "Section 4.6 · Vibration",
    type: "content",
    bullets: [
      "**Seismic Mass Principle**: A seismic mass $m$ rests on a piezoelectric crystal disc (PZT or quartz). When the sensor base accelerates at $a(t)$, inertial force $F = m \\cdot a$ compresses the crystal.",
      "**Direct Piezoelectric Effect**: Crystal generates an electrostatic charge $q$ proportional to compressive force:",
      "$$q = d_{33} \\cdot F = d_{33} \\cdot m \\cdot a(t) \\quad [\\text{pC}] \\quad \\implies \\quad \\text{Charge Sensitivity } S_q = d_{33} \\cdot m$$",
      "**Frequency Response & Usable Bandwidth**: High resonance frequency $f_n = \\frac{1}{2\\pi}\\sqrt{k/m}$ (typically $20-50\\,\\text{kHz}$). Linear response extends up to $\\approx 0.2 \\times f_n$.",
      "**IEPE / ICP Technology**: Integrated Electronics Piezo-Electric technology incorporates a micro miniature FET charge amplifier inside the stainless steel sensor body, converting high-impedance $pC$ charge into a robust low-impedance $mV/g$ voltage signal over simple coaxial cables.",
      "**Industrial Standard**: ISO 10816 machinery vibration severity limits for motor, pump, and turbine bearing diagnostics."
    ],
    speakerNotes: "Emphasize that piezoelectric accelerometers cannot measure steady 0 Hz acceleration (DC gravity) because the generated charge leaks away through amplifier input impedance. For DC acceleration, capacitive MEMS accelerometers must be used."
  },
  {
    id: 33,
    title: "Figure 4.7: Radiation, Distance & Vibration Transducers",
    subtitle: "Planck blackbody curves, ultrasonic TOF echo ranging, and seismic accelerometer mechanics",
    sectionTag: "Figure 4.7 · Vector Asset",
    type: "figure",
    figureKey: "u4_fig7",
    speakerNotes: "Review the three sub-diagrams in Figure 4.7: Panel 1 illustrates Planck's thermal radiation curves and Wien's law; Panel 2 shows ultrasonic pulse-echo ranging and Doppler shift; Panel 3 diagrams the piezoelectric seismic mass assembly."
  },
  {
    id: 34,
    title: "Worked Engineering Example: Pitot Airspeed & Thermocouple CJC",
    subtitle: "Solving typical university final exam numerical problems step-by-step",
    sectionTag: "Numerical Example",
    type: "worked-example",
    bullets: [
      "**Problem A (Pitot Airspeed)**: A wind tunnel Pitot-static tube indicates a differential pressure $\\Delta P = 1450\\,\\text{Pa}$. Air density is $\\rho = 1.225\\,\\text{kg/m}^3$ and probe factor $C_p = 0.99$. Calculate airspeed $v$.",
      "$$\\text{Solution: } v = C_p \\cdot \\sqrt{\\frac{2\\Delta P}{\\rho}} = 0.99 \\cdot \\sqrt{\\frac{2 \\times 1450}{1.225}} = 0.99 \\cdot \\sqrt{2367.35} = 0.99 \\cdot 48.655 = 48.17\\,\\text{m/s} \\quad (173.4\\,\\text{km/h})$$",
      "**Problem B (Thermocouple CJC)**: A Type K thermocouple ($S_{AB} = 41.2\\,\\mu\\text{V}/^\\circ\\text{C}$) produces a measured voltage $V_{\\text{meas}} = 16.48\\,\\text{mV}$. The isothermal cold terminal block temperature is measured as $T_{\\text{ref}} = 24.0^\\circ\\text{C}$. Find furnace temperature $T_{\\text{hot}}$.",
      "$$\\Delta T = \\frac{V_{\\text{meas}}}{S_{AB}} = \\frac{16,480\\,\\mu\\text{V}}{41.2\\,\\mu\\text{V}/^\\circ\\text{C}} = 400.0^\\circ\\text{C}$$",
      "$$T_{\\text{hot}} = T_{\\text{ref}} + \\Delta T = 24.0^\\circ\\text{C} + 400.0^\\circ\\text{C} = 424.0^\\circ\\text{C}$$",
      "**Key Takeaway**: Forgetting to add cold junction temperature $T_{\\text{ref}}$ would produce a $24^\\circ\\text{C}$ systematic under-reading error!"
    ],
    speakerNotes: "Go through these calculations methodically. Point out unit consistency: Pa is N/m^2, mV must be converted to microvolts or vice-versa, and reference temperature must always be added to the differential temperature."
  },
  {
    id: 35,
    title: "Unit IV Comprehensive Review & Key Formulas",
    subtitle: "Summary formula sheet for university exam preparation and practical design",
    sectionTag: "Unit IV Review",
    type: "review",
    bullets: [
      "**Force & Torque**: $\\frac{V_{\\text{out}}}{V_{\\text{ex}}} = GF \\cdot \\epsilon$, $\\tau = \\frac{16 T}{\\pi d^3}$, $\\epsilon_{45^\\circ} = \\pm \\frac{\\tau}{2G}$. Multi-axis decoupling $[F] = [C] \\cdot [V]$.",
      "**Pressure**: Manometer $\\Delta P = \\rho g \\Delta h$; Inclined $L = \\Delta h / \\sin(\\theta)$; MEMS piezoresistive bridge $\\Delta V \\propto P$.",
      "**Flow**: Pitot-static $v = C_p \\sqrt{2\\Delta P / \\rho}$; Venturi $Q = C_d A_2 \\sqrt{\\frac{2(P_1-P_2)}{\\rho(1-\\beta^4)}}$.",
      "**Visualization**: PIV $v = \\Delta s / \\Delta t$; Schlieren refractive deflection $\\epsilon_y \\propto \\int \\frac{\\partial \\rho}{\\partial y} dz$; BOS apparent shift $\\delta \\propto \\int \\nabla \\rho dz$.",
      "**Thermal**: RTD PT100 $R(T) = R_0 (1 + A T + B T^2)$ with 3-wire bridge; Thermocouple $V_{\\text{net}} = S_{AB}(T_{\\text{hot}} - T_{\\text{ref}})$.",
      "**Radiation & Motion**: Stefan-Boltzmann $E = \\epsilon \\sigma T^4$; Ultrasonic TOF $d = c \\Delta t / 2$; Accelerometer $q = d_{33} m a$."
    ],
    speakerNotes: "Conclude the Unit IV lecture by summarizing the essential physics across all 6 sections. Encourage students to run the interactive labs and examine the vector figures."
  }
];

export const LECTURE_UNIT4_PY_SOURCE = `#!/usr/bin/env python3
"""
lecture_unit4.py
================================================================================
Unit IV: Measurement Systems (10 Hours)
Vector Visual Asset Generator (7 Publication-Grade Figures)

Author: Er. Saroj Chalise
Reference Deck: https://chalisesaroj.github.io/slide/

Generates 7 standalone 16:9 vector SVG diagrams into figures_unit4/:
  - u4_fig1_sensor_transducer_classification.svg
  - u4_fig2_force_moment_torque_loadcells.svg
  - u4_fig3_pressure_sensors_manometer_bourdon.svg
  - u4_fig4_flow_measurement_pitot_venturi.svg
  - u4_fig5_flow_visualization_piv_schlieren_bos.svg
  - u4_fig6_temperature_rtd_thermocouple.svg
  - u4_fig7_pyrometry_speed_distance.svg

Canvas Standards:
  - 16:9 aspect ratio (viewBox="0 0 1600 900")
  - Pure white canvas (#ffffff) with subtle border
  - Minimum text size >= 18px for lecture projection
================================================================================
"""

import os
import sys

OUTPUT_DIR = "figures_unit4"
os.makedirs(OUTPUT_DIR, exist_ok=True)

FIGURES = {
    "u4_fig1_sensor_transducer_classification.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.1: Sensor &amp; Transducer Anatomy · Active vs. Passive Classification
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">Unit IV · Section 4.1</text>
  <rect x="50" y="140" width="730" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">A. Sensor vs. Transducer Signal Chain</text>
  <rect x="80" y="250" width="160" height="110" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="160" y="295" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af" text-anchor="middle">Physical Measurand</text>
  <text x="160" y="325" font-family="system-ui, sans-serif" font-size="18" fill="#64748b" text-anchor="middle">Force, Pressure, Temp</text>
  <polygon points="290,305 280,299 280,311" fill="#3b82f6" />
  <rect x="290" y="250" width="200" height="110" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" />
  <text x="390" y="295" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#92400e" text-anchor="middle">Primary Sensor</text>
  <text x="390" y="325" font-family="system-ui, sans-serif" font-size="18" fill="#b45309" text-anchor="middle">Diaphragm, Flexure</text>
  <polygon points="540,305 530,299 530,311" fill="#f59e0b" />
  <rect x="540" y="250" width="210" height="110" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2" />
  <text x="645" y="295" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#065f46" text-anchor="middle">Transduction Element</text>
  <text x="645" y="325" font-family="system-ui, sans-serif" font-size="18" fill="#059669" text-anchor="middle">Strain Gauge, Piezo</text>
  <rect x="810" y="140" width="740" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="840" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">B. Classification: Active vs. Passive Transducers</text>
  <rect x="840" y="240" width="330" height="340" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="2" />
  <text x="1005" y="275" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#15803d" text-anchor="middle">Active (Self-Generating)</text>
  <text x="860" y="315" font-family="system-ui, sans-serif" font-size="18" fill="#166534">• Zero external power required</text>
  <text x="860" y="350" font-family="system-ui, sans-serif" font-size="18" fill="#166534">• Thermocouple (Seebeck effect)</text>
  <text x="860" y="385" font-family="system-ui, sans-serif" font-size="18" fill="#166534">• Piezoelectric crystal (Q = d·F)</text>
  <rect x="1190" y="240" width="340" height="340" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
  <text x="1360" y="275" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e40af" text-anchor="middle">Passive (Externally Excited)</text>
  <text x="1210" y="315" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Requires auxiliary DC/AC power</text>
  <text x="1210" y="350" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Strain gauge (ΔR with strain)</text>
  <text x="1210" y="385" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• RTD PT100 (ΔR with temp)</text>
</svg>""",

    "u4_fig2_force_moment_torque_loadcells.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.2: Force, Moment &amp; Torque Transducers · Load Cells &amp; Rotary Telemetry
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">Unit IV · Section 4.2</text>
  <rect x="50" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="75" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">1. Load Cell Types (Force)</text>
  <rect x="80" y="240" width="420" height="230" rx="8" fill="#f8fafc" stroke="#94a3b8" />
  <path d="M 160 270 L 320 270 L 320 310 L 220 310 L 220 370 L 320 370 L 320 440 L 160 440 L 160 400 L 260 400 L 260 340 L 160 340 Z" fill="#cbd5e1" stroke="#334155" stroke-width="2.5" />
  <circle cx="240" cy="355" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
  <text x="240" y="361" font-family="monospace" font-size="18" font-weight="700" fill="#854d0e" text-anchor="middle">SG</text>
  <text x="80" y="520" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• S-Type: Symmetric tension &amp; compression</text>
  <text x="80" y="555" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• Shear Beam: Insensitive to load application point</text>
  <rect x="560" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="585" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">2. Multi-Axis 6-DOF Decoupling</text>
  <rect x="590" y="490" width="420" height="340" rx="8" fill="#faf5ff" stroke="#d8b4fe" />
  <text x="610" y="530" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#7e22ce">Cross-Talk Calibration:</text>
  <text x="610" y="570" font-family="monospace" font-size="20" font-weight="700" fill="#581c87">[F] = [C] · [V]</text>
  <text x="610" y="610" font-family="system-ui, sans-serif" font-size="18" fill="#4c1d95">• Decouples 3 forces (Fx, Fy, Fz)</text>
  <text x="610" y="640" font-family="system-ui, sans-serif" font-size="18" fill="#4c1d95">• Decouples 3 moments (Mx, My, Mz)</text>
  <rect x="1070" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="1095" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">3. Torque Measurement Systems</text>
  <rect x="1100" y="490" width="420" height="340" rx="8" fill="#fefce8" stroke="#fef08a" />
  <text x="1120" y="530" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e">Shaft Torsion Mechanics:</text>
  <text x="1120" y="570" font-family="monospace" font-size="18" fill="#713f12">τ = 16·T / (π·d³),  ε = ± τ / (2·G)</text>
  <text x="1120" y="610" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• ±45° principal shear rosette on shaft</text>
  <text x="1120" y="645" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Contactless RF telemetry &amp; rotary transformers</text>
</svg>""",

    "u4_fig3_pressure_sensors_manometer_bourdon.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.3: Pressure Measurement Instruments · Hydrostatic, Elastic &amp; MEMS
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">Unit IV · Section 4.3.2</text>
  <rect x="50" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="75" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">1. U-Tube Manometer</text>
  <rect x="80" y="540" width="420" height="290" rx="8" fill="#f0f9ff" stroke="#bae6fd" />
  <text x="100" y="580" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#0369a1">Hydrostatic Balance:</text>
  <text x="100" y="620" font-family="monospace" font-size="20" font-weight="700" fill="#0284c7">ΔP = ρ_m · g · Δh</text>
  <text x="100" y="660" font-family="system-ui, sans-serif" font-size="18" fill="#0c4a6e">• Primary Standard: No calibration required</text>
  <rect x="560" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="585" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">2. C-Type Bourdon Tube</text>
  <rect x="590" y="540" width="420" height="290" rx="8" fill="#fefce8" stroke="#fef08a" />
  <text x="610" y="580" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e">Elastic Principle:</text>
  <text x="610" y="620" font-family="system-ui, sans-serif" font-size="18" fill="#713f12">• Elliptical tube straightens under pressure</text>
  <text x="610" y="655" font-family="system-ui, sans-serif" font-size="18" fill="#713f12">• Range: 100 kPa to 700 MPa (Vacuum to hydraulic)</text>
  <rect x="1070" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="1095" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">3. Digital MEMS Sensors</text>
  <rect x="1100" y="540" width="420" height="290" rx="8" fill="#fdf4ff" stroke="#f0abfc" />
  <text x="1120" y="580" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#86198f">Micromachined Silicon:</text>
  <text x="1120" y="620" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">• Diffused piezoresistive bridge on diaphragm</text>
  <text x="1120" y="655" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">• Fast dynamic response (microsecond rise time)</text>
</svg>""",

    "u4_fig4_flow_measurement_pitot_venturi.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.4: Flow Velocity &amp; Discharge Measurement · Pitot-Static Tube &amp; Venturi
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">Unit IV · Section 4.3.1</text>
  <rect x="50" y="140" width="730" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">A. Pitot-Static Probe Aerodynamics</text>
  <rect x="80" y="520" width="670" height="310" rx="8" fill="#eff6ff" stroke="#93c5fd" />
  <text x="100" y="560" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">Bernoulli Velocity Formula:</text>
  <text x="100" y="605" font-family="monospace" font-size="22" font-weight="700" fill="#dc2626">v = C_p · sqrt( 2 · (P_total - P_static) / ρ )</text>
  <text x="100" y="650" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Stagnation tip port measures total pressure P_t</text>
  <text x="100" y="685" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Circumferential ports measure undisturbed static pressure P_s</text>
  <rect x="810" y="140" width="740" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="840" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">B. Venturi &amp; Obstruction Flow Meters</text>
  <rect x="840" y="520" width="680" height="310" rx="8" fill="#f0fdf4" stroke="#86efac" />
  <text x="860" y="560" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#166534">Volumetric Discharge Rate Q:</text>
  <text x="860" y="605" font-family="monospace" font-size="20" font-weight="700" fill="#15803d">Q = C_d · A₂ · sqrt( 2 · ΔP / [ ρ · (1 - β⁴) ] )</text>
  <text x="860" y="650" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">• Venturi Tube: C_d ≈ 0.98 (Only 10-15% permanent head loss)</text>
  <text x="860" y="685" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">• Orifice Plate: C_d ≈ 0.60-0.62 (Low cost, high head loss)</text>
</svg>""",

    "u4_fig5_flow_visualization_piv_schlieren_bos.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.5: Optical Flow Visualization · PIV, Z-Type Schlieren &amp; BOS
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">Unit IV · Section 4.3.3</text>
  <rect x="50" y="140" width="730" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">A. Particle Image Velocimetry (PIV)</text>
  <rect x="80" y="530" width="670" height="300" rx="8" fill="#f0fdf4" stroke="#86efac" />
  <text x="100" y="570" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#166534">PIV Cross-Correlation:</text>
  <text x="100" y="610" font-family="monospace" font-size="20" font-weight="700" fill="#15803d">v = Δs / Δt</text>
  <text x="100" y="650" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">• Pulsed Nd:YAG laser sheet illuminates 1-5 μm seeding particles</text>
  <text x="100" y="685" font-family="system-ui, sans-serif" font-size="18" fill="#14532d">• Yields non-intrusive full-field 2D velocity vectors</text>
  <rect x="810" y="140" width="740" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="840" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">B. Schlieren Imaging &amp; BOS</text>
  <rect x="840" y="530" width="680" height="300" rx="8" fill="#fefce8" stroke="#fef08a" />
  <text x="860" y="570" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e">Gladstone-Dale Physics:</text>
  <text x="860" y="610" font-family="monospace" font-size="18" fill="#713f12">n - 1 = K_GD · ρ,   Deflection: ε_y ∝ ∫ (∂ρ/∂y) dz</text>
  <text x="860" y="650" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Knife edge blocks deflected rays, visualizing shock waves</text>
  <text x="860" y="685" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• BOS uses background dot displacement (no mirrors required)</text>
</svg>""",

    "u4_fig6_temperature_rtd_thermocouple.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.6: Temperature Instrumentation · RTD (PT100) &amp; Thermocouple (CJC)
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">Unit IV · Section 4.4</text>
  <rect x="50" y="140" width="730" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">A. RTD PT100 Resistance Thermometer</text>
  <rect x="80" y="520" width="670" height="310" rx="8" fill="#eff6ff" stroke="#93c5fd" />
  <text x="100" y="560" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">Callendar-Van Dusen Equation:</text>
  <text x="100" y="600" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8">R(T) = R₀ · [ 1 + A·T + B·T² ]</text>
  <text x="100" y="640" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• PT100 Standard: R₀ = 100.00 Ω at 0 °C, α = 0.00385 Ω/Ω/°C</text>
  <text x="100" y="675" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• 3-wire bridge circuit cancels ambient lead wire resistance r_L</text>
  <rect x="810" y="140" width="740" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="840" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">B. Thermocouple &amp; CJC Compensation</text>
  <rect x="840" y="520" width="680" height="310" rx="8" fill="#fefce8" stroke="#fef08a" />
  <text x="860" y="560" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#854d0e">Seebeck Effect &amp; CJC:</text>
  <text x="860" y="600" font-family="monospace" font-size="18" fill="#713f12">V_net ≈ S_AB · (T_hot - T_ref)</text>
  <text x="860" y="640" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Voltmeter measures temperature difference (T_hot - T_ref)</text>
  <text x="860" y="675" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• CJC measures reference block to compute absolute temperature</text>
  <text x="860" y="710" font-family="system-ui, sans-serif" font-size="18" fill="#854d0e">• Type K: 41 μV/°C, -200 °C to +1250 °C (Standard industrial)</text>
</svg>""",

    "u4_fig7_pyrometry_speed_distance.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 4.7: Non-Contact Pyrometry, Ultrasonic TOF Ranging &amp; Accelerometers
  </text>
  <text x="1260" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">Unit IV · Section 4.5 &amp; 4.6</text>
  <rect x="50" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="75" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">1. Radiation Pyrometry</text>
  <rect x="80" y="490" width="420" height="340" rx="8" fill="#fef2f2" stroke="#fca5a5" />
  <text x="100" y="530" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#991b1b">Stefan-Boltzmann Law:</text>
  <text x="100" y="570" font-family="monospace" font-size="20" font-weight="700" fill="#b91c1c">E = ε · σ · T⁴</text>
  <text x="100" y="610" font-family="system-ui, sans-serif" font-size="18" fill="#7f1d1d">• σ = 5.6703 × 10⁻⁸ W/(m²·K⁴)</text>
  <text x="100" y="645" font-family="system-ui, sans-serif" font-size="18" fill="#7f1d1d">• Emissivity ε: Surface radiation efficiency</text>
  <rect x="560" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="585" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">2. Ultrasonic Distance &amp; Speed</text>
  <rect x="590" y="490" width="420" height="340" rx="8" fill="#eff6ff" stroke="#bfdbfe" />
  <text x="610" y="530" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#1e40af">Time-of-Flight Physics:</text>
  <text x="610" y="570" font-family="monospace" font-size="20" font-weight="700" fill="#1d4ed8">d = ( c_air · Δt ) / 2</text>
  <text x="610" y="610" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• c_air ≈ 331.3 + 0.606·T(°C) m/s</text>
  <text x="610" y="645" font-family="system-ui, sans-serif" font-size="18" fill="#1e3a8a">• Doppler speed: f_d = (2·v·f₀·cos θ)/c</text>
  <rect x="1070" y="140" width="480" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="1095" y="180" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#1e293b">3. Vibration Accelerometers</text>
  <rect x="1100" y="490" width="420" height="340" rx="8" fill="#faf5ff" stroke="#d8b4fe" />
  <text x="1120" y="530" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#7e22ce">Seismic Mass Mechanics:</text>
  <text x="1120" y="570" font-family="monospace" font-size="20" font-weight="700" fill="#6b21a8">F = m · a,   q = d₃₃ · (m · a)</text>
  <text x="1120" y="610" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">• Charge is directly proportional to acceleration a</text>
  <text x="1120" y="645" font-family="system-ui, sans-serif" font-size="18" fill="#581c87">• IEPE built-in preamplifier outputs low-Z voltage</text>
</svg>"""
}

def main():
    print(f"Generating {len(FIGURES)} Unit IV vector SVG figures into '{OUTPUT_DIR}'...")
    for filename, content in FIGURES.items():
        filepath = os.path.join(OUTPUT_DIR, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content.strip())
        print(f"  [OK] Wrote {filepath}")
    print("Unit IV asset generation complete.")

if __name__ == "__main__":
    main()
`;

export const LECTURE_UNIT4_QMD_SOURCE = `---
title: "Unit IV: Measurement Systems"
subtitle: "Sensors, Transducers, Force/Torque, Pressure & Flow, Optical Visualization (PIV/Schlieren/BOS), Thermal, Pyrometry & Motion Sensors"
author: "Er. Saroj Chalise"
format:
  revealjs:
    theme: default
    slide-number: true
    preview-links: auto
    chalkboard: true
    navigation-mode: linear
    transition: slide
    width: 1600
    height: 900
    margin: 0.05
---

## Course Learning Objectives

- **Identify principles & types of sensors and transducers**: Primary vs electrical, active vs passive.
- **Measure force, torque, and moment**: Load cells, 6-DOF decoupling matrices, shaft torque telemetry.
- **Apply pressure and flow tools**: Pitot-static probes, Venturi meters, manometers, Bourdon tubes, MEMS.
- **Employ optical flow visualization**: Particle Image Velocimetry (PIV), Z-type Schlieren, BOS.
- **Utilize thermal, pyrometry & vibration sensors**: RTD PT100, thermocouple CJC, Stefan-Boltzmann, accelerometers.

::: notes
Welcome students to Unit IV. This 10-hour module is the practical foundation of instrumentation engineering.
:::

---

## 4.1 Sensors vs. Transducers

- **Sensor (Primary Detector)**: Directly senses physical change (e.g. Bourdon tip deflection).
- **Transducer**: Converts input energy into an electrical analog ($V$, $I$, or $f$).
- **Two-Stage Chain**: Primary Sensing Element $\\rightarrow$ Secondary Transduction Element $\\rightarrow$ Signal Conditioning $\\rightarrow$ Display.
- *Rule*: All electrical transducers contain sensors, but not all sensors are electrical transducers!

::: notes
Make sure students clearly understand the difference on university exams: a sensor detects; a transducer converts energy.
:::

---

## 4.1 Active vs. Passive Transducers

| Criterion | Active (Self-Generating) | Passive (Externally Excited) |
|---|---|---|
| Power Source | Zero external power required | Requires external DC/AC excitation |
| Mechanism | Generates EMF or electric charge directly | Modulates $R$, $L$, or $C$ parameter |
| Examples | Thermocouple, Piezoelectric, Photovoltaic | Strain gauge, RTD PT100, LVDT, Capacitive |
| Steady-State | Cannot measure static force in charge mode | Measures both static and dynamic states |

::: notes
Emphasize that active transducers extract energy directly from the measurand.
:::

---

## Figure 4.1: Sensor & Transducer Architecture

![](figures_unit4/u4_fig1_sensor_transducer_classification.svg){width=95%}

::: notes
Walk students through Figure 4.1: the left block diagram shows the signal chain; the right shows active vs passive taxonomy.
:::

---

## 4.2 Force Measurement: Load Cells

- **Working Principle**: Force $F$ elastically deforms a spring element; strain gauges convert $\\epsilon$ into $\\Delta R$.
- **Full Wheatstone Bridge**: 4 active gauges (2 tension $+$, 2 compression $-$) quadruple output:
$$\\frac{V_{\\text{out}}}{V_{\\text{ex}}} = GF \\cdot \\epsilon_{\\text{axial}} \\cdot (1 + \\nu)$$
- **Benefits**: Cancels off-axis bending and ambient thermal expansion; rated sensitivity $\\approx 2.0\\,\\text{mV/V}$.

::: notes
Explain why 4-gauge full bridges are the industrial standard for load cells.
:::

---

## 4.2.1 Load Cell Types & Data Acquisition

- **S-Beam**: Symmetrical for tension and compression (hoist scales, materials testing).
- **Shear Beam**: Measures principal shear stress $\\tau = VQ/Ib$ at $45^\\circ$. Insensitive to load position!
- **Canister / Column**: High capacity compression cell ($20-500+\\text{ tonnes}$) for truck and silo weighbridges.
- **Data Acquisition**: Instrumentation amplifiers (PGA), 24-bit delta-sigma ADCs, 6-wire ratiometric sensing.

::: notes
Shear web load cells are immune to shifting loads on platform scales.
:::

---

## 4.2.3 Multi-Axis 6-DOF Force & Moment Measurement

- In robotics and wind tunnels, 3 orthogonal forces ($F_x, F_y, F_z$) and 3 moments ($M_x, M_y, M_z$) act simultaneously.
- **Cross-Talk Decoupling Matrix**:
$$[F] = [C] \\cdot [V]$$
- Off-diagonal terms $C_{ij}$ mathematically cancel parasitic cross-talk strains in real time!

::: notes
Robotic wrist sensors multiply bridge voltages by the calibration matrix at 10 kHz.
:::

---

## 4.2.4 Torque Measurement Systems

- Shaft under torque $T$ experiences surface shear stress:
$$\\tau = \\frac{16\\,T}{\\pi d^3} \\quad \\implies \\quad \\epsilon = \\pm \\frac{\\tau}{2G}$$
- **$45^\\circ$ Rosette**: Four gauges oriented along $\\pm 45^\\circ$ principal helices measure pure torque while rejecting axial and bending loads.
- **Rotating Telemetry**: Contactless RF and rotary transformers replace noisy slip-rings above 3000 RPM.

::: notes
Highlight how the full bridge on a torque shaft completely rejects bending loads.
:::

---

## Figure 4.2: Force, Moment & Torque Transducers

![](figures_unit4/u4_fig2_force_moment_torque_loadcells.svg){width=95%}

::: notes
Figure 4.2 shows the S-beam load cell, the 6-DOF decoupling matrix, and the rotating torque shaft with telemetry.
:::

---

## 4.3 Pressure Measurement: Hydrostatic Manometers

- **U-Tube Hydrostatic Balance**:
$$\\Delta P = P_1 - P_2 = \\rho_m \\cdot g \\cdot \\Delta h$$
- **Primary Standard**: Relies purely on fluid density, gravity, and height. Requires zero calibration.
- **Inclined Manometer**: Enhances readability for low gas differential pressures:
$$L = \\frac{\\Delta h}{\\sin(\\theta)}$$

::: notes
An inclination of 10 degrees magnifies scale reading by 5.7x.
:::

---

## 4.3.2 Bourdon Tubes & MEMS Pressure Sensors

- **C-Type Bourdon Tube**: Elliptical tube straightens elastically under internal pressure. Sector-pinion gears drive dial pointer across $270^\\circ$.
- **MEMS Piezoresistive Diaphragms**: Silicon diaphragm etched with diffused Boron resistor bridge. Fast microsecond response time ($10-500\\,\\text{kHz}$).

::: notes
Bourdon gauges need no power; MEMS sensors integrate directly into microcontrollers.
:::

---

## Figure 4.3: Pressure Measurement Instruments

![](figures_unit4/u4_fig3_pressure_sensors_manometer_bourdon.svg){width=95%}

::: notes
Figure 4.3 compares liquid manometer, mechanical Bourdon tube, and silicon MEMS diaphragm.
:::

---

## 4.3.1 Flow Velocity: Pitot-Static Probe

- **Bernoulli Stagnation Principle**:
$$P_{\\text{static}} + \\frac{1}{2}\\,\\rho\\,v^2 = P_{\\text{total}}$$
- **Flow Velocity Formulation**:
$$v = C_p \\cdot \\sqrt{\\frac{2\\,(P_{\\text{total}} - P_{\\text{static}})}{\\rho}}$$
- Tip port captures total stagnation pressure; side ports capture undisturbed static pressure.

::: notes
Review probe calibration factor Cp and angle of attack insensitivity.
:::

---

## 4.3.1 Obstruction Flow Meters: Venturi & Orifice

- **Volumetric Discharge Rate ($Q$)**:
$$Q = C_d \\cdot A_2 \\cdot \\sqrt{\\frac{2\\,(P_1 - P_2)}{\\rho \\cdot (1 - \\beta^4)}} \\quad \\text{where } \\beta = \\frac{d_2}{d_1}$$
- **Venturi Tube**: $C_d \\approx 0.98$. Permanent pressure loss is only $10-15\\%$ of $\\Delta P$.
- **Orifice Plate**: $C_d \\approx 0.60-0.62$. Inexpensive, but permanent head loss is $60-80\\%$.

::: notes
Venturi meters save significant pumping energy over time compared to orifice plates.
:::

---

## Figure 4.4: Flow Velocity & Obstruction Meters

![](figures_unit4/u4_fig4_flow_measurement_pitot_venturi.svg){width=95%}

::: notes
Figure 4.4 shows the Pitot-static aerodynamic probe and the Venturi converging-diverging meter.
:::

---

## 4.3.3 Optical Flow Visualization: PIV

- **Particle Image Velocimetry**: Non-intrusive quantitative 2D velocity fields.
- **Tracer Seeding**: Flow seeded with $1-5\\,\\mu\\text{m}$ oil mist; Stokes number $St \\ll 0.1$.
- **Cross-Correlation**: Pulsed Nd:YAG laser sheet fires twice with delay $\\Delta t$. Interrogation window correlation yields displacement $\\Delta s$:
$$\\vec{v} = \\frac{\\Delta \\vec{s}}{\\Delta t}$$

::: notes
PIV gives full velocity vector maps without inserting physical probes.
:::

---

## 4.3.3 Optical Visualization: Schlieren & BOS

- **Gladstone-Dale Relation**: Refractive index $n$ is proportional to gas density $\\rho$:
$$n - 1 = K_{\\text{GD}} \\cdot \\rho$$
- **Z-Type Schlieren**: Concave mirrors collimate light; knife-edge blocks rays deflected by $\\partial \\rho / \\partial y$.
- **BOS (Background Oriented Schlieren)**: Measures apparent pixel displacement of background speckle patterns without mirrors or knife-edges.

::: notes
Schlieren visualizes shock waves and thermal plumes by optical refraction.
:::

---

## Figure 4.5: Optical Flow Visualization Suite

![](figures_unit4/u4_fig5_flow_visualization_piv_schlieren_bos.svg){width=95%}

::: notes
Figure 4.5 compares PIV laser sheets with Z-type Schlieren optics and BOS.
:::

---

## 4.4 Thermal Measurement: RTD (PT100)

- **Positive Temperature Coefficient (PTC)**: Conduction electron scattering increases resistance.
- **Callendar-Van Dusen Equation ($T \\ge 0^\\circ\\text{C}$)**:
$$R(T) = R_0 \\cdot \\left[ 1 + A\\cdot T + B\\cdot T^2 \\right]$$
- **3-Wire Lead Compensation**: Places matched lead resistances into opposite bridge arms, canceling lead resistance drift.
- **Self-Heating Prevention**: Keep excitation current $I \\le 1\\,\\text{mA}$.

::: notes
RTDs offer industry-leading accuracy of +/- 0.05 °C.
:::

---

## 4.4 Thermocouples & Cold Junction Compensation (CJC)

- **Seebeck Effect**: Dissimilar metal loop generates net thermoelectric EMF:
$$V_{\\text{net}} \\approx S_{AB} \\cdot (T_{\\text{hot}} - T_{\\text{ref}})$$
- **Cold Junction Compensation**: Measure terminal block $T_{\\text{ref}}$ with local RTD and add software offset:
$$V(T_{\\text{hot}}) = V_{\\text{meas}} + V_{\\text{table}}(T_{\\text{ref}})$$
- **Type K**: Chromel-Alumel ($41\\,\\mu\\text{V}/^\\circ\\text{C}$), $-200^\\circ\\text{C}$ to $+1250^\\circ\\text{C}$.

::: notes
Thermocouples measure temperature difference; CJC provides absolute temperature.
:::

---

## Figure 4.6: Thermal Sensors & Signal Conditioning

![](figures_unit4/u4_fig6_temperature_rtd_thermocouple.svg){width=95%}

::: notes
Figure 4.6 illustrates RTD 3-wire bridge balancing and thermocouple CJC isothermal blocks.
:::

---

## 4.5 Pyrometry & Infrared Measurements

- **Stefan-Boltzmann Law (Total Radiation)**:
$$E = \\epsilon \\cdot \\sigma \\cdot T^4 \\quad (\\sigma = 5.6703 \\times 10^{-8}\\,\\text{W/m}^2\\text{K}^4)$$
- **Wien's Displacement Law**: $\\lambda_{\\text{max}} \\cdot T = 2898\\,\\mu\\text{m}\\cdot \\text{K}$.
- **Emissivity ($\\epsilon$)**: Surface radiation efficiency ($0 < \\epsilon \\le 1$). Crucial for calibration!
- **Instruments**: Disappearing filament pyrometer, spot IR thermometers, and microbolometer thermal cameras.

::: notes
Emphasize the fourth-power temperature law: radiant energy increases dramatically with temperature.
:::

---

## 4.6 Distance & Speed: Ultrasonic Sensors & Doppler

- **Time-of-Flight (TOF) Ranging**:
$$d = \\frac{c_{\\text{air}} \\cdot \\Delta t}{2} \\quad \\text{where } c_{\\text{air}} \\approx 331.3 + 0.606\\cdot T(^\\circ\\text{C})$$
- Temperature compensation is essential to prevent $\\pm 10\\%$ distance errors!
- **Doppler Speed Measurement**:
$$f_d = \\frac{2 \\cdot v_{\\text{target}} \\cdot f_0 \\cdot \\cos(\\theta)}{c}$$

::: notes
Ultrasonic level sensors sit above liquid tanks without touching corrosive chemicals.
:::

---

## 4.6 Vibration Sensors: Piezoelectric Accelerometers

- **Seismic Mass Dynamic Force**:
$$F = m \\cdot a(t) \\quad \\implies \\quad q = d_{33} \\cdot m \\cdot a(t)$$
- Charge output is directly proportional to acceleration $a(t)$.
- **IEPE / ICP Sensors**: Built-in FET preamplifier converts high-Z charge to low-Z voltage.
- **Machinery Health**: ISO 10816 vibration severity limits for motor and turbine bearing monitoring.

::: notes
Piezoelectric accelerometers cannot measure DC steady gravity because charge bleeds off.
:::

---

## Figure 4.7: Radiation, Distance & Vibration Transducers

![](figures_unit4/u4_fig7_pyrometry_speed_distance.svg){width=95%}

::: notes
Figure 4.7 displays radiation curves, ultrasonic pulse-echo TOF, and seismic accelerometer mechanics.
:::

---

## Worked Engineering Example

**Problem A: Pitot Airspeed**
$$\\Delta P = 1450\\,\\text{Pa}, \\quad \\rho = 1.225\\,\\text{kg/m}^3, \\quad C_p = 0.99$$
$$v = 0.99 \\cdot \\sqrt{\\frac{2 \\times 1450}{1.225}} = 48.17\\,\\text{m/s} \\quad (173.4\\,\\text{km/h})$$

**Problem B: Thermocouple CJC**
$$V_{\\text{meas}} = 16.48\\,\\text{mV}, \\quad S = 41.2\\,\\mu\\text{V}/^\\circ\\text{C}, \\quad T_{\\text{ref}} = 24.0^\\circ\\text{C}$$
$$\\Delta T = \\frac{16480\\,\\mu\\text{V}}{41.2\\,\\mu\\text{V}/^\\circ\\text{C}} = 400.0^\\circ\\text{C} \\quad \\implies \\quad T_{\\text{hot}} = 24.0 + 400.0 = 424.0^\\circ\\text{C}$$

::: notes
Always add reference junction temperature to the differential reading.
:::

---

## Unit IV Summary & Formula Cheat-Sheet

- **Force & Torque**: $\\Delta V / V_{\\text{ex}} = GF \\cdot \\epsilon$, $\\tau = 16T/(\\pi d^3)$, $[F] = [C][V]$.
- **Pressure**: $\\Delta P = \\rho g \\Delta h$, $L = \\Delta h / \\sin(\\theta)$.
- **Flow**: $v = C_p \\sqrt{2\\Delta P / \\rho}$, $Q = C_d A_2 \\sqrt{\\frac{2\\Delta P}{\\rho(1-\\beta^4)}}$.
- **Visualization**: PIV $v = \\Delta s / \\Delta t$, Schlieren $\\epsilon_y \\propto \\int (\\partial \\rho / \\partial y) dz$.
- **Thermal**: PT100 $R(T) = R_0(1+AT+BT^2)$, Seebeck $V \\approx S_{AB}(T_{\\text{hot}}-T_{\\text{ref}})$.
- **Radiation & Motion**: $E = \\epsilon \\sigma T^4$, Ultrasonic $d = c\\Delta t/2$, Accelerometer $q = d_{33}ma$.

::: notes
End of Unit IV lecture. Encourage students to run the interactive labs and study the vector figures.
:::
`;

export const RUN_INSTRUCTIONS_UNIT4 = `================================================================================
CLASSROOM PRESENTATION EXECUTION INSTRUCTIONS
Unit IV: Measurement Systems (10 hrs)
Author: Er. Saroj Chalise
Reference Deck: https://chalisesaroj.github.io/slide/
================================================================================

1. PREREQUISITES:
   Make sure Python 3.9+ and Quarto CLI are installed:
   - Python: https://www.python.org/downloads/
   - Quarto: https://quarto.org/docs/get-started/

2. STEP 1: INSTALL PYTHON LIBRARIES
   pip install numpy matplotlib

3. STEP 2: GENERATE VECTOR SVG VISUAL ASSETS
   python lecture_unit4.py

   Expected output:
   - Creates figures_unit4/ directory
   - Generates u4_fig1_sensor_transducer_classification.svg
   - Generates u4_fig2_force_moment_torque_loadcells.svg
   - Generates u4_fig3_pressure_sensors_manometer_bourdon.svg
   - Generates u4_fig4_flow_measurement_pitot_venturi.svg
   - Generates u4_fig5_flow_visualization_piv_schlieren_bos.svg
   - Generates u4_fig6_temperature_rtd_thermocouple.svg
   - Generates u4_fig7_pyrometry_speed_distance.svg

4. STEP 3: RENDER THE REVEAL.JS PRESENTATION
   quarto render lecture_unit4.qmd

   Or preview with live reload in your browser:
   quarto preview lecture_unit4.qmd

5. PRESENTATION TIPS:
   - Press 'F' on your keyboard for clean fullscreen presentation mode (no buttons or bars).
   - Press 'S' to open the speaker notes window.
   - Press 'O' to toggle slide overview grid.
   - Press 'ESC' or click anywhere to exit overview.
`;
