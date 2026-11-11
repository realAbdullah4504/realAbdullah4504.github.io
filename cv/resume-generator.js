#!/usr/bin/env node
/**
 * ATS resume generator.
 * Reads resume-data.json -> emits ATS-safe HTML, PDF (puppeteer), and DOCX.
 *
 * Usage:
 *   node resume-generator.js                 # generate html + pdf + docx
 *   node resume-generator.js --pdf           # pdf only
 *   node resume-generator.js --html          # html only
 *   node resume-generator.js --keywords job.txt   # coverage check vs job description
 */

const fs = require('fs');
const path = require('path');
const data = require('./master.json');

const OUT_DIR = path.join(__dirname, 'output');
const PDF_PATH = path.join(OUT_DIR, 'Abdullah_Javed_Resume.pdf');
const DOCX_PATH = path.join(OUT_DIR, 'Abdullah_Javed_Resume.docx');
const HTML_PATH = path.join(OUT_DIR, 'resume.html');
const NAME = data.name.replace(/\s+/g, '_');

// ---------- helpers ----------

const esc = s =>
  String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

// ---------- HTML ----------

function buildHtml(d) {
  const skills = Object.entries(d.skills)
    .map(([cat, items]) =>
      `<p class="skill-line"><strong>${esc(cat)}:</strong> ${items.map(esc).join(', ')}</p>`)
    .join('\n');

  const experience = d.experience.map(job => {
    const bullets = job.projects
      ? job.projects.map(proj => `
        <section class="project" aria-label="${esc(proj.name)}">
          <h4>${esc(proj.name)}</h4>
          <ul>
            ${proj.bullets.map(b => `<li>${esc(b)}</li>`).join('\n')}
          </ul>
        </section>`).join('\n')
      : `<ul>${job.bullets.map(b => `<li>${esc(b)}</li>`).join('\n')}</ul>`;

    const companyDesc = job.description ? `<p class="company-description">${esc(job.description)}</p>` : '';

    return `
    <article class="job">
      <h3>${esc(job.title)} | ${esc(job.company)} <span class="job-type">(${esc(job.type)})</span></h3>
      <p class="job-meta">${esc(job.location)} | ${esc(job.dates)}</p>
      ${companyDesc}
      ${bullets}
    </article>`;
  }).join('\n');

  const education = d.education.map(e =>
    `<p><strong>${esc(e.degree)}</strong>, ${esc(e.school)}, ${esc(e.dates)}</p>`).join('\n');

  const certifications = (d.certifications || []).map(c =>
    `<p><strong>${esc(c.name)}</strong>${c.provider ? ` — ${esc(c.provider)}` : ''}</p>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(d.name)} - Resume</title>
<style>
  @page { size: Letter; margin: 0.55in 0.62in; }
  * { box-sizing: border-box; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10pt;
    color: #111;
    line-height: 1.22;
    margin: 0;
    padding: 0;
  }
  .resume-header { margin: 0 0 12pt; }
  h1 { font-size: 20pt; line-height: 1.12; margin: 0 0 3pt; }
  .headline { font-size: 10.5pt; margin: 0 0 3pt; }
  .contact { font-size: 9.5pt; line-height: 1.25; margin: 0; overflow-wrap: anywhere; }
  main { display: block; }
  section { display: block; }
  h2 {
    font-size: 11.5pt;
    text-transform: uppercase;
    letter-spacing: 0.45pt;
    border-bottom: 1px solid #333;
    margin: 11pt 0 5pt;
    padding: 0 0 3pt;
    page-break-after: avoid;
    break-after: avoid;
  }
  h3 { font-size: 10.25pt; line-height: 1.18; margin: 7pt 0 2pt; page-break-after: avoid; break-after: avoid; }
  h4 { font-size: 9.75pt; line-height: 1.18; margin: 5pt 0 2pt; font-weight: bold; page-break-after: avoid; break-after: avoid; }
  .job-type { font-weight: normal; font-size: 9.25pt; }
  .job-meta { font-size: 9.25pt; margin: 0 0 4pt; page-break-after: avoid; break-after: avoid; }
  .company-description { font-size: 9pt; font-style: italic; color: #444; margin: 0 0 4pt; }
  .job { margin: 0 0 7pt; page-break-inside: avoid; break-inside: avoid; }
  .project { margin: 4pt 0 6pt; page-break-inside: avoid; break-inside: avoid; }
  p { margin: 2pt 0 4pt; }
  ul { margin: 2pt 0 5pt; padding-left: 18pt; }
  li { margin: 2pt 0; padding-left: 1pt; }
  .skill-line { margin: 2pt 0; }
  @media print {
    h2, h3, h4 { page-break-after: avoid; break-after: avoid; }
    .job, .project { page-break-inside: avoid; break-inside: avoid; }
    li, p { orphans: 2; widows: 2; }
  }
</style>
</head>
<body>
<header class="resume-header">
  <h1>${esc(d.name)}</h1>
  <p class="headline"><strong>${esc(d.headline)}</strong></p>
  <p class="contact">${esc(d.contact)}</p>
</header>

<main>
  <section aria-labelledby="summary-heading">
  <h2 id="summary-heading">Professional Summary</h2>
  <p>${esc(d.summary)}</p>
  </section>

  <section aria-labelledby="skills-heading">
  <h2 id="skills-heading">Skills</h2>
  ${skills}
  </section>

  <section aria-labelledby="experience-heading">
  <h2 id="experience-heading">Professional Experience</h2>
  ${experience}
  </section>

  <section aria-labelledby="education-heading">
  <h2 id="education-heading">Education</h2>
  ${education}
  </section>

  ${certifications ? `<section aria-labelledby="certifications-heading"><h2 id="certifications-heading">Certifications &amp; Professional Training</h2>\n${certifications}\n</section>` : ''}
  <section aria-labelledby="languages-heading">
  <h2 id="languages-heading">Languages</h2>
  <p>${esc(d.languages)}</p>
  </section>
</main>
</body>
</html>`;
}

// ---------- PDF (puppeteer / headless Chrome) ----------

async function generatePdf(html) {
  const puppeteer = require('puppeteer');
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: PDF_PATH,
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });
  } finally {
    await browser.close();
  }
}

// ---------- DOCX (docx package) ----------

async function generateDocx() {
  const {
    Document, Packer, Paragraph, TextRun, HeadingLevel,
    AlignmentType, BorderStyle,
  } = require('docx');

  const heading = text => new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 5, color: '333333', space: 5 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 23, font: 'Arial' })],
  });

  const body = (runs, opts = {}) => new Paragraph({
    spacing: { after: 80 },
    ...opts,
    children: runs,
  });

  const children = [
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 45 },
      children: [new TextRun({ text: data.name, bold: true, size: 38, font: 'Arial' })],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 45 },
      children: [new TextRun({ text: data.headline, size: 21, font: 'Arial' })],
    }),
    new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { after: 200 },
      children: [new TextRun({ text: data.contact, size: 18, font: 'Arial' })],
    }),

    heading('Professional Summary'),
    body([new TextRun({ text: data.summary, size: 21, font: 'Arial' })]),

    heading('Skills'),
    ...Object.entries(data.skills).map(([cat, items]) =>
      body([
        new TextRun({ text: `${cat}: `, bold: true, size: 21, font: 'Arial' }),
        new TextRun({ text: items.join(', '), size: 21, font: 'Arial' }),
      ])),

    heading('Professional Experience'),
    ...data.experience.flatMap(job => {
      const children = [
        body([
          new TextRun({ text: `${job.title} | ${job.company}`, bold: true, size: 21, font: 'Arial' }),
          new TextRun({ text: `  (${job.type})`, size: 19, font: 'Arial' }),
        ], { spacing: { before: 160, after: 40 } }),
        body([new TextRun({ text: `${job.location} | ${job.dates}`, size: 19, font: 'Arial' })], { spacing: { after: 80 } }),
      ];

      if (job.description) {
        children.push(
          body([new TextRun({ text: job.description, italics: true, size: 19, font: 'Arial' })], { spacing: { after: 60 } }),
        );
      }

      if (job.projects) {
        job.projects.forEach(proj => {
          children.push(
            body([new TextRun({ text: proj.name, bold: true, size: 20, font: 'Arial' })], { spacing: { before: 120, after: 60 } }),
            ...proj.bullets.map(b => new Paragraph({
              bullet: { level: 0 },
              spacing: { after: 70 },
              children: [new TextRun({ text: b, size: 21, font: 'Arial' })],
            })),
          );
        });
      } else {
        children.push(
          ...job.bullets.map(b => new Paragraph({
            bullet: { level: 0 },
            spacing: { after: 70 },
            children: [new TextRun({ text: b, size: 21, font: 'Arial' })],
          })),
        );
      }
      return children;
    }),

    heading('Education'),
    ...data.education.map(e =>
      body([
        new TextRun({ text: `${e.degree}, `, bold: true, size: 21, font: 'Arial' }),
        new TextRun({ text: `${e.school}, ${e.dates}`, size: 21, font: 'Arial' }),
      ])),

    ...(data.certifications && data.certifications.length ? [
      heading('Certifications & Professional Training'),
      ...data.certifications.map(c =>
        body([
          new TextRun({ text: c.name, bold: true, size: 21, font: 'Arial' }),
          ...(c.provider ? [new TextRun({ text: ` — ${c.provider}`, size: 21, font: 'Arial' })] : []),
        ])),
    ] : []),

    heading('Languages'),
    body([new TextRun({ text: data.languages, size: 21, font: 'Arial' })]),
  ];

  const doc = new Document({
    sections: [{
      properties: {},
      children,
    }],
  });

  fs.writeFileSync(DOCX_PATH, await Packer.toBuffer(doc));
}

// ---------- keyword coverage check ----------

// Curated vocabulary of common tech keywords ATS filters on.
// Extend this list as needed for your target roles.
const TECH_TERMS = [
  'javascript', 'typescript', 'python', 'java', 'go', 'golang', 'rust', 'php',
  'c++', 'c#', '.net', 'ruby', 'swift', 'kotlin', 'scala', 'sql',
  'react', 'next.js', 'vue', 'vue.js', 'angular', 'svelte', 'nuxt', 'remix',
  'react native', 'html', 'html5', 'css', 'css3', 'tailwind', 'sass', 'less',
  'bootstrap', 'material ui', 'redux', 'zustand', 'tanstack',
  'node', 'node.js', 'express', 'express.js', 'nestjs', 'nest.js', 'deno', 'bun',
  'fastapi', 'flask', 'django', 'laravel', 'spring', 'rails',
  'rest', 'rest api', 'restful', 'graphql', 'grpc', 'websocket', 'webhooks',
  'postgresql', 'postgres', 'mysql', 'mongodb', 'mariadb', 'sqlite', 'sql server',
  'dynamodb', 'redis', 'elasticsearch', 'cassandra', 'firebase', 'supabase',
  'prisma', 'typeorm', 'sequelize', 'mongoose', 'knex', 'drizzle', 'trpc',
  'aws', 'amazon web services', 'ec2', 'ecs', 'eks', 'lambda', 's3', 'sqs',
  'sns', 'eventbridge', 'cloudwatch', 'x-ray', 'iam', 'route53', 'cloudfront',
  'gcp', 'google cloud', 'cloud run', 'cloud sql', 'azure', 'azure devops',
  'vercel', 'netlify', 'heroku', 'digitalocean',
  'docker', 'kubernetes', 'k8s', 'terraform', 'ansible', 'helm', 'argocd',
  'jenkins', 'github actions', 'gitlab ci', 'gitlab', 'circleci', 'travis ci',
  'ci/cd', 'cicd', 'iac', 'infrastructure as code', 'nginx', 'linux',
  'git', 'github', 'gitlab', 'bitbucket', 'jira', 'confluence',
  'jest', 'mocha', 'cypress', 'playwright', 'selenium', 'testing library',
  'tdd', 'bdd', 'unit testing', 'e2e', 'end-to-end',
  'microservices', 'serverless', 'event-driven', 'message queue', 'rabbitmq',
  'kafka', 'celery', 'redis queue', 'background jobs', 'web workers',
  'oauth', 'jwt', 'authentication', 'authorization', 'rbac', 'sso', 'okta',
  'agile', 'scrum', 'kanban', 'saas', 'api integration', 'third-party integration',
  'design patterns', 'solid', 'clean architecture', 'mvc', 'mvvm',
  'figma', 'sketch', 'adobe xd', 'responsive design', 'accessibility', 'wcag',
  'seo', 'analytics', 'a/b testing', 'performance optimization',
  'linux', 'bash', 'powershell', 'cli', 'devops', 'sre', 'mlops',
  'machine learning', 'ai', 'llm', 'openai', 'langchain', 'vector database',
  'data pipelines', 'etl', 'airflow', 'spark', 'pandas', 'numpy',
];

function checkKeywords(jobFile) {
  const jobText = fs.readFileSync(jobFile, 'utf8').toLowerCase();
  const resumeText = JSON.stringify(data).toLowerCase();

  const present = TECH_TERMS.filter(t => jobText.includes(t));
  const missing = present.filter(t => !resumeText.includes(t));
  const matched = present.filter(t => resumeText.includes(t));

  console.log(`\n=== Keyword coverage vs ${path.basename(jobFile)} ===`);
  console.log(`Job mentions ${present.length} known terms | You cover ${matched.length} | Missing ${missing.length}`);
  if (missing.length) {
    console.log('\nMissing terms to consider adding:');
    console.log(missing.sort().join(', '));
  }
  if (!missing.length) console.log('\nAll detected job keywords are covered.');
  console.log('');
}

// ---------- main ----------

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const args = process.argv.slice(2);
  const doHtml = args.includes('--html') || !args.some(a => a.startsWith('--'));
  const doPdf = args.includes('--pdf') || !args.some(a => a.startsWith('--'));
  const doDocx = args.includes('--docx') || !args.some(a => a.startsWith('--'));
  const kwIdx = args.indexOf('--keywords');

  if (kwIdx !== -1) {
    checkKeywords(args[kwIdx + 1]);
    return;
  }

  const html = buildHtml(data);

  if (doHtml) {
    fs.writeFileSync(HTML_PATH, html);
    console.log(`Wrote ${HTML_PATH}`);
  }
  if (doPdf) {
    await generatePdf(html);
    console.log(`Wrote ${PDF_PATH}`);
  }
  if (doDocx) {
    await generateDocx();
    console.log(`Wrote ${DOCX_PATH}`);
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});
