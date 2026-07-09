import { ProfessionalSummary } from './ProfessionalSummary';
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
    <section className="py-24 px-6 bg-surface" id="about">
      <FadeInSection className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">About Me</h2>
        
        <ProfessionalSummary professionalSummary={data.positioning.summary} />
        
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
