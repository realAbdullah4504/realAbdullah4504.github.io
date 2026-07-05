import { CapabilityCard } from './CapabilityCard';
import { FadeInSection } from '../../utils/animations';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Capabilities() {
  const data = resumeData;

  return (
    <section className="py-24 px-6 bg-background" id="capabilities">
      <FadeInSection className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Engineering Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.capabilities.map((capability, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <CapabilityCard capability={capability} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
