export type TutorialTopic =
  | 'Hysteresis'
  | 'Single-Point Calibration'
  | 'Multi-Point Calibration';

export interface TutorialTable {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface TutorialStep {
  title: string;
  explanation: string;
  math?: string;
}

export interface TutorialFinalAnswerItem {
  label: string;
  value: string;
}

export interface TutorialSelfCheck {
  prompt: string;
  expectedValue: number;
  tolerance: number;
  unit: string;
}

export interface TutorialProblem {
  id: string;
  number: string;
  title: string;
  topic: TutorialTopic;
  marks: number;
  difficulty: 'Fundamental' | 'Applied' | 'Exam Standard';
  statement: string;
  given: { label: string; value: string }[];
  dataTable?: TutorialTable;
  formulaHint: string;
  finalAnswerSummary: string;
  finalAnswerItems: TutorialFinalAnswerItem[];
  selfCheck: TutorialSelfCheck;
  steps: TutorialStep[];
  engineeringNote: string;
}

export interface ChapterTutorialSheet {
  chapterId: string;
  unitNumber: string;
  chapterTitle: string;
  courseCode: string;
  subtitle: string;
  estimatedTime: string;
  problems: TutorialProblem[];
}

export const CHAPTER_TUTORIALS: Record<string, ChapterTutorialSheet> = {
  unit1: {
    chapterId: 'unit1',
    unitNumber: 'Unit I',
    chapterTitle: 'Fundamentals of Measurement Systems',
    courseCode: 'MEC 232 · Instrumentation and Measurement (3-1-1)',
    subtitle:
      'Solved & self-check numerical problems covering Hysteresis Error, Single-Point Offset & Span Calibration, and Multi-Point Ordinary Least-Squares (OLS) Linear Calibration.',
    estimatedTime: '60 – 75 Minutes Practice',
    problems: [
      {
        id: 'u1-tut-01',
        number: 'Q1',
        title: 'Hysteresis Characterization of a Bourdon Pressure Transducer',
        topic: 'Hysteresis',
        marks: 6,
        difficulty: 'Fundamental',
        statement:
          'A $0\\text{–}10\\text{ bar}$ Bourdon-tube pressure transducer producing a $0.00\\text{–}5.00\\text{ V}$ output is calibrated against a dead-weight tester over one complete upscale ($0 \\to 10\\text{ bar}$) and downscale ($10 \\to 0\\text{ bar}$) pressure cycle. From the calibration log below, determine: (a) the maximum hysteresis voltage gap $H_{\\max}$ and the pressure at which it occurs, (b) the equivalent hysteresis error in $\\text{bar}$ using nominal sensitivity, and (c) the percentage hysteresis relative to Full-Scale Output ($\\%\\,\\text{FSO}$).',
        given: [
          { label: 'Input Range', value: '0 to 10 bar' },
          { label: 'Full-Scale Output (FSO)', value: '5.00 V (0.00 V to 5.00 V)' },
          { label: 'Nominal Sensitivity (K)', value: '0.50 V/bar' }
        ],
        dataTable: {
          caption: 'Bidirectional Upscale & Downscale Calibration Log',
          headers: [
            'True Pressure P (bar)',
            'Upscale Output V↑ (V)',
            'Downscale Output V↓ (V)',
            '|V↓ − V↑| (V)'
          ],
          rows: [
            ['0.0', '0.00', '0.04', '0.04'],
            ['2.0', '1.02', '1.11', '0.09'],
            ['4.0', '2.04', '2.19', '0.15'],
            ['6.0', '3.03', '3.16', '0.13'],
            ['8.0', '4.02', '4.10', '0.08'],
            ['10.0', '5.00', '5.00', '0.00']
          ]
        },
        formulaHint:
          'Compute $H_{\\max} = \\max_i |V_{\\downarrow, i} - V_{\\uparrow, i}|$, then divide by Full-Scale Output $\\text{FSO} = V_{\\max} - V_{\\min}$ and multiply by $100\\%$.',
        finalAnswerSummary:
          'Maximum hysteresis H_max = 0.15 V at P = 4.0 bar (0.30 bar equivalent pressure error); Percentage Hysteresis = 3.00% FSO.',
        finalAnswerItems: [
          { label: 'Max Hysteresis Gap (H_max)', value: '0.15 V (at P = 4.0 bar)' },
          { label: 'Pressure-Referred Hysteresis', value: '0.30 bar' },
          { label: 'Percentage Hysteresis', value: '3.00% FSO' }
        ],
        selfCheck: {
          prompt: 'Enter Percentage Hysteresis (% FSO)',
          expectedValue: 3.0,
          tolerance: 0.05,
          unit: '% FSO'
        },
        steps: [
          {
            title: 'Step 1 — Evaluate pointwise ascending–descending differences',
            explanation:
              'At every test pressure $P_i$, calculate the absolute deviation between the downscale and upscale readings: $\\Delta V_i = |V_{\\downarrow, i} - V_{\\uparrow, i}|$.',
            math: '\\Delta V = \\{0.04,\\; 0.09,\\; 0.15,\\; 0.13,\\; 0.08,\\; 0.00\\}\\text{ V}'
          },
          {
            title: 'Step 2 — Identify maximum hysteresis error',
            explanation:
              'Inspecting all six points, the largest loading–unloading separation occurs at mid-low scale ($P = 4.0\\text{ bar}$).',
            math: 'H_{\\max} = |2.19 - 2.04| = 0.15\\text{ V} \\quad (\\text{at } P = 4.0\\text{ bar})'
          },
          {
            title: 'Step 3 — Convert to input-referred pressure hysteresis',
            explanation:
              'With nominal sensitivity $K = \\frac{\\text{FSO}}{\\text{Full-Scale Input}} = \\frac{5.00\\text{ V}}{10\\text{ bar}} = 0.50\\text{ V/bar}$, divide $H_{\\max}$ by $K$.',
            math: '\\Delta P_{\\text{hyst}} = \\frac{H_{\\max}}{K} = \\frac{0.15\\text{ V}}{0.50\\text{ V/bar}} = 0.30\\text{ bar}'
          },
          {
            title: 'Step 4 — Express hysteresis as a percentage of Full-Scale Output',
            explanation:
              'Normalize $H_{\\max}$ by the full-scale output span ($\\text{FSO} = 5.00 - 0.00 = 5.00\\text{ V}$).',
            math: '\\%\\,\\text{Hysteresis} = \\frac{H_{\\max}}{\\text{FSO}} \\times 100\\% = \\frac{0.15}{5.00} \\times 100\\% = 3.00\\%\\text{ FSO}'
          }
        ],
        engineeringNote:
          'Mechanical hysteresis in Bourdon tubes arises primarily from internal pivot friction, gear backlash in the sector-pinion linkage, and elastic energy dissipation in the C-tube alloy.'
      },
      {
        id: 'u1-tut-02',
        number: 'Q2',
        title: 'Single-Point Zero-Offset Calibration of a Cold-Storage Pt100 RTD',
        topic: 'Single-Point Calibration',
        marks: 5,
        difficulty: 'Fundamental',
        statement:
          'A 3-wire Pt100 resistance temperature detector (RTD) installed in a vaccine cold room is checked using a single-point calibration bath containing crushed ice and distilled water at $T_{\\text{ref}} = 0.00\\,^\\circ\\text{C}$. After thermal stabilization, the digital panel reads $T_{\\text{raw, 0}} = -1.25\\,^\\circ\\text{C}$. Assuming sensor slope ($m = 1.00$) is accurate: (a) find the static bias error $e_0$ and additive zero correction $C_0$, (b) write the calibrated readout equation $T_{\\text{cal}}(T_{\\text{raw}})$, and (c) find the true cold-room temperature and pre-calibration relative percentage error magnitude when the uncalibrated display shows $T_{\\text{raw, room}} = -21.25\\,^\\circ\\text{C}$.',
        given: [
          { label: 'Certified Reference Bath (T_ref)', value: '0.00 °C (Ice-point bath)' },
          { label: 'Uncalibrated Bath Display (T_raw,0)', value: '-1.25 °C' },
          { label: 'Assumed Calibration Slope', value: 'm = 1.00 (Zero-offset trim only)' },
          { label: 'Field Chiller Raw Display', value: '-21.25 °C' }
        ],
        formulaHint:
          'Static error $e_0 = T_{\\text{raw},0} - T_{\\text{ref}}$; zero-offset correction $C_0 = T_{\\text{ref}} - T_{\\text{raw},0} = -e_0$; calibrated reading $T_{\\text{cal}} = T_{\\text{raw}} + C_0$.',
        finalAnswerSummary:
          'Static bias e_0 = -1.25 °C; Correction C_0 = +1.25 °C; Calibration equation: T_cal = T_raw + 1.25 °C; True chiller temperature = -20.00 °C (6.25% error before calibration).',
        finalAnswerItems: [
          { label: 'Static Error & Correction', value: 'e_0 = -1.25 °C, C_0 = +1.25 °C' },
          { label: 'Calibrated Equation', value: 'T_cal = T_raw + 1.25 °C' },
          { label: 'True Room Temperature', value: '-20.00 °C' },
          { label: 'Pre-Calibration Error (%)', value: '6.25% (relative to -20.00 °C)' }
        ],
        selfCheck: {
          prompt: 'Enter True Cold-Room Temperature (°C)',
          expectedValue: -20.0,
          tolerance: 0.05,
          unit: '°C'
        },
        steps: [
          {
            title: 'Step 1 — Determine static instrument bias and correction constant',
            explanation:
              'Bias error is measured minus true value at the certified ice-point reference ($0.00\\,^\\circ\\text{C}$). The additive correction cancels this bias.',
            math: 'e_0 = T_{\\text{raw},0} - T_{\\text{ref}} = -1.25 - 0.00 = -1.25\\,^\\circ\\text{C} \\implies C_0 = -e_0 = +1.25\\,^\\circ\\text{C}'
          },
          {
            title: 'Step 2 — Formulate the single-point calibration equation',
            explanation:
              'Because a single-point zero trim shifts only the intercept while preserving unity slope ($m = 1$), every raw indication is shifted by $+1.25\\,^\\circ\\text{C}$.',
            math: 'T_{\\text{cal}} = T_{\\text{raw}} + 1.25\\,^\\circ\\text{C}'
          },
          {
            title: 'Step 3 — Correct the field chiller measurement',
            explanation:
              'Substitute the observed cold-room display $T_{\\text{raw, room}} = -21.25\\,^\\circ\\text{C}$ into the calibrated equation.',
            math: 'T_{\\text{cal, room}} = -21.25 + 1.25 = -20.00\\,^\\circ\\text{C}'
          },
          {
            title: 'Step 4 — Compute pre-calibration percentage error magnitude',
            explanation:
              'Compare the absolute error $|e_0| = 1.25\\,^\\circ\\text{C}$ against the true cold-room temperature magnitude $|T_{\\text{cal, room}}| = 20.00\\,^\\circ\\text{C}$.',
            math: '\\%\\,\\text{Error} = \\frac{|e_0|}{|T_{\\text{cal, room}}|} \\times 100\\% = \\frac{1.25}{20.00} \\times 100\\% = 6.25\\%'
          }
        ],
        engineeringNote:
          'Single-point zero calibration fixes pure additive offset (e.g., lead-wire resistance imbalance in a 2-wire/3-wire RTD), but cannot detect or correct multiplicative gain drift or sensor non-linearity at distant temperatures.'
      },
      {
        id: 'u1-tut-03',
        number: 'Q3',
        title: 'Single-Point Span (Gain) Calibration of an Automotive Fuel-Rail Sensor',
        topic: 'Single-Point Calibration',
        marks: 6,
        difficulty: 'Applied',
        statement:
          'A common-rail diesel fuel pressure transducer has a nominal operating range of $0\\text{–}500\\text{ bar}$ with an ideal linear transfer law of $0.00\\text{–}5.00\\text{ V}$ (nominal sensitivity $S_{\\text{nom}} = 10.00\\text{ mV/bar}$, verified $0.00\\text{ V}$ at atmospheric zero). During a single-point span check against a $P_{\\text{ref}} = 400\\text{ bar}$ hydraulic reference, the transducer output stabilizes at $V_{\\text{raw, ref}} = 3.92\\text{ V}$ instead of the ideal $4.00\\text{ V}$. Determine: (a) the actual sensitivity $S_{\\text{actual}}$ ($\\text{mV/bar}$) and dimensionless span gain factor $K_{\\text{span}}$, (b) the calibrated pressure law $P_{\\text{cal}}(V_{\\text{raw}})$, and (c) the true fuel-rail pressure when the ECU records $V_{\\text{raw}} = 2.94\\text{ V}$, along with the under-reading error if left uncalibrated.',
        given: [
          { label: 'Nominal Range & Sensitivity', value: '0–500 bar · S_nom = 10.00 mV/bar (0.010 V/bar)' },
          { label: 'Zero Verification', value: '0.00 V at 0 bar (Zero bias = 0)' },
          { label: 'Single Span Reference (P_ref)', value: '400 bar (Ideal output = 4.00 V)' },
          { label: 'Measured Output at Reference', value: 'V_raw,ref = 3.92 V' },
          { label: 'ECU Logged Voltage', value: 'V_raw = 2.94 V' }
        ],
        formulaHint:
          'Compute $S_{\\text{actual}} = V_{\\text{raw, ref}} / P_{\\text{ref}}$ and $K_{\\text{span}} = V_{\\text{ideal, ref}} / V_{\\text{raw, ref}}$, then find $P_{\\text{cal}} = V_{\\text{raw}} / S_{\\text{actual}}$.',
        finalAnswerSummary:
          'Actual sensitivity S_actual = 9.80 mV/bar; Span factor K_span = 1.0204 (50/49); True pressure at 2.94 V is P_cal = 300.00 bar (avoiding a 6.00 bar / 2.00% under-reading).',
        finalAnswerItems: [
          { label: 'Actual Sensitivity (S_actual)', value: '9.80 mV/bar (0.0098 V/bar)' },
          { label: 'Span Correction Factor (K_span)', value: '1.0204 (50/49)' },
          { label: 'True Fuel-Rail Pressure', value: '300.00 bar' },
          { label: 'Uncalibrated Under-Reading Error', value: '6.00 bar (2.00% low)' }
        ],
        selfCheck: {
          prompt: 'Enter True Fuel-Rail Pressure at 2.94 V (bar)',
          expectedValue: 300.0,
          tolerance: 0.2,
          unit: 'bar'
        },
        steps: [
          {
            title: 'Step 1 — Calculate actual transducer sensitivity and gain multiplier',
            explanation:
              'Because the zero intercept is anchored at $(0\\text{ bar},\\,0.00\\text{ V})$, the single reference at $400\\text{ bar}$ directly establishes the true slope.',
            math: 'S_{\\text{actual}} = \\frac{3.92\\text{ V}}{400\\text{ bar}} = 0.0098\\text{ V/bar} = 9.80\\text{ mV/bar}, \\qquad K_{\\text{span}} = \\frac{4.00}{3.92} = \\frac{50}{49} \\approx 1.0204'
          },
          {
            title: 'Step 2 — Write the span-calibrated pressure transfer law',
            explanation:
              'Invert the true sensitivity to compute pressure directly from measured transducer voltage.',
            math: 'P_{\\text{cal}} = \\frac{V_{\\text{raw}}}{S_{\\text{actual}}} = \\frac{V_{\\text{raw}}}{0.0098\\text{ V/bar}} = \\left(K_{\\text{span}} \\cdot \\frac{V_{\\text{raw}}}{S_{\\text{nom}}}\\right) \\approx 102.041\\,V_{\\text{raw}}\\text{ bar}'
          },
          {
            title: 'Step 3 — Compute calibrated vs uncalibrated pressure at V_raw = 2.94 V',
            explanation:
              'Compare the span-corrected true pressure against the uncalibrated nominal lookup ($V_{\\text{raw}} / 0.010$).',
            math: 'P_{\\text{cal}} = \\frac{2.94}{0.0098} = 300.00\\text{ bar}, \\qquad P_{\\text{nom}} = \\frac{2.94}{0.010} = 294.00\\text{ bar}'
          },
          {
            title: 'Step 4 — Quantify the avoided measurement error',
            explanation:
              'Find the absolute and percentage deviation removed by single-point span adjustment.',
            math: '\\Delta P = 300.00 - 294.00 = 6.00\\text{ bar}, \\qquad \\%\\,\\text{Error} = \\frac{6.00}{300.00} \\times 100\\% = 2.00\\%'
          }
        ],
        engineeringNote:
          'Single-point span calibration should always be performed near the upper working region (typically 70%–85% of full scale) and is only valid when zero offset has been independently confirmed negligible.'
      },
      {
        id: 'u1-tut-04',
        number: 'Q4',
        title: '5-Point Multi-Point OLS Calibration & Non-Linearity of an LVDT',
        topic: 'Multi-Point Calibration',
        marks: 8,
        difficulty: 'Exam Standard',
        statement:
          'A Linear Variable Differential Transformer (LVDT) displacement transducer is calibrated at $N = 5$ micrometer displacement steps across its $0\\text{–}20\\text{ mm}$ stroke. Using Ordinary Least-Squares (OLS) linear regression $\\hat{y} = m\\,x + c$: (a) determine the best-fit sensitivity $m$ ($\\text{V/mm}$) and zero-intercept $c$ ($\\text{V}$), (b) compute the pointwise residuals $e_i = y_i - \\hat{y}_i$ and the maximum percentage non-linearity relative to the best-fit Full-Scale Output ($\\text{FSO} = 5.00\\text{ V}$), and (c) find the true shaft displacement when field acquisition records $V_{\\text{field}} = 3.30\\text{ V}$.',
        given: [
          { label: 'Number of Calibration Points (N)', value: '5 points (0 mm to 20 mm)' },
          { label: 'Best-Fit Line Model', value: 'ŷ = m·x + c' },
          { label: 'Full-Scale Output (FSO)', value: '5.000 V (at 20 mm stroke)' },
          { label: 'Field Acquired Voltage', value: 'V_field = 3.300 V' }
        ],
        dataTable: {
          caption: '5-Point LVDT Static Calibration Data',
          headers: [
            'Displacement x (mm)',
            'Measured Output y (V)',
            'x² (mm²)',
            'x · y (mm·V)'
          ],
          rows: [
            ['0', '0.05', '0', '0.00'],
            ['5', '1.28', '25', '6.40'],
            ['10', '2.58', '100', '25.80'],
            ['15', '3.80', '225', '57.00'],
            ['20', '5.04', '400', '100.80']
          ]
        },
        formulaHint:
          'Use $m = \\frac{N\\sum x_i y_i - (\\sum x_i)(\\sum y_i)}{N\\sum x_i^2 - (\\sum x_i)^2}$ and $c = \\bar{y} - m\\bar{x}$, then invert $\\hat{y} = m x + c$ for $x_{\\text{true}}$.',
        finalAnswerSummary:
          'Best-fit equation: ŷ = 0.250 x + 0.050 V (m = 0.250 V/mm, c = 0.050 V); Max Non-Linearity = 0.60% FSO (|e|_max = 0.030 V at 10 mm); True displacement at 3.30 V is x = 13.00 mm.',
        finalAnswerItems: [
          { label: 'Sensitivity (Slope m)', value: '0.250 V/mm' },
          { label: 'Zero Intercept (c)', value: '0.050 V' },
          { label: 'Max Non-Linearity (% FSO)', value: '0.60% FSO (|e|_max = 0.030 V)' },
          { label: 'True Displacement at 3.30 V', value: '13.00 mm' }
        ],
        selfCheck: {
          prompt: 'Enter True Displacement at V_field = 3.30 V (mm)',
          expectedValue: 13.0,
          tolerance: 0.05,
          unit: 'mm'
        },
        steps: [
          {
            title: 'Step 1 — Compute summation terms and means',
            explanation:
              'Sum all columns across the $N = 5$ calibration points ($\\bar{x} = 50/5 = 10\\text{ mm}$, $\\bar{y} = 12.75/5 = 2.55\\text{ V}$).',
            math: '\\sum x_i = 50,\\quad \\sum y_i = 12.75,\\quad \\sum x_i^2 = 750,\\quad \\sum x_i y_i = 190.00'
          },
          {
            title: 'Step 2 — Evaluate OLS slope m and intercept c',
            explanation:
              'Compute $S_{xx} = \\sum x_i^2 - \\frac{(\\sum x_i)^2}{N} = 750 - 500 = 250$ and $S_{xy} = \\sum x_i y_i - \\frac{(\\sum x_i)(\\sum y_i)}{N} = 190.00 - 127.50 = 62.50$.',
            math: 'm = \\frac{S_{xy}}{S_{xx}} = \\frac{62.50}{250} = 0.250\\text{ V/mm}, \\qquad c = \\bar{y} - m\\bar{x} = 2.55 - (0.250)(10) = 0.050\\text{ V}'
          },
          {
            title: 'Step 3 — Calculate residuals and percentage non-linearity',
            explanation:
              'Compute $e_i = y_i - (0.250\\,x_i + 0.050)$ at each step: $e = \\{0.000,\\; -0.020,\\; +0.030,\\; 0.000,\\; -0.010\\}\\text{ V}$. The worst deviation is $|e|_{\\max} = 0.030\\text{ V}$ at $x = 10\\text{ mm}$.',
            math: '\\%\\,\\text{Non-Linearity} = \\frac{|e|_{\\max}}{\\text{FSO}} \\times 100\\% = \\frac{0.030}{5.000} \\times 100\\% = 0.60\\%\\text{ FSO}'
          },
          {
            title: 'Step 4 — Invert calibration line for field displacement',
            explanation:
              'Solve $V_{\\text{field}} = 0.250\\,x_{\\text{true}} + 0.050$ for $x_{\\text{true}}$ at $V_{\\text{field}} = 3.30\\text{ V}$.',
            math: 'x_{\\text{true}} = \\frac{V_{\\text{field}} - c}{m} = \\frac{3.30 - 0.050}{0.250} = \\frac{3.25}{0.250} = 13.00\\text{ mm}'
          }
        ],
        engineeringNote:
          'Unlike single- or two-point calibration (which can lock onto an end-point outlier), multi-point OLS regression distributes random noise symmetrically ($\\sum e_i = 0$, $\\sum x_i e_i = 0$) across the entire stroke and explicitly reveals non-linearity.'
      },
      {
        id: 'u1-tut-05',
        number: 'Q5',
        title: 'Multi-Point Bidirectional Calibration & Hysteresis of a Penstock Transmitter',
        topic: 'Multi-Point Calibration',
        marks: 10,
        difficulty: 'Exam Standard',
        statement:
          'A $0\\text{–}40\\text{ bar}$ piezoresistive pressure transmitter ($4\\text{–}20\\text{ mA}$ nominal loop, $\\text{FSO}_{\\text{nom}} = 16.00\\text{ mA}$) on a hydropower penstock manifold undergoes a 5-point bidirectional calibration (upscale $I_{\\uparrow}$ and downscale $I_{\\downarrow}$). Using the mean curve $I_{\\text{mean}, i} = (I_{\\uparrow, i} + I_{\\downarrow, i})/2$: (a) derive the OLS best-fit equation $\\hat{I} = m\\,P + c$, (b) calculate both the maximum independent percentage non-linearity ($\\%\\,\\text{NL}$) and maximum percentage hysteresis ($\\%\\,\\text{Hyst}$) relative to the $16.00\\text{ mA}$ span, and (c) find the calibrated penstock pressure when the SCADA system logs $I_{\\text{field}} = 14.05\\text{ mA}$.',
        given: [
          { label: 'Pressure Range', value: '0 to 40 bar (5 steps: 0, 10, 20, 30, 40)' },
          { label: 'Nominal Output Span (FSO)', value: '16.00 mA (4.00 mA to 20.00 mA)' },
          { label: 'Field SCADA Current', value: 'I_field = 14.05 mA' }
        ],
        dataTable: {
          caption: 'Bidirectional 5-Point Penstock Transmitter Calibration Table',
          headers: [
            'Pressure P (bar)',
            'Upscale I↑ (mA)',
            'Downscale I↓ (mA)',
            'Mean I_mean (mA)',
            'Hysteresis |I↓ − I↑| (mA)'
          ],
          rows: [
            ['0', '3.99', '4.07', '4.03', '0.08'],
            ['10', '7.90', '8.18', '8.04', '0.28'],
            ['20', '11.97', '12.29', '12.13', '0.32'],
            ['30', '15.90', '16.10', '16.00', '0.20'],
            ['40', '20.03', '20.07', '20.05', '0.04']
          ]
        },
        formulaHint:
          'First fit OLS regression $(m, c)$ to $(P_i, I_{\\text{mean}, i})$ pairs. Obtain $\\%\\,\\text{NL}$ from $\\max|I_{\\text{mean}, i} - \\hat{I}_i|/16.00$ and $\\%\\,\\text{Hyst}$ from $\\max|I_{\\downarrow, i} - I_{\\uparrow, i}|/16.00$.',
        finalAnswerSummary:
          'OLS fit: Î = 0.400 P + 4.05 mA (m = 0.400 mA/bar, c = 4.05 mA); Max Non-Linearity = 0.50% FSO; Max Hysteresis = 2.00% FSO; True penstock pressure at 14.05 mA = 25.00 bar.',
        finalAnswerItems: [
          { label: 'Mean Calibration Equation', value: 'Î = 0.400 P + 4.05 mA' },
          { label: 'Max Non-Linearity (% FSO)', value: '0.50% FSO (|e|_max = 0.08 mA at 20 bar)' },
          { label: 'Max Hysteresis (% FSO)', value: '2.00% FSO (H_max = 0.32 mA at 20 bar)' },
          { label: 'True Penstock Pressure (14.05 mA)', value: '25.00 bar' }
        ],
        selfCheck: {
          prompt: 'Enter Calibrated Penstock Pressure at 14.05 mA (bar)',
          expectedValue: 25.0,
          tolerance: 0.1,
          unit: 'bar'
        },
        steps: [
          {
            title: 'Step 1 — Compute sums for the mean curve (P_i, I_mean,i)',
            explanation:
              'For $N = 5$ points with $\\bar{P} = 20\\text{ bar}$ and $\\sum P_i = 100$, $\\sum P_i^2 = 3000$, compute the mean-current sums ($\\bar{I} = 60.25 / 5 = 12.05\\text{ mA}$).',
            math: '\\sum I_{\\text{mean}, i} = 60.25\\text{ mA}, \\qquad \\sum P_i I_{\\text{mean}, i} = 0 + 80.4 + 242.6 + 480.0 + 802.0 = 1605.0\\text{ bar}\\cdot\\text{mA}'
          },
          {
            title: 'Step 2 — Fit OLS best-fit slope and live-zero intercept',
            explanation:
              'Evaluate $S_{xx} = 3000 - \\frac{100^2}{5} = 1000$ and $S_{xy} = 1605.0 - \\frac{100 \\times 60.25}{5} = 400.0$.',
            math: 'm = \\frac{400.0}{1000} = 0.400\\text{ mA/bar}, \\qquad c = 12.05 - (0.400)(20) = 4.05\\text{ mA}'
          },
          {
            title: 'Step 3 — Compute Non-Linearity and Hysteresis (% FSO)',
            explanation:
              'Residuals $e_i = I_{\\text{mean}, i} - (0.400 P_i + 4.05)$ are $\\{-0.02,\\; -0.01,\\; +0.08,\\; -0.05,\\; 0.00\\}\\text{ mA}$, giving $|e|_{\\max} = 0.08\\text{ mA}$ at $20\\text{ bar}$. Maximum hysteresis gap is also at $20\\text{ bar}$ ($H_{\\max} = 0.32\\text{ mA}$).',
            math: '\\%\\,\\text{NL} = \\frac{0.08}{16.00} \\times 100\\% = 0.50\\%\\text{ FSO}, \\qquad \\%\\,\\text{Hyst} = \\frac{0.32}{16.00} \\times 100\\% = 2.00\\%\\text{ FSO}'
          },
          {
            title: 'Step 4 — Convert SCADA loop reading to true penstock pressure',
            explanation:
              'Invert $\\hat{I} = 0.400\\,P + 4.05$ for $I_{\\text{field}} = 14.05\\text{ mA}$.',
            math: 'P_{\\text{cal}} = \\frac{I_{\\text{field}} - c}{m} = \\frac{14.05 - 4.05}{0.400} = \\frac{10.00}{0.400} = 25.00\\text{ bar}'
          }
        ],
        engineeringNote:
          'Separating non-linearity (on the averaged bidirectional curve) from hysteresis (on the half- or full-loop width between ascending and descending passes) prevents mechanical backlash from masquerading as diaphragm curvature during acceptance testing.'
      }
    ]
  }
};
