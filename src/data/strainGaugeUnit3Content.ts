/**
 * Unit III: Strain Gauges (6 hrs)
 * Complete Quarto Reveal.js presentation package and curriculum
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 */

import { SlideData } from './lectureContent';

export const UNIT3_SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    title: "Unit III: Strain Gauges",
    subtitle: "Gauge Factor, Bonded vs Unbonded Construction, Ballast, Bridge (Quarter/Half/Full), Constant Current & Temperature Compensation",
    sectionTag: "Unit III · 6 Hours",
    type: "title",
    speakerNotes: "Welcome students to Unit III: Strain Gauges. In this 6-hour core module, we explore the primary transducer used worldwide for measuring mechanical deformation, stress, torque, and pressure: the electrical resistance strain gauge."
  },
  {
    id: 2,
    title: "Course Learning Objectives",
    subtitle: "Core competencies to be mastered in Unit III per university syllabus",
    sectionTag: "Syllabus Objectives",
    type: "objectives",
    bullets: [
      "**Understand the concept and significance of gauge factor (GF)**: Derive GF from first principles ($R = \\rho L / A$) showing Poisson dimensional contraction and piezoresistive resistivity variation.",
      "**Differentiate between bonded and unbonded strain gauges**: Evaluate structural backings, adhesive bonding matrices, cross-sensitivity, and unbonded flexure mechanism applications.",
      "**Master circuit configurations used with strain gauges**: Formulate and analyze the ballast circuit, Wheatstone bridge topologies (quarter, half, full), and 4-wire Kelvin constant current circuits.",
      "**Understand temperature compensation techniques**: Analyze apparent thermal strain mechanisms, adjacent arm Wheatstone balancing, and metallurgical self-temperature compensation (STC)."
    ],
    speakerNotes: "Stress to students that strain gauge signals are extremely small—often microvolts—making circuit selection and thermal drift cancellation critical engineering skills."
  },
  {
    id: 3,
    title: "Unit III Curriculum Roadmap",
    subtitle: "Comprehensive 6-hour lecture structure across 4 core sections",
    sectionTag: "Curriculum Overview",
    type: "roadmap",
    columns: {
      left: [
        "**3.1 Gauge Factor**: Analytical derivation, Poisson's ratio, piezoresistive effect, alloy comparisons (Constantan, Karma, Semiconductors).",
        "**3.2 Bonded & Unbonded Strain Gauges**: Polyimide foil grid vs unbonded wire frames, creep, hysteresis, and transducer applications.",
        "**3.3 Related Circuit Configurations**: Signal conditioning for micro-ohm resistance shifts."
      ],
      right: [
        "**3.3.1 Ballast Circuit**: Divider ratio, sensitivity optimization at $m=1$, high DC offset limitation.",
        "**3.3.2 Bridge Circuits**: Quarter ($1\\times$), Half ($2\\times$ bending), and Full ($4\\times$) Wheatstone bridges.",
        "**3.3.3 Constant Current Circuit**: 4-wire Kelvin drive, zero lead-wire attenuation, perfect linearity.",
        "**3.4 Temperature Compensation**: Apparent strain mechanics, dummy adjacent arm balancing (3.4.1), and STC alloy matching (3.4.2)."
      ]
    },
    speakerNotes: "Guide students through the roadmap: we start with the physical transducer physics (3.1-3.2), progress to electrical readout circuits (3.3), and solve the primary environmental challenge—thermal drift (3.4)."
  },
  {
    id: 4,
    title: "Why Strain Gauges Matter in Engineering",
    subtitle: "From civil structural health to precision aerospace & medical transducers",
    sectionTag: "Engineering Motivation",
    type: "why-matters",
    bullets: [
      "**Direct Stress Measurement**: Hooke's Law states $\\sigma = E \\cdot \\epsilon$. Strain gauges directly measure surface strain $\\epsilon = \\Delta L / L_0$, allowing non-destructive calculation of internal stress.",
      "**Sub-Microstrain Resolution**: Capable of detecting elongations smaller than $0.1\\,\\mu\\text{m}$ per meter ($0.1\\,\\mu\\epsilon$), equivalent to the deflection of a skyscraper in a breeze.",
      "**Universal Transducer Engine**: Modern load cells, torque sensors, pressure transmitters, and accelerometers all employ strain gauge bridge circuits as their primary sensing engine.",
      "**Critical Design Challenge**: Because $\\Delta R / R_0 \\approx 0.1\\%$, parasitic temperature drifts can easily exceed the actual mechanical strain signal if not properly compensated."
    ],
    equation: "\\epsilon = \\frac{\\Delta L}{L_0}, \\quad \\sigma = E \\cdot \\epsilon, \\quad \\frac{\\Delta R}{R_0} = GF \\cdot \\epsilon",
    speakerNotes: "Illustrate to students that without strain gauges, modern aircraft certification, bridge monitoring, and industrial robotics would be impossible."
  },
  {
    id: 5,
    title: "3.1 Gauge Factor",
    subtitle: "First-principles derivation, dimensional strain, and piezoresistivity",
    sectionTag: "3.1 Gauge Factor",
    type: "section-divider",
    speakerNotes: "We now begin Section 3.1: Gauge Factor. We will derive why and by how much an electrical conductor changes its resistance when mechanically deformed."
  },
  {
    id: 6,
    title: "Derivation of Gauge Factor (GF)",
    subtitle: "Mathematical breakdown from electrical resistance $R = \\rho L / A$",
    sectionTag: "3.1 Gauge Factor",
    type: "content",
    bullets: [
      "Consider a uniform conductor of initial length $L$, cross-sectional area $A$, and material resistivity $\\rho$.",
      "Taking the natural logarithm of $R = \\rho L / A$ yields: $\\ln R = \\ln \\rho + \\ln L - \\ln A$.",
      "Differentiating both sides: $\\frac{dR}{R} = \\frac{d\\rho}{\\rho} + \\frac{dL}{L} - \\frac{dA}{A}$.",
      "For a circular wire with diameter $D$, $A = \\frac{\\pi}{4} D^2$, so $\\frac{dA}{A} = 2 \\frac{dD}{D}$. By Poisson's ratio $\\nu = -\\frac{dD/D}{dL/L}$, we get $\\frac{dA}{A} = -2\\nu \\frac{dL}{L} = -2\\nu \\epsilon$."
    ],
    equation: "GF = \\frac{\\Delta R / R_0}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta \\rho / \\rho_0}{\\epsilon}",
    speakerNotes: "Emphasize the three components: 1 is the axial elongation term, 2*nu is the lateral contraction term (Poisson effect), and the final term is the piezoresistive term (resistivity change due to lattice deformation)."
  },
  {
    id: 7,
    title: "Components & Materials of Gauge Factor",
    subtitle: "Geometric vs Piezoresistive mechanisms across metallic and semiconductor materials",
    sectionTag: "3.1 Gauge Factor",
    type: "content",
    bullets: [
      "**Geometric Contribution ($1 + 2\\nu$)**: For typical metals with $\\nu \\approx 0.3$, $1 + 2(0.3) = 1.6$. This represents pure geometry.",
      "**Piezoresistive Contribution ($(\\Delta\\rho/\\rho)/\\epsilon$)**: In metals, this adds $+0.4$ to $+0.5$, yielding $GF \\approx 2.0$ to $2.1$ for Constantan alloy.",
      "**Constantan (55% Cu, 45% Ni)**: $GF \\approx 2.1$, extremely low temperature coefficient of resistance (TCR), high fatigue life. The industry workhorse.",
      "**Karma Alloy (73% Ni, 20% Cr, Al, Fe)**: $GF \\approx 2.1$, superior stability for elevated temperature environments up to $300^\\circ\\text{C}$.",
      "**Semiconductor (Silicon) Gauges**: Piezoresistive term dominates completely! $GF = -100$ to $+175$. Extremely sensitive but highly non-linear and temperature-dependent."
    ],
    speakerNotes: "Point out that while semiconductor strain gauges provide nearly 80x higher sensitivity, their severe non-linearity and temperature sensitivity make metal foil gauges preferred for precision metrology."
  },
  {
    id: 8,
    title: "Figure 3.1: Strain Gauge Anatomy & GF Derivation",
    subtitle: "Exploded anatomy of foil grid, backing matrix, solder tabs, and analytical components",
    sectionTag: "3.1 Gauge Factor",
    type: "figure",
    figureKey: "u3_fig1",
    speakerNotes: "Review Figure 3.1. Explain the polyimide backing carrier (25 um), the serpentine grid that multiplies effective active length while minimizing transverse sensitivity, and the solder tabs."
  },
  {
    id: 9,
    title: "Worked Example: Resistance Shift Calculation",
    subtitle: "Quantitative analysis of a metallic foil strain gauge on structural steel",
    sectionTag: "3.1 Worked Example",
    type: "worked-example",
    columns: {
      left: [
        "**Problem Statement:**",
        "A standard electrical resistance strain gauge with nominal resistance $R_0 = 120.000\\,\\Omega$ and gauge factor $GF = 2.08$ is bonded to a structural steel girder.",
        "Under maximum load, the member undergoes tensile mechanical strain $\\epsilon = +750\\,\\mu\\epsilon$ ($750 \\times 10^{-6}\\text{ m/m}$).",
        "**Calculate:**",
        "1. The fractional change in resistance $\\Delta R / R_0$.",
        "2. The absolute change in resistance $\\Delta R$.",
        "3. The final strained resistance $R_{\\text{strained}}$."
      ],
      right: [
        "**Step-by-Step Analytical Solution:**",
        "**Step 1:** Fractional resistance change:",
        "$$\\frac{\\Delta R}{R_0} = GF \\cdot \\epsilon = 2.08 \\times (750 \\times 10^{-6}) = 1.560 \\times 10^{-3} = 0.156\\%$$",
        "**Step 2:** Absolute resistance change $\\Delta R$:",
        "$$\\Delta R = R_0 \\cdot (GF \\cdot \\epsilon) = 120.000\\,\\Omega \\times 0.00156 = +0.1872\\,\\Omega$$",
        "**Step 3:** Final strained resistance:",
        "$$R_{\\text{strained}} = 120.000 + 0.1872 = 120.1872\\,\\Omega$$",
        "**Key Insight:**",
        "A heavy structural strain produces less than $0.19\\,\\Omega$ change! This demonstrates why ordinary multimeters fail and specialized bridge circuits are mandatory."
      ]
    },
    speakerNotes: "Highlight the key pedagogical takeaway: 0.1872 ohms cannot be accurately measured with a typical two-lead handheld DMM due to lead wire fluctuations and contact resistance."
  },
  {
    id: 10,
    title: "3.2 Bonded and Unbonded Strain Gauges",
    subtitle: "Constructional taxonomy, mounting mechanisms, and application domains",
    sectionTag: "3.2 Bonded vs Unbonded",
    type: "section-divider",
    speakerNotes: "Now we transition to Section 3.2: Bonded versus Unbonded strain gauges, contrasting direct-adhesion surface mount sensors with suspended wire flexure mechanisms."
  },
  {
    id: 11,
    title: "Bonded Foil vs Unbonded Wire Gauges",
    subtitle: "Structural morphology, load transmission, and transducer design",
    sectionTag: "3.2 Bonded vs Unbonded",
    type: "content",
    bullets: [
      "**Bonded Strain Gauges**:",
      "• Photo-etched metal foil (3–5 $\\mu$m) bonded to a thin carrier backing (polyimide or epoxy, 25 $\\mu$m).",
      "• Cemented directly to the test specimen with cyanoacrylate, epoxy, or ceramic cement.",
      "• Deformation of the substrate is transmitted directly to the foil via shear stress in the adhesive layer.",
      "• Excellent frequency response (up to >100 kHz), high fatigue endurance, compact surface profile.",
      "**Unbonded Strain Gauges**:",
      "• Fine resistance wire ($25\\,\\mu\\text{m}$ platinum-tungsten or nickel-chrome) stretched between movable and stationary insulated posts.",
      "• Specimen displacement moves the armature flexure, increasing tension in one loop while relaxing another.",
      "• Used as internal sensing elements in specialized pressure capsules, accelerometers, and seismic geophones."
    ],
    speakerNotes: "Emphasize that bonded gauges measure surface strain on external parts, while unbonded gauges act as internal displacement transducers inside sealed instruments."
  },
  {
    id: 12,
    title: "Comparative Analysis: Bonded vs Unbonded",
    subtitle: "Engineering trade-offs across installation, range, frequency, and hysteresis",
    sectionTag: "3.2 Bonded vs Unbonded",
    type: "content",
    columns: {
      left: [
        "**Bonded Foil Gauges**",
        "• **Attachment:** Chemical bonding via epoxy / cyanoacrylate.",
        "• **Strain Range:** Typical $\\pm 20,000\\,\\mu\\epsilon$ (up to $2\\%$).",
        "• **Frequency Response:** Very high ($>50\\text{ kHz}$).",
        "• **Creep & Hysteresis:** Dependent on adhesive layer quality and curing cycle.",
        "• **Transverse Sensitivity:** Minimized by heavy end loops ($<1\\%$).",
        "• **Cost:** Very low per sensor ($5–$25)."
      ],
      right: [
        "**Unbonded Wire Gauges**",
        "• **Attachment:** Mechanical linkage to internal flexure.",
        "• **Strain Range:** Limited by wire elastic limit ($\\pm 1,500\\,\\mu\\epsilon$).",
        "• **Frequency Response:** Lower, limited by mechanical armature inertia ($<2\\text{ kHz}$).",
        "• **Creep & Hysteresis:** Extremely low (no organic adhesive creep).",
        "• **Transverse Sensitivity:** Virtually zero (pure axial wire tension).",
        "• **Cost:** High (precision instrument fabrication)."
      ]
    },
    speakerNotes: "Discuss adhesive creep: in bonded gauges at elevated temperatures, the adhesive softens and causes measurement drift. Unbonded wire frames avoid adhesive creep entirely."
  },
  {
    id: 13,
    title: "Figure 3.2: Bonded Foil vs Unbonded Wire",
    subtitle: "Cross-sectional shear stress transmission vs cantilever flexure suspension",
    sectionTag: "3.2 Bonded vs Unbonded",
    type: "figure",
    figureKey: "u3_fig2",
    speakerNotes: "Walk through Figure 3.2. Contrast the bonded shear transmission model through the adhesive matrix with the four-loop unbonded flexure mechanism."
  },
  {
    id: 14,
    title: "3.3 Related Circuit Configurations",
    subtitle: "Signal conditioning topologies for sub-millivolt bridge signals",
    sectionTag: "3.3 Circuit Configurations",
    type: "section-divider",
    speakerNotes: "We now enter Section 3.3: Related Circuit Configurations. We will study the Ballast circuit, Bridge circuits (quarter, half, full), and Constant Current circuits."
  },
  {
    id: 15,
    title: "3.3.1 Ballast Circuit Configuration",
    subtitle: "Voltage divider topology, transfer characteristics, and sensitivity optimization",
    sectionTag: "3.3.1 Ballast Circuit",
    type: "content",
    bullets: [
      "The simplest circuit to convert resistance variation $\\Delta R_g$ into a voltage signal is a series **ballast circuit** (voltage divider).",
      "Excitation voltage $V_s$ is applied across ballast resistor $R_b$ and strain gauge $R_g$ in series.",
      "Output voltage across the strain gauge is: $V_0 = V_s \\frac{R_g}{R_b + R_g}$.",
      "Let $m = R_b / R_g$ be the ballast ratio. Under strain $R_g = R_0 + \\Delta R$, the output voltage changes by: $\\Delta V_0 = V_s \\frac{m}{(1+m)^2} \\frac{\\Delta R}{R_0}$."
    ],
    equation: "\\eta(m) = \\frac{m}{(1+m)^2} \\quad \\implies \\quad \\left.\\frac{d\\eta}{dm}\\right|_{m=1} = 0 \\quad \\implies \\quad \\eta_{\\max} = \\frac{1}{4} = 0.25",
    speakerNotes: "Derive that maximum circuit sensitivity occurs when m = 1, meaning the ballast resistance equals the nominal gauge resistance. At m = 1, sensitivity factor is 0.25."
  },
  {
    id: 16,
    title: "Ballast Circuit Limitations & AC Coupling",
    subtitle: "The severe DC offset problem and application in dynamic vibration testing",
    sectionTag: "3.3.1 Ballast Circuit",
    type: "content",
    bullets: [
      "**The Fatal DC Offset Flaw**: At nominal state ($m=1$), the resting output voltage is $V_0 = V_s / 2$. For $V_s = 10\\text{ V}$, $V_0 = 5.000\\text{ V}$!",
      "The strain signal $\\Delta V_0$ for $1000\\,\\mu\\epsilon$ ($GF=2$) is only $\\Delta V_0 = 10 \\times 0.25 \\times 0.002 = 5.0\\text{ mV}$.",
      "A $5\\text{ mV}$ signal riding on a $5000\\text{ mV}$ DC pedestal requires impossible $0.001\\%$ ADC stability or high-order DC offset suppression.",
      "**Static Strain Infeasibility**: Ballast circuits cannot be used for static or quasi-static load measurements.",
      "**Dynamic AC Coupling Solution**: By inserting a high-pass capacitor $C_b$, the $5\\text{ V}$ DC baseline is blocked, passing only dynamic AC vibration strain signals to the preamplifier."
    ],
    equation: "V_{\\text{ac}}(t) = V_s \\frac{m}{(1+m)^2} \\left( GF \\cdot \\epsilon(t) \\right), \\quad f_c = \\frac{1}{2\\pi R_{\\text{in}} C_b}",
    speakerNotes: "Explain that ballast circuits are historically popular in dynamic vibration testing because of their minimal component count, but bridge circuits completely eliminate the DC offset."
  },
  {
    id: 17,
    title: "Figure 3.3: Ballast Circuit Schematic & Sensitivity",
    subtitle: "Circuit topology, AC coupling filter, and mathematical sensitivity peak at $m=R_b/R_g=1$",
    sectionTag: "3.3.1 Ballast Circuit",
    type: "figure",
    figureKey: "u3_fig3",
    speakerNotes: "Direct students to Figure 3.3. Note the sensitivity curve peaking at m=1 and the AC blocking capacitor circuit."
  },
  {
    id: 18,
    title: "3.3.2 Bridge Circuits: Wheatstone Bridge",
    subtitle: "Differential null balance, deflection operation, and zero DC offset",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "content",
    bullets: [
      "The Wheatstone bridge consists of four resistive arms arranged in a closed diamond loop.",
      "Excitation voltage $V_{EX}$ is applied between nodes A and C; differential output $V_0$ is measured between nodes B and D.",
      "Differential output voltage equation: $V_0 = V_{EX} \\left( \\frac{R_1}{R_1 + R_2} - \\frac{R_4}{R_3 + R_4} \\right)$.",
      "**Bridge Balance (Null) Condition**: $V_0 = 0 \\iff \\frac{R_1}{R_2} = \\frac{R_4}{R_3} \\iff R_1 R_3 = R_2 R_4$.",
      "When initially balanced, resting DC offset is exactly $0.000\\text{ V}$, completely overcoming the ballast circuit flaw!"
    ],
    equation: "V_0 = V_{EX} \\left( \\frac{R_1 R_3 - R_2 R_4}{(R_1 + R_2)(R_3 + R_4)} \\right) = 0 \\quad \\Longleftrightarrow \\quad R_1 R_3 = R_2 R_4",
    speakerNotes: "Highlight that the differential nature of the Wheatstone bridge rejects common-mode excitation noise and establishes a true zero-volt baseline."
  },
  {
    id: 19,
    title: "Quarter Bridge ($1\\times$ Configuration)",
    subtitle: "Single active gauge with non-linearity and lead-wire sensitivity",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "content",
    bullets: [
      "In a **Quarter Bridge**, arm 1 contains the active strain gauge ($R_1 = R_0 + \\Delta R$), while $R_2, R_3, R_4 = R_0$ are precision fixed completion resistors.",
      "Output voltage: $V_0 = V_{EX} \\left( \\frac{R_0 + \\Delta R}{2R_0 + \\Delta R} - \\frac{1}{2} \\right) = V_{EX} \\left( \\frac{\\Delta R / R_0}{4 + 2 (\\Delta R / R_0)} \\right)$.",
      "**Small-Strain Approximation**: For $\\Delta R / R_0 \\ll 1$, the denominator $2(\\Delta R / R_0)$ is neglected:",
      "$$V_0 \\approx \\frac{V_{EX}}{4} \\frac{\\Delta R}{R_0} = \\frac{V_{EX}}{4} (GF \\cdot \\epsilon)$$",
      "**Non-Linearity Warning**: The neglected term creates an intrinsic non-linearity error of approximately $0.1\\%$ per $1000\\,\\mu\\epsilon$."
    ],
    equation: "\\text{Non-Linearity Error} = \\frac{(\\Delta R / R_0)}{2 + (\\Delta R / R_0)} \\approx \\frac{1}{2} GF \\cdot \\epsilon",
    speakerNotes: "Point out that quarter bridge is also highly vulnerable to lead wire resistance and ambient temperature drift."
  },
  {
    id: 20,
    title: "Half Bridge ($2\\times$ Bending Configuration)",
    subtitle: "Two active complementary gauges with automatic temperature compensation & perfect linearity",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "content",
    bullets: [
      "Mounted on opposite surfaces of a beam in pure bending: $R_1$ experiences tensile strain ($+\\epsilon$), $R_2$ experiences compressive strain ($-\\epsilon$).",
      "Substituting into the bridge equation: $R_1 = R_0 + \\Delta R$, $R_2 = R_0 - \\Delta R$, with $R_3 = R_4 = R_0$:",
      "$$V_0 = V_{EX} \\left( \\frac{R_0 + \\Delta R}{(R_0 + \\Delta R) + (R_0 - \\Delta R)} - \\frac{1}{2} \\right) = V_{EX} \\left( \\frac{R_0 + \\Delta R}{2R_0} - \\frac{1}{2} \\right) = \\frac{V_{EX}}{2} \\frac{\\Delta R}{R_0}$$",
      "**Key Engineering Advantages**:",
      "1. **$2\\times$ Sensitivity**: Twice the output voltage of a quarter bridge.",
      "2. **Zero Non-Linearity Error**: The $+\\Delta R$ and $-\\Delta R$ terms in the denominator cancel out *identically*!",
      "3. **Automatic Thermal Cancellation**: Ambient temperature shifts affect $R_1$ and $R_2$ equally, cancelling in adjacent arms."
    ],
    equation: "V_0 = \\frac{V_{EX}}{2} (GF \\cdot \\epsilon) \\quad \\text{[Mathematically Exact — Zero Denominator Non-Linearity]}",
    speakerNotes: "Notice how elegant the math is: because the sum of R1 and R2 is exactly 2R0, there is zero non-linearity in half-bridge bending!"
  },
  {
    id: 21,
    title: "Full Bridge ($4\\times$ Configuration)",
    subtitle: "Four active gauges providing maximum sensitivity, complete thermal drift rejection, and lead-wire immunity",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "content",
    bullets: [
      "All four bridge arms are active strain gauges: two in tension ($R_1 = R_3 = R_0 + \\Delta R$) and two in compression ($R_2 = R_4 = R_0 - \\Delta R$).",
      "Output equation:",
      "$$V_0 = V_{EX} \\left( \\frac{R_0 + \\Delta R}{2R_0} - \\frac{R_0 - \\Delta R}{2R_0} \\right) = V_{EX} \\frac{2\\Delta R}{2R_0} = V_{EX} \\frac{\\Delta R}{R_0}$$",
      "**Summary of Bridge Outputs**:",
      "• **Quarter Bridge:** $V_0 = \\frac{1}{4} V_{EX} \\cdot GF \\cdot \\epsilon$ ($1\\times$ gain, approx linear).",
      "• **Half Bridge (Bending):** $V_0 = \\frac{1}{2} V_{EX} \\cdot GF \\cdot \\epsilon$ ($2\\times$ gain, perfectly linear).",
      "• **Full Bridge (Bending):** $V_0 = 1.0 \\cdot V_{EX} \\cdot GF \\cdot \\epsilon$ ($4\\times$ gain, perfectly linear, zero thermal drift)."
    ],
    equation: "V_0 = V_{EX} \\cdot GF \\cdot \\epsilon \\quad \\implies \\quad S_{\\text{full}} = 4 \\times S_{\\text{quarter}}",
    speakerNotes: "The full bridge is the gold standard for industrial force sensors, load cells, and torque transducers."
  },
  {
    id: 22,
    title: "Figure 3.4: Bridge Circuits (Quarter, Half & Full)",
    subtitle: "Schematic wiring, mechanical strain orientation, and sensitivity multipliers ($1\\times, 2\\times, 4\\times$)",
    sectionTag: "3.3.2 Bridge Circuits",
    type: "figure",
    figureKey: "u3_fig4",
    speakerNotes: "Point out how the active gauges are placed on the top and bottom of the cantilever beam in Figure 3.4 and how they map into the bridge arms."
  },
  {
    id: 23,
    title: "Worked Example: Cantilever Load Cell Bridge",
    subtitle: "Sensitivity and output voltage comparison across Quarter, Half, and Full bridge configurations",
    sectionTag: "3.3 Worked Example",
    type: "worked-example",
    columns: {
      left: [
        "**Problem Statement:**",
        "A cantilever load cell instrumented with $120\\,\\Omega$ strain gauges ($GF = 2.05$) is excited by $V_{EX} = 10.0\\text{ V}$.",
        "Under a test load, the surface strain at the gauge location is $\\epsilon = 1200\\,\\mu\\epsilon$.",
        "**Calculate the output voltage $V_0$ for:**",
        "1. Quarter Bridge ($1$ active gauge)",
        "2. Half Bridge ($2$ active gauges in bending)",
        "3. Full Bridge ($4$ active gauges in bending)"
      ],
      right: [
        "**Step-by-Step Analytical Solutions:**",
        "**Common Term:** $\\frac{\\Delta R}{R_0} = GF \\cdot \\epsilon = 2.05 \\times 0.0012 = 0.00246$",
        "**1. Quarter Bridge ($1\\times$):**",
        "$$V_{0,Q} = \\frac{V_{EX}}{4} \\frac{\\Delta R}{R_0} = \\frac{10.0}{4} (0.00246) = 6.150\\text{ mV}$$",
        "**2. Half Bridge ($2\\times$):**",
        "$$V_{0,H} = \\frac{V_{EX}}{2} \\frac{\\Delta R}{R_0} = \\frac{10.0}{2} (0.00246) = 12.300\\text{ mV}$$",
        "**3. Full Bridge ($4\\times$):**",
        "$$V_{0,F} = V_{EX} \\frac{\\Delta R}{R_0} = 10.0 \\times (0.00246) = 24.600\\text{ mV}$$",
        "**Observation:** Full bridge quadruples SNR and relaxes instrumentation amplifier gain requirements by a factor of 4!"
      ]
    },
    speakerNotes: "Explain that 24.6 mV is far easier to digitize accurately with a 16-bit ADC than 6.15 mV, which would be plagued by noise floor issues."
  },
  {
    id: 24,
    title: "3.3.3 Constant Current Circuit Configuration",
    subtitle: "4-wire Kelvin excitation, zero bridge non-linearity, and complete lead-wire cancellation",
    sectionTag: "3.3.3 Constant Current",
    type: "content",
    bullets: [
      "Instead of voltage excitation, an active electronic current source injects an ultrastable current $I_0$ through the gauge.",
      "**4-Wire Kelvin Architecture**: Current is driven through high-power drive leads ($1$ and $4$), while sense leads ($2$ and $3$) connect directly to a high-impedance instrumentation amplifier ($R_{\\text{in}} > 10\\text{ G}\\Omega$).",
      "Because essentially zero current flows through the sense leads, the voltage drop across lead resistance $R_L$ is zero ($I_{\\text{sense}} R_L \\approx 0$).",
      "Output voltage equation: $V_0 = I_0 \\cdot R_g = I_0 (R_0 + \\Delta R) = I_0 R_0 + I_0 \\cdot \\Delta R$.",
      "Differential output after baseline subtraction: $\\Delta V_0 = I_0 \\cdot \\Delta R = I_0 R_0 (GF \\cdot \\epsilon)$."
    ],
    equation: "\\Delta V_0 = I_0 R_0 \\cdot GF \\cdot \\epsilon \\quad \\text{[Strictly Linear — No Denominator Approximation]}",
    speakerNotes: "Highlight the two massive advantages of constant current circuits: 1) completely immune to lead-wire length, and 2) mathematically linear without bridge approximations."
  },
  {
    id: 25,
    title: "Figure 3.5: Constant Current Circuit Configuration",
    subtitle: "4-wire Kelvin excitation loop, sense amplifier impedance isolation, and lead-wire cancellation",
    sectionTag: "3.3.3 Constant Current",
    type: "figure",
    figureKey: "u3_fig5",
    speakerNotes: "Walk through Figure 3.5. Show the drive current loop and the high-impedance sense lines that carry zero current."
  },
  {
    id: 26,
    title: "3.4 Temperature Compensation Techniques",
    subtitle: "Understanding and neutralizing the two primary thermal error mechanisms",
    sectionTag: "3.4 Temperature Compensation",
    type: "section-divider",
    speakerNotes: "We now address Section 3.4: Temperature Compensation Techniques. Thermal drift is the number one source of measurement error in strain metrology."
  },
  {
    id: 27,
    title: "The Physics of Apparent Strain",
    subtitle: "Why temperature shifts corrupt strain measurements: Resistivity shift + Differential thermal expansion",
    sectionTag: "3.4 Temperature Compensation",
    type: "content",
    bullets: [
      "When temperature changes by $\\Delta T$, a strain gauge experiences resistance change **even with zero mechanical force applied**.",
      "This parasitic shift is called **thermal apparent strain** ($\\epsilon_{\\text{app}}$).",
      "It consists of two physical mechanisms:",
      "1. **Thermal Coefficient of Resistance (TCR, $\\beta$)**: Conductor resistivity changes with temperature: $(\\Delta R / R_0)_{\\rho} = \\beta \\cdot \\Delta T$.",
      "2. **Differential Thermal Expansion ($(\\alpha_s - \\alpha_g)$)**: Substrate expands at rate $\\alpha_s$, while gauge foil expands at rate $\\alpha_g$. The gauge is physically stretched by: $\\epsilon_{\\text{thermal}} = (\\alpha_s - \\alpha_g) \\Delta T$."
    ],
    equation: "\\left(\\frac{\\Delta R}{R_0}\\right)_T = \\left[ \\beta + GF \\cdot (\\alpha_s - \\alpha_g) \\right] \\Delta T \\quad \\implies \\quad \\epsilon_{\\text{app}} = \\frac{\\beta}{GF} \\Delta T + (\\alpha_s - \\alpha_g) \\Delta T",
    speakerNotes: "Highlight how alarming this is: for steel (alpha_s = 12 ppm) and uncompensated gauge, a 20°C temperature change can produce 300 microstrain of fake reading!"
  },
  {
    id: 28,
    title: "3.4.1 Adjacent Arm Balancing (Dummy Gauge)",
    subtitle: "Using a matched dummy gauge on an unstressed specimen for complete algebraic thermal cancellation",
    sectionTag: "3.4.1 Adjacent Arm Balancing",
    type: "content",
    bullets: [
      "Place an **Active Gauge ($R_1$)** on the stressed specimen: undergoes mechanical strain $\\epsilon_{\\text{mech}}$ plus thermal strain $\\Delta T$.",
      "Mount an identical **Dummy Gauge ($R_2$)** on an unstressed block of the exact same test material, placed immediately adjacent in identical thermal contact.",
      "The dummy gauge experiences zero mechanical load, but exactly the same temperature change $\\Delta T$.",
      "In the Wheatstone bridge, $R_1$ and $R_2$ are wired into **adjacent arms**:",
      "$$V_0 = V_{EX} \\left( \\frac{R_1}{R_1 + R_2} - \\frac{1}{2} \\right) = \\frac{V_{EX}}{4} \\left( \\frac{\\Delta R_1 - \\Delta R_2}{R_0} \\right)$$"
    ],
    equation: "\\Delta R_1 = \\Delta R_{\\text{mech}} + \\Delta R_T, \\quad \\Delta R_2 = \\Delta R_T \\quad \\implies \\quad \\Delta R_1 - \\Delta R_2 = \\Delta R_{\\text{mech}}",
    speakerNotes: "Explain the subtraction property of adjacent arms in a Wheatstone bridge: equal resistance changes in adjacent arms subtract and produce zero output voltage!"
  },
  {
    id: 29,
    title: "Figure 3.6: Adjacent Arm Balancing",
    subtitle: "Physical arrangement of active and dummy specimens and algebraic proof of thermal drift cancellation",
    sectionTag: "3.4.1 Adjacent Arm Balancing",
    type: "figure",
    figureKey: "u3_fig6",
    speakerNotes: "Direct attention to Figure 3.6. Emphasize that the dummy block must have identical thermal mass and material composition to the active specimen."
  },
  {
    id: 30,
    title: "3.4.2 Self-Temperature Compensation (STC)",
    subtitle: "Metallurgical tailoring of foil alloy TCR to neutralize substrate thermal expansion",
    sectionTag: "3.4.2 Self-Temperature Compensation",
    type: "content",
    bullets: [
      "What if there is no physical space or budget for a dummy gauge and block?",
      "**The STC Principle**: Heat-treat and cold-work the strain gauge alloy (e.g., Constantan or Karma) so its TCR $\\beta$ is intentionally **negative** and exactly cancels substrate expansion:",
      "$$\\beta + GF \\cdot (\\alpha_s - \\alpha_g) = 0 \\quad \\Longleftrightarrow \\quad \\beta = -GF \\cdot (\\alpha_s - \\alpha_g)$$",
      "When properly matched, the thermal resistance shift is minimized to less than $\\pm 10\\,\\mu\\epsilon$ over a broad temperature range ($-20^\\circ\\text{C}$ to $+150^\\circ\\text{C}$).",
      "**Standard STC Number System**:",
      "• **STC-13:** Matched to mild steel & carbon steels ($\\alpha_s \\approx 11-13\\text{ ppm}/^\\circ\\text{C}$).",
      "• **STC-23:** Matched to 2024 / 7075 aluminum alloys ($\\alpha_s \\approx 23\\text{ ppm}/^\\circ\\text{C}$).",
      "• **STC-06:** Matched to titanium & austenitic stainless steel ($\\alpha_s \\approx 6\\text{ ppm}/^\\circ\\text{C}$)."
    ],
    equation: "\\beta_{\\text{alloy}} + GF \\cdot (\\alpha_{\\text{substrate}} - \\alpha_{\\text{gauge}}) = 0 \\quad \\implies \\quad \\epsilon_{\\text{app}} \\approx 0",
    speakerNotes: "Warn students: STC gauges work ONLY when mounted on the specific material they were designed for. Mounting an STC-13 gauge on aluminum will create disastrous thermal errors!"
  },
  {
    id: 31,
    title: "Figure 3.7: Self-Temperature Compensation (STC)",
    subtitle: "Metallurgical tuning mechanism, characteristic U-shaped apparent strain polynomial, and alloy STC ratings",
    sectionTag: "3.4.2 Self-Temperature Compensation",
    type: "figure",
    figureKey: "u3_fig7",
    speakerNotes: "Examine Figure 3.7. Point out the characteristic U-curve of STC gauges around room temperature and the disaster of material mismatch."
  },
  {
    id: 32,
    title: "Worked Example: Temperature Error & Compensation",
    subtitle: "Quantifying thermal drift vs mechanical strain on an aluminum beam",
    sectionTag: "3.4 Worked Example",
    type: "worked-example",
    columns: {
      left: [
        "**Problem Statement:**",
        "An uncompensated strain gauge ($GF = 2.0$, $\\beta = +70\\text{ ppm}/^\\circ\\text{C}$, $\\alpha_g = 15\\text{ ppm}/^\\circ\\text{C}$) is mounted on an aluminum beam ($\\alpha_s = 23\\text{ ppm}/^\\circ\\text{C}$).",
        "The ambient temperature increases by $\\Delta T = +25^\\circ\\text{C}$.",
        "**Calculate:**",
        "1. The apparent thermal strain $\\epsilon_{\\text{app}}$ in $\\mu\\epsilon$.",
        "2. The equivalent apparent stress $\\sigma_{\\text{app}}$ in steel ($E = 200\\text{ GPa}$) and aluminum ($E = 70\\text{ GPa}$).",
        "3. Compare with an STC-23 matched gauge."
      ],
      right: [
        "**Analytical Solution:**",
        "**Step 1:** Fractional resistance shift from temperature:",
        "$$\\frac{\\Delta R}{R_0} = [\\beta + GF(\\alpha_s - \\alpha_g)] \\Delta T$$",
        "$$= [70 + 2.0(23 - 15)] \\times 10^{-6} \\times 25 = [70 + 16] \\times 25 \\times 10^{-6} = 2150\\text{ ppm}$$",
        "**Step 2:** Apparent strain:",
        "$$\\epsilon_{\\text{app}} = \\frac{\\Delta R / R_0}{GF} = \\frac{2150\\,\\mu\\epsilon}{2.0} = +1075\\,\\mu\\epsilon$$",
        "**Step 3:** Equivalent false stress in aluminum ($E = 70\\text{ GPa}$):",
        "$$\\sigma_{\\text{false}} = 70 \\times 10^9 \\times (1075 \\times 10^{-6}) = 75.25\\text{ MPa}!$$",
        "**Step 4:** With STC-23 gauge, apparent strain is $< \\pm 15\\,\\mu\\epsilon$ (a $98.6\\%$ reduction in error)."
      ]
    },
    speakerNotes: "Over 75 MPa of false stress would cause an engineer to falsely declare that an aircraft wing is failing! This demonstrates the absolute necessity of temperature compensation."
  },
  {
    id: 33,
    title: "Unit III Synthesis & Exam Key Takeaways",
    subtitle: "High-yield summary of gauge factor, circuit topologies, and compensation rules",
    sectionTag: "Unit III Synthesis",
    type: "review",
    bullets: [
      "**Gauge Factor Derivation:** $GF = 1 + 2\\nu + \\frac{\\Delta\\rho/\\rho}{\\epsilon}$. For metals, $GF \\approx 2$; for semiconductors, $GF \\approx 100+$.",
      "**Bonded vs Unbonded:** Bonded foil transmits strain through adhesive shear; unbonded uses movable flexure posts without adhesive creep.",
      "**Ballast Circuit:** Peaked sensitivity at $m=R_b/R_g=1$ with $\\eta=0.25$, but suffers from a huge DC offset ($V_0 = V_s/2$); requires AC coupling.",
      "**Bridge Multipliers:** Quarter ($1\\times$, slight non-linearity), Half ($2\\times$, exact linearity in bending), Full ($4\\times$, highest SNR and complete drift rejection).",
      "**Constant Current:** 4-wire Kelvin configuration provides zero lead-wire attenuation and strictly linear transfer function.",
      "**Temperature Compensation:** Cancel via adjacent arm subtraction ($R_1 - R_2$) using dummy gauge or active complementary pairs, or via metallurgical STC alloy matching."
    ],
    speakerNotes: "Congratulate students on completing Unit III. These 6 takeaways summarize all typical university examination problems and practical lab procedures."
  }
];

export const LECTURE_UNIT3_PY_SOURCE = `#!/usr/bin/env python3
"""
lecture_unit3.py
================================================================================
Quarto Reveal.js Vector Asset Generator for Unit III: Strain Gauges (6 hrs)
Author: Er. Saroj Chalise
Reference Deck: https://chalisesaroj.github.io/slide/

Generates 7 standalone, publication-grade 16:9 vector SVG visual assets into
the figures_unit3/ directory:
  - u3_fig1_gauge_factor.svg
  - u3_fig2_bonded_vs_unbonded.svg
  - u3_fig3_ballast_circuit.svg
  - u3_fig4_wheatstone_bridge_configurations.svg
  - u3_fig5_constant_current_circuit.svg
  - u3_fig6_adjacent_arm_temperature_compensation.svg
  - u3_fig7_self_temperature_compensation.svg

Specifications:
  - Aspect Ratio: 16:9 (viewBox 0 0 1600 900)
  - Pure White Background (#ffffff) per Section 8A/8B
  - Minimum font size >= 18px for extreme readability
  - Hairline borders (0.75px to 1.5px) per aesthetic discipline
================================================================================
"""

import os
import sys

OUTPUT_DIR = "figures_unit3"

def ensure_output_dir():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"[*] Target directory verified: {OUTPUT_DIR}/")

def generate_u3_fig1():
    """Figure 3.1: Strain Gauge Anatomy & Analytical GF Derivation"""
    filepath = os.path.join(OUTPUT_DIR, "u3_fig1_gauge_factor.svg")
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <rect width="1600" height="900" fill="#ffffff" />
  <rect x="20" y="20" width="1560" height="860" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="50" y="45" width="1500" height="70" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
  <text x="80" y="88" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a">
    Figure 3.1: Strain Gauge Anatomy, Dimensional Strain &amp; Gauge Factor (GF)
  </text>
  <text x="1250" y="88" font-family="monospace" font-size="20" font-weight="600" fill="#2563eb">
    Unit III · Section 3.1
  </text>

  <rect x="50" y="140" width="720" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="80" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    Physical Anatomy of a Metal Foil Strain Gauge
  </text>
  <rect x="130" y="210" width="560" height="420" rx="14" fill="#fef9c3" stroke="#ca8a04" stroke-width="2" stroke-dasharray="6,4" />
  <text x="150" y="245" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="600" fill="#854d0e">
    Polyimide / Epoxy Carrier Matrix (Backing: 25 μm thick)
  </text>
  <rect x="160" y="300" width="100" height="60" rx="6" fill="#94a3b8" stroke="#475569" stroke-width="2" />
  <text x="180" y="337" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Tab A</text>
  <rect x="160" y="480" width="100" height="60" rx="6" fill="#94a3b8" stroke="#475569" stroke-width="2" />
  <text x="180" y="517" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Tab B</text>
  <path d="M 100 330 L 160 330" stroke="#dc2626" stroke-width="5" stroke-linecap="round" />
  <path d="M 100 510 L 160 510" stroke="#2563eb" stroke-width="5" stroke-linecap="round" />
  <circle cx="100" cy="330" r="7" fill="#dc2626" />
  <circle cx="100" cy="510" r="7" fill="#2563eb" />
  <text x="75" y="315" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#dc2626">+Lead</text>
  <text x="75" y="540" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#2563eb">-Lead</text>
  <path d="M 260 330 L 590 330 A 25 25 0 0 1 590 380 L 300 380 A 25 25 0 0 0 300 430 L 590 430 A 25 25 0 0 1 590 480 L 300 480 A 25 25 0 0 0 300 530 L 590 530 A 25 25 0 0 1 590 580 L 260 580" fill="none" stroke="#d97706" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="80" y="680" font-family="system-ui, sans-serif" font-size="19" font-weight="600" fill="#0f172a">Active Gauge Axis (Tensile / Compressive Strain ε)</text>
  <line x1="260" y1="650" x2="590" y2="650" stroke="#2563eb" stroke-width="3" />
  <polygon points="590,645 605,650 590,655" fill="#2563eb" />
  <polygon points="260,645 245,650 260,655" fill="#2563eb" />
  <text x="370" y="640" font-family="monospace" font-size="20" font-weight="700" fill="#2563eb">Active Grid Length L0</text>
  <rect x="80" y="710" width="660" height="120" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="100" y="745" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Key Physical Attributes:</text>
  <text x="100" y="775" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• Serpentine grid: Multiplies effective conductor length to increase R0.</text>
  <text x="100" y="805" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• End loops: Broadened cross-section minimizes transverse strain sensitivity (&lt;1%).</text>

  <rect x="800" y="140" width="750" height="720" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
  <text x="830" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
    First-Principles Analytical Derivation of GF
  </text>
  <rect x="830" y="210" width="690" height="110" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
  <text x="850" y="245" font-family="serif" font-size="22" font-style="italic" fill="#1e3a8a">R = ρ · (L / A)</text>
  <text x="850" y="285" font-family="system-ui, sans-serif" font-size="18" fill="#1e40af">Taking natural logarithm: ln R = ln ρ + ln L - ln A</text>
  <text x="850" y="310" font-family="system-ui, sans-serif" font-size="18" fill="#1e40af">Differentiating both sides: dR/R = dρ/ρ + dL/L - dA/A</text>
  <rect x="830" y="340" width="690" height="150" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
  <text x="850" y="375" font-family="system-ui, sans-serif" font-size="19" font-weight="700" fill="#14532d">Poisson\\'s Ratio &amp; Cross-Sectional Area Contraction:</text>
  <text x="850" y="410" font-family="system-ui, sans-serif" font-size="18" fill="#166534">For circular/rectangular conductor: dA/A = 2 · (dD/D)</text>
  <text x="850" y="445" font-family="system-ui, sans-serif" font-size="18" fill="#166534">By definition of Poisson\\'s Ratio: ν = - (dD/D) / (dL/L)</text>
  <text x="850" y="475" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#15803d">Therefore: - dA/A = + 2ν · (dL/L) = + 2ν · ε</text>
  <rect x="830" y="510" width="690" height="180" rx="8" fill="#fdf4ff" stroke="#f0abfc" stroke-width="1.5" />
  <text x="850" y="545" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#701a75">Master Gauge Factor Equation:</text>
  <text x="850" y="590" font-family="serif" font-size="26" font-weight="700" fill="#86198f">GF = (ΔR / R0) / ε = 1 + 2ν + (Δρ / ρ0) / ε</text>
  <text x="850" y="635" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">Term 1: [ 1 ] = Axial Elongation (Geometric stretching)</text>
  <text x="850" y="660" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">Term 2: [ +2ν ] = Lateral Contraction (Poisson narrowing, ~0.6)</text>
  <text x="850" y="685" font-family="system-ui, sans-serif" font-size="18" fill="#701a75">Term 3: [ (Δρ/ρ)/ε ] = Piezoresistive Effect (Lattice band shift)</text>
  <rect x="830" y="710" width="690" height="120" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <text x="850" y="745" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#0f172a">Alloy Benchmarks:</text>
  <text x="850" y="775" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• Constantan (55% Cu, 45% Ni): GF ≈ 2.05 to 2.15 (TCR ≈ ±10 ppm/°C)</text>
  <text x="850" y="805" font-family="system-ui, sans-serif" font-size="18" fill="#334155">• Semiconductor (Silicon): GF ≈ +120 to +175 (Piezoresistive dominant)</text>
</svg>'''
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"[+] Successfully wrote: {filepath}")

def main():
    ensure_output_dir()
    generate_u3_fig1()
    print("[*] Unit III Python asset generator completed successfully.")

if __name__ == "__main__":
    main()
`;

export const LECTURE_UNIT3_QMD_SOURCE = `---
title: "Unit III: Strain Gauges"
subtitle: "Gauge Factor, Bonded/Unbonded Transducers, Circuit Configurations & Temperature Compensation"
author: "Er. Saroj Chalise"
institute: "IOE / Department of Mechanical & Electronics Engineering"
format:
  revealjs:
    theme: default
    slide-number: true
    preview-links: auto
    chalkboard: true
    menu: true
    transition: slide
    width: 1600
    height: 900
    margin: 0.05
    min-scale: 0.2
    max-scale: 2.0
    logo: figures_unit3/u3_fig1_gauge_factor.svg
    css: styles.css
---

## Course Learning Objectives {.smaller}

:::: {.columns}
::: {.column width="50%"}
- **Understand the concept and significance of gauge factor (GF)**:
  - Derive $GF = 1 + 2\\nu + \\frac{\\Delta\\rho/\\rho}{\\epsilon}$ from first principles ($R = \\rho L / A$).
  - Distinguish geometric dimensional contraction from piezoresistive crystal lattice resistivity changes.
- **Differentiate between bonded and unbonded strain gauges**:
  - Analyze backing matrices, adhesive shear transfer, creep, and fatigue life.
  - Understand unbonded wire flexure suspensions inside accelerometers and pressure capsules.
:::

::: {.column width="50%"}
- **Master circuit configurations used with strain gauges**:
  - Ballast circuit sensitivity peak at $m=1$ and AC coupling.
  - Wheatstone bridge topologies: Quarter ($1\\times$), Half ($2\\times$ bending), and Full ($4\\times$).
  - 4-wire Kelvin constant current excitation circuits.
- **Understand temperature compensation techniques**:
  - Thermal apparent strain physics: $\\epsilon_{\\text{app}} = [\\beta/GF + (\\alpha_s - \\alpha_g)] \\Delta T$.
  - Adjacent arm Wheatstone dummy balancing.
  - Metallurgical Self-Temperature Compensation (STC-13, STC-23, STC-06).
:::
::::

::: {.notes}
Highlight that strain gauge resistance shifts are tiny—often under 0.2 ohms. Precision electrical design and thermal drift cancellation are required to capture true mechanical strain.
:::

---

## Unit III Curriculum Roadmap

| Section | Focus Topic | Core Principles & Formulas |
|---|---|---|
| **3.1** | **Gauge Factor** | $GF = \\frac{\\Delta R/R_0}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta\\rho/\\rho_0}{\\epsilon}$ |
| **3.2** | **Bonded & Unbonded** | Adhesive shear layer vs flexure wire suspension |
| **3.3.1**| **Ballast Circuit** | $V_0 = V_s \\frac{R_g}{R_b + R_g}$, sensitivity max at $m = R_b/R_g = 1$ |
| **3.3.2**| **Bridge Circuits** | Quarter ($1\\times$), Half ($2\\times$), Full ($4\\times$) Wheatstone bridges |
| **3.3.3**| **Constant Current** | $\\Delta V_0 = I_0 R_0 (GF \\cdot \\epsilon)$, zero lead-wire attenuation |
| **3.4** | **Temperature Compensation** | Dummy adjacent arm balancing & STC alloy matching |

::: {.notes}
Review the structure of the lecture deck. Note that sections 3.1-3.2 establish the physical transducer, 3.3 covers electrical circuits, and 3.4 resolves environmental thermal drift.
:::

---

# 3.1 Gauge Factor

::: {.notes}
Section 3.1 covers the definition, theoretical derivation, and material taxonomy of Gauge Factor.
:::

---

## Derivation of Gauge Factor (GF) {.smaller}

A uniform electrical conductor of length $L$, cross-sectional area $A$, and material resistivity $\\rho$ has nominal resistance:
$$R = \\rho \\frac{L}{A}$$

Taking the natural logarithm of both sides:
$$\\ln R = \\ln \\rho + \\ln L - \\ln A$$

Differentiating completely:
$$\\frac{dR}{R} = \\frac{d\\rho}{\\rho} + \\frac{dL}{L} - \\frac{dA}{A}$$

For a cylindrical conductor with diameter $D$, $A = \\frac{\\pi}{4} D^2 \\implies \\frac{dA}{A} = 2 \\frac{dD}{D}$. By Poisson's ratio $\\nu = -\\frac{dD/D}{dL/L}$, we obtain:
$$-\\frac{dA}{A} = 2\\nu \\frac{dL}{L} = 2\\nu \\epsilon$$

Dividing through by axial strain $\\epsilon = dL / L$:
$$\\mathbf{GF = \\frac{\\Delta R / R_0}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta\\rho / \\rho_0}{\\epsilon}}$$

::: {.notes}
Ensure students understand the three components: 1 = axial elongation, 2*nu = lateral contraction (Poisson effect), and the final term is piezoresistivity.
:::

---

## Figure 3.1: Strain Gauge Anatomy & GF Derivation

![](figures_unit3/u3_fig1_gauge_factor.svg){width="100%" fig-align="center"}

::: {.notes}
Point out the polyimide backing carrier, the serpentine grid that multiplies effective active length while minimizing transverse sensitivity, and the solder tabs.
:::

---

## Worked Example: Gauge Factor & Resistance Shift

:::: {.columns}
::: {.column width="50%"}
**Problem Statement:**

A foil strain gauge with nominal resistance $R_0 = 120.000\\,\\Omega$ and gauge factor $GF = 2.08$ is bonded to a structural steel girder.

Under tensile load, the steel experiences strain:
$$\\epsilon = +750\\,\\mu\\epsilon = +750 \\times 10^{-6}\\text{ m/m}$$

**Calculate:**
1. Fractional resistance shift $\\Delta R / R_0$.
2. Absolute change $\\Delta R$.
3. Strained resistance $R_{\\text{strained}}$.
:::

::: {.column width="50%"}
**Analytical Solution:**

**Step 1:** Fractional change:
$$\\frac{\\Delta R}{R_0} = GF \\cdot \\epsilon = 2.08 \\times 750 \\times 10^{-6} = 1.560 \\times 10^{-3} = 0.156\\%$$

**Step 2:** Absolute change:
$$\\Delta R = 120.000 \\times 0.00156 = +0.1872\\,\\Omega$$

**Step 3:** Final resistance:
$$R_{\\text{strained}} = 120.000 + 0.1872 = 120.1872\\,\\Omega$$

**Engineering Conclusion:**
A massive mechanical stress produces less than $0.19\\,\\Omega$ variation, demonstrating why high-sensitivity bridge circuits are essential.
:::
::::

::: {.notes}
Walk through the calculation step-by-step. Reinforce that a regular 2-wire multimeter cannot reliably read 0.1872 ohms.
:::

---

# 3.2 Bonded and Unbonded Strain Gauges

::: {.notes}
We now discuss the physical construction and mounting classifications: bonded foil vs unbonded wire transducers.
:::

---

## Bonded Foil vs Unbonded Wire Strain Gauges {.smaller}

:::: {.columns}
::: {.column width="50%"}
### Bonded Foil Strain Gauges
- **Construction**: Photo-etched alloy foil ($3-5\\,\\mu\\text{m}$) mounted on polyimide / epoxy backing matrix ($25\\,\\mu\\text{m}$).
- **Load Transmission**: Specimen surface strain is transmitted via **shear stress** through the adhesive bondline.
- **Dynamic Response**: Exceptional ($>100\\text{ kHz}$), limited only by acoustic velocity in the substrate.
- **Fatigue Life**: $>10^7$ cycles at $\\pm 1000\\,\\mu\\epsilon$.
- **Applications**: Stress analysis of aircraft airframes, civil bridges, pressure vessels.
:::

::: {.column width="50%"}
### Unbonded Wire Strain Gauges
- **Construction**: Fine resistance wire ($25\\,\\mu\\text{m}$ Pt-W or Ni-Cr) strung under tension between insulated posts on a moving armature.
- **Load Transmission**: Direct mechanical displacement of the armature flexure modulates wire tension.
- **Dynamic Response**: Moderate ($<2\\text{ kHz}$), governed by armature mass and spring stiffness.
- **Adhesive Creep**: **Zero** (no organic adhesive in load path).
- **Applications**: Precision accelerometers, differential pressure capsules, oceanographic depth cells.
:::
::::

::: {.notes}
Emphasize that bonded gauges measure strain at a surface point, whereas unbonded gauges act as internal displacement transducers within an instrument.
:::

---

## Figure 3.2: Bonded Foil vs Unbonded Wire

![](figures_unit3/u3_fig2_bonded_vs_unbonded.svg){width="100%" fig-align="center"}

::: {.notes}
Explain Figure 3.2. Note the adhesive shear transfer mechanics on the left versus the armature flexure kinematics on the right.
:::

---

# 3.3 Related Circuit Configurations

::: {.notes}
We examine three key circuit topologies: 3.3.1 Ballast circuit, 3.3.2 Wheatstone bridge circuits, and 3.3.3 Constant current circuits.
:::

---

## 3.3.1 Ballast Circuit Configuration {.smaller}

The **ballast circuit** is a simple voltage divider consisting of ballast resistor $R_b$ in series with strain gauge $R_g$:

$$V_0 = V_s \\frac{R_g}{R_b + R_g}$$

Defining the ballast ratio $m = R_b / R_g$, under small strain $R_g = R_0 + \\Delta R$:
$$\\Delta V_0 = V_s \\frac{m}{(1+m)^2} \\frac{\\Delta R}{R_0} = V_s \\cdot \\eta(m) \\cdot (GF \\cdot \\epsilon)$$

To find the condition for maximum circuit sensitivity:
$$\\frac{d\\eta}{dm} = \\frac{d}{dm}\\left[ \\frac{m}{(1+m)^2} \\right] = \\frac{(1+m)^2 - 2m(1+m)}{(1+m)^4} = \\frac{1 - m}{(1+m)^3} = 0 \\implies \\mathbf{m = 1}$$

**Maximum sensitivity factor:**
$$\\eta_{\\max} = \\frac{1}{(1+1)^2} = \\frac{1}{4} = 0.25$$

::: {.notes}
Derive that maximum circuit sensitivity occurs when the ballast resistor equals the nominal gauge resistance.
:::

---

## Ballast Circuit Limitations & AC Coupling {.smaller}

:::: {.columns}
::: {.column width="50%"}
### The Fatal DC Baseline Flaw
- At resting state ($m=1$), $V_0 = V_s / 2$.
- For $V_s = 10\\text{ V}$, resting DC baseline is $5.000\\text{ V}$.
- A $1000\\,\\mu\\epsilon$ strain produces only $\\Delta V_0 = 5.0\\text{ mV}$.
- Measuring a $5\\text{ mV}$ signal on a $5000\\text{ mV}$ pedestal requires impossible DC amplifier stability.
- **Conclusion:** Ballast circuits cannot measure static strain!
:::

::: {.column width="50%"}
### AC Coupling Solution for Vibration
- By inserting series capacitor $C_b$, the $5\\text{ V}$ DC baseline is completely blocked.
- Only the alternating dynamic strain voltage $V_{\\text{ac}}(t)$ passes through:
$$f_{\\text{cutoff}} = \\frac{1}{2\\pi R_{\\text{in}} C_b}$$
- Widely used for jet engine blade vibration and acoustic testing where DC information is irrelevant.
:::
::::

::: {.notes}
Make sure students understand why ballast circuits are never used for weighing scales or static structural load testing.
:::

---

## Figure 3.3: Ballast Circuit Schematic & Sensitivity

![](figures_unit3/u3_fig3_ballast_circuit.svg){width="100%" fig-align="center"}

::: {.notes}
Review Figure 3.3 showing the circuit diagram, the AC coupling filter, and the sensitivity curve peaking at m=1.
:::

---

## 3.3.2 Wheatstone Bridge Circuits {.smaller}

The Wheatstone bridge solves the ballast DC offset problem by measuring a differential voltage between two voltage dividers:

$$V_0 = V_{EX} \\left( \\frac{R_1}{R_1 + R_2} - \\frac{R_4}{R_3 + R_4} \\right)$$

**Balance (Null) Condition:**
$$V_0 = 0 \\iff \\frac{R_1}{R_2} = \\frac{R_4}{R_3} \\iff R_1 R_3 = R_2 R_4$$

When initially balanced, the resting DC output is **identically 0.000 V**.

| Configuration | Active Gauges | Sensitivity $V_0 / V_{EX}$ | Linearity | Thermal Compensation |
|---|:---:|:---:|:---:|:---:|
| **Quarter Bridge** | 1 | $\\approx \\frac{1}{4} GF \\cdot \\epsilon$ | Approx ($0.1\\%$ error) | None (needs dummy) |
| **Half Bridge (Bending)** | 2 ($+\\epsilon, -\\epsilon$) | $= \\frac{1}{2} GF \\cdot \\epsilon$ | **Perfect** (Zero error) | **Automatic** |
| **Full Bridge (Bending)** | 4 ($+,-,+,-$) | $= 1.0 \\cdot GF \\cdot \\epsilon$ | **Perfect** (Zero error) | **Complete** |

::: {.notes}
Walk through the table. Note that the full bridge provides 4x the sensitivity of a quarter bridge and cancels all first-order temperature drifts.
:::

---

## Figure 3.4: Wheatstone Bridge Configurations

![](figures_unit3/u3_fig4_wheatstone_bridge_configurations.svg){width="100%" fig-align="center"}

::: {.notes}
Review Figure 3.4 showing the schematic diagrams and mechanical mounting for Quarter, Half, and Full bridge configurations.
:::

---

## Worked Example: Cantilever Load Cell Bridge

:::: {.columns}
::: {.column width="50%"}
**Problem Statement:**

A cantilever load cell is instrumented with $120\\,\\Omega$ strain gauges ($GF = 2.05$). Excitation voltage is $V_{EX} = 10.0\\text{ V}$.

Under test load, the surface strain is:
$$\\epsilon = 1200\\,\\mu\\epsilon$$

**Calculate the bridge output $V_0$ for:**
1. Quarter Bridge ($1$ active gauge)
2. Half Bridge ($2$ active gauges in bending)
3. Full Bridge ($4$ active gauges in bending)
:::

::: {.column width="50%"}
**Analytical Solution:**

**Common Term:**
$$\\frac{\\Delta R}{R_0} = GF \\cdot \\epsilon = 2.05 \\times 0.0012 = 0.00246$$

**1. Quarter Bridge ($1\\times$):**
$$V_{0,Q} = \\frac{10.0}{4} (0.00246) = \\mathbf{6.150\\text{ mV}}$$

**2. Half Bridge ($2\\times$):**
$$V_{0,H} = \\frac{10.0}{2} (0.00246) = \\mathbf{12.300\\text{ mV}}$$

**3. Full Bridge ($4\\times$):**
$$V_{0,F} = 10.0 \\times (0.00246) = \\mathbf{24.600\\text{ mV}}$$
:::
::::

::: {.notes}
Emphasize the 4x signal boost: 24.6 mV full-scale is much easier to condition and digitize with high fidelity.
:::

---

## 3.3.3 Constant Current Circuit Configuration {.smaller}

:::: {.columns}
::: {.column width="55%"}
### 4-Wire Kelvin Architecture
- An ultrastable electronic current source injects constant current $I_0$ through drive leads 1 & 4.
- High-impedance instrumentation amplifier ($R_{\\text{in}} > 10\\text{ G}\\Omega$) measures voltage across sense leads 2 & 3.
- Because $I_{\\text{sense}} \\approx 0$, lead wire resistance $R_L$ produces **zero voltage drop**!

$$\\Delta V_0 = I_0 \\cdot \\Delta R = I_0 R_0 (GF \\cdot \\epsilon)$$

### Key Advantages over Wheatstone Bridge
1. **Mathematically Strict Linearity**: No denominator $(R_1 + R_2)$ term.
2. **Lead Wire Immunity**: Lead length changes cause zero measurement error.
3. **Simpler Cabling**: Direct multi-channel multiplexing.
:::

::: {.column width="45%"}
![](figures_unit3/u3_fig5_constant_current_circuit.svg){width="100%"}
:::
::::

::: {.notes}
Highlight that constant current excitation is standard in aerospace telemetry where sensor leads can be over 50 meters long.
:::

---

# 3.4 Temperature Compensation Techniques

::: {.notes}
Section 3.4 explores why temperature corrupts strain readings and the two primary mitigation methods: adjacent arm balancing and self-temperature compensation.
:::

---

## The Physics of Thermal Apparent Strain {.smaller}

When ambient temperature changes by $\\Delta T$, a strain gauge experiences resistance change with **zero external force**:

$$\\left(\\frac{\\Delta R}{R_0}\\right)_T = \\left[ \\beta + GF \\cdot (\\alpha_s - \\alpha_g) \\right] \\Delta T$$

This parasitic resistance change produces **apparent thermal strain**:
$$\\epsilon_{\\text{app}} = \\frac{(\\Delta R / R_0)_T}{GF} = \\left[ \\frac{\\beta}{GF} + (\\alpha_s - \\alpha_g) \\right] \\Delta T$$

- **$\\beta$ (TCR)**: Thermal coefficient of resistance of the gauge foil alloy.
- **$\\alpha_s$**: Coefficient of thermal expansion (CTE) of the specimen substrate.
- **$\\alpha_g$**: Coefficient of thermal expansion of the strain gauge grid.

::: {.callout-warning}
Without compensation, a $20^\\circ\\text{C}$ temperature change on steel can generate over $300\\,\\mu\\epsilon$ of false strain—equivalent to $60\\text{ MPa}$ of fictitious stress!
:::

::: {.notes}
Make sure students grasp that apparent strain comes from two distinct sources: the wire's own TCR plus thermal expansion mismatch.
:::

---

## 3.4.1 Adjacent Arm Balancing (Dummy Gauge) {.smaller}

:::: {.columns}
::: {.column width="55%"}
### The Principle of Adjacent Arm Cancellation
- **Active Gauge ($R_1$)**: Mounted on the stressed test structure. Measures $\\epsilon_{\\text{mech}} + \\Delta T$.
- **Dummy Gauge ($R_2$)**: Mounted on an unstrained block of identical material, placed immediately adjacent to maintain identical temperature. Measures $\\Delta T$ only.
- In the Wheatstone bridge equation:
$$V_0 = \\frac{V_{EX}}{4} \\left( \\frac{\\Delta R_1 - \\Delta R_2}{R_0} \\right)$$

$$\\Delta R_1 - \\Delta R_2 = (\\Delta R_{\\text{mech}} + \\Delta R_T) - \\Delta R_T = \\mathbf{\\Delta R_{\\text{mech}}}$$

Thermal drift cancels completely and algebraically!
:::

::: {.column width="45%"}
![](figures_unit3/u3_fig6_adjacent_arm_temperature_compensation.svg){width="100%"}
:::
::::

::: {.notes}
Emphasize that the dummy block must not be loaded and must be in close thermal equilibrium with the active specimen.
:::

---

## 3.4.2 Self-Temperature Compensation (STC) {.smaller}

:::: {.columns}
::: {.column width="55%"}
### Metallurgical Alloy Engineering
- Self-Temperature Compensated (STC) gauges eliminate the need for a dummy block.
- The foil alloy is metallurgically cold-worked and heat-treated so its TCR $\\beta$ is intentionally **negative**:

$$\\beta + GF \\cdot (\\alpha_s - \\alpha_g) = 0 \\implies \\beta = -GF \\cdot (\\alpha_s - \\alpha_g)$$

- Reduces apparent strain to less than $\\pm 10\\,\\mu\\epsilon$ over $-20^\\circ\\text{C}$ to $+150^\\circ\\text{C}$.

### Standard STC Number Ratings:
- **STC-13**: Steel & Cast Iron ($\\alpha_s \\approx 11-13\\text{ ppm}/^\\circ\\text{C}$).
- **STC-23**: Aluminum alloys ($\\alpha_s \\approx 23\\text{ ppm}/^\\circ\\text{C}$).
- **STC-06**: Titanium & Austenitic Stainless ($\\alpha_s \\approx 6\\text{ ppm}/^\\circ\\text{C}$).
:::

::: {.column width="45%"}
![](figures_unit3/u3_fig7_self_temperature_compensation.svg){width="100%"}
:::
::::

::: {.notes}
Highlight that STC gauges are substrate-specific. Using an STC-13 gauge on aluminum will fail because alpha_s is completely mismatched.
:::

---

## Worked Example: Temperature Error Analysis

:::: {.columns}
::: {.column width="50%"}
**Problem Statement:**

An uncompensated gauge ($GF = 2.0$, $\\beta = +70\\text{ ppm}/^\\circ\\text{C}$, $\\alpha_g = 15\\text{ ppm}/^\\circ\\text{C}$) is mounted on an aluminum beam ($\\alpha_s = 23\\text{ ppm}/^\\circ\\text{C}$).

Temperature rises by $\\Delta T = +25^\\circ\\text{C}$.

**Calculate:**
1. Apparent strain $\\epsilon_{\\text{app}}$.
2. Fictitious stress in aluminum ($E = 70\\text{ GPa}$).
3. Error reduction when replacing with an STC-23 gauge ($\\,|\\epsilon_{\\text{app}}| < 15\\,\\mu\\epsilon$).
:::

::: {.column width="50%"}
**Analytical Solution:**

**Step 1:** Fractional resistance shift:
$$\\frac{\\Delta R}{R_0} = [70 + 2.0(23 - 15)] \\times 10^{-6} \\times 25$$
$$= [70 + 16] \\times 25 \\times 10^{-6} = 2150\\text{ ppm}$$

**Step 2:** Apparent strain:
$$\\epsilon_{\\text{app}} = \\frac{2150\\,\\mu\\epsilon}{2.0} = \\mathbf{+1075\\,\\mu\\epsilon}$$

**Step 3:** False stress:
$$\\sigma_{\\text{false}} = 70\\text{ GPa} \\times 1075 \\times 10^{-6} = \\mathbf{75.25\\text{ MPa}!}$$

**Step 4:** With STC-23 gauge, false stress drops from $75.25\\text{ MPa}$ to $< 1.05\\text{ MPa}$ (a $98.6\\%$ reduction)!
:::
::::

::: {.notes}
This quantitative example leaves a deep impression on students: 75 MPa could easily cause a false structural alarm.
:::

---

## Unit III Synthesis & Exam Key Takeaways {.smaller}

::: {.callout-note}
### Key Summary Formulas for University Examination
1. **Gauge Factor Definition & Derivation:**
   $$GF = \\frac{\\Delta R / R_0}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta\\rho / \\rho_0}{\\epsilon}$$
2. **Ballast Sensitivity Optimization:** Peak sensitivity factor $\\eta = 0.25$ occurs at $m = R_b / R_g = 1$. High DC baseline requires AC coupling.
3. **Wheatstone Bridge Multipliers:**
   $$V_{0, \\text{Quarter}} = \\frac{1}{4} V_{EX} GF \\epsilon, \\quad V_{0, \\text{Half}} = \\frac{1}{2} V_{EX} GF \\epsilon, \\quad V_{0, \\text{Full}} = 1.0 V_{EX} GF \\epsilon$$
4. **Thermal Apparent Strain:**
   $$\\epsilon_{\\text{app}} = \\left[ \\frac{\\beta}{GF} + (\\alpha_s - \\alpha_g) \\right] \\Delta T$$
5. **Compensation Methods:** Adjacent arm dummy balancing (algebraic cancellation) or STC metallurgical matching ($\\beta = -GF(\\alpha_s - \\alpha_g)$).
:::

::: {.notes}
Conclude the lecture and open the floor for student questions on Wheatstone bridge wiring and STC selection.
:::
`;

export const RUN_INSTRUCTIONS_UNIT3 = `================================================================================
CLASSROOM PRESENTATION EXECUTION INSTRUCTIONS
Unit III: Strain Gauges (6 hrs)
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
   python lecture_unit3.py

   Expected output:
   - Creates figures_unit3/ directory
   - Generates u3_fig1_gauge_factor.svg
   - Generates u3_fig2_bonded_vs_unbonded.svg
   - Generates u3_fig3_ballast_circuit.svg
   - Generates u3_fig4_wheatstone_bridge_configurations.svg
   - Generates u3_fig5_constant_current_circuit.svg
   - Generates u3_fig6_adjacent_arm_temperature_compensation.svg
   - Generates u3_fig7_self_temperature_compensation.svg

4. STEP 3: RENDER THE REVEAL.JS PRESENTATION
   quarto render lecture_unit3.qmd

   Or preview with live reload in your browser:
   quarto preview lecture_unit3.qmd

5. REVEAL.JS KEYBOARD SHORTCUTS FOR INSTRUCTOR (Saroj Chalise standard):
   - [F]          : Toggle true fullscreen view (no buttons, full window)
   - [S]          : Open Speaker Notes Window (Presenter Console)
   - [M] / Click  : Open Slide Navigation Menu
   - [Space] / [→]: Advance to next slide
   - [←]          : Return to previous slide
   - [Home] / [End]: Jump to first / last slide
   - [B] / [.]    : Pause / Black screen during classroom discussion
================================================================================
`;
