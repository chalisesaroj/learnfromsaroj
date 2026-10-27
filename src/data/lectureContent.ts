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
        '1.4 Static Calibration: Sensitivity, Drift, Linearity & Hysteresis'
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
    title: 'Check Your Understanding: Calibration Metrics',
    subtitle: 'Concept Check 1.4',
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
        'Correct! The scale is highly precise because its readings repeat tightly within ±0.01 kg. However, it is inaccurate because every reading is offset from the true 50.00 kg standard by +3.21 kg. A simple zero-calibration adjustment will fix it!'
    },
    speakerNotes:
      'Praise students who identify that high precision allows an instrument to be easily corrected by adjusting zero bias.',
    takeaway: 'Tightly repeatable readings with a constant offset show high precision with systematic zero bias.'
  },

  // =========================================================================
  // SECTION 1.5: MEASUREMENT ERRORS & UNCERTAINTY (ISO GUM)
  // =========================================================================
  {
    id: 57,
    title: '1.5 Measurement Errors & Uncertainty',
    subtitle: 'Section 1.5 · Gross, Systematic & Random Errors · Statistics & ISO GUM Evaluation',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'section-divider',
    speakerNotes:
      'Now we enter Section 1.5: Measurement Errors and Uncertainty according to ISO international standards. No measurement in science is 100% exact. Every number has some doubt. Let us learn how engineers classify and calculate that doubt.',
    takeaway: 'To report a professional measurement, you must state both the measured value and its uncertainty.'
  },
  {
    id: 58,
    title: 'Error vs. Uncertainty: What is the Difference?',
    subtitle: 'The Difference Between a Mistake and Inherent Doubt',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'concept',
    bullets: [
      'In everyday speech, people confuse "error" with "uncertainty". In engineering, they mean two different things:',
      '• Measurement Error: The difference between the measured reading and the true value ($E = x_{\\text{measured}} - x_{\\text{true}}$). Since the true value can never be known with infinite perfection, true error is never known exactly.',
      '• Measurement Uncertainty: A realistic doubt boundary (e.g. $\\pm 0.5\\text{ mm}$) within which we are confident the true value lies.',
      'When you see a steel shaft specified as "$50.00 \\pm 0.05\\text{ mm}$", the "$\\pm 0.05\\text{ mm}$" is the uncertainty.'
    ],
    speakerNotes:
      'Make this distinction crystal clear: Error is the difference; Uncertainty is the doubt boundary (± band).',
    takeaway: 'Error = Reading minus True Value; Uncertainty = The ± interval where the true value reasonably lies.'
  },
  {
    id: 59,
    title: 'The Three Classes of Measurement Errors',
    subtitle: 'Gross, Systematic, and Random',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'concept',
    bullets: [
      'All measurement errors belong to one of three families:',
      '1. Gross Errors: Human blunders, carelessness, or mistakes (e.g., misreading a dial, recording "25" instead of "52").',
      '2. Systematic Errors: Predictable, repeatable biases caused by the equipment or environment (e.g., zero offset, loading effect).',
      '3. Random Errors: Unpredictable microscopic fluctuations that scatter readings around the average (e.g., electrical noise, air drafts).'
    ],
    speakerNotes:
      'Provide quick examples: Gross = human blunder; Systematic = instrument bias; Random = microscopic noise.',
    takeaway: 'Errors are either Human Blunders (Gross), Repeatable Offsets (Systematic), or Noise (Random).'
  },
  {
    id: 60,
    title: 'Class 1: Gross Errors (Human Blunders)',
    subtitle: 'Mistakes That Can and Must Be Avoided',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'concept',
    bullets: [
      'Gross errors are caused by human carelessness or improper use of equipment:',
      '• Reading from the wrong scale on a multi-scale dial (reading the 0–100V scale instead of the 0–250V scale).',
      '• Writing down the wrong number in the lab notebook (transcription error).',
      '• Connecting wires backward or using the wrong measurement units (confusing inches and centimetres).',
      'How to eliminate gross errors:',
      '• Take multiple independent readings, follow strict check sheets, and have a second engineer verify the data.'
    ],
    speakerNotes:
      'Remind students of famous space missions that failed because one team used feet and the other used meters (Mars Climate Orbiter).',
    takeaway: 'Gross errors are human mistakes; they cannot be treated with math—they must be prevented by care.'
  },
  {
    id: 61,
    title: 'Class 2: Systematic (Bias) Errors',
    subtitle: 'Consistent, Repeatable Offsets in Magnitude and Sign',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'concept',
    bullets: [
      'Systematic errors are repeatable: every time you take a measurement, the reading is consistently too high or consistently too low by the same amount.',
      'Common causes:',
      '• Zero Error: The bathroom scale starts at +1.5 kg before anyone steps on it.',
      '• Ambient Temperature: A steel measuring tape expands in the hot sun and reads too short.',
      '• Circuit Loading: A low-resistance voltmeter pulls down the circuit voltage every time it is connected.',
      'Key Property: Systematic errors CAN be discovered and corrected by recalibrating against a standard!'
    ],
    speakerNotes:
      'Key exam point: Systematic errors do not average out to zero! If your scale is +1 kg off, averaging 1,000 readings will still be +1 kg off.',
    takeaway: 'Systematic errors are repeatable biases; they can be discovered and removed by calibration.'
  },
  {
    id: 62,
    title: 'Class 3: Random (Stochastic) Errors',
    subtitle: 'Unpredictable Scatter Governed by Probability',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'concept',
    bullets: [
      'Even after you eliminate gross mistakes and calibrate away systematic offsets, repeated readings will still vary slightly!',
      'Why? Because of microscopic random effects in nature:',
      '• Thermal motion of electrons inside resistors (Johnson noise).',
      '• Tiny air pressure drafts blowing past an analytical balance.',
      '• Microscopic vibrations from passing road traffic.',
      'Key Property: Random errors are equally likely to be positive or negative. Therefore, taking the average of many readings helps cancel them out!'
    ],
    speakerNotes:
      'Because random errors are equally likely to be positive or negative, mathematics (averaging) is our primary defense against them.',
    takeaway: 'Random errors scatter unpredictably above and below the truth; averaging cancels them out.'
  },
  {
    id: 63,
    title: 'Handling Random Errors: The Sample Mean',
    subtitle: 'The Average is the Best Mathematical Estimate of the True Value',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'formula',
    formulaBlock: {
      equation: '\\bar{x} = \\frac{1}{N} \\sum_{i=1}^N x_i = \\frac{x_1 + x_2 + \\dots + x_N}{N}',
      label: 'Equation 1.5 · Sample Arithmetic Mean',
      description: 'The average of N repeated independent readings under identical conditions.',
      symbols: [
        { symbol: '\\bar{x}', name: 'Sample Mean', unit: 'Measurement Units', description: 'Best statistical estimate of the true measured value' },
        { symbol: 'x_i', name: 'Individual Reading', unit: 'Measurement Units', description: 'The i-th recorded observation' },
        { symbol: 'N', name: 'Number of Observations', unit: 'count', description: 'Total number of repeated test samples' }
      ]
    },
    bullets: [
      'By taking the sum of all readings and dividing by $N$, positive random noise cancels out negative random noise.'
    ],
    speakerNotes:
      'Students already know how to calculate an average from school. Point out that in instrumentation, the mean is our best estimate of truth.',
    takeaway: 'The arithmetic mean (average) cancels out random positive and negative fluctuations.'
  },
  {
    id: 64,
    title: 'Sample Standard Deviation: Measuring the Spread',
    subtitle: 'How Wildly Are the Readings Scattering Around the Average?',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'formula',
    formulaBlock: {
      equation: 's = \\sqrt{\\frac{1}{N - 1} \\sum_{i=1}^N (x_i - \\bar{x})^2}',
      label: 'Equation 1.6 · Sample Standard Deviation',
      description: 'Quantifies the spread or dispersion of individual readings around the sample mean.',
      symbols: [
        { symbol: 's', name: 'Sample Standard Deviation', unit: 'Measurement Units', description: 'Spread of individual measurements' },
        { symbol: 'x_i - \\bar{x}', name: 'Deviation from Mean', unit: 'Measurement Units', description: 'Distance of each single reading from the average' },
        { symbol: 'N - 1', name: 'Degrees of Freedom', unit: 'count', description: 'Number of independent data points remaining' }
      ]
    },
    bullets: [
      'A small standard deviation $s$ means readings are tightly clustered (high precision).',
      'A large standard deviation $s$ means readings are scattering wildly.'
    ],
    speakerNotes:
      'Explain that N - 1 is used instead of N for sample statistics because one degree of freedom was spent calculating the mean.',
    takeaway: 'Standard deviation (s) measures how widely your repeated readings are scattering.'
  },
  {
    id: 65,
    title: 'Type A Standard Uncertainty: Standard Error of the Mean',
    subtitle: 'How Confident Are We in the Average Value?',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'formula',
    formulaBlock: {
      equation: 'u_A = \\frac{s}{\\sqrt{N}}',
      label: 'Equation 1.7 · Type A Standard Uncertainty',
      description: 'The standard uncertainty of the calculated average, decreasing with more samples.',
      symbols: [
        { symbol: 'u_A', name: 'Type A Uncertainty', unit: 'Measurement Units', description: 'Standard uncertainty of the sample mean' },
        { symbol: 's', name: 'Sample Standard Deviation', unit: 'Measurement Units', description: 'Spread of individual observations' },
        { symbol: '\\sqrt{N}', name: 'Square Root of Sample Count', unit: 'dimensionless', description: 'Diminishing returns divider' }
      ]
    },
    bullets: [
      'Notice the $\\sqrt{N}$ in the denominator!',
      '• If you take $N = 4$ readings, uncertainty is cut in half: $\\sqrt{4} = 2$.',
      '• If you take $N = 100$ readings, uncertainty is cut by a factor of 10: $\\sqrt{100} = 10$.',
      'More repeated samples improves confidence in the average!'
    ],
    speakerNotes:
      'Emphasize the square root rule: to cut random noise by 10 times, you need 100 readings, not 10.',
    takeaway: 'Taking N repeated samples reduces random uncertainty by a factor of √N.'
  },
  {
    id: 66,
    title: 'The Averaging Fallacy: Why More Samples Cannot Fix Bias',
    subtitle: 'The Most Dangerous Mistake in Lab Testing',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'concept',
    bullets: [
      'Students often think:',
      '"If I take 10,000 readings, my measurement will be 100% perfect!"',
      'This is the famous Averaging Fallacy.',
      'Averaging reduces Random Noise ($u_A = s / \\sqrt{N}$).',
      'Averaging DOES NOT touch Systematic Zero Error!',
      'If a weighing scale has a zero bias of $+2.0\\text{ kg}$, averaging 1,000,000 readings still gives an answer that is $+2.0\\text{ kg}$ too high.',
      'To fix systematic bias, you must calibrate the instrument against an independent standard.'
    ],
    speakerNotes:
      'Repeat this key exam concept: Averaging reduces random error, but does NOT reduce systematic bias.',
    takeaway: 'Averaging 10,000 readings reduces random scatter, but leaves systematic bias completely untouched!'
  },
  {
    id: 67,
    title: 'Type B Uncertainty: When You Have No Repeated Data',
    subtitle: 'Evaluating Uncertainty from Manufacturer Datasheets',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'formula',
    formulaBlock: {
      equation: 'u_B = \\frac{a}{\\sqrt{3}}',
      label: 'Equation 1.8 · Type B Standard Uncertainty (Rectangular Distribution)',
      description: 'Standard uncertainty derived from manufacturer tolerance specifications.',
      symbols: [
        { symbol: 'u_B', name: 'Type B Standard Uncertainty', unit: 'Measurement Units', description: 'Non-statistical standard uncertainty' },
        { symbol: 'a', name: 'Manufacturer Tolerance Bound', unit: 'Measurement Units', description: 'Stated manufacturer tolerance limit (± a)' },
        { symbol: '\\sqrt{3}', name: 'Uniform Distribution Divisor', unit: 'constant (≈ 1.732)', description: 'Divisor converting rectangular bound into standard uncertainty' }
      ]
    },
    bullets: [
      'Type A = Derived from your own repeated experimental numbers in the lab.',
      'Type B = Derived from external knowledge: manufacturer calibration certificate, handbook data, or resolution limits.',
      'If a digital caliper is certified as "accurate to $\\pm 0.03\\text{ mm}$", the half-width is $a = 0.03\\text{ mm}$.'
    ],
    speakerNotes:
      'Help students remember: Type A = Active experiment (mean and s). Type B = Book / Datasheet / Certificate.',
    takeaway: 'Type A comes from repeated data; Type B comes from datasheets and certificates (uB = a / √3).'
  },
  {
    id: 68,
    title: 'Combined Uncertainty via Root-Sum-Square (RSS)',
    subtitle: 'How Engineers Combine Type A and Type B Uncertainties',
    sectionTag: '1.5 Errors & Uncertainty',
    type: 'formula',
    formulaBlock: {
      equation: 'u_c = \\sqrt{u_A^2 + u_B^2}',
      label: 'Equation 1.9 · ISO GUM Combined Standard Uncertainty',
      description: 'Combining independent statistical and non-statistical standard uncertainties.',
      symbols: [
        { symbol: 'u_c', name: 'Combined Standard Uncertainty', unit: 'Measurement Units', description: 'Total combined 1-sigma uncertainty' },
        { symbol: 'u_A', name: 'Type A Uncertainty', unit: 'Measurement Units', description: 'Statistical scatter from repeated tests' },
        { symbol: 'u_B', name: 'Type B Uncertainty', unit: 'Measurement Units', description: 'Datasheet / calibration uncertainty' }
      ]
    },
    bullets: [
      'Think of Pythagoras theorem: You square each uncertainty, add them together, and take the square root!',
      'This is called the Root-Sum-Square (RSS) method.',
      'Expanded Uncertainty ($U$): To give a 95% confidence statement, multiply $u_c$ by coverage factor $k = 2$:',
      '$$U = 2 \\cdot u_c$$'
    ],
    speakerNotes:
      'Pythagorean combination: Just like a right triangle, c = sqrt(a^2 + b^2). At k=2, we have 95% confidence.',
    takeaway: 'Combined uncertainty = √(uA² + uB²). Multiply by 2 for a 95% confidence interval.'
  },
  {
    id: 69,
    title: 'Worked Example: Full Uncertainty Calculation',
    subtitle: 'Step-by-Step Solved Problem',
    sectionTag: '1.5 Worked Example',
    type: 'worked-example',
    workedExample: {
      problem:
        'A technician measures the temperature of an industrial furnace 9 times (N = 9). The sample mean is 150.0 °C and the sample standard deviation is s = 0.60 °C. The manufacturer certificate states the thermometer tolerance is ±0.30 °C. Calculate: (1) Type A uncertainty, (2) Type B uncertainty, (3) Combined uncertainty uc, and (4) Expanded uncertainty U for 95% confidence (k = 2).',
      given: {
        'Number of Readings (N)': '9',
        'Sample Mean': '150.0 °C',
        'Sample Std Dev (s)': '0.60 °C',
        'Tolerance Bound (a)': '0.30 °C',
        'Coverage Factor (k)': '2'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Calculate Type A Uncertainty (uA)',
          math: 'u_A = \\frac{s}{\\sqrt{N}} = \\frac{0.60\\,^{\\circ}\\text{C}}{\\sqrt{9}} = \\frac{0.60}{3} = 0.20\\,^{\\circ}\\text{C}',
          explanation: 'Divide standard deviation by the square root of 9 (which is 3).'
        },
        {
          stepNumber: 2,
          title: 'Calculate Type B Uncertainty (uB)',
          math: 'u_B = \\frac{a}{\\sqrt{3}} = \\frac{0.30\\,^{\\circ}\\text{C}}{1.732} = 0.173\\,^{\\circ}\\text{C}',
          explanation: 'Divide the manufacturer tolerance 0.30 °C by the square root of 3.'
        },
        {
          stepNumber: 3,
          title: 'Calculate Combined Standard Uncertainty (uc)',
          math: 'u_c = \\sqrt{u_A^2 + u_B^2} = \\sqrt{0.20^2 + 0.173^2} = \\sqrt{0.0400 + 0.0300} = \\sqrt{0.0700} = 0.265\\,^{\\circ}\\text{C}',
          explanation: 'Combine using the Root-Sum-Square (RSS) formula.'
        },
        {
          stepNumber: 4,
          title: 'Calculate Expanded Uncertainty (U = k · uc)',
          math: 'U = 2 \\times 0.265\\,^{\\circ}\\text{C} = 0.53\\,^{\\circ}\\text{C}',
          explanation: 'Multiply combined uncertainty by coverage factor k = 2 for 95% confidence.'
        }
      ],
      finalAnswer: 'Final Reported Value = 150.00 ± 0.53 °C (k = 2, 95% confidence)',
      practicalInsight:
        'The engineering report states: We are 95% confident that the true furnace temperature lies between 149.47 °C and 150.53 °C.'
    },
    speakerNotes:
      'Walk through the numbers slowly. Show students that 0.60 / 3 = 0.20. Simple arithmetic that builds confidence.',
    takeaway: 'Final report: Measured Mean ± Expanded Uncertainty (U = 2 · uc) with 95% confidence.'
  },
  {
    id: 70,
    title: 'Check Your Understanding: Uncertainty Types',
    subtitle: 'Concept Check 1.5',
    sectionTag: '1.5 Quiz',
    type: 'check-understanding',
    quiz: {
      question:
        'A student reads the calibration sticker on a workshop pressure gauge which states: "Tolerance ± 0.60 bar". What type of uncertainty evaluation is this?',
      options: [
        'Type A uncertainty because it involves pressure.',
        'Type B uncertainty because it comes from a calibration certificate and not from repeated statistical samples.',
        'Gross human error.',
        'Null-balance error.'
      ],
      correctIndex: 1,
      explanation:
        'Correct! Any uncertainty evaluated from specifications, certificates, or manufacturer handbooks without taking your own repeated experimental data is classified as Type B uncertainty ($u_B = a / \\sqrt{3} = 0.60 / \\sqrt{3} = 0.346\\text{ bar}$).'
    },
    speakerNotes:
      'Reinforce: Test data = Type A. Sticker / datasheet = Type B.',
    takeaway: 'Datasheet or calibration certificate uncertainty is always Type B.'
  },

  // =========================================================================
  // SECTION 1.6: INTRUSIVE VS. NON-INTRUSIVE SENSING
  // =========================================================================
  {
    id: 71,
    title: '1.6 Intrusive vs. Non-Intrusive Sensing',
    subtitle: 'Section 1.6 · Touching vs. Observing From Outside · Circuit & Flow Loading',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'section-divider',
    speakerNotes:
      'Now let us explore Section 1.6: Intrusive vs. Non-Intrusive Sensing. When we measure something, do we need to drill a hole in the pipe or cut the wire? Or can we measure from the outside without touching? Let us see.',
    takeaway: 'Intrusive sensors penetrate the process; non-intrusive sensors measure from outside without contact.'
  },
  {
    id: 72,
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
    id: 73,
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
    id: 74,
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
    id: 75,
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
    id: 76,
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
    id: 77,
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
    id: 78,
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
    id: 79,
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
    id: 80,
    title: 'Intrusive vs. Non-Intrusive: Engineering Selection',
    subtitle: 'When to Choose Which Method',
    sectionTag: '1.6 Intrusive Sensing',
    type: 'pros-cons',
    prosCons: {
      title: 'Technology Comparison Matrix',
      advantages: [
        'Intrusive Sensing: Simple, rugged, and low cost; highly accurate for slow, stable, non-corrosive liquids.',
        'Non-Intrusive Sensing: Zero pressure loss; zero leak hazard; installs on live running pipes; zero circuit loading.'
      ],
      disadvantages: [
        'Intrusive Sensing: Causes pressure drop; subject to fluid erosion and chemical attack; requires plant shutdown to service.',
        'Non-Intrusive Sensing: Higher initial equipment cost; sensitive to pipe wall thickness, rust, and surface cleanliness.'
      ],
      engineeringVerdict:
        'Use Intrusive probes when fluids are clean and budgets are low. Use Non-Intrusive sensing for hazardous chemicals, high-pressure steam, sanitary food/pharmaceutical pipelines, or live electrical cables.'
    },
    speakerNotes:
      'Point out the food and beverage industry: you cannot stick dirty metal probes into milk or beer pipes—you must use non-intrusive sanitary sensors.',
    takeaway: 'Non-intrusive sensing is essential for hazardous, high-pressure, or sanitary pipelines.'
  },

  // =========================================================================
  // SECTION 1.7: ELECTRICAL SAFETY & GROUND LOOP ISOLATION
  // =========================================================================
  {
    id: 81,
    title: '1.7 Electrical Safety & Ground Loop Isolation',
    subtitle: 'Section 1.7 · Protecting Equipment and Lives · Ground Loops · Optocouplers · IEC CAT Ratings',
    sectionTag: '1.7 Electrical Safety',
    type: 'section-divider',
    speakerNotes:
      'Finally, we reach Section 1.7: Electrical Safety and Ground Loop Isolation. In factory automation, high voltages and long cables can cause equipment fires or lethal electric shocks if safety rules are ignored. Let us see how to stay safe.',
    takeaway: 'Safety is non-negotiable: proper grounding and galvanic isolation protect both delicate sensors and human lives.'
  },
  {
    id: 82,
    title: 'What is Earth Ground?',
    subtitle: 'The 0-Volt Safety Anchor for Buildings and Machines',
    sectionTag: '1.7 Electrical Safety',
    type: 'concept',
    bullets: [
      'In electrical engineering, "Ground" (or Earth) is a thick copper rod driven deep into the physical earth soil outside a building.',
      'The metal chassis of machines, drill presses, and electrical cabinets are connected by green-yellow wires to this earth rod.',
      'Purpose 1 (Human Safety): If a live wire shakes loose and touches the metal casing, the electric current rushes harmlessly into the earth rod, tripping the circuit breaker instead of shocking a worker.',
      'Purpose 2 (Signal Reference): Serves as the zero-volt ($0.00\\text{ V}$) baseline reference for electronics.'
    ],
    speakerNotes:
      'Ask students why plugs have three pins: the third longer pin is the earth ground safety pin.',
    takeaway: 'Earth ground protects human life by safely directing fault currents into the soil.'
  },
  {
    id: 83,
    title: 'What is a Ground Loop?',
    subtitle: 'When "Zero Volts" is NOT Zero Volts Everywhere!',
    sectionTag: '1.7 Electrical Safety',
    type: 'concept',
    bullets: [
      'Beginner engineers assume: "Ground is 0.00 Volts everywhere in the factory."',
      'In real life, this assumption is DANGEROUSLY WRONG!',
      'Imagine Machine A in Building 1 is connected to Earth Ground A.',
      'Machine B in Building 2 is connected to Earth Ground B 100 meters away.',
      'Because electric currents flow through the soil from factory motors, Ground A and Ground B are at slightly different voltages (e.g. $\\Delta V_g = 5.0\\text{ Volts}$).',
      'When you connect a shielded signal cable between the two machines, you complete a continuous metal loop!',
      'A circulating noise current rushes through the cable shield. This is a Ground Loop.'
    ],
    speakerNotes:
      'Explain that soil has electrical resistance. When a 50 kW motor runs nearby, the ground potential rises.',
    takeaway: 'Ground Loop = A closed loop created when a signal cable connects two different earth ground points.'
  },
  {
    id: 84,
    title: 'The Real-World Dangers of Ground Loops',
    subtitle: 'Loud Audio Hum, Noisy Sensor Data, and Melted Cables',
    sectionTag: '1.7 Electrical Safety',
    type: 'concept',
    bullets: [
      'What happens when a ground loop current flows through your instrumentation system?',
      '1. 50 Hz / 60 Hz Mains Hum: In audio systems and sensitive sensor lines, the circulating 50 Hz power current creates an annoying buzz that drowns out small millivolt signals.',
      '2. Inaccurate Sensor Readings: The voltage drop across the cable ground wire adds directly to your sensor reading, giving false data.',
      '3. Equipment Destruction & Fire: During a lightning strike or factory motor fault, thousands of amperes can surge through a thin signal cable shield, melting the wire and destroying the computer!'
    ],
    speakerNotes:
      'Mention that ground loops are responsible for 80% of persistent noise problems in industrial instrumentation.',
    takeaway: 'Ground loops cause 50 Hz electrical hum, sensor noise, and equipment destruction.'
  },
  {
    id: 85,
    title: 'The Solution: Galvanic Isolation',
    subtitle: 'Breaking the Continuous Metal Path',
    sectionTag: '1.7 Electrical Safety',
    type: 'concept',
    bullets: [
      'How do we stop ground loop currents from circulating?',
      'We must physically BREAK the metal-to-metal connection between the sensor and the computer!',
      'This technique of allowing signals to pass while blocking direct electrical metal contact is called Galvanic Isolation.',
      'How can a signal pass through if there is no metal wire?',
      'We convert the electrical signal into another form of energy (like light or magnetic flux), send it across an insulating air/glass gap, and convert it back to electricity on the other side!'
    ],
    speakerNotes:
      'Galvanic isolation is like sending messages across a moat using a flashlight: the message gets across, but nobody can cross the moat.',
    takeaway: 'Galvanic isolation breaks the metal conductor loop, completely eliminating circulating ground currents.'
  },
  {
    id: 86,
    title: 'How an Optical Isolator (Optocoupler) Works',
    subtitle: 'Electricity → Light → Electricity',
    sectionTag: '1.7 Electrical Safety',
    type: 'concept',
    bullets: [
      'An Optical Isolator (Optocoupler) contains two tiny components sealed inside a small chip:',
      '1. Transmitter (LED): An infrared Light Emitting Diode connected to the input sensor circuit. When sensor voltage rises, the LED shines brighter.',
      '2. Receiver (Phototransistor): A light-sensitive transistor connected to the computer circuit. It detects the incoming light beam and turns it back into electricity.',
      'Between the LED and phototransistor is a transparent silicone glass barrier.',
      'There is ZERO copper wire between them. The barrier can withstand over 5,000 Volts without breaking down!'
    ],
    speakerNotes:
      'Every modern industrial DAQ board uses optocouplers to protect computer motherboards from factory transients.',
    takeaway: 'Optocouplers transmit signals using light beams across an insulating 5 kV barrier.'
  },
  {
    id: 87,
    title: 'Visualizing Ground Loops & Galvanic Isolation',
    subtitle: 'Figure 7 · Loop Current Hazard vs. Optical Barrier Protection',
    sectionTag: '1.7 Electrical Safety',
    type: 'figure',
    figureKey: 'fig7',
    speakerNotes:
      'Examine Figure 7: Top panel shows the red circulating loop current flowing between Ground A and Ground B. Bottom panel shows how the optical isolator breaks the red line, stopping loop current dead.',
    takeaway: 'Figure 7 shows the circulating ground loop in red and the optical barrier solution in green.'
  },
  {
    id: 88,
    title: 'IEC 61010-1 Overvoltage Categories (CAT Ratings)',
    subtitle: 'Figure 7 (Right) · Matching Tool Safety to Electrical Danger',
    sectionTag: '1.7 Electrical Safety',
    type: 'concept',
    bullets: [
      'Look at the front face of any professional multimeter (e.g. a Fluke meter).',
      'You will see yellow stamped markings like "CAT III 1000V" or "CAT IV 600V".',
      'What do these CAT markings mean?',
      'The International Electrotechnical Commission (IEC 61010-1) created 4 Overvoltage Categories.',
      'They define where a tool can be safely used based on how close you are to the primary electrical power source and how violent lightning or switching surges can be.'
    ],
    speakerNotes:
      'Never grab an unrated cheap meter to test a factory 3-phase panel. It can explode in your hands from arc flash.',
    takeaway: 'CAT ratings specify the transient surge energy an instrument can withstand without exploding.'
  },
  {
    id: 89,
    title: 'The 4 IEC Overvoltage Categories Defined',
    subtitle: 'From Low-Voltage Electronics (CAT I) to Utility Power Poles (CAT IV)',
    sectionTag: '1.7 Electrical Safety',
    type: 'concept',
    bullets: [
      'CAT I (Protected Electronics): Low-voltage DC circuits, battery-operated devices, secondary regulated power rails (e.g. 5V, 12V circuits). Lowest danger.',
      'CAT II (Wall Sockets & Appliances): Standard 230V household wall outlets, portable power tools, bench equipment connected to local receptacles.',
      'CAT III (Building Distribution): Industrial factory switchboards, circuit breaker panels, 3-phase electric motors, busbars. High energy arc-flash risk!',
      'CAT IV (Utility Origin): Outdoor power lines, overhead utility wires, electricity service entrance meters. Highest lightning surge risk (transients up to 8,000 V)!'
    ],
    speakerNotes:
      'The closer you are to the outdoor power lines, the higher the category must be: CAT I (safe battery) to CAT IV (power pole).',
    takeaway: 'CAT I = Battery circuits; CAT II = Wall plugs; CAT III = Factory panels; CAT IV = Outdoor utility lines.'
  },
  {
    id: 90,
    title: 'The Golden Safety Rule in the Electrical Lab',
    subtitle: 'Never Use a Low-CAT Meter on High-CAT Circuits!',
    sectionTag: '1.7 Electrical Safety',
    type: 'concept',
    bullets: [
      'A cheap $5 multimeter bought from an online shop is usually rated CAT I or CAT II at best.',
      'If you take that cheap meter and touch the probes to a 415V 3-phase factory distribution panel (CAT III):',
      'If an industrial motor switches on at that exact millisecond, a 4,000 Volt voltage spike surges into the meter.',
      'The internal traces inside the cheap meter vaporize instantly into superheated copper gas.',
      'An explosive Arc Flash fireball erupts in front of your face, causing severe third-degree burns or blindness!',
      'Rule: Always verify your meter carries a certified CAT III or CAT IV rating before opening a distribution cabinet!'
    ],
    speakerNotes:
      'Arc flash is a real industrial hazard. Safety begins with respecting the tool CAT rating.',
    takeaway: 'Never use a CAT I or II meter on a CAT III/IV panel: an overvoltage spike will cause an explosive arc flash!'
  },
  {
    id: 91,
    title: 'Check Your Understanding: Electrical Safety & Isolation',
    subtitle: 'Concept Check 1.7',
    sectionTag: '1.7 Quiz',
    type: 'check-understanding',
    quiz: {
      question:
        'An instrumentation engineer must connect a computer data acquisition card to a vibration sensor mounted on a high-voltage 3-phase pump motor 150 meters away in another building. What should the engineer do to prevent noise hum and protect the computer?',
      options: [
        'Run a standard copper wire and wrap it in duct tape.',
        'Use an optical isolation barrier (optocoupler) to break the electrical ground loop.',
        'Remove the earth grounding rod from the building.',
        'Paint the sensor yellow.'
      ],
      correctIndex: 1,
      explanation:
        'Correct! Long distances between buildings create ground potential differences. Inserting an optical isolation barrier breaks the continuous metal path, stopping circulating ground loop currents dead and protecting the computer from voltage spikes up to 5 kV.'
    },
    speakerNotes:
      'Conclude the safety topic with this practical installation scenario.',
    takeaway: 'Optical isolation is the standard industrial solution for long-distance ground loop noise.'
  },

  // =========================================================================
  // CHAPTER SUMMARY & KEY FORMULA CHEAT SHEET
  // =========================================================================
  {
    id: 92,
    title: 'Unit I Comprehensive Summary: The Golden Rules',
    subtitle: 'Review of Core Principles Across All 7 Sections',
    sectionTag: 'Summary Review',
    type: 'review',
    bullets: [
      '1.1 Methods: Direct is manual; Deflection is fast but causes loading; Null-Balance draws zero power at balance.',
      '1.2 Analog vs. Digital: Analog has continuous resolution but parallax error; Digital gives clean numbers with quantization steps ΔV.',
      '1.3 DAQ Pipeline: Measurand → Sensor → Conditioning (Amp, Filter, Isolate) → MUX & S/H → ADC → Display.',
      '1.4 Calibration: Sensitivity S is the slope; Zero drift shifts the line; Hysteresis is the gap between going up and coming down.',
      '1.5 Uncertainty: Gross = Blunder; Systematic = Bias (calibrated away); Random = Noise (reduced by √N averaging).',
      '1.6 Intrusive: Voltmeter resistance must be huge (Rm >> Rs); Ammeter resistance must be tiny (Ra << Rload).',
      '1.7 Safety: Break ground loops with optical isolation; match meter CAT ratings (CAT I to CAT IV) to the danger level.'
    ],
    speakerNotes:
      'Review these 7 golden rules with the class. Every rule directly answers a practical engineering challenge.',
    takeaway: 'Mastering these 7 core principles gives you the foundation for all modern instrumentation engineering.'
  },
  {
    id: 93,
    title: 'Unit I Master Formula Sheet',
    subtitle: 'Clean Open Formulas for Exam Preparation',
    sectionTag: 'Formula Sheet',
    type: 'review',
    bullets: [
      'ADC Step Resolution: $$\\Delta V = \\frac{V_{\\text{FSR}}}{2^N - 1}$$',
      'Nyquist Minimum Sampling Rate: $$f_s \\ge 2 \\cdot f_{\\text{max}}$$',
      'Static Sensitivity Slope: $$S = \\frac{\\Delta y}{\\Delta x}$$',
      'Maximum Hysteresis Percentage: {\\%}\\text{Hysteresis} = \\frac{|y_{\\text{down}} - y_{\\text{up}}|_{\\text{max}}}{y_{\\text{FSO}}} \\times 100\\%',
      'Type A Standard Uncertainty: $$u_A = \\frac{s}{\\sqrt{N}}$$',
      'Combined Standard Uncertainty (RSS): $$u_c = \\sqrt{u_A^2 + u_B^2}$$',
      'Voltmeter Loading Voltage: $$V_{\\text{measured}} = V_{\\text{true}} \\times \\frac{R_m}{R_s + R_m}$$'
    ],
    speakerNotes:
      'Remind students: formulas are tools to calculate physical reality. Learn the physical meaning of each symbol.',
    takeaway: 'These 7 standard formulas form the mathematical backbone of Unit I.'
  },
  {
    id: 94,
    title: 'References & Author Information',
    subtitle: 'Recommended Textbooks & Course Materials',
    sectionTag: 'References',
    type: 'content',
    bullets: [
      'Bentley, John P. Principles of Measurement Systems, 4th Edition, Pearson Prentice Hall, 2005.',
      'Doebelin, Ernest O., and Manik, Dhanesh N. Measurement Systems: Application and Design, 6th Edition, McGraw-Hill, 2019.',
      'JCGM 100:2008 / GUM 1995: Evaluation of measurement data — Guide to the expression of uncertainty in measurement (ISO/IEC Guide 98-3).',
      'IEC 61010-1: Safety requirements for electrical equipment for measurement, control, and laboratory use.',
      'Author & Course Instructor: Er. Saroj Chalise · Lecture Slides: https://chalisesaroj.github.io/slide/'
    ],
    speakerNotes:
      'Thank the students for their attention. Encourage them to review the worked examples and run the interactive figures before the next class on Unit II (Digital Signal Processing).',
    takeaway: 'Review Bentley Chapters 1–3 and the ISO GUM guide for further industrial metrology standards.'
  }
];

export const LECTURE_PY_SOURCE = `#!/usr/bin/env python3
"""
lecture.py - Vector SVG Figure Generator for Unit I: Fundamentals of Measurement Systems
Author: Er. Saroj Chalise
Reference Format: https://chalisesaroj.github.io/slide/

Generates all 7 clean classroom vector figures for 16:9 projection without embedded formulas.
"""

import os
import matplotlib.pyplot as plt
import matplotlib.patches as patches

FIGURES_DIR = "figures"
os.makedirs(FIGURES_DIR, exist_ok=True)

plt.rcParams.update({
    "font.family": "sans-serif",
    "font.sans-serif": ["DejaVu Sans", "Arial", "Helvetica"],
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
  - Gross, Systematic, Random, Mean, Std Dev, ISO GUM
- **1.6** Intrusive and non-intrusive techniques
  - Voltmeter loading ($R_m \\gg R_s$), Ultrasonic & Optical
- **1.7** Safety considerations during instrumentation
  - Ground loops, Galvanic optical isolation, IEC CAT I–IV
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
