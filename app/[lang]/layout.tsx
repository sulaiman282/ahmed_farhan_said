import React from 'react';
import { Inter, Cairo } from 'next/font/google';
import { getDirection } from '@/lib/i18n/config';
import { Language } from '@/types/content';
import { loadContent } from '@/lib/content/loader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
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
  const fontClass = lang === 'ar' ? cairo.variable : inter.variable;

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

  return (
    <html lang={lang} dir={dir}>
      <body className={`${fontClass} ${inter.variable} ${cairo.variable} antialiased font-sans`}>
        <Header lang={lang as Language} navigation={navigationContent.mainMenu} />
        {children}
        <Footer 
          lang={lang as Language} 
          contactInfo={contactContent.contactInfo}
          socialLinks={contactContent.socialLinks}
          navigationLinks={navigationContent.footerMenu}
        />
      </body>
    </html>
  );
}
