import HeroSection from './components/HeroSection';
import NotificationMockup from './components/NotificationMockup';
import NotificationsMerge from './components/NotificationsMerge';
import Navbar from './components/Navbar';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
// import MobileScreen from './components/MobileScreen';

function App() {
  return (
    <div className="bg-[#00171F] min-h-screen">
      <Navbar />

      <main className="pt-20"> {/* Adjust this to match your navbar height */}
        <HeroSection />
        <NotificationMockup />
  <NotificationsMerge />
        {/* <MobileScreen /> */}
        <Features />
        <CallToAction />

      </main>
    </div>
  );
}


export default App;
