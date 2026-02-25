# Implementation Plan: Company Website for Manpower Contracting

## Overview

This implementation plan breaks down the development of a bilingual corporate website for AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST. into discrete, actionable tasks. The website is built with Next.js 14+ App Router, TypeScript, and Tailwind CSS, featuring a JSON-based content management system for easy updates without code deployment.

The implementation follows an incremental approach: starting with project setup and core infrastructure, then building layout components, implementing individual pages, adding interactivity, and finally optimizing for performance and accessibility.

## Tasks

- [x] 1. Project setup and configuration
  - [x] 1.1 Initialize Next.js project with TypeScript and App Router
    - Create new Next.js 14+ project with TypeScript template
    - Configure App Router structure
    - Set up ESLint and Prettier for code quality
    - _Requirements: 2.8, 10.1_

  - [x] 1.2 Install and configure Tailwind CSS with RTL support
    - Install Tailwind CSS and dependencies
    - Configure tailwind.config.ts with custom theme colors
    - Install and configure tailwindcss-rtl plugin
    - Set up global styles in globals.css
    - _Requirements: 3.2, 3.3, 8.1-8.4_

  - [x] 1.3 Set up TypeScript type definitions
    - Create types/content.ts with all content interfaces
    - Define Language, HomeContent, Service, PortfolioItem, Testimonial types
    - Define form data types (ContactFormData, ApplicationData)
    - _Requirements: 2.1-2.7_

  - [x] 1.4 Configure fonts for English and Arabic
    - Set up Inter font for English content
    - Set up Cairo or similar Arabic font
    - Configure font variables in layout
    - _Requirements: 3.2, 3.3_

- [ ] 2. JSON content structure and loading system
  - [x] 2.1 Create content directory structure
    - Create content/en/ and content/ar/ directories
    - Set up placeholder JSON files for all content types
    - _Requirements: 2.1-2.7_

  - [x] 2.2 Implement content loader utility
    - Create lib/content/loader.ts with loadContent function
    - Implement error handling with fallback to English
    - Add content validation against schemas
    - Create getDefaultContent function for error cases
    - _Requirements: 2.8_

  - [x] 2.3 Create English content files
    - Create content/en/home.json with hero, about, services preview, testimonials, gallery, CTA sections
    - Create content/en/about.json with history, mission, values, certifications, team, statistics
    - Create content/en/services.json with categories and service details
    - Create content/en/portfolio.json with project items
    - Create content/en/testimonials.json with client reviews
    - Create content/en/navigation.json with menu structure
    - Create content/en/contact.json with contact info and form labels
    - Create content/en/careers.json with job openings and culture info
    - _Requirements: 2.1-2.7, 3.4_

  - [x] 2.4 Create Arabic content files
    - Create content/ar/home.json with translated content
    - Create content/ar/about.json with translated content
    - Create content/ar/services.json with translated content
    - Create content/ar/portfolio.json with translated content
    - Create content/ar/testimonials.json with translated content
    - Create content/ar/navigation.json with translated menu
    - Create content/ar/contact.json with translated labels
    - Create content/ar/careers.json with translated content
    - _Requirements: 2.1-2.7, 3.4_

  - [ ] 2.5 Write property test for content translation completeness
    - **Property 3: Content Translation Completeness**
    - **Validates: Requirements 3.4**

- [ ] 3. Internationalization (i18n) setup
  - [x] 3.1 Create i18n configuration
    - Create lib/i18n/config.ts with locale settings
    - Define supported locales (en, ar)
    - Set default locale to Arabic
    - Create getDirection helper function
    - _Requirements: 3.1, 3.6_

  - [x] 3.2 Implement language detection utility
    - Create lib/i18n/utils.ts with detectLanguage function
    - Check URL path segment first
    - Fall back to cookie, then Accept-Language header
    - Default to Arabic for Saudi Arabia locale
    - Create setLanguageCookie function
    - _Requirements: 3.5, 3.6, 3.7_

  - [ ] 3.3 Write property test for language-direction consistency
    - **Property 2: Language-Direction Consistency**
    - **Validates: Requirements 3.2, 3.3**

  - [ ] 3.4 Write property test for non-Saudi locale defaults
    - **Property 5: Non-Saudi Locale Defaults to English**
    - **Validates: Requirements 3.7**

  - [ ] 3.5 Write property test for language preference persistence
    - **Property 4: Language Preference Persistence**
    - **Validates: Requirements 3.5**

- [ ] 4. Core layout components
  - [x] 4.1 Create root layout with language routing
    - Create app/layout.tsx with metadata and analytics scripts
    - Create app/[lang]/layout.tsx with language-based routing
    - Set html lang and dir attributes based on language
    - Apply appropriate font based on language
    - _Requirements: 3.2, 3.3, 9.1_

  - [x] 4.2 Implement Header component
    - Create components/layout/Header.tsx
    - Display logo and company name
    - Render navigation menu with links
    - Highlight active page in navigation
    - Implement responsive hamburger menu for mobile
    - Include LanguageSwitcher component
    - _Requirements: 9.1, 9.2, 9.3, 8.5_

  - [x] 4.3 Implement Footer component
    - Create components/layout/Footer.tsx
    - Display company information and contact details
    - Render secondary navigation links
    - Display social media links (LinkedIn, Twitter, Instagram)
    - Include links to privacy policy and terms of service
    - Support RTL/LTR layout
    - _Requirements: 9.4, 9.5, 9.6_

  - [x] 4.4 Implement LanguageSwitcher component
    - Create components/layout/LanguageSwitcher.tsx as client component
    - Toggle between Arabic and English
    - Update URL with new language segment
    - Store preference in cookie
    - Display current language with appropriate label
    - _Requirements: 3.1, 3.5_

  - [x] 4.5 Implement BackToTop button component
    - Create components/shared/BackToTop.tsx as client component
    - Show button after scrolling 500px
    - Smooth scroll to top on click
    - Position fixed in bottom corner (RTL-aware)
    - _Requirements: 9.7_

  - [ ] 4.6 Write property test for back-to-top button visibility
    - **Property 15: Back-to-Top Button Visibility**
    - **Validates: Requirements 9.7**

  - [ ] 4.7 Write property test for consistent layout structure
    - **Property 13: Consistent Layout Structure**
    - **Validates: Requirements 9.1, 9.4**

  - [ ] 4.8 Write property test for active page highlighting
    - **Property 14: Active Page Highlighting**
    - **Validates: Requirements 9.3**

- [ ] 5. Shared reusable components
  - [x] 5.1 Create Button component
    - Create components/shared/Button.tsx
    - Support primary, secondary, and outline variants
    - Support sm, md, lg sizes
    - Handle both button and link (href) modes
    - Ensure minimum 44px touch target size
    - _Requirements: 8.7, 12.1_

  - [x] 5.2 Create Card component
    - Create components/shared/Card.tsx
    - Provide consistent card styling
    - Support hover effects
    - Make reusable across service cards, portfolio items, job listings
    - _Requirements: 1.4, 4.2, 6.2_

  - [ ] 5.3 Write property test for interactive element touch target size
    - **Property 12: Interactive Element Touch Target Size**
    - **Validates: Requirements 8.7**

- [ ] 6. Homepage implementation
  - [x] 6.1 Create homepage route and load content
    - Create app/[lang]/page.tsx
    - Implement generateStaticParams for en and ar
    - Load home content using loadContent function
    - Implement generateMetadata for SEO
    - _Requirements: 1.1, 10.3, 10.4_

  - [x] 6.2 Implement HeroSection component
    - Create components/home/HeroSection.tsx
    - Display title, subtitle, and CTA button
    - Support background image with overlay
    - Ensure text readability with proper contrast
    - Use Next.js Image component for background
    - _Requirements: 1.1, 10.7, 12.1_

  - [x] 6.3 Implement AboutSection component
    - Create components/home/AboutSection.tsx
    - Display company summary and years of experience
    - Include link to full about page
    - _Requirements: 1.2_

  - [x] 6.4 Implement WhyChooseSection component
    - Create components/home/WhyChooseSection.tsx
    - Display at least four differentiators with icons
    - Use grid layout responsive to screen size
    - _Requirements: 1.3_

  - [x] 6.5 Implement ServicesPreview component
    - Create components/home/ServicesPreview.tsx
    - Display service cards in grid layout
    - Include "View All Services" link
    - _Requirements: 1.4_

  - [x] 6.6 Implement ServiceCard component
    - Create components/services/ServiceCard.tsx
    - Display service icon, title, and description
    - Support click interaction
    - Apply category-specific styling
    - _Requirements: 1.4, 4.2, 4.5_

  - [ ] 6.7 Write property test for service card completeness
    - **Property 1: Service Card Completeness**
    - **Validates: Requirements 1.4, 4.5**

  - [x] 6.8 Implement TestimonialsCarousel component
    - Create components/home/TestimonialsCarousel.tsx as client component
    - Display testimonials with auto-rotation every 5 seconds
    - Provide manual navigation arrows
    - Show client name, company, rating, and feedback
    - Display client photo or logo if available
    - _Requirements: 1.5, 11.1, 11.3, 11.4, 11.5, 11.6_

  - [ ] 6.9 Write property test for testimonial data completeness
    - **Property 20: Testimonial Data Completeness**
    - **Validates: Requirements 11.3, 11.4**

  - [ ] 6.10 Write property test for testimonial carousel navigation
    - **Property 21: Testimonial Carousel Navigation**
    - **Validates: Requirements 11.6**

  - [x] 6.11 Implement GalleryPreview component
    - Create components/home/GalleryPreview.tsx
    - Display grid of six portfolio thumbnails
    - Include "View All Projects" link
    - Use Next.js Image component with lazy loading
    - _Requirements: 1.6, 10.6, 10.7_

  - [x] 6.12 Implement CTASection component
    - Create components/home/CTASection.tsx
    - Display compelling message and contact button
    - Make reusable across multiple pages
    - _Requirements: 1.7, 12.2_

  - [ ] 6.13 Write property test for single H1 per page
    - **Property 19: Single H1 Per Page**
    - **Validates: Requirements 10.8**

- [ ] 7. Checkpoint - Verify homepage functionality
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Services page implementation
  - [x] 8.1 Create services page route
    - Create app/[lang]/services/page.tsx
    - Load services content using loadContent function
    - Implement generateMetadata for SEO
    - _Requirements: 4.1, 10.3_

  - [x] 8.2 Implement services page layout
    - Display page title and description
    - Render all service cards in grid layout
    - Include CTA section at bottom
    - _Requirements: 4.2, 4.6_

  - [x] 8.3 Implement ServiceDetail component
    - Create components/services/ServiceDetail.tsx as client component
    - Display full service details in modal or expanded view
    - Show features and benefits lists
    - Include contact CTA button
    - Support close/back navigation
    - _Requirements: 4.3_

  - [ ] 8.4 Write property test for service detail display completeness
    - **Property 6: Service Detail Display Completeness**
    - **Validates: Requirements 4.3**

  - [ ] 8.5 Write property test for service categorization
    - **Property 7: Service Categorization**
    - **Validates: Requirements 4.4**

- [x] 9. About page implementation
  - [x] 9.1 Create about page route
    - Create app/[lang]/about/page.tsx
    - Load about content using loadContent function
    - Implement generateMetadata for SEO
    - _Requirements: 5.1, 10.3_

  - [x] 9.2 Implement about page sections
    - Display company history and founding information
    - Display mission statement
    - Display core values with icons and descriptions
    - Display certifications and licenses with images
    - Display team members or leadership
    - Display company statistics (projects, clients, workforce, experience)
    - Include CTA section at bottom
    - _Requirements: 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 12.4_

- [ ] 10. Portfolio page implementation
  - [x] 10.1 Create portfolio page route
    - Create app/[lang]/portfolio/page.tsx
    - Load portfolio content using loadContent function
    - Implement generateMetadata for SEO
    - _Requirements: 6.1, 10.3_

  - [ ] 10.2 Implement PortfolioGrid component
    - Create components/portfolio/PortfolioGrid.tsx
    - Display portfolio items in responsive grid
    - Support filtering by selected category
    - Handle empty states
    - _Requirements: 6.2, 6.4, 6.5_

  - [ ] 10.3 Implement PortfolioFilter component
    - Create components/portfolio/PortfolioFilter.tsx as client component
    - Display category filter buttons
    - Highlight active category
    - Include "All" option
    - _Requirements: 6.4_

  - [ ] 10.4 Write property test for portfolio category filtering
    - **Property 9: Portfolio Category Filtering**
    - **Validates: Requirements 6.4**

  - [ ] 10.5 Implement PortfolioItem component
    - Create components/portfolio/PortfolioItem.tsx
    - Display thumbnail with overlay
    - Show project title and category
    - Handle click to open detail view
    - Implement hover effects
    - _Requirements: 6.2, 6.3_

  - [ ] 10.6 Write property test for portfolio item click behavior
    - **Property 8: Portfolio Item Click Behavior**
    - **Validates: Requirements 6.3**

  - [ ] 10.7 Implement PortfolioModal component
    - Create components/portfolio/PortfolioModal.tsx as client component
    - Display project details with multiple images
    - Show project name, category, completion date, description, client, location
    - Support image gallery navigation
    - Implement keyboard navigation and focus trap
    - _Requirements: 6.3, 6.6, 6.7_

  - [ ] 10.8 Write property test for portfolio item data completeness
    - **Property 10: Portfolio Item Data Completeness**
    - **Validates: Requirements 6.6, 6.7**

- [ ] 11. Contact page implementation
  - [x] 11.1 Create contact page route
    - Create app/[lang]/contact/page.tsx
    - Load contact content using loadContent function
    - Implement generateMetadata for SEO
    - Use server-side rendering for fresh CSRF tokens
    - _Requirements: 7.1, 10.3_

  - [x] 11.2 Implement ContactInfo component
    - Create components/contact/ContactInfo.tsx
    - Display phone, email, address, business hours
    - Render clickable phone and email links
    - Embed Google Maps
    - _Requirements: 7.5, 7.6, 7.7, 12.6_

  - [ ] 11.3 Write property test for phone number click-to-call
    - **Property 23: Phone Number Click-to-Call**
    - **Validates: Requirements 12.6**

  - [x] 11.4 Implement ContactForm component
    - Create components/contact/ContactForm.tsx as client component
    - Render form fields: name, email, phone, service interest, message
    - Implement client-side validation
    - Display validation errors
    - Submit data to /api/contact endpoint
    - Show success/error messages
    - Reset form after successful submission
    - _Requirements: 7.2, 7.3, 7.4_

  - [x] 11.5 Create form validation utility
    - Create lib/utils/validation.ts
    - Implement validateContactForm function
    - Validate name (min 2 characters)
    - Validate email format
    - Validate Saudi phone number format
    - Validate message (min 10 characters)
    - Return specific error messages for each field
    - _Requirements: 7.4_

  - [ ] 11.6 Write property test for contact form validation
    - **Property 11: Contact Form Validation**
    - **Validates: Requirements 7.4**

  - [x] 11.7 Implement WhatsApp floating button
    - Create components/shared/WhatsAppButton.tsx as client component
    - Display floating button on all pages
    - Link to company WhatsApp business number
    - Position fixed in bottom corner (RTL-aware)
    - Track clicks with analytics
    - _Requirements: 7.8, 12.5, 15.4_

  - [ ] 11.8 Write property test for floating WhatsApp button presence
    - **Property 22: Floating WhatsApp Button Presence**
    - **Validates: Requirements 12.5**

- [ ] 12. Careers page implementation
  - [x] 12.1 Create careers page route
    - Create app/[lang]/careers/page.tsx
    - Load careers content using loadContent function
    - Implement generateMetadata for SEO
    - _Requirements: 13.1, 10.3_

  - [x] 12.2 Implement careers page sections
    - Display company culture information
    - Display employee benefits
    - Show "no openings" message when applicable
    - _Requirements: 13.6, 13.7_

  - [ ] 12.3 Implement JobListing component
    - Create components/careers/JobListing.tsx
    - Display job card with title, location, type
    - Show posted date
    - Handle click to view details
    - _Requirements: 13.2_

  - [ ] 12.4 Write property test for job opening data completeness
    - **Property 24: Job Opening Data Completeness**
    - **Validates: Requirements 13.2**

  - [ ] 12.5 Implement JobDetail component
    - Create components/careers/JobDetail.tsx as client component
    - Display full job description
    - Show requirements and benefits lists
    - Include application form or link
    - _Requirements: 13.3_

  - [ ] 12.6 Write property test for job detail display completeness
    - **Property 25: Job Detail Display Completeness**
    - **Validates: Requirements 13.3**

  - [ ] 12.7 Implement ApplicationForm component
    - Create components/careers/ApplicationForm.tsx as client component
    - Render form fields: name, email, phone, position interest, resume upload
    - Handle file upload with validation
    - Validate file type (PDF, DOCX) and size (max 5MB)
    - Display upload progress
    - Submit data to /api/careers endpoint
    - Show success/error messages
    - _Requirements: 13.4, 13.5_

  - [ ] 12.8 Add resume validation to validation utility
    - Update lib/utils/validation.ts
    - Implement validateApplicationForm function
    - Validate file type and size
    - Return specific error messages
    - _Requirements: 13.5_

  - [ ] 12.9 Write property test for resume upload validation
    - **Property 26: Resume Upload Validation**
    - **Validates: Requirements 13.5**

- [x] 13. Testimonials page implementation
  - [x] 13.1 Create testimonials page route
    - Create app/[lang]/testimonials/page.tsx
    - Load testimonials content using loadContent function
    - Implement generateMetadata for SEO
    - _Requirements: 11.2, 10.3_

  - [x] 13.2 Implement testimonials page layout
    - Display page title and description
    - Render all testimonials in grid layout
    - Show client name, company, rating, feedback
    - Display client photo or logo if available
    - _Requirements: 11.2, 11.3, 11.4_

- [ ] 14. Checkpoint - Verify all pages are functional
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 15. API routes implementation
  - [x] 15.1 Create contact form API route
    - Create app/api/contact/route.ts
    - Implement POST handler
    - Validate input using validateContactForm
    - Return 400 for validation errors
    - Implement rate limiting check
    - Return 429 for rate limit exceeded
    - Send email notification (mock or real implementation)
    - Track analytics event
    - Return success response
    - _Requirements: 7.3, 15.2_

  - [ ] 15.2 Create careers application API route
    - Create app/api/careers/route.ts
    - Implement POST handler for FormData
    - Validate input using validateApplicationForm
    - Return 400 for validation errors
    - Handle resume file upload
    - Send notification email with resume link
    - Track analytics event
    - Return success response
    - _Requirements: 13.4, 13.5_

  - [ ] 15.3 Implement email sending utility
    - Create lib/utils/email.ts
    - Implement sendContactEmail function
    - Implement sendApplicationEmail function
    - Use environment variables for email configuration
    - Handle email sending errors gracefully
    - _Requirements: 7.3, 13.4_

- [ ] 16. Analytics integration
  - [ ] 16.1 Set up Google Analytics
    - Create lib/utils/analytics.ts
    - Implement pageview and trackEvent functions
    - Add Google Analytics scripts to root layout
    - Use environment variable for GA tracking ID
    - _Requirements: 15.1_

  - [ ] 16.2 Implement event tracking
    - Track contact form submissions
    - Track phone number clicks
    - Track WhatsApp button clicks
    - Track service page views
    - Track portfolio item views
    - _Requirements: 15.2, 15.3, 15.4, 15.5, 15.6_

  - [ ] 16.3 Implement cookie consent component
    - Create components/shared/CookieConsent.tsx as client component
    - Display banner for first-time visitors
    - Store consent in localStorage
    - Initialize analytics only after consent
    - _Requirements: 15.7_

- [ ] 17. Performance optimization
  - [ ] 17.1 Implement image optimization
    - Use Next.js Image component for all images
    - Set priority for above-the-fold images
    - Implement lazy loading for below-the-fold images
    - Generate blur placeholders for images
    - Optimize image sizes and formats
    - _Requirements: 10.6, 10.7_

  - [ ] 17.2 Write property test for image lazy loading
    - **Property 17: Image Lazy Loading**
    - **Validates: Requirements 10.6**

  - [ ] 17.3 Write property test for Next.js Image component usage
    - **Property 18: Next.js Image Component Usage**
    - **Validates: Requirements 10.7**

  - [ ] 17.4 Implement code splitting
    - Use dynamic imports for heavy components
    - Lazy load PortfolioModal component
    - Lazy load TestimonialsCarousel component
    - Add loading skeletons for dynamic components
    - _Requirements: 10.1_

  - [ ] 17.5 Configure static generation
    - Set revalidate or dynamic settings for pages
    - Implement generateStaticParams for all dynamic routes
    - Pre-render all pages at build time
    - _Requirements: 1.8, 10.1_

  - [ ] 17.6 Optimize bundle size
    - Review and minimize third-party dependencies
    - Configure Tailwind to purge unused styles
    - Enable tree-shaking for imports
    - _Requirements: 10.1_

- [ ] 18. SEO optimization
  - [ ] 18.1 Implement metadata for all pages
    - Add generateMetadata to all page routes
    - Include title, description, keywords
    - Add Open Graph tags for social sharing
    - Set canonical URLs
    - Add language alternates
    - _Requirements: 10.3, 10.4_

  - [ ] 18.2 Write property test for page meta tags presence
    - **Property 16: Page Meta Tags Presence**
    - **Validates: Requirements 10.3**

  - [ ] 18.3 Generate sitemap
    - Create app/sitemap.ts
    - Include all static pages
    - Include both language versions
    - Set appropriate priorities and change frequencies
    - _Requirements: 10.5_

  - [ ] 18.4 Create robots.txt
    - Create app/robots.ts
    - Allow all crawlers
    - Reference sitemap location
    - _Requirements: 10.5_

  - [ ] 18.5 Implement proper heading hierarchy
    - Ensure each page has exactly one h1
    - Use h2-h6 in proper nested order
    - Make headings descriptive and keyword-rich
    - _Requirements: 10.8_

- [ ] 19. Accessibility implementation
  - [ ] 19.1 Add ARIA labels to interactive elements
    - Add aria-label to icon-only buttons
    - Add aria-pressed to toggle buttons
    - Add aria-expanded to expandable sections
    - Add aria-current to active navigation links
    - _Requirements: 14.1_

  - [ ] 19.2 Write property test for interactive element ARIA labels
    - **Property 27: Interactive Element ARIA Labels**
    - **Validates: Requirements 14.1**

  - [ ] 19.3 Implement keyboard navigation
    - Ensure all interactive elements are focusable
    - Implement focus trap for modals
    - Support Escape key to close modals
    - Support Tab navigation through forms
    - Support Arrow keys for carousels
    - _Requirements: 14.2_

  - [ ] 19.4 Write property test for keyboard navigation support
    - **Property 28: Keyboard Navigation Support**
    - **Validates: Requirements 14.2**

  - [ ] 19.5 Ensure color contrast compliance
    - Configure Tailwind colors with WCAG AA compliant ratios
    - Test all text/background combinations
    - Ensure 4.5:1 ratio for normal text
    - Ensure 3:1 ratio for large text
    - _Requirements: 14.3, 14.4_

  - [ ] 19.6 Write property test for normal text color contrast
    - **Property 29: Normal Text Color Contrast**
    - **Validates: Requirements 14.3**

  - [ ] 19.7 Write property test for large text color contrast
    - **Property 30: Large Text Color Contrast**
    - **Validates: Requirements 14.4**

  - [ ] 19.8 Add alt text to all images
    - Provide descriptive alt text for meaningful images
    - Use empty alt for decorative images
    - Include context in alt text
    - _Requirements: 14.5_

  - [ ] 19.9 Write property test for image alt text presence
    - **Property 31: Image Alt Text Presence**
    - **Validates: Requirements 14.5**

  - [ ] 19.10 Use semantic HTML
    - Use header, nav, main, footer elements
    - Use article and section appropriately
    - Use button for actions, a for navigation
    - Use proper list elements (ul, ol)
    - _Requirements: 14.6_

  - [ ] 19.11 Write property test for semantic HTML structure
    - **Property 32: Semantic HTML Structure**
    - **Validates: Requirements 14.6**

  - [ ] 19.12 Associate labels with form inputs
    - Use htmlFor/id to link labels and inputs
    - Add aria-required for required fields
    - Add aria-invalid for fields with errors
    - Add aria-describedby for error messages
    - _Requirements: 14.7_

  - [ ] 19.13 Write property test for form input label association
    - **Property 33: Form Input Label Association**
    - **Validates: Requirements 14.7**

  - [ ] 19.14 Implement focus indicators
    - Add visible focus styles to all interactive elements
    - Use outline with sufficient contrast
    - Ensure focus indicators work in both light and dark contexts
    - _Requirements: 14.2_

- [ ] 20. Error handling and edge cases
  - [ ] 20.1 Create error boundaries
    - Create components/shared/ErrorBoundary.tsx
    - Catch and display component errors gracefully
    - Log errors to console or error tracking service
    - Provide "Try again" functionality
    - _Requirements: 2.8_

  - [ ] 20.2 Create custom error pages
    - Create app/[lang]/not-found.tsx for 404 errors
    - Create app/[lang]/error.tsx for runtime errors
    - Provide helpful messages and navigation back to home
    - _Requirements: 9.1_

  - [ ] 20.3 Implement SafeImage component
    - Create components/shared/SafeImage.tsx
    - Handle image loading errors with fallback
    - Display placeholder on error
    - Log failed image loads
    - _Requirements: 10.7_

  - [ ] 20.4 Add error handling to API routes
    - Return consistent error response format
    - Use appropriate HTTP status codes
    - Log errors for debugging
    - Handle rate limiting
    - Handle email sending failures
    - _Requirements: 7.3, 13.4_

  - [ ] 20.5 Add error handling to content loader
    - Implement fallback to English when Arabic content missing
    - Return default content structure on error
    - Validate content against schemas
    - Log content loading errors
    - _Requirements: 2.8_

- [ ] 21. Responsive design refinement
  - [ ] 21.1 Test and refine desktop layout (1920px+)
    - Verify all components display correctly
    - Ensure proper spacing and alignment
    - Test navigation and interactions
    - _Requirements: 8.1_

  - [ ] 21.2 Test and refine laptop layout (1024px-1919px)
    - Adjust grid columns and spacing
    - Verify readability and usability
    - Test all interactive elements
    - _Requirements: 8.2_

  - [ ] 21.3 Test and refine tablet layout (768px-1023px)
    - Adjust component layouts for medium screens
    - Verify touch target sizes
    - Test navigation menu behavior
    - _Requirements: 8.3_

  - [ ] 21.4 Test and refine mobile layout (below 768px)
    - Implement hamburger menu
    - Ensure all content is accessible
    - Verify touch target sizes (minimum 44px)
    - Test form usability on mobile
    - _Requirements: 8.4, 8.5, 8.7_

  - [ ] 21.5 Test RTL layout across all breakpoints
    - Verify Arabic content displays correctly
    - Test navigation and interactions in RTL
    - Ensure proper alignment and spacing
    - _Requirements: 3.2, 3.3_

- [ ] 22. Testing implementation
  - [ ] 22.1 Set up testing infrastructure
    - Install Jest, React Testing Library, fast-check
    - Configure jest.config.js
    - Set up test utilities and helpers
    - Create test data generators
    - _Requirements: All_

  - [ ] 22.2 Write unit tests for validation utilities
    - Test validateContactForm with valid and invalid data
    - Test validateApplicationForm with various file types and sizes
    - Test email format validation
    - Test phone number validation
    - _Requirements: 7.4, 13.5_

  - [ ] 22.3 Write unit tests for content loader
    - Test loading English and Arabic content
    - Test fallback to English on error
    - Test default content on missing files
    - _Requirements: 2.8_

  - [ ] 22.4 Write unit tests for i18n utilities
    - Test language detection logic
    - Test cookie setting and reading
    - Test direction helper function
    - _Requirements: 3.5, 3.6, 3.7_

  - [ ] 22.5 Write unit tests for components
    - Test ServiceCard rendering
    - Test ContactForm validation and submission
    - Test LanguageSwitcher behavior
    - Test PortfolioFilter functionality
    - _Requirements: 1.4, 3.1, 6.4, 7.4_

  - [ ] 22.6 Set up integration tests with Playwright
    - Install Playwright
    - Configure playwright.config.ts
    - Write test for contact form submission flow
    - Write test for language switching flow
    - Write test for portfolio filtering flow
    - _Requirements: 3.1, 6.4, 7.3_

  - [ ] 22.7 Set up accessibility tests
    - Install jest-axe
    - Write accessibility tests for all pages
    - Write accessibility tests for forms
    - Write accessibility tests for interactive components
    - _Requirements: 14.1-14.7_

- [ ] 23. Checkpoint - Run full test suite
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 24. Environment configuration and deployment preparation
  - [ ] 24.1 Create environment variables template
    - Create .env.example file
    - Document all required environment variables
    - Include GA_TRACKING_ID, email configuration, API keys
    - _Requirements: 15.1_

  - [ ] 24.2 Configure production build settings
    - Update next.config.js for production
    - Enable image optimization
    - Configure output settings
    - Set up environment-specific configurations
    - _Requirements: 10.1, 10.7_

  - [ ] 24.3 Create deployment documentation
    - Document build process
    - Document environment setup
    - Document content update process
    - Create README with project overview
    - _Requirements: 2.8_

  - [ ] 24.4 Optimize production bundle
    - Run production build
    - Analyze bundle size
    - Remove development dependencies
    - Verify all optimizations are applied
    - _Requirements: 10.1_

  - [ ] 24.5 Test production build locally
    - Build and run production version
    - Test all pages and functionality
    - Verify performance metrics
    - Check for console errors
    - _Requirements: 1.8, 10.1_

- [ ] 25. Content population
  - [ ] 25.1 Populate English content with real data
    - Update home.json with actual company information
    - Update about.json with company history and team
    - Update services.json with detailed service descriptions
    - Update portfolio.json with real project data
    - Update testimonials.json with client reviews
    - Update contact.json with actual contact information
    - Update careers.json with current job openings
    - _Requirements: 1.1-1.7, 4.1-4.6, 5.1-5.7, 6.1-6.7, 7.1-7.8, 11.1-11.6, 13.1-13.7_

  - [ ] 25.2 Populate Arabic content with translations
    - Translate all English content to Arabic
    - Ensure cultural appropriateness
    - Verify RTL formatting looks correct
    - _Requirements: 3.4_

  - [ ] 25.3 Add images to public directory
    - Add hero images
    - Add service icons
    - Add portfolio project images
    - Add team photos
    - Add certification images
    - Add client logos
    - Optimize all images for web
    - _Requirements: 1.1, 1.4, 1.6, 4.5, 5.5, 5.6, 6.2, 11.4_

- [ ] 26. Final quality assurance
  - [ ] 26.1 Run Lighthouse audits
    - Test performance score (target: 90+)
    - Test SEO score (target: 95+)
    - Test accessibility score (target: 90+)
    - Test best practices score (target: 90+)
    - Address any issues found
    - _Requirements: 10.1, 10.2_

  - [ ] 26.2 Cross-browser testing
    - Test on Chrome, Firefox, Safari, Edge
    - Verify all functionality works across browsers
    - Check for visual inconsistencies
    - _Requirements: 8.1-8.4_

  - [ ] 26.3 Cross-device testing
    - Test on various mobile devices
    - Test on tablets
    - Test on desktop screens
    - Verify responsive behavior
    - _Requirements: 8.1-8.7_

  - [ ] 26.4 Verify all requirements are met
    - Review requirements document
    - Test each acceptance criterion
    - Document any deviations or issues
    - _Requirements: All_

  - [ ] 26.5 Security review
    - Check for exposed sensitive data
    - Verify form validation and sanitization
    - Test rate limiting on API routes
    - Review CORS and security headers
    - _Requirements: 7.3, 13.4_

- [ ] 27. Final checkpoint - Production readiness
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties across many generated inputs
- Unit tests validate specific examples and edge cases
- The implementation follows an incremental approach: infrastructure → layout → pages → optimization
- All content is managed through JSON files, enabling non-technical updates
- The website supports full bilingual functionality with proper RTL/LTR handling
- Performance and accessibility are prioritized throughout implementation
