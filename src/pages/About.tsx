import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ShieldCheck, Microscope, Database } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ProductImage from '../components/ProductImage';
import { brandVisuals, launchProducts, orderedProducts, productGalleryMoments, productsByName } from '../data/products';

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroProgress, [0, 1], [-40, 40]);

  return (
    <div className="bg-cream min-h-screen overflow-x-hidden">
      {/* Hero Section: The Philosophy */}
      <div className="pt-[110px] md:pt-[140px] px-6 md:px-[52px] relative overflow-hidden">
        {/* Background Layer: Blueprint Text */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03] select-none z-0">
          <div className="absolute top-[20%] left-[-2%] font-serif text-[28vw] leading-none whitespace-nowrap tracking-[-0.05em] uppercase">
            Architecture
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pb-[100px] border-b border-ink/5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] lg:gap-[100px]">
            <FadeIn>
              <div className="font-mono text-[9px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[20px]">
                <div className="w-[20px] h-[1px] bg-gold"></div>
                01. Formulation Philosophy
              </div>
              <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[0.92] tracking-[-2px] text-ink mb-[32px]">
                Skincare built as <br />
                <em className="text-gold italic font-serif">clinical architecture.</em>
              </h1>
              <p className="text-[17px] md:text-[19px] text-ink/75 leading-[1.8] mb-[40px] max-w-[620px] font-serif italic border-l-2 border-gold/30 pl-8">
                "We believe radiance is not a lucky event, but a predictable outcome of precise routine logic. Rejo Derma is the removal of guesswork from the Korean glow story."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[24px] min-h-[480px]">
                <div className="relative group overflow-hidden border border-ink/5 shadow-2xl bg-white">
                   <img 
                    src={launchProducts[0].sceneHeroPath || launchProducts[0].assetPath} 
                    className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-1000" 
                    alt="Clinical Presentation"
                   />
                   <div className="absolute bottom-6 left-6 font-mono text-[8px] text-white/60 tracking-[2px] uppercase bg-ink/40 backdrop-blur-sm px-3 py-1">System.Focus // 01</div>
                </div>
                <div className="grid grid-rows-2 gap-[24px]">
                  <div className="relative group overflow-hidden border border-ink/5 bg-white">
                    <img 
                      src={launchProducts[1].sceneHeroPath || launchProducts[1].assetPath} 
                      className="w-full h-full object-contain md:object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" 
                      alt="Product Node"
                    />
                  </div>
                  <div className="border border-ink/5 bg-gold-soft/30 p-[32px] flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute -right-8 -bottom-8 font-serif text-[120px] text-gold/5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                      {orderedProducts.length}
                    </div>
                    <div className="font-mono text-[8.5px] uppercase tracking-[3px] text-ink/35 relative z-10">Inventory Scope</div>
                    <div className="relative z-10">
                       <div className="font-serif text-[42px] leading-none text-ink mb-4">{orderedProducts.length}</div>
                       <p className="text-[13px] leading-[1.7] text-ink/60 max-w-[18ch]">
                        Specialized formulas structured into one connected routine.
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-col justify-center">
               <div className="space-y-[48px] lg:pt-[100px]">
                {[
                  {
                    icon: Database,
                    label: 'Routine Architecture',
                    body: 'Every formula is treated as a structural node. When roles are clear, results are repeatable.',
                  },
                  {
                    icon: Microscope,
                    label: 'Precision Sourcing',
                    body: 'We partner with specialized labs across Korea to ensure every active ingredient meets clinical-grade purity benchmarks.',
                  },
                  {
                    icon: ShieldCheck,
                    label: 'Barrier Continuity',
                    body: 'Brightening progress should never come at the cost of stability. Recovery is integrated into every protocol step.',
                  },
                ].map((item, idx) => (
                  <div key={item.label} className="relative pl-[40px] group">
                    <div className="absolute left-0 top-1 text-gold/30 group-hover:text-gold transition-colors duration-500">
                      <item.icon size={24} strokeWidth={1.2} />
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-[3px] text-gold mb-[12px]">Logic.0{idx + 1}</div>
                    <h3 className="font-serif text-[24px] text-ink mb-[12px]">{item.label}</h3>
                    <p className="text-[14.5px] leading-[1.8] text-ink/60 max-w-[420px]">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-[80px] pt-[40px] border-t border-ink/5 relative">
                 <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-ink/10 vertical-text h-full hidden md:flex items-center">
                   Rejo.Logic // Clinical Guide
                 </div>
                 <p className="text-[15.5px] text-ink/70 leading-[1.9] max-w-[480px]">
                  Rejo Derma is a response to skincare complexity. We have distilled the Korean range into five clear steps, allowing the user to focus on the ritual rather than the research.
                 </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Section 2: Clinical Infrastructure */}
      <section className="py-[120px] px-6 md:px-[52px] bg-cream-dark relative">
        <div className="max-w-7xl mx-auto">
          <div ref={heroRef} className="mb-[100px]">
            <FadeIn className="relative overflow-hidden border border-ink/10 aspect-[4/5] sm:aspect-[16/9] md:aspect-[3.2/1] bg-white group shadow-2xl">
              <motion.img
                style={{ y: heroY }}
                src={brandVisuals.aboutArchitecture}
                alt="Clinical Infrastructure"
                className="absolute inset-0 h-[115%] w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-white/95 via-white/90 sm:via-white/75 to-white/30 sm:to-transparent" />
              <div className="relative z-10 max-w-[620px] p-8 sm:p-[40px] md:p-[80px] h-full flex flex-col justify-center">
                <div className="font-mono text-[9px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[20px]">
                  <div className="w-[20px] h-[1px] bg-gold"></div>
                  02. Clinical Network
                </div>
                <h3 className="font-serif text-[clamp(32px,4vw,52px)] text-ink leading-[0.98] mb-[24px] tracking-[-1px]">
                  Infrastructure built <br />
                  <em className="text-gold italic font-serif">for range depth.</em>
                </h3>
                <p className="text-[16px] text-ink/65 leading-[1.85] max-w-[460px]">
                  We operate through a decentralized network of specialty laboratories, ensuring each formula is developed by the experts most qualified for that specific skin role.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-[60px] items-start">
            <FadeIn>
               <div className="max-w-[800px]">
                <div className="font-mono text-[9.5px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[24px]">
                  <div className="w-[20px] h-[1px] bg-gold"></div>
                  The Research Philosophy
                </div>
                <h2 className="font-serif text-[clamp(34px,4.5vw,52px)] leading-[0.95] text-ink mb-[32px] tracking-[-1.5px] uppercase">
                  Precision <br />
                  <em className="text-gold italic font-serif">Sourcing.</em>
                </h2>
                <p className="text-[16px] text-ink/68 leading-[1.9] mb-[48px] max-w-[580px]">
                  Our partners represent the peak of Korean clinical expertise. We prioritize specialized laboratories that focus on specific skin roles—from peptide synthesis to barrier recovery—ensuring every formula in the Rejo Derma range meets clinical-grade purity and stability benchmarks.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-[32px] relative overflow-hidden">
               {/* Background Logic Text */}
               <div className="absolute top-[30%] left-0 font-serif text-[18vw] leading-none text-ink/[0.02] uppercase pointer-events-none select-none z-0">
                  Systems
                </div>

              {productGalleryMoments.map((moment, index) => (
                <FadeIn key={moment.title} delay={index * 0.1} className="border border-ink/10 bg-white overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700">
                  <div className="grid grid-cols-3 gap-[1px] bg-ink/5 overflow-hidden">
                    {moment.products.map((name) => {
                      const product = productsByName[name];
                      return (
                        <div key={product.slug} className="overflow-hidden bg-cream-dark/10">
                          <img 
                            src={product.sceneHeroPath || product.assetPath} 
                            alt={product.displayName}
                            className="aspect-[4/5] object-contain md:object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-[32px] md:p-[48px] relative">
                    <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-ink/5">SYSTEM.V0{index + 1}</div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
                      <div>
                        <div className="font-mono text-[8px] uppercase tracking-[3px] text-gold/40 mb-[16px]">
                          Routine Integration Family
                        </div>
                        <h3 className="font-serif text-[32px] text-ink mb-[12px] tracking-[-1px] group-hover:text-gold transition-colors">{moment.title}</h3>
                        <p className="text-[14.5px] text-ink/60 leading-[1.8] max-w-[480px] italic">"{moment.body}"</p>
                      </div>
                      <Link
                        to="/products"
                        className="inline-flex items-center gap-3 font-mono text-[9px] uppercase tracking-[3px] text-gold hover:text-ink transition-all group/link"
                      >
                        Explore System
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
