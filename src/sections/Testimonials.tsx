import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      'SparklePro transformed our office. The team was punctual, thorough, and incredibly professional. Our workspace has never looked better.',
    name: 'Sarah Mitchell',
    role: 'Office Manager, TechFlow Ltd',
    avatar: '/images/avatar1.jpg',
  },
  {
    quote:
      "After a major renovation, I didn't know where to start. SparklePro handled the post-build cleanup flawlessly. Highly recommend!",
    name: 'James Cooper',
    role: 'Homeowner, Manchester',
    avatar: '/images/avatar2.jpg',
  },
  {
    quote:
      "We use SparklePro for our end-of-tenancy cleans. They've never let us down — every property passes inspection with flying colours.",
    name: 'Emily Watson',
    role: 'Lettings Agent, Urban Homes',
    avatar: '/images/avatar3.jpg',
  },
  {
    quote:
      'The deep clean service was exceptional. They got into every nook and cranny. Worth every penny.',
    name: 'David Chen',
    role: 'Restaurant Owner, Birmingham',
    avatar: '/images/avatar4.jpg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (introRef.current) {
        const children = introRef.current.querySelectorAll(':scope > *');
        gsap.fromTo(
          children,
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
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Intro */}
        <div ref={introRef} className="text-center mb-12">
          <span className="overline block mb-4">TESTIMONIALS</span>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#F0EDE8] mb-4">
            What Our Clients Say
          </h2>
          <p className="font-sans text-base text-[rgba(240,237,232,0.7)] max-w-[520px] mx-auto">
            Don't just take our word for it — hear from the hundreds of happy
            customers we've served.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-[rgba(255,255,255,0.06)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="w-4 h-4 fill-[#D4A853] text-[#D4A853]"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="font-display italic text-[1.15rem] text-[#F0EDE8] leading-[1.7] mb-6">
                      "{t.quote}"
                    </p>

                    {/* Avatar + Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full border-2 border-[#D4A853] object-cover"
                      />
                      <div>
                        <div className="font-sans font-semibold text-base text-[#F0EDE8]">
                          {t.name}
                        </div>
                        <div className="font-sans text-sm text-[rgba(240,237,232,0.6)]">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[rgba(212,168,83,0.4)] text-[#D4A853] flex items-center justify-center transition-all duration-300 hover:bg-[#D4A853] hover:text-[#0A1628]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[rgba(212,168,83,0.4)] text-[#D4A853] flex items-center justify-center transition-all duration-300 hover:bg-[#D4A853] hover:text-[#0A1628]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile: dots indicator */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-[#D4A853] w-6'
                    : 'bg-[rgba(212,168,83,0.3)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
