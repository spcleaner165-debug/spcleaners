import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const els = contentRef.current.children;
    gsap.from(els, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 0.3,
    });
  }, []);

  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-cleaning.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.4) 50%, transparent 80%)',
        }}
      />
      <div className="absolute inset-0 bg-[rgba(10,22,40,0.15)]" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-[1200px] mx-auto w-full px-8"
        style={{ paddingLeft: '8%' }}
      >
        <span className="overline block mb-4">
          PROFESSIONAL CLEANING SERVICES
        </span>

        <h1
          className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] text-[#F0EDE8] mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Spotless Spaces,
          <br />
          Happy Faces
        </h1>

        <p className="font-sans text-[1.15rem] text-[rgba(240,237,232,0.85)] max-w-[480px] leading-[1.7] mb-8">
          Premium residential and commercial cleaning services across the UK.
          Trusted by 500+ homes and businesses.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#D4A853] text-[#0A1628] px-8 py-3.5 rounded-full font-sans font-semibold text-base transition-all duration-300 hover:bg-[#C49A4A] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,168,83,0.3)]"
          >
            Get a Free Quote
          </button>

          <button
            onClick={scrollToServices}
            className="text-[#F0EDE8] font-sans font-medium text-base underline underline-offset-4 hover:text-[#D4A853] transition-colors duration-300 ml-2"
          >
            View Our Services →
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-chevron text-[rgba(240,237,232,0.6)] hover:text-[#D4A853] transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
