import HeroSection from './components/landing/HeroSection';
import Navbar from './components/Navbar';
import Features from './components/landing/FeaturesSection';
import CallToAction from './components/landing/CTASection';
import ProblemSection from './components/landing/ProblemSection';
import SolutionSection from './components/landing/SolutionSection';
import HowItWorksSection from './components/landing/HowItWorksSection';
// import TestimonialSection from './components/landing/TestimonialSection';
// import MobileScreen from './components/MobileScreen';

function App() {
  return (
    <div className="bg-[#000000] min-h-screen">
      <Navbar />

      <main className="pt-20"> {/* Adjust this to match your navbar height */}
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <Features />
        <CallToAction />

      </main>
    </div>
  );
}


export default App;
