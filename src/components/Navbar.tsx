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
    { name: 'System', path: '/system' },
    { name: 'Science', path: '/science' },
    { name: 'About', path: '/about' },
  ];

  const navStyle = isScrolled 
    ? 'bg-cream/95 backdrop-blur-md border-b border-ink/5 pt-0' 
    : isHome ? 'bg-transparent pt-4' : 'bg-cream/90 backdrop-blur-sm border-b border-ink/5 pt-0';

  const textStyle = isScrolled || !isHome ? 'text-ink' : 'text-cream-deep';
  const subTextStyle = isScrolled || !isHome ? 'text-ink/60' : 'text-cream-deep/40';
  const linkStyle = isScrolled || !isHome ? 'text-ink/70 hover:text-gold' : 'text-cream-deep/60 hover:text-gold-bright';
  const tagStyle = isScrolled || !isHome ? 'text-ink/40 border-ink/10' : 'text-cream-deep/30 border-cream-deep/10';
  const btnStyle = isScrolled || !isHome 
    ? 'border-ink text-ink hover:bg-ink hover:text-cream' 
    : 'border-cream-deep/30 text-cream-deep hover:border-gold-bright hover:text-gold-bright transition-all duration-300';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 h-20 flex items-center justify-between ${navStyle}`}>
      <Link to="/" className="flex flex-col relative z-50">
        <span className={`font-serif text-xl tracking-[3px] transition-colors duration-300 flex items-baseline ${textStyle}`}>
          REJO<b className="text-gold font-medium ml-0.5">DERMA</b>
        </span>
        <span className={`font-mono text-[9px] uppercase tracking-[2.5px] mt-0.5 transition-colors duration-300 ${subTextStyle}`}>
          Korean Clinical Skincare
        </span>
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

      <div className="flex items-center gap-4 md:gap-6 relative z-50">
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
          className={`md:hidden p-2 transition-colors duration-300 ${isScrolled || !isHome || isMobileMenuOpen ? 'text-ink' : 'text-cream-deep'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-cream z-40 flex flex-col pt-[100px] px-[32px] md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-[32px]">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    className="font-serif text-[clamp(32px,8vw,42px)] text-ink hover:text-gold transition-colors flex items-center justify-between border-b border-ink/5 pb-[16px]"
                  >
                    {link.name}
                    <span className="font-mono text-[10px] tracking-widest text-gold opacity-50 uppercase">{link.path.replace('/', '')}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
              >
                  <Link
                    to="/contact"
                    className="mt-[16px] block w-full font-mono text-[11px] uppercase tracking-[3px] bg-ink text-cream text-center py-[20px] hover:bg-gold-bright transition-colors"
                  >
                    Clinical Inquiry
                  </Link>
              </motion.div>
            </div>
            
            <div className="mt-auto pb-[40px]">
              <p className="font-mono text-[9px] uppercase tracking-[2px] text-ink/40 mb-[16px] border-b border-ink/5 pb-[16px]">
                © 2025 Rejo Derma
              </p>
              <div className="flex gap-[24px]">
                 <a href="#" className="font-mono text-[9px] uppercase tracking-[2px] text-ink/70 hover:text-gold transition-colors">Instagram</a>
                 <a href="#" className="font-mono text-[9px] uppercase tracking-[2px] text-ink/70 hover:text-gold transition-colors">Facebook</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
