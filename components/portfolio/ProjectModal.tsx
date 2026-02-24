'use client';

import { useEffect, useState } from 'react';
import { Language } from '@/types/content';

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail?: string;
  images: string[];
  description: string;
  completionDate: string;
  client?: string;
  location?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function ProjectModal({ project, isOpen, onClose, lang }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isRTL = lang === 'ar';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 ltr:right-4 rtl:left-4 z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          aria-label={isRTL ? 'إغلاق' : 'Close'}
        >
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Gallery/Carousel */}
        <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 rounded-t-2xl overflow-hidden">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4 w-12 h-12 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label={isRTL ? 'الصورة السابقة' : 'Previous image'}
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isRTL ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 w-12 h-12 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label={isRTL ? 'الصورة التالية' : 'Next image'}
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isRTL ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        {project.images.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50 dark:bg-gray-900">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex
                    ? 'border-blue-600 dark:border-blue-400 scale-105'
                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Project Details */}
        <div className="p-6 md:p-8">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h2>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-300">
            {/* Completion Date */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>
                {new Date(project.completionDate).toLocaleDateString(
                  lang === 'ar' ? 'ar-SA' : 'en-US',
                  { year: 'numeric', month: 'long' }
                )}
              </span>
            </div>

            {/* Location */}
            {project.location && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
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
                <span>{project.location}</span>
              </div>
            )}

            {/* Client */}
            {project.client && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{project.client}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {isRTL ? 'وصف المشروع' : 'Project Description'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
