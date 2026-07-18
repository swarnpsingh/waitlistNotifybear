import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LandingV3 from './components/landingV3/LandingV3';
import Navbar from './components/Navbar';
import PrivacyPolicyPage from './components/landing/PrivacyPolicyPage';
import TermsOfServicePage from './components/landing/TermsOfServicePage';
import DeleteAccountPage from './components/landing/DeleteAccountPage';
import ContactPage from './components/landing/ContactPage';
import BlogIndex from './components/blog/BlogIndex';
import BlogPost from './components/blog/BlogPost';
import IntegrationHeroBrand from './components/landing/IntegrationHeroBrand';
import HeroV2 from './components/landingV2/Hero';

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<LandingV3 />} />
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
      {/* TEMP preview of ported 21st IntegrationHero — remove after review */}
      <Route
        path="/preview-hero"
        element={
          <div className="bg-cream min-h-screen">
            <Navbar />
            <IntegrationHeroBrand />
          </div>
        }
      />
      {/* Redesign preview — dark hero → light body (WIP) */}
      <Route
        path="/v2"
        element={
          <div className="min-h-screen bg-night-deep">
            <HeroV2 />
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
