import { ProfessionalSummary } from './ProfessionalSummary';
import { EngineeringAchievements } from './EngineeringAchievements';
import { Education } from './Education';
import { Certifications } from './Certifications';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function About() {
  const data = resumeData;

  return (
    <section className="py-24 px-6 bg-surface" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">About Me</h2>
        <ProfessionalSummary professionalSummary={data.professionalSummary} />
        <EngineeringAchievements achievements={data.engineeringAchievements} />
        <Education education={data.education[0]} />
        <Certifications certifications={data.certifications} />
      </div>
    </section>
  );
}
