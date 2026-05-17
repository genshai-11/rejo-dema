import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Routine', path: '/routine' },
    { name: 'Science', path: '/science' },
    { name: 'About', path: '/about' },
  ];

  const navStyle = isScrolled 
    ? 'bg-cream/95 backdrop-blur-md border-b border-ink/5 pt-0' 
    : isHome 
      ? 'bg-cream/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none pt-0 md:pt-4' 
      : 'bg-cream/90 backdrop-blur-sm border-b border-ink/5 pt-0';

  const textStyle = isScrolled || !isHome ? 'text-ink' : 'text-ink md:text-cream-deep';
  const subTextStyle = isScrolled || !isHome ? 'text-ink/60' : 'text-ink/60 md:text-cream-deep/40';
  const linkStyle = isScrolled || !isHome ? 'text-ink/70 hover:text-gold' : 'text-ink/70 md:text-cream-deep/60 hover:text-gold';
  const tagStyle = isScrolled || !isHome ? 'text-ink/40 border-ink/10' : 'text-ink/40 md:text-cream-deep/30 border-ink/10 md:border-cream-deep/10';
  const btnStyle = isScrolled || !isHome 
    ? 'border-ink text-ink hover:bg-ink hover:text-cream' 
    : 'border-ink md:border-cream-deep/30 text-ink md:text-cream-deep hover:bg-ink md:hover:bg-transparent hover:text-cream md:hover:text-gold-bright transition-all duration-300';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-5 md:px-12 h-20 flex items-center justify-between ${navStyle}`}>
      <Link to="/" className="flex items-center relative z-50">
        <img 
          src="/logo/Logo Rejo Derma.jpg" 
          alt="Rejo Derma" 
          className="h-[27px] md:h-[32px] w-auto object-contain"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`font-mono text-[10px] uppercase tracking-[2.5px] transition-all duration-300 border-b border-transparent hover:border-gold pb-0.5 ${linkStyle} ${location.pathname === link.path ? 'border-gold !text-gold' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 md:gap-6 relative z-[10000]">
        <span className={`hidden lg:block font-mono text-[9px] uppercase tracking-[2px] border-l border-current pl-6 transition-colors duration-300 ${tagStyle}`}>
          Made in Korea
        </span>
        <Link 
          to="/contact"
          className={`hidden md:block font-mono text-[10px] uppercase tracking-[2px] px-6 py-2.5 border ${btnStyle}`}
        >
          Contact
        </Link>
        <button 
          className={`md:hidden p-2 transition-colors duration-300 ${isScrolled || !isHome || isMobileMenuOpen ? 'text-ink' : 'text-ink'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-cream z-[9999] flex flex-col pt-[120px] px-[32px] md:hidden h-[100dvh] w-screen"
          >
            {/* Close button inside overlay to ensure it's always visible/clickable if needed, 
                though the main one is z-50 and relative, we should ensure the overlay doesn't block it 
                or move the toggle into the overlay. Here we keep the main one at z-50 but the overlay at 9999 
                actually means we need to move the toggle logic or z-index. 
                Correction: Let's make the overlay z-[9998] and the toggle z-[9999] so it's always on top. */}
            
            <div className="flex flex-col gap-[32px] overflow-y-auto pb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    className="font-serif text-[clamp(42px,10vw,52px)] text-ink hover:text-gold transition-colors flex items-center justify-between border-b border-ink/10 pb-[16px]"
                  >
                    {link.name}
                    <span className="font-mono text-[10px] tracking-[4px] text-gold opacity-50 uppercase">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 }}
              >
                  <Link
                    to="/contact"
                    className="mt-[20px] block w-full font-mono text-[12px] uppercase tracking-[4px] bg-ink text-cream text-center py-[24px] hover:bg-gold-bright transition-colors"
                  >
                    Partner Inquiry
                  </Link>
              </motion.div>
            </div>
            
            <div className="mt-auto pb-[40px] border-t border-ink/5 pt-8">
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[9px] uppercase tracking-[3px] text-ink/30">
                  (c) 2026 Rejo Derma — Clinical Range
                </p>
                <div className="font-mono text-[10px] uppercase tracking-[2px] text-gold">
                  Korean Clinical Skincare / Made in Korea
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
