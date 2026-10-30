/**
 * Unit II: Digital Signal Processing & Data Acquisition (10 hrs)
 * Complete Quarto Reveal.js presentation package and curriculum
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 *
 * Upgraded with:
 * - Engaging Storytelling Arc: What is a signal? Nature vs. Computers
 * - 5-Dimensional Signal Taxonomy (Time, Value, Predictability, Periodicity, Energy)
 * - The Fourier Story: Fruit Smoothie & Musical Chord Analogy, CTFT, the Computer's Dilemma, DFT, FFT, IDFT
 * - Simpler End-to-End Case Study: Workshop Electric Motor Health Monitor (LM35 Temp + Accelerometer Vibration -> Conditioning -> 12-bit ADC -> RAM Buffer -> FFT Diagnostic)
 * - Comprehensive worked problems, misconceptions, and master formula sheet
 */

import { SlideData } from '../types/chapterDeck';

export const UNIT2_SLIDES_DATA: SlideData[] = [
  // ===========================================================================
  // ACT 1: THE STORY OF SIGNALS & SIGNAL TAXONOMY
  // ===========================================================================
  {
    id: 1,
    title: "Unit II: Digital Signal Processing & Data Acquisition",
    subtitle: "From Physical Phenomena to Digital Intelligence: Signal Taxonomy, Modern DAQ Architecture, The Fourier Transform Story, and Solved Sensor-to-Display Case Study",
    sectionTag: "Unit II · 10 Hours",
    type: "title",
    speakerNotes: "Welcome students to Unit II: Digital Signal Processing & Data Acquisition. In this module, authored by Er. Saroj Chalise, we explore how raw physical reality—the rhythmic beat of a heart, the heat of an engine, or the hum of an electric motor—is captured, conditioned, converted into binary numbers, and analyzed using the profound mathematics of the Fourier Transform."
  },
  {
    id: 2,
    title: "Course Learning Objectives",
    subtitle: "Core competencies to be mastered in Unit II",
    sectionTag: "Syllabus Objectives",
    type: "objectives",
    bullets: [
      "**Understand What a Signal Truly Is**: Grasp how physical phenomena convey information across time and space.",
      "**Master the 5 Taxonomic Dimensions of Signals**: Classify waveforms by time domain, amplitude values, predictability, periodicity, and energy.",
      "**Bridge Nature to Computers (DAQ & Sampling)**: Apply the Nyquist-Shannon theorem, prevent irreversible aliasing, and calculate ADC quantization resolution.",
      "**Unravel the Fourier Story**: Understand intuitive analogies (Fruit Smoothie, Musical Chords) for CTFT, why computers need the DFT, how the Cooley-Tukey FFT slashes computation, and how IFT reconstructs waveforms.",
      "**Trace a Complete End-to-End Case Study**: Follow raw analog data from an LM35 temperature sensor and piezoelectric accelerometer into conditioning filters, 12-bit ADC sampling, computer RAM storage, and real-time FFT presentation on a monitor."
    ],
    speakerNotes: "Highlight to students that every modern instrument—from your smartphone to an aerospace vibration monitoring rack—depends directly on these exact principles."
  },
  {
    id: 3,
    title: "Unit II Curriculum Roadmap",
    subtitle: "10-Hour structured pedagogical journey across 5 narrative acts",
    sectionTag: "Curriculum Overview",
    type: "roadmap",
    columns: {
      left: [
        "**Act 1: The Story of Signals**: Physical origins, the engineering dilemma, and the 5 taxonomic classification dimensions (2.1).",
        "**Act 2: The Acquisition Bridge**: Sampling speed limit, the aliasing ghost, anti-aliasing filters, and ADC quantization depth (2.2).",
        "**Act 3: Modern DAQ Architecture**: Dewesoft 4-pillar model, sensor conditioning matrix, galvanic isolation, and noise rejection (2.3)."
      ],
      right: [
        "**Act 4: The Fourier Transform Story**: Smoothie analogy, CTFT prism, computer's dilemma, DFT bins, Cooley-Tukey FFT, and IDFT synthesis (2.5–2.8).",
        "**Act 5: Simpler Solved Case Study**: Workshop Electric Motor (75°C heat + 50 Hz vibration) from sensor transduction to 12-bit ADC, RAM buffer, and FFT screen display.",
        "**Review & Mastery**: Comprehensive worked numerical problem, top 5 misconceptions, and master formula sheet."
      ]
    },
    speakerNotes: "Walk students through the roadmap: we begin with physical intuition, build the hardware and algorithmic bridge, and culminate in a full practical engineering implementation."
  },
  {
    id: 4,
    title: "The Story of Signals: Nature Doesn't Speak in 1s and 0s",
    subtitle: "How physical reality communicates information to engineers",
    sectionTag: "2.1 Story of Signals",
    type: "concept",
    bullets: [
      "**Signals Are Everywhere in Nature**: The electrical voltage pulsing across a human heart (ECG), the pressure waves vibrating your eardrum when a friend speaks, the mechanical shudder of a bridge in the wind, and the thermal expansion of mercury in a boiler.",
      "**The Definition of a Signal**: A signal is any physical quantity or disturbance that varies over time, space, or another independent variable and carries measurable information about the state of a system.",
      "**The Fundamental Reality**: In the physical universe, energy and matter vary smoothly and continuously. Time has no gaps, and voltage can take any value along an infinite mathematical continuum.",
      "**The Engineer's Mission**: To analyze, optimize, automate, or protect machines, engineers must capture these fleeting physical fluctuations and translate them into a language that digital computers can understand."
    ],
    takeaway: "A signal is a physical disturbance carrying information; nature expresses itself as an unbroken continuum of continuous time and infinite amplitudes.",
    speakerNotes: "Begin the lecture by asking students: What is a signal? Mention that before humans invented electronics, sound waves and heartbeats were already signals. Our job as instrumentation engineers is to listen, record, and interpret them."
  },
  {
    id: 5,
    title: "The Great Engineering Dilemma: Nature vs. Computers",
    subtitle: "Two fundamentally incompatible worlds that must communicate perfectly",
    sectionTag: "2.1 Engineering Dilemma",
    type: "analogy",
    analogy: {
      everydayConcept: "Storing an Eagle's Flight Path in a Finite Notebook",
      technicalMapping: "Smooth continuous eagle flight is continuous-time x(t); snapshot photos at 30 fps is sampling fs; rounding altitude to nearest whole meter is 12-bit ADC quantization; notebook photo pages is RAM buffer array.",
      whyItWorks: "Both computers and notebooks have finite capacity; infinite real-world continuity must be discretized in time and quantized in amplitude to be preserved digitally.",
      limitsOfAnalogy: "An eagle's flight is 3-dimensional, whereas electrical sensor voltages are scalar 1-dimensional quantities mapped to positive and negative voltage rails."
    },
    speakerNotes: "This analogy cements the fundamental reason DSP exists: computers cannot store infinity. We must sample time and quantize amplitude, but do so without losing any critical physical information."
  },
  {
    id: 6,
    title: "Signal Classification Fundamentals: The 5 Taxonomic Dimensions",
    subtitle: "The formal framework for categorizing any engineering signal",
    sectionTag: "2.1 Signal Taxonomy",
    type: "types",
    typesGrid: [
      {
        typeName: "1. Time Continuity",
        description: "Whether the signal exists for all real time moments or only at discrete clock ticks.",
        keyFeature: "Continuous-Time x(t) vs. Discrete-Time x[n]",
        example: "Analog sensor voltage vs. sampled array in computer RAM",
        badge: "Time Domain"
      },
      {
        typeName: "2. Amplitude Values",
        description: "Whether the amplitude can take infinite continuous values or is rounded to binary levels.",
        keyFeature: "Analog Continuum vs. Quantized Digital Levels",
        example: "Potentiometer wiper voltage vs. 12-bit ADC integer code (0 to 4095)",
        badge: "Value Domain"
      },
      {
        typeName: "3. Predictability",
        description: "Whether the future value of the signal can be predicted with an exact mathematical formula.",
        keyFeature: "Deterministic vs. Random (Stochastic)",
        example: "50 Hz mains sine wave vs. thermal Johnson noise",
        badge: "Certainty"
      },
      {
        typeName: "4. Repetition",
        description: "Whether the waveform repeats an identical pattern after a fixed fundamental period T0.",
        keyFeature: "Periodic (x(t+T0) = x(t)) vs. Aperiodic / Transient",
        example: "Rotating motor vibration vs. hammer impact shock pulse",
        badge: "Periodicity"
      },
      {
        typeName: "5. Energy Persistence",
        description: "Whether the signal has finite total energy or persistent non-zero average power.",
        keyFeature: "Energy Signals (E < ∞, P = 0) vs. Power Signals (E = ∞, 0 < P < ∞)",
        example: "Lightning strike transient vs. continuous electrical power grid",
        badge: "Energy Domain"
      }
    ],
    speakerNotes: "Walk students through each of the 5 classification axes. Emphasize that every signal encountered in instrumentation can be classified along all 5 dimensions simultaneously."
  },
  {
    id: 7,
    title: "Taxonomy Deep-Dive: Continuous vs. Discrete & Analog vs. Digital",
    subtitle: "Clarifying the most common point of student confusion",
    sectionTag: "2.1 Taxonomy Detail",
    type: "concept",
    bullets: [
      "**Discrete-Time ≠ Digital**: A common trap is assuming that 'discrete' and 'digital' are synonyms. They describe two completely different axes!",
      "**Continuous-Time $x(t)$**: Defined for every instantaneous real moment $t \\in \\mathbb{R}$. Example: The voltage produced by a thermocouple welded to a turbine casing.",
      "**Discrete-Time $x[n]$**: Defined only at integer indices $n \\in \\mathbb{Z}$, representing periodic snapshots taken every $T_s$ seconds: $x[n] = x(n \\cdot T_s)$.",
      "**Analog vs. Digital (Amplitude Axis)**: An analog signal has unquantized, infinite amplitude precision. A digital signal has both discrete time *and* quantized amplitude rounded to $2^N$ binary levels.",
      "**Can a signal be discrete in time but analog in amplitude?** YES! An analog Sample-and-Hold (S/H) capacitor holds frozen voltages at discrete clock ticks, but the voltage stored on the capacitor is still an unquantized analog value."
    ],
    takeaway: "Sampling discretizes the time axis; quantization discretizes the amplitude axis. Only when both operations are performed is a signal truly digital.",
    speakerNotes: "Emphasize this distinction! Draw an analog S/H circuit on the board to illustrate how discrete-time analog signals exist in hardware right before the ADC comparator ladder."
  },
  {
    id: 8,
    title: "Taxonomy Deep-Dive: Deterministic vs. Random & Energy vs. Power",
    subtitle: "Mathematical modeling of predictability and physical energy",
    sectionTag: "2.1 Energy & Predictability",
    type: "formula",
    formulaBlock: {
      equation: "E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt < \\infty \\quad \\text{vs.} \\quad P_{\\text{avg}} = \\lim_{T \\to \\infty} \\frac{1}{T} \\int_{-T/2}^{T/2} |x(t)|^2 dt < \\infty",
      label: "Energy and Power Signal Formulations",
      description: "Mathematical criteria separating transient energy signals from persistent power signals.",
      symbols: [
        { symbol: "E", name: "Total Energy", unit: "J or V^2 s", description: "Integral of squared signal magnitude across all infinite time" },
        { symbol: "P_avg", name: "Average Power", unit: "W or V^2", description: "Time-averaged power over an infinite observation interval" },
        { symbol: "x(t)", name: "Signal Waveform", unit: "V", description: "Time-domain voltage or physical measurand waveform" }
      ]
    },
    bullets: [
      "**Deterministic Signals**: Completely describable by an exact closed-form equation, such as $x(t) = A \\sin(2\\pi f_0 t + \\phi)$. Its future value at any instant $t_1$ is known with 100% certainty.",
      "**Random (Stochastic) Signals**: Governed by chance and physical chaos (thermal electron agitation, atmospheric turbulence). Modeled using probability density functions (PDF), mean $\\mu$, variance $\\sigma^2$, and power spectral density (PSD).",
      "**Energy Signals**: Transient events that start and decay to zero (e.g., an acoustic sonic boom, a seismic earthquake shock). Total energy $E$ is finite, but average power over all infinite time is $P_{\\text{avg}} = 0$.",
      "**Power Signals**: Persistent, ongoing waveforms that continue indefinitely (e.g., a 50 Hz AC line voltage, continuous motor vibration). Total energy $E = \\infty$, but time-averaged power $P_{\\text{avg}}$ is finite and non-zero."
    ],
    speakerNotes: "Remind students: A signal can NEVER be both an energy signal and a power signal simultaneously! If energy is finite, average power is zero. If average power is finite, total energy is infinite."
  },
  {
    id: 9,
    title: "Figure 2.1: Signal Taxonomy & Classification Vector Architecture",
    subtitle: "Complete visual map of time, value, predictability, and energy domains",
    sectionTag: "2.1 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig1",
    speakerNotes: "Point out the 4 visual quadrants in Figure 2.1: continuous vs discrete stem plot, periodic vs transient impulse, deterministic wave with random noise overlay, and the formal integrals for Energy signals vs Power signals."
  },
  {
    id: 10,
    title: "Check Understanding: Classifying Real-World Signals",
    subtitle: "Formative evaluation of signal taxonomy concepts",
    sectionTag: "2.1 Formative Quiz",
    type: "check-understanding",
    quiz: {
      question: "An engineer records an acoustic shockwave from an explosive valve test: the sound pressure spikes to 140 dB within 2 milliseconds and dies out completely after 50 milliseconds. How is this signal classified?",
      options: [
        "Periodic power signal with continuous frequency harmonics",
        "Deterministic power signal with infinite total energy",
        "Aperiodic energy signal with finite total energy and zero average power over infinite time",
        "Random discrete-time signal with non-zero average power"
      ],
      correctIndex: 2,
      explanation: "Because the explosion is a transient shock that starts, spikes, and completely decays to zero after 50 ms, the time integral of |x(t)|² from -∞ to +∞ converges to a finite number (E < ∞). Dividing finite energy by infinite time t ∈ (-∞, ∞) yields exactly zero average power (P_avg = 0). It does not repeat, making it strictly an aperiodic energy signal."
    },
    speakerNotes: "Walk students through the explanation. Transient physical phenomena are always energy signals."
  },

  // ===========================================================================
  // ACT 2: BRIDGING NATURE TO COMPUTERS (SAMPLING & QUANTIZATION)
  // ===========================================================================
  {
    id: 11,
    title: "2.2 The Acquisition Bridge: Sampling & Quantization",
    sectionTag: "Topic 2.2",
    type: "section-divider",
    takeaway: "To bring continuous reality into a microprocessor, we must slice continuous time into samples and partition infinite voltage into discrete binary numbers.",
    speakerNotes: "Transition into Section 2.2: How hardware converts analog reality into digital numbers. Cover the Nyquist theorem, aliasing, and ADC bit depth."
  },
  {
    id: 12,
    title: "The Nyquist-Shannon Speed Limit: How Fast Must We Sample?",
    subtitle: "The mathematical threshold that prevents information loss",
    sectionTag: "2.2 Sampling Theorem",
    type: "concept",
    bullets: [
      "**The Fundamental Question**: How many snapshots per second must a computer take to capture a continuous analog wave without losing a single drop of information?",
      "**Harry Nyquist and Claude Shannon's Discovery**: To capture a sine wave, you need at least two samples per cycle—one to catch the positive crest, and one to catch the negative trough.",
      "**The Nyquist-Shannon Sampling Theorem**: A continuous signal $x(t)$ bandlimited to a maximum frequency $f_{\\max}$ can be *perfectly and uniquely reconstructed* from its samples if and only if the sampling frequency $f_s$ satisfies:",
      "$$f_s \\ge 2 \\cdot f_{\\max}$$",
      "**The Nyquist Frequency ($f_N$)**: The maximum signal frequency that can be safely recorded without distortion is exactly half the sampling rate: $f_N = f_s / 2$.",
      "**Engineering Practice**: In real instrumentation, engineers never sample at bare minimum $2 \\times f_{\\max}$. We use an oversampling guard band ($f_s \\ge 2.56 \\times f_{\\max}$ to $5 \\times f_{\\max}$) to allow analog anti-aliasing filters to roll off cleanly."
    ],
    takeaway: "The sampling rate must be strictly greater than twice the highest frequency component present in the analog signal to guarantee perfect mathematical reconstruction.",
    speakerNotes: "Emphasize that Nyquist's theorem guarantees 100% information preservation—not an approximation—provided the signal is bandlimited and sampled at fs >= 2*fmax."
  },
  {
    id: 13,
    title: "The Ghost in the Machine: Aliasing & The Wagon-Wheel Illusion",
    subtitle: "What catastrophic failure occurs when you sample too slowly?",
    sectionTag: "2.2 Aliasing Phenomenon",
    type: "analogy",
    analogy: {
      everydayConcept: "The Wagon-Wheel Illusion in Old Movies",
      technicalMapping: "High-speed wheel rotation (f > 12 rev/s) represents high-frequency analog signal; 24 fps camera shutter represents ADC sampling rate fs; illusion of wheel spinning backwards at 3 rev/s represents aliased ghost tone.",
      whyItWorks: "When sampling frequency is less than twice the rotation frequency (fs < 2*f_in), the discrete camera snapshots catch spokes at deceptive angles, creating a false low frequency in the digital data.",
      limitsOfAnalogy: "The human brain perceives visual rotation, whereas an ADC captures scalar electrical voltage; however, the mathematics of stroboscopic undersampling are identical."
    },
    speakerNotes: "The wagon-wheel illusion is the most intuitive way for students to visualize aliasing. Undersampling creates a real, physical illusion in the digital data that looks exactly like a low frequency."
  },
  {
    id: 14,
    title: "Figure 2.2: Nyquist Sampling & Spectral Aliasing Folding",
    subtitle: "Visualizing proper sampling vs. destructive spectral folding",
    sectionTag: "2.2 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig2",
    speakerNotes: "Guide students through Figure 2.2: point out how proper sampling separates spectral copies with clean guard bands, whereas undersampling causes the copies to overlap and fold back into the baseband."
  },
  {
    id: 15,
    title: "The Airport Security Principle: Why Software Cannot Fix Aliasing",
    subtitle: "Why an analog anti-aliasing low-pass filter is mandatory before the ADC",
    sectionTag: "2.2 Anti-Aliasing Filter",
    type: "concept",
    bullets: [
      "**The Fatal Misconception**: Students often believe: 'If high-frequency noise enters my computer, I will simply write a Python or MATLAB digital filter to remove it!'",
      "**The Fatal Reality**: Once aliasing occurs, it is mathematically irreversible. If an undersampled 90 Hz vibration tone folds across a 100 Hz sampling rate, it registers in memory as a pure 10 Hz tone.",
      "**Zero Software Clues**: The microprocessor has zero mathematical way to know whether that 10 Hz number came from a genuine 10 Hz shaft oscillation or an aliased 90 Hz noise spike. The data is permanently poisoned.",
      "**The Airport Security Rule**: Just as airport security must inspect passengers *before* they board the airplane, unwanted high frequencies must be eliminated by a physical analog low-pass filter *before* the ADC takes a single sample!",
      "**The Anti-Aliasing Filter (AAF)**: An active analog low-pass filter (Butterworth, Chebyshev, or Bessel) placed strictly before the Sample-and-Hold circuit with cutoff $f_c \\le f_s / 2$."
    ],
    takeaway: "Aliasing cannot be filtered out digitally in software. An analog anti-aliasing low-pass filter is mandatory before the Analog-to-Digital Converter.",
    speakerNotes: "Reiterate this strongly: No algorithm on earth can separate an aliased tone from a genuine low-frequency signal once it enters computer memory. Prevention must happen in hardware."
  },
  {
    id: 16,
    title: "Quantization: Turning Continuous Voltages into Binary Integers",
    subtitle: "Partitioning full-scale voltage into 2^N discrete numerical bins",
    sectionTag: "2.2 Quantization Depth",
    type: "formula",
    formulaBlock: {
      equation: "\\Delta V = V_{\\text{LSB}} = \\frac{V_{\\text{FS}}}{2^N} \\quad \\text{and} \\quad \\mathrm{SNR}_{\\text{ideal}} = 6.02 \\cdot N + 1.76\\text{ dB}",
      label: "ADC Quantization Resolution and Dynamic Range",
      description: "Least Significant Bit (LSB) step voltage width and theoretical Signal-to-Quantization-Noise Ratio.",
      symbols: [
        { symbol: "\\Delta V", name: "Quantization Step Size (V_LSB)", unit: "V", description: "Smallest voltage change capable of altering the least significant binary bit" },
        { symbol: "V_FS", name: "Full-Scale Voltage Range", unit: "V", description: "Total active analog voltage span of the converter (e.g., 0 to 5.0 V)" },
        { symbol: "N", name: "ADC Bit Depth", unit: "bits", description: "Number of binary output bits (8, 12, 16, or 24 bits)" },
        { symbol: "SNR", name: "Signal-to-Noise Ratio", unit: "dB", description: "Ratio of full-scale sinusoidal signal power to theoretical quantization noise power" }
      ]
    },
    bullets: [
      "**Finite Staircase Approximation**: An $N$-bit converter has exactly $2^N$ discrete states. Any continuous voltage falling between steps is rounded to the nearest level.",
      "**Quantization Error ($e_q$)**: Bounded within half a step size: $-\\frac{\\Delta V}{2} \\le e_q \\le +\\frac{\\Delta V}{2}$.",
      "**The 6.02 dB Rule of Thumb**: Every single bit added to an ADC cuts the voltage step size in half and adds $+6.02\\text{ dB}$ of clean dynamic range!",
      "**8-bit Microcontroller**: $2^8 = 256$ bins, $\\Delta V = 19.5\\text{ mV}$ (for $5\\text{ V}$), $\\mathrm{SNR} = 49.9\\text{ dB}$.",
      "**12-bit DAQ System**: $2^{12} = 4096$ bins, $\\Delta V = 1.22\\text{ mV}$ (for $5\\text{ V}$), $\\mathrm{SNR} = 74.0\\text{ dB}$.",
      "**16-bit Professional DAQ**: $2^{16} = 65,536$ bins, $\\Delta V = 76.3\\,\\mu\\text{V}$ (for $5\\text{ V}$), $\\mathrm{SNR} = 98.1\\text{ dB}$."
    ],
    speakerNotes: "Highlight how bit depth translates directly to measurement sensitivity. A 12-bit ADC can resolve a 1.22 mV change, whereas an 8-bit ADC is blind to anything below 19.5 mV."
  },
  {
    id: 17,
    title: "Figure 2.3: ADC Bit-Depth & Quantization Resolution Comparison",
    subtitle: "Visual comparison of 8-bit, 12-bit, 16-bit, and 24-bit DualCore conversion",
    sectionTag: "2.2 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig11",
    speakerNotes: "Show students Figure 2.3: notice how 8-bit shows visible staircase steps, 12-bit refines the curve, 16-bit looks near-analog, and 24-bit provides over 160 dB dynamic range for high-end instruments."
  },
  {
    id: 18,
    title: "Modern 4-Pillar DAQ System Architecture",
    subtitle: "The Dewesoft instrumentation model from sensor to computer display",
    sectionTag: "2.3 DAQ Architecture",
    type: "figure",
    figureKey: "u2_fig9",
    speakerNotes: "Walk through the 4 core pillars in Figure 2.3: (1) Sensors interfacing physical reality, (2) Analog Signal Conditioning, (3) High-Resolution ADC, and (4) DAQ Processing Software."
  },
  {
    id: 19,
    title: "Universal Sensor Conditioning Matrix",
    subtitle: "Circuit topologies required to match diverse industrial sensors to the ADC",
    sectionTag: "2.3 Signal Conditioning",
    type: "figure",
    figureKey: "u2_fig10",
    speakerNotes: "Review the conditioning topologies in Figure 2.4: Wheatstone bridge for strain gauges, constant current IEPE for vibration accelerometers, cold junction compensation for thermocouples, and high-voltage dividers."
  },

  // ===========================================================================
  // ACT 3: THE FOURIER TRANSFORM STORY (UNMIXING WAVES INTO FREQUENCIES)
  // ===========================================================================
  {
    id: 20,
    title: "2.5–2.8 The Fourier Transform Story",
    subtitle: "Unmixing the Hidden Symphony of Waves into Pure Musical Notes",
    sectionTag: "Topic 2.5–2.8",
    type: "section-divider",
    takeaway: "The Fourier Transform is the mathematical prism of engineering: it unmixes tangled time waveforms into their fundamental harmonic frequency components.",
    speakerNotes: "Introduce Act 3: The Fourier Story. Jean-Baptiste Joseph Fourier's astonishing insight that ANY waveform can be constructed from pure sine and cosine waves."
  },
  {
    id: 21,
    title: "The Fruit Smoothie & Musical Chord Analogy",
    subtitle: "An intuitive plain-English way to grasp the Fourier Transform",
    sectionTag: "2.5 Fourier Intuition",
    type: "analogy",
    analogy: {
      everydayConcept: "The Fruit Smoothie Centrifuge & The Musical Ear",
      technicalMapping: "A blended smoothie is the composite time-domain wave x(t); Fourier is the centrifuge separating 2 bananas, 5 strawberries, 12 blueberries; pure musical notes (C, E, G) are spectral frequency peaks |X(f)|.",
      whyItWorks: "Complex physical signals are linear superpositions of pure sinusoidal harmonics; the Fourier integral projects the mixture onto orthogonal sines to isolate each ingredient.",
      limitsOfAnalogy: "Fruit smoothie ingredients are positive scalars, whereas Fourier harmonics have both amplitude and phase angles (complex numbers with real and imaginary parts)."
    },
    speakerNotes: "Tell these two stories warmly to the class. Students who struggle with complex exponentials immediately understand the Fourier Transform once they picture un-blending a fruit smoothie or recognizing notes in a musical chord."
  },
  {
    id: 22,
    title: "What is the Continuous Fourier Transform (CTFT)?",
    subtitle: "The theoretical mathematical prism that unweaves continuous time",
    sectionTag: "2.5 Continuous FT",
    type: "formula",
    formulaBlock: {
      equation: "X(f) = \\int_{-\\infty}^{\\infty} x(t) \\cdot e^{-j 2\\pi f t} dt \\quad \\text{where } e^{-j 2\\pi f t} = \\cos(2\\pi f t) - j \\sin(2\\pi f t)",
      label: "Continuous-Time Fourier Transform (CTFT)",
      description: "Projecting a continuous time signal onto complex sinusoidal basis functions across all frequencies.",
      symbols: [
        { symbol: "X(f)", name: "Frequency Spectrum", unit: "V/Hz", description: "Complex spectral density representing amplitude and phase at frequency f" },
        { symbol: "x(t)", name: "Time-Domain Signal", unit: "V", description: "Continuous physical voltage or measurand waveform defined for all t" },
        { symbol: "f", name: "Continuous Frequency", unit: "Hz", description: "Test frequency variable sweeping from -infinity to +infinity" },
        { symbol: "e^{-j 2\\pi f t}", name: "Complex Phasor", unit: "rad", description: "Euler's spinning orthogonal sine and cosine test probe" }
      ]
    },
    bullets: [
      "**How It Works**: The formula multiplies the signal $x(t)$ by a spinning complex phasor at test frequency $f$. If $x(t)$ contains that exact frequency, the product aligns and integrates to a massive value! If not, positive and negative lobes cancel out to zero.",
      "**The Theoretical Prism**: Just as a glass prism breaks white sunlight into red, green, and violet beams, the CTFT breaks a complicated electrical signal into pure sinusoids.",
      "**Continuous Input, Continuous Output**: Both time $t$ and frequency $f$ are continuous variables stretching from $-\\infty$ to $+\\infty$."
    ],
    speakerNotes: "Explain Euler's formula e^(-j*2*pi*f*t) = cos - j*sin. Point out that the Fourier Transform is essentially computing the correlation between the signal and pure sine waves of every conceivable frequency."
  },
  {
    id: 23,
    title: "Figure 2.4: Fourier Time-to-Frequency Decomposition",
    subtitle: "Visualizing a composite square/complex wave unmixing into harmonic sine waves",
    sectionTag: "2.5 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig5",
    speakerNotes: "Walk students through Figure 2.5: point out the composite time wave on the left, the individual orthogonal sinusoidal harmonics in the middle, and the resulting razor-sharp frequency spectrum delta spikes on the right."
  },
  {
    id: 24,
    title: "The Computer's Dilemma: Why Machines Cannot Compute the CTFT",
    subtitle: "Why the theoretical integral fails inside real digital computers",
    sectionTag: "2.6 Computer's Dilemma",
    type: "concept",
    bullets: [
      "**The Impasse**: The CTFT is mathematically gorgeous, but no computer on Earth can calculate it directly!",
      "**Reason 1: Infinite Time Integral**: The CTFT integrates from $t = -\\infty$ to $t = +\\infty$. A computer would have to wait until the end of time itself before finishing the calculation!",
      "**Reason 2: Continuous Data Density**: Between 0 and 1 second, there are an uncountably infinite number of real time instants. Computer RAM can only hold a finite list of $N$ stored numbers.",
      "**Reason 3: Continuous Frequency Spectrum**: The output $X(f)$ is also continuous, requiring infinite memory to store every decimal frequency.",
      "**The Digital Solution**: We need an algorithm that takes **$N$ sampled numbers in time** and produces **$N$ discrete frequency numbers**—a transform made specifically for computers. That algorithm is the **Discrete Fourier Transform (DFT)**!"
    ],
    takeaway: "Computers have finite memory and finite time; they cannot calculate continuous integrals to infinity. The Discrete Fourier Transform (DFT) was invented to evaluate discrete samples in finite time.",
    speakerNotes: "This slide bridges theory to engineering reality: students understand why the textbook introduces DFT immediately after CTFT."
  },
  {
    id: 25,
    title: "What is the Discrete Fourier Transform (DFT)?",
    subtitle: "The discrete digital algorithm that runs inside microprocessors",
    sectionTag: "2.6 Discrete FT",
    type: "formula",
    formulaBlock: {
      equation: "X[k] = \\sum_{n=0}^{N-1} x[n] \\cdot e^{-j \\frac{2\\pi}{N} k n} \\quad \\text{for } k = 0, 1, 2, \\dots, N-1",
      label: "Discrete Fourier Transform (DFT)",
      description: "Evaluating N time-domain samples into N discrete frequency bins.",
      symbols: [
        { symbol: "X[k]", name: "k-th Frequency Bin", unit: "Complex Number", description: "Spectral amplitude and phase at discrete frequency f_k = k * (fs / N)" },
        { symbol: "x[n]", name: "n-th Time Sample", unit: "V", description: "Digital integer or float sample stored in computer RAM array" },
        { symbol: "N", name: "Transform Length", unit: "samples", description: "Total number of samples collected in the time record buffer" },
        { symbol: "k", name: "Frequency Bin Index", unit: "integer", description: "Harmonic index ranging from DC (k=0) to Nyquist (k=N/2)" }
      ]
    },
    bullets: [
      "**Finite In, Finite Out**: Takes $N$ numbers stored in a computer memory array `x[n]` and produces $N$ complex frequency numbers `X[k]`.",
      "**Frequency Bin Spacing**: The spacing between adjacent frequency bins is governed strictly by the record length $T_{\\text{record}}$:",
      "$$\\Delta f = \\frac{f_s}{N} = \\frac{1}{N \\cdot T_s} = \\frac{1}{T_{\\text{record}}}$$",
      "**To get finer frequency resolution**, you do NOT increase the sampling rate $f_s$; you must **record for a longer time duration** $T_{\\text{record}}$!"
    ],
    speakerNotes: "Highlight the bin spacing formula Delta f = fs / N = 1 / T_record. This is a favorite exam question and a critical design parameter in vibration analysis."
  },
  {
    id: 26,
    title: "The Truncation Penalty: Spectral Leakage & Windowing",
    subtitle: "What happens when you chop infinite reality into a finite computer buffer?",
    sectionTag: "2.6 Windowing & Leakage",
    type: "concept",
    bullets: [
      "**The Slicing Effect**: When a computer collects $N$ samples, it abruptly chops the continuous signal with a rectangular observation window. The math assumes this block repeats forever.",
      "**Spectral Leakage**: If the recorded signal does not contain an exact integer number of cycles within the window, the sudden discontinuity at the edges splatters energy across adjacent frequency bins. A pure single sine tone leaks into surrounding bins, looking like a wide circus tent instead of a sharp needle spike!",
      "**The Antidote: Window Functions**: To eliminate edge discontinuities, we multiply the raw samples by a smooth bell-shaped curve that tapers smoothly to zero at the boundaries:",
      "$$x_{\\text{windowed}}[n] = x[n] \\cdot w[n]$$",
      "**Hanning / Hann Window**: $w[n] = 0.5 - 0.5 \\cos\\left(\\frac{2\\pi n}{N-1}\\right)$. The industry workhorse for vibration, acoustics, and general measurement (suppresses side lobes by $-31.5\\text{ dB}$).",
      "**Hamming & Flat-Top**: Hamming for close-frequency separation; Flat-Top for exact peak amplitude calibration."
    ],
    takeaway: "Abruptly cutting off a signal creates spectral leakage. Multiplying by a Hanning window tapers the boundaries to zero, restoring clean, sharp spectral peaks.",
    speakerNotes: "Explain that windowing is standard operating procedure in every DAQ software (LabVIEW, Dewesoft, MATLAB). We never compute an FFT on raw unwindowed data unless the signal is periodic and phase-locked."
  },
  {
    id: 27,
    title: "Figure 2.5: DFT Spectral Leakage & Hanning Windowing",
    subtitle: "Visual comparison of rectangular window splatter vs. clean Hanning peak suppression",
    sectionTag: "2.6 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig6",
    speakerNotes: "Show Figure 2.5: point out the sharp edge discontinuities of the rectangular window causing severe sidelobe splatter, contrasted with the smooth Hanning taper that concentrates energy into the true harmonic peak."
  },
  {
    id: 28,
    title: "The Computational Crisis & The Cooley-Tukey FFT Miracle",
    subtitle: "How two mathematicians turned an impossible calculation into real-time reality",
    sectionTag: "2.7 Fast Fourier Transform",
    type: "pros-cons",
    prosCons: {
      title: "Direct DFT vs. Cooley-Tukey Fast Fourier Transform (FFT)",
      advantages: [
        "**Direct DFT Complexity**: Direct evaluation requires $N^2$ complex multiplications. For $N = 4096$, that requires $4096^2 = 16,777,216$ complex operations!",
        "**The 1965 Breakthrough**: James Cooley and John Tukey realized that sine and cosine waves are symmetric and periodic. By recursively breaking an $N$-point sequence into even and odd halves (Divide and Conquer Radix-2), redundant math vanishes!",
        "**Radix-2 FFT Complexity**: Drops from $N^2$ to $\\frac{N}{2} \\log_2 N$. For $N = 4096$, it requires only $2048 \\times 12 = 24,576$ operations!",
        "**Speedup Factor**: Over $682\\times$ faster for $N = 4096$, and over $20,000\\times$ faster for audio/video arrays ($N = 10^6$)."
      ],
      disadvantages: [
        "**Crucial Constraint**: Radix-2 FFT requires the buffer length $N$ to be an exact power of 2: $N = 2^m$ (e.g., 256, 512, 1024, 2048, 4096). If your data is 1000 samples, software pads with 24 zeros ('zero-padding') to reach 1024.",
        "**Identical Math**: The FFT is NOT an approximation of the DFT. It produces the exact same numerical answers down to the last decimal digit—just infinitely faster."
      ],
      engineeringVerdict: "The FFT is ranked among the top 10 most impactful algorithms in human history. Without it, real-time medical MRI, 5G cellular communication, radar, and digital audio streaming would be computationally impossible."
    },
    speakerNotes: "Highlight to students: FFT is not a different transform from DFT; it is an ingenious mathematical shortcut to compute the EXACT same DFT in a fraction of the time."
  },
  {
    id: 29,
    title: "Figure 2.6: Radix-2 FFT Butterfly Flow Graph & Speedup Benchmark",
    subtitle: "The divide-and-conquer butterfly structure that powers real-time DSP",
    sectionTag: "2.7 Vector Diagram",
    type: "figure",
    figureKey: "u2_fig7",
    speakerNotes: "Examine Figure 2.6: trace the 2-point butterfly operations with twiddle factors W_N^k and review the benchmark table showing how execution time drops from minutes to microseconds."
  },
  {
    id: 30,
    title: "What is the Inverse Fourier Transform (IFT / IDFT)?",
    subtitle: "The reverse baking recipe: Synthesizing time waveforms back from frequencies",
    sectionTag: "2.8 Inverse Transform",
    type: "formula",
    formulaBlock: {
      equation: "x[n] = \\frac{1}{N} \\sum_{k=0}^{N-1} X[k] \\cdot e^{+j \\frac{2\\pi}{N} k n} \\quad \\text{for } n = 0, 1, 2, \\dots, N-1",
      label: "Inverse Discrete Fourier Transform (IDFT)",
      description: "Synthesizing the original discrete-time waveform from its discrete frequency spectrum.",
      symbols: [
        { symbol: "x[n]", name: "Synthesized Time Sample", unit: "V", description: "Reconstructed physical time waveform sample at instant n" },
        { symbol: "X[k]", name: "Frequency Bin Coefficient", unit: "Complex Number", description: "Amplitude and phase recipe for the k-th frequency harmonic" },
        { symbol: "e^{+j \\frac{2\\pi}{N} k n}", name: "Forward Synthesizing Phasor", unit: "rad", description: "Note the positive sign: adding up spinning sine waves together" },
        { symbol: "1 / N", name: "Energy Normalization Scale", unit: "scalar", description: "Averaging scale factor ensuring perfect energy conservation" }
      ]
    },
    bullets: [
      "**The Reverse Baking Recipe**: If the forward FFT takes a cake and tells you: '4 eggs, 2 cups flour, 1 cup sugar', the Inverse FFT takes that ingredient list, bakes it, and hands you back the exact original cake!",
      "**Notice the Sign Difference**: Forward transform has $e^{-j \\dots}$ (analyzing/unmixing); Inverse transform has $e^{+j \\dots}$ (synthesizing/mixing back together).",
      "**Lossless Reconstruction**: If you run FFT on a signal and immediately run IFFT on the result, you get back the exact original signal with zero distortion."
    ],
    speakerNotes: "Make sure students notice the sign flip: forward has minus sign in exponent, inverse has positive sign and 1/N scaling. That's all that changes mathematically!"
  },
  {
    id: 31,
    title: "The Practical Superpower of IFT: Surgical Noise Removal & Compression",
    subtitle: "How engineers use the forward and inverse transforms together to perform miracles",
    sectionTag: "2.8 IFT Applications",
    type: "concept",
    bullets: [
      "**Superpower 1: Surgical Noise Removal**: Imagine recording a faint patient ECG heartbeat, but a nasty 50 Hz power-line hum from the hospital wall socket has corrupted the waveform. In the time domain, the hum is tangled all over the ECG.",
      "1. Run forward **FFT**: You see the ECG spectrum PLUS a giant sharp spike at exactly $50\\text{ Hz}$.",
      "2. Perform **Surgical Zeroing**: Set the $50\\text{ Hz}$ frequency bin to zero: $X[k_{50\\text{Hz}}] = 0$! Leave all other bins untouched.",
      "3. Run **Inverse IFFT**: Synthesize back to time. The result? A pristine, hum-free, perfectly diagnostic ECG waveform!",
      "**Superpower 2: Audio & Image Compression (MP3, JPEG)**: In human hearing, quiet high frequencies are masked by loud low frequencies. The audio algorithm runs a Fourier transform, deletes all inaudible frequency bins, and stores only the remaining 10% of bins. When you hit play, the player runs the **Inverse IFFT** to rebuild the audio. File size shrinks by $90\\%$ with zero perceptible quality loss!",
      "**Parseval's Theorem**: Total signal energy in the time domain equals total energy in the frequency domain: $\\sum |x[n]|^2 = \\frac{1}{N} \\sum |X[k]|^2$."
    ],
    takeaway: "The forward FFT lets us see and edit frequencies; the inverse IFFT lets us rebuild the modified, cleaned, or compressed waveform back into reality.",
    speakerNotes: "Students love this slide because it shows them where MP3, streaming audio, and biomedical noise filters actually come from. Fourier is not an exam exercise—it runs our digital world."
  },
  {
    id: 32,
    title: "Figure 2.7: Time-Frequency Spectrograms & STFT Presentation",
    subtitle: "Tracking how frequency content changes dynamically over time",
    sectionTag: "2.9 Spectrograms",
    type: "figure",
    figureKey: "u2_fig8",
    speakerNotes: "Explain Figure 2.7: standard FFT shows what frequencies exist over the entire record, but the Short-Time Fourier Transform (STFT) spectrogram shows WHEN those frequencies occurred (critical for bird songs, speech, and rotating machinery speed run-ups)."
  },

  // ===========================================================================
  // ACT 4: THE SIMPLER CASE STUDY (END-TO-END WALKTHROUGH)
  // ===========================================================================
  {
    id: 33,
    title: "Simpler Case Study: Workshop Electric Motor Health Monitor",
    subtitle: "Step-by-step end-to-end journey of analog sensor data into computer memory and display",
    sectionTag: "Case Study Overview",
    type: "section-divider",
    takeaway: "Let us trace a real-world physical signal through all 6 engineering stages: from physical heat and vibration, through analog sensors, filtering, 12-bit ADC conversion, RAM storage, and real-time FFT screen presentation.",
    speakerNotes: "Introduce the practical case study requested by students: a simple, intuitive workshop electric motor monitor. We trace every single number and equation through all 6 stages."
  },
  {
    id: 34,
    title: "Case Study Step 1: The Physical Measurands",
    subtitle: "What is physically happening at the machine under test?",
    sectionTag: "Case Study: Step 1",
    type: "concept",
    bullets: [
      "**The Machine**: A 3-phase industrial induction motor operating in a factory workshop at 3000 RPM driving a water pump.",
      "**Physical Measurand 1 (Temperature)**: The bearing casing temperature has reached **$75.0^\\circ\\text{C}$** due to mechanical friction under full load. This is a slow, steady DC thermal quantity.",
      "**Physical Measurand 2 (Vibration)**: Due to a slight mechanical shaft unbalance, the motor vibrates once per revolution. At $3000\\text{ RPM}$, the shaft rotation frequency is:",
      "$$f_{\\text{shaft}} = \\frac{3000\\text{ rev}}{60\\text{ sec}} = 50.0\\text{ Hz}$$",
      "The motor housing vibrates back and forth sinusoidally with a peak acceleration amplitude of $A_{\\text{peak}} = 1.50\\text{ m/s}^2$ at exactly $50\\text{ Hz}$."
    ],
    takeaway: "The physical reality consists of two measurands: a steady 75°C thermal state and a 50 Hz sinusoidal mechanical oscillation.",
    speakerNotes: "Start with the tangible scenario: students can visualize an induction motor vibrating at 50 Hz on a workshop bench and warming up to 75°C."
  },
  {
    id: 35,
    title: "Case Study Step 2: Analog Sensor Transduction",
    subtitle: "Converting mechanical movement and thermal energy into raw electrical voltages",
    sectionTag: "Case Study: Step 2",
    type: "formula",
    formulaBlock: {
      equation: "V_{\\text{temp}} = 10.0\\text{ mV}/^\\circ\\text{C} \\cdot 75.0^\\circ\\text{C} = 0.750\\text{ V DC} \\quad \\text{and} \\quad v_{\\text{vib}}(t) = 0.150 \\sin(2\\pi \\cdot 50 t)\\text{ V AC}",
      label: "Sensor Transduction Transfer Equations",
      description: "Translating physical units (°C and m/s²) into analog electrical potentials.",
      symbols: [
        { symbol: "V_temp", name: "Temperature Sensor Voltage", unit: "V DC", description: "Analog DC output from LM35 precision temperature sensor" },
        { symbol: "v_vib(t)", name: "Vibration Sensor Voltage", unit: "V AC", description: "Analog AC sinusoidal voltage from piezoelectric accelerometer" },
        { symbol: "Sensitivity", name: "Accelerometer Sensitivity", unit: "100 mV / (m/s^2)", description: "Calibration gain converting acceleration into millivolts" }
      ]
    },
    bullets: [
      "**Channel 1 (Temperature)**: An analog LM35 semiconductor sensor mounted on the bearing casing outputs exactly $10.0\\text{ mV}$ per degree Celsius. At $75.0^\\circ\\text{C}$, it generates a steady analog potential of $V_{\\text{temp}} = 0.750\\text{ V DC}$.",
      "**Channel 2 (Vibration)**: A piezoelectric accelerometer stud-mounted on the motor flange has a sensitivity of $100.0\\text{ mV}/(\\text{m/s}^2)$. Multiplying by $1.50\\text{ m/s}^2$ peak acceleration produces an analog sinusoidal voltage swing of $v_{\\text{vib}}(t) = 0.150 \\sin(2\\pi \\cdot 50 t)\\text{ V}$."
    ],
    speakerNotes: "Point out the clean numbers: 75°C becomes 0.750V DC; 1.5 m/s^2 at 50 Hz becomes a +/- 150 mV AC sine wave."
  },
  {
    id: 36,
    title: "Step 2 Graph: Raw Analog Sensor Waveforms",
    subtitle: "LM35 DC Thermal Output (0.750V) & Accelerometer 50 Hz Vibration with 10 kHz Welder Noise",
    sectionTag: "Case Study: Step 2 Graph",
    type: "figure",
    figureKey: "u2_case_step2_graph",
    takeaway: "The physical sensors generate an analog DC voltage of 0.750V for temperature and a 50 Hz AC wave of ±150 mV for vibration, with severe 10 kHz industrial noise pickup.",
    speakerNotes: "Walk students through the Step 2 graph: Left shows steady 0.750V DC temperature; Right shows the 50 Hz vibration wave (20 ms period) with sharp 10 kHz welder noise spikes riding on it."
  },
  {
    id: 37,
    title: "Case Study Step 3: Analog Signal Conditioning & Anti-Aliasing",
    subtitle: "Cleaning, protecting, and level-shifting the analog signal before the ADC",
    sectionTag: "Case Study: Step 3",
    type: "concept",
    bullets: [
      "**The Industrial Problem**: In the factory workshop, adjacent high-frequency arc welders and variable frequency drives (VFDs) radiate nasty **$10\\text{ kHz}$ electromagnetic switching noise** into the sensor cables.",
      "**The Conditioning Stage Performs 3 Crucial Roles**:",
      "1. **Instrumentation Amplification**: Provides $>10^9\\,\\Omega$ high input impedance so the sensors are not loaded or drained of current.",
      "2. **Analog Anti-Aliasing Low-Pass Filter**: A 4th-order active Butterworth low-pass filter with cutoff frequency $f_c = 200\\text{ Hz}$ is inserted. The $50\\text{ Hz}$ motor vibration passes through completely unattenuated ($0\\text{ dB}$), while the unwanted $10\\text{ kHz}$ welder noise is completely crushed and eliminated (attenuated by $>70\\text{ dB}$)!",
      "3. **DC Level Shifting**: The ADC operates on unipolar $0.0\\text{ to }5.0\\text{ V}$. An op-amp summing circuit adds a $+2.500\\text{ V}$ bias to the vibration AC signal, centering the $\\pm 0.150\\text{ V}$ sine wave safely between $+2.350\\text{ V}$ and $+2.650\\text{ V}$."
    ],
    takeaway: "Signal conditioning amplifies the signal, eliminates 10 kHz noise before it can alias, and centers the voltage within the ADC input range.",
    speakerNotes: "Highlight why level shifting is needed: most low-cost microcontroller ADCs can only measure 0 to 5V (they cannot read negative voltages without frying the pin). Adding a 2.5V DC offset solves this cleanly."
  },
  {
    id: 38,
    title: "Step 3 Graph: Anti-Aliasing Filter Response & DC Level Shifting",
    subtitle: "Butterworth 4th-Order Bode Plot (fc = 200 Hz) and Op-Amp Summing DC Level Shift (+2.500V)",
    sectionTag: "Case Study: Step 3 Graph",
    type: "figure",
    figureKey: "u2_case_step3_graph",
    takeaway: "The 4th-order Butterworth filter attenuates 10 kHz noise by >72 dB while passing 50 Hz at 0 dB, and DC biasing centers the wave between 2.350V and 2.650V.",
    speakerNotes: "Point out the two panels in Step 3 graph: Left shows the Butterworth filter crushing 10 kHz noise by >72 dB; Right shows the clean, noise-free 50 Hz sine wave centered safely at +2.500 V."
  },
  {
    id: 39,
    title: "Case Study Step 4: 12-Bit ADC Sampling & Quantization",
    subtitle: "Converting continuous analog voltages into precise digital integer numbers",
    sectionTag: "Case Study: Step 4",
    type: "formula",
    formulaBlock: {
      equation: "\\Delta V = \\frac{5.000\\text{ V}}{2^{12}} = \\frac{5.000\\text{ V}}{4096} = 1.2207\\text{ mV} \\quad \\implies \\quad D = \\mathrm{round}\\left(\\frac{V_{\\text{in}}}{\\Delta V}\\right)",
      label: "12-Bit ADC Binary Quantization Equation",
      description: "Formula converting any analog voltage between 0 and 5V into an integer code between 0 and 4095.",
      symbols: [
        { symbol: "D", name: "Digital Integer Code", unit: "0 to 4095", description: "12-bit binary number output by the ADC successive approximation register" },
        { symbol: "V_in", name: "Conditioned Input Voltage", unit: "V", description: "Clean analog potential arriving at the ADC sample-and-hold pin" },
        { symbol: "\\Delta V", name: "LSB Step Voltage", unit: "1.2207 mV", description: "Quantization resolution of the 12-bit converter across a 5V span" }
      ]
    },
    bullets: [
      "**Sampling Clock**: The ADC samples at $f_s = 1000\\text{ Samples/second}$ ($T_s = 1.0\\text{ ms}$). This easily satisfies Nyquist ($1000 > 2 \\times 50\\text{ Hz}$).",
      "**Temperature Digitization**: Input $V_{\\text{in}} = 0.750\\text{ V}$. Dividing by $1.2207\\text{ mV}$ gives integer code:",
      "$$D_{\\text{temp}} = \\mathrm{round}\\left(\\frac{0.750}{0.0012207}\\right) = \\mathbf{614}$$",
      "**Vibration Digitization**: At baseline midpoint ($2.500\\text{ V}$), code is $D_{\\text{mid}} = \\mathbf{2048}$. At the positive vibration crest ($2.500 + 0.150 = 2.650\\text{ V}$), code is:",
      "$$D_{\\text{peak}} = \\mathrm{round}\\left(\\frac{2.650}{0.0012207}\\right) = \\mathbf{2171}$$"
    ],
    speakerNotes: "Walk students through the math: 0.750V becomes code 614. Vibration swings from code 1925 to 2171 around midpoint 2048. Digital integers are born!"
  },
  {
    id: 40,
    title: "Step 4 Graph: 12-Bit ADC Sampling Grid & Staircase Quantization",
    subtitle: "20 Samples per 50 Hz Cycle (Ts = 1.0 ms) and Exact Integer Code Assignments (614, 1925, 2048, 2171)",
    sectionTag: "Case Study: Step 4 Graph",
    type: "figure",
    figureKey: "u2_case_step4_graph",
    takeaway: "The 12-bit ADC captures 20 discrete samples per 50 Hz vibration cycle and quantizes voltages into integer codes: 614 for temperature, and 1925 to 2171 for vibration.",
    speakerNotes: "Show the Step 4 graph: Left shows the 20 green sample dots along the 20 ms vibration cycle; Right shows the zoomed-in staircase steps with step size Delta V = 1.221 mV."
  },
  {
    id: 41,
    title: "Case Study Step 5: Digital Storage in Computer Memory & Disk",
    subtitle: "How the microprocessor stores samples in RAM arrays and logs them to files",
    sectionTag: "Case Study: Step 5",
    type: "concept",
    bullets: [
      "**In Microcontroller RAM (DMA Circular Ring Buffer)**: The ADC hardware automatically streams digitized 16-bit unsigned integers directly into microcontroller memory via Direct Memory Access (DMA) with zero CPU overhead:",
      "`uint16_t temp_buffer[1000];  // Holds 1 second of temperature samples`",
      "`uint16_t vib_buffer[1000];   // Holds 1 second of vibration samples`",
      "**Engineering Unit Conversion in Software**: The software converts integer codes back to physical units on the fly:",
      "$$T(^\\circ\\text{C}) = \\frac{D_{\\text{temp}} \\times 1.2207\\text{ mV}}{10.0\\text{ mV}/^\\circ\\text{C}} = \\frac{614 \\times 0.0012207}{0.010} = \\mathbf{74.95^\\circ\\text{C}}$$",
      "**On-Disk Logging (CSV or Binary Log File)**: Every second, the processor flushes the buffer to an SD card or computer hard drive in a structured time-stamped log file:",
      "`Timestamp, Casing_Temp_C, Vibration_Acc_mps2`",
      "`2026-10-28 14:00:00.001, 74.95, +0.02`",
      "`2026-10-28 14:00:00.002, 74.95, +0.48`",
      "`2026-10-28 14:00:00.005, 74.95, +1.50`"
    ],
    takeaway: "The raw integers are stored in RAM circular buffers, converted to engineering units, and logged to persistent disk files with millisecond timestamps.",
    speakerNotes: "Show students the C/C++ array declarations and the CSV format. This connects theoretical DSP with embedded firmware and software engineering."
  },
  {
    id: 42,
    title: "Step 5 Graph: Computer Memory Storage & On-Disk File Logging",
    subtitle: "Microcontroller Circular DMA Buffer Architecture and Real-Time Time-Stamped CSV File Logging",
    sectionTag: "Case Study: Step 5 Graph",
    type: "figure",
    figureKey: "u2_case_step5_graph",
    takeaway: "ADC DMA hardware writes samples into a 1000-word circular RAM buffer with zero CPU overhead, logging 4.0 KB/sec to disk with millisecond timestamps.",
    speakerNotes: "Explain Step 5 graph: Left shows the circular DMA ring buffer with write and read pointers; Right shows the actual on-disk CSV log terminal with timestamped floating-point values."
  },
  {
    id: 43,
    title: "Case Study Step 6: Computer Presentation & Intelligence",
    subtitle: "Real-time dashboard visualization, FFT spectral analysis, and automated alarms",
    sectionTag: "Case Study: Step 6",
    type: "concept",
    bullets: [
      "**Visualization 1 (Time-Domain Waveform)**: The operator screen displays a live oscilloscope strip-chart showing the $50\\text{ Hz}$ sine wave oscillating smoothly between $-1.5\\text{ m/s}^2$ and $+1.5\\text{ m/s}^2$, and a digital gauge showing $75.0^\\circ\\text{C}$.",
      "**Visualization 2 (1024-Point FFT Real-Time Spectrum)**: The software takes a block of $N = 1024$ vibration samples ($T_{\\text{record}} = 1.024\\text{ s}$), multiplies by a Hanning window, and runs the Radix-2 FFT:",
      "$$\\Delta f = \\frac{f_s}{N} = \\frac{1000\\text{ Hz}}{1024} = 0.9766\\text{ Hz/bin}$$",
      "On the FFT spectrum graph, a **razor-sharp spectral spike** appears at bin $k = 51$ ($51 \\times 0.9766 = 49.8\\text{ Hz} \\approx \\mathbf{50.0\\text{ Hz}}$) with magnitude $1.50\\text{ m/s}^2$!",
      "**Automated Diagnostic Intelligence**: If the motor bearing begins failing, high-frequency harmonic spikes (e.g. at 100 Hz, 250 Hz, or 1200 Hz) will appear on the spectrum. If any harmonic exceeds $2.0\\text{ m/s}^2$ or temperature exceeds $80^\\circ\\text{C}$, the software immediately sounds a maintenance alarm!"
    ],
    takeaway: "Real-time FFT turns a confusing time wave into an unambiguous 50 Hz diagnostic spike, enabling automated fault detection before catastrophic motor failure.",
    speakerNotes: "Conclude the case study by emphasizing how powerful the FFT is: in time, noise and vibration look like a blur. In frequency, a failing bearing stands out like a beacon."
  },
  {
    id: 44,
    title: "Step 6 Graph: Live Dashboard & 1024-Point Real-Time FFT Diagnostics",
    subtitle: "Oscilloscope Strip-Chart, 74.95°C Temperature Gauge, and Sharp 50 Hz Vibration Spike with ISO Alarms",
    sectionTag: "Case Study: Step 6 Graph",
    type: "figure",
    figureKey: "u2_case_step6_graph",
    takeaway: "The GUI presents a live 50 Hz oscilloscope waveform, a 74.95°C digital gauge, and a 1024-point FFT spectrum showing a prominent 50 Hz spike well below the 2.0 m/s² alarm threshold.",
    speakerNotes: "Highlight Step 6 graph: Top shows the operator oscilloscope and 74.95°C gauge; Bottom shows the 1024-point FFT spectrum with a clean, sharp 50 Hz peak at bin k = 51 and the red ISO alarm line."
  },
  {
    id: 45,
    title: "Figure 2.8: Solved End-to-End Data Acquisition & Spectral Pipeline",
    subtitle: "Complete visual diagram of the sensor-to-conditioning-to-ADC-to-FFT pipeline",
    sectionTag: "Case Study: Vector Diagram",
    type: "figure",
    figureKey: "u2_fig12",
    speakerNotes: "Review Figure 2.8 with students: show the complete unbroken pipeline from the physical motor rotating at 50 Hz, through the sensor, Butterworth filter, 12-bit ADC, RAM buffer, and output FFT diagnostic display."
  },

  // ===========================================================================
  // ACT 5: REVIEW, WORKED PROBLEM & MASTERY
  // ===========================================================================
  {
    id: 46,
    title: "Comprehensive Worked Numerical Problem",
    subtitle: "Mastering quantitative calculations for examinations and real-world system design",
    sectionTag: "2.10 Worked Problem",
    type: "worked-example",
    workedExample: {
      problem: "An industrial monitoring module acquires a vibration accelerometer signal bandlimited to 400 Hz. The instrumentation engineer selects a sampling rate fs = 1024 Hz, a 12-bit ADC with full-scale range 0 to 5.0 V, and an FFT buffer size of N = 1024 points. Calculate: (a) The Nyquist frequency and verification of sampling criteria, (b) The voltage quantization resolution Delta V and RMS quantization noise, (c) The frequency bin resolution Delta f of the resulting FFT, and (d) The speedup factor of the Cooley-Tukey FFT compared to direct DFT.",
      given: {
        "Maximum Signal Frequency (f_max)": "400 Hz",
        "Sampling Frequency (f_s)": "1024 Samples/sec",
        "ADC Bit Depth (N_bits)": "12 bits",
        "Full-Scale Voltage Range (V_FS)": "5.000 V",
        "FFT Buffer Size (N_samples)": "1024 points"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Verify Nyquist Criterion and Nyquist Frequency",
          explanation: "The theoretical Nyquist frequency is exactly half the sampling rate:",
          math: "f_N = \\frac{f_s}{2} = \\frac{1024\\text{ Hz}}{2} = 512\\text{ Hz} > f_{\\max} = 400\\text{ Hz} \\quad (\\text{PASS: No Aliasing})"
        },
        {
          stepNumber: 2,
          title: "Calculate Voltage Quantization Resolution (LSB Step Size)",
          explanation: "Divide full-scale span by total number of 12-bit discrete binary states:",
          math: "\\Delta V = \\frac{V_{FS}}{2^{12}} = \\frac{5.000\\text{ V}}{4096} = 1.2207\\text{ mV}"
        },
        {
          stepNumber: 3,
          title: "Determine RMS Quantization Noise Floor",
          explanation: "Evaluate the uniform distribution RMS noise formula:",
          math: "V_{q,RMS} = \\frac{\\Delta V}{\\sqrt{12}} = \\frac{1.2207\\text{ mV}}{3.4641} = 0.3524\\text{ mV} = 352.4\\,\\mu\\text{V}"
        },
        {
          stepNumber: 4,
          title: "Compute FFT Frequency Bin Resolution",
          explanation: "Divide sampling frequency by total number of points in the FFT buffer:",
          math: "\\Delta f = \\frac{f_s}{N} = \\frac{1024\\text{ Hz}}{1024\\text{ points}} = 1.000\\text{ Hz/bin}"
        },
        {
          stepNumber: 5,
          title: "Calculate FFT Computational Speedup Factor",
          explanation: "Compare direct DFT multiplications N^2 against Radix-2 FFT (N/2) log2(N):",
          math: "\\text{Speedup} = \\frac{N^2}{\\frac{N}{2} \\log_2 N} = \\frac{1024^2}{512 \\times 10} = \\frac{1,048,576}{5,120} = \\mathbf{204.8\\times}"
        }
      ],
      finalAnswer: "f_N = 512 Hz (Valid), Delta V = 1.221 mV, V_q,RMS = 352.4 uV, Delta f = 1.000 Hz, FFT Speedup = 204.8x faster",
      practicalInsight: "With Delta f = 1.0 Hz, an engineer can easily distinguish a 50 Hz shaft rotation peak from a 52 Hz cooling fan vibration peak!"
    },
    speakerNotes: "Walk students through each step. Emphasize that these 5 steps represent the exact design workflow for specifying real DAQ hardware."
  },
  {
    id: 47,
    title: "Top 5 Classic DSP & DAQ Misconceptions",
    subtitle: "Critical pitfalls that lead to failed instrumentation projects and exam errors",
    sectionTag: "2.11 Misconceptions",
    type: "misconceptions",
    bullets: [
      "Software Can Fix Aliasing: Aliasing is mathematically irreversible once digitized. High frequencies fold across the Nyquist boundary and appear as legitimate low frequencies. An analog anti-aliasing low-pass filter MUST be placed in hardware before the ADC.",
      "High Display Digits Mean High Accuracy: Display resolution describes the smallest readable numerical increment, NOT instrument accuracy. An uncalibrated 16-bit multimeter can display 12.3456 V with high resolution while suffering a 1.5 V systematic calibration error.",
      "FFT is an Approximation of DFT: The FFT is NOT an approximation. It is an exact mathematical algorithm that produces identical numerical results to direct DFT down to machine precision, just hundreds of times faster.",
      "Sampling Faster Gives Sharper FFT Peaks: Increasing fs actually WIDENS the frequency bin spacing (Delta f = fs / N) unless N is increased proportionally. To achieve finer bin resolution, you must increase total recording duration: Delta f = 1 / T_record.",
      "Discrete-Time Signals Are Always Digital: Discrete-time describes the time axis (sampled at discrete clock intervals). Digital describes BOTH discrete time and quantized amplitude. A sample-and-hold capacitor holds discrete-time analog voltages."
    ],
    speakerNotes: "Review each misconception thoroughly with the class. These 5 points separate novice students from competent instrumentation engineers."
  },
  {
    id: 48,
    title: "Master Formula Reference Sheet",
    subtitle: "Complete mathematical summary of Unit II: Digital Signal Processing & DAQ",
    sectionTag: "Summary Sheet",
    type: "review",
    bullets: [
      "**Nyquist Sampling Theorem**: $f_s \\ge 2 \\cdot f_{\\max} \\quad \\Longleftrightarrow \\quad f_N = f_s / 2$",
      "**Aliasing Folded Frequency**: $f_{\\text{apparent}} = |f_{\\text{in}} - k \\cdot f_s|$",
      "**ADC Voltage Resolution**: $\\Delta V = V_{\\text{LSB}} = \\frac{V_{\\text{FS}}}{2^N}$",
      "**RMS Quantization Noise**: $V_{q,RMS} = \\frac{\\Delta V}{\\sqrt{12}} = \\frac{\\Delta V}{2\\sqrt{3}}$",
      "**Ideal ADC Dynamic Range**: $\\mathrm{SNR}_{\\text{ideal}} = 6.02 \\cdot N + 1.76\\text{ dB}$",
      "**Continuous Fourier Transform (CTFT)**: $X(f) = \\int_{-\\infty}^{\\infty} x(t) \\cdot e^{-j 2\\pi f t} dt$",
      "**Discrete Fourier Transform (DFT)**: $X[k] = \\sum_{n=0}^{N-1} x[n] \\cdot e^{-j \\frac{2\\pi}{N} k n}$",
      "**FFT Frequency Bin Spacing**: $\\Delta f = \\frac{f_s}{N} = \\frac{1}{T_{\\text{record}}}$",
      "**Radix-2 FFT Computational Operations**: $C_{\\text{FFT}} = \\frac{N}{2} \\log_2 N \\quad \\text{vs.} \\quad C_{\\text{DFT}} = N^2$",
      "**Inverse Discrete Fourier Transform (IDFT)**: $x[n] = \\frac{1}{N} \\sum_{k=0}^{N-1} X[k] \\cdot e^{+j \\frac{2\\pi}{N} k n}$",
      "**Parseval's Energy Conservation Theorem**: $\\sum_{n=0}^{N-1} |x[n]|^2 = \\frac{1}{N} \\sum_{k=0}^{N-1} |X[k]|^2$",
      "**Hanning Window Formulation**: $w[n] = 0.5 - 0.5 \\cos\\left(\\frac{2\\pi n}{N-1}\\right)$"
    ],
    takeaway: "Mastery of these 12 core formulas provides the complete mathematical and engineering toolkit for digital signal processing and data acquisition.",
    speakerNotes: "End the presentation on this slide. Remind students that author Er. Saroj Chalise recommends memorizing these 12 fundamental formulas for both university examinations and industrial practice."
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

# 2.1 The Story of Signals & Signal Taxonomy {.center}

## The Story of Signals: Nature Doesn't Speak in 1s and 0s

- Physical phenomena (heart ECG, voice pressure, motor vibration) exist as continuous analog waveforms.
- A signal is a physical disturbance carrying information across time and space.
- Computers have finite registers and cannot store an infinite continuum.
- Time must be sampled; amplitude must be quantized.

::: {.notes}
Start with everyday physical signals to build intuitive motivation.
:::

## Signal Taxonomy: The 5 Dimensions

![](figures_unit2/u2_fig1_signal_taxonomy.svg){width="100%" fig-align="center"}

::: {.notes}
Walk through time continuity, amplitude values, predictability, repetition, and energy persistence.
:::

# 2.2 The Acquisition Bridge: Sampling & Quantization {.center}

## Nyquist-Shannon Sampling Theorem & Aliasing

- Sampling Criterion: $f_s \\ge 2 \\cdot f_{\\max}$.
- Aliasing: Frequencies above Nyquist fold into false low-frequency ghosts.
- The Airport Security Rule: Aliasing CANNOT be filtered in software; an analog anti-aliasing filter is mandatory before the ADC.

![](figures_unit2/u2_fig2_sampling_and_aliasing.svg){width="100%" fig-align="center"}

## ADC Bit Depth & Quantization Resolution

- Step Size: $\\Delta V = V_{\\text{FS}} / 2^N$.
- The 6.02 dB Rule: Each bit adds $+6.02\\text{ dB}$ of dynamic range.
- 8-bit (19.5 mV) vs 12-bit (1.22 mV) vs 16-bit (76 uV) vs 24-bit (>160 dB).

![](figures_unit2/u2_fig11_adc_bit_depth_comparison.svg){width="100%" fig-align="center"}

# 2.3 Modern DAQ System Architecture {.center}

## 4-Pillar DAQ Model & Sensor Conditioning Matrix

![](figures_unit2/u2_fig9_dewesoft_daq_architecture.svg){width="100%" fig-align="center"}

::: {.notes}
Review Sensors, Signal Conditioning, High-Resolution ADC, and DAQ Processing Software.
:::

# 2.5–2.8 The Fourier Transform Story {.center}

## The Fruit Smoothie & Musical Chord Analogy

- **Smoothie Analogy**: You cannot unmix a blended fruit smoothie with a spoon, but Fourier is the magical centrifuge that spits out exact fruit ingredients.
- **Musical Chord**: The ear unmixes a composite piano chord (C-E-G) into pure fundamental musical notes.

## Continuous vs. Discrete Fourier Transform

- **CTFT**: The theoretical prism $X(f) = \\int_{-\\infty}^{\\infty} x(t) e^{-j 2\\pi f t} dt$.
- **Computer's Dilemma**: Computers cannot calculate infinite continuous integrals.
- **DFT**: Evaluating $N$ samples into $N$ discrete frequency bins $\\Delta f = f_s / N$.
- **Windowing**: Hanning window suppresses spectral leakage sidelobes by $-31.5\\text{ dB}$.

![](figures_unit2/u2_fig5_fourier_decomposition.svg){width="100%" fig-align="center"}

## Fast Fourier Transform (FFT) & Inverse Transform (IDFT)

- **Cooley-Tukey FFT**: Slashing complexity from $N^2$ to $\\frac{N}{2} \\log_2 N$ ($>680\\times$ speedup).
- **IDFT**: Re-synthesizing time waves from frequency components: $x[n] = \\frac{1}{N} \\sum X[k] e^{+j \\frac{2\\pi}{N} k n}$.
- **Superpower**: Surgical 50 Hz power hum elimination and MP3/JPEG data compression.

![](figures_unit2/u2_fig7_fft_butterfly_dit.svg){width="100%" fig-align="center"}

# Simpler End-to-End Case Study {.center}

## Workshop Electric Motor Health Monitor

- **Physical Measurands**: 75°C Casing Heat + 50 Hz Shaft Vibration ($1.50\\text{ m/s}^2$).
- **Analog Sensors**: LM35 (0.750V DC) and Accelerometer (0.150V 50 Hz AC).
- **Conditioning**: 200 Hz Butterworth low-pass filter eliminates 10 kHz welder noise; DC level shift to 2.5V.
- **12-Bit ADC**: $f_s = 1000\\text{ S/s}$, $\\Delta V = 1.221\\text{ mV}$. Code $D_{\\text{temp}} = 614$, Peak Vibration Code = 2171.
- **Computer Storage**: DMA circular RAM array \`uint16_t buffer[]\` and CSV disk logging.
- **Presentation**: Time-domain strip chart + 1024-pt FFT displaying razor-sharp 50 Hz peak + automated alarms.

![](figures_unit2/u2_fig12_end_to_end_case_study.svg){width="100%" fig-align="center"}
`;
