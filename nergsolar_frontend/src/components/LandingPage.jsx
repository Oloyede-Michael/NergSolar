import React from 'react';
import AnimatedSection from './AnimatedSection';
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
      
      <AnimatedSection>
        <BestSeller />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <HomePage />
      </AnimatedSection>
      
      <AnimatedSection delay={150}>
        <AboutFounder />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <FAQ />
      </AnimatedSection>
      
      <AnimatedSection>
        <NewsletterCTA />
      </AnimatedSection>
    </div>
  );
}