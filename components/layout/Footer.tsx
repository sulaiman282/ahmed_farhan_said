import Link from 'next/link';
import { Language, ContactInfo, SocialLink, NavigationItem } from '@/types/content';
import { getDirection } from '@/lib/i18n/config';

interface FooterProps {
  lang: Language;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  navigationLinks: NavigationItem[];
}

/**
 * Footer component - Bottom section of all pages
 * 
 * Features:
 * - Displays company information and contact details
 * - Renders secondary navigation links
 * - Shows social media links (LinkedIn, Twitter, Instagram)
 * - Includes links to privacy policy and terms of service
 * - Supports RTL/LTR layout
 * - Modern, professional design with gradient accents
 * - Mobile responsive with proper column stacking
 * 
 * Requirements: 9.4, 9.5, 9.6
 */
export default function Footer({ lang, contactInfo, socialLinks, navigationLinks }: FooterProps) {
  const dir = getDirection(lang);
  const currentYear = new Date().getFullYear();

  // Get social media icon SVG
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Split navigation links into main and legal
  const mainLinks = navigationLinks.filter(link => 
    !link.href.includes('privacy') && !link.href.includes('terms')
  );
  const legalLinks = navigationLinks.filter(link => 
    link.href.includes('privacy') || link.href.includes('terms')
  );

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-white leading-tight">
                  {lang === 'ar' ? 'مؤسسة أحمد فرحان سعيد المرشود' : 'AHMED FARHAN SAID AL-MARSHOUD'}
                </div>
                <div className="text-sm text-gray-400">
                  {lang === 'ar' ? 'للمقاولات العامة' : 'General Contracting Est.'}
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {lang === 'ar' 
                ? 'نقدم خدمات متميزة في مجال توريد القوى العاملة والمقاولات العامة في المملكة العربية السعودية.'
                : 'Providing exceptional manpower supply and general contracting services across Saudi Arabia with commitment to quality and excellence.'}
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm">{contactInfo.phone}</span>
              </a>

              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm break-all">{contactInfo.email}</span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600"></div>
            </h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <svg 
                      className={`w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              {lang === 'ar' ? 'ساعات العمل' : 'Business Hours'}
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600"></div>
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {contactInfo.businessHours}
            </p>

            <h4 className="text-white font-semibold text-base mb-4">
              {lang === 'ar' ? 'تابعنا' : 'Follow Us'}
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-start">
              © {currentYear} {lang === 'ar' ? 'مؤسسة أحمد فرحان سعيد المرشود للمقاولات العامة' : 'AHMED FARHAN SAID AL-MARSHOUD General Contracting Est.'}
              {' '}{lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>

            {/* Legal Links */}
            {legalLinks.length > 0 && (
              <div className="flex gap-6">
                {legalLinks.map((link, index) => (
                  <span key={link.href} className="flex items-center gap-6">
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-600">|</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
