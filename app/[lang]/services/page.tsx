import { Metadata } from 'next';
import { Language, ServicesContent } from '@/types/content';
import { loadContent } from '@/lib/content/loader';
import ServicesPageClient from '@/components/services/ServicesPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const title = lang === 'ar' 
    ? 'خدماتنا | مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
    : 'Services | Ahmed Farhan Said Al-Marshoud For General Contracting Est.';
  
  const description = lang === 'ar'
    ? 'نقدم حلول شاملة للقوى العاملة، التوظيف، المقاولات العامة، إدارة المشاريع، الصيانة والاستشارات في المملكة العربية السعودية'
    : 'Comprehensive manpower supply, recruitment, general contracting, project management, maintenance and consulting services in Saudi Arabia';
  
  const siteUrl = 'https://almarshoud-contracting.sa';
  const logoUrl = `${siteUrl}/logo.png`;

  return {
    title,
    description,
    keywords: lang === 'ar'
      ? 'توريد قوى عاملة، توظيف، مقاولات عامة، إدارة مشاريع، صيانة، استشارات، المملكة العربية السعودية'
      : 'manpower supply, recruitment, general contracting, project management, maintenance, consulting, Saudi Arabia',
    authors: [{ name: 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.' }],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        'en': '/en/services',
        'ar': '/ar/services',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      url: `${siteUrl}/${lang}/services`,
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
            ? 'خدماتنا - مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
            : 'Our Services - Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
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
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const servicesContent = await loadContent(lang as Language, 'services');

  return <ServicesPageClient servicesContent={servicesContent} lang={lang as Language} />;
}
