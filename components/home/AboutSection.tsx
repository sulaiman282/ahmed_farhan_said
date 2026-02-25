'use client';

import { useEffect, useRef, useState } from 'react';
import { AboutPreview } from '@/types/content';

interface AboutSectionProps {
  about: AboutPreview;
  lang: 'en' | 'ar';
}

export default function AboutSection({ about, lang }: AboutSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {about.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
                  <div className="text-6xl font-bold text-primary-600 mb-2">
                    {about.yearsOfExperience}+
                  </div>
                  <div className="text-xl text-gray-700">
                    {lang === 'ar' ? 'سنوات من الخبرة' : 'Years of Experience'}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {about.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {lang === 'ar' ? 'مرخص ومعتمد' : 'Licensed & Certified'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {lang === 'ar' ? 'فريق محترف' : 'Professional Team'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {lang === 'ar' ? 'جودة مضمونة' : 'Quality Assured'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
