import { ResponsibilitiesList } from './ResponsibilitiesList';
import { TechnologyTags } from './TechnologyTags';
import { FlagshipProjects } from './FlagshipProjects';
import type { RoleCardProps } from './types';

export function RoleCard({ experience }: RoleCardProps) {
  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const endDate = experience.endDate ? formatDate(experience.endDate) : 'Present';

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 ml-6 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex flex-wrap justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{experience.position}</h3>
          <p className="text-lg font-semibold text-gray-800">{experience.company}</p>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
          {experience.employmentType}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-3">
        {experience.location} • {formatDate(experience.startDate)} - {endDate}
      </p>
      
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{experience.overview}</p>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Responsibilities</h4>
        <ResponsibilitiesList responsibilities={experience.responsibilities} />
      </div>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Technologies</h4>
        <TechnologyTags technologies={experience.technologies} />
      </div>
      
      <FlagshipProjects projects={experience.flagshipProjects} />
    </div>
  );
}
