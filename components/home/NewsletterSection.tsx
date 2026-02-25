'use client';

import { useState } from 'react';
import { Language } from '@/types/content';

interface NewsletterSectionProps {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  successMessage: string;
  errorMessage: string;
  lang: Language;
}

export default function NewsletterSection({
  title,
  description,
  placeholder,
  buttonText,
  successMessage,
  errorMessage,
  lang,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage(lang === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid email address');
      return;
    }

    setStatus('loading');

    try {
      // Mock API call - replace with actual newsletter subscription endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      setMessage(successMessage);
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage(errorMessage);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-white/90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-white/90">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3" suppressHydrationWarning>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                disabled={status === 'loading'}
                suppressHydrationWarning
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 bg-white dark:bg-gray-100 text-primary font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    {lang === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                  </span>
                ) : (
                  buttonText
                )}
              </button>
            </div>

            {message && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  status === 'success'
                    ? 'bg-green-500/20 border border-green-300'
                    : 'bg-red-500/20 border border-red-300'
                }`}
              >
                {message}
              </div>
            )}
          </form>

          <p className="mt-6 text-sm text-white/70">
            {lang === 'ar'
              ? 'نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.'
              : 'We respect your privacy. Unsubscribe at any time.'}
          </p>
        </div>
      </div>
    </section>
  );
}
