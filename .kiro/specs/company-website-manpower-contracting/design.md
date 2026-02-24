# Design Document: Company Website for Manpower Contracting

## Overview

This design document outlines the technical architecture and implementation strategy for a bilingual corporate website for AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST. The website serves as the primary digital presence for showcasing services, building credibility, and facilitating business inquiries.

The system is built on Next.js 14+ with App Router, leveraging server-side rendering for optimal performance and SEO. Content is managed through a JSON-based system that enables non-technical updates without code deployment. The architecture emphasizes modularity, performance, and maintainability while supporting Arabic/English bilingual content with proper RTL layout handling.

Key architectural decisions:

- **Next.js App Router**: Provides file-based routing, server components, and built-in optimization
- **JSON Content System**: Decouples content from code, enabling easy updates by non-developers
- **Tailwind CSS**: Utility-first styling with built-in RTL support via directional variants
- **Server Components by Default**: Reduces client-side JavaScript and improves initial load performance
- **Static Generation**: Pre-renders pages at build time for maximum performance where possible

## Architecture

### System Architecture

The application follows a layered architecture pattern:

```
┌─────────────────────────────────────────────────────────┐
│                    Presentation Layer                    │
│  (Next.js Pages, React Components, Tailwind Styling)    │
└─────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────┐
│                   Application Layer                      │
│     (Content Loaders, Language Context, Utilities)      │
└─────────────────────────────────────────────────────────┘
                            │
┌─────────────────────────────────────────────────────────┐
│                      Data Layer                          │
│         (JSON Content Files, Type Definitions)          │
└─────────────────────────────────────────────────────────┘
```

### Directory Structure

```
company-website/
├── app/
│   ├── [lang]/                    # Language-based routing
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page
│   │   ├── portfolio/
│   │   │   └── page.tsx          # Portfolio page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   ├── careers/
│   │   │   └── page.tsx          # Careers page
│   │   ├── testimonials/
│   │   │   └── page.tsx          # Testimonials page
│   │   └── layout.tsx            # Root layout with nav/footer
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # Contact form handler
│   │   └── careers/
│   │       └── route.ts          # Job application handler
│   └── layout.tsx                # App-level layout
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation component
│   │   ├── Footer.tsx            # Footer component
│   │   └── LanguageSwitcher.tsx  # Language toggle
│   ├── home/
│   │   ├── HeroSection.tsx       # Hero component
│   │   ├── AboutSection.tsx      # About preview
│   │   ├── WhyChooseSection.tsx  # Differentiators
│   │   ├── ServicesPreview.tsx   # Services cards
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── GalleryPreview.tsx    # Portfolio preview
│   │   └── CTASection.tsx        # Call-to-action
│   ├── services/
│   │   ├── ServiceCard.tsx       # Service display card
│   │   └── ServiceDetail.tsx     # Detailed service view
│   ├── portfolio/
│   │   ├── PortfolioGrid.tsx     # Grid layout
│   │   ├── PortfolioItem.tsx     # Individual item
│   │   └── PortfolioFilter.tsx   # Category filter
│   ├── contact/
│   │   ├── ContactForm.tsx       # Contact form
│   │   └── ContactInfo.tsx       # Contact details
│   ├── careers/
│   │   ├── JobListing.tsx        # Job card
│   │   └── ApplicationForm.tsx   # Application form
│   └── shared/
│       ├── Button.tsx            # Reusable button
│       ├── Card.tsx              # Reusable card
│       └── BackToTop.tsx         # Scroll to top button
├── lib/
│   ├── content/
│   │   └── loader.ts             # Content loading utilities
│   ├── i18n/
│   │   ├── config.ts             # i18n configuration
│   │   └── utils.ts              # Language utilities
│   └── utils/
│       ├── validation.ts         # Form validation
│       └── analytics.ts          # Analytics helpers
├── content/
│   ├── en/
│   │   ├── home.json             # Homepage content
│   │   ├── about.json            # About page content
│   │   ├── services.json         # Services content
│   │   ├── portfolio.json        # Portfolio items
│   │   ├── testimonials.json     # Testimonials
│   │   ├── navigation.json       # Navigation structure
│   │   ├── contact.json          # Contact info
│   │   └── careers.json          # Careers content
│   └── ar/
│       └── [same structure as en/]
├── types/
│   └── content.ts                # TypeScript type definitions
└── public/
    ├── images/
    │   ├── hero/
    │   ├── services/
    │   ├── portfolio/
    │   └── team/
    └── icons/
```

### Routing Strategy

The application uses Next.js App Router with dynamic language segments:

- **Pattern**: `/[lang]/[page]`
- **Examples**: `/en/about`, `/ar/services`
- **Default**: Redirect from `/` to `/ar` or `/en` based on browser locale
- **Language Detection**: Server-side detection using `Accept-Language` header
- **Language Persistence**: Client-side cookie stores user preference

### Rendering Strategy

- **Static Generation (SSG)**: All content pages (home, about, services, portfolio, testimonials, careers)
- **Server-Side Rendering (SSR)**: Contact page (for fresh CSRF tokens)
- **Client Components**: Interactive elements (forms, carousels, filters, language switcher)
- **Server Components**: Content display, layout components

## Components and Interfaces

### Core Components

#### 1. Layout Components

**Header Component**

```typescript
interface HeaderProps {
  lang: 'en' | 'ar';
  navigation: NavigationItem[];
}

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}
```

Responsibilities:

- Render navigation menu with active state highlighting
- Display language switcher
- Implement responsive hamburger menu for mobile
- Handle RTL/LTR layout switching

**Footer Component**

```typescript
interface FooterProps {
  lang: 'en' | 'ar';
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  navigationLinks: NavigationItem[];
}
```

Responsibilities:

- Display company information and contact details
- Render secondary navigation links
- Show social media links
- Display legal links (privacy policy, terms)

**LanguageSwitcher Component**

```typescript
interface LanguageSwitcherProps {
  currentLang: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}
```

Responsibilities:

- Toggle between Arabic and English
- Update URL with new language segment
- Store preference in cookie
- Trigger page re-render with new content

#### 2. Homepage Components

**HeroSection Component**

```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}
```

Responsibilities:

- Display prominent hero content above the fold
- Render primary call-to-action button
- Support background image with overlay
- Ensure text readability with proper contrast

**ServicesPreview Component**

```typescript
interface ServicesPreviewProps {
  services: ServiceCard[];
  viewAllLink: string;
}

interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}
```

Responsibilities:

- Display grid of service cards (6-8 items)
- Render service icons, titles, and descriptions
- Link to detailed services page
- Implement responsive grid layout

**TestimonialsCarousel Component**

```typescript
interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  rating: number;
  feedback: string;
  photo?: string;
  logo?: string;
}
```

Responsibilities:

- Display testimonials in carousel format
- Auto-rotate every 5 seconds
- Provide manual navigation controls
- Show client name, company, rating, and feedback

**GalleryPreview Component**

```typescript
interface GalleryPreviewProps {
  portfolioItems: PortfolioItem[];
  viewAllLink: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  completionDate: string;
}
```

Responsibilities:

- Display grid of portfolio thumbnails (6 items)
- Link to full portfolio page
- Implement hover effects
- Support responsive grid layout

#### 3. Services Components

**ServiceCard Component**

```typescript
interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'manpower' | 'contracting';
  features: string[];
  benefits: string[];
}
```

Responsibilities:

- Display service information in card format
- Show icon, title, and description
- Support click interaction for detail view
- Apply category-specific styling

**ServiceDetail Component**

```typescript
interface ServiceDetailProps {
  service: Service;
  onClose: () => void;
}
```

Responsibilities:

- Display full service details in modal or dedicated view
- Show features and benefits lists
- Render call-to-action for contact
- Support close/back navigation

#### 4. Portfolio Components

**PortfolioGrid Component**

```typescript
interface PortfolioGridProps {
  items: PortfolioItem[];
  selectedCategory?: string;
}
```

Responsibilities:

- Display portfolio items in responsive grid
- Support filtering by category
- Implement masonry or uniform grid layout
- Handle empty states

**PortfolioFilter Component**

```typescript
interface PortfolioFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}
```

Responsibilities:

- Display category filter buttons
- Highlight active category
- Trigger filtering on selection
- Support "All" option

**PortfolioItem Component**

```typescript
interface PortfolioItemProps {
  item: PortfolioItem;
  onClick: () => void;
}
```

Responsibilities:

- Display portfolio thumbnail with overlay
- Show project title and category
- Handle click to open detail view
- Implement hover effects

#### 5. Contact Components

**ContactForm Component**

```typescript
interface ContactFormProps {
  lang: 'en' | 'ar';
  onSubmit: (data: ContactFormData) => Promise<void>;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}
```

Responsibilities:

- Render form fields with proper labels
- Validate input data client-side
- Display validation errors
- Submit data to API endpoint
- Show success/error messages
- Reset form after successful submission

**ContactInfo Component**

```typescript
interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  mapEmbedUrl: string;
}
```

Responsibilities:

- Display contact information
- Render clickable phone and email links
- Embed Google Maps
- Show business hours

#### 6. Careers Components

**JobListing Component**

```typescript
interface JobListingProps {
  job: JobOpening;
  onClick: () => void;
}

interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
}
```

Responsibilities:

- Display job opening card
- Show title, location, and type
- Handle click to view details
- Display posted date

**ApplicationForm Component**

```typescript
interface ApplicationFormProps {
  jobId: string;
  onSubmit: (data: ApplicationData) => Promise<void>;
}

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  positionInterest: string;
  resume: File;
}
```

Responsibilities:

- Render application form fields
- Handle file upload for resume
- Validate file type and size (PDF/DOCX, max 5MB)
- Submit data to API endpoint
- Display upload progress
- Show success/error messages

#### 7. Shared Components

**Button Component**

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}
```

Responsibilities:

- Render styled button or link
- Support multiple variants and sizes
- Handle click events
- Support disabled state
- Ensure minimum touch target size (44px)

**BackToTop Component**

```typescript
interface BackToTopProps {
  showAfterScroll: number; // pixels
}
```

Responsibilities:

- Show button after scrolling threshold
- Smooth scroll to top on click
- Position fixed in bottom-right corner
- Support RTL positioning

### Content Loading System

**Content Loader**

```typescript
// lib/content/loader.ts

export async function loadContent<T>(
  lang: 'en' | 'ar',
  contentType: string
): Promise<T> {
  const filePath = path.join(
    process.cwd(),
    'content',
    lang,
    `${contentType}.json`
  );
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent) as T;
}

export async function loadAllContent(lang: 'en' | 'ar') {
  return {
    home: await loadContent(lang, 'home'),
    about: await loadContent(lang, 'about'),
    services: await loadContent(lang, 'services'),
    portfolio: await loadContent(lang, 'portfolio'),
    testimonials: await loadContent(lang, 'testimonials'),
    navigation: await loadContent(lang, 'navigation'),
    contact: await loadContent(lang, 'contact'),
    careers: await loadContent(lang, 'careers'),
  };
}
```

### API Routes

**Contact Form Handler**

```typescript
// app/api/contact/route.ts

export async function POST(request: Request) {
  const data = await request.json();

  // Validate input
  const validation = validateContactForm(data);
  if (!validation.success) {
    return Response.json({ error: validation.errors }, { status: 400 });
  }

  // Send email notification
  await sendContactEmail(data);

  // Track analytics event
  trackEvent('contact_form_submission', {
    service_interest: data.serviceInterest,
  });

  return Response.json({ success: true });
}
```

**Job Application Handler**

```typescript
// app/api/careers/route.ts

export async function POST(request: Request) {
  const formData = await request.formData();

  // Validate input
  const validation = validateApplicationForm(formData);
  if (!validation.success) {
    return Response.json({ error: validation.errors }, { status: 400 });
  }

  // Upload resume to storage
  const resumeUrl = await uploadResume(formData.get('resume'));

  // Send notification email
  await sendApplicationEmail({
    ...Object.fromEntries(formData),
    resumeUrl,
  });

  // Track analytics event
  trackEvent('job_application_submission', {
    position: formData.get('positionInterest'),
  });

  return Response.json({ success: true });
}
```

## Data Models

### JSON Content Schemas

#### home.json

```json
{
  "hero": {
    "title": "string",
    "subtitle": "string",
    "ctaText": "string",
    "ctaLink": "string",
    "backgroundImage": "string"
  },
  "about": {
    "title": "string",
    "description": "string",
    "yearsOfExperience": "number"
  },
  "whyChoose": {
    "title": "string",
    "items": [
      {
        "icon": "string",
        "title": "string",
        "description": "string"
      }
    ]
  },
  "servicesPreview": {
    "title": "string",
    "services": [
      {
        "id": "string",
        "icon": "string",
        "title": "string",
        "description": "string",
        "link": "string"
      }
    ],
    "viewAllLink": "string"
  },
  "testimonialsPreview": {
    "title": "string",
    "viewAllLink": "string"
  },
  "galleryPreview": {
    "title": "string",
    "viewAllLink": "string"
  },
  "cta": {
    "title": "string",
    "description": "string",
    "buttonText": "string",
    "buttonLink": "string"
  }
}
```

#### services.json

```json
{
  "pageTitle": "string",
  "pageDescription": "string",
  "categories": [
    {
      "id": "string",
      "name": "string",
      "description": "string"
    }
  ],
  "services": [
    {
      "id": "string",
      "icon": "string",
      "title": "string",
      "description": "string",
      "category": "string",
      "features": ["string"],
      "benefits": ["string"]
    }
  ],
  "cta": {
    "title": "string",
    "description": "string",
    "buttonText": "string",
    "buttonLink": "string"
  }
}
```

#### about.json

```json
{
  "pageTitle": "string",
  "hero": {
    "title": "string",
    "description": "string"
  },
  "history": {
    "title": "string",
    "foundingYear": "number",
    "description": "string"
  },
  "mission": {
    "title": "string",
    "statement": "string"
  },
  "values": {
    "title": "string",
    "items": [
      {
        "icon": "string",
        "title": "string",
        "description": "string"
      }
    ]
  },
  "certifications": {
    "title": "string",
    "items": [
      {
        "name": "string",
        "issuer": "string",
        "image": "string"
      }
    ]
  },
  "team": {
    "title": "string",
    "members": [
      {
        "name": "string",
        "position": "string",
        "bio": "string",
        "photo": "string"
      }
    ]
  },
  "statistics": {
    "projectsCompleted": "number",
    "clientsServed": "number",
    "workforceSize": "number",
    "yearsOfExperience": "number"
  }
}
```

#### portfolio.json

```json
{
  "pageTitle": "string",
  "pageDescription": "string",
  "categories": ["string"],
  "items": [
    {
      "id": "string",
      "title": "string",
      "category": "string",
      "thumbnail": "string",
      "images": ["string"],
      "description": "string",
      "completionDate": "string",
      "client": "string",
      "location": "string"
    }
  ]
}
```

#### testimonials.json

```json
{
  "pageTitle": "string",
  "pageDescription": "string",
  "items": [
    {
      "id": "string",
      "clientName": "string",
      "company": "string",
      "rating": "number",
      "feedback": "string",
      "photo": "string",
      "logo": "string",
      "date": "string"
    }
  ]
}
```

#### navigation.json

```json
{
  "mainMenu": [
    {
      "label": "string",
      "href": "string",
      "children": [
        {
          "label": "string",
          "href": "string"
        }
      ]
    }
  ],
  "footerMenu": [
    {
      "label": "string",
      "href": "string"
    }
  ]
}
```

#### contact.json

```json
{
  "pageTitle": "string",
  "pageDescription": "string",
  "contactInfo": {
    "phone": "string",
    "email": "string",
    "address": "string",
    "businessHours": "string",
    "mapEmbedUrl": "string"
  },
  "socialLinks": [
    {
      "platform": "string",
      "url": "string",
      "icon": "string"
    }
  ],
  "whatsapp": {
    "number": "string",
    "message": "string"
  },
  "form": {
    "title": "string",
    "fields": {
      "name": {
        "label": "string",
        "placeholder": "string"
      },
      "email": {
        "label": "string",
        "placeholder": "string"
      },
      "phone": {
        "label": "string",
        "placeholder": "string"
      },
      "serviceInterest": {
        "label": "string",
        "placeholder": "string",
        "options": ["string"]
      },
      "message": {
        "label": "string",
        "placeholder": "string"
      }
    },
    "submitButton": "string",
    "successMessage": "string",
    "errorMessage": "string"
  }
}
```

#### careers.json

```json
{
  "pageTitle": "string",
  "pageDescription": "string",
  "culture": {
    "title": "string",
    "description": "string",
    "benefits": ["string"]
  },
  "openings": [
    {
      "id": "string",
      "title": "string",
      "location": "string",
      "type": "string",
      "description": "string",
      "requirements": ["string"],
      "benefits": ["string"],
      "postedDate": "string"
    }
  ],
  "noOpeningsMessage": "string",
  "applicationForm": {
    "title": "string",
    "fields": {
      "name": {
        "label": "string",
        "placeholder": "string"
      },
      "email": {
        "label": "string",
        "placeholder": "string"
      },
      "phone": {
        "label": "string",
        "placeholder": "string"
      },
      "positionInterest": {
        "label": "string",
        "placeholder": "string"
      },
      "resume": {
        "label": "string",
        "acceptedFormats": "string",
        "maxSize": "string"
      }
    },
    "submitButton": "string",
    "successMessage": "string",
    "errorMessage": "string"
  }
}
```

### TypeScript Type Definitions

```typescript
// types/content.ts

export type Language = 'en' | 'ar';

export interface HomeContent {
  hero: HeroSection;
  about: AboutPreview;
  whyChoose: WhyChooseSection;
  servicesPreview: ServicesPreviewSection;
  testimonialsPreview: TestimonialsPreviewSection;
  galleryPreview: GalleryPreviewSection;
  cta: CTASection;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface AboutPreview {
  title: string;
  description: string;
  yearsOfExperience: number;
}

export interface WhyChooseSection {
  title: string;
  items: WhyChooseItem[];
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesPreviewSection {
  title: string;
  services: ServiceCard[];
  viewAllLink: string;
}

export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface Service extends ServiceCard {
  category: 'manpower' | 'contracting';
  features: string[];
  benefits: string[];
}

export interface TestimonialsPreviewSection {
  title: string;
  viewAllLink: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  rating: number;
  feedback: string;
  photo?: string;
  logo?: string;
  date: string;
}

export interface GalleryPreviewSection {
  title: string;
  viewAllLink: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  completionDate: string;
  client?: string;
  location?: string;
}

export interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  mapEmbedUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

export interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  positionInterest: string;
  resume: File;
}
```

### Internationalization (i18n) Strategy

The application implements a comprehensive bilingual system supporting Arabic and English with proper RTL/LTR handling.

**Language Detection Flow:**

1. Check URL path segment (`/ar/*` or `/en/*`)
2. If no language in URL, check cookie (`preferred_lang`)
3. If no cookie, check `Accept-Language` header
4. Default to Arabic for Saudi Arabia locale, English otherwise
5. Redirect to appropriate language path

**Implementation Approach:**

```typescript
// lib/i18n/config.ts

export const i18nConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'ar',
  localeDetection: true,
};

export const languageNames = {
  en: 'English',
  ar: 'العربية',
};

export function getDirection(lang: Language): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

// lib/i18n/utils.ts

export function detectLanguage(request: Request): Language {
  const url = new URL(request.url);
  const pathLang = url.pathname.split('/')[1];

  if (pathLang === 'ar' || pathLang === 'en') {
    return pathLang;
  }

  const cookieLang = request.cookies.get('preferred_lang')?.value;
  if (cookieLang === 'ar' || cookieLang === 'en') {
    return cookieLang;
  }

  const acceptLang = request.headers.get('accept-language');
  if (acceptLang?.includes('ar')) {
    return 'ar';
  }

  return i18nConfig.defaultLocale;
}

export function setLanguageCookie(lang: Language) {
  document.cookie = `preferred_lang=${lang}; path=/; max-age=31536000`;
}
```

**Tailwind RTL Support:**

```typescript
// tailwind.config.ts

module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Custom spacing and sizing
    },
  },
  plugins: [require('tailwindcss-rtl')],
};
```

**RTL-Aware Styling Examples:**

```tsx
// Use directional utilities
<div className="ms-4 me-2">  {/* margin-start, margin-end */}
<div className="ps-4 pe-2">  {/* padding-start, padding-end */}
<div className="text-start">  {/* text-align: start */}

// Conditional classes based on direction
<div className={cn(
  "flex",
  dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'
)}>
```

**Layout Component with RTL:**

```tsx
// app/[lang]/layout.tsx

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Language };
}) {
  const dir = getDirection(params.lang);

  return (
    <html lang={params.lang} dir={dir}>
      <body className={cn(inter.className, dir === 'rtl' && 'font-arabic')}>
        {children}
      </body>
    </html>
  );
}
```

### State Management

The application uses a minimal state management approach leveraging React's built-in capabilities and Next.js features:

**Server State:**

- Content data loaded server-side via `loadContent()` functions
- Passed as props to server components
- No client-side state management needed for static content

**Client State:**

- Language preference: Cookie + URL parameter
- Form state: React `useState` within form components
- UI state (modals, carousels): React `useState` within components
- Filter state (portfolio): React `useState` in filter component

**No Global State Library Needed:**

- Content is static and loaded per-page
- User interactions are component-scoped
- Language switching triggers page navigation (new URL)
- No complex shared state between components

**Example Form State:**

```tsx
// components/contact/ContactForm.tsx

'use client';

export function ContactForm({ lang }: { lang: Language }) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceInterest: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... render form
}
```

### Performance Optimization

**Image Optimization:**

```tsx
import Image from 'next/image';

// Optimized image component usage
<Image
  src="/images/hero/main.jpg"
  alt="Company hero image"
  width={1920}
  height={1080}
  priority  // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Lazy-loaded images below the fold
<Image
  src="/images/portfolio/project-1.jpg"
  alt="Project 1"
  width={800}
  height={600}
  loading="lazy"
/>
```

**Code Splitting:**

- Automatic code splitting via Next.js App Router
- Dynamic imports for heavy components:

```tsx
import dynamic from 'next/dynamic';

const PortfolioModal = dynamic(
  () => import('@/components/portfolio/PortfolioModal'),
  { ssr: false }
);

const TestimonialsCarousel = dynamic(
  () => import('@/components/home/TestimonialsCarousel'),
  { loading: () => <CarouselSkeleton /> }
);
```

**Font Optimization:**

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cairo = localFont({
  src: '../public/fonts/Cairo-Variable.ttf',
  display: 'swap',
  variable: '--font-cairo',
});
```

**Static Generation:**

```tsx
// app/[lang]/page.tsx

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function HomePage({
  params,
}: {
  params: { lang: Language };
}) {
  const content = await loadContent<HomeContent>(params.lang, 'home');

  return <HomePageContent content={content} lang={params.lang} />;
}
```

**Metadata Optimization:**

```tsx
// app/[lang]/page.tsx

export async function generateMetadata({
  params,
}: {
  params: { lang: Language };
}): Promise<Metadata> {
  const content = await loadContent<HomeContent>(params.lang, 'home');

  return {
    title: content.hero.title,
    description: content.hero.subtitle,
    openGraph: {
      title: content.hero.title,
      description: content.hero.subtitle,
      images: [content.hero.backgroundImage],
      locale: params.lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    alternates: {
      canonical: `/${params.lang}`,
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
  };
}
```

**Bundle Size Optimization:**

- Tree-shaking via ES modules
- Remove unused Tailwind classes in production
- Minimize third-party dependencies
- Use native browser APIs where possible

**Caching Strategy:**

```tsx
// app/[lang]/page.tsx

export const revalidate = 3600; // Revalidate every hour

// Or for truly static content
export const dynamic = 'force-static';
```

### Analytics Integration

**Google Analytics Setup:**

```tsx
// lib/utils/analytics.ts

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export function pageview(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

export function trackEvent(action: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
}

// app/layout.tsx

import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Event Tracking:**

```tsx
// Track contact form submission
trackEvent('contact_form_submission', {
  service_interest: formData.serviceInterest,
});

// Track phone click
trackEvent('phone_click', {
  location: 'header',
});

// Track WhatsApp click
trackEvent('whatsapp_click', {
  location: 'floating_button',
});

// Track service page view
trackEvent('service_view', {
  service_id: service.id,
  service_category: service.category,
});

// Track portfolio item view
trackEvent('portfolio_view', {
  project_id: item.id,
  project_category: item.category,
});
```

**Cookie Consent:**

```tsx
// components/shared/CookieConsent.tsx

'use client';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
    // Initialize analytics
    initializeAnalytics();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p>We use cookies to improve your experience...</p>
        <button onClick={acceptCookies}>Accept</button>
      </div>
    </div>
  );
}
```

### Validation and Error Handling

**Form Validation:**

```typescript
// lib/utils/validation.ts

export interface ValidationResult {
  success: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.phone || !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    success: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateApplicationForm(formData: FormData): ValidationResult {
  const errors: Record<string, string> = {};

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const resume = formData.get('resume') as File;

  if (!name || name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!email || !isValidEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!phone || !isValidPhone(phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!resume || resume.size === 0) {
    errors.resume = 'Please upload your resume';
  } else if (resume.size > 5 * 1024 * 1024) {
    errors.resume = 'Resume file size must be less than 5MB';
  } else if (
    ![
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ].includes(resume.type)
  ) {
    errors.resume = 'Resume must be in PDF or DOCX format';
  }

  return {
    success: Object.keys(errors).length === 0,
    errors,
  };
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  // Saudi phone number format: +966XXXXXXXXX or 05XXXXXXXX
  return /^(\+966|0)?5\d{8}$/.test(phone.replace(/\s/g, ''));
}
```

**Error Boundaries:**

```tsx
// components/shared/ErrorBoundary.tsx

'use client';

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="btn-primary"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Accessibility Implementation

**Semantic HTML:**

```tsx
// Use proper semantic elements
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Page Title</h1>
    <section>
      <h2>Section Title</h2>
    </section>
  </article>
</main>

<footer>
  <nav aria-label="Footer navigation">
    {/* Footer links */}
  </nav>
</footer>
```

**ARIA Labels:**

```tsx
// Button with icon only
<button aria-label="Close modal" onClick={onClose}>
  <XIcon />
</button>

// Language switcher
<button
  aria-label={`Switch to ${lang === 'en' ? 'Arabic' : 'English'}`}
  aria-pressed={lang === 'ar'}
>
  {lang === 'en' ? 'العربية' : 'English'}
</button>

// Form inputs
<label htmlFor="name">Name</label>
<input
  id="name"
  type="text"
  aria-required="true"
  aria-invalid={!!errors.name}
  aria-describedby={errors.name ? 'name-error' : undefined}
/>
{errors.name && (
  <span id="name-error" role="alert" className="text-red-600">
    {errors.name}
  </span>
)}
```

**Keyboard Navigation:**

```tsx
// Modal with focus trap
useEffect(() => {
  if (isOpen) {
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }

      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }
}, [isOpen, onClose]);
```

**Color Contrast:**

```typescript
// tailwind.config.ts - Ensure WCAG AA compliance

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af', // Contrast ratio 4.5:1 with white
          dark: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#059669', // Contrast ratio 4.5:1 with white
          dark: '#047857',
        },
      },
    },
  },
};
```

**Focus Indicators:**

```css
/* globals.css */

*:focus-visible {
  outline: 2px solid theme('colors.primary.DEFAULT');
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid theme('colors.primary.DEFAULT');
  outline-offset: 2px;
}
```

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

### Property 1: Service Card Completeness

_For any_ service in the content system, when rendered as a Service_Card, the rendered output SHALL contain an icon, title, and description.

**Validates: Requirements 1.4, 4.5**

### Property 2: Language-Direction Consistency

_For any_ page in the website, when the language is set to Arabic, the text direction SHALL be RTL and content SHALL be in Arabic; when the language is set to English, the text direction SHALL be LTR and content SHALL be in English.

**Validates: Requirements 3.2, 3.3**

### Property 3: Content Translation Completeness

_For any_ content key present in the English content files, there SHALL exist a corresponding key with the same path in the Arabic content files, and vice versa.

**Validates: Requirements 3.4**

### Property 4: Language Preference Persistence

_For any_ language selection (Arabic or English), after navigating to a different page, the selected language SHALL remain active.

**Validates: Requirements 3.5**

### Property 5: Non-Saudi Locale Defaults to English

_For any_ browser locale that is not Saudi Arabia (ar-SA), the language detection function SHALL return English as the default language.

**Validates: Requirements 3.7**

### Property 6: Service Detail Display Completeness

_For any_ Service_Card that is clicked, the detailed view SHALL display the service description, key features list, and benefits list.

**Validates: Requirements 4.3**

### Property 7: Service Categorization

_For any_ service in the content system, the service SHALL have a category field with a value of either "manpower" or "contracting".

**Validates: Requirements 4.4**

### Property 8: Portfolio Item Click Behavior

_For any_ Portfolio_Item that is clicked, the system SHALL display a larger view containing the project details.

**Validates: Requirements 6.3**

### Property 9: Portfolio Category Filtering

_For any_ category filter selection, the displayed Portfolio_Item entries SHALL only include items whose category matches the selected filter.

**Validates: Requirements 6.4**

### Property 10: Portfolio Item Data Completeness

_For any_ Portfolio_Item in the content system, the item SHALL contain a project name, category, completion date, description, and an array of one or more images.

**Validates: Requirements 6.6, 6.7**

### Property 11: Contact Form Validation

_For any_ contact form submission with invalid data (missing required fields, invalid email format, invalid phone format, or message too short), the validation function SHALL return specific error messages for each invalid field.

**Validates: Requirements 7.4**

### Property 12: Interactive Element Touch Target Size

_For any_ interactive element (button, link, form input) on mobile viewports, the element SHALL have a minimum tap target size of 44px in both width and height.

**Validates: Requirements 8.7**

### Property 13: Consistent Layout Structure

_For any_ page in the website, the page SHALL include a Navigation_Menu at the top and a Footer at the bottom.

**Validates: Requirements 9.1, 9.4**

### Property 14: Active Page Highlighting

_For any_ page in the website, the Navigation_Menu SHALL highlight the navigation link corresponding to the current active page.

**Validates: Requirements 9.3**

### Property 15: Back-to-Top Button Visibility

_For any_ scroll position greater than 500px from the top of the page, the back-to-top button SHALL be visible; for any scroll position less than or equal to 500px, the button SHALL be hidden.

**Validates: Requirements 9.7**

### Property 16: Page Meta Tags Presence

_For any_ page in the website, the page SHALL include meta tags for title, description, and Open Graph properties.

**Validates: Requirements 10.3**

### Property 17: Image Lazy Loading

_For any_ image element that is positioned below the fold (not visible in initial viewport), the image SHALL have the loading attribute set to "lazy".

**Validates: Requirements 10.6**

### Property 18: Next.js Image Component Usage

_For any_ image displayed on the website, the image SHALL be rendered using the Next.js Image component rather than a standard HTML img tag.

**Validates: Requirements 10.7**

### Property 19: Single H1 Per Page

_For any_ page in the website, the page SHALL contain exactly one h1 heading element.

**Validates: Requirements 10.8**

### Property 20: Testimonial Data Completeness

_For any_ Testimonial in the content system, the testimonial SHALL contain client name, company, rating, and feedback; if a photo or logo field is present, it SHALL be displayed in the rendered output.

**Validates: Requirements 11.3, 11.4**

### Property 21: Testimonial Carousel Navigation

_For any_ testimonial carousel with manual navigation controls, clicking the next arrow SHALL display the next testimonial in sequence, and clicking the previous arrow SHALL display the previous testimonial in sequence.

**Validates: Requirements 11.6**

### Property 22: Floating WhatsApp Button Presence

_For any_ page in the website, the page SHALL display a floating WhatsApp button that links to the company WhatsApp business number.

**Validates: Requirements 12.5**

### Property 23: Phone Number Click-to-Call

_For any_ phone number displayed on the website, the phone number SHALL be rendered as a clickable link with href format "tel:[phone_number]".

**Validates: Requirements 12.6**

### Property 24: Job Opening Data Completeness

_For any_ job opening in the content system, the job SHALL contain position title, location, and job type fields.

**Validates: Requirements 13.2**

### Property 25: Job Detail Display Completeness

_For any_ job opening that is clicked, the detailed view SHALL display the job description, requirements list, and benefits list.

**Validates: Requirements 13.3**

### Property 26: Resume Upload Validation

_For any_ file uploaded to the job application form, if the file size exceeds 5MB OR the file type is not PDF or DOCX, the validation function SHALL return an error message; if the file meets requirements, validation SHALL succeed.

**Validates: Requirements 13.5**

### Property 27: Interactive Element ARIA Labels

_For any_ interactive element (button, link, form control) in the website, the element SHALL have an appropriate ARIA label or aria-label attribute.

**Validates: Requirements 14.1**

### Property 28: Keyboard Navigation Support

_For any_ interactive element in the website, the element SHALL be focusable and operable using keyboard alone (Tab, Enter, Space, Arrow keys as appropriate).

**Validates: Requirements 14.2**

### Property 29: Normal Text Color Contrast

_For any_ normal-sized text element in the website, the color contrast ratio between text and background SHALL be at least 4.5:1.

**Validates: Requirements 14.3**

### Property 30: Large Text Color Contrast

_For any_ large text element (18pt+ or 14pt+ bold) in the website, the color contrast ratio between text and background SHALL be at least 3:1.

**Validates: Requirements 14.4**

### Property 31: Image Alt Text Presence

_For any_ meaningful image (not decorative) in the website, the image SHALL have an alt attribute with descriptive text.

**Validates: Requirements 14.5**

### Property 32: Semantic HTML Structure

_For any_ page in the website, the page SHALL use semantic HTML5 elements including header, nav, main, and footer for document structure.

**Validates: Requirements 14.6**

### Property 33: Form Input Label Association

_For any_ form input element in the website, the input SHALL have an associated label element linked via htmlFor/id or wrapped by the label element.

**Validates: Requirements 14.7**

## Error Handling

### Content Loading Errors

**Strategy**: Graceful degradation with fallback content

```typescript
// lib/content/loader.ts

export async function loadContent<T>(
  lang: Language,
  contentType: string
): Promise<T> {
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      lang,
      `${contentType}.json`
    );
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const parsed = JSON.parse(fileContent);

    // Validate against schema
    const validation = validateContentSchema(contentType, parsed);
    if (!validation.success) {
      throw new Error(
        `Invalid content schema: ${validation.errors.join(', ')}`
      );
    }

    return parsed as T;
  } catch (error) {
    console.error(`Failed to load ${contentType} content for ${lang}:`, error);

    // Attempt to load fallback language
    if (lang === 'ar') {
      console.warn('Falling back to English content');
      return loadContent('en', contentType);
    }

    // Return empty/default content structure
    return getDefaultContent(contentType) as T;
  }
}

function getDefaultContent(contentType: string): any {
  const defaults: Record<string, any> = {
    home: {
      hero: {
        title: '',
        subtitle: '',
        ctaText: '',
        ctaLink: '',
        backgroundImage: '',
      },
      about: { title: '', description: '', yearsOfExperience: 0 },
      whyChoose: { title: '', items: [] },
      servicesPreview: { title: '', services: [], viewAllLink: '' },
      testimonialsPreview: { title: '', viewAllLink: '' },
      galleryPreview: { title: '', viewAllLink: '' },
      cta: { title: '', description: '', buttonText: '', buttonLink: '' },
    },
    // ... other defaults
  };

  return defaults[contentType] || {};
}
```

### Form Submission Errors

**Strategy**: User-friendly error messages with retry capability

```typescript
// components/contact/ContactForm.tsx

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrors({});
  setSubmitStatus('idle');

  // Client-side validation
  const validation = validateContactForm(formData);
  if (!validation.success) {
    setErrors(validation.errors);
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (response.status === 400) {
        // Validation errors from server
        setErrors(errorData.errors || {});
        setSubmitStatus('error');
      } else if (response.status === 429) {
        // Rate limiting
        setErrors({ _form: 'Too many requests. Please try again later.' });
        setSubmitStatus('error');
      } else {
        // Generic server error
        setErrors({ _form: 'An error occurred. Please try again.' });
        setSubmitStatus('error');
      }

      return;
    }

    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: '',
      message: '',
    });

    // Track successful submission
    trackEvent('contact_form_submission', {
      service_interest: formData.serviceInterest,
    });
  } catch (error) {
    console.error('Form submission error:', error);
    setErrors({
      _form: 'Network error. Please check your connection and try again.',
    });
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### File Upload Errors

**Strategy**: Validate before upload with clear error messages

```typescript
// components/careers/ApplicationForm.tsx

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (!file) {
    setFileError('');
    return;
  }

  // Validate file type
  const allowedTypes = [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];

  if (!allowedTypes.includes(file.type)) {
    setFileError('Please upload a PDF or DOCX file');
    e.target.value = '';
    return;
  }

  // Validate file size (5MB max)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    setFileError('File size must be less than 5MB');
    e.target.value = '';
    return;
  }

  setFileError('');
  setSelectedFile(file);
};
```

### API Route Error Handling

**Strategy**: Consistent error response format with appropriate HTTP status codes

```typescript
// app/api/contact/route.ts

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate input
    const validation = validateContactForm(data);
    if (!validation.success) {
      return Response.json({ errors: validation.errors }, { status: 400 });
    }

    // Rate limiting check
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    const isRateLimited = await checkRateLimit(clientIp);

    if (isRateLimited) {
      return Response.json({ error: 'Too many requests' }, { status: 429 });
    }

    // Send email
    try {
      await sendContactEmail(data);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Log to error tracking service
      logError('contact_email_failed', emailError);

      return Response.json(
        {
          error:
            'Failed to send message. Please try again or contact us directly.',
        },
        { status: 500 }
      );
    }

    // Track analytics
    trackEvent('contact_form_submission', {
      service_interest: data.serviceInterest,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    logError('contact_form_error', error);

    return Response.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
```

### Image Loading Errors

**Strategy**: Fallback images and error boundaries

```tsx
// components/shared/SafeImage.tsx

'use client';

export function SafeImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder.jpg',
  ...props
}: ImageProps & { fallbackSrc?: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Failed to load image: ${src}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return <Image {...props} src={imgSrc} alt={alt} onError={handleError} />;
}
```

### Navigation Errors

**Strategy**: Custom 404 and error pages

```tsx
// app/[lang]/not-found.tsx

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}

// app/[lang]/error.tsx

('use client');

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
    logError('page_error', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="mb-8">We're sorry for the inconvenience.</p>
        <button onClick={reset} className="btn-primary">
          Try again
        </button>
      </div>
    </div>
  );
}
```

## Testing Strategy

### Overview

The testing strategy employs a dual approach combining unit tests for specific examples and edge cases with property-based tests for universal correctness guarantees. This comprehensive approach ensures both concrete functionality and general system behavior are validated.

### Testing Tools and Libraries

**Unit Testing:**

- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing with user-centric queries
- **@testing-library/jest-dom**: Custom Jest matchers for DOM assertions

**Property-Based Testing:**

- **fast-check**: Property-based testing library for JavaScript/TypeScript
- Configured to run minimum 100 iterations per property test
- Generates random test data to validate universal properties

**Integration Testing:**

- **Playwright**: End-to-end testing for critical user flows
- **MSW (Mock Service Worker)**: API mocking for integration tests

**Accessibility Testing:**

- **jest-axe**: Automated accessibility testing
- **pa11y**: Command-line accessibility testing tool

### Unit Testing Approach

Unit tests focus on specific examples, edge cases, and error conditions. They validate concrete scenarios and integration points between components.

**Component Testing Examples:**

```typescript
// __tests__/components/ServiceCard.test.tsx

import { render, screen } from '@testing-library/react';
import { ServiceCard } from '@/components/services/ServiceCard';

describe('ServiceCard', () => {
  const mockService = {
    id: 'service-1',
    icon: '/icons/construction.svg',
    title: 'Civil Works',
    description: 'Comprehensive civil engineering services',
    category: 'contracting' as const,
    features: ['Foundation work', 'Structural construction'],
    benefits: ['Quality assurance', 'Timely delivery'],
  };

  it('renders service title and description', () => {
    render(<ServiceCard service={mockService} />);

    expect(screen.getByText('Civil Works')).toBeInTheDocument();
    expect(screen.getByText('Comprehensive civil engineering services')).toBeInTheDocument();
  });

  it('displays service icon', () => {
    render(<ServiceCard service={mockService} />);

    const icon = screen.getByRole('img', { name: /civil works/i });
    expect(icon).toHaveAttribute('src', expect.stringContaining('construction.svg'));
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<ServiceCard service={mockService} onClick={handleClick} />);

    const card = screen.getByRole('article');
    card.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

**Validation Testing Examples:**

```typescript
// __tests__/lib/validation.test.ts

import {
  validateContactForm,
  validateApplicationForm,
} from '@/lib/utils/validation';

describe('validateContactForm', () => {
  it('accepts valid contact form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+966501234567',
      serviceInterest: 'Civil Works',
      message: 'I would like to inquire about your services.',
    };

    const result = validateContactForm(validData);

    expect(result.success).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('rejects empty name', () => {
    const invalidData = {
      name: '',
      email: 'john@example.com',
      phone: '+966501234567',
      serviceInterest: 'Civil Works',
      message: 'Test message',
    };

    const result = validateContactForm(invalidData);

    expect(result.success).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it('rejects invalid email format', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      phone: '+966501234567',
      serviceInterest: 'Civil Works',
      message: 'Test message',
    };

    const result = validateContactForm(invalidData);

    expect(result.success).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it('rejects invalid Saudi phone number', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      serviceInterest: 'Civil Works',
      message: 'Test message',
    };

    const result = validateContactForm(invalidData);

    expect(result.success).toBe(false);
    expect(result.errors.phone).toBeDefined();
  });
});
```

**Content Loading Testing:**

```typescript
// __tests__/lib/content/loader.test.ts

import { loadContent } from '@/lib/content/loader';
import type { HomeContent } from '@/types/content';

describe('loadContent', () => {
  it('loads English homepage content', async () => {
    const content = await loadContent<HomeContent>('en', 'home');

    expect(content).toBeDefined();
    expect(content.hero).toBeDefined();
    expect(content.hero.title).toBeTruthy();
  });

  it('loads Arabic homepage content', async () => {
    const content = await loadContent<HomeContent>('ar', 'home');

    expect(content).toBeDefined();
    expect(content.hero).toBeDefined();
    expect(content.hero.title).toBeTruthy();
  });

  it('falls back to English when Arabic content is missing', async () => {
    // Mock missing Arabic file
    jest
      .spyOn(fs, 'readFile')
      .mockRejectedValueOnce(new Error('File not found'));

    const content = await loadContent<HomeContent>('ar', 'nonexistent');

    // Should attempt English fallback
    expect(content).toBeDefined();
  });
});
```

### Property-Based Testing Approach

Property-based tests validate universal properties across many generated inputs. Each test runs a minimum of 100 iterations with randomized data to ensure comprehensive coverage.

**Property Test Configuration:**

```typescript
// jest.config.js

module.exports = {
  // ... other config
  testMatch: [
    '**/__tests__/**/*.test.ts?(x)',
    '**/__tests__/**/*.property.test.ts?(x)',
  ],
};
```

**Property Test Examples:**

```typescript
// __tests__/properties/service-card.property.test.ts

import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import { ServiceCard } from '@/components/services/ServiceCard';

/**
 * Feature: company-website-manpower-contracting
 * Property 1: Service Card Completeness
 * For any service in the content system, when rendered as a Service_Card,
 * the rendered output SHALL contain an icon, title, and description.
 */
describe('Property 1: Service Card Completeness', () => {
  it('renders all required fields for any service', () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1 }),
          icon: fc.webUrl(),
          title: fc.string({ minLength: 1 }),
          description: fc.string({ minLength: 1 }),
          category: fc.constantFrom('manpower', 'contracting'),
          features: fc.array(fc.string(), { minLength: 1 }),
          benefits: fc.array(fc.string(), { minLength: 1 }),
        }),
        (service) => {
          const { container } = render(<ServiceCard service={service} />);

          // Check that icon, title, and description are present
          const hasIcon = container.querySelector('img') !== null;
          const hasTitle = container.textContent?.includes(service.title) ?? false;
          const hasDescription = container.textContent?.includes(service.description) ?? false;

          expect(hasIcon).toBe(true);
          expect(hasTitle).toBe(true);
          expect(hasDescription).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: company-website-manpower-contracting
 * Property 3: Content Translation Completeness
 * For any content key present in the English content files,
 * there SHALL exist a corresponding key with the same path in the Arabic content files.
 */
describe('Property 3: Content Translation Completeness', () => {
  it('ensures all English keys have Arabic translations', async () => {
    const enContent = await loadAllContent('en');
    const arContent = await loadAllContent('ar');

    const enKeys = getAllKeys(enContent);
    const arKeys = getAllKeys(arContent);

    enKeys.forEach((key) => {
      expect(arKeys).toContain(key);
    });
  });

  it('ensures all Arabic keys have English translations', async () => {
    const enContent = await loadAllContent('en');
    const arContent = await loadAllContent('ar');

    const enKeys = getAllKeys(enContent);
    const arKeys = getAllKeys(arContent);

    arKeys.forEach((key) => {
      expect(enKeys).toContain(key);
    });
  });
});

/**
 * Feature: company-website-manpower-contracting
 * Property 9: Portfolio Category Filtering
 * For any category filter selection, the displayed Portfolio_Item entries
 * SHALL only include items whose category matches the selected filter.
 */
describe('Property 9: Portfolio Category Filtering', () => {
  it('filters portfolio items by category', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.string({ minLength: 1 }),
            title: fc.string({ minLength: 1 }),
            category: fc.constantFrom('residential', 'commercial', 'industrial', 'infrastructure'),
            thumbnail: fc.webUrl(),
            images: fc.array(fc.webUrl(), { minLength: 1 }),
            description: fc.string({ minLength: 1 }),
            completionDate: fc.date().map(d => d.toISOString()),
          }),
          { minLength: 5 }
        ),
        fc.constantFrom('residential', 'commercial', 'industrial', 'infrastructure'),
        (portfolioItems, selectedCategory) => {
          const { container } = render(
            <PortfolioGrid items={portfolioItems} selectedCategory={selectedCategory} />
          );

          const displayedItems = container.querySelectorAll('[data-portfolio-item]');

          displayedItems.forEach((item) => {
            const itemCategory = item.getAttribute('data-category');
            expect(itemCategory).toBe(selectedCategory);
          });
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: company-website-manpower-contracting
 * Property 11: Contact Form Validation
 * For any contact form submission with invalid data, the validation function
 * SHALL return specific error messages for each invalid field.
 */
describe('Property 11: Contact Form Validation', () => {
  it('returns errors for invalid form data', () => {
    fc.assert(
      fc.property(
        fc.record({
          name: fc.string({ maxLength: 1 }), // Invalid: too short
          email: fc.string(), // Invalid: not email format
          phone: fc.string(), // Invalid: not phone format
          serviceInterest: fc.string(),
          message: fc.string({ maxLength: 5 }), // Invalid: too short
        }),
        (invalidData) => {
          const result = validateContactForm(invalidData);

          expect(result.success).toBe(false);
          expect(Object.keys(result.errors).length).toBeGreaterThan(0);

          // Should have specific errors for invalid fields
          if (invalidData.name.length < 2) {
            expect(result.errors.name).toBeDefined();
          }
          if (!invalidData.email.includes('@')) {
            expect(result.errors.email).toBeDefined();
          }
          if (invalidData.message.length < 10) {
            expect(result.errors.message).toBeDefined();
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});

/**
 * Feature: company-website-manpower-contracting
 * Property 19: Single H1 Per Page
 * For any page in the website, the page SHALL contain exactly one h1 heading element.
 */
describe('Property 19: Single H1 Per Page', () => {
  const pages = ['home', 'about', 'services', 'portfolio', 'contact', 'careers', 'testimonials'];

  pages.forEach((pageName) => {
    it(`has exactly one h1 on ${pageName} page`, async () => {
      const { container } = render(await getPageComponent(pageName, 'en'));

      const h1Elements = container.querySelectorAll('h1');
      expect(h1Elements.length).toBe(1);
    });
  });
});

/**
 * Feature: company-website-manpower-contracting
 * Property 29: Normal Text Color Contrast
 * For any normal-sized text element in the website, the color contrast ratio
 * between text and background SHALL be at least 4.5:1.
 */
describe('Property 29: Normal Text Color Contrast', () => {
  it('maintains minimum contrast ratio for all text', () => {
    fc.assert(
      fc.property(
        fc.hexaString({ minLength: 6, maxLength: 6 }),
        fc.hexaString({ minLength: 6, maxLength: 6 }),
        (textColor, bgColor) => {
          const contrastRatio = calculateContrastRatio(
            `#${textColor}`,
            `#${bgColor}`
          );

          // If this combination is used in the design system,
          // it must meet WCAG AA standards
          if (isUsedInDesignSystem(textColor, bgColor)) {
            expect(contrastRatio).toBeGreaterThanOrEqual(4.5);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Integration Testing

Integration tests validate critical user flows and interactions between components.

```typescript
// __tests__/integration/contact-flow.test.ts

import { test, expect } from '@playwright/test';

test.describe('Contact Form Flow', () => {
  test('user can submit contact form successfully', async ({ page }) => {
    await page.goto('/en/contact');

    // Fill form
    await page.fill('[name="name"]', 'John Doe');
    await page.fill('[name="email"]', 'john@example.com');
    await page.fill('[name="phone"]', '+966501234567');
    await page.selectOption('[name="serviceInterest"]', 'Civil Works');
    await page.fill(
      '[name="message"]',
      'I would like to inquire about your services.'
    );

    // Submit
    await page.click('button[type="submit"]');

    // Verify success message
    await expect(page.locator('.success-message')).toBeVisible();
  });

  test('displays validation errors for invalid input', async ({ page }) => {
    await page.goto('/en/contact');

    // Submit empty form
    await page.click('button[type="submit"]');

    // Verify error messages
    await expect(page.locator('[id="name-error"]')).toBeVisible();
    await expect(page.locator('[id="email-error"]')).toBeVisible();
  });
});
```

### Accessibility Testing

```typescript
// __tests__/accessibility/pages.test.tsx

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('homepage has no accessibility violations', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('contact form has no accessibility violations', async () => {
    const { container } = render(<ContactForm lang="en" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
```

### Test Coverage Goals

- **Unit Test Coverage**: Minimum 80% code coverage
- **Property Test Coverage**: All 33 correctness properties implemented
- **Integration Test Coverage**: All critical user flows (contact, careers, navigation)
- **Accessibility Test Coverage**: All pages and interactive components

### Continuous Integration

Tests run automatically on:

- Every pull request
- Every commit to main branch
- Nightly builds for comprehensive property testing (1000+ iterations)

```yaml
# .github/workflows/test.yml

name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm test -- --coverage

      - name: Run property tests
        run: npm test -- --testMatch="**/*.property.test.ts"

      - name: Run integration tests
        run: npx playwright test

      - name: Run accessibility tests
        run: npm run test:a11y

      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

### Testing Best Practices

1. **Test Behavior, Not Implementation**: Focus on what components do, not how they do it
2. **Use Descriptive Test Names**: Each test should clearly state what it validates
3. **Keep Tests Independent**: Each test should run in isolation without dependencies
4. **Mock External Dependencies**: Use MSW for API mocking, avoid real network calls
5. **Test Accessibility**: Include accessibility checks in all component tests
6. **Property Test Tag Format**: Always include feature name and property number in comments
7. **Minimum Iterations**: Configure property tests for at least 100 runs
8. **Balance Unit and Property Tests**: Use unit tests for specific cases, property tests for general rules
