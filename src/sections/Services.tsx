import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'End of Tenancy Cleaning',
    description:
      'SparklePro specialises in end-of-tenancy cleaning services across the UK. Our professional cleaners ensure every corner of your property is spotless, helping you secure your deposit return. We cover everything from deep cleaning carpets to scrubbing kitchen appliances, making your move-out stress-free and seamless.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 10h.01" /><path d="M15 10h.01" /><circle cx="12" cy="15" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Pre-Tenancy Cleaning',
    description:
      'Prepare your property for new tenants with our comprehensive pre-tenancy cleaning services. SparklePro provides a meticulous clean that meets the highest standards, ensuring a fresh and welcoming environment. Our skilled cleaners tackle every area, from dusting and polishing to sanitising bathrooms and kitchens.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Deep Cleaning Services',
    description:
      "Experience a top-to-bottom clean with SparklePro's deep cleaning services. Ideal for spring cleaning or after a big event, our expert team uses state-of-the-art equipment and high-quality products to tackle grime, dust, and allergens. From hard-to-reach areas to hidden nooks, we leave no surface untouched.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 4.88L20 8l-3.6 3.68L17.6 18 12 15.2 6.4 18l1.2-6.32L4 8l5.6-1.12z" />
      </svg>
    ),
  },
  {
    title: 'Sparkle Cleaning Services',
    description:
      "Bring the shine back to your property with SparklePro's sparkle cleaning services. Perfect for post-renovation cleanups or before special events, our sparkle clean guarantees a spotless and gleaming space. Our professional cleaners meticulously polish surfaces, clean windows, and ensure your property sparkles from top to bottom.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'General Cleaning Services',
    description:
      "Keep your home or office consistently clean with SparklePro's general cleaning services. We offer flexible cleaning schedules tailored to your needs, ensuring a clean and inviting environment. Our reliable team handles all general cleaning tasks, including dusting, vacuuming, mopping, and sanitising.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
      </svg>
    ),
  },
  {
    title: 'Domestic Carpet Cleaning',
    description:
      "Restore the beauty of your carpets with SparklePro's domestic carpet cleaning services. Our trained professionals use advanced carpet cleaning techniques to remove stains, dirt, and allergens, extending the life of your carpets. Whether it's a routine clean or a deep carpet refresh, we deliver results you can see and feel.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19h16" /><path d="M4 15c1.5-2 3-4 4-4s2.5 2 4 2 2.5-2 4-2 2.5 2 4 4" /><path d="M4 11c1.5-2 3-4 4-4s2.5 2 4 2 2.5-2 4-2 2.5 2 4 4" /><path d="M4 7c1.5-2 3-4 4-4s2.5 2 4 2 2.5-2 4-2 2.5 2 4 4" />
      </svg>
    ),
  },
  {
    title: 'Restaurant Cleaning Services',
    description:
      "Keep your restaurant spotless with SparklePro's restaurant cleaning services. We understand the importance of hygiene in the food industry, and our team is equipped to handle everything from kitchen deep cleans to front-of-house tidying. Ensure a clean and safe dining environment for your customers and staff.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0a7 7 0 0 1-7 7v0" />
      </svg>
    ),
  },
  {
    title: 'After Building Cleaning',
    description:
      "SparklePro offers thorough after-building cleaning services to ensure your property is clean and ready for use. Our team efficiently removes construction dust, debris, and waste, leaving your newly renovated or constructed space spotless. Trust us to handle the mess, so you can enjoy your new space without the hassle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M5 20v-8l7-7 7 7v8" /><path d="M9 17v-3h6v3" /><path d="M10 7V4h4v3" />
      </svg>
    ),
  },
  {
    title: 'School Cleaning Service',
    description:
      "Maintain a safe and clean environment for students and staff with SparklePro's school cleaning services. Our team is trained to handle the unique needs of educational institutions, ensuring high standards of cleanliness and hygiene. From classrooms and common areas to restrooms and cafeterias, we create a clean and healthy learning environment.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: 'Hotel Cleaning',
    description:
      "Deliver exceptional guest experiences with SparklePro's hotel cleaning services. We understand the importance of cleanliness in the hospitality industry, and our team is committed to maintaining high standards in guest rooms, lobbies, and dining areas. Our professional cleaners ensure a pristine and welcoming atmosphere.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /><path d="M9 16v-4" /><path d="M12 12v-2" /><path d="M15 12v-4" /><path d="M12 6V4" />
      </svg>
    ),
  },
  {
    title: 'Hostel Cleaning',
    description:
      "Create a comfortable and clean living space with SparklePro's hostel cleaning services. We cater to the unique needs of hostels, providing regular cleaning of rooms, common areas, kitchens, and bathrooms. Our goal is to ensure a clean and hygienic environment, making your hostel a pleasant place for residents.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M9 21v-6h6v6" /><path d="M10 9h4" /><path d="M10 13h4" />
      </svg>
    ),
  },
  {
    title: 'Commercial Carpet Cleaning',
    description:
      "Ensure a professional appearance for your business with SparklePro's commercial carpet cleaning services. We understand the importance of maintaining a clean work environment, and our team is equipped to handle all types of commercial carpet cleaning needs. Using industrial-grade equipment, we remove deep-seated dirt, stains, and odours.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 6h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

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
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(':scope > div');
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section id="services" ref={sectionRef} className="bg-[#FAFAF7] py-20 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[rgba(212,168,83,0.25)] animate-float"
            style={{
              width: `${3 + (i % 3) * 1.5}px`,
              height: `${3 + (i % 3) * 1.5}px`,
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDuration: `${12 + (i % 5) * 3}s`,
              animationDelay: `${(i * 0.7) % 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        {/* Intro */}
        <div ref={introRef} className="text-center max-w-[640px] mx-auto mb-12">
          <span className="overline block mb-4">WHAT WE OFFER</span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#0A1628] mb-4">
            Our Cleaning Services
          </h2>
          <p className="font-sans text-base text-[#5A5A5A] max-w-[520px] mx-auto leading-[1.7]">
            From deep cleans to regular maintenance, we handle every cleaning need with precision and care.
          </p>
        </div>

        {/* Service Cards Grid - 12 services */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] group"
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(212,168,83,0.12)] flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-sans font-semibold text-[1.2rem] text-[#0A1628] mb-2">
                {service.title}
              </h3>
              <p className="font-sans text-[0.95rem] text-[#5A5A5A] leading-[1.6] mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1 font-sans font-medium text-sm text-[#D4A853] group-hover:translate-x-1 transition-transform duration-300">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
