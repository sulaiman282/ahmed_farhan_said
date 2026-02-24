import { Language } from '@/types/content';
import { i18nConfig } from './config';

/**
 * Detects the user's preferred language based on multiple sources
 * Priority order:
 * 1. URL path segment (/ar/* or /en/*)
 * 2. Cookie (preferred_lang)
 * 3. Accept-Language header
 * 4. Default to Arabic for Saudi Arabia locale, English otherwise
 * 
 * @param request - The incoming request object
 * @returns The detected language ('ar' or 'en')
 */
export function detectLanguage(request: Request): Language {
  const url = new URL(request.url);
  const pathLang = url.pathname.split('/')[1];

  // Check URL path segment first
  if (pathLang === 'ar' || pathLang === 'en') {
    return pathLang;
  }

  // Check cookie for stored preference
  const cookieHeader = request.headers.get('cookie');
  if (cookieHeader) {
    const cookies = parseCookies(cookieHeader);
    const cookieLang = cookies['preferred_lang'];
    if (cookieLang === 'ar' || cookieLang === 'en') {
      return cookieLang;
    }
  }

  // Check Accept-Language header
  const acceptLang = request.headers.get('accept-language');
  if (acceptLang) {
    // Check for Arabic language preference
    if (acceptLang.includes('ar')) {
      return 'ar';
    }
    // Check for Saudi Arabia locale (ar-SA)
    if (acceptLang.includes('ar-SA')) {
      return 'ar';
    }
  }

  // Default to Arabic (as per requirement 3.6)
  return i18nConfig.defaultLocale;
}

/**
 * Sets the language preference cookie on the client side
 * Cookie expires after 1 year
 * 
 * @param lang - The language to store ('ar' or 'en')
 */
export function setLanguageCookie(lang: Language): void {
  if (typeof document !== 'undefined') {
    document.cookie = `preferred_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  }
}

/**
 * Helper function to parse cookie header string into an object
 * 
 * @param cookieHeader - The cookie header string
 * @returns Object with cookie key-value pairs
 */
function parseCookies(cookieHeader: string): Record<string, string> {
  return cookieHeader
    .split(';')
    .map(cookie => cookie.trim().split('='))
    .reduce((acc, [key, value]) => {
      if (key && value) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);
}
