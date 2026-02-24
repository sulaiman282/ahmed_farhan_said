'use client';

import { useEffect, useState } from 'react';

interface BackToTopProps {
  showAfterScroll?: number;
}

/**
 * BackToTop button component
 * Shows a button after scrolling past a threshold that smoothly scrolls to the top
 * Positioned in bottom corner with RTL-aware positioning
 */
export default function BackToTop({ showAfterScroll = 500 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > showAfterScroll;
      setIsVisible(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 end-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-all duration-300 hover:bg-primary-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
