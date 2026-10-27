/**
 * Unified Chapters Registry:
 * Unit I: Fundamentals of Measurement Systems (6 hrs)
 * Unit II: Digital Signal Processing (10 hrs)
 *
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 */

import { SLIDES_DATA, LECTURE_PY_SOURCE, LECTURE_QMD_SOURCE, RUN_INSTRUCTIONS } from './lectureContent';
import { SlideData } from '../types/chapterDeck';
import { SVG_FIGURES, SvgAsset } from './svgAssets';
import { UNIT2_SLIDES_DATA, LECTURE_PY_SOURCE_UNIT2, LECTURE_QMD_SOURCE_UNIT2 } from './dspUnit2Content';
import { SVG_FIGURES_UNIT2 } from './svgAssetsUnit2';
import { UNIT3_SLIDES_DATA, LECTURE_UNIT3_PY_SOURCE, LECTURE_UNIT3_QMD_SOURCE, RUN_INSTRUCTIONS_UNIT3 } from './strainGaugeUnit3Content';
import { SVG_FIGURES_UNIT3 } from './svgAssetsUnit3';
import { UNIT4_SLIDES_DATA, LECTURE_UNIT4_PY_SOURCE, LECTURE_UNIT4_QMD_SOURCE, RUN_INSTRUCTIONS_UNIT4 } from './measurementSystemsUnit4Content';
import { SVG_FIGURES_UNIT4 } from './svgAssetsUnit4';
import { UNIT5_SLIDES_DATA, LECTURE_UNIT5_PY_SOURCE, LECTURE_UNIT5_QMD_SOURCE, RUN_INSTRUCTIONS_UNIT5 } from './responseMeasurementUnit5Content';
import { SVG_FIGURES_UNIT5 } from './svgAssetsUnit5';

export type ChapterId = 'unit1' | 'unit2' | 'unit3' | 'unit4' | 'unit5';

export interface SyllabusSection {
  number: string;
  title: string;
  hours: string;
  specificObjective: string;
  coreConcepts: string[];
  difficultConcepts: string[];
  misconceptions: string[];
  examQuestions: string[];
}

export const RUN_INSTRUCTIONS_UNIT2 = `================================================================================
CLASSROOM PRESENTATION EXECUTION INSTRUCTIONS
Unit II: Digital Signal Processing (10 hrs)
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
   python lecture_unit2.py

   Expected output:
   - Generates u2_fig1_signal_taxonomy.svg
   - Generates u2_fig2_sampling_and_aliasing.svg
   - Generates u2_fig3_dsp_signal_chain.svg
   - Generates u2_fig4_fir_vs_iir_filters.svg
   - Generates u2_fig5_fourier_decomposition.svg
   - Generates u2_fig6_dft_leakage_and_windowing.svg
   - Generates u2_fig7_fft_butterfly_dit.svg
   - Generates u2_fig8_stft_spectrogram_presentation.svg
   - Generates u2_fig9_dewesoft_daq_architecture.svg
   - Generates u2_fig10_sensor_conditioning_matrix.svg
   - Generates u2_fig11_adc_bit_depth_comparison.svg
   - Generates u2_fig12_end_to_end_case_study.svg

4. STEP 3: RENDER THE REVEAL.JS PRESENTATION
   quarto render lecture_unit2.qmd

   Or preview with live reload in your browser:
   quarto preview lecture_unit2.qmd

5. PRESENTATION TIPS:
   - Press 'F' on your keyboard for clean fullscreen presentation mode (no buttons or bars).
   - Press 'S' to open the speaker notes window.
   - Press 'O' to toggle slide overview grid.
   - Press 'ESC' or click anywhere to exit overview.
`;

export const SYLLABUS_UNIT1_SECTIONS: SyllabusSection[] = [
  {
    number: "1.1",
    title: "Methods of Measurements",
    hours: "1.0 Hour",
    specificObjective: "Describe various methods of measurement and evaluate power extraction vs. accuracy trade-offs.",
    coreConcepts: [
      "Direct comparison against primary dimensioned standards (steel rules, calipers, equal-arm mass balances).",
      "Deflection method: measurand generates physical deflection opposing calibrated spring torque (PMMC, Bourdon gauge).",
      "Null-balance method: opposing standard adjusted until a null detector reads zero difference (Wheatstone bridge, potentiometer).",
      "Loading effect: deflection instruments extract continuous energy, perturbing circuit operation; null instruments draw zero power at equilibrium."
    ],
    difficultConcepts: [
      "Why a null-balance bridge achieves maximum accuracy only at the null point, while unbalance bridges suffer non-linear deflection.",
      "The sensitivity trade-off: a highly sensitive null galvanometer makes manual balancing slower and susceptible to thermal emf."
    ],
    misconceptions: [
      "Believing deflection instruments are inherently inferior: they provide instantaneous dynamic readings without manual/servo balancing."
    ],
    examQuestions: [
      "Explain the working principle of the null-balance method and why it completely eliminates voltmeter loading errors.",
      "Compare direct and indirect measurement methods with two engineering examples for each."
    ]
  },
  {
    number: "1.2",
    title: "Analog Vs. Digital Instruments",
    hours: "1.0 Hour",
    specificObjective: "Differentiate between analog and digital instruments regarding resolution, observation error, and noise immunity.",
    coreConcepts: [
      "Continuous-time analog domain vs. discrete-time quantized digital domain.",
      "Quantization step size (resolution): ΔV = VFSR / (2^N - 1).",
      "Quantization noise power: σ_q = ΔV / √12, and theoretical SNR = 6.02N + 1.76 dB.",
      "Human parallax errors in analog scales vs. unambiguous 7-segment / LCD digital readouts.",
      "Nyquist sampling criterion (fs ≥ 2 · fmax) to prevent irreversible spectral aliasing."
    ],
    difficultConcepts: [
      "Quantization error as a fundamental stochastic noise source that cannot be removed by analog low-pass filtering after ADC conversion.",
      "The difference between instrument resolution (least significant bit) and instrument accuracy."
    ],
    misconceptions: [
      "Assuming that an instrument displaying 6 digits on an LCD display is automatically accurate."
    ],
    examQuestions: [
      "Derive the theoretical SNR equation SNR = 6.02N + 1.76 dB for an ideal N-bit analog-to-digital converter.",
      "A 12-bit ADC has a full-scale range of 0 to 5V. Determine its resolution in volts and compute its quantization noise RMS voltage."
    ]
  },
  {
    number: "1.3",
    title: "Data Acquisition Pipeline (DAQ)",
    hours: "1.0 Hour",
    specificObjective: "Trace signals across all stages of a modern multi-channel data acquisition system.",
    coreConcepts: [
      "Transducer primary physical sensing and conversion to electrical quantity.",
      "Analog signal conditioning: instrumentation amplifiers (INA), anti-aliasing low-pass filters (LPF), galvanic isolation.",
      "Sample-and-Hold (S/H) aperture window and Analog-to-Digital Conversion (ADC).",
      "Digital Signal Processing (DSP) microcontroller/FPGA host bus interface."
    ],
    difficultConcepts: [
      "Anti-aliasing filtering must occur in the analog domain strictly BEFORE the S/H stage, because aliasing folds into baseband irreversibly.",
      "Common-Mode Rejection Ratio (CMRR) and why instrumentation amplifiers require high CMRR to reject 50 Hz power line pickup."
    ],
    misconceptions: [
      "Believing a software digital filter can remove aliased frequencies post-conversion."
    ],
    examQuestions: [
      "Draw the complete block diagram of a modern Data Acquisition (DAQ) system and clearly explain the role of each block.",
      "Explain why anti-aliasing filters must be implemented as analog hardware rather than digital software."
    ]
  },
  {
    number: "1.4",
    title: "Static Calibration & Instrument Characteristics",
    hours: "1.0 Hour",
    specificObjective: "Calculate static sensitivity, zero drift, sensitivity drift, and hysteresis error from calibration data.",
    coreConcepts: [
      "Static calibration transfer function: y = f(x).",
      "Static sensitivity: S = dy / dx.",
      "Zero drift (bias shift) vs. sensitivity drift (span shift).",
      "Hysteresis error: loop area due to magnetic domain friction, elastic mechanical lag, or thermal delay.",
      "Linearity, dead-band, threshold, and repeatability."
    ],
    difficultConcepts: [
      "Separating temperature-induced zero drift from temperature-induced span drift in bridge sensors.",
      "Calculating maximum % hysteresis relative to Full-Scale Output (FSO)."
    ],
    misconceptions: [
      "Confusing precision with accuracy: a meter can produce identical repeatable readings that are completely inaccurate."
    ],
    examQuestions: [
      "Define static sensitivity and show how zero drift and sensitivity drift affect an instrument calibration line.",
      "Explain the phenomenon of hysteresis in mechanical sensors and calculate % hysteresis from given calibration data."
    ]
  },
  {
    number: "1.5",
    title: "Measurement Errors & Uncertainty (ISO GUM)",
    hours: "1.0 Hour",
    specificObjective: "Evaluate Type A and Type B uncertainties and propagate combined standard uncertainty using ISO GUM guidelines.",
    coreConcepts: [
      "Systematic errors (bias) vs. random errors (variance).",
      "Type A evaluation: statistical evaluation from repeated experimental observations (mean, sample variance, standard error of mean).",
      "Type B evaluation: non-statistical evaluation using calibration certificates, manufacturer specs, or assumed probability distributions (rectangular, triangular, normal).",
      "Law of Propagation of Uncertainty (ISO GUM Root-Sum-Square RSS formula).",
      "Coverage factor k and expanded uncertainty U = k · uc."
    ],
    difficultConcepts: [
      "Calculating partial derivative sensitivity coefficients ci = ∂f/∂xi for non-linear multi-variable measurement equations.",
      "Dividing manufacturer limits by √3 for uniform (rectangular) distributions vs. √6 for triangular distributions."
    ],
    misconceptions: [
      "Thinking uncertainty can be completely eliminated by taking thousands of samples (this reduces Type A random error, but does not touch Type B systematic bias)."
    ],
    examQuestions: [
      "State the difference between Type A and Type B uncertainty evaluations with relevant equations and practical examples.",
      "A pressure transducer reading is P = V / S, where V = 5.000 ± 0.010 V and S = 0.050 ± 0.0005 V/bar. Compute the combined standard uncertainty uc(P)."
    ]
  },
  {
    number: "1.6",
    title: "Intrusive vs. Non-Intrusive Sensing",
    hours: "0.5 Hour",
    specificObjective: "Analyze circuit loading effects and distinguish intrusive immersion probes from non-intrusive non-contact sensors.",
    coreConcepts: [
      "Intrusive measurement: sensor penetrates process envelope (orifice plate, immersion thermowell, series ammeter).",
      "Non-intrusive measurement: sensor extracts near-zero energy from process (clamp-on ultrasonic flowmeter, optical pyrometer, Hall-effect clamp).",
      "Voltmeter circuit loading: εL = -Rs / (Rs + Rm).",
      "Ammeter series resistance insertion loss."
    ],
    difficultConcepts: [
      "Why even high-impedance (10 MΩ) digital multimeters induce unacceptable measurement errors when probing high-impedance (e.g. 1 MΩ) sensor bridges."
    ],
    misconceptions: [
      "Believing digital multimeters have infinite input impedance."
    ],
    examQuestions: [
      "Derive the loading error formula for a voltmeter of internal resistance Rm connected across a circuit of Thevenin resistance Rs.",
      "Compare intrusive and non-intrusive flow measurement techniques in terms of pressure drop, installation complexity, and pipe wear."
    ]
  },
  {
    number: "1.7",
    title: "Electrical Safety & Ground Loop Isolation",
    hours: "0.5 Hour",
    specificObjective: "Identify ground loop voltage sources, design galvanic isolation barriers, and apply IEC 61010-1 overvoltage CAT ratings.",
    coreConcepts: [
      "Ground loops formed by multiple earth grounding points at different potentials (ΔVG = IG · RG).",
      "Common-mode voltage conversion to differential-mode interference noise.",
      "Galvanic isolation techniques: optical couplers, isolation transformers, capacitive digital isolators.",
      "IEC 61010-1 overvoltage installation categories: CAT I, CAT II, CAT III, and CAT IV."
    ],
    difficultConcepts: [
      "Transient surge impulse ratings: why a CAT IV 600V meter survives a 8,000V spike while a CAT II 600V meter fails catastrophically under the same transient."
    ],
    misconceptions: [
      "Assuming 'ground' is at 0.000V everywhere across an industrial facility."
    ],
    examQuestions: [
      "Explain how a ground loop generates 50 Hz power line interference and show how optoisolators eliminate this noise.",
      "Detail the four IEC 61010-1 overvoltage categories (CAT I to CAT IV) with their typical installation locations."
    ]
  }
];

export const SYLLABUS_UNIT2_SECTIONS: SyllabusSection[] = [
  {
    number: "2.1",
    title: "Types of Signals",
    hours: "1.0 Hour",
    specificObjective: "Familiarize with common types of signals and classify them based on time continuity, periodicity, predictability, and energy.",
    coreConcepts: [
      "Continuous-time analog signals x(t) vs. discrete-time quantized sequences x[n].",
      "Periodic signals (x(t + T0) = x(t)) vs. aperiodic / transient signals.",
      "Deterministic signals (analytical mathematical models) vs. random / stochastic signals (Gaussian noise, thermal flicker).",
      "Energy signals (finite total energy E < ∞, zero average power P = 0) vs. Power signals (infinite energy E = ∞, finite average power 0 < P < ∞).",
      "Even and odd signal decompositions: x_e(t) = 0.5[x(t) + x(-t)], x_o(t) = 0.5[x(t) - x(-t)]."
    ],
    difficultConcepts: [
      "Why real-world periodic signals (like sinusoids) are power signals with infinite energy over all time.",
      "Evaluating energy vs. power classification using the integral and limit definitions."
    ],
    misconceptions: [
      "Assuming discrete signals are always digital: discrete signals can have continuous unquantized amplitudes."
    ],
    examQuestions: [
      "Differentiate between energy and power signals with formal mathematical expressions and verify if a unit step u(t) is an energy or power signal.",
      "Explain the physical significance of decomposing a measurement waveform into even and odd components."
    ]
  },
  {
    number: "2.2",
    title: "Acquisition and Properties of Digital Signals",
    hours: "1.5 Hours",
    specificObjective: "Acquire and characterize digital signals for measurement systems, applying sampling criteria and quantization limits.",
    coreConcepts: [
      "Nyquist-Shannon sampling theorem: fs ≥ 2 · fmax to ensure complete information preservation without spectral overlap.",
      "Aliasing phenomenon: high frequency components f0 > fs/2 fold back into baseband as fa = |f0 - m · fs|.",
      "Aperture jitter: timing uncertainty Δtj in sample-and-hold circuits creates voltage error ΔV = (dv/dt)_max · Δtj.",
      "Quantization step size (ΔV = VFSR / 2^N), quantization noise RMS (σq = ΔV / √12).",
      "Theoretical Signal-to-Quantization-Noise Ratio: SQNR = 6.02N + 1.76 dB."
    ],
    difficultConcepts: [
      "Why spectral aliasing cannot be filtered out digitally once the signal has been sampled by the ADC.",
      "The aperture jitter frequency limit: for an N-bit converter, tj < 1 / (2π · fmax · 2^N)."
    ],
    misconceptions: [
      "Believing sampling at exactly the Nyquist rate (fs = 2 · fmax) is adequate for real-world signals with arbitrary phases."
    ],
    examQuestions: [
      "State the Nyquist-Shannon sampling theorem and calculate the perceived frequency if a 900 Hz tone is sampled at 1000 Hz.",
      "Derive the maximum allowable aperture jitter for a 16-bit ADC sampling a 20 kHz audio signal with 1 LSB error."
    ]
  },
  {
    number: "2.3",
    title: "Signal Conditioning",
    hours: "1.0 Hour",
    specificObjective: "Apply signal conditioning methods to prepare signals for processing and digital conversion.",
    coreConcepts: [
      "Pre-amplification and Common-Mode Rejection Ratio (CMRR) in instrumentation amplifiers.",
      "Analog anti-aliasing low-pass filtering: Butterworth (flat passband), Chebyshev (steep rolloff), and Bessel (linear phase / constant group delay).",
      "Galvanic isolation barriers: optocouplers, capacitive isolators, and isolation transformers.",
      "Impedance matching and buffer followers to eliminate source loading errors."
    ],
    difficultConcepts: [
      "Filter phase response: why Bessel filters are mandatory for pulse/transient signals despite having gentler rolloff than Chebyshev.",
      "Calculating stopband attenuation required at fs - fmax based on ADC bit resolution."
    ],
    misconceptions: [
      "Assuming high gain alone is sufficient in an amplifier without high CMRR when measuring microvolt sensor signals in industrial noise."
    ],
    examQuestions: [
      "Design an analog anti-aliasing filter specification for a 12-bit DAQ system with a signal bandwidth of 5 kHz and sampling rate of 25 kHz.",
      "Explain the trade-offs between Butterworth, Chebyshev, and Bessel filter responses in instrumentation signal conditioning."
    ]
  },
  {
    number: "2.4",
    title: "Signal Processing Techniques",
    hours: "1.5 Hours",
    specificObjective: "Utilize time-domain and transform-domain signal processing techniques including convolution, correlation, and filtering.",
    coreConcepts: [
      "Discrete-time Linear Time-Invariant (LTI) systems characterized by impulse response h[n].",
      "Discrete convolution formula: y[n] = x[n] * h[n] = Σ x[k] · h[n - k].",
      "Cross-correlation and auto-correlation for echo detection, time delay of arrival (TDOA), and periodic signal recovery.",
      "Finite Impulse Response (FIR) vs. Infinite Impulse Response (IIR) digital filters.",
      "Windowing functions: Rectangular, Hanning, Hamming, and Blackman-Harris."
    ],
    difficultConcepts: [
      "The physical mechanics of discrete convolution: flip, shift, multiply, and accumulate (MAC).",
      "The circular convolution vs. linear convolution distinction when computing convolution via DFT."
    ],
    misconceptions: [
      "Thinking FIR and IIR filters behave identically in terms of stability: FIR filters are unconditionally stable, while IIR poles must lie inside the unit circle."
    ],
    examQuestions: [
      "Compute the discrete convolution of x[n] = {1, 2, 3} with h[n] = {0.5, 0.5} showing all intermediate steps.",
      "Compare FIR and IIR digital filters in terms of linear phase, computational complexity, stability, and memory requirements."
    ]
  },
  {
    number: "2.5",
    title: "Fourier Transform (CTFT)",
    hours: "1.0 Hour",
    specificObjective: "Utilize the Continuous-Time Fourier Transform to analyze frequency spectra of physical signals.",
    coreConcepts: [
      "CTFT Forward Analysis: X(ω) = ∫ x(t) · e^{-jωt} dt.",
      "CTFT Inverse Synthesis: x(t) = (1 / 2π) ∫ X(ω) · e^{jωt} dω.",
      "Magnitude spectrum |X(ω)| and phase spectrum ∠X(ω).",
      "Properties of Fourier transform: Linearity, time shifting, frequency shifting (modulation), duality, differentiation in time.",
      "Convolution property: x(t) * h(t) ↔ X(ω) · H(ω)."
    ],
    difficultConcepts: [
      "Interpreting negative frequencies as mathematical phasors rotating in the clockwise direction in the complex plane.",
      "The Fourier transform of a rectangular pulse yielding a Sinc function (sin(x)/x) with infinite sidelobes."
    ],
    misconceptions: [
      "Believing the Fourier transform discards phase information: phase is critical for reconstructing signal waveshape."
    ],
    examQuestions: [
      "Find the Fourier transform of a rectangular pulse of duration T and unit amplitude, and plot its magnitude spectrum.",
      "State and prove the frequency convolution theorem for Continuous-Time Fourier Transforms."
    ]
  },
  {
    number: "2.6",
    title: "Discrete Fourier Transform (DFT)",
    hours: "1.5 Hours",
    specificObjective: "Formulate the Discrete Fourier Transform and analyze spectral resolution, leakage, and windowing.",
    coreConcepts: [
      "DFT Analysis equation: X[k] = Σ_{n=0}^{N-1} x[n] · e^{-j (2π/N) kn} for k = 0, 1, ..., N - 1.",
      "Twiddle factor notation: W_N = e^{-j 2π/N}, X[k] = Σ x[n] · W_N^{kn}.",
      "Frequency bin spacing: Δf = fs / N.",
      "Spectral leakage: truncation of a non-integer number of cycles causes energy to bleed across neighboring bins.",
      "Picket-fence effect (scalloping loss) and zero-padding for spectral interpolation."
    ],
    difficultConcepts: [
      "Understanding that zero-padding increases the number of frequency bins (display resolution) without improving the true Rayleigh physical resolution (determined solely by observation time T = N / fs).",
      "The relationship between Dirichlet kernels, sinc sidelobes, and window mainlobe width vs. sidelobe attenuation."
    ],
    misconceptions: [
      "Believing zero-padding creates new information out of nothing: it is simply band-limited sinc interpolation."
    ],
    examQuestions: [
      "Calculate the 4-point DFT of the sequence x[n] = {1, 0, 2, 1} using the twiddle factor matrix.",
      "Explain the causes of spectral leakage in the DFT and describe how windowing functions suppress sidelobes."
    ]
  },
  {
    number: "2.7",
    title: "Fast Fourier Transform (FFT)",
    hours: "1.5 Hours",
    specificObjective: "Analyze the Cooley-Tukey Radix-2 FFT algorithm and evaluate computational complexity speedups.",
    coreConcepts: [
      "Cooley-Tukey Decimation-in-Time (DIT) algorithm: decomposition into even and odd index sub-sequences.",
      "Twiddle factor symmetry (W_N^{k + N/2} = -W_N^k) and periodicity (W_N^{k + N} = W_N^k).",
      "Radix-2 butterfly computation unit: X[k] = E[k] + W_N^k · O[k], and X[k + N/2] = E[k] - W_N^k · O[k].",
      "Bit-reversal indexing for in-place memory computation.",
      "Computational complexity comparison: direct DFT requires N^2 complex multiplications; FFT requires (N/2) · log2(N) multiplications."
    ],
    difficultConcepts: [
      "Tracing the butterfly computation flow graph across log2(N) stages for an 8-point FFT.",
      "Deriving the 204.8x speedup for N = 1024 points (1,048,576 operations reduced to 5,120)."
    ],
    misconceptions: [
      "Thinking the FFT produces a different mathematical result than the DFT: the FFT is an exact, mathematically identical algorithm."
    ],
    examQuestions: [
      "Sketch the complete flow diagram of an 8-point radix-2 decimation-in-time FFT and write down the butterfly equations.",
      "Compare the computational complexity of direct DFT versus FFT for N = 4096 and calculate the percentage computation time saved."
    ]
  },
  {
    number: "2.8",
    title: "Inverse Fourier Transform (IDFT)",
    hours: "0.5 Hour",
    specificObjective: "Synthesize time-domain sequences from frequency spectra and verify Parseval's energy conservation theorem.",
    coreConcepts: [
      "IDFT Synthesis formula: x[n] = (1 / N) Σ_{k=0}^{N-1} X[k] · e^{j (2π/N) kn}.",
      "Exact lossless signal synthesis from frequency coefficients.",
      "Twiddle factor conjugate relationship: W_N^{-kn} = (W_N^{kn})*.",
      "Parseval's Theorem: Σ |x[n]|^2 = (1 / N) Σ |X[k]|^2 (energy equivalence between time and frequency domains)."
    ],
    difficultConcepts: [
      "Proving that the forward transform followed immediately by the inverse transform yields the original sequence identically.",
      "Reconstructing filtered audio or vibration signals via frequency-domain masking and IDFT synthesis."
    ],
    misconceptions: [
      "Forgetting the 1/N scaling factor in the IDFT equation, leading to magnitude errors."
    ],
    examQuestions: [
      "State and prove Parseval's relation for discrete-time signals and explain its significance in energy spectral density analysis.",
      "Given the frequency spectrum X[k] of a discrete signal, reconstruct x[n] using IDFT equations."
    ]
  },
  {
    number: "2.9",
    title: "Processing and Presentation of Data",
    hours: "0.5 Hour",
    specificObjective: "Present and interpret processed data accurately through decibel scaling, PSD estimation, and time-frequency spectrograms.",
    coreConcepts: [
      "Logarithmic decibel scaling: Magnitude_dB = 20 · log10(|X[k]| / Vref).",
      "Power Spectral Density (PSD) using Welch's averaged periodogram method.",
      "Short-Time Fourier Transform (STFT) for non-stationary signals: sliding window w(t - τ).",
      "Time-frequency spectrogram representation: time on x-axis, frequency on y-axis, energy as color intensity.",
      "Gabor-Heisenberg uncertainty limit: Δt · Δf ≥ 1 / (4π)."
    ],
    difficultConcepts: [
      "The trade-off in STFT window length: wide window gives high frequency resolution Δf but poor time resolution Δt; narrow window gives crisp time resolution but blurred frequency bins."
    ],
    misconceptions: [
      "Plotting raw bin indices (k = 0, 1, 2...) instead of calibrated physical frequency axes (f = k · fs / N in Hz)."
    ],
    examQuestions: [
      "Explain the working principle of the Short-Time Fourier Transform (STFT) and discuss the time-frequency resolution trade-off governed by the Heisenberg-Gabor limit.",
      "Contrast periodogram power spectral density estimation with Welch's modified periodogram method in terms of variance reduction."
    ]
  }
];

export const SYLLABUS_UNIT3_SECTIONS: SyllabusSection[] = [
  {
    number: "3.1",
    title: "Gauge Factor",
    hours: "1.5 Hours",
    specificObjective: "Understand the concept and significance of gauge factor (GF), derive its mathematical formulation from first principles, and compare metallic vs semiconductor alloys.",
    coreConcepts: [
      "Physical definition of Gauge Factor: GF = (ΔR / R0) / ε.",
      "First-principles derivation from R = ρ · L / A using logarithmic differentiation.",
      "Three constituent mechanisms: axial elongation (1), Poisson lateral contraction (+2ν), and piezoresistive resistivity change ((Δρ/ρ0)/ε).",
      "Metallic foil alloys: Constantan (GF ≈ 2.05 to 2.15) and Karma (GF ≈ 2.10) with near-zero TCR.",
      "Semiconductor silicon gauges: Piezoresistive dominance yielding GF = +120 to +175, but with high non-linearity and thermal sensitivity.",
      "Sub-microstrain sensitivity limits and why specialized signal conditioning circuits are mandatory."
    ],
    difficultConcepts: [
      "Separating the geometric dimensional terms (1 + 2ν ≈ 1.6) from the piezoresistive crystal lattice band structure shift.",
      "Why a large tensile strain (800 με) only creates a fraction of an ohm change on a 120 Ω nominal gauge."
    ],
    misconceptions: [
      "Assuming gauge resistance changes primarily because the wire gets thinner: in metals, elongation and contraction contribute ~80%, while in silicon, lattice piezoresistivity accounts for >98% of the change."
    ],
    examQuestions: [
      "Derive from fundamentals the expression for Gauge Factor of an electrical resistance strain gauge, identifying each term's physical significance.",
      "A 120 Ω metallic strain gauge with GF = 2.05 is subjected to a tensile strain of 900 με. Calculate the resulting resistance change ΔR and discuss why direct two-wire measurement is impractical."
    ]
  },
  {
    number: "3.2",
    title: "Bonded and Unbonded Strain Gauges",
    hours: "1.0 Hour",
    specificObjective: "Differentiate between bonded foil and unbonded wire strain gauges in construction, strain transmission mechanism, dynamic range, and transducer applications.",
    coreConcepts: [
      "Bonded foil gauge anatomy: etched metal foil grid (3–5 μm), polyimide/epoxy carrier backing (25 μm), and solder connection pads.",
      "Load transmission in bonded gauges: shear stress distribution through the adhesive matrix interface.",
      "Unbonded strain gauge construction: fine platinum-tungsten or nickel-chrome resistance wires (25 μm) suspended under pre-tension between movable armature posts.",
      "Comparative trade-offs: frequency response (>50 kHz bonded vs <2 kHz unbonded), adhesive creep, fatigue life, and hysteresis.",
      "Application domains: bonded gauges for external structural stress analysis; unbonded gauges inside accelerometers, pressure capsules, and load cells."
    ],
    difficultConcepts: [
      "Shear lag theory: how shear stress in the adhesive layer transfers normal strain from the substrate into the foil over the end zones.",
      "Adhesive creep and moisture absorption at elevated temperatures in bonded gauges versus zero adhesive creep in unbonded wire frames."
    ],
    misconceptions: [
      "Believing unbonded strain gauges can be glued directly to a test beam: they require rigid mounting inside a mechanical flexure armature."
    ],
    examQuestions: [
      "Compare bonded foil and unbonded wire strain gauges with respect to construction, strain transfer mechanism, frequency response, and application domains.",
      "Explain the role of the backing matrix and bonding cement in bonded strain gauges, and describe how improper curing causes measurement hysteresis."
    ]
  },
  {
    number: "3.3",
    title: "Related Circuit Configurations",
    hours: "2.0 Hours",
    specificObjective: "Analyze circuit configurations used with strain gauges including ballast circuits, Wheatstone bridges (quarter, half, full), and 4-wire Kelvin constant current circuits.",
    coreConcepts: [
      "3.3.1 Ballast Circuit: Voltage divider transfer function, sensitivity factor η = m / (1 + m)², sensitivity peak at m = Rb / Rg = 1, and the fatal DC baseline offset (Vs / 2) requiring AC dynamic vibration coupling.",
      "3.3.2 Wheatstone Bridge Circuits: Differential topology eliminating DC offset; bridge null condition R1·R3 = R2·R4.",
      "Quarter Bridge (1×): Single active gauge, sensitivity V0 / VEX ≈ 0.25·GF·ε, non-linearity term ΔR / (2R0) in denominator.",
      "Half Bridge (2×): Two active complementary gauges in pure bending (+ε, -ε); sensitivity doubles (0.5·GF·ε), complete cancellation of bridge non-linearity, and automatic common-mode thermal drift rejection.",
      "Full Bridge (4×): Four active gauges (+ε, -ε, +ε, -ε); 4× sensitivity multiplier (V0 = VEX·GF·ε), highest SNR, strictly linear, and full lead-wire cancellation.",
      "3.3.3 Constant Current Circuit: 4-wire Kelvin architecture separating drive current from sense amplifier, eliminating lead resistance drops, and achieving exact mathematical linearity: ΔV0 = I0·R0·GF·ε."
    ],
    difficultConcepts: [
      "Proving mathematically why the half-bridge bending configuration has zero non-linearity (the sum R1 + R2 = 2R0 remains strictly constant).",
      "Why the ballast circuit is completely unusable for static load measurements but ideal for high-frequency dynamic vibrations."
    ],
    misconceptions: [
      "Believing a quarter Wheatstone bridge is perfectly linear: it has an intrinsic non-linearity error of approximately 0.1% per 1000 με unless linearized by software or hardware."
    ],
    examQuestions: [
      "Derive the sensitivity expression for a ballast circuit and prove that maximum sensitivity occurs when the ballast resistor equals the nominal gauge resistance.",
      "A cantilever beam is instrumented with strain gauges for a load cell. Compare the output voltage, sensitivity, linearity, and temperature susceptibility of Quarter, Half, and Full bridge configurations.",
      "Explain the operating principle of a 4-wire Kelvin constant current circuit and demonstrate why it eliminates lead-wire resistance errors."
    ]
  },
  {
    number: "3.4",
    title: "Temperature Compensation Techniques",
    hours: "1.5 Hours",
    specificObjective: "Understand the mechanisms of thermal apparent strain and master compensation methods including adjacent arm dummy balancing and self-temperature compensation (STC).",
    coreConcepts: [
      "Physical origins of thermal apparent strain: Thermal Coefficient of Resistance (TCR, β) and Differential Thermal Expansion ((α_s - α_g) · ΔT).",
      "Apparent strain formula: ε_app = (β / GF) · ΔT + (α_s - α_g) · ΔT.",
      "3.4.1 Adjacent Arm Balancing: Active gauge (R1 = R0 + ΔR_mech + ΔR_T) paired with an identical dummy gauge (R2 = R0 + ΔR_T) on an unstrained block of identical material in identical thermal contact; bridge subtraction algebraically eliminates ΔR_T.",
      "Complementary active-active adjacent arm pairs in bending beams acting as simultaneous strain doublers and temperature compensators.",
      "3.4.2 Self-Temperature Compensation (STC): Metallurgical cold-working and heat treatment of foil alloys to enforce β = -GF · (α_s - α_g).",
      "Commercial STC numbering: STC-13 for mild steel (α_s ≈ 11–13 ppm/°C), STC-23 for aluminum (α_s ≈ 23 ppm/°C), and STC-06 for titanium.",
      "Material mismatch penalty: why mounting an STC-13 gauge on aluminum creates huge fictitious apparent stress."
    ],
    difficultConcepts: [
      "Why adjacent bridge arms subtract resistance shifts while opposite arms add resistance shifts.",
      "Thermal equilibrium constraints: why dummy gauge compensation fails if there is a spatial temperature gradient between active and dummy specimens."
    ],
    misconceptions: [
      "Thinking an STC gauge compensates for temperature on ANY material: an STC gauge is strictly tailored to one specific coefficient of thermal expansion."
    ],
    examQuestions: [
      "Define thermal apparent strain and explain the two physical mechanisms responsible for its occurrence in uncompensated strain gauges.",
      "Show how an adjacent arm dummy gauge cancels temperature effects in a Wheatstone bridge with complete algebraic derivation.",
      "Explain the metallurgical principle behind Self-Temperature Compensated (STC) strain gauges and explain what happens if an STC-13 gauge is bonded to an aluminum structure."
    ]
  }
];

export const SYLLABUS_UNIT4_SECTIONS: SyllabusSection[] = [
  {
    number: "4.1",
    title: "Sensors and Transducers",
    hours: "1.5 Hours",
    specificObjective: "Identify principles and types of sensors and transducers for various physical quantities, distinguishing active vs passive mechanisms and static/dynamic transfer characteristics.",
    coreConcepts: [
      "Operational definitions: Sensor as primary detector vs Transducer as physical-to-electrical energy converter.",
      "Two-stage architecture: Primary sensing element (diaphragm, Bourdon) coupled to secondary transduction element (strain gauge, piezo, LVDT).",
      "Active (self-generating) transducers: Thermocouples (Seebeck effect), Piezoelectric crystals (charge generation), Photovoltaic cells; zero excitation required.",
      "Passive (externally excited) transducers: Strain gauges (ΔR), RTDs (ΔR), Capacitive cells (ΔC), LVDT (inductance); requiring auxiliary DC/AC power supplies.",
      "Static performance parameters: Sensitivity K = dy/dx, non-linearity (% FSO), hysteresis, repeatability, resolution, and dead-band.",
      "Dynamic response: First-order thermal time constant τ and second-order seismic resonance frequency ω_n and damping ratio ζ."
    ],
    difficultConcepts: [
      "Why active piezoelectric transducers are incapable of measuring static DC forces due to finite cable leakage resistance.",
      "The sensitivity vs bandwidth trade-off in second-order transducers."
    ],
    misconceptions: [
      "Conflating sensors and transducers: all electrical transducers contain sensors, but pure mechanical sensors (like glass thermometers or Bourdon tubes) have no electrical transduction stage."
    ],
    examQuestions: [
      "Differentiate between active and passive transducers with three engineering examples of each.",
      "Explain the two-stage functional architecture of a complete transducer system with a neat block diagram.",
      "Define static sensitivity, linearity, and hysteresis as applied to industrial sensors."
    ]
  },
  {
    number: "4.2",
    title: "Force, Moment and Torque Measurement",
    hours: "2.5 Hours",
    specificObjective: "Measure force, torque, and moment using appropriate load cells, strain gauges, 6-DOF cross-talk decoupling matrices, and rotary shaft telemetry.",
    coreConcepts: [
      "4.2.1 Load cells: S-beam (tension/compression symmetry), shear beam (principal shear τ = VQ/Ib at 45°, immune to load position), and column/canister (high capacity >100 kN).",
      "Wheatstone full-bridge force scaling: V_out / V_ex = GF · ε · (1 + ν), eliminating off-axis bending and common-mode ambient thermal drift.",
      "4.2.2 Strain gauge construction: Constantan/Karma alloy foil on polyimide backing, heat-cured epoxy bonding, zero/span calibration resistors, and IP68 hermetic sealing.",
      "4.2.3 Multi-axis 6-DOF measurement: Simultaneous resolution of 3 forces (Fx, Fy, Fz) and 3 moments (Mx, My, Mz) via 6x6 cross-talk calibration matrix [F] = [C] · [V].",
      "4.2.4 Torque measurement: Surface shear stress τ = 16T/(π·d³), principal strains at ±45° helices ε = ±τ/(2G), and 4-gauge full bridge rejecting bending and axial thrust.",
      "Shaft data transmission: Slip-rings (contact noise, brush wear <3000 RPM) vs. wireless inductive telemetry (>25,000 RPM maintenance-free)."
    ],
    difficultConcepts: [
      "Why shear web load cells are superior to bending cantilever load cells on platform weigh scales.",
      "Formulating and calibrating the 6x6 decoupling matrix to remove mechanical cross-talk."
    ],
    misconceptions: [
      "Assuming a rotating torque shaft requires separate bending compensation: four 45° strain gauges wired in a full bridge naturally cancel all axial tension and bending moments."
    ],
    examQuestions: [
      "Explain the working principle and structural construction of an S-beam load cell. Why is a full-bridge configuration utilized?",
      "Derive the relationship between shaft torque T, surface shear strain, and output voltage of a 45° strain gauge rosette.",
      "Explain how a 6-component force-moment balance decouples mechanical cross-talk in wind tunnel testing."
    ]
  },
  {
    number: "4.3",
    title: "Flow Measurement & Visualization",
    hours: "3.0 Hours",
    specificObjective: "Apply pressure and flow measurement tools (manometers, pitot probes, obstruction meters) and employ advanced optical visualization techniques (PIV, Schlieren, BOS).",
    coreConcepts: [
      "4.3.1 Pitot-static probe: Stagnation total pressure P_t and undisturbed static pressure P_s; Bernoulli velocity derivation v = C_p · sqrt(2·ΔP / ρ).",
      "Obstruction meters: Venturi tube (C_d ≈ 0.98, 10-15% permanent head loss), flow nozzle (C_d ≈ 0.96), and orifice plate (C_d ≈ 0.60, high head loss).",
      "4.3.2 Pressure gauges: Hydrostatic U-tube manometer (ΔP = ρ·g·Δh, primary standard), inclined tube magnification L = Δh/sin(θ), Bourdon tube uncoiling, and piezoresistive silicon MEMS diaphragms.",
      "4.3.3 Optical flow visualization: Particle Image Velocimetry (PIV: pulsed laser sheet, Stokes number St << 0.1, cross-correlation velocity field v = Δs/Δt).",
      "Z-type Schlieren: Gladstone-Dale refractive index relation (n - 1 = K_GD · ρ), parabolic collimating mirrors, and knife-edge cutoff revealing density gradients ∂ρ/∂y.",
      "Background Oriented Schlieren (BOS): Digital cross-correlation of ambient background speckle patterns without mirrors or knife-edges.",
      "4.3.4 Hydraulic and pneumatic systems: Fluid power pressure relief, proportional throttling, and meter-in vs meter-out flow control."
    ],
    difficultConcepts: [
      "Why Schlieren imaging visualizes the spatial gradient of density (∂ρ/∂y) rather than absolute fluid density.",
      "The aerodynamic trade-off between Venturi fabrication cost and lifetime pipeline pumping power loss across orifice plates."
    ],
    misconceptions: [
      "Believing a Pitot tube measures flow velocity directly: it measures dynamic pressure (P_t - P_s), requiring accurate fluid density ρ to calculate velocity."
    ],
    examQuestions: [
      "Derive the flow velocity expression for a Pitot-static tube from Bernoulli's equation and explain the function of the static and stagnation ports.",
      "Compare the Venturi meter and Orifice plate with respect to discharge coefficient, permanent pressure loss, and installation cost.",
      "Explain the optical setup and working principle of Z-type Schlieren imaging and describe how Background Oriented Schlieren (BOS) differs."
    ]
  },
  {
    number: "4.4",
    title: "Thermal Measurement",
    hours: "1.5 Hours",
    specificObjective: "Analyze thermal measurement techniques including liquid-in-glass, RTD (PT100) with 3-wire bridge compensation, and thermocouples with cold junction compensation (CJC).",
    coreConcepts: [
      "Resistance Temperature Detectors (RTD): Positive temperature coefficient (PTC) of platinum, Callendar-Van Dusen equation R(T) = R0·[1 + A·T + B·T²].",
      "PT100 specifications: R0 = 100.00 Ω at 0 °C, alpha coefficient α = 0.00385 Ω/Ω/°C, high accuracy (±0.05 °C).",
      "3-wire lead compensation: Connecting identical lead resistances r_L into opposite bridge arms to eliminate ambient cable temperature drift.",
      "Self-heating error: Limiting excitation current I ≤ 1 mA to keep I²R dissipation below 0.1 mW.",
      "Thermocouples & Seebeck effect: Dissimilar metal junction EMF generation V_net ≈ S_AB · (T_hot - T_ref).",
      "Cold Junction Compensation (CJC): Measuring isothermal terminal block temperature T_ref and adding software offset voltage.",
      "Standard calibrations: Type K (Chromel-Alumel, 41 μV/°C), Type J (Iron-Constantan, 51 μV/°C), Type T (Copper-Constantan, cryogenic stability)."
    ],
    difficultConcepts: [
      "Algebraic cancellation of lead resistance r_L in a 3-wire Wheatstone bridge.",
      "Why thermocouples inherently measure temperature DIFFERENCE rather than absolute temperature."
    ],
    misconceptions: [
      "Believing the thermocouple voltage is generated at the hot junction bead: the thermoelectric EMF is actually distributed along the conductor wires subjected to temperature gradients."
    ],
    examQuestions: [
      "Explain the Callendar-Van Dusen equation for a PT100 RTD and show how a 3-wire bridge circuit cancels lead wire resistance.",
      "Explain the Seebeck effect in thermocouples and why Cold Junction Compensation (CJC) is mandatory for absolute temperature measurements.",
      "Compare RTDs and Thermocouples in terms of temperature range, sensitivity, linearity, response time, and cost."
    ]
  },
  {
    number: "4.5",
    title: "Pyrometry and Infrared Measurements",
    hours: "0.75 Hours",
    specificObjective: "Understand non-contact thermal radiation physics, Stefan-Boltzmann and Wien's laws, and application of optical pyrometers and IR thermography.",
    coreConcepts: [
      "Blackbody radiation physics: Planck's spectral distribution and total emissive power.",
      "Stefan-Boltzmann Law: E = ε · σ · T⁴, with σ = 5.6703 × 10⁻⁸ W/(m²·K⁴).",
      "Wien's Displacement Law: λ_max · T = 2898 μm·K, governing peak radiation wavelength.",
      "Surface emissivity (ε): Calibration significance of non-ideal graybodies (0 < ε < 1) and reflected ambient radiation errors.",
      "Disappearing filament optical pyrometer: Optical telescope matching calibrated lamp brightness to target at λ = 0.65 μm.",
      "Infrared thermography: 8–14 μm atmospheric transmission window, focal plane array (FPA) microbolometers, and thermal camera diagnostics."
    ],
    difficultConcepts: [
      "The severe sensitivity of temperature calculations to emissivity errors due to the T⁴ non-linear power law.",
      "Distance-to-spot ratio (D:S) and field of view alignment."
    ],
    misconceptions: [
      "Thinking an infrared thermometer measures the temperature of shiny metals accurately without setting emissivity: low-emissivity polished metals (ε ≈ 0.05) reflect background heat."
    ],
    examQuestions: [
      "State and explain the Stefan-Boltzmann Law and Wien's Displacement Law. How are they applied in radiation pyrometry?",
      "Describe the construction and working principle of a disappearing filament optical pyrometer.",
      "Explain how surface emissivity affects the accuracy of infrared temperature measurements and how errors are mitigated."
    ]
  },
  {
    number: "4.6",
    title: "Distance, Speed and Vibration Sensors",
    hours: "0.75 Hours",
    specificObjective: "Evaluate ultrasonic time-of-flight distance ranging, acoustic Doppler speed measurement, and piezoelectric vibration accelerometers.",
    coreConcepts: [
      "Ultrasonic Time-of-Flight (TOF) ranging: Pulse-echo transit time d = (c_air · Δt) / 2.",
      "Sound velocity temperature dependence: c_air ≈ 331.3 + 0.606·T(°C) m/s, necessitating ambient temperature compensation.",
      "Acoustic and Radar Doppler speed sensing: Frequency shift f_d = (2·v·f0·cos θ) / c.",
      "Piezoelectric seismic accelerometer: Seismic mass m generating dynamic inertial force F = m·a(t) on crystal.",
      "Direct piezoelectric effect: Electrostatic charge q = d33 · m · a(t) proportional to acceleration.",
      "Usable dynamic bandwidth: Flat frequency response up to 0.2 × f_n (resonance typically 20–50 kHz).",
      "IEPE / ICP architecture: Built-in FET amplifier converting high-impedance charge to low-impedance voltage."
    ],
    difficultConcepts: [
      "Why piezoelectric accelerometers cannot measure steady 0 Hz (DC) acceleration.",
      "Acoustic attenuation and beam divergence in ultrasonic level sensing."
    ],
    misconceptions: [
      "Assuming sound speed in air is a constant 340 m/s: failing to temperature-compensate ultrasonic sensors induces up to ±10% distance error across seasonal extremes."
    ],
    examQuestions: [
      "Explain the principle of ultrasonic pulse-echo distance measurement and why temperature compensation is necessary.",
      "Explain the seismic mass principle of a piezoelectric accelerometer and derive the expression for charge sensitivity.",
      "Explain the difference between charge-mode and IEPE (voltage-mode) accelerometers."
    ]
  }
];

export const SYLLABUS_UNIT5_SECTIONS: SyllabusSection[] = [
  {
    number: '5.1',
    title: 'Static Characteristics of Measurement System',
    hours: '1.0 Hour',
    specificObjective:
      'Understand and quantify the static performance metrics of measurement systems including accuracy, precision, repeatability, sensitivity, linearity, hysteresis, resolution, threshold, and dead band.',
    coreConcepts: [
      'Accuracy vs. Precision: Distinguishing systematic error (bias) from random stochastic dispersion.',
      'Static Sensitivity K = dy/dx: Local slope of the static calibration curve.',
      'Linearity & % FSO: Maximum deviation of the calibration line from ideal linear fit.',
      'Hysteresis: Directional output divergence between loading and unloading paths.',
      'Dead Band & Threshold: Insensitive input interval and minimum stimulus provoking initial response.',
      'Resolution: Smallest detectable increment in the physical measurand.',
      'Zero Drift and Sensitivity Drift across ambient temperature variations.'
    ],
    difficultConcepts: [
      'Differentiating dead band (static friction/stiction zone) from resolution (quantization limit).',
      'Computing independent linearity vs. terminal-based linearity.'
    ],
    misconceptions: [
      'High precision implies high accuracy: a miscalibrated sensor can deliver tightly repeatable yet completely false readings.'
    ],
    examQuestions: [
      'Define accuracy, precision, sensitivity, and hysteresis with illustrative diagrams.',
      'Explain the difference between zero drift and sensitivity drift with the help of suitable sketches.',
      'Derive the percentage non-linearity for a given calibration dataset relative to Full-Scale Output (FSO).'
    ]
  },
  {
    number: '5.2',
    title: 'Amplitude Characteristics, Frequency and Phase Behavior, Rise Time, and Time Delay',
    hours: '1.0 Hour',
    specificObjective:
      'Analyze the dynamic response parameters of measurement instruments under transient step excitation and periodic harmonic inputs.',
    coreConcepts: [
      'Delay Time (td): Time required for output to reach 50% of the final steady-state value.',
      'Rise Time (tr): Time required to rise from 10% to 90% (or 0% to 100% for underdamped systems).',
      'Peak Time (tp): Time to attain the first maximum peak overshoot tp = π / ωd.',
      'Maximum Percent Overshoot (Mp): Normalized peak height Mp = exp(-πζ / √(1-ζ²)) × 100%.',
      'Settling Time (ts): Time to settle permanently within ±2% (ts ≈ 4/(ζωn)) or ±5% (ts ≈ 3/(ζωn)).',
      'Dynamic Error: Difference between true dynamic measurand and indicated instrument reading.',
      'Pure Time Delay (Dead Time t0): Transport lag causing linear phase roll-off φ = -ω·t0.'
    ],
    difficultConcepts: [
      'Understanding why rise time and settling time are mutually antagonistic when tuning damping ratio.',
      'Phase lag propagation and distortion of complex periodic waveforms.'
    ],
    misconceptions: [
      'Assuming that a system is settled once it first crosses the final value: for underdamped systems, it oscillates multiple times before settling within ±2%.'
    ],
    examQuestions: [
      'Define delay time, rise time, peak time, maximum overshoot, and settling time with an annotated step response curve.',
      'State the expressions for peak time and maximum overshoot for an underdamped second-order system.',
      'Explain how pure dead time (transport lag) affects the phase margin and dynamic stability of a measurement loop.'
    ]
  },
  {
    number: '5.3',
    title: 'Mathematical Representation of Measurement Systems: Zero-Order, First-Order, and Second-Order Models',
    hours: '1.0 Hour',
    specificObjective:
      'Formulate the general linear constant-coefficient ordinary differential equation for measurement systems and classify instruments by dynamic order.',
    coreConcepts: [
      'Generalized n-th Order Linear ODE: an(d^n y/dt^n) + ... + a1(dy/dt) + a0 y(t) = b0 x(t).',
      'Physical meaning of coefficients: mass/inertia (a2), damping/resistance (a1), compliance/stiffness (a0).',
      'System order n: Equals the number of independent energy storage reservoirs in the transduction chain.',
      'Laplace Transform Transfer Function G(s) = Y(s) / X(s) with zero initial conditions.',
      'Model reduction: Simplifying multi-domain physical systems to zero, first, or second-order equivalents.'
    ],
    difficultConcepts: [
      'Deciding when parasitic reactances (e.g., cable capacitance or lead inductance) promote a nominal zero-order sensor to first or second order.',
      'Formulating operational transfer functions from mechanical and electrical analogies.'
    ],
    misconceptions: [
      'Believing a higher-order model is always superior: for engineering measurements, over-parameterized models add computational noise without improving operational fidelity.'
    ],
    examQuestions: [
      'Write the general ordinary differential equation representing an n-th order measurement system and explain the physical significance of each coefficient.',
      'How does the number of energy storage elements determine the mathematical order of an instrument?',
      'Formulate the Laplace transfer function G(s) for zero, first, and second-order measurement systems.'
    ]
  },
  {
    number: '5.4',
    title: 'Zero-Order System: Properties and Response Characteristics',
    hours: '1.0 Hour',
    specificObjective:
      'Study the properties, frequency invariance, and ideal tracking characteristics of zero-order measurement systems.',
    coreConcepts: [
      'Governing Algebraic Equation: a0 y(t) = b0 x(t) ⟹ y(t) = K·x(t).',
      'Static Sensitivity K = b0 / a0: Constant gain across all amplitudes and frequencies.',
      'Dynamic Response: Instantaneous tracking with zero time delay (td = 0) and zero rise time (tr = 0).',
      'Frequency Response (Bode Plot): Magnitude ratio M(ω) = K (flat 0 dB/decade slope) and phase angle φ(ω) = 0° for all ω.',
      'Physical realization: Linear potentiometer displacement divider, foil strain gauge Wheatstone bridge, optical photodiode.'
    ],
    difficultConcepts: [
      'Wiper mass and contact resistance effects in physical potentiometers at ultrasonic frequencies.',
      'Loading effect on output voltage divider sensitivity.'
    ],
    misconceptions: [
      'Assuming real zero-order instruments maintain flat response up to infinite frequency: stray capacitances and lead inductances convert them into first/second order systems above 100 kHz.'
    ],
    examQuestions: [
      'Describe the response of a zero-order system to step, ramp, and sinusoidal inputs.',
      'Explain why a potentiometer displacement transducer is modeled as a zero-order system, and state its practical frequency limitations.',
      'Draw the frequency response (magnitude and phase) of an ideal zero-order measurement system.'
    ]
  },
  {
    number: '5.5',
    title: 'First-Order System: Behavior and Analysis – Time Constant; Response to Step, Ramp, and Sinusoidal Inputs',
    hours: '1.5 Hours',
    specificObjective:
      'Analyze the transient and steady-state responses of first-order measurement systems under step, ramp, and sinusoidal excitations.',
    coreConcepts: [
      'Canonical First-Order ODE: τ (dy/dt) + y(t) = K·x(t), where Time Constant τ = a1 / a0.',
      'Step Response: y(t) = K·X0(1 - e^(-t/τ)). 1τ = 63.2%, 2τ = 86.5%, 3τ = 95.0%, 4τ = 98.2%, 5τ = 99.3%.',
      'Ramp Response: y(t) = K·R[t - τ + τ e^(-t/τ)]. Steady-state time lag Δt = τ; steady-state dynamic error ess = K·R·τ.',
      'Harmonic Frequency Response: M(ω) = K / √(1 + (ωτ)²), Phase lag φ(ω) = -arctan(ωτ).',
      'Cutoff Frequency (-3 dB point): ωc = 1/τ rad/s where M = 0.707 K and φ = -45°.',
      'Thermal Time Constant: τ = (m·c) / (h·A) for thermocouples and resistance thermometers.'
    ],
    difficultConcepts: [
      'Deriving the analytical ramp response solution using the integrating factor method.',
      'Calculating dynamic error under multi-frequency periodic temperature variations.'
    ],
    misconceptions: [
      'Believing a first-order system can overshoot if subjected to a massive step input: first-order step responses are strictly monotonic exponentials with zero overshoot.'
    ],
    examQuestions: [
      'Derive the step response of a first-order measurement system and show that at t = τ, the output reaches 63.2% of its final value.',
      'Derive the response of a first-order system to a ramp input x(t) = R·t and find the steady-state dynamic error.',
      'A thermocouple has a time constant of 0.4 s. If duct air temperature increases at 10 °C/s, calculate the steady-state temperature error.'
    ]
  },
  {
    number: '5.6',
    title: 'Second-Order System: Key Parameters – Natural Frequency and Damping Ratio; Response to Step, Ramp, and Sinusoidal Inputs',
    hours: '1.5 Hours',
    specificObjective:
      'Evaluate second-order system dynamics across undamped, underdamped, critically damped, and overdamped regimes, analyzing resonance amplification and phase lag.',
    coreConcepts: [
      'Canonical Standard Form: (1/ωn²)(d²y/dt²) + (2ζ/ωn)(dy/dt) + y(t) = K·x(t).',
      'Undamped Natural Frequency: ωn = √(a0/a2) = √(k/m).',
      'Damping Ratio: ζ = a1 / (2√(a0·a2)) = c / (2√(km)).',
      '4 Damping Regimes: Undamped (ζ=0), Underdamped (0<ζ<1), Critically Damped (ζ=1), Overdamped (ζ>1).',
      'Underdamped Step Response: y(t) = K·X0[1 - (e^(-ζωn t) / √(1-ζ²)) sin(ωd t + arccos ζ)].',
      'Second-Order Frequency Response: M(ω) = K / √[(1 - r²)² + (2ζr)²] with r = ω/ωn.',
      'Resonance Peak Mr = K / [2ζ√(1-ζ²)] and Resonance Frequency ωr = ωn√(1 - 2ζ²) for ζ < 0.707.',
      'Phase Lag at Resonance: φ(ωn) = -90° regardless of damping ratio; approaches -180° at high frequencies.'
    ],
    difficultConcepts: [
      'Understanding why maximum flat frequency response occurs at ζ = 1/√2 ≈ 0.707 (Butterworth condition).',
      'Relating pole placement on the complex s-plane (-ζωn ± jωd) to transient decay envelopes.'
    ],
    misconceptions: [
      'Thinking resonance occurs at exactly the natural frequency: the peak resonance frequency ωr is always slightly lower than ωn (ωr = ωn√(1 - 2ζ²)).'
    ],
    examQuestions: [
      'Derive the step response of an underdamped second-order measurement system and define natural frequency, damped frequency, and damping ratio.',
      'Derive the expressions for resonant frequency ωr and resonant magnification factor Mr for a second-order system.',
      'Explain the significance of the optimal damping ratio ζ = 0.707 in instrument design.'
    ]
  },
  {
    number: '5.7',
    title: 'Real-World Examples Representing Zero, First, and Second-Order Systems',
    hours: '1.0 Hour',
    specificObjective:
      'Identify, contrast, and select industrial instruments representing zero, first, and second-order dynamic behavior.',
    coreConcepts: [
      'Zero-Order Instruments: Potentiometric displacement transducers, strain gauge load cells, photoconductive diodes.',
      'First-Order Instruments: Bare vs. thermowell thermocouples, RTDs (Pt100), mercury-in-glass thermometers, electronic RC low-pass filters.',
      'Second-Order Instruments: Piezoelectric seismic vibration accelerometers, U-tube liquid manometers, D’Arsonval moving-coil galvanometers, pressure diaphragms with fluid inertia.',
      'Design trade-offs: Choosing between bare thermocouple (fast τ, fragile) vs. heavy thermowell (robust, slow τ).',
      'Operating bandwidth rule: Accelerometers operated below 0.2 ωn to guarantee <5% amplitude distortion.'
    ],
    difficultConcepts: [
      'Analyzing how liquid column mass and tube bore diameter create a second-order oscillatory system in liquid manometers.',
      'Predicting thermowell thermal conduction lag in high-velocity steam pipelines.'
    ],
    misconceptions: [
      'Assuming that a seismic mass accelerometer measures displacement directly: below resonance it measures acceleration; above resonance it measures relative seismic displacement.'
    ],
    examQuestions: [
      'Categorize the following instruments into zero, first, and second-order systems: (a) Thermocouple in thermowell, (b) Potentiometer, (c) Piezoelectric accelerometer, (d) U-tube manometer. Justify with governing physical equations.',
      'Discuss how thermowell design impacts the time constant of a temperature measurement system in industrial reactors.',
      'Explain why vibration accelerometers are operated well below their resonant frequency.'
    ]
  }
];

export interface ChapterConfig {
  id: ChapterId;
  unitNumber: string;
  code: string;
  title: string;
  shortTitle: string;
  hours: string;
  instructor: string;
  referenceUrl: string;
  summary: string;
  slides: SlideData[];
  figures: Record<string, SvgAsset>;
  pySource: string;
  pyFileName: string;
  qmdSource: string;
  qmdFileName: string;
  runInstructions: string;
  zipFileName: string;
  syllabusSections: SyllabusSection[];
}

export const CHAPTERS: Record<ChapterId, ChapterConfig> = {
  unit1: {
    id: 'unit1',
    unitNumber: 'Unit I',
    code: 'IE-401-U1',
    title: 'Unit I: Fundamentals of Measurement Systems',
    shortTitle: 'Measurement Systems',
    hours: '6 Hours',
    instructor: 'Er. Saroj Chalise',
    referenceUrl: 'https://chalisesaroj.github.io/slide/',
    summary: 'Classroom lecture package formatted in Quarto Reveal.js covering methods, analog vs digital, DAQ architecture, static calibration, uncertainty (ISO GUM), intrusive sensing, and electrical safety.',
    slides: SLIDES_DATA,
    figures: SVG_FIGURES,
    pySource: LECTURE_PY_SOURCE,
    pyFileName: 'lecture.py',
    qmdSource: LECTURE_QMD_SOURCE,
    qmdFileName: 'lecture.qmd',
    runInstructions: RUN_INSTRUCTIONS,
    zipFileName: 'measurement_systems_unit1_lecture.zip',
    syllabusSections: SYLLABUS_UNIT1_SECTIONS
  },
  unit2: {
    id: 'unit2',
    unitNumber: 'Unit II',
    code: 'IE-401-U2',
    title: 'Unit II: Digital Signal Processing',
    shortTitle: 'Digital Signal Processing',
    hours: '10 Hours',
    instructor: 'Er. Saroj Chalise',
    referenceUrl: 'https://chalisesaroj.github.io/slide/',
    summary: 'Classroom lecture package formatted in Quarto Reveal.js upgraded with Dewesoft modern DAQ architecture: signal taxonomy (2.1), acquisition & properties with 8/12/16/24-bit resolution comparison (2.2), modern 4-pillar DAQ & universal sensor conditioning matrix (2.3), processing techniques (2.4), Fourier transform (2.5), DFT (2.6), FFT (2.7), IDFT (2.8), data presentation (2.9), and a comprehensive end-to-end solved industrial gas turbine vibration DAQ case study with 12 vector SVGs.',
    slides: UNIT2_SLIDES_DATA,
    figures: SVG_FIGURES_UNIT2,
    pySource: LECTURE_PY_SOURCE_UNIT2,
    pyFileName: 'lecture_unit2.py',
    qmdSource: LECTURE_QMD_SOURCE_UNIT2,
    qmdFileName: 'lecture_unit2.qmd',
    runInstructions: RUN_INSTRUCTIONS_UNIT2,
    zipFileName: 'digital_signal_processing_unit2_lecture.zip',
    syllabusSections: SYLLABUS_UNIT2_SECTIONS
  },
  unit3: {
    id: 'unit3',
    unitNumber: 'Unit III',
    code: 'IE-401-U3',
    title: 'Unit III: Strain Gauges',
    shortTitle: 'Strain Gauges',
    hours: '6 Hours',
    instructor: 'Er. Saroj Chalise',
    referenceUrl: 'https://chalisesaroj.github.io/slide/',
    summary: 'Classroom lecture package formatted in Quarto Reveal.js covering gauge factor derivation & significance (3.1), bonded vs unbonded construction (3.2), ballast circuits (3.3.1), Wheatstone bridges: quarter, half, full (3.3.2), constant current circuits (3.3.3), and temperature compensation techniques: adjacent arm balancing (3.4.1) & self-temperature compensation (3.4.2).',
    slides: UNIT3_SLIDES_DATA,
    figures: SVG_FIGURES_UNIT3,
    pySource: LECTURE_UNIT3_PY_SOURCE,
    pyFileName: 'lecture_unit3.py',
    qmdSource: LECTURE_UNIT3_QMD_SOURCE,
    qmdFileName: 'lecture_unit3.qmd',
    runInstructions: RUN_INSTRUCTIONS_UNIT3,
    zipFileName: 'strain_gauges_unit3_lecture.zip',
    syllabusSections: SYLLABUS_UNIT3_SECTIONS
  },
  unit4: {
    id: 'unit4',
    unitNumber: 'Unit IV',
    code: 'IE-401-U4',
    title: 'Unit IV: Measurement Systems',
    shortTitle: 'Measurement Systems',
    hours: '10 Hours',
    instructor: 'Er. Saroj Chalise',
    referenceUrl: 'https://chalisesaroj.github.io/slide/',
    summary: 'Classroom lecture package formatted in Quarto Reveal.js covering sensors & transducers (4.1), force, moment & torque measurement (4.2), flow measurement & optical visualization (PIV, Schlieren, BOS) (4.3), thermal measurement (4.4), pyrometry & infrared (4.5), and distance, speed & vibration sensors (4.6).',
    slides: UNIT4_SLIDES_DATA,
    figures: SVG_FIGURES_UNIT4,
    pySource: LECTURE_UNIT4_PY_SOURCE,
    pyFileName: 'lecture_unit4.py',
    qmdSource: LECTURE_UNIT4_QMD_SOURCE,
    qmdFileName: 'lecture_unit4.qmd',
    runInstructions: RUN_INSTRUCTIONS_UNIT4,
    zipFileName: 'measurement_systems_unit4_lecture.zip',
    syllabusSections: SYLLABUS_UNIT4_SECTIONS
  },
  unit5: {
    id: 'unit5',
    unitNumber: 'Unit V',
    code: 'IE-401-U5',
    title: 'Unit V: Response of Measurement System',
    shortTitle: 'Response of Measurement System',
    hours: '8 Hours',
    instructor: 'Er. Saroj Chalise',
    referenceUrl: 'https://chalisesaroj.github.io/slide/',
    summary: 'Classroom lecture package formatted in Quarto Reveal.js covering static characteristics (5.1), dynamic amplitude, frequency, rise time & time delay (5.2), mathematical linear ODE models (5.3), zero-order systems (5.4), first-order systems with time constant τ and step/ramp/sinusoidal responses (5.5), second-order systems with natural frequency ωn and damping ratio ζ (5.6), and real-world industrial instruments (5.7).',
    slides: UNIT5_SLIDES_DATA,
    figures: SVG_FIGURES_UNIT5,
    pySource: LECTURE_UNIT5_PY_SOURCE,
    pyFileName: 'lecture_unit5.py',
    qmdSource: LECTURE_UNIT5_QMD_SOURCE,
    qmdFileName: 'lecture_unit5.qmd',
    runInstructions: RUN_INSTRUCTIONS_UNIT5,
    zipFileName: 'response_measurement_systems_unit5_lecture.zip',
    syllabusSections: SYLLABUS_UNIT5_SECTIONS
  }
};



