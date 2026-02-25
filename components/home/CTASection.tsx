'use client';

import { useEffect, useRef, useState } from 'react';
import Button from '@/components/shared/Button';
import { CTASection as CTASectionType } from '@/types/content';

interface CTASectionProps {
  cta: CTASectionType;
  lang: 'en' | 'ar';
}

export default function CTASection({ cta, lang }: CTASectionProps) {
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {cta.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              {cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href={cta.buttonLink}
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  {cta.buttonText}
                  <svg
                    className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>

              <Button
                href={`/${lang}/services`}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                {lang === 'ar' ? 'تصفح الخدمات' : 'Browse Services'}
              </Button>
            </div>
          </div>

          {/* Contact info */}
          <div
            className={`mt-12 flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-200">
                  {lang === 'ar' ? 'اتصل بنا' : 'Call Us'}
                </div>
                <div className="font-semibold">+966 53 309 2858</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-200">
                  {lang === 'ar' ? 'راسلنا' : 'Email Us'}
                </div>
                <div className="font-semibold">ah4051321@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
