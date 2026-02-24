import { Language } from '@/types/content';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="p-4 border-b">
        <div className="container mx-auto flex justify-end">
          <LanguageSwitcher currentLang={lang as Language} />
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {lang === 'ar' ? 'مرحباً' : 'Welcome'}
          </h1>
          <p className="text-lg text-gray-600">
            {lang === 'ar'
              ? 'أحمد فرحان سعيد المرشود للمقاولات العامة'
              : 'AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST.'}
          </p>
        </div>
      </main>
    </div>
  );
}
