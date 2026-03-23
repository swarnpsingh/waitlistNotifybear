import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HeroSection from './components/landing/HeroSection';
import FeaturesSection from './components/landing/FeaturesSection';
import GettingStartedSection from './components/landing/GettingStartedSection';
import CTASection from './components/landing/CTASection';
import Navbar from './components/Navbar';
import PrivacyPolicyPage from './components/landing/PrivacyPolicyPage';
import DeleteAccountPage from './components/landing/DeleteAccountPage';
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
              <FeaturesSection />
              <GettingStartedSection />
              <CTASection onShowPrivacy={() => navigate('/privacy-policy')} />
            </main>
          </div>
        }
      />
      <Route
        path="/privacy-policy"
        element={<PrivacyPolicyPage onBack={() => navigate('/')} />}
      />
      <Route
        path="/delete-account"
        element={<DeleteAccountPage onBack={() => navigate('/')} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


export default App;
