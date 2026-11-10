================================================================================
UNIT III: STRAIN GAUGES — INTERACTIVE ENGINEERING PRESENTATION
Course: MEC 232 (3-1-1) · Instrumentation and Measurement
Pokhara University & BE Mechanical Curriculum Alignment
Instructor: Er. Saroj Chalise (IOE Pulchowk, BE 2014, ME 2019)
Reference: https://chalisesaroj.github.io/slide/
================================================================================

1. OVERVIEW & DELIVERABLES
--------------------------------------------------------------------------------
This package contains the complete, classroom-ready 36-slide interactive web
presentation for Unit III: Strain Gauges (6 Hours) adhering strictly to the
university syllabus and master pedagogical specifications:

A. Online Web Applet:
   - Built into the AI Studio application under Unit III (Strain Gauges).
   - Features 36 responsive slides with clean KaTeX mathematical typesetting.
   - 10 publication-grade 16:9 vector SVG figures on pure white (#ffffff) backgrounds.
   - Interactive Virtual Labs:
     * Lab 1: Stretch the Material (Strain, GF, R0 sliders and live resistance shift)
     * Lab 2: Wheatstone Bridge Simulator (Quarter, Half, Full topology selector, V0 and non-linearity)
     * Lab 3: Temperature Compensation (Thermal apparent strain, dummy gauge, STC matched alloys)

B. Standalone HTML File:
   - Located at: public/strain_gauges_presentation.html (and strain_gauges_presentation.html)
   - Completely self-contained single-file HTML presentation.
   - Can be opened directly in any web browser without Node.js, Python, or build tools.
   - Can be hosted directly on GitHub Pages, Netlify, or university LMS portals.

C. Quarto Reveal.js Source Package:
   - lecture_unit3.qmd: Complete Quarto markdown presentation source.
   - lecture_unit3.py: Python vector asset generator script.

2. SYLLABUS MAPPING (6 HOURS TOTAL)
--------------------------------------------------------------------------------
- Part A: Introduction and Gauge Factor (Slides 1–8 · 60 min)
  * Can We See Deformation? Physical limits of human observation.
  * Strain formulation: ε = ΔL / L0 and the microstrain (με) unit.
  * Conductor lengthening, Poisson thinning, and lattice piezoresistivity.
  * Gauge Factor derivation from R = ρL/A: GF = 1 + 2ν + (Δρ/ρ)/ε.
  * Quantitative worked problem (120 Ω, GF=2.00, ε=1000 με ⟹ ΔR = 0.24 Ω).

- Part B: Bonded and Unbonded Strain Gauges (Slides 9–13 · 45 min)
  * Bonded foil construction: carrier matrix, adhesive shear lag mechanics.
  * Unbonded wire construction: suspended flexure mechanism, zero adhesive creep.
  * Engineering trade-off comparison matrix and transducer integration.

- Part C: Related Circuit Configurations (Slides 14–23 · 135 min)
  * The measurement challenge: Resolving 0.2% resistance changes.
  * 3.3.1 Ballast circuit: divider transfer function, sensitivity peak at m=1.
  * The fatal 5.0 V DC pedestal problem and AC capacitive coupling for vibration.
  * 3.3.2 Wheatstone bridge: differential null condition (R1·R3 = R2·R4 ⟹ V0 = 0V).
  * Quarter bridge (1×): small-strain approximation and non-linearity error.
  * Half bridge in bending (2×): push-pull cancellation, perfect linearity, auto thermal rejection.
  * Full bridge in bending (4×): 4× sensitivity multiplier, highest SNR, zero drift.
  * 3.3.3 Constant current circuit: 4-wire Kelvin excitation, zero lead-wire attenuation.

- Part D: Temperature Compensation Techniques (Slides 24–30 · 75 min)
  * The thermal trap: How temperature mimics mechanical strain.
  * Physics of apparent strain: ε_app = [β/GF + (α_s - α_g)]·ΔT.
  * 3.4.1 Adjacent arm balancing: Dummy gauge on unstressed matched block.
  * 3.4.2 Self-Temperature Compensation (STC): Metallurgical tuning (STC-13, STC-23, STC-06).
  * Solved numerical example: 75 MPa false stress on aluminum beam eliminated.

- Part E: Applications, Measurement Chain & Synthesis (Slides 31–36 · 45 min)
  * Industrial pillars: Load cells, bridges, automotive torque telemetry, UTM.
  * Complete 6-stage measurement chain: Force ➔ Strain ➔ Gauge ➔ Bridge ➔ InAmp ➔ ADC.
  * Formative quiz check and step-by-step cantilever load cell full-bridge design.
  * Master formula cheat sheet and closing message:
    "You cannot always see deformation, but you can measure it!"

3. KEYBOARD SHORTCUTS (REVEAL.JS STANDARD)
--------------------------------------------------------------------------------
- [→] / [Space] / [PageDown] : Advance to next slide
- [←] / [PageUp]            : Return to previous slide
- [F]                       : Toggle true fullscreen view (no browser chrome)
- [S]                       : Open instructor speaker notes drawer
- [O]                       : Toggle 36-slide overview thumbnail grid
- [ESC]                     : Close overview grid / exit fullscreen
- [Home] / [End]            : Jump to first / last slide

4. INSTRUCTOR ATTRIBUTION
--------------------------------------------------------------------------------
Er. Saroj Chalise, Mechanical Engineer
- BE Mechanical: IOE Pulchowk Campus, 2014
- ME Mechanical: IOE Pulchowk Campus, 2019
- 10+ Years of Experience in Hydropower Machinery, Automotive Testing & Teaching
- Portfolio & Slides: https://chalisesaroj.github.io/slide/
================================================================================
