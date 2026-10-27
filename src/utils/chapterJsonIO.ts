/**
 * Utilities for Chapter JSON Import, Export, Validation, and AI Prompt Generation
 */

import { ChapterConfig } from '../data/chaptersData';
import { ChapterDeckJSON, SlideData } from '../types/chapterDeck';

/**
 * Serializes a ChapterConfig to a cleanly formatted JSON string.
 */
export function exportChapterToJSON(chapter: ChapterConfig): string {
  const exportPayload: ChapterDeckJSON = {
    schemaVersion: '2.0',
    id: chapter.id,
    unitNumber: chapter.unitNumber,
    code: chapter.code,
    title: chapter.title,
    shortTitle: chapter.shortTitle,
    hours: chapter.hours,
    instructor: chapter.instructor,
    referenceUrl: chapter.referenceUrl,
    summary: chapter.summary,
    syllabusSections: chapter.syllabusSections || [],
    slides: chapter.slides,
    figures: chapter.figures,
    pySource: chapter.pySource,
    qmdSource: chapter.qmdSource,
    runInstructions: chapter.runInstructions
  };

  return JSON.stringify(exportPayload, null, 2);
}

/**
 * Validates and parses an uploaded JSON string into a valid ChapterConfig.
 */
export function parseAndValidateChapterJSON(jsonString: string): {
  success: boolean;
  chapter?: ChapterConfig;
  error?: string;
} {
  try {
    const raw = JSON.parse(jsonString);

    if (!raw || typeof raw !== 'object') {
      return { success: false, error: 'Uploaded file is not a valid JSON object.' };
    }

    if (!raw.title || typeof raw.title !== 'string') {
      return { success: false, error: 'Missing or invalid "title" field in chapter JSON.' };
    }

    if (!Array.isArray(raw.slides) || raw.slides.length === 0) {
      return { success: false, error: 'Chapter JSON must contain a non-empty "slides" array.' };
    }

    // Sanitize slides
    const sanitizedSlides: SlideData[] = raw.slides.map((s: any, idx: number) => ({
      id: typeof s.id === 'number' ? s.id : idx + 1,
      title: s.title || `Slide ${idx + 1}`,
      subtitle: s.subtitle,
      sectionTag: s.sectionTag || 'General',
      type: s.type || 'content',
      bullets: Array.isArray(s.bullets) ? s.bullets : undefined,
      contentHtml: s.contentHtml,
      columns: s.columns,
      equation: s.equation,
      equationDescription: s.equationDescription,
      figureKey: s.figureKey,
      figureSvg: s.figureSvg,
      figureCaption: s.figureCaption,
      definition: s.definition,
      typesGrid: Array.isArray(s.typesGrid) ? s.typesGrid : undefined,
      prosCons: s.prosCons,
      analogy: s.analogy,
      workedExample: s.workedExample,
      quiz: s.quiz,
      speakerNotes: s.speakerNotes || 'Presenter notes for this slide.',
      takeaway: s.takeaway,
      interactiveLabRef: s.interactiveLabRef
    }));

    const chapterId = (raw.id || `custom-${Date.now()}`).toLowerCase().replace(/[^a-z0-9-_]/g, '-');

    const chapterConfig: ChapterConfig = {
      id: chapterId as any,
      unitNumber: raw.unitNumber || 'Custom Unit',
      code: raw.code || 'ENG-CUSTOM',
      title: raw.title,
      shortTitle: raw.shortTitle || raw.title.slice(0, 24),
      hours: raw.hours || '8 Hours',
      instructor: raw.instructor || 'Instructor',
      referenceUrl: raw.referenceUrl || 'https://chalisesaroj.github.io/slide/',
      summary: raw.summary || 'Custom uploaded lecture package.',
      slides: sanitizedSlides as any,
      figures: raw.figures || {},
      pySource: raw.pySource || '# Custom Python Figure Source\n',
      pyFileName: `${chapterId}.py`,
      qmdSource: raw.qmdSource || '# Custom Quarto Source\n',
      qmdFileName: `${chapterId}.qmd`,
      runInstructions: raw.runInstructions || 'Run with quarto preview.',
      zipFileName: `${chapterId}_lecture.zip`,
      syllabusSections: Array.isArray(raw.syllabusSections) ? raw.syllabusSections : []
    };

    return { success: true, chapter: chapterConfig };
  } catch (err: any) {
    return { success: false, error: `JSON Parse Error: ${err.message || 'Invalid syntax'}` };
  }
}

/**
 * Complete, rich sample template JSON showcasing all specialized pedagogical slide types.
 */
export const SAMPLE_CHAPTER_JSON_TEMPLATE: ChapterDeckJSON = {
  schemaVersion: '2.0',
  id: 'unit-sample-mechatronics',
  unitNumber: 'Module VI',
  code: 'ME-402',
  title: 'Smart Sensors, Actuators & Signal Dynamics',
  shortTitle: 'Smart Sensors',
  hours: '8 Hours',
  instructor: 'Er. Saroj Chalise',
  referenceUrl: 'https://chalisesaroj.github.io/slide/',
  summary:
    'Comprehensive lecture deck covering definitions, classifications, physical analogies, mathematical ODE modeling, worked numerical problems, and trade-off comparisons.',
  syllabusSections: [
    {
      number: '6.1',
      title: 'Sensor Fundamentals & Transduction Principles',
      hours: '2.0 Hours',
      specificObjective: 'Master fundamental definitions, sensitivity, and active vs passive taxonomies.',
      coreConcepts: ['Piezoelectric effect', 'Seebeck loop', 'Piezoresistive gauge factor', 'Dynamic range'],
      difficultConcepts: ['Frequency roll-off in charge amplifiers', 'Thermal cross-sensitivity compensation'],
      misconceptions: ['Assuming passive sensors generate their own electrical power without external bias.'],
      examQuestions: [
        'Define transducer, sensor, and actuator with physical examples.',
        'Derive the charge sensitivity equation for a quartz piezoelectric crystal.'
      ]
    }
  ],
  slides: [
    {
      id: 1,
      title: 'Smart Sensors, Actuators & Signal Dynamics',
      subtitle: 'Complete Pedagogical Deck Framework · Demonstration of All Content Types',
      sectionTag: 'Course Header',
      type: 'title',
      speakerNotes: 'Welcome to this custom chapter module. Notice how the presentation framework seamlessly renders definitions, analogies, mathematics, worked problems, and diagrams.',
      takeaway: 'Modern measurement requires rigorous mathematical modeling paired with intuitive physical insight.'
    },
    {
      id: 2,
      title: 'Core Definition: The Transducer',
      subtitle: 'Standardized ISO Terminology & Physical Transduction',
      sectionTag: 'Definitions',
      type: 'definition',
      definition: {
        term: 'Transducer',
        formalDefinition:
          'A device that converts a primary physical measurand (such as pressure, temperature, or force) into a proportional, measurable electrical signal (such as voltage, charge, or resistance change).',
        symbol: 'T(s)',
        units: 'Output / Input (e.g. mV/kPa, pC/N)',
        standardReference: 'ISO 5725-1 & IEEE 1451 Smart Transducer Standard',
        keyImplication:
          'A transducer comprises both a primary sensing element (which physically deforms or reacts) and a transduction stage (which generates the electrical analog).'
      },
      speakerNotes: 'Stress that while every sensor is a detector, a transducer specifically performs energy transformation.',
      takeaway: 'Transducers bridge the continuous physical universe with digital acquisition architectures.'
    },
    {
      id: 3,
      title: 'Physical Analogy: Sensor Time Constant',
      subtitle: 'Understanding First-Order Thermal Lag Through Fluid Inflow',
      sectionTag: 'Physical Analogies',
      type: 'analogy',
      analogy: {
        everydayConcept: 'Filling a Bathtub with a Narrow Tap and Drain Plug',
        technicalMapping:
          'The water level represents sensor bead temperature T(t); the tap flow represents convective heat inflow h·A·(T_fluid - T); the bathtub volume represents thermal heat capacity m·c.',
        whyItWorks:
          'Just as a large bathtub with a tiny tap takes a long time to reach its target level, a sensor with high mass m and low heat transfer coefficient h responds very sluggishly with a huge time constant τ = mc/(hA).',
        limitsOfAnalogy:
          'Water flow can be turbulent with non-linear head loss, whereas thermal conduction at moderate gradients follows strictly linear Fourier and Newton cooling laws.'
      },
      speakerNotes: 'Use this analogy when students struggle to remember why thermocouple beads must be as small as possible.',
      takeaway: 'To speed up thermal response: reduce the volume (shrink bead mass m) and widen the tap (boost fluid velocity h).'
    },
    {
      id: 4,
      title: 'Taxonomy: Sensor Classification Matrix',
      subtitle: 'Active (Self-Generating) vs. Passive (Parametric) Transducers',
      sectionTag: 'Types & Taxonomy',
      type: 'types',
      typesGrid: [
        {
          typeName: 'Active Transducers',
          description: 'Directly convert physical energy into electrical energy without needing external DC power excitation.',
          keyFeature: 'Self-generating voltage or electrostatic charge',
          example: 'Thermocouple (Seebeck effect), Piezoelectric crystal, Photovoltaic cell',
          badge: 'Self-Generating'
        },
        {
          typeName: 'Passive Transducers',
          description: 'Require external excitation power; the measurand modulates electrical resistance, inductance, or capacitance.',
          keyFeature: 'Modulates circuit parameters (R, L, C)',
          example: 'Strain gauge bridge, RTD Pt100, LVDT displacement sensor, Capacitive pressure cell',
          badge: 'Externally Excited'
        },
        {
          typeName: 'Digital / Smart Sensors',
          description: 'Incorporate on-chip ADC, microcontroller calibration, DSP filtering, and serial bus communications.',
          keyFeature: 'Direct digital bitstream output (I2C, SPI, CAN)',
          example: 'MEMS IMU accelerometer, Hall effect rotary encoder, Digital thermopile',
          badge: 'Bus-Integrated'
        }
      ],
      speakerNotes: 'Clarify that active transducers cannot measure static DC quantities if they rely on rate-of-change mechanisms (like piezoelectric charge).',
      takeaway: 'Active transducers simplify wiring but may lack DC response; passive sensors measure down to 0 Hz but need stable power supplies.'
    },
    {
      id: 5,
      title: 'Architectural Trade-Off: Analog vs. Digital Sensors',
      subtitle: 'Engineering Advantages vs. Disadvantages Comparison',
      sectionTag: 'Trade-Off Analysis',
      type: 'pros-cons',
      prosCons: {
        title: 'Analog Signal Conditioning vs. Integrated Digital MEMS',
        advantages: [
          'Analog: Infinite theoretical time resolution with zero latency delay.',
          'Analog: Wide dynamic bandwidth capable of MHz frequency measurements.',
          'Digital: Complete immunity to transmission line noise and EMI induction over long cables.',
          'Digital: Built-in temperature compensation, factory calibration coefficients, and self-testing.'
        ],
        disadvantages: [
          'Analog: Highly susceptible to cable resistance loading, thermal offset drift, and ground loop hum.',
          'Analog: Requires delicate shielding, instrumentation amplifiers, and manual zero balancing.',
          'Digital: Bandwidth strictly limited by internal sampling rate and ADC conversion time.',
          'Digital: Quantization noise floor sets irreversible resolution limits.'
        ],
        engineeringVerdict:
          'Use integrated digital MEMS sensors for distributed industrial IoT and factory automation; use wideband analog sensors with local coaxial shielding for ultra-high-speed explosion, vibration, and impact dynamics.'
      },
      speakerNotes: 'Engineers must weigh electromagnetic noise susceptibility against sampling rate limitations.',
      takeaway: 'No technology is universally superior—system constraints dictate the optimal analog/digital partition.'
    },
    {
      id: 6,
      title: 'Mathematical Formulation: Second-Order Response',
      subtitle: 'General Differential Model for Seismic Acceleration & Pressure Transducers',
      sectionTag: 'Mathematical Modeling',
      type: 'content',
      equation: '\\frac{1}{\\omega_n^2}\\frac{d^2 y}{dt^2} + \\frac{2\\zeta}{\\omega_n}\\frac{dy}{dt} + y(t) = K \\cdot x(t)',
      equationDescription: 'Canonical second-order ODE parameterized by undamped natural frequency ωn and damping ratio ζ.',
      bullets: [
        'Natural Frequency: $\\omega_n = \\sqrt{k/m}$ determines the theoretical speed of response.',
        'Damping Ratio: $\\zeta = c / (2\\sqrt{km})$ governs the overshoot and exponential decay rate.',
        'Resonance Peak: When $\\zeta < 0.707$, harmonic excitation near $\\omega_n$ induces resonant magnification: $M_r = \\frac{K}{2\\zeta\\sqrt{1-\\zeta^2}}$.',
        'Phase Roll-off: Shifts from $0^{\\circ}$ at low frequencies to $-90^{\\circ}$ at $\\omega = \\omega_n$, approaching $-180^{\\circ}$ at high frequency.'
      ],
      speakerNotes: 'Walk students through the physical derivation from Newton second law: m·x_ddot + c·x_dot + k·x = F(t).',
      takeaway: 'Tuning damping to ζ = 0.707 yields the flattest amplitude response and shortest settling time.'
    },
    {
      id: 7,
      title: 'Worked Example: Transducer Overshoot & Settling',
      subtitle: 'Step-by-Step Quantitative Problem Solving',
      sectionTag: 'Worked Example',
      type: 'worked-example',
      workedExample: {
        problem:
          'A silicon piezoresistive pressure transducer has an undamped natural frequency fn = 10.0 kHz (ωn = 62,832 rad/s) and a damping ratio ζ = 0.50. When subjected to an abrupt pressure step of 200 kPa, determine the peak overshoot Mp (in kPa) and the 2% settling time ts.',
        given: {
          'Natural Frequency': 'fn = 10.0 kHz (ωn = 62,831.85 rad/s)',
          'Damping Ratio': 'ζ = 0.50',
          'Input Step': 'X0 = 200 kPa',
          'Static Gain': 'K = 1.00'
        },
        steps: [
          {
            stepNumber: 1,
            title: 'Calculate Maximum Percentage Overshoot (Mp)',
            math: 'M_p = \\exp\\left( -\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}} \\right) \\times 100\\% = \\exp\\left( -\\frac{3.14159 \\times 0.50}{\\sqrt{1 - 0.25}} \\right) \\times 100\\%',
            explanation: 'With ζ = 0.50, √(1 - ζ²) = √0.75 = 0.866. The exponent is -1.5708 / 0.866 = -1.8138. Thus Mp = e^(-1.8138) × 100% = 16.3%.'
          },
          {
            stepNumber: 2,
            title: 'Compute Absolute Peak Pressure',
            math: 'P_{\\text{peak}} = y_{ss} \\times (1 + M_p/100) = 200\\text{ kPa} \\times 1.163 = 232.6\\text{ kPa}',
            explanation: 'The transducer overshoots the true 200 kPa reading by 32.6 kPa before ringing down.'
          },
          {
            stepNumber: 3,
            title: 'Calculate 2% Settling Time (ts)',
            math: 't_s(2\\%) \\approx \\frac{4.0}{\\zeta \\cdot \\omega_n} = \\frac{4.0}{0.50 \\times 62,832} = \\frac{4.0}{31,416} = 1.273 \\times 10^{-4}\\text{ s} = 127.3\\text{ }\\mu\\text{s}',
            explanation: 'The transient envelope completely settles within ±2% of 200 kPa in approximately 127 microseconds.'
          }
        ],
        finalAnswer: 'Peak Pressure = 232.6 kPa (16.3% Overshoot); Settling Time ts = 127.3 μs',
        practicalInsight:
          'If this pressure step occurs in an internal combustion chamber, the data acquisition filter must not clip the 232.6 kPa peak, or the sensor will record artificial saturation flat-tops.'
      },
      speakerNotes: 'Point out that high natural frequency (10 kHz) is what keeps the settling time down to a fraction of a millisecond.',
      takeaway: 'High natural frequency shortens transient duration while optimal damping suppresses peak overshoot.'
    },
    {
      id: 8,
      title: 'Figure: Transducer Architecture & Damping Envelope',
      subtitle: 'Vector SVG Embedded Illustration with Real-Time Scaling',
      sectionTag: 'Visual Diagrams',
      type: 'figure',
      figureSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" width="100%" height="100%">
  <rect width="1200" height="600" fill="#ffffff" />
  <rect x="20" y="20" width="1160" height="560" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
  <rect x="40" y="40" width="1120" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
  <text x="60" y="78" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#0f172a">
    Sample Diagram: Second-Order Sensor Step Response &amp; Error Corridor
  </text>
  <!-- Axes -->
  <line x1="100" y1="480" x2="1100" y2="480" stroke="#334155" stroke-width="2.5" />
  <line x1="100" y1="480" x2="100" y2="140" stroke="#334155" stroke-width="2.5" />
  <text x="1100" y="515" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#334155" text-anchor="end">Time t (s) →</text>
  <text x="80" y="145" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#334155">y(t)</text>
  <!-- Steady state line -->
  <line x1="100" y1="300" x2="1080" y2="300" stroke="#059669" stroke-width="2" stroke-dasharray="8,4" />
  <text x="1080" y="295" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#059669" text-anchor="end">y_ss = 1.0 (Target)</text>
  <!-- Error corridor -->
  <rect x="100" y="292" width="980" height="16" fill="#dcfce7" opacity="0.6" />
  <!-- Underdamped curve -->
  <path d="M 100 480 C 150 480 180 200 240 190 C 300 180 340 340 400 340 C 460 340 500 280 560 285 C 620 290 680 305 740 300 L 1080 300" fill="none" stroke="#2563eb" stroke-width="4" />
  <!-- Peak annotation -->
  <circle cx="240" cy="190" r="7" fill="#dc2626" />
  <line x1="240" y1="190" x2="240" y2="480" stroke="#dc2626" stroke-dasharray="4,4" />
  <text x="240" y="165" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#dc2626" text-anchor="middle">Peak Overshoot Mp (16.3%)</text>
  <text x="240" y="510" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#dc2626" text-anchor="middle">tp</text>
</svg>`,
      figureCaption: 'Vector step response illustrating damped ringing and ±2% settling corridor.',
      speakerNotes: 'Point out how vector SVGs maintain crisp lines at any projection scale or monitor resolution.',
      takeaway: 'Vector SVGs provide crisp, publication-ready diagrams that never pixelate on large classroom displays.'
    },
    {
      id: 9,
      title: 'Formative Assessment: Test Your Understanding',
      subtitle: 'Concept Check with Instant Answer Reveal',
      sectionTag: 'Knowledge Check',
      type: 'check-understanding',
      quiz: {
        question:
          'A temperature sensor with a time constant τ = 2.0 s is placed into an exhaust duct whose gas temperature increases linearly at a constant rate of 6.0 °C/s. Once the system reaches steady state, what is the dynamic measurement error?',
        options: [
          '0.0 °C (zero error because the sensor eventually catches up)',
          '3.0 °C lag error',
          '12.0 °C lag error',
          '24.0 °C lag error'
        ],
        correctIndex: 2,
        explanation:
          'For a first-order system excited by a ramp input x(t) = R·t, the steady-state dynamic error is given by ess = K · R · τ. With static gain K = 1.0, ramp rate R = 6.0 °C/s, and time constant τ = 2.0 s, the steady-state error is ess = 1.0 × 6.0 × 2.0 = 12.0 °C!'
      },
      speakerNotes: 'Pause for 30 seconds to let students vote before clicking to reveal the correct answer and derivation.',
      takeaway: 'First-order sensors under a ramp input always lag behind by a steady error equal to ess = K · R · τ.'
    },
    {
      id: 10,
      title: 'Chapter Summary & Key Engineering Takeaways',
      subtitle: 'Core Synthesis of Measurement Dynamics',
      sectionTag: 'Summary',
      type: 'review',
      bullets: [
        'Transducer Architecture: Primary sensing detector + secondary electrical transduction stage.',
        'Active vs. Passive: Self-generating active devices cannot record steady DC measurands; passive devices require ultra-stable DC excitation.',
        'First-Order Dynamics: Monotonic step response; 63.2% at 1τ, >98% at 4τ; steady ramp error ess = K·R·τ.',
        'Second-Order Tuning: The optimal damping ratio ζ = 0.707 balances rapid rise time with minimum settling time and maximum flat bandwidth.',
        'Matching Principle: The sensor cut-off frequency must be at least 5× to 10× higher than the highest frequency component in the measurand spectrum.'
      ],
      speakerNotes: 'Congratulate the class on completing this module and assign the end-of-chapter problems.',
      takeaway: 'Accurate measurement requires mastering both static calibration and dynamic filtering physics.'
    }
  ]
};

/**
 * The Master AI System Prompt for Gemini / ChatGPT / Claude to generate valid JSON chapter decks.
 */
export const AI_PROMPT_GENERATOR_TEMPLATE = (params?: {
  courseName?: string;
  unitNumber?: string;
  chapterTitle?: string;
  topics?: string;
  hours?: string;
  instructor?: string;
}) => {
  const course = params?.courseName || 'Instrumentation & Measurement Systems';
  const unit = params?.unitNumber || 'Unit VI';
  const title = params?.chapterTitle || 'Advanced Measurement Systems & Signal Conditioning';
  const topics =
    params?.topics ||
    '1. Sensors and transducers classification\n2. Static and dynamic characteristics\n3. Mathematical modeling (0th, 1st, 2nd order)\n4. Force, torque, and pressure measurement\n5. Thermal sensors and optical pyrometry';
  const hours = params?.hours || '8 Hours';
  const instructor = params?.instructor || 'Er. Saroj Chalise';

  return `You are a Senior Instrumentation Engineering Professor and Curriculum Architect.
Generate a classroom-ready QuartoDeck Presentation Package in JSON format strictly conforming to the ChapterDeckJSON schema.

================================================================================
COURSE & CHAPTER SPECIFICATIONS:
Course: ${course}
Unit / Module Number: ${unit}
Chapter Title: ${title}
Estimated Lecture Hours: ${hours}
Instructor: ${instructor}

SYLLABUS TOPICS TO COVER COMPREHENSIVELY:
${topics}

================================================================================
CRITICAL PEDAGOGICAL REQUIREMENTS:
Do NOT produce generic, superficial bullets. The output must be mathematically rigorous, intuitive, and complete. Ensure the following slide types are deliberately integrated:

1. DEFINITION SLIDES (type: "definition"):
   - Must include: term, formalDefinition, symbol, units, standardReference (e.g. ISO/IEC/IEEE), keyImplication.

2. TYPES / TAXONOMY SLIDES (type: "types"):
   - Must include: typesGrid array with typeName, description, keyFeature, example, and badge ("Active", "Passive", etc.).

3. ADVANTAGES VS. DISADVANTAGES (type: "pros-cons"):
   - Must include: title, advantages array (3-4 points), disadvantages array (3-4 points), and an engineeringVerdict.

4. CONCEPT & PHYSICAL ANALOGY SLIDES (type: "analogy"):
   - Must include: everydayConcept (relatable mental model), technicalMapping, whyItWorks, and limitsOfAnalogy (where the analogy breaks down).

5. WORKED NUMERICAL EXAMPLES (type: "worked-example"):
   - Must include: problem statement, given parameters, 2 to 3 step-by-step mathematical derivation steps with KaTeX formulas, finalAnswer, and practicalInsight.

6. MATHEMATICAL FORMULATION SLIDES (type: "content"):
   - Must include: KaTeX LaTeX equation ($...$ or displayed $$...$$), equationDescription, and explanatory bullets.

7. FORMATIVE QUIZZES (type: "check-understanding"):
   - Must include: quiz object with question, 4 realistic options, correctIndex (0-3), and detailed explanation.

8. COMMON MISCONCEPTIONS (type: "misconceptions"):
   - Debunk common student myths and exam pitfalls.

9. INLINE VECTOR FIGURES (type: "figure"):
   - Include standalone, valid SVG string in 'figureSvg' with viewBox="0 0 1200 600", pure white background (#ffffff), text elements with font-size >= 16, clean colors (#2563eb, #dc2626, #059669, #334155).

10. SPEAKER NOTES & TAKEAWAYS:
    - EVERY slide MUST contain substantive, private speakerNotes (for the professor) and a crisp takeaway summary.

================================================================================
STRICT JSON SCHEMA CONFORMANCE:
Output ONLY valid, parseable JSON with NO markdown backticks (no \`\`\`json ... \`\`\`), no prelude, and no postscript.

JSON SCHEMA STRUCTURE:
{
  "schemaVersion": "2.0",
  "id": "slug-lowercase-id",
  "unitNumber": "${unit}",
  "code": "IE-401",
  "title": "${title}",
  "shortTitle": "Short Title (max 20 chars)",
  "hours": "${hours}",
  "instructor": "${instructor}",
  "summary": "Multi-sentence summary of the chapter module.",
  "syllabusSections": [
    {
      "number": "6.1",
      "title": "Topic Title",
      "hours": "2.0 Hours",
      "specificObjective": "Measurable educational outcome...",
      "coreConcepts": ["Concept 1", "Concept 2"],
      "difficultConcepts": ["Difficult concept 1"],
      "misconceptions": ["Misconception 1"],
      "examQuestions": ["Question 1", "Question 2"]
    }
  ],
  "slides": [
    {
      "id": 1,
      "title": "Slide Title",
      "subtitle": "Slide Subtitle",
      "sectionTag": "Section Name",
      "type": "title" | "roadmap" | "objectives" | "why-matters" | "section-divider" | "concept" | "definition" | "types" | "pros-cons" | "figure" | "worked-example" | "analogy" | "check-understanding" | "misconceptions" | "review" | "content",
      "bullets": ["Point 1", "Point 2"],
      "equation": "LaTeX formula here",
      "equationDescription": "Explanation of formula",
      "definition": {
        "term": "Term Name",
        "formalDefinition": "Precise definition...",
        "symbol": "K",
        "units": "V/m",
        "standardReference": "ISO Standard",
        "keyImplication": "Practical engineering implication..."
      },
      "typesGrid": [
        {
          "typeName": "Type A",
          "description": "...",
          "keyFeature": "...",
          "example": "...",
          "badge": "Active"
        }
      ],
      "prosCons": {
        "title": "A vs B Comparison",
        "advantages": ["Advantage 1", "Advantage 2"],
        "disadvantages": ["Disadvantage 1", "Disadvantage 2"],
        "engineeringVerdict": "When to choose which..."
      },
      "analogy": {
        "everydayConcept": "Everyday metaphor...",
        "technicalMapping": "Mapping to physics...",
        "whyItWorks": "Why the intuition holds...",
        "limitsOfAnalogy": "Where the model breaks down..."
      },
      "workedExample": {
        "problem": "Numerical problem statement...",
        "given": { "Param 1": "Value 1" },
        "steps": [
          { "stepNumber": 1, "title": "Step 1 Title", "math": "KaTeX", "explanation": "..." }
        ],
        "finalAnswer": "Calculated answer...",
        "practicalInsight": "Design takeaway..."
      },
      "quiz": {
        "question": "Question text...",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctIndex": 2,
        "explanation": "Why Option C is correct..."
      },
      "figureSvg": "<svg viewBox=\\"0 0 1200 600\\" ...>...</svg>",
      "figureCaption": "Caption text...",
      "speakerNotes": "Professor spoken script...",
      "takeaway": "Key takeaway..."
    }
  ]
}
`;
};
