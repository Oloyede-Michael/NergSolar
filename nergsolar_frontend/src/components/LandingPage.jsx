import React from 'react';
import HomePage from './HomePage';
import Slider from './slider';
import BestSeller from './BestSeller';
import FAQ from './FAQ';
import NewsletterCTA from './CtaSection';
import AboutFounder from './AboutFounder';

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Slider />
      <BestSeller />
      <HomePage />
      <AboutFounder />
      <FAQ />
      <NewsletterCTA />
    </div>
  );
}