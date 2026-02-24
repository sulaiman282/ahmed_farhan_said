import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';

  // Detect language from Accept-Language header
  // Default to Arabic for Saudi Arabia locale, English otherwise
  const lang = acceptLanguage.includes('ar') ? 'ar' : 'en';

  redirect(`/${lang}`);
}
