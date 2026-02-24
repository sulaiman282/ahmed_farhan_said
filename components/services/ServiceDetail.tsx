'use client';

import { useEffect } from 'react';
import { Service } from '@/types/content';
import Button from '@/components/shared/Button';

interface ServiceDetailProps {
  service: Service;
  onClose: () => void;
  lang: 'en' | 'ar';
}

export default function ServiceDetail({ service, onClose, lang }: ServiceDetailProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const categoryColors = {
    manpower: 'from-blue-600 to-blue-700',
    contracting: 'from-amber-600 to-amber-700',
  };

  const categoryBadgeColors = {
    manpower: 'bg-blue-100 text-blue-700',
    contracting: 'bg-amber-100 text-amber-700',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors group"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with gradient */}
        <div className={`bg-gradient-to-br ${categoryColors[service.category]} p-8 md:p-12 text-white rounded-t-3xl`}>
          <div className="flex items-start justify-between mb-4">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm`}>
              {service.category === 'manpower' 
                ? (lang === 'ar' ? 'خدمات القوى العاملة' : 'Manpower Services') 
                : (lang === 'ar' ? 'خدمات المقاولات' : 'Contracting Services')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
          <p className="text-lg text-white/90 leading-relaxed">{service.description}</p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Features Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {lang === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              {lang === 'ar' ? 'الفوائد' : 'Benefits'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-br from-accent-50 to-white rounded-xl border border-accent-200 hover:border-accent-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 text-center border border-primary-200">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {lang === 'ar' ? 'مهتم بهذه الخدمة؟' : 'Interested in This Service?'}
            </h4>
            <p className="text-gray-600 mb-6">
              {lang === 'ar' 
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص.'
                : 'Contact us today for a free consultation and customized quote.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`/${lang}/contact`}
                size="lg"
                className="shadow-lg"
              >
                <span className="flex items-center gap-2">
                  {lang === 'ar' ? 'احصل على عرض أسعار' : 'Get a Quote'}
                  <svg
                    className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                size="lg"
              >
                {lang === 'ar' ? 'إغلاق' : 'Close'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
