import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(250,250,247,0.95)] backdrop-blur-[12px] shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full px-8 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => scrollToSection('#home')}
          className={`flex items-center gap-2 font-display font-bold text-2xl transition-colors duration-300 ${
            scrolled ? 'text-[#0A1628]' : 'text-[#F0EDE8]'
          }`}
        >
          <Sparkles className="w-5 h-5 text-[#D4A853]" />
          SparklePro
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className={`font-sans font-medium text-[0.9rem] tracking-[0.02em] transition-colors duration-300 hover:text-[#D4A853] ${
                scrolled ? 'text-[#0A1628]' : 'text-[#F0EDE8]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection('#contact')}
          className="hidden md:block bg-[#D4A853] text-[#0A1628] px-6 py-2.5 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:bg-[#C49A4A] hover:scale-[1.03]"
        >
          Get a Quote
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? 'text-[#0A1628]' : 'text-[#F0EDE8]'
          }`}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-[#F5F0EB] shadow-lg py-6 px-8">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-[#0A1628] font-sans font-medium text-base text-left hover:text-[#D4A853] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#D4A853] text-[#0A1628] px-6 py-2.5 rounded-full font-sans font-semibold text-sm mt-2 w-fit"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
