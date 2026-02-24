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
  const servicesContent = await loadContent<ServicesContent>(lang as Language, 'services');

  return {
    title: servicesContent.pageTitle,
    description: servicesContent.pageDescription,
    openGraph: {
      title: servicesContent.pageTitle,
      description: servicesContent.pageDescription,
      type: 'website',
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
  const servicesContent = await loadContent<ServicesContent>(lang as Language, 'services');

  return <ServicesPageClient servicesContent={servicesContent} lang={lang as Language} />;
}
