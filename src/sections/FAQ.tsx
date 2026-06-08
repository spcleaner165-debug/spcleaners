import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What areas do you cover?',
    answer:
      'We provide cleaning services across Greater London, Surrey, Hertfordshire, Berkshire, Buckinghamshire, and Oxfordshire. If you\'re unsure whether we cover your area, please get in touch.',
  },
  {
    question: 'What cleaning services do you offer?',
    answer:
      'We offer a comprehensive range including end of tenancy cleaning, deep cleaning, carpet cleaning, commercial cleaning, after builders cleaning, and oven cleaning. We also provide bespoke cleaning packages.',
  },
  {
    question: 'Are your cleaning products safe?',
    answer:
      "Absolutely. We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and allergy sufferers. All products are biodegradable and cruelty-free.",
  },
  {
    question: 'How do I book a cleaning service?',
    answer:
      "Simply fill out our online quote form, give us a call, or send us a WhatsApp message. We'll confirm your booking and provide a tailored quote within 24 hours.",
  },
  {
    question: 'Do you bring your own equipment?',
    answer:
      "Yes, our team arrives fully equipped with all necessary cleaning supplies and professional-grade equipment. You don't need to provide anything.",
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      "We understand plans change. You can reschedule or cancel free of charge up to 24 hours before your scheduled cleaning. Cancellations within 24 hours may incur a small fee.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        const leftChildren = leftRef.current.querySelectorAll(':scope > *');
        gsap.fromTo(
          leftChildren,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
      if (rightRef.current) {
        const items = rightRef.current.querySelectorAll(':scope > .faq-item');
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F5F0EB] py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div ref={leftRef} className="lg:w-[35%]">
            <span className="overline block mb-4">FAQ</span>
            <h2 className="font-display font-bold text-[2.5rem] text-[#0A1628] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-base text-[#5A5A5A] leading-[1.7] mb-6">
              Have questions? We have answers. If you don't see what you're
              looking for, feel free to contact us.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-[#0A1628] text-[#0A1628] px-6 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:bg-[#0A1628] hover:text-[#F0EDE8]"
            >
              Contact Us
            </button>
          </div>

          {/* Right Column - Accordion */}
          <div ref={rightRef} className="lg:w-[60%] flex-1">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item bg-white rounded-xl mb-3 overflow-hidden transition-shadow duration-300 ${
                  openIndex === index ? 'open shadow-md' : ''
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-sans font-semibold text-base text-[#0A1628] pr-4">
                    {faq.question}
                  </span>
                  <span className="faq-toggle flex-shrink-0">
                    <Plus className="w-5 h-5 text-[#D4A853]" />
                  </span>
                </button>
                <div className="faq-answer px-6">
                  <p className="font-sans text-[0.95rem] text-[#5A5A5A] leading-[1.7]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
