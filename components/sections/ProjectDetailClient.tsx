'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { trackExternalLink, trackCTAClick } from '@/lib/analytics';

interface ExternalLinkButtonProps {
  href: string;
  type: 'demo' | 'github';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function ExternalLinkButton({ href, type, variant = 'primary', children }: ExternalLinkButtonProps) {
  const handleClick = () => {
    trackExternalLink(href, type);
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <Button variant={variant}>
        {children}
      </Button>
    </a>
  );
}

interface CTAButtonProps {
  href: string;
  ctaName: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function CTAButton({ href, ctaName, variant = 'primary', children }: CTAButtonProps) {
  const handleClick = () => {
    trackCTAClick(ctaName, 'Project Detail Page');
  };

  return (
    <a href={href} onClick={handleClick}>
      <Button variant={variant}>
        {children}
      </Button>
    </a>
  );
}
