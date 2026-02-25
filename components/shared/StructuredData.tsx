import { Language } from '@/types/content';

interface StructuredDataProps {
  lang: Language;
}

export default function StructuredData({ lang }: StructuredDataProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: lang === 'ar' 
      ? 'مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
      : 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
    alternateName: 'Al-Marshoud Contracting',
    url: 'https://almarshoud-contracting.sa',
    logo: 'https://almarshoud-contracting.sa/logo.png',
    description: lang === 'ar'
      ? 'شريكك الموثوق في حلول القوى العاملة وخدمات المقاولات العامة في المملكة العربية السعودية'
      : 'Your trusted partner in manpower solutions and general contracting services in Saudi Arabia',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sobaikha',
      addressLocality: 'Al-Khobar',
      addressRegion: 'Eastern Province',
      addressCountry: 'SA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966533092858',
      email: 'ah4051321@gmail.com',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['en', 'ar'],
    },
    sameAs: [
      'https://linkedin.com/company/almarshoud-contracting',
      'https://twitter.com/almarshoud_sa',
      'https://instagram.com/almarshoud_contracting',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://almarshoud-contracting.sa',
    name: lang === 'ar' 
      ? 'مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
      : 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
    image: 'https://almarshoud-contracting.sa/logo.png',
    telephone: '+966533092858',
    email: 'ah4051321@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sobaikha',
      addressLocality: 'Al-Khobar',
      addressRegion: 'Eastern Province',
      postalCode: '34611',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.2172,
      longitude: 50.2089,
    },
    url: 'https://almarshoud-contracting.sa',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: lang === 'ar' 
      ? 'توريد القوى العاملة والمقاولات العامة'
      : 'Manpower Supply and General Contracting',
    provider: {
      '@type': 'Organization',
      name: lang === 'ar' 
        ? 'مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة'
        : 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: lang === 'ar' ? 'خدماتنا' : 'Our Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'ar' ? 'توريد القوى العاملة' : 'Manpower Supply',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'ar' ? 'خدمات التوظيف' : 'Recruitment Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'ar' ? 'المقاولات العامة' : 'General Contracting',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'ar' ? 'إدارة المشاريع' : 'Project Management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'ar' ? 'خدمات الصيانة' : 'Maintenance Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: lang === 'ar' ? 'خدمات الاستشارات' : 'Consulting Services',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
