import { Metadata } from 'next';
import { Language, CareersContent } from '@/types/content';
import { loadContent } from '@/lib/content/loader';
import { getDirection } from '@/lib/i18n/config';

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
      ? 'الوظائف - أحمد فرحان سعيد المرشود للمقاولات العامة'
      : 'Careers - Al-Marshoud Contracting',
    description: lang === 'ar'
      ? 'انضم إلى فريقنا واستكشف الفرص الوظيفية المتاحة في شركة أحمد فرحان سعيد المرشود للمقاولات العامة'
      : 'Join our team and explore career opportunities at Al-Marshoud Contracting',
    openGraph: {
      title: lang === 'ar' 
        ? 'الوظائف - أحمد فرحان سعيد المرشود للمقاولات العامة'
        : 'Careers - Al-Marshoud Contracting',
      description: lang === 'ar'
        ? 'انضم إلى فريقنا واستكشف الفرص الوظيفية المتاحة في شركة أحمد فرحان سعيد المرشود للمقاولات العامة'
        : 'Join our team and explore career opportunities at Al-Marshoud Contracting',
      type: 'website',
    },
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = await loadContent<CareersContent>(lang as Language, 'careers');
  const dir = getDirection(lang as Language);

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

      {/* Company Culture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {content.culture.title}
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              {content.culture.description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.culture.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 flex-1">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {lang === 'en' ? 'Current Openings' : 'الوظائف المتاحة'}
          </h2>

          {content.openings.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-6">
              {content.openings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
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
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
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
                          {new Date(job.postedDate).toLocaleDateString(
                            lang === 'en' ? 'en-US' : 'ar-SA',
                            { year: 'numeric', month: 'long', day: 'numeric' }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {lang === 'en' ? 'Requirements:' : 'المتطلبات:'}
                    </h4>
                    <ul className={`space-y-1 ${dir === 'rtl' ? 'pr-5' : 'pl-5'}`}>
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-gray-700 list-disc">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">
                      {lang === 'en' ? 'Benefits:' : 'المزايا:'}
                    </h4>
                    <ul className={`space-y-1 ${dir === 'rtl' ? 'pr-5' : 'pl-5'}`}>
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-700 list-disc">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`#application-form`}
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    {lang === 'en' ? 'Apply Now' : 'قدم الآن'}
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-md p-12">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
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
                <p className="text-lg text-gray-700">{content.noOpeningsMessage}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {content.applicationForm.title}
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-center text-gray-600 mb-6">
                {lang === 'en'
                  ? 'To apply for a position, please contact us directly or send your resume to our email.'
                  : 'للتقديم على وظيفة، يرجى الاتصال بنا مباشرة أو إرسال سيرتك الذاتية إلى بريدنا الإلكتروني.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`/${lang}/contact`}
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-center"
                >
                  {lang === 'en' ? 'Contact Us' : 'اتصل بنا'}
                </a>
                <a
                  href="mailto:info@example.com"
                  className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 text-center"
                >
                  {lang === 'en' ? 'Send Resume' : 'أرسل السيرة الذاتية'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
