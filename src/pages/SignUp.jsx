import { useEffect } from 'react';
import Navbar from '@/sections/Navbar';
import Cubes from '@/components/Cubes';

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto">
          <div className="relative h-[600px] rounded-2xl border border-border-subtle overflow-hidden flex items-center justify-center bg-bg-secondary">
            <Cubes
              gridSize={10}
              maxAngle={50}
              radius={4}
              borderStyle="2px dashed #5227FF"
              faceColor="#1a1a2e"
              rippleColor="#ff6b6b"
              rippleSpeed={1.5}
              autoAnimate
              rippleOnClick
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="px-10 sm:px-12 py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-bg-primary/90 via-bg-card/85 to-bg-primary/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(2,6,23,0.65)]">
                <p className="text-xl sm:text-2xl text-white font-semibold tracking-[0.18em] uppercase text-center">coming soon</p>
                <p className="text-xs sm:text-sm text-text-secondary mt-2 text-center">Sign-up is opening very soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
