import { promises as fs } from 'fs';
import path from 'path';
import type {
  Language,
  HomeContent,
  AboutContent,
  ServicesContent,
  PortfolioContent,
  TestimonialsContent,
  NavigationContent,
  ContactContent,
  CareersContent,
} from '@/types/content';

/**
 * Content type mapping for type safety
 */
type ContentTypeMap = {
  home: HomeContent;
  about: AboutContent;
  services: ServicesContent;
  portfolio: PortfolioContent;
  testimonials: TestimonialsContent;
  navigation: NavigationContent;
  contact: ContactContent;
  careers: CareersContent;
};

/**
 * Load content from JSON files with error handling and fallback support
 * 
 * @param lang - The language to load content for ('en' or 'ar')
 * @param contentType - The type of content to load (e.g., 'home', 'about')
 * @returns Promise resolving to the typed content
 * 
 * Error handling:
 * - If Arabic content fails to load, falls back to English
 * - If English content fails, returns default content structure
 * - Validates content structure against expected schema
 */
export async function loadContent<K extends keyof ContentTypeMap>(
  lang: Language,
  contentType: K
): Promise<ContentTypeMap[K]> {
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      lang,
      `${contentType}.json`
    );

    const fileContent = await fs.readFile(filePath, 'utf-8');
    const parsedContent = JSON.parse(fileContent) as ContentTypeMap[K];

    // Validate content structure
    if (!validateContent(contentType, parsedContent)) {
      console.warn(`Invalid content structure for ${contentType} in ${lang}`);
      throw new Error(`Invalid content structure for ${contentType}`);
    }

    return parsedContent;
  } catch (error) {
    console.error(`Error loading ${contentType} content for ${lang}:`, error);

    // Fallback to English if Arabic content fails
    if (lang === 'ar') {
      console.warn(`Falling back to English content for ${contentType}`);
      try {
        return await loadContent('en', contentType);
      } catch (fallbackError) {
        console.error(`English fallback also failed for ${contentType}:`, fallbackError);
      }
    }

    // Return default content if all else fails
    console.warn(`Returning default content for ${contentType}`);
    return getDefaultContent(contentType) as ContentTypeMap[K];
  }
}

/**
 * Load all content types for a given language
 * 
 * @param lang - The language to load content for
 * @returns Promise resolving to an object containing all content types
 */
export async function loadAllContent(lang: Language) {
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

/**
 * Validate content structure against expected schema
 * 
 * @param contentType - The type of content being validated
 * @param content - The content object to validate
 * @returns true if content is valid, false otherwise
 */
function validateContent(contentType: string, content: any): boolean {
  if (!content || typeof content !== 'object') {
    return false;
  }

  // Basic validation for each content type
  switch (contentType) {
    case 'home':
      return !!(
        content.hero &&
        content.about &&
        content.whyChoose &&
        content.servicesPreview &&
        content.testimonialsPreview &&
        content.galleryPreview &&
        content.cta
      );

    case 'about':
      return !!(
        content.pageTitle &&
        content.hero &&
        content.history &&
        content.mission &&
        content.values &&
        content.certifications &&
        content.team &&
        content.statistics
      );

    case 'services':
      return !!(
        content.pageTitle &&
        content.pageDescription &&
        content.categories &&
        Array.isArray(content.services) &&
        content.cta
      );

    case 'portfolio':
      return !!(
        content.pageTitle &&
        content.pageDescription &&
        Array.isArray(content.categories) &&
        Array.isArray(content.items)
      );

    case 'testimonials':
      return !!(
        content.pageTitle &&
        content.pageDescription &&
        Array.isArray(content.items)
      );

    case 'navigation':
      return !!(
        Array.isArray(content.mainMenu) &&
        Array.isArray(content.footerMenu)
      );

    case 'contact':
      return !!(
        content.pageTitle &&
        content.pageDescription &&
        content.contactInfo &&
        Array.isArray(content.socialLinks) &&
        content.whatsapp &&
        content.form
      );

    case 'careers':
      return !!(
        content.pageTitle &&
        content.pageDescription &&
        content.culture &&
        Array.isArray(content.openings) &&
        content.noOpeningsMessage &&
        content.applicationForm
      );

    default:
      return true;
  }
}

/**
 * Get default content structure for error cases
 * 
 * @param contentType - The type of content to generate defaults for
 * @returns Default content object
 */
function getDefaultContent(contentType: string): any {
  const defaults: Record<string, any> = {
    home: {
      hero: {
        title: 'Welcome',
        subtitle: 'Your trusted partner',
        ctaText: 'Get Started',
        ctaLink: '/contact',
        backgroundImage: '/images/hero/default.jpg',
      },
      about: {
        title: 'About Us',
        description: 'We provide exceptional services.',
        yearsOfExperience: 0,
      },
      whyChoose: {
        title: 'Why Choose Us',
        items: [],
      },
      servicesPreview: {
        title: 'Our Services',
        services: [],
        viewAllLink: '/services',
      },
      testimonialsPreview: {
        title: 'Testimonials',
        viewAllLink: '/testimonials',
      },
      galleryPreview: {
        title: 'Our Projects',
        viewAllLink: '/portfolio',
      },
      cta: {
        title: 'Ready to Start?',
        description: 'Contact us today.',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
    },

    about: {
      pageTitle: 'About Us',
      hero: {
        title: 'About Us',
        description: 'Learn more about our company.',
      },
      history: {
        title: 'Our History',
        foundingYear: new Date().getFullYear(),
        description: 'Our company history.',
      },
      mission: {
        title: 'Our Mission',
        statement: 'Our mission statement.',
      },
      values: {
        title: 'Our Values',
        items: [],
      },
      certifications: {
        title: 'Certifications',
        items: [],
      },
      team: {
        title: 'Our Team',
        members: [],
      },
      statistics: {
        projectsCompleted: 0,
        clientsServed: 0,
        workforceSize: 0,
        yearsOfExperience: 0,
      },
    },

    services: {
      pageTitle: 'Our Services',
      pageDescription: 'Explore our services.',
      categories: [],
      services: [],
      cta: {
        title: 'Interested in Our Services?',
        description: 'Contact us to learn more.',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
    },

    portfolio: {
      pageTitle: 'Our Portfolio',
      pageDescription: 'View our completed projects.',
      categories: [],
      items: [],
    },

    testimonials: {
      pageTitle: 'Client Testimonials',
      pageDescription: 'What our clients say about us.',
      items: [],
    },

    navigation: {
      mainMenu: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Contact', href: '/contact' },
      ],
      footerMenu: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },

    contact: {
      pageTitle: 'Contact Us',
      pageDescription: 'Get in touch with us.',
      contactInfo: {
        phone: '',
        email: '',
        address: '',
        businessHours: '',
        mapEmbedUrl: '',
      },
      socialLinks: [],
      whatsapp: {
        number: '',
        message: '',
      },
      form: {
        title: 'Contact Form',
        fields: {
          name: { label: 'Name', placeholder: 'Your name' },
          email: { label: 'Email', placeholder: 'Your email' },
          phone: { label: 'Phone', placeholder: 'Your phone' },
          serviceInterest: {
            label: 'Service Interest',
            placeholder: 'Select a service',
            options: [],
          },
          message: { label: 'Message', placeholder: 'Your message' },
        },
        submitButton: 'Submit',
        successMessage: 'Thank you for contacting us!',
        errorMessage: 'An error occurred. Please try again.',
      },
    },

    careers: {
      pageTitle: 'Careers',
      pageDescription: 'Join our team.',
      culture: {
        title: 'Company Culture',
        description: 'Learn about our culture.',
        benefits: [],
      },
      openings: [],
      noOpeningsMessage: 'No openings available at this time.',
      applicationForm: {
        title: 'Apply Now',
        fields: {
          name: { label: 'Name', placeholder: 'Your name' },
          email: { label: 'Email', placeholder: 'Your email' },
          phone: { label: 'Phone', placeholder: 'Your phone' },
          positionInterest: {
            label: 'Position',
            placeholder: 'Position of interest',
          },
          resume: {
            label: 'Resume',
            acceptedFormats: 'PDF, DOCX',
            maxSize: '5MB',
          },
        },
        submitButton: 'Submit Application',
        successMessage: 'Application submitted successfully!',
        errorMessage: 'An error occurred. Please try again.',
      },
    },
  };

  return defaults[contentType] || {};
}
