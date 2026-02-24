import { Metadata } from 'next';
import { loadContent } from '@/lib/content/loader';
import { TestimonialsContent, Language } from '@/types/content';

// Generate static params for both languages
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: lang === 'ar' 
      ? 'آراء العملاء | مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
      : 'Testimonials | Al-Marshoud Contracting',
    description: lang === 'ar'
      ? 'اقرأ آراء عملائنا وتجاربهم مع خدمات القوى العاملة والمقاولات التي نقدمها'
      : 'Read what our clients say about our manpower solutions and contracting services',
    openGraph: {
      title: lang === 'ar' 
        ? 'آراء العملاء | مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
        : 'Testimonials | Al-Marshoud Contracting',
      description: lang === 'ar'
        ? 'اقرأ آراء عملائنا وتجاربهم مع خدمات القوى العاملة والمقاولات التي نقدمها'
        : 'Read what our clients say about our manpower solutions and contracting services',
      type: 'website',
    },
  };
}

export default async function TestimonialsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = await loadContent<TestimonialsContent>(lang as Language, 'testimonials');
  const isRTL = lang === 'ar';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              {content.pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 animate-fade-in-delay">
              {content.pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.feedback}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  {/* Client Photo or Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  {/* Client Details */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRTL
                ? 'هل أنت مستعد لتكون عميلنا القادم؟'
                : 'Ready to Be Our Next Success Story?'}
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              {isRTL
                ? 'انضم إلى عملائنا الراضين واختبر التميز في خدمات القوى العاملة والمقاولات.'
                : 'Join our satisfied clients and experience excellence in manpower and contracting services.'}
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
