import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HeroSection from './components/landing/HeroSection';
import FeaturesSection from './components/landing/FeaturesSection';
import InteractiveDemoSection from './components/landing/InteractiveDemoSection';
import GettingStartedSection from './components/landing/GettingStartedSection';
import FAQSection from './components/landing/FAQSection';
import CTASection from './components/landing/CTASection';
import Navbar from './components/Navbar';
import PrivacyPolicyPage from './components/landing/PrivacyPolicyPage';
import TermsOfServicePage from './components/landing/TermsOfServicePage';
import DeleteAccountPage from './components/landing/DeleteAccountPage';
import ContactPage from './components/landing/ContactPage';
import BlogIndex from './components/blog/BlogIndex';
import BlogPost from './components/blog/BlogPost';
// import TestimonialSection from './components/landing/TestimonialSection';
// import MobileScreen from './components/MobileScreen';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-white min-h-screen">
            <Navbar />

            <main>
              <HeroSection />
              <InteractiveDemoSection />
              <FeaturesSection />
              <GettingStartedSection />
              <FAQSection />
              <CTASection
                onShowPrivacy={() => navigate('/privacy-policy')}
                onShowTerms={() => navigate('/terms-of-service')}
                onShowContact={() => navigate('/contact')}
              />
            </main>
          </div>
        }
      />
      <Route
        path="/privacy-policy"
        element={<PrivacyPolicyPage onBack={() => navigate('/')} />}
      />
      <Route
        path="/terms-of-service"
        element={<TermsOfServicePage onBack={() => navigate('/')} />}
      />
      <Route
        path="/delete-account"
        element={<DeleteAccountPage onBack={() => navigate('/')} />}
      />
      <Route
        path="/contact"
        element={<ContactPage onBack={() => navigate('/')} />}
      />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


export default App;
