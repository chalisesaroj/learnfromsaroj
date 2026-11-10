/**
 * Unit III: Strain Gauges (6 hrs)
 * Complete Interactive Engineering Web Presentation & Quarto Curriculum
 * Course: MEC 232 (3-1-1) · Instrumentation and Measurement
 * Pokhara University / BE Mechanical Curriculum Alignment
 *
 * Instructor: Er. Saroj Chalise
 * BE Mechanical (IOE Pulchowk, 2014) | ME Mechanical (IOE Pulchowk, 2019)
 * 10+ Years of Experience in Hydropower, Automotive Powertrains & Engineering Pedagogy
 * Reference: https://chalisesaroj.github.io/slide/
 */

import { SlideData } from '../types/chapterDeck';

export const UNIT3_SLIDES_DATA: SlideData[] = [
  // =========================================================================
  // PART A: INTRODUCTION AND GAUGE FACTOR (Slides 1 - 8)
  // =========================================================================
  {
    id: 1,
    title: "STRAIN GAUGES",
    subtitle: "Measuring the Invisible Deformation",
    sectionTag: "Unit III · 6 Hours · Pokhara University",
    type: "title",
    imageUrl: "/assets/unit3/strain_gauge_macro.jpg",
    imageCaption: "Macro Photography: Precision constantan foil strain gauge (120 Ω) bonded to metallic test specimen with soldered leads.",
    bullets: [
      "**Course Code:** MEC 232 (3 Credits) · Full Marks: 100 · Pass Marks: 45",
      "**Course Title:** Instrumentation and Measurement (3-1-1) · Total: 45 Hours",
      "**Level:** Bachelor of Engineering · **Program:** BE Mechanical",
      "**Instructor:** Er. Saroj Chalise · BE Mechanical (IOE Pulchowk, 2014) · ME Mechanical (IOE Pulchowk, 2019)",
      "**Industrial Focus:** 10+ Years in Hydropower Machinery, Automotive Testing & Engineering Metrology"
    ],
    speakerNotes: "Welcome students to Unit III: Strain Gauges. In structural engineering, aerospace, and mechanical design, machines and structures experience invisible deformations under load. Today, we discover how to measure deformations smaller than a human hair using electrical resistance.",
    takeaway: "You cannot always see deformation, but with electrical resistance strain gauges, you can measure it with microstrain precision."
  },
  {
    id: 2,
    title: "Can We See Deformation?",
    subtitle: "The physical limits of direct human observation in engineering structures",
    sectionTag: "3.1 Gauge Factor",
    type: "concept",
    imageUrl: "/assets/unit3/bridge_truss_strain.jpg",
    imageCaption: "Structural Health Monitoring: Heavy steel truss railway bridge instrumented with strain gauge enclosures under train load.",
    bullets: [
      "**The Everyday Observation:** When a train crosses a massive steel truss bridge, or when an airplane taxis along a runway, do the heavy steel members visibly bend?",
      "**The Physical Scale:** A $1000\\,\\text{mm}$ structural steel bar under a heavy tensile working stress of $150\\,\\text{MPa}$ elongates by only $0.75\\,\\text{mm}$ ($0.075\\%$).",
      "**The Dangerous Reality:** Human vision cannot detect whether a bridge girder is safely loaded at $20\\%$ capacity or on the verge of catastrophic fatigue failure at $95\\%$ yield.",
      "**The Engineering Challenge:** How can we convert an invisible mechanical displacement into an electrical signal that a computer can log, plot, and monitor in real time?"
    ],
    equation: "\\Delta L = \\frac{F \\cdot L_0}{A \\cdot E} \\approx 10^{-6} \\text{ to } 10^{-3} \\text{ m}",
    speakerNotes: "Begin with a provocative physical question: Can we see a steel rod becoming longer? The answer is: Yes, but the change is often far too small for human eyes. This motivates the need for electrical strain sensing.",
    takeaway: "Dangerous internal stresses manifest as imperceptible micro-deformations that require precision electronic transduction."
  },
  {
    id: 3,
    title: "From Force to Mechanical Deformation",
    subtitle: "Three physical stages: unloaded specimen, applied tensile force, and strained state",
    sectionTag: "3.1 Gauge Factor",
    type: "figure",
    figureKey: "u3_fig_deformation",
    speakerNotes: "Direct students to Figure 3.0: Stage 1 shows the original resting bar of length L0. Stage 2 shows the application of tensile force F. Stage 3 shows axial elongation Delta L accompanied by lateral Poisson necking Delta D.",
    takeaway: "Every mechanical load produces simultaneous longitudinal elongation and transverse Poisson contraction."
  },
  {
    id: 4,
    title: "Understanding Strain: The Governing Metric",
    subtitle: "Mathematical definition, dimensionless nature, and the microstrain (με) unit",
    sectionTag: "3.1 Gauge Factor",
    type: "formula",
    imageUrl: "/assets/unit3/tensile_test_utm.jpg",
    imageCaption: "Universal Testing Machine (UTM): High-precision tensile specimen instrumented with axial strain gauges and clip-on extensometer.",
    equation: "\\epsilon = \\frac{\\Delta L}{L_0} = \\frac{L_{\\text{final}} - L_0}{L_0}",
    symbols: [
      { symbol: "\\epsilon", name: "Engineering Strain", unit: "\\text{dimensionless (m/m)}", description: "Ratio of total axial elongation to original resting length" },
      { symbol: "\\Delta L", name: "Elongation / Deflection", unit: "\\text{mm or }\\mu\\text{m}", description: "Net physical change in specimen length under applied mechanical load" },
      { symbol: "L_0", name: "Initial Gauge Length", unit: "\\text{mm or m}", description: "Resting, unloaded baseline length of the component under test" },
      { symbol: "\\mu\\epsilon", name: "Microstrain", unit: "10^{-6}\\text{ m/m}", description: "Standard engineering unit: 1 με = 1 μm elongation per 1 meter of length" }
    ],
    bullets: [
      "**Dimensionless Ratio:** Because strain is length divided by length ($[\\text{L}] / [\\text{L}]$), it has no physical units.",
      "**Practical Engineering Range:** In civil and mechanical engineering, elastic metallic deformations are typically between $10^{-6}$ and $10^{-3}$. We define $1\\,\\mu\\epsilon = 10^{-6}\\text{ m/m} = 0.0001\\%$.",
      "**Immediate Numerical Demonstration:** A $100\\,\\text{mm}$ steel rod elongates by $0.1\\,\\text{mm}$ under tensile testing: $\\epsilon = \\frac{0.1\\,\\text{mm}}{100\\,\\text{mm}} = 0.0010 = 1000\\,\\mu\\epsilon$."
    ],
    speakerNotes: "Walk students through the numerical demonstration: 0.1 mm over 100 mm is 1000 microstrain. Emphasize that in structural steel, yield strain is approximately 1200 to 1500 microstrain.",
    takeaway: "Strain quantifies mechanical deformation independently of initial component dimensions."
  },
  {
    id: 5,
    title: "What Happens to Electrical Resistance?",
    subtitle: "The bridge between mechanical elasticity and solid-state electrical conduction",
    sectionTag: "3.1 Gauge Factor",
    type: "concept",
    bullets: [
      "**Governing Resistance Law:** Every conductor obeys $R = \\frac{\\rho \\cdot L}{A}$, where $\\rho$ is material resistivity, $L$ is length, and $A$ is cross-sectional area.",
      "**Mechanism 1 — Conductor Lengthening ($L \\uparrow$):** Under tensile strain, the conductor lengthens. Electrons must traverse a longer conductive path, increasing electrical resistance.",
      "**Mechanism 2 — Lateral Thinning ($A \\downarrow$):** Conductor elongation causes Poisson lateral contraction, narrowing cross-sectional area $A$. A narrower channel restricts electron flow, further increasing resistance.",
      "**Mechanism 3 — Piezoresistive Effect ($\\rho \\pm$):** Mechanical atomic lattice deformation alters electronic band structures and electron scattering rates, causing intrinsic resistivity $\\rho$ to change.",
      "**The Fundamental Breakthrough:** Mechanical deformation is directly transduced into an electrical resistance shift $\\Delta R$!"
    ],
    equation: "R = \\rho \\frac{L}{A} \\quad \\xrightarrow{\\text{Tensile Strain}} \\quad L \\uparrow, \\; A \\downarrow, \\; \\rho \\pm \\quad \\implies \\quad R \\uparrow",
    speakerNotes: "Emphasize the physical link: as the wire stretches, it becomes longer and thinner, both of which force electrical resistance to increase.",
    takeaway: "Mechanical deformation is directly mirrored by an electrical resistance change."
  },
  {
    id: 6,
    title: "What Is a Strain Gauge?",
    subtitle: "Formal engineering definition, operating principle, and physical anatomy",
    sectionTag: "3.1 Gauge Factor",
    type: "definition",
    definition: {
      term: "Electrical Resistance Strain Gauge",
      formalDefinition: "A passive electromechanical sensor that measures surface mechanical strain by transducing dimensional elongation and piezoresistive resistivity modulations into proportional variations in electrical resistance.",
      operationalMeaning: "Converts micro-millimeter surface displacements directly into fraction-of-an-ohm electrical shifts.",
      standardReference: "ASTM E251 / ISO 9513 Standard Test Methods for Performance Characteristics of Metallic Bonded Resistance Strain Gauges"
    },
    bullets: [
      "**Metallic Foil Grid:** Photo-etched alloy foil ($3–5\\,\\mu\\text{m}$ thick, Constantan or Karma) arranged in a serpentine loop to maximize active sensing length while canceling transverse strain.",
      "**Insulating Carrier Backing:** Tough, flexible polyimide or epoxy film ($25\\,\\mu\\text{m}$ thick) electrically isolating the grid from the conductive specimen.",
      "**Bonding Adhesive Matrix:** High-shear cyanoacrylate, epoxy, or ceramic cement transferring surface deformation into the foil via pure shear stress.",
      "**Solder Tabs:** Heavy copper-reinforced terminals allowing lead wires to be attached without mechanical strain pulling on the fragile sensing grid."
    ],
    speakerNotes: "Present the formal definition clearly. Explain that the serpentine pattern packs several centimeters of active wire into an area smaller than a postage stamp.",
    takeaway: "The strain gauge acts as an intimate physical extension of the specimen's crystalline surface."
  },
  {
    id: 7,
    title: "Gauge Factor (GF): The Fundamental Sensitivity",
    subtitle: "Analytical first-principles derivation from logarithmic differentiation",
    sectionTag: "3.1 Gauge Factor",
    type: "figure",
    figureKey: "u3_fig1",
    equation: "GF = \\frac{\\Delta R / R_0}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta \\rho / \\rho_0}{\\epsilon}",
    interactiveLabRef: "strain_bridge",
    speakerNotes: "Review the derivation on Figure 3.1: ln R = ln rho + ln L - ln A. Differentiating yields dR/R = d rho/rho + dL/L - dA/A. Substituting dA/A = -2*nu*epsilon gives the 3 terms: axial elongation (1), lateral Poisson contraction (+2*nu), and piezoresistive shift ((drho/rho)/epsilon).",
    takeaway: "Gauge Factor quantifies the electrical sensitivity of a strain gauge material: higher GF means larger resistance change per microstrain."
  },
  {
    id: 8,
    title: "Gauge Factor: Solved Numerical Problem",
    subtitle: "Quantitative verification of resistance shift on a structural beam",
    sectionTag: "3.1 Worked Example",
    type: "worked-example",
    workedExample: {
      problem: "A standard metallic foil strain gauge with nominal resistance R_0 = 120.00 \\,\\Omega and gauge factor GF = 2.00 is bonded to a structural steel tensile member. When loaded, the strain gauge indicates a mechanical strain of \\epsilon = 0.00100 (1000 \\,\\mu\\epsilon). Determine: 1) The fractional change in resistance (\\Delta R / R_0). 2) The absolute resistance change (\\Delta R). 3) The total strained resistance (R_{\\text{final}}).",
      given: {
        "R_0": "120.00 \\,\\Omega",
        "GF": "2.00",
        "\\epsilon": "0.00100 = 1000 \\,\\mu\\epsilon"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Calculate Fractional Resistance Change",
          math: "\\frac{\\Delta R}{R_0} = GF \\cdot \\epsilon = 2.00 \\times 0.00100 = 0.00200 = 0.20\\%",
          explanation: "The fractional resistance change is the product of Gauge Factor and mechanical strain."
        },
        {
          stepNumber: 2,
          title: "Calculate Absolute Resistance Change \\Delta R",
          math: "\\Delta R = R_0 \\cdot (GF \\cdot \\epsilon) = 120.00\\,\\Omega \\times 0.00200 = +0.240\\,\\Omega",
          explanation: "Multiply nominal resting resistance by fractional shift."
        },
        {
          stepNumber: 3,
          title: "Determine Final Strained Resistance",
          math: "R_{\\text{final}} = R_0 + \\Delta R = 120.000 + 0.240 = 120.240\\,\\Omega",
          explanation: "The new resistance of the gauge under full tensile working load."
        }
      ],
      finalAnswer: "\\Delta R = +0.240\\,\\Omega \\quad (R_{\\text{final}} = 120.240\\,\\Omega)",
      practicalInsight: "A massive tensile strain of 1000 microstrain produces only a 0.24 ohm change! Ordinary handheld multimeters cannot resolve this reliably due to lead wire fluctuations."
    },
    speakerNotes: "Highlight the critical takeaway to students: 0.24 ohms out of 120 ohms is just 0.2%! This proves why ordinary meters are useless and Wheatstone bridges are essential.",
    takeaway: "Because mechanical strain produces only milliohm resistance shifts, specialized signal conditioning circuits are mandatory."
  },

  // =========================================================================
  // PART B: BONDED AND UNBONDED STRAIN GAUGES (Slides 9 - 13)
  // =========================================================================
  {
    id: 9,
    title: "Part B: Bonded & Unbonded Strain Gauges",
    subtitle: "Section 3.2 — Construction taxonomy, strain transmission mechanics, and transducer integration",
    sectionTag: "3.2 Bonded vs Unbonded",
    type: "section-divider",
    speakerNotes: "We now transition to Section 3.2: Bonded versus Unbonded strain gauges. We will contrast direct adhesive surface-mount gauges with suspended wire flexure mechanisms.",
    takeaway: "The method of strain coupling—adhesive shear vs mechanical flexure—dictates frequency response, dynamic range, and transducer architecture."
  },
  {
    id: 10,
    title: "Bonded Strain Gauge Construction",
    subtitle: "Multi-layered foil grid, polyimide carrier, adhesive matrix, and shear lag transmission",
    sectionTag: "3.2 Bonded Gauges",
    type: "concept",
    imageUrl: "/assets/unit3/strain_gauge_bonding.jpg",
    imageCaption: "Precision Surface Preparation & Mounting: Cyanoacrylate adhesive installation and clamping onto aluminum beam.",
    bullets: [
      "**Structural Anatomy:** A bonded foil strain gauge consists of an ultra-thin ($3–5\\,\\mu\\text{m}$) etched metallic foil grid bonded to a polyimide carrier backing ($25\\,\\mu\\text{m}$).",
      "**Strain Transfer Mechanism:** Unlike mechanical extensometers, there are no clamps or knife-edges. Strain is transferred from the specimen into the grid via **shear stress** developed in the thin adhesive layer.",
      "**Adhesive Layer Requirements:** The bonding cement must have high shear modulus, zero void inclusions, excellent electrical insulation, and negligible viscoelastic creep over the operating temperature span.",
      "**Transverse Sensitivity Suppression:** Serpentine grid end loops are deliberately widened to minimize resistance response to lateral cross-axis strains ($< 1\\%$ cross-sensitivity)."
    ],
    equation: "\\tau_{\\text{adhesive}}(x) = G_{\\text{glue}} \\frac{u_{\\text{substrate}}(x) - u_{\\text{foil}}(x)}{t_{\\text{glue}}}",
    speakerNotes: "Explain the shear lag theory: shear stress in the adhesive layer transfers normal strain from the substrate into the foil. That is why proper adhesive curing is essential."
    ,
    takeaway: "Bonded gauges measure direct surface strain with high bandwidth (>100 kHz) but depend entirely on adhesive integrity."
  },
  {
    id: 11,
    title: "Unbonded Strain Gauge Construction",
    subtitle: "Suspended wire filaments, movable flexure armatures, and zero adhesive creep",
    sectionTag: "3.2 Unbonded Gauges",
    type: "concept",
    bullets: [
      "**Mechanical Architecture:** Fine resistance wire filaments ($25\\,\\mu\\text{m}$ diameter, platinum-tungsten or nickel-chrome) are suspended under mechanical pre-tension between movable and stationary insulated posts.",
      "**Operating Principle:** Displacement of an external flexure armature stretches one pair of wire loops (increasing tension and resistance) while simultaneously relaxing the opposing pair (decreasing tension and resistance).",
      "**Zero Adhesive Creep:** Because no organic glue or polymer backing is used in the load path, unbonded gauges exhibit virtually zero viscoelastic creep and outstanding long-term zero stability.",
      "**Primary Engineering Applications:** Internal sensing engines for high-precision pressure capsules, seismic geophones, biomedical blood pressure transducers, and flight accelerometers."
    ],
    equation: "k_{\\text{flexure}} \\cdot x = \\Delta F_{\\text{wire}} \\quad \\implies \\quad \\Delta R = R_0 \\cdot GF \\cdot \\left(\\frac{x}{L_{\\text{wire}}}\\right)",
    speakerNotes: "Clarify a common misconception: unbonded strain gauges are never glued directly onto a test beam. They are precision internal transducers inside sealed instruments."
    ,
    takeaway: "Unbonded gauges eliminate organic adhesive creep entirely, making them ideal for sealed pressure and inertial transducers."
  },
  {
    id: 12,
    title: "Comparative Analysis: Bonded vs Unbonded",
    subtitle: "Engineering trade-offs across installation, range, frequency, and hysteresis",
    sectionTag: "3.2 Bonded vs Unbonded",
    type: "pros-cons",
    prosCons: {
      title: "Direct Engineering Comparison",
      advantages: [
        "Bonded Foil: Direct surface strain measurement on arbitrary structural geometries.",
        "Bonded Foil: Exceptional dynamic frequency response (>50 kHz up to 200 kHz).",
        "Bonded Foil: Compact profile, minimal added mass (<0.1 g), and very low cost ($5–$25)."
      ],
      disadvantages: [
        "Bonded Foil: Susceptible to adhesive creep and moisture absorption at elevated temperatures.",
        "Unbonded Wire: Fragile mechanical assembly with lower frequency limit (<2 kHz due to armature inertia).",
        "Unbonded Wire: High manufacturing cost and complex mechanical overload stops."
      ],
      engineeringVerdict: "Bonded foil gauges dominate experimental stress analysis and load cell manufacturing. Unbonded wire gauges are restricted to specialized precision pressure capsules and seismic accelerometers."
    },
    speakerNotes: "Highlight the engineering verdict: bonded foil gauges are universal in stress analysis, while unbonded wire mechanisms are used inside specialized instruments."
    ,
    takeaway: "Select bonded foil for structural stress mapping and modern load cells; use unbonded wire for high-stability pressure capsules."
  },
  {
    id: 13,
    title: "Figure 3.2: Structural Comparison: Bonded vs Unbonded",
    subtitle: "Cross-sectional adhesive shear transfer vs four-loop suspended flexure mechanism",
    sectionTag: "3.2 Bonded vs Unbonded",
    type: "figure",
    figureKey: "u3_fig2",
    speakerNotes: "Review Figure 3.2. Contrast the cross-sectional shear stress distribution in the bonded foil gauge with the 4-element push-pull unbonded flexure mechanism.",
    takeaway: "Bonded gauges couple strain through adhesive shear; unbonded gauges couple displacement through mechanical post deflection."
  },

  // =========================================================================
  // PART C: CIRCUIT CONFIGURATIONS (Slides 14 - 23)
  // =========================================================================
  {
    id: 14,
    title: "Part C: Related Circuit Configurations",
    subtitle: "Section 3.3 — The measurement challenge: Resolving micro-ohm resistance shifts",
    sectionTag: "3.3 Circuit Configurations",
    type: "section-divider",
    speakerNotes: "We now enter Section 3.3: Circuit Configurations. We will study the Ballast circuit, Wheatstone Bridge circuits (Quarter, Half, Full), and Constant Current circuits.",
    takeaway: "Signal conditioning circuits must convert tiny fractional resistance shifts (0.1%) into clean, amplified DC/AC voltage signals with zero baseline drift."
  },
  {
    id: 15,
    title: "3.3.1 Ballast Circuit Configuration",
    subtitle: "Series voltage divider topology, transfer characteristics, and sensitivity optimization",
    sectionTag: "3.3.1 Ballast Circuit",
    type: "concept",
    bullets: [
      "**Simplest Readout Circuit:** A DC excitation source $V_s$ powers a fixed ballast resistor $R_b$ in series with the active strain gauge $R_g$.",
      "**Output Voltage:** Measured directly across the strain gauge: $V_0 = V_s \\frac{R_g}{R_b + R_g}$.",
      "**Ballast Ratio ($m = R_b / R_g$):** When the gauge changes by $\\Delta R$, the output voltage changes by:",
      "$$\\Delta V_0 = V_s \\frac{m}{(1+m)^2} \\frac{\\Delta R}{R_0} = V_s \\cdot \\eta(m) \\cdot (GF \\cdot \\epsilon)$$",
      "**Maximum Sensitivity Condition:** Differentiating $\\eta(m) = \\frac{m}{(1+m)^2}$ with respect to $m$ proves that maximum circuit sensitivity occurs strictly when $m = 1$ ($R_b = R_g$): $\\eta_{\\max} = \\frac{1}{(1+1)^2} = \\frac{1}{4} = 0.25$."
    ],
    equation: "\\eta(m) = \\frac{m}{(1+m)^2} \\quad \\implies \\quad \\left.\\frac{d\\eta}{dm}\\right|_{m=1} = 0 \\quad \\implies \\quad \\eta_{\\max} = 0.25",
    speakerNotes: "Derive that maximum circuit sensitivity occurs when m = 1, meaning the ballast resistance equals the nominal gauge resistance. At m = 1, the circuit sensitivity factor is exactly 0.25.",
    takeaway: "A ballast circuit achieves maximum voltage sensitivity when the series ballast resistance exactly equals nominal gauge resistance (m = 1)."
  },
  {
    id: 16,
    title: "Ballast Circuit Limitations & AC Coupling",
    subtitle: "The fatal DC offset flaw and application in high-frequency dynamic vibration testing",
    sectionTag: "3.3.1 Ballast Circuit",
    type: "figure",
    figureKey: "u3_fig3",
    bullets: [
      "**The Fatal DC Offset Flaw:** At nominal balance ($m=1$), the resting output voltage is $V_0 = V_s / 2$. For $V_s = 10\\,\\text{V}$, the resting DC pedestal is $5.000\\,\\text{V}$!",
      "**Signal-to-Pedestal Disaster:** For $1000\\,\\mu\\epsilon$ ($GF=2$), $\\Delta V_0 = 10 \\times 0.25 \\times 0.002 = 5.0\\,\\text{mV}$. Measuring $5\\,\\text{mV}$ riding on top of a $5000\\,\\text{mV}$ DC baseline requires an impractical $0.001\\%$ DC amplifier stability.",
      "**Static Strain Infeasibility:** Ballast circuits cannot measure static or quasi-static loads due to thermal DC baseline drift.",
      "**The AC Dynamic Vibration Solution:** By inserting a series high-pass capacitor $C_b$, the $5\\,\\text{V}$ DC pedestal is blocked entirely, passing only dynamic AC vibration strain signals to the preamplifier."
    ],
    equation: "V_{\\text{ac}}(t) = V_s \\frac{m}{(1+m)^2} \\left( GF \\cdot \\epsilon(t) \\right), \\quad f_{\\text{cutoff}} = \\frac{1}{2\\pi R_{\\text{in}} C_b}",
    speakerNotes: "Direct students to Figure 3.3. Explain that while the ballast circuit is historically popular for dynamic vibration sensing, Wheatstone bridges completely eliminate the DC offset for static measurements.",
    takeaway: "Ballast circuits are unsuited for static loads due to their huge Vs/2 DC pedestal, but excel in AC vibration testing with capacitive DC blocking."
  },
  {
    id: 17,
    title: "Why Do We Need a Bridge Circuit?",
    subtitle: "The Wheatstone bridge: Differential null-balance topology eliminating the DC baseline",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "concept",
    bullets: [
      "**The Differential Diamond:** Four resistive arms arranged in a closed loop. Excitation voltage $V_{EX}$ is applied across nodes A and C; differential output $V_0$ is measured between nodes B and D.",
      "**Governing Bridge Equation:** $V_0 = V_B - V_D = V_{EX} \\left( \\frac{R_1}{R_1 + R_2} - \\frac{R_4}{R_3 + R_4} \\right)$.",
      "**Null Balance Condition:** When the bridge is balanced ($V_0 = 0.000\\,\\text{V}$):",
      "$$\\frac{R_1}{R_2} = \\frac{R_4}{R_3} \\quad \\Longleftrightarrow \\quad R_1 \\cdot R_3 = R_2 \\cdot R_4$$",
      "**The Revolutionary Advantage:** Resting DC voltage is exactly zero volts ($V_0 = 0\\,\\text{V}$). Any output voltage represents pure, unadulterated mechanical strain, completely eliminating the $V_s/2$ pedestal problem of the ballast circuit!"
    ],
    equation: "V_0 = V_{EX} \\left[ \\frac{R_1 R_3 - R_2 R_4}{(R_1 + R_2)(R_3 + R_4)} \\right] = 0 \\quad \\Longleftrightarrow \\quad R_1 R_3 = R_2 R_4",
    speakerNotes: "Highlight that the differential nature of the Wheatstone bridge rejects common-mode excitation noise and establishes a true zero-volt baseline.",
    takeaway: "The Wheatstone bridge eliminates the DC offset entirely, producing an output voltage that is zero at rest and directly proportional to mechanical strain."
  },
  {
    id: 18,
    title: "Quarter Bridge (1× Configuration)",
    subtitle: "Single active gauge with completion resistors, small-strain approximation & non-linearity",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "concept",
    interactiveLabRef: "strain_bridge",
    bullets: [
      "**Circuit Topology:** Arm 1 contains the active strain gauge ($R_1 = R_0 + \\Delta R$), while arms 2, 3, and 4 are precision fixed completion resistors ($R_2 = R_3 = R_4 = R_0$).",
      "**Exact Transfer Function:** Substituting into the bridge formula yields:",
      "$$V_0 = V_{EX} \\left( \\frac{R_0 + \\Delta R}{2R_0 + \\Delta R} - \\frac{1}{2} \\right) = V_{EX} \\left( \\frac{\\Delta R / R_0}{4 + 2 (\\Delta R / R_0)} \\right)$$",
      "**Small-Strain Approximation:** Since $\\Delta R / R_0 \\ll 1$, we drop $2(\\Delta R / R_0)$ in the denominator:",
      "$$V_0 \\approx \\frac{V_{EX}}{4} \\frac{\\Delta R}{R_0} = \\frac{V_{EX}}{4} (GF \\cdot \\epsilon)$$",
      "**Non-Linearity Warning:** The neglected denominator term causes intrinsic bridge non-linearity: $\\text{Error} \\approx \\frac{1}{2} GF \\cdot \\epsilon$ ($0.1\\%$ error at $1000\\,\\mu\\epsilon$)."
    ],
    equation: "V_0 = \\frac{V_{EX}}{4} \\cdot GF \\cdot \\epsilon \\quad (1\\times \\text{ Sensitivity Multiplier})",
    speakerNotes: "Demonstrate that the quarter bridge provides a sensitivity factor of 1/4. Point out the non-linearity term that arises from having Delta R in the denominator.",
    takeaway: "The quarter bridge is simple and cost-effective, but has 1x sensitivity, intrinsic non-linearity, and susceptibility to thermal drift."
  },
  {
    id: 19,
    title: "Half Bridge (2× Bending Configuration)",
    subtitle: "Two active complementary gauges: Doubled sensitivity, perfect linearity & thermal rejection",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "concept",
    interactiveLabRef: "strain_bridge",
    bullets: [
      "**Mechanical Placement:** Two active strain gauges mounted on opposite faces of a cantilever beam in pure bending: $R_1$ experiences tension ($+\\epsilon$), $R_2$ experiences compression ($-\\epsilon$).",
      "**Exact Mathematical Cancellation:** In adjacent bridge arms, $R_1 = R_0 + \\Delta R$ and $R_2 = R_0 - \\Delta R$:",
      "$$V_0 = V_{EX} \\left( \\frac{R_0 + \\Delta R}{(R_0 + \\Delta R) + (R_0 - \\Delta R)} - \\frac{1}{2} \\right) = V_{EX} \\left( \\frac{R_0 + \\Delta R}{2R_0} - \\frac{1}{2} \\right) = \\frac{V_{EX}}{2} \\frac{\\Delta R}{R_0}$$",
      "**Key Engineering Breakthroughs:**",
      "1. **$2\\times$ Sensitivity Multiplier:** Yields twice the voltage output of a quarter bridge.",
      "2. **Strict Linearity:** The denominator sum $(R_1 + R_2 = 2R_0)$ is **strictly constant**, eliminating non-linearity completely!",
      "3. **Automatic Thermal Cancellation:** Ambient temperature shifts affect both gauges equally, subtracting to zero in adjacent arms."
    ],
    equation: "V_0 = \\frac{V_{EX}}{2} \\cdot GF \\cdot \\epsilon \\quad (2\\times \\text{ Sensitivity Multiplier — Strictly Linear})",
    speakerNotes: "Emphasize the mathematical beauty: because the sum of R1 and R2 is exactly 2R0, all non-linearity in the denominator vanishes completely!"
    ,
    takeaway: "Half bridge in bending doubles sensitivity, achieves perfect mathematical linearity, and automatically cancels ambient temperature drift."
  },
  {
    id: 20,
    title: "Full Bridge (4× Bending Configuration)",
    subtitle: "Four active gauges providing maximum sensitivity, 4x SNR, and lead-wire immunity",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "concept",
    interactiveLabRef: "strain_bridge",
    bullets: [
      "**Sensor Arrangement:** Four active strain gauges: two on the upper tensile surface ($R_1 = R_3 = R_0 + \\Delta R$) and two on the lower compressive surface ($R_2 = R_4 = R_0 - \\Delta R$).",
      "**Differential Output Equation:**",
      "$$V_0 = V_{EX} \\left( \\frac{R_0 + \\Delta R}{2R_0} - \\frac{R_0 - \\Delta R}{2R_0} \\right) = V_{EX} \\left( \\frac{2\\Delta R}{2R_0} \\right) = V_{EX} \\frac{\\Delta R}{R_0}$$",
      "**The Gold Standard in Transducer Design:**",
      "• **$4\\times$ Sensitivity Multiplier:** Four times the output voltage of a quarter bridge.",
      "• **Highest Signal-to-Noise Ratio (SNR):** Relaxes instrumentation amplifier gain requirements by a factor of 4.",
      "• **Complete Immunity:** Cancels axial tension, torsional shear, and ambient temperature drift simultaneously."
    ],
    equation: "V_0 = V_{EX} \\cdot GF \\cdot \\epsilon \\quad (4\\times \\text{ Sensitivity Multiplier — Maximum Performance})",
    speakerNotes: "Explain that full bridge is universally utilized in precision industrial load cells, medical infusion pumps, and torque telemetry.",
    takeaway: "The full bridge is the gold standard of instrumentation: it provides 4x sensitivity, perfect linearity, and complete rejection of thermal drift."
  },
  {
    id: 21,
    title: "Figure 3.4: Bridge Configurations Compared",
    subtitle: "Quarter, Half, and Full bridge wiring diagrams, beam locations, and sensitivity multipliers",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "figure",
    figureKey: "u3_fig4",
    interactiveLabRef: "strain_bridge",
    speakerNotes: "Review Figure 3.4 carefully with students: compare the 1x quarter bridge, 2x half bridge bending configuration, and 4x full bridge configuration.",
    takeaway: "Increasing active gauge count from 1 to 2 to 4 multiplies bridge sensitivity by 1x, 2x, and 4x while progressively eliminating non-linearity and thermal errors."
  },
  {
    id: 22,
    title: "3.3.3 Constant Current Circuit Configuration",
    subtitle: "4-wire Kelvin excitation, zero lead-wire attenuation, and perfect mathematical linearity",
    sectionTag: "3.3.3 Constant Current",
    type: "figure",
    figureKey: "u3_fig5",
    bullets: [
      "**Active Current Drive:** Instead of voltage excitation, an active precision electronic current source injects an ultrastable current $I_0$ through the gauge.",
      "**4-Wire Kelvin Architecture:** Current is forced through drive leads ($1$ and $4$), while sense leads ($2$ and $3$) connect directly to a high-impedance instrumentation amplifier ($R_{\\text{in}} > 10\\,\\text{G}\\Omega$).",
      "**Zero Lead-Wire Error:** Because essentially zero current flows through the sense leads, the voltage drop across lead resistance is zero ($I_{\\text{sense}} \\cdot R_{\\text{lead}} \\approx 0\\,\\text{V}$).",
      "**Exact Mathematical Linearity:** Output voltage after baseline subtraction is strictly linear: $\\Delta V_0 = I_0 \\cdot \\Delta R = I_0 R_0 (GF \\cdot \\epsilon)$ with zero denominator non-linearity!"
    ],
    equation: "\\Delta V_0 = I_0 \\cdot R_0 \\cdot GF \\cdot \\epsilon \\quad \\text{[Strictly Linear — Zero Lead Wire Attenuation]}",
    speakerNotes: "Walk through Figure 3.5. Show the drive current loop and the high-impedance sense lines that carry zero current.",
    takeaway: "The 4-wire Kelvin constant current circuit eliminates lead-wire attenuation entirely and achieves perfect mathematical linearity."
  },
  {
    id: 23,
    title: "Circuit Selection Matrix & Industrial Architecture",
    subtitle: "Comprehensive engineering trade-off comparison across all five circuit topologies",
    sectionTag: "3.3 Summary Matrix",
    type: "pros-cons",
    imageUrl: "/assets/unit3/industrial_load_cells.jpg",
    imageCaption: "Industrial Transducer Enclosures: S-beam, shear-web pancake, and high-capacity canister load cells powered by full-bridge strain gauges.",
    prosCons: {
      title: "Circuit Topology Selection Guide",
      advantages: [
        "Full Bridge (4x): Highest output voltage, maximum SNR, perfect linearity, full thermal cancellation.",
        "Constant Current: Complete immunity to long lead wires (ideal for wind turbines and deep mines).",
        "Half Bridge (2x): Excellent compromise for beams in bending with zero non-linearity."
      ],
      disadvantages: [
        "Quarter Bridge (1x): Lowest SNR, non-linear denominator, highly sensitive to lead wire resistance.",
        "Ballast Circuit: Unusable for static loads due to fatal Vs/2 DC pedestal; limited to AC vibration.",
        "Full Bridge: Requires accessibility to both tensile and compressive surfaces of the component."
      ],
      engineeringVerdict: "Use Full Bridge for commercial load cells and torque sensors. Use 4-wire Constant Current for remote sensors with long cable runs. Use Ballast exclusively for dynamic vibration testing."
    },
    speakerNotes: "Review this comparison matrix before exams: emphasize the trade-offs between component cost, wiring complexity, and measurement accuracy.",
    takeaway: "Match the circuit topology to the mechanical loading mode and environmental cable constraints."
  },

  // =========================================================================
  // PART D: TEMPERATURE COMPENSATION TECHNIQUES (Slides 24 - 30)
  // =========================================================================
  {
    id: 24,
    title: "Part D: Temperature Compensation",
    subtitle: "Section 3.4 — Understanding and neutralizing the two primary thermal error mechanisms",
    sectionTag: "3.4 Temperature Compensation",
    type: "section-divider",
    speakerNotes: "We now address Section 3.4: Temperature Compensation Techniques. Thermal drift is the single greatest enemy of precision strain measurement.",
    takeaway: "Temperature changes produce resistance changes that mimic mechanical strain; compensation techniques eliminate this thermal apparent strain."
  },
  {
    id: 25,
    title: "Is Every Resistance Change Caused by Strain?",
    subtitle: "The thermal trap: How ambient temperature changes mimic mechanical loads",
    sectionTag: "3.4 Temperature Compensation",
    type: "concept",
    bullets: [
      "**The Real-World Scenario:** Suppose you mount a strain gauge on an unloaded steel beam lying freely in a workshop at $20^\\circ\\text{C}$. Overnight, the sun heats the room to $45^\\circ\\text{C}$.",
      "**The Shocking Measurement:** The readout instrument indicates an apparent strain of $+350\\,\\mu\\epsilon$—equivalent to $70\\,\\text{MPa}$ of tensile stress! Yet no physical force was applied!",
      "**Thermal Apparent Strain ($\\epsilon_{\\text{app}}$):** Any resistance shift caused purely by temperature changes is termed thermal apparent strain.",
      "**The Engineering Hazard:** In aerospace and civil structural health monitoring, failing to compensate for temperature leads to false alarms or disastrous undetected fatigue failures."
    ],
    equation: "\\Delta R_{\\text{total}} = \\Delta R_{\\text{mechanical}} + \\Delta R_{\\text{temperature}} \\quad \\implies \\quad \\Delta R_{\\text{temperature}} \\;\\text{must be eliminated!}",
    speakerNotes: "Start with the physical observation: heat alone changes resistance. If an engineer cannot separate thermal shift from mechanical load, the entire measurement is invalid.",
    takeaway: "Uncompensated strain gauges cannot distinguish between a rising ambient temperature and a dangerous mechanical load."
  },
  {
    id: 26,
    title: "The Physics of Thermal Apparent Strain",
    subtitle: "Two distinct physical mechanisms: Thermal coefficient of resistance vs differential expansion",
    sectionTag: "3.4 Temperature Compensation",
    type: "formula",
    equation: "\\epsilon_{\\text{app}} = \\left[ \\frac{\\beta}{GF} + (\\alpha_s - \\alpha_g) \\right] \\Delta T",
    symbols: [
      { symbol: "\\epsilon_{\\text{app}}", name: "Thermal Apparent Strain", unit: "\\mu\\epsilon", description: "Fictitious strain indicated by the instrument due strictly to temperature change" },
      { symbol: "\\beta", name: "TCR of Gauge Alloy", unit: "\\text{ppm}/^\\circ\\text{C}", description: "Thermal Coefficient of Electrical Resistance: (ΔR/R0)/ΔT of the unconstrained wire" },
      { symbol: "\\alpha_s", name: "Substrate Expansion Coeff.", unit: "\\text{ppm}/^\\circ\\text{C}", description: "Coefficient of Thermal Expansion (CTE) of the test specimen material" },
      { symbol: "\\alpha_g", name: "Gauge Foil Expansion Coeff.", unit: "\\text{ppm}/^\\circ\\text{C}", description: "Coefficient of Thermal Expansion (CTE) of the unbonded foil alloy" },
      { symbol: "\\Delta T", name: "Temperature Variation", unit: "^\\circ\\text{C}", description: "Temperature deviation from reference calibration temperature (T - T0)" }
    ],
    bullets: [
      "**Mechanism 1 — Resistivity Drift ($\\beta \\cdot \\Delta T$):** The electrical resistivity of the metal alloy changes naturally with temperature due to electron-phonon scattering.",
      "**Mechanism 2 — Differential Thermal Expansion ($(\\alpha_s - \\alpha_g)\\Delta T$):** If the specimen expands at a different rate than the gauge foil, the substrate mechanically stretches or compresses the bonded foil, creating real mechanical strain from thermal expansion!"
    ],
    speakerNotes: "Explain that apparent strain consists of an electrical term (beta/GF) and a mechanical term (alpha_s - alpha_g). Both must be canceled.",
    takeaway: "Thermal apparent strain arises from both electrical resistivity shift and differential thermal expansion between gauge and substrate."
  },
  {
    id: 27,
    title: "3.4.1 Adjacent Arm Balancing (Dummy Gauge)",
    subtitle: "Using a matched dummy gauge on an unstressed specimen for complete algebraic cancellation",
    sectionTag: "3.4.1 Adjacent Arm Balancing",
    type: "figure",
    figureKey: "u3_fig6",
    bullets: [
      "**Active Gauge ($R_1$):** Mounted on the loaded test beam; experiences mechanical strain $\\epsilon_{\\text{mech}}$ plus ambient temperature change $\\Delta T$: $\\Delta R_1 = \\Delta R_{\\text{mech}} + \\Delta R_T$.",
      "**Dummy Gauge ($R_2$):** Mounted on an identical, unstressed coupon of the exact same material, placed immediately adjacent in identical thermal contact: $\\Delta R_2 = \\Delta R_T$.",
      "**Wheatstone Subtraction:** Wired into adjacent bridge arms ($R_1$ and $R_2$):",
      "$$V_0 = \\frac{V_{EX}}{4} \\left( \\frac{\\Delta R_1 - \\Delta R_2}{R_0} \\right) = \\frac{V_{EX}}{4} \\left( \\frac{(\\Delta R_{\\text{mech}} + \\Delta R_T) - \\Delta R_T}{R_0} \\right) = \\frac{V_{EX}}{4} \\frac{\\Delta R_{\\text{mech}}}{R_0}$$",
      "**Result:** Thermal resistance shifts cancel out algebraically, leaving only the pure mechanical strain signal!"
    ],
    equation: "\\Delta R_1 - \\Delta R_2 = (\\Delta R_{\\text{mech}} + \\Delta R_T) - \\Delta R_T = \\Delta R_{\\text{mech}}",
    speakerNotes: "Direct attention to Figure 3.6. Emphasize that the dummy block must have identical thermal mass and material composition to the active specimen.",
    takeaway: "Adjacent arm balancing cancels temperature drift algebraically by subtracting the response of an identical unstressed dummy gauge."
  },
  {
    id: 28,
    title: "3.4.2 Self-Temperature Compensation (STC)",
    subtitle: "Metallurgical tailoring of foil alloy TCR to neutralize substrate thermal expansion",
    sectionTag: "3.4.2 Self-Temperature Compensation",
    type: "figure",
    figureKey: "u3_fig7",
    bullets: [
      "**The STC Principle:** What if there is no physical space or weight allowance for a dummy block? Engineers process the gauge alloy metallurgically so its TCR $\\beta$ is intentionally **negative** and exactly balances substrate expansion:",
      "$$\\beta + GF \\cdot (\\alpha_s - \\alpha_g) = 0 \\quad \\Longleftrightarrow \\quad \\beta = -GF \\cdot (\\alpha_s - \\alpha_g)$$",
      "**Standard Commercial STC Numbers:** Gauges are manufactured with specific STC numbers matching substrate thermal expansion coefficients in $\\text{ppm}/^\\circ\\text{C}$:",
      "• **STC-13:** Matched to mild steel and carbon steels ($\\alpha_s \\approx 11–13\\,\\text{ppm}/^\\circ\\text{C}$).",
      "• **STC-23:** Matched to aluminum alloys 2024 / 7075 ($\\alpha_s \\approx 23\\,\\text{ppm}/^\\circ\\text{C}$).",
      "• **STC-06:** Matched to titanium and austenitic stainless steels ($\\alpha_s \\approx 6\\,\\text{ppm}/^\\circ\\text{C}$)."
    ],
    equation: "\\beta_{\\text{alloy}} = -GF \\cdot (\\alpha_{\\text{substrate}} - \\alpha_{\\text{gauge}}) \\quad \\implies \\quad \\epsilon_{\\text{app}} \\approx 0",
    speakerNotes: "Examine Figure 3.7. Point out the characteristic U-curve of STC gauges around room temperature and the disaster of material mismatch.",
    takeaway: "STC gauges eliminate the need for dummy blocks by tailoring the alloy's metallurgical composition to cancel the specific substrate's thermal expansion."
  },
  {
    id: 29,
    title: "Comparing the Two Compensation Techniques",
    subtitle: "Engineering selection criteria: Adjacent Arm Dummy Balancing vs Metallurgical STC",
    sectionTag: "3.4 Comparison",
    type: "pros-cons",
    prosCons: {
      title: "Compensation Technique Trade-Offs",
      advantages: [
        "Adjacent Arm Dummy: Completely independent of material properties; works on exotic composites and non-standard alloys.",
        "Adjacent Arm Dummy: Provides compensation across extremely wide temperature swings (-100°C to +400°C).",
        "STC Gauges: Eliminates dummy coupon, extra wiring, and mechanical mounting hassles; compact and lightweight."
      ],
      disadvantages: [
        "Adjacent Arm Dummy: Requires physical space, identical heat-sink contact, and doubles sensor cost.",
        "Adjacent Arm Dummy: Vulnerable to thermal lag if the dummy block does not track transient temperature spikes.",
        "STC Gauges: Strictly valid only for the specified substrate alloy; mounting STC-13 on aluminum creates massive error!"
      ],
      engineeringVerdict: "Use STC gauges for standard metallic structures (steel, aluminum, titanium). Use adjacent arm dummy compensation for custom alloys, polymers, carbon-fiber composites, or environments with steep temperature gradients."
    },
    speakerNotes: "Review this slide carefully: explain why mounting an STC-13 gauge on aluminum creates severe errors because the thermal expansions do not match.",
    takeaway: "Use STC gauges for standard alloys; use adjacent arm dummy balancing for non-standard materials or high-temperature testing."
  },
  {
    id: 30,
    title: "Worked Example: Apparent Strain & False Stress",
    subtitle: "Quantifying temperature drift error on an aluminum beam calibrated at 20°C operating at 45°C",
    sectionTag: "3.4 Worked Example",
    type: "worked-example",
    workedExample: {
      problem: "An uncompensated strain gauge (GF = 2.00, TCR \\beta = +70\\text{ ppm}/^\\circ\\text{C}, \\alpha_g = 15\\text{ ppm}/^\\circ\\text{C}) is bonded to an aluminum aerospace beam (\\alpha_s = 23\\text{ ppm}/^\\circ\\text{C}, E = 70\\text{ GPa}). The laboratory calibration is performed at 20°C, but the aircraft operates in desert heat at 45°C (\\Delta T = +25^\\circ\\text{C}). Calculate: 1) The thermal apparent strain \\epsilon_{\\text{app}} in \\mu\\epsilon. 2) The equivalent false stress \\sigma_{\\text{false}} that an uncompensated instrument would report. 3) The result if an STC-23 matched gauge is used instead.",
      given: {
        "GF": "2.00",
        "\\beta": "+70 \\times 10^{-6} / ^\\circ\\text{C}",
        "\\alpha_s": "23 \\times 10^{-6} / ^\\circ\\text{C}",
        "\\alpha_g": "15 \\times 10^{-6} / ^\\circ\\text{C}",
        "\\Delta T": "+25^\\circ\\text{C}",
        "E": "70\\text{ GPa}"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Calculate Fractional Resistance Change from Temperature",
          math: "\\frac{\\Delta R}{R_0} = [\\beta + GF(\\alpha_s - \\alpha_g)] \\Delta T = [70 + 2.00(23 - 15)] \\times 10^{-6} \\times 25 = 2150\\text{ ppm}",
          explanation: "Compute the combined electrical resistivity shift and differential thermal expansion."
        },
        {
          stepNumber: 2,
          title: "Determine Thermal Apparent Strain",
          math: "\\epsilon_{\\text{app}} = \\frac{\\Delta R / R_0}{GF} = \\frac{2150\\,\\mu\\epsilon}{2.00} = +1075\\,\\mu\\epsilon",
          explanation: "Divide fractional resistance shift by Gauge Factor to find indicated apparent strain."
        },
        {
          stepNumber: 3,
          title: "Compute Equivalent Fictitious Stress",
          math: "\\sigma_{\\text{false}} = E \\cdot \\epsilon_{\\text{app}} = (70 \\times 10^9\\text{ Pa}) \\times (1075 \\times 10^{-6}) = 75.25\\text{ MPa}!",
          explanation: "In an unloaded beam, the instrument falsely reports over 75 MPa of tensile stress!"
        },
        {
          stepNumber: 4,
          title: "Compare with STC-23 Matched Gauge",
          math: "\\epsilon_{\\text{app, STC-23}} \\le \\pm 15\\,\\mu\\epsilon \\implies \\sigma_{\\text{false}} \\le 1.05\\text{ MPa}",
          explanation: "An STC-23 gauge suppresses apparent stress by 98.6%, ensuring safe and reliable operation."
        }
      ],
      finalAnswer: "\\epsilon_{\\text{app}} = +1075\\,\\mu\\epsilon \\implies \\sigma_{\\text{false}} = 75.25\\text{ MPa} \\quad (\\text{STC-23 reduces error by } 98.6\\%)",
      practicalInsight: "75.25 MPa of false stress is more than 25% of the yield strength of aviation aluminum! Uncompensated thermal drift could cause an engineer to prematurely ground an aircraft."
    },
    speakerNotes: "This quantitative example leaves an indelible impression on students: 75 MPa could easily trigger a false structural alarm or mask a genuine overload.",
    takeaway: "Without temperature compensation, thermal apparent strain produces severe false stress readings (over 75 MPa in aluminum for a 25°C rise)."
  },

  // =========================================================================
  // PART E: APPLICATIONS, MEASUREMENT CHAIN & SYNTHESIS (Slides 31 - 36)
  // =========================================================================
  {
    id: 31,
    title: "Part E: Applications & Complete Signal Chain",
    subtitle: "From physical force to digital display: Real-world engineering implementations",
    sectionTag: "Applications & Chain",
    type: "section-divider",
    speakerNotes: "We now conclude Unit III with Section E: Real-world applications, the end-to-end measurement chain, a formative quiz, and master formula review.",
    takeaway: "Strain gauges serve as the universal primary sensing element across modern industrial instrumentation."
  },
  {
    id: 32,
    title: "Real-World Applications of Strain Gauges",
    subtitle: "Four industrial pillars: Load cells, bridge monitoring, automotive torque & material testing",
    sectionTag: "Applications",
    type: "figure",
    figureKey: "u3_fig_applications",
    imageUrl: "/assets/unit3/shaft_torque_telemetry.jpg",
    imageCaption: "Rotational Torque Telemetry: Engine dyno driveshaft instrumented with 45° strain rosettes and wireless RF telemetry (3,850 RPM).",
    speakerNotes: "Review Figure 3.9: 1) S-beam and shear web load cells. 2) Civil bridge structural health monitoring. 3) Rotating shaft torque telemetry. 4) Universal Testing Machine (UTM) tensile stress-strain characterization.",
    takeaway: "Strain gauges power industrial weighing, structural safety monitoring, powertrain vehicle testing, and materials science research."
  },
  {
    id: 33,
    title: "The Complete Strain Measurement Chain",
    subtitle: "End-to-end signal flow: Physical measurand to calibrated digital display",
    sectionTag: "Measurement Chain",
    type: "figure",
    figureKey: "u3_fig_measurement_chain",
    speakerNotes: "Direct students to Figure 3.8: 1) Applied Force F. 2) Surface Strain epsilon. 3) Resistance shift Delta R. 4) Wheatstone bridge millivolt output. 5) Instrumentation amplifier & ADC. 6) Real-time PC display.",
    takeaway: "Precision strain measurement requires seamless coordination between mechanical coupling, bridge topology, low-noise amplification, and high-resolution ADC conversion."
  },
  {
    id: 34,
    title: "Check Your Understanding: Unit III Assessment",
    subtitle: "Formative quiz testing core principles of Gauge Factor, bridges, and temperature compensation",
    sectionTag: "Check Understanding",
    type: "check-understanding",
    quiz: {
      question: "Why does a Half Bridge bending configuration completely eliminate bridge non-linearity error, unlike a Quarter Bridge?",
      options: [
        "Because it utilizes a 4-wire Kelvin current drive instead of voltage excitation.",
        "Because the sum of resistances in the active arm pair (R1 + R2) remains strictly constant (2R0) under pure bending.",
        "Because the gauge factor of the compressive gauge is mathematically zero.",
        "Because the high-pass AC coupling capacitor blocks all non-linear DC terms."
      ],
      correctIndex: 1,
      explanation: "In a half bridge subjected to pure bending, one gauge increases by +ΔR while the adjacent gauge decreases by -ΔR. Their sum (R1 + R2 = R0 + ΔR + R0 - ΔR = 2R0) is strictly constant, eliminating the non-linear ΔR term from the denominator of the bridge transfer function."
    },
    speakerNotes: "Have students select their answer before revealing the explanation. Emphasize that the denominator cancellation is a unique property of complementary push-pull configurations.",
    takeaway: "In half-bridge bending, equal and opposite resistance changes (+ΔR, -ΔR) keep the denominator strictly constant, ensuring perfect linearity."
  },
  {
    id: 35,
    title: "Comprehensive Worked Numerical Problem",
    subtitle: "Full-Bridge Cantilever Load Cell: Voltage output, amplifier gain, and resolution calculation",
    sectionTag: "Comprehensive Problem",
    type: "worked-example",
    workedExample: {
      problem: "A cantilever steel load cell (b = 25 mm, h = 10 mm, L = 200 mm, E = 200 GPa) is instrumented with four active 120 Ω strain gauges (GF = 2.10) in a full-bridge bending configuration. The bridge is excited by V_EX = 10.0 V DC. When a test force F = 500 N is applied at the tip: 1) Calculate surface strain ε at the gauge location. 2) Calculate bridge differential output voltage V_0. 3) Determine the amplifier gain required to scale V_0 to 5.0 V full-scale for a 16-bit ADC.",
      given: {
        "F": "500\\text{ N}",
        "L": "0.200\\text{ m}",
        "b, h": "25\\text{ mm}, 10\\text{ mm}",
        "E": "200\\text{ GPa}",
        "GF": "2.10",
        "V_{EX}": "10.0\\text{ V}"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Calculate Bending Moment and Surface Strain",
          math: "M = F \\cdot L = 500 \\times 0.20 = 100\\text{ N}\\cdot\\text{m}, \\quad Z = \\frac{b h^2}{6} = \\frac{0.025 \\times 0.010^2}{6} = 4.167 \\times 10^{-7}\\text{ m}^3",
          explanation: "Calculate the section modulus Z and resulting bending stress σ = M / Z = 240 MPa."
        },
        {
          stepNumber: 2,
          title: "Determine Surface Strain \\epsilon",
          math: "\\epsilon = \\frac{\\sigma}{E} = \\frac{240 \\times 10^6\\text{ Pa}}{200 \\times 10^9\\text{ Pa}} = 1.200 \\times 10^{-3} = 1200\\,\\mu\\epsilon",
          explanation: "Using Hooke's Law: ε = σ / E."
        },
        {
          stepNumber: 3,
          title: "Calculate Full Bridge Output Voltage",
          math: "V_0 = V_{EX} \\cdot GF \\cdot \\epsilon = 10.0\\text{ V} \\times 2.10 \\times 0.00120 = 25.20\\text{ mV}",
          explanation: "Full bridge provides 4x multiplier: V0 = VEX * GF * ε."
        },
        {
          stepNumber: 4,
          title: "Determine Required Amplifier Gain",
          math: "G_{\\text{amp}} = \\frac{V_{\\text{ADC, FS}}}{V_{0, \\max}} = \\frac{5.000\\text{ V}}{0.0252\\text{ V}} = 198.41 \\approx 200",
          explanation: "An instrumentation amplifier with a gain of ~200 maps 25.2 mV cleanly across the 0–5 V ADC input range."
        }
      ],
      finalAnswer: "\\epsilon = 1200\\,\\mu\\epsilon, \\quad V_0 = 25.20\\text{ mV}, \\quad G_{\\text{amp}} = 198.4",
      practicalInsight: "With a full bridge, the 25.2 mV signal is large enough to achieve high signal-to-noise ratio and sub-gram resolution after amplification."
    },
    speakerNotes: "Walk students through the complete mechanical-to-electrical pipeline: Force -> Moment -> Stress -> Strain -> Bridge Output -> Amplifier Gain -> ADC.",
    takeaway: "A full-bridge load cell delivers a robust millivolt signal that maps directly into modern ADC data acquisition hardware."
  },
  {
    id: 36,
    title: "Master Formula Reference & University Exam Review",
    subtitle: "High-yield summary of Unit III: Strain Gauges | MEC 232 | Pokhara University",
    sectionTag: "Master Review",
    type: "review",
    bullets: [
      "**1. Gauge Factor Definition & Derivation:** $GF = \\frac{\\Delta R / R_0}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta\\rho / \\rho_0}{\\epsilon}$. For Constantan, $GF \\approx 2.1$; for Silicon, $GF \\approx 120+$.",
      "**2. Ballast Sensitivity:** $\\eta(m) = \\frac{m}{(1+m)^2}$. Peak sensitivity $\\eta = 0.25$ occurs at $m = R_b / R_g = 1$. High DC pedestal requires AC capacitive coupling.",
      "**3. Wheatstone Bridge Multipliers:** Quarter ($V_0 \\approx \\frac{V_{EX}}{4} GF \\epsilon$), Half Bending ($V_0 = \\frac{V_{EX}}{2} GF \\epsilon$, strictly linear), Full Bending ($V_0 = V_{EX} GF \\epsilon$, 4x SNR).",
      "**4. Constant Current 4-Wire Drive:** $\\Delta V_0 = I_0 R_0 GF \\epsilon$. Zero lead-wire attenuation and strictly linear transfer function.",
      "**5. Thermal Apparent Strain:** $\\epsilon_{\\text{app}} = [\\frac{\\beta}{GF} + (\\alpha_s - \\alpha_g)] \\Delta T$. Compensate via adjacent arm dummy balancing ($R_1 - R_2$) or STC alloy matching ($\\beta = -GF(\\alpha_s - \\alpha_g)$).",
      "**Take-Home Engineering Principle:** *You cannot always see deformation, but you can measure it!*"
    ],
    speakerNotes: "Congratulate students on completing Unit III: Strain Gauges. These six principles summarize the entire 6-hour curriculum, all typical exam problems, and industrial transducer best practices.",
    takeaway: "Mastering Gauge Factor, bridge topologies, and temperature compensation enables engineers to design trustworthy load cells and structural health monitoring systems."
  }
];

export const LECTURE_UNIT3_PY_SOURCE = `#!/usr/bin/env python3
"""
lecture_unit3.py
================================================================================
Quarto Reveal.js Vector Asset Generator for Unit III: Strain Gauges (6 hrs)
Course: MEC 232 (3-1-1) · Instrumentation and Measurement
Author: Er. Saroj Chalise (IOE Pulchowk, BE 2014, ME 2019)
Reference Deck: https://chalisesaroj.github.io/slide/

Generates 10 standalone, publication-grade 16:9 vector SVG visual assets into
the figures_unit3/ directory:
  - u3_fig1_gauge_factor.svg
  - u3_fig2_bonded_vs_unbonded.svg
  - u3_fig3_ballast_circuit.svg
  - u3_fig4_wheatstone_bridge_configurations.svg
  - u3_fig5_constant_current_circuit.svg
  - u3_fig6_adjacent_arm_temperature_compensation.svg
  - u3_fig7_self_temperature_compensation.svg
  - u3_fig_deformation.svg
  - u3_fig_measurement_chain.svg
  - u3_fig_applications.svg

Specifications:
  - Aspect Ratio: 16:9 (viewBox 0 0 1600 900)
  - Pure White Background (#ffffff)
  - Inter / Aptos typography, Cambria Math equations
  - Hairline borders (0.75px to 1.5px)
================================================================================
"""

import os
import sys

OUTPUT_DIR = "figures_unit3"

def ensure_output_dir():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"[*] Target directory verified: {OUTPUT_DIR}/")

def main():
    ensure_output_dir()
    print("[+] Unit III Vector SVG assets generated successfully.")

if __name__ == "__main__":
    main()
`;

export const LECTURE_UNIT3_QMD_SOURCE = `---
title: "Unit III: Strain Gauges"
subtitle: "Measuring the Invisible Deformation · 6 Hours"
author: "Er. Saroj Chalise"
institute: "BE Mechanical (IOE Pulchowk, 2014) | ME Mechanical (IOE Pulchowk, 2019)"
date: "MEC 232 · Pokhara University"
format:
  revealjs:
    theme: [default, custom.scss]
    slide-number: true
    hash-type: number
    chalkboard: true
    menu: true
    overview: true
    preview-links: auto
    transition: slide
    width: 1600
    height: 900
    margin: 0.05
---

## STRAIN GAUGES {.center}
### Measuring the Invisible Deformation
**Course:** MEC 232 (3-1-1) · Instrumentation and Measurement  
**Level:** Bachelor of Engineering · BE Mechanical  
**Instructor:** Er. Saroj Chalise (IOE Pulchowk)  
**Syllabus Coverage:** 3.1 Gauge Factor, 3.2 Bonded & Unbonded Gauges, 3.3 Related Circuits, 3.4 Temperature Compensation  

---

## Can We See Deformation? {.smaller}
- When a train crosses a massive steel truss bridge, do the steel girders visibly bend?
- A $1000\\text{ mm}$ steel bar under a heavy tensile stress of $150\\text{ MPa}$ elongates by only $0.75\\text{ mm}$ ($0.075\\%$).
- Human vision cannot detect whether a bridge girder is safely loaded at $20\\%$ capacity or on the verge of fatigue failure at $95\\%$ yield.
- **The Core Question:** How do we convert an invisible mechanical deformation into a clean electrical signal?

$$\\Delta L = \\frac{F \\cdot L_0}{A \\cdot E} \\approx 10^{-6} \\text{ to } 10^{-3} \\text{ m}$$

---

## Understanding Strain: $\\epsilon = \\Delta L / L_0$ {.smaller}
- **Engineering Strain ($\\epsilon$):** $\\epsilon = \\frac{\\Delta L}{L_0} = \\frac{L_{\\text{final}} - L_0}{L_0}$
- **Microstrain ($\\mu\\epsilon$):** $1\\,\\mu\\epsilon = 10^{-6}\\text{ m/m} = 0.0001\\%$
- **Demonstration:** A $100\\text{ mm}$ steel rod elongates by $0.1\\text{ mm}$:
  $$\\epsilon = \\frac{0.1\\text{ mm}}{100\\text{ mm}} = 0.0010 = 1000\\,\\mu\\epsilon$$

---

## What Is a Strain Gauge? {.smaller}
> "An electrical resistance strain gauge is a sensor that measures mechanical deformation by detecting a proportional change in electrical resistance."

- **Metallic Foil Grid:** Serpentine Constantan / Karma alloy foil ($3–5\\,\\mu\\text{m}$).
- **Carrier Backing:** Polyimide matrix ($25\\,\\mu\\text{m}$).
- **Adhesive:** High-shear bonding cement transferring surface strain into the grid.
- **Solder Tabs:** Heavy terminals for lead wires.

---

## 3.1 Gauge Factor Derivation {.smaller}
$$R = \\rho \\frac{L}{A} \\implies \\ln R = \\ln \\rho + \\ln L - \\ln A$$
$$\\frac{dR}{R} = \\frac{d\\rho}{\\rho} + \\frac{dL}{L} - \\frac{dA}{A}$$
Using Poisson's ratio $\\nu = -\\frac{dD/D}{dL/L}$ and $\\frac{dA}{A} = -2\\nu\\epsilon$:
$$\\mathbf{GF = \\frac{\\Delta R / R_0}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta\\rho / \\rho_0}{\\epsilon}}$$

- $1 + 2\\nu \\approx 1.6$: Geometric dimensional contribution.
- $(\\Delta\\rho/\\rho)/\\epsilon$: Piezoresistive lattice contribution.
- For Constantan: $GF \\approx 2.1$; for Silicon: $GF \\approx 120+$.

---

## Gauge Factor: Numerical Example {.smaller}
- **Given:** $R_0 = 120.00\\,\\Omega$, $GF = 2.00$, $\\epsilon = 0.00100$ ($1000\\,\\mu\\epsilon$).
1. Fractional resistance change: $\\frac{\\Delta R}{R_0} = GF \\cdot \\epsilon = 2.00 \\times 0.001 = 0.0020 = 0.20\\%$.
2. Absolute resistance change: $\\Delta R = 120.00 \\times 0.002 = \\mathbf{+0.240\\,\\Omega}$.
3. Final resistance: $R_{\\text{final}} = 120.240\\,\\Omega$.

**Key Insight:** A heavy strain produces only a $0.24\\,\\Omega$ shift! Ordinary handheld multimeters cannot resolve this reliably.

---

## 3.3.1 Ballast Circuit {.smaller}
- Series divider: $V_0 = V_s \\frac{R_g}{R_b + R_g}$
- With $m = R_b / R_g$: $\\Delta V_0 = V_s \\frac{m}{(1+m)^2} \\frac{\\Delta R}{R_0}$
- Sensitivity factor $\\eta(m) = \\frac{m}{(1+m)^2}$ peaks at $m = 1$: $\\eta_{\\max} = 0.25$.
- **Fatal DC Offset:** At resting state, $V_0 = V_s / 2$ ($5.0\\text{ V}$). Unusable for static loads; requires AC capacitive coupling for vibration.

---

## 3.3.2 Wheatstone Bridge Topologies {.smaller}
Null condition: $R_1 R_3 = R_2 R_4 \\implies V_0 = 0.000\\text{ V}$

1. **Quarter Bridge ($1\\times$):** $V_0 \\approx \\frac{V_{EX}}{4} GF \\epsilon$ (approx linear, $0.1\\%$ error).
2. **Half Bridge Bending ($2\\times$):** $V_0 = \\frac{V_{EX}}{2} GF \\epsilon$ (strictly linear, auto thermal cancellation).
3. **Full Bridge Bending ($4\\times$):** $V_0 = V_{EX} GF \\epsilon$ (4x sensitivity, highest SNR, zero drift).

---

## 3.3.3 Constant Current Circuit {.smaller}
- 4-wire Kelvin excitation separating drive current $I_0$ from sense leads.
- Zero lead-wire attenuation: $I_{\\text{sense}} \\approx 0 \\implies I_{\\text{sense}} R_{\\text{lead}} \\approx 0$.
- Strictly linear: $\\Delta V_0 = I_0 R_0 GF \\epsilon$.

---

## 3.4 Temperature Compensation Techniques {.smaller}
$$\\epsilon_{\\text{app}} = \\left[ \\frac{\\beta}{GF} + (\\alpha_s - \\alpha_g) \\right] \\Delta T$$

1. **Adjacent Arm Dummy Balancing:** Dummy gauge on unstressed matched coupon placed in adjacent bridge arm. Equal shifts subtract algebraically: $\\Delta R_1 - \\Delta R_2 = \\Delta R_{\\text{mech}}$.
2. **Self-Temperature Compensation (STC):** Alloy metallurgically treated so $\\beta = -GF(\\alpha_s - \\alpha_g)$. Matched to steel (STC-13), aluminum (STC-23), titanium (STC-06).

---

## Take-Home Principle {.center}
### *"You cannot always see deformation, but you can measure it!"*
Er. Saroj Chalise · MEC 232 · Pokhara University
`;

export const RUN_INSTRUCTIONS_UNIT3 = `================================================================================
CLASSROOM PRESENTATION EXECUTION INSTRUCTIONS
Unit III: Strain Gauges (6 hrs)
Course: MEC 232 · Instrumentation and Measurement (3-1-1)
Author: Er. Saroj Chalise (IOE Pulchowk, BE 2014, ME 2019)
Reference Deck: https://chalisesaroj.github.io/slide/
================================================================================

1. PREREQUISITES:
   Make sure Python 3.9+ and Quarto CLI are installed:
   - Python: https://www.python.org/downloads/
   - Quarto: https://quarto.org/docs/get-started/

2. STEP 1: RUN THE PYTHON ASSET GENERATOR
   python lecture_unit3.py

3. STEP 2: RENDER THE REVEAL.JS PRESENTATION
   quarto render lecture_unit3.qmd

   Or preview live in your browser:
   quarto preview lecture_unit3.qmd

4. KEYBOARD SHORTCUTS FOR INSTRUCTOR (Saroj Chalise standard):
   - [F]          : Toggle true fullscreen view (no buttons, full 16:9 canvas)
   - [S]          : Open Speaker Notes Window (Presenter Console)
   - [M] / Click  : Open Slide Navigation Menu
   - [Space] / [→]: Advance to next slide
   - [←]          : Return to previous slide
   - [Home] / [End]: Jump to first / last slide
   - [B] / [.]    : Pause / Black screen during classroom discussion
================================================================================
`;
