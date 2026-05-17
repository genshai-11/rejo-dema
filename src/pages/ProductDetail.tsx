import { Link, Navigate, useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, ChevronRight, Microscope, ShieldCheck, Zap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ProductImage from '../components/ProductImage';
import { orderedProducts, productsBySlug } from '../data/products';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  if (!slug || !productsBySlug[slug]) {
    return <Navigate to="/products" replace />;
  }

  const product = productsBySlug[slug];
  const relatedProducts = orderedProducts
    .filter((entry) => entry.slug !== product.slug && entry.category === product.category)
    .slice(0, 3);
  const ingredientList = product.fullIngredients
    ? product.fullIngredients.split(',').map((ingredient) => ingredient.trim()).filter(Boolean)
    : [];
  const detailScenePath = product.detailScenePath ?? product.sceneHeroPath ?? product.assetPath;
  const sceneFitClass = product.sceneFit === 'cover' ? 'object-cover' : 'object-contain';

  return (
    <div ref={containerRef} className="pt-[110px] md:pt-[140px] px-5 md:px-[52px] bg-cream min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto pb-[80px] md:pb-[120px]">
        {/* Navigation Breadcrumb */}
        <div className="mb-[40px] md:mb-[60px] relative overflow-hidden group">
          <Link
            to="/products"
            className="inline-flex items-center gap-[12px] font-mono text-[9px] uppercase tracking-[3px] text-ink/40 hover:text-gold transition-all group/back"
          >
            <span className="w-[20px] h-[1px] bg-ink/10 group-hover/back:w-[30px] group-hover/back:bg-gold transition-all"></span>
            Catalog Archive
          </Link>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ink/5"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[32px] md:gap-[40px] lg:gap-[80px] items-start mb-[80px] md:mb-[120px]">
          {/* Visual Presentation Section */}
          <FadeIn className="space-y-[20px] md:space-y-[24px]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-[20px] md:gap-[24px] items-stretch h-full">
              <div ref={heroRef} className="relative border border-ink/5 bg-cream-dark/20 aspect-[4/5] md:aspect-auto md:min-h-[620px] overflow-hidden group/hero shadow-2xl flex items-center justify-center">
                <motion.img
                  style={{ scale: heroScale, y: heroY }}
                  src={detailScenePath}
                  alt={product.displayName}
                  className="w-full h-full object-contain relative z-10"
                />

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 flex items-center gap-4">
                  <div className="font-mono text-[7.5px] md:text-[8px] text-white/50 tracking-[2px] md:tracking-[3px] uppercase bg-ink/30 backdrop-blur-md px-3 py-1.5 border border-white/10">
                    Specimen.Analysis // 01
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-[16px] md:gap-[24px]">
                <motion.div 
                   whileHover={{ y: -8 }}
                   className="relative overflow-hidden group/sub aspect-square md:aspect-auto"
                >
                   <ProductImage
                    product={product}
                    className="h-full border border-ink/5 bg-white transition-all duration-700"
                    imageClassName="scale-[1.05] group-hover/sub:scale-110"
                  />
                   <div className="absolute top-4 right-4 font-mono text-[7px] text-ink/10 group-hover/sub:text-gold/40 transition-colors uppercase">View.01</div>
                </motion.div>
                
                <motion.div 
                   whileHover={{ y: -8 }}
                   className="relative overflow-hidden group/sub aspect-square md:aspect-auto"
                >
                  <ProductImage product={product} className="h-full border border-ink/5 bg-gold-soft/30" />
                  <div className="absolute top-4 right-4 font-mono text-[7px] text-ink/10 group-hover/sub:text-gold/40 transition-colors uppercase">View.02</div>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px] md:gap-[16px]">
              {product.ingredientHighlights.slice(0, 3).map((highlight, idx) => (
                <motion.div 
                  key={highlight} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-ink/5 bg-white px-[18px] py-[20px] md:px-[20px] md:py-[24px] relative group hover:bg-gold-soft/10 transition-colors"
                >
                  <div className="absolute top-4 right-4 text-gold/20 group-hover:text-gold transition-colors">
                    {idx === 0 ? <Microscope size={12} /> : idx === 1 ? <ShieldCheck size={12} /> : <Zap size={12} />}
                  </div>
                  <div className="font-mono text-[8.5px] uppercase tracking-[3px] text-ink/30 mb-[10px] md:mb-[12px]">Logic.0{idx + 1}</div>
                  <div className="font-serif text-[18px] md:text-[19px] leading-[1.1] text-ink group-hover:text-gold transition-colors">{highlight}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Narrative & Specification Section */}
          <FadeIn delay={0.15}>
            <div className="lg:sticky lg:top-[120px]">
              <div className="font-mono text-[9px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[16px] md:mb-[20px]">
                <div className="w-[20px] h-[1px] bg-gold"></div>
                {product.category}
              </div>
              
              <h1 className="font-serif text-[clamp(36px,6vw,72px)] leading-[0.92] tracking-[-1.5px] md:tracking-[-2px] text-ink mb-[20px] md:mb-[24px] uppercase">
                {product.displayName}
              </h1>

              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-[12px] mb-[24px] md:mb-[32px]">
                <div className="flex flex-wrap items-center gap-[8px]">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="font-mono text-[8.5px] md:text-[9px] uppercase tracking-[2px] md:tracking-[2.5px] px-[12px] py-[5px] md:px-[14px] md:py-[6px] bg-sage/10 text-sage border border-sage/5"
                  >
                    {product.systemRole}
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="font-mono text-[8.5px] md:text-[9px] uppercase tracking-[2px] md:tracking-[2.5px] px-[12px] py-[5px] md:px-[14px] md:py-[6px] bg-gold/10 text-ink border border-gold/5"
                  >
                    {product.capacity}
                  </motion.span>
                </div>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="font-mono text-[8.5px] md:text-[9px] uppercase tracking-[2px] md:tracking-[2.5px] px-[12px] py-[5px] md:px-[14px] md:py-[6px] border border-ink/10 text-ink/40"
                >
                  {product.availabilityPhase}
                </motion.span>
              </div>

              <p className="font-serif italic text-[20px] md:text-[24px] leading-[1.3] md:leading-[1.35] text-ink-light mb-[24px] md:mb-[28px] border-l-2 border-gold/30 pl-6 md:pl-8">
                "{product.tagline}"
              </p>
              
              <div className="space-y-[16px] md:space-y-[20px] mb-[32px] md:mb-[40px]">
                <p className="text-[14.5px] md:text-[15.5px] text-ink/75 leading-[1.8] md:leading-[1.9]">{product.shortDescription}</p>
                <p className="text-[14.5px] md:text-[15.5px] text-ink/75 leading-[1.8] md:leading-[1.9]">{product.detailNarrative}</p>
              </div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="border border-ink/5 bg-white p-[24px] md:p-[32px] mb-[32px] relative overflow-hidden group shadow-sm"
              >
                <div className="absolute top-0 right-0 p-6 md:p-8 font-mono text-[9px] text-ink/5">SYSTEM.GUIDE</div>
                <div className="font-mono text-[8.5px] md:text-[9px] uppercase tracking-[3px] text-gold mb-[16px]">Usage Protocol</div>
                <div className="space-y-[12px] md:space-y-[14px]">
                  {product.usageNotes.map((note, idx) => (
                    <div key={note} className="flex gap-3 md:gap-4">
                      <span className="font-mono text-[9px] md:text-[10px] text-gold/40 pt-1">0{idx + 1}</span>
                      <p className="text-[13.5px] md:text-[14px] text-ink/65 leading-[1.7] md:leading-[1.8] italic">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <div className="border border-ink/5 bg-gold-soft/30 p-[20px] md:p-[24px] group">
                  <div className="font-mono text-[8.5px] uppercase tracking-[3px] text-ink/30 mb-[10px]">Dossier Code</div>
                  <div className="font-serif text-[15px] md:text-[16px] leading-[1.5] text-ink/80 group-hover:text-gold transition-colors">{product.exactName}</div>
                </div>
                <div className="border border-ink/5 bg-cream-dark p-[20px] md:p-[24px] group">
                  <div className="font-mono text-[8.5px] uppercase tracking-[3px] text-ink/30 mb-[10px]">Routine Logic</div>
                  <div className="text-[13px] md:text-[13.5px] leading-[1.6] md:leading-[1.7] text-ink/60 group-hover:text-ink transition-colors">Strategic role in the <span className="text-gold italic font-serif">{product.systemRole}</span> phase.</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Detailed Breakdown Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[32px] lg:gap-[48px] mb-[120px]">
          <FadeIn className="border border-ink/5 bg-white p-[40px] md:p-[56px] relative overflow-hidden group shadow-sm">
            {/* Background Decorative Text */}
            <div className="absolute -top-10 -right-10 font-serif text-[200px] text-ink/[0.02] pointer-events-none group-hover:scale-110 transition-transform duration-1000">ING</div>
            
            <div className="relative z-10">
              <div className="font-mono text-[9.5px] uppercase tracking-[4px] text-gold mb-[16px]">02. Molecular Scope</div>
              <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[0.95] text-ink mb-[32px] tracking-[-1.5px] uppercase">
                Complete <br />
                <em className="text-gold italic font-serif">Formula list.</em>
              </h2>
              
              {ingredientList.length ? (
                <div className="flex flex-wrap gap-[10px]">
                  {ingredientList.map((ingredient, idx) => (
                    <motion.span
                      key={ingredient}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.02 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.4)', color: '#000' }}
                      className="px-[12px] py-[8px] text-[12px] leading-[1.5] border border-ink/8 bg-cream/50 text-ink/60 transition-all cursor-default"
                    >
                      {ingredient}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <p className="text-[14.5px] text-ink/50 leading-[1.9] italic border-l border-ink/10 pl-6">
                  Technical dossiers for this specific formula are being updated for current clinical archives. Contact Rejo Derma for immediate inquiries.
                </p>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[24px]">
            <div className="border border-ink/5 bg-ink-light text-cream-deep p-[40px] md:p-[56px] relative overflow-hidden group shadow-2xl">
               {/* Scanline Animation */}
               <motion.div 
                  animate={{ left: ['-10%', '110%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-[20px] bg-white/5 skew-x-12 z-0 pointer-events-none"
                />
              
              <div className="relative z-10">
                <div className="font-mono text-[9.5px] uppercase tracking-[4px] text-gold-bright mb-[16px]">03. Strategy</div>
                <h2 className="font-serif text-[clamp(28px,4vw,40px)] leading-[1] text-cream-deep mb-[24px] tracking-[-1px] uppercase">
                  Routine <br />
                  <em className="text-gold-bright italic font-serif">Pacing.</em>
                </h2>
                <p className="text-[14.5px] text-cream-deep/40 leading-[1.9] mb-[32px] italic">
                  "We value consistency over hype. Every product has a defined slot within the five-step Korean architecture."
                </p>
                <div className="space-y-[14px]">
                  {product.ingredientHighlights.map((highlight, index) => (
                    <div key={highlight} className="flex items-center justify-between border-t border-white/5 pt-[14px] group/item">
                      <span className="font-mono text-[9px] uppercase tracking-[3px] text-white/20 group-hover/item:text-gold-bright transition-colors">
                        LOG.0{index + 1}
                      </span>
                      <span className="text-[14px] text-cream-deep/80 group-hover/item:text-cream transition-colors">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-rows-[1fr_auto] gap-[24px]">
              <div className="border border-ink/5 bg-white relative overflow-hidden group/img min-h-[300px] shadow-sm">
                 <img 
                    src={product.sceneHeroPath || product.assetPath} 
                    alt={product.displayName} 
                    className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div className="border border-ink/5 bg-white p-[32px] group hover:bg-gold-soft/10 transition-colors">
                <div className="font-mono text-[9px] uppercase tracking-[3px] text-ink/30 mb-[12px]">Positioning</div>
                <p className="text-[13.5px] leading-[1.8] text-ink/60 italic">
                  Curated for the <span className="text-ink font-serif group-hover:text-gold transition-colors">{product.category}</span> catalogue, specifically supporting the <span className="text-gold">{product.systemRole}</span> routine stage.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length ? (
          <div className="border-t border-ink/5 pt-[80px]">
            <FadeIn className="mb-[48px] flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[4px] text-ink/30 flex items-center gap-[12px] mb-[16px]">
                  <div className="w-[20px] h-[1px] bg-ink/10"></div>
                  04. Continuity
                </div>
                <h2 className="font-serif text-[clamp(32px,4.5vw,48px)] leading-[0.95] tracking-[-1.5px] text-ink uppercase">
                  Related <br />
                  <em className="text-gold italic font-serif">Dossiers.</em>
                </h2>
              </div>
              <Link 
                to="/routine" 
                className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[3px] text-gold hover:text-ink transition-all group"
              >
                Explore Full Routine
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {relatedProducts.map((entry, index) => (
                <FadeIn key={entry.slug} delay={index * 0.1}>
                  <Link
                    to={`/products/${entry.slug}`}
                    className="block border border-ink/5 bg-white group hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark/20">
                       <img 
                          src={entry.sceneHeroPath || entry.assetPath} 
                          alt={entry.displayName}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000"
                       />
                       <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute top-6 left-6 font-mono text-[8px] text-white/60 tracking-[2px] uppercase bg-ink/40 backdrop-blur-sm px-2 py-1">Related // 0{index + 1}</div>
                    </div>
                    
                    <div className="p-[32px] relative bg-white">
                      <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-ink/5 group-hover:text-gold/20 transition-colors uppercase">{entry.systemRole}</div>
                      <div className="font-mono text-[8.5px] uppercase tracking-[3px] text-gold mb-[12px] opacity-60">
                         {entry.capacity}
                      </div>
                      <h3 className="font-serif text-[24px] leading-[1.05] text-ink mb-[12px] group-hover:text-gold transition-colors tracking-[-0.5px]">{entry.displayName}</h3>
                      <p className="text-[13.5px] text-ink/50 leading-[1.8] italic break-words">"{entry.shortDescription}"</p>
                      
                      <div className="mt-8 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[2px] text-ink/30 group-hover:text-gold transition-colors">
                         View Details
                         <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
