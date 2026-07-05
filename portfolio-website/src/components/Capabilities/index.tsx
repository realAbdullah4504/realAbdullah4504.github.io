import { CapabilityCard } from './CapabilityCard';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Capabilities() {
  const data = resumeData;

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gray-50" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Engineering Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.capabilities.map((capability, index) => (
            <CapabilityCard key={index} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
