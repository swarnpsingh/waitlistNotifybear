import { useState } from 'react';
import './App.css';
import HeroSection from './components/landing/HeroSection';
import FeaturesSection from './components/landing/FeaturesSection';
import GettingStartedSection from './components/landing/GettingStartedSection';
import CTASection from './components/landing/CTASection';
import Navbar from './components/Navbar';
import PrivacyPolicyPage from './components/landing/PrivacyPolicyPage';
// import TestimonialSection from './components/landing/TestimonialSection';
// import MobileScreen from './components/MobileScreen';

function App() {
  const [page, setPage] = useState('home');

  if (page === 'privacy') {
    return <PrivacyPolicyPage onBack={() => setPage('home')} />;
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <GettingStartedSection />
        <CTASection onShowPrivacy={() => setPage('privacy')} />
      </main>
    </div>
  );
}


export default App;
