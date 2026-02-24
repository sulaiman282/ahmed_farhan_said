import { Language, HomeContent } from '@/types/content';
import { loadContent } from '@/lib/content/loader';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import CTASection from '@/components/home/CTASection';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const homeContent = await loadContent<HomeContent>(lang as Language, 'home');

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection hero={homeContent.hero} lang={lang as Language} />
      <AboutSection about={homeContent.about} lang={lang as Language} />
      <WhyChooseSection whyChoose={homeContent.whyChoose} lang={lang as Language} />
      <ServicesPreview servicesPreview={homeContent.servicesPreview} lang={lang as Language} />
      <CTASection cta={homeContent.cta} lang={lang as Language} />
    </div>
  );
}
