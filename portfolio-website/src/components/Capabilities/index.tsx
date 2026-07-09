import { CapabilityCard } from './CapabilityCard';
import { FadeInSection } from '../../utils/animations';
import { useResumeData } from '../../hooks/useResumeData';

export function Capabilities() {
  const { data } = useResumeData();
  
  // Transform engineering_capabilities into the format expected by CapabilityCard
  const capabilities = [
    {
      name: 'System Design & Architecture',
      description: data.positioning.engineering_capabilities.system_design_and_architecture.join(' '),
      points: data.positioning.engineering_capabilities.system_design_and_architecture,
    },
    {
      name: 'Application Engineering',
      description: data.positioning.engineering_capabilities.application_engineering.join(' '),
      points: data.positioning.engineering_capabilities.application_engineering,
    },
    {
      name: 'Distributed Systems Engineering',
      description: data.positioning.engineering_capabilities.distributed_systems_engineering.join(' '),
      points: data.positioning.engineering_capabilities.distributed_systems_engineering,
    },
    {
      name: 'Data Engineering & Automation',
      description: data.positioning.engineering_capabilities.data_engineering_and_automation.join(' '),
      points: data.positioning.engineering_capabilities.data_engineering_and_automation,
    },
  ];

  return (
    <section className="py-24 px-6 bg-background" id="capabilities">
      <FadeInSection className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Engineering Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <CapabilityCard capability={capability} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
