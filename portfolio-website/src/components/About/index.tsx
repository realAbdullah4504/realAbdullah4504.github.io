import { ProfessionalSummary } from './ProfessionalSummary';
import { EngineeringAchievements } from './EngineeringAchievements';
import { EngineeringFocusAreas } from './EngineeringFocusAreas';
import { Education } from './Education';
import { Certifications } from './Certifications';
import { Languages } from './Languages';
import { SoftSkills } from './SoftSkills';
import { WorkPreferences } from './WorkPreferences';
import { FadeInSection } from '../../utils/animations';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function About() {
  const data = resumeData;

  return (
    <section className="py-24 px-6 bg-surface" id="about">
      <FadeInSection className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">About Me</h2>
        
        <ProfessionalSummary professionalSummary={data.professionalSummary} />
        
        <EngineeringFocusAreas focusAreas={data.profile.engineeringFocusAreas} />
        
        <EngineeringAchievements achievements={data.engineeringAchievements} />
        
        {data.professionalInformation.languages && (
          <Languages languages={data.professionalInformation.languages.map(l => `${l.language} (${l.proficiencyLevel})`)} />
        )}
        
        {data.professionalInformation.softSkills && (
          <SoftSkills softSkills={data.professionalInformation.softSkills} />
        )}
        
        <WorkPreferences 
          employmentTypes={data.professionalInformation.workPreferences.employmentTypes}
          workArrangement={data.professionalInformation.workPreferences.workArrangement}
        />
        
        <Education education={data.education[0]} />
        
        <Certifications certifications={data.certifications} />
      </FadeInSection>
    </section>
  );
}
