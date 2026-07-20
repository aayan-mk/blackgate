import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import MetricsSection from './sections/MetricsSection';
import CoreStrengthsSection from './sections/CoreStrengthsSection';
import WorldMapSection from './sections/WorldMapSection';
import DifferenceSection from './sections/DifferenceSection';
import UncompromiseSection from './sections/UncompromiseSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <MetricsSection />
        <CoreStrengthsSection />
        <WorldMapSection />
        <DifferenceSection />
        <UncompromiseSection />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
