'use client';

import { useState } from 'react';
import { Card, Button } from '@/components/ui';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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

    // Simulate form submission (in production, this would call an API)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Success
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {submitSuccess && (
              <div 
                className="mb-6 p-4 rounded-lg bg-green-600/20 border border-green-500/30 text-green-400"
                role="status"
                aria-live="polite"
              >
                <p className="font-medium">Message sent successfully!</p>
                <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900/50 border ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                  placeholder="Your name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900/50 border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                  placeholder="your.email@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900/50 border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full"
                aria-label={isSubmitting ? 'Sending message' : 'Send message'}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:barekegna@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                      barekegna@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/barekegn-asefa-346b46247" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold mb-4">What to Expect</h2>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Quick response within 24 hours
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free initial consultation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Detailed project proposal
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Transparent timeline and pricing
                </li>
              </ul>
            </Card>

            <Card>
              <h2 className="text-xl font-bold mb-4">Availability</h2>
              <p className="text-sm text-gray-400 mb-4">
                Currently accepting new projects for Q1 2026. Book your consultation early to secure your spot.
              </p>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-400 border border-green-500/30">
                Available for New Projects
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
