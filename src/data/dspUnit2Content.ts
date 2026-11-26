/**
 * Unit II: Digital Signal Processing & Data Acquisition (10 hrs)
 * Progressive Learning Classroom Lecture Package
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 *
 * Pedagogical Architecture (Progressive 4-Beat Loop):
 *   1. Physical Motivation & Everyday Analogy (Build mental model before jargon)
 *   2. Visual Diagram & Architecture (See how the pieces connect)
 *   3. First-Principles Equation & Hand-Worked Micro-Example (Demystify the math)
 *   4. Active Recall Checkpoint Quiz (Verify mastery before advancing)
 *
 * Complete 100% Pokhara University Syllabus Coverage (Sections 2.1 – 2.9):
 *   2.1 Types of Signals (1.0 hr)
 *   2.2 Acquisition and Properties of Digital Signals (1.5 hrs)
 *   2.3 Signal Conditioning (1.0 hr)
 *   2.4 Signal Processing Techniques: Convolution, Correlation, FIR/IIR, Windows (1.5 hrs)
 *   2.5 Continuous-Time Fourier Transform — CTFT (1.0 hr)
 *   2.6 Discrete Fourier Transform — DFT (1.5 hrs)
 *   2.7 Fast Fourier Transform — FFT (1.5 hrs)
 *   2.8 Inverse Fourier Transform — IDFT & Parseval's Theorem (0.5 hr)
 *   2.9 Processing and Presentation of Data: dB, Welch PSD, STFT Spectrogram (0.5 hr)
 *   + End-to-End Case Studies (Workshop Electric Motor + High-Speed Gas Turbine)
 *   + Exam Mastery Review & Complete Formula Reference
 */

import { SlideData } from '../types/chapterDeck';

export const UNIT2_SLIDES_DATA: SlideData[] = [
  // ===========================================================================
  // PROLOGUE: COURSE ORIENTATION & MOTIVATION
  // ===========================================================================
  {
    id: 1,
    title: "Unit II: Digital Signal Processing & Data Acquisition",
    subtitle: "A Progressive, Concept-First Journey from Physical Reality to Digital Intelligence (10 Hours · Sections 2.1–2.9)",
    sectionTag: "Unit II · 10 Hours",
    type: "title",
    speakerNotes: "Welcome students to Unit II: Digital Signal Processing & Data Acquisition. Tell them this lecture is structured as a continuous story: every new formula is introduced ONLY after we understand why we need it and visualize how it works."
  },
  {
    id: 2,
    title: "Why Digital Signal Processing Matters",
    subtitle: "Turning invisible, noisy physical vibrations into clear engineering decisions",
    sectionTag: "Overview & Motivation",
    type: "why-matters",
    bullets: [
      "**The Blindness of Raw Time Waveforms**: Look at an oscilloscope trace of a vibrating jet engine or motor—it looks like messy squiggles. You cannot tell at a glance whether the bearing is failing or an arc welder nearby is causing electrical interference.",
      "**Why Analog Circuits Alone Struggle**: Analog filters drift with temperature, pick up 50 Hz mains hum, cannot easily store 10 hours of history, and cannot run surgical mathematical transforms.",
      "**The Digital Superpower**: Once a physical signal passes through **Conditioning → Sampling → Quantization**, a tiny computer chip can filter noise, detect buried echoes, compute a live frequency spectrum in milliseconds, and trigger automated fault alarms.",
      "**The Complete Engineering Chain**:"
    ],
    equation: "x(t) \\xrightarrow{\\text{Conditioning}} x_c(t) \\xrightarrow{\\text{S/H + ADC}} x[n] \\xrightarrow{\\text{Filter \\& FFT}} X[k] \\xrightarrow{\\text{Display}} \\text{Actionable Insight}",
    speakerNotes: "Walk through the transformation chain. Stress that DSP is not abstract math—it is the exact pipeline inside modern medical ECG monitors, vibration analyzers, noise-canceling headphones, and smart factories."
  },
  {
    id: 3,
    title: "Progressive Learning Roadmap (Sections 2.1–2.9)",
    subtitle: "Each stage builds naturally on the previous one—no concept left unexplained",
    sectionTag: "Overview & Motivation",
    type: "roadmap",
    columns: {
      left: [
        "**2.1 Types of Signals (1.0 hr)**: Classify waveforms, Even/Odd symmetry, and Energy vs. Power tests.",
        "**2.2 Digital Acquisition (1.5 hrs)**: Nyquist sampling, aliasing ghosts, aperture jitter, and ADC quantization.",
        "**2.3 Signal Conditioning (1.0 hr)**: Instrumentation amps (CMRR), Butterworth/Chebyshev/Bessel filters, and isolation.",
        "**2.4 Processing Techniques (1.5 hrs)**: LTI impulse response, convolution, correlation, FIR vs. IIR filters, and windows."
      ],
      right: [
        "**2.5–2.6 Fourier & DFT (2.5 hrs)**: From smoothie analogy to CTFT prism, Twiddle clock-hand, 4-pt DFT, and leakage.",
        "**2.7 Fast Fourier Transform (1.5 hrs)**: Cooley-Tukey butterfly symmetry slashing computation over 680x.",
        "**2.8–2.9 IDFT & Presentation (1.0 hr)**: Signal reconstruction, Parseval energy, dB plots, Welch PSD, and STFT spectrograms.",
        "**End-to-End Case Study & Exam Mastery**: Workshop Motor DAQ pipeline, Turbine scaling, and solved exam numericals."
      ]
    },
    speakerNotes: "Reassure students: instead of throwing intimidating integrals at them right away, every section starts with an intuitive mental picture, then shows a diagram, then walks through a small hand-worked example."
  },
  {
    id: 4,
    title: "Unit II Learning Outcomes",
    subtitle: "What you will be able to design, calculate, and explain by the end of this unit",
    sectionTag: "Overview & Motivation",
    type: "objectives",
    bullets: [
      "**Classify & Test Signals (2.1)**: Distinguish continuous/discrete, deterministic/random, even/odd parts, and prove whether a signal is Energy or Power.",
      "**Design Safe Acquisition Hardware (2.2–2.3)**: Select sampling rates $f_s$, bound aperture jitter $\\Delta t_j$, compute $N$-bit quantization noise, and choose Butterworth vs. Chebyshev vs. Bessel anti-aliasing filters.",
      "**Process Signals in Time & Frequency (2.4)**: Compute discrete convolution and cross-correlation by hand, and select FIR vs. IIR filters and window functions.",
      "**Master the Fourier Family (2.5–2.8)**: Explain CTFT properties, compute a 4-point DFT/IDFT by hand, calculate FFT speedup, and verify Parseval's energy theorem.",
      "**Present Diagnostics Accurately (2.9)**: Read dB spectra, Welch averaged PSDs, and STFT spectrograms while respecting the Heisenberg-Gabor limit."
    ],
    speakerNotes: "Use these 5 outcomes as a checklist throughout the 10 hours of lectures."
  },

  // ===========================================================================
  // MODULE 2.1: TYPES OF SIGNALS (1.0 HOUR)
  // ===========================================================================
  {
    id: 5,
    title: "2.1 Types of Signals",
    subtitle: "Step 1 of the journey: understanding the nature of the physical signal before we measure it",
    sectionTag: "2.1 Types of Signals",
    type: "section-divider",
    takeaway: "Before connecting a sensor to a computer, engineers classify how a signal behaves in time, amplitude, predictability, repetition, and energy.",
    speakerNotes: "Introduce Section 2.1 (1.0 Hour). Ask students: 'What makes a heartbeat ECG signal fundamentally different from steady 50 Hz wall power or random thermal hiss?'"
  },
  {
    id: 6,
    title: "The Core Dilemma: Infinite Nature vs. Finite Computers",
    subtitle: "Why we must bridge continuous physics and discrete computer memory",
    sectionTag: "2.1 Types of Signals",
    type: "analogy",
    analogy: {
      everydayConcept: "Recording an Eagle's Smooth Flight in a Paper Notebook",
      technicalMapping: "The eagle's smooth unbroken path through the sky is an analog signal x(t). Taking 30 camera snapshots per second is time sampling (fs). Rounding altitude to the nearest whole meter to write down is amplitude quantization (N-bit ADC).",
      whyItWorks: "Nature has infinite points in time and infinite decimal precision in height. A notebook—just like computer RAM—only has finite pages, so we must slice time and round heights carefully without losing the flight story.",
      limitsOfAnalogy: "An eagle moves in 3D space (x, y, z), whereas a single sensor wire carries a 1D scalar voltage varying over time."
    },
    speakerNotes: "This analogy immediately explains WHY signals are classified into continuous vs discrete and analog vs digital. Computers simply cannot store infinity."
  },
  {
    id: 7,
    title: "Classification 1–3: Time, Amplitude & Predictability",
    subtitle: "Three essential questions every instrumentation engineer asks first",
    sectionTag: "2.1 Types of Signals",
    type: "types",
    typesGrid: [
      {
        typeName: "1. Time Axis: Continuous vs. Discrete",
        description: "Continuous-time x(t) exists at every instant (no gaps). Discrete-time x[n] is defined only at integer clock ticks n·Ts.",
        keyFeature: "Continuous axis t ∈ ℝ  vs.  Sample index n ∈ ℤ",
        example: "Live thermocouple voltage vs. array stored at 1 kHz ticks",
        badge: "Time Domain"
      },
      {
        typeName: "2. Amplitude: Analog vs. Digital",
        description: "Analog amplitude takes any real decimal value. Digital amplitude is rounded (quantized) to finite binary integer levels.",
        keyFeature: "WARNING: Discrete-time ≠ Digital! S/H voltage is discrete-time but STILL analog.",
        example: "Potentiometer voltage vs. 12-bit integer codes (0 to 4095)",
        badge: "Value Domain"
      },
      {
        typeName: "3. Predictability: Deterministic vs. Random",
        description: "Deterministic signals follow an exact equation for all time. Random (stochastic) signals vary unpredictably and need statistics.",
        keyFeature: "Exact formula x(t)  vs.  Mean, Variance & PSD",
        example: "Clean 50 Hz AC mains vs. thermal resistor noise or wind gusts",
        badge: "Certainty"
      }
    ],
    takeaway: "Crucial exam distinction: a Sample-and-Hold output is **discrete-time** (sliced in time) but still **analog** (unquantized voltage) until the ADC rounds it to bits!",
    speakerNotes: "Highlight card 2 carefully—students often lose marks on exams by thinking discrete-time automatically means digital."
  },
  {
    id: 8,
    title: "Classification 4–5: Periodicity & Energy vs. Power",
    subtitle: "Does the waveform repeat forever, or is it a one-time finite burst?",
    sectionTag: "2.1 Types of Signals",
    type: "types",
    typesGrid: [
      {
        typeName: "4. Periodicity: Periodic vs. Aperiodic",
        description: "Periodic signals repeat identically every fundamental period T0: x(t + T0) = x(t). Aperiodic signals never repeat.",
        keyFeature: "Periodic = sharp discrete harmonics; Aperiodic = smooth continuous spectrum",
        example: "Spinning motor vibration (periodic) vs. hammer impact shock (aperiodic)",
        badge: "Repetition"
      },
      {
        typeName: "5. Persistence: Energy vs. Power Signals",
        description: "Transient bursts fade out so total energy E is finite (Energy signal). Endless steady waves never stop, so energy E = ∞, and we measure average Power P instead.",
        keyFeature: "Energy Signal: E < ∞, P = 0  |  Power Signal: E = ∞, 0 < P < ∞",
        example: "Lightning strike or decaying ring (Energy) vs. 230 V AC grid or unit step (Power)",
        badge: "Size Metric"
      }
    ],
    takeaway: "You cannot measure an endless sine wave by its total Energy ($E = \\infty$), just as you would not rate a power plant in Joules instead of Watts (Power)!",
    speakerNotes: "Explain Energy vs Power using a flashlight spark (finite energy burst) vs a continuous household wall outlet (rated in Watts of continuous average power)."
  },
  {
    id: 9,
    title: "Mathematical Test: Energy vs. Power Signals",
    subtitle: "How to mathematically classify any signal x(t) on paper",
    sectionTag: "2.1 Types of Signals",
    type: "formula",
    formulaBlock: {
      equation: "E = \\int_{-\\infty}^{\\infty} |x(t)|^2\\,dt \\qquad\\text{and}\\qquad P = \\lim_{T \\to \\infty} \\frac{1}{T} \\int_{-T/2}^{T/2} |x(t)|^2\\,dt",
      label: "Formal Energy & Average Power Integrals",
      description: "Compute total squared area E first. If E converges to a finite number, it is an Energy signal (and P = 0). If E diverges to infinity, compute average power P.",
      symbols: [
        { symbol: "E", name: "Normalized Total Energy", unit: "J (at 1 Ω)", description: "Finite (0 < E < ∞) for transient decaying pulses" },
        { symbol: "P", name: "Normalized Average Power", unit: "W (at 1 Ω)", description: "Finite (0 < P < ∞) for periodic & steady signals" },
        { symbol: "T", name: "Observation Window", unit: "s", description: "Stretched to infinity to test persistent signals" }
      ]
    },
    bullets: [
      "**Rule 1 (Energy Signal)**: If $x(t)$ decays to zero fast enough as $|t|\\to\\infty$ (e.g., $e^{-at}u(t)$), then $0 < E < \\infty$ and $P = 0$.",
      "**Rule 2 (Power Signal)**: If $x(t)$ repeats forever or stays constant forever (e.g., $\\sin(\\omega t)$ or unit step $u(t)$), then $E = \\infty$ and $0 < P < \\infty$.",
      "**Rule 3 (Neither)**: Signals that grow without bound as $t \\to \\infty$ (like a ramp $x(t) = t \\cdot u(t)$) have $E = \\infty$ AND $P = \\infty$—neither Energy nor Power."
    ],
    takeaway: "Every periodic signal is automatically a Power signal ($P_{\\text{sine}} = A^2/2$). A signal can NEVER be both an Energy signal and a Power signal.",
    speakerNotes: "Walk through the three rules calmly. Students get confused why P=0 for an Energy signal—explain that dividing finite Joules by infinite seconds gives zero average Watts!"
  },
  {
    id: 10,
    title: "Worked Example 2.1: Is Unit Step $u(t)$ Energy or Power?",
    subtitle: "Solving the classic university exam classification problem step-by-step",
    sectionTag: "2.1 Types of Signals",
    type: "worked-example",
    workedExample: {
      problem: "Classify both (a) the ideal unit step signal $u(t)$ (equals $1$ for $t \\ge 0$, $0$ for $t < 0$) and (b) the decaying pulse $x(t) = e^{-2t}u(t)$ as Energy, Power, or Neither.",
      given: {
        "Signal (a)": "u(t) = 1 for t ≥ 0; 0 for t < 0",
        "Signal (b)": "x(t) = e^(-2t)·u(t)"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Test Total Energy E of Unit Step u(t)",
          explanation: "Integrate $|u(t)|^2 = 1$ over $t \\ge 0$. Because the step stays at $1$ forever, the area grows without bound:",
          math: "E_u = \\int_{-\\infty}^{\\infty} |u(t)|^2\\,dt = \\int_{0}^{\\infty} 1^2\\,dt = [t]_0^{\\infty} = \\infty"
        },
        {
          stepNumber: 2,
          title: "Test Average Power P of Unit Step u(t)",
          explanation: "Average the energy over $[-T/2, T/2]$. Only the positive half $[0, T/2]$ is non-zero:",
          math: "P_u = \\lim_{T \\to \\infty} \\frac{1}{T} \\int_{0}^{T/2} 1\\,dt = \\lim_{T \\to \\infty} \\frac{T/2}{T} = \\mathbf{0.5\\text{ W}} \\quad (0 < P_u < \\infty)"
        },
        {
          stepNumber: 3,
          title: "Test Total Energy E of Decaying Pulse e^(-2t)u(t)",
          explanation: "Integrate the squared exponential from $0$ to $\\infty$. It decays rapidly to zero:",
          math: "E_x = \\int_{0}^{\\infty} (e^{-2t})^2\\,dt = \\int_{0}^{\\infty} e^{-4t}\\,dt = \\left[-\\frac{1}{4}e^{-4t}\\right]_0^{\\infty} = \\mathbf{0.25\\text{ J}} < \\infty"
        },
        {
          stepNumber: 4,
          title: "Verify Average Power of Decaying Pulse",
          explanation: "Since $E_x = 0.25\\text{ J}$ is finite, dividing finite energy by $T \\to \\infty$ immediately gives $P_x = 0$."
        }
      ],
      finalAnswer: "(a) u(t) is a Power Signal (E = ∞, P = 0.5 W); (b) e^(-2t)·u(t) is an Energy Signal (E = 0.25 J, P = 0)",
      practicalInsight: "Notice why switching a DC power supply ON at t=0 gives P = 0.5 W: it is OFF for half of all infinite time (-∞ to 0) and ON for the positive half (0 to +∞)."
    },
    speakerNotes: "Walk through Step 2 slowly—students often forget the lower limit is 0 instead of -T/2, which makes them answer 1 W instead of 0.5 W!"
  },
  {
    id: 11,
    title: "Even & Odd Signal Decomposition",
    subtitle: "Splitting ANY arbitrary waveform into mirror-symmetric and anti-symmetric halves",
    sectionTag: "2.1 Types of Signals",
    type: "formula",
    formulaBlock: {
      equation: "x_e(t) = \\frac{1}{2}\\bigl[x(t) + x(-t)\\bigr] \\qquad\\text{and}\\qquad x_o(t) = \\frac{1}{2}\\bigl[x(t) - x(-t)\\bigr]",
      label: "Even & Odd Decomposition Formulas",
      description: "Adding them back always recovers the original signal exactly: x(t) = x_e(t) + x_o(t).",
      symbols: [
        { symbol: "x_e(t)", name: "Even Component", unit: "V", description: "Mirror symmetric around t = 0: x_e(-t) = x_e(t) (like cos ωt)" },
        { symbol: "x_o(t)", name: "Odd Component", unit: "V", description: "Inverted through origin: x_o(-t) = -x_o(t) (like sin ωt)" },
        { symbol: "x(-t)", name: "Time-Reversed Signal", unit: "V", description: "Original waveform flipped left-to-right across t = 0" }
      ]
    },
    bullets: [
      "**Intuitive Picture**: Fold a piece of paper along the vertical axis $t=0$. **Even** parts match top-to-top ($\\cos\\omega t$, DC level); **Odd** parts match upside-down ($\\sin\\omega t$).",
      "**Why Engineers Care in DSP**: In Fourier analysis, the **Even** part of a real signal produces purely **Real (Cosine)** frequency terms, while the **Odd** part produces purely **Imaginary (Sine)** phase terms!"
    ],
    takeaway: "Every asymmetric sensor pulse can be cleanly separated into a cosine-like Even part and a sine-like Odd part—cutting Fourier symmetry math in half.",
    speakerNotes: "Give a quick mental check on blackboard: take u(t), flip it to u(-t). Average is 0.5 everywhere (Even), difference is ±0.5 signum function (Odd)."
  },
  {
    id: 12,
    title: "Figure 2.1: Visual Taxonomy of Signals",
    subtitle: "Summary map across Time, Periodicity, Predictability, and Energy vs. Power",
    sectionTag: "2.1 Types of Signals",
    type: "figure",
    figureKey: "u2_fig1",
    takeaway: "Use these four visual quadrants to classify any real-world sensor waveform in seconds.",
    speakerNotes: "Point out each quadrant on Figure 2.1 and connect it back to the formulas we just derived."
  },
  {
    id: 13,
    title: "Checkpoint 2.1: Test Your Understanding",
    subtitle: "Quick active-recall check before we move to Digital Acquisition",
    sectionTag: "2.1 Types of Signals",
    type: "check-understanding",
    quiz: {
      question: "A Sample-and-Hold circuit freezes a sensor voltage every $1\\text{ ms}$, holding exact real voltages like $2.34187\\dots\\text{ V}$ before the ADC converts them. How is this held waveform classified?",
      options: [
        "Continuous-time and digital",
        "Discrete-time and analog (not yet quantized)",
        "Energy signal with zero power",
        "Deterministic and aperiodic"
      ],
      correctIndex: 1,
      explanation: "Because values are updated only at discrete $1\\text{ ms}$ clock ticks, it is discrete-time. However, the capacitor still holds continuous, unrounded analog voltages—it only becomes digital after ADC quantization!"
    },
    speakerNotes: "Ask the class to vote A, B, C, or D before clicking to reveal the answer."
  },

  // ===========================================================================
  // MODULE 2.2: ACQUISITION AND PROPERTIES OF DIGITAL SIGNALS (1.5 HOURS)
  // ===========================================================================
  {
    id: 14,
    title: "2.2 Acquisition & Digital Properties",
    subtitle: "Step 2: Converting continuous voltage into binary numbers without lying about frequency or amplitude",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "section-divider",
    takeaway: "Digitizing a signal creates two potential errors: time-slicing errors (Aliasing & Jitter) and amplitude-rounding errors (Quantization Noise).",
    speakerNotes: "Transition to Section 2.2 (1.5 Hours). Emphasize that an ADC makes TWO compromises: slicing time at rate fs and rounding voltage into N-bit steps."
  },
  {
    id: 15,
    title: "Intuition: Why Slow Sampling Creates Fake Motion",
    subtitle: "Understanding aliasing through movie cameras and spinning wheels",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "analogy",
    analogy: {
      everydayConcept: "The Movie Camera 'Wagon-Wheel Illusion'",
      technicalMapping: "A stagecoach wheel spinning forward rapidly (f0) is photographed at 24 frames per second (fs). If each spoke rotates almost one full gap between camera flashes, the brain stitches the snapshots together as a wheel spinning slowly backward!",
      whyItWorks: "Taking snapshots too slowly loses track of how many full revolutions occurred between frames, folding high-speed rotation into a convincing low-speed phantom.",
      limitsOfAnalogy: "A wheel has multiple identical spokes creating spatial symmetry, whereas electronic aliasing folds frequencies cleanly across multiples of fs around the Nyquist mirror fs/2."
    },
    speakerNotes: "Students immediately recognize the wagon-wheel effect from car rims in movies! Tell them that exact optical illusion happens inside an ADC when fs is too slow."
  },
  {
    id: 16,
    title: "Nyquist-Shannon Theorem & Aliasing Formula",
    subtitle: "The mathematical speed limit for faithful sampling—and what happens when you break it",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "formula",
    formulaBlock: {
      equation: "f_s \\ge 2 \\cdot f_{\\max} \\quad\\left(f_N = \\frac{f_s}{2}\\right) \\qquad\\text{and}\\qquad f_{\\text{alias}} = \\left| f_0 - m \\cdot f_s \\right|",
      label: "Nyquist Criterion & Spectral Folding Equation",
      description: "To avoid aliasing, sample strictly faster than twice the highest signal frequency. Any frequency f0 above f_N folds into [0, fs/2] at distance |f0 - m·fs|.",
      symbols: [
        { symbol: "f_s", name: "Sampling Rate", unit: "Hz (S/s)", description: "ADC clock ticks per second (Ts = 1 / fs)" },
        { symbol: "f_N", name: "Nyquist Frequency", unit: "Hz", description: "Folding limit fs / 2; maximum unambiguous frequency" },
        { symbol: "m", name: "Nearest Integer Harmonic", unit: "1, 2, 3...", description: "Chosen so |f0 - m·fs| lands inside [0, fs/2]" }
      ]
    },
    bullets: [
      "**Theory vs. Practice**: Strictly $f_s = 2 f_{\\max}$ only works if you sample forever with a brick-wall filter. If you sample a $100\\text{ Hz}$ sine wave at $200\\text{ Hz}$ right at its zero-crossings, every sample reads $0.00\\text{ V}$!",
      "**Industrial Rule of Thumb**: Always oversample by **$5\\times$ to $10\\times$** ($f_s \\approx 5\\text{–}10 \\cdot f_{\\max}$) so real anti-aliasing filters have room to roll off cleanly."
    ],
    takeaway: "The Nyquist limit $f_N = f_s / 2$ acts like a folding mirror: any frequency above $f_N$ bounces backward into the baseband as a ghost tone.",
    speakerNotes: "Draw the zero-crossing 2x sampling failure on the board so students permanently remember why 2x is the bare theoretical cliff, not a safe engineering design."
  },
  {
    id: 17,
    title: "Worked Example 2.2A: Predicting an Aliased Frequency",
    subtitle: "Calculating exact ghost frequencies when undersampling occurs",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "worked-example",
    workedExample: {
      problem: "An engineer samples a pure $f_0 = 900\\text{ Hz}$ vibration tone using a DAQ clock running at $f_s = 1000\\text{ Hz}$. Determine whether aliasing occurs, find the Nyquist frequency, and calculate the apparent (aliased) frequency displayed by the computer.",
      given: {
        "True Input Frequency (f_0)": "900 Hz",
        "Sampling Frequency (f_s)": "1000 Hz"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Find the Nyquist Folding Limit",
          explanation: "Divide the sampling frequency by 2:",
          math: "f_N = \\frac{f_s}{2} = \\frac{1000\\text{ Hz}}{2} = 500\\text{ Hz}"
        },
        {
          stepNumber: 2,
          title: "Check Nyquist Criterion",
          explanation: "Compare $f_0$ against $f_N$: since $900\\text{ Hz} > 500\\text{ Hz}$ (or $f_s = 1000 < 2 \\times 900 = 1800\\text{ Hz}$), **severe aliasing occurs**."
        },
        {
          stepNumber: 3,
          title: "Apply the Folding Formula",
          explanation: "Choose integer $m = 1$ (closest multiple of $1000\\text{ Hz}$ to $900\\text{ Hz}$):",
          math: "f_{\\text{alias}} = |f_0 - m \\cdot f_s| = |900 - 1 \\times 1000| = |-100| = \\mathbf{100\\text{ Hz}}"
        }
      ],
      finalAnswer: "f_N = 500 Hz; Aliasing OCCURS; Computer falsely reports a 100 Hz vibration",
      practicalInsight: "What if the tone was 2150 Hz sampled at 1000 Hz? Pick m = 2: |2150 - 2(1000)| = 150 Hz!"
    },
    speakerNotes: "Show students the quick trick: pick integer m so m*fs is closest to f0. Whatever distance remains is the exact ghost frequency."
  },
  {
    id: 18,
    title: "Figure 2.2: Spectral Replicas & Aliasing Overlap",
    subtitle: "Why sampling repeats the signal's frequency spectrum every ±fs",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "figure",
    figureKey: "u2_fig2",
    takeaway: "Sampling copies the original baseband spectrum at multiples of $f_s$. Keeping $f_s \\ge 2 f_{\\max}$ leaves a safe guard band between copies.",
    speakerNotes: "Walk through Case A (guard band intact) vs Case B (triangles crash into each other, creating the red irreversible overlap zone)."
  },
  {
    id: 19,
    title: "The Airport Security Rule: Software Cannot Fix Aliasing",
    subtitle: "Once high frequencies sneak past the ADC, they become disguised forever",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "concept",
    bullets: [
      "**Why Post-Processing Fails**: Take the sample points of a true $100\\text{ Hz}$ sine wave sampled at $1000\\text{ Hz}$ and compare them against a $900\\text{ Hz}$ sine wave sampled at $1000\\text{ Hz}$—**the digital numbers in computer RAM are 100% identical**!",
      "**Zero Clue Left Behind**: No Python script, MATLAB filter, or AI algorithm can tell whether the stored $100\\text{ Hz}$ wave came from a genuine $100\\text{ Hz}$ rotor shake or a disguised $900\\text{ Hz}$ electrical noise spike.",
      "**The Airport Security Metaphor**: You cannot wait until passengers board the airplane (enter ADC RAM) to check passports. You MUST block unwanted frequencies at the gate using a **Hardware Analog Anti-Aliasing Low-Pass Filter BEFORE the ADC**."
    ],
    takeaway: "Digital filters CANNOT remove aliasing after sampling. Anti-aliasing protection must always be analog hardware placed strictly BEFORE the ADC.",
    speakerNotes: "Pause here and emphasize this golden rule—it is one of the highest-impact practical mistakes junior engineers make."
  },
  {
    id: 20,
    title: "Timing Precision: Aperture Jitter ($\\Delta t_j$)",
    subtitle: "Even with a fast ADC, an unsteady clock introduces voltage errors on fast waves",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "formula",
    formulaBlock: {
      equation: "\\Delta V_{\\text{jitter}} = \\left|\\frac{dv}{dt}\\right|_{\\max} \\!\\cdot \\Delta t_j = (2\\pi f_{\\max} A)\\,\\Delta t_j \\quad\\implies\\quad \\Delta t_{j,\\max} < \\frac{1}{2\\pi f_{\\max} \\cdot 2^N}",
      label: "Aperture Jitter Voltage Error & N-Bit Clock Limit",
      description: "When a fast sine wave crosses zero, its slope is steepest. Any clock timing wobble Δtj shifts the sample along that steep slope, creating an amplitude error ΔV.",
      symbols: [
        { symbol: "\\Delta t_j", name: "Aperture Jitter (RMS)", unit: "ps or ns", description: "Random timing uncertainty in Sample-and-Hold clock edge" },
        { symbol: "f_{\\max}", name: "Max Signal Frequency", unit: "Hz", description: "Highest frequency component entering the ADC" },
        { symbol: "N", name: "ADC Bit Depth", unit: "bits", description: "Requiring ΔV_jitter < 1 LSB yields the 1/(2π·fmax·2^N) bound" }
      ]
    },
    bullets: [
      "**Physical Intuition**: Imagine taking a photo of a speeding race car. If your shutter clicks even $1\\text{ ms}$ late, the car has moved meters away. On slow DC signals ($dv/dt \\approx 0$), jitter does not matter; on high-frequency audio/RF signals, jitter destroys bit accuracy!"
    ],
    takeaway: "High-bit ADCs demand ultra-low-jitter crystal clocks: doubling frequency or adding 1 extra bit cuts your allowed timing wobble in half.",
    speakerNotes: "Derive the limit aloud in 2 lines: full-scale sine A = Vfs/2 has max slope 2*pi*fmax*(Vfs/2) = pi*fmax*Vfs. Setting error <= Vfs/2^N gives the famous limit."
  },
  {
    id: 21,
    title: "Worked Example 2.2B: 16-Bit Audio Jitter Limit",
    subtitle: "Calculating the crystal clock precision needed for studio-grade digitization",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "worked-example",
    workedExample: {
      problem: "Derive the maximum allowable aperture jitter $\\Delta t_j$ for a $16\\text{-bit}$ ADC digitizing a full-scale $20\\text{ kHz}$ audio signal while keeping timing-induced amplitude error below $1\\text{ LSB}$ ($\\Delta V_{\\text{jitter}} < \\Delta V$).",
      given: {
        "ADC Resolution (N)": "16 bits (2^16 = 65,536 states)",
        "Max Audio Frequency (f_max)": "20 kHz = 20,000 Hz"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Relate Peak-to-Peak Span to Peak Slope",
          explanation: "For a full-scale sinusoid $v(t) = \\frac{V_{\\text{FS}}}{2}\\sin(2\\pi f_{\\max} t)$, the steepest slope occurs at zero crossing:",
          math: "\\left|\\frac{dv}{dt}\\right|_{\\max} = 2\\pi f_{\\max} \\left(\\frac{V_{\\text{FS}}}{2}\\right) = \\pi f_{\\max} V_{\\text{FS}}"
        },
        {
          stepNumber: 2,
          title: "Enforce Error ≤ 1 LSB (or Peak Amplitude Form)",
          explanation: "Using the standard instrumentation criterion $\\Delta t_j < \\frac{1}{2\\pi f_{\\max} 2^N}$ (half-LSB / bipolar peak-to-peak convention):",
          math: "\\Delta t_{j,\\max} < \\frac{1}{2\\pi \\cdot (20{,}000\\text{ Hz}) \\cdot 2^{16}}"
        },
        {
          stepNumber: 3,
          title: "Evaluate Numerically",
          explanation: "Compute denominator $2\\pi \\times 20{,}000 \\times 65{,}536 = 8.2355 \\times 10^9\\text{ s}^{-1}$:",
          math: "\\Delta t_{j,\\max} < \\frac{1}{8.2355 \\times 10^9} = 1.214 \\times 10^{-10}\\text{ s} = \\mathbf{121.4\\text{ ps}}"
        }
      ],
      finalAnswer: "Maximum allowable clock jitter Δt_j < 121.4 picoseconds",
      practicalInsight: "A cheap microprocessor RC oscillator has nanoseconds of jitter—totally ruining a 16-bit audio ADC! Precision DAQ boards use dedicated picosecond quartz oscillators."
    },
    speakerNotes: "Students are always amazed that 16-bit 20 kHz requires picosecond timing—about the time light travels 3.6 cm!"
  },
  {
    id: 22,
    title: "Amplitude Quantization & The 6.02 dB Rule",
    subtitle: "Rounding continuous voltages onto a finite binary staircase",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "formula",
    formulaBlock: {
      equation: "\\Delta V = \\frac{V_{\\text{FSR}}}{2^N}, \\qquad \\sigma_q = \\frac{\\Delta V}{\\sqrt{12}}, \\qquad \\mathrm{SQNR}_{\\text{ideal}} = 6.02N + 1.76\\text{ dB}",
      label: "Quantization Step, RMS Noise & Dynamic Range",
      description: "An N-bit ADC divides the full voltage span V_FSR into 2^N staircase steps of height ΔV. Uniform rounding error spreads across [-ΔV/2, +ΔV/2] with RMS noise ΔV/√12.",
      symbols: [
        { symbol: "\\Delta V", name: "LSB Step Size", unit: "mV or μV", description: "Smallest voltage difference the ADC can tell apart" },
        { symbol: "\\sigma_q", name: "RMS Quantization Noise", unit: "mV or μV", description: "Built-in rounding noise floor of an ideal ADC" },
        { symbol: "\\mathrm{SQNR}", name: "Signal-to-Quantization-Noise Ratio", unit: "dB", description: "Each added bit increases dynamic range by +6.02 dB" }
      ]
    },
    bullets: [
      "**Intuition of $\\sqrt{12}$**: Rounding error behaves like a flat uniform random variable between $-\\Delta V/2$ and $+\\Delta V/2$; the standard deviation of a uniform box of width $W$ is always $W/\\sqrt{12}$.",
      "**Rule of Thumb**: An **8-bit** ADC gives $\\sim 50\\text{ dB}$; **12-bit** gives $\\sim 74\\text{ dB}$; **16-bit** gives $\\sim 98\\text{ dB}$; modern **24-bit** instrumentation ADCs exceed $146\\text{ dB}$!"
    ],
    takeaway: "Every single extra bit of ADC resolution cuts the quantization noise floor in half and adds $+6.02\\text{ dB}$ of clean dynamic range.",
    speakerNotes: "Keep the math intuitive: N bits -> 2^N rungs on a ladder -> wider voltage span means bigger steps, more bits means finer rungs."
  },
  {
    id: 23,
    title: "Figure 2.2B: 8-Bit vs. 12-Bit vs. 16-Bit vs. 24-Bit Quantization",
    subtitle: "Visualizing how ADC bit depth sharpens waveform fidelity and suppresses noise floor",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "figure",
    figureKey: "u2_fig_quantization_bits",
    takeaway: "Upgrading from 8-bit ($78.1\\text{ mV}$ steps) to 24-bit ($1.19\\,\\mu\\text{V}$ steps on $\\pm 10\\text{ V}$) eliminates coarse staircase distortion and reveals microvolt vibration harmonics.",
    speakerNotes: "Compare the coarse red staircase on the left against the smooth 24-bit curve on the right."
  },
  {
    id: 24,
    title: "Checkpoint 2.2: Sampling & Quantization",
    subtitle: "Verify your understanding of aliasing and quantization noise",
    sectionTag: "2.2 Acquisition & Digital Properties",
    type: "check-understanding",
    quiz: {
      question: "An engineer uses a 10-bit ADC ($0\\text{–}10.24\\text{ V}$ span) sampled at $f_s = 400\\text{ Hz}$ to record a $350\\text{ Hz}$ vibration tone. What happens?",
      options: [
        "No aliasing occurs, and $\\Delta V = 1\\text{ mV}$",
        "Aliasing occurs at $50\\text{ Hz}$, and $\\Delta V = 10\\text{ mV}$",
        "Aliasing occurs at $50\\text{ Hz}$, and $\\Delta V = 1\\text{ mV}$",
        "Digital filtering can shift the $350\\text{ Hz}$ peak back cleanly"
      ],
      correctIndex: 1,
      explanation: "$f_N = 400/2 = 200\\text{ Hz} < 350\\text{ Hz}$, so $f_{\\text{alias}} = |350 - 400| = 50\\text{ Hz}$. With $N=10$, $2^{10}=1024$ levels, so $\\Delta V = 10.24\\text{ V} / 1024 = 0.01\\text{ V} = 10\\text{ mV}$."
    },
    speakerNotes: "Walk through both parts of the calculation quickly after revealing the correct option B."
  },

  // ===========================================================================
  // MODULE 2.3: SIGNAL CONDITIONING (1.0 HOUR)
  // ===========================================================================
  {
    id: 25,
    title: "2.3 Signal Conditioning",
    subtitle: "Step 3: Protecting, amplifying, and cleaning delicate sensor signals before they enter the ADC",
    sectionTag: "2.3 Signal Conditioning",
    type: "section-divider",
    takeaway: "Never wire a raw sensor straight into an ADC pin—conditioning adapts amplitude, rejects common-mode hum, prevents loading, and blocks aliasing.",
    speakerNotes: "Transition to Section 2.3 (1.0 Hour). Ask: 'Why can't we just solder a thermocouple directly onto an Arduino ADC pin?'"
  },
  {
    id: 26,
    title: "Four Reasons Raw Sensors Fail Directly on an ADC",
    subtitle: "Why the Analog Front-End (AFE) is mandatory in every real instrument",
    sectionTag: "2.3 Signal Conditioning",
    type: "concept",
    bullets: [
      "**1. Signal Too Tiny (Microvolt Drowning)**: A thermocouple outputs $\\sim 40\\,\\mu\\text{V}/^\\circ\\text{C}$. On a $5\\text{ V}$ 12-bit ADC ($\\Delta V = 1.22\\text{ mV}$), a $10^\\circ\\text{C}$ change wouldn't even move 1 single ADC bit! **Solution: Gain Amplification.**",
      "**2. Industrial EMI & 50 Hz Mains Hum**: Long factory cables act like antennas picking up identical $50\\text{ Hz}$ voltage on both wires. **Solution: Differential Instrumentation Amplifier (High CMRR).**",
      "**3. Source Impedance Loading**: A piezoelectric sensor has huge internal impedance—connecting a low-impedance circuit drains its charge and collapses the voltage. **Solution: High-$Z$ Unity Buffer.**",
      "**4. High-Frequency Noise Aliasing & Ground Loops**: High-voltage motors can fry DAQ electronics or fold $20\\text{ kHz}$ EMI into $50\\text{ Hz}$. **Solution: Galvanic Isolation + Hardware Anti-Aliasing LPF.**"
    ],
    takeaway: "Signal conditioning solves four physical bottlenecks simultaneously: **Amplify** tiny signals, **Reject** common-mode hum, **Buffer** impedance, and **Filter** aliases.",
    speakerNotes: "This four-item list organizes the entire hardware front-end logically."
  },
  {
    id: 27,
    title: "Pre-Amplification & Common-Mode Rejection (CMRR)",
    subtitle: "How differential amplifiers amplify millivolt sensor signals while erasing 50 Hz cable hum",
    sectionTag: "2.3 Signal Conditioning",
    type: "formula",
    formulaBlock: {
      equation: "V_{\\text{out}} = A_d (V_+ - V_-) + A_{cm} \\left(\\frac{V_+ + V_-}{2}\\right), \\qquad \\mathrm{CMRR}_{\\text{dB}} = 20 \\log_{10}\\!\\left(\\frac{A_d}{A_{cm}}\\right)",
      label: "Differential Amplification & CMRR Definition",
      description: "An Instrumentation Amplifier (INA) subtracts its two input wires: the desired sensor difference (V+ - V-) is multiplied by huge gain Ad, while identical 50 Hz noise on both wires is crushed by tiny Acm.",
      symbols: [
        { symbol: "A_d", name: "Differential Gain", unit: "V/V", description: "Amplification applied to (V+ - V-), typically 10× to 1000×" },
        { symbol: "A_{cm}", name: "Common-Mode Gain", unit: "V/V", description: "Undesired leakage gain applied to shared noise (hopefully ≈ 0)" },
        { symbol: "\\mathrm{CMRR}", name: "Common-Mode Rejection Ratio", unit: "dB", description: "Quality metric; industrial INAs exceed 100–120 dB (10⁵:1 to 10⁶:1)" }
      ]
    },
    bullets: [
      "**Quick Example**: Suppose a bridge outputs $5\\text{ mV}$ differential signal riding on $2.0\\text{ V}$ of $50\\text{ Hz}$ mains interference ($A_d = 100$, $\\mathrm{CMRR} = 100\\text{ dB} = 10^5 \\implies A_{cm} = 10^{-3}$). Output signal $= 500\\text{ mV}$, while $2.0\\text{ V}$ hum shrinks to just $2\\text{ mV}$!"
    ],
    takeaway: "High gain alone is useless in noisy factories—you need **high differential gain ($A_d$) PLUS high CMRR** so common-mode hum cancels out.",
    speakerNotes: "Draw two parallel sensor wires picking up the same +2V 50Hz wiggle. Subtracting (V+ - V-) wipes out the shared wiggle before amplification."
  },
  {
    id: 28,
    title: "Analog Anti-Aliasing Filters: Butterworth vs. Chebyshev vs. Bessel",
    subtitle: "Every analog filter trades off passband flatness, rolloff steepness, and pulse shape",
    sectionTag: "2.3 Signal Conditioning",
    type: "types",
    typesGrid: [
      {
        typeName: "1. Butterworth (Maximally Flat)",
        description: "Completely flat 0 dB amplitude across the passband with smooth monotonic rolloff (-20n dB/decade) past cutoff fc.",
        keyFeature: "Best amplitude accuracy; moderate overshoot on step edges",
        example: "General vibration FFT spectra, audio, steady AC machines",
        badge: "Flat Passband"
      },
      {
        typeName: "2. Chebyshev (Steepest Rolloff)",
        description: "Drops sharply like a cliff right after fc—great when noise sits close to signal bandwidth—at the cost of passband ripple.",
        keyFeature: "Highest attenuation per pole, but causes severe pulse ringing",
        example: "Tight guard-band telecom/DAQ with steady sine tones",
        badge: "Steep Cliff"
      },
      {
        typeName: "3. Bessel (Linear Phase)",
        description: "Provides constant group delay so all frequencies travel through at identical speed—preserving pulse shape with zero ringing.",
        keyFeature: "Mandatory for shock pulses/time waveforms, gentle cutoff slope",
        example: "ECG heartbeats, ultrasonic pulses, crash-test impact spikes",
        badge: "Pulse Fidelity"
      }
    ],
    takeaway: "Exam Rule: Need flat FFT peaks? Pick **Butterworth**. Need tight frequency cutoff? Pick **Chebyshev**. Need crisp pulse/step edges? Pick **Bessel**.",
    speakerNotes: "Walk through this trade-off triangle slowly—students frequently struggle with why Bessel exists if Chebyshev cuts off faster."
  },
  {
    id: 29,
    title: "Figure 2.3C: Butterworth vs. Chebyshev vs. Bessel Responses",
    subtitle: "Comparing frequency attenuation steepness (left) against time-domain ringing (right)",
    sectionTag: "2.3 Signal Conditioning",
    type: "figure",
    figureKey: "u2_fig_analog_filters",
    takeaway: "Notice how Chebyshev drops fastest in frequency (red, left) yet rings violently on a sharp step pulse (red, right), whereas Bessel stays rock-steady.",
    speakerNotes: "Direct attention to the step response on the right panel—one glance makes linear phase vs ringing crystal clear."
  },
  {
    id: 30,
    title: "Impedance Buffering & Galvanic Isolation Barriers",
    subtitle: "Eliminating source loading errors and dangerous high-voltage ground loops",
    sectionTag: "2.3 Signal Conditioning",
    type: "types",
    typesGrid: [
      {
        typeName: "1. Voltage Follower (Buffer)",
        description: "Unity-gain op-amp stage (G = +1) presenting ultra-high input impedance (MΩ–GΩ) and near-zero output impedance.",
        keyFeature: "Stops ADC input capacitance from loading down fragile sensors",
        example: "pH glass electrodes, piezoelectric crystals, resistor dividers",
        badge: "Impedance Match"
      },
      {
        typeName: "2. Optical Isolation (Optocoupler)",
        description: "Converts electrical signal into LED light across an air/glass gap to a photodiode—zero copper wire continuity.",
        keyFeature: "Breaks ground loops and blocks >2.5 kV voltage surges",
        example: "Digital I/O triggers, PLC motor drives, medical patient isolation",
        badge: "Light Barrier"
      },
      {
        typeName: "3. Capacitive & Magnetic Isolation",
        description: "Modulates analog signals across micro-transformers or SiO₂ high-voltage capacitors with wide bandwidth and low drift.",
        keyFeature: "High speed + precision isolation for analog channels (>1 kV)",
        example: "High-voltage EV battery monitors, turbine DAQ modules",
        badge: "Field Barrier"
      }
    ],
    takeaway: "Galvanic isolation guarantees **no direct DC copper path** exists between dangerous industrial machinery grounds and your laptop/DAQ.",
    speakerNotes: "Explain what a ground loop is in plain terms: two grounds 20 meters apart sit at slightly different voltages, driving 50 Hz current straight down your cable shield unless isolated."
  },
  {
    id: 31,
    title: "Figure 2.3: End-to-End DSP Conditioning & Digitization Chain",
    subtitle: "Tracing how all conditioning blocks feed the ADC and DSP algorithms",
    sectionTag: "2.3 Signal Conditioning",
    type: "figure",
    figureKey: "u2_fig3",
    takeaway: "Each stage transforms the signal cleanly: Sensor (μV) → Conditioning (±10 V, bandlimited) → ADC (discrete bits) → DSP (filters & FFT) → Display.",
    speakerNotes: "Use Figure 2.3 as the visual bridge connecting hardware conditioning (2.3) to digital processing (2.4)."
  },
  {
    id: 32,
    title: "Figure 2.3A: Modern 4-Pillar DAQ Architecture (Dewesoft Model)",
    subtitle: "How industrial data acquisition integrates isolation, excitation, 24-bit ADCs, and DSP",
    sectionTag: "2.3 Signal Conditioning",
    type: "figure",
    figureKey: "u2_fig_dewesoft_daq",
    takeaway: "Modern DAQ modules integrate >1 kV galvanic isolation, programmable sensor excitation, hardware anti-aliasing, and DualCore 24-bit Sigma-Delta ADCs.",
    speakerNotes: "Walk across the 4 columns from left to right to reinforce real industrial hardware standards."
  },
  {
    id: 33,
    title: "Figure 2.3B: Universal Sensor Conditioning Circuit Matrix",
    subtitle: "Matching real transducers to their dedicated hardware conditioning front-ends",
    sectionTag: "2.3 Signal Conditioning",
    type: "figure",
    figureKey: "u2_fig_conditioning_matrix",
    takeaway: "Different sensors need tailored front-ends: Bridge completion for strain gauges, 4 mA current source for IEPE accelerometers, and Cold Junction Compensation for thermocouples.",
    speakerNotes: "Briefly review each quadrant so students recognize real lab hardware."
  },
  {
    id: 34,
    title: "Checkpoint 2.3: Conditioning & Anti-Aliasing Design",
    subtitle: "Applying CMRR and filter selection to an industrial problem",
    sectionTag: "2.3 Signal Conditioning",
    type: "check-understanding",
    quiz: {
      question: "A biomedical engineer is recording sharp ECG R-wave heart pulses and must place an anti-aliasing filter before the ADC without distorting pulse timing or adding artificial ringing spikes. Which filter topology should she pick?",
      options: [
        "High-order Chebyshev Type I for the steepest cutoff cliff",
        "Bessel low-pass filter for linear phase and constant group delay",
        "Unbuffered passive resistor directly into ADC",
        "Software moving-average filter applied after sampling"
      ],
      correctIndex: 1,
      explanation: "Bessel filters provide maximally flat group delay (linear phase), preserving transient pulse shapes without overshoot or ringing. Chebyshev adds severe ringing, and software filtering after the ADC cannot prevent aliasing."
    },
    speakerNotes: "Reinforce both concepts tested here: Bessel for pulse fidelity AND hardware filtering before the ADC."
  },

  // ===========================================================================
  // MODULE 2.4: SIGNAL PROCESSING TECHNIQUES (1.5 HOURS)
  // ===========================================================================
  {
    id: 35,
    title: "2.4 Signal Processing Techniques",
    subtitle: "Step 4: Inside the digital engine—impulse response, convolution, correlation, digital filters & windows",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "section-divider",
    takeaway: "Once samples enter computer RAM as x[n], linear filters and pattern detectors work by multiplying and adding shifted sequences.",
    speakerNotes: "Introduce Section 2.4 (1.5 Hours). Point out that we now have clean numbers x[n] in computer memory—now let's learn how software processes them!"
  },
  {
    id: 36,
    title: "LTI Systems & Impulse Response $h[n]$",
    subtitle: "How a single unit spike reveals the complete personality of any linear digital filter",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "definition",
    definition: {
      term: "Impulse Response h[n]",
      symbol: "h[n]",
      units: "dimensionless",
      standardReference: "Discrete LTI System Theory",
      formalDefinition: "The output sequence produced by a Linear Time-Invariant (LTI) digital system when the input is a single unit impulse δ[n] (1 at n = 0, and 0 everywhere else).",
      operationalMeaning: "• Linearity: Scaling or adding inputs scales and adds their outputs identically.\n• Time-Invariance: Delaying an input by k samples simply delays the exact same output by k samples.\n• Complete DNA: Knowing h[n] alone lets us predict the output y[n] for ANY input signal x[n] via convolution!",
      keyImplication: "Just as tapping a crystal wine glass with a spoon reveals its acoustic ring, feeding δ[n] = {1, 0, 0, ...} into a filter reveals its complete impulse response h[n]."
    },
    speakerNotes: "Keep the wine-glass metaphor front and center: one quick tap (unit impulse) tells you everything about how the system rings."
  },
  {
    id: 37,
    title: "Convolution Without Fear: Echoes in a Canyon",
    subtitle: "Why convolution is just adding up scaled, delayed copies of the impulse response",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "analogy",
    analogy: {
      everydayConcept: "Clapping Twice Inside an Echoing Canyon",
      technicalMapping: "Your first clap (strength 1) triggers a fading canyon echo h[n]. One step later, a louder clap (strength 2) triggers a 2x louder delayed echo. At any moment n, your ears hear the SUM of all overlapping echoes—that exact sum is Discrete Convolution y[n] = x[n] * h[n]!",
      whyItWorks: "Because the system is linear and time-invariant, every input sample x[k] creates its own proportional copy of h[n - k], and the output adds all overlapping tails together.",
      limitsOfAnalogy: "Acoustic canyon echoes are always positive energy decays, whereas digital filter taps h[n] can contain negative numbers to cancel frequencies (like high-pass filters)."
    },
    speakerNotes: "Students often fear the convolution sum formula until they see it as 'overlapping weighted echoes'."
  },
  {
    id: 38,
    title: "Discrete Convolution Formula & Flip-Shift-Multiply-Add",
    subtitle: "The fundamental time-domain filtering equation",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "formula",
    formulaBlock: {
      equation: "y[n] = x[n] * h[n] = \\sum_{k=-\\infty}^{\\infty} x[k] \\cdot h[n - k]",
      label: "Discrete-Time Convolution Sum",
      description: "Compute each output point y[n] by flipping h[k] to h[-k], shifting it right by n steps, multiplying overlapping entries, and summing the products.",
      symbols: [
        { symbol: "x[k]", name: "Input Sample Sequence", unit: "length L_x", description: "Digitized signal stream entering the DSP filter" },
        { symbol: "h[n-k]", name: "Flipped & Shifted Kernel", unit: "length L_h", description: "Filter impulse response slid to alignment index n" },
        { symbol: "y[n]", name: "Filtered Output", unit: "length L_x + L_h - 1", description: "Resulting output sequence (e.g., smoothed or sharpened wave)" }
      ]
    },
    bullets: [
      "**Output Length Check**: Always verify your final answer length! Convolving an $L_x$-point sequence with an $L_h$-point filter produces $L_y = L_x + L_h - 1$ non-zero points.",
      "**Linear vs. Circular Convolution**: Standard time-domain convolution gives length $L_x + L_h - 1$. Multiplying $N$-point DFTs without zero-padding performs **circular wrap-around convolution**, causing time-aliasing unless $N \\ge L_x + L_h - 1$!"
    ],
    takeaway: "Every linear FIR digital filter in the world is literally a sliding **Multiply-and-Accumulate (MAC)** convolution loop over the last $L_h$ samples.",
    speakerNotes: "Point out the linear vs circular convolution note—it's listed in syllabus difficult concepts and explains why FFT fast convolution needs zero-padding!"
  },
  {
    id: 39,
    title: "Worked Example 2.4: Discrete Convolution Step-by-Step",
    subtitle: "Applying a 2-point moving-average smoothing filter by hand",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "worked-example",
    workedExample: {
      problem: "Compute the linear discrete convolution $y[n] = x[n] * h[n]$ of the input sequence $x[n] = \\{1, 2, 3\\}$ ($n=0,1,2$) with the moving-average filter $h[n] = \\{0.5, 0.5\\}$ ($n=0,1$), showing all intermediate steps.",
      given: {
        "Input x[n] (L_x = 3)": "{1, 2, 3} for n = 0, 1, 2",
        "Filter h[n] (L_h = 2)": "{0.5, 0.5} for n = 0, 1",
        "Expected Output Length": "3 + 2 - 1 = 4 samples (n = 0, 1, 2, 3)"
      },
      steps: [
        {
          stepNumber: 1,
          title: "n = 0 (Initial Overlap)",
          explanation: "Align flipped $h[-k]$ at $n=0$: only $k=0$ overlaps ($x[0]$ with $h[0]$):",
          math: "y[0] = x[0]h[0] = 1 \\times 0.5 = \\mathbf{0.5}"
        },
        {
          stepNumber: 2,
          title: "n = 1 (Shift Right 1 Step)",
          explanation: "Both $h[1]$ and $h[0]$ overlap $x[0]$ and $x[1]$ respectively:",
          math: "y[1] = x[0]h[1] + x[1]h[0] = (1 \\times 0.5) + (2 \\times 0.5) = \\mathbf{1.5}"
        },
        {
          stepNumber: 3,
          title: "n = 2 (Shift Right 2 Steps)",
          explanation: "Filter window slides over $x[1]=2$ and $x[2]=3$:",
          math: "y[2] = x[1]h[1] + x[2]h[0] = (2 \\times 0.5) + (3 \\times 0.5) = \\mathbf{2.5}"
        },
        {
          stepNumber: 4,
          title: "n = 3 (Trailing Overlap)",
          explanation: "Only $x[2]=3$ remains aligned with $h[1]=0.5$ before filter exits:",
          math: "y[3] = x[2]h[1] = 3 \\times 0.5 = \\mathbf{1.5}"
        }
      ],
      finalAnswer: "y[n] = {0.5, 1.5, 2.5, 1.5} (4 samples)",
      practicalInsight: "Notice that each interior point (1.5, 2.5) is literally the average of two adjacent input samples—that is how a low-pass moving average smooths jitter!"
    },
    speakerNotes: "Walk through each slide index carefully. Remind students to write down L_y = L_x + L_h - 1 first so they know when to stop shifting."
  },
  {
    id: 40,
    title: "Cross-Correlation & Auto-Correlation: Echo & Noise Hunting",
    subtitle: "Sliding two signals WITHOUT flipping to measure similarity and time delay",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "formula",
    formulaBlock: {
      equation: "R_{xy}[\\ell] = \\sum_{n=-\\infty}^{\\infty} x[n] \\cdot y[n + \\ell] \\qquad\\text{and}\\qquad R_{xx}[\\ell] = \\sum_{n=-\\infty}^{\\infty} x[n] \\cdot x[n + \\ell]",
      label: "Cross-Correlation & Auto-Correlation",
      description: "Slide sequence y past x by lag l WITHOUT time-flipping. R_xy[l] spikes sharply at the exact lag where two waveforms align.",
      symbols: [
        { symbol: "R_{xy}[\\ell]", name: "Cross-Correlation", unit: "Energy units", description: "Measures similarity between two DIFFERENT signals (e.g., Tx pulse vs echo)" },
        { symbol: "R_{xx}[\\ell]", name: "Auto-Correlation", unit: "Energy units", description: "Compares a signal against a shifted copy of ITSELF" },
        { symbol: "\\ell", name: "Lag Shift Index", unit: "samples", description: "Peak lag d gives Time Delay of Arrival: TDOA = d · Ts" }
      ]
    },
    bullets: [
      "**Cross-Correlation ($R_{xy}$)**: Powers ultrasonic rangefinders, radar, and acoustic leak triangulation—even when an echo is drowned in random static noise, sliding the original pulse pattern produces a sharp peak at exact travel delay $\\ell = d$!",
      "**Auto-Correlation ($R_{xx}$)**: Random white noise never correlates with a shifted copy of itself ($R_{nn}[\\ell \\neq 0] \\approx 0$), whereas a hidden periodic tone repeats every period $N_0$, pulling repeating machine faults right out of heavy noise!"
    ],
    takeaway: "Convolution **flips** $h[n]$ to model filter physics; Correlation **does not flip** and acts as a pattern-matching radar for time delays and hidden periodicity.",
    speakerNotes: "Emphasize the single structural difference: convolution flips h[n]; correlation does NOT flip."
  },
  {
    id: 41,
    title: "Figure 2.4A: Convolution Mechanics & Cross-Correlation Delay",
    subtitle: "Visualizing sliding weighted sums (left) and echo lag detection inside noise (right)",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "figure",
    figureKey: "u2_fig_convolution_correlation",
    takeaway: "Left: $h[n]=\\{0.5, 0.5\\}$ sliding past $\\{1,2,3\\}$ gives $\\{0.5, 1.5, 2.5, 1.5\\}$. Right: Cross-correlation pulls a buried echo cleanly out of random static at lag $\\ell = d$.",
    speakerNotes: "Connect the concrete arithmetic from Worked Example 2.4 directly to the left stems, and show the radar echo peak on the right."
  },
  {
    id: 42,
    title: "FIR vs. IIR Digital Filters: Feedforward vs. Feedback",
    subtitle: "Comparing the two fundamental architectures for digital frequency filtering",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "pros-cons",
    prosCons: {
      advantages: [
        "**FIR (Finite Impulse Response)**: Feedforward only ($y[n]=\\sum b_k x[n-k]$)—**100% unconditionally stable**, cannot oscillate.",
        "**FIR Linear Phase**: Symmetric coefficients ($b_k = b_{M-k}$) guarantee **zero waveform phase distortion** (ideal for ECG, pulses, audio).",
        "**IIR (Infinite Impulse Response)**: Uses output feedback ($y[n] = \\sum b_k x[n-k] - \\sum a_m y[n-m]$)—achieves razor-sharp cutoff with **far fewer taps** ($N=4\\text{–}8$ vs $M=60+$)."
      ],
      disadvantages: [
        "**FIR Cost**: Needs many delay taps ($M$) and more RAM/MAC cycles to achieve a steep filter cliff.",
        "**IIR Stability Risk**: Feedback poles can drift outside the unit circle ($|z| \\ge 1$) due to coefficient rounding, causing runaway oscillation.",
        "**IIR Non-Linear Phase**: Different frequencies experience unequal group delay, distorting sharp pulse shapes."
      ],
      engineeringVerdict: "Choose FIR when waveform shape/phase fidelity and guaranteed stability matter; choose IIR (via biquads) when MCU speed is tight and sharp magnitude cutoff dominates."
    },
    takeaway: "FIR = Feedforward, always stable, linear phase, more taps. IIR = Feedback, super fast/steep, non-linear phase, requires $|z| < 1$ pole stability.",
    speakerNotes: "Students often confuse FIR and IIR on exams. Remind them: 'F' in FIR = Feedforward & Finite; 'I' in IIR = Infinite tail from feedback loop."
  },
  {
    id: 43,
    title: "Figure 2.4: FIR Tapped-Delay Line vs. Recursive IIR Architecture",
    subtitle: "Comparing feedforward multiplier banks against feedback delay loops",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "figure",
    figureKey: "u2_fig4",
    takeaway: "Notice the absence of backward arrows in FIR (left) versus the red $-a_1$ recursive feedback loop in IIR (right).",
    speakerNotes: "Point directly to the red feedback path on the right panel—that feedback is why an impulse makes an IIR filter ring forever."
  },
  {
    id: 44,
    title: "Windowing Functions Overview",
    subtitle: "Tapering finite signal blocks cleanly for FIR design and spectral analysis",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "types",
    typesGrid: [
      {
        typeName: "1. Rectangular Window",
        description: "Abrupt boxcar cut (all weights w[n] = 1). Gives the narrowest main frequency peak but severe -13 dB sidelobe leakage.",
        keyFeature: "Best frequency sharpness; worst adjacent sidelobe bleed",
        example: "Short transient impact hammers or exactly synchronized cycles",
        badge: "Boxcar"
      },
      {
        typeName: "2. Hanning & Hamming Windows",
        description: "Smooth raised-cosine tapers fading edges toward zero. Suppresses sidelobes to -31.5 dB (Hanning) or -43 dB (Hamming).",
        keyFeature: "Optimal daily workhorse balancing peak sharpness and leakage",
        example: "Hanning: FFT machinery vibration | Hamming: speech & FIR design",
        badge: "Workhorse"
      },
      {
        typeName: "3. Blackman-Harris Window",
        description: "Multi-term cosine taper tapering almost flat at both ends. Crushes sidelobes below -92 dB at the cost of a wider mainlobe.",
        keyFeature: "Ultra-high dynamic range for spotting tiny tones next to giants",
        example: "Harmonic distortion audio racks, precision RF spectrum analyzers",
        badge: "Ultra-Clean"
      }
    ],
    takeaway: "Always trade **mainlobe width** (frequency sharpness) against **sidelobe height** (leakage suppression). Hanning is the default instrumentation choice.",
    speakerNotes: "Preview windowing here as part of Section 2.4, and explain that we'll see its exact effect on FFT plots in Section 2.6."
  },
  {
    id: 45,
    title: "Checkpoint 2.4: Time-Domain DSP & Digital Filters",
    subtitle: "Checking convolution length, correlation, and FIR vs. IIR behavior",
    sectionTag: "2.4 Signal Processing Techniques",
    type: "check-understanding",
    quiz: {
      question: "Which statement accurately contrasts FIR and IIR digital filters?",
      options: [
        "IIR filters have strictly linear phase and are unconditionally stable",
        "FIR filters use feedback paths so a single impulse rings forever",
        "FIR filters have zero feedback (always stable, easy linear phase), while IIR filters use feedback for steeper rolloff with fewer taps",
        "Cross-correlation requires flipping h[n] backward just like convolution"
      ],
      correctIndex: 2,
      explanation: "FIR filters are purely feedforward (all poles at z=0), guaranteeing unconditional stability and exact linear phase with symmetric taps. IIR uses recursive feedback for steep low-order cutoffs, risking instability if poles reach |z| ≥ 1."
    },
    speakerNotes: "Check comprehension of 2.4 before introducing the Fourier Transform family."
  },

  // ===========================================================================
  // MODULE 2.5: CONTINUOUS-TIME FOURIER TRANSFORM — CTFT (1.0 HOUR)
  // ===========================================================================
  {
    id: 46,
    title: "2.5 Fourier Transform (CTFT)",
    subtitle: "Step 5: Putting on frequency-domain glasses—the mathematical prism",
    sectionTag: "2.5 Continuous Fourier Transform (CTFT)",
    type: "section-divider",
    takeaway: "Time tells you WHEN something happened; Frequency tells you WHAT vibrations are hiding inside it.",
    speakerNotes: "Start the Fourier Story cleanly (Sections 2.5–2.8). Remind students that time-domain graphs hide overlapping tones, just like blended ingredients."
  },
  {
    id: 47,
    title: "The Fruit Smoothie & Musical Chord Analogy",
    subtitle: "The easiest way to understand what the Fourier Transform actually does",
    sectionTag: "2.5 Continuous Fourier Transform (CTFT)",
    type: "analogy",
    analogy: {
      everydayConcept: "Un-Mixing a Fruit Smoothie & Hearing a Piano Chord",
      technicalMapping: "A messy motor vibration wave is a blended fruit smoothie (time signal). The Fourier Transform is a magical centrifuge that spins the smoothie and separates it into exact ingredient cups: 2 scoops of 50 Hz Banana + 1 scoop of 120 Hz Strawberry!",
      whyItWorks: "Just as your ear effortlessly hears individual C-E-G notes inside one composite piano chord, orthogonal sine and cosine waves allow the Fourier integral to measure the exact weight of each frequency independently.",
      limitsOfAnalogy: "A real blender destroys fruit ingredients permanently, whereas the Fourier Transform is 100% mathematically reversible via the Inverse Transform (IDFT/IFT)."
    },
    speakerNotes: "Let this analogy sink in—students who previously found Fourier intimidating immediately grasp what 'decomposition into frequency ingredients' means."
  },
  {
    id: 48,
    title: "How the Fourier Probe Works: Spinning Phasor Resonance",
    subtitle: "Why multiplying by e^(-jωt) magically detects only one target frequency",
    sectionTag: "2.5 Continuous Fourier Transform (CTFT)",
    type: "concept",
    bullets: [
      "**Euler's Spinning Wheel**: $e^{-j\\omega t} = \\cos(\\omega t) - j\\sin(\\omega t)$ represents a point rotating clockwise around a circle at test frequency $\\omega$ radians/sec.",
      "**The Resonance Test**: Multiply our mystery signal $x(t)$ by this spinning test wheel at frequency $\\omega_0$ and average over all time:",
      "**Case 1 (Wrong Frequency)**: If $x(t)$ does NOT contain $\\omega_0$, the positive and negative lobes push equally in every direction around the circle—their sum cancels out to **ZERO**.",
      "**Case 2 (Exact Match!)**: If $x(t)$ DOES contain $\\omega_0$, the signal pushes in lock-step with the rotating wheel—yielding a **tall spectral spike** proportional to that tone's amplitude and phase!"
    ],
    takeaway: "The Fourier integral is simply a **frequency detector**: spin a test phasor $e^{-j\\omega t}$ at speed $\\omega$, multiply by $x(t)$, and see whether the product sums to non-zero.",
    speakerNotes: "Explain why negative frequencies exist here: e^(+jωt) and e^(-jωt) are counter-clockwise and clockwise phasors whose average produces a real cosine wave: cos(ωt) = (e^(jωt)+e^(-jωt))/2!"
  },
  {
    id: 49,
    title: "CTFT Forward Analysis, Inverse Synthesis & Spectra",
    subtitle: "The mathematical prism connecting continuous time x(t) and continuous frequency X(ω)",
    sectionTag: "2.5 Continuous Fourier Transform (CTFT)",
    type: "formula",
    formulaBlock: {
      equation: "X(\\omega) = \\int_{-\\infty}^{\\infty} x(t)\\,e^{-j\\omega t}\\,dt \\qquad\\Longleftrightarrow\\qquad x(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} X(\\omega)\\,e^{+j\\omega t}\\,d\\omega",
      label: "Continuous-Time Fourier Transform Pair (ω = 2πf)",
      description: "X(ω) is generally complex: its Magnitude |X(ω)| reveals how strong each frequency is, and its Phase ∠X(ω) records the exact timing offset of each sine wave.",
      symbols: [
        { symbol: "|X(\\omega)|", name: "Magnitude Spectrum", unit: "V·s", description: "Sqrt(Re² + Im²) — gives harmonic strength / energy" },
        { symbol: "\\angle X(\\omega)", name: "Phase Spectrum", unit: "radians", description: "atan2(Im, Re) — preserves pulse timing & waveform shape" },
        { symbol: "e^{-j\\omega t}", name: "Complex Kernel", unit: "dimensionless", description: "Clockwise phasor probe cos(ωt) - j sin(ωt)" }
      ]
    },
    bullets: [
      "**Never Ignore Phase!**: A common myth is that only magnitude $|X(\\omega)|$ matters. Scramble the phase $\\angle X(\\omega)$ while keeping $|X(\\omega)|$ identical, and a sharp square wave or spoken sentence turns into unrecognizable smeared noise!"
    ],
    takeaway: "CTFT preserves **100% of information**: $|X(\\omega)|$ tells you the amplitude of each ingredient, and $\\angle X(\\omega)$ tells you when each wave peaks.",
    speakerNotes: "Show both the Forward (analysis) and Inverse (synthesis) equations side by side so students see the beautiful symmetry."
  },
  {
    id: 50,
    title: "Figure 2.5: Time Waveform to Orthogonal Frequency Spectrum",
    subtitle: "Watching a tangled multi-tone time signal separate into crisp spectral spikes",
    sectionTag: "2.5 Continuous Fourier Transform (CTFT)",
    type: "figure",
    figureKey: "u2_fig5",
    takeaway: "The composite waveform on the left looks confusing, but Fourier decomposition on the right immediately exposes 50 Hz (1.00), 150 Hz (0.50), and 250 Hz (0.25).",
    speakerNotes: "Point out how impossible it is to read 150 Hz and 250 Hz off the left graph by eye—and how effortless it becomes on the right."
  },
  {
    id: 51,
    title: "Essential CTFT Properties & The Pulse $\\leftrightarrow$ Sinc Dual",
    subtitle: "Shortcuts that turn difficult time calculus into effortless frequency algebra",
    sectionTag: "2.5 Continuous Fourier Transform (CTFT)",
    type: "concept",
    bullets: [
      "**1. Rectangular Pulse $\\leftrightarrow$ Sinc Function**: A crisp finite pulse of width $T$ ($|t|\\le T/2$, height $1$) transforms into $X(\\omega) = T\\,\\frac{\\sin(\\omega T/2)}{\\omega T/2} = T\\,\\mathrm{sinc}\\!\\left(\\frac{\\omega T}{2}\\right)$ with infinite rippling sidelobes! Shorter pulses spread wider in frequency.",
      "**2. Convolution Theorem (The Biggest Shortcut!)**: Slow time-domain convolution turns into simple multiplication in frequency: $x(t) * h(t) \\longleftrightarrow X(\\omega) \\cdot H(\\omega)$.",
      "**3. Time Shift $\\leftrightarrow$ Phase Twist**: Delaying a signal by $t_0$ leaves magnitudes untouched and twists phase linearly: $x(t - t_0) \\longleftrightarrow e^{-j\\omega t_0} X(\\omega)$.",
      "**4. Linearity, Modulation & Differentiation**: Scaling/adding signals scales/adds spectra; multiplying by $\\cos(\\omega_0 t)$ shifts spectra to $\\pm\\omega_0$; $\\frac{dx}{dt} \\longleftrightarrow j\\omega X(\\omega)$."
    ],
    takeaway: "The Convolution Theorem ($x*h \\leftrightarrow X \\cdot H$) is why engineers love the Fourier domain: messy differential equations and integrals turn into plain multiplication!",
    speakerNotes: "Write out the Rect pulse integral result briefly on the board: integral from -T/2 to T/2 of e^(-jωt) dt gives 2sin(ωT/2)/ω = T sinc(ωT/2). Also highlight that shorter time T means wider frequency spread!"
  },

  // ===========================================================================
  // MODULE 2.6: DISCRETE FOURIER TRANSFORM — DFT (1.5 HOURS)
  // ===========================================================================
  {
    id: 52,
    title: "2.6 Discrete Fourier Transform (DFT)",
    subtitle: "Step 6: Adapting Fourier's continuous integral so finite computers can calculate spectra",
    sectionTag: "2.6 Discrete Fourier Transform (DFT)",
    type: "section-divider",
    takeaway: "Computers cannot integrate from -∞ to +∞. The DFT replaces infinite integrals with finite N-point sums over discrete frequency bins.",
    speakerNotes: "Introduce Section 2.6 (1.5 Hours). Emphasize why we need DFT after CTFT: computers have finite RAM and finite time."
  },
  {
    id: 53,
    title: "The Computer's Dilemma & The Twiddle Clock-Hand $W_N$",
    subtitle: "Turning continuous integrals into simple matrix rotations",
    sectionTag: "2.6 Discrete Fourier Transform (DFT)",
    type: "concept",
    bullets: [
      "**Why CTFT Crashes on a Computer**: CTFT demands an unbroken continuous function $x(t)$ over $t \\in (-\\infty, +\\infty)$ and produces infinitely many frequency points $\\omega$. A microcontroller only has $N$ discrete samples stored in RAM!",
      "**The DFT Solution**: Sample time at $N$ points $x[0], x[1], \\dots, x[N-1]$ and test only $N$ evenly spaced harmonic frequencies $k = 0, 1, \\dots, N-1$.",
      "**Meet the Twiddle Factor $W_N$**: Define one fundamental clock-step angle $W_N = e^{-j\\frac{2\\pi}{N}}$ ($1/N$-th of a full circle clockwise). Raising it to power $k \\cdot n$ simply steps the clock hand $k$ notches per sample!"
    ],
    equation: "W_N = e^{-j\\frac{2\\pi}{N}} = \\cos\\!\\left(\\frac{2\\pi}{N}\\right) - j\\sin\\!\\left(\\frac{2\\pi}{N}\\right)",
    takeaway: "Never fear $e^{-j\\frac{2\\pi}{N}kn}$: it is just a unit-length clock hand $W_N$ stepping clockwise around a circle!",
    speakerNotes: "Draw a 4-hour clock for N=4: step 0 = 12 o'clock (+1), step 1 = 3 o'clock (-j), step 2 = 6 o'clock (-1), step 3 = 9 o'clock (+j). Students love this visual!"
  },
  {
    id: 54,
    title: "The DFT Equation & Real Physical Frequency Axis",
    subtitle: "Computing spectral bins X[k] and mapping index k back to real Hertz",
    sectionTag: "2.6 Discrete Fourier Transform (DFT)",
    type: "formula",
    formulaBlock: {
      equation: "X[k] = \\sum_{n=0}^{N-1} x[n]\\,W_N^{kn} = \\sum_{n=0}^{N-1} x[n]\\,e^{-j\\frac{2\\pi}{N}kn}, \\qquad f_k = k \\cdot \\Delta f = k \\cdot \\frac{f_s}{N}",
      label: "N-Point DFT & Rayleigh Frequency Resolution",
      description: "Each bin index k corresponds to a physical frequency f_k = k·(fs/N). True Rayleigh frequency resolution Δf depends ONLY on total observation time T_record = N/fs!",
      symbols: [
        { symbol: "k", name: "Frequency Bin Index", unit: "0, 1, ..., N-1", description: "k = 0 is DC average; k = N/2 is Nyquist frequency fs/2" },
        { symbol: "\\Delta f", name: "Frequency Bin Spacing", unit: "Hz/bin", description: "Δf = fs / N = 1 / T_record (longer recording = sharper Δf)" },
        { symbol: "X[k]", name: "Complex Spectral Bin", unit: "amplitude·N", description: "Divide |X[k]| by N (DC) or N/2 (single-sided AC) to read Volts" }
      ]
    },
    bullets: [
      "**Critical Insight**: Want sharper frequency resolution (smaller $\\Delta f$) to separate $50\\text{ Hz}$ from $50.5\\text{ Hz}$? Increasing sampling rate $f_s$ alone does NOT help! You must record for a **longer duration $T_{\\text{record}}$** ($\\Delta f = 1/T_{\\text{record}}$)."
    ],
    takeaway: "Memorize $\\Delta f = \\frac{f_s}{N} = \\frac{1}{T_{\\text{record}}}$: **recording time** sets true frequency sharpness, while **sampling rate** sets maximum frequency range ($f_s/2$).",
    speakerNotes: "Drill that distinction: fs/2 = bandwidth ceiling; 1/T_record = sharpness between adjacent peaks."
  },
  {
    id: 55,
    title: "Figure 2.6A: Twiddle Clock-Hand $W_4^k$ & 4-Point DFT Spectrum",
    subtitle: "Visualizing unit-circle rotations and seeing how x[n] = {1, 0, 2, 1} maps to 4 spectral bins",
    sectionTag: "2.6 Discrete Fourier Transform (DFT)",
    type: "figure",
    figureKey: "u2_fig_dft_4pt_intuition",
    takeaway: "Because real input sequences have conjugate symmetry ($X[N-k] = X[k]^*$), only bins $k = 0$ through $N/2$ hold unique frequency amplitudes.",
    speakerNotes: "Use the left unit circle diagram as a cheat-sheet right before we do the 4-point DFT calculation by hand on the very next slide."
  },
  {
    id: 56,
    title: "Worked Example 2.6: Computing a 4-Point DFT by Hand",
    subtitle: "Demystifying the DFT sum with concrete numbers (direct syllabus exam problem)",
    sectionTag: "2.6 Discrete Fourier Transform (DFT)",
    type: "worked-example",
    workedExample: {
      problem: "Compute the complete 4-point Discrete Fourier Transform $X[k]$ ($k = 0, 1, 2, 3$) of the discrete sequence $x[n] = \\{1, 0, 2, 1\\}$ using the twiddle factor $W_4 = e^{-j2\\pi/4} = -j$.",
      given: {
        "Sequence x[n]": "x[0]=1, x[1]=0, x[2]=2, x[3]=1",
        "Twiddle Base (N=4)": "W4⁰=1, W4¹=-j, W4²=-1, W4³=+j"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Bin k = 0 (DC Component)",
          explanation: "All weights $W_4^0 = 1$ simply sum the input sequence:",
          math: "X[0] = 1(1) + 0(1) + 2(1) + 1(1) = \\mathbf{4}"
        },
        {
          stepNumber: 2,
          title: "Bin k = 1 (Fundamental Clockwise Step)",
          explanation: "Use weights $W_4^0=1, W_4^1=-j, W_4^2=-1, W_4^3=+j$:",
          math: "X[1] = 1(1) + 0(-j) + 2(-1) + 1(+j) = \\mathbf{-1 + j} \\quad (|X[1]| = \\sqrt{2})"
        },
        {
          stepNumber: 3,
          title: "Bin k = 2 (Nyquist Alternating Bin)",
          explanation: "Use weights $W_4^{2n} = \\{1, -1, 1, -1\\}$:",
          math: "X[2] = 1(1) + 0(-1) + 2(1) + 1(-1) = \\mathbf{2}"
        },
        {
          stepNumber: 4,
          title: "Bin k = 3 (Conjugate Symmetric Bin)",
          explanation: "Use weights $W_4^{3n} = \\{1, +j, -1, -j\\}$:",
          math: "X[3] = 1(1) + 0(+j) + 2(-1) + 1(-j) = \\mathbf{-1 - j} = X[1]^*"
        }
      ],
      finalAnswer: "X[k] = {4, -1 + j, 2, -1 - j}",
      practicalInsight: "Notice that X[0] = 4 is simply the sum of all samples (4× average DC value = 1.0), and X[3] is the exact complex conjugate of X[1]!"
    },
    speakerNotes: "Walk through each bin slowly. Remind students that once they memorize {1, -j, -1, +j}, any 4-point DFT takes less than 60 seconds!"
  },
  {
    id: 57,
    title: "Spectral Leakage, Picket-Fence Effect & Zero-Padding",
    subtitle: "Three real-world DFT quirks—and how windowing solves leakage",
    sectionTag: "2.6 Discrete Fourier Transform (DFT)",
    type: "concept",
    bullets: [
      "**1. Spectral Leakage**: If your finite buffer $T_{\\text{record}}$ cuts off a sine wave mid-cycle, wrapping it around creates a sharp cliff discontinuity. That sudden jump splatters energy across neighboring bins (sidelobes up to $-13\\text{ dB}$ high!), burying nearby weak harmonics.",
      "**2. Picket-Fence Effect (Scalloping Loss)**: A DFT only peeks at fixed discrete bins $f_k = k\\Delta f$ (like looking through gaps in a picket fence). If a true tone sits halfway between two bins, a Rectangular window under-reports its amplitude by up to **$-3.92\\text{ dB}$ ($\approx 36\\%$ error)**!",
      "**3. Zero-Padding**: Appending zeros to double $N$ shrinks the plot spacing $f_s/N_{\\text{pad}}$ (band-limited **sinc interpolation**), reducing picket-fence error—**BUT it adds ZERO new information and does NOT improve true Rayleigh resolution ($\\Delta f = 1/T_{\\text{real}}$)**!"
    ],
    takeaway: "To fight **spectral leakage**, taper the time window edges smoothly to zero using a **Hanning window** ($w[n] = 0.5 - 0.5\\cos(2\\pi n/(N-1))$).",
    speakerNotes: "Draw a sine wave cut mid-cycle and repeated periodically to show the sharp vertical jump—students immediately see why a cliff creates high-frequency sidelobes."
  },
  {
    id: 58,
    title: "Figure 2.6: Spectral Leakage vs. Hanning Window Suppression",
    subtitle: "How smooth cosine tapering drops sidelobes from -13 dB down to -32 dB",
    sectionTag: "2.6 Discrete Fourier Transform (DFT)",
    type: "figure",
    figureKey: "u2_fig6",
    takeaway: "Hanning windowing trades a slightly wider central peak for massive sidelobe cleanup ($-13\\text{ dB} \\to -32\\text{ dB}$), letting weak bearing defects stand out clearly.",
    speakerNotes: "Compare the red messy sidelobes against the clean green Hanning response."
  },
  {
    id: 59,
    title: "Checkpoint 2.5–2.6: Fourier Properties, DFT & Leakage",
    subtitle: "Testing intuition on resolution, zero-padding, and phase",
    sectionTag: "2.6 Discrete Fourier Transform (DFT)",
    type: "check-understanding",
    quiz: {
      question: "Two bearing vibration peaks sit just $0.5\\text{ Hz}$ apart ($100.0\\text{ Hz}$ and $100.5\\text{ Hz}$). Currently you capture $0.5\\text{ s}$ of data ($\\Delta f = 2\\text{ Hz}$) at $f_s = 2000\\text{ Hz}$. How do you separate the two peaks cleanly?",
      options: [
        "Append 3,000 zeros (zero-padding) to the 0.5 s recording",
        "Increase the sampling rate to $f_s = 8000\\text{ Hz}$ for the same $0.5\\text{ s}$",
        "Record for a longer duration $T_{\\text{record}} \\ge 2.0\\text{ s}$ so $\\Delta f = 1/T \\le 0.5\\text{ Hz}$",
        "Switch from Hanning window to Rectangular window without changing $T$"
      ],
      correctIndex: 2,
      explanation: "True physical frequency resolution depends strictly on real recording time: $\\Delta f = 1 / T_{\\text{record}}$. Zero-padding only interpolates a smooth curve between coarse bins, and raising $f_s$ only extends the upper frequency limit $f_s/2$."
    },
    speakerNotes: "This is the #1 real-world FFT misconception. Make sure everyone sees why Option C is the only physical fix!"
  },

  // ===========================================================================
  // MODULE 2.7: FAST FOURIER TRANSFORM — FFT (1.5 HOURS)
  // ===========================================================================
  {
    id: 60,
    title: "2.7 Fast Fourier Transform (FFT)",
    subtitle: "Step 7: The divide-and-conquer trick that makes real-time spectral analyzers possible",
    sectionTag: "2.7 Fast Fourier Transform (FFT)",
    type: "section-divider",
    takeaway: "The FFT is NOT a different transform or an approximation—it computes the EXACT same DFT hundreds of times faster.",
    speakerNotes: "Introduce Section 2.7 (1.5 Hours). Emphasize right up front: FFT = Exact DFT, zero accuracy sacrificed!"
  },
  {
    id: 61,
    title: "The $N^2$ Bottleneck & Cooley-Tukey Divide-and-Conquer",
    subtitle: "Why direct DFT stalls on big arrays—and how twiddle symmetry cuts work exponentially",
    sectionTag: "2.7 Fast Fourier Transform (FFT)",
    type: "concept",
    bullets: [
      "**The $N^2$ Wall**: Direct DFT computes $N$ output bins, each requiring $N$ multiplications = **$N^2$ operations**. For $N = 4096$, that is **$16{,}777{,}216$ complex multiplications** per frame—far too slow for live telemetry!",
      "**Divide-and-Conquer (DIT)**: Cooley and Tukey split the $N$-point array into **Even indices** ($x[0], x[2], \\dots$) and **Odd indices** ($x[1], x[3], \\dots$), computing two half-size $N/2$ DFTs ($E[k]$ and $O[k]$).",
      "**The Secret Twiddle Symmetry**: Using $W_N^{k + N/2} = -W_N^k$ (opposite side of the circle!) and periodicity $W_N^{k + N} = W_N^k$, multiplying $W_N^k \\cdot O[k]$ ONCE solves **BOTH** bin $k$ (by adding) and bin $k + N/2$ (by subtracting)!"
    ],
    takeaway: "Because $W_N^{k + N/2} = -W_N^k$, every multiplication does double duty—splitting $N$ repeatedly in half cuts complexity from $N^2$ down to $\\frac{N}{2}\\log_2 N$!",
    speakerNotes: "Show students on the unit circle why adding N/2 around the circle flips the sign to -1 (180 degrees opposite)."
  },
  {
    id: 62,
    title: "Radix-2 Butterfly & Complexity Speedup Math",
    subtitle: "Inside the core building block—and why bit-reversal keeps RAM tidy",
    sectionTag: "2.7 Fast Fourier Transform (FFT)",
    type: "formula",
    formulaBlock: {
      equation: "\\begin{aligned} X[k] &= E[k] + W_N^k\\,O[k] \\\\ X[k + N/2] &= E[k] - W_N^k\\,O[k] \\end{aligned} \\qquad\\qquad \\text{Speedup} = \\frac{N^2}{\\frac{N}{2}\\log_2 N} = \\frac{2N}{\\log_2 N}",
      label: "Radix-2 Butterfly Equations & Complexity Speedup",
      description: "An N-point Radix-2 FFT requires log2(N) stages, with N/2 butterfly pairs per stage. Pre-sorting inputs in bit-reversal order lets outputs emerge sequentially in-place.",
      symbols: [
        { symbol: "E[k],\\, O[k]", name: "Even & Odd Sub-DFTs", unit: "complex", description: "Half-length (N/2) transforms computed recursively" },
        { symbol: "C_{\\text{FFT}}", name: "FFT Multiplications", unit: "ops", description: "(N/2)·log2(N) total complex multiplications" },
        { symbol: "\\log_2 N", name: "Butterfly Stages", unit: "stages", description: "e.g. 10 stages for N=1024; 12 stages for N=4096" }
      ]
    },
    bullets: [
      "**Bit-Reversal Ordering ($N=8$ example)**: Splitting even/odd 3 times orders indices `0, 4, 2, 6, 1, 5, 3, 7`—simply flipping the 3 binary bits (`001` $\\leftrightarrow$ `100`) so every butterfly overwrites RAM in-place!",
      "**Speedup Check ($N = 4096$)**: Direct DFT $= 4096^2 = 16{,}777{,}216$ vs. FFT $= 2048 \\times 12 = 24{,}576$ multiplications $\\implies$ **$682.7\\times$ faster ($99.85\\%$ computation saved)**!"
    ],
    takeaway: "At $N = 4096$, the Radix-2 FFT eliminates **$99.85\\%$** of complex multiplications while producing the exact same answer down to machine precision.",
    speakerNotes: "Note that the SVG Table u2_fig7 shows total butterfly arithmetic ops (N log2 N = 49,152, 341.3x), while pure complex multiplications is (N/2) log2 N = 24,576 (682.7x). Clarify both conventions so students match any textbook!"
  },
  {
    id: 63,
    title: "Figure 2.7: Radix-2 Butterfly Flow Graph & Speedup Benchmarks",
    subtitle: "Tracing the 2-point butterfly unit, bit-reversal ordering, and exponential time savings",
    sectionTag: "2.7 Fast Fourier Transform (FFT)",
    type: "figure",
    figureKey: "u2_fig7",
    takeaway: "Notice how Node A and Node B combine in a single 'X'-shaped butterfly crossing to overwrite their own RAM registers with zero wasted memory.",
    speakerNotes: "Point to the 'X' crossing lines on the left—that visual crossing is why Cooley and Tukey named it a 'butterfly'."
  },
  {
    id: 64,
    title: "Checkpoint 2.7: Cooley-Tukey FFT Mastery",
    subtitle: "Quick check on FFT accuracy and computational scaling",
    sectionTag: "2.7 Fast Fourier Transform (FFT)",
    type: "check-understanding",
    quiz: {
      question: "An engineer switches a vibration analyzer from a direct DFT to a 1024-point Radix-2 FFT. Which statement is true?",
      options: [
        "The FFT sacrifices ~5% spectral accuracy in exchange for faster execution",
        "The FFT produces exact mathematically identical bins to DFT while cutting complex multiplications from $1{,}048{,}576$ to $5{,}120$ ($204.8\\times$ speedup)",
        "The FFT doubles the frequency resolution $\\Delta f$ automatically",
        "Bit-reversal scrambles the final frequency bin output order"
      ],
      correctIndex: 1,
      explanation: "FFT is an exact factorization of the DFT matrix ($1024^2 = 1{,}048{,}576$ vs $(1024/2)\\log_2(1024) = 512 \\times 10 = 5{,}120$, ratio $= 204.8\\times$). Bit-reversal pre-sorts inputs so outputs emerge in natural frequency order $0, 1, \\dots, N-1$."
    },
    speakerNotes: "Verify everyone gets 512 × 10 = 5,120 complex multiplications and 204.8x speedup."
  },

  // ===========================================================================
  // MODULE 2.8: INVERSE FOURIER TRANSFORM — IDFT (0.5 HOUR)
  // ===========================================================================
  {
    id: 65,
    title: "2.8 Inverse DFT & Parseval's Theorem",
    subtitle: "Step 8: Returning safely from the frequency domain back to real time—with zero energy lost",
    sectionTag: "2.8 Inverse DFT & Parseval's Theorem",
    type: "section-divider",
    takeaway: "The Inverse DFT turns edited frequency spectra back into real-world audio, waveforms, or filtered sensor signals.",
    speakerNotes: "Introduce Section 2.8 (0.5 Hour). Connect back to our Fruit Smoothie analogy: IDFT puts the unmixed fruit cups back together—minus any rotten ingredients (50 Hz noise) we threw away!"
  },
  {
    id: 66,
    title: "IDFT Synthesis & Parseval's Energy Conservation Theorem",
    subtitle: "Why we flip the sign to +j, divide by N, and preserve total energy across domains",
    sectionTag: "2.8 Inverse DFT & Parseval's Theorem",
    type: "formula",
    formulaBlock: {
      equation: "x[n] = \\frac{1}{N}\\sum_{k=0}^{N-1} X[k]\\,e^{+j\\frac{2\\pi}{N}kn} \\qquad\\text{and}\\qquad \\sum_{n=0}^{N-1} |x[n]|^2 = \\frac{1}{N}\\sum_{k=0}^{N-1} |X[k]|^2",
      label: "IDFT Synthesis & Parseval's Energy Identity",
      description: "IDFT spins the twiddle factor backward (+j, conjugate W_N^{-kn}) and divides by 1/N so amplitude scales back cleanly. Parseval guarantees energy in time equals normalized energy in frequency.",
      symbols: [
        { symbol: "1/N", name: "Normalization Factor", unit: "scale", description: "Essential scaling step; forgetting it inflates x[n] by N×" },
        { symbol: "W_N^{-kn}", name: "Conjugate Twiddle", unit: "e^{+j2πkn/N}", description: "Counter-clockwise phasor undoing forward rotation" },
        { symbol: "E", name: "Conserved Signal Energy", unit: "sum squared", description: "Allows computing RMS & energy directly from FFT bins!" }
      ]
    },
    bullets: [
      "**Surgical Noise Removal**: Run FFT $\\to$ zero out $50\\text{ Hz}$ power-hum bins ($X[k]=0$) $\\to$ run IDFT $\\to$ clean ECG heart waveform emerges!",
      "**MP3 & Audio Compression**: Run FFT $\\to$ discard tiny inaudible high-frequency bins $\\to$ transmit 10x smaller file $\\to$ receiver runs IDFT to play back crisp music."
    ],
    takeaway: "The only differences between Forward DFT and Inverse DFT are the **opposite exponent sign ($+j$)** and the mandatory **$1/N$ scaling factor**.",
    speakerNotes: "Highlight the 1/N factor—forgetting 1/N in exams or Python scripts is a classic pitfall listed in syllabus 2.8."
  },
  {
    id: 67,
    title: "Worked Example 2.8: Reconstructing $x[n]$ via IDFT & Parseval",
    subtitle: "Proving exact lossless reconstruction from our earlier 4-point DFT spectrum",
    sectionTag: "2.8 Inverse DFT & Parseval's Theorem",
    type: "worked-example",
    workedExample: {
      problem: "Using the 4-point spectrum $X[k] = \\{4, -1+j, 2, -1-j\\}$ obtained in Example 2.6, (a) reconstruct time sample $x[1]$ and $x[2]$ via IDFT ($W_4^{-1} = +j$), and (b) verify Parseval's energy theorem.",
      given: {
        "Spectrum X[k]": "{4, -1+j, 2, -1-j} (N = 4)",
        "IDFT Twiddle Base": "W4^(-1) = +j, W4^(-2) = -1, W4^(-3) = -j"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Reconstruct Sample x[1]",
          explanation: "Multiply $X[k]$ by $\\{1, +j, -1, -j\\}$ and divide by $N=4$:",
          math: "x[1] = \\frac{1}{4}\\bigl[4(1) + (-1+j)(j) + 2(-1) + (-1-j)(-j)\\bigr] = \\frac{1}{4}[4 - j - 1 - 2 + j - 1] = \\mathbf{0}"
        },
        {
          stepNumber: 2,
          title: "Reconstruct Sample x[2]",
          explanation: "Multiply $X[k]$ by $\\{1, -1, 1, -1\\}$ and divide by $N=4$:",
          math: "x[2] = \\frac{1}{4}\\bigl[4(1) + (-1+j)(-1) + 2(1) + (-1-j)(-1)\\bigr] = \\frac{1}{4}[4 + 1 - j + 2 + 1 + j] = \\frac{8}{4} = \\mathbf{2}"
        },
        {
          stepNumber: 3,
          title: "Verify Parseval's Energy Conservation",
          explanation: "Compute time-domain energy of $x[n]=\\{1,0,2,1\\}$ vs. $\\frac{1}{N}\\sum |X[k]|^2$:",
          math: "\\sum |x[n]|^2 = 1^2+0^2+2^2+1^2 = \\mathbf{6} \\quad\\overset{?}{=}\\quad \\frac{4^2 + (\\sqrt{2})^2 + 2^2 + (\\sqrt{2})^2}{4} = \\frac{16+2+4+2}{4} = \\mathbf{6}\\;\\checkmark"
        }
      ],
      finalAnswer: "x[1] = 0, x[2] = 2 (Exact recovery of {1, 0, 2, 1}); Energy = 6 in both domains!",
      practicalInsight: "Parseval lets vibration engineers compute total RMS vibration velocity directly from a range of FFT bins without converting back to the time domain."
    },
    speakerNotes: "Doing the round-trip back to x[n] = {1, 0, 2, 1} removes any mystery—students see with their own eyes that DFT + IDFT is 100% exact."
  },

  // ===========================================================================
  // MODULE 2.9: PROCESSING AND PRESENTATION OF DATA (0.5 HOUR)
  // ===========================================================================
  {
    id: 68,
    title: "2.9 Processing & Presentation of Data",
    subtitle: "Step 9: Turning raw complex FFT numbers into calibrated engineering plots, PSDs & spectrograms",
    sectionTag: "2.9 Processing & Presentation of Data",
    type: "section-divider",
    takeaway: "Raw FFT arrays mean nothing to an operator until calibrated in physical Hz, scaled in Decibels or PSD, or mapped across time in an STFT spectrogram.",
    speakerNotes: "Introduce the final syllabus section 2.9 (0.5 Hour). Stress engineering communication: plotting raw bin index k=0..1023 without converting to Hz or dB fails lab standards."
  },
  {
    id: 69,
    title: "Decibel (dB) Scaling & Welch's Averaged PSD",
    subtitle: "Revealing tiny fault spikes next to giant tones—and smoothing noisy spectra",
    sectionTag: "2.9 Processing & Presentation of Data",
    type: "formula",
    formulaBlock: {
      equation: "\\text{Mag}_{\\text{dB}}[k] = 20 \\log_{10}\\!\\left(\\frac{|X[k]|}{V_{\\text{ref}}}\\right) \\qquad\\text{and}\\qquad \\widehat{P}_{\\text{Welch}}(f) = \\frac{1}{K}\\sum_{m=1}^{K} \\frac{|\\mathrm{FFT}(w \\cdot x_m)|^2}{f_s \\sum w^2}",
      label: "Logarithmic dB Magnitude & Welch Power Spectral Density",
      description: "Decibels compress 10,000:1 amplitude ratios onto one readable plot. Welch's method splits long records into K overlapping windowed segments and averages them to crush random noise variance.",
      symbols: [
        { symbol: "20\\log_{10}", name: "Amplitude Decibels", unit: "dB", description: "Every -20 dB is 10× smaller voltage; -60 dB is 1,000× smaller" },
        { symbol: "\\widehat{P}_{\\text{Welch}}", name: "Welch Averaged PSD", unit: "V²/Hz", description: "Power normalized per Hz; variance drops by ~1/K vs single Periodogram" },
        { symbol: "K", name: "Overlapping Segments", unit: "blocks", description: "Typically 50% overlap with Hanning windows" }
      ]
    },
    bullets: [
      "**Periodogram vs. Welch's PSD**: A raw single-shot **Periodogram** ($|X[k]|^2/N$) is noisy and spiky—taking more samples never reduces its variance! **Welch's Method** averages $K$ overlapping windowed blocks so steady noise flattens out and real weak bearing tones pop cleanly above the floor."
    ],
    takeaway: "Always label physical units (**Hz**, **dB** or **V²/Hz**), state the **window type**, and use **Welch averaging** for noisy industrial signals.",
    speakerNotes: "Contrast the jagged single Periodogram with smooth Welch PSD—great exam contrast question from 2.9!"
  },
  {
    id: 70,
    title: "STFT Spectrograms & The Heisenberg-Gabor Limit",
    subtitle: "Tracking frequencies that change over time—and the unavoidable time-frequency trade-off",
    sectionTag: "2.9 Processing & Presentation of Data",
    type: "concept",
    bullets: [
      "**When a Single FFT Fails**: Suppose a turbine ramps up from $100\\text{ Hz}$ to $3000\\text{ Hz}$ over 10 seconds (non-stationary chirp). Running ONE global FFT smears every frequency together and erases **WHEN** each frequency occurred!",
      "**Short-Time Fourier Transform (STFT)**: Slide a short window $w(t - \\tau)$ step-by-step across time, computing an FFT inside each slice. Stacking those slices forms a **2D Spectrogram**: Time on X, Frequency on Y, Intensity as Color.",
      "**The Heisenberg-Gabor Uncertainty Limit**: You cannot have infinite sharpness in BOTH time and frequency simultaneously:"
    ],
    equation: "\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}",
    takeaway: "**Narrow Window** = razor-sharp timing ($\\Delta t$ small), blurry frequency bins. **Wide Window** = crisp frequency peaks ($\\Delta f$ small), smeared timing.",
    speakerNotes: "Relate Δt·Δf ≥ 1/(4π) to a camera shutter: fast shutter freezes motion (sharp time) but lets in blurry low-light detail; slow shutter captures crisp detail but blurs motion."
  },
  {
    id: 71,
    title: "Figure 2.8: STFT Spectrogram & Heisenberg-Gabor Limit",
    subtitle: "Watching a motor run-up chirp evolve across time and frequency simultaneously",
    sectionTag: "2.9 Processing & Presentation of Data",
    type: "figure",
    figureKey: "u2_fig8",
    takeaway: "A spectrogram instantly separates steady tones (horizontal yellow line at 1 kHz) from accelerating machine run-up chirps (diagonal heat ramp).",
    speakerNotes: "Point out the two distinct signatures in the dark spectrogram box: stationary tone vs non-stationary run-up chirp."
  },
  {
    id: 72,
    title: "Checkpoint 2.8–2.9: IDFT, Welch PSD & Spectrograms",
    subtitle: "Verifying energy conservation, noise averaging, and time-frequency resolution",
    sectionTag: "2.9 Processing & Presentation of Data",
    type: "check-understanding",
    quiz: {
      question: "Why does an engineer use Welch's averaged PSD instead of a single full-length Periodogram when analyzing random vibration noise, and what happens in an STFT if the window is made too short?",
      options: [
        "Welch doubles frequency resolution Δf; a short STFT window sharpens Δf",
        "Welch averages overlapping blocks to cut random spectral variance; a short STFT window gives crisp time localization Δt but blurs frequency Δf",
        "Welch eliminates aliasing after sampling; a short window drops 1/N scaling",
        "Periodogram has zero variance; Welch converts time signals to analog"
      ],
      correctIndex: 1,
      explanation: "Welch's method divides the signal into overlapping windowed blocks and averages their periodograms, drastically lowering noise variance. By the Heisenberg-Gabor limit $\\Delta t \\cdot \\Delta f \\ge 1/(4\\pi)$, shortening a window improves $\\Delta t$ at the direct expense of coarser $\\Delta f$."
    },
    speakerNotes: "Great check tying together Welch variance reduction and the Heisenberg-Gabor trade-off."
  },

  // ===========================================================================
  // MODULE 2.10: COMPLETE END-TO-END SOLVED CASE STUDIES
  // ===========================================================================
  {
    id: 73,
    title: "2.10 End-to-End Case Study",
    subtitle: "Bringing all 9 sections together on a real Workshop Electric Motor Health Monitor",
    sectionTag: "2.10 End-to-End Case Study",
    type: "section-divider",
    takeaway: "Follow 2 real physical quantities (75°C heat + 50 Hz vibration) step-by-step from raw sensor voltage to conditioning, 12-bit ADC, RAM arrays, and FFT alarm display.",
    speakerNotes: "Walk students proudly into the full capstone example: every concept from Sections 2.1–2.9 will now click into place inside one concrete machine!"
  },
  {
    id: 74,
    title: "Step 1: The Workshop Motor & Two Physical Measurands",
    subtitle: "Defining what we want to monitor—and the hidden factory interference",
    sectionTag: "2.10 End-to-End Case Study",
    type: "concept",
    bullets: [
      "**Target Machine**: A $5\\text{ HP}$ 3-phase industrial induction motor spinning at $3{,}000\\text{ RPM}$ ($50.0\\text{ Hz}$).",
      "**Measurand 1 — Casing Temperature**: Running steadily at **$T = 75.0^\\circ\\text{C}$** (Quasi-static DC Power signal; danger limit $80^\\circ\\text{C}$).",
      "**Measurand 2 — Shaft Vibration**: $1.50\\text{ m/s}^2$ peak oscillation at **$f_0 = 50.0\\text{ Hz}$** (Periodic AC waveform).",
      "**The Industrial Enemy**: A nearby arc welder injects **$10\\text{ kHz}$ high-frequency EMI noise** into the accelerometer cable—threatening catastrophic aliasing!"
    ],
    takeaway: "We must monitor both a slow DC signal ($75^\\circ\\text{C}$) and a clean $50\\text{ Hz}$ vibration wave while blocking $10\\text{ kHz}$ EMI.",
    speakerNotes: "Make sure students note the two contrasting signal types from Section 2.1: quasi-static DC vs 50 Hz periodic AC."
  },
  {
    id: 75,
    title: "Step 2: Analog Sensors Convert Physics into Voltage",
    subtitle: "LM35 temperature IC + Piezoelectric accelerometer transduction math",
    sectionTag: "2.10 End-to-End Case Study",
    type: "concept",
    bullets: [
      "**Channel 1 — LM35 Temperature Sensor** (Sensitivity $S_T = 10.0\\text{ mV}/^\\circ\\text{C}$):",
      "$$V_{\\text{temp}} = 75.0^\\circ\\text{C} \\times 10.0\\text{ mV}/^\\circ\\text{C} = \\mathbf{0.750\\text{ V DC}}$$",
      "**Channel 2 — Piezoelectric Accelerometer** (Sensitivity $S_a = 100\\text{ mV}/(\\text{m/s}^2)$):",
      "$$v_{\\text{vib}}(t) = 0.150\\sin(100\\pi t)\\text{ V} + v_{\\text{noise}}(10\\text{ kHz})$$",
      "**Two Hardware Problems Revealed**: (1) Negative voltage swings ($-0.150\\text{ V}$) will clip inside a unipolar $0\\text{–}5\\text{ V}$ ADC; (2) $10\\text{ kHz}$ noise will alias down if sampled at $1\\text{ kS/s}$!"
    ],
    takeaway: "Raw sensor voltages cannot go straight into a $0\\text{–}5\\text{ V}$ ADC: bipolar swings clip at $0\\text{ V}$ and $10\\text{ kHz}$ noise causes aliasing.",
    speakerNotes: "Show how Section 2.2 and 2.3 immediately explain WHY Step 3 (Conditioning) is mandatory."
  },
  {
    id: 76,
    title: "Step 2 Graph: Raw Analog Sensor Waveforms",
    subtitle: "Clean 0.750 V DC temperature signal vs. 50 Hz vibration buried in 10 kHz welder noise",
    sectionTag: "2.10 End-to-End Case Study",
    type: "figure",
    figureKey: "u2_case_step2_graph",
    takeaway: "Channel 1 is flat DC ($0.750\\text{ V}$); Channel 2 shows the smooth $50\\text{ Hz}$ dashed wave fuzzily covered by $10\\text{ kHz}$ EMI spikes.",
    speakerNotes: "Point out the jittery blue noise trace riding on top of the clean dashed 50 Hz sine wave."
  },
  {
    id: 77,
    title: "Step 3: Signal Conditioning (AA-LPF + +2.5 V Level Shift)",
    subtitle: "Applying Section 2.3 hardware shields before digitization",
    sectionTag: "2.10 End-to-End Case Study",
    type: "concept",
    bullets: [
      "**1. Anti-Aliasing Low-Pass Filter**: Use a 4th-order **Butterworth LPF** ($f_c = 200\\text{ Hz}$, flat passband at $50\\text{ Hz}$, $-80\\text{ dB/decade}$ rolloff). At $10\\text{ kHz}$ ($50\\times f_c$), noise is crushed by **$40 \\log_{10}(50^2) \\approx 136\\text{ dB}$** ideally ($>72\\text{ dB}$ in practice)!",
      "**2. Op-Amp DC Level Shifter**: Add a clean $+2.500\\text{ V}$ bias so bipolar $\\pm 0.150\\text{ V}$ swings safely at mid-rail:",
      "$$v_{\\text{ADC}}(t) = 2.500 + 0.150\\sin(100\\pi t)\\text{ V} \\in [2.350\\text{ V},\\; 2.650\\text{ V}]$$",
      "**Result**: Zero negative clipping, zero $10\\text{ kHz}$ aliasing, and a pristine $50\\text{ Hz}$ wave ready for the ADC!"
    ],
    takeaway: "Hardware Butterworth filtering erases $10\\text{ kHz}$ EMI before sampling, while a $+2.500\\text{ V}$ DC shift centers the AC wave inside $[0, 5\\text{ V}]$.",
    speakerNotes: "Connect this directly to Section 2.3: Butterworth was chosen specifically because we care about flat 50 Hz FFT amplitude accuracy."
  },
  {
    id: 78,
    title: "Step 3 Graph: Butterworth Attenuation & Level-Shifted Output",
    subtitle: "Hardware Bode rolloff above 200 Hz (left) and clean centered 2.50 V sine wave (right)",
    sectionTag: "2.10 End-to-End Case Study",
    type: "figure",
    figureKey: "u2_case_step3_graph",
    takeaway: "Notice how the ragged 10 kHz fuzz from Step 2 has vanished completely, leaving a pure purple sinusoid centered at 2.500 V.",
    speakerNotes: "Point out the >72 dB rejection badge at 10 kHz on the left and safe [2.35 V, 2.65 V] swing on the right."
  },
  {
    id: 79,
    title: "Step 4: 12-Bit ADC Sampling & Integer Quantization",
    subtitle: "Converting continuous Volts into exact 12-bit integer codes inside [0, 4095]",
    sectionTag: "2.10 End-to-End Case Study",
    type: "concept",
    bullets: [
      "**Sampling Clock ($10\\times$ Margin)**: Pick $f_s = 1000\\text{ S/s}$ ($T_s = 1.0\\text{ ms}$). Nyquist limit $f_N = 500\\text{ Hz} \\gg 50\\text{ Hz}$, giving 20 clean points per motor cycle.",
      "**12-Bit LSB Resolution ($0\\text{–}5.0\\text{ V}$ Span)**:",
      "$$\\Delta V = \\frac{5.000\\text{ V}}{2^{12}} = \\frac{5.000}{4096} = \\mathbf{1.2207\\text{ mV/code}}$$",
      "**Exact Integer Codes Written to RAM**:",
      "• Temperature ($0.750\\text{ V}$): $D_{\\text{temp}} = \\mathrm{round}(0.750 / 0.0012207) = \\mathbf{614}$ (`0010 0110 0110`)",
      "• Vibration Bias ($2.500\\text{ V}$): $D_0 = \\mathbf{2048}$ | Peak ($2.650\\text{ V}$): $D_{\\max} = \\mathbf{2171}$ | Min ($2.350\\text{ V}$): $D_{\\min} = \\mathbf{1925}$"
    ],
    takeaway: "Every voltage sample becomes an integer code ($614$ for temperature; $1925\\text{–}2171$ for vibration) spaced by $1.221\\text{ mV}$.",
    speakerNotes: "Verify on the board that 2171 - 2048 = +123 codes, and 123 * 1.2207 mV = 150.1 mV -> 1.50 m/s²!"
  },
  {
    id: 80,
    title: "Step 4 Graph: 12-Bit Sampling Grid & Quantization Staircase",
    subtitle: "20 discrete samples per 50 Hz cycle (left) and integer code assignments (right)",
    sectionTag: "2.10 End-to-End Case Study",
    type: "figure",
    figureKey: "u2_case_step4_graph",
    takeaway: "Time is sliced every 1.0 ms (left) and voltage is snapped to integer steps of 1.221 mV (right).",
    speakerNotes: "Show students the red temperature code badge (614) alongside the amber vibration code peaks (1925 to 2171)."
  },
  {
    id: 81,
    title: "Step 5: Computer RAM DMA Buffer & On-Disk CSV Logging",
    subtitle: "Storing integer streams with zero CPU drag and scaling back to engineering units",
    sectionTag: "2.10 End-to-End Case Study",
    type: "concept",
    bullets: [
      "**DMA Circular Ring Buffer in RAM**: ADC hardware drops each 12-bit code straight into 16-bit memory arrays without interrupting the CPU: `uint16_t temp_buf[1000];` and `uint16_t vib_buf[1000];`.",
      "**Software Calibration to Physical Units**:",
      "$$T = \\frac{614 \\times 1.2207\\text{ mV}}{10.0\\text{ mV}/^\\circ\\text{C}} = \\mathbf{74.95^\\circ\\text{C}}, \\qquad a_{\\text{vib}} = \\frac{(D - 2048) \\times 1.2207\\text{ mV}}{100\\text{ mV}/(\\text{m/s}^2)}$$",
      "**Time-Stamped CSV Disk Logging**: Flushing 2 channels $\\times 1000\\text{ S/s} \\times 2\\text{ bytes} = 4.0\\text{ KB/s}$ ($345.6\\text{ MB/day}$) logs structured rows like `14:00:00.005, 614, 74.95, 2171, +1.500`."
    ],
    takeaway: "DMA circular buffers guarantee zero dropped samples while software converts raw integers back into calibrated $^{\\circ}\\text{C}$ and $\\text{m/s}^2$ logs.",
    speakerNotes: "Point out the tiny 0.05 °C difference between 75.00 °C and 74.95 °C—that is real 12-bit quantization rounding error in action!"
  },
  {
    id: 82,
    title: "Step 5 Graph: RAM DMA Ring Buffer & Timestamped CSV Log",
    subtitle: "Embedded circular pointer architecture (left) and structured disk archive (right)",
    sectionTag: "2.10 End-to-End Case Study",
    type: "figure",
    figureKey: "u2_case_step5_graph",
    takeaway: "Notice how DSP software reads 1024 points smoothly behind the ADC DMA write pointer, storing timestamped physical readings to disk.",
    speakerNotes: "Point out row [PK] (+1.500 at code 2171) and row [MN] (-1.500 at code 1925) in the dark terminal log."
  },
  {
    id: 83,
    title: "Step 6: Real-Time 1024-Point FFT & Automated Fault Alarms",
    subtitle: "Turning RAM arrays into operator clarity and predictive maintenance alerts",
    sectionTag: "2.10 End-to-End Case Study",
    type: "concept",
    bullets: [
      "**Live Time Oscilloscope**: Shows the clean reconstructed $50\\text{ Hz}$ waveform ($\\pm 1.50\\text{ m/s}^2$) and digital temperature gauge ($74.95^\\circ\\text{C}$).",
      "**Real-Time 1024-Point FFT**: Apply a Hanning window to $N = 1024$ samples ($T = 1.024\\text{ s}$) and run a Radix-2 FFT:",
      "$$\\Delta f = \\frac{f_s}{N} = \\frac{1000\\text{ Hz}}{1024} = \\mathbf{0.9766\\text{ Hz/bin}} \\implies \\text{Bin } k=51 \\text{ sits at } 49.8\\text{ Hz} \\approx 50.0\\text{ Hz}$$",
      "**Predictive Fault Alarms**: A healthy motor shows only one clean spike at $50\\text{ Hz}$ ($1.50\\text{ m/s}^2 < 2.0\\text{ m/s}^2$ ISO limit). Early bearing wear immediately pops new harmonic peaks ($2\\times, 3\\times$, cage tones) long before failure!"
    ],
    takeaway: "FFT turns raw numbers into predictive diagnostics: a $50\\text{ Hz}$ peak at bin $k = 51$ confirms healthy operation, while new side spikes trigger maintenance early.",
    speakerNotes: "Tie the whole story together: from 75°C and 50 Hz vibration on a real motor all the way to bin k=51 on the monitor!"
  },
  {
    id: 84,
    title: "Step 6 Graph: Live Dashboard & 1024-Point FFT Diagnostics",
    subtitle: "Temperature gauge, reconstructed 50 Hz oscilloscope, and calibrated FFT alarm display",
    sectionTag: "2.10 End-to-End Case Study",
    type: "figure",
    figureKey: "u2_case_step6_graph",
    takeaway: "Clean 50 Hz peak at bin 51 sits well below the 2.00 m/s² red ISO alarm threshold, confirming healthy motor operation.",
    speakerNotes: "Walk through top gauge -> top oscilloscope -> bottom FFT spectrum."
  },
  {
    id: 85,
    title: "Industrial Scaling: 12,000 RPM Gas Turbine 16-Bit DAQ Pipeline",
    subtitle: "Applying the exact same 6-step architecture at 20 kS/s with 4,096-pt FFT and 16-bit resolution",
    sectionTag: "2.10 End-to-End Case Study",
    type: "figure",
    figureKey: "u2_fig_case_study",
    takeaway: "Scaling up to aerospace turbines simply scales the numbers using the exact same rules: 6th-order 5 kHz Butterworth AA-LPF, 20 kS/s S/H ($t_a < 1.59\\text{ ns}$), 16-bit ADC ($\\Delta V = 305.2\\,\\mu\\text{V}$), and 4,096-pt FFT ($\\Delta f = 4.88\\text{ Hz}$, $341\\times$ speedup).",
    speakerNotes: "Show students that once they understand the simple 50 Hz workshop motor, industrial 12,000 RPM gas turbines use the exact same 6 steps at higher fs and bit depth!"
  },

  // ===========================================================================
  // MODULE 2.11: EXAM MASTERY, WORKED PROBLEM & FORMULA REFERENCE
  // ===========================================================================
  {
    id: 86,
    title: "Comprehensive Exam Design Problem (All Formulas Combined)",
    subtitle: "Solving a complete 5-part Pokhara University DAQ specification problem",
    sectionTag: "2.11 Exam Review & Mastery",
    type: "worked-example",
    workedExample: {
      problem: "An industrial DAQ monitors a machine signal bandlimited to $f_{\\max} = 400\\text{ Hz}$ using $f_s = 1024\\text{ Hz}$, a $12\\text{-bit}$ ADC spanning $0\\text{–}5.0\\text{ V}$, and an $N = 1024\\text{-point}$ FFT buffer. Find: (a) Nyquist frequency & aliasing check, (b) LSB step $\\Delta V$ and RMS quantization noise, (c) FFT bin spacing $\\Delta f$, and (d) FFT multiplication speedup.",
      given: {
        "Max Bandwidth (f_max)": "400 Hz",
        "Sampling Clock (f_s)": "1024 S/s",
        "ADC Bit Depth & Span": "12 bits, V_FSR = 5.000 V",
        "FFT Buffer Size (N)": "1024 samples"
      },
      steps: [
        {
          stepNumber: 1,
          title: "Nyquist Limit & Aliasing Verification",
          explanation: "Half the sampling rate must exceed $f_{\\max}$:",
          math: "f_N = \\frac{f_s}{2} = \\frac{1024}{2} = \\mathbf{512\\text{ Hz}} > 400\\text{ Hz} \\quad (\\text{PASS: Safe Guard Band})"
        },
        {
          stepNumber: 2,
          title: "Voltage Resolution (LSB) & RMS Quantization Noise",
          explanation: "Divide full-scale span by $2^{12} = 4096$, then divide by $\\sqrt{12}$:",
          math: "\\Delta V = \\frac{5.000\\text{ V}}{4096} = \\mathbf{1.2207\\text{ mV}}, \\qquad \\sigma_q = \\frac{1.2207\\text{ mV}}{\\sqrt{12}} = \\mathbf{352.4\\,\\mu\\text{V}}"
        },
        {
          stepNumber: 3,
          title: "FFT Frequency Bin Resolution",
          explanation: "Divide sampling frequency by buffer size $N$ (equivalently $1/T_{\\text{record}}$):",
          math: "\\Delta f = \\frac{f_s}{N} = \\frac{1024\\text{ Hz}}{1024} = \\mathbf{1.000\\text{ Hz/bin}}"
        },
        {
          stepNumber: 4,
          title: "Radix-2 FFT Speedup Factor",
          explanation: "Compare $N^2$ direct DFT multiplications against $\\frac{N}{2}\\log_2 N$:",
          math: "\\text{Speedup} = \\frac{1024^2}{(1024/2) \\times 10} = \\frac{1{,}048{,}576}{5{,}120} = \\mathbf{204.8\\times\\text{ faster}}"
        }
      ],
      finalAnswer: "f_N = 512 Hz (Valid), ΔV = 1.221 mV, σq = 352.4 μV, Δf = 1.000 Hz, Speedup = 204.8×",
      practicalInsight: "Notice how choosing powers of 2 (fs = 1024 Hz, N = 1024) yields an exact integer 1.000 Hz/bin spacing!"
    },
    speakerNotes: "Walk through each step—this mirrors standard Pokhara University 8-to-10-mark numerical exam questions."
  },
  {
    id: 87,
    title: "Top 6 Classic DSP & DAQ Misconceptions",
    subtitle: "Avoiding the most common exam traps and real-world engineering failures",
    sectionTag: "2.11 Exam Review & Mastery",
    type: "misconceptions",
    bullets: [
      "Software Can Remove Aliasing: False! Once an ADC samples a signal faster than fs/2, folded ghosts become mathematically indistinguishable from real low frequencies. Hardware anti-aliasing LPF MUST come BEFORE the ADC.",
      "Discrete-Time Signals Are Always Digital: False! Discrete-time refers only to the time axis (sampled every Ts). A Sample-and-Hold capacitor holds discrete-time analog voltages until ADC quantization rounds them into binary bits.",
      "Zero-Padding Improves True Frequency Resolution: False! Zero-padding interpolates smooth points between coarse bins (like smoothing a jagged graph), but true Rayleigh resolution Δf = 1 / T_real depends strictly on actual recording duration.",
      "Sampling Faster Gives Sharper FFT Peaks: False! Raising fs while keeping N fixed WIDENS bin spacing (Δf = fs / N). You need longer recording time T_record (larger N/fs) to separate closely spaced tones.",
      "The FFT Is an Approximate Shortcut for DFT: False! Cooley-Tukey Radix-2 FFT computes the exact mathematical DFT down to floating-point rounding precision—just using divide-and-conquer symmetry.",
      "Phase Information Is Optional in Fourier Analysis: False! Magnitude |X(ω)| gives frequency strength, while Phase ∠X(ω) encodes waveform timing. Scrambling phase destroys pulse shapes and intelligibility."
    ],
    speakerNotes: "Review all 6 pitfalls carefully—they directly summarize the misconception list across Syllabus Sections 2.1–2.9."
  },
  {
    id: 88,
    title: "Master Formula Reference Sheet (Sections 2.1–2.9)",
    subtitle: "Complete mathematical summary for Unit II: Digital Signal Processing & DAQ",
    sectionTag: "2.11 Exam Review & Mastery",
    type: "review",
    bullets: [
      "**Energy & Power Signals (2.1)**: $E = \\int_{-\\infty}^{\\infty}|x(t)|^2 dt, \\quad P = \\lim_{T\\to\\infty}\\frac{1}{T}\\int_{-T/2}^{T/2}|x(t)|^2 dt$",
      "**Even & Odd Decomposition (2.1)**: $x_e(t) = \\frac{1}{2}[x(t)+x(-t)], \\quad x_o(t) = \\frac{1}{2}[x(t)-x(-t)]$",
      "**Nyquist & Aliasing (2.2)**: $f_s \\ge 2f_{\\max}\\;(f_N = f_s/2), \\quad f_{\\text{alias}} = |f_0 - m\\cdot f_s|$",
      "**Aperture Jitter & Quantization (2.2)**: $\\Delta t_j < \\frac{1}{2\\pi f_{\\max} 2^N}, \\quad \\Delta V = \\frac{V_{\\text{FSR}}}{2^N}, \\quad \\sigma_q = \\frac{\\Delta V}{\\sqrt{12}}, \\quad \\mathrm{SQNR} = 6.02N + 1.76\\text{ dB}$",
      "**Differential Amplifier CMRR (2.3)**: $\\mathrm{CMRR}_{\\text{dB}} = 20\\log_{10}(A_d / A_{cm})$",
      "**Discrete Convolution & Correlation (2.4)**: $y[n] = \\sum_{k} x[k]h[n-k], \\quad R_{xy}[\\ell] = \\sum_{n} x[n]y[n+\\ell]$",
      "**Continuous Fourier Transform (2.5)**: $X(\\omega) = \\int_{-\\infty}^{\\infty} x(t)e^{-j\\omega t}dt \\;\\Longleftrightarrow\\; x(t)*h(t) \\leftrightarrow X(\\omega)H(\\omega)$",
      "**Discrete Fourier & Resolution (2.6)**: $X[k] = \\sum_{n=0}^{N-1} x[n]W_N^{kn}\\;(W_N=e^{-j2\\pi/N}), \\quad \\Delta f = \\frac{f_s}{N} = \\frac{1}{T_{\\text{record}}}$",
      "**Radix-2 FFT & Speedup (2.7)**: $X[k] = E[k] + W_N^k O[k], \\quad C_{\\text{FFT}} = \\frac{N}{2}\\log_2 N \\;\\text{vs.}\\; N^2$",
      "**IDFT & Parseval's Theorem (2.8)**: $x[n] = \\frac{1}{N}\\sum_{k=0}^{N-1} X[k]e^{+j\\frac{2\\pi}{N}kn}, \\quad \\sum |x[n]|^2 = \\frac{1}{N}\\sum |X[k]|^2$",
      "**Presentation & STFT Limit (2.9)**: $\\mathrm{Mag}_{\\text{dB}} = 20\\log_{10}(|X|/V_{\\text{ref}}), \\quad \\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$"
    ],
    takeaway: "Every single syllabus topic from 2.1 through 2.9 connects seamlessly into one unified engineering pipeline from physical sensor to frequency-domain intelligence.",
    speakerNotes: "Conclude the unit by congratulating students on mastering the entire DSP pipeline from first principles."
  }
];

export const LECTURE_PY_SOURCE_UNIT2 = `#!/usr/bin/env python3
"""
lecture_unit2.py - Vector SVG Asset Generator for Unit II: Digital Signal Processing (10 hrs)
Author: Er. Saroj Chalise
Reference Format: https://chalisesaroj.github.io/slide/

Generates all high-fidelity vector figures for Unit II progressive classroom projection:
- Pure white canvas background (#ffffff)
- Times New Roman academic serif typography (>= 20px)
- 16:9 widescreen canvas (viewBox="0 0 1600 900")
- Full coverage of Sections 2.1 through 2.9 + Motor & Turbine Case Studies
"""

import os
import matplotlib.pyplot as plt

FIGURES_DIR = "figures_unit2"
os.makedirs(FIGURES_DIR, exist_ok=True)

plt.rcParams['font.family'] = 'serif'
plt.rcParams['font.serif'] = ['Times New Roman', 'Liberation Serif', 'DejaVu Serif']
plt.rcParams['font.size'] = 20
plt.rcParams['svg.fonttype'] = 'none'

ASSETS = [
    "u2_fig1_signal_taxonomy.svg",
    "u2_fig2_sampling_and_aliasing.svg",
    "u2_fig3_dsp_signal_chain.svg",
    "u2_fig3c_analog_filter_comparison.svg",
    "u2_fig4_fir_vs_iir_filters.svg",
    "u2_fig4a_convolution_and_correlation.svg",
    "u2_fig5_fourier_decomposition.svg",
    "u2_fig6_dft_leakage_and_windowing.svg",
    "u2_fig6a_dft_twiddle_clock_and_bins.svg",
    "u2_fig7_fft_butterfly_dit.svg",
    "u2_fig8_stft_spectrogram_presentation.svg",
    "u2_fig9_dewesoft_daq_architecture.svg",
    "u2_fig10_sensor_conditioning_matrix.svg",
    "u2_fig11_adc_bit_depth_comparison.svg",
    "u2_fig12_end_to_end_case_study.svg",
]

print(f"Configured {len(ASSETS)} 16:9 Vector SVGs for Unit II in {FIGURES_DIR}/.")
`;

export const LECTURE_QMD_SOURCE_UNIT2 = `---
title: "Unit II: Digital Signal Processing & Data Acquisition"
subtitle: "10-Hour Progressive Learning Lecture Suite (Sections 2.1–2.9)"
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

# 2.1 Types of Signals (1.0 Hour) {.center}

## Infinite Nature vs. Finite Computers

- **Signal**: Any physical disturbance varying across time or space that carries information.
- **Discrete-time vs. Digital**: Discrete-time slices the time axis ($x[n]$); Digital quantizes amplitude into $N$-bit levels.
- **Even & Odd Decomposition**: $x_e(t) = \\frac{1}{2}[x(t)+x(-t)]$, $x_o(t) = \\frac{1}{2}[x(t)-x(-t)]$.
- **Energy vs. Power**: Transient pulses have finite $E < \\infty, P=0$; steady/periodic signals ($u(t), \\sin\\omega t$) have $E=\\infty, 0 < P < \\infty$.

![](figures_unit2/u2_fig1_signal_taxonomy.svg){width="100%" fig-align="center"}

# 2.2 Acquisition & Digital Properties (1.5 Hours) {.center}

## Sampling, Aliasing, Aperture Jitter & Quantization

- **Nyquist-Shannon**: $f_s \\ge 2 f_{\\max}$ ($f_N = f_s/2$). Undersampling folds $f_0$ into $f_{\\text{alias}} = |f_0 - m f_s|$.
- **Aperture Jitter**: $\\Delta t_j < \\frac{1}{2\\pi f_{\\max} 2^N}$ for $<1\\text{ LSB}$ error.
- **Quantization**: $\\Delta V = V_{\\text{FSR}}/2^N$, $\\sigma_q = \\Delta V/\\sqrt{12}$, $\\mathrm{SQNR} = 6.02N + 1.76\\text{ dB}$.

![](figures_unit2/u2_fig2_sampling_and_aliasing.svg){width="100%" fig-align="center"}

![](figures_unit2/u2_fig11_adc_bit_depth_comparison.svg){width="100%" fig-align="center"}

# 2.3 Signal Conditioning (1.0 Hour) {.center}

## Analog Front-End, CMRR, Filter Families & Isolation

- **Instrumentation Amp**: Rejects common-mode 50 Hz hum via $\\mathrm{CMRR}_{\\text{dB}} = 20\\log_{10}(A_d/A_{cm})$.
- **Analog Anti-Aliasing Filters**: **Butterworth** (flat passband), **Chebyshev** (steepest cutoff, ripple), **Bessel** (linear phase / pulse fidelity).
- **Buffering & Isolation**: Voltage followers prevent source loading; optocouplers/capacitive/magnetic barriers stop $>1\\text{ kV}$ ground loops.

![](figures_unit2/u2_fig3c_analog_filter_comparison.svg){width="100%" fig-align="center"}

![](figures_unit2/u2_fig9_dewesoft_daq_architecture.svg){width="100%" fig-align="center"}

# 2.4 Signal Processing Techniques (1.5 Hours) {.center}

## LTI Systems, Convolution, Correlation, FIR/IIR & Windows

- **Discrete Convolution**: $y[n] = x[n]*h[n] = \\sum x[k]h[n-k]$ (flip, shift, multiply, add; length $L_x+L_h-1$).
- **Correlation**: $R_{xy}[\\ell] = \\sum x[n]y[n+\\ell]$ (no flip; detects echoes, TDOA, and buried tones).
- **FIR vs. IIR**: FIR = feedforward, always stable, linear phase; IIR = recursive feedback, steep cutoff, $|z|<1$ stability rule.
- **Windows**: Rectangular, Hanning, Hamming, Blackman-Harris.

![](figures_unit2/u2_fig4a_convolution_and_correlation.svg){width="100%" fig-align="center"}

![](figures_unit2/u2_fig4_fir_vs_iir_filters.svg){width="100%" fig-align="center"}

# 2.5–2.6 Continuous & Discrete Fourier Transform (2.5 Hours) {.center}

## From Smoothie Analogy to Twiddle Factors & Leakage

- **CTFT**: $X(\\omega) = \\int_{-\\infty}^{\\infty} x(t)e^{-j\\omega t}dt$; Rect pulse $\\leftrightarrow$ Sinc; Time Convolution $\\leftrightarrow$ Frequency Multiplication.
- **DFT**: $X[k] = \\sum_{n=0}^{N-1} x[n]W_N^{kn}$ with $W_N = e^{-j2\\pi/N}$ and bin spacing $\\Delta f = f_s/N = 1/T_{\\text{record}}$.
- **Leakage & Zero-Padding**: Smooth Hanning tapers crush sidelobes ($-13\\text{ dB} \\to -32\\text{ dB}$); zero-padding interpolates without improving true $\\Delta f$.

![](figures_unit2/u2_fig6a_dft_twiddle_clock_and_bins.svg){width="100%" fig-align="center"}

![](figures_unit2/u2_fig6_dft_leakage_and_windowing.svg){width="100%" fig-align="center"}

# 2.7–2.9 FFT, IDFT & Data Presentation (2.5 Hours) {.center}

## Fast Algorithms, Synthesis, Welch PSD & STFT

- **Radix-2 FFT**: Exploits $W_N^{k+N/2} = -W_N^k$ to slash operations from $N^2$ to $\\frac{N}{2}\\log_2 N$ ($682.7\\times$ faster at $N=4096$).
- **IDFT & Parseval**: $x[n] = \\frac{1}{N}\\sum X[k]e^{+j\\frac{2\\pi}{N}kn}$ and $\\sum |x[n]|^2 = \\frac{1}{N}\\sum |X[k]|^2$.
- **Presentation**: $20\\log_{10}(|X|/V_{\\text{ref}})$ dB scale, Welch averaged PSD, and STFT Spectrograms governed by $\\Delta t \\cdot \\Delta f \\ge \\frac{1}{4\\pi}$.

![](figures_unit2/u2_fig7_fft_butterfly_dit.svg){width="100%" fig-align="center"}

![](figures_unit2/u2_fig8_stft_spectrogram_presentation.svg){width="100%" fig-align="center"}

# 2.10 End-to-End Case Study {.center}

## Workshop Motor Monitor & Turbine Scaling

- **Sensors**: LM35 ($0.750\\text{ V DC}$) + Accelerometer ($0.150\\sin(100\\pi t)\\text{ V} + 10\\text{ kHz}$ EMI).
- **Conditioning**: $200\\text{ Hz}$ 4th-order Butterworth LPF + $+2.500\\text{ V}$ level shift.
- **12-Bit ADC**: $f_s=1000\\text{ S/s}$, $\\Delta V = 1.221\\text{ mV}$, $D_{\\text{temp}}=614$, $D_{\\text{vib}}\\in[1925, 2171]$.
- **Diagnostics**: DMA RAM buffer + 1024-pt FFT peak at Bin $51$ ($49.8\\text{ Hz}$).

![](figures_unit2/u2_fig12_end_to_end_case_study.svg){width="100%" fig-align="center"}
`;
