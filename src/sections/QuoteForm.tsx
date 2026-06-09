import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, Check, Loader2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ============================================
// REPLACE THIS WITH YOUR OWN WEB3FORMS KEY
// Get your free key at: https://web3forms.com/
// ============================================
const WEB3FORMS_KEY = '4902963c-da75-4ebc-85e8-e25f0b4577d1';

export default function QuoteForm() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'End of Tenancy',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
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
        gsap.fromTo(
          rightRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.15,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const data = new FormData();
    data.append('access_key', WEB3FORMS_KEY);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('service', formData.service);
    data.append('message', formData.message);
    data.append('subject', 'New Cleaning Quote Request - SparklePro');
    data.append('from_name', 'SparklePro Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: 'End of Tenancy', message: '' });
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    'w-full bg-[#FAFAF7] border border-[#E5E5E5] rounded-[10px] px-4 py-3.5 font-sans text-sm text-[#1A1A1A] placeholder:text-[#999] transition-all duration-200 focus:border-[#D4A853] focus:outline-none focus:shadow-[0_0_0_3px_rgba(212,168,83,0.15)]';

  return (
    <section id="contact" className="bg-[#FAFAF7] py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#F5F0EB] rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Column */}
            <div ref={leftRef} className="lg:w-[45%]">
              <span className="overline block mb-4">GET IN TOUCH</span>
              <h2 className="font-display font-bold text-[2.5rem] text-[#0A1628] mb-4">
                Request a Free Quote
              </h2>
              <p className="font-sans text-base text-[#5A5A5A] leading-[1.7] mb-8">
                Tell us about your cleaning needs and we'll get back to you
                within 24 hours with a tailored quote.
              </p>

              <ul className="space-y-3 mb-8">
                {['Free, no-obligation quotes', 'Competitive pricing guaranteed', 'Same-week availability'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[rgba(212,168,83,0.15)] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#D4A853]" />
                      </span>
                      <span className="font-sans text-sm text-[#1A1A1A]">{item}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4A853]" />
                  <span className="font-sans text-sm text-[#0A1628]">+44 7832 067803</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4A853]" />
                  <span className="font-sans text-sm text-[#0A1628]">spcleaner165@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div ref={rightRef} className="lg:w-[50%] flex-1">
              <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[rgba(212,168,83,0.15)] flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-[#D4A853]" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#0A1628] mb-2">
                      Thank You!
                    </h3>
                    <p className="font-sans text-sm text-[#5A5A5A]">
                      We've received your request and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-[10px] p-3 text-red-600 text-sm font-sans">
                        {error}
                      </div>
                    )}
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option>End of Tenancy</option>
                      <option>Pre-Tenancy Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Sparkle Cleaning</option>
                      <option>General Cleaning</option>
                      <option>Carpet Cleaning</option>
                      <option>Restaurant Cleaning</option>
                      <option>After Building Cleaning</option>
                      <option>School Cleaning</option>
                      <option>Hotel Cleaning</option>
                      <option>Hostel Cleaning</option>
                      <option>Commercial Carpet Cleaning</option>
                      <option>Oven Cleaning</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Tell us about your cleaning needs..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#0A1628] text-[#F0EDE8] py-4 rounded-[10px] font-sans font-semibold text-sm transition-all duration-300 hover:bg-[#1E3A5F] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Request'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
