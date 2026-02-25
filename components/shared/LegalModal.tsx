'use client';

import { useEffect } from 'react';
import { Language } from '@/types/content';

interface LegalSection {
  heading: string;
  content: string;
}

interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: LegalContent;
  lang: Language;
}

export default function LegalModal({ isOpen, onClose, content, lang }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {content.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {lang === 'ar' ? 'آخر تحديث: ' : 'Last Updated: '}
                {content.lastUpdated}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
            >
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
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
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-100px)] px-6 py-6">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {section.heading}
                </h3>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            {lang === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
