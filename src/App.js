import HeroSection from './components/HeroSection';
import NotificationMockup from './components/NotificationMockup';
import Navbar from './components/Navbar';
import Features from './components/Features';
import CallToAction from './components/CallToAction';




function App() {
  return (
    <div className="bg-[#F7F3EA] min-h-screen">
      <Navbar />

      <main className="pt-20"> {/* Adjust this to match your navbar height */}
        <HeroSection />
        <NotificationMockup />
        <Features />
        <CallToAction />

      </main>
    </div>
  );
}


export default App;
