'use client';

import Link from 'next/link';
import { Language } from '@/types/content';

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail?: string;
  description: string;
  completionDate: string;
  location?: string;
}

interface PortfolioPreviewProps {
  title: string;
  projects: Project[];
  viewAllLink: string;
  lang: Language;
  onProjectClick?: (project: Project) => void;
}

export default function PortfolioPreview({
  title,
  projects,
  viewAllLink,
  lang,
  onProjectClick,
}: PortfolioPreviewProps) {
  const displayProjects = projects.slice(0, 6);

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick?.(project)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                {project.location && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg
                      className="w-4 h-4 ltr:mr-1 rtl:ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {project.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-all hover:shadow-lg"
          >
            {lang === 'ar' ? 'عرض جميع المشاريع' : 'View All Projects'}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={lang === 'ar' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
