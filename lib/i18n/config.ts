import { Language } from '@/types/content';

/**
 * i18n configuration for the bilingual website
 * Supports Arabic (ar) and English (en) with Arabic as default
 */
export const i18nConfig = {
  locales: ['en', 'ar'] as const,
  defaultLocale: 'ar' as Language,
  localeDetection: true,
};

/**
 * Display names for each supported language
 */
export const languageNames: Record<Language, string> = {
  en: 'English',
  ar: 'العربية',
};

/**
 * Get text direction for a given language
 * @param lang - The language code ('en' or 'ar')
 * @returns 'ltr' for English, 'rtl' for Arabic
 */
export function getDirection(lang: Language): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}
