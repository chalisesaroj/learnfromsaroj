import { SlideData } from '../types/chapterDeck';

export const UNIT5_SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    title: 'Unit V: Response of Measurement Systems',
    subtitle: 'Static & Dynamic Characteristics · Mathematical Modeling · Zero, First & Second-Order Systems (8 Hours)',
    sectionTag: 'Course Header',
    type: 'title',
    speakerNotes:
      'Welcome students to Unit V: Response of Measurement Systems. In Units I through IV, we explored sensors, signal conditioning, strain gauges, and specialized transducers. Now we analyze how measurement systems behave as dynamic physical filters across time and frequency domains.',
    takeaway: 'Measurement systems do not respond instantaneously—their dynamic filtering dictates measurement validity.'
  },
  {
    id: 2,
    title: 'Unit V Lecture Roadmap',
    subtitle: '8 Hours · Comprehensive Syllabus Overview',
    sectionTag: 'Curriculum Roadmap',
    type: 'roadmap',
    bullets: [
      '5.1 Static Characteristics: Accuracy, precision, sensitivity K, linearity, hysteresis, and dead band',
      '5.2 Dynamic Characteristics: Rise time (tr), delay time (td), peak time (tp), overshoot (Mp), and settling time (ts)',
      '5.3 Mathematical Modeling: Generalized linear constant-coefficient ODE and system order taxonomy',
      '5.4 Zero-Order Systems: Pure algebraic gain y(t) = K·x(t), instant tracking, and flat Bode response',
      '5.5 First-Order Systems: Time constant τ, step relaxation, dynamic ramp lag, and harmonic attenuation',
      '5.6 Second-Order Systems: Natural frequency ωn, damping ratio ζ, 4 damping regimes, and resonance peaks',
      '5.7 Real-World Sensor Systems: Industrial taxonomies, selection guidelines, and dynamic distortion avoidance'
    ],
    speakerNotes:
      'This 8-hour module forms the theoretical backbone of instrumentation dynamics. Emphasize that choosing an instrument requires matching both static range and dynamic bandwidth.',
    takeaway: 'Matching sensor bandwidth to signal spectrum prevents disastrous distortion and measurement lag.'
  },
  {
    id: 3,
    title: 'Unit V Learning Objectives',
    subtitle: 'Competencies & Measurable Outcomes',
    sectionTag: 'Educational Objectives',
    type: 'objectives',
    bullets: [
      'Quantify static performance metrics: static sensitivity K = dy/dx, % non-linearity, and maximum hysteresis.',
      'Formulate the generalized n-th order linear differential equation for any measurement physical chain.',
      'Deduce the complete analytical time response of 1st-order systems to step, ramp, and sinusoidal inputs.',
      'Calculate time constant τ = mc/(hA) and predict temperature sensor response time in varied fluid velocities.',
      'Determine 2nd-order dynamic response parameters: ωn, ζ, peak overshoot Mp, and settling time ts (2% and 5%).',
      'Evaluate harmonic frequency response: compute cutoff frequency, bandwidth, resonance peak Mr, and phase lag.',
      'Select appropriate real-world instruments (0th, 1st, or 2nd order) based on measurand frequency bandwidth.'
    ],
    speakerNotes:
      'Remind students of IOE exam requirements: derivation of step and ramp responses for 1st order systems, and peak overshoot / frequency response formulas for 2nd order systems are frequent exam questions.',
    takeaway: 'Mastering the differential equations unlocks exact prediction of transient and steady-state sensor outputs.'
  },
  {
    id: 4,
    title: 'Why System Dynamics Matter in Engineering',
    subtitle: 'The Real-World Danger of Ignoring Instrument Response',
    sectionTag: 'Physical Motivation',
    type: 'why-matters',
    bullets: [
      'Thermal Lag Catastrophe: A heavy thermowell measuring turbine exhaust temperature may lag by 30 seconds during an overheating surge, causing turbine blade failure before the alarm trips.',
      'Resonance Explosions: An accelerometer with undamped resonance (ζ ≈ 0.05) near machinery gear-mesh frequency amplifies vibration signals by 1000%, triggering false emergency shutdowns.',
      'Aero-Acoustic Distortion: Pressure transducers with long acoustic tubing introduce phase lag and acoustic resonance, distorting shock-wave pressure profile measurements.',
      'Control Loop Instability: Sensor delay acts as non-minimum phase dead time (e^(-s·td)), eroding control phase margins and causing severe closed-loop oscillations.'
    ],
    speakerNotes:
      'In industry, a sensor does not record the measurand directly—it records the output of its internal differential equation driven by the measurand. If dynamics are ignored, the data is useless or dangerously misleading.',
    takeaway: 'A sensor’s internal physics acts as a low-pass or resonant filter between truth and your data logger.'
  },
  {
    id: 5,
    title: '5.1 Static Characteristics of Measurement Systems',
    subtitle: 'Section 5.1 · Steady-State Performance & Calibration Metrics',
    sectionTag: '5.1 Static Characteristics',
    type: 'section-divider',
    speakerNotes:
      'Let us begin with Section 5.1: Static Characteristics. These parameters define instrument behavior when the measurand is constant or changing very slowly relative to the system internal response time.',
    takeaway: 'Static characteristics describe steady-state behavior after all transients have completely decayed.'
  },
  {
    id: 6,
    title: 'What are Static Characteristics?',
    subtitle: 'Steady-State Regimes & Slowly Varying Measurands',
    sectionTag: '5.1 Static Characteristics',
    type: 'content',
    bullets: [
      'Static characteristics define the performance of an instrument when measuring quantities that are either constant in time or varying at an extremely slow rate.',
      'Under static conditions, all time derivatives in the governing physical differential equation vanish identically (d/dt → 0).',
      'The instrument output is governed solely by an algebraic transfer relationship determined through static calibration against primary standards.',
      'Dynamic effects such as inertia, mass acceleration, viscous damping, and thermal storage lag play zero role in static measurements.'
    ],
    speakerNotes:
      'Emphasize that static calibration establishes the baseline transfer scale. If an instrument has static bias or poor sensitivity, dynamic sophistication cannot rescue it.',
    takeaway: 'Static characteristics represent the asymptotic behavior of an instrument after all transient dynamics have completely decayed.'
  },
  {
    id: 7,
    title: 'Measurement Accuracy',
    subtitle: 'Closeness to the True Accepted Measurand Standard',
    sectionTag: '5.1 Static Characteristics',
    type: 'definition',
    definition: {
      term: 'Accuracy',
      formalDefinition: 'The degree of closeness of an indicated measurement value to the true, agreed-upon reference standard of the quantity being measured.',
      symbol: '\\text{Acc}',
      units: '\\%\\text{ of Full Scale or Engineering Units}',
      standardReference: 'ISO 5725-1 / VIM',
      keyImplication: 'High accuracy requires minimal systematic bias. An instrument cannot be accurate if it suffers from uncalibrated zero shifts or span errors.'
    },
    speakerNotes:
      'Contrast accuracy with precision. An instrument can produce repeatable numbers that are completely wrong if an uncorrected systematic bias exists.',
    takeaway: 'Accuracy reflects freedom from systematic error; calibration aligns indicated readings with universal physical standards.'
  },
  {
    id: 8,
    title: 'Mathematical Formulation of Measurement Error',
    subtitle: 'Absolute Error and Relative Percentage Error',
    sectionTag: '5.1 Static Characteristics',
    type: 'formula',
    formulaBlock: {
      equation: 'E_{\\text{abs}} = y_{\\text{meas}} - y_{\\text{true}}, \\quad E_{\\text{rel}} = \\frac{y_{\\text{meas}} - y_{\\text{true}}}{y_{\\text{true}}} \\times 100\\%',
      label: 'Eq. 5.1',
      description: 'Absolute error represents dimensional discrepancy; relative error normalizes error against the true measurand magnitude.',
      symbols: [
        { symbol: 'E_{\\text{abs}}', name: 'Absolute Error', unit: '\\text{measurand units}', description: 'Dimensional deviation from true value' },
        { symbol: 'E_{\\text{rel}}', name: 'Relative Error', unit: '\\%', description: 'Percentage discrepancy relative to true value' },
        { symbol: 'y_{\\text{meas}}', name: 'Measured Value', unit: '\\text{measurand units}', description: 'Reading indicated by the instrument' },
        { symbol: 'y_{\\text{true}}', name: 'True Value', unit: '\\text{measurand units}', description: 'Traceable reference standard value' }
      ]
    },
    bullets: [
      'In commercial instrumentation, accuracy is often quoted as percentage of Full-Scale Output (% FSO): ± % FSO = (E_abs / Y_FSO) × 100%.',
      'A specification of ±1% FSO on a 0-100 bar gauge means an error of ±1 bar across the entire scale, which equals 10% relative error at 10 bar!'
    ],
    speakerNotes:
      'Warn students about percent FSO traps: at low readings near zero, percent FSO errors translate to massive percentage relative errors.',
    takeaway: 'Percentage of Full-Scale Output (% FSO) error remains constant in absolute magnitude, making readings at the low end of the scale the least accurate.'
  },
  {
    id: 9,
    title: 'Measurement Precision (Repeatability)',
    subtitle: 'Mutual Concordance Among Independent Repeated Measurements',
    sectionTag: '5.1 Static Characteristics',
    type: 'definition',
    definition: {
      term: 'Precision',
      formalDefinition: 'The closeness of agreement between independent test results obtained under stipulated identical measurement conditions.',
      symbol: '\\sigma, \\, s',
      units: '\\text{measurand units or } \\%',
      standardReference: 'ISO 5725-1 / ASTM E177',
      keyImplication: 'Precision quantifies random scatter (noise). It is mathematically quantified by standard deviation (σ) or variance (σ²).'
    },
    speakerNotes:
      'Precision is governed by random environmental fluctuations, electronic thermal noise, and internal friction. It can be improved through statistical averaging.',
    takeaway: 'Precision measures repeatability; an instrument can have extremely high precision while being severely inaccurate due to systematic bias.'
  },
  {
    id: 10,
    title: 'Static Sensitivity (K)',
    subtitle: 'Local Transfer Slope of the Calibration Curve',
    sectionTag: '5.1 Static Characteristics',
    type: 'formula',
    formulaBlock: {
      equation: 'K = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\frac{dy}{dx}',
      label: 'Eq. 5.2',
      description: 'Static sensitivity is the first derivative (tangent slope) of the static output-input calibration curve at a given operating point.',
      symbols: [
        { symbol: 'K', name: 'Static Sensitivity', unit: '[\\text{output unit}]/[\\text{input unit}]', description: 'Incremental transfer gain of the transducer' },
        { symbol: 'y', name: 'Output Reading', unit: '\\text{V, mA, mm, etc.}', description: 'Transducer physical output' },
        { symbol: 'x', name: 'Input Measurand', unit: '^{\\circ}\\text{C, Pa, N, etc.}', description: 'Physical quantity being measured' },
        { symbol: 'dy/dx', name: 'Derivative', unit: '[\\text{output}]/[\\text{input}]', description: 'Local tangent slope on calibration plot' }
      ]
    },
    bullets: [
      'For a perfectly linear instrument, static sensitivity K is a constant scalar across the entire measurement span.',
      'For non-linear instruments (e.g. thermistors, orifice meters), K varies with the operating point x_0, requiring point-by-point linearization.'
    ],
    speakerNotes:
      'Ensure students specify units for K! Sensitivity is never a dimensionless number—it always carries output units divided by input units (e.g., mV/°C, mV/V/microstrain).',
    takeaway: 'Static sensitivity determines the magnification of the measurand; higher sensitivity improves resolution but reduces operating range.'
  },
  {
    id: 11,
    title: 'Instrument Resolution & Threshold',
    subtitle: 'Minimum Detectable Increment vs Initial Non-Zero Barrier',
    sectionTag: '5.1 Static Characteristics',
    type: 'content',
    bullets: [
      'Resolution: The smallest incremental change in the input measurand that provokes a detectable change in the instrument output.',
      'Resolution is limited by analog-to-digital converter (ADC) quantization step size, mechanical gear backlash, or electronic thermal noise.',
      'Threshold: The absolute minimum non-zero input required to initiate an observable output change starting from zero reading.',
      'Threshold is typically caused by static friction (stiction) in mechanical pivots or diode forward voltage drops in electronics.'
    ],
    speakerNotes:
      'Distinguish resolution from threshold: Resolution applies anywhere across the measurement span; threshold applies specifically when starting from zero.',
    takeaway: 'Resolution sets the quantization limit across the span; threshold sets the initiation barrier from rest.'
  },
  {
    id: 12,
    title: 'Instrument Range and Span',
    subtitle: 'Operating Limits vs Scalar Measurement Capacity',
    sectionTag: '5.1 Static Characteristics',
    type: 'content',
    bullets: [
      'Range: The interval defined by the lower and upper limits between which an instrument is calibrated to measure: [x_min, x_max].',
      'Span: The algebraic scalar difference between the upper and lower range values: Span = x_max - x_min.',
      'Example 1: A clinical thermometer with range [35.0 °C, 42.0 °C] has a span of 7.0 °C.',
      'Example 2: A thermocouple signal conditioner with range [-50 °C, +150 °C] has a span of 200 °C.'
    ],
    speakerNotes:
      'Students frequently confuse range and span. Reinforce that range is an interval pair with minimum and maximum values; span is a single scalar width.',
    takeaway: 'Range defines the calibrated operational boundary; span defines the scalar width of the measurement scale.'
  },
  {
    id: 13,
    title: 'Non-Linearity (% FSO)',
    subtitle: 'Maximum Departure from Ideal Straight-Line Calibration',
    sectionTag: '5.1 Static Characteristics',
    type: 'formula',
    formulaBlock: {
      equation: 'e_{\\text{lin}} = \\frac{\\max |y(x) - y_{\\text{fit}}(x)|}{y_{\\text{FSO}}} \\times 100\\%',
      label: 'Eq. 5.3',
      description: 'Non-linearity is normalized to the Full-Scale Output (FSO) span rather than the local reading value.',
      symbols: [
        { symbol: 'e_{\\text{lin}}', name: 'Non-Linearity Error', unit: '\\%\\text{ FSO}', description: 'Percentage departure from ideal linearity' },
        { symbol: 'y(x)', name: 'Actual Calibration Curve', unit: '\\text{output units}', description: 'Measured output at input x' },
        { symbol: 'y_{\\text{fit}}(x)', name: 'Reference Straight Line', unit: '\\text{output units}', description: 'Ideal terminal or best-fit line' },
        { symbol: 'y_{\\text{FSO}}', name: 'Full-Scale Output Span', unit: '\\text{output units}', description: 'Difference between max and min output: y_max - y_min' }
      ]
    },
    bullets: [
      'Terminal Linearity: Reference line connects the physical end points (zero and full scale).',
      'Best-Fit (Independent) Linearity: Reference line is determined via least-squares linear regression to minimize maximum deviations.'
    ],
    speakerNotes:
      'Emphasize that dividing by local reading would cause infinite error at zero input. Normalizing to Full-Scale Output (FSO) provides an invariant engineering metric.',
    takeaway: 'Linearity guarantees that static sensitivity K remains uniform across the entire operational measurement span.'
  },
  {
    id: 14,
    title: 'Hysteresis & Mechanical Energy Dissipation',
    subtitle: 'Ascending vs Descending Calibration Divergence',
    sectionTag: '5.1 Static Characteristics',
    type: 'content',
    bullets: [
      'Hysteresis is the phenomenon where the instrument indicates different output values for the exact same input, depending on the direction of approach (increasing vs decreasing).',
      'Physical Causes: Friction in mechanical linkages, gear backlash, magnetic domain pinning in ferromagnetic cores, and internal viscoelastic relaxation in elastomeric diaphragms.',
      'Hysteresis cannot be eliminated by simple single-point zero adjustments; it requires bidirectional calibration protocols.',
      'Quantified as maximum loop width normalized to Full-Scale Output: h = (|y_up - y_down|_max / y_FSO) × 100%.'
    ],
    speakerNotes:
      'Draw the classic hysteresis eye-loop on the board or refer to Figure 5.1. Always warn engineers to calibrate pressure gauges and load cells in both loading and unloading cycles.',
    takeaway: 'Hysteresis reflects irreversible internal energy dissipation, setting an absolute lower bound on measurement reversibility.'
  },
  {
    id: 15,
    title: 'Dead Band (Dead Zone)',
    subtitle: 'Zero-Response Reversal Window',
    sectionTag: '5.1 Static Characteristics',
    type: 'content',
    bullets: [
      'Dead Band (Dead Zone): The total range of input values over which an instrument produces zero detectable output change upon direction reversal.',
      'Primary Cause: Mechanical looseness, gear tooth clearance (backlash), and static friction (stiction) that must be overcome before motion resumes.',
      'Unlike hysteresis (which produces a continuous loop), dead band produces a flat horizontal plateau where the output is frozen.',
      'Electronic sensors with zero moving parts exhibit near-zero dead band compared to mechanical dial indicators.'
    ],
    speakerNotes:
      'Clarify the difference between Dead Band and Threshold: Threshold applies only at zero; Dead Band occurs anywhere across the span upon direction reversal.',
    takeaway: 'Dead band represents an insensitive window where input changes are completely masked by mechanical clearance or stiction.'
  },
  {
    id: 16,
    title: 'Zero Drift vs. Sensitivity Drift',
    subtitle: 'Baseline Offset vs Calibration Slope Rotation',
    sectionTag: '5.1 Static Characteristics',
    type: 'content',
    bullets: [
      'Zero Drift (Offset Shift): All output readings shift uniformly by an equal constant amount across the entire span: y(x) = K·x + c_drift.',
      'Causes of Zero Drift: Temperature changes affecting bridge zero balance, thermal expansion of brackets, and aging of electronic op-amp offset voltages.',
      'Sensitivity Drift (Span Drift): The slope of the calibration curve rotates, changing sensitivity K by an incremental multiplier: y(x) = (K + ΔK)·x.',
      'Causes of Sensitivity Drift: Temperature variation of spring modulus (Young’s modulus E(T)), resistor temperature coefficients, and magnetic field decay.'
    ],
    speakerNotes:
      'Zero drift can be removed with an auto-zero button; sensitivity drift requires a complete recalibration using a known reference standard.',
    takeaway: 'Zero drift shifts the entire calibration curve parallel to itself; sensitivity drift rotates the slope of the calibration line.'
  },
  {
    id: 17,
    title: 'Figure 5.1: Static Characteristics Architecture',
    subtitle: 'Accuracy Dartboards · Sensitivity Tangent · Hysteresis & Dead Band',
    sectionTag: '5.1 Static Characteristics',
    type: 'figure',
    figureKey: 'u5_fig1',
    speakerNotes:
      'Examine Figure 5.1: Panel A contrasts accuracy and precision with dartboard clusters. Panel B displays the calibration curve with sensitivity triangle and non-linearity bounds. Panel C diagrams the ascending and descending hysteresis loop with dead band at the origin.',
    takeaway: 'Visualizing hysteresis loops and dead bands clarifies why bidirectional calibration is mandatory.'
  },
  {
    id: 18,
    title: 'Worked Example 5.1: Potentiometer Sensitivity & Linearity',
    subtitle: 'Quantitative Calibration Analysis',
    sectionTag: '5.1 Static Characteristics',
    type: 'worked-example',
    workedExample: {
      problem: 'A linear displacement potentiometer with a stroke range of 0 to 100 mm produces an output voltage from 0 to 10.0 V. During static calibration, at an input displacement of x = 50.0 mm, the measured output voltage is 5.25 V. Determine the ideal static sensitivity K, the absolute error, and the percentage non-linearity (% FSO).',
      given: {
        'Input Span (Δx_FSO)': '100.0 mm',
        'Output Span (Δy_FSO)': '10.0 V',
        'Test Input (x)': '50.0 mm',
        'Measured Output (y_actual)': '5.25 V'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Ideal Static Sensitivity K',
          math: 'K = \\frac{\\Delta y_{\\text{FSO}}}{\\Delta x_{\\text{FSO}}} = \\frac{10.0\\text{ V} - 0\\text{ V}}{100.0\\text{ mm} - 0\\text{ mm}} = 0.100\\text{ V/mm}',
          explanation: 'Nominal sensitivity is the uniform slope across the full-scale span.'
        },
        {
          stepNumber: 2,
          title: 'Compute Ideal Expected Output at 50 mm',
          math: 'y_{\\text{ideal}} = K \\cdot x = 0.100\\text{ V/mm} \\times 50.0\\text{ mm} = 5.00\\text{ V}',
          explanation: 'Under perfect linear proportionality, 50 mm produces exactly 5.00 V.'
        },
        {
          stepNumber: 3,
          title: 'Determine Absolute Discrepancy (Error)',
          math: '\\Delta y = y_{\\text{actual}} - y_{\\text{ideal}} = 5.25\\text{ V} - 5.00\\text{ V} = +0.25\\text{ V}',
          explanation: 'The actual reading exceeds ideal linear behavior by 0.25 V.'
        },
        {
          stepNumber: 4,
          title: 'Calculate Percentage Non-Linearity relative to FSO',
          math: '\\%\\text{ Non-Linearity} = \\frac{+0.25\\text{ V}}{10.0\\text{ V}} \\times 100\\% = +2.50\\%\\text{ FSO}',
          explanation: 'The error is normalized against full-scale span (10.0 V).'
        }
      ],
      finalAnswer: '+2.50% FSO Non-Linearity (Sensitivity K = 0.100 V/mm)',
      practicalInsight: 'Normalization to Full-Scale Output prevents deceptive inflation of error percentages at low readings.'
    },
    speakerNotes:
      'Walk students through the 4 steps. Emphasize that full scale is 10.0 V, so the 0.25 V error corresponds to an overall non-linearity of 2.5% FSO.',
    takeaway: 'Non-linearity percent is always normalized to full-scale span, not the local reading.'
  },
  {
    id: 19,
    title: 'Check Your Understanding: Accuracy vs. Precision',
    subtitle: 'Formative Assessment · Systematic Bias Identification',
    sectionTag: '5.1 Static Characteristics',
    type: 'check-understanding',
    quiz: {
      question: 'A digital scale with a resolution of 0.001 g is used to measure a certified 10.000 g calibration mass five times. The readings are: 10.452 g, 10.453 g, 10.451 g, 10.452 g, and 10.453 g. Which statement correctly characterizes this measurement system?',
      options: [
        'High accuracy and high precision.',
        'High accuracy but low precision.',
        'Low accuracy but high precision.',
        'Low accuracy and low precision.'
      ],
      correctIndex: 2,
      explanation: 'The measurements exhibit extremely tight repeatability (spread of only ±0.001 g), indicating very high precision. However, every reading deviates from the true 10.000 g standard by approximately +0.452 g, indicating low accuracy due to an uncorrected systematic zero bias.'
    },
    speakerNotes:
      'Use this question to verify students grasp the independence of precision and accuracy. A biased instrument can be wonderfully repeatable while completely wrong.',
    takeaway: 'High precision cannot compensate for systematic zero bias; regular calibration is essential.'
  },
  {
    id: 20,
    title: '5.2 Dynamic Characteristics of Measurement Systems',
    subtitle: 'Section 5.2 · Transient Timing, Amplitude & Phase Behavior',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'section-divider',
    speakerNotes:
      'We now transition to Section 5.2: Dynamic Characteristics. When inputs change rapidly, internal inertia, damping, and energy storage prevent instantaneous tracking.',
    takeaway: 'Dynamic characteristics quantify how faithfully an instrument tracks time-varying measurands.'
  },
  {
    id: 21,
    title: 'Why Dynamic Characteristics Matter',
    subtitle: 'Energy Storage Elements and Dynamic Lag',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'content',
    bullets: [
      'In real-world engineering, measurands are rarely static—they fluctuate rapidly as transients, ramps, or high-frequency harmonics.',
      'Measurement systems contain physical energy storage elements: mass inertia (m), spring elasticity (k), thermal capacitance (m·cv), or electrical capacitance (C).',
      'Energy cannot be transferred into or out of these reservoirs instantaneously, creating intrinsic dynamic delays and amplitude attenuation.',
      'Dynamic analysis evaluates two critical questions: How fast does the sensor respond? How much does it distort the signal waveform?'
    ],
    speakerNotes:
      'Ask students: What happens when an automobile hits a pothole? The suspension does not jump instantaneously—it oscillates and settles. Sensors behave identically.',
    takeaway: 'Physical sensors are dynamic filters; understanding their time response prevents fatal misinterpretation of transient signals.'
  },
  {
    id: 22,
    title: 'Delay Time (td)',
    subtitle: 'Initial Response Speed to Reach 50% Steady-State',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'definition',
    definition: {
      term: 'Delay Time (td)',
      formalDefinition: 'The time required for an instrument response to reach fifty percent (50%) of its final steady-state value for the very first time following a step input.',
      symbol: 't_d',
      units: '\\text{seconds [s]}',
      standardReference: 'IEEE Control Systems / ASTM E2281',
      keyImplication: 'Delay time serves as an initial benchmark for system latency. For standard underdamped second-order systems, td ≈ (1 + 0.7ζ) / ωn.'
    },
    speakerNotes:
      'Point out that td measures the first half of the response curve. It indicates how quickly the sensor begins registering significant measurand presence.',
    takeaway: 'Delay time defines the early response benchmark, measuring the time to cross the 50% steady-state threshold.'
  },
  {
    id: 23,
    title: 'Rise Time (tr)',
    subtitle: 'Transit Speed Between Scale Fractions',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'definition',
    definition: {
      term: 'Rise Time (tr)',
      formalDefinition: 'The time required for the instrument output to rise from 10% to 90% (for overdamped/first-order systems) or from 0% to 100% (for underdamped systems) of its final steady-state value.',
      symbol: 't_r',
      units: '\\text{seconds [s]}',
      standardReference: 'IEC 60051 / IEEE Std 100',
      keyImplication: 'Rise time reflects response slope. Faster rise times indicate higher system bandwidth, but inevitably increase overshoot in underdamped systems.'
    },
    speakerNotes:
      'Clarify the two standard rise time conventions: 10% to 90% is universal for non-oscillatory systems; 0% to 100% is often used in control theory for underdamped second-order systems.',
    takeaway: 'Rise time dictates transient tracking speed; reducing rise time requires wider bandwidth and lower damping.'
  },
  {
    id: 24,
    title: 'Peak Time (tp)',
    subtitle: 'Time of First Maximum Overshoot',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'formula',
    formulaBlock: {
      equation: 't_p = \\frac{\\pi}{\\omega_d} = \\frac{\\pi}{\\omega_n \\sqrt{1 - \\zeta^2}}',
      label: 'Eq. 5.4',
      description: 'Peak time occurs at exactly one half-period of the damped natural frequency (ωd · tp = π).',
      symbols: [
        { symbol: 't_p', name: 'Peak Time', unit: '\\text{s}', description: 'Time to attain the very first overshoot crest' },
        { symbol: '\\omega_d', name: 'Damped Natural Frequency', unit: '\\text{rad/s}', description: 'Actual ringing frequency: ωd = ωn√(1 - ζ²)' },
        { symbol: '\\omega_n', name: 'Undamped Natural Frequency', unit: '\\text{rad/s}', description: 'Inherent resonance frequency of the system' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'Fraction of critical damping (0 < ζ < 1)' }
      ]
    },
    bullets: [
      'Peak time applies strictly to underdamped systems (0 ≤ ζ < 1); overdamped systems never experience a peak time because they never overshoot.',
      'As damping ratio ζ approaches zero (undamped), peak time reaches its absolute minimum: tp = π / ωn.'
    ],
    speakerNotes:
      'Derive tp briefly on the board by setting the first derivative dy/dt = 0. The first root occurs at sin(ωd·t) = 0, giving ωd·t = π.',
    takeaway: 'Peak time marks the exact instant of maximum transient overshoot, governed strictly by the damped natural frequency.'
  },
  {
    id: 25,
    title: 'Maximum Percentage Overshoot (Mp)',
    subtitle: 'Normalized Peak Value Above Steady-State',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'formula',
    formulaBlock: {
      equation: 'M_p = \\exp\\left( -\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}} \\right) \\times 100\\%',
      label: 'Eq. 5.5',
      description: 'Maximum percentage overshoot is an intrinsic property dependent entirely on damping ratio ζ, completely independent of step magnitude.',
      symbols: [
        { symbol: 'M_p', name: 'Percentage Overshoot', unit: '\\%', description: 'Normalized peak height above steady state' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'System damping ratio (0 < ζ < 1)' }
      ]
    },
    bullets: [
      'When ζ = 0 (undamped): Mp = exp(0) × 100% = 100% overshoot (output oscillates between 0 and 2·y_ss).',
      'When ζ = 0.707 (optimal): Mp = exp(-π) × 100% ≈ 4.3% overshoot.',
      'When ζ ≥ 1.0 (critically or overdamped): Mp = 0% (zero overshoot).'
    ],
    speakerNotes:
      'Highlight this crucial exam insight: Overshoot percentage does NOT depend on whether the step was 1 bar or 100 bar! It depends solely on damping ratio ζ.',
    takeaway: 'Maximum overshoot is uniquely determined by the damping ratio ζ; it never depends on input step amplitude.'
  },
  {
    id: 26,
    title: 'Settling Time (ts)',
    subtitle: 'Transient Decay into Tolerance Error Bands',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'formula',
    formulaBlock: {
      equation: 't_s(\\pm 2\\%) \\approx \\frac{4}{\\zeta \\omega_n} = 4\\tau_{\\text{env}}, \\quad t_s(\\pm 5\\%) \\approx \\frac{3}{\\zeta \\omega_n} = 3\\tau_{\\text{env}}',
      label: 'Eq. 5.6',
      description: 'Settling time is governed by the decaying exponential envelope exp(-ζ·ωn·t), where the envelope time constant is τ_env = 1/(ζ·ωn).',
      symbols: [
        { symbol: 't_s', name: 'Settling Time', unit: '\\text{s}', description: 'Time to enter and remain permanently within tolerance band' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'System damping ratio' },
        { symbol: '\\omega_n', name: 'Undamped Natural Frequency', unit: '\\text{rad/s}', description: 'System natural frequency' },
        { symbol: '\\tau_{\\text{env}}', name: 'Envelope Time Constant', unit: '\\text{s}', description: 'Decay rate constant: τ_env = 1 / (ζ·ωn)' }
      ]
    },
    bullets: [
      'Settling time specifies when a reading is valid for measurement recording: readings taken before ts are contaminated by transient ringing.',
      'At t = 4τ_env: exp(-4) ≈ 0.0183 (less than 2% residual oscillation remaining).'
    ],
    speakerNotes:
      'Remind students to always check whether the exam problem asks for the ±2% band (use numerator 4) or the ±5% band (use numerator 3).',
    takeaway: 'Settling time defines the minimum waiting period before a dynamic measurement reading can be certified within tolerance.'
  },
  {
    id: 27,
    title: 'Pure Time Delay (Transport Dead Time t0)',
    subtitle: 'Physical Transport Lag and Phase Drop',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'formula',
    formulaBlock: {
      equation: 'y(t) = x(t - t_0), \\quad \\phi(\\omega) = -\\omega \\cdot t_0',
      label: 'Eq. 5.7',
      description: 'Pure time delay introduces zero amplitude attenuation but causes phase lag that grows linearly with frequency without bound.',
      symbols: [
        { symbol: 't_0', name: 'Transport Dead Time', unit: '\\text{s}', description: 'Pure physical delay before any response begins' },
        { symbol: '\\phi(\\omega)', name: 'Phase Shift', unit: '\\text{rad}', description: 'Phase lag produced by transport delay' },
        { symbol: '\\omega', name: 'Excitation Frequency', unit: '\\text{rad/s}', description: 'Frequency of the input signal' }
      ]
    },
    bullets: [
      'Physical Causes: Acoustic wave propagation in pressure lines, pneumatic tubing length, fluid transport in sampling tubes, and digital pipeline buffering.',
      'Dead time is catastrophic in feedback control loops because the linear phase drop severely erodes phase margin, provoking instability.'
    ],
    speakerNotes:
      'Mention pressure transducers installed at the end of long pitot tubes. The acoustic wave takes finite time (t0 = L/c) to reach the diaphragm.',
    takeaway: 'Pure time delay passes signal amplitude perfectly but introduces unbounded linear phase lag, destabilizing closed-loop control.'
  },
  {
    id: 28,
    title: 'Figure 5.2: Dynamic Step Response Metrics',
    subtitle: 'Annotated Transient Waveform · 2% Settling Band Envelope',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'figure',
    figureKey: 'u5_fig2',
    speakerNotes:
      'Refer to Figure 5.2. Note the precise definitions: td at the 50% crossing, tr from 10% to 90%, tp at the maximum peak, Mp overshoot double arrow, and ts where the envelope permanently enters the green ±2% error band.',
    takeaway: 'The settling time envelope bounds the decaying exponential oscillations within acceptable tolerance bands.'
  },
  {
    id: 29,
    title: 'Worked Example 5.2: Second-Order Step Response Specifications',
    subtitle: 'Numerical Calculation of td, tr, tp, Mp, and ts',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'worked-example',
    workedExample: {
      problem: 'A piezoelectric pressure transducer has an undamped natural frequency ωn = 50 rad/s and a damping ratio ζ = 0.6. When subjected to an abrupt 100 kPa pressure step, compute: (1) damped natural frequency ωd, (2) peak time tp, (3) maximum percent overshoot Mp, and (4) settling time ts for the ±2% error band.',
      given: {
        'Natural Frequency (ωn)': '50.0 rad/s',
        'Damping Ratio (ζ)': '0.60',
        'Step Magnitude (ΔP)': '100.0 kPa'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Damped Natural Frequency ωd',
          math: '\\omega_d = \\omega_n \\sqrt{1 - \\zeta^2} = 50 \\times \\sqrt{1 - 0.6^2} = 50 \\times 0.80 = 40.0\\text{ rad/s}',
          explanation: 'Damping reduces the oscillation frequency from 50 rad/s to 40 rad/s.'
        },
        {
          stepNumber: 2,
          title: 'Compute Peak Time tp',
          math: 't_p = \\frac{\\pi}{\\omega_d} = \\frac{3.1416}{40.0\\text{ rad/s}} = 0.0785\\text{ s} = 78.5\\text{ ms}',
          explanation: 'The first overshoot peak occurs in exactly 78.5 milliseconds.'
        },
        {
          stepNumber: 3,
          title: 'Determine Maximum Percentage Overshoot Mp',
          math: 'M_p = \\exp\\left(-\\frac{\\pi \\times 0.6}{\\sqrt{1 - 0.6^2}}\\right) \\times 100\\% = \\exp(-2.356) \\times 100\\% = 9.48\\%',
          explanation: 'The output will peak at 100 kPa + 9.48 kPa = 109.5 kPa.'
        },
        {
          stepNumber: 4,
          title: 'Calculate 2% Settling Time ts',
          math: 't_s(2\\%) \\approx \\frac{4}{\\zeta \\omega_n} = \\frac{4}{0.6 \\times 50} = \\frac{4}{30} = 0.133\\text{ s} = 133\\text{ ms}',
          explanation: 'The transducer reading enters and stays within ±2 kPa after 133 ms.'
        }
      ],
      finalAnswer: 'ωd = 40 rad/s, tp = 78.5 ms, Mp = 9.48%, ts = 133 ms',
      practicalInsight: 'With ζ = 0.6, the transducer settles rapidly in just over one-tenth of a second with less than 10% overshoot.'
    },
    speakerNotes:
      'Walk through these calculations systematically. This format matches the typical 8-mark numerical question in IOE instrumentation exams.',
    takeaway: 'Mastering the algebraic formulas for ωd, tp, Mp, and ts allows complete prediction of sensor transient response.'
  },
  {
    id: 30,
    title: 'Check Your Understanding: Overshoot vs Damping Ratio',
    subtitle: 'Formative Assessment · Peak Overshoot Sensitivity',
    sectionTag: '5.2 Dynamic Characteristics',
    type: 'check-understanding',
    quiz: {
      question: 'An engineer tests two accelerometers with identical natural frequency ωn = 1000 rad/s. Sensor A has damping ratio ζ = 0.4; Sensor B has damping ratio ζ = 0.8. When both are subjected to an identical sudden step shock, which statement is true?',
      options: [
        'Sensor A has higher overshoot Mp and faster peak time tp than Sensor B.',
        'Sensor B has higher overshoot Mp and faster peak time tp than Sensor A.',
        'Both sensors exhibit identical percentage overshoot Mp because ωn is identical.',
        'Sensor B exhibits sustained oscillations because its damping is closer to 1.'
      ],
      correctIndex: 0,
      explanation: 'Percentage overshoot Mp decreases monotonically with increasing damping ratio ζ. Sensor A (ζ = 0.4) has Mp ≈ 25.4%, whereas Sensor B (ζ = 0.8) has Mp ≈ 1.5%. Furthermore, Sensor A has a higher damped frequency ωd = 1000√(1 - 0.16) = 916 rad/s compared to Sensor B (ωd = 600 rad/s), reaching its peak time tp = π/ωd faster.'
    },
    speakerNotes:
      'Highlight the trade-off: Lower damping reaches peak faster but rings violently with large overshoot.',
    takeaway: 'Lower damping speeds up initial transit at the cost of higher overshoot and longer ringing.'
  },
  {
    id: 31,
    title: '5.3 Mathematical Modeling of Measurement Systems',
    subtitle: 'Section 5.3 · Generalized Differential Equations & Taxonomy',
    sectionTag: '5.3 Mathematical Modeling',
    type: 'section-divider',
    speakerNotes:
      'We now enter Section 5.3: Mathematical Modeling. How do we write down the physics of a measurement system in standard mathematical form?',
    takeaway: 'Mathematical modeling establishes the bridge between sensor physical hardware and its analytical input-output response.'
  },
  {
    id: 32,
    title: 'Generalized Linear Constant-Coefficient ODE',
    subtitle: 'Universal Governing Differential Equation of Sensors',
    sectionTag: '5.3 Mathematical Modeling',
    type: 'formula',
    formulaBlock: {
      equation: 'a_n \\frac{d^n y}{dt^n} + a_{n-1} \\frac{d^{n-1} y}{dt^{n-1}} + \\dots + a_1 \\frac{dy}{dt} + a_0 y(t) = f(t)',
      label: 'Eq. 5.8',
      description: 'Generalized linear ordinary differential equation relating output measurement y(t) to input measurand f(t).',
      symbols: [
        { symbol: 'y(t)', name: 'System Output', unit: '\\text{indicated reading}', description: 'Transducer response variable' },
        { symbol: 'f(t)', name: 'Input Measurand', unit: '\\text{physical input}', description: 'Quantity driving the measurement system' },
        { symbol: 'a_i', name: 'Physical Coefficients', unit: '\\text{system dependent}', description: 'Inertia, damping, resistance, elasticity parameters' },
        { symbol: 'n', name: 'System Order', unit: '\\text{integer}', description: 'Order of highest derivative present in the ODE' }
      ]
    },
    bullets: [
      'In nearly all measurement applications, systems are accurately modeled by truncating at order n = 0 (zero-order), n = 1 (first-order), or n = 2 (second-order).',
      'The coefficients a_i represent physical properties (mass m, stiffness k, thermal capacitance mc, film coefficient hA).'
    ],
    speakerNotes:
      'Show students that higher-order systems (n > 2) are typically cascades of 1st and 2nd order stages. Mastering orders 0, 1, and 2 covers 99% of instrumentation engineering.',
    takeaway: 'The generalized linear ODE captures the physical laws of conservation of energy and momentum governing the sensor.'
  },
  {
    id: 33,
    title: 'System Order Classification Taxonomy',
    subtitle: 'Zero, First, and Second-Order Standard Models',
    sectionTag: '5.3 Mathematical Modeling',
    type: 'types',
    typesGrid: [
      {
        typeName: 'Zero-Order (n = 0)',
        badge: 'No Energy Storage',
        description: 'Pure algebraic gain with zero derivatives: a0·y = f(t) ⟹ y(t) = K·f(t). Output follows input instantaneously with zero time delay and infinite bandwidth.',
        keyFeature: 'No energy storage elements (pure resistance / elasticity)',
        example: 'Potentiometer, strain gauge bridge, photodiode'
      },
      {
        typeName: 'First-Order (n = 1)',
        badge: 'Single Energy Reservoir',
        description: 'Single derivative term: a1·(dy/dt) + a0·y = f(t) ⟹ τ·(dy/dt) + y = K·f(t). Output responds asymptotically with characteristic time constant τ.',
        keyFeature: 'Single energy storage reservoir with dissipation',
        example: 'Thermocouple, RTD, glass bulb thermometer, RC filter'
      },
      {
        typeName: 'Second-Order (n = 2)',
        badge: 'Dual Opposing Reservoirs',
        description: 'Second derivative present: (1/ωn²)·ÿ + (2ζ/ωn)·ẏ + y = K·f(t). Output can exhibit oscillatory ringing, resonance peaks, and phase lags up to 180°.',
        keyFeature: 'Kinetic and potential energy exchange (mass + spring)',
        example: 'Piezo accelerometer, produce scale, pressure transducer'
      }
    ],
    speakerNotes:
      'Walk through the 3 tiers. Emphasize that the order corresponds directly to the number of independent energy storage reservoirs in the device.',
    takeaway: 'System order reflects the number of energy storage elements: 0 = none, 1 = single reservoir, 2 = dual opposing reservoirs.'
  },
  {
    id: 34,
    title: 'Modeling Philosophy: Hardware vs. Excitation Speed',
    subtitle: 'Corona ME231 Insight: When Does Order Change?',
    sectionTag: '5.3 Mathematical Modeling',
    type: 'concept',
    bullets: [
      'Foundational Insight (Corona ME231): The dynamic order assigned to a measurement system is NOT an immutable property of the physical hardware alone!',
      'System order is defined by the relative speed of the input measurand variation compared to the sensor’s internal response time.',
      'A physical device with real thermal mass or mechanical inertia behaves as a ZERO-ORDER instrument if the measurand changes slowly enough that dynamic lag is negligible.',
      'Conversely, an instrument modeled as zero-order at low frequencies will reveal first or second-order dynamic lag when excited by ultra-fast transients.'
    ],
    speakerNotes:
      'Cite Edmundo Corona ME231: An office room thermometer has thermal mass and is technically first-order, but measuring room temperature over hours makes it behave as pure zero-order!',
    takeaway: 'Mathematical order is an engineering abstraction valid within specific excitation frequency bounds.'
  },
  {
    id: 35,
    title: 'The Principle of Superposition',
    subtitle: 'Linearity and Fourier Harmonic Decomposition',
    sectionTag: '5.3 Mathematical Modeling',
    type: 'formula',
    formulaBlock: {
      equation: '\\mathcal{L}\\left\\{ \\sum_{k=1}^m c_k f_k(t) \\right\\} = \\sum_{k=1}^m c_k y_k(t)',
      label: 'Eq. 5.9',
      description: 'For any linear system, the response to a complex linear combination of inputs equals the identical linear combination of individual responses.',
      symbols: [
        { symbol: 'f_k(t)', name: 'Input Component', unit: '\\text{input units}', description: 'Individual harmonic or transient input signal' },
        { symbol: 'y_k(t)', name: 'Output Response', unit: '\\text{output units}', description: 'System response to input component f_k(t)' },
        { symbol: 'c_k', name: 'Scalar Weight', unit: '\\text{dimensionless}', description: 'Fourier series amplitude coefficient' }
      ]
    },
    bullets: [
      'Superposition allows any arbitrary periodic measurand to be expanded into a Fourier series of sine waves: f(t) = a0 + ∑ [an·cos(nωt) + bn·sin(nωt)].',
      'The sensor output is computed by evaluating the frequency response for each individual harmonic and summing the results together.'
    ],
    speakerNotes:
      'Emphasize that superposition fails completely if non-linearities like severe saturation, dead band, or cubic stiffness are present.',
    takeaway: 'Superposition enables Fourier harmonic analysis, allowing complex signals to be decomposed and solved component by component.'
  },
  {
    id: 36,
    title: 'Figure 5.3: Generalized Mathematical Taxonomy & Corona Archetypes',
    subtitle: 'Zero-Order Potentiometer · First-Order Thermometer · Second-Order Scale',
    sectionTag: '5.3 Mathematical Modeling',
    type: 'figure',
    figureKey: 'u5_fig3',
    speakerNotes:
      'Figure 5.3 compares the 3 canonical ODE models with their physical schematics, block diagrams, and governing equations side-by-side.',
    takeaway: 'Every measurement system maps cleanly into one of these three fundamental physical archetypes.'
  },
  {
    id: 37,
    title: '5.4 Zero-Order Systems: Properties & Response',
    subtitle: 'Section 5.4 · Pure Instantaneous Algebraic Gain',
    sectionTag: '5.4 Zero-Order Systems',
    type: 'section-divider',
    speakerNotes:
      'We now examine Section 5.4: Zero-Order Systems. This is the ideal instrument behavior that every instrumentation engineer dreams of having.',
    takeaway: 'Zero-order systems exhibit instantaneous tracking with zero distortion and infinite bandwidth.'
  },
  {
    id: 38,
    title: 'Zero-Order Governing Equation',
    subtitle: 'Instantaneous Algebraic Input-Output Transfer',
    sectionTag: '5.4 Zero-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'a_0 y(t) = f(t) \\implies y(t) = K f(t), \\quad K = \\frac{1}{a_0}',
      label: 'Eq. 5.10',
      description: 'The output reading y(t) is strictly proportional to the input measurand f(t) at every single instant of time.',
      symbols: [
        { symbol: 'y(t)', name: 'System Output', unit: '\\text{output units}', description: 'Instantaneous output signal' },
        { symbol: 'K', name: 'Static Gain (Sensitivity)', unit: '[\\text{output}]/[\\text{input}]', description: 'Constant transfer proportionality factor' },
        { symbol: 'f(t)', name: 'Input Measurand', unit: '\\text{input units}', description: 'Instantaneous input signal' }
      ]
    },
    bullets: [
      'There is zero time delay (td = 0) and zero rise time (tr = 0).',
      'The output waveform is an exact, undistorted replica of the input measurand waveform scaled by constant K.',
      'Static calibration alone is completely sufficient to fully predict the dynamic behavior of a zero-order system.'
    ],
    speakerNotes:
      'Emphasize that in zero-order systems, dynamic response equals static response! There are no differential equations to integrate.',
    takeaway: 'In a zero-order system, static calibration completely describes dynamic performance across all frequencies.'
  },
  {
    id: 39,
    title: 'Zero-Order Frequency Response (Bode Flatness)',
    subtitle: 'Flat Amplitude Magnification and Zero Phase Lag',
    sectionTag: '5.4 Zero-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'M(\\omega) = \\left| \\frac{Y(j\\omega)}{F(j\\omega)} \\right| = K, \\quad \\phi(\\omega) = \\angle \\frac{Y(j\\omega)}{F(j\\omega)} = 0^{\\circ}',
      label: 'Eq. 5.11',
      description: 'The magnification ratio is constant and the phase lag is identically zero for all frequencies from zero to infinity.',
      symbols: [
        { symbol: 'M(\\omega)', name: 'Magnification Ratio', unit: '\\text{dimensionless}', description: 'Output to input amplitude ratio: M = K' },
        { symbol: '\\phi(\\omega)', name: 'Phase Angle', unit: '^{\\circ}', description: 'Phase difference: exactly 0° across all frequencies' },
        { symbol: '\\omega', name: 'Angular Frequency', unit: '\\text{rad/s}', description: 'Excitation frequency' }
      ]
    },
    bullets: [
      'Infinite dynamic bandwidth: Signals of any frequency pass through with zero amplitude attenuation.',
      'Zero phase distortion: All harmonic components arrive simultaneously, preserving complex signal shapes perfectly.'
    ],
    speakerNotes:
      'Draw the flat Bode plot: a horizontal line at 20 log10(K) dB and a horizontal line at 0° phase.',
    takeaway: 'Zero-order frequency response exhibits perfectly flat magnitude and zero phase lag across all frequencies.'
  },
  {
    id: 40,
    title: 'Zero-Order Physical Archetype: Potentiometer Divider',
    subtitle: 'Direct Voltage Division Displacement Sensor',
    sectionTag: '5.4 Zero-Order Systems',
    type: 'concept',
    bullets: [
      'A displacement potentiometer consists of a uniform resistive element of total length L excited by DC supply voltage Vs.',
      'Output voltage from wiper at position x is governed by Ohm’s law: V_out(t) = (Vs / L) · x(t) = K · x(t).',
      'Because charge redistribution in resistors occurs at near light-speed (picoseconds), electrical dynamics are negligible at mechanical frequencies.',
      'The wiper output tracks rapid mechanical shaft motions virtually instantaneously.'
    ],
    speakerNotes:
      'Note practical limits: at ultra-high frequencies, parasitic capacitance between windings and wiper inertia eventually introduce higher-order dynamics.',
    takeaway: 'The resistive potentiometer represents the quintessential zero-order instrument in mechanical engineering.'
  },
  {
    id: 41,
    title: 'Zero-Order Physical Archetype: Foil Strain Gauge Bridge',
    subtitle: 'Elastic Piezoresistive Strain Conversion',
    sectionTag: '5.4 Zero-Order Systems',
    type: 'concept',
    bullets: [
      'A bonded metal foil strain gauge converts mechanical surface strain ε into fractional resistance change: ΔR/R = Sg · ε.',
      'Mounted in a balanced Wheatstone bridge, output voltage is: V_out(t) = (Vs / 4) · Sg · ε(t) = K · ε(t).',
      'Because the metallic foil has virtually zero mass and deforms synchronously with the specimen, response time is limited only by acoustic speed in steel (≈ 5000 m/s).',
      'For structural vibration frequencies up to 50 kHz, the strain bridge behaves as a pure zero-order instrument.'
    ],
    speakerNotes:
      'Remind students of Unit III: Strain gauges are favored in crash testing because of their lightning-fast zero-order response.',
    takeaway: 'Foil strain gauge bridges track high-speed mechanical impacts with pure zero-order fidelity.'
  },
  {
    id: 42,
    title: 'Corona ME231 Example: The Office Room Thermometer',
    subtitle: 'Quasi-Static Operation in Slow Thermal Environments',
    sectionTag: '5.4 Zero-Order Systems',
    type: 'analogy',
    analogy: {
      everydayConcept: 'Office Wall Thermometer Measuring 24-Hour Diurnal Cycles',
      technicalMapping: 'A liquid-in-glass thermometer hanging in an office has an internal time constant τ ≈ 30 s. Room temperature varies with the 24-hour day/night cycle: ω = 2π / (24 × 3600 s) ≈ 7.3 × 10^-5 rad/s. The product τ·ω ≈ 0.0022 ≪ 0.1.',
      whyItWorks: 'Because the environmental measurand varies thousands of times slower than the thermometer’s internal relaxation time, the thermometer remains in continuous thermal equilibrium with the air. Magnification M ≈ 1.0000 and phase lag φ ≈ 0.13° (essentially zero).',
      limitsOfAnalogy: 'If you suddenly plunge that same thermometer into an ice bath or boiling tea, it immediately reveals its 1st-order nature, taking several minutes to settle.'
    },
    speakerNotes:
      'This is Edmundo Corona’s central teaching point from ME231: An instrument’s operating order depends on input frequency! Under slow room cycles, it is functionally zero-order.',
    takeaway: 'When measurand excitation frequency satisfies τ·ω ≪ 0.1, first-order sensors operate in the quasi-static zero-order regime.'
  },
  {
    id: 43,
    title: 'Figure 5.4: Zero-Order Systems & The Quasi-Static Regime',
    subtitle: 'Potentiometer Divider · Foil Bridge · Office Thermometer Quasi-Static Window',
    sectionTag: '5.4 Zero-Order Systems',
    type: 'figure',
    figureKey: 'u5_fig4',
    speakerNotes:
      'Examine Figure 5.4: Panel A shows the potentiometer divider; Panel B shows the strain bridge circuit; Panel C shows the Bode flatness and highlights the quasi-static window (τω < 0.1) where first-order sensors behave as zero-order.',
    takeaway: 'Figure 5.4 illustrates the physical reality of zero-order instruments and the boundary of the quasi-static regime.'
  },
  {
    id: 44,
    title: 'Check Your Understanding: Zero-Order Bandwidth',
    subtitle: 'Formative Assessment · Ideal Zero-Order Characteristics',
    sectionTag: '5.4 Zero-Order Systems',
    type: 'check-understanding',
    quiz: {
      question: 'Which of the following conditions is an absolute requirement for an instrument to be classified as a true zero-order measurement system?',
      options: [
        'It must contain at least one mechanical spring to store elastic energy.',
        'Its output reading must be related to the input by an algebraic equation containing no time derivatives.',
        'Its damping ratio ζ must equal exactly 0.707.',
        'Its time constant τ must be matched to the excitation period.'
      ],
      correctIndex: 1,
      explanation: 'A zero-order system is mathematically defined by a0·y = b0·x, which simplifies to y(t) = K·x(t). There are no time derivatives (dy/dt = 0, d²y/dt² = 0), meaning energy storage is absent and output tracking is purely instantaneous.'
    },
    speakerNotes:
      'Reinforce that absence of time derivatives in the differential equation is the defining hallmark of zero-order systems.',
    takeaway: 'Zero-order classification requires an algebraic governing equation with zero time derivatives.'
  },
  {
    id: 45,
    title: '5.5 First-Order Systems: Behavior & Analysis',
    subtitle: 'Section 5.5 · Single Energy Storage Reservoir & Relaxation Dynamics',
    sectionTag: '5.5 First-Order Systems',
    type: 'section-divider',
    speakerNotes:
      'We arrive at Section 5.5: First-Order Systems. These systems store energy in a single physical reservoir (such as thermal capacitance or electrical capacitance).',
    takeaway: 'First-order systems introduce transient lag and frequency attenuation governed by time constant τ.'
  },
  {
    id: 46,
    title: 'Canonical First-Order Governing ODE',
    subtitle: 'Standard Differential Form and System Parameters',
    sectionTag: '5.5 First-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'a_1 \\frac{dy}{dt} + a_0 y(t) = f(t) \\implies \\tau \\frac{dy}{dt} + y(t) = K f(t)',
      label: 'Eq. 5.12',
      description: 'The standard canonical linear first-order differential equation obtained by dividing through by static stiffness coefficient a0.',
      symbols: [
        { symbol: '\\tau', name: 'Time Constant', unit: '\\text{s}', description: 'System relaxation time: \\tau = a_1 / a_0' },
        { symbol: 'K', name: 'Static Gain (Sensitivity)', unit: '[\\text{output}]/[\\text{input}]', description: 'Steady-state transfer factor: K = 1 / a_0' },
        { symbol: 'y(t)', name: 'Sensor Output', unit: '\\text{output units}', description: 'Instantaneous instrument reading' },
        { symbol: 'f(t)', name: 'Input Measurand', unit: '\\text{input units}', description: 'Time-varying excitation signal' }
      ]
    },
    bullets: [
      'The behavior of any linear first-order instrument is entirely dictated by exactly TWO parameters: static gain K and time constant τ.',
      'Unlike zero-order systems, the output cannot change instantaneously because rate of change dy/dt is finite.'
    ],
    speakerNotes:
      'Emphasize that whenever an equation can be arranged into τ·ẏ + y = K·f, all mathematical response formulas derived in this section apply universally.',
    takeaway: 'All linear first-order systems are completely characterized by static sensitivity K and time constant τ.'
  },
  {
    id: 47,
    title: 'Physical Archetype: Clinical Oral Thermometer',
    subtitle: 'Corona ME231 Thermal Energy Storage Model',
    sectionTag: '5.5 First-Order Systems',
    type: 'concept',
    bullets: [
      'Physical Model (Corona ME231): A glass bulb thermometer containing liquid mercury or alcohol, placed under a patient’s tongue at body temperature T1.',
      'The bulb has lumped thermal mass m, specific heat capacity cv, and external heat transfer surface area A.',
      'The bulb is immersed in oral fluid/tissue with convective heat transfer coefficient h.',
      'Thermal energy can only enter the sensor by convective heat transfer across the glass boundary layer.'
    ],
    speakerNotes:
      'Establish the lumped capacitance assumption: the thermal conductivity inside the small mercury bulb is high enough that temperature T(t) is uniform throughout the bulb.',
    takeaway: 'Heat transfer into a thermometer bulb represents the quintessential first-order physical archetype.'
  },
  {
    id: 48,
    title: 'Thermodynamic Energy Balance Derivation',
    subtitle: 'From First Law of Thermodynamics to Canonical ODE',
    sectionTag: '5.5 First-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'm c_v \\frac{dT}{dt} = h A \\left[ T_1(t) - T(t) \\right] \\implies \\left(\\frac{m c_v}{h A}\\right) \\frac{dT}{dt} + T(t) = T_1(t)',
      label: 'Eq. 5.13',
      description: 'The rate of internal thermal energy accumulation equals the rate of convective heat transfer into the bulb from surrounding tissue.',
      symbols: [
        { symbol: 'm', name: 'Bulb Mass', unit: '\\text{kg}', description: 'Total mass of the thermometer sensing tip' },
        { symbol: 'c_v', name: 'Specific Heat', unit: '\\text{J}/(\\text{kg}\\cdot\\text{K})', description: 'Specific heat capacity of bulb material' },
        { symbol: 'h', name: 'Convective Heat Transfer Coeff.', unit: '\\text{W}/(\\text{m}^2\\cdot\\text{K})', description: 'Thermal conductance of boundary fluid film' },
        { symbol: 'A', name: 'Surface Area', unit: '\\text{m}^2', description: 'Outer convective surface area of the bulb' },
        { symbol: 'T(t)', name: 'Thermometer Reading', unit: '^{\\circ}\\text{C}', description: 'Sensor bulb temperature at time t' },
        { symbol: 'T_1(t)', name: 'Measurand Temperature', unit: '^{\\circ}\\text{C}', description: 'Surrounding body or fluid temperature' }
      ]
    },
    bullets: [
      'Equating the canonical form τ(dT/dt) + T = K·T1 directly reveals: τ = (m·cv) / (h·A) and K = 1.0 °C/°C.',
      'The time constant τ is directly proportional to thermal mass (m·cv) and inversely proportional to convective conductance (h·A).'
    ],
    speakerNotes:
      'Walk through the steps: rate of heat in dQ/dt = hA(T1 - T). Rate of internal energy change dE/dt = m cv dT/dt. Equate and rearrange into canonical form.',
    takeaway: 'First-principles heat balance yields the canonical ODE with time constant τ = (m·cv)/(h·A) and sensitivity K = 1.0.'
  },
  {
    id: 49,
    title: 'The Physical Meaning of Time Constant τ',
    subtitle: 'Engineering Strategies for Minimizing Response Lag',
    sectionTag: '5.5 First-Order Systems',
    type: 'concept',
    bullets: [
      'What τ represents: τ is the characteristic timescale over which the system relaxes toward equilibrium.',
      'Small τ (Fast Response): Achieved by minimizing sensor mass m (fine-wire micro-thermocouple) or increasing surface area per unit volume.',
      'Large h (Higher Heat Transfer): Moving fluid dramatically increases convective coefficient h; a thermocouple responds 10× faster in stirred water than in stagnant air.',
      'Large τ (Slow Response): Heavy thermowells in industrial pipes protect sensors from erosion, but introduce huge time constants (τ > 60 s).'
    ],
    speakerNotes:
      'Remind students: If you wave a thermocouple in still air, τ is ~10 s. Plunge it into turbulent water, τ drops to ~0.5 s because h increases by 20×.',
    takeaway: 'To make a thermal sensor faster, reduce its thermal mass (m·cv) or increase convective heat transfer (h·A).'
  },
  {
    id: 50,
    title: 'Step Response: General Analytical Solution',
    subtitle: 'Exponential Relaxation from Initial State y₀ to Step Target F₁',
    sectionTag: '5.5 First-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'y(t) = K F_1 - \\left( K F_1 - y_0 \\right) e^{-t / \\tau}',
      label: 'Eq. 5.14',
      description: 'Complete analytical solution of a linear first-order ODE excited by an abrupt step change from initial value y0 to final value F1 at t = 0.',
      symbols: [
        { symbol: 'y(t)', name: 'Sensor Output', unit: '\\text{output units}', description: 'Output value at elapsed time t' },
        { symbol: 'F_1', name: 'Input Step Level', unit: '\\text{input units}', description: 'Final steady-state measurand value' },
        { symbol: 'y_0', name: 'Initial Output', unit: '\\text{output units}', description: 'Sensor reading at t = 0 before step transition' },
        { symbol: '\\tau', name: 'Time Constant', unit: '\\text{s}', description: 'System relaxation time constant' },
        { symbol: 'K', name: 'Static Sensitivity', unit: '[\\text{output}]/[\\text{input}]', description: 'Static gain factor' }
      ]
    },
    bullets: [
      'Normalized form for zero initial condition (y0 = 0): y(t) = K·F1 · [1 - e^(-t / τ)].',
      'The initial slope at t = 0 is dy/dt = (K·F1) / τ; extending this initial tangent hits final steady state at exactly t = τ.'
    ],
    speakerNotes:
      'Show students that the initial tangent intersects the horizontal asymptote at t = τ. This provides an easy graphical method to extract τ from experimental step curves.',
    takeaway: 'The first-order step response is an exponential relaxation governed by e^(-t/τ), asymptotically reaching steady state.'
  },
  {
    id: 51,
    title: 'Step Response Time Constant Milestones',
    subtitle: 'Mathematical Percentages Every Engineer Must Memorize',
    sectionTag: '5.5 First-Order Systems',
    type: 'definition',
    definition: {
      term: 'Time Constant (\\tau) Milestones',
      symbol: 't / \\tau',
      units: '\\text{dimensionless}',
      formalText: 'Fractional completion of the transient step transition evaluated at integer multiples of time constant \\tau:',
      operationalMeaning: 'At t = 1\\tau: 63.2% completed (fraction = 1 - e^{-1} = 0.6321)\nAt t = 2\\tau: 86.5% completed (fraction = 1 - e^{-2} = 0.8647)\nAt t = 3\\tau: 95.0% completed (within 5% error band, 1 - e^{-3} = 0.9502)\nAt t = 4\\tau: 98.2% completed (within 2% error band, 1 - e^{-4} = 0.9817)\nAt t = 5\\tau: 99.3% completed (within 1% error band, 1 - e^{-5} = 0.9933)'
    },
    bullets: [
      'In laboratory practice, settling time ts is conventionally defined as 3τ (for a 5% error band) or 4τ to 5τ (for 2% or 1% accuracy).',
      'Waiting less than 5τ means the measurement has not fully converged to the true measurand value.'
    ],
    speakerNotes:
      'Stress the 63.2% number: that is how τ is determined experimentally. Find the time where the response rises to 63.2% of total span.',
    takeaway: 'At 1τ the response achieves 63.2%; at 3τ it reaches 95.0%; at 5τ it exceeds 99.3% of final steady state.'
  },
  {
    id: 52,
    title: 'Medical Practice Insight: The 3-Minute Clinical Rule',
    subtitle: 'Corona ME231 Clinical Case Study on Thermal Settling',
    sectionTag: '5.5 First-Order Systems',
    type: 'analogy',
    analogy: {
      everydayConcept: 'Why Doctors Demand Keeping the Glass Thermometer Oral for 3 Minutes',
      technicalMapping: 'A clinical oral glass thermometer typically has τ ≈ 36 seconds. To achieve 99.3% accuracy (less than 0.1 °C error on a 17 °C step from room to body temp), the required wait is 5τ = 5 × 36 s = 180 seconds = 3.0 minutes!',
      whyItWorks: 'If an impatient nurse removes the thermometer after only 1 minute (60 s = 1.67τ), the reading reaches only: 20 + 17 × (1 - e^(-1.67)) = 33.8 °C. The patient appears hypothermic or normal, missing a severe 39 °C fever entirely!',
      limitsOfAnalogy: 'Modern digital thermistor thermometers use electronic predictive curve-fitting algorithms to extrapolate the steady-state asymptote in 10 seconds, circumventing the 5τ wait.'
    },
    speakerNotes:
      'Corona ME231 highlights this example to show students that measurement dynamics have real, life-or-death consequences in clinical medicine.',
    takeaway: 'The 3-minute oral clinical rule is the direct physical consequence of 5τ thermal settling (5 × 36 s = 180 s).'
  },
  {
    id: 53,
    title: 'Monotonic Rise: Why First-Order Systems Never Overshoot',
    subtitle: 'Single Real Pole in the Complex s-Plane',
    sectionTag: '5.5 First-Order Systems',
    type: 'concept',
    bullets: [
      'Fundamental Theorem: A linear first-order system NEVER exhibits overshoot (Mp = 0) under any step input.',
      'Transfer function G(s) = K / (τ s + 1) has a single real pole located at s = -1/τ on the negative real axis of the s-plane.',
      'Because there are no complex conjugate poles (no imaginary component jω), there is no oscillatory mode or natural frequency.',
      'The time derivative dy/dt = (K F1 / τ) e^(-t/τ) is strictly positive for all t ≥ 0, proving monotonic growth toward the asymptote.'
    ],
    speakerNotes:
      'Remind students of common exam question: "Can a first-order system overshoot if the input step is extremely sharp?" Answer is unequivocally NO!',
    takeaway: 'A first-order system has a single real pole; its step response is strictly monotonic and can never overshoot.'
  },
  {
    id: 54,
    title: 'First-Order Response to a Linear Ramp Input',
    subtitle: 'Dynamic Tracking of Linearly Increasing Measurands',
    sectionTag: '5.5 First-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'f(t) = R t \\implies y(t) = K R \\left[ t - \\tau + \\tau e^{-t/\\tau} \\right]',
      label: 'Eq. 5.15',
      description: 'Analytical response of a first-order measurement system subjected to a steadily ramping measurand starting from zero.',
      symbols: [
        { symbol: 'R', name: 'Ramp Rate', unit: '\\text{input units}/\\text{s}', description: 'Rate of change of the input signal: df/dt = R' },
        { symbol: 't', name: 'Elapsed Time', unit: '\\text{s}', description: 'Time since ramp initiation' },
        { symbol: '\\tau', name: 'Time Constant', unit: '\\text{s}', description: 'Sensor relaxation time constant' },
        { symbol: 'K', name: 'Static Gain', unit: '[\\text{output}]/[\\text{input}]', description: 'Static proportionality factor' }
      ]
    },
    bullets: [
      'The response consists of two parts: a transient exponential term (τ e^(-t/τ)) and a steady-state ramp term (t - τ).',
      'After t > 5τ, the exponential term decays to zero, leaving a permanent linear tracking offset.'
    ],
    speakerNotes:
      'Derive by solving τ ẏ + y = K R t with integrating factor e^(t/τ). The transient dies out leaving y_ss = K R (t - τ).',
    takeaway: 'Under a constant ramp input, the first-order response asymptotically parallels the input with a permanent offset.'
  },
  {
    id: 55,
    title: 'Steady-State Ramp Time Lag & Dynamic Error',
    subtitle: 'Dynamic Error Equation and Permanent Delay',
    sectionTag: '5.5 First-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'y_{ss}(t) = K R (t - \\tau) \\implies \\Delta t = \\tau, \\quad e_{ss} = K R t - y_{ss}(t) = K R \\tau',
      label: 'Eq. 5.16',
      description: 'In steady state (t ≫ τ), the sensor output lags behind the input measurand by a constant time delay equal to τ, generating dynamic error ess.',
      symbols: [
        { symbol: '\\Delta t', name: 'Dynamic Time Lag', unit: '\\text{s}', description: 'Constant temporal delay: \\Delta t = \\tau' },
        { symbol: 'e_{ss}', name: 'Steady-State Dynamic Error', unit: '\\text{output units}', description: 'Constant magnitude error: e_{ss} = K \\cdot R \\cdot \\tau' },
        { symbol: 'R', name: 'Ramp Rate', unit: '\\text{input units}/\\text{s}', description: 'Rate of change of the input signal' },
        { symbol: '\\tau', name: 'Time Constant', unit: '\\text{s}', description: 'Sensor time constant' }
      ]
    },
    bullets: [
      'The sensor indicates the true measurand value that occurred τ seconds ago in the past.',
      'The faster the measurand changes (higher R) or the slower the sensor (larger τ), the larger the dynamic error ess.'
    ],
    speakerNotes:
      'Point out the graphical interpretation: on a graph of y vs t, the output curve is identical to the input line shifted horizontally to the right by τ seconds.',
    takeaway: 'Under a ramp, a first-order sensor exhibits a permanent time lag of Δt = τ and a dynamic error of ess = K·R·τ.'
  },
  {
    id: 56,
    title: 'Harmonic Frequency Response: Amplitude Magnification',
    subtitle: 'Low-Pass Filter Attenuation under Sinusoidal Excitation',
    sectionTag: '5.5 First-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'M(\\omega) = \\left| \\frac{Y(j\\omega)}{K F(j\\omega)} \\right| = \\frac{1}{\\sqrt{1 + (\\tau \\omega)^2}}',
      label: 'Eq. 5.17',
      description: 'The ratio of steady-state output amplitude to static expected amplitude when excited by harmonic input f(t) = A sin(ωt).',
      symbols: [
        { symbol: 'M(\\omega)', name: 'Dynamic Magnification Ratio', unit: '\\text{dimensionless}', description: 'Amplitude ratio: M ≤ 1.0 for all frequencies' },
        { symbol: '\\omega', name: 'Harmonic Frequency', unit: '\\text{rad/s}', description: 'Angular frequency of input sinusoid' },
        { symbol: '\\tau', name: 'Time Constant', unit: '\\text{s}', description: 'Sensor time constant' }
      ]
    },
    bullets: [
      'At low frequencies (ω ≪ 1/τ): τω ≈ 0 ⟹ M ≈ 1.0 (faithfully preserves input amplitude).',
      'At high frequencies (ω ≫ 1/τ): M ≈ 1 / (τω) ∝ 1/ω (attenuates at -20 dB/decade or -6 dB/octave).',
      'A first-order sensor acts physically as an intrinsic low-pass filter.'
    ],
    speakerNotes:
      'Draw the classic Bode magnitude plot: flat at 0 dB at low frequencies, rolling off at -20 dB/decade above cutoff frequency.',
    takeaway: 'First-order harmonic magnification is M(ω) = 1 / √(1 + (τω)²), rolling off at -20 dB/decade at high frequencies.'
  },
  {
    id: 57,
    title: 'Harmonic Phase Lag & Dynamic Time Delay',
    subtitle: 'Phase Shift and Frequency-Dependent Time Delay',
    sectionTag: '5.5 First-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: '\\phi(\\omega) = -\\arctan(\\tau \\omega), \\quad \\Delta t(\\omega) = \\frac{\\phi(\\omega)}{\\omega} = \\frac{\\arctan(\\tau \\omega)}{\\omega}',
      label: 'Eq. 5.18',
      description: 'The phase angle and corresponding temporal delay between output sinusoid and input harmonic measurand.',
      symbols: [
        { symbol: '\\phi(\\omega)', name: 'Phase Lag', unit: '^{\\circ} \\text{ or rad}', description: 'Phase angle: ranges from 0° at DC to -90° at high frequency' },
        { symbol: '\\Delta t(\\omega)', name: 'Harmonic Time Lag', unit: '\\text{s}', description: 'Temporal delay between input and output peaks' },
        { symbol: '\\omega', name: 'Frequency', unit: '\\text{rad/s}', description: 'Excitation frequency' },
        { symbol: '\\tau', name: 'Time Constant', unit: '\\text{s}', description: 'Sensor time constant' }
      ]
    },
    bullets: [
      'The negative sign indicates the output always lags behind the input.',
      'As frequency increases, phase lag asymptotically approaches -90° (-π/2 radians).',
      'Because time lag Δt(ω) depends on frequency, multi-harmonic signals will suffer phase distortion!'
    ],
    speakerNotes:
      'Remind students: At DC (ω = 0), phase lag is 0°. At very high frequencies, the phase lag approaches -90°.',
    takeaway: 'Phase lag φ(ω) = -arctan(τω) ranges from 0° to -90°, causing frequency-dependent time delays.'
  },
  {
    id: 58,
    title: 'First-Order Cutoff Frequency & Bandwidth',
    subtitle: 'The -3 dB Half-Power Corner Frequency',
    sectionTag: '5.5 First-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: '\\omega_c = \\frac{1}{\\tau} \\implies M(\\omega_c) = \\frac{1}{\\sqrt{1 + 1^2}} = \\frac{1}{\\sqrt{2}} \\approx 0.7071 \\; (-3.01\\text{ dB}), \\quad \\phi(\\omega_c) = -45^{\\circ}',
      label: 'Eq. 5.19',
      description: 'The cutoff or corner frequency defined by τω = 1, where signal power is reduced to exactly half (-3 dB) and phase lag is 45°.',
      symbols: [
        { symbol: '\\omega_c', name: 'Corner Frequency', unit: '\\text{rad/s}', description: 'Cutoff angular frequency: \\omega_c = 1 / \\tau' },
        { symbol: 'f_c', name: 'Cutoff Frequency in Hz', unit: '\\text{Hz}', description: 'Cyclic cutoff frequency: f_c = 1 / (2\\pi\\tau)' },
        { symbol: 'M(\\omega_c)', name: 'Magnification at Cutoff', unit: '\\text{dimensionless}', description: 'Amplitude ratio at cutoff: 0.7071 (-3.01 dB)' },
        { symbol: '\\phi(\\omega_c)', name: 'Phase Lag at Cutoff', unit: '^{\\circ}', description: 'Phase angle at cutoff: exactly -45°' }
      ]
    },
    bullets: [
      'Useful measurement bandwidth is strictly constrained by the cutoff frequency.',
      'Frequencies above ωc are heavily attenuated and cannot be measured accurately without dynamic compensation.'
    ],
    speakerNotes:
      'Make sure students know both representations: angular cutoff ωc = 1/τ rad/s, and cyclic cutoff fc = 1 / (2π τ) Hz.',
    takeaway: 'At cutoff frequency ωc = 1/τ, amplitude ratio drops to 0.707 (-3 dB) and phase lag reaches exactly -45°.'
  },
  {
    id: 59,
    title: 'Corona ME231 Quasi-Static Criterion',
    subtitle: 'When Does a First-Order Sensor Behave as Zero-Order?',
    sectionTag: '5.5 First-Order Systems',
    type: 'concept',
    bullets: [
      'Engineering Criterion (Corona ME231): If excitation frequency satisfies τ·ω < 0.1, dynamic effects can be completely ignored!',
      'Magnification Verification: For τω = 0.1, M = 1 / √(1 + 0.1²) = 1 / √1.01 = 0.9950 (amplitude error < 0.5%).',
      'Phase Lag Verification: φ = -arctan(0.1) = -5.71° (essentially negligible phase distortion).',
      'Practical Takeaway: When τ·ω < 0.1, the instrumentation engineer does not need to solve differential equations—the instrument acts as an ideal zero-order sensor with gain K.'
    ],
    speakerNotes:
      'Corona ME231 Rule: If τω < 0.1, static calibration alone is sufficient to predict measurement readings to within 0.5% accuracy.',
    takeaway: 'When τ·ω < 0.1, amplitude error is < 0.5% and phase lag < 5.7°, placing the sensor in the quasi-static zero-order regime.'
  },
  {
    id: 60,
    title: 'Figure 5.5: First-Order Dynamic Responses',
    subtitle: 'Thermometer Physics · Step Milestones · Ramp Lag · Quasi-Static Rule',
    sectionTag: '5.5 First-Order Systems',
    type: 'figure',
    figureKey: 'u5_fig5',
    speakerNotes:
      'Figure 5.5 illustrates: Panel A shows the glass bulb heat transfer schematic and step curve with the 3-minute (5τ) rule. Panel B shows ramp lag Δt = τ. Panel C graphs the Bode magnitude and phase curves with the green τω < 0.1 quasi-static band.',
    takeaway: 'A first-order sensor acts as a low-pass filter with cutoff frequency ωc = 1/τ rad/s.'
  },
  {
    id: 61,
    title: 'Worked Example 5.3: Clinical Thermometer Step Settling',
    subtitle: 'Corona ME231 Case Study · 1-Minute Premature Reading vs 3-Minute Wait',
    sectionTag: '5.5 First-Order Systems',
    type: 'worked-example',
    contentHtml: `
      <div class="space-y-4 text-slate-200">
        <p class="font-semibold text-indigo-300">Problem Statement (Corona ME231 Case Study):</p>
        <p>A clinical glass bulb thermometer has an initial reading of $T_0 = 20.0^{\\circ}\\text{C}$ (ambient room temperature) and is placed under a patient’s tongue ($T_1 = 37.0^{\\circ}\\text{C}$). The thermometer has a time constant $\\tau = 36.0\\text{ s}$.</p>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Calculate the thermometer reading after $1.0\\text{ minute}$ ($60\\text{ s}$). What is the dynamic error?</li>
          <li>Calculate the time required to reach within $0.1^{\\circ}\\text{C}$ of the true body temperature ($36.9^{\\circ}\\text{C}$).</li>
        </ol>
        <div class="mt-4 p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-2">
          <p class="font-semibold text-emerald-400">Step-by-Step Analytical Solution:</p>
          <p><strong>1. Reading after 1 minute (t = 60 s):</strong></p>
          <p>Total temperature step: $\\Delta T = T_1 - T_0 = 37.0 - 20.0 = 17.0^{\\circ}\\text{C}$.</p>
          <p class="font-mono text-cyan-300">$T(60) = T_1 - (T_1 - T_0) e^{-t/\\tau} = 37.0 - 17.0 \\times e^{-60/36} = 37.0 - 17.0 \\times e^{-1.667} = 37.0 - 17.0 \\times 0.1889 = 33.79^{\\circ}\\text{C}$.</p>
          <p class="text-amber-300 font-semibold">Dynamic Error = $37.0 - 33.79 = 3.21^{\\circ}\\text{C}$! (A dangerous under-reading that would cause a clinician to miss a fever!).</p>
          <p><strong>2. Time to reach 36.9 °C ($99.4\\%$ settling):</strong></p>
          <p>$36.9 = 37.0 - 17.0 e^{-t/\\tau} \\implies 17.0 e^{-t/\\tau} = 0.10 \\implies e^{-t/\\tau} = 0.005882$.</p>
          <p class="font-mono text-emerald-300">$t = -36.0 \\times \\ln(0.005882) = -36.0 \\times (-5.136) = 184.9\\text{ s} \\approx 3.08\\text{ minutes}$.</p>
          <p class="text-slate-300">This mathematically confirms the clinical rule of waiting a full 3 minutes ($5\\tau$) for medical oral thermometers.</p>
        </div>
      </div>
    `,
    speakerNotes:
      'Emphasize the clinical result: pulling the thermometer out after 1 minute records only 33.8 °C instead of 37.0 °C. The 3.2 °C error is pure dynamic thermal lag.',
    takeaway: 'Removing a first-order sensor before 5τ causes severe under-reading; clinical thermometers require a full 3-minute wait.'
  },
  {
    id: 62,
    title: 'Worked Example 5.4: Thermocouple in Heating Oil Bath',
    subtitle: 'Ramp Tracking Delay & Steady-State Dynamic Error Calculation',
    sectionTag: '5.5 First-Order Systems',
    type: 'worked-example',
    contentHtml: `
      <div class="space-y-4 text-slate-200">
        <p class="font-semibold text-indigo-300">Problem Statement:</p>
        <p>A bare thermocouple with time constant $\\tau = 4.5\\text{ s}$ and static sensitivity $K = 1.0^{\\circ}\\text{C}/^{\\circ}\\text{C}$ is used to monitor an industrial heat treatment oil bath that heats up at a constant linear rate of $R = 0.40^{\\circ}\\text{C/s}$.</p>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Determine the steady-state dynamic time lag $\\Delta t$.</li>
          <li>Calculate the steady-state dynamic temperature error $e_{ss}$.</li>
          <li>If the maximum permissible error is $0.5^{\\circ}\\text{C}$, what is the maximum allowable time constant $\\tau_{\\max}$?</li>
        </ol>
        <div class="mt-4 p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-2">
          <p class="font-semibold text-emerald-400">Step-by-Step Analytical Solution:</p>
          <p><strong>1. Dynamic Time Lag:</strong></p>
          <p class="font-mono text-cyan-300">$\\Delta t = \\tau = 4.50\\text{ s}$.</p>
          <p class="text-slate-300">The temperature reading at any instant reflects the oil bath temperature from 4.5 seconds ago.</p>
          <p><strong>2. Steady-State Dynamic Error:</strong></p>
          <p class="font-mono text-cyan-300">$e_{ss} = K \\cdot R \\cdot \\tau = (1.0) \\times (0.40^{\\circ}\\text{C/s}) \\times (4.50\\text{ s}) = 1.80^{\\circ}\\text{C}$.</p>
          <p class="text-amber-300 font-semibold">The thermocouple reading consistently underestimates true bath temperature by $1.80^{\\circ}\\text{C}$.</p>
          <p><strong>3. Maximum Allowable Time Constant for $e_{ss} \\le 0.50^{\\circ}\\text{C}$:</strong></p>
          <p class="font-mono text-emerald-300">$\\tau_{\\max} = \\frac{e_{\\text{allow}}}{K \\cdot R} = \\frac{0.50^{\\circ}\\text{C}}{1.0 \\times 0.40^{\\circ}\\text{C/s}} = 1.25\\text{ s}$.</p>
          <p class="text-slate-300">The sensor must be replaced with a smaller bead or agitated to reduce $\\tau$ from 4.5 s down to $\\le 1.25\\text{ s}$.</p>
        </div>
      </div>
    `,
    speakerNotes:
      'Point out to students that increasing fluid flow speed increases h, which lowers τ to meet the 1.25 s requirement without changing the sensor probe.',
    takeaway: 'Under a constant temperature ramp, dynamic error is ess = K·R·τ; reducing error requires reducing τ or R.'
  },
  {
    id: 63,
    title: 'Check Your Understanding: First-Order Milestones',
    subtitle: 'Formative Assessment · Exponential Rise and Time Constant',
    sectionTag: '5.5 First-Order Systems',
    type: 'check-understanding',
    quiz: {
      question: 'A first-order temperature sensor at an initial reading of 10 °C is suddenly placed in water at 110 °C. If its time constant is τ = 5.0 s, what is its reading after exactly 5.0 seconds (t = 1τ)?',
      options: [
        '50.0 °C (50% of the span)',
        '63.2 °C (63.2 °C absolute)',
        '73.2 °C (63.2% of the step added to initial 10 °C)',
        '99.3 °C (99.3% of the span)'
      ],
      correctIndex: 2,
      explanation: 'Total step span ΔT = 110 - 10 = 100 °C. At t = 1τ, the system completes 63.2% of the step change: ΔT(1τ) = 0.632 × 100 = 63.2 °C. Adding this rise to initial reading y0 = 10 °C yields y(1τ) = 10 + 63.2 = 73.2 °C.'
    },
    speakerNotes:
      'A very common student trap is to say 63.2 °C, forgetting to add the initial 10 °C baseline offset.',
    takeaway: 'At t = 1τ, the response traverses 63.2% of the total step difference from its initial starting value.'
  },
  {
    id: 64,
    title: '5.6 Second-Order Systems: Key Parameters & Regimes',
    subtitle: 'Section 5.6 · Two Exchanging Energy Reservoirs & Potential Resonance',
    sectionTag: '5.6 Second-Order Systems',
    type: 'section-divider',
    speakerNotes:
      'We proceed to Section 5.6: Second-Order Systems. These describe instruments capable of kinetic and potential energy exchange, leading to potential resonance and oscillatory overshoot.',
    takeaway: 'Second-order systems are governed by two master parameters: natural frequency ωn and damping ratio ζ.'
  },
  {
    id: 65,
    title: 'Canonical Second-Order Governing ODE',
    subtitle: 'Standard Normalized Differential Form',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'a_2 \\frac{d^2 y}{dt^2} + a_1 \\frac{dy}{dt} + a_0 y(t) = f(t) \\implies \\frac{1}{\\omega_n^2}\\frac{d^2 y}{dt^2} + \\frac{2\\zeta}{\\omega_n}\\frac{dy}{dt} + y(t) = K f(t)',
      label: 'Eq. 5.20',
      description: 'The standard canonical linear second-order differential equation obtained by dividing through by static stiffness coefficient a0.',
      symbols: [
        { symbol: '\\omega_n', name: 'Undamped Natural Frequency', unit: '\\text{rad/s}', description: 'Frequency of free oscillation without damping: \\omega_n = \\sqrt{a_0 / a_2}' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'Ratio of actual damping to critical damping: \\zeta = a_1 / (2 \\sqrt{a_0 a_2})' },
        { symbol: 'K', name: 'Static Gain (Sensitivity)', unit: '[\\text{output}]/[\\text{input}]', description: 'Steady-state transfer factor: K = 1 / a_0' },
        { symbol: 'y(t)', name: 'Sensor Output', unit: '\\text{output units}', description: 'Instantaneous instrument reading' },
        { symbol: 'f(t)', name: 'Input Measurand', unit: '\\text{input units}', description: 'Excitation forcing function' }
      ]
    },
    bullets: [
      'Second-order systems contain TWO independent energy storage mechanisms (e.g. mass kinetic energy and spring potential energy).',
      'The transient and frequency response characteristics are completely governed by natural frequency ωn and damping ratio ζ.'
    ],
    speakerNotes:
      'Emphasize that rewriting the ODE with parameters ωn and ζ allows universal analysis of mechanical, electrical, and hydraulic second-order instruments alike.',
    takeaway: 'All second-order measurement systems are governed by static gain K, natural frequency ωn, and damping ratio ζ.'
  },
  {
    id: 66,
    title: 'Physical Archetype: The Grocery Produce Scale',
    subtitle: 'Corona ME231 Mechanical Energy Exchange Model',
    sectionTag: '5.6 Second-Order Systems',
    type: 'concept',
    bullets: [
      'Physical Model (Corona ME231): A supermarket spring scale with mass m (pan + potatoes), spring stiffness k, and dashpot damper c (viscous piston).',
      'Three Physical Elements:',
      '• Mass m: Stores kinetic energy in moving produce and pan: Ek = (1/2) m v².',
      '• Linear Spring k: Stores potential energy in elastic displacement: Ep = (1/2) k y².',
      '• Dashpot c: Dissipates energy as viscous heat, damping out unwanted oscillation.'
    ],
    speakerNotes:
      'Highlight that without the dashpot c, the grocery scale would oscillate indefinitely and customers could never read the weight.',
    takeaway: 'The grocery store produce scale perfectly exemplifies the kinetic, potential, and dissipative elements of a second-order system.'
  },
  {
    id: 67,
    title: 'Produce Scale Derivation: Newton’s Second Law',
    subtitle: 'Dynamic Force Balance from Free-Body Diagram',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'm \\frac{d^2 y}{dt^2} = W(t) - c \\frac{dy}{dt} - k y(t) \\implies m \\ddot{y} + c \\dot{y} + k y = W(t)',
      label: 'Eq. 5.21',
      description: 'Equating net force on the scale pan (applied produce weight W minus viscous drag and spring restoring force) to pan acceleration.',
      symbols: [
        { symbol: 'm', name: 'Total Moving Mass', unit: '\\text{kg}', description: 'Mass of scale pan plus weighed produce' },
        { symbol: 'c', name: 'Damping Coefficient', unit: '\\text{N}\\cdot\\text{s}/\\text{m}', description: 'Viscous damping constant of dashpot' },
        { symbol: 'k', name: 'Spring Stiffness', unit: '\\text{N}/\\text{m}', description: 'Restoring spring constant' },
        { symbol: 'W(t)', name: 'Applied Measurand Weight', unit: '\\text{N}', description: 'Step gravitational force applied by produce' },
        { symbol: 'y(t)', name: 'Pan Displacement', unit: '\\text{m}', description: 'Output pointer movement' }
      ]
    },
    bullets: [
      'Dividing through by spring stiffness k gives: (m/k) ÿ + (c/k) ẏ + y = (1/k) W.',
      'Comparing with canonical form (1/ωn²) ÿ + (2ζ/ωn) ẏ + y = K·f yields physical definitions for ωn, ζ, and K.'
    ],
    speakerNotes:
      'Walk through the free-body diagram: downward gravity force W, upward spring force -ky, upward damping resistance -cẏ.',
    takeaway: 'Newton’s second law yields mÿ + cẏ + ky = W, directly matching the canonical second-order differential equation.'
  },
  {
    id: 68,
    title: 'Natural Frequency & Static Sensitivity',
    subtitle: 'Physical Formulas Derived from Produce Scale Parameters',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: '\\omega_n = \\sqrt{\\frac{k}{m}} \\; [\\text{rad/s}], \\quad f_n = \\frac{\\omega_n}{2\\pi} = \\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}} \\; [\\text{Hz}], \\quad K = \\frac{1}{k} \\; [\\text{m/N}]',
      label: 'Eq. 5.22',
      description: 'Undamped natural frequency ωn is dictated by the ratio of stiffness to mass; static sensitivity K is dictated solely by spring compliance 1/k.',
      symbols: [
        { symbol: '\\omega_n', name: 'Angular Natural Frequency', unit: '\\text{rad/s}', description: 'Undamped cyclic angular frequency' },
        { symbol: 'f_n', name: 'Cyclic Natural Frequency', unit: '\\text{Hz}', description: 'Natural resonance cycles per second' },
        { symbol: 'K', name: 'Static Sensitivity', unit: '\\text{m/N}', description: 'Scale deflection per unit applied weight' },
        { symbol: 'k', name: 'Stiffness', unit: '\\text{N/m}', description: 'Spring constant' },
        { symbol: 'm', name: 'Mass', unit: '\\text{kg}', description: 'Oscillating mass' }
      ]
    },
    bullets: [
      'Static Trade-off: A softer spring (lower k) yields higher sensitivity K, but dramatically slows down response speed by reducing ωn.',
      'To increase sensor bandwidth (higher ωn) without sacrificing sensitivity, engineers must minimize moving mass m.'
    ],
    speakerNotes:
      'Point out the classic sensor design dilemma: high sensitivity requires compliant springs, but high frequency bandwidth requires stiff springs and light mass.',
    takeaway: 'Natural frequency ωn = √(k/m) defines dynamic speed, while static sensitivity K = 1/k defines DC gain.'
  },
  {
    id: 69,
    title: 'Critical Damping & Damping Ratio ζ',
    subtitle: 'The Threshold Between Oscillatory Ringing and Sluggish Return',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'c_c = 2\\sqrt{k m} = 2 m \\omega_n, \\quad \\zeta = \\frac{c}{c_c} = \\frac{c}{2\\sqrt{k m}} = \\frac{c}{2 m \\omega_n}',
      label: 'Eq. 5.23',
      description: 'Critical damping coefficient cc is the exact minimum damping required to prevent overshoot; damping ratio ζ normalizes actual damping against cc.',
      symbols: [
        { symbol: 'c_c', name: 'Critical Damping Coefficient', unit: '\\text{N}\\cdot\\text{s}/\\text{m}', description: 'Boundary damping value preventing oscillation' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'Normalized damping parameter' },
        { symbol: 'c', name: 'Actual Damping Coefficient', unit: '\\text{N}\\cdot\\text{s}/\\text{m}', description: 'Viscous damping of dashpot' },
        { symbol: 'm', name: 'Mass', unit: '\\text{kg}', description: 'Total moving mass' },
        { symbol: 'k', name: 'Stiffness', unit: '\\text{N/m}', description: 'Spring stiffness constant' }
      ]
    },
    bullets: [
      'When ζ < 1: The system is underdamped and oscillates before settling.',
      'When ζ = 1: The system is critically damped and returns to equilibrium in the fastest possible non-oscillatory time.',
      'When ζ > 1: The system is overdamped and creeps sluggishly without oscillating.'
    ],
    speakerNotes:
      'Remind students: critical damping cc = 2√(km). If c = cc, then ζ = 1.0. This is the boundary dividing roots with imaginary parts from purely real roots.',
    takeaway: 'Critical damping cc = 2√(km) defines the boundary: ζ < 1 oscillates, ζ = 1 is fastest non-oscillatory, ζ > 1 is sluggish.'
  },
  {
    id: 70,
    title: 'Characteristic Roots & The Four Damping Regimes',
    subtitle: 'Mapping S-Plane Pole Locations to Physical Motion',
    sectionTag: '5.6 Second-Order Systems',
    type: 'concept',
    bullets: [
      'Characteristic Equation: s² + 2ζ ωn s + ωn² = 0.',
      'Quadratic Roots: s1,2 = -ζ ωn ± ωn √(ζ² - 1).',
      'Regime 1: Undamped (ζ = 0) ⟹ Pure imaginary poles s = ±j ωn (continuous sustained sinusoidal oscillation).',
      'Regime 2: Underdamped (0 < ζ < 1) ⟹ Complex conjugate poles s = -ζ ωn ± j ωd (decaying sinusoidal ringing).',
      'Regime 3: Critically Damped (ζ = 1.0) ⟹ Repeated real negative roots s1 = s2 = -ωn (fastest monotonic settling).',
      'Regime 4: Overdamped (ζ > 1.0) ⟹ Two distinct real negative roots s1,2 = -ζ ωn ± ωn √(ζ² - 1) (sluggish monotonic creep).'
    ],
    speakerNotes:
      'Draw the complex s-plane: as ζ increases from 0, the poles move along a semicircle of radius ωn from the imaginary axis toward the negative real axis, colliding at -ωn when ζ = 1.',
    takeaway: 'The value of damping ratio ζ dictates the nature of the characteristic roots and determines the transient response regime.'
  },
  {
    id: 71,
    title: 'Regime 1: Undamped System (ζ = 0)',
    subtitle: 'Conservative Energy Sloshing with Zero Dissipation',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'y(t) = K F_1 \\left[ 1 - \\cos(\\omega_n t) \\right]',
      label: 'Eq. 5.24',
      description: 'Step response when damping is identically zero (c = 0), resulting in perpetual sinusoidal oscillation at natural frequency ωn.',
      symbols: [
        { symbol: 'y(t)', name: 'Displacement', unit: '\\text{output units}', description: 'Perpetual oscillating output' },
        { symbol: 'K F_1', name: 'Steady-State Equil. Target', unit: '\\text{output units}', description: 'Target equilibrium position' },
        { symbol: '\\omega_n', name: 'Natural Frequency', unit: '\\text{rad/s}', description: 'Frequency of sustained oscillation' },
        { symbol: 'M_p', name: 'Peak Overshoot', unit: '\\%', description: 'Maximum overshoot: exactly 100% (peaks at 2·K·F1)' }
      ]
    },
    bullets: [
      'Kinetic energy and elastic potential energy exchange back and forth perpetually without loss.',
      'Peak overshoot is exactly 100% (the scale pointer swings to double the weight reading: 2·K·F1).',
      'Completely unacceptable for any measurement system because settling time is infinite (ts = ∞).'
    ],
    speakerNotes:
      'Note that zero damping exists only in ideal mathematical frictionless systems, but very lightly damped structures (like bells or crystals) approximate this with ζ < 0.005.',
    takeaway: 'An undamped system oscillates forever with 100% overshoot, making settling time infinite.'
  },
  {
    id: 72,
    title: 'Regime 2: Underdamped System (0 < ζ < 1)',
    subtitle: 'Damped Sinusoidal Ringing and Exponential Decay Envelope',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'y(t) = K F_1 \\left[ 1 - \\frac{e^{-\\zeta \\omega_n t}}{\\sqrt{1 - \\zeta^2}} \\sin\\left( \\omega_d t + \\phi \\right) \\right], \\quad \\omega_d = \\omega_n \\sqrt{1 - \\zeta^2}',
      label: 'Eq. 5.25',
      description: 'Analytical step response for underdamped second-order systems featuring decaying oscillations at damped natural frequency ωd.',
      symbols: [
        { symbol: '\\omega_d', name: 'Damped Natural Frequency', unit: '\\text{rad/s}', description: 'Actual ringing frequency: \\omega_d = \\omega_n \\sqrt{1 - \\zeta^2}' },
        { symbol: '\\phi', name: 'Phase Angle', unit: '\\text{rad}', description: 'Phase offset: \\phi = \\arccos(\\zeta) = \\arctan(\\sqrt{1-\\zeta^2}/\\zeta)' },
        { symbol: 'e^{-\\zeta \\omega_n t}', name: 'Decay Envelope', unit: '\\text{dimensionless}', description: 'Exponential decay factor governing ringing envelope' },
        { symbol: 'M_p', name: 'Peak Overshoot', unit: '\\%', description: 'Overshoot: M_p = 100 \\times e^{-\\pi\\zeta / \\sqrt{1-\\zeta^2}}' }
      ]
    },
    bullets: [
      'The pointer oscillates across the final reading before settling within the error band.',
      'Damped frequency ωd is always strictly lower than undamped frequency ωn.',
      'Higher damping ratio ζ suppresses peak overshoot Mp and accelerates exponential decay.'
    ],
    speakerNotes:
      'Walk through the formula: the sine term produces ringing at frequency ωd, while the exponential term e^(-ζωnt) squeezes the oscillations to zero.',
    takeaway: 'Underdamped systems ring at frequency ωd = ωn√(1 - ζ²) within an exponential envelope e^(-ζωnt).'
  },
  {
    id: 73,
    title: 'Regime 3: Critically Damped System (ζ = 1.0)',
    subtitle: 'The Fastest Monotonic Transient without Overshoot',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'y(t) = K F_1 \\left[ 1 - \\left( 1 + \\omega_n t \\right) e^{-\\omega_n t} \\right]',
      label: 'Eq. 5.26',
      description: 'Exact analytical step solution when damping equals critical damping (c = cc, ζ = 1.0), representing the mathematical boundary between oscillation and monotonic creep.',
      symbols: [
        { symbol: 'y(t)', name: 'Sensor Output', unit: '\\text{output units}', description: 'Critically damped output response' },
        { symbol: '\\omega_n', name: 'Natural Frequency', unit: '\\text{rad/s}', description: 'System natural frequency' },
        { symbol: 't', name: 'Elapsed Time', unit: '\\text{s}', description: 'Time since step excitation' },
        { symbol: 'M_p', name: 'Peak Overshoot', unit: '\\%', description: 'Strictly zero overshoot: M_p = 0.0\\%' }
      ]
    },
    bullets: [
      'Repeated real characteristic roots s1 = s2 = -ωn produce the term (1 + ωnt) e^(-ωnt).',
      'The response approaches final reading K·F1 as rapidly as physically possible without a single oscillation.',
      'Strictly zero peak overshoot (Mp = 0) and zero ringing.'
    ],
    speakerNotes:
      'Stress to students: Critical damping is unique because it provides the fastest possible rise time that guarantees zero overshoot.',
    takeaway: 'Critically damped systems (ζ = 1.0) achieve the fastest monotonic approach to steady state with zero overshoot.'
  },
  {
    id: 74,
    title: 'Regime 4: Overdamped System (ζ > 1.0)',
    subtitle: 'Sluggish Dual-Exponential Creep toward Steady State',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'y(t) = K F_1 \\left[ 1 - \\frac{s_2 e^{s_1 t} - s_1 e^{s_2 t}}{s_2 - s_1} \\right], \\quad s_{1,2} = -\\zeta \\omega_n \\pm \\omega_n \\sqrt{\\zeta^2 - 1}',
      label: 'Eq. 5.27',
      description: 'Analytical step solution for overdamped systems with two distinct real negative roots, leading to slow exponential settling.',
      symbols: [
        { symbol: 's_1, s_2', name: 'Real Roots', unit: '\\text{s}^{-1}', description: 'Distinct real roots: s_1 = -\\omega_n(\\zeta - \\sqrt{\\zeta^2-1}), \\; s_2 = -\\omega_n(\\zeta + \\sqrt{\\zeta^2-1})' },
        { symbol: 's_1', name: 'Dominant Pole', unit: '\\text{s}^{-1}', description: 'Slow pole near origin that dictates long settling time' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'Damping ratio strictly greater than 1.0' }
      ]
    },
    bullets: [
      'Excessive viscous damping forces the slower root s1 closer to the origin (s1 → 0 as ζ → ∞).',
      'The dominant slow pole causes an agonizingly long settling time, far slower than the critically damped response.',
      'Overshoot is zero (Mp = 0), but the instrument behaves like an overly sluggish first-order system.'
    ],
    speakerNotes:
      'Explain that filling the dashpot with heavy molasses makes ζ = 5. The pointer takes 30 seconds to reach 1 kg of potatoes!',
    takeaway: 'Overdamped systems (ζ > 1) never overshoot, but suffer severely sluggish settling due to the dominant slow pole.'
  },
  {
    id: 75,
    title: 'Why Grocery Scales Are Tuned to Critical Damping',
    subtitle: 'Corona ME231 Produce Scale Design Rationale',
    sectionTag: '5.6 Second-Order Systems',
    type: 'analogy',
    analogy: {
      everydayConcept: 'Weighing Potatoes at the Supermarket Produce Section',
      technicalMapping: 'When a shopper drops a 2 kg bag of potatoes onto the produce scale pan, that is an abrupt step force W. The mechanical pan has mass m, restoring spring k, and viscous dashpot c.',
      whyItWorks: 'Scale manufacturers deliberately tune the dashpot fluid viscosity so that ζ = 1.0 (critically damped). The pointer moves swiftly and smoothly to the 2.0 kg mark and locks in place with zero bounce and zero delay, allowing instant checkout!',
      limitsOfAnalogy: 'If the scale dashpot leaks its oil (c → 0, ζ ≈ 0.1), the needle bounces violently for 15 seconds. If the oil coagulates with dirt (ζ > 3), the needle takes a minute to slowly creep up to 2.0 kg.'
    },
    speakerNotes:
      'This analogy by Edmundo Corona gives students an immediate, visceral understanding of why critical damping is the gold standard for human-read instruments.',
    takeaway: 'Supermarket produce scales are engineered with ζ = 1.0 so the needle settles instantly without bouncing.'
  },
  {
    id: 76,
    title: 'Optimal Sensor Tuning: Why Engineers Choose ζ = 0.707',
    subtitle: 'The Maximally Flat Bandwidth Compromise for Electronic Sensors',
    sectionTag: '5.6 Second-Order Systems',
    type: 'concept',
    bullets: [
      'The Engineer’s Dilemma: For electronic instruments (accelerometers, pressure transducers), a small overshoot is harmless, but settling time and flat frequency bandwidth are critical.',
      'Minimum Settling Time: Tuning ζ ≈ 0.707 produces the absolute fastest 2% settling time ts ≈ 4 / (ζ ωn).',
      'Negligible Overshoot: At ζ = 0.707, peak step overshoot is only Mp = 4.3% (negligible for data acquisition systems).',
      'Maximally Flat Frequency Response: ζ = 1/√2 ≈ 0.707 produces the Butterworth flat response—the widest possible frequency range where M(ω) ≈ 1.0 with strictly ZERO resonant amplification peak!'
    ],
    speakerNotes:
      'Highlight the key contrast: visual human-read instruments use ζ = 1.0 (zero bounce), but high-speed electronic sensors use ζ = 0.707 (maximum flat bandwidth).',
    takeaway: 'Damping ratio ζ = 0.707 provides the optimum engineering trade-off: fastest settling, flat bandwidth, and no resonant peak.'
  },
  {
    id: 77,
    title: 'Second-Order Harmonic Response: Magnification M(ω)',
    subtitle: 'Amplitude Transfer Function under Sinusoidal Excitation',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'M(\\omega) = \\left| \\frac{Y(j\\omega)}{K F(j\\omega)} \\right| = \\frac{1}{\\sqrt{\\left[ 1 - \\left(\\frac{\\omega}{\\omega_n}\\right)^2 \\right]^2 + \\left[ 2\\zeta \\left(\\frac{\\omega}{\\omega_n}\\right) \\right]^2}}',
      label: 'Eq. 5.28',
      description: 'The dynamic amplitude magnification ratio of a second-order system excited by sinusoidal input f(t) = A sin(ωt), written in terms of frequency ratio r = ω/ωn.',
      symbols: [
        { symbol: 'M(\\omega)', name: 'Dynamic Magnification Ratio', unit: '\\text{dimensionless}', description: 'Output to input amplitude ratio normalized by static gain K' },
        { symbol: 'r = \\omega / \\omega_n', name: 'Frequency Ratio', unit: '\\text{dimensionless}', description: 'Excitation frequency divided by undamped natural frequency' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'System damping ratio' }
      ]
    },
    bullets: [
      'Low Frequency (r ≪ 1): M(ω) ≈ 1.0 (sensor faithfully reproduces measurand amplitude).',
      'High Frequency (r ≫ 1): M(ω) ≈ 1 / r² (attenuates rapidly at -40 dB/decade or -12 dB/octave).',
      'Resonance Behavior: Near r = 1, M(ω) can surge to huge values if damping ratio ζ is small.'
    ],
    speakerNotes:
      'Walk through the denominator: at r = 1, the (1 - r²)² term vanishes, leaving only 1 / (2ζ). If ζ is small, magnification skyrockets!',
    takeaway: 'Second-order magnification rolls off at -40 dB/decade at high frequencies and surges near resonance if damping is light.'
  },
  {
    id: 78,
    title: 'Second-Order Phase Lag & The Invariant 90° Shift',
    subtitle: 'Quadrature Phase Shift at Undamped Natural Frequency',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: '\\phi(\\omega) = -\\arctan\\left( \\frac{2\\zeta \\frac{\\omega}{\\omega_n}}{1 - \\left(\\frac{\\omega}{\\omega_n}\\right)^2} \\right), \\quad \\phi(\\omega_n) = -90^{\\circ} \\; (-\\pi/2\\text{ rad})',
      label: 'Eq. 5.29',
      description: 'Phase angle between output response and input harmonic measurand. At ω = ωn, the phase lag is unconditionally -90° for every damping ratio ζ > 0.',
      symbols: [
        { symbol: '\\phi(\\omega)', name: 'Phase Lag', unit: '^{\\circ} \\text{ or rad}', description: 'Phase angle: ranges from 0° at DC to -180° at high frequency' },
        { symbol: '\\phi(\\omega_n)', name: 'Phase Lag at Resonance', unit: '^{\\circ}', description: 'Exactly -90° regardless of damping ratio ζ' },
        { symbol: 'r = \\omega / \\omega_n', name: 'Frequency Ratio', unit: '\\text{dimensionless}', description: 'Normalized frequency' }
      ]
    },
    bullets: [
      'Phase lag starts at 0° at DC (ω = 0) and asymptotically approaches -180° (-π rad) as ω → ∞.',
      'Universal Invariant: At ω = ωn, the denominator (1 - r²) is identically zero, so φ = -arctan(∞) = -90° exactly for ALL damping values!',
      'At ω = ωn, output velocity is in exact phase with the driving force, maximizing power transfer.'
    ],
    speakerNotes:
      'Crucial exam fact: The phase curve passes through -90° at ω = ωn for every single value of ζ > 0. This is an invariant landmark.',
    takeaway: 'Phase lag ranges from 0° to -180°, and is unconditionally equal to exactly -90° at ω = ωn.'
  },
  {
    id: 79,
    title: 'Resonance Peak Magnification Mr and Frequency ωr',
    subtitle: 'Conditions for Dynamic Resonance Peaks in Second-Order Systems',
    sectionTag: '5.6 Second-Order Systems',
    type: 'formula',
    formulaBlock: {
      equation: 'M_r = \\frac{1}{2\\zeta \\sqrt{1 - \\zeta^2}} \\quad (\\text{for } \\zeta < \\frac{1}{\\sqrt{2}} \\approx 0.707), \\quad \\omega_r = \\omega_n \\sqrt{1 - 2\\zeta^2}',
      label: 'Eq. 5.30',
      description: 'The maximum resonant magnification peak Mr occurs at resonant frequency ωr strictly when damping ratio ζ is less than 0.707.',
      symbols: [
        { symbol: 'M_r', name: 'Resonant Peak Magnification', unit: '\\text{dimensionless}', description: 'Maximum amplitude ratio peak: M_r > 1.0' },
        { symbol: '\\omega_r', name: 'Resonant Frequency', unit: '\\text{rad/s}', description: 'Frequency where peak magnification occurs: \\omega_r < \\omega_n' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'Must satisfy \\zeta < 1/\\sqrt{2} \\approx 0.707 for peak to exist' }
      ]
    },
    bullets: [
      'If ζ ≥ 0.707: No resonant peak exists! The magnification M(ω) decreases monotonically from 1.0.',
      'As ζ → 0: Resonant frequency approaches natural frequency (ωr → ωn) and peak magnification approaches infinity (Mr → ∞).',
      'For small damping (ζ < 0.1): Mr ≈ 1 / (2ζ), known as the Quality Factor Q = 1 / (2ζ).'
    ],
    speakerNotes:
      'Point out: If ζ = 0.2, Mr = 1 / [2(0.2)√(1 - 0.04)] = 2.55 (a 255% magnification!). If an accelerometer hits this frequency, it produces garbage data.',
    takeaway: 'Resonant magnification peaks occur only if ζ < 0.707, peaking at ωr = ωn√(1 - 2ζ²) with magnitude Mr = 1 / [2ζ√(1 - ζ²)].'
  },
  {
    id: 80,
    title: 'Resonance Physical Analogy 1: Child on a Swing',
    subtitle: 'Corona ME231 Intuition on Synchronized Energy Accumulation',
    sectionTag: '5.6 Second-Order Systems',
    type: 'analogy',
    analogy: {
      everydayConcept: 'Pushing a Child on a Playground Swing',
      technicalMapping: 'A playground swing is a pendulum second-order system with natural pendulum frequency ωn = √(g / L) and very light air-drag damping (ζ ≈ 0.02).',
      whyItWorks: 'If you push the swing at random frequencies, nothing happens. But if you push synchronously once every cycle (excitation frequency ω matches natural frequency ωn), each push adds energy in phase with velocity (φ = 90°), building massive amplitude from tiny pushes!',
      limitsOfAnalogy: 'A playground swing has non-linear large-angle pendular restoring forces (sin θ), whereas our canonical ODE assumes small linear angles.'
    },
    speakerNotes:
      'Edmundo Corona uses the swing analogy to demystify resonance: resonance is not magic, it is simply periodic work done in phase with velocity.',
    takeaway: 'Resonance is synchronized energy accumulation: pumping energy at ω = ωn builds huge dynamic amplitudes.'
  },
  {
    id: 81,
    title: 'Resonance Physical Analogy 2: Unbalanced Car Wheel',
    subtitle: 'Corona ME231 Intuition on Highway Speed Vibration',
    sectionTag: '5.6 Second-Order Systems',
    type: 'analogy',
    analogy: {
      everydayConcept: 'Driving a Car with an Unbalanced Tire and Worn Shock Absorbers',
      technicalMapping: 'The car wheel assembly has mass m, suspension spring k, and shock absorber damper c. An unbalanced tire generates a centrifugal harmonic force at wheel rotational frequency ω = v / R.',
      whyItWorks: 'At city speeds (30 km/h, ω ≪ ωn), you feel nothing (M ≈ 1). But on the highway at exactly 100 km/h, wheel rotational frequency hits the suspension natural frequency (ω = ωn). If shock absorbers are worn out (ζ < 0.2), the entire vehicle vibrates violently!',
      limitsOfAnalogy: 'If you speed up to 130 km/h (ω ≫ ωn), the vibration miraculously subsides because high-frequency magnification drops below 1.0 (attenuation regime).'
    },
    speakerNotes:
      'Corona ME231 car tire analogy: Students often experience car shaking at 60 mph that vanishes at 75 mph. That is passing through the resonance peak into the 1/r² rolloff regime!',
    takeaway: 'An unbalanced car tire shakes violently at highway resonance (ω = ωn), but smooths out at higher speeds (ω ≫ ωn).'
  },
  {
    id: 82,
    title: 'Figure 5.6: Second-Order Damping & Resonance',
    subtitle: 'Produce Scale Model · Damping Step Regimes · Resonance Analogies',
    sectionTag: '5.6 Second-Order Systems',
    type: 'figure',
    figureKey: 'u5_fig6',
    speakerNotes:
      'Examine Figure 5.6: Panel A diagrams the produce scale with mass m, spring k, and dashpot c, alongside step responses for ζ = 0, 0.2, 0.707, 1.0, and 2.0. Panel B shows the resonance curves and highlights the playground swing and car tire analogies.',
    takeaway: 'Visualizing produce scale damping and resonance curves clarifies why instruments are engineered with ζ ≈ 0.7.'
  },
  {
    id: 83,
    title: 'Worked Example 5.5: Accelerometer Resonance & Bandwidth',
    subtitle: 'Resonant Peak, Dynamic Overestimation & Operating Frequency Limits',
    sectionTag: '5.6 Second-Order Systems',
    type: 'worked-example',
    contentHtml: `
      <div class="space-y-4 text-slate-200">
        <p class="font-semibold text-indigo-300">Problem Statement:</p>
        <p>A piezoelectric vibration accelerometer has an undamped natural frequency $f_n = 20.0\\text{ kHz}$ and a damping ratio $\\zeta = 0.20$.</p>
        <ol class="list-decimal pl-6 space-y-1">
          <li>Calculate the resonant peak magnification $M_r$ and the resonant frequency $f_r$.</li>
          <li>If used to measure machine vibration at $f = 6.0\\text{ kHz}$, calculate the dynamic amplitude magnification $M$ and dynamic error percentage.</li>
          <li>What is the phase lag $\\phi$ at $6.0\\text{ kHz}$?</li>
        </ol>
        <div class="mt-4 p-4 bg-slate-800/80 rounded-lg border border-slate-700 space-y-2">
          <p class="font-semibold text-emerald-400">Step-by-Step Analytical Solution:</p>
          <p><strong>1. Resonant Peak & Resonant Frequency:</strong></p>
          <p class="font-mono text-cyan-300">$f_r = f_n \\sqrt{1 - 2\\zeta^2} = 20.0 \\times \\sqrt{1 - 2(0.20^2)} = 20.0 \\times \\sqrt{0.92} = 19.18\\text{ kHz}$.</p>
          <p class="font-mono text-amber-300">$M_r = \\frac{1}{2\\zeta \\sqrt{1 - \\zeta^2}} = \\frac{1}{2(0.20) \\sqrt{1 - 0.04}} = \\frac{1}{0.40 \\times 0.9798} = 2.5515$ (+155.2% amplification!).</p>
          <p><strong>2. Response at 6.0 kHz ($r = 6.0 / 20.0 = 0.30$):</strong></p>
          <p class="font-mono text-cyan-300">$M = \\frac{1}{\\sqrt{(1 - r^2)^2 + (2\\zeta r)^2}} = \\frac{1}{\\sqrt{(1 - 0.09)^2 + (2 \\times 0.20 \\times 0.30)^2}} = \\frac{1}{\\sqrt{0.91^2 + 0.12^2}} = \\frac{1}{\\sqrt{0.8281 + 0.0144}} = \\frac{1}{0.9179} = 1.0895$.</p>
          <p class="text-amber-300 font-semibold">Dynamic Error = $(1.0895 - 1.0) \\times 100\\% = +8.95\\%$ overestimation.</p>
          <p><strong>3. Phase Lag at 6.0 kHz:</strong></p>
          <p class="font-mono text-emerald-300">$\\phi = -\\arctan\\left( \\frac{2\\zeta r}{1 - r^2} \\right) = -\\arctan\\left( \\frac{0.12}{0.91} \\right) = -\\arctan(0.1319) = -7.51^{\\circ}$.</p>
          <p class="text-slate-300">Rule of Thumb: To keep dynamic error below $5\\%$, accelerometers with $\\zeta \\approx 0.2$ are restricted to $f \\le 0.20 f_n = 4.0\\text{ kHz}$.</p>
        </div>
      </div>
    `,
    speakerNotes:
      'Point out that to keep dynamic error below 5%, accelerometers are usually operated only up to 20% of their natural frequency (ω ≤ 0.2 ωn).',
    takeaway: 'Operating an accelerometer below 0.2 fn ensures amplitude fidelity within a few percent and negligible phase lag.'
  },
  {
    id: 84,
    title: 'Check Your Understanding: Resonance Phase Shift',
    subtitle: 'Formative Assessment · Fundamental Invariant of Second-Order Systems',
    sectionTag: '5.6 Second-Order Systems',
    type: 'check-understanding',
    quiz: {
      question: 'When a linear second-order measurement system is driven at an excitation frequency equal to its undamped natural frequency (ω = ωn), what is the phase angle between output and input?',
      options: [
        'Exactly 0° (in phase)',
        'Exactly -45°',
        'Exactly -90° regardless of damping ratio ζ',
        'Exactly -180°'
      ],
      correctIndex: 2,
      explanation: 'From the phase formula φ = -arctan[ (2ζ r) / (1 - r²) ], at r = ω/ωn = 1, the denominator becomes 1 - 1² = 0. Therefore, φ = -arctan(∞) = -90° (quadrature). This holds identically for EVERY second-order system with damping ζ > 0.'
    },
    speakerNotes:
      'Remind students that -90° at natural frequency is an absolute mathematical invariant for all linear second-order systems.',
    takeaway: 'At undamped natural frequency ω = ωn, the phase lag is unconditionally -90° for all damping values.'
  },
  {
    id: 85,
    title: '5.7 Real-World Sensor Taxonomy & Synthesis',
    subtitle: 'Section 5.7 · Physical Implementations, Superposition & Selection Rules',
    sectionTag: '5.7 Real-World Examples',
    type: 'section-divider',
    speakerNotes:
      'We arrive at Section 5.7: Real-World Sensor Taxonomy and Synthesis. We tie the mathematics directly to physical sensors encountered across engineering disciplines.',
    takeaway: 'Classifying physical sensors by dynamic order allows engineers to predict and prevent signal distortion.'
  },
  {
    id: 86,
    title: 'Fourier Superposition & Periodic Response',
    subtitle: 'Harmonic Decomposition of Arbitrary Complex Signals',
    sectionTag: '5.7 System Response & Superposition',
    type: 'formula',
    formulaBlock: {
      equation: 'f(t) = A_0 + \\sum_{k=1}^{\\infty} A_k \\sin(k \\omega_0 t + \\theta_k) \\implies y(t) = K A_0 + K \\sum_{k=1}^{\\infty} M(k \\omega_0) A_k \\sin\\left[ k \\omega_0 t + \\theta_k - \\phi(k \\omega_0) \\right]',
      label: 'Eq. 5.31',
      description: 'The output response of a linear measurement system excited by an arbitrary periodic signal expanded as a Fourier series.',
      symbols: [
        { symbol: 'A_0', name: 'DC Bias Component', unit: '\\text{input units}', description: 'Average value of the input signal' },
        { symbol: 'A_k', name: 'Harmonic Amplitude', unit: '\\text{input units}', description: 'Amplitude of the k-th harmonic component' },
        { symbol: 'k \\omega_0', name: 'Harmonic Frequency', unit: '\\text{rad/s}', description: 'Integer multiple of fundamental frequency \\omega_0' },
        { symbol: 'M(k \\omega_0)', name: 'Harmonic Magnification', unit: '\\text{dimensionless}', description: 'System amplitude ratio evaluated at harmonic frequency' },
        { symbol: '\\phi(k \\omega_0)', name: 'Harmonic Phase Lag', unit: '\\text{rad}', description: 'System phase delay evaluated at harmonic frequency' }
      ]
    },
    bullets: [
      'Linear superposition guarantees that each harmonic component passes through the instrument independently.',
      'The total steady-state output waveform is the linear summation of all individual scaled and delayed harmonics.'
    ],
    speakerNotes:
      'Show students that each Fourier component k·ω0 is multiplied by M(kω0) and shifted in time by φ(kω0)/(kω0).',
    takeaway: 'Linear superposition allows complex periodic signals to be analyzed by scaling and phase-shifting each Fourier harmonic.'
  },
  {
    id: 87,
    title: 'Why Measurement Systems Distort Waveforms',
    subtitle: 'Amplitude Attenuation vs. Phase Lag Dispersion',
    sectionTag: '5.7 System Response & Superposition',
    type: 'concept',
    bullets: [
      'Two Independent Distortion Mechanisms:',
      '1. Amplitude Distortion: Higher harmonic frequencies suffer greater attenuation (M(kω0) < 1), stripping sharp edges and rounding off pulses.',
      '2. Phase Distortion: If phase lag φ(ω) is not strictly linear with frequency (φ ∝ ω), different harmonics suffer different time delays (Δt = φ/ω).',
      'The Result: Even if amplitude is flat, non-linear phase delay shifts harmonic peaks relative to each other, warping the original waveshape.',
      'Condition for Distortionless Transmission: M(ω) = constant across all signal bandwidth AND phase lag is linear: φ(ω) = -t0·ω.'
    ],
    speakerNotes:
      'Cite physiological ECG signals or square waves in engine combustion: missing high harmonics rounds square corners into smooth sines.',
    takeaway: 'Distortionless measurement requires constant magnification M(ω) and linear phase lag φ(ω) across all signal harmonics.'
  },
  {
    id: 88,
    title: 'Sensor Architecture Taxonomy: Zero-Order Sensors',
    subtitle: 'Instantaneous Ohmic and Piezoresistive Transducers',
    sectionTag: '5.7 Real-World Examples',
    type: 'concept',
    bullets: [
      'Defining Physics: Pure electrical resistance or direct mechanical linkage with negligible mass and inductance.',
      '1. Resistive Potentiometers: Linear/rotary displacement dividers; wiper voltage is strictly proportional to position.',
      '2. Bonded Metal Foil Strain Gauges: Microscopic metallic foil bonded to structural members; converts microstrain into ΔR/R instantaneously.',
      '3. Piezoresistive Pressure Diaphragms: Silicon piezoresistors diffuse on thin membranes with flat response up to tens of kilohertz.',
      'Key Advantage: Infinite theoretical bandwidth in audio and mechanical ranges; zero dynamic phase delay.'
    ],
    speakerNotes:
      'Emphasize that zero-order sensors are the easiest to calibrate and use because static calibration is 100% valid under dynamic conditions.',
    takeaway: 'Zero-order sensors (potentiometers, strain gauges) provide instantaneous gain with zero dynamic phase distortion.'
  },
  {
    id: 89,
    title: 'Sensor Architecture Taxonomy: First-Order Sensors',
    subtitle: 'Thermal and Diffusive Single-Reservoir Transducers',
    sectionTag: '5.7 Real-World Examples',
    type: 'concept',
    bullets: [
      'Defining Physics: Single energy storage reservoir exchanging with a thermal or viscous resistance.',
      '1. Thermocouples & Resistance Temperature Detectors (RTD Pt100): Thermal capacitance mc_v relaxing via boundary layer convection hA.',
      '2. Liquid-in-Glass Clinical Thermometers: Mercury/alcohol bulb volume expansion governed by convective glass heat transfer.',
      '3. Thermistor Probes in Fluid Conduits: Semiconductor beads with negative temperature coefficient; response speed dictated by sheath flow velocity.',
      '4. Electrical RC Low-Pass Filters: Shunt capacitor storing charge through series resistor (τ = RC).'
    ],
    speakerNotes:
      'Remind students: First-order sensors never overshoot, but they always introduce low-pass filtering and high-frequency phase lag.',
    takeaway: 'First-order sensors are dominated by thermal mass or RC storage, behaving as intrinsic low-pass filters.'
  },
  {
    id: 90,
    title: 'Sensor Architecture Taxonomy: Second-Order Sensors',
    subtitle: 'Seismic Mass, Spring, and Damper Transducers',
    sectionTag: '5.7 Real-World Examples',
    type: 'concept',
    bullets: [
      'Defining Physics: Kinetic energy of a seismic mass exchanging with elastic potential energy of a flexure or spring.',
      '1. Supermarket Produce Scales: Weighing pan mass m, restoring coil spring k, and dashpot damper c (tuned to ζ = 1.0).',
      '2. Piezoelectric Vibration Accelerometers: Seismic tungsten proof mass m compressing a piezoelectric quartz crystal k (light damping ζ ≈ 0.05 - 0.2).',
      '3. U-Tube Liquid Manometers: Liquid column mass m sloshing against hydrostatic gravity head k and viscous fluid shear c.',
      '4. D’Arsonval Galvanometers & Moving-Coil Meters: Coil rotational inertia J, hairspring torsional spring k, and magnetic eddy-current damping c.'
    ],
    speakerNotes:
      'Every moving mass sensor is inherently second-order and subject to resonance if excited near natural frequency.',
    takeaway: 'Second-order sensors possess kinetic and potential energy storage, exhibiting resonance when excited near natural frequency.'
  },
  {
    id: 91,
    title: 'Figure 5.7: Real-World Sensor Taxonomy & Cutaways',
    subtitle: 'Physical Architectures · Mechanical Cutaways · Mathematical Models',
    sectionTag: '5.7 Real-World Examples',
    type: 'figure',
    figureKey: 'u5_fig7',
    speakerNotes:
      'Review Figure 5.7: Panel 1 illustrates the strain gauge cantilever beam (0th order). Panel 2 shows the thermal thermocouple convection bead (1st order, τ = mc/hA). Panel 3 diagrams the seismic proof mass accelerometer with spring and dashpot (2nd order, ωn = √(k/m)).',
    takeaway: 'Connecting physical cutaways to mathematical formulas cements students’ intuitive grasp of system dynamics.'
  },
  {
    id: 92,
    title: 'Practical Engineering Selection Rules of Thumb',
    subtitle: 'Corona ME231 Operational Criteria for Specifying Sensors',
    sectionTag: '5.7 Real-World Examples',
    type: 'concept',
    bullets: [
      'Rule 1 (Quasi-Static Operation): For first-order sensors, ensure excitation frequency satisfies τ·ω < 0.1 to keep amplitude errors below 0.5%.',
      'Rule 2 (Settling Time Patience): Always wait at least 5 time constants (5τ) before recording a first-order reading to guarantee > 99.3% accuracy.',
      'Rule 3 (Accelerometer Bandwidth): Restrict vibration measurements to f ≤ 0.20·fn for lightly damped sensors (ζ ≈ 0.2) to keep dynamic resonant error < 5%.',
      'Rule 4 (Scale Damping Target): Tune visual indicator systems to critical damping (ζ = 1.0) and high-speed electronic sensors to ζ ≈ 0.707.'
    ],
    speakerNotes:
      'These four rules of thumb are essential practical takeaways for instrumentation engineers in industrial testing environments.',
    takeaway: 'Follow the four Golden Rules: τω < 0.1 for quasi-static, wait 5τ for settling, f ≤ 0.2fn for accelerometers, and ζ = 0.707 for flat bandwidth.'
  },
  {
    id: 93,
    title: 'Common Exam Pitfalls: Dynamic Order & Overshoot Myths',
    subtitle: 'Clarifying Recurrent Conceptual Traps (Corona ME231)',
    sectionTag: 'Exam Review',
    type: 'misconceptions',
    bullets: [
      'Misconception 1: "System order is an absolute physical constant of the sensor hardware." False! A thermometer is 0th-order when measuring slow 24-hr day/night room cycles (τω ≪ 0.1), but 1st-order when plunged into hot soup.',
      'Misconception 2: "First-order systems can experience transient overshoot if the input step is sharp enough." False! First-order ODEs have a single negative real pole; their step response is strictly monotonic and can NEVER overshoot.',
      'Misconception 3: "Waiting 1 time constant (1τ) gives a good enough reading." False! At 1τ, the sensor has only completed 63.2% of the change, resulting in a disastrous 36.8% under-reading.'
    ],
    speakerNotes:
      'Remind students that these three pitfalls appear on almost every undergraduate instrumentation midterm examination.',
    takeaway: 'First-order systems never overshoot; operating order depends on input frequency; 1τ achieves only 63.2% settling.'
  },
  {
    id: 94,
    title: 'Common Exam Pitfalls: Damping & Resonance Myths',
    subtitle: 'Clarifying Recurrent Resonance Traps (Corona ME231)',
    sectionTag: 'Exam Review',
    type: 'misconceptions',
    bullets: [
      'Misconception 4: "Damping should always be maximized (ζ ≫ 1) to completely eliminate vibrations." False! Severe overdamping creates enormous time delays, making the instrument sluggish and unable to detect fast transients.',
      'Misconception 5: "At resonance, the phase angle between output and input is 0°." False! At resonance (ω = ωn), the phase lag is precisely -90° regardless of damping ratio ζ, meaning displacement is in exact quadrature with driving force.',
      'Misconception 6: "Resonant magnification peaks occur for all second-order systems." False! A resonant peak Mr exists ONLY if damping ratio satisfies ζ < 1/√2 ≈ 0.707.'
    ],
    speakerNotes:
      'Stress Misconception 5 and 6: At ω = ωn, phase is -90°, NOT 0°. And no resonance peak exists if ζ ≥ 0.707.',
    takeaway: 'Phase lag is -90° at natural frequency; resonant peaks exist strictly when ζ < 0.707; overdamping causes severe lag.'
  },
  {
    id: 95,
    title: 'Unit V Master Formula Sheet: Static & First-Order',
    subtitle: 'Essential Mathematical Relations for Examination Reference',
    sectionTag: 'Unit Summary',
    type: 'formula',
    formulaBlock: {
      equation: 'K = \\frac{\\Delta y}{\\Delta x}, \\quad y(t) = K F_1 - (K F_1 - y_0) e^{-t/\\tau}, \\quad M(\\omega) = \\frac{1}{\\sqrt{1 + (\\tau\\omega)^2}}, \\quad \\phi = -\\arctan(\\tau\\omega)',
      label: 'Formula Sheet 1',
      description: 'Core mathematical expressions governing static sensitivity, first-order step response, and first-order frequency response.',
      symbols: [
        { symbol: 'K', name: 'Static Sensitivity', unit: '[\\text{out}]/[\\text{in}]', description: 'Slope of static calibration curve' },
        { symbol: '\\tau', name: 'Time Constant', unit: '\\text{s}', description: 'Relaxation time: \\tau = mc_v / (hA)' },
        { symbol: 'e_{ss}', name: 'Ramp Error', unit: '\\text{output units}', description: 'Steady-state error under ramp: e_{ss} = K \\cdot R \\cdot \\tau' },
        { symbol: '\\omega_c', name: 'Cutoff Frequency', unit: '\\text{rad/s}', description: 'Corner frequency: \\omega_c = 1 / \\tau' }
      ]
    },
    bullets: [
      'Static Metrics: Error e = y_meas - x_true; Non-Linearity % FSO = (Δy_max / FSO) × 100%.',
      'Step Milestones: 1τ = 63.2%, 2τ = 86.5%, 3τ = 95.0%, 5τ = 99.3%.',
      'Quasi-Static Boundary: τω < 0.1 ⟹ M ≥ 0.995 and φ ≤ 5.7°.'
    ],
    speakerNotes:
      'Review Formula Sheet 1 before exams: master the step equation, ramp error formula, and cutoff relations.',
    takeaway: 'Master formulas for first-order systems: τ = mc/(hA), step y(t) = 1 - e^(-t/τ), ramp lag Δt = τ, cutoff ωc = 1/τ.'
  },
  {
    id: 96,
    title: 'Unit V Master Formula Sheet: Second-Order Dynamics',
    subtitle: 'Resonance, Damping & Frequency Response Formulations',
    sectionTag: 'Unit Summary',
    type: 'formula',
    formulaBlock: {
      equation: '\\omega_n = \\sqrt{\\frac{k}{m}}, \\quad \\zeta = \\frac{c}{2\\sqrt{km}}, \\quad M(r) = \\frac{1}{\\sqrt{(1-r^2)^2 + (2\\zeta r)^2}}, \\quad \\phi(r) = -\\arctan\\left(\\frac{2\\zeta r}{1-r^2}\\right)',
      label: 'Formula Sheet 2',
      description: 'Core mathematical expressions governing second-order canonical parameters, frequency response, and resonance.',
      symbols: [
        { symbol: '\\omega_n', name: 'Natural Frequency', unit: '\\text{rad/s}', description: 'Undamped cyclic angular frequency' },
        { symbol: '\\zeta', name: 'Damping Ratio', unit: '\\text{dimensionless}', description: 'Damping ratio: \\zeta = c / c_c' },
        { symbol: 'M_r', name: 'Resonant Peak', unit: '\\text{dimensionless}', description: 'M_r = 1 / [2\\zeta\\sqrt{1-\\zeta^2}] \\text{ for } \\zeta < 0.707' },
        { symbol: '\\phi(\\omega_n)', name: 'Resonance Phase', unit: '^{\\circ}', description: 'Exactly -90° for all \\zeta > 0' }
      ]
    },
    bullets: [
      'Four Damping Regimes: Undamped (ζ = 0), Underdamped (0 < ζ < 1), Critically Damped (ζ = 1.0), Overdamped (ζ > 1).',
      'Step Metrics: Peak Overshoot Mp = 100 × exp(-πζ / √(1 - ζ²)); Settling Time ts ≈ 4 / (ζ ωn).',
      'Optimal Sensor Tuning: ζ = 0.707 provides maximally flat Butterworth bandwidth with zero resonant peak.'
    ],
    speakerNotes:
      'Review Formula Sheet 2: pay close attention to frequency ratio r = ω/ωn, peak overshoot Mp, and the resonant frequency formula.',
    takeaway: 'Second-order dynamics are defined by ωn = √(k/m), ζ = c/(2√(km)), peak overshoot Mp, and resonance peak Mr.'
  },
  {
    id: 97,
    title: 'Unit V Retrospective: The Instrumentation Engineer’s Mission',
    subtitle: 'From Physical Measurand to Faithful Dynamic Reproduction',
    sectionTag: 'Unit Summary',
    type: 'review',
    bullets: [
      'Dynamic Reality: No physical instrument reacts instantaneously; every sensor possesses inertia, compliance, or thermal mass.',
      'The Golden Rule of Measurement: The instrument must never distort the phenomenon it seeks to measure.',
      'Selecting the Right Sensor: Ensure the sensor’s operating bandwidth (ωc or 0.20·ωn) comfortably exceeds all significant harmonics in the measurand signal.',
      'Engineering Rigor: Combining static calibration with dynamic ODE modeling ensures measurements you can trust in critical medical, aerospace, and industrial applications.'
    ],
    speakerNotes:
      'Conclude Unit V: Students now possess both the mathematical rigor and the physical intuition to select, calibrate, and analyze real measurement systems.',
    takeaway: 'Understanding measurement dynamics ensures instruments faithfully record physical reality without distortion.'
  }
];

export const LECTURE_UNIT5_PY_SOURCE = `#!/usr/bin/env python3
"""
lecture_unit5.py - Vector SVG Figure Generator for Unit V: Response of Measurement Systems
Author: Er. Saroj Chalise
Reference: https://chalisesaroj.github.io/slide/

Generates all 7 high-fidelity vector figures for classroom projection (16:9 aspect ratio, 12 x 6.75 in).
- Saves all static figures as vector .svg files inside figures_unit5/
- Enforces pure white canvas (#ffffff) matching default Quarto reveal.js presentation standards
- Generates publication-grade diagrams for static characteristics, dynamic transient metrics, ODE modeling,
  zero-order potentiometers, first-order thermal step/ramp/bode responses, second-order damping regimes,
  and real-world sensor architectures.
"""

import os
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches

# Ensure output directory exists
FIGURES_DIR = "figures_unit5"
os.makedirs(FIGURES_DIR, exist_ok=True)

# Configure Matplotlib styles for classroom 16:9 projection
plt.rcParams.update({
    "font.family": "sans-serif",
    "font.sans-serif": ["DejaVu Sans", "Arial", "Helvetica"],
    "mathtext.fontset": "cm",
    "figure.figsize": (12, 6.75),   # 16:9 aspect ratio
    "figure.dpi": 150,
    "figure.facecolor": "#ffffff",
    "axes.facecolor": "#ffffff",
    "axes.edgecolor": "#cbd5e1",
    "axes.labelcolor": "#1e293b",
    "xtick.color": "#475569",
    "ytick.color": "#475569",
    "text.color": "#0f172a",
    "grid.color": "#f1f5f9",
    "grid.linestyle": "--",
    "grid.alpha": 0.8,
    "svg.fonttype": "none",
})

print("Generating 7 publication-grade figures for Unit V: Response of Measurement Systems...")

# -----------------------------------------------------------------------------
# Figure 5.1: Static Characteristics
# -----------------------------------------------------------------------------
fig, axs = plt.subplots(1, 3, figsize=(14, 7), facecolor='#ffffff')
plt.subplots_adjust(left=0.06, right=0.96, top=0.88, bottom=0.12, wspace=0.28)

# Panel A: Accuracy vs Precision
ax = axs[0]
ax.set_title("A. Accuracy vs. Precision", fontsize=14, fontweight='bold', color='#1e293b')
circle_outer = plt.Circle((0, 0), 1.0, color='#f1f5f9', ec='#94a3b8', lw=1.5)
circle_mid = plt.Circle((0, 0), 0.65, color='#ffffff', ec='#cbd5e1', lw=1.5)
circle_bull = plt.Circle((0, 0), 0.30, color='#fee2e2', ec='#fca5a5', lw=1.5)
circle_center = plt.Circle((0, 0), 0.08, color='#ef4444')
ax.add_patch(circle_outer)
ax.add_patch(circle_mid)
ax.add_patch(circle_bull)
ax.add_patch(circle_center)
# Tight cluster off-center (High precision, low accuracy)
np.random.seed(42)
pts_x = np.random.normal(0.45, 0.04, 8)
pts_y = np.random.normal(0.45, 0.04, 8)
ax.scatter(pts_x, pts_y, color='#b91c1c', s=35, label='Biased Cluster')
ax.text(0, -1.25, "Low Accuracy, High Precision\\n(Systematic Bias Shift)", ha='center', fontsize=11, fontweight='bold', color='#b45309')
ax.set_xlim(-1.4, 1.4)
ax.set_ylim(-1.4, 1.4)
ax.set_aspect('equal')
ax.axis('off')

# Panel B: Sensitivity & Linearity
ax = axs[1]
ax.set_title("B. Static Sensitivity & Linearity", fontsize=14, fontweight='bold', color='#1e293b')
x_vals = np.linspace(0, 10, 100)
y_ideal = 1.0 * x_vals
y_actual = 1.0 * x_vals + 0.6 * np.sin(x_vals * np.pi / 10)
ax.plot(x_vals, y_ideal, 'k--', lw=1.5, label='Ideal Linear: $y = Kx$')
ax.plot(x_vals, y_actual, color='#2563eb', lw=2.5, label='Actual Calibration')
ax.plot([4, 6, 6], [4.4, 4.4, 6.4], color='#059669', lw=2)
ax.text(5.0, 4.0, "$\\Delta x$", ha='center', fontsize=11, fontweight='bold', color='#059669')
ax.text(6.3, 5.4, "$\\Delta y$", va='center', fontsize=11, fontweight='bold', color='#059669')
ax.text(5.0, 8.5, "$K = \\frac{dy}{dx}$ (Sensitivity)", fontsize=12, fontweight='bold', color='#1d4ed8')
ax.set_xlabel("Input Measurand $x$", fontsize=11, fontweight='bold')
ax.set_ylabel("Output Reading $y$", fontsize=11, fontweight='bold')
ax.legend(loc='lower right', fontsize=10)
ax.grid(True)

# Panel C: Hysteresis & Dead Band
ax = axs[2]
ax.set_title("C. Hysteresis Loop & Dead Band", fontsize=14, fontweight='bold', color='#1e293b')
x_up = np.linspace(1.5, 10, 50)
y_up = 0.9 * (x_up - 1.5)**1.05
x_down = np.linspace(10, 1.5, 50)
y_down = 0.9 * (x_down - 1.5)**1.05 + 1.2 * np.sin((x_down - 1.5) * np.pi / 8.5)
ax.plot(x_up, y_up, color='#16a34a', lw=2.5, label='Loading (Up)')
ax.plot(x_down, y_down, color='#d97706', lw=2.5, linestyle='--', label='Unloading (Down)')
ax.axvspan(0, 1.5, color='#fee2e2', alpha=0.5, label='Dead Band')
ax.annotate('Max Hysteresis $h$', xy=(5.5, 4.2), xytext=(3.0, 6.5),
            arrowprops=dict(arrowstyle='<->', color='#7c3aed', lw=2),
            fontsize=11, fontweight='bold', color='#7c3aed')
ax.set_xlabel("Input Measurand $x$", fontsize=11, fontweight='bold')
ax.set_ylabel("Output Reading $y$", fontsize=11, fontweight='bold')
ax.legend(loc='lower right', fontsize=10)
ax.grid(True)

fig.suptitle("Figure 5.1: Static Characteristics of Measurement Systems", fontsize=16, fontweight='bold', color='#0f172a')
plt.savefig(os.path.join(FIGURES_DIR, "u5_fig1_static_characteristics.svg"), format='svg')
plt.close()
print("Saved u5_fig1_static_characteristics.svg")

# -----------------------------------------------------------------------------
# Figure 5.2: Dynamic Step Response Metrics
# -----------------------------------------------------------------------------
fig, ax = plt.subplots(figsize=(12, 6.75), facecolor='#ffffff')
t = np.linspace(0, 3.5, 400)
omega_n = 5.0
zeta = 0.4
omega_d = omega_n * np.sqrt(1 - zeta**2)
beta = np.arccos(zeta)
y = 1.0 - (np.exp(-zeta * omega_n * t) / np.sqrt(1 - zeta**2)) * np.sin(omega_d * t + beta)

ax.plot(t, y, color='#2563eb', lw=3, label='System Step Response $y(t)$')
ax.axhline(1.0, color='#059669', lw=2, linestyle='--', label='Steady-State $y_{ss} = 1.0$')
ax.axhline(1.02, color='#10b981', lw=1, linestyle=':')
ax.axhline(0.98, color='#10b981', lw=1, linestyle=':')
ax.fill_between(t, 0.98, 1.02, color='#dcfce7', alpha=0.5, label='$\\pm 2\\%$ Settling Band')

# Peak time and overshoot
t_p = np.pi / omega_d
y_max = 1.0 + np.exp(-zeta * np.pi / np.sqrt(1 - zeta**2))
ax.plot(t_p, y_max, 'ro', markersize=8)
ax.annotate(f'Peak Time $t_p = {t_p:.2f}$ s\\nMax Overshoot $M_p = {(y_max-1)*100:.1f}\\%$',
            xy=(t_p, y_max), xytext=(t_p + 0.3, y_max + 0.08),
            arrowprops=dict(arrowstyle='->', color='#dc2626', lw=2),
            fontsize=11, fontweight='bold', color='#dc2626')

# Rise time 10% to 90%
ax.axhline(0.1, color='#94a3b8', linestyle=':', lw=1)
ax.axhline(0.9, color='#94a3b8', linestyle=':', lw=1)
ax.annotate('Rise Time $t_r$ (10% to 90%)', xy=(0.25, 0.5), xytext=(0.5, 0.3),
            arrowprops=dict(arrowstyle='->', color='#7c3aed', lw=1.5),
            fontsize=11, fontweight='bold', color='#7c3aed')

# Settling time
t_s = 4.0 / (zeta * omega_n)
ax.axvline(t_s, color='#047857', linestyle='--', lw=1.5)
ax.text(t_s + 0.05, 0.4, f'Settling Time $t_s (2\\%) \\approx \\frac{{4}}{{\\zeta \\omega_n}} = {t_s:.2f}$ s',
        fontsize=11, fontweight='bold', color='#047857')

ax.set_title("Figure 5.2: Underdamped Second-Order Step Response & Transient Metrics", fontsize=15, fontweight='bold', color='#0f172a')
ax.set_xlabel("Time $t$ (seconds)", fontsize=12, fontweight='bold')
ax.set_ylabel("Normalized Response $y(t)$", fontsize=12, fontweight='bold')
ax.set_xlim(0, 3.5)
ax.set_ylim(0, 1.45)
ax.grid(True)
ax.legend(loc='lower right', fontsize=11)
plt.savefig(os.path.join(FIGURES_DIR, "u5_fig2_dynamic_characteristics_rise_delay.svg"), format='svg')
plt.close()
print("Saved u5_fig2_dynamic_characteristics_rise_delay.svg")

# -----------------------------------------------------------------------------
# Figure 5.5: First-Order Step, Ramp & Frequency
# -----------------------------------------------------------------------------
fig, axs = plt.subplots(1, 3, figsize=(15, 6.75), facecolor='#ffffff')
plt.subplots_adjust(left=0.06, right=0.96, top=0.88, bottom=0.12, wspace=0.28)

tau = 1.0
t_axis = np.linspace(0, 5, 200)

# Step
axs[0].set_title("A. Step Response: $y(t) = 1 - e^{-t/\\tau}$", fontsize=13, fontweight='bold', color='#1e293b')
y_step = 1.0 - np.exp(-t_axis / tau)
axs[0].plot(t_axis, y_step, color='#2563eb', lw=3)
axs[0].axhline(1.0, color='#059669', linestyle='--', lw=1.5)
axs[0].plot([1, 1], [0, 0.632], 'r--', lw=1.5)
axs[0].plot(1, 0.632, 'ro')
axs[0].text(1.1, 0.55, "$1\\tau: 63.2\\%$", color='#dc2626', fontweight='bold', fontsize=11)
axs[0].plot(3, 0.950, 'go')
axs[0].text(2.6, 0.88, "$3\\tau: 95.0\\%$", color='#059669', fontweight='bold', fontsize=11)
axs[0].set_xlabel("Time ($t/\\tau$)", fontsize=11, fontweight='bold')
axs[0].set_ylabel("Response $y(t)$", fontsize=11, fontweight='bold')
axs[0].grid(True)

# Ramp
axs[1].set_title("B. Ramp Response: Steady-State Lag", fontsize=13, fontweight='bold', color='#1e293b')
R = 1.0
x_ramp = R * t_axis
y_ramp = R * (t_axis - tau + tau * np.exp(-t_axis / tau))
axs[1].plot(t_axis, x_ramp, 'k--', lw=2, label='Ideal Input $R\\cdot t$')
axs[1].plot(t_axis, y_ramp, color='#7c3aed', lw=3, label='Output $y(t)$')
axs[1].annotate('Time Lag $\\Delta t = \\tau$', xy=(3.0, 3.0), xytext=(2.0, 2.0),
                arrowprops=dict(arrowstyle='<->', color='#dc2626', lw=2),
                fontsize=11, fontweight='bold', color='#dc2626')
axs[1].set_xlabel("Time ($t$)", fontsize=11, fontweight='bold')
axs[1].set_ylabel("Response", fontsize=11, fontweight='bold')
axs[1].legend(loc='upper left', fontsize=10)
axs[1].grid(True)

# Frequency Response Bode
axs[2].set_title("C. Harmonic Attenuation & Phase", fontsize=13, fontweight='bold', color='#1e293b')
omega = np.logspace(-1, 2, 200)
M = 1.0 / np.sqrt(1 + (omega * tau)**2)
axs[2].semilogx(omega, 20 * np.log10(M), color='#2563eb', lw=2.5, label='Magnitude (dB)')
axs[2].axvline(1.0 / tau, color='#dc2626', linestyle=':', lw=2)
axs[2].text(1.2, -6, "Cutoff $\\omega_c = 1/\\tau$\\n(-3 dB)", color='#dc2626', fontweight='bold', fontsize=10)
axs[2].set_xlabel("Frequency $\\omega$ (rad/s)", fontsize=11, fontweight='bold')
axs[2].set_ylabel("Magnitude (dB)", fontsize=11, fontweight='bold')
axs[2].grid(True, which="both")

fig.suptitle("Figure 5.5: First-Order System Dynamic Behavior across Time and Frequency", fontsize=15, fontweight='bold')
plt.savefig(os.path.join(FIGURES_DIR, "u5_fig5_first_order_step_ramp_freq.svg"), format='svg')
plt.close()
print("Saved u5_fig5_first_order_step_ramp_freq.svg")

# -----------------------------------------------------------------------------
# Figure 5.6: Second-Order Damping Regimes
# -----------------------------------------------------------------------------
fig, axs = plt.subplots(1, 2, figsize=(14, 6.75), facecolor='#ffffff')
plt.subplots_adjust(left=0.08, right=0.95, top=0.88, bottom=0.12, wspace=0.25)

# Transient Step Regimes
t = np.linspace(0, 12, 300)
wn = 1.0
zetas = [0.0, 0.2, 0.707, 1.0, 2.0]
colors = ['#dc2626', '#2563eb', '#047857', '#d97706', '#64748b']
labels = ['$\\zeta = 0$ (Undamped)', '$\\zeta = 0.2$ (Underdamped)', '$\\zeta = 0.707$ (Optimal)', '$\\zeta = 1.0$ (Critically Damped)', '$\\zeta = 2.0$ (Overdamped)']

axs[0].set_title("A. Step Responses for Varied $\\zeta$", fontsize=13, fontweight='bold', color='#1e293b')
for z, c, lbl in zip(zetas, colors, labels):
    if z == 0:
        y = 1.0 - np.cos(wn * t)
    elif z < 1.0:
        wd = wn * np.sqrt(1 - z**2)
        b = np.arccos(z)
        y = 1.0 - (np.exp(-z * wn * t) / np.sqrt(1 - z**2)) * np.sin(wd * t + b)
    elif z == 1.0:
        y = 1.0 - (1.0 + wn * t) * np.exp(-wn * t)
    else:
        s1 = -z * wn + wn * np.sqrt(z**2 - 1)
        s2 = -z * wn - wn * np.sqrt(z**2 - 1)
        y = 1.0 - (s2 * np.exp(s1 * t) - s1 * np.exp(s2 * t)) / (s2 - s1)
    axs[0].plot(t, y, color=c, lw=2.2, label=lbl)

axs[0].axhline(1.0, color='#94a3b8', linestyle='--', lw=1.5)
axs[0].set_xlabel("Normalized Time $\\omega_n t$", fontsize=11, fontweight='bold')
axs[0].set_ylabel("Response $y(t)$", fontsize=11, fontweight='bold')
axs[0].legend(loc='lower right', fontsize=9.5)
axs[0].grid(True)

# Frequency Response Curves
r = np.linspace(0.01, 2.5, 300)
axs[1].set_title("B. Resonance Magnification Ratio $M/K$", fontsize=13, fontweight='bold', color='#1e293b')
for z, c, lbl in zip(zetas[:4], colors[:4], labels[:4]):
    if z == 0:
        M = 1.0 / np.abs(1 - r**2)
        M[M > 6] = np.nan
    else:
        M = 1.0 / np.sqrt((1 - r**2)**2 + (2 * z * r)**2)
    axs[1].plot(r, M, color=c, lw=2.2, label=lbl)

axs[1].set_xlabel("Frequency Ratio $r = \\omega / \\omega_n$", fontsize=11, fontweight='bold')
axs[1].set_ylabel("Magnification Ratio $M(\\omega)/K$", fontsize=11, fontweight='bold')
axs[1].set_ylim(0, 4.0)
axs[1].legend(loc='upper right', fontsize=9.5)
axs[1].grid(True)

fig.suptitle("Figure 5.6: Second-Order System Dynamics: Damping Regimes & Resonant Amplification", fontsize=15, fontweight='bold')
plt.savefig(os.path.join(FIGURES_DIR, "u5_fig6_second_order_damping_regimes.svg"), format='svg')
plt.close()
print("Saved u5_fig6_second_order_damping_regimes.svg")

print("All Unit V figures generated successfully in figures_unit5/")
`;

export const LECTURE_UNIT5_QMD_SOURCE = `---
title: "Unit V: Response of Measurement Systems"
subtitle: "Static & Dynamic Characteristics · Mathematical Modeling · Zero, First & Second-Order Systems (8 Hours)"
author: "Er. Saroj Chalise"
institute: "Department of Mechanical & Automobile Engineering"
format:
  revealjs:
    theme: default
    slide-number: true
    chalkboard: true
    transition: slide
    overview: true
    width: 1600
    height: 900
    margin: 0.05
    navigation-mode: linear
    controls: true
    progress: true
    touch: true
    hash-type: number
---

## Unit V: Response of Measurement Systems {.center}

::: {.r-fit-text}
**Unit V: Response of Measurement Systems**
:::

### Static & Dynamic Characteristics · Mathematical Modeling · Zero, First & Second-Order Systems (8 Hours)

**Instructor:** Er. Saroj Chalise  
*Reference Curriculum:* [chalisesaroj.github.io/slide](https://chalisesaroj.github.io/slide/)  
*Reference Text:* Corona, E. (1999), *Dynamic Response of Measurement Systems*, ME231 Measurements Laboratory

---

## Unit V Roadmap & Syllabus Alignment

1. **5.1 Static Characteristics:** Accuracy, precision, static sensitivity $K$, linearity, hysteresis, dead band, threshold
2. **5.2 Dynamic Characteristics:** Rise time $t_r$, delay time $t_d$, peak time $t_p$, percentage overshoot $M_p$, settling time $t_s$
3. **5.3 Mathematical Modeling:** Generalized linear constant-coefficient ODEs, modeling philosophy, superposition principle
4. **5.4 Zero-Order Systems:** Instantaneous algebraic transfer $y(t) = K f(t)$, quasi-static regime $\\tau\\omega < 0.1$, office room thermometer
5. **5.5 First-Order Systems:** Time constant $\\tau$, oral thermometer first-principles derivation ($m c_v \\dot{T} = h A(T_1 - T)$), 3-minute medical rule ($5\\tau$), ramp lag $\\Delta t = \\tau$, harmonic response & Bode cutoff
6. **5.6 Second-Order Systems:** Grocery produce scale derivation ($m \\ddot{y} + c \\dot{y} + k y = W$), natural frequency $\\omega_n$, damping ratio $\\zeta$, 4 damping regimes, resonance, playground swing & unbalanced car tire analogies, optimal $\\zeta = 0.707$
7. **5.7 Real-World Sensor Taxonomy & Synthesis:** Examination formula sheet & engineering selection criteria

---

## 5.1 Static Characteristics of Measurement Systems

::: {.columns}
::: {.column width="50%"}
### Steady-State Performance
- **Accuracy:** Closeness of the indicated value to the true standard.
- **Precision:** Repeatability among repeated measurements under identical conditions.
- **Sensitivity ($K$):** Ratio of change in output to change in input measurand:
  $$K = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\frac{dy}{dx}$$
- **Resolution:** Minimum detectable increment in the input measurand.
:::

::: {.column width="50%"}
### Non-Idealities & Errors
- **Linearity:** Maximum deviation of actual calibration from the ideal straight line (% FSO).
- **Hysteresis:** Difference in output between increasing (loading) and decreasing (unloading) input cycles.
- **Dead Band:** Range of input values for which output remains zero.
- **Threshold:** Minimum input required to initiate an observable output change.
:::
:::

---

## Figure 5.1: Static Characteristics Architecture

![](figures_unit5/u5_fig1_static_characteristics.svg){fig-align="center" width="100%"}

---

## 5.2 Dynamic Characteristics: Transient Response Metrics

::: {.columns}
::: {.column width="50%"}
### Speed of Response Metrics
- **Delay Time ($t_d$):** Time elapsed to reach $50\\%$ of the final steady-state value $y_{ss}$.
- **Rise Time ($t_r$):** Time taken to rise from $10\\%$ to $90\\%$ (overdamped) or $0\\%$ to $100\\%$ (underdamped).
- **Peak Time ($t_p$):** Time to attain the very first peak of overshoot:
  $$t_p = \\frac{\\pi}{\\omega_d} = \\frac{\\pi}{\\omega_n \\sqrt{1 - \\zeta^2}}$$
:::

::: {.column width="50%"}
### Fidelity & Stability Metrics
- **Maximum Overshoot ($M_p$):** Peak normalized overshoot:
  $$M_p = \\frac{y(t_p) - y_{ss}}{y_{ss}} \\times 100\\% = \\exp\\left( -\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}} \\right) \\times 100\\%$$
- **Settling Time ($t_s$):** Time required to remain within an error envelope around $y_{ss}$:
  - $\\pm 2\\%$ band: $t_s \\approx \\frac{4}{\\zeta \\omega_n} = 4\\tau_{envelope}$
  - $\\pm 5\\%$ band: $t_s \\approx \\frac{3}{\\zeta \\omega_n} = 3\\tau_{envelope}$
:::
:::

---

## Figure 5.2: Dynamic Step Response Metrics

![](figures_unit5/u5_fig2_dynamic_characteristics_rise_delay.svg){fig-align="center" width="100%"}

---

## 5.3 Mathematical Modeling of Measurement Systems

Generalized linear constant-coefficient ordinary differential equation (ODE):

$$a_n \\frac{d^n y}{dt^n} + a_{n-1} \\frac{d^{n-1} y}{dt^{n-1}} + \\dots + a_1 \\frac{dy}{dt} + a_0 y(t) = f(t)$$

::: {.columns}
::: {.column width="50%"}
### Modeling Philosophy (Corona ME231)
- The dynamic order of a sensor is not fixed solely by its physical hardware, but by the **relative speed** of the input excitation $f(t)$ compared to the sensor's internal response speed.
- A physical sensor with internal inertia and damping acts as zero-order if input fluctuations are slow enough that dynamic lag is negligible.
:::

::: {.column width="50%"}
### Principle of Superposition
Because the governing ODE is linear:
$$\\mathcal{L}\\left\\{ \\sum_{k=1}^m c_k f_k(t) \\right\\} = \\sum_{k=1}^m c_k y_k(t)$$
- Allows decomposing arbitrary complex transient signals into Fourier harmonic components and summing individual responses.
:::
:::

---

## Figure 5.3: Generalized Mathematical Taxonomy & Corona Archetypes

![](figures_unit5/u5_fig3_mathematical_ode_models.svg){fig-align="center" width="100%"}

---

## 5.4 Zero-Order Systems: Properties & Response

Canonical equation:
$$a_0 y(t) = f(t) \\implies y(t) = K f(t), \\quad \\text{where } K = \\frac{1}{a_0}$$

::: {.columns}
::: {.column width="50%"}
### Operational Properties
- **Instantaneous response:** Zero delay time ($t_d = 0$), zero rise time ($t_r = 0$).
- **No phase distortion:** Magnitude ratio $M(\\omega) = K$, phase angle $\\phi(\\omega) = 0^{\\circ}$ for all frequencies.
- Static calibration alone is completely sufficient to predict dynamic behavior.
:::

::: {.column width="50%"}
### Corona ME231 Canonical Example
- **Office Room Thermometer:** Room air temperature varies gradually over hours ($f(t)$).
- Thermometer internal time constant $\\tau \\sim 30\\text{ s}$.
- Input frequency $\\omega \\approx 2\\pi / (24 \\times 3600\\text{ s}) \\approx 7.3 \\times 10^{-5}\\text{ rad/s}$.
- Product $\\tau \\omega \\approx 0.0022 \\ll 0.1$: Dynamic lag is imperceptible, so the thermometer behaves as a pure zero-order instrument!
:::
:::

---

## Figure 5.4: Zero-Order Systems & The Quasi-Static Regime

![](figures_unit5/u5_fig4_zero_order_system.svg){fig-align="center" width="100%"}

---

## 5.5 First-Order Systems: Physical Derivation (Clinical Thermometer)

Consider a glass bulb clinical thermometer placed inside a patient's mouth:

::: {.columns}
::: {.column width="50%"}
### First Law Energy Balance
Rate of heat stored in bulb = Rate of convective heat influx from oral cavity:
$$\\frac{dE}{dt} = \\frac{dQ}{dt} \\implies m c_v \\frac{dT}{dt} = h A (T_1 - T)$$

Rearranging into canonical standard form:
$$\\frac{m c_v}{h A} \\frac{dT}{dt} + T(t) = T_1$$
:::

::: {.column width="50%"}
### Canonical Parameters
- **Time Constant:** $\\tau = \\frac{m c_v}{h A}$ (seconds)
  - Depends on mass $m$, specific heat $c_v$, convective film coefficient $h$, and surface area $A$.
- **Static Sensitivity:** $K = 1.0\\text{ }^{\\circ}\\text{C/}^{\\circ}\\text{C}$.
- **Standard ODE:**
  $$\\tau \\frac{dy}{dt} + y(t) = K f(t)$$
:::
:::

---

## 5.5 First-Order System Step Response & The 3-Minute Rule

For an initial reading $y_0 = 0$ subjected to a sudden step $F_1$:
$$y(t) = K F_1 \\left( 1 - e^{-t/\\tau} \\right)$$

::: {.columns}
::: {.column width="50%"}
### Normalized Milestones
- **At $t = \\tau$:** $y(\\tau) = K F_1 (1 - e^{-1}) = 63.2\\%$ of steady state.
- **At $t = 2\\tau$:** $86.5\\%$ reached.
- **At $t = 3\\tau$:** $95.0\\%$ reached ($\\pm 5\\%$ settling).
- **At $t = 4\\tau$:** $98.2\\%$ reached ($\\pm 2\\%$ settling).
- **At $t = 5\\tau$:** $99.3\\%$ reached ($< 1\\%$ residual error).
:::

::: {.column width="50%"}
### The Clinical 3-Minute Rule (Corona ME231)
- Medical protocols instruct patients to hold a glass mercury/alcohol thermometer under their tongue for **3 minutes** ($180\\text{ s}$).
- Why? 3 minutes corresponds to $5\\tau$ for the glass bulb:
  $$5\\tau = 180\\text{ s} \\implies \\tau \\approx 36\\text{ s} = 0.6\\text{ min}$$
- Premature withdrawal at 1 minute ($t \\approx 1.7\\tau$) yields an indicated temperature of only $\\approx 81\\%$, misdiagnosing fever!
:::
:::

---

## 5.5 First-Order Ramp & Harmonic Responses

::: {.columns}
::: {.column width="50%"}
### Ramp Input: $f(t) = R \\cdot t$
$$y(t) = K R \\left[ t - \\tau + \\tau e^{-t/\\tau} \\right]$$
- Steady-state time lag: $\\Delta t = \\tau$
- Dynamic measurement error: $e_{ss} = K R \\tau$
- The sensor indicates what the measurand *was* $\\tau$ seconds ago!
:::

::: {.column width="50%"}
### Harmonic Input: $f(t) = A \\sin(\\omega t)$
$$y_{ss}(t) = M A \\sin(\\omega t - \\phi)$$
- **Magnification Ratio:** $M = \\frac{1}{\\sqrt{1 + (\\tau \\omega)^2}}$
- **Phase Lag:** $\\phi = \\arctan(\\tau \\omega)$
- **Cutoff Frequency:** $\\omega_c = 1/\\tau$ ($-3\\text{ dB}$, $\\phi = 45^{\\circ}$)
- **Quasi-Static Regime:** $\\tau\\omega < 0.1 \\implies M \\ge 0.995, \\phi \\le 5.7^{\\circ}$
:::
:::

---

## Figure 5.5: First-Order Step, Ramp & Frequency Dynamics

![](figures_unit5/u5_fig5_first_order_step_ramp_freq.svg){fig-align="center" width="100%"}

---

## 5.6 Second-Order Systems: Physical Derivation (Produce Scale)

Consider a grocery store produce scale loaded with vegetables of mass $m$:

::: {.columns}
::: {.column width="50%"}
### Mechanical Formulation (Corona ME231)
- **Mass $m$:** Weighing pan plus vegetables.
- **Spring $k$:** Calibrated restoring spring.
- **Dashpot $c$:** Fluid piston damper suppressing violent oscillation.

Applying Newton's Second Law ($\sum F_y = m \\ddot{y}$):
$$W - c \\dot{y} - k y = m \\ddot{y} \\implies m \\ddot{y} + c \\dot{y} + k y = W$$
:::

::: {.column width="50%"}
### Canonical Standard Form
Divide by spring stiffness $k$:
$$\\frac{m}{k} \\ddot{y} + \\frac{c}{k} \\dot{y} + y = \\frac{1}{k} W$$

Define standard canonical parameters:
- **Natural Frequency:** $\\omega_n = \\sqrt{\\frac{k}{m}}$
- **Damping Ratio:** $\\zeta = \\frac{c}{2\\sqrt{k m}}$
- **Static Sensitivity:** $K = \\frac{1}{k}$
:::
:::

---

## 5.6 Second-Order Step Regimes: Produce Scale Behavior

$$\\frac{1}{\\omega_n^2} \\ddot{y} + \\frac{2\\zeta}{\\omega_n} \\dot{y} + y = K F_1$$

::: {.columns}
::: {.column width="50%"}
### Four Damping Regimes
1. **Undamped ($\\zeta = 0$):** Dial pointer oscillates endlessly between $0$ and $2 K F_1$.
2. **Underdamped ($0 < \\zeta < 1$):** Pointer oscillates with decaying envelope at damped natural frequency:
   $$\\omega_d = \\omega_n \\sqrt{1 - \\zeta^2}$$
3. **Critically Damped ($\\zeta = 1$):** Pointer settles in fastest possible time with **zero overshoot** ($M_p = 0$).
4. **Overdamped ($\\zeta > 1$):** Heavy oil dashpot causes pointer to creep sluggishly.
:::

::: {.column width="50%"}
### Engineering Design Goal
- For the grocery store scale, **critical damping ($\\zeta = 1$)** or slight underdamping ($\\zeta \\approx 0.7$) is optimal:
  - If $\\zeta = 0.2$: Shopper must wait 10 seconds for pointer wobble to die down.
  - If $\\zeta = 3.0$: Shopper gets impatient waiting for pointer to slowly crawl to 5 kg.
  - If $\\zeta = 1.0$: Pointer snaps swiftly to the exact weight without wobble!
:::
:::

---

## 5.6 Second-Order Harmonic Response & Resonance

For sinusoidal excitation $f(t) = A \\sin(\\omega t)$:
$$M = \\frac{y_{ss0}}{K A} = \\frac{1}{\\sqrt{\\left[1 - \\left(\\frac{\\omega}{\\omega_n}\\right)^2\\right]^2 + \\left[2\\zeta \\frac{\\omega}{\\omega_n}\\right]^2}}, \\quad \\phi = \\arctan\\left( \\frac{2\\zeta \\frac{\\omega}{\\omega_n}}{1 - \\left(\\frac{\\omega}{\\omega_n}\\right)^2} \\right)$$

::: {.columns}
::: {.column width="50%"}
### Resonance Properties
- Resonant magnification occurs **only if $\\zeta < 1/\\sqrt{2} \\approx 0.707$**.
- Peak resonance frequency:
  $$\\omega_r = \\omega_n \\sqrt{1 - 2\\zeta^2}$$
- At $\\omega = \\omega_n$, phase lag is **strictly $90^{\\circ}$** for all damping ratios $\\zeta$.
:::

::: {.column width="50%"}
### Real-World Resonance Analogies
- **Child on a Swing (Corona ME231):** Pushing once per cycle in sync with natural frequency ($\\omega \\approx \\omega_n$) causes large swing amplitudes with modest effort.
- **Unbalanced Car Wheel:** Severe vibration felt through steering wheel only at specific highway speed where wheel rotation matches suspension $\\omega_n$.
:::
:::

---

## 5.6 Optimal Instrument Damping: $\\zeta = 0.707$

Why is $\\zeta = 0.707$ ($1/\\sqrt{2}$) the universal target for sensor designers?

::: {.columns}
::: {.column width="50%"}
### Bandwidth Maximization
- Prevents resonant peaking entirely ($dM/d\\omega \\le 0$ everywhere).
- Flat amplitude response ($M \\approx 1.0 \\pm 5\\%$) up to $\\omega \\approx 0.6 \\omega_n$.
- Provides maximum usable measurement bandwidth among all damping ratios.
:::

::: {.column width="50%"}
### Linear Phase Lag
- Phase lag $\\phi(\\omega)$ is nearly linear with frequency up to $\\omega \\approx 0.6 \\omega_n$.
- Constant time delay across harmonics:
  $$\\Delta t = \\frac{\\phi(\\omega)}{\\omega} \\approx \\text{constant}$$
- Multi-frequency complex signals pass through without waveform shape distortion!
:::
:::

---

## Figure 5.6: Second-Order Damping Regimes & Resonance

![](figures_unit5/u5_fig6_second_order_damping_regimes.svg){fig-align="center" width="100%"}

---

## 5.7 Comprehensive Sensor Taxonomy

| Order | Physical Storage Elements | Governing Canonical Equation | Canonical Examples |
|:---:|:---|:---|:---|
| **0th** | None (pure resistive / elastic) | $y(t) = K f(t)$ | Potentiometers, strain gauge bridges, office thermometer (quasi-static) |
| **1st** | Single energy reservoir (thermal mass, capacitance) | $\\tau \\dot{y} + y = K f(t)$ | Clinical oral thermometers, thermocouples, RTDs, RC low-pass filters |
| **2nd** | Dual opposing energy reservoirs (mass + spring, inductance + capacitance) | $\\frac{1}{\\omega_n^2}\\ddot{y} + \\frac{2\\zeta}{\\omega_n}\\dot{y} + y = K f(t)$ | Grocery produce scales, accelerometers, pressure transducers, D'Arsonval meters |

---

## Figure 5.7: Real-World Sensor Taxonomy

![](figures_unit5/u5_fig7_real_world_systems_zoo.svg){fig-align="center" width="100%"}

---

## Examination Formula Summary Sheet

| Metric / Parameter | First-Order System | Second-Order System (Underdamped, $\\zeta < 1$) |
|:---|:---:|:---:|
| **Canonical ODE** | $\\tau \\dot{y} + y = K f(t)$ | $\\frac{1}{\\omega_n^2} \\ddot{y} + \\frac{2\\zeta}{\\omega_n} \\dot{y} + y = K f(t)$ |
| **Transfer Function $G(s)$** | $\\frac{K}{\\tau s + 1}$ | $\\frac{K}{\\frac{s^2}{\\omega_n^2} + \\frac{2\\zeta s}{\\omega_n} + 1}$ |
| **Step Response $y(t)$** | $K F_1 (1 - e^{-t/\\tau})$ | $K F_1 \\left[ 1 - \\frac{e^{-\\zeta \\omega_n t}}{\\sqrt{1-\\zeta^2}} \\sin(\\omega_d t + \\phi) \\right]$ |
| **Damped Natural Frequency** | N/A | $\\omega_d = \\omega_n \\sqrt{1 - \\zeta^2}$ |
| **Peak Time $t_p$** | N/A | $t_p = \\frac{\\pi}{\\omega_d} = \\frac{\\pi}{\\omega_n \\sqrt{1-\\zeta^2}}$ |
| **Maximum Overshoot $M_p$** | $0\\%$ | $M_p = \\exp\\left( -\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}} \\right) \\times 100\\%$ |
| **Settling Time ($2\\%$)** | $t_s = 4\\tau$ | $t_s \\approx \\frac{4}{\\zeta \\omega_n}$ |
| **Ramp Time Lag $\\Delta t$** | $\\Delta t = \\tau$ | $\\Delta t = \\frac{2\\zeta}{\\omega_n}$ |
| **Bode Magnification $M$** | $\\frac{1}{\\sqrt{1 + (\\tau\\omega)^2}}$ | $\\frac{1}{\\sqrt{[1 - (\\omega/\\omega_n)^2]^2 + [2\\zeta\\omega/\\omega_n]^2}}$ |
| **Phase Lag $\\phi(\\omega)$** | $\\arctan(\\tau\\omega)$ | $\\arctan\\left( \\frac{2\\zeta\\omega/\\omega_n}{1 - (\\omega/\\omega_n)^2} \\right)$ |
`;

export const RUN_INSTRUCTIONS_UNIT5 = `================================================================================
CLASSROOM PRESENTATION EXECUTION INSTRUCTIONS
Unit V: Response of Measurement Systems (8 hrs)
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
   python lecture_unit5.py

   Expected output:
   - Creates figures_unit5/ directory
   - Generates u5_fig1_static_characteristics.svg
   - Generates u5_fig2_dynamic_characteristics_rise_delay.svg
   - Generates u5_fig3_mathematical_ode_models.svg
   - Generates u5_fig4_zero_order_system.svg
   - Generates u5_fig5_first_order_step_ramp_freq.svg
   - Generates u5_fig6_second_order_damping_regimes.svg
   - Generates u5_fig7_real_world_systems_zoo.svg

4. STEP 3: RENDER AND PRESENT REVEAL.JS SLIDES
   quarto preview lecture_unit5.qmd

5. PRESENTER CONTROLS IN REVEAL.JS:
   - Press 'F' for Fullscreen projection
   - Press 'S' for Presenter Console with synchronized speaker notes & timer
   - Press 'O' for Slide Overview thumbnail grid
   - Press 'B' to Pause/Blank presentation screen
================================================================================
`;
