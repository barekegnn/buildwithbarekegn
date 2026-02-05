// Google Analytics utilities

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Check if GA is enabled
export const isGAEnabled = (): boolean => {
  return !!GA_MEASUREMENT_ID && typeof window !== 'undefined';
};

// Track page views
export const trackPageView = (url: string): void => {
  if (!isGAEnabled()) return;
  
  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (!isGAEnabled()) return;
  
  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Track CTA button clicks
export const trackCTAClick = (ctaName: string, ctaLocation: string): void => {
  trackEvent('cta_click', 'engagement', `${ctaName} - ${ctaLocation}`);
};

// Track external link clicks
export const trackExternalLink = (linkUrl: string, linkType: 'demo' | 'github' | 'other'): void => {
  trackEvent('external_link_click', 'outbound', `${linkType}: ${linkUrl}`);
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
