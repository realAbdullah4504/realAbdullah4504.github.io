const fs = require('fs');
const path = require('path');

// Paths
const jsonPath = path.join(__dirname, '..', 'homepage', 'portfolio', 'master-resume.json');
const templatePath = path.join(__dirname, '..', 'homepage', 'portfolio', 'resume-ats-template.html');
const outputPath = path.join(__dirname, '..', 'homepage', 'portfolio', 'resume-ats.html');

// Read master-resume.json
const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Read template
let template = fs.readFileSync(templatePath, 'utf8');

// Helper function to format array as HTML list
function formatList(items) {
  if (!items || items.length === 0) return '';
  return items.map(item => `<li>${item}</li>`).join('\n        ');
}

// Helper function to format date
function formatDate(dateStr) {
  if (dateStr === 'Present') return 'Present';
  const date = new Date(dateStr + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// Extract data from JSON
const identity = jsonData.identity || {};
const positioning = jsonData.positioning || {};
const skills = jsonData.skills || {};
const experience = jsonData.experience || [];
const projects = jsonData.projects || [];
const education = jsonData.education || {};
const certifications = jsonData.certifications || [];
const contact = jsonData.contact || {};

// Build experience HTML
const experienceHtml = experience.map(exp => {
  const duration = `${formatDate(exp.duration.start)} - ${formatDate(exp.duration.end)}`;
  const responsibilities = exp.responsibilities ? exp.responsibilities.map(r => `<li>${r}</li>`).join('\n            ') : '';
  const featuredProjects = exp.featured_projects && exp.featured_projects.length > 0 
    ? `<strong>Featured Projects:</strong> ${exp.featured_projects.join(', ')}` 
    : '';
  const technologies = exp.technologies && exp.technologies.length > 0
    ? `<strong>Technologies:</strong> ${exp.technologies.join(', ')}`
    : '';

  return `
        <div class="job">
            <div class="job-header">${exp.title} - ${exp.company}</div>
            <div class="job-meta">${exp.location} | ${exp.employment_type} | ${duration}</div>
            <div class="job-overview">${exp.overview}</div>
            ${responsibilities ? `<ul>\n            ${responsibilities}\n        </ul>` : ''}
            ${featuredProjects ? `<p>${featuredProjects}</p>` : ''}
            ${technologies ? `<p>${technologies}</p>` : ''}
        </div>`;
}).join('\n');

// Build projects HTML
const projectsHtml = projects.map(proj => {
  const businessImpact = proj.business_impact ? proj.business_impact.map(i => `<li>${i}</li>`).join('\n            ') : '';
  const engineeringHighlights = proj.engineering_highlights ? proj.engineering_highlights.map(h => `<li>${h}</li>`).join('\n            ') : '';
  const technologies = proj.technologies ? proj.technologies.join(', ') : '';
  const tags = proj.tags ? proj.tags.join(', ') : '';

  return `
        <div class="project">
            <div class="project-name">${proj.name}</div>
            <p>${proj.description}</p>
            ${businessImpact ? `<strong>Business Impact:</strong>\n            <ul>\n            ${businessImpact}\n        </ul>` : ''}
            ${engineeringHighlights ? `<strong>Engineering Highlights:</strong>\n            <ul>\n            ${engineeringHighlights}\n        </ul>` : ''}
            <p><strong>Technologies:</strong> ${technologies}</p>
            <p><strong>Tags:</strong> ${tags}</p>
        </div>`;
}).join('\n');

// Build education HTML
let educationHtml = '';
if (education.formal_education) {
  const edu = education.formal_education;
  const focusAreas = edu.academic_focus_areas ? edu.academic_focus_areas.join(', ') : '';
  educationHtml = `
        <div class="education">
            <div class="job-header">${edu.degree}</div>
            <div class="job-meta">${edu.institution} | ${edu.location} | ${edu.graduation_year}</div>
            ${focusAreas ? `<p><strong>Focus Areas:</strong> ${focusAreas}</p>` : ''}
        </div>`;
}

// Build certifications HTML
const certificationsHtml = certifications.map(cert => `
        <div class="certification">
            <strong>${cert.name}</strong> - ${cert.issuer} (${cert.year})
        </div>`).join('\n');

// Replace placeholders
template = template.replace(/{{NAME}}/g, identity.name || '');
template = template.replace(/{{PROFESSIONAL_TITLE}}/g, identity.professional_title || '');
template = template.replace(/{{EMAIL}}/g, contact.email || '');
template = template.replace(/{{PHONE}}/g, contact.phone || '');
template = template.replace(/{{LOCATION}}/g, contact.location || identity.location || '');
template = template.replace(/{{LINKEDIN}}/g, contact.linkedin ? `<a href="${contact.linkedin}">LinkedIn</a>` : '');
template = template.replace(/{{GITHUB}}/g, contact.github ? `<a href="${contact.github}">GitHub</a>` : '');
template = template.replace(/{{SUMMARY}}/g, positioning.summary || '');
template = template.replace(/{{PROGRAMMING_LANGUAGES}}/g, formatList(skills.programming_languages));
template = template.replace(/{{FRONTEND_DEVELOPMENT}}/g, formatList(skills.frontend_development));
template = template.replace(/{{BACKEND_DEVELOPMENT}}/g, formatList(skills.backend_development));
template = template.replace(/{{DATABASES}}/g, formatList(skills.databases_and_data_storage));
template = template.replace(/{{AWS_SERVICES}}/g, formatList(skills.cloud_platforms?.aws || []));
template = template.replace(/{{CONTAINERIZATION}}/g, formatList(skills.containerization_and_orchestration));
template = template.replace(/{{CI_CD}}/g, formatList(skills.ci_cd));
template = template.replace(/{{IAC}}/g, formatList(skills.infrastructure_as_code));
template = template.replace(/{{MESSAGING}}/g, formatList(skills.event_driven_systems_and_messaging));
template = template.replace(/{{OBSERVABILITY}}/g, formatList(skills.observability_and_monitoring));
template = template.replace(/{{DATA_PROCESSING}}/g, formatList(skills.data_processing_and_automation));
template = template.replace(/{{APIS}}/g, formatList(skills.apis_and_communication));
template = template.replace(/{{EXPERIENCE}}/g, experienceHtml);
template = template.replace(/{{PROJECTS}}/g, projectsHtml);
template = template.replace(/{{EDUCATION}}/g, educationHtml);
template = template.replace(/{{CERTIFICATIONS}}/g, certificationsHtml);

// Write output
fs.writeFileSync(outputPath, template, 'utf8');

console.log('✅ ATS resume generated successfully!');
console.log(`📄 Output: ${outputPath}`);
