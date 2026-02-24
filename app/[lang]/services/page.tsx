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

  return {
    title: lang === 'ar' 
      ? 'خدماتنا - المرشود للمقاولات'
      : 'Our Services - Al-Marshoud Contracting',
    description: lang === 'ar'
      ? 'نقدم حلول شاملة للقوى العاملة، التوظيف، المقاولات العامة، إدارة المشاريع، الصيانة والاستشارات في المملكة العربية السعودية'
      : 'Comprehensive manpower supply, recruitment, general contracting, project management, maintenance and consulting services in Saudi Arabia',
    openGraph: {
      title: lang === 'ar' 
        ? 'خدماتنا - المرشود للمقاولات'
        : 'Our Services - Al-Marshoud Contracting',
      description: lang === 'ar'
        ? 'نقدم حلول شاملة للقوى العاملة، التوظيف، المقاولات العامة، إدارة المشاريع، الصيانة والاستشارات في المملكة العربية السعودية'
        : 'Comprehensive manpower supply, recruitment, general contracting, project management, maintenance and consulting services in Saudi Arabia',
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
