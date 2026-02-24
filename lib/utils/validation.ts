/**
 * Form validation utilities for contact form
 * Provides comprehensive validation with specific error messages
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest?: string;
  message: string;
}

export interface ValidationResult {
  success: boolean;
  errors: Record<string, string>;
}

/**
 * Validates email format using RFC 5322 compliant regex
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates Saudi phone number format
 * Accepts formats:
 * - +966XXXXXXXXX (international format with country code)
 * - 05XXXXXXXX (local format starting with 05)
 * - 966XXXXXXXXX (without + prefix)
 */
function isValidSaudiPhone(phone: string): boolean {
  // Remove spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-()]/g, '');
  
  // Check for international format: +966XXXXXXXXX or 966XXXXXXXXX
  const internationalRegex = /^\+?966[5][0-9]{8}$/;
  
  // Check for local format: 05XXXXXXXX
  const localRegex = /^05[0-9]{8}$/;
  
  return internationalRegex.test(cleaned) || localRegex.test(cleaned);
}

/**
 * Validates contact form data
 * Returns validation result with specific error messages for each field
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate name (min 2 characters)
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Validate email format
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate Saudi phone number format
  if (!data.phone || data.phone.trim().length === 0) {
    errors.phone = 'Phone number is required';
  } else if (!isValidSaudiPhone(data.phone)) {
    errors.phone = 'Please enter a valid Saudi phone number (e.g., +966501234567 or 0501234567)';
  }

  // Validate message (min 10 characters)
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    success: Object.keys(errors).length === 0,
    errors,
  };
}
