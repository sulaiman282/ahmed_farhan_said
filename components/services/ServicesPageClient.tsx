'use client';

import { useEffect, useState, useRef } from 'react';
import { Language, ServicesContent, Service } from '@/types/content';
import ServiceCard from '@/components/services/ServiceCard';
import ServiceDetail from '@/components/services/ServiceDetail';
import CTASection from '@/components/home/CTASection';

interface ServicesPageClientProps {
  servicesContent: ServicesContent;
  lang: Language;
}

export default function ServicesPageClient({ servicesContent, lang }: ServicesPageClientProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for animations
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

  const filteredServices = selectedCategory === 'all'
    ? servicesContent.services
    : servicesContent.services.filter(s => s.category === selectedCategory);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              {servicesContent.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              {servicesContent.pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {lang === 'ar' ? 'جميع الخدمات' : 'All Services'}
            </button>
            {servicesContent.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? category.id === 'manpower'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                      : 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Description */}
          {selectedCategory !== 'all' && (
            <div
              className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lg text-gray-600">
                {servicesContent.categories.find(c => c.id === selectedCategory)?.description}
              </p>
            </div>
          )}

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ServiceCard
                  service={service}
                  onClick={() => setSelectedService(service)}
                  lang={lang}
                />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {lang === 'ar' ? 'لا توجد خدمات' : 'No Services Found'}
              </h3>
              <p className="text-gray-600">
                {lang === 'ar' ? 'لم يتم العثور على خدمات في هذه الفئة.' : 'No services found in this category.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection cta={servicesContent.cta} lang={lang} />

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
          lang={lang}
        />
      )}
    </div>
  );
}
