import React from 'react';
import { Poppins, Tajawal } from 'next/font/google';
import { getDirection } from '@/lib/i18n/config';
import { Language } from '@/types/content';
import { loadContent } from '@/lib/content/loader';
import Header from '@/components/layout/Header';
import FooterClient from '@/components/layout/FooterClient';
import BackToTop from '@/components/shared/BackToTop';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import StructuredData from '@/components/shared/StructuredData';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const tajawal = Tajawal({
  variable: '--font-tajawal',
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = getDirection(lang as Language);
  const fontClass = lang === 'ar' ? tajawal.variable : poppins.variable;

  // Load navigation content
  const navigationContent = await loadContent(
    lang as Language,
    'navigation'
  );

  // Load contact content for footer
  const contactContent = await loadContent(
    lang as Language,
    'contact'
  );

  // Load legal content for footer
  const legalContent = await loadContent(
    lang as Language,
    'legal'
  );

  return (
    <html lang={lang} dir={dir}>
      <head>
        <StructuredData lang={lang as Language} />
      </head>
      <body className={`${fontClass} ${poppins.variable} ${tajawal.variable} antialiased font-sans`}>
        <ThemeProvider>
          <Header lang={lang as Language} navigation={navigationContent.mainMenu} />
          {children}
          <FooterClient 
            lang={lang as Language} 
            contactInfo={contactContent.contactInfo}
            socialLinks={contactContent.socialLinks}
            navigationLinks={navigationContent.footerMenu}
            legalData={legalContent}
          />
          <BackToTop showAfterScroll={500} />
        </ThemeProvider>
      </body>
    </html>
  );
}
