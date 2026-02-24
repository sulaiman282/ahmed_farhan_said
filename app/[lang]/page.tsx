import { Metadata } from 'next';
import { Language, HomeContent } from '@/types/content';
import { loadContent } from '@/lib/content/loader';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import PartnersSection from '@/components/home/PartnersSection';
import FAQSection from '@/components/home/FAQSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import CTASection from '@/components/home/CTASection';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  
  const title = lang === 'ar' 
    ? 'الرئيسية | مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
    : 'Home | Ahmed Farhan Said Al-Marshoud For General Contracting Est.';
  
  const description = lang === 'ar'
    ? 'شريكك الموثوق في حلول القوى العاملة وخدمات المقاولات العامة في المملكة العربية السعودية. سجل تجاري: 2050026004-2'
    : 'Your trusted partner in manpower solutions and general contracting services in Saudi Arabia. CR: 2050026004-2';
  
  const siteUrl = 'https://almarshoud-contracting.sa';
  const logoUrl = `${siteUrl}/logo.png`;
  
  return {
    title,
    description,
    keywords: lang === 'ar'
      ? 'مقاولات عامة، توريد قوى عاملة، توظيف، إدارة مشاريع، صيانة، المملكة العربية السعودية، الخبر'
      : 'general contracting, manpower supply, recruitment, project management, maintenance, Saudi Arabia, Al-Khobar',
    authors: [{ name: 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.' }],
    creator: 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
    publisher: 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      url: `${siteUrl}/${lang}`,
      title,
      description,
      siteName: lang === 'ar' 
        ? 'مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
        : 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
      images: [
        {
          url: logoUrl,
          width: 1200,
          height: 630,
          alt: lang === 'ar' 
            ? 'مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
            : 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [logoUrl],
      creator: '@almarshoud_sa',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const homeContent = await loadContent(lang as Language, 'home');
  const testimonialsContent = await loadContent(lang as Language, 'testimonials');
  const portfolioContent = await loadContent(lang as Language, 'portfolio');

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection hero={homeContent.hero} lang={lang as Language} />
      <AboutSection about={homeContent.about} lang={lang as Language} />
      <WhyChooseSection whyChoose={homeContent.whyChoose} lang={lang as Language} />
      <ServicesPreview servicesPreview={homeContent.servicesPreview} lang={lang as Language} />
      <TestimonialsSection
        title={homeContent.testimonialsPreview.title}
        testimonials={testimonialsContent.items}
        viewAllLink={homeContent.testimonialsPreview.viewAllLink}
        lang={lang as Language}
      />
      <PortfolioPreview
        title={homeContent.galleryPreview.title}
        projects={portfolioContent.items}
        viewAllLink={homeContent.galleryPreview.viewAllLink}
        lang={lang as Language}
      />
      <PartnersSection
        title={homeContent.partners.title}
        partners={homeContent.partners.items}
        lang={lang as Language}
      />
      <FAQSection
        title={homeContent.faq.title}
        faqs={homeContent.faq.items}
        lang={lang as Language}
      />
      <NewsletterSection
        title={homeContent.newsletter.title}
        description={homeContent.newsletter.description}
        placeholder={homeContent.newsletter.placeholder}
        buttonText={homeContent.newsletter.buttonText}
        successMessage={homeContent.newsletter.successMessage}
        errorMessage={homeContent.newsletter.errorMessage}
        lang={lang as Language}
      />
      <CTASection cta={homeContent.cta} lang={lang as Language} />
    </div>
  );
}
