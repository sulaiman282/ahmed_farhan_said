# Requirements Document

## Introduction

This document defines the requirements for a corporate website for AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST., a manpower and general contracting organization operating in Saudi Arabia. The website will serve as the primary digital presence for the company, showcasing services, building credibility, attracting clients and job seekers, and facilitating business inquiries. The system will be built using Next.js and Tailwind CSS with a JSON-based content management approach to enable easy content updates without code changes.

## Glossary

- **Website**: The complete web application for AHMED FARHAN SAID AL-MARSHOUD FOR GENERAL CONTRACTING EST.
- **Content_System**: The JSON-based content management structure that stores all website text, images, and configuration
- **Hero_Section**: The primary above-the-fold section that visitors see first on the homepage
- **Service_Card**: A visual component displaying information about a specific service offering
- **Testimonial**: A client review or feedback statement with attribution
- **Portfolio_Item**: A showcase entry displaying completed project work with images and descriptions
- **CTA_Section**: Call-to-action section designed to encourage visitor engagement
- **Navigation_Menu**: The primary navigation component for moving between pages
- **Contact_Form**: An interactive form for visitors to submit inquiries
- **Language_Switcher**: A UI component allowing users to toggle between Arabic and English
- **Footer**: The bottom section of all pages containing company information and links
- **About_Section**: Content area describing company history, mission, and values
- **Why_Choose_Section**: Content area highlighting company differentiators and competitive advantages
- **Gallery**: A visual collection of project images organized by category or project

## Requirements

### Requirement 1: Homepage Structure

**User Story:** As a potential client, I want to see a compelling homepage that immediately communicates the company's value proposition, so that I can quickly understand what services are offered and decide to explore further.

#### Acceptance Criteria

1. THE Website SHALL display a Hero_Section with company name, tagline, and primary call-to-action button
2. THE Website SHALL display an About_Section summarizing company experience and commitment to quality
3. THE Website SHALL display a Why_Choose_Section with at least four key differentiators
4. THE Website SHALL display a Service_Card for each service offering with icon, title, and description
5. THE Website SHALL display at least three Testimonial entries with client name and feedback
6. THE Website SHALL display a Gallery preview with at least six Portfolio_Item images
7. THE Website SHALL display a CTA_Section encouraging visitors to contact the company
8. THE Website SHALL load all homepage sections within 3 seconds on standard broadband connections

### Requirement 2: JSON Content Management

**User Story:** As a content manager, I want all website content stored in JSON files, so that I can update text, images, and configuration without modifying code.

#### Acceptance Criteria

1. THE Content_System SHALL store all homepage content in a dedicated JSON file
2. THE Content_System SHALL store all services content in a dedicated JSON file
3. THE Content_System SHALL store all about page content in a dedicated JSON file
4. THE Content_System SHALL store all portfolio items in a dedicated JSON file
5. THE Content_System SHALL store all testimonials in a dedicated JSON file
6. THE Content_System SHALL store navigation menu structure in a dedicated JSON file
7. THE Content_System SHALL store contact information and social media links in a dedicated JSON file
8. WHEN a JSON file is updated, THE Website SHALL reflect changes after page reload without requiring code deployment

### Requirement 3: Bilingual Support

**User Story:** As a visitor in Saudi Arabia, I want to view the website in both Arabic and English, so that I can read content in my preferred language.

#### Acceptance Criteria

1. THE Website SHALL display a Language_Switcher component in the Navigation_Menu
2. WHEN a user selects Arabic, THE Website SHALL display all content in Arabic with right-to-left text direction
3. WHEN a user selects English, THE Website SHALL display all content in English with left-to-right text direction
4. THE Content_System SHALL store translations for all content in both Arabic and English
5. THE Website SHALL remember the user's language preference across page navigation
6. THE Website SHALL default to Arabic language for visitors from Saudi Arabia based on browser locale
7. THE Website SHALL default to English language for visitors from other regions

### Requirement 4: Services Page

**User Story:** As a potential client, I want to see detailed information about all services offered, so that I can understand the full scope of capabilities and determine if the company meets my needs.

#### Acceptance Criteria

1. THE Website SHALL provide a dedicated services page accessible from the Navigation_Menu
2. THE Website SHALL display at least six Service_Card entries on the services page
3. WHEN a Service_Card is clicked, THE Website SHALL display detailed service information including description, key features, and benefits
4. THE Website SHALL categorize services into manpower services and contracting services
5. THE Website SHALL display relevant icons or images for each service category
6. THE Website SHALL include a contact CTA_Section on the services page

### Requirement 5: About Page

**User Story:** As a potential client or partner, I want to learn about the company's history, mission, and values, so that I can assess credibility and alignment with my needs.

#### Acceptance Criteria

1. THE Website SHALL provide a dedicated about page accessible from the Navigation_Menu
2. THE Website SHALL display company founding information and years of experience
3. THE Website SHALL display the company mission statement
4. THE Website SHALL display core company values with descriptions
5. THE Website SHALL display company certifications and licenses
6. THE Website SHALL display key team members or leadership information
7. THE Website SHALL include company statistics such as projects completed, clients served, and workforce size

### Requirement 6: Portfolio Gallery

**User Story:** As a potential client, I want to see examples of completed projects, so that I can evaluate the quality of work and decide if I want to hire the company.

#### Acceptance Criteria

1. THE Website SHALL provide a dedicated portfolio page accessible from the Navigation_Menu
2. THE Website SHALL display Portfolio_Item entries in a responsive grid layout
3. WHEN a Portfolio_Item is clicked, THE Website SHALL display a larger view with project details
4. THE Website SHALL allow filtering Portfolio_Item entries by project category
5. THE Website SHALL display at least twelve Portfolio_Item entries
6. THE Website SHALL include project name, category, completion date, and description for each Portfolio_Item
7. THE Website SHALL support multiple images per Portfolio_Item

### Requirement 7: Contact Functionality

**User Story:** As a potential client, I want to easily contact the company through multiple channels, so that I can inquire about services or request quotes.

#### Acceptance Criteria

1. THE Website SHALL provide a dedicated contact page accessible from the Navigation_Menu
2. THE Website SHALL display a Contact_Form with fields for name, email, phone, service interest, and message
3. WHEN a user submits the Contact_Form with valid data, THE Website SHALL send the inquiry to the company email address
4. WHEN a user submits the Contact_Form with invalid data, THE Website SHALL display specific validation error messages
5. THE Website SHALL display company phone number, email address, and physical address on the contact page
6. THE Website SHALL display an embedded map showing the company location
7. THE Website SHALL display company business hours
8. THE Website SHALL include WhatsApp contact button linking to company WhatsApp business number

### Requirement 8: Responsive Design

**User Story:** As a visitor using any device, I want the website to display properly and be fully functional, so that I can access information regardless of my device type.

#### Acceptance Criteria

1. THE Website SHALL display correctly on desktop screens with width 1920px and above
2. THE Website SHALL display correctly on laptop screens with width between 1024px and 1919px
3. THE Website SHALL display correctly on tablet screens with width between 768px and 1023px
4. THE Website SHALL display correctly on mobile screens with width below 768px
5. WHEN viewed on mobile devices, THE Navigation_Menu SHALL collapse into a hamburger menu
6. THE Website SHALL maintain readability with appropriate font sizes across all device sizes
7. THE Website SHALL ensure all interactive elements have touch-friendly sizes on mobile devices with minimum 44px tap targets

### Requirement 9: Navigation and Site Structure

**User Story:** As a visitor, I want clear and consistent navigation throughout the website, so that I can easily find information and move between pages.

#### Acceptance Criteria

1. THE Website SHALL display a Navigation_Menu at the top of every page
2. THE Navigation_Menu SHALL include links to Home, About, Services, Portfolio, and Contact pages
3. THE Navigation_Menu SHALL highlight the current active page
4. THE Website SHALL display a Footer on every page with company information and secondary navigation links
5. THE Footer SHALL include links to privacy policy and terms of service pages
6. THE Footer SHALL display company social media links for LinkedIn, Twitter, and Instagram
7. THE Website SHALL display a back-to-top button when user scrolls down more than 500px

### Requirement 10: Performance and SEO

**User Story:** As a business owner, I want the website to load quickly and rank well in search engines, so that potential clients can easily find and access our services.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse performance score of 90 or above
2. THE Website SHALL achieve a Lighthouse SEO score of 95 or above
3. THE Website SHALL include proper meta tags for title, description, and keywords on all pages
4. THE Website SHALL include Open Graph tags for social media sharing
5. THE Website SHALL generate a sitemap.xml file for search engine crawlers
6. THE Website SHALL implement lazy loading for images below the fold
7. THE Website SHALL use Next.js Image component for optimized image delivery
8. THE Website SHALL implement proper heading hierarchy with single h1 per page

### Requirement 11: Testimonials Display

**User Story:** As a potential client, I want to read reviews from previous clients, so that I can gain confidence in the company's service quality and reliability.

#### Acceptance Criteria

1. THE Website SHALL display a testimonials section on the homepage with at least three Testimonial entries
2. THE Website SHALL provide a dedicated testimonials page with all Testimonial entries
3. THE Website SHALL display client name, company, and rating for each Testimonial
4. THE Website SHALL display client photo or company logo for each Testimonial where available
5. WHEN more than three Testimonial entries exist on homepage, THE Website SHALL rotate through them automatically every 5 seconds
6. THE Website SHALL allow manual navigation between Testimonial entries using arrow buttons

### Requirement 12: Call-to-Action Elements

**User Story:** As a business owner, I want strategic call-to-action elements throughout the website, so that visitors are encouraged to contact us and convert into clients.

#### Acceptance Criteria

1. THE Website SHALL display a primary CTA button in the Hero_Section linking to the contact page
2. THE Website SHALL display a CTA_Section at the bottom of the homepage encouraging contact
3. THE Website SHALL display a CTA_Section at the bottom of the services page
4. THE Website SHALL display a CTA_Section at the bottom of the about page
5. THE Website SHALL display a floating WhatsApp button on all pages for quick contact
6. THE Website SHALL display phone number as a clickable link that initiates phone calls on mobile devices

### Requirement 13: Careers Section

**User Story:** As a job seeker, I want to see available positions and learn about working for the company, so that I can apply for suitable opportunities.

#### Acceptance Criteria

1. THE Website SHALL provide a dedicated careers page accessible from the Footer
2. THE Website SHALL display current job openings with position title, location, and job type
3. WHEN a job opening is clicked, THE Website SHALL display detailed job description, requirements, and benefits
4. THE Website SHALL display a job application form with fields for name, email, phone, position interest, and resume upload
5. THE Website SHALL accept resume uploads in PDF and DOCX formats with maximum file size of 5MB
6. THE Website SHALL display information about company culture and employee benefits
7. WHEN no job openings are available, THE Website SHALL display a message encouraging visitors to submit general applications

### Requirement 14: Accessibility Compliance

**User Story:** As a visitor with disabilities, I want the website to be accessible using assistive technologies, so that I can access all information and functionality.

#### Acceptance Criteria

1. THE Website SHALL include proper ARIA labels for all interactive elements
2. THE Website SHALL support full keyboard navigation for all interactive features
3. THE Website SHALL maintain color contrast ratios of at least 4.5:1 for normal text
4. THE Website SHALL maintain color contrast ratios of at least 3:1 for large text
5. THE Website SHALL include alt text for all meaningful images
6. THE Website SHALL use semantic HTML elements for proper document structure
7. THE Website SHALL ensure form inputs have associated labels

### Requirement 15: Analytics and Tracking

**User Story:** As a business owner, I want to track website visitor behavior and conversions, so that I can measure marketing effectiveness and make data-driven decisions.

#### Acceptance Criteria

1. THE Website SHALL integrate Google Analytics for visitor tracking
2. THE Website SHALL track Contact_Form submissions as conversion events
3. THE Website SHALL track phone number clicks as conversion events
4. THE Website SHALL track WhatsApp button clicks as conversion events
5. THE Website SHALL track service page views by category
6. THE Website SHALL track portfolio item views
7. THE Website SHALL respect user privacy preferences and comply with cookie consent requirements
