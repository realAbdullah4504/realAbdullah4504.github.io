import type { Project } from '../types/resume.types';

/**
 * Convert project name to URL-friendly slug
 * e.g., "Tender Discovery & Procurement Intelligence Platform" -> "tender-discovery-procurement-intelligence-platform"
 */
export function createProjectSlug(projectName: string): string {
  return projectName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Get project by slug
 */
export function getProjectBySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find(project => createProjectSlug(project.name) === slug);
}

/**
 * Get featured projects (can be used for case studies section)
 */
export function getFeaturedProjects(projects: Project[], limit?: number): Project[] {
  const featured = projects.slice(0, limit || projects.length);
  return featured;
}

/**
 * Format duration for display
 */
export function formatDuration(start: string, end: string): string {
  const formatDate = (dateStr: string) => {
    if (dateStr === 'Present') return 'Present';
    
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    if (month) {
      const monthIndex = parseInt(month, 10) - 1;
      return `${months[monthIndex]} ${year}`;
    }
    
    return year;
  };

  return `${formatDate(start)} - ${formatDate(end)}`;
}

/**
 * Calculate duration in months
 */
export function calculateDurationInMonths(start: string, end: string): number {
  const parseDate = (dateStr: string): Date => {
    if (dateStr === 'Present') return new Date();
    
    const [year, month] = dateStr.split('-');
    return new Date(parseInt(year), month ? parseInt(month) - 1 : 0);
  };

  const startDate = parseDate(start);
  const endDate = parseDate(end);
  
  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();
  
  return yearsDiff * 12 + monthsDiff;
}

/**
 * Get readable duration string (e.g., "2 years 3 months")
 */
export function getReadableDuration(start: string, end: string): string {
  const months = calculateDurationInMonths(start, end);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  }
  
  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  }
  
  return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
}
