import React from 'react';
import NavV3 from './NavV3';
import ScrollHero from './ScrollHero';
import FilterPipeline from './FilterPipeline';
import HowItWorks from './HowItWorks';
import Features from './Features';
import PrivacyBand from './PrivacyBand';
import FAQV3 from './FAQV3';
import FooterV3 from './FooterV3';

export default function LandingV3() {
  return (
    <div id="top" className="min-h-screen bg-paper font-sans text-ink">
      <NavV3 />
      <main>
        <ScrollHero />
        <FilterPipeline />
        <HowItWorks />
        <Features />
        <PrivacyBand />
        <FAQV3 />
      </main>
      <FooterV3 />
    </div>
  );
}
