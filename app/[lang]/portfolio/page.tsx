import { Metadata } from 'next';
import { Language, PortfolioContent } from '@/types/content';
import { loadContent } from '@/lib/content/loader';
import PortfolioPageClient from '@/components/portfolio/PortfolioPageClient';

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

  const title = lang === 'ar' 
    ? 'مشاريعنا | مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
    : 'Portfolio | Ahmed Farhan Said Al-Marshoud For General Contracting Est.';
  
  const description = lang === 'ar'
    ? 'استعرض مشاريعنا المكتملة في مجال القوى العاملة والمقاولات العامة في جميع أنحاء المملكة العربية السعودية'
    : 'Explore our completed projects in manpower solutions and general contracting across Saudi Arabia';
  
  const siteUrl = 'https://almarshoud-contracting.sa';
  const logoUrl = `${siteUrl}/logo.png`;

  return {
    title,
    description,
    keywords: lang === 'ar'
      ? 'مشاريع، أعمال سابقة، مشاريع تجارية، مشاريع سكنية، مشاريع صناعية، بنية تحتية'
      : 'portfolio, projects, commercial projects, residential projects, industrial projects, infrastructure',
    authors: [{ name: 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.' }],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lang}/portfolio`,
      languages: {
        'en': '/en/portfolio',
        'ar': '/ar/portfolio',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      url: `${siteUrl}/${lang}/portfolio`,
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
            ? 'مشاريعنا - مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
            : 'Our Portfolio - Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
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

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = await loadContent(lang as Language, 'portfolio');

  return <PortfolioPageClient content={content} lang={lang as Language} />;
}
