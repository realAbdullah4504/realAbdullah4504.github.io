import { SkillCategory } from './SkillCategory';
import { FadeInSection } from '../../utils/animations';
import { toTitleCase } from '../../utils/labelUtils';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Skills() {
  const data = resumeData;
  const technicalSkills = data.technicalSkills as Record<string, string[]>;

  if (!technicalSkills || Object.keys(technicalSkills).length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 bg-background" id="skills">
      <FadeInSection className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technicalSkills).map(([categoryName, skills], index) => (
            <FadeInSection key={categoryName} delay={index * 0.05}>
              <SkillCategory categoryName={toTitleCase(categoryName)} skills={skills as string[]} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
