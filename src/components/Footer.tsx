import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-deep py-12 md:py-20 px-6 md:px-12 border-t border-cream-deep/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-16 mb-12 md:mb-20 max-w-7xl mx-auto">
        <div>
          <span className="font-serif text-3xl tracking-[3px] text-cream">
            REJO<b className="text-gold-bright font-medium">DERMA</b>
          </span>
          <span className="block font-mono text-[9px] uppercase tracking-[2.5px] text-cream-deep/60 mt-3 font-semibold">
            한국 임상 스킨케어 · Korean Clinical Skincare
          </span>
          <p className="font-serif italic text-lg text-cream-deep/60 mt-5 max-w-xs">
            "Precision Skin. Pure Science."
          </p>
          <div className="mt-8 space-y-2 text-[13px] text-cream-deep/50 leading-relaxed">
            <p>Information website only — products not sold here.</p>
            <p>Contact via official social media channels.</p>
            <p>© 2025 Rejo Derma · Made in Korea</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:contents gap-8">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[3px] text-gold-bright mb-6 font-bold">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/products" className="text-[13px] md:text-[15px] text-cream-deep/70 hover:text-gold-bright transition-colors block border-b border-cream-deep/10 pb-2">
                  LumiGlow™ Mask
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[13px] md:text-[15px] text-cream-deep/70 hover:text-gold-bright transition-colors block border-b border-cream-deep/10 pb-2">
                  Soothing Mask
                </Link>
              </li>
              <li>
                <Link to="/system" className="text-[13px] md:text-[15px] text-cream-deep/70 hover:text-gold-bright transition-colors block border-b border-cream-deep/10 pb-2">
                  Brightening Protocol
                </Link>
              </li>
              <li>
                <Link to="/system" className="text-[13px] md:text-[15px] text-cream-deep/70 hover:text-gold-bright transition-colors block border-b border-cream-deep/10 pb-2">
                  Recovery Protocol
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[3px] text-gold-bright mb-6 font-bold">Navigate</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/system" className="text-[13px] md:text-[15px] text-cream-deep/70 hover:text-gold-bright transition-colors block border-b border-cream-deep/10 pb-2">System</Link>
              </li>
              <li>
                <Link to="/science" className="text-[13px] md:text-[15px] text-cream-deep/70 hover:text-gold-bright transition-colors block border-b border-cream-deep/10 pb-2">Science</Link>
              </li>
              <li>
                <Link to="/about" className="text-[13px] md:text-[15px] text-cream-deep/70 hover:text-gold-bright transition-colors block border-b border-cream-deep/10 pb-2">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[13px] md:text-[15px] text-cream-deep/70 hover:text-gold-bright transition-colors block border-b border-cream-deep/10 pb-2">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream-deep/10 gap-6 max-w-7xl mx-auto text-center md:text-left">
        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-cream-deep/40 font-semibold leading-relaxed">
          © 2025 Rejo Derma · Info Only · No E-Commerce
        </span>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {['Made in Korea', 'Dermatologist Tested', 'Cruelty Free'].map((item) => (
            <span key={item} className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest text-cream-deep/50 px-3 py-1.5 md:px-4 md:py-2 border border-cream-deep/20 rounded-sm">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
