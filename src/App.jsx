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
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <MetricsSection />
        <CoreStrengthsSection />
        <WorldMapSection />
        <DifferenceSection />
        <UncompromiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
