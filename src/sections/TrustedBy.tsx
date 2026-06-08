import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '7+', label: 'Years Experience' },
  { number: '542+', label: 'Clients Served' },
  { number: '30+', label: 'Locations Covered' },
  { number: '1 Day', label: 'Avg. Response Time' },
];

export default function TrustedBy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const children = sectionRef.current!.querySelectorAll(':scope > div');
      gsap.fromTo(
        children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-[#0A1628] py-10">
      <div
        ref={sectionRef}
        className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="text-center relative"
          >
            <div className="font-display font-bold text-[2.5rem] text-[#D4A853] mb-1">
              {stat.number}
            </div>
            <div className="font-sans text-sm text-[rgba(240,237,232,0.7)]">
              {stat.label}
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[rgba(212,168,83,0.2)]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
