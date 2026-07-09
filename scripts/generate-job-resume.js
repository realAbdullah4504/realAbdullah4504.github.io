const fs = require('fs');
const path = require('path');

// Get job profile from command line argument
const jobProfileName = process.argv[2];

if (!jobProfileName) {
  console.error('❌ Error: Please provide a job profile name');
  console.error('Usage: node generate-job-resume.js <job-profile-name>');
  console.error('Example: node generate-job-resume.js devops-engineer');
  process.exit(1);
}

// Paths
const jsonPath = path.join(__dirname, '..', 'homepage', 'portfolio', 'master-resume.json');
const profilePath = path.join(__dirname, 'job-profiles', `${jobProfileName}.json`);
const templatePath = path.join(__dirname, '..', 'homepage', 'portfolio', 'resume-job-template.html');
const outputPath = path.join(__dirname, '..', 'homepage', 'portfolio', 'job-resumes', `${jobProfileName}.html`);

// Check if job profile exists
if (!fs.existsSync(profilePath)) {
  console.error(`❌ Error: Job profile '${jobProfileName}' not found`);
  console.error(`Expected file: ${profilePath}`);
  console.error('Available profiles:');
  const profilesDir = path.join(__dirname, 'job-profiles');
  if (fs.existsSync(profilesDir)) {
    const profiles = fs.readdirSync(profilesDir).filter(f => f.endsWith('.json'));
    profiles.forEach(p => console.error(`  - ${p.replace('.json', '')}`));
  }
  process.exit(1);
}

// Read master-resume.json
const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Read job profile
const jobProfile = JSON.parse(fs.readFileSync(profilePath, 'utf8'));

// Read template
let template = fs.readFileSync(templatePath, 'utf8');

// Create output directory if it doesn't exist
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper function to calculate relevance score
function calculateRelevanceScore(text, keywords) {
  if (!text || !keywords || keywords.length === 0) return 0;
  
  const lowerText = text.toLowerCase();
  let matches = 0;
  
  keywords.forEach(keyword => {
    if (lowerText.includes(keyword.toLowerCase())) {
      matches++;
    }
  });
  
  return matches / keywords.length;
}

// Helper function to format list with limit
function formatList(items, limit) {
  if (!items || items.length === 0) return '';
  const limitedItems = limit ? items.slice(0, limit) : items;
  return limitedItems.map(item => `<li>${item}</li>`).join('\n        ');
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

// Filter and score experience
const scoredExperience = experience.map(exp => {
  const combinedText = `${exp.title} ${exp.company} ${exp.overview} ${(exp.responsibilities || []).join(' ')} ${(exp.technologies || []).join(' ')}`;
  const relevanceScore = calculateRelevanceScore(combinedText, jobProfile.priority_experience_keywords);
  return { ...exp, relevanceScore };
});

// Sort experience by relevance and date
const sortedExperience = scoredExperience.sort((a, b) => {
  if (jobProfile.experience_filtering.prioritize_relevant) {
    if (Math.abs(a.relevanceScore - b.relevanceScore) > 0.1) {
      return b.relevanceScore - a.relevanceScore;
    }
  }
  if (jobProfile.experience_filtering.prioritize_recent) {
    return new Date(b.duration.start) - new Date(a.duration.start);
  }
  return 0;
});

// Filter experience by minimum score and limit
const filteredExperience = sortedExperience
  .filter(exp => exp.relevanceScore >= (jobProfile.experience_filtering.min_relevance_score || 0))
  .slice(0, jobProfile.content_limits.max_experience_entries);

// Filter and score projects
const scoredProjects = projects.map(proj => {
  const combinedText = `${proj.name} ${proj.description} ${(proj.technologies || []).join(' ')} ${(proj.tags || []).join(' ')}`;
  const relevanceScore = calculateRelevanceScore(combinedText, jobProfile.priority_project_keywords);
  return { ...proj, relevanceScore };
});

// Sort projects by relevance and featured status
const sortedProjects = scoredProjects.sort((a, b) => {
  if (jobProfile.project_filtering.prioritize_featured) {
    const aFeatured = a.type === 'Professional';
    const bFeatured = b.type === 'Professional';
    if (aFeatured && !bFeatured) return -1;
    if (!aFeatured && bFeatured) return 1;
  }
  if (jobProfile.project_filtering.prioritize_relevant) {
    if (Math.abs(a.relevanceScore - b.relevanceScore) > 0.1) {
      return b.relevanceScore - a.relevanceScore;
    }
  }
  return 0;
});

// Filter projects by minimum score and limit
const filteredProjects = sortedProjects
  .filter(proj => proj.relevanceScore >= (jobProfile.project_filtering.min_relevance_score || 0))
  .slice(0, jobProfile.content_limits.max_projects);

// Filter skills based on priority
const filterSkills = (skillArray, prioritySkills) => {
  if (!skillArray || skillArray.length === 0) return [];
  
  // Prioritize skills that match priority skills
  const prioritized = skillArray.filter(skill => 
    prioritySkills.some(priority => 
      skill.toLowerCase().includes(priority.toLowerCase()) ||
      priority.toLowerCase().includes(skill.toLowerCase())
    )
  );
  
  const otherSkills = skillArray.filter(skill => 
    !prioritized.includes(skill)
  );
  
  const combined = [...prioritized, ...otherSkills];
  return combined.slice(0, jobProfile.content_limits.max_skills_per_category);
};

// Build experience HTML
const experienceHtml = filteredExperience.map(exp => {
  const duration = `${formatDate(exp.duration.start)} - ${formatDate(exp.duration.end)}`;
  const responsibilities = exp.responsibilities ? exp.responsibilities.slice(0, 5).map(r => `<li>${r}</li>`).join('\n            ') : '';
  const featuredProjects = exp.featured_projects && exp.featured_projects.length > 0 
    ? `<strong>Featured Projects:</strong> ${exp.featured_projects.join(', ')}` 
    : '';
  const technologies = exp.technologies && exp.technologies.length > 0
    ? `<strong>Technologies:</strong> ${exp.technologies.slice(0, 8).join(', ')}`
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
const projectsHtml = filteredProjects.map(proj => {
  const businessImpact = proj.business_impact ? proj.business_impact.slice(0, 3).map(i => `<li>${i}</li>`).join('\n            ') : '';
  const engineeringHighlights = proj.engineering_highlights ? proj.engineering_highlights.slice(0, 3).map(h => `<li>${h}</li>`).join('\n            ') : '';
  const technologies = proj.technologies ? proj.technologies.slice(0, 8).join(', ') : '';
  const tags = proj.tags ? proj.tags.slice(0, 5).join(', ') : '';

  return `
        <div class="project">
            <div class="project-name">${proj.name}</div>
            <div class="project-description">${proj.description}</div>
            ${businessImpact ? `<strong>Business Impact:</strong>\n            <ul>\n            ${businessImpact}\n        </ul>` : ''}
            ${engineeringHighlights ? `<strong>Engineering Highlights:</strong>\n            <ul>\n            ${engineeringHighlights}\n        </ul>` : ''}
            <p><strong>Technologies:</strong> ${technologies}</p>
            ${tags ? `<p><strong>Tags:</strong> ${tags}</p>` : ''}
        </div>`;
}).join('\n');

// Build skills HTML
const skillsHtml = `
        <h3>Programming Languages</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.programming_languages, jobProfile.priority_skills))}
        </ul>
        <h3>Frontend Development</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.frontend_development, jobProfile.priority_skills))}
        </ul>
        <h3>Backend Development</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.backend_development, jobProfile.priority_skills))}
        </ul>
        <h3>Databases & Data Storage</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.databases_and_data_storage, jobProfile.priority_skills))}
        </ul>
        <h3>Cloud Platforms (AWS)</h3>
        <ul class="skills-list">
            ${formatList(skills.cloud_platforms?.aws || [], jobProfile.content_limits.max_skills_per_category)}
        </ul>
        <h3>Containerization & Orchestration</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.containerization_and_orchestration, jobProfile.priority_skills))}
        </ul>
        <h3>CI/CD</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.ci_cd, jobProfile.priority_skills))}
        </ul>
        <h3>Infrastructure as Code</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.infrastructure_as_code, jobProfile.priority_skills))}
        </ul>
        <h3>Event-Driven Systems & Messaging</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.event_driven_systems_and_messaging, jobProfile.priority_skills))}
        </ul>
        <h3>Observability & Monitoring</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.observability_and_monitoring, jobProfile.priority_skills))}
        </ul>
        <h3>Data Processing & Automation</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.data_processing_and_automation, jobProfile.priority_skills))}
        </ul>
        <h3>APIs & Communication</h3>
        <ul class="skills-list">
            ${formatList(filterSkills(skills.apis_and_communication, jobProfile.priority_skills))}
        </ul>`;

// Build education HTML
let educationHtml = '';
if (jobProfile.content_limits.include_education && education.formal_education) {
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
let certificationsHtml = '';
if (jobProfile.content_limits.include_certifications && certifications.length > 0) {
  certificationsHtml = certifications.slice(0, 3).map(cert => `
        <div class="certification">
            <strong>${cert.name}</strong> - ${cert.issuer} (${cert.year})
        </div>`).join('\n');
}

// Build summary
let summary = positioning.summary || '';
if (jobProfile.summary_customization.use_custom_summary && jobProfile.summary_customization.custom_summary) {
  summary = jobProfile.summary_customization.custom_summary;
}

// Replace placeholders
template = template.replace(/{{NAME}}/g, identity.name || '');
template = template.replace(/{{JOB_TITLE}}/g, jobProfile.job_title);
template = template.replace(/{{PROFESSIONAL_TITLE}}/g, identity.professional_title || '');
template = template.replace(/{{EMAIL}}/g, contact.email || '');
template = template.replace(/{{PHONE}}/g, contact.phone || '');
template = template.replace(/{{LOCATION}}/g, contact.location || identity.location || '');
template = template.replace(/{{LINKEDIN}}/g, contact.linkedin ? `<a href="${contact.linkedin}">LinkedIn</a>` : '');
template = template.replace(/{{GITHUB}}/g, contact.github ? `<a href="${contact.github}">GitHub</a>` : '');
template = template.replace(/{{PORTFOLIO}}/g, contact.portfolio_website ? `| <a href="${contact.portfolio_website}">Portfolio</a>` : '');
template = template.replace(/{{SUMMARY}}/g, jobProfile.content_limits.include_summary ? summary : '');
template = template.replace(/{{SKILLS}}/g, skillsHtml);
template = template.replace(/{{EXPERIENCE}}/g, experienceHtml);
template = template.replace(/{{PROJECTS}}/g, projectsHtml);
template = template.replace(/{{EDUCATION}}/g, educationHtml);
template = template.replace(/{{CERTIFICATIONS}}/g, certificationsHtml);

// Write output
fs.writeFileSync(outputPath, template, 'utf8');

// Print generation report
console.log('✅ Job-specific resume generated successfully!');
console.log(`📄 Output: ${outputPath}`);
console.log(`🎯 Target Role: ${jobProfile.job_title}`);
console.log(`\n📊 Generation Report:`);
console.log(`   Experience entries: ${filteredExperience.length}/${experience.length} (min score: ${jobProfile.experience_filtering.min_relevance_score})`);
console.log(`   Projects: ${filteredProjects.length}/${projects.length} (min score: ${jobProfile.project_filtering.min_relevance_score})`);
console.log(`   Included experience scores: ${filteredExperience.map(e => `${e.company}: ${e.relevanceScore.toFixed(2)}`).join(', ')}`);
console.log(`   Included project scores: ${filteredProjects.map(p => `${p.name}: ${p.relevanceScore.toFixed(2)}`).join(', ')}`);
