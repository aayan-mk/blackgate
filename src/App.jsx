import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import { TextMarquee } from './components/TextMarquee';
import ServicesSection from './sections/ServicesSection';
import MetricsSection from './sections/MetricsSection';
import ProcessSection from './sections/ProcessSection';
import CoreStrengthsSection from './sections/CoreStrengthsSection';
import WorldMapSection from './sections/WorldMapSection';
import DifferenceSection from './sections/DifferenceSection';
import UncompromiseSection from './sections/UncompromiseSection';
import TestimonialsSection from './sections/TestimonialsSection';
import Footer from './sections/Footer';
import { BackToTop } from './components/BackToTop';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <TextMarquee />
        <ServicesSection />
        <MetricsSection />
        <ProcessSection />
        <CoreStrengthsSection />
        <WorldMapSection />
        <DifferenceSection />
        <UncompromiseSection />
        <TestimonialsSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
