'use client';

import { useState } from 'react';

interface ContactFormProps {
  formContent: {
    title: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      serviceInterest: { label: string; placeholder: string; options: string[] };
      message: { label: string; placeholder: string };
    };
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
  lang: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  serviceInterest?: string;
  message?: string;
}

export default function ContactForm({ formContent, lang }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = lang === 'ar' ? 'الاسم مطلوب' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = lang === 'ar' ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = lang === 'ar' ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = lang === 'ar' ? 'يرجى اختيار خدمة' : 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = lang === 'ar' ? 'الرسالة مطلوبة' : 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, lang }),
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
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {formContent.fields.name.label}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={formContent.fields.name.placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
            errors.name ? 'border-error' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {formContent.fields.email.label}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={formContent.fields.email.placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
            errors.email ? 'border-error' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          {formContent.fields.phone.label}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder={formContent.fields.phone.placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
            errors.phone ? 'border-error' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-error" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
          {formContent.fields.serviceInterest.label}
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
            errors.serviceInterest ? 'border-error' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.serviceInterest}
          aria-describedby={errors.serviceInterest ? 'service-error' : undefined}
        >
          <option value="">{formContent.fields.serviceInterest.placeholder}</option>
          {formContent.fields.serviceInterest.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceInterest && (
          <p id="service-error" className="mt-1 text-sm text-error" role="alert">
            {errors.serviceInterest}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {formContent.fields.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={formContent.fields.message.placeholder}
          rows={5}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
            errors.message ? 'border-error' : 'border-gray-300'
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div
          className="p-4 bg-success/10 border border-success text-success rounded-lg"
          role="alert"
        >
          {formContent.successMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          className="p-4 bg-error/10 border border-error text-error rounded-lg"
          role="alert"
        >
          {formContent.errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
          formContent.submitButton
        )}
      </button>
    </form>
  );
}
