import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const locations = [
  'London',
  'Surrey',
  'Hertfordshire',
  'Slough',
  'Watford',
  'Berkshire',
  'Oxfordshire',
  'Buckinghamshire',
];

export default function AreasWeCover() {
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll(':scope > div');
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#FAFAF7] py-20">
      <div className="max-w-[800px] mx-auto px-8">
        {/* Intro */}
        <div ref={introRef} className="text-center mb-10">
          <span className="overline block mb-4">COVERAGE</span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#0A1628] mb-4">
            Areas We Serve
          </h2>
          <p className="font-sans text-base text-[#5A5A5A]">
            We proudly provide cleaning services across Greater London and
            surrounding counties.
          </p>
        </div>

        {/* Location Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {locations.map((loc) => (
            <div
              key={loc}
              className="bg-white border border-[#E5E5E5] rounded-full py-3 px-4 text-center font-sans font-medium text-sm text-[#0A1628] transition-all duration-300 hover:border-[#D4A853] hover:text-[#D4A853] hover:scale-[1.03] cursor-default"
            >
              {loc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
