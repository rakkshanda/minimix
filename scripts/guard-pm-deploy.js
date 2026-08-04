/* eslint-disable no-console */
// Safety gate between `vercel link` and `vercel deploy` for the program management site.
//
// This repo also contains the tech portfolio, and carries a root .vercel link to a
// dormant "portfolio" project. Deploying the PM build into the wrong project would
// publish it under the tech site's identity. This refuses to proceed unless the build
// folder is linked to the expected project.

const fs = require('fs');
const path = require('path');

const EXPECTED_PROJECT = process.env.PM_VERCEL_PROJECT || 'rakspm';

// The dormant Vercel project that belongs to the tech portfolio. Never deploy here.
const FORBIDDEN_PROJECT_IDS = ['prj_6elsv1BaZsYo3rqUA46RdYpaJvbM'];

const linkPath = path.resolve(__dirname, '..', 'build-pm', '.vercel', 'project.json');

if (!fs.existsSync(linkPath)) {
  console.error(`
guard-pm-deploy: BLOCKED — no project link found at
  ${linkPath}

Run \`vercel link --cwd build-pm --project ${EXPECTED_PROJECT} --yes\` first.
Deploying unlinked would let Vercel pick a project by itself.
`);
  process.exit(1);
}

let link;
try {
  link = JSON.parse(fs.readFileSync(linkPath, 'utf8'));
} catch (e) {
  console.error(`guard-pm-deploy: BLOCKED — could not parse ${linkPath}: ${e.message}`);
  process.exit(1);
}

if (FORBIDDEN_PROJECT_IDS.includes(link.projectId)) {
  console.error(`
guard-pm-deploy: BLOCKED.

  Linked project id: ${link.projectId}

That is the Vercel project belonging to the tech portfolio. Publishing the
program management build there would put it under the tech site's identity.
`);
  process.exit(1);
}

if (link.projectName !== EXPECTED_PROJECT) {
  console.error(`
guard-pm-deploy: BLOCKED.

  Linked project: ${link.projectName || '(unnamed)'}
  Expected:       ${EXPECTED_PROJECT}

Re-link to the right project, or set PM_VERCEL_PROJECT if you deliberately
want a different one.
`);
  process.exit(1);
}

console.log(`guard-pm-deploy: OK — build-pm is linked to "${link.projectName}" (${link.projectId})`);
