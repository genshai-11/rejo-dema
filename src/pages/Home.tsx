import { Link } from 'react-router-dom';
import { Activity, Droplets, FlaskConical, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import Hero from '../components/Hero';
import ProductImage from '../components/ProductImage';
import { brandVisuals, familyCards, groupSceneVisuals, launchProducts, orderedProducts, productsByName, systemSteps } from '../data/products';

const familyIcons = [Sparkles, Droplets, FlaskConical];

function getFamilyIcon(index: number) {
  return familyIcons[index] ?? Activity;
}

export default function Home() {
  const launchRef = useRef(null);
  const { scrollYProgress: launchProgress } = useScroll({
    target: launchRef,
    offset: ["start end", "end start"]
  });

  const launchY = useTransform(launchProgress, [0, 1], [-60, 60]);

  return (
    <div className="overflow-x-hidden bg-white">
      <Hero />

      <section className="py-[120px] md:py-[160px] px-6 md:px-[52px] bg-white border-t border-ink/5 relative">
        <div className="absolute top-0 right-0 p-12 opacity-5 hidden lg:block">
          <FlaskConical size={300} strokeWidth={0.5} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-[40px] lg:gap-[100px] items-start mb-[80px]">
            <FadeIn>
              <div className="font-mono text-[9px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[16px]">
                <div className="w-[20px] h-[1px] bg-gold"></div>
                01. Clinical Range
              </div>
              <h2 className="font-serif text-[clamp(36px,5vw,62px)] leading-[0.95] tracking-[-1.5px] text-ink mb-[24px]">
                Beyond a single <br />
                glow moment.<br />
                <em className="text-gold italic font-serif">A routine system.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative pt-[20px]">
                <div className="absolute top-0 left-0 w-[40px] h-[1px] bg-gold/30"></div>
                <p className="text-[16px] text-ink/60 leading-[1.85] max-w-[580px]">
                  Rejo Derma brings {orderedProducts.length} Korean skincare formulas into one clear narrative:
                  visible glow, barrier-aware recovery, and daily protection that feels intentional. 
                  Every product has a role; every role supports the glow.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 mt-8 font-mono text-[9px] uppercase tracking-[2px] text-gold hover:text-ink transition-colors group">
                  Our Formulation Logic
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-ink/5 border border-ink/5 shadow-sm">
            {familyCards.map((family, index) => {
              const Icon = getFamilyIcon(index);

              return (
                <FadeIn key={family.title} delay={index * 0.1} className="bg-white p-[36px] md:p-[48px] group hover:bg-gold-soft/10 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-ink/5">0{index + 1}</div>
                  <motion.div 
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="w-[46px] h-[46px] border border-gold/20 bg-gold-soft/40 flex items-center justify-center text-gold mb-[28px] group-hover:bg-gold group-hover:text-white transition-all duration-300"
                  >
                    <Icon size={20} strokeWidth={1.3} />
                  </motion.div>
                  <div className="font-mono text-[9px] uppercase tracking-[2.5px] text-gold/60 mb-[16px]">
                    {family.eyebrow}
                  </div>
                  <h3 className="font-serif text-[28px] leading-[1] text-ink mb-[16px] tracking-[-0.5px] group-hover:text-gold transition-colors">{family.title}</h3>
                  <p className="text-[14px] text-ink/60 leading-[1.8] mb-[28px]">{family.description}</p>
                  
                  <div className="space-y-[10px]">
                    {family.products.map((name) => {
                      const product = productsByName[name];
                      return (
                        <Link key={name} to={`/products/${product.slug}`} className="flex items-center justify-between border-t border-ink/5 py-[12px] group/item">
                          <span className="text-[13px] text-ink/80 group-hover/item:text-gold transition-colors">{product.displayName}</span>
                          <span className="font-mono text-[8px] uppercase tracking-[1.5px] text-ink/25">
                            {product.capacity}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-[52px] py-[40px] bg-white border-t border-ink/5" ref={launchRef}>
        <div className="max-w-7xl mx-auto">
          <FadeIn className="relative overflow-hidden border border-ink/10 bg-[#f4efe6] min-h-[500px] md:min-h-[640px] group shadow-2xl">
            <motion.img
              style={{ y: launchY }}
              src={brandVisuals.launchStory}
              alt=""
              className="absolute inset-0 h-[120%] w-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
            <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />
            
            <div className="relative z-10 max-w-[580px] p-[40px] md:p-[80px] h-full flex flex-col justify-center">
              <div className="font-mono text-[9px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[20px]">
                <div className="w-[20px] h-[1px] bg-gold"></div>
                02. Brand Atmosphere
              </div>
              <h2 className="font-serif text-[clamp(32px,4.5vw,56px)] leading-[0.98] tracking-[-1.5px] text-ink mb-[24px]">
                Launch attention <br /> in the front.
                <br />
                <em className="text-gold italic font-serif">Routine depth behind.</em>
              </h2>
              <p className="text-[15.5px] text-ink/60 leading-[1.9] mb-[40px] max-w-[480px]">
                The masks draw the eye first. The wider range keeps the brand credible, repeatable,
                and easier to recommend across brightening, comfort, and protection.
              </p>
              <div className="flex flex-wrap gap-[12px]">
                {['Glow-led retail', 'Barrier-aware', 'Clinic-adjacent'].map((item) => (
                  <span
                    key={item}
                    className="border border-gold/20 bg-white/80 backdrop-blur-sm px-[16px] py-[10px] font-mono text-[8.5px] uppercase tracking-[2px] text-gold shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-[120px] md:py-[160px] px-6 md:px-[52px] bg-ink border-t border-cream/5 overflow-hidden text-cream-deep relative">
        <div className="absolute top-0 left-0 w-full h-full grain-overlay opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[80px] lg:gap-[120px] items-center">
            <FadeIn className="order-1 flex flex-col justify-center">
              <div className="font-mono text-[9.5px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[20px]">
                <div className="w-[20px] h-[1px] bg-gold"></div>
                03. Launch Priority
              </div>
              <h2 className="font-serif text-[clamp(36px,5vw,64px)] leading-[0.98] tracking-[-1.5px] text-cream-deep mb-[28px]">
                Two visible <br /> glow icons.<br />
                <em className="text-gold italic font-serif">Full range depth.</em>
              </h2>
              <p className="text-[15.5px] text-cream-deep/60 leading-[1.9] mb-[48px] max-w-[520px]">
                Lumiglow Premium Hydrogel Mask and Intensive Soothing Mask create the first emotional pull.
                The rest of the range turns that first impression into a complete brightening story.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                {launchProducts.map((product, idx) => (
                  <Link key={product.slug} to={`/products/${product.slug}`} className="block">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="border border-white/5 bg-white/[0.02] p-[24px] group hover:bg-white/[0.05] transition-colors shadow-2xl h-full"
                    >
                      <div className="font-mono text-[8.5px] uppercase tracking-[2.5px] text-gold-bright mb-[12px]">
                        {product.capacity} / {product.availabilityPhase}
                      </div>
                      <div className="font-serif text-[24px] leading-[1.05] text-cream-deep/95 mb-[10px] group-hover:text-gold transition-colors">
                        {product.displayName}
                      </div>
                      <p className="text-[13.5px] leading-[1.8] text-cream-deep/40">{product.shortDescription}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </FadeIn>

            <FadeIn className="order-2 w-full">
              <div className="border border-white/5 relative overflow-hidden bg-ink-light rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                <img
                  src={groupSceneVisuals.launchMasks}
                  alt="Rejo Derma launch masks"
                  className="w-full aspect-[4/3] object-cover border-b border-white/5 hover:scale-105 transition-transform duration-700"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5">
                  {launchProducts.map((product) => (
                    <Link key={product.slug} to={`/products/${product.slug}`} className="block p-[24px] bg-ink-light group hover:bg-gold-soft/5 transition-colors">
                      <div className="font-mono text-[8.5px] uppercase tracking-[3px] text-gold-bright mb-[10px] opacity-60 group-hover:opacity-100">
                        {product.tagline}
                      </div>
                      <div className="font-serif text-[24px] text-cream-deep/95 leading-[1.1] group-hover:text-gold transition-colors">
                        {product.displayName}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-[120px] md:py-[160px] px-6 md:px-[52px] bg-white border-t border-ink/5 text-ink relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] lg:gap-[100px] items-end pb-[64px] border-b border-ink/5 mb-[80px]">
            <FadeIn>
              <div className="font-mono text-[9.5px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[20px]">
                <div className="w-[20px] h-[1px] bg-gold"></div>
                04. Routine View
              </div>
              <h2 className="font-serif text-[clamp(36px,5vw,62px)] leading-[0.95] tracking-[-1.5px] text-ink">
                Better routines start with<br />
                <em className="text-gold italic">clear product roles.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative pt-[20px]">
                <div className="absolute top-0 left-0 w-[40px] h-[1px] bg-gold/30"></div>
                <p className="text-[16px] text-ink/50 leading-[1.85] max-w-[520px]">
                  Clear roles make the range feel easier to shop, easier to explain, and easier to use.
                  The system below turns technical formulas into a routine customers can follow with confidence.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-[24px]">
            {systemSteps.map((step, index) => (
              <FadeIn
                key={step.step}
                delay={index * 0.08}
                className="border border-ink/10 bg-white p-[32px] md:p-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-ink/5">Step.0{step.step}</div>
                <div className="font-mono text-[9px] uppercase tracking-[3px] text-gold mb-[16px] opacity-60 group-hover:opacity-100 transition-opacity">
                  System.0{step.step}
                </div>
                <h3 className="font-serif text-[26px] leading-[1.1] text-ink mb-[12px] group-hover:text-gold transition-colors">
                  {step.label} <br /> <em className="text-gold italic">{step.emphasis}</em>
                </h3>
                <p className="text-[13px] text-ink/45 leading-[1.8] mb-[24px]">{step.body}</p>
                
                <div className="space-y-[12px]">
                  {step.products.map((name) => {
                    const product = productsByName[name];
                    return (
                      <Link key={name} to={`/products/${product.slug}`} className="block border-t border-ink/5 pt-[12px] group/item">
                        <div className="text-[13px] text-ink/80 group-hover/item:text-gold transition-colors">{product.displayName}</div>
                        <div className="font-mono text-[8px] uppercase tracking-[2px] text-ink/20 mt-[4px]">
                          {product.category}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px] md:py-[180px] px-6 md:px-[52px] bg-ink text-cream-deep border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5 bg-ink-light overflow-hidden shadow-2xl">
            <div className="relative min-h-[440px] lg:min-h-full overflow-hidden group">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src={groupSceneVisuals.launchMasks}
                alt=""
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
              <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col justify-end p-[40px] md:p-[64px]">
                <div className="font-mono text-[9px] uppercase tracking-[4px] text-gold-bright mb-[20px]">
                  05. Visual Language
                </div>
                <div className="grid grid-cols-2 gap-[12px] max-w-[360px]">
                  {[
                    { icon: Sparkles, label: 'Glow-first' },
                    { icon: Shield, label: 'Barrier support' },
                    { icon: Droplets, label: 'Daily comfort' },
                    { icon: FlaskConical, label: 'Clinical polish' },
                  ].map((item, idx) => {
                    const Icon = item.icon;

                    return (
                      <motion.div 
                        key={item.label} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="border border-white/10 bg-ink/60 backdrop-blur-md p-[16px] group/icon hover:bg-gold hover:border-gold transition-all duration-300"
                      >
                        <Icon size={18} strokeWidth={1.2} className="text-gold-bright mb-[12px] group-hover/icon:text-ink transition-colors" />
                        <div className="font-mono text-[8.5px] uppercase tracking-[2px] text-cream-deep/40 group-hover/icon:text-ink transition-colors">
                          {item.label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-[40px] md:p-[100px] relative">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <Shield size={200} strokeWidth={0.5} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[20px]">
                <div className="w-[20px] h-[1px] bg-gold"></div>
                Brand Promise
              </div>
              <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[0.98] tracking-[-1.5px] text-cream-deep mb-[32px]">
                Glow that attracts.<br />
                <em className="text-gold italic font-serif">Recovery that balances.</em>
              </h2>
              <p className="text-[16px] text-cream-deep/60 leading-[1.9] mb-[56px] max-w-[480px]">
                Rejo Derma is designed to feel immediate on the shelf and coherent in use.
                The masks bring the glow moment. The wider routine keeps tone care, recovery, and protection connected.
              </p>

              <div className="flex flex-col sm:flex-row gap-[20px] sm:items-center">
                <Link
                  to="/products"
                  className="group relative inline-flex items-center justify-center font-mono text-[10px] uppercase tracking-[3px] px-[40px] py-[20px] bg-white text-ink overflow-hidden transition-all duration-500 hover:text-white"
                >
                  <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10">View Products</span>
                </Link>
                <Link
                  to="/ingredients"
                  className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[2.5px] text-cream-deep/60 hover:text-gold transition-all duration-300"
                >
                  Explore Ingredients
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
