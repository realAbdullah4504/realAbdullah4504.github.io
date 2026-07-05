import { CapabilityCard } from './CapabilityCard';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Capabilities() {
  const data = resumeData;

  return (
    <section className="py-24 px-6 bg-background" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Engineering Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.capabilities.map((capability, index) => (
            <CapabilityCard key={index} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
