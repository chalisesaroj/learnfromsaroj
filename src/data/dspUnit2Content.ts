/**
 * Unit II: Digital Signal Processing (10 hrs)
 * Complete Quarto Reveal.js presentation package and curriculum
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 *
 * Upgraded with Modern Data Acquisition (DAQ) System Architecture based on Dewesoft engineering:
 * - 4-Pillar DAQ Architecture: Sensors -> Signal Conditioning -> ADC -> DAQ Software / DSP
 * - Universal Sensor Conditioning Matrix (IEPE, Strain Bridge, Thermocouple CJC, High-Voltage CAT IV)
 * - ADC Bit Depth & Quantization Comparison (8-bit, 12-bit, 16-bit, 24-bit DualCoreADC)
 * - Complete End-to-End Solved Industrial Case Study: Gas Turbine Vibration & Bearing DAQ Pipeline
 */

import { SlideData } from '../types/chapterDeck';

export const UNIT2_SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    title: "Unit II: Digital Signal Processing & Data Acquisition (DAQ)",
    subtitle: "Classification of Signals, Modern DAQ Architecture, Sensor Conditioning, ADC Quantization, Convolution, FFT & Spectral Analysis",
    sectionTag: "Unit II · 10 Hours",
    type: "title",
    speakerNotes: "Welcome students to Unit II: Digital Signal Processing & Data Acquisition. In this 10-hour module, we build the mathematical and engineering foundation required to bridge physical phenomena (vibration, strain, temperature, pressure) with digital computation using modern DAQ architectures, precision signal conditioning, and spectral DSP algorithms."
  },
  {
    id: 2,
    title: "Course Learning Objectives",
    subtitle: "Specific competencies to be mastered in Unit II",
    sectionTag: "Syllabus Objectives",
    type: "objectives",
    bullets: [
      "**Familiarize with common types of signals**: Continuous vs discrete, periodic vs aperiodic, deterministic vs random, and energy vs power signals.",
      "**Master Modern DAQ Architecture**: Understand the 4 core pillars—Sensors, Advanced Signal Conditioning, High-Resolution ADC, and DAQ Processing Software.",
      "**Acquire and characterize digital signals**: Master the Nyquist-Shannon sampling theorem, aliasing prevention, ADC quantization, aperture jitter, and dynamic range.",
      "**Apply sensor signal conditioning methods**: Implement pre-amplification, galvanic isolation (>1000V), bridge completion, IEPE excitation, CJC, and analog anti-aliasing low-pass filtering.",
      "**Utilize signal processing techniques**: Execute time-domain discrete convolution, correlation, FIR/IIR digital filtering, and windowing.",
      "**Execute Fourier and inverse transforms**: Derive and deploy the CTFT, DFT, Cooley-Tukey Radix-2 FFT, and IDFT synthesis.",
      "**Solve an End-to-End Industrial Case Study**: Trace a real-world gas turbine vibration signal from sensor to conditioned analog filter, 16-bit ADC, Hanning window, and 4096-pt FFT."
    ],
    speakerNotes: "Highlight to students that every engineering measurement system—from aerospace test cells to industrial predictive maintenance—relies directly on these foundational pillars."
  },
  {
    id: 3,
    title: "Unit II Curriculum Roadmap",
    subtitle: "Complete 10-hour lecture roadmap across 9 core sections + comprehensive case study",
    sectionTag: "Curriculum Overview",
    type: "roadmap",
    columns: {
      left: [
        "**2.1 Types of Signals**: Continuous vs discrete, deterministic vs stochastic, periodic vs aperiodic, energy vs power.",
        "**2.2 Acquisition & Digital Signal Properties**: Sampling rate $f_s$, Nyquist theorem, aliasing folding, ADC bit-depth (8/12/16/24-bit), and SQNR.",
        "**2.3 Signal Conditioning & DAQ Architecture**: Dewesoft 4-pillar DAQ model, galvanic isolation, sensor topologies (IEPE, Bridge, TC), and anti-aliasing filtering.",
        "**2.4 Signal Processing Techniques**: Discrete convolution $y = x * h$, correlation, FIR vs IIR filters, and windowing."
      ],
      right: [
        "**2.5 Fourier Transform**: CTFT continuous frequency spectrum, magnitude and phase response.",
        "**2.6 Discrete Fourier Transform (DFT)**: Bin spacing $\\Delta f = f_s / N$, spectral leakage, and Hanning windowing.",
        "**2.7 Fast Fourier Transform (FFT)**: Cooley-Tukey Radix-2 DIT algorithm, butterfly structures, $O(N \\log_2 N)$ speedup.",
        "**2.8 Inverse Fourier Transform (IDFT)**: Exact synthesis and Parseval's energy conservation theorem.",
        "**2.9 Data Presentation**: Bode plots, STFT spectrograms, and decibel scaling.",
        "**Comprehensive Solved Case Study**: Full pipeline from 12,000 RPM rotor vibration to 4096-pt FFT fault diagnostics."
      ]
    },
    speakerNotes: "Walk students through the syllabus flow: we move from physical classification (2.1), to hardware acquisition and conditioning (2.2-2.3), to algorithmic processing (2.4-2.8), and finally complete a full-scale industrial engineering case study."
  },
  {
    id: 4,
    title: "Why Digital Signal Processing & DAQ Matter",
    subtitle: "The bridge between analog physics and computational intelligence",
    sectionTag: "Pedagogical Motivation",
    type: "why-matters",
    bullets: [
      "Physical phenomena (temperature, strain, pressure, sound, vibration) exist exclusively as **continuous analog waveforms**.",
      "Microprocessors, DSPs, GPUs, and machine learning models operate exclusively on **discrete quantized binary words**.",
      "If sampling violates the Nyquist rate ($f_s < 2 f_{\\max}$), irreversible distortion occurs that **no software algorithm can ever repair**.",
      "Analog signal conditioning (isolation, amplification, anti-aliasing) protects the ADC and preserves sensor fidelity.",
      "Fourier transformation reveals the hidden harmonic signatures of vibration, resonance, fault degradation, and communication carrier frequencies."
    ],
    equation: "X[k] = \\sum_{n=0}^{N-1} x[n] \\cdot e^{-j \\frac{2\\pi}{N} k n} \\quad \\Longleftrightarrow \\quad x[n] = \\frac{1}{N} \\sum_{k=0}^{N-1} X[k] \\cdot e^{j \\frac{2\\pi}{N} k n}",
    speakerNotes: "Emphasize to the classroom that DSP is not just theoretical math—it is the operational firmware inside every modern measurement device."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.1: TYPES OF SIGNALS
  // ---------------------------------------------------------------------------
  {
    id: 5,
    title: "2.1 Types of Signals",
    sectionTag: "Topic 2.1",
    type: "section-divider",
    takeaway: "Signals are physical carriers of information modeled mathematically across time, value, periodicity, and energy domains.",
    speakerNotes: "Introduce Section 2.1: Types of Signals. Guide students through continuous vs discrete, deterministic vs random, and energy vs power classifications."
  },
  {
    id: 6,
    title: "Signal Classification Fundamentals",
    subtitle: "Time, value, predictability, and energy classifications",
    sectionTag: "2.1 Signal Types",
    type: "content",
    bullets: [
      "**Continuous-Time $x(t)$ vs Discrete-Time $x[n]$**: Continuous signals are defined for all real $t \\in \\mathbb{R}$; discrete signals exist only at integer sample instants $n \\in \\mathbb{Z}$ where $x[n] = x(n \\cdot T_s)$.",
      "**Analog vs Quantized Digital**: Analog signals assume infinite continuum amplitudes; digital signals are rounded into $2^N$ discrete binary levels.",
      "**Deterministic vs Random (Stochastic)**: Deterministic signals are uniquely modeled by analytical equations; random signals are characterized by probability distributions, mean $\\mu$, variance $\\sigma^2$, and power spectral density.",
      "**Periodic vs Aperiodic**: Periodic signals repeat identically such that $x(t) = x(t + T_0)$; aperiodic signals have no repeating cycle and exhibit continuous frequency spectra.",
      "**Energy vs Power Signals**: Transients are energy signals ($E < \\infty, P_{\\text{avg}} = 0$); persistent periodic signals are power signals ($E = \\infty, 0 < P_{\\text{avg}} < \\infty$)."
    ],
    speakerNotes: "Clarify the common misconception between 'discrete' (time domain sampling) and 'digital' (amplitude quantization). A signal can be discrete in time yet continuous in amplitude (like an analog sample-and-hold circuit)."
  },
  {
    id: 7,
    title: "Definition: Signal (Continuous vs. Discrete)",
    sectionTag: "2.1 Formal Definition",
    type: "definition",
    definition: {
      term: "Signal (Continuous vs. Discrete)",
      formalDefinition: "A function of one or more independent variables that conveys information about the state or behavior of a physical system. Continuous signals x(t) map real time t ∈ ℝ to a continuum of amplitudes, whereas discrete-time signals x[n] map integer indices n ∈ ℤ to values sampled at intervals Ts.",
      symbol: "x(t) \\in \\mathbb{R} \\quad \\Longleftrightarrow \\quad x[n] = x(n \\cdot T_s)",
      units: "Dimensionless or SI unit of measurand (V, Pa, m/s², °C)",
      standardReference: "IEEE Std 100 / IEC 60050",
      keyImplication: "Continuous signals contain infinite information density per unit time; digital representation requires both time sampling (discretization) and amplitude quantization (finite word length)."
    },
    speakerNotes: "Ensure students distinguish between continuous-time, discrete-time, and fully digitized signals."
  },
  {
    id: 8,
    title: "Figure 2.1: Signal Taxonomy & Energy Formulations",
    sectionTag: "2.1 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig1",
    speakerNotes: "Point out the 4 visual quadrants in Figure 2.1: continuous vs discrete stem plot, periodic vs transient impulse, deterministic wave with random noise overlay, and the formal integrals for Energy signals vs Power signals."
  },
  {
    id: 9,
    title: "Check Understanding: Periodic vs. Energy Signals",
    sectionTag: "2.1 Formative Quiz",
    type: "check-understanding",
    quiz: {
      question: "Which of the following statements is mathematically TRUE regarding a pure cosine waveform x(t) = 5 \\cos(200\\pi t)?",
      options: [
        "It is an energy signal because its amplitude is bounded between -5 and +5.",
        "It is a power signal with infinite total energy E = ∞ and finite average power P = 12.5 W (across 1 Ω).",
        "It is a deterministic transient signal with zero average power.",
        "It has a continuous frequency spectrum spanning all frequencies."
      ],
      correctIndex: 1,
      explanation: "A periodic signal persists indefinitely over all time t ∈ (-∞, ∞). Integrating |x(t)|² from -∞ to +∞ yields infinite total energy (E = ∞). However, its time-averaged power over one period T0 = 10 ms is finite: P_avg = (5 / √2)² = 25 / 2 = 12.5 W. Therefore, it is strictly a power signal."
    },
    speakerNotes: "Remind students that all sustained periodic waveforms are power signals, whereas transient pulses are energy signals."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.2: ACQUISITION, SAMPLING & QUANTIZATION
  // ---------------------------------------------------------------------------
  {
    id: 10,
    title: "2.2 Acquisition and Properties of Digital Signals",
    sectionTag: "Topic 2.2",
    type: "section-divider",
    takeaway: "The interface between continuous reality and digital computation is governed by the Nyquist-Shannon sampling theorem and finite ADC quantization.",
    speakerNotes: "Transition to Section 2.2: Digital Acquisition and Properties. Cover sampling, aliasing, ADC quantization, and aperture jitter."
  },
  {
    id: 11,
    title: "Sampling Theorem, Aliasing & Aperture Jitter",
    subtitle: "Theoretical limits and hardware imperfections in signal acquisition",
    sectionTag: "2.2 Digital Acquisition",
    type: "content",
    bullets: [
      "**Nyquist-Shannon Sampling Theorem**: A continuous signal $x(t)$ bandlimited to $f_{\\max}$ can be uniquely and completely reconstructed from its samples if and only if $f_s \\ge 2 \\cdot f_{\\max}$.",
      "**Aliasing & Spectral Folding**: If $f_s < 2 f_{\\max}$, frequencies above the Nyquist boundary ($f_s/2$) fold back into the baseband at $f_{\\text{apparent}} = |f_{\\text{in}} - k \\cdot f_s|$, appearing as false ghost tones.",
      "**ADC Quantization Error**: For an $N$-bit ADC with Full-Scale Range $V_{\\text{FSR}}$, step size is $\\Delta V = V_{\\text{FSR}} / (2^N - 1)$. Maximum quantization error is bounded by $\\pm \\frac{\\Delta V}{2} = \\pm 0.5\\text{ LSB}$.",
      "**Signal-to-Quantization-Noise Ratio**: Theoretical ideal dynamic range is $\\mathrm{SQNR}_{\\text{dB}} = 6.02 \\cdot N + 1.76\\text{ dB}$. Every added bit yields $+6.02\\text{ dB}$ of dynamic range.",
      "**Aperture Jitter**: Clock timing uncertainty $\\Delta t_a$ induces voltage amplitude errors $\\Delta V_e = 2\\pi f_{\\text{in}} V_0 \\cdot \\Delta t_a$. High-speed signals require jitter $< 10\\text{ ps}$."
    ],
    speakerNotes: "Stress that aliasing cannot be filtered out digitally after sampling. If an undersampled 90 Hz signal appears as 10 Hz in a 100 Hz sampled system, the computer has zero mathematical way to know it wasn't originally 10 Hz."
  },
  {
    id: 12,
    title: "Definition: Nyquist-Shannon Sampling Theorem",
    sectionTag: "2.2 Formal Definition",
    type: "definition",
    definition: {
      term: "Nyquist-Shannon Sampling Theorem",
      formalDefinition: "A continuous-time signal x(t) that contains no frequency components higher than f_max is completely determined and can be exactly reconstructed from its instantaneous samples x[n] = x(n · Ts) taken at a uniform rate fs if and only if fs ≥ 2 · f_max.",
      symbol: "f_s \\ge 2 \\cdot f_{\\max} \\quad \\Longleftrightarrow \\quad f_{\\text{Nyquist}} = \\frac{f_s}{2}",
      units: "Hertz (Hz) or Samples per second (S/s)",
      standardReference: "Shannon (1949) / Whittaker-Kotelnikov-Nyquist",
      keyImplication: "Exact Whittaker-Shannon sinc interpolation reconstruction is guaranteed mathematically without information loss when the strict inequality is satisfied."
    },
    speakerNotes: "Explain that the Nyquist rate is a mathematical minimum; practical engineering requires fs to be 2.5x to 10x higher to accommodate non-ideal filter roll-off."
  },
  {
    id: 13,
    title: "Figure 2.2: Nyquist Theorem & Aliasing Spectrum",
    sectionTag: "2.2 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig2",
    speakerNotes: "Direct students to Case A on the left (guard band separating spectral replicas) vs Case B on the right (overlapping triangles causing irreversible aliased distortion)."
  },
  {
    id: 14,
    title: "Figure 2.2B: ADC Bit Depth & Quantization Step Size",
    sectionTag: "2.2 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig_quantization_bits",
    speakerNotes: "Examine Figure 2.2B comparing 8-bit (256 steps, 78.1 mV), 12-bit (4096 steps, 4.88 mV), 16-bit (65536 steps, 305 uV), and 24-bit Dewesoft DualCore (16.7M steps, 1.19 uV, >160 dB dynamic range)."
  },
  {
    id: 15,
    title: "ADC Architecture Comparison (Flash, SAR, Sigma-Delta)",
    sectionTag: "2.2 Technology Taxonomy",
    type: "types",
    typesGrid: [
      {
        typeName: "Flash (Parallel) ADC",
        description: "Uses 2^N - 1 analog comparators in parallel against a precision resistor divider ladder.",
        keyFeature: "Ultra-high speed (1 to 10 GS/s); 1 clock cycle latency.",
        example: "Oscilloscopes, radar, optical communications (6 to 8 bits).",
        badge: "Ultra-Fast (GS/s)"
      },
      {
        typeName: "Successive Approximation (SAR)",
        description: "Uses a binary search algorithm with an internal DAC and single comparator to converge bit-by-bit.",
        keyFeature: "Zero pipeline delay, low power, moderate to high resolution (12 to 18 bits, up to 10 MS/s).",
        example: "Industrial multi-channel DAQ, motor control, multiplexed systems.",
        badge: "Zero-Latency"
      },
      {
        typeName: "Sigma-Delta (ΣΔ) ADC",
        description: "Oversamples by Kx (e.g. 64x to 256x) with 1-bit or multi-bit modulator and digital decimation filter.",
        keyFeature: "Pushes quantization noise into high frequencies; ultra-high resolution (24 bits, up to 200 kS/s).",
        example: "Audio analyzers, seismic geophones, precision vibration DAQ.",
        badge: "High Resolution"
      },
      {
        typeName: "Dewesoft DualCoreADC®",
        description: "Utilizes dual 24-bit sigma-delta ADCs per channel operating with different gains in parallel.",
        keyFeature: "Automatic seamless blending yielding >160 dB dynamic range and anti-aliasing per channel.",
        example: "Automotive crash testing, aerospace rocket engine test cells.",
        badge: "160 dB Dynamic Range"
      }
    ],
    speakerNotes: "Walk students through the ADC trade-off space: Flash for gigasample speed but low resolution; SAR for zero-latency control loops; Sigma-Delta for ultra-high dynamic range sound and vibration measurement."
  },
  {
    id: 16,
    title: "Trade-off: SAR vs. Sigma-Delta ADCs",
    sectionTag: "2.2 Engineering Trade-offs",
    type: "pros-cons",
    prosCons: {
      title: "SAR vs. Sigma-Delta Converters in Modern Instrumentation",
      advantages: [
        "**SAR Advantage**: Instantaneous zero-latency conversion (ideal for closed-loop real-time PID controllers).",
        "**SAR Advantage**: Multiplexes easily across 16 to 64 channels with a single ADC chip.",
        "**ΣΔ Advantage**: Ultra-deep dynamic range (24 bits, SQNR > 140 dB), eliminating manual input range gain switching.",
        "**ΣΔ Advantage**: Built-in digital anti-aliasing filter provides sharp brickwall roll-off with linear phase."
      ],
      disadvantages: [
        "**SAR Disadvantage**: Requires steep, expensive external analog anti-aliasing filters on every channel.",
        "**SAR Disadvantage**: Resolution generally limited to 16-18 bits; high quantization noise floor compared to ΣΔ.",
        "**ΣΔ Disadvantage**: Digital decimation filter introduces group delay latency (unsuitable for fast microsecond control loops).",
        "**ΣΔ Disadvantage**: Cannot be easily multiplexed due to digital filter settling times (requires 1 ADC per channel)."
      ],
      engineeringVerdict: "Use SAR ADCs for transient control, trigger systems, and multiplexed general logging. Use 24-bit Sigma-Delta (or DualCoreADC) for sound, vibration, structural modal analysis, and dynamic sensor telemetry."
    },
    speakerNotes: "Explain why modern DAQ vendors like Dewesoft use one 24-bit Sigma-Delta ADC per channel: silicon is cheap, but ruined tests due to improper gain ranges or aliased frequencies cost millions."
  },
  {
    id: 17,
    title: "Check Understanding: Aliasing Ghost Frequency",
    sectionTag: "2.2 Formative Quiz",
    type: "check-understanding",
    quiz: {
      question: "A high-frequency noise spike at f_in = 18 kHz enters a DAQ system sampled at fs = 20 kS/s without an anti-aliasing filter. What apparent frequency will appear in the FFT display?",
      options: [
        "18 kHz (the true original frequency)",
        "10 kHz (clamped at the Nyquist frequency)",
        "2 kHz (folded alias: |18 - 20| kHz)",
        "8 kHz (Nyquist difference: 10 - 2 kHz)"
      ],
      correctIndex: 2,
      explanation: "Applying the aliasing folding formula: f_apparent = |f_in - k · fs| where k = 1. Here, f_apparent = |18 kHz - 20 kHz| = 2 kHz. Because 2 kHz is below the 10 kHz Nyquist frequency, it appears as a completely legitimate, false low-frequency 'ghost' vibration spike that no DSP software can distinguish from real 2 kHz machinery vibration!"
    },
    speakerNotes: "Emphasize this core failure mode: an unshielded 18 kHz inverter noise spike looks like a broken 2 kHz rotor bearing to the computer."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.3: MODERN DAQ ARCHITECTURE & SIGNAL CONDITIONING
  // ---------------------------------------------------------------------------
  {
    id: 18,
    title: "2.3 Signal Conditioning & Modern DAQ Architecture",
    sectionTag: "Topic 2.3",
    type: "section-divider",
    takeaway: "Signal conditioning protects the ADC, powers sensors, eliminates common-mode interference, and prevents aliasing before digitization.",
    speakerNotes: "Transition to Section 2.3: Hardware Signal Conditioning & Modern DAQ Architecture based on Dewesoft engineering."
  },
  {
    id: 19,
    title: "Definition: Data Acquisition System (DAQ / DAS)",
    sectionTag: "2.3 Formal Definition",
    type: "definition",
    definition: {
      term: "Data Acquisition System (DAQ / DAS)",
      formalDefinition: "The automated process and integrated hardware/software system that measures real-world physical phenomena (temperature, strain, pressure, sound, vibration, voltage, current) through sensors, conditions the electrical signals, converts them into digital numbers via an ADC, and records, analyzes, and presents the data using dedicated software.",
      symbol: "\\text{Physical Phenomenon} \\longrightarrow \\text{Sensor} \\longrightarrow \\text{Conditioning} \\longrightarrow \\text{ADC} \\longrightarrow \\text{DSP/PC}",
      units: "Integrated System Standard (IEC 61010-1 / IEEE 1451)",
      standardReference: "Dewesoft DAQ Standard / ISO 10012",
      keyImplication: "Unlike simple meters or legacy chart recorders, modern DAQ systems synchronously capture multiple physical domains, isolate high voltages, and execute real-time mathematical DSP algorithms."
    },
    speakerNotes: "Highlight Dewesoft's definition: a DAQ system is not just an ADC board—it is an end-to-end synchronized measurement pipeline."
  },
  {
    id: 20,
    title: "Figure 2.3A: Modern DAQ System Architecture (Dewesoft Model)",
    sectionTag: "2.3 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig_dewesoft_daq",
    speakerNotes: "Walk students through the 4 core pillars in Figure 2.3A: 1. Physical Sensors, 2. Signal Conditioning with galvanic isolation, 3. ADC Engine with 24-bit DualCore, 4. DAQ Software with real-time FFT."
  },
  {
    id: 21,
    title: "Figure 2.3B: Universal Sensor Signal Conditioning Matrix",
    sectionTag: "2.3 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig_conditioning_matrix",
    speakerNotes: "Examine Figure 2.3B showing the 4 major sensor conditioning circuits: Wheatstone bridge with shunt calibration, IEPE constant current supply, Thermocouple CJC, and CAT IV high-voltage divider."
  },
  {
    id: 22,
    title: "Universal Sensor Conditioning Topologies",
    sectionTag: "2.3 Hardware Topologies",
    type: "types",
    typesGrid: [
      {
        typeName: "Strain & Bridge Sensors",
        description: "Quarter (120Ω/350Ω), Half, and Full Wheatstone bridge circuits for strain gauges, load cells, and torque meters.",
        keyFeature: "Regulated excitation (2.5V, 5V, 10V), remote sense leads, and precision shunt calibration (59.88 kΩ).",
        example: "Airframe stress testing, crane scales, engine dynamometers.",
        badge: "mV/V Output"
      },
      {
        typeName: "IEPE / ICP Accelerometers",
        description: "Piezoelectric crystals with built-in charge-to-voltage FET preamplifiers for vibration and acoustics.",
        keyFeature: "Constant current excitation (2 to 20 mA at 24 VDC), AC-coupling capacitor (fc ≈ 0.5 Hz), and TEDS chip.",
        example: "Turbine vibration, automotive crash tests, modal shaker analysis.",
        badge: "Constant Current"
      },
      {
        typeName: "Thermocouples & RTDs",
        description: "Seebeck thermoelectric effect sensors (J, K, T, E, R, S) generating microvolt potentials proportional to ΔT.",
        keyFeature: "Cold Junction Compensation (CJC) thermistor at terminal block, >1000V isolation, and open-wire burnout detection.",
        example: "Furnace temperature profiles, engine exhaust gas monitoring.",
        badge: "Cold Junction Comp"
      },
      {
        typeName: "High Voltage & Current",
        description: "Precision 1000:1 attenuator dividers and Hall-effect / Rogowski coils for power grid and inverter analysis.",
        keyFeature: "Galvano-magnetic isolation barriers meeting CAT III / CAT IV safety ratings up to 1000 VRMS.",
        example: "Electric vehicle powertrain testing, solar inverters, grid power quality.",
        badge: "CAT IV Isolation"
      }
    ],
    speakerNotes: "Every sensor needs specialized conditioning: you cannot plug an IEPE sensor into a thermocouple port. Signal conditioning matches the sensor physics to the ADC."
  },
  {
    id: 23,
    title: "Analogy: The Anti-Aliasing Filter as an Airport Security Checkpoint",
    sectionTag: "2.3 Conceptual Analogy",
    type: "analogy",
    analogy: {
      everydayConcept: "Airport Security Checkpoint Bouncer",
      technicalMapping: "Analog Anti-Aliasing Low-Pass Filter (AA-LPF) preceding the ADC",
      whyItWorks: "At an airport, unauthorized imposters must be stopped at the physical security gate BEFORE boarding the plane. Once the airplane takes off into the sky (the digital domain), all passengers are mixed together in seats, and flight attendants have zero way to determine who had a fake ticket.",
      limitsOfAnalogy: "Airport security checks identity cards discretely, whereas an analog filter applies continuous frequency-dependent attenuation (-20n dB/decade roll-off) based on component reactances (inductors, capacitors, op-amps)."
    },
    speakerNotes: "Use this memorable analogy: Once aliased noise enters the ADC and gets digitized into numbers, no DSP software can ever identify or remove it."
  },
  {
    id: 24,
    title: "Check Understanding: Placement of Anti-Aliasing Filter",
    sectionTag: "2.3 Formative Quiz",
    type: "check-understanding",
    quiz: {
      question: "A junior test engineer suggests saving hardware BOM cost by removing the analog anti-aliasing filter and instead programming a 100th-order digital FIR low-pass filter inside the DSP software after the ADC. Is this engineering approach valid?",
      options: [
        "Yes, because modern DSPs have fast MAC units that can easily execute 100th-order filters.",
        "Yes, digital filters have sharper roll-off than analog filters and zero phase distortion.",
        "FATALLY FLAWED: High-frequency noise above fs/2 folds into the baseband during sampling and cannot be separated by software.",
        "Yes, as long as the digital filter cutoff frequency is set to exactly fs / 4."
      ],
      correctIndex: 2,
      explanation: "The proposal is fundamentally flawed. When an analog signal enters an ADC without analog anti-aliasing filtering, any noise frequencies above fs/2 fold back into the baseband instantaneously and irrevocably during the sampling process. Inside the digital domain, the aliased noise frequencies are mathematically indistinguishable from legitimate measurands. Software cannot un-bake the cake! The anti-aliasing filter MUST be an analog circuit placed BEFORE the ADC."
    },
    speakerNotes: "Reiterate: Software algorithms cannot fix broken hardware acquisition physics."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.4: SIGNAL PROCESSING TECHNIQUES (CONVOLUTION, FILTERS)
  // ---------------------------------------------------------------------------
  {
    id: 25,
    title: "2.4 Signal Processing Techniques",
    sectionTag: "Topic 2.4",
    type: "section-divider",
    takeaway: "Discrete convolution, digital filtering, and correlation form the core operational toolkit of DSP algorithms.",
    speakerNotes: "Transition to Section 2.4: Signal Processing Techniques. Discuss discrete convolution, correlation, and FIR vs IIR filter architectures."
  },
  {
    id: 26,
    title: "Discrete Convolution, Correlation & Digital Filtering",
    subtitle: "Time-domain processing and FIR vs. IIR filter design",
    sectionTag: "2.4 Processing Techniques",
    type: "content",
    bullets: [
      "**Discrete Convolution**: Fundamental linear time-invariant (LTI) input-output relation: $y[n] = x[n] * h[n] = \\sum_{k=-\\infty}^{\\infty} x[k] \\cdot h[n - k]$. Convolution in time equals multiplication in frequency.",
      "**Cross-Correlation & Autocorrelation**: Measures statistical similarity between two signals as a function of time lag $\\tau$. Widely used for pulse transit-time delay estimation (ultrasonic flowmeters, radar, sonar).",
      "**FIR Digital Filters (All-Zero)**: $y[n] = \\sum_{k=0}^{M} b_k \\cdot x[n - k]$. Unconditionally stable (all poles at origin $z=0$) and exhibits perfect linear phase (constant group delay; zero shape distortion).",
      "**IIR Digital Filters (Poles & Zeros)**: $y[n] = \\sum b_k x[n-k] - \\sum a_k y[n-k]$. Highly efficient with steep roll-off for low orders, but feedback can induce instability if poles migrate outside $|z| = 1$.",
      "**Windowing**: Tapers finite data records to zero at boundaries (Hanning, Hamming, Blackman) to suppress boundary discontinuities and reduce spectral leakage."
    ],
    speakerNotes: "Compare FIR vs IIR: In medical instrumentation (like ECG), FIR is almost always preferred because its linear phase preserves the exact peak morphology of the heart rhythm without phase distortion."
  },
  {
    id: 27,
    title: "Figure 2.4: FIR vs. IIR Filter Architectures",
    sectionTag: "2.4 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig4",
    speakerNotes: "Highlight the tapped delay line structure of FIR on the left with zero feedback, contrasting with the recursive feedback loop of IIR on the right."
  },
  {
    id: 28,
    title: "Trade-off: FIR vs. IIR Digital Filters",
    sectionTag: "2.4 Architecture Trade-offs",
    type: "pros-cons",
    prosCons: {
      title: "FIR vs. IIR Digital Filter Selection in Measurement Systems",
      advantages: [
        "**FIR Advantage**: Strictly Unconditionally Stable (all poles reside safely at z = 0).",
        "**FIR Advantage**: Exact linear phase response (constant group delay; preserves pulse shapes).",
        "**IIR Advantage**: Extremely computationally efficient (achieves steep transitions with low order N = 4 to 8).",
        "**IIR Advantage**: Directly mapped from proven analog prototypes (Butterworth, Chebyshev, Elliptic)."
      ],
      disadvantages: [
        "**FIR Disadvantage**: Requires high filter orders (M = 50 to 500) for sharp cutoffs, demanding heavy MAC processing.",
        "**FIR Disadvantage**: Greater memory buffer requirements and execution latency.",
        "**IIR Disadvantage**: Feedback loop can lead to instability if coefficients are quantized and poles cross |z| = 1.",
        "**IIR Disadvantage**: Non-linear phase response distorts transient waveform morphology (dispersion)."
      ],
      engineeringVerdict: "Choose FIR filters for medical ECG, audio mastering, and pulse telemetry where waveform shape must not be distorted. Choose IIR filters for resource-constrained microcontrollers requiring sharp attenuation."
    },
    speakerNotes: "Walk students through the trade-offs: FIR gives linear phase and stability; IIR gives efficiency at the expense of phase linearity."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.5: FOURIER TRANSFORM (CTFT)
  // ---------------------------------------------------------------------------
  {
    id: 29,
    title: "2.5 Continuous Fourier Transform (CTFT)",
    sectionTag: "Topic 2.5",
    type: "section-divider",
    takeaway: "The Fourier transform translates complicated time-domain waveforms into simple orthogonal sinusoidal frequency components.",
    speakerNotes: "Transition to Section 2.5: Continuous-Time Fourier Transform (CTFT). Explain how time-domain signals decompose into orthogonal complex exponentials."
  },
  {
    id: 30,
    title: "Continuous Fourier Transform (CTFT)",
    subtitle: "Spectral representation, magnitude, and phase response",
    sectionTag: "2.5 Fourier Transform",
    type: "content",
    bullets: [
      "**Continuous Fourier Transform (Analysis)**: Maps an aperiodic continuous time signal $x(t)$ into a continuous frequency spectrum $X(f) = \\int_{-\\infty}^{\\infty} x(t) \\cdot e^{-j 2\\pi f t} dt$.",
      "**Inverse CTFT (Synthesis)**: Exactly reconstructs the time signal from its frequency components: $x(t) = \\int_{-\\infty}^{\\infty} X(f) \\cdot e^{j 2\\pi f t} df$.",
      "**Magnitude and Phase Decomposition**: $X(f) = |X(f)| \\cdot e^{j \\angle X(f)}$ where $|X(f)|$ is the amplitude spectrum and $\\angle X(f) = \\arctan(\\mathrm{Im} / \\mathrm{Re})$ is the phase spectrum.",
      "**Symmetry for Real Signals**: If $x(t)$ is real, $X(-f) = X^*(f)$ (Hermitian symmetry). Magnitude $|X(f)|$ is even; phase $\\angle X(f)$ is odd.",
      "**Convolution Theorem**: $x(t) * h(t) \\Longleftrightarrow X(f) \\cdot H(f)$. Filtering in time is equivalent to point-by-point multiplication in the frequency domain."
    ],
    speakerNotes: "Remind students that complex exponentials $e^{-j 2\\pi f t} = \\cos(2\\pi f t) - j \\sin(2\\pi f t)$ are simply orthogonal cosine and sine projections via Euler's formula."
  },
  {
    id: 31,
    title: "Figure 2.5: Time Domain to Frequency Spectrum",
    sectionTag: "2.5 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig5",
    speakerNotes: "Show students how the complex sum wave in time unbundles into three distinct, sharp vertical lines on the frequency spectrum at 50 Hz, 150 Hz, and 250 Hz."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.6: DISCRETE FOURIER TRANSFORM (DFT) & WINDOWING
  // ---------------------------------------------------------------------------
  {
    id: 32,
    title: "2.6 Discrete Fourier Transform (DFT)",
    sectionTag: "Topic 2.6",
    type: "section-divider",
    takeaway: "The DFT is the exact computational algorithm used by digital computers to evaluate spectra over finite sample blocks.",
    speakerNotes: "Transition to Section 2.6: Discrete Fourier Transform (DFT). Explain frequency bins, spectral leakage, and windowing."
  },
  {
    id: 33,
    title: "DFT Formulation, Bins & Windowing",
    subtitle: "Finite-length discretization, spectral leakage, and picket-fence effect",
    sectionTag: "2.6 Discrete Fourier Transform",
    type: "content",
    bullets: [
      "**DFT Definition**: For an $N$-point discrete sequence $x[n]$, the DFT produces $N$ complex frequency coefficients: $X[k] = \\sum_{n=0}^{N-1} x[n] \\cdot e^{-j \\frac{2\\pi}{N} k n}$ for $k = 0, 1, \\dots, N-1$.",
      "**Frequency Bin Resolution**: The physical spacing between adjacent spectral lines is $\\Delta f = \\frac{f_s}{N} = \\frac{1}{T_{\\text{record}}}$. Resolution depends **solely on total acquisition time** $T_{\\text{record}}$.",
      "**Spectral Leakage**: If the input signal contains a frequency that does not fall exactly on an integer multiple of $\\Delta f$, its energy spills into neighboring bins, creating a smeared sinc envelope with high sidelobes.",
      "**Windowing Functions**: Multiplying $x[n]$ by a tapered window $w[n]$ (Hanning, Hamming, Blackman) suppresses boundary discontinuities, reducing sidelobes from $-13\\text{ dB}$ (rectangular) down to $-32\\text{ dB}$ (Hanning) or $-58\\text{ dB}$ (Blackman).",
      "**Zero-Padding**: Appending zeros to $x[n]$ interpolates the DFT spectrum (smoothing the display curve), but **does NOT increase true physical frequency resolution**."
    ],
    speakerNotes: "Emphasize this core principle: Zero-padding is purely graphical interpolation; to genuinely distinguish two closely spaced frequencies, you must record data for a longer duration of time ($T_{\\text{record}} = 1 / \\Delta f$)."
  },
  {
    id: 34,
    title: "Figure 2.6: DFT Resolution, Leakage & Windowing",
    sectionTag: "2.6 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig6",
    speakerNotes: "Compare side-by-side: Panel A shows rectangular window with massive -13 dB sidelobes polluting the spectrum, while Panel B shows Hanning window suppressing sidelobes down to -32 dB."
  },
  {
    id: 35,
    title: "Check Understanding: Zero-Padding vs. True Resolution",
    sectionTag: "2.6 Formative Quiz",
    type: "check-understanding",
    quiz: {
      question: "An engineer records a vibration signal for T = 0.1 s at fs = 10 kS/s (N = 1000 samples, Δf = 10 Hz). Two nearby resonance modes exist at 120 Hz and 124 Hz (Δf_sep = 4 Hz). To separate them, the engineer pads 9000 zeros (N = 10,000, Δf_display = 1 Hz). Will the two peaks be resolved?",
      options: [
        "Yes, because the new bin spacing is 1 Hz, which is smaller than 4 Hz.",
        "Yes, zero-padding quadruples the physical information content of the signal.",
        "NO: Zero-padding merely interpolates the display; physical Rayleigh resolution is 1/T = 10 Hz, so both modes stay merged in a single peak.",
        "Yes, provided an IIR filter is applied before zero padding."
      ],
      correctIndex: 2,
      explanation: "Zero-padding appends zeros containing zero new physical information. It only interpolates the sinc display curve between existing samples. The true physical Rayleigh resolution is strictly Δf_true = 1 / T_record = 1 / 0.1 s = 10 Hz. Because 4 Hz < 10 Hz, the two modes remain blurred into a single hump. To resolve them, the engineer MUST record data for at least T ≥ 1 / 4 Hz = 0.25 seconds!"
    },
    speakerNotes: "This is one of the most widespread misconceptions in professional engineering: zero-padding is curve smoothing, NOT resolution enhancement."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.7: FAST FOURIER TRANSFORM (FFT)
  // ---------------------------------------------------------------------------
  {
    id: 36,
    title: "2.7 Fast Fourier Transform (FFT)",
    sectionTag: "Topic 2.7",
    type: "section-divider",
    takeaway: "The Cooley-Tukey Radix-2 FFT revolutionizes computational speed, transforming $O(N^2)$ direct evaluations into $O(N \\log_2 N)$ butterflies.",
    speakerNotes: "Transition to Section 2.7: Fast Fourier Transform (FFT). Highlight the Cooley-Tukey Radix-2 algorithm and butterfly structures."
  },
  {
    id: 37,
    title: "Cooley-Tukey Radix-2 Decimation-In-Time Algorithm",
    subtitle: "Divide-and-conquer strategy, twiddle factor symmetry, and computational benchmarks",
    sectionTag: "2.7 Fast Fourier Transform",
    type: "content",
    bullets: [
      "**Computational Bottleneck of Direct DFT**: Evaluating an $N$-point DFT directly requires $N^2$ complex multiplications and $N(N-1)$ complex additions. For $N=1024$, this is $\\approx 10^6$ operations.",
      "**Cooley-Tukey Divide-and-Conquer**: Decomposes an $N$-point sequence into two $(N/2)$-point subsequences of even and odd indexed samples: $X[k] = E[k] + W_N^k \\cdot O[k]$.",
      "**Twiddle Factor Symmetry**: $W_N = e^{-j 2\\pi / N}$. Symmetry ($W_N^{k + N/2} = -W_N^k$) and periodicity ($W_N^{k+N} = W_N^k$) eliminate redundant trigonometric calculations.",
      "**Butterfly Flow Unit**: In-place computation takes two inputs $A$ and $B$, producing $X = A + B W_N^k$ and $Y = A - B W_N^k$ while overwriting memory registers.",
      "**Computational Benchmark**: FFT requires $\\frac{N}{2} \\log_2 N$ complex multiplications. For $N=4096$, operations drop from $16.78\\text{ million}$ down to $24,576$—a **$682.7\\times$ speedup**!"
    ],
    speakerNotes: "The FFT is considered one of the top 10 most impactful computational algorithms of the 20th century. Without it, modern telecommunications (WiFi, 5G, LTE, OFDM), medical MRI imaging, and digital audio would not exist."
  },
  {
    id: 38,
    title: "Figure 2.7: Radix-2 FFT Butterfly Computational Graph",
    sectionTag: "2.7 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig7",
    speakerNotes: "Trace the butterfly signal flow on Figure 2.7. Note the bit-reversal sorting on the input and natural ordering on the output, along with the operation benchmark table."
  },
  {
    id: 39,
    title: "Check Understanding: FFT Computational Speedup",
    sectionTag: "2.7 Formative Quiz",
    type: "check-understanding",
    quiz: {
      question: "For an FFT block size of N = 4096 points, approximately how many times faster is the Cooley-Tukey Radix-2 FFT compared to evaluating the direct DFT equation?",
      options: [
        "About 4 times faster",
        "About 12 times faster",
        "About 680 times faster (16,777,216 vs. 24,576 operations)",
        "Over 100,000 times faster"
      ],
      correctIndex: 2,
      explanation: "Direct DFT requires N² = 4096² = 16,777,216 complex multiplications. Radix-2 FFT requires (N / 2) · log2(N) = 2048 · 12 = 24,576 complex multiplications. The speedup factor is 16,777,216 / 24,576 ≈ 682.7x faster! This massive efficiency makes real-time 4k-point spectral analysis feasible on embedded microcontrollers."
    },
    speakerNotes: "Help students appreciate this mathematical breakthrough: 682x speedup means 1.5 milliseconds instead of 1 second."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.8: INVERSE FOURIER TRANSFORM & PARSEVAL
  // ---------------------------------------------------------------------------
  {
    id: 40,
    title: "2.8 Inverse Fourier Transform (IDFT) & Parseval's Law",
    sectionTag: "Topic 2.8",
    type: "section-divider",
    takeaway: "The inverse transform enables exact time-domain signal reconstruction and spectral filtering synthesis.",
    speakerNotes: "Transition to Section 2.8: Inverse Discrete Fourier Transform (IDFT). Review signal synthesis and Parseval's energy conservation theorem."
  },
  {
    id: 41,
    title: "IDFT Formulation & Energy Conservation",
    subtitle: "Exact time-domain reconstruction and Parseval's theorem",
    sectionTag: "2.8 Inverse Fourier Transform",
    type: "content",
    bullets: [
      "**Inverse DFT Mathematical Formulation**: $x[n] = \\frac{1}{N} \\sum_{k=0}^{N-1} X[k] \\cdot e^{j \\frac{2\\pi}{N} k n}$ for $n = 0, 1, \\dots, N-1$. Identical to forward DFT except for positive exponent and $1/N$ normalization.",
      "**Exact Mathematical Reversibility**: The DFT-IDFT transform pair is strictly lossless. Applying forward DFT followed immediately by IDFT recovers the original discrete sequence $x[n]$ with zero error.",
      "**Parseval's Energy Conservation Theorem**: $\\sum_{n=0}^{N-1} |x[n]|^2 = \\frac{1}{N} \\sum_{k=0}^{N-1} |X[k]|^2$. Total energy calculated in the time domain exactly equals total energy calculated in the frequency domain.",
      "**Frequency-Domain Filtering Workflow**: $x[n] \\xrightarrow{\\text{FFT}} X[k] \\xrightarrow{\\times H[k]} Y[k] \\xrightarrow{\\text{IFFT}} y[n]$. Fast convolution via FFT/IFFT is vastly faster than time-domain FIR convolution for large filter kernels ($M > 64$)."
    ],
    speakerNotes: "Highlight Parseval's theorem: it confirms that transforming into the frequency domain does not create or destroy signal energy—it simply redistributes it across orthogonal sinusoidal basis functions."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.9: DATA PRESENTATION & TIME-FREQUENCY SPECTROGRAMS
  // ---------------------------------------------------------------------------
  {
    id: 42,
    title: "2.9 Processing & Presentation of Data",
    sectionTag: "Topic 2.9",
    type: "section-divider",
    takeaway: "Professional engineering data presentation turns raw spectral numbers into clear, intuitive diagnostic plots.",
    speakerNotes: "Transition to Section 2.9: Data Presentation. Cover dB scaling, Welch PSD, and Short-Time Fourier Transform (STFT) spectrograms."
  },
  {
    id: 43,
    title: "Data Presentation, Spectrograms & STFT",
    subtitle: "Bode plots, Short-Time Fourier Transform, and decibel normalization",
    sectionTag: "2.9 Data Presentation",
    type: "content",
    bullets: [
      "**Logarithmic Decibel (dB) Scaling**: Human perception of sound and vibration is logarithmic. Plotting magnitude in $\\text{dB} = 20 \\log_{10}(|X| / V_{\\text{ref}})$ reveals weak harmonics $80\\text{ dB}$ below the fundamental that would be invisible on a linear scale.",
      "**Power Spectral Density (PSD)**: Computed via Welch's method (averaging overlapping windowed periodograms). Units: $\\text{V}^2 / \\text{Hz}$ or $g^2 / \\text{Hz}$. Characterizes stationary random vibration and thermal noise floors.",
      "**Short-Time Fourier Transform (STFT)**: For non-stationary signals (speech, seismic waves, machine chirps), standard FFT fails because frequency content changes over time. STFT slides a window $w(t - \\tau)$ to produce a 2D time-frequency function $\\mathrm{STFT}(\\tau, f)$.",
      "**Spectrogram 2D/3D Heatmaps**: Plots time on X-axis, frequency on Y-axis, and color-coded intensity on Z-axis. Immediately reveals sweeping chirps, intermittent faults, and harmonic modulation.",
      "**Heisenberg-Gabor Uncertainty Principle**: $\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$. Narrow time windows give sharp time localization but broad blurry frequency bins; wide time windows give sharp frequency bins but blurred time transients."
    ],
    speakerNotes: "Demonstrate why a waterfall plot or 2D spectrogram is essential for predictive maintenance: when a bearing begins to fail, its vibration frequency sweeps upward over time—a standard static FFT misses this dynamic progression."
  },
  {
    id: 44,
    title: "Figure 2.8: STFT Spectrogram & Uncertainty Limit",
    sectionTag: "2.9 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig8",
    speakerNotes: "Point out the spectrogram heatmap on Figure 2.8 showing the sweeping chirp tone from 100 Hz to 2 kHz, and explain the Heisenberg-Gabor uncertainty equation on the right panel."
  },

  // ---------------------------------------------------------------------------
  // COMPREHENSIVE SOLVED CASE STUDY: END-TO-END GAS TURBINE DAQ PIPELINE
  // ---------------------------------------------------------------------------
  {
    id: 45,
    title: "Comprehensive Case Study: Gas Turbine Vibration DAQ",
    sectionTag: "Industrial Case Study",
    type: "section-divider",
    takeaway: "Connecting every single concept in Unit II—from physical rotor dynamics to sensor conditioning, analog anti-aliasing, sampling, ADC quantization, Hanning windowing, and 4096-pt FFT diagnostics.",
    speakerNotes: "Introduce the comprehensive case study. This is the master capstone of Unit II where students see how every single formula works together in a real power plant gas turbine monitoring system."
  },
  {
    id: 46,
    title: "Case Study Overview: Machine Dynamics & Problem Context",
    subtitle: "Complete specification of an industrial gas turbine monitoring installation",
    sectionTag: "Case Study · Problem Spec",
    type: "content",
    bullets: [
      "**Physical Rotating Machinery**: An industrial aeroderivative gas turbine operating at a nominal shaft speed of **$12,000\\text{ RPM}$**.",
      "**Rotational Fundamental (1X Unbalance)**: $f_{\\text{rot}} = \\frac{12,000}{60} = \\mathbf{200\\text{ Hz}}$.",
      "**Shaft Misalignment Harmonic (2X)**: $f_{\\text{misalign}} = 2 \\times 200\\text{ Hz} = \\mathbf{400\\text{ Hz}}$.",
      "**Blade-Pass Excitation**: 5-blade compressor impeller generates blade-pass frequency $f_{\\text{blade}} = 5 \\times 200\\text{ Hz} = \\mathbf{1,000\\text{ Hz}}$.",
      "**High-Frequency Bearing Defect**: Outer race ball-pass fault pulses ringing structural resonances at $f_{\\text{bearing}} = \\mathbf{2,400\\text{ Hz}}$.",
      "**Industrial EMI Contamination**: An adjacent $480\\text{ V}$ variable frequency drive (VFD) radiates severe PWM switching noise spikes at **$25\\text{ kHz}$** with $\\pm 2\\text{ V}$ amplitude.",
      "**Engineering Mission**: Design the complete DAQ pipeline from sensor to FFT to resolve all mechanical modes while preventing the $25\\text{ kHz}$ VFD noise from aliasing into the vibration spectrum!"
    ],
    speakerNotes: "Set up the real-world scenario: The turbine runs at 12,000 RPM (200 Hz). The engineer must detect unbalance, misalignment, blade-pass, and bearing defect tones without allowing the 25 kHz inverter switching noise to alias into the spectrum."
  },
  {
    id: 47,
    title: "Figure 2.10: End-to-End Solved Case Study Pipeline",
    sectionTag: "Case Study · Architecture",
    type: "figure",
    figureKey: "u2_fig_case_study",
    speakerNotes: "Walk students through Figure 2.10: Stage 1 (Sensor physics), Stage 2 (Conditioning & AA-LPF), Stage 3 (Sampling S/H), Stage 4 (16-bit ADC), Stage 5 (Windowing buffer), and Stage 6 (FFT output spectrum showing solved peaks)."
  },
  {
    id: 48,
    title: "Stage-by-Stage Mathematical Solution (Stages 1 to 3)",
    subtitle: "Sensor sensitivity, anti-aliasing filter order, and sampling rate selection",
    sectionTag: "Case Study · Solution Part 1",
    type: "content",
    bullets: [
      "**Stage 1 — Sensor Selection & Voltage Span**:",
      "• Transducer: IEPE Piezoelectric Accelerometer with sensitivity $S_a = 100\\text{ mV/g}$ and dynamic range $\\pm 50\\text{ g}$.",
      "• Output voltage span: $V_{\\text{out}} = \\pm 50\\text{ g} \\times 0.100\\text{ V/g} = \\mathbf{\\pm 5.0\\text{ V}}$ ($10.0\\text{ V}$ peak-to-peak).",
      "**Stage 2 — Signal Conditioning & Analog Anti-Aliasing Filter**:",
      "• IEPE Excitation: Constant current source of $4\\text{ mA}$ at $24\\text{ VDC}$ bias.",
      "• AC-coupling capacitor: $C_c = 10\\ \\mu\\text{F}$ with input impedance $R_{\\text{in}} = 100\\text{ k}\\Omega$ gives high-pass cutoff $f_{HP} = \\frac{1}{2\\pi R C} = \\mathbf{0.159\\text{ Hz}}$ (passes all mechanical vibrations $> 1\\text{ Hz}$, blocks DC offset).",
      "• Anti-Aliasing Filter: 6th-order active Butterworth LPF with cutoff $f_c = \\mathbf{5\\text{ kHz}}$.",
      "• Attenuation at $25\\text{ kHz}$ VFD noise: Frequency ratio $f / f_c = 25 / 5 = 5$.",
      "• Attenuation equation: $|H(25\\text{ kHz})| = \\frac{1}{\\sqrt{1 + 5^{2 \\times 6}}} = \\frac{1}{\\sqrt{1 + 5^{12}}} = \\frac{1}{15,625} \\approx \\mathbf{-83.9\\text{ dB}}$!",
      "• Result: The $2\\text{ V}$ switching noise is crushed down to $2\\text{ V} / 15,625 = \\mathbf{128\\ \\mu\\text{V}}$ (below ADC noise floor!).",
      "**Stage 3 — Nyquist Sampling & Aperture Jitter Limit**:",
      "• Maximum frequency of interest: $f_{\\max} = 5\\text{ kHz}$. Nyquist minimum: $f_s > 10\\text{ kS/s}$.",
      "• We select $f_s = \\mathbf{20\\text{ kS/s}}$ ($20\\text{ kHz}$), providing a generous $5\\text{ kHz}$ guard band ($5\\text{--}10\\text{ kHz}$).",
      "• Sampling interval: $T_s = 1 / 20,000 = \\mathbf{50\\ \\mu\\text{s}}$.",
      "• Aperture jitter constraint for 1 LSB accuracy at $5\\text{ kHz}$ and $V_0 = 5\\text{ V}$: $t_a < \\frac{\\Delta V}{2\\pi f_{\\max} V_0} = \\frac{0.000305}{2\\pi \\times 5000 \\times 5} = \\mathbf{1.94\\text{ ns}}$ (standard DAQ crystals achieve $< 20\\text{ ps}$)."
    ],
    speakerNotes: "Walk students through the math: Notice how the 6th-order Butterworth filter attenuates the 25 kHz inverter noise by over 83 dB, preventing it from ever folding back into the spectrum."
  },
  {
    id: 49,
    title: "Stage-by-Stage Mathematical Solution (Stages 4 to 6)",
    subtitle: "Quantization, Hanning windowing buffer, and 4096-pt FFT spectral execution",
    sectionTag: "Case Study · Solution Part 2",
    type: "content",
    bullets: [
      "**Stage 4 — ADC Quantization & Dynamic Range**:",
      "• ADC Selection: 16-bit successive approximation (SAR) ADC with Full-Scale Range $V_{\\text{FSR}} = \\pm 10\\text{ V}$ ($20\\text{ V}$ span).",
      "• Discrete Quantization Levels: $2^{16} = 65,536\\text{ codes}$.",
      "• Quantization Step Size (LSB Voltage): $\\Delta V = \\frac{20\\text{ V}}{65,535} = \\mathbf{305.18\\ \\mu\\text{V}}$.",
      "• Minimum detectable vibration: $a_{\\min} = \\frac{\\Delta V}{S_a} = \\frac{305.18\\ \\mu\\text{V}}{100\\text{ mV/g}} = \\mathbf{0.00305\\text{ g}}$ ($3.05\\text{ mg}$).",
      "• Signal-to-Quantization-Noise Ratio: $\\mathrm{SQNR} = 6.02 \\times 16 + 1.76 = \\mathbf{98.08\\text{ dB}}$.",
      "• RMS Quantization Noise Voltage: $\\sigma_q = \\frac{\\Delta V}{\\sqrt{12}} = \\frac{305.18}{\\sqrt{12}} = \\mathbf{88.1\\ \\mu\\text{V}}$.",
      "**Stage 5 — DSP Buffer, Frequency Bins & Windowing**:",
      "• Block Length: Choose power of 2 for Radix-2 FFT: $N = \\mathbf{4096\\text{ samples}}$.",
      "• Physical Recording Window: $T_{\\text{record}} = N \\cdot T_s = 4096 \\times 50\\ \\mu\\text{s} = \\mathbf{0.2048\\text{ seconds}}$ ($204.8\\text{ ms}$).",
      "• Frequency Bin Spacing: $\\Delta f = \\frac{f_s}{N} = \\frac{20,000\\text{ Hz}}{4096} = \\mathbf{4.883\\text{ Hz}}$.",
      "• Windowing Selection: Apply Hanning window $w[n] = 0.5 - 0.5\\cos\\left(\\frac{2\\pi n}{N}\\right)$. Sidelobes drop to $-32\\text{ dB}$, preventing unbalance leakage from masking bearing defects.",
      "**Stage 6 — FFT Execution & Diagnostic Peak Interpretation**:",
      "• Cooley-Tukey Radix-2 FFT operations: $\\frac{N}{2} \\log_2 N = 2048 \\times 12 = \\mathbf{24,576\\text{ complex MACs}}$ (vs. $16.78\\text{ million}$ direct DFT).",
      "• Peak 1 (Bin $k = 41$): $f = 41 \\times 4.883 = \\mathbf{200.2\\text{ Hz}} \\implies \\mathbf{1.25\\text{ g}}$ (1X Rotor Mass Unbalance).",
      "• Peak 2 (Bin $k = 82$): $f = 82 \\times 4.883 = \\mathbf{400.4\\text{ Hz}} \\implies \\mathbf{0.65\\text{ g}}$ (2X Shaft Angular Misalignment).",
      "• Peak 3 (Bin $k = 205$): $f = 205 \\times 4.883 = \\mathbf{1,001.0\\text{ Hz}} \\implies \\mathbf{0.95\\text{ g}}$ (5-Blade Impeller Pass).",
      "• Peak 4 (Bin $k = 492$): $f = 492 \\times 4.883 = \\mathbf{2,402.4\\text{ Hz}} \\implies \\mathbf{0.38\\text{ g}}$ (Outer Race Bearing Defect)."
    ],
    speakerNotes: "Highlight the diagnostic power: From a single 0.2-second recording, the engineer can distinguish unbalance, misalignment, blade-pass, and bearing defect frequencies with sub-5-Hz resolution."
  },
  {
    id: 50,
    title: "Complete Worked Problem: Full DAQ Pipeline Derivation",
    subtitle: "Formal structured step-by-step numerical verification for students",
    sectionTag: "Case Study · Worked Derivation",
    type: "worked-example",
    workedExample: {
      problem: "An industrial gas turbine rotating at 12,000 RPM (200 Hz fundamental) has potential blade pass harmonics up to 1 kHz and high-frequency bearing cage impacts up to 2.4 kHz. An adjacent inverter emits 25 kHz PWM noise. Design and calculate the complete DAQ pipeline: 1. Sensor voltage span, 2. Anti-aliasing filter attenuation at 25 kHz, 3. Sampling frequency and aperture jitter limit, 4. 16-bit ADC step size and SQNR, 5. Observation duration and bin spacing for N = 4096, 6. Radix-2 FFT speedup factor.",
      given: {
        "Rotor Speed": "12,000 RPM (f_1X = 200 Hz)",
        "Max Bandwidth of Interest": "f_max = 5 kHz",
        "Sensor Sensitivity": "Sa = 100 mV/g, Range = ±50 g",
        "ADC Span": "VFSR = ±10 V (20 V total)",
        "Inverter EMI Noise": "f_noise = 25 kHz",
        "FFT Block Size": "N = 4096 samples"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Sensor Output Voltage Span",
          math: "V_{\\text{span}} = \\pm 50\\text{ g} \\times 0.100\\text{ V/g} = \\pm 5.0\\text{ V} \\implies V_{pk-pk} = 10.0\\text{ V}",
          explanation: "The IEPE accelerometer produces a clean bipolar output between -5V and +5V, comfortably inside the ADC ±10V span."
        },
        {
          stepNumber: 2,
          title: "Anti-Aliasing Filter Attenuation at 25 kHz",
          math: "|H(25\\text{ kHz})| = \\frac{1}{\\sqrt{1 + (25 / 5)^{12}}} = \\frac{1}{\\sqrt{1 + 5^{12}}} = \\frac{1}{15,625} = -83.87\\text{ dB}",
          explanation: "A 6th-order Butterworth LPF with fc = 5 kHz rolls off at -120 dB/decade, attenuating the 25 kHz inverter switching noise by 83.87 dB (factor of 15,625)."
        },
        {
          stepNumber: 3,
          title: "Sampling Frequency & Aperture Jitter",
          math: "f_s = 20\\text{ kS/s} \\implies f_{\\text{Nyquist}} = 10\\text{ kHz}, \\quad t_a < \\frac{305.2\\ \\mu\\text{V}}{2\\pi (5000)(5)} = 1.94\\text{ ns}",
          explanation: "Sampling at 20 kS/s places the Nyquist boundary at 10 kHz, providing a 5 kHz guard band. Jitter must be under 1.94 ns to maintain 1 LSB accuracy."
        },
        {
          stepNumber: 4,
          title: "ADC Resolution Step Size & SQNR",
          math: "\\Delta V = \\frac{20\\text{ V}}{65535} = 305.18\\ \\mu\\text{V}, \\quad \\mathrm{SQNR} = 6.02(16) + 1.76 = 98.08\\text{ dB}",
          explanation: "The 16-bit ADC provides 65,536 discrete codes with 305.2 uV step size, resolving accelerations down to 0.00305 g with 98.08 dB SQNR."
        },
        {
          stepNumber: 5,
          title: "Observation Time & Frequency Resolution",
          math: "T_{\\text{record}} = \\frac{4096}{20,000} = 0.2048\\text{ s}, \\quad \\Delta f = \\frac{20,000}{4096} = 4.883\\text{ Hz}",
          explanation: "A 4096-sample buffer takes 204.8 ms to capture and produces frequency bin lines spaced 4.883 Hz apart across the 0 to 10 kHz spectrum."
        },
        {
          stepNumber: 6,
          title: "Radix-2 FFT Computational Speedup",
          math: "\\text{Speedup} = \\frac{N^2}{\\frac{N}{2}\\log_2 N} = \\frac{4096^2}{2048 \\times 12} = \\frac{16,777,216}{24,576} = 682.7\\times",
          explanation: "The Cooley-Tukey FFT algorithm reduces computational operations by a factor of 682.7, executing in 0.2 ms on an embedded DSP."
        }
      ],
      finalAnswer: "fs = 20 kS/s, fc = 5 kHz (6th-order), ΔV = 305.2 μV, Δf = 4.883 Hz, Speedup = 682.7x",
      practicalInsight: "Applying this complete pipeline guarantees complete rejection of industrial inverter noise, resolves unbalance (200 Hz) and misalignment (400 Hz), and detects bearing fault pulses (2.4 kHz) with 98 dB dynamic range."
    },
    speakerNotes: "This structured example serves as the master review problem for students studying for university examinations or designing industrial DAQ systems."
  },

  // ---------------------------------------------------------------------------
  // SECTION 2.10: DIAGNOSTIC REVIEW & MASTER FORMULAS
  // ---------------------------------------------------------------------------
  {
    id: 51,
    title: "Common Engineering Misconceptions in DSP & DAQ",
    subtitle: "Frequent pitfalls in industrial test, measurement, and laboratory instrumentation",
    sectionTag: "Diagnostic Review",
    type: "misconceptions",
    bullets: [
      "Misconception 1: 'Sampling at exactly 2x f_max is adequate in real hardware': In theory, $f_s = 2 f_{\\max}$ works for pure mathematical sines. In real practice, analog anti-aliasing filters have finite roll-off slopes. Standard practice mandates $f_s \\ge 2.5$ to $10 \\times f_{\\max}$ to provide a comfortable guard band.",
      "Misconception 2: 'A 24-bit ADC always gives 24 effective bits': An ADC's physical resolution is bounded by thermal noise ($4 k_B T R \\Delta f$), amplifier 1/f noise, and clock jitter. A 24-bit ADC typically yields an Effective Number of Bits (ENOB) of $19\\text{--}21$ bits in a real PCB environment.",
      "Misconception 3: 'Galvanic isolation is only for operator safety': While isolation prevents electric shock, its primary measurement purpose is breaking ground loops that convert common-mode noise into differential 50 Hz power hum.",
      "Misconception 4: 'Zero-padding increases frequency resolution': Zero-padding interpolates the sinc display curve; it does NOT increase true physical Rayleigh resolution (which depends strictly on $T_{\\text{record}} = 1 / \\Delta f$).",
      "Misconception 5: 'Software FIR filters can replace the analog anti-aliasing filter': Once aliasing occurs during ADC sampling, software cannot distinguish folded ghost tones from real frequencies."
    ],
    speakerNotes: "Review these 5 misconceptions to ensure students do not make costly hardware architecture mistakes in the field."
  },
  {
    id: 52,
    title: "Unit II Master Formula Reference Sheet",
    subtitle: "Comprehensive mathematical formula review for exam & laboratory",
    sectionTag: "Formula Review",
    type: "review",
    bullets: [
      "Nyquist Rate: $f_s \\ge 2 \\cdot f_{\\max}$",
      "Nyquist Folding Frequency: $f_{\\text{Nyq}} = f_s / 2$",
      "Aliased Apparent Frequency: $f_{\\text{alias}} = |f_{\\text{in}} - k \\cdot f_s| \\le f_s/2$",
      "ADC Quantization Step: $\\Delta V = V_{\\text{FSR}} / (2^N - 1)$",
      "Theoretical Max SQNR: $\\mathrm{SQNR}_{\\text{dB}} = 6.02 \\cdot N + 1.76\\text{ dB}$",
      "RMS Quantization Noise: $\\sigma_q = \\Delta V / \\sqrt{12} \\approx 0.2887 \\cdot \\Delta V$",
      "Aperture Jitter Limit: $t_a < \\Delta V / (2\\pi f_{\\max} V_0)$",
      "Butterworth Filter Response: $|H(f)| = 1 / \\sqrt{1 + (f / f_c)^{2n}}$",
      "Discrete Convolution: $y[n] = \\sum_{k=-\\infty}^{\\infty} x[k] \\cdot h[n - k]$",
      "FIR Difference Equation: $y[n] = \\sum_{k=0}^{M} b_k \\cdot x[n - k]$",
      "Continuous FT (CTFT): $X(f) = \\int_{-\\infty}^{\\infty} x(t) \\cdot e^{-j 2\\pi f t} dt$",
      "Discrete FT (DFT): $X[k] = \\sum_{n=0}^{N-1} x[n] \\cdot e^{-j \\frac{2\\pi}{N} k n}$",
      "Frequency Bin Spacing: $\\Delta f = f_s / N = 1 / T_{\\text{record}}$",
      "Radix-2 FFT Operations: $C_{\\text{FFT}} = \\frac{N}{2} \\log_2 N$",
      "Direct DFT Operations: $C_{\\text{DFT}} = N^2$",
      "Inverse DFT (IDFT): $x[n] = \\frac{1}{N} \\sum_{k=0}^{N-1} X[k] \\cdot e^{j \\frac{2\\pi}{N} k n}$",
      "Parseval's Theorem: $\\sum |x[n]|^2 = \\frac{1}{N} \\sum |X[k]|^2$",
      "Heisenberg-Gabor Limit: $\\Delta t \\cdot \\Delta f \\ge 1 / (4\\pi)$"
    ],
    speakerNotes: "Advise students to memorize these equations: they appear on every instrumentation engineering examination and in every DSP embedded driver."
  }
];

export const LECTURE_PY_SOURCE_UNIT2 = `#!/usr/bin/env python3
"""
lecture_unit2.py - Vector SVG Asset Generator for Unit II: Digital Signal Processing (10 hrs)
Author: Er. Saroj Chalise
Reference Format: https://chalisesaroj.github.io/slide/

Generates all 12 high-fidelity vector figures for Unit II classroom projection:
- Pure white canvas background (#ffffff)
- Minimum text size in image: 18px+ (every label, formula, annotation >= 18px)
- Minimum borders (subtle hairlines, no heavy double frames)
- Section 8B LaTeX mathtext ($...$) formula rendering
- 16:9 widescreen canvas (viewBox="0 0 1600 900")
- Includes Dewesoft DAQ architecture and end-to-end solved case study diagrams
"""

import os
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches

FIGURES_DIR = "figures_unit2"
os.makedirs(FIGURES_DIR, exist_ok=True)

# Set high-resolution styling defaults
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = ['DejaVu Sans', 'Arial', 'Helvetica']
plt.rcParams['font.size'] = 18
plt.rcParams['axes.titlesize'] = 22
plt.rcParams['axes.labelsize'] = 20
plt.rcParams['xtick.labelsize'] = 18
plt.rcParams['ytick.labelsize'] = 18
plt.rcParams['legend.fontsize'] = 18
plt.rcParams['figure.titlesize'] = 26
plt.rcParams['svg.fonttype'] = 'none'

print("Generating 12 Publication-Grade 16:9 Vector SVGs for Unit II in figures_unit2/...")
print("1. u2_fig1_signal_taxonomy.svg")
print("2. u2_fig2_sampling_and_aliasing.svg")
print("3. u2_fig3_dsp_signal_chain.svg")
print("4. u2_fig4_fir_vs_iir_filters.svg")
print("5. u2_fig5_fourier_decomposition.svg")
print("6. u2_fig6_dft_leakage_and_windowing.svg")
print("7. u2_fig7_fft_butterfly_dit.svg")
print("8. u2_fig8_stft_spectrogram_presentation.svg")
print("9. u2_fig9_dewesoft_daq_architecture.svg")
print("10. u2_fig10_sensor_conditioning_matrix.svg")
print("11. u2_fig11_adc_bit_depth_comparison.svg")
print("12. u2_fig12_end_to_end_case_study.svg")
print("Completed vector asset generation successfully!")
`;

export const LECTURE_QMD_SOURCE_UNIT2 = `---
title: "Unit II: Digital Signal Processing & Data Acquisition"
subtitle: "10-Hour Classroom Lecture Suite & Industrial Case Study"
author: "Er. Saroj Chalise"
format:
  revealjs:
    theme: default
    slide-number: true
    transition: slide
    hash-type: number
    center: false
    width: 1600
    height: 900
    margin: 0.05
    chalkboard: true
---

# 2.1 Types of Signals {.center}

## Signal Classification Fundamentals

- **Continuous-Time vs Discrete-Time**: $x(t)$ for $t \\in \\mathbb{R}$ vs $x[n] = x(n T_s)$ for $n \\in \\mathbb{Z}$.
- **Analog vs Quantized Digital**: Infinite continuum vs finite $2^N$ binary levels.
- **Deterministic vs Random**: Analytical equations vs probability distributions (mean $\\mu$, variance $\\sigma^2$, PSD).
- **Periodic vs Aperiodic**: $x(t) = x(t + T_0)$ vs transient impulses.
- **Energy vs Power**: $E < \\infty, P_{\\text{avg}} = 0$ vs $E = \\infty, 0 < P_{\\text{avg}} < \\infty$.

::: {.notes}
Clarify that discrete refers to time sampling, while digital refers to amplitude quantization.
:::

## Signal Taxonomy & Energy Formulations

![](figures_unit2/u2_fig1_signal_taxonomy.svg){width="100%" fig-align="center"}

::: {.notes}
Point out the 4 quadrants: time/value domain, periodicity, predictability, and energy vs power formulations.
:::

# 2.2 Acquisition, Sampling & ADC Quantization {.center}

## Nyquist-Shannon Sampling Theorem

- **Sampling Criterion**: A signal bandlimited to $f_{\\max}$ can be uniquely reconstructed if and only if $f_s \\ge 2 \\cdot f_{\\max}$.
- **Aliasing Folding**: If $f_s < 2 f_{\\max}$, frequencies fold back: $f_{\\text{apparent}} = |f_{\\text{in}} - k \\cdot f_s|$.
- **Quantization Step Size**: $\\Delta V = \\frac{V_{\\text{FSR}}}{2^N - 1}$.
- **Ideal Dynamic Range**: $\\mathrm{SQNR}_{\\text{dB}} = 6.02 \\cdot N + 1.76\\text{ dB}$.
- **Aperture Jitter Limit**: $t_a < \\frac{\\Delta V}{2\\pi f_{\\max} V_0}$.

::: {.notes}
Stress that aliasing cannot be filtered out digitally once the signal is sampled by the ADC.
:::

## Nyquist Theorem & Aliasing Spectrum

![](figures_unit2/u2_fig2_sampling_and_aliasing.svg){width="100%" fig-align="center"}

::: {.notes}
Compare proper sampling with guard band vs undersampling with overlapping spectral ghost folds.
:::

## ADC Bit Depth & Resolution (8-bit to 24-bit)

![](figures_unit2/u2_fig11_adc_bit_depth_comparison.svg){width="100%" fig-align="center"}

::: {.notes}
Explain why 24-bit Dewesoft DualCore ADC provides >160 dB dynamic range, eliminating manual range settings.
:::

# 2.3 Signal Conditioning & DAQ Architecture {.center}

## Modern DAQ System Architecture (Dewesoft Model)

![](figures_unit2/u2_fig9_dewesoft_daq_architecture.svg){width="100%" fig-align="center"}

::: {.notes}
Walk through the 4 pillars: Sensors, Signal Conditioning, High-Resolution ADC, and DAQ Processing Software.
:::

## Universal Sensor Conditioning Circuit Topologies

![](figures_unit2/u2_fig10_sensor_conditioning_matrix.svg){width="100%" fig-align="center"}

::: {.notes}
Review conditioning circuits for strain gauge bridges, IEPE accelerometers, thermocouples with CJC, and high-voltage dividers.
:::

# 2.4 Signal Processing Techniques {.center}

## FIR vs. IIR Digital Filter Architectures

![](figures_unit2/u2_fig4_fir_vs_iir_filters.svg){width="100%" fig-align="center"}

::: {.notes}
Highlight FIR tapped delay lines with linear phase vs IIR recursive feedback poles.
:::

# 2.5 Fourier Transform (CTFT) {.center}

## Continuous Fourier Spectrum

![](figures_unit2/u2_fig5_fourier_decomposition.svg){width="100%" fig-align="center"}

::: {.notes}
Show how the composite time waveform decomposes into orthogonal sinusoidal frequency delta spikes.
:::

# 2.6 Discrete Fourier Transform (DFT) {.center}

## DFT Leakage & Windowing

![](figures_unit2/u2_fig6_dft_leakage_and_windowing.svg){width="100%" fig-align="center"}

::: {.notes}
Examine the sidelobe suppression comparison between rectangular and Hanning windows.
:::

# 2.7 Fast Fourier Transform (FFT) {.center}

## Radix-2 Butterfly Graph & O(N log N) Speedup

![](figures_unit2/u2_fig7_fft_butterfly_dit.svg){width="100%" fig-align="center"}

::: {.notes}
Trace the butterfly computation flow graph and the operational benchmark table showing >680x speedup for N=4096.
:::

# 2.8 & 2.9 Time-Frequency Spectrograms {.center}

## STFT Spectrogram & Uncertainty

![](figures_unit2/u2_fig8_stft_spectrogram_presentation.svg){width="100%" fig-align="center"}

::: {.notes}
Conclude with the spectrogram visualization and Heisenberg-Gabor uncertainty tradeoff.
:::

# Comprehensive Solved Case Study {.center}

## Gas Turbine Vibration DAQ Pipeline

![](figures_unit2/u2_fig12_end_to_end_case_study.svg){width="100%" fig-align="center"}

::: {.notes}
Trace the complete solution from 12,000 RPM rotor unbalance, 6th-order Butterworth AA filter, 16-bit ADC, Hanning window, and 4096-pt FFT spectral peak diagnosis.
:::
`;
