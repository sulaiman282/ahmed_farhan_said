import { Metadata } from 'next';
import { loadContent } from '@/lib/content/loader';
import { AboutContent } from '@/types/content';
import { Language } from '@/types/content';
import { getDirection } from '@/lib/i18n/config';
import CTASection from '@/components/home/CTASection';

// Generate static params for both languages
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { lang: Language };
}): Promise<Metadata> {
  const content = await loadContent<AboutContent>(params.lang, 'about');

  return {
    title: content.pageTitle,
    description: content.hero.description,
  };
}

export default async function AboutPage({
  params,
}: {
  params: { lang: Language };
}) {
  const content = await loadContent<AboutContent>(params.lang, 'about');
  const dir = getDirection(params.lang);

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
              {content.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 animate-fade-in-delay">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {content.history.title}
            </h2>
            <div className="relative">
              <div className={`absolute ${dir === 'rtl' ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 bg-blue-600`}></div>
              <div className={`${dir === 'rtl' ? 'pr-8' : 'pl-8'} py-4`}>
                <div className={`absolute ${dir === 'rtl' ? 'right-[-8px]' : 'left-[-8px]'} top-8 w-4 h-4 bg-blue-600 rounded-full`}></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {content.history.foundingYear}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {content.history.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content.mission.title}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "{content.mission.statement}"
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {content.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {content.values.items.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {content.statistics.projectsCompleted}+
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {params.lang === 'en' ? 'Projects Completed' : 'مشروع مكتمل'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {content.statistics.clientsServed}+
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {params.lang === 'en' ? 'Clients Served' : 'عميل راضٍ'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {content.statistics.workforceSize}+
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {params.lang === 'en' ? 'Workforce' : 'قوة عاملة'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {content.statistics.yearsOfExperience}+
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {params.lang === 'en' ? 'Years Experience' : 'سنة خبرة'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {content.certifications.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.certifications.items.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {content.team.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.team.members.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        cta={{
          title:
            params.lang === 'en'
              ? 'Ready to Work With Us?'
              : 'هل أنت مستعد للعمل معنا؟',
          description:
            params.lang === 'en'
              ? 'Contact us today to discuss your project requirements and discover how we can help you achieve your goals.'
              : 'اتصل بنا اليوم لمناقشة متطلبات مشروعك واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.',
          buttonText: params.lang === 'en' ? 'Contact Us' : 'اتصل بنا',
          buttonLink: `/${params.lang}/contact`,
        }}
        lang={params.lang}
      />
    </div>
  );
}
