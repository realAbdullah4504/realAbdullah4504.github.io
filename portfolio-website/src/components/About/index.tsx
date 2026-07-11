import { EngineeringPhilosophy } from './EngineeringPhilosophy';
import { ImpactHighlights } from './ImpactHighlights';
import { Education } from './Education';
import { Certifications } from './Certifications';
import { Languages } from './Languages';
import { WorkPreferences } from './WorkPreferences';
import { FadeInSection } from '../../utils/animations';
import { useResumeData } from '../../hooks/useResumeData';

export function About() {
  const { data } = useResumeData();

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-surface via-surface to-surface/95 relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--accent-rgb),0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(var(--accent-rgb),0.03),transparent_30%)]" />
      
      <FadeInSection className="max-w-5xl mx-auto relative">
        {/* Section header with premium styling */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Professional Profile</span>
          </div>
          
          <h2 className="text-5xl font-bold text-text-primary mb-4 bg-gradient-to-r from-text-primary via-text-primary to-text-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Engineering excellence, systems thinking, and operational excellence in production-grade software development
          </p>
        </div>
        
        <ImpactHighlights impacts={data.positioning.quantifiable_impact} />
        
        <EngineeringPhilosophy philosophy={data.positioning.engineering_philosophy} />
        
        {data.identity.languages && data.identity.languages.length > 0 && (
          <Languages languages={data.identity.languages.map(l => `${l.language} (${l.proficiency})`)} />
        )}
        
        <WorkPreferences 
          employmentTypes={data.identity.work_preferences}
          workArrangement="Remote"
        />
        
        <Education education={{
          degree: data.education.formal_education.degree,
          institution: data.education.formal_education.institution,
          location: data.education.formal_education.location,
          graduationYear: data.education.formal_education.graduation_year,
          academicFocusAreas: data.education.formal_education.academic_focus_areas,
        }} />
        
        <Certifications certifications={data.certifications} />
      </FadeInSection>
    </section>
  );
}
