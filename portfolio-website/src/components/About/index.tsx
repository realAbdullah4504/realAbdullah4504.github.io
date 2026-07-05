import { ProfessionalSummary } from './ProfessionalSummary';
import { EngineeringAchievements } from './EngineeringAchievements';
import { Education } from './Education';
import { Certifications } from './Certifications';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function About() {
  const data = resumeData;

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
        <ProfessionalSummary professionalSummary={data.professionalSummary} />
        <EngineeringAchievements achievements={data.engineeringAchievements} />
        <Education education={data.education[0]} />
        <Certifications certifications={data.certifications} />
      </div>
    </section>
  );
}
