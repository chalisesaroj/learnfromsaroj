/**
 * Generator script to create public/chapter1_presentation.html
 * Runs with: npx tsx scripts/generate_chapter1_html.ts
 */

import fs from 'fs';
import path from 'path';
import { SLIDES_DATA } from '../src/data/lectureContent';
import { SlideData } from '../src/types/chapterDeck';

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatMarkdownToHtml(raw: string): string {
  if (!raw) return '';
  return raw
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

function generateHtml(): string {
  const slides = SLIDES_DATA;
  const totalSlides = slides.length;

  let slidesHtml = '';
  let overviewCardsHtml = '';

  slides.forEach((s, idx) => {
    const isDark = s.type === 'title' || s.type === 'section-divider';
    const activeClass = idx === 0 ? 'active' : '';
    const themeClass = isDark ? 'slide-dark' : 'slide-light';
    const slideNum = idx + 1;

    overviewCardsHtml += `
      <div class="overview-card" onclick="goToSlide(${idx})">
        <div class="overview-card-num">Slide ${slideNum}</div>
        <div class="overview-card-title">${escapeHtml(s.title)}</div>
        <div style="font-size:10px; color:#64748b; text-transform:uppercase;">${escapeHtml(s.sectionTag || 'Topic')}</div>
      </div>
    `;

    let slideInner = '';

    if (s.type === 'title') {
      slideInner = `
        <div>
          <span class="slide-tag">Pokhara University · BE Mechanical · MEC 232</span>
          <h1 class="slide-title" style="font-size: 46px; color: #ffffff; margin-top: 10px;">FUNDAMENTALS OF MEASUREMENT SYSTEMS</h1>
          <p class="slide-subtitle" style="font-size: 22px; color: var(--accent-amber); font-weight: 600;">
            ${escapeHtml(s.subtitle || 'Unit I · 6 Hours')}
          </p>
        </div>

        <div class="content-grid-2">
          <div class="card-box" style="border-left: 4px solid var(--accent-teal);">
            <h3 style="color: #38bdf8; font-size: 18px; margin-bottom: 12px; font-weight: 700;">Instructor & Attribution</h3>
            <ul class="clean-list" style="font-size: 15px; gap: 8px;">
              <li><strong>Instructor:</strong> Er. Saroj Chalise</li>
              <li><strong>Education:</strong> BE Mech (IOE Pulchowk, 2014) · ME Mech (IOE Pulchowk, 2019)</li>
              <li><strong>Experience:</strong> 10+ Years in Hydropower Machinery, Automobile & Teaching</li>
              <li><strong>Reference Deck:</strong> <a href="https://chalisesaroj.github.io/slide/" target="_blank" style="color:#38bdf8;">chalisesaroj.github.io/slide</a></li>
            </ul>
          </div>

          <div class="card-box" style="border-left: 4px solid var(--accent-amber);">
            <h3 style="color: var(--accent-amber); font-size: 18px; margin-bottom: 12px; font-weight: 700;">Course Specification</h3>
            <ul class="clean-list" style="font-size: 14px; gap: 6px;">
              <li><strong>Course Code:</strong> MEC 232 (3 Credits) · Full Marks: 100 · Pass Marks: 45</li>
              <li><strong>Course Title:</strong> Instrumentation and Measurement (3-1-1) · 45 Hours</li>
              <li><strong>Level:</strong> Bachelor of Engineering · <strong>Program:</strong> BE Mechanical</li>
              <li><strong>Syllabus Scope:</strong> 1.1 Methods · 1.2 Analog vs Digital · 1.3 DAQ Pipeline · 1.4 Calibration · 1.5 Errors & Uncertainty · 1.6 Intrusive Sensing · 1.7 Safety</li>
            </ul>
          </div>
        </div>

        <div class="slide-footer">
          <span>Unit I · Section 1.1–1.7</span>
          <span>Er. Saroj Chalise · IOE Pulchowk</span>
          <span>Slide ${slideNum} of ${totalSlides}</span>
        </div>
      `;
    } else if (s.type === 'section-divider') {
      slideInner = `
        <div>
          <span class="slide-tag">${escapeHtml(s.sectionTag || 'SECTION')}</span>
          <h1 class="slide-title" style="font-size: 42px; margin-top: 15px; color: #ffffff;">${escapeHtml(s.title)}</h1>
          <p class="slide-subtitle" style="color: var(--accent-amber); font-size: 20px;">
            ${escapeHtml(s.subtitle || '')}
          </p>
        </div>

        <div class="card-box" style="border-left: 4px solid var(--accent-teal); max-width: 900px; margin: 30px auto;">
          <h4 style="color: #38bdf8; font-size: 16px; margin-bottom: 8px; text-transform: uppercase;">Pedagogical Objective</h4>
          <p style="font-size: 18px; color: #e2e8f0; line-height: 1.6;">
            ${escapeHtml(s.takeaway || 'Core engineering principle connecting theoretical physics to industrial measurement practice.')}
          </p>
        </div>

        <div class="slide-footer">
          <span>${escapeHtml(s.sectionTag || 'Unit I')}</span>
          <span>Er. Saroj Chalise</span>
          <span>Slide ${slideNum} of ${totalSlides}</span>
        </div>
      `;
    } else if (s.type === 'roadmap' && s.columns) {
      slideInner = `
        <div>
          <span class="slide-tag">${escapeHtml(s.sectionTag || 'CURRICULUM')}</span>
          <h2 class="slide-title">${escapeHtml(s.title)}</h2>
          <p class="slide-subtitle">${escapeHtml(s.subtitle || '')}</p>
        </div>

        <div class="content-grid-2">
          <div class="card-box" style="border-left: 4px solid var(--accent-teal);">
            <h3 style="color: var(--accent-teal); margin-bottom: 12px; font-size: 18px;">Part A: Foundations & Systems</h3>
            <ul class="clean-list" style="font-size: 15px; gap: 10px;">
              ${s.columns.left.map((item) => `<li>${formatMarkdownToHtml(item)}</li>`).join('')}
            </ul>
          </div>

          <div class="card-box" style="border-left: 4px solid var(--accent-amber);">
            <h3 style="color: var(--accent-amber); margin-bottom: 12px; font-size: 18px;">Part B: Metrology & Operations</h3>
            <ul class="clean-list" style="font-size: 15px; gap: 10px;">
              ${s.columns.right.map((item) => `<li>${formatMarkdownToHtml(item)}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="slide-footer">
          <span>Unit I Roadmap</span>
          <span>Er. Saroj Chalise</span>
          <span>Slide ${slideNum} of ${totalSlides}</span>
        </div>
      `;
    } else {
      let contentSection = '';

      if (s.equation) {
        contentSection += `
          <div class="math-banner">
            $${s.equation}$
          </div>
        `;
      }

      if (s.definition) {
        contentSection += `
          <div class="card-box" style="border-left: 4px solid var(--accent-teal); margin-bottom: 16px;">
            <h3 style="color: var(--accent-teal); font-size: 20px; margin-bottom: 8px;">${escapeHtml(s.definition.term)}</h3>
            <blockquote style="font-size: 17px; font-style: italic; color: #1e293b; border-left: 3px solid #cbd5e1; padding-left: 12px; margin: 8px 0;">
              "${escapeHtml(s.definition.formalDefinition || s.definition.formalText || '')}"
            </blockquote>
            ${s.definition.standardReference ? `<span style="font-size: 11px; font-mono; color: #64748b;">Ref: ${escapeHtml(s.definition.standardReference)}</span>` : ''}
          </div>
        `;
      }

      if (s.bullets && s.bullets.length > 0) {
        contentSection += `
          <div class="card-box">
            <ul class="clean-list" style="font-size: 16px; gap: 10px;">
              ${s.bullets.map((b) => `<li>${formatMarkdownToHtml(b)}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      if (s.workedExample) {
        contentSection += `
          <div class="card-box" style="border-left: 4px solid #16a34a;">
            <h3 style="color: #16a34a; font-size: 18px; margin-bottom: 10px;">Worked Numerical Problem</h3>
            <p style="font-size: 15px; color: #334155; margin-bottom: 14px;"><strong>Problem:</strong> ${escapeHtml(s.workedExample.problem)}</p>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${s.workedExample.steps.slice(0, 3).map((st) => `
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px;">
                  <span style="font-weight: 700; color: #1e293b;">Step ${st.stepNumber}: ${escapeHtml(st.title)}</span>
                  ${st.math ? `<div style="font-family: monospace; color: #0284c7; margin: 4px 0;">$${st.math}$</div>` : ''}
                  <div style="font-size: 13px; color: #475569;">${escapeHtml(st.explanation)}</div>
                </div>
              `).join('')}
            </div>
            <div style="margin-top: 12px; font-weight: 700; color: #16a34a; font-size: 15px;">
              Final Answer: $${s.workedExample.finalAnswer}$
            </div>
          </div>
        `;
      }

      if (s.takeaway) {
        contentSection += `
          <div style="margin-top: 14px; padding: 10px 16px; background: rgba(20, 125, 139, 0.08); border-left: 3px solid var(--accent-teal); border-radius: 4px; font-size: 14px; color: #0f172a;">
            <strong>Key Takeaway:</strong> ${escapeHtml(s.takeaway)}
          </div>
        `;
      }

      slideInner = `
        <div>
          <span class="slide-tag">${escapeHtml(s.sectionTag || 'Topic Content')}</span>
          <h2 class="slide-title">${escapeHtml(s.title)}</h2>
          ${s.subtitle ? `<p class="slide-subtitle">${escapeHtml(s.subtitle)}</p>` : ''}
        </div>

        <div style="margin: 12px 0;">
          ${contentSection}
        </div>

        <div class="slide-footer">
          <span>${escapeHtml(s.sectionTag || 'Unit I')}</span>
          <span>Er. Saroj Chalise</span>
          <span>Slide ${slideNum} of ${totalSlides}</span>
        </div>
      `;
    }

    const notesAttr = escapeHtml(s.speakerNotes || '');
    slidesHtml += `
      <!-- SLIDE ${slideNum}: ${escapeHtml(s.title)} -->
      <div class="slide ${themeClass} ${activeClass}" data-id="${slideNum}" data-notes="${notesAttr}">
        ${slideInner}
      </div>
    `;
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unit I: Fundamentals of Measurement Systems · MEC 232 · Er. Saroj Chalise</title>
  <meta name="description" content="Complete 94-Slide Interactive Engineering Presentation for Unit I: Fundamentals of Measurement Systems (MEC 232). Prepared by Er. Saroj Chalise, Pokhara University.">

  <!-- Fonts & Math KaTeX -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

  <style>
    :root {
      --bg-dark: #101B2A;
      --bg-light: #EDF1F5;
      --accent-teal: #147D8B;
      --accent-amber: #E7A83E;
      --text-dark: #172B45;
      --text-muted: #64748B;
      --font-main: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-main);
      background-color: #0b111a;
      color: #f8fafc;
      overflow: hidden;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Top Controls Bar */
    header {
      background: rgba(16, 27, 42, 0.95);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 10px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 50;
      height: 52px;
    }
    .header-title {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .header-badge {
      background: rgba(20, 125, 139, 0.25);
      border: 1px solid var(--accent-teal);
      color: #38bdf8;
      font-size: 11px;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: var(--font-mono);
    }
    .header-controls {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .btn-ctrl {
      background: rgba(255, 255, 255, 0.08);
      color: #e2e8f0;
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
      text-decoration: none;
    }
    .btn-ctrl:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.3);
      color: #ffffff;
    }
    .btn-ppt {
      background: linear-gradient(135deg, #d97706, #b45309);
      border-color: #f59e0b;
      color: #ffffff;
    }
    .btn-ppt:hover {
      background: linear-gradient(135deg, #b45309, #92400e);
    }

    /* 16:9 Presentation Stage */
    #stage-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
      background: radial-gradient(circle at center, #132235 0%, #090e17 100%);
      position: relative;
    }
    #stage {
      width: 100%;
      max-width: 1540px;
      aspect-ratio: 16 / 9;
      background-color: var(--bg-light);
      color: var(--text-dark);
      border-radius: 12px;
      box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* Slide Theming: Dark vs Light */
    .slide {
      position: absolute;
      inset: 0;
      padding: 40px 50px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.25s ease, transform 0.25s ease;
      transform: translateX(30px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow-y: auto;
    }
    .slide.active {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
      z-index: 10;
    }
    .slide.slide-dark {
      background-color: var(--bg-dark);
      color: #f8fafc;
    }
    .slide.slide-light {
      background-color: var(--bg-light);
      color: var(--text-dark);
    }

    /* Slide Typography */
    .slide-tag {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--accent-teal);
      margin-bottom: 6px;
      display: block;
    }
    .slide.slide-dark .slide-tag {
      color: #38bdf8;
    }
    .slide-title {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .slide-subtitle {
      font-size: 16px;
      font-weight: 500;
      color: var(--text-muted);
      line-height: 1.4;
      margin-bottom: 12px;
    }
    .slide.slide-dark .slide-subtitle {
      color: #94a3b8;
    }

    /* Content Layout Containers */
    .content-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      flex: 1;
      align-items: stretch;
      margin: 12px 0;
    }
    .card-box {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      padding: 20px 24px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .slide-dark .card-box {
      background: #172436;
      border-color: rgba(255, 255, 255, 0.1);
      color: #f1f5f9;
    }

    /* Math Banner */
    .math-banner {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-left: 4px solid var(--accent-teal);
      border-radius: 8px;
      padding: 14px 20px;
      text-align: center;
      font-size: 24px;
      color: #0f172a;
      margin-bottom: 14px;
    }
    .slide-dark .math-banner {
      background: #1a2a3e;
      border-color: #2d4363;
      color: #f8fafc;
    }

    /* Lists */
    .clean-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      line-height: 1.5;
    }
    .clean-list li {
      position: relative;
      padding-left: 20px;
    }
    .clean-list li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--accent-teal);
      font-weight: 800;
      font-size: 18px;
      line-height: 1;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      font-size: 11px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .slide-dark .slide-footer {
      border-top-color: rgba(255, 255, 255, 0.1);
      color: #64748b;
    }

    /* Bottom Reveal.js Navigation Bar */
    footer {
      background: rgba(16, 27, 42, 0.95);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 8px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 50;
      height: 52px;
    }
    .nav-btn {
      background: var(--accent-teal);
      color: #ffffff;
      border: none;
      padding: 8px 18px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.15s ease;
    }
    .nav-btn:hover { background: #0e5b66; }
    .nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
    .progress-bar-container {
      flex: 1;
      max-width: 450px;
      height: 6px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 3px;
      overflow: hidden;
      margin: 0 20px;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-teal), var(--accent-amber));
      width: 0%;
      transition: width 0.25s ease;
    }

    /* Speaker Notes Drawer */
    #notes-drawer {
      position: fixed;
      bottom: 52px;
      left: 0;
      right: 0;
      background: rgba(15, 23, 42, 0.97);
      border-top: 2px solid var(--accent-amber);
      color: #e2e8f0;
      padding: 16px 32px;
      font-size: 14px;
      line-height: 1.6;
      max-height: 180px;
      overflow-y: auto;
      transform: translateY(100%);
      transition: transform 0.25s ease;
      z-index: 40;
    }
    #notes-drawer.open {
      transform: translateY(0);
    }

    /* Overview Grid Modal */
    #overview-modal {
      position: fixed;
      inset: 0;
      background: rgba(10, 16, 26, 0.95);
      backdrop-filter: blur(8px);
      z-index: 100;
      padding: 40px;
      overflow-y: auto;
      display: none;
    }
    #overview-modal.open {
      display: block;
    }
    .overview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 16px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .overview-card {
      background: #172436;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 14px;
      cursor: pointer;
      transition: all 0.15s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 130px;
    }
    .overview-card:hover, .overview-card.active {
      border-color: var(--accent-amber);
      transform: translateY(-2px);
      background: #1f3149;
    }
    .overview-card-num {
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-amber);
      text-transform: uppercase;
    }
    .overview-card-title {
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
      line-height: 1.3;
    }
  </style>
</head>
<body>

  <!-- Top Header Strip -->
  <header>
    <div class="header-title">
      <span>UNIT I: FUNDAMENTALS OF MEASUREMENT SYSTEMS</span>
      <span class="header-badge">MEC 232 · 6 Hours</span>
    </div>
    <div class="header-controls">
      <a href="Unit1_Fundamentals_of_Measurement_Systems.pptx" download class="btn-ctrl btn-ppt" title="Download genuine Microsoft PowerPoint (.pptx) file">
        <span>📥 Download PPT (.pptx)</span>
      </a>
      <button class="btn-ctrl" onclick="toggleOverview()" title="View All Slides [O]">
        <span>Grid [O]</span>
      </button>
      <button class="btn-ctrl" onclick="toggleNotes()" title="Toggle Speaker Notes [S]">
        <span>Notes [S]</span>
      </button>
      <button class="btn-ctrl" onclick="toggleFullscreen()" title="Toggle Fullscreen [F]">
        <span>Fullscreen [F]</span>
      </button>
      <a href="index.html" class="btn-ctrl" title="Return to Applet Hub">
        <span>← Main Applet</span>
      </a>
    </div>
  </header>

  <!-- 16:9 Presentation Stage -->
  <div id="stage-container">
    <div id="stage">
      ${slidesHtml}
    </div>
  </div>

  <!-- Bottom Navigation Bar -->
  <footer>
    <div style="display:flex; align-items:center; gap:10px;">
      <button id="btn-prev" class="nav-btn" onclick="prevSlide()" title="Previous Slide [Left Arrow]">← Prev</button>
      <button id="btn-next" class="nav-btn" onclick="nextSlide()" title="Next Slide [Right Arrow / Space]">Next →</button>
    </div>

    <div class="progress-bar-container">
      <div id="progress-fill" class="progress-fill"></div>
    </div>

    <div style="font-size:13px; font-weight:700; font-family:var(--font-mono); color:#94a3b8;">
      <span id="slide-num">1</span> / ${totalSlides}
    </div>
  </footer>

  <!-- Speaker Notes Drawer -->
  <div id="notes-drawer">
    <div style="font-weight:700; color:var(--accent-amber); font-size:12px; text-transform:uppercase; margin-bottom:4px;">
      Speaker Notes &amp; Pedagogical Insights:
    </div>
    <div id="notes-content">Welcome to Unit I.</div>
  </div>

  <!-- Slide Overview Modal -->
  <div id="overview-modal" onclick="if(event.target === this) toggleOverview()">
    <div style="max-width:1400px; margin:0 auto 20px auto; display:flex; justify-content:space-between; align-items:center;">
      <h2 style="font-size:24px; font-weight:800; color:#ffffff;">Lecture Overview Grid · 94 Slides</h2>
      <button class="btn-ctrl" onclick="toggleOverview()">Close [Esc]</button>
    </div>
    <div class="overview-grid">
      ${overviewCardsHtml}
    </div>
  </div>

  <script>
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideNumEl = document.getElementById('slide-num');
    const progressFill = document.getElementById('progress-fill');
    const notesContent = document.getElementById('notes-content');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const notesDrawer = document.getElementById('notes-drawer');
    const overviewModal = document.getElementById('overview-modal');

    function updateSlide() {
      slides.forEach((s, idx) => {
        s.classList.toggle('active', idx === currentSlide);
      });

      slideNumEl.textContent = currentSlide + 1;
      progressFill.style.width = ((currentSlide + 1) / totalSlides * 100) + '%';
      
      const activeSlide = slides[currentSlide];
      const notes = activeSlide.getAttribute('data-notes') || 'No additional speaker notes for this slide.';
      notesContent.textContent = notes;

      btnPrev.disabled = currentSlide === 0;
      btnNext.disabled = currentSlide === totalSlides - 1;

      // Render math on active slide
      if (window.renderMathInElement) {
        renderMathInElement(activeSlide, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    }

    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
      }
    }

    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
      }
    }

    function goToSlide(idx) {
      if (idx >= 0 && idx < totalSlides) {
        currentSlide = idx;
        updateSlide();
        if (overviewModal.classList.contains('open')) {
          toggleOverview();
        }
      }
    }

    function toggleNotes() {
      notesDrawer.classList.toggle('open');
    }

    function toggleOverview() {
      overviewModal.classList.toggle('open');
    }

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => alert(err.message));
      } else {
        document.exitFullscreen();
      }
    }

    // Keyboard Hotkeys
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 's' || e.key === 'S') {
        toggleNotes();
      } else if (e.key === 'o' || e.key === 'O') {
        toggleOverview();
      } else if (e.key === 'Escape') {
        if (overviewModal.classList.contains('open')) {
          toggleOverview();
        }
      } else if (e.key === 'Home') {
        goToSlide(0);
      } else if (e.key === 'End') {
        goToSlide(totalSlides - 1);
      }
    });

    // Initial render
    window.addEventListener('DOMContentLoaded', () => {
      updateSlide();
    });
  </script>
</body>
</html>`;
}

const html = generateHtml();
const outPath = path.resolve('public', 'chapter1_presentation.html');
fs.writeFileSync(outPath, html, 'utf-8');
console.log(`Successfully generated Chapter 1 HTML presentation: ${outPath} (${(html.length / 1024).toFixed(1)} KB)`);
