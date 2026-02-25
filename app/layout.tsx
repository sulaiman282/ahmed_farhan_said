import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST.',
  description: 'Leading manpower supply and general contracting services in Saudi Arabia. Providing exceptional workforce solutions and construction services in Al-Khobar, Eastern Province.',
  keywords: 'manpower supply, general contracting, recruitment, Saudi Arabia, Al-Khobar, workforce solutions, construction services, project management',
  authors: [{ name: 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.' }],
  creator: 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
  publisher: 'Ahmed Farhan Said Al-Marshoud For General Contracting Est.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://almarshoud-contracting.sa',
    siteName: 'AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST.',
    title: 'AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST.',
    description: 'Leading manpower supply and general contracting services in Saudi Arabia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST.',
    description: 'Leading manpower supply and general contracting services in Saudi Arabia',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}   
