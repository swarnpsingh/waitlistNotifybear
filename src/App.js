import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import HeroSection from './components/landing/HeroSection';
import AppMarquee from './components/landing/AppMarquee';
import WhyThisExistsSection from './components/landing/WhyThisExistsSection';
import FilteringSection from './components/landing/FilteringSection';
import TodaySection from './components/landing/TodaySection';
import DifferentiationSection from './components/landing/DifferentiationSection';
import GettingStartedSection from './components/landing/GettingStartedSection';
import FAQSection from './components/landing/FAQSection';
import CTASection from './components/landing/CTASection';
import Navbar from './components/Navbar';
import FloatingCTA from './components/FloatingCTA';
import PrivacyPolicyPage from './components/landing/PrivacyPolicyPage';
import TermsOfServicePage from './components/landing/TermsOfServicePage';
import DeleteAccountPage from './components/landing/DeleteAccountPage';
import ContactPage from './components/landing/ContactPage';
import BlogIndex from './components/blog/BlogIndex';
import BlogPost from './components/blog/BlogPost';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-cream min-h-screen">
            <Navbar />

            <main>
              <HeroSection />
              <AppMarquee />
              <WhyThisExistsSection />
              <FilteringSection />
              <TodaySection />
              <DifferentiationSection />
              <GettingStartedSection />
              <FAQSection />
              <CTASection
                onShowPrivacy={() => navigate('/privacy-policy')}
                onShowTerms={() => navigate('/terms-of-service')}
                onShowContact={() => navigate('/contact')}
              />
            </main>

            <FloatingCTA />
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
