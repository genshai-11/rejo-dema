import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ProductImage from '../components/ProductImage';
import { brandVisuals, catalogGroups, groupSceneVisuals, launchProducts, orderedProducts } from '../data/products';

const launchProductPageVisuals: Record<string, string> = {
  'rejo-derma-intensive-soothing-mask': '/brand/proposals/masks/intensive-soothing-mask-16x9-v1.png',
  'rejo-derma-lumiglow-premium-hydrogel-mask': '/brand/proposals/masks/lumiglow-premium-hydrogel-mask-16x9-v1.png',
};

export default function ProductsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const heroY = useTransform(heroProgress, [0, 1], [-40, 40]);

  const groupedProducts = catalogGroups.map((group) => ({
    name: group,
    products: orderedProducts.filter(
      (product) => product.category === group && !product.launchPriority,
    ),
  }));

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream px-6 pt-[110px] md:px-[52px] md:pt-[96px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-[60px] lg:gap-[120px] items-end pb-[64px] border-b border-ink/5 mb-[80px]">
          <FadeIn>
            <div className="font-mono text-[9px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[16px]">
              <div className="w-[20px] h-[1px] bg-gold"></div>
              01. Product Range
            </div>
            <h2 className="font-serif text-[clamp(36px,5vw,62px)] leading-[0.95] tracking-[-1.5px] text-ink mb-[24px]">
              {orderedProducts.length} curated formulas.<br />
              <em className="text-gold italic font-serif">One connected system.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative pt-[20px]">
              <div className="absolute top-0 left-0 w-[40px] h-[1px] bg-gold/30"></div>
              <p className="text-[16px] text-ink/65 leading-[1.85] max-w-[520px]">
                Explore the Rejo Derma range by routine role. Each product is positioned by its specific contribution to the clinical routine, ensuring every layer supports the next.
              </p>
            </div>
          </FadeIn>
        </div>

        <div ref={heroRef}>
          <FadeIn className="mb-[64px] md:mb-[80px] relative overflow-hidden border border-ink/10 aspect-[4/5] sm:aspect-[16/9] md:aspect-[2.8/1] min-h-[320px] md:min-h-[300px] bg-[#f4efe6] group shadow-2xl">
            <motion.img
              style={{ y: heroY }}
              src={brandVisuals.productsHero}
              alt=""
              className="absolute inset-0 h-[115%] w-full object-cover object-right md:object-center transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-white/95 via-white/40 sm:via-white/60 to-transparent" />
            <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-[620px] p-8 sm:p-[40px] md:p-[80px] h-full flex flex-col justify-center md:justify-center">              <div className="font-mono text-[9px] uppercase tracking-[4px] text-gold flex items-center gap-[12px] mb-[12px] md:mb-[20px]">
                <div className="w-[20px] h-[1px] bg-gold"></div>
                Brand Landscape
              </div>
              <h3 className="font-serif text-[clamp(28px,4vw,52px)] text-ink leading-[0.98] mb-[12px] md:mb-[24px] tracking-[-1px]">
                Product-first visuals,
                <br />
                <em className="text-gold italic font-serif">without losing logic.</em>
              </h3>
              <p className="text-[13px] md:text-[16px] text-ink/65 leading-[1.7] md:leading-[1.85] max-w-[480px]">
                Launch masks create the first pull, then the supporting range broadens into a structured brightening and recovery ritual.
              </p>
            </div>

            {/* Floating marker */}
            <div className="absolute top-12 right-12 hidden lg:block">
              <div className="font-mono text-[8px] uppercase tracking-[4px] text-ink/20 vertical-text h-[120px] flex items-center justify-end">
                Rejo.Catalog.2026
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px] mb-[80px] md:mb-[120px]">
        {launchProducts.map((product, index) => (
          <FadeIn key={product.slug} delay={index * 0.1}>
            <Link
              to={`/products/${product.slug}`}
              className="block border border-ink/10 bg-white overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[16/9] md:aspect-[4/3] bg-cream-dark/20 flex items-center justify-center p-4">
                <img 
                  src={launchProductPageVisuals[product.slug] || product.sceneHeroPath || product.assetPath} 
                  alt={product.displayName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
              </div>
              
              <div className="relative p-[28px] md:p-[48px]">
                <div className="mb-6">
                   <div className={`font-mono text-[8px] md:text-[8.5px] tracking-[2px] md:tracking-[2.5px] uppercase px-[12px] md:px-[14px] py-[4px] md:py-[6px] backdrop-blur-md shadow-sm border border-white/20 ${
                    index === 0 ? 'bg-sage/10 text-sage' : 'bg-gold/10 text-gold'
                  }`}>
                    {product.tagline}
                  </div>
                </div>

                <div className="absolute top-0 right-0 p-6 md:p-8 font-mono text-[10px] text-ink/5">Specimen.0{index + 1}</div>
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[8px] sm:gap-[12px] mb-[20px] md:mb-[24px]">
                  <h3 className="font-serif text-[clamp(26px,3.5vw,38px)] leading-[1.0] text-ink group-hover:text-gold transition-colors">{product.displayName}</h3>
                  <span className="font-mono text-[8.5px] md:text-[9px] uppercase tracking-[2px] text-ink/30 pb-0.5 md:pb-2">{product.capacity}</span>
                </div>
                <p className="text-[14px] md:text-[14.5px] text-ink/65 leading-[1.75] md:leading-[1.85] mb-[24px] md:mb-[32px] max-w-[580px]">{product.shortDescription}</p>
                
                <div className="space-y-[10px] md:space-y-[12px] mb-[24px] md:mb-[32px]">
                  {product.ingredientHighlights.slice(0, 2).map((highlight) => (
                    <div key={highlight} className="flex items-center justify-between border-t border-ink/5 pt-[10px] md:pt-[12px] group/item">
                      <span className="font-mono text-[7.5px] md:text-[8px] uppercase tracking-[2px] text-ink/25">Clinical Active</span>
                      <span className="text-[13px] md:text-[13.5px] text-ink/80 group-hover/item:text-gold transition-colors">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[20px] sm:gap-[16px] pt-6 md:pt-8 border-t border-ink/5">
                  <div className="flex items-center gap-3">
                    <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full border border-gold/20 bg-gold-soft/30 flex items-center justify-center text-gold shrink-0">
                      <Sparkles size={14} strokeWidth={1.4} />
                    </div>
                    <div className="text-[12.5px] md:text-[13px] text-ink/70 leading-snug italic font-serif max-w-[200px]">
                      "{product.usageNotes[0]}"
                    </div>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[8.5px] md:text-[9px] uppercase tracking-[2px] md:tracking-[2.5px] text-gold group-hover:gap-5 transition-all self-end sm:self-auto">
                    View Formula
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[120px]">
          {[
            { title: 'Tone Correction', body: 'Brightening formulas arranged as one connected family.', src: groupSceneVisuals.toneCorrection },
            { title: 'Barrier Recovery', body: 'Recovery products read as a structured support system.', src: groupSceneVisuals.barrierRecovery },
            { title: 'Clinical Protocol', body: 'Advanced-use formulas gain a clearer clinic-facing identity.', src: groupSceneVisuals.professionalProtocol },
            { title: 'Launch Icons', body: 'The duo holds shelf impact while pointing to the full range.', src: groupSceneVisuals.launchMasks },
          ].map((scene, index) => (
            <FadeIn key={scene.title} delay={index * 0.08} className="border border-ink/10 bg-white group hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/3] bg-cream-dark/10 flex items-center justify-center p-6">
                <img src={scene.src} alt={scene.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div className="p-[28px] relative bg-white">
                <div className="font-mono text-[8px] uppercase tracking-[3px] text-gold/40 mb-[12px]">
                  Family {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-[22px] text-ink mb-[10px] group-hover:text-gold transition-colors">{scene.title}</h3>
                <p className="text-[13.5px] text-ink/50 leading-[1.7]">{scene.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="pb-[140px]">
          <FadeIn className="mb-[64px] flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="font-mono text-[9.5px] uppercase tracking-[4px] text-ink/30 flex items-center gap-[12px] mb-[16px]">
                <div className="w-[20px] h-[1px] bg-ink/10"></div>
                02. Interaction
              </div>
              <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-[-1.5px] text-ink">
                Grouped by <em className="text-gold italic font-serif">formula logic.</em>
              </h2>
            </div>
            <p className="text-[15px] text-ink/50 leading-[1.8] max-w-[480px]">
              Access the complete Rejo Derma laboratory catalog, structured by the specific skin concern and routine role each compound fulfills.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-[64px]">
            {groupedProducts.map((group, groupIndex) =>
              group.products.length ? (
                <div key={group.name} className="relative">
                  {/* Vertical group index */}
                  <div className="absolute -left-[52px] top-0 h-full hidden 2xl:flex items-start">
                    <div className="font-mono text-[8px] uppercase tracking-[4px] text-gold/20 -rotate-90 origin-top-left translate-y-[100px]">
                      Group.0{groupIndex + 1}
                    </div>
                  </div>

                  <FadeIn delay={groupIndex * 0.05} className="mb-[32px]">
                    <div className="flex items-center gap-6">
                      <div className="font-mono text-[10px] uppercase tracking-[3px] text-ink/40 whitespace-nowrap">{group.name}</div>
                      <div className="w-full h-[1px] bg-ink/5"></div>
                    </div>
                  </FadeIn>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-ink/5 border border-ink/5 shadow-sm">
                    {group.products.map((product, index) => (
                      <FadeIn key={product.slug} delay={index * 0.04}>
                        <Link
                          to={`/products/${product.slug}`}
                          className="block bg-white p-[28px] md:p-[36px] group hover:bg-gold-soft/10 transition-all duration-500 h-full"
                        >
                          <div className="flex flex-col h-full">
                            <div className="flex items-start gap-[24px] mb-8">
                              <div className="flex min-h-[140px] w-[110px] shrink-0 items-center justify-center overflow-hidden border border-ink/10 bg-cream-dark/5 p-3 shadow-sm md:min-h-[160px] md:w-[130px]">
                                <img 
                                  src={product.sceneHeroPath || product.assetPath} 
                                  alt={product.displayName}
                                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700" 
                                />
                              </div>
                              <div className="min-w-0 flex-1 pt-2">
                                <div className="font-mono text-[8.5px] uppercase tracking-[2.5px] text-gold mb-[10px]">
                                  {product.systemRole}
                                </div>
                                <h4 className="mb-[8px] break-words font-serif text-[21px] font-normal leading-tight text-ink transition-colors group-hover:text-gold">
                                  {product.displayName}
                                </h4>
                                <div className="font-mono text-[8px] uppercase tracking-[2px] text-ink/30">{product.capacity}</div>
                              </div>
                            </div>
                            <p className="text-[13.5px] text-ink/60 leading-[1.8] mb-[32px] flex-1">{product.shortDescription}</p>
                            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[2px] text-ink/35 group-hover:text-gold transition-colors pt-4 border-t border-ink/5">
                              Analysis Report
                              <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              ) : null,
            )}
        </div>
      </div>
    </div>
  );
}
