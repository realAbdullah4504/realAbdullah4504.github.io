import { RoleCard } from './RoleCard';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Experience() {
  const data = resumeData;
  
  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...data.professionalExperience].sort((a, b) => 
    new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-gray-50" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300 md:left-6" />
          
          {/* Timeline items */}
          <div className="space-y-8">
            {sortedExperiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full -ml-2 mt-6 md:left-6 shadow-sm" />
                <RoleCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
