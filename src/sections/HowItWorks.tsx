import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Book Online',
    description:
      'Fill out our quick quote form or give us a call. We\'ll confirm your booking within minutes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Clean',
    description:
      'Our trained professionals arrive on time with all equipment and supplies. Sit back and relax.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v4H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4V5a3 3 0 0 0-3-3z" />
        <path d="M12 14v8" />
        <path d="M9 22h6" />
        <path d="M10 5h4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'You Enjoy',
    description:
      'Come back to a spotless, fresh space. We guarantee your satisfaction every single time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4 8 4v14" />
        <path d="M9 10h.01" />
        <path d="M15 10h.01" />
        <path d="M12 15l-1.5-1.5a2.12 2.12 0 0 1 3 3L12 21l-4.5-4.5a2.12 2.12 0 0 1 3-3z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (introRef.current) {
        const introChildren = introRef.current.querySelectorAll(':scope > *');
        gsap.fromTo(
          introChildren,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
      if (stepsRef.current) {
        const steps = stepsRef.current.querySelectorAll(':scope > div');
        gsap.fromTo(
          steps,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-[#FAFAF7] py-20">
      <div className="max-w-[1000px] mx-auto px-8">
        {/* Intro */}
        <div ref={introRef} className="text-center mb-16">
          <span className="overline block mb-4">SIMPLE PROCESS</span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#0A1628]">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Dashed connecting line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] border-t-2 border-dashed border-[rgba(212,168,83,0.3)]" />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              {/* Large background number */}
              <div className="font-display font-bold text-[3.5rem] text-[rgba(212,168,83,0.25)] leading-none select-none mb-4">
                {step.number}
              </div>

              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-[#0A1628] flex items-center justify-center mx-auto mb-4 relative z-10">
                {step.icon}
              </div>

              <h3 className="font-sans font-semibold text-[1.25rem] text-[#0A1628] mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-[0.95rem] text-[#5A5A5A] leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
