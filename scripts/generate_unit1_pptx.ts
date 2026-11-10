/**
 * CLI script to generate the physical PowerPoint (.pptx) file for Unit 1 and Unit 3
 * Converts all vector SVG diagrams to genuine PNG bitmap buffers via @resvg/resvg-js
 * so Microsoft PowerPoint, Apple Keynote, and Google Slides render all images perfectly.
 * Run with: npx tsx scripts/generate_unit1_pptx.ts
 */

import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import { CHAPTERS } from '../src/data/chaptersData';
import { exportChapterToPptx } from '../src/utils/pptxExport';

function nodeImageResolver(rawPath: string): { path?: string; data?: string } {
  if (!rawPath) return {};
  if (rawPath.startsWith('data:')) return { data: rawPath };

  const clean = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
  let full = path.resolve('public', clean);
  if (!fs.existsSync(full)) {
    full = path.resolve(clean);
  }

  if (fs.existsSync(full)) {
    const ext = path.extname(full).toLowerCase().replace('.', '');
    const mime = ext === 'png' ? 'image/png' : ext === 'svg' ? 'image/svg+xml' : 'image/jpeg';
    const b64 = fs.readFileSync(full).toString('base64');
    return { data: `data:${mime};base64,${b64}` };
  }

  console.warn(`[Node Image Resolver] Image not found on disk: ${rawPath} -> ${full}`);
  return { path: rawPath };
}

function nodeSvgRasterizer(svg: string): string {
  try {
    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: 1600 },
      shapeRendering: 2, // geometricPrecision
      textRendering: 1    // optimizeLegibility
    });
    const pngBuffer = resvg.render().asPng();
    return 'data:image/png;base64,' + pngBuffer.toString('base64');
  } catch (e: any) {
    console.warn('[Node SVG Rasterizer] Error rasterizing SVG to PNG:', e?.message || e);
    return '';
  }
}

async function run() {
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Generate Unit 1 PPTX
  console.log(`Generating PowerPoint for Unit 1: ${CHAPTERS.unit1.title}...`);
  const unit1Buffer = (await exportChapterToPptx(CHAPTERS.unit1, {
    includeNotes: true,
    resolveImage: nodeImageResolver,
    svgToPng: nodeSvgRasterizer,
    onProgress: (cur, tot, msg) => {
      if (cur % 10 === 0 || cur === tot) {
        console.log(`  [Unit 1] ${cur}/${tot}: ${msg}`);
      }
    }
  })) as unknown as Buffer;

  const unit1PublicPath = path.join(publicDir, 'Unit1_Fundamentals_of_Measurement_Systems.pptx');
  const unit1RootPath = path.resolve('Unit1_Fundamentals_of_Measurement_Systems.pptx');
  
  fs.writeFileSync(unit1PublicPath, unit1Buffer);
  fs.writeFileSync(unit1RootPath, unit1Buffer);
  console.log(`✓ Unit 1 PPTX written to:\n  - ${unit1PublicPath} (${(unit1Buffer.length / 1024).toFixed(1)} KB)\n  - ${unit1RootPath}`);

  // 2. Also generate Unit 3 PPTX
  if (CHAPTERS.unit3) {
    console.log(`\nGenerating PowerPoint for Unit 3: ${CHAPTERS.unit3.title}...`);
    const unit3Buffer = (await exportChapterToPptx(CHAPTERS.unit3, {
      includeNotes: true,
      resolveImage: nodeImageResolver,
      svgToPng: nodeSvgRasterizer,
      onProgress: (cur, tot, msg) => {
        if (cur % 5 === 0 || cur === tot) {
          console.log(`  [Unit 3] ${cur}/${tot}: ${msg}`);
        }
      }
    })) as unknown as Buffer;

    const unit3PublicPath = path.join(publicDir, 'Unit3_Strain_Gauges.pptx');
    const unit3RootPath = path.resolve('Unit3_Strain_Gauges.pptx');
    fs.writeFileSync(unit3PublicPath, unit3Buffer);
    fs.writeFileSync(unit3RootPath, unit3Buffer);
    console.log(`✓ Unit 3 PPTX written to:\n  - ${unit3PublicPath} (${(unit3Buffer.length / 1024).toFixed(1)} KB)\n  - ${unit3RootPath}`);
  }

  console.log('\nAll PowerPoint files generated successfully with complete SVG diagrams, formulas, and symbol tables!');
}

run().catch((err) => {
  console.error('Error generating PPTX:', err);
  process.exit(1);
});
