import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST.',
  description: 'Leading manpower and general contracting services in Saudi Arabia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
