/**
 * Unified Chapter Deck Schema Definition
 * Supports full-spectrum technical pedagogy:
 * - Mathematical KaTeX formulations
 * - Dynamic Vector Figures (SVG)
 * - Formal Definitions & Standards
 * - Types & Architectural Taxonomies
 * - Advantages vs. Disadvantages (Trade-off analyses)
 * - Concept & Physical Analogies
 * - Step-by-Step Worked Numerical Examples
 * - Formative Check-Understanding Quizzes
 * - Common Misconceptions & Pitfalls
 */

import { SvgAsset } from '../data/svgAssets';

export type SlideType =
  | 'title'
  | 'roadmap'
  | 'objectives'
  | 'why-matters'
  | 'section-divider'
  | 'concept'
  | 'definition'
  | 'types'
  | 'pros-cons'
  | 'figure'
  | 'worked-example'
  | 'analogy'
  | 'check-understanding'
  | 'misconceptions'
  | 'review'
  | 'formula'
  | 'content';

export interface DefinitionBlock {
  term: string;
  formalDefinition?: string;
  formalText?: string;
  operationalMeaning?: string;
  symbol?: string;
  units?: string;
  standardReference?: string; // e.g. "ISO 5725-1", "IEEE 1451"
  keyImplication?: string;
}

export interface TypeItem {
  typeName: string;
  description: string;
  keyFeature: string;
  example: string;
  badge?: string; // e.g. "Active", "Passive", "Self-Generating"
}

export interface ProsConsBlock {
  title?: string;
  advantages: string[];
  disadvantages: string[];
  engineeringVerdict?: string;
}

export interface AnalogyBlock {
  everydayConcept: string;
  technicalMapping: string;
  whyItWorks: string;
  limitsOfAnalogy: string;
}

export interface WorkedExampleStep {
  stepNumber: number;
  title: string;
  math?: string;
  explanation: string;
}

export interface WorkedExampleBlock {
  problem: string;
  given?: Record<string, string>;
  steps: WorkedExampleStep[];
  finalAnswer: string;
  practicalInsight?: string;
}

export interface QuizBlock {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FormulaSymbolItem {
  symbol: string;
  name: string;
  unit?: string;
  description?: string;
}

export interface FormulaBlock {
  equation: string;
  label?: string; // e.g. "(Eq. 5.1)" or "Canonical Standard Form"
  description?: string;
  symbols?: FormulaSymbolItem[];
  derivationContext?: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  sectionTag: string;
  type: SlideType;

  // Visuals & Diagrams
  figureKey?: string; // References figures dictionary key
  figureSvg?: string; // Inline SVG content (for uploaded custom chapters)
  figureCaption?: string;

  // Text & Structure
  bullets?: string[];
  contentHtml?: string;
  columns?: { left: string[]; right: string[] };

  // Mathematics
  equation?: string;
  equationDescription?: string;
  formulaBlock?: FormulaBlock;
  symbols?: FormulaSymbolItem[];

  // Deep Pedagogical Specializations
  definition?: DefinitionBlock;
  typesGrid?: TypeItem[];
  prosCons?: ProsConsBlock;
  analogy?: AnalogyBlock;
  workedExample?: WorkedExampleBlock;
  quiz?: QuizBlock;

  // Speaker & Context
  speakerNotes: string;
  takeaway?: string;
  interactiveLabRef?: string; // e.g. "calibration", "strain_bridge", "system_dynamics"
}

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

export interface ChapterDeckJSON {
  schemaVersion: '2.0';
  id: string; // Unique slug e.g. 'unit1', 'ch-thermo-dynamics'
  unitNumber: string; // e.g. 'Unit V', 'Chapter 7'
  code: string; // Course code e.g. 'ME-301'
  title: string;
  shortTitle: string;
  hours: string;
  instructor: string;
  referenceUrl?: string;
  summary: string;
  syllabusSections: SyllabusSection[];
  slides: SlideData[];
  figures?: Record<string, SvgAsset>;
  pySource?: string;
  qmdSource?: string;
  runInstructions?: string;
}
