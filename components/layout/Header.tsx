'use client';

import { useState, useEffect } from 'react';
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const dir = getDirection(lang);
  const isRTL = dir === 'rtl';

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  // Close drawer on route change
  useEffect(() => {
    closeDrawer();
  }, [pathname]);

  const isActivePage = (href: string) => {
    // Exact match for home page
    if (href === `/${lang}` || href === `/${lang}/`) {
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    }
    // For other pages, check if pathname starts with the href
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Company Name */}
          <Link 
            href={`/${lang}`}
            className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group"
            onClick={closeDrawer}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
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
              <div className="text-sm md:text-base font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors">
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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePage(item.href)
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
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
              onClick={toggleDrawer}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label={lang === 'ar' ? 'فتح القائمة' : 'Open menu'}
              aria-expanded={isDrawerOpen}
            >
              {/* Hamburger icon */}
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
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'ar' ? 'قائمة التنقل' : 'Navigation menu'}
        >
          {/* Backdrop with blur effect */}
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
              isDrawerOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeDrawer}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className={`fixed top-0 ${
              isRTL ? 'left-0' : 'right-0'
            } h-full w-[80%] max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isDrawerOpen
                ? 'translate-x-0'
                : isRTL
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {lang === 'ar' ? 'القائمة' : 'Menu'}
                </span>
              </div>
              
              {/* Close Button */}
              <button
                onClick={closeDrawer}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                aria-label={lang === 'ar' ? 'إغلاق القائمة' : 'Close menu'}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Drawer Content */}
            <nav className="flex flex-col h-[calc(100%-73px)] overflow-y-auto">
              {/* Navigation Links */}
              <div className="flex-1 p-4">
                <div className="flex flex-col gap-2">
                  {navigation.map((item) => {
                    const isActive = isActivePage(item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeDrawer}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                      >
                        {/* Navigation Icon */}
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {item.href.includes('about') ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          ) : item.href.includes('services') ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          ) : item.href.includes('projects') ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          ) : item.href.includes('contact') ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          )}
                        </svg>
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Language Switcher in Drawer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="text-xs font-medium text-gray-500 mb-2 px-2">
                  {lang === 'ar' ? 'اللغة' : 'Language'}
                </div>
                <LanguageSwitcher currentLang={lang} />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
