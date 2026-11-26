/**
 * Unit I: Fundamentals of Measurement Systems (6 hrs)
 * Complete Classroom-Ready Teaching Presentation
 * Author: Er. Saroj Chalise
 * Reference: https://chalisesaroj.github.io/slide/
 *
 * Pedagogical Architecture:
 * - Strictly one major concept per slide (no cognitive overload).
 * - Simple, natural English with everyday physical analogies (automotive, workshop, household).
 * - No unexplained technical terms; concepts built from real-world situations.
 * - Clean open LaTeX KaTeX display formulas (zero decorative boxes/borders).
 * - All vector SVGs are 100% free from embedded formulas and walls of text.
 * - Comprehensive worked examples and check-understanding formative quizzes.
 */

import { SlideData } from '../types/chapterDeck';
export type { SlideData } from '../types/chapterDeck';

export const SLIDES_DATA: SlideData[] = [
  // =========================================================================
  // COURSE OPENING & ROADMAP
  // =========================================================================
  {
    id: 1,
    title: 'Fundamentals of Measurement Systems',
    subtitle: 'Methods · Analog vs. Digital · DAQ Pipeline · Calibration · Uncertainty · Intrusive Sensing · Electrical Safety',
    sectionTag: 'Unit I Overview',
    type: 'title',
    imageUrl: '/assets/unit1/unit1_metrology_lab.jpg',
    imageCaption: 'Precision Metrology Bench: Deadweight pressure calibrator, 6.5-digit DMM, oscilloscope & certified gauges',
    speakerNotes:
      'Good morning students. Welcome to Unit I: Fundamentals of Measurement Systems. Today we begin our journey into how engineers measure the physical world—from temperatures inside a motorcycle engine to electrical signals in factory robots. Everything in modern industry depends on trustworthy measurements.',
    takeaway: 'Before you can control or improve an engineering system, you must be able to measure it accurately.'
  },
  {
    id: 2,
    title: 'Unit I Lecture Roadmap',
    subtitle: '7 Core Topics Covered Step-by-Step',
    sectionTag: 'Lecture Roadmap',
    type: 'roadmap',
    columns: {
      left: [
        '1.1 Methods of Measurements: Direct, Deflection & Null-Balance',
        '1.2 Analog vs. Digital Instruments: Resolution, Quantization & Sampling',
        '1.3 Data Acquisition Pipeline (DAQ): From Sensor to Computer Display',
        '1.4 Static Calibration: Sensitivity, Drift, Hysteresis, Single/Two/Multi-Point Methods'
      ],
      right: [
        '1.5 Measurement Errors & Uncertainty: Gross, Systematic, Random & ISO GUM',
        '1.6 Intrusive vs. Non-Intrusive Sensing: Circuit & Flow Loading Effects',
        '1.7 Electrical Safety: Ground Loops, Galvanic Isolation & IEC CAT Ratings'
      ]
    },
    speakerNotes:
      'Here is our road map for Unit I. We will take each topic one step at a time. We will never rush into tough math before first understanding the real machine or physical situation in plain words.',
    takeaway: 'Every section covers one vital link in the engineering measurement chain.'
  },
  {
    id: 3,
    title: 'What You Will Learn in Unit I',
    subtitle: 'Key Competencies & Practical Skills',
    sectionTag: 'Learning Objectives',
    type: 'objectives',
    bullets: [
      'Choose between direct, deflection, and null-balance measurement tools for any workshop job.',
      'Explain the difference between continuous analog dials and digital LCD readouts.',
      'Calculate the digital voltage resolution of an Analog-to-Digital Converter (ADC).',
      'Trace how a physical quantity travels through an entire Data Acquisition (DAQ) system.',
      'Read and interpret a calibration curve, including sensitivity slope and hysteresis lag.',
      'Separate systematic zero error from random noise using basic statistics (mean and uncertainty).',
      'Prevent voltmeter loading and stay safe around hazardous electrical ground loops.'
    ],
    speakerNotes:
      'These objectives match our engineering syllabus. Notice that everything here connects directly to equipment you will see in real industrial workshops and test labs.',
    takeaway: 'Our goal is practical engineering understanding: knowing how instruments work, how they fail, and how to get correct readings.'
  },
  {
    id: 4,
    title: 'Why Measurement Matters in Everyday Life',
    subtitle: 'Every Engineering Decision Relies on Good Data',
    sectionTag: 'Real-World Context',
    type: 'concept',
    bullets: [
      'A motorcycle speedometer tells you if you are traveling safely within the speed limit.',
      'A hospital patient monitor measures pulse rate and body temperature to alert doctors instantly.',
      'A petrol pump meter measures the exact volume of fuel going into your vehicle tank.',
      'If any of these measuring devices give the wrong number, bad decisions follow—engines fail, drivers get fined, or patients are put in danger.'
    ],
    speakerNotes:
      'Ask students: "Have you ever weighed yourself on a bathroom scale that read 2 kg even when no one was standing on it?" That is a measurement error. In engineering, lives and expensive machines depend on correct readings.',
    takeaway: 'In engineering, an incorrect measurement is often worse than no measurement at all.'
  },
  {
    id: 5,
    title: 'The Measurement Chain: Physical World to Decision',
    subtitle: 'How Physical Action Becomes Useful Information',
    sectionTag: 'The Big Picture',
    type: 'concept',
    bullets: [
      'Step 1: Physical Reality — Something exists in nature: heat in a boiler, pressure in a pipe, or weight on a crane.',
      'Step 2: Sensing — An instrument touches or senses that physical change.',
      'Step 3: Conversion — The instrument turns the physical change into a pointer movement or an electrical voltage.',
      'Step 4: Display & Decision — A human reads the dial or a computer activates an emergency shut-off valve.'
    ],
    speakerNotes:
      'Emphasize that a sensor is just a translator. It translates physical energy into something humans or computers can interpret.',
    takeaway: 'An unbroken chain connects the physical event, the sensor, the electrical signal, and the final engineering decision.'
  },

  // =========================================================================
  // SECTION 1.1: METHODS OF MEASUREMENTS
  // =========================================================================
  {
    id: 6,
    title: '1.1 Methods of Measurements',
    subtitle: 'Section 1.1 · Direct Comparison · Deflection · Null-Balance',
    sectionTag: '1.1 Methods',
    type: 'section-divider',
    speakerNotes:
      'Now let us enter Section 1.1: Methods of Measurements. How do we physically make a measurement? There are three fundamental methods: direct comparison, deflection, and null-balance.',
    takeaway: 'All measurements compare an unknown quantity against a known standard.'
  },
  {
    id: 7,
    title: 'What Does "Measuring" Actually Mean?',
    subtitle: 'Comparing an Unknown Against a Known Standard',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'Imagine you want to buy 2 meters of electric wire from a hardware shop.',
      'The shopkeeper pulls wire from a bundle and aligns it against a marked metal stick (a 1-meter ruler).',
      'The length of the wire is the "unknown quantity" (we call this the measurand).',
      'The metal stick is the "known standard".',
      'Measurement is simply the act of comparing an unknown physical quantity with a predefined reference standard.'
    ],
    speakerNotes:
      'Keep it very simple. Define the word "measurand" in plain language: it just means the unknown thing you want to measure.',
    takeaway: 'Measurand = The physical quantity you want to find out.'
  },
  {
    id: 8,
    title: 'Method 1: Direct Comparison',
    subtitle: 'Side-by-Side Comparison with Zero Energy Transduction',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'In direct comparison, you place the unknown quantity directly against a standard of the exact same kind.',
      'Measuring the width of a steel plate with a steel rule is direct comparison: length is compared directly with length.',
      'Measuring a sack of potatoes with an equal-arm balance by adding 1 kg iron weights to the other pan is direct comparison: mass is compared directly with mass.',
      'No motors, no batteries, and no complex electrical circuits are involved.'
    ],
    speakerNotes:
      'Direct comparison is the oldest and simplest method known to humanity. It requires zero electrical power.',
    takeaway: 'Direct comparison compares like with like: length against length, mass against mass.'
  },
  {
    id: 9,
    title: 'Workshop Tools for Direct Comparison',
    subtitle: 'Everyday Mechanical Standards',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'Steel Rule & Measuring Tape: Marks stamped at exact millimetre intervals.',
      'Vernier Caliper & Micrometer: Sliding vernier scales for measuring cylinder diameters down to 0.02 mm.',
      'Gauge Blocks (Slip Gauges): Blocks of hardened steel ground to exact thicknesses (e.g., exactly 10.000 mm).',
      'Equal-Arm Beam Balance: Two hanging pans comparing an unknown object against certified brass weights.'
    ],
    speakerNotes:
      'Show students that these are tools they already use in the workshop. They are all direct comparison tools.',
    takeaway: 'Direct tools provide high physical reliability because they rely on solid physical standards.'
  },
  {
    id: 10,
    title: 'Limitations of Direct Comparison',
    subtitle: 'Why Can We Not Use Direct Comparison for Everything?',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      '1. Eye Fatigue & Parallax Error: The human eye must read tiny lines. Looking from an angle gives the wrong number.',
      '2. Cannot Measure Fast Moving Parts: You cannot hold a ruler against a spinning turbine shaft!',
      '3. Cannot Measure Invisible Quantities: You cannot hold a ruler against a magnetic field or electric voltage.',
      '4. Manual and Slow: Requires a human operator for every single reading; impossible for computer automation.'
    ],
    speakerNotes:
      'This slide motivates why engineers invented deflection and electronic instruments: we need instruments that can measure fast, invisible, and automated signals.',
    takeaway: 'Direct comparison is great for static mechanical parts, but useless for automated, fast, or electrical systems.'
  },
  {
    id: 11,
    title: 'Method 2: Deflection Method',
    subtitle: 'The Unknown Quantity Pushes a Pointer Against a Spring',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'Think of the needle on a motorcycle speedometer or a bathroom spring scale.',
      'When you step onto a bathroom scale, your body weight compresses an internal steel spring.',
      'As the spring compresses, it turns a gear that swings a pointer across a printed dial.',
      'When the pushing force of your weight matches the resisting force of the compressed spring, the needle stops.',
      'The position of the needle shows your weight.'
    ],
    speakerNotes:
      'Walk through the bathroom scale. Emphasize that the needle only moves because an input force pushes against a calibrated spring.',
    takeaway: 'In deflection instruments, the unknown quantity produces a mechanical movement opposing a calibrated spring.'
  },
  {
    id: 12,
    title: 'How a Deflection Instrument Balances Forces',
    subtitle: 'Opposing Forces in Perfect Equilibrium',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'Two opposing forces meet inside the meter:',
      '1. Deflecting Force: Created by the unknown input (your weight, water pressure, or electric current). It pushes the needle forward.',
      '2. Controlling (Restoring) Force: Created by an internal spring. The farther the needle moves, the harder the spring pushes back.',
      'When the two forces become equal, the needle comes to a rest.',
      'The deflection angle is directly proportional to the unknown input.'
    ],
    speakerNotes:
      'Introduce the concept of equilibrium: Needle stops when Deflecting Force = Restoring Force.',
    takeaway: 'Needle position = Point where the deflecting push equals the spring push back.'
  },
  {
    id: 13,
    title: 'Everyday Examples of Deflection Instruments',
    subtitle: 'Fast, Real-Time Readings in Vehicles and Factories',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'Bourdon Tube Pressure Gauge: Curved brass tube in an air compressor uncurls when air pressure enters, moving the dial needle.',
      'PMMC Moving-Coil Voltmeter: Electric current through a small coil inside a magnet creates magnetic torque that twists a hairspring.',
      'Spring Fish Scale: A hook on a spring that pulls down when a heavy load is attached.',
      'Car Engine Tachometer (RPM Meter): Swings an indicator needle higher as engine crankshaft speed increases.'
    ],
    speakerNotes:
      'Emphasize the main advantage: deflection instruments give an instant visual reading that tracks changes immediately.',
    takeaway: 'Deflection instruments provide fast, continuous, and self-indicating readings.'
  },
  {
    id: 14,
    title: 'The Big Problem: What is the "Loading Effect"?',
    subtitle: 'Measuring a System Steals Energy From the System!',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'Here is the fundamental catch with all deflection instruments:',
      'To push the needle against a stiff metal spring, the meter must extract continuous physical energy from the system being measured.',
      'If you connect an analog voltmeter to a small circuit, the meter draws electric current to swing its coil.',
      'Because current flows into the meter, the voltage in the original circuit drops!',
      'This unwanted change caused by the measuring instrument itself is called the Loading Effect.'
    ],
    speakerNotes:
      'This is a crucial concept in instrumentation. Use the tire gauge analogy on the next slide to cement the idea.',
    takeaway: 'Loading Effect = When the measuring device alters the very quantity it is trying to measure by drawing energy from it.'
  },
  {
    id: 15,
    title: 'A Familiar Analogy for the Loading Effect',
    subtitle: 'Checking Motorcycle Tire Pressure Lets Air Escape!',
    sectionTag: '1.1 Methods',
    type: 'analogy',
    analogy: {
      everydayConcept: 'Pressing a tire pressure gauge onto your motorbike tire valve.',
      technicalMapping: 'The pressure gauge draws a burst of air into its cylinder to push the indicator pin out.',
      whyItWorks: 'To move the pin, air must leave the tire. The moment air leaves, the tire pressure drops slightly below what it was originally!',
      limitsOfAnalogy: 'In a huge truck tire, the lost air is negligible. But in a tiny bicycle tube, repeated testing can deflate the tire noticeably.'
    },
    speakerNotes:
      'Students immediately connect with the hiss of air when checking tire pressure. Tell them: that hiss of air is the loading effect in action!',
    takeaway: 'If a meter requires energy to move its indicator, it steals that energy from the source.'
  },
  {
    id: 16,
    title: 'Method 3: Null-Balance Method',
    subtitle: 'Zero Energy Drawn at the Moment of Measurement',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'To avoid the loading effect, engineers invented the Null-Balance Method.',
      'Think of an old-fashioned grocery scale with two hanging brass pans.',
      'The merchant places vegetables in the left pan.',
      'He places known iron weights in the right pan and adjusts them until the center pointer points dead center to ZERO.',
      'When the pointer points to zero (Null), both sides are perfectly balanced.'
    ],
    speakerNotes:
      'Explain that "null" is just a formal word for zero difference.',
    takeaway: 'Null-Balance = Adjusting an opposing calibrated standard until the difference is exactly zero.'
  },
  {
    id: 17,
    title: 'Why Null-Balance Eliminates Loading Error',
    subtitle: 'At the Balance Point, Zero Energy Flows into the Detector',
    sectionTag: '1.1 Methods',
    type: 'concept',
    bullets: [
      'In a null-balance instrument (like a DC Potentiometer or Wheatstone Bridge):',
      'The unknown voltage is opposed by an adjustable reference voltage from a battery inside the instrument.',
      'A sensitive center-zero meter (a galvanometer) sits between them.',
      'You slide a dial until the meter needle points to 0.00.',
      'At 0.00, the opposing voltages are identical: NO current flows through the detector ($I = 0$).',
      'Because no current flows, zero power is drawn from the circuit being tested. Loading error is 100% eliminated!'
    ],
    speakerNotes:
      'Highlight this key exam answer: Why is null balance more accurate? Because at balance, current is zero, so no energy is extracted from the source.',
    takeaway: 'At null equilibrium: Current = 0, Power drawn = 0, Loading error = 0.'
  },
  {
    id: 18,
    title: 'Visual Comparison: The Three Measurement Methods',
    subtitle: 'Figure 1 · Direct Comparison vs. Deflection vs. Null-Balance',
    sectionTag: '1.1 Methods',
    type: 'figure',
    figureKey: 'fig1',
    speakerNotes:
      'Walk students through Figure 1: Direct comparison on the left (ruler), deflection in the center (spring and pointer), and null-balance on the right (balanced pans and center zero meter).',
    takeaway: 'Direct is manual, deflection is fast but draws power, null-balance is slow but has maximum accuracy.'
  },
  {
    id: 19,
    title: 'Comparing the Three Methods: Engineering Trade-offs',
    subtitle: 'Choosing the Right Method for the Job',
    sectionTag: '1.1 Methods',
    type: 'pros-cons',
    prosCons: {
      title: 'Deflection vs. Null-Balance Trade-off',
      advantages: [
        'Deflection Method: Fast response; tracks moving dynamic signals instantly; self-contained and easy to read.',
        'Null-Balance Method: Highest static precision; zero energy drawn from measurand; completely eliminates loading errors.'
      ],
      disadvantages: [
        'Deflection Method: Draws continuous power (loading error); friction in gears causes mechanical wear.',
        'Null-Balance Method: Requires manual balancing or motor-driven servo; slow and unsuitable for fast transient signals.'
      ],
      engineeringVerdict:
        'Use Deflection meters (speedometers, pressure gauges) when you need fast, continuous dynamic tracking. Use Null-Balance systems (bridges, laboratory calibrators) when you need ultimate metrological accuracy.'
    },
    speakerNotes:
      'Remind students that neither is "better" in all cases—they serve different engineering needs.',
    takeaway: 'Speed vs. Accuracy: Deflection gives speed; Null-Balance gives ultimate accuracy.'
  },
  {
    id: 20,
    title: 'Check Your Understanding: Methods of Measurement',
    subtitle: 'Concept Check 1.1',
    sectionTag: '1.1 Quiz',
    type: 'check-understanding',
    quiz: {
      question:
        'Why does a laboratory null-balance potentiometer measure the open-circuit voltage of a small battery more accurately than a common moving-coil (deflection) voltmeter?',
      options: [
        'The null-balance potentiometer has a bigger glass screen.',
        'At the null balance point, zero electric current is drawn from the battery, preventing internal voltage drop.',
        'The deflection meter has a stronger magnet.',
        'The potentiometer uses high-frequency radio waves.'
      ],
      correctIndex: 1,
      explanation:
        'Correct! At the null balance condition, the opposing reference voltage perfectly equals the battery voltage. No current flows through the circuit ($I = 0$). Without current, the battery’s internal resistance causes zero voltage drop ($I \\cdot R_{\\text{int}} = 0$), completely eliminating voltmeter loading error.'
    },
    speakerNotes:
      'Give students 30 seconds to answer before revealing. Reinforce the concept of zero current flow at balance.',
    takeaway: 'Zero current at balance means zero loading distortion on the measured source.'
  },

  // =========================================================================
  // SECTION 1.2: ANALOG VS. DIGITAL INSTRUMENTS
  // =========================================================================
  {
    id: 21,
    title: '1.2 Analog vs. Digital Instruments',
    subtitle: 'Section 1.2 · Continuous Pointers vs. Discrete Numbers · Resolution & Sampling',
    sectionTag: '1.2 Analog vs Digital',
    type: 'section-divider',
    speakerNotes:
      'Now let us move to Section 1.2: Analog vs. Digital Instruments. Almost all older instruments were analog. Today, almost everything uses digital screens and microcontrollers. Let us understand the engineering differences.',
    takeaway: 'Analog represents values as continuous physical movement; digital represents values as discrete numbers.'
  },
  {
    id: 22,
    title: 'What is an Analog Instrument?',
    subtitle: 'Continuous Physical Indication',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    imageUrl: '/assets/unit1/unit1_analog_vs_digital.jpg',
    imageCaption: 'Mirrored-scale analog needle voltmeter alongside a 6-digit OLED digital multimeter',
    bullets: [
      'An analog instrument displays the measured value as a continuous physical movement.',
      'Examples:',
      '• A traditional mercury thermometer: The mercury column expands smoothly up the glass tube without jumping.',
      '• An analog clock: The minute hand glides continuously around the dial.',
      '• A moving-coil voltmeter: The needle swings smoothly along a curved scale line.',
      'The pointer can stop at any position between lines—there are infinite possible positions.'
    ],
    speakerNotes:
      'Point out that "analog" means the pointer position is analogous (similar) to the physical variable.',
    takeaway: 'Analog output is smooth, continuous, and unbroken across time and amplitude.'
  },
  {
    id: 23,
    title: 'The Parallax Error Problem on Analog Dials',
    subtitle: 'Why Human Eyes Misread Analog Pointers',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    bullets: [
      'Have you ever looked at a car speedometer from the passenger seat?',
      'From the passenger side, the needle looks like it is pointing to 75 km/h.',
      'From the driver seat directly in front, the needle clearly points to 80 km/h!',
      'This reading error caused by viewing a pointer from an angle against a scale background is called Parallax Error.',
      'High-grade analog meters place a curved strip of mirror underneath the scale. You must line up the needle so it hides its own reflection before taking a reading.'
    ],
    speakerNotes:
      'Ask a student to come to the front and look at a meter from the side. Parallax is the number one human observation blunder in analog meters.',
    takeaway: 'Parallax error occurs whenever the observer eye is not perpendicular to the scale dial.'
  },
  {
    id: 24,
    title: 'What is a Digital Instrument?',
    subtitle: 'Direct, Unambiguous Numeric Readouts',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    bullets: [
      'A digital instrument converts the continuous physical quantity into discrete numbers displayed on a screen (7-segment LED or LCD).',
      'Examples:',
      '• Digital multimeter (DMM) showing "230.4 V" in crisp black digits.',
      '• Digital kitchen weighing scale showing "542 g".',
      '• Digital clinical thermometer that beeps and displays "37.2 °C".',
      'There is no pointer, no curved scale, and zero parallax error: anyone looking from any angle reads the exact same numbers.'
    ],
    speakerNotes:
      'Digital meters eliminate human interpolation guessing: you never have to estimate whether a needle is at 4.6 or 4.7.',
    takeaway: 'Digital displays provide clean, unambiguous numbers that eliminate human reading errors.'
  },
  {
    id: 25,
    title: 'Common Student Myth: Does More Digits Mean More Accurate?',
    subtitle: 'Separating Resolution from Accuracy',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    bullets: [
      'A common misconception among beginner students is:',
      '"A digital scale displaying 6 digits (e.g. 12.3456 kg) must be 100% accurate!"',
      'This is completely FALSE!',
      'Resolution is the smallest step the screen can display (the number of decimal places).',
      'Accuracy is how close the reading is to the true physical weight.',
      'If someone dropped the scale or the internal sensor drifted by 2 kg, the screen might display "14.3456 kg" with 6 digits of resolution, but the reading is completely WRONG!'
    ],
    speakerNotes:
      'Stress this strongly: High resolution means fine detail; it does NOT guarantee accuracy.',
    takeaway: 'Displaying 6 digits of resolution does not make a reading true if the sensor is miscalibrated.'
  },
  {
    id: 26,
    title: 'Understanding Digital Resolution: What is an ADC Bit?',
    subtitle: 'How Computers Divide a Voltage Range into Distinct Steps',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    bullets: [
      'Computers only count in binary bits (0s and 1s).',
      'An Analog-to-Digital Converter (ADC) with $N$ bits can create $2^N$ distinct digital codes.',
      '• A 1-bit ADC can only distinguish 2 levels: 0 (Low) or 1 (High).',
      '• A 2-bit ADC can distinguish $2^2 = 4$ levels: 00, 01, 10, 11.',
      '• A 3-bit ADC can distinguish $2^3 = 8$ levels.',
      '• A standard 12-bit industrial ADC can distinguish $2^{12} = 4,096$ distinct voltage levels!',
      '• A precision 24-bit ADC can distinguish $2^{24} = 16,777,216$ levels!'
    ],
    speakerNotes:
      'Help students visualize bits as steps on a ladder. More bits means more steps packed into the same height, making each step smaller.',
    takeaway: 'An N-bit converter divides the full-scale voltage span into 2^N discrete steps.'
  },
  {
    id: 27,
    title: 'Voltage Resolution Step Size',
    subtitle: 'The Smallest Change the Digital Screen Can Detect',
    sectionTag: '1.2 Analog vs Digital',
    type: 'formula',
    formulaBlock: {
      equation: '\\Delta V = \\frac{V_{\\text{FSR}}}{2^N - 1}',
      label: 'Equation 1.1 · ADC Voltage Resolution Step Size',
      description: 'The voltage height of each discrete digital staircase step in an N-bit converter.',
      symbols: [
        { symbol: '\\Delta V', name: 'Resolution Step Size', unit: 'Volts', description: 'Smallest detectable voltage change' },
        { symbol: 'V_{\\text{FSR}}', name: 'Full-Scale Range', unit: 'Volts', description: 'Total maximum input voltage span (e.g. 5V or 10V)' },
        { symbol: 'N', name: 'Number of ADC Bits', unit: 'bits', description: 'Binary word length of the converter' }
      ]
    },
    bullets: [
      'The smaller the step size $\\Delta V$, the finer the detail your instrument can capture.',
      'If a voltage changes by less than one step size $\\Delta V$, the digital output does not change at all!'
    ],
    speakerNotes:
      'Notice that the equation is displayed freely with clean whitespace. Walk through the symbols one by one: FSR is the span (like 0 to 5V), and N is the number of bits.',
    takeaway: 'More bits (N) creates smaller step size (ΔV), giving sharper measurement resolution.'
  },
  {
    id: 28,
    title: 'Worked Example: Calculating ADC Step Resolution',
    subtitle: 'Step-by-Step Numerical Practice',
    sectionTag: '1.2 Worked Example',
    type: 'worked-example',
    workedExample: {
      problem:
        'A digital voltmeter uses a 10-bit Analog-to-Digital Converter (N = 10) to measure voltages between 0.0 Volts and 5.0 Volts (Full-Scale Range = 5.0 V). Calculate the smallest voltage change (resolution step size ΔV) that this meter can detect.',
      given: {
        'Full-Scale Range (VFSR)': '5.0 V',
        'Number of ADC Bits (N)': '10 bits',
        'Number of Intervals (2^N - 1)': '2^10 - 1 = 1024 - 1 = 1023'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Total Number of Steps',
          math: '2^N - 1 = 2^{10} - 1 = 1024 - 1 = 1023 \\text{ steps}',
          explanation: 'A 10-bit binary register counts from 0 to 1023, creating 1023 equal spacing intervals across the voltage range.'
        },
        {
          stepNumber: 2,
          title: 'Apply the Resolution Formula',
          math: '\\Delta V = \\frac{V_{\\text{FSR}}}{2^N - 1} = \\frac{5.000\\text{ V}}{1023} = 0.004887\\text{ V}',
          explanation: 'Divide the 5.0 Volt full-scale span by the 1023 intervals.'
        },
        {
          stepNumber: 3,
          title: 'Convert to Millivolts (mV) for Practical Clarity',
          math: '\\Delta V \\approx 4.89\\text{ mV}',
          explanation: 'Multiply by 1000 to express in millivolts.'
        }
      ],
      finalAnswer: 'ΔV = 4.89 mV per step',
      practicalInsight:
        'This means if the sensor voltage changes by 2 mV, this 10-bit meter will NOT detect it. The voltage must rise by at least 4.89 mV before the digital number changes!'
    },
    speakerNotes:
      'Walk through the arithmetic carefully. Emphasize the practical meaning: any change smaller than 4.89 mV is invisible to this 10-bit meter.',
    takeaway: 'A 10-bit 5V meter steps in increments of approximately 4.89 mV.'
  },
  {
    id: 29,
    title: 'What is Quantization Error?',
    subtitle: 'The Inevitable Rounding Error of Digital Steps',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    bullets: [
      'In the real physical world, voltage flows smoothly like water in a river.',
      'In a digital computer, voltage must snap to the nearest available staircase step.',
      'This difference between the true continuous analog voltage and the rounded digital step value is called Quantization Error.',
      'Because the converter always rounds to the nearest step, the worst-case error is never more than half a step:',
      '$$\\text{Max Quantization Error} = \\pm \\frac{1}{2} \\Delta V$$',
      'Quantization error is not a machine defect—it is a fundamental law of all digital systems.'
    ],
    speakerNotes:
      'Compare quantization error to rounding your money: if an item costs $4.49 and you only have dollar bills, you round to $4.00, losing $0.49 in rounding.',
    takeaway: 'Quantization error is the unavoidable rounding difference between smooth analog truth and digital steps.'
  },
  {
    id: 30,
    title: 'Visualizing Analog vs. Digital Quantization',
    subtitle: 'Figure 2 · Smooth Wave vs. Digital Staircase',
    sectionTag: '1.2 Analog vs Digital',
    type: 'figure',
    figureKey: 'fig2',
    speakerNotes:
      'Show students Figure 2: The smooth blue line is true analog physical voltage. The stepped orange line is the digital approximation. Note the green dots showing the exact moments of sampling.',
    takeaway: 'Digital instruments approximate smooth analog curves as stepped staircases.'
  },
  {
    id: 31,
    title: 'The Sampling Rule: Time Slicing',
    subtitle: 'How Often Must We Read the Voltage?',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    bullets: [
      'An analog dial shows the signal continuously at every microsecond.',
      'A digital meter takes snapshots (samples) at regular clock intervals (e.g. 1,000 times per second).',
      'Between samples, the digital meter is blind to what happens!',
      'If a signal is changing rapidly, taking samples too slowly creates completely false data.',
      'How fast must we take samples so that we do not lose the signal? Engineering mathematics gives us an exact rule.'
    ],
    speakerNotes:
      'Ask students: "If a light turns on and off 100 times a second and you only blink your eyes once a second, will you know how fast it is flashing?"',
    takeaway: 'Sampling rate (fs) determines how often the instrument takes a snapshot of the signal.'
  },
  {
    id: 32,
    title: 'The Nyquist-Shannon Sampling Criterion',
    subtitle: 'The Universal Rule for Digital Sampling',
    sectionTag: '1.2 Analog vs Digital',
    type: 'formula',
    formulaBlock: {
      equation: 'f_s \\ge 2 \\cdot f_{\\text{max}}',
      label: 'Equation 1.2 · Nyquist Sampling Rule',
      description: 'The sampling rate must be at least twice the highest signal frequency to prevent distortion.',
      symbols: [
        { symbol: 'f_s', name: 'Sampling Frequency', unit: 'Hz (samples/second)', description: 'How many readings the ADC captures each second' },
        { symbol: 'f_{\\text{max}}', name: 'Highest Signal Frequency', unit: 'Hz (cycles/second)', description: 'The fastest frequency component in the measured wave' }
      ]
    },
    bullets: [
      'Plain English Meaning: You must take at least 2 samples during every single wave cycle (at least one sample on the positive wave crest, and one on the negative wave trough).',
      'If you sample slower than twice the highest frequency, the signal gets corrupted!'
    ],
    speakerNotes:
      'Keep it memorable: At least 2 points per wave. If you don’t get at least 2 points per wave, you cannot tell the wave is oscillating.',
    takeaway: 'Sampling frequency (fs) must be at least double the highest frequency in the signal (2 · fmax).'
  },
  {
    id: 33,
    title: 'What is Aliasing? The Wagon Wheel Illusion',
    subtitle: 'When Fast Frequencies Disguise Themselves as False Low Frequencies',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    bullets: [
      'Have you ever watched a Western movie or car commercial where the car speeds up, but the wheel spokes look like they are turning backward or standing still?',
      'That optical illusion is Aliasing!',
      'The movie camera records 24 frames per second. If the wheel spins faster than 12 revolutions per second, the camera cannot keep up.',
      'In instrumentation: If high-frequency machine vibration (e.g. 900 Hz) is sampled at only 1,000 Hz, the computer records a completely false slow 100 Hz hum!',
      'The high frequency has disguised itself (created an alias) as a low frequency.'
    ],
    speakerNotes:
      'The car wheel analogy is universal. Every student has seen car wheels appear to turn backwards on video.',
    takeaway: 'Aliasing is when high-frequency signals sampled too slowly masquerade as false low-frequency ghosts.'
  },
  {
    id: 34,
    title: 'Why Anti-Aliasing Filters Must Be Hardware',
    subtitle: 'Placed Strictly in Front of the ADC',
    sectionTag: '1.2 Analog vs Digital',
    type: 'concept',
    bullets: [
      'Students often ask: "Can we not just write a computer program to remove the aliasing noise after recording?"',
      'The answer is an absolute NO!',
      'Once a high frequency aliases into a lower frequency during ADC conversion, it becomes completely indistinguishable from real low-frequency data.',
      'Therefore, every real data acquisition system must place an Analog Low-Pass Filter (Anti-Aliasing Filter) in hardware BEFORE the ADC chip.',
      'The hardware filter blocks all frequencies above $f_s / 2$ before the ADC ever touches the wire.'
    ],
    speakerNotes:
      'Common exam pitfall: Students think digital filters can fix aliasing. Stress that once aliasing happens in the ADC, the data is permanently corrupted.',
    takeaway: 'Anti-aliasing filtering must be done in physical analog hardware before conversion, never in software.'
  },
  {
    id: 35,
    title: 'Check Your Understanding: Sampling & Resolution',
    subtitle: 'Concept Check 1.2',
    sectionTag: '1.2 Quiz',
    type: 'check-understanding',
    quiz: {
      question:
        'An engineer is measuring high-pitch vibration from an industrial turbine with a maximum frequency of 5,000 Hz (5 kHz). What is the minimum sampling rate required by the Nyquist criterion to prevent aliasing?',
      options: [
        'At least 2,500 samples/second',
        'At least 5,000 samples/second',
        'At least 10,000 samples/second (10 kHz)',
        'Exactly 1,000 samples/second'
      ],
      correctIndex: 2,
      explanation:
        'Correct! According to the Nyquist-Shannon theorem, $f_s \\ge 2 \\cdot f_{\\text{max}} = 2 \\times 5,000\\text{ Hz} = 10,000\\text{ Hz}$ (10 kHz). Sampling slower than 10 kHz would cause irreversible aliasing distortion.'
    },
    speakerNotes:
      'Give students 20 seconds. Simple multiplication: 2 times 5 kHz = 10 kHz.',
    takeaway: 'Always double the maximum frequency to find the minimum safe sampling rate.'
  },

  // =========================================================================
  // SECTION 1.3: DATA ACQUISITION PIPELINE (DAQ)
  // =========================================================================
  {
    id: 36,
    title: '1.3 Data Acquisition Pipeline (DAQ)',
    subtitle: 'Section 1.3 · The Complete Signal Chain From Sensor to Computer Screen',
    sectionTag: '1.3 DAQ Pipeline',
    type: 'section-divider',
    speakerNotes:
      'Let us now investigate Section 1.3: Data Acquisition (DAQ) Systems. In modern industry, computers do the monitoring. But a computer processor cannot plug directly into a boiling steam pipe. Let us trace the complete chain of hardware needed.',
    takeaway: 'A DAQ pipeline converts raw physical phenomena into clean, standardized digital information.'
  },
  {
    id: 37,
    title: 'The Real-World Engineering Problem',
    subtitle: 'Why Computers Cannot Read Sensors Directly',
    sectionTag: '1.3 DAQ Pipeline',
    type: 'concept',
    imageUrl: '/assets/unit1/unit1_daq_chassis.jpg',
    imageCaption: 'Multi-channel industrial DAQ hardware chassis with BNC and thermocouple inputs streaming to workstation',
    bullets: [
      'Problem 1: Sensors output physical changes—a thermocouple creates tiny microvolts; a strain gauge changes resistance by a fraction of an ohm.',
      'Problem 2: Industrial environments are filled with electrical noise from 50 Hz power cables, welding arcs, and large electric motors.',
      'Problem 3: Microprocessors can only understand clean binary numbers (0s and 1s) between 0 and 3.3 Volts.',
      'Therefore, between the physical machine and the computer, we need a complete multi-stage pipeline called a Data Acquisition (DAQ) System.'
    ],
    speakerNotes:
      'Set the stage: The DAQ system is the bridge between dirty real-world physics and clean digital computers.',
    takeaway: 'DAQ systems bridge the gap between noisy, microscopic physical signals and digital microprocessors.'
  },
  {
    id: 38,
    title: 'The Multi-Stage DAQ Architecture',
    subtitle: 'Figure 3 · The 6 Core Functional Blocks',
    sectionTag: '1.3 DAQ Pipeline',
    type: 'figure',
    figureKey: 'fig3',
    speakerNotes:
      'Walk through Figure 3 block-by-block: 1. Measurand, 2. Transducer, 3. Signal Conditioning, 4. MUX & S/H, 5. ADC, 6. Processor & Display.',
    takeaway: 'Every block in Figure 3 performs a distinct physical or electronic transformation.'
  },
  {
    id: 39,
    title: 'Block 1 & 2: The Measurand & The Sensor/Transducer',
    subtitle: 'Capturing Physics and Turning it into Electricity',
    sectionTag: '1.3 DAQ Pipeline',
    type: 'concept',
    bullets: [
      'Block 1: Measurand — The physical variable in the real world: high boiler temperature, hydraulic pipe pressure, or crane arm load.',
      'Block 2: Sensor / Transducer — A physical device that responds to the measurand by changing an electrical property:',
      '• Thermocouple: Temperature difference creates a tiny voltage (microvolts, $\\mu\\text{V}$).',
      '• Strain Gauge: Mechanical stretching changes electrical resistance ($\\Delta R$).',
      '• Piezoelectric Crystal: Vibration shock squeezes electrostatic charge out of quartz (pico-Coulombs, $\\text{pC}$).'
    ],
    speakerNotes:
      'Differentiate sensor vs transducer simply: they turn physical energy into electrical signals.',
    takeaway: 'The transducer translates physical energy (heat, force, pressure) into electrical signals (mV, Ω, pC).'
  },
  {
    id: 40,
    title: 'Block 3: Signal Conditioning — The "Cleaning" Stage',
    subtitle: 'Preparing the Weak, Noisy Signal for the Computer',
    sectionTag: '1.3 DAQ Pipeline',
    type: 'concept',
    bullets: [
      'Raw sensor signals are far too weak and noisy for an ADC converter to read directly.',
      'The Signal Conditioning block performs three critical jobs:',
      '1. Amplification: Boosts microscopic microvolts up to usable Volts (e.g. from $5\\text{ mV}$ to $5\\text{ V}$).',
      '2. Filtering: Removes 50 Hz power hum and high frequencies (anti-aliasing).',
      '3. Galvanic Isolation: Builds an electrical barrier to protect the computer from lethal voltage spikes.'
    ],
    speakerNotes:
      'Compare signal conditioning to washing and peeling vegetables before cooking: you must clean and prepare the raw input before processing.',
    takeaway: 'Signal conditioning amplifies, filters, and isolates the raw electrical signal.'
  },
  {
    id: 41,
    title: 'Block 4: The Multiplexer (MUX) & Sample-and-Hold (S/H)',
    subtitle: 'Sharing Resources and Freezing the Voltage in Time',
    sectionTag: '1.3 DAQ Pipeline',
    type: 'concept',
    bullets: [
      'Analog Multiplexer (MUX):',
      '• Works like an electronic railway track switch.',
      '• Lets 8, 16, or 32 sensor channels share a single expensive ADC chip by switching between them in rapid sequence.',
      'Sample-and-Hold (S/H) Circuit:',
      '• An ADC takes several microseconds to convert an analog voltage into binary bits.',
      '• If the input voltage moves while the ADC is converting, the output numbers blur and corrupt!',
      '• The S/H circuit takes a flash photograph: it charges a tiny capacitor and holds the voltage 100% steady during the conversion window.'
    ],
    speakerNotes:
      'Use the camera shutter analogy for S/H: you need a steady image while the sensor records the light.',
    takeaway: 'MUX switches multiple channels into one converter; S/H freezes the voltage steady during conversion.'
  },
  {
    id: 42,
    title: 'Block 5 & 6: The ADC & The Digital Host Display',
    subtitle: 'From Voltage to Numbers, Graphs, and Alarms',
    sectionTag: '1.3 DAQ Pipeline',
    type: 'concept',
    bullets: [
      'Block 5: Analog-to-Digital Converter (ADC):',
      '• Takes the steady held voltage from the S/H circuit and outputs a stream of binary binary bits (e.g. 16-bit binary integer code).',
      'Block 6: Host Computer & Display:',
      '• The microprocessor or industrial PC receives the binary buffer over USB, PCIe, or Ethernet.',
      '• Software converts the raw integer codes back into physical engineering units (e.g., "$152.4\\text{ bar}$").',
      '• The system graphs live trends on a dashboard screen, saves records to the cloud, and trips emergency alarm relays if limits are exceeded.'
    ],
    speakerNotes:
      'Trace the complete journey: Boiler steam heat -> thermocouple microvolts -> amplified Volts -> frozen in S/H -> binary bits in ADC -> graph on the operator screen.',
    takeaway: 'The host computer scales binary codes into real engineering units (bar, °C, kg) and displays live data.'
  },
  {
    id: 43,
    title: 'Check Your Understanding: Trace the DAQ Signal Path',
    subtitle: 'Concept Check 1.3',
    sectionTag: '1.3 Quiz',
    type: 'check-understanding',
    quiz: {
      question:
        'In a factory temperature monitoring system, why is a Sample-and-Hold (S/H) circuit placed immediately before the Analog-to-Digital Converter (ADC)?',
      options: [
        'To make the thermocouple wire hotter.',
        'To hold the analog voltage perfectly steady while the ADC converts it into binary numbers.',
        'To change the language on the computer screen.',
        'To store data on the hard drive for next year.'
      ],
      correctIndex: 1,
      explanation:
        'Correct! An ADC requires a finite time (the aperture conversion window) to determine each digital bit. The Sample-and-Hold (S/H) circuit holds the voltage constant on a capacitor so that voltage fluctuations during conversion do not cause conversion errors.'
    },
    speakerNotes:
      'Give students 20 seconds. Ensure everyone understands the purpose of holding the voltage steady.',
    takeaway: 'S/H holds the analog voltage steady so the ADC can convert it without motion blur errors.'
  },

  // =========================================================================
  // SECTION 1.4: STATIC CALIBRATION & CHARACTERISTICS
  // =========================================================================
  {
    id: 44,
    title: '1.4 Static Calibration & Characteristics',
    subtitle: 'Section 1.4 · Establishing Trust in Measurements · Sensitivity · Drift · Hysteresis',
    sectionTag: '1.4 Calibration',
    type: 'section-divider',
    speakerNotes:
      'Let us now study Section 1.4: Static Calibration and Instrument Characteristics. If you buy a brand new pressure gauge or weighing scale, how do you know the number it shows is real? That brings us to calibration.',
    takeaway: 'Calibration is the foundation of measurement integrity and legal traceability.'
  },
  {
    id: 45,
    title: 'What is Calibration?',
    subtitle: 'Comparing an Instrument Against a Trusted Standard',
    sectionTag: '1.4 Calibration',
    type: 'definition',
    imageUrl: '/assets/unit1/unit1_deadweight_tester.jpg',
    imageCaption: 'Hydraulic deadweight primary pressure calibrator verifying an industrial Bourdon gauge',
    definition: {
      term: 'Static Calibration',
      formalDefinition:
        'An operation that establishes a relation between the quantity values provided by measurement standards and corresponding indications of the instrument under test.',
      operationalMeaning:
        'In plain workshop English: You apply exact, certified input values to the instrument (e.g. exactly 1.00 bar, 2.00 bar, 3.00 bar) and record what the instrument pointer indicates. If the pointer disagrees, you adjust the meter until it matches the standard.',
      standardReference: 'ISO/IEC Guide 99 (VIM Metrology Standard)'
    },
    speakerNotes:
      'Keep it concrete: Calibration means testing your meter against a certified master tool to find out its true error.',
    takeaway: 'Calibration = Testing an instrument against a certified standard and documenting its accuracy.'
  },
  {
    id: 46,
    title: 'Why Do Instruments Go Out of Calibration?',
    subtitle: 'Physical Wear, Temperature, and Aging',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      'No instrument stays accurate forever. Over time, physical changes occur:',
      '1. Mechanical Wear & Tear: Pivot bearings wear down, springs weaken with fatigue, and gear teeth accumulate dirt.',
      '2. Ambient Temperature Swings: Metal springs expand in hot summer weather, altering their spring stiffness.',
      '3. Electronic Aging: Resistors and capacitors drift in value after years of operating heat.',
      '4. Accidental Drops & Shocks: Dropping a tool or exposing a sensor to a pressure surge knocks its zero alignment out.',
      'Therefore, all industrial factories recalibrate their instruments every 6 to 12 months.'
    ],
    speakerNotes:
      'Ask students if they have ever dropped their phone and noticed the sensor acted weird. Equipment drifts with time and physical stress.',
    takeaway: 'Wear, aging, temperature, and mechanical shock cause all instruments to drift over time.'
  },
  {
    id: 47,
    title: 'The Calibration Curve: Plotting Input vs. Output',
    subtitle: 'How Engineers Visualize Instrument Response',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      'To calibrate an instrument, an engineer records data points in a table:',
      '• The Horizontal X-Axis: The known true standard input (e.g. certified applied pressure in bar).',
      '• The Vertical Y-Axis: The indicated output reading (e.g. electrical voltage or needle position).',
      'Plotting these points on a graph gives the Calibration Curve.',
      'In a perfect instrument, the calibration curve is a straight line passing through zero ($y = S \\cdot x$).',
      'In real instruments, the curve may tilt, shift, or bend.'
    ],
    speakerNotes:
      'Always remember: X is the true standard input; Y is what the instrument indicates.',
    takeaway: 'Calibration curve = Graph of Indicated Output (Y) plotted against True Input (X).'
  },
  {
    id: 48,
    title: 'What is Static Sensitivity?',
    subtitle: 'How Far Does the Needle Swing for Each Unit of Input?',
    sectionTag: '1.4 Calibration',
    type: 'formula',
    formulaBlock: {
      equation: 'S = \\frac{\\Delta y}{\\Delta x} = \\frac{\\text{Change in Output}}{\\text{Change in Input}}',
      label: 'Equation 1.3 · Static Sensitivity',
      description: 'The slope of the calibration curve representing the responsiveness of the instrument.',
      symbols: [
        { symbol: 'S', name: 'Static Sensitivity', unit: 'Output Units / Input Units', description: 'Slope of calibration line (e.g. mV/°C or Volts/bar)' },
        { symbol: '\\Delta y', name: 'Change in Output', unit: 'Output Units', description: 'Difference between two output readings' },
        { symbol: '\\Delta x', name: 'Change in Input', unit: 'Input Units', description: 'Difference between two applied input standards' }
      ]
    },
    bullets: [
      'Plain English Meaning: Sensitivity tells you how responsive the meter is.',
      'If temperature changes by $1\\,^{\\circ}\\text{C}$, does the meter output change by $10\\text{ mV}$ or by $100\\text{ mV}$?',
      'A steeper slope means higher sensitivity!'
    ],
    speakerNotes:
      'Sensitivity is simply the slope of the line. High slope = big output response; low slope = tiny output response.',
    takeaway: 'Sensitivity is the slope of the calibration curve: Output Change divided by Input Change.'
  },
  {
    id: 49,
    title: 'Worked Example: Calculating Sensor Sensitivity',
    subtitle: 'Step-by-Step Numerical Practice',
    sectionTag: '1.4 Worked Example',
    type: 'worked-example',
    workedExample: {
      problem:
        'A factory pressure sensor is calibrated in the workshop. When the applied input pressure increases from 2.0 bar to 6.0 bar, the sensor output voltage rises from 1.0 Volt to 3.0 Volts. Calculate the static sensitivity of this pressure sensor.',
      given: {
        'Initial Input (x1)': '2.0 bar',
        'Final Input (x2)': '6.0 bar',
        'Initial Output (y1)': '1.0 V',
        'Final Output (y2)': '3.0 V'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate the Change in Input (Δx)',
          math: '\\Delta x = x_2 - x_1 = 6.0\\text{ bar} - 2.0\\text{ bar} = 4.0\\text{ bar}',
          explanation: 'Subtract the initial input pressure from the final pressure.'
        },
        {
          stepNumber: 2,
          title: 'Calculate the Change in Output (Δy)',
          math: '\\Delta y = y_2 - y_1 = 3.0\\text{ V} - 1.0\\text{ V} = 2.0\\text{ V}',
          explanation: 'Subtract the initial output voltage from the final voltage.'
        },
        {
          stepNumber: 3,
          title: 'Calculate Sensitivity (S = Δy / Δx)',
          math: 'S = \\frac{\\Delta y}{\\Delta x} = \\frac{2.0\\text{ V}}{4.0\\text{ bar}} = 0.50\\text{ V/bar}',
          explanation: 'Divide output change by input change.'
        }
      ],
      finalAnswer: 'S = 0.50 V/bar (or 500 mV/bar)',
      practicalInsight:
        'For every 1 bar increase in pipe pressure, the sensor will produce exactly 0.50 Volts more electrical output.'
    },
    speakerNotes:
      'Point out the units: sensitivity always carries combined units (Volts per bar, millivolts per degree Celsius, etc.).',
    takeaway: 'Sensitivity always has units of [Output Units] / [Input Units].'
  },
  {
    id: 50,
    title: 'Zero Drift vs. Sensitivity Drift',
    subtitle: 'The Two Ways Temperature Alters a Calibration Line',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      'When the weather heats up in summer, two different calibration defects can happen:',
      '1. Zero Drift (Baseline Offset Shift):',
      '• The pointer does not return to zero when input is zero.',
      '• The entire calibration line shifts up or down parallel to itself.',
      '• The slope does not change, but every reading is too high or too low by the same fixed offset.',
      '2. Sensitivity Drift (Span Shift):',
      '• The slope of the line tilts and changes.',
      '• The reading at zero is still correct, but as input increases, the error gets bigger and bigger.'
    ],
    speakerNotes:
      'Use hand gestures: Zero drift shifts the whole ruler up. Sensitivity drift tilts the ruler like a seesaw.',
    takeaway: 'Zero drift shifts the entire line up or down; sensitivity drift changes the slope angle.'
  },
  {
    id: 51,
    title: 'What is Hysteresis?',
    subtitle: 'The Reading is Different Going Up vs. Coming Down!',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      'Have you ever weighed something on an old kitchen scale where you press down, release slowly, and the needle stops at a higher mark than before?',
      'That is Hysteresis!',
      'Hysteresis is the phenomenon where an instrument gives different output readings for the exact same input value, depending on whether the input was increasing (ascending) or decreasing (descending).',
      'Ascending run (loading): You increase pressure from 0 to 100%.',
      'Descending run (unloading): You decrease pressure from 100% back to 0%.',
      'The descending readings lag behind and stay slightly higher, creating a closed loop.'
    ],
    speakerNotes:
      'Compare hysteresis to memory: The material remembers that it was just stretched, so it takes longer to shrink back.',
    takeaway: 'Hysteresis = The difference in reading between loading (going up) and unloading (going down).'
  },
  {
    id: 52,
    title: 'The Calibration Curve & Hysteresis Loop',
    subtitle: 'Figure 4 · Ascending vs. Descending Response Curves',
    sectionTag: '1.4 Calibration',
    type: 'figure',
    figureKey: 'fig4',
    speakerNotes:
      'Examine Figure 4: The green curve is ascending (loading). The red curve is descending (unloading). Point out the vertical gap in the middle—that gap is maximum hysteresis error.',
    takeaway: 'The gap between the ascending green curve and descending red curve represents hysteresis lag.'
  },
  {
    id: 53,
    title: 'Formula: Percentage Maximum Hysteresis Error',
    subtitle: 'How Engineers Quantify Hysteresis for Quality Control',
    sectionTag: '1.4 Calibration',
    type: 'formula',
    formulaBlock: {
      equation: '\\% \\text{Hysteresis} = \\frac{|y_{\\text{down}} - y_{\\text{up}}|_{\\text{max}}}{y_{\\text{FSO}}} \\times 100\\%',
      label: 'Equation 1.4 · Percentage Hysteresis Error',
      description: 'Maximum vertical divergence between ascending and descending curves relative to Full-Scale Output.',
      symbols: [
        { symbol: '|y_{\\text{down}} - y_{\\text{up}}|_{\\text{max}}', name: 'Max Hysteresis Gap', unit: 'Output Units', description: 'Largest difference between descending and ascending readings' },
        { symbol: 'y_{\\text{FSO}}', name: 'Full-Scale Output (FSO)', unit: 'Output Units', description: 'Total output span (Maximum reading minus Minimum reading)' }
      ]
    },
    bullets: [
      'FSO stands for Full-Scale Output (the total maximum reading span of the meter).',
      'Quality industrial pressure gauges maintain hysteresis below $\\pm 0.5\\%$ of FSO.'
    ],
    speakerNotes:
      'Explain FSO simply: If a scale goes from 0 to 100 kg, FSO is 100 kg. If the max gap is 1 kg, hysteresis is 1%.',
    takeaway: '% Hysteresis = (Max gap between up and down readings / Full Scale Output) × 100%.'
  },
  {
    id: 54,
    title: 'Accuracy vs. Precision: The Dartboard Analogy',
    subtitle: 'Figure 5 (Right) · Why Repeatable Does NOT Mean Correct',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      'Think of throwing 4 darts at a target bullseye:',
      '• Case 1: High Accuracy & High Precision (Ideal): All 4 darts land tightly clustered right inside the center red bullseye.',
      '• Case 2: High Precision, POOR Accuracy (Systematic Bias): All 4 darts land tightly clustered together, but way off in the upper-right corner! Every throw was repeatable, but every throw was wrong!',
      '• Case 3: Poor Precision: Darts are scattered wildly all over the wall.',
      'In engineering: A digital meter that displays 5 decimal places is precise, but if its calibration zero is shifted, it is completely inaccurate!'
    ],
    speakerNotes:
      'This dartboard visual is the most effective way to teach accuracy vs precision to below-average students.',
    takeaway: 'Precision is repeatability (tight cluster); Accuracy is correctness (hitting the true bullseye).'
  },
  {
    id: 55,
    title: 'Threshold and Dead Band',
    subtitle: 'The Minimum Nudge Needed to Move a Sticky Needle',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      'Have you ever tapped a sticky pressure gauge glass with your knuckle to make the needle jump?',
      'That happens because of Threshold and Dead Band:',
      '1. Threshold: The absolute minimum input quantity needed before the needle moves at all from its resting zero position (overcoming static friction).',
      '2. Dead Band (Dead Zone): A small range of input values over which the instrument produces zero output change.',
      'For example, if you gently tap a car accelerator pedal by 2 mm and the engine RPM does not change at all, that 2 mm is the dead band of the pedal mechanism.'
    ],
    speakerNotes:
      'Compare threshold to pushing a heavy wardrobe: you must push with a minimum force before it starts sliding.',
    takeaway: 'Threshold = Minimum push to start moving; Dead band = Range where input produces zero response.'
  },
  {
    id: 56,
    title: 'Three Calibration Methods: Single-Point, Two-Point & Multi-Point',
    subtitle: 'Figure 4B · Selecting Calibration Complexity to Eliminate Drift & Non-Linearity',
    sectionTag: '1.4 Calibration',
    type: 'figure',
    figureKey: 'fig_cal_methods',
    imageUrl: '/assets/unit1/unit1_deadweight_tester.jpg',
    imageCaption: 'Hydraulic deadweight tester applying certified mass steps across Single, Two, and Multi-Point protocols',
    speakerNotes:
      'Introduce the three formal industrial calibration protocols shown side-by-side in Figure 4B: Single-point checks one offset value, Two-point aligns both zero intercept and span slope, and Multi-point captures full-range curvature and non-linearity.',
    takeaway: 'Single-point fixes zero bias; Two-point fixes zero + span slope; Multi-point captures curvature & hysteresis across the entire span.'
  },
  {
    id: 57,
    title: '1. Single-Point Calibration (Baseline Offset Trim)',
    subtitle: 'Adjusting Zero Error When Sensitivity Slope Is Already Known',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      '**Core Concept:** Compare the sensor against **one single certified reference standard** $(x_{\\text{ref}}, y_{\\text{true,ref}})$ and shift every reading by that constant offset.',
      '**When It Works:** Valid ONLY when the instrument has pure **Zero Drift** (parallel shift) and its factory **Sensitivity Slope ($S$) is already trustworthy and linear**.',
      '**Real-World Examples:**',
      '• **Digital Weighing Scale Tare:** Pressing ZERO/TARE with an empty pan ($0.00\\text{ kg}$) removes dead-weight container bias.',
      '• **Ice-Water Thermometer Check:** Immersing a probe in crushed melting ice ($0.00\\,^{\\circ}\\text{C}$) to verify and trim baseline temperature offset.',
      '• **Differential Pressure Transmitter:** Venting both pressure ports to atmosphere ($\\Delta P = 0\\text{ kPa}$) and executing a 4.00 mA zero-trim.',
      '**Critical Limitation:** Completely blind to **span/sensitivity drift**—if the meter tilts at high readings, single-point calibration will NOT catch it!'
    ],
    speakerNotes:
      'Emphasize why single-point is the fastest field check: e.g., an ice bath at 0°C or pH 7.00 neutral buffer, or pressing Tare on a scale. Warn students that it only shifts the line up/down and cannot fix a wrong slope.',
    takeaway: 'Single-point calibration shifts out a constant zero offset in seconds, assuming the factory slope S has not drifted.'
  },
  {
    id: 58,
    title: 'Formula: Single-Point Calibration Correction',
    subtitle: 'Constant Additive Bias Subtraction Across the Operating Range',
    sectionTag: '1.4 Calibration',
    type: 'formula',
    formulaBlock: {
      equation: '\\Delta_{\\text{offset}} = y_{\\text{raw,ref}} - y_{\\text{true,ref}} \\qquad \\Longrightarrow \\qquad y_{\\text{cal}} = y_{\\text{raw}} - \\Delta_{\\text{offset}}',
      label: 'Equation 1.5 · Single-Point Zero Offset Model',
      description: 'Measures the signed error at one certified reference standard and subtracts that fixed offset from all subsequent readings.',
      symbols: [
        { symbol: '\\Delta_{\\text{offset}}', name: 'Zero Bias / Offset Error', unit: 'Output Units', description: 'Measured deviation recorded at the single reference standard' },
        { symbol: 'y_{\\text{raw,ref}}', name: 'Raw Indicated Reference', unit: 'Output Units', description: 'Uncorrected meter reading while exposed to the standard' },
        { symbol: 'y_{\\text{true,ref}}', name: 'Certified True Value', unit: 'Output Units', description: 'Traceable reference standard value (e.g. 0.00 °C ice bath)' },
        { symbol: 'y_{\\text{cal}}', name: 'Calibrated Value', unit: 'Output Units', description: 'Offset-corrected true measurement reported during operation' }
      ]
    },
    bullets: [
      'Notice the sign convention: If the meter reads $+2\\,^{\\circ}\\text{C}$ too high in an ice bath, $\\Delta_{\\text{offset}} = +2\\,^{\\circ}\\text{C}$, so you **subtract $2\\,^{\\circ}\\text{C}$** from future readings.'
    ],
    speakerNotes:
      'Have students practice the sign carefully: Correction = True - Raw = -Offset. Always verify with common sense: if the thermometer reads high, the true temperature is lower!',
    takeaway: 'Subtract positive bias (or add negative bias) measured at the single reference point across every measurement.'
  },
  {
    id: 59,
    title: 'Solved Numerical: Single-Point Thermometer Calibration',
    subtitle: 'Hydropower Turbine Bearing Temperature Verification',
    sectionTag: '1.4 Worked Example',
    type: 'worked-example',
    workedExample: {
      problem:
        'A digital K-type thermocouple thermometer is immersed in a stirred 0.00 °C crushed-ice reference bath and reads +1.85 °C. Later, inserted into a hydropower Pelton turbine guide-bearing oil sump, it indicates 68.40 °C. Determine: (a) the zero offset error, (b) the calibration equation, (c) the true bearing oil temperature, and (d) the percentage error avoided.',
      given: {
        'Certified Ice Bath (y_true,ref)': '0.00 °C',
        'Raw Ice Bath Reading (y_raw,ref)': '+1.85 °C',
        'Raw Oil Sump Reading (y_raw)': '68.40 °C'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Compute Single-Point Offset Bias (Δoffset)',
          math: '\\Delta_{\\text{offset}} = y_{\\text{raw,ref}} - y_{\\text{true,ref}} = 1.85 - 0.00 = +1.85\\,^{\\circ}\\text{C}',
          explanation: 'The thermometer systematically over-reads by +1.85 °C at the 0.00 °C reference point.'
        },
        {
          stepNumber: 2,
          title: 'Formulate Single-Point Calibration Equation',
          math: 'y_{\\text{cal}} = y_{\\text{raw}} - \\Delta_{\\text{offset}} = y_{\\text{raw}} - 1.85\\,^{\\circ}\\text{C}',
          explanation: 'Subtract the constant +1.85 °C bias from every raw meter reading.'
        },
        {
          stepNumber: 3,
          title: 'Calculate True Turbine Bearing Oil Temperature',
          math: 'y_{\\text{cal}} = 68.40 - 1.85 = 66.55\\,^{\\circ}\\text{C}',
          explanation: 'Apply the offset trim to the raw oil sump measurement.'
        },
        {
          stepNumber: 4,
          title: 'Evaluate Relative Measurement Error Removed',
          math: '\\%\\,\\text{Error} = \\frac{68.40 - 66.55}{66.55} \\times 100\\% = \\frac{1.85}{66.55} \\times 100\\% = +2.78\\%',
          explanation: 'Single-point trim prevents a +2.78% false high-temperature trip warning.'
        }
      ],
      finalAnswer: 'Offset = +1.85 °C | True Bearing Oil Temp = 66.55 °C (2.78% error fixed)',
      practicalInsight:
        'If the bearing alarm threshold is 68.0 °C, an uncalibrated meter reading 68.40 °C would cause a false plant shutdown—even though the true oil temperature is safely at 66.55 °C!'
    },
    speakerNotes:
      'Relate this directly to hydropower turbine maintenance: false high-bearing-temperature trips cost energy generation revenue.',
    takeaway: 'Single-point calibration takes under 2 minutes with an ice bath and eliminates false baseline alarms.'
  },
  {
    id: 60,
    title: '2. Two-Point Calibration (Zero + Span Alignment)',
    subtitle: 'Correcting Both Baseline Offset AND Slope Sensitivity Simultaneously',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      '**Core Concept:** Expose the instrument to **two certified standards** near opposite ends of its range: a **Low Reference $(x_1, y_1)$** and a **High Reference $(x_2, y_2)$**.',
      '**Why Two Points Matter:** Two distinct points uniquely define a straight line ($y = S \\cdot x + y_0$), fixing **BOTH Zero Drift (intercept $y_0$) AND Span Drift (slope $S$)**!',
      '**Best Practice Anchor Choice:** Select $x_1 \\approx 10\\%$ (Zero/Low) and $x_2 \\approx 80\\%\\text{–}90\\%$ (Span/High) of Full Scale so extrapolation error stays tiny.',
      '**Real-World Examples:**',
      '• **Industrial 4–20 mA Pressure Transmitter:** Apply $0\\text{ bar}$ (trim 4.00 mA Zero) and $10\\text{ bar}$ (trim 20.00 mA Span).',
      '• **Laboratory pH Meter:** Calibrate sequentially in **pH 7.00 neutral buffer** (Zero) and **pH 4.01 acidic buffer** (Nernst Slope).',
      '• **Ultrasonic Tank Level Sensor:** Measure empty tank height (Low) and filled tank height (High) to align acoustic speed-of-sound slope.'
    ],
    speakerNotes:
      'In industry, "Zero & Span" calibration IS Two-Point calibration. Remind students: in a pH meter, aging glass electrodes lose slope (from 59.16 mV/pH down to ~54 mV/pH)—single-point at pH 7 would miss acidic readings completely!',
    takeaway: 'Two-point ("Zero & Span") calibration corrects both offset shift and sensitivity tilt for linear sensors.'
  },
  {
    id: 61,
    title: 'Formula: Two-Point Linear Interpolation & Gain Model',
    subtitle: 'Computing Actual Sensitivity (S), Zero Intercept (y0), and True Input (x)',
    sectionTag: '1.4 Calibration',
    type: 'formula',
    formulaBlock: {
      equation: 'S = \\frac{y_2 - y_1}{x_2 - x_1}, \\qquad y_0 = y_1 - S \\cdot x_1 \\qquad \\Longrightarrow \\qquad x_{\\text{true}} = x_1 + \\frac{y_{\\text{raw}} - y_1}{y_2 - y_1}(x_2 - x_1)',
      label: 'Equation 1.6 · Two-Point Zero & Span Calibration Equations',
      description: 'Recovers the exact slope S and zero intercept y0 from two reference standards, enabling linear inverse mapping.',
      symbols: [
        { symbol: '(x_1, y_1)', name: 'Low Calibration Point', unit: 'In, Out Units', description: 'Lower standard input x1 and measured instrument output y1' },
        { symbol: '(x_2, y_2)', name: 'High Calibration Point', unit: 'In, Out Units', description: 'Upper standard input x2 and measured instrument output y2' },
        { symbol: 'S', name: 'Actual Sensitivity (Span)', unit: 'Out / In', description: 'True calibrated slope replacing drifted factory rating' },
        { symbol: 'y_0', name: 'Zero Intercept (Offset)', unit: 'Output Units', description: 'Extrapolated sensor output when true physical input x = 0' }
      ]
    },
    bullets: [
      'Two-point calibration assumes the sensor behaves linearly between $x_1$ and $x_2$; any curved mid-range bowing remains invisible unless more intermediate points are tested.'
    ],
    speakerNotes:
      'Highlight how the right-hand inverse formula lets any microcontroller PLC convert raw ADC voltage y_raw directly into calibrated physical units x_true without floating-point confusion.',
    takeaway: 'From two reference points, engineers recover both real sensitivity S = Δy/Δx and zero intercept y0 = y1 - S·x1.'
  },
  {
    id: 62,
    title: 'Solved Numerical: Two-Point Hydraulic Pressure Calibration',
    subtitle: 'Zero & Span Recovery Using a Deadweight Pressure Tester',
    sectionTag: '1.4 Worked Example',
    type: 'worked-example',
    imageUrl: '/assets/unit1/unit1_deadweight_tester.jpg',
    imageCaption: 'Deadweight calibrator applying certified 10 bar and 90 bar test points',
    workedExample: {
      problem:
        'A 0–100 bar hydraulic pressure transducer (factory nominal 0–10 V, i.e. 0.100 V/bar) is tested on a deadweight calibrator at two reference loads: (10.0 bar, 1.45 V) and (90.0 bar, 8.65 V). In field operation, the transducer outputs 6.85 V. Calculate: (a) actual sensitivity S, (b) zero-pressure intercept y0, (c) true calibrated pressure, and (d) error avoided vs. factory nominal.',
      given: {
        'Point 1 (Low Standard)': 'x1 = 10.0 bar, y1 = 1.45 V',
        'Point 2 (High Standard)': 'x2 = 90.0 bar, y2 = 8.65 V',
        'Field Output (y_raw)': '6.85 V (nominal = 0.100 V/bar)'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Compute Actual Calibrated Sensitivity Slope (S)',
          math: 'S = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{8.65 - 1.45}{90.0 - 10.0} = \\frac{7.20\\text{ V}}{80.0\\text{ bar}} = 0.090\\text{ V/bar}',
          explanation: 'Sensitivity has degraded by 10% below the factory 0.100 V/bar rating.'
        },
        {
          stepNumber: 2,
          title: 'Calculate Zero-Pressure Intercept (y0)',
          math: 'y_0 = y_1 - S \\cdot x_1 = 1.45 - 0.090 \\times 10.0 = 1.45 - 0.90 = +0.55\\text{ V}',
          explanation: 'Even at 0.0 bar, the transducer outputs a +0.55 V zero offset.'
        },
        {
          stepNumber: 3,
          title: 'Invert Line to Find True Pressure at y_raw = 6.85 V',
          math: 'P_{\\text{true}} = \\frac{y_{\\text{raw}} - y_0}{S} = \\frac{6.85 - 0.55}{0.090} = \\frac{6.30}{0.090} = 70.0\\text{ bar}',
          explanation: 'Correcting both intercept (+0.55 V) and slope (0.090 V/bar) recovers exact pressure.'
        },
        {
          stepNumber: 4,
          title: 'Compare Against Uncalibrated Nominal Rating',
          math: 'P_{\\text{naive}} = \\frac{6.85\\text{ V}}{0.100\\text{ V/bar}} = 68.5\\text{ bar} \\implies \\text{Error Avoided} = 1.5\\text{ bar}',
          explanation: 'Using factory specs without two-point calibration would under-read pressure by 1.5 bar.'
        }
      ],
      finalAnswer: 'S = 0.090 V/bar | y0 = +0.55 V | P_true = 70.0 bar (1.5 bar avoided)',
      practicalInsight:
        'Notice that at 6.85 V the zero offset (+0.55 V) and slope loss (-10%) partially oppose each other; at 100 bar the error widens to +4.5 bar!'
    },
    speakerNotes:
      'Walk students carefully through why two points fix everything for a linear transducer: we get both slope 0.090 V/bar and intercept +0.55 V.',
    takeaway: 'Two-point calibration catches simultaneous offset shifts and sensitivity degradation across the span.'
  },
  {
    id: 63,
    title: '3. Multi-Point Calibration (Full-Range Regression)',
    subtitle: 'Testing N ≥ 5 Standards Across Ascending & Descending Cycles',
    sectionTag: '1.4 Calibration',
    type: 'concept',
    bullets: [
      '**Core Concept:** Apply **$N \\ge 5$ evenly spaced certified inputs** (e.g. 0%, 20%, 40%, 60%, 80%, 100% of Full Scale), often in both **ascending and descending passes**.',
      '**Why Multi-Point Is Essential:** Two points always draw a straight line—so a 2-point test is **blind to middle-of-scale bowing (non-linearity)** and **hysteresis loops**!',
      '**Best-Fit Linearization & Polynomials:** Fits an Ordinary Least Squares (OLS) line $y = mx + c$ (or quadratic/Steinhart–Hart curve) across all points, averaging out random noise by $\\sqrt{N}$.',
      '**Real-World Mandatory Applications:**',
      '• **NTC Thermistors & Type-K Thermocouples:** Inherently non-linear over wide temperature ranges.',
      '• **Orifice-Plate Flowmeters ($\\Delta P \\propto Q^2$):** Strong square-law curvature requires multi-point flow-rig testing.',
      '• **ISO/IEC 17025 Accredited Certificates:** Load cells, torque shafts, and precision deadweight gauges require multi-point traceability.'
    ],
    speakerNotes:
      'Give the classic warning: Any two points define a straight line, even on a banana! You only discover curvature and hysteresis when you measure 5 or more points.',
    takeaway: 'Multi-point calibration (N ≥ 5 points) reveals non-linearity, measures hysteresis, and produces ISO-traceable curves.'
  },
  {
    id: 64,
    title: 'Formula: Multi-Point Least-Squares & Non-Linearity',
    subtitle: 'Ordinary Least-Squares (OLS) Best-Fit Line and Maximum Residual Error',
    sectionTag: '1.4 Calibration',
    type: 'formula',
    formulaBlock: {
      equation: 'm = \\frac{N\\sum x_i y_i - (\\sum x_i)(\\sum y_i)}{N\\sum x_i^2 - (\\sum x_i)^2}, \\quad c = \\bar{y} - m\\bar{x}, \\quad \\%\\text{NL} = \\frac{\\max|y_i - (mx_i + c)|}{y_{\\text{FSO}}} \\times 100\\%',
      label: 'Equation 1.7 · Multi-Point OLS Regression & Non-Linearity',
      description: 'Computes the best-fit sensitivity slope (m), intercept (c), and worst-case residual non-linearity (% FSO) across N points.',
      symbols: [
        { symbol: 'm', name: 'OLS Best-Fit Sensitivity', unit: 'Out / In', description: 'Least-squares slope minimizing total squared vertical residuals' },
        { symbol: 'c', name: 'OLS Zero Intercept', unit: 'Output Units', description: 'Zero-input intercept computed via sample means (x̄, ȳ)' },
        { symbol: '|y_i - \\hat{y}_i|', name: 'Point Residual Error', unit: 'Output Units', description: 'Deviation between measured point and ideal best-fit line' },
        { symbol: '\\%\\text{NL}', name: 'Independent Non-Linearity', unit: '% FSO', description: 'Peak residual normalized by Full-Scale Output span y_FSO' }
      ]
    },
    bullets: [
      'Each test point checks both agreement with the straight line and whether any single residual exceeds the manufacturer tolerance specification.'
    ],
    speakerNotes:
      'Reassure students: although the OLS equation looks dense, every engineering calculator (STAT mode) and Python/Excel script computes sum(x), sum(y), sum(x^2), and sum(xy) in seconds.',
    takeaway: 'OLS regression distributes errors evenly across all N points and quantifies % Non-Linearity from peak residuals.'
  },
  {
    id: 65,
    title: 'Solved Numerical: 5-Point Load Cell Least-Squares Calibration',
    subtitle: 'Determining Best-Fit Equation, % Non-Linearity & Field Load',
    sectionTag: '1.4 Worked Example',
    type: 'worked-example',
    workedExample: {
      problem:
        'A 0–8 kN strain-gauge bridge load cell yields outputs yi = [0.10, 2.04, 4.12, 5.98, 8.06] mV at certified deadweight loads xi = [0, 2, 4, 6, 8] kN (N = 5). Find: (a) best-fit sensitivity m and intercept c, (b) peak residual and % Non-Linearity (% FSO), and (c) true force if field output is 5.053 mV.',
      given: {
        'N = 5 Loads (xi)': '[0, 2, 4, 6, 8] kN  →  Σxi = 20, Σxi² = 120',
        'Outputs (yi)': '[0.10, 2.04, 4.12, 5.98, 8.06] mV',
        'Sums (Σyi, Σxiyi)': 'Σyi = 20.30 mV,  Σxiyi = 120.92 kN·mV'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Compute Least-Squares Sensitivity Slope (m)',
          math: 'm = \\frac{5(120.92) - (20)(20.30)}{5(120) - 20^2} = \\frac{604.60 - 406.00}{600 - 400} = \\frac{198.60}{200} = 0.993\\text{ mV/kN}',
          explanation: 'Best-fit sensitivity across all 5 load steps is 0.993 mV/kN.'
        },
        {
          stepNumber: 2,
          title: 'Compute Best-Fit Zero Intercept (c)',
          math: 'c = \\bar{y} - m\\bar{x} = \\frac{20.30}{5} - 0.993\\left(\\frac{20}{5}\\right) = 4.060 - 3.972 = +0.088\\text{ mV}',
          explanation: 'Calibration model: ŷ = 0.993·x + 0.088 mV.'
        },
        {
          stepNumber: 3,
          title: 'Find Peak Residual & % Non-Linearity (at x = 6 kN)',
          math: '\\hat{y}(6) = 0.993(6)+0.088 = 6.046\\text{ mV} \\;\\Rightarrow\\; \\%\\%\\text{NL} = \\frac{|5.980 - 6.046|}{8.06 - 0.10}\\times 100\\% = 0.83\\%\\text{ FSO}',
          explanation: 'Predicted values [0.088, 2.074, 4.060, 6.046, 8.032] show max deviation 0.066 mV at 6 kN.'
        },
        {
          stepNumber: 4,
          title: 'Invert Calibrated Line for Field Output y = 5.053 mV',
          math: 'x_{\\text{true}} = \\frac{y_{\\text{meas}} - c}{m} = \\frac{5.053 - 0.088}{0.993} = \\frac{4.965}{0.993} = 5.00\\text{ kN}',
          explanation: 'Using the calibrated OLS line recovers an exact load of 5.00 kN.'
        }
      ],
      finalAnswer: 'ŷ = 0.993x + 0.088 mV | %NL = 0.83% FSO | Field Load = 5.00 kN',
      practicalInsight:
        'A two-point fit using only 0 and 8 kN would predict a 0.095 mV residual at 4 kN; multi-point OLS balances errors evenly across the entire working range!'
    },
    speakerNotes:
      'Double-check the intermediate table with students on the board: x*y values are 0, 4.08, 16.48, 35.88, 64.48 which sum cleanly to 120.92. This is a classic 8-mark university exam numerical!',
    takeaway: 'Multi-point least squares minimizes residual variance across the full operating span and quantifies true sensor linearity.'
  },
  {
    id: 66,
    title: 'Selecting the Right Calibration Method: Comparison Matrix',
    subtitle: 'Engineering Trade-offs Across Single-Point, Two-Point & Multi-Point Protocols',
    sectionTag: '1.4 Calibration',
    type: 'types',
    typesGrid: [
      {
        typeName: 'Single-Point Calibration',
        badge: 'Fast Field Check',
        description: 'Tests 1 known reference value to compute and remove constant zero-offset shift Δ_offset.',
        keyFeature: 'Fixes Zero Drift ONLY; assumes factory sensitivity slope S is fixed & linear.',
        example: 'Bathroom/bench scale Tare button; 0.00 °C ice-bath thermometer check; atmospheric vent DP zeroing.'
      },
      {
        typeName: 'Two-Point Calibration',
        badge: 'Linear Zero + Span',
        description: 'Tests 2 endpoints (typically ~10% and ~90% span) to compute true sensitivity slope S and intercept y0.',
        keyFeature: 'Fixes BOTH Zero Offset & Span Slope drift simultaneously for linear sensors.',
        example: '4–20 mA pressure transmitters (0 & 10 bar); pH meters (pH 7.00 & 4.01 buffers); tank level meters.'
      },
      {
        typeName: 'Multi-Point Calibration',
        badge: 'ISO 17025 Gold Standard',
        description: 'Tests N ≥ 5 points ascending/descending using OLS regression or polynomial lookup tables.',
        keyFeature: 'Fixes Zero, Span, Non-Linearity bowing & quantifies Hysteresis + Random scatter.',
        example: 'Deadweight pressure calibrators; NTC thermistors; orifice flowmeters; structural load cells.'
      }
    ],
    speakerNotes:
      'Summarize clearly: Choose single-point for daily quick checks, two-point for routine linear transmitters, and multi-point for curved sensors or formal certification.',
    takeaway: 'Match calibration effort to physics: linear daily checks need 1–2 points; non-linear or certified transducers demand ≥ 5 points.'
  },
  {
    id: 67,
    title: 'Check Your Understanding: Choosing Calibration Method',
    subtitle: 'Concept Check 1.4B · Diagnosing Calibration Blind Spots',
    sectionTag: '1.4 Quiz',
    type: 'check-understanding',
    quiz: {
      question:
        'A plant technician immerses an aging thermocouple probe in a 0.00 °C ice bath and performs a Single-Point zero adjustment so it reads 0.00 °C accurately. Later, on a certified 300.0 °C steam calibration oven, the same probe reads 312.0 °C. What error occurred and how must it be fixed?',
      options: [
        'Repeat the Single-Point ice bath test 50 more times.',
        'The sensor has Sensitivity (Span) Drift, which Single-Point calibration cannot detect; it requires Two-Point or Multi-Point calibration.',
        'The meter suffered from digital parallax error.',
        'Subtract 12 °C from the 0.00 °C ice bath reading.'
      ],
      correctIndex: 1,
      explanation:
        'Correct! Reading accurately at 0.00 °C while over-reading by +12.0 °C at 300.0 °C proves the calibration line has tilted (Sensitivity / Span Drift). Only Two-Point (Zero + Span) or Multi-Point calibration measures and corrects slope error.'
    },
    speakerNotes:
      'Give students 30 seconds to diagnose why 0°C matched yet 300°C drifted. This drives home the key flaw of single-point calibration.',
    takeaway: 'Correct readings at zero never guarantee accuracy at high range—only Two-Point or Multi-Point calibration verifies slope!'
  },
  {
    id: 68,
    title: 'Check Your Understanding: Calibration Metrics',
    subtitle: 'Concept Check 1.4A',
    sectionTag: '1.4 Quiz',
    type: 'check-understanding',
    quiz: {
      question:
        'A technician measures a certified 50.00 kg weight 5 times using a workshop digital scale. The readings are: 53.21 kg, 53.20 kg, 53.22 kg, 53.21 kg, 53.20 kg. How would you describe this scale?',
      options: [
        'Both highly accurate and highly precise.',
        'Highly precise, but inaccurate due to a systematic zero error of about +3.21 kg.',
        'Neither accurate nor precise.',
        'The scale has failed completely and cannot be repaired.'
      ],
      correctIndex: 1,
      explanation:
        'Correct! The scale is highly precise because its readings repeat tightly within ±0.01 kg. However, it is inaccurate because every reading is offset from the true 50.00 kg standard by +3.21 kg. A simple single-point zero-calibration adjustment will fix it!'
    },
    speakerNotes:
      'Praise students who identify that high precision allows an instrument to be easily corrected by adjusting zero bias.',
    takeaway: 'Tightly repeatable readings with a constant offset show high precision with systematic zero bias.'
  },

  // =========================================================================
  // SECTION 1.5: MEASUREMENT ERRORS & UNCERTAINTY (9-SLIDE SEQUENCE)
  // =========================================================================
  {
    id: 69,
    title: '1.5 Errors & Uncertainty in Measurement',
    subtitle: 'Section 1.5 · Errors · Types & Differences · Rectification · Error vs. Uncertainty · Type A & Type B · Combined Uncertainty · Numerical',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'section-divider',
    speakerNotes:
      'Welcome to Section 1.5: Errors and Uncertainty in Measurement. We will cover why every measurement deviates from the true value, the three error classes, how to compare and rectify them, how Error differs from Uncertainty, Type A vs. Type B uncertainty, Combined RSS uncertainty, and a full numerical problem.',
    takeaway: 'Every real measurement contains error; engineers quantify remaining doubt as standardized uncertainty.'
  },
  {
    id: 70,
    title: 'Errors in Measurement',
    subtitle: 'Figure 5 · Deviation Between Measured Value and True Physical Value',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'figure',
    figureKey: 'fig5',
    formulaBlock: {
      equation: 'E_a = x_{\\text{measured}} - x_{\\text{true}} \\qquad\\qquad \\%E = \\frac{x_{\\text{measured}} - x_{\\text{true}}}{x_{\\text{true}}} \\times 100\\% \\qquad\\qquad C = -E_a',
      label: 'Eq. 1.7 · Absolute Error, Relative (%) Error & Applied Correction'
    },
    speakerNotes:
      'Explain clearly: Absolute Error Ea = x_measured - x_true. Relative (%) error scales Ea against the true magnitude. Applying Correction C = -Ea restores the true value when bias is known. Point out on Figure 5 how systematic bias shifts the sample mean off the true value, while random spread widens the bell curve around the mean.',
    takeaway: 'Measurement error is the deviation from true value (Ea = xm − xtrue); accuracy reflects bias while precision reflects scatter.'
  },
  {
    id: 71,
    title: 'Types of Measurement Error (Three Core Classes)',
    subtitle: 'Conceptual Breakdown: Gross, Systematic, and Random Errors',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'types',
    typesGrid: [
      {
        typeName: '1. Gross Errors',
        badge: 'Block 1 · Human Blunders',
        description:
          'Large, erratic mistakes caused by operator carelessness, parallax misreading, transposed digits, or choosing the wrong meter range.',
        keyFeature:
          'Non-statistical outlier spikes ($|E| \\gg \\sigma$) that severely corrupt datasets and cannot be averaged out.',
        example:
          'Reading a 0–100 V scale on a 250 V dial; recording $52\\text{ kg}$ instead of $25\\text{ kg}$; missing unit conversion.'
      },
      {
        typeName: '2. Systematic Errors (Bias)',
        badge: 'Block 2 · Consistent Offset',
        description:
          'Repeatable, one-directional shift pushing every reading consistently high or low due to zero drift, wear, ambient shift, or loading.',
        keyFeature:
          'Degrades Accuracy (mean offset $E_{\\text{bias}}$); stays completely flat even across $N = 1{,}000$ repeated readings.',
        example:
          'Scale with $+1.5\\text{ kg}$ zero error; thermally expanded steel tape; voltmeter loading ($R_m \\not\\gg R_s$).'
      },
      {
        typeName: '3. Random Errors (Noise)',
        badge: 'Block 3 · Stochastic Scatter',
        description:
          'Unpredictable microscopic $\\pm$ fluctuations around the sample mean caused by uncontrollable thermal, electrical, or ambient noise.',
        keyFeature:
          'Follows a symmetric Gaussian spread ($\\bar{x}, s$); limits Precision and shrinks by $1/\\sqrt{N}$ upon averaging.',
        example:
          'Thermal resistor Johnson noise, air drafts moving a balance pan, mechanical floor vibration.'
      }
    ],
    speakerNotes:
      'Walk cleanly through the 3 conceptual blocks left-to-right: Gross errors are human blunders; Systematic errors are repeatable directional offsets; Random errors are irreducible stochastic noise around the mean.',
    takeaway: 'Gross = human blunder; Systematic = consistent directional bias; Random = unpredictable Gaussian scatter.'
  },
  {
    id: 72,
    title: 'Difference Between Error Types (Tabular Form)',
    subtitle: 'Side-by-Side Comparison of Gross, Systematic, and Random Errors',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'comparison-table',
    comparisonTable: {
      headers: [
        'Comparison Basis',
        'Gross Errors',
        'Systematic Errors (Bias)',
        'Random Errors (Noise)'
      ],
      rows: [
        [
          'Primary Source',
          'Human carelessness, wrong scale, calculation slips',
          'Calibration drift, zero offset, ambient shift, loading',
          'Microscopic thermal agitation, noise, air turbulence'
        ],
        [
          'Direction & Pattern',
          'Erratic, isolated extreme outlier jumps',
          'Consistent, repeatable (+ or − directional offset)',
          'Unpredictable symmetric $\\pm$ scatter around mean'
        ],
        [
          'Accuracy vs. Precision',
          'Invalidates single reading & ruins dataset trust',
          'Hurts Accuracy (shifts mean away from true value)',
          'Hurts Precision (widens bell-curve spread $\\sigma$)'
        ],
        [
          'Effect of Averaging ($N$)',
          'No fix — single outlier severely skews the mean',
          'Zero fix — constant bias stays flat for any $N$',
          'Improves — scatter drops by $1/\\sqrt{N}$ as $N$ grows'
        ],
        [
          'Detection Method',
          'Cross-check logs, range checks, outlier tests',
          'Calibrate against traceable reference standard',
          'Measure sample standard deviation ($s$) across trials'
        ]
      ],
      verdict:
        'Diagnostic Rule: Tightly clustered off-target readings = Systematic Bias; wide symmetric scatter around truth = Random Noise.'
    },
    speakerNotes:
      'Use this summary table to anchor exam comparisons: highlight how Systematic Bias hurts Accuracy and resists averaging, whereas Random Error hurts Precision and decays as 1/sqrt(N).',
    takeaway: 'Averaging cures Random scatter ($1/\\sqrt{N}$) but never cures Systematic bias or Gross outliers.'
  },
  {
    id: 73,
    title: 'Rectification of Error Based Upon Types',
    subtitle: 'Targeted Engineering Actions to Prevent, Calibrate & Suppress Each Error Class',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'concept',
    equation: '\\bar{x} = \\frac{1}{N}\\sum_{i=1}^N x_i \\qquad\\qquad C_{\\text{cal}} = -E_{\\text{bias}} = x_{\\text{true}} - x_{\\text{measured}}',
    formulaBlock: {
      equation: '\\bar{x} = \\frac{1}{N}\\sum_{i=1}^N x_i \\qquad\\qquad C_{\\text{cal}} = -E_{\\text{bias}} = x_{\\text{true}} - x_{\\text{measured}}',
      label: 'Core Rectification Equations: Ensemble Averaging (Random) & Bias Correction (Systematic)'
    },
    bullets: [
      '1. Rectifying Gross Errors (Prevention & Screening): Use strict readback checklists, mirror-backed scales (eliminate parallax) or digital displays, automated range bounds, and discard verified outliers before analysis.',
      '2. Rectifying Systematic Errors (Calibration & Design): Perform periodic zero/span calibration against traceable standards, subtract bias mathematically ($y_{\\text{corr}} = y_{\\text{raw}} + C_{\\text{cal}}$), use differential/Wheatstone bridges for thermal cancellation, and buffer circuits ($R_m \\gg R_s$).',
      '3. Rectifying Random Errors (Statistics & Filtering): Compute the ensemble mean $\\bar{x}$ over $N$ repeated trials (reduces uncertainty by $1/\\sqrt{N}$), and improve Signal-to-Noise Ratio (SNR) using shielded cables, low-pass filters, and vibration isolation.'
    ],
    speakerNotes:
      'Emphasize matching the right cure to the right disease: never try to average away a zero-offset bias, and never calibrate away a random thermal noise floor.',
    takeaway: 'Prevent Gross blunders with checklists, calibrate/compensate Systematic bias, and average/filter Random noise.'
  },
  {
    id: 74,
    title: 'Error vs. Uncertainty: What is the Difference?',
    subtitle: 'Distinguishing Single Unknown Deviation from Quantified Confidence Interval',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'comparison-table',
    comparisonTable: {
      headers: [
        'Comparison Basis',
        'Measurement Error ($E$)',
        'Measurement Uncertainty ($\\pm U$)'
      ],
      rows: [
        [
          'Formal Meaning',
          'Single difference between one reading and true value ($E = x_m - x_{\\text{true}}$)',
          'Half-width of a verified interval around $\\bar{x}$ expected to contain truth ($\\bar{x} \\pm U$)'
        ],
        [
          'Mathematical Form',
          'Signed single number ($+0.8\\text{ V}$ or $-0.3\\,^{\\circ}\\text{C}$)',
          'Always a non-negative $\\pm$ interval stated with confidence ($\\pm 0.53\\,^{\\circ}\\text{C},\\; 95\\%$)'
        ],
        [
          'Practical Knowability',
          'Exact error is unknowable in field tests because $x_{\\text{true}}$ is unknown',
          'Always computable from sample spread ($u_A$) and instrument specs ($u_B$)'
        ],
        [
          'After Applying Calibration',
          'Known systematic error is corrected and subtracted out ($C = -E_{\\text{bias}}$)',
          'Does NOT become zero — reflects remaining doubt after correction'
        ],
        [
          'Standard Reporting',
          'Used during calibration checks against a higher primary standard',
          'Mandatory on ISO/IEC 17025 lab certificates & engineering specs'
        ]
      ],
      verdict:
        'Error is an idealized single deviation ($x_m - x_{\\text{true}}$); Uncertainty is the honest statistical margin ($\\pm U$) proving measurement quality.'
    },
    speakerNotes:
      'Students often treat Error and Uncertainty as synonyms. Clarify that Error is a single unknown offset (positive or negative), whereas Uncertainty is a positive ± confidence band evaluated via ISO GUM.',
    takeaway: 'Error is an unknown single deviation; Uncertainty is a calculable ± interval stating how well you know the result.'
  },
  {
    id: 75,
    title: 'Type A and Type B Uncertainty (ISO GUM)',
    subtitle: 'Figure 5B · Statistical Repeated-Sample Evaluation (uA) vs. Non-Statistical Models (uB)',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'figure',
    figureKey: 'fig5b',
    formulaBlock: {
      equation: 'u_A = \\frac{s}{\\sqrt{N}} \\qquad\\quad u_B = \\frac{a}{\\sqrt{3}}\\;\\text{(Rect.)},\\quad \\frac{a}{\\sqrt{6}}\\;\\text{(Tri.)},\\quad \\frac{U}{k}\\;\\text{(Cert.)}',
      label: 'Eq. 1.8 · Standard Uncertainties: Type A (Active Trials) & Type B (Datasheets / Certificates)'
    },
    speakerNotes:
      'Explain the two ISO GUM categories using Figure 5B: Type A comes from statistical analysis of N repeated readings (uA = s / sqrt(N), shrinking by 1/sqrt(N)). Type B comes from datasheets, resolution limits, or calibration certificates using Rectangular (a/sqrt(3)), Triangular (a/sqrt(6)), or Normal (U/k) probability models.',
    takeaway: 'Type A uses repeated trials (uA = s/√N); Type B uses tolerances/certificates (uB = a/√3, a/√6, or U/k).'
  },
  {
    id: 76,
    title: 'Combined & Expanded Uncertainty (ISO GUM)',
    subtitle: 'Figure 5C · Root-Sum-Square (RSS) Propagation (uc) & Confidence Coverage Band (U)',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'figure',
    figureKey: 'fig5c',
    formulaBlock: {
      equation: 'u_c = \\sqrt{u_A^2 + u_B^2} = \\sqrt{\\sum_{i=1}^m \\left(\\frac{\\partial f}{\\partial x_i}\\,u_i\\right)^2} \\qquad\\text{and}\\qquad U = k \\cdot u_c \\;\\;(k = 2 \\Rightarrow 95.4\\%)',
      label: 'Eq. 1.9 · ISO GUM Combined Standard Uncertainty (uc) & Expanded Uncertainty (U)'
    },
    speakerNotes:
      'Show how independent Type A and Type B standard uncertainties are never added linearly—they combine in quadrature via Root-Sum-Square (uc). For multi-variable indirect measurements y = f(x1, x2, ...), weight each component by its sensitivity coefficient ci = df/dxi. Finally multiply uc by coverage factor k = 2 to state 95% confidence.',
    takeaway: 'Combine independent uncertainties via RSS: uc = √(uA² + uB²); scale by k = 2 for 95% confidence (Mean ± U).'
  },
  {
    id: 77,
    title: 'Numerical Solution: Full ISO GUM Uncertainty Calculation',
    subtitle: 'Step-by-Step Worked Numerical Practice (Type A, Type B, Combined & Expanded)',
    sectionTag: '1.5 Worked Example',
    type: 'worked-example',
    workedExample: {
      problem:
        'A technician measures the temperature of an industrial furnace 9 times (N = 9). The sample mean is 150.00 °C and the sample standard deviation is s = 0.60 °C. The manufacturer calibration datasheet specifies an accuracy tolerance of ±0.30 °C (rectangular distribution). Calculate: (1) Type A uncertainty uA, (2) Type B uncertainty uB, (3) Combined standard uncertainty uc, and (4) Expanded uncertainty U at 95% confidence (k = 2).',
      given: {
        'Number of Readings (N)': '9',
        'Sample Mean (x̄)': '150.00 °C',
        'Sample Std Dev (s)': '0.60 °C',
        'Tolerance Half-Width (a)': '0.30 °C (Rectangular)',
        'Coverage Factor (k)': '2 (95.4% confidence)'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Type A Uncertainty (uA)',
          math: 'u_A = \\frac{s}{\\sqrt{N}} = \\frac{0.60\\,^{\\circ}\\text{C}}{\\sqrt{9}} = \\frac{0.60}{3} = 0.200\\,^{\\circ}\\text{C}',
          explanation: 'Divide sample standard deviation s by √N = √9 = 3.'
        },
        {
          stepNumber: 2,
          title: 'Calculate Type B Uncertainty (uB)',
          math: 'u_B = \\frac{a}{\\sqrt{3}} = \\frac{0.30\\,^{\\circ}\\text{C}}{1.732} = 0.173\\,^{\\circ}\\text{C}',
          explanation: 'Use the Rectangular divisor √3 for manufacturer datasheet tolerance ±0.30 °C.'
        },
        {
          stepNumber: 3,
          title: 'Calculate Combined Standard Uncertainty (uc)',
          math: 'u_c = \\sqrt{u_A^2 + u_B^2} = \\sqrt{0.200^2 + 0.173^2} = \\sqrt{0.0400 + 0.0300} = 0.265\\,^{\\circ}\\text{C}',
          explanation: 'Combine Type A and Type B 1-sigma uncertainties in quadrature via Root-Sum-Square (RSS).'
        },
        {
          stepNumber: 4,
          title: 'Calculate Expanded Uncertainty (U = k · uc)',
          math: 'U = 2 \\times 0.265\\,^{\\circ}\\text{C} = 0.53\\,^{\\circ}\\text{C}',
          explanation: 'Multiply combined standard uncertainty uc by coverage factor k = 2.'
        }
      ],
      finalAnswer: 'Reported Result = 150.00 ± 0.53 °C (k = 2, 95% confidence)',
      practicalInsight:
        'Engineering Interpretation: We are 95% confident that the true furnace temperature lies between 149.47 °C and 150.53 °C.'
    },
    speakerNotes:
      'Walk step-by-step through all 4 calculations: uA = 0.200 °C, uB = 0.173 °C, uc = 0.265 °C, and U = 0.53 °C. Notice how the numerical values directly match Figure 5C.',
    takeaway: 'Always report final results as Sample Mean ± Expanded Uncertainty with units and coverage factor k.'
  },

  // =========================================================================
  // SECTION 1.6: INTRUSIVE VS. NON-INTRUSIVE SENSING
  // =========================================================================
  {
    id: 78,
    title: '1.6 Intrusive vs. Non-Intrusive Sensing',
    subtitle: 'Section 1.6 · Touching vs. Observing From Outside · Circuit & Flow Loading',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'section-divider',
    speakerNotes:
      'Now let us explore Section 1.6: Intrusive vs. Non-Intrusive Sensing. When we measure something, do we need to drill a hole in the pipe or cut the wire? Or can we measure from the outside without touching? Let us see.',
    takeaway: 'Intrusive sensors penetrate the process; non-intrusive sensors measure from outside without contact.'
  },
  {
    id: 79,
    title: 'What is Intrusive Sensing?',
    subtitle: 'The Sensor Penetrates Directly into the Process Medium',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'concept',
    bullets: [
      'In intrusive sensing, the physical probe enters inside the pipe, tank, or electrical conductor.',
      'Examples:',
      '• Immersion Thermowell: A metal tube welded through a pipe wall directly into rushing hot steam.',
      '• Orifice Plate Flowmeter: A metal disc with a hole placed across a water pipe, forcing water through a constriction.',
      '• Series Ammeter: You must physically cut a circuit wire and connect the ammeter in line with the flowing current.',
      'The probe makes direct physical contact with the process fluid or current.'
    ],
    speakerNotes:
      'Show that intrusive means inserting a physical object right into the flow or circuit.',
    takeaway: 'Intrusive sensing requires physical penetration into the fluid, pipe, or electrical circuit.'
  },
  {
    id: 80,
    title: 'The Drawbacks of Intrusive Sensing',
    subtitle: 'Turbulence, Leaks, and Energy Losses',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'concept',
    bullets: [
      'While intrusive sensors are often simple and cheap, they cause serious engineering problems:',
      '1. Pressure Drop & Energy Loss: Sticking a metal probe into a pipe obstructs fluid flow, creating turbulence and wasting pump power.',
      '2. Wear & Chemical Corrosion: Abrasive slurry or corrosive acid wears out the probe tip over time.',
      '3. High Leak Risk: Every hole drilled into a high-pressure pipe creates a potential point of catastrophic leak or fire.',
      '4. Plant Shutdown Required: To replace a damaged intrusive sensor, you must shut down the factory pipeline!'
    ],
    speakerNotes:
      'Ask students: "Would you want to drill a hole into a 200 bar boiling acid pipeline if you could avoid it?"',
    takeaway: 'Intrusive probes cause pressure drops, wear out from fluid abrasion, and create leak hazards.'
  },
  {
    id: 81,
    title: 'The Voltmeter Loading Effect Explained',
    subtitle: 'How an Intrusive Electrical Meter Distorts Circuit Voltage',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'concept',
    bullets: [
      'When you connect a voltmeter across a component, you are placing the voltmeter in parallel with the circuit.',
      'Inside the voltmeter, there is an internal resistance $R_m$.',
      'Because $R_m$ is connected, electric current flows through the meter.',
      'This extra current causes a voltage drop across the circuit internal source resistance $R_s$.',
      'As a result, the measured voltage $V_{\\text{measured}}$ is always LOWER than the true open-circuit voltage $V_{\\text{true}}$!',
      'This error is the electrical loading effect.'
    ],
    speakerNotes:
      'Draw the voltage divider simply: the meter is just a resistor connected across the load.',
    takeaway: 'Connecting a voltmeter draws current, causing the measured voltage to drop below the true value.'
  },
  {
    id: 82,
    title: 'Formula: Voltmeter Circuit Loading',
    subtitle: 'Calculating the Measured Voltage with Meter Resistance',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'formula',
    formulaBlock: {
      equation: 'V_{\\text{measured}} = V_{\\text{true}} \\times \\frac{R_m}{R_s + R_m}',
      label: 'Equation 1.10 · Voltmeter Loading Equation',
      description: 'The voltage indicated by a voltmeter of resistance Rm connected across source resistance Rs.',
      symbols: [
        { symbol: 'V_{\\text{measured}}', name: 'Measured Voltage', unit: 'Volts', description: 'Voltage indicated on the meter screen' },
        { symbol: 'V_{\\text{true}}', name: 'True Open-Circuit Voltage', unit: 'Volts', description: 'Actual voltage when meter is NOT connected' },
        { symbol: 'R_m', name: 'Voltmeter Internal Resistance', unit: 'Ohms (Ω)', description: 'Input impedance of the measuring instrument' },
        { symbol: 'R_s', name: 'Source Circuit Resistance', unit: 'Ohms (Ω)', description: 'Thevenin equivalent resistance of the circuit under test' }
      ]
    },
    bullets: [
      'The Golden Rule for Voltmeters:',
      'To prevent loading error, the meter resistance $R_m$ must be MUCH LARGER than the circuit resistance $R_s$ ($R_m \\gg R_s$).',
      'If $R_m = 1000 \\times R_s$, loading error is less than $0.1\\%$.'
    ],
    speakerNotes:
      'Show that if Rm is infinite, Rm / (Rs + Rm) = 1.0, and Vmeasured = Vtrue. Ideal voltmeter resistance is infinite.',
    takeaway: 'A voltmeter must have huge internal resistance (Rm >> Rs) to avoid dropping the circuit voltage.'
  },
  {
    id: 83,
    title: 'Worked Example: Voltmeter Loading Error',
    subtitle: 'Step-by-Step Numerical Practice',
    sectionTag: '1.6 Worked Example',
    type: 'worked-example',
    workedExample: {
      problem:
        'A circuit has an open-circuit voltage of Vtrue = 10.0 Volts and an internal source resistance of Rs = 100 kΩ (100,000 Ω). A cheap analog voltmeter with an internal resistance of Rm = 100 kΩ is connected across the terminals. What voltage will the meter indicate, and what is the percentage loading error?',
      given: {
        'True Voltage (Vtrue)': '10.0 V',
        'Source Resistance (Rs)': '100 kΩ',
        'Meter Resistance (Rm)': '100 kΩ'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Apply the Voltmeter Loading Equation',
          math: 'V_{\\text{measured}} = V_{\\text{true}} \\times \\frac{R_m}{R_s + R_m} = 10.0\\text{ V} \\times \\frac{100\\text{ k}\\Omega}{100\\text{ k}\\Omega + 100\\text{ k}\\Omega}',
          explanation: 'Substitute the given values into the voltage divider formula.'
        },
        {
          stepNumber: 2,
          title: 'Calculate Measured Voltage',
          math: 'V_{\\text{measured}} = 10.0\\text{ V} \\times \\frac{100}{200} = 10.0 \\times 0.50 = 5.00\\text{ V}',
          explanation: 'Because Rm equals Rs, exactly half the voltage drops across the internal source resistance!'
        },
        {
          stepNumber: 3,
          title: 'Compute Percentage Loading Error',
          math: '\\% \\text{Error} = \\frac{5.00\\text{ V} - 10.00\\text{ V}}{10.00\\text{ V}} \\times 100\\% = -50.0\\%',
          explanation: 'The meter reading is 50% lower than the true voltage!'
        }
      ],
      finalAnswer: 'Vmeasured = 5.00 V (Massive -50% Loading Error!)',
      practicalInsight:
        'The meter is not broken! The act of measuring with a low-resistance meter altered the circuit completely. A modern digital meter with Rm = 10 MΩ would read 9.90 V (< 1% error).'
    },
    speakerNotes:
      'This is a dramatic example that students never forget: a working 10V circuit reads 5V just because the meter resistance was too low.',
    takeaway: 'Never use a low-resistance meter on a high-resistance circuit, or you will cause huge loading errors!'
  },
  {
    id: 84,
    title: 'The Ammeter Loading Rule',
    subtitle: 'Ammeters Must Have Near-Zero Internal Resistance',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'concept',
    bullets: [
      'While a voltmeter is connected in parallel, an ammeter is connected in SERIES with the circuit.',
      'Because current flows through the ammeter, the meter adds its own internal resistance $R_a$ to the circuit.',
      'The total circuit resistance increases from $R_{\\text{load}}$ to $R_{\\text{load}} + R_a$.',
      'Because total resistance is higher, the circuit current decreases ($I = V / (R_{\\text{load}} + R_a)$).',
      'The Golden Rule for Ammeters:',
      'To prevent ammeter loading error, the ammeter resistance $R_a$ must be as close to ZERO as possible ($R_a \\ll R_{\\text{load}}$).'
    ],
    speakerNotes:
      'Contrast voltmeters and ammeters: Voltmeter resistance must be infinite; Ammeter resistance must be zero.',
    takeaway: 'Voltmeter resistance must be HUGE (infinite); Ammeter resistance must be TINY (zero).'
  },
  {
    id: 85,
    title: 'Circuit Diagrams: Voltmeter & Ammeter Loading Effect',
    subtitle: 'Figure 6B · Parallel Voltmeter Divider (Rm) vs. Series Ammeter Insertion (Ra)',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'figure',
    figureKey: 'fig6b',
    speakerNotes:
      'Trace both circuits carefully on the board. On the left, connecting the voltmeter in parallel forces current Im through source resistor Rs, dropping the terminal voltage to 5.0 V. On the right, inserting the ammeter in series adds Ra = 20 Ω to Rload = 100 Ω, throttling current from 100 mA down to 83.3 mA.',
    takeaway: 'Parallel voltmeters need Rm ≫ Rs to stop current drain; series ammeters need Ra ≪ Rload to avoid added resistance.'
  },
  {
    id: 86,
    title: 'What is Non-Intrusive Sensing?',
    subtitle: 'Measuring Without Touching or Disturbing the Medium',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'concept',
    bullets: [
      'In non-intrusive sensing, the sensor measures from outside the process boundary with zero contact.',
      'Examples in Industry:',
      '1. Clamp-On Hall-Effect Ammeter: You clamp plastic jaws around an insulated wire. It senses the magnetic field around the cable without cutting any wire or touching live copper!',
      '2. Infrared (IR) Thermometer Gun: You point a laser at a hot spinning motor from 2 meters away. It reads the thermal infrared light waves emitted by the hot surface.',
      '3. Clamp-On Ultrasonic Flowmeter: Two sound transducers clamp onto the outside of a metal pipe. Sound waves pass through the pipe wall into the water without any holes or pressure drop.'
    ],
    speakerNotes:
      'Bring a clamp meter or IR gun to class if possible. Non-intrusive means zero contact, zero risk, zero downtime.',
    takeaway: 'Non-intrusive sensors measure through fields (magnetic, acoustic, optical) without breaking the envelope.'
  },
  {
    id: 87,
    title: 'Visual Comparison: Intrusive vs. Non-Intrusive',
    subtitle: 'Figure 6 · Physical Pipe Flow & Electrical Loading Comparison',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'figure',
    figureKey: 'fig6',
    speakerNotes:
      'Walk through Figure 6: Left panel shows the intrusive probe causing eddies, turbulence, and pressure drop. Right panel shows clamp-on ultrasonic sensors passing sound through the pipe with smooth, undisturbed flow.',
    takeaway: 'Figure 6 contrasts intrusive fluid turbulence against smooth, non-intrusive external measurement.'
  },
  {
    id: 88,
    title: 'Difference Between Intrusive and Extrusive Sensing',
    subtitle: 'Intrusive (Process-Penetrating) vs. Extrusive / Non-Intrusive (External) Comparison Table',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'comparison-table',
    comparisonTable: {
      headers: [
        'Parameter',
        'Intrusive Sensing',
        'Extrusive (Non-Intrusive) Sensing'
      ],
      rows: [
        [
          'Physical Contact',
          'Probe penetrates inside the pipe, vessel, or live electrical conductor',
          'Senses externally from outside the process wall or cable jacket'
        ],
        [
          'Flow & Pressure Drop',
          'Obstructs fluid flow, creating eddies and permanent head loss',
          'Zero internal obstruction and zero permanent pressure drop'
        ],
        [
          'Circuit Loading',
          'Draws energy from circuit unless $R_m \\gg R_s$ or $R_a \\ll R_{\\text{load}}$',
          'Zero electrical loading on circuit (magnetic clamp / optical pickup)'
        ],
        [
          'Installation & Shutdown',
          'Requires drilling/tapping pipe or cutting wire; needs plant shutdown',
          'Mounts externally on live running pipelines or insulated cables'
        ],
        [
          'Wear, Corrosion & Leaks',
          'Subject to abrasion, chemical attack, and seal leak hazards',
          'Protected from toxic, high-pressure, corrosive, or sanitary media'
        ],
        [
          'Cost & Wall Sensitivity',
          'Lower initial hardware cost; unaffected by outer pipe wall scale',
          'Higher unit cost; sensitive to pipe thickness, rust, or emissivity'
        ],
        [
          'Typical Examples',
          'Orifice plate, immersion thermowell, series shunt ammeter',
          'Clamp-on ultrasonic flowmeter, IR pyrometer, Hall-effect clamp'
        ]
      ],
      verdict:
        'Use Intrusive sensors for clean, low-cost, low-pressure lines; use Extrusive (Non-Intrusive) sensors for live high-pressure, hazardous, corrosive, or sanitary processes.'
    },
    speakerNotes:
      'Walk students row-by-row through the difference table between Intrusive and Extrusive (Non-Intrusive) sensing. Note that "Extrusive" in instrumentation exams refers to non-intrusive external sensors operating outside the process boundary without breaking containment.',
    takeaway: 'Intrusive probes penetrate the process with lower cost; Extrusive sensors operate externally with zero flow or circuit loading.'
  },

  // =========================================================================
  // SECTION 1.7: SAFETY CONSIDERATIONS DURING INSTRUMENTATION
  // Cover slide (89) + 5 core safety slides (90–94)
  // =========================================================================
  {
    id: 89,
    title: '1.7 Safety Considerations During Instrumentation',
    subtitle: 'Section 1.7 · LOTO Zero-Energy · Electrical (Ground Loops, Optocouplers, IEC CAT I–IV) · Hydraulic (ISO 4413) · Pneumatic (ISO 4414)',
    sectionTag: '1.7 Instrumentation Safety',
    type: 'section-divider',
    speakerNotes:
      'Finally, we reach Section 1.7: Safety Considerations During Instrumentation. Industrial sensors connect to high-voltage panels, 70–350 bar hydraulic oil rigs, and 2–10 bar compressed air manifolds. We cover all three safety domains in 5 focused slides.',
    takeaway: 'Instrumentation safety requires LOTO and zero-energy verification across Electrical, Hydraulic, and Pneumatic systems.'
  },
  {
    id: 90,
    title: 'Three Pillars of Instrumentation Safety & Universal LOTO',
    subtitle: 'Electrical, Hydraulic & Pneumatic Hazards and Zero-Energy Verification',
    sectionTag: '1.7 Instrumentation Safety',
    type: 'types',
    typesGrid: [
      {
        typeName: 'Electrical Safety (IEC 61010-1)',
        badge: 'Shock, Loops & Arc Flash',
        description:
          'Protects personnel via earth ground rods ($0\\text{ V}$ fault return), breaks ground loops via galvanic isolation, and prevents arc flash via CAT ratings.',
        keyFeature:
          'Apply electrical Lockout/Tagout (LOTO), test for $0\\text{ V}$ (Live-Dead-Live), and isolate $50/60\\text{ Hz}$ paths.',
        example:
          'CAT III/IV multimeters on $415\\text{ V}$ panels; isolated DAQ optocouplers; earth-bonded frames.'
      },
      {
        typeName: 'Hydraulic Safety (ISO 4413)',
        badge: '70–350 bar High-Pressure Oil',
        description:
          'Pinhole oil jets pierce gloves/skin (tissue necrosis); nitrogen accumulators hold lethal pressure even after the pump motor stops.',
        keyFeature:
          'Check leaks with cardboard/wood (never hands), bleed accumulators to tank, and verify $0.0\\text{ bar}$.',
        example:
          'Pressure relief valves (PRVs), pulsation snubbers, splash goggles, and LOTO bleed manifolds.'
      },
      {
        typeName: 'Pneumatic Safety (ISO 4414)',
        badge: '2–10 bar Stored Air Energy',
        description:
          'Compressed air acts like a coiled spring, causing violent hose whip, skin air embolism ($\\ge 2\\text{ bar}$), and $\\Delta P$ diaphragm rupture.',
        keyFeature:
          'Fit braided steel whip-checks, keep blow nozzles $< 2\\text{ bar}$ ($30\\text{ psi}$), and vent via FRL lockout.',
        example:
          '3-valve $\\Delta P$ manifold (open Equalizing $\\text{EQ}$ valve FIRST), safety glasses, and vented couplers.'
      }
    ],
    speakerNotes:
      'Contrast the three plant energy domains side-by-side: Electrical capacitors hold voltage, hydraulic accumulators store pressurized oil, and pneumatic receivers store compressed air spring energy. LOTO + zero-energy verification applies to every domain.',
    takeaway: 'Never service any sensor until power is locked out and both voltage (0 V) and fluid pressure (0 bar) are verified zero.'
  },
  {
    id: 91,
    title: 'Electrical Safety: Ground Loops, Isolation & IEC CAT I–IV',
    subtitle: 'Breaking Circulating Ground Currents (>5 kV Optocouplers) & Matching Meter Surges',
    sectionTag: '1.7 Instrumentation Safety',
    type: 'comparison-table',
    comparisonTable: {
      headers: [
        'IEC Rating',
        'Circuit Zone',
        'Typical Examples & Surge Risk',
        'Mandatory Safety Action'
      ],
      rows: [
        [
          'CAT I',
          'Protected Low-Voltage',
          '$5\\text{–}24\\text{ V}$ PCBs, battery circuits; lowest transient energy',
          'Bench meters allowed; verify earth reference integrity'
        ],
        [
          'CAT II',
          'Wall Outlets & Plug-Ins',
          '$230\\text{ V}$ receptacles, portable tools, bench PSUs',
          'Use fused test probes; inspect lead insulation'
        ],
        [
          'CAT III',
          'Building Distribution',
          '$415\\text{ V}$ 3-phase motors, switchboards; high arc-flash energy',
          'Require certified CAT III meter + PPE; never use CAT I/II'
        ],
        [
          'CAT IV',
          'Utility Service Origin',
          'Overhead lines, service meters; up to $8\\text{ kV}$ lightning surges',
          'Strict CAT IV gear + arc shield; full LOTO isolation'
        ]
      ],
      verdict:
        'Ground Loop Rule: Distant earths ($\\Delta V_g \\approx 5\\text{ V}$) drive $50\\text{ Hz}$ hum & fault surges—break the metal loop with $>5\\text{ kV}$ optical isolators (LED $\\rightarrow$ glass barrier $\\rightarrow$ phototransistor).'
    },
    speakerNotes:
      'Cover both core electrical topics cleanly: (1) Why distant earth grounds differ in potential (Ground A vs. Ground B), creating ground loops solved by >5 kV optocouplers; and (2) How IEC 61010-1 CAT I–IV ratings prevent catastrophic arc flash explosions.',
    takeaway: 'Use optical isolators to break circulating ground loops and never touch CAT III/IV panels with a CAT I/II meter.'
  },
  {
    id: 92,
    title: 'Visualizing Electrical Safety: Ground Loops, Optocouplers & CAT Zones',
    subtitle: 'Figure 7 · Loop Current Hazard vs. >5 kV Optical Barrier & IEC 61010-1 Categories',
    sectionTag: '1.7 Instrumentation Safety',
    type: 'figure',
    figureKey: 'fig7',
    speakerNotes:
      'Walk students through Figure 7: Top-left illustrates circulating 50 Hz loop current between distant Ground A and Ground B; bottom-left shows the LED-to-phototransistor glass barrier cutting the loop; right panel stacks CAT I through CAT IV surge zones.',
    takeaway: 'Figure 7 unites ground-loop isolation (optical gap) with IEC CAT I–IV overvoltage meter selection.'
  },
  {
    id: 93,
    title: 'Hydraulic (ISO 4413) & Pneumatic (ISO 4414) Safety Rules',
    subtitle: 'Fluid Injection Prevention, Accumulator Bleed, Whip-Checks & ΔP Manifold Sequencing',
    sectionTag: '1.7 Instrumentation Safety',
    type: 'concept',
    bullets: [
      '1. Hydraulic Fluid Injection ($70\\text{–}350\\text{ bar}$, ISO 4413): High-velocity pinhole oil jets pierce gloves and skin, causing severe tissue necrosis — inspect leaks strictly with cardboard or wood, NEVER bare hands.',
      '2. Hydraulic Accumulators & Zero-Pressure LOTO: Switching off the pump leaves nitrogen accumulators pressurized; lock out power, open the manual bleed valve to tank, confirm $0.0\\text{ bar}$ on a working gauge, and protect sensors with PRVs and pulsation snubbers.',
      '3. Pneumatic Hose Whip & Embolism ($2\\text{–}10\\text{ bar}$, ISO 4414): Compressed air expands explosively — fit braided steel whip-checks across couplings, vent lines via the FRL lockout dump valve, and keep dead-ended blow nozzles below $2\\text{ bar}$ ($30\\text{ psi}$) away from skin.',
      '4. Three-Valve $\\Delta P$ Manifold Sequencing: Before isolating a differential pressure transmitter, always open the center Equalizing ($\\text{EQ}$) valve FIRST before closing $\\text{HP}$ and $\\text{LP}$ block valves so static line pressure never ruptures the diaphragm.'
    ],
    speakerNotes:
      'Highlight the two classic field mistakes: checking hydraulic leaks by hand (fatal injection injury) and closing HP/LP valves on a ΔP cell without opening the center EQ valve first (instant diaphragm blowout).',
    takeaway: 'Use cardboard for hydraulic leak checks, bleed accumulators to 0 bar, fit pneumatic whip-checks, and open EQ first on ΔP manifolds.'
  },
  {
    id: 94,
    title: 'Visualizing Hydraulic & Pneumatic Safety Controls',
    subtitle: 'Figure 7B · Accumulator Bleed Valves, Whip-Check Cables & 3-Valve ΔP Manifold Sequencing',
    sectionTag: '1.7 Instrumentation Safety',
    type: 'figure',
    figureKey: 'fig7b',
    speakerNotes:
      'Review Figure 7B side by side: Left panel details hydraulic LOTO shutoff, trapped accumulator risk, bleed valve to tank, snubber, and 0-bar gauge confirmation. Right panel shows pneumatic FRL lockout dump, steel whip-check cable, and the 3-valve HP/EQ/LP manifold.',
    takeaway: 'Figure 7B provides the complete hardware safety checklist for pressurized hydraulic and pneumatic instrumentation.'
  },

  // =========================================================================
  // CHAPTER SUMMARY & KEY FORMULA CHEAT SHEET
  // =========================================================================
  {
    id: 95,
    title: 'Unit I Comprehensive Summary: The Golden Rules',
    subtitle: 'Review of Core Principles Across All 7 Sections',
    sectionTag: 'Summary Review',
    type: 'review',
    bullets: [
      '1.1 Methods: Direct is manual; Deflection is fast but causes loading; Null-Balance draws zero power at balance.',
      '1.2 Analog vs. Digital: Analog has continuous resolution but parallax error; Digital gives clean numbers with quantization steps ΔV.',
      '1.3 DAQ Pipeline: Measurand → Sensor → Conditioning (Amp, Filter, Isolate) → MUX & S/H → ADC → Display.',
      '1.4 Calibration: Single-point fixes zero bias; Two-point fixes zero + span slope; Multi-point captures curvature & hysteresis.',
      '1.5 Uncertainty: Gross = Blunder; Systematic = Bias (calibrated away); Random = Noise (reduced by √N averaging).',
      '1.6 Intrusive: Voltmeter resistance must be huge (Rm >> Rs); Ammeter resistance must be tiny (Ra << Rload).',
      '1.7 Safety: Apply LOTO & zero-energy checks across Electrical (optocouplers, CAT I–IV), Hydraulic (bleed accumulators, cardboard leak checks), and Pneumatic (whip-checks, < 2 bar air limit, EQ-first ΔP manifolds).'
    ],
    speakerNotes:
      'Review these 7 golden rules with the class. Every rule directly answers a practical engineering challenge.',
    takeaway: 'Mastering these 7 core principles gives you the foundation for all modern instrumentation engineering.'
  },
  {
    id: 96,
    title: 'Unit I Master Formula Sheet',
    subtitle: 'Clean Open Formulas for Exam Preparation',
    sectionTag: 'Formula Sheet',
    type: 'review',
    bullets: [
      'ADC Step Resolution: $$\\Delta V = \\frac{V_{\\text{FSR}}}{2^N - 1}$$',
      'Nyquist Minimum Sampling Rate: $$f_s \\ge 2 \\cdot f_{\\text{max}}$$',
      'Static Sensitivity Slope: $$S = \\frac{\\Delta y}{\\Delta x}$$',
      'Single-Point Offset Trim: $$y_{\\text{cal}} = y_{\\text{raw}} - (y_{\\text{raw,ref}} - y_{\\text{true,ref}})$$',
      'Two-Point Linear Calibration: $$x_{\\text{true}} = x_1 + \\frac{y_{\\text{raw}} - y_1}{y_2 - y_1}(x_2 - x_1)$$',
      'Multi-Point OLS Slope: $$m = \\frac{N\\sum x_i y_i - (\\sum x_i)(\\sum y_i)}{N\\sum x_i^2 - (\\sum x_i)^2}$$',
      'Maximum Hysteresis Percentage: $$\\%\\text{Hysteresis} = \\frac{|y_{\\text{down}} - y_{\\text{up}}|_{\\text{max}}}{y_{\\text{FSO}}} \\times 100\\%$$',
      'Type A Standard Uncertainty: $$u_A = \\frac{s}{\\sqrt{N}}$$',
      'Combined Standard Uncertainty (RSS): $$u_c = \\sqrt{u_A^2 + u_B^2}$$',
      'Voltmeter Loading Voltage: $$V_{\\text{measured}} = V_{\\text{true}} \\times \\frac{R_m}{R_s + R_m}$$'
    ],
    speakerNotes:
      'Remind students: formulas are tools to calculate physical reality. Learn the physical meaning of each symbol.',
    takeaway: 'These 10 standard formulas form the mathematical backbone of Unit I.'
  },
  {
    id: 97,
    title: 'References & Author Information',
    subtitle: 'Recommended Textbooks & Course Materials',
    sectionTag: 'References',
    type: 'content',
    bullets: [
      'Bentley, John P. Principles of Measurement Systems, 4th Edition, Pearson Prentice Hall, 2005.',
      'Doebelin, Ernest O., and Manik, Dhanesh N. Measurement Systems: Application and Design, 6th Edition, McGraw-Hill, 2019.',
      'JCGM 100:2008 / GUM 1995: Evaluation of measurement data — Guide to the expression of uncertainty in measurement (ISO/IEC Guide 98-3).',
      'IEC 61010-1 (Electrical Test Safety), ISO 4413 (Hydraulic Fluid Power Safety), and ISO 4414 (Pneumatic Fluid Power Safety).',
      'Author & Course Instructor: Er. Saroj Chalise · Lecture Slides: https://chalisesaroj.github.io/slide/'
    ],
    speakerNotes:
      'Thank the students for their attention. Encourage them to review the worked examples and run the interactive figures before the next class on Unit II (Digital Signal Processing).',
    takeaway: 'Review Bentley Chapters 1–3, ISO GUM, IEC 61010-1, and ISO 4413/4414 fluid-power safety standards.'
  }
];

export const LECTURE_PY_SOURCE = `#!/usr/bin/env python3
"""
lecture.py - Vector SVG Figure Generator for Unit I: Fundamentals of Measurement Systems
Author: Er. Saroj Chalise
Reference Format: https://chalisesaroj.github.io/slide/

Generates clean classroom vector figures for 16:9 projection in crisp Times New Roman typography.
"""

import os
import matplotlib.pyplot as plt
import matplotlib.patches as patches

FIGURES_DIR = "figures"
os.makedirs(FIGURES_DIR, exist_ok=True)

plt.rcParams.update({
    "font.family": "serif",
    "font.serif": ["Times New Roman", "Liberation Serif", "DejaVu Serif"],
    "figure.figsize": (16, 9),
    "figure.dpi": 150,
    "figure.facecolor": "#ffffff",
    "axes.facecolor": "#ffffff",
    "svg.fonttype": "path",
})

print("Unit I Vector Figures Generator ready. All figures generated via svgAssets.ts.")
`;

export const LECTURE_QMD_SOURCE = `---
title: "Fundamentals of Measurement Systems"
subtitle: "Methods · Analog vs Digital · DAQ Pipeline · Calibration · Uncertainty · Intrusive Sensing · Safety"
author: "Er. Saroj Chalise"
date: "2026-10-25"
format:
  revealjs:
    theme: default
    slide-number: "c/t"
    show-slide-number: all
    transition: fade
    width: 1600
    height: 900
    jupyter: python3
    embed-resources: true
    code-line-numbers: true
    menu:
      side: left
    footer: "Unit I: Fundamentals of Measurement Systems · Er. Saroj Chalise"
---

## Unit I Lecture Roadmap

::: {.columns}
::: {.column width="50%"}
- **1.1** Methods of measurements
  - Direct comparison, Deflection, Null-balance, Loading effect
- **1.2** Analog vs. digital instruments
  - Continuous vs discrete, Quantization step, Nyquist sampling
- **1.3** Data acquisition pipeline (DAQ)
  - Sensor, Conditioning, MUX, S/H, ADC, Host computer
- **1.4** Calibration concepts and techniques
  - Sensitivity slope, Zero drift, Span drift, Hysteresis
:::

::: {.column width="50%"}
- **1.5** Measurement uncertainties & errors
  - Gross, Systematic, Random, Mean, Std Dev, ISO GUM (Type A/B, RSS)
- **1.6** Intrusive and non-intrusive techniques
  - Voltmeter loading ($R_m \\gg R_s$), Ultrasonic & Optical
- **1.7** Safety considerations during instrumentation
  - Electrical (Ground loops, Optocouplers, IEC CAT I–IV), Hydraulic (ISO 4413), Pneumatic (ISO 4414)
:::
:::

::: {.notes}
Every topic connects directly to a real machine or physical situation in plain words.
:::
`;

export const RUN_INSTRUCTIONS = `================================================================================
CLASSROOM PRESENTATION EXECUTION INSTRUCTIONS
Unit I: Fundamentals of Measurement Systems (6 hrs)
Author: Er. Saroj Chalise
Reference Deck: https://chalisesaroj.github.io/slide/
================================================================================

1. PREREQUISITES:
   Make sure Python 3.9+ and Quarto CLI are installed:
   - Python: https://www.python.org/downloads/
   - Quarto: https://quarto.org/docs/get-started/

2. STEP 1: GENERATE VECTOR ASSETS
   python lecture.py

3. STEP 2: RENDER THE PRESENTATION
   quarto render lecture.qmd
   quarto preview lecture.qmd

4. PRESENTATION HOTKEYS:
   - Press 'F' for clean fullscreen presentation mode.
   - Press 'S' to open private speaker notes.
   - Press 'P' to toggle split presenter console mode.
   - Press 'O' to toggle slide overview grid.
`;
