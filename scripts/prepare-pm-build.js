/* eslint-disable no-console */
// Post-processes the program management build (build-pm/) before it is published.
//
// Two hosting targets are supported via PM_TARGET:
//
//   vercel  (default) — served from a domain root. Writes vercel.json so client-side
//                       routes fall through to index.html.
//   ghpages           — served from a repo subpath. Patches 404.html for the SPA
//                       redirect trick and adds .nojekyll.
//
// Both targets delete CNAME: that file belongs to the tech site, which is served by
// GitHub Pages from the gh-pages branch of THIS repo at www.rakkshanda.com. Shipping
// a second copy of it would fight over the same custom domain.
//
// The tech build (npm run build) never runs this script.

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'build-pm');
const PUBLIC_URL = process.env.PUBLIC_URL || '/';
const TARGET = process.env.PM_TARGET || 'vercel';
const TITLE = 'Rakshanda — Program Management Portfolio';
const DESCRIPTION =
  'Program management portfolio of Rakshanda — scope, dependencies, risk, and delivered outcomes.';

if (!['vercel', 'ghpages'].includes(TARGET)) {
  console.error(`prepare-pm-build: unknown PM_TARGET "${TARGET}" (expected "vercel" or "ghpages").`);
  process.exit(1);
}

if (!fs.existsSync(BUILD_DIR)) {
  console.error(`prepare-pm-build: ${BUILD_DIR} does not exist. Run the PM build first.`);
  process.exit(1);
}

console.log(`prepare-pm-build: target = ${TARGET}, public url = ${PUBLIC_URL}`);

// --- Always: CNAME must never ship with this build. ---
const cnamePath = path.join(BUILD_DIR, 'CNAME');
if (fs.existsSync(cnamePath)) {
  fs.unlinkSync(cnamePath);
  console.log('prepare-pm-build: removed CNAME');
}

if (TARGET === 'vercel') {
  // Vercel matches the filesystem before applying rewrites, so real files under
  // /static/* still serve normally and only unmatched routes reach index.html.
  const vercelConfig = {
    rewrites: [{ source: '/(.*)', destination: '/index.html' }]
  };
  fs.writeFileSync(
    path.join(BUILD_DIR, 'vercel.json'),
    JSON.stringify(vercelConfig, null, 2) + '\n'
  );
  console.log('prepare-pm-build: wrote vercel.json (SPA rewrite)');

  // 404.html and .nojekyll are GitHub Pages artifacts; drop the former so it cannot
  // shadow the rewrite, and never write the latter.
  const strayNotFound = path.join(BUILD_DIR, '404.html');
  if (fs.existsSync(strayNotFound)) {
    fs.unlinkSync(strayNotFound);
    console.log('prepare-pm-build: removed 404.html (GitHub Pages artifact)');
  }
} else {
  // GitHub Pages: the SPA redirect in 404.html must preserve the repo-name segment.
  const segmentsToKeep = PUBLIC_URL.split('/').filter(Boolean).length;
  const notFoundPath = path.join(BUILD_DIR, '404.html');
  if (fs.existsSync(notFoundPath)) {
    const original = fs.readFileSync(notFoundPath, 'utf8');
    const patched = original.replace(
      /var pathSegmentsToKeep = \d+;/,
      `var pathSegmentsToKeep = ${segmentsToKeep};`
    );
    if (patched === original) {
      console.warn('prepare-pm-build: WARNING — pathSegmentsToKeep not found in 404.html; deep links may 404.');
    }
    fs.writeFileSync(notFoundPath, patched);
    console.log(`prepare-pm-build: set pathSegmentsToKeep = ${segmentsToKeep}`);
  }

  fs.writeFileSync(path.join(BUILD_DIR, '.nojekyll'), '');
  console.log('prepare-pm-build: wrote .nojekyll');
}

// --- Always: PM-specific document metadata. ---
const indexPath = path.join(BUILD_DIR, 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html
    .replace(/<title>[^<]*<\/title>/, `<title>${TITLE}</title>`)
    .replace(/<meta name="description" content="[^"]*"\/?>/, `<meta name="description" content="${DESCRIPTION}"/>`);
  fs.writeFileSync(indexPath, html);
  console.log('prepare-pm-build: updated title and description');
}

console.log('prepare-pm-build: done');
