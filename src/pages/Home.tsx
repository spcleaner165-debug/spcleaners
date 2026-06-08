import { useEffect } from 'react';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import TrustedBy from '../sections/TrustedBy';
import Services from '../sections/Services';
import QuoteForm from '../sections/QuoteForm';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import AreasWeCover from '../sections/AreasWeCover';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import WhatsAppButton from '../sections/WhatsAppButton';

export default function Home() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    let lenis: any;
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };
    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-[100dvh]">
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <QuoteForm />
        <HowItWorks />
        <Testimonials />
        <AreasWeCover />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
