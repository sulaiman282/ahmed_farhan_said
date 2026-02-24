import { Metadata } from 'next';
import { Language, PortfolioContent } from '@/types/content';
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
      ? 'مشاريعنا | مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
      : 'Portfolio | Al-Marshoud Contracting',
    description: lang === 'ar'
      ? 'استعرض مشاريعنا المكتملة في مجال القوى العاملة والمقاولات العامة في جميع أنحاء المملكة العربية السعودية'
      : 'Explore our completed projects in manpower solutions and general contracting across Saudi Arabia',
    openGraph: {
      title: lang === 'ar' 
        ? 'مشاريعنا | مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
        : 'Portfolio | Al-Marshoud Contracting',
      description: lang === 'ar'
        ? 'استعرض مشاريعنا المكتملة في مجال القوى العاملة والمقاولات العامة في جميع أنحاء المملكة العربية السعودية'
        : 'Explore our completed projects in manpower solutions and general contracting across Saudi Arabia',
      type: 'website',
    },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = await loadContent<PortfolioContent>(lang as Language, 'portfolio');
  const dir = getDirection(lang as Language);
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

      {/* Portfolio Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {content.categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {content.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white"
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
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-blue-600"
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
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(item.completionDate).toLocaleDateString(
                        lang === 'ar' ? 'ar-SA' : 'en-US',
                        { year: 'numeric', month: 'short' }
                      )}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Location */}
                  {item.location && (
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className={`w-4 h-4 ${dir === 'rtl' ? 'ml-1' : 'mr-1'}`}
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
                      {item.location}
                    </div>
                  )}

                  {/* Client */}
                  {item.client && (
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <svg
                        className={`w-4 h-4 ${dir === 'rtl' ? 'ml-1' : 'mr-1'}`}
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
                      {item.client}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (if no items) */}
          {content.items.length === 0 && (
            <div className="text-center py-16">
              <svg
                className="w-24 h-24 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <p className="text-gray-500 text-lg">
                {isRTL ? 'لا توجد مشاريع متاحة حالياً' : 'No projects available at the moment'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRTL ? 'هل لديك مشروع في ذهنك؟' : 'Have a Project in Mind?'}
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              {isRTL
                ? 'دعنا نساعدك في تحويل رؤيتك إلى واقع. اتصل بنا اليوم لمناقشة مشروعك.'
                : "Let us help you bring your vision to life. Contact us today to discuss your project."}
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
