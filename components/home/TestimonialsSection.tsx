'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Language } from '@/types/content';

interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  rating: number;
  feedback: string;
  photo?: string;
  logo?: string;
  date: string;
}

interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
  viewAllLink: string;
  lang: Language;
}

export default function TestimonialsSection({
  title,
  testimonials,
  viewAllLink,
  lang,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < testimonials[currentIndex].rating
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].feedback}"
            </blockquote>

            <div className="text-center">
              <p className="font-semibold text-lg text-gray-900">
                {testimonials[currentIndex].clientName}
              </p>
              <p className="text-gray-600">{testimonials[currentIndex].company}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -translate-y-1/2 ltr:-left-4 rtl:-right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            aria-label={lang === 'ar' ? 'السابق' : 'Previous'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={lang === 'ar' ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 ltr:-right-4 rtl:-left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            aria-label={lang === 'ar' ? 'التالي' : 'Next'}
          >
            <svg
              className="w-6 h-6"
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
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`${lang === 'ar' ? 'الشهادة' : 'Testimonial'} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-700 font-medium transition-colors"
          >
            {lang === 'ar' ? 'عرض جميع الشهادات' : 'View All Testimonials'}
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
