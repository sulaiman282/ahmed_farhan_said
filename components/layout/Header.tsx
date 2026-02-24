'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Language, NavigationItem } from '@/types/content';
import { getDirection } from '@/lib/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  lang: Language;
  navigation: NavigationItem[];
}

/**
 * Header component - Main navigation component for the website
 * 
 * Features:
 * - Displays logo and company name
 * - Renders navigation menu with active state highlighting
 * - Implements responsive hamburger menu for mobile
 * - Includes LanguageSwitcher component
 * - Handles RTL/LTR layout switching
 * 
 * Requirements: 9.1, 9.2, 9.3, 8.5
 */
export default function Header({ lang, navigation }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dir = getDirection(lang);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePage = (href: string) => {
    // Exact match for home page
    if (href === `/${lang}` || href === `/${lang}/`) {
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    }
    // For other pages, check if pathname starts with the href
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Company Name */}
          <Link 
            href={`/${lang}`}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
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
            <div className="hidden sm:block">
              <div className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                {lang === 'ar' ? 'مؤسسة أحمد فرحان سعيد المرشود' : 'AHMED FARHAN SAID AL-MARSHOUD'}
              </div>
              <div className="text-xs text-gray-600">
                {lang === 'ar' ? 'للمقاولات العامة' : 'General Contracting Est.'}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActivePage(item.href)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher currentLang={lang} />
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? (lang === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (lang === 'ar' ? 'فتح القائمة' : 'Open menu')}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActivePage(item.href)
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
