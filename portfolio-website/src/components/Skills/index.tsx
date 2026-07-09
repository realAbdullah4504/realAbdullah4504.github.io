import { SkillCategory } from './SkillCategory';
import { FadeInSection } from '../../utils/animations';
import { useResumeData } from '../../hooks/useResumeData';

export function Skills() {
  const { data } = useResumeData();
  
  // Transform skills object into array of categories, handling nested cloud_platforms
  const skillCategories = [
    { name: 'Programming Languages', skills: data.skills.programming_languages },
    { name: 'Frontend Development', skills: data.skills.frontend_development },
    { name: 'Backend Development', skills: data.skills.backend_development },
    { name: 'Databases & Data Storage', skills: data.skills.databases_and_data_storage },
    { name: 'Caching & Message Queues', skills: data.skills.caching_and_message_queues },
    { name: 'AWS Cloud Services', skills: data.skills.cloud_platforms.aws },
    { name: 'Containerization & Orchestration', skills: data.skills.containerization_and_orchestration },
    { name: 'CI/CD', skills: data.skills.ci_cd },
    { name: 'Infrastructure as Code', skills: data.skills.infrastructure_as_code },
    { name: 'Event-Driven Systems', skills: data.skills.event_driven_systems_and_messaging },
    { name: 'Observability & Monitoring', skills: data.skills.observability_and_monitoring },
    { name: 'Data Processing & Automation', skills: data.skills.data_processing_and_automation },
    { name: 'APIs & Communication', skills: data.skills.apis_and_communication },
    { name: 'Operating Systems & Scripting', skills: data.skills.operating_systems_and_scripting },
  ];

  return (
    <section className="py-24 px-6 bg-background" id="skills">
      <FadeInSection className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <FadeInSection key={category.name} delay={index * 0.05}>
              <SkillCategory categoryName={category.name} skills={category.skills} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
