'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Language } from '@/types/content';
import { languageNames } from '@/lib/i18n/config';
import { setLanguageCookie } from '@/lib/i18n/utils';

interface LanguageSwitcherProps {
  currentLang: Language;
}

/**
 * LanguageSwitcher component allows users to toggle between Arabic and English
 * 
 * Features:
 * - Displays current language with appropriate label
 * - Updates URL with new language segment
 * - Stores preference in cookie for persistence
 * - Supports both Arabic and English languages
 * 
 * Requirements: 3.1, 3.5
 */
export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = () => {
    // Toggle language
    const newLang: Language = currentLang === 'en' ? 'ar' : 'en';
    
    // Store preference in cookie
    setLanguageCookie(newLang);
    
    // Update URL with new language segment
    // Replace the language segment in the pathname
    const segments = pathname.split('/');
    segments[1] = newLang; // Replace language segment (index 1 after leading /)
    const newPath = segments.join('/');
    
    // Navigate to new path
    router.push(newPath);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
      aria-label={`Switch to ${currentLang === 'en' ? 'Arabic' : 'English'}`}
    >
      <span className="text-gray-700">
        {languageNames[currentLang]}
      </span>
      <svg
        className="w-4 h-4 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    </button>
  );
}
