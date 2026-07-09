import { useMemo } from 'react';
import { resumeData } from '../data/resumeData';
import type { ResumeData, Project } from '../types/resume.types';
import { getProjectBySlug, createProjectSlug } from '../utils/dataUtils';

/**
 * Custom hook for accessing resume data with utility functions
 */
export function useResumeData() {
  const data: ResumeData = resumeData;

  const utilities = useMemo(() => ({
    /**
     * Get a project by its URL slug
     */
    getProjectBySlug: (slug: string): Project | undefined => {
      return getProjectBySlug(data.projects, slug);
    },

    /**
     * Create a URL slug from a project name
     */
    createProjectSlug: (projectName: string): string => {
      return createProjectSlug(projectName);
    },

    /**
     * Get all projects
     */
    getAllProjects: (): Project[] => {
      return data.projects;
    },

    /**
     * Get featured projects (first N projects)
     */
    getFeaturedProjects: (limit: number = 4): Project[] => {
      return data.projects.slice(0, limit);
    },
  }), [data]);

  return {
    data,
    ...utilities,
  };
}
