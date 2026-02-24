// TypeScript Type Definitions for Company Website Content

// ============================================================================
// Core Types
// ============================================================================

/**
 * Supported languages for the website
 */
export type Language = 'en' | 'ar';

// ============================================================================
// Homepage Content Types
// ============================================================================

/**
 * Complete homepage content structure
 */
export interface HomeContent {
  hero: HeroSection;
  about: AboutPreview;
  whyChoose: WhyChooseSection;
  servicesPreview: ServicesPreviewSection;
  testimonialsPreview: TestimonialsPreviewSection;
  galleryPreview: GalleryPreviewSection;
  partners: PartnersSection;
  faq: FAQSection;
  newsletter: NewsletterSection;
  cta: CTASection;
}

/**
 * Hero section displayed at the top of the homepage
 */
export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

/**
 * About section preview on homepage
 */
export interface AboutPreview {
  title: string;
  description: string;
  yearsOfExperience: number;
}

/**
 * Why Choose Us section with differentiators
 */
export interface WhyChooseSection {
  title: string;
  items: WhyChooseItem[];
}

/**
 * Individual differentiator item
 */
export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

/**
 * Services preview section on homepage
 */
export interface ServicesPreviewSection {
  title: string;
  services: ServiceCard[];
  viewAllLink: string;
}

/**
 * Testimonials preview section on homepage
 */
export interface TestimonialsPreviewSection {
  title: string;
  viewAllLink: string;
}

/**
 * Gallery preview section on homepage
 */
export interface GalleryPreviewSection {
  title: string;
  viewAllLink: string;
}

/**
 * Partners section on homepage
 */
export interface PartnersSection {
  title: string;
  items: PartnerItem[];
}

/**
 * Individual partner item
 */
export interface PartnerItem {
  name: string;
  logo: string;
}

/**
 * FAQ section on homepage
 */
export interface FAQSection {
  title: string;
  items: FAQItem[];
}

/**
 * Individual FAQ item
 */
export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Newsletter section on homepage
 */
export interface NewsletterSection {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  successMessage: string;
  errorMessage: string;
}

/**
 * Call-to-action section
 */
export interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// ============================================================================
// Services Content Types
// ============================================================================

/**
 * Complete services page content
 */
export interface ServicesContent {
  pageTitle: string;
  pageDescription: string;
  categories: ServiceCategory[];
  services: Service[];
  cta: CTASection;
}

/**
 * Service category grouping
 */
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
}

/**
 * Service card for preview display
 */
export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  link: string;
}

/**
 * Complete service information with details
 */
export interface Service extends ServiceCard {
  category: 'manpower' | 'contracting';
  features: string[];
  benefits: string[];
}

// ============================================================================
// About Page Content Types
// ============================================================================

/**
 * Complete about page content
 */
export interface AboutContent {
  pageTitle: string;
  hero: AboutHero;
  history: CompanyHistory;
  mission: CompanyMission;
  values: CompanyValues;
  certifications: Certifications;
  team: TeamSection;
  statistics: CompanyStatistics;
}

/**
 * About page hero section
 */
export interface AboutHero {
  title: string;
  description: string;
}

/**
 * Company history information
 */
export interface CompanyHistory {
  title: string;
  foundingYear: number;
  description: string;
}

/**
 * Company mission statement
 */
export interface CompanyMission {
  title: string;
  statement: string;
}

/**
 * Company values section
 */
export interface CompanyValues {
  title: string;
  items: ValueItem[];
}

/**
 * Individual company value
 */
export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

/**
 * Company certifications section
 */
export interface Certifications {
  title: string;
  items: CertificationItem[];
}

/**
 * Individual certification
 */
export interface CertificationItem {
  name: string;
  issuer: string;
  image: string;
}

/**
 * Team section
 */
export interface TeamSection {
  title: string;
  members: TeamMember[];
}

/**
 * Individual team member
 */
export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  photo: string;
}

/**
 * Company statistics
 */
export interface CompanyStatistics {
  projectsCompleted: number;
  clientsServed: number;
  workforceSize: number;
  yearsOfExperience: number;
}

// ============================================================================
// Portfolio Content Types
// ============================================================================

/**
 * Complete portfolio page content
 */
export interface PortfolioContent {
  pageTitle: string;
  pageDescription: string;
  categories: string[];
  items: PortfolioItem[];
}

/**
 * Portfolio project item
 */
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

// ============================================================================
// Testimonials Content Types
// ============================================================================

/**
 * Complete testimonials page content
 */
export interface TestimonialsContent {
  pageTitle: string;
  pageDescription: string;
  items: Testimonial[];
}

/**
 * Client testimonial
 */
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

// ============================================================================
// Navigation Content Types
// ============================================================================

/**
 * Navigation structure content
 */
export interface NavigationContent {
  mainMenu: NavigationItem[];
  footerMenu: NavigationItem[];
}

/**
 * Navigation menu item
 */
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

// ============================================================================
// Contact Page Content Types
// ============================================================================

/**
 * Complete contact page content
 */
export interface ContactContent {
  pageTitle: string;
  pageDescription: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  whatsapp: WhatsAppConfig;
  form: ContactFormConfig;
}

/**
 * Contact information
 */
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  mapEmbedUrl: string;
}

/**
 * Social media link
 */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/**
 * WhatsApp configuration
 */
export interface WhatsAppConfig {
  number: string;
  message: string;
}

/**
 * Contact form configuration
 */
export interface ContactFormConfig {
  title: string;
  fields: ContactFormFields;
  submitButton: string;
  successMessage: string;
  errorMessage: string;
}

/**
 * Contact form field configurations
 */
export interface ContactFormFields {
  name: FormFieldConfig;
  email: FormFieldConfig;
  phone: FormFieldConfig;
  serviceInterest: FormFieldConfigWithOptions;
  message: FormFieldConfig;
}

/**
 * Form field configuration
 */
export interface FormFieldConfig {
  label: string;
  placeholder: string;
}

/**
 * Form field configuration with options
 */
export interface FormFieldConfigWithOptions extends FormFieldConfig {
  options: string[];
}

/**
 * Contact form submission data
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

// ============================================================================
// Careers Page Content Types
// ============================================================================

/**
 * Complete careers page content
 */
export interface CareersContent {
  pageTitle: string;
  pageDescription: string;
  culture: CompanyCulture;
  openings: JobOpening[];
  noOpeningsMessage: string;
  applicationForm: ApplicationFormConfig;
}

/**
 * Company culture information
 */
export interface CompanyCulture {
  title: string;
  description: string;
  benefits: string[];
}

/**
 * Job opening
 */
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

/**
 * Application form configuration
 */
export interface ApplicationFormConfig {
  title: string;
  fields: ApplicationFormFields;
  submitButton: string;
  successMessage: string;
  errorMessage: string;
}

/**
 * Application form field configurations
 */
export interface ApplicationFormFields {
  name: FormFieldConfig;
  email: FormFieldConfig;
  phone: FormFieldConfig;
  positionInterest: FormFieldConfig;
  resume: ResumeFieldConfig;
}

/**
 * Resume upload field configuration
 */
export interface ResumeFieldConfig {
  label: string;
  acceptedFormats: string;
  maxSize: string;
}

/**
 * Job application submission data
 */
export interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  positionInterest: string;
  resume: File;
}

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Header component props
 */
export interface HeaderProps {
  lang: Language;
  navigation: NavigationItem[];
}

/**
 * Footer component props
 */
export interface FooterProps {
  lang: Language;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  navigationLinks: NavigationItem[];
}

/**
 * Language switcher component props
 */
export interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

/**
 * Hero section component props
 */
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

/**
 * Services preview component props
 */
export interface ServicesPreviewProps {
  services: ServiceCard[];
  viewAllLink: string;
}

/**
 * Testimonials carousel component props
 */
export interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

/**
 * Gallery preview component props
 */
export interface GalleryPreviewProps {
  portfolioItems: PortfolioItem[];
  viewAllLink: string;
}

/**
 * Service card component props
 */
export interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

/**
 * Service detail component props
 */
export interface ServiceDetailProps {
  service: Service;
  onClose: () => void;
}

/**
 * Portfolio grid component props
 */
export interface PortfolioGridProps {
  items: PortfolioItem[];
  selectedCategory?: string;
}

/**
 * Portfolio filter component props
 */
export interface PortfolioFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

/**
 * Portfolio item component props
 */
export interface PortfolioItemProps {
  item: PortfolioItem;
  onClick: () => void;
}

/**
 * Contact form component props
 */
export interface ContactFormProps {
  lang: Language;
  onSubmit: (data: ContactFormData) => Promise<void>;
}

/**
 * Contact info component props
 */
export interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
  mapEmbedUrl: string;
}

/**
 * Job listing component props
 */
export interface JobListingProps {
  job: JobOpening;
  onClick: () => void;
}

/**
 * Application form component props
 */
export interface ApplicationFormProps {
  jobId: string;
  onSubmit: (data: ApplicationData) => Promise<void>;
}

/**
 * Button component props
 */
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

/**
 * Back to top component props
 */
export interface BackToTopProps {
  showAfterScroll: number;
}
