/* eslint-disable no-console */
// Post-processes the tech portfolio build (build/) for hosting on Vercel.
//
// The tech site is a client-side-routed SPA (/south-project, /folklore, ...). On
// GitHub Pages it relied on 404.html; on Vercel it needs a rewrite so unmatched
// routes serve index.html instead of 404ing.
//
// react-scripts empties build/ on every build, so this must run after each one.
//
// CNAME and 404.html are deliberately LEFT IN PLACE: they are what the GitHub Pages
// deploy (npm run deploy) still depends on, and Vercel ignores both.

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');

if (!fs.existsSync(BUILD_DIR)) {
  console.error(`prepare-tech-build: ${BUILD_DIR} does not exist. Run the build first.`);
  process.exit(1);
}

// The minimix project was created by importing the Git repo, so it carries
// Create React App build settings. This folder is ALREADY built, so those settings
// must be overridden or Vercel tries to run react-scripts inside build/ (exit 127).
// A vercel.json at the deployment root takes precedence over project settings.
//
// Vercel matches real files before applying rewrites, so /static/* is unaffected.
const vercelConfig = {
  framework: null,
  buildCommand: '',
  installCommand: '',
  outputDirectory: '.',
  rewrites: [{ source: '/(.*)', destination: '/index.html' }]
};

fs.writeFileSync(
  path.join(BUILD_DIR, 'vercel.json'),
  JSON.stringify(vercelConfig, null, 2) + '\n'
);

console.log('prepare-tech-build: wrote build/vercel.json (SPA rewrite)');
