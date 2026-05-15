import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import ProductImage from '../components/ProductImage';
import { IngredientOrbit } from '../components/VisualSystem';
import {
  brandVisuals,
  groupSceneVisuals,
  ingredientStories,
  productGalleryMoments,
  productsByName,
  scienceIngredientSceneVisuals,
} from '../data/products';

const ingredientSceneMap: Record<string, string> = {
  'Tranexamic Acid': scienceIngredientSceneVisuals.tranexamicAcid,
  'Beta-Glucan': scienceIngredientSceneVisuals.betaGlucan,
  'Copper Tripeptide-1': scienceIngredientSceneVisuals.copperTripeptide,
  'Ferments & Humectants': scienceIngredientSceneVisuals.fermentsHumectants,
};

export default function SciencePage() {
  return (
    <div className="pt-[96px] px-6 md:px-[52px] bg-ink-light text-cream-deep min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto pb-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-end pb-[48px] border-b border-cream-deep/5 mb-[64px]">
          <FadeIn>
            <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold-bright flex items-center gap-[10px] mb-[12px]">
              <div className="w-[14px] h-[1px] bg-gold-bright"></div>
              Ingredients
            </div>
            <h2 className="font-serif [text-wrap:balance] text-[clamp(32px,5vw,58px)] leading-[1.05] tracking-[-0.3px] text-cream-deep/90 max-w-[20ch]">
              Ingredient stories,<br />
              <em className="text-gold-bright italic font-serif">made simple.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[15px] text-cream-deep/40 leading-[1.85] max-w-[520px]">
              Ingredient stories should feel clear at a glance, with visuals doing more of the work and copy staying easier to scan.
            </p>
          </FadeIn>
        </div>

        <FadeIn className="mb-[64px]">
          <IngredientOrbit />
        </FadeIn>

        <FadeIn className="mb-[72px] relative overflow-hidden border border-cream-deep/8 min-h-[280px] md:min-h-[360px]">
          <img
            src={brandVisuals.scienceBrightening}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-light/88 via-ink-light/52 to-transparent" />
          <div className="relative z-10 max-w-[520px] p-[26px] md:p-[40px]">
            <div className="font-mono text-[8.5px] uppercase tracking-[2.5px] text-gold-bright mb-[12px]">
              Tone Correction / Brightening Logic
            </div>
            <h3 className="font-serif [text-wrap:balance] text-[clamp(24px,3vw,38px)] text-cream-deep/92 leading-[1.05] mb-[12px] max-w-[24ch]">
              Visible tone support,
              <br />
              <em className="text-gold-bright italic">without overcomplicating the science.</em>
            </h3>
            <p className="text-[13.5px] text-cream-deep/48 leading-[1.75] max-w-[470px]">
              Tranexamic acid, niacinamide, glutathione, and supportive brightening blends are framed here as customer-facing benefits that register quickly.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-[80px] mb-[160px]">
          {ingredientStories.slice(0, 3).map((story, index) => {
            const storyProducts = story.foundIn.map((name) => productsByName[name]).filter(Boolean);
            const featureProduct = storyProducts[0];
            const themeColor = 
              story.theme === 'gold' ? 'text-gold-bright' : 
              story.theme === 'sage' ? 'text-[#93ad88]' : 'text-[#d09080]';
            const themeBg = 
              story.theme === 'gold' ? 'bg-gold-bright' : 
              story.theme === 'sage' ? 'bg-[#93ad88]' : 'bg-[#d09080]';
            const themeBorder = 
              story.theme === 'gold' ? 'border-gold-bright/20' : 
              story.theme === 'sage' ? 'border-[#93ad88]/20' : 'border-[#d09080]/20';

            return (
              <FadeIn
                key={story.name}
                delay={index * 0.15}
                className="relative min-h-[600px] md:min-h-[700px] border border-cream-deep/10 bg-ink-light overflow-hidden group shadow-[0_50px_120px_rgba(0,0,0,0.5)]"
              >
                {/* Layer 0: The Blueprint Background */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04] select-none z-0">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[28vw] leading-none whitespace-nowrap tracking-[-0.05em] uppercase transition-transform duration-1000 group-hover:scale-110">
                    {story.name.split(' ')[0]}
                  </div>
                </div>

                {/* Layer 1: Scientific Grid & Coordinates */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div className="absolute left-[5%] top-0 bottom-0 w-[1px] bg-cream-deep/10"></div>
                  <div className="absolute right-[5%] top-0 bottom-0 w-[1px] bg-cream-deep/10"></div>
                  <div className="absolute top-[10%] left-0 right-0 h-[1px] bg-cream-deep/10"></div>
                  <div className="absolute bottom-[10%] left-0 right-0 h-[1px] bg-cream-deep/10"></div>
                  
                  {/* Coordinate labels */}
                  <div className="absolute top-4 left-[5%] -translate-x-1/2 font-mono text-[7px] text-cream-deep/20">LAT.44.02</div>
                  <div className="absolute top-4 right-[5%] translate-x-1/2 font-mono text-[7px] text-cream-deep/20">LNG.122.9</div>
                  <div className="absolute bottom-4 left-[5%] -translate-x-1/2 font-mono text-[7px] text-cream-deep/20">REF.V{index + 1}</div>
                </div>

                {/* Layer 2: The Specimen Tray (absolute inset-0 z-10) */}
                <div className="absolute inset-0 z-10 flex flex-col lg:flex-row">
                  {/* Left Section: Visual Analysis */}
                  <div className="relative w-full lg:w-[48%] h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-cream-deep/10 flex items-center justify-center p-12 overflow-hidden">
                    {/* Scanning Line Animation */}
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[1px] bg-gold-bright/20 z-20 pointer-events-none"
                    />

                    <div className="relative group/specimen">
                      <div className={`absolute -inset-16 ${themeBg}/10 blur-[80px] rounded-full opacity-40 group-hover:opacity-90 transition-all duration-1000 animate-pulse`}></div>
                      <motion.div
                        whileHover={{ y: -15, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                      >
                        <ProductImage product={featureProduct} className="border border-cream-deep/10 bg-ink shadow-2xl max-w-[260px] md:max-w-[320px] lg:max-w-[340px]" />
                        
                        {/* Technical Floating Tags */}
                        <div className="absolute -top-6 -right-6 bg-ink/80 backdrop-blur-md border border-cream-deep/10 p-3 shadow-xl">
                          <div className="font-mono text-[7px] text-cream-deep/40 uppercase mb-1">Purity Level</div>
                          <div className={`font-serif text-[14px] ${themeColor}`}>99.8% CLINICAL</div>
                        </div>
                      </motion.div>
                    </div>

                    <div className="absolute top-12 left-12">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${themeBg} shadow-[0_0_20px_rgba(212,175,55,0.6)]`}></div>
                        <span className="font-mono text-[10px] uppercase tracking-[4px] text-cream-deep/40">Specimen.LOG.0{index + 1}</span>
                      </div>
                      <div className="h-[40px] w-[1px] bg-cream-deep/20 ml-[5px]"></div>
                    </div>
                  </div>

                  {/* Right Section: Clinical Report */}
                  <div className="relative flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-ink-light/40 backdrop-blur-sm">
                    <div className="max-w-[560px]">
                      <div className="font-mono text-[9px] uppercase tracking-[5px] text-gold-bright mb-10 flex items-center gap-4">
                        <span className="opacity-30">ANALYSIS:</span> {story.claim}
                        <div className="h-[1px] flex-grow bg-gold-bright/10"></div>
                      </div>

                      <h3 className="font-serif text-[clamp(40px,5.5vw,68px)] leading-[0.88] text-cream-deep mb-8 tracking-[-2px] uppercase">
                        {story.name}
                      </h3>

                      <p className="text-[17px] md:text-[19px] text-cream-deep/70 leading-[1.8] mb-12 italic font-serif border-l-2 border-gold-bright/30 pl-8 relative">
                        {story.body}
                      </p>

                      <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                        {/* Technical Specs */}
                        <div className="space-y-6">
                           <div>
                            <div className="font-mono text-[8px] uppercase tracking-[3px] text-cream-deep/30 mb-3 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gold-bright/40"></div>
                              Molecular Weight
                            </div>
                            <div className="font-serif text-[18px] text-cream-deep/90">248.3 g/mol</div>
                          </div>
                          <div>
                            <div className="font-mono text-[8px] uppercase tracking-[3px] text-cream-deep/30 mb-3 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gold-bright/40"></div>
                              Target Layer
                            </div>
                            <div className="font-serif text-[18px] text-cream-deep/90">Deep Epidermis</div>
                          </div>
                        </div>

                        {/* Integration */}
                        <div className="space-y-6">
                           <div>
                            <div className="font-mono text-[8px] uppercase tracking-[3px] text-cream-deep/30 mb-3 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gold-bright/40"></div>
                              Clinical Application
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {featureProduct.ingredientHighlights.slice(0, 2).map(tag => (
                                <span key={tag} className={`px-2 py-1 border ${themeBorder} text-[9px] uppercase tracking-[1px] ${themeColor}`}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="font-mono text-[8px] uppercase tracking-[3px] text-cream-deep/30 mb-3 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gold-bright/40"></div>
                              System Integration
                            </div>
                            <div className="space-y-1">
                              {storyProducts.slice(0, 2).map(p => (
                                <Link key={p.slug} to={`/products/${p.slug}`} className="block font-mono text-[9px] text-gold-bright hover:text-cream-deep transition-colors tracking-[2px] uppercase">
                                  {p.displayName} →
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Scientific Footer Overlay */}
                    <div className="absolute bottom-8 right-12 text-right hidden md:block">
                       <div className="font-mono text-[7px] uppercase tracking-[4px] text-cream-deep/15 mb-2">Technical Dossier Rev.2026</div>
                       <div className="flex justify-end gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-[2px] h-[10px] ${i < 3 ? 'bg-gold-bright/30' : 'bg-gold-bright/5'}`}></div>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mb-[72px] relative overflow-hidden border border-cream-deep/8 min-h-[280px] md:min-h-[360px]">
          <img
            src={brandVisuals.scienceRepair}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-light/88 via-ink-light/52 to-transparent" />
          <div className="relative z-10 max-w-[520px] p-[26px] md:p-[40px]">
            <div className="font-mono text-[8.5px] uppercase tracking-[2.5px] text-gold-bright mb-[12px]">
              Repair / Barrier Story
            </div>
            <h3 className="font-serif [text-wrap:balance] text-[clamp(24px,3vw,38px)] text-cream-deep/92 leading-[1.05] mb-[12px] max-w-[24ch]">
              Recovery is part of the glow story,
              <br />
              <em className="text-gold-bright italic">not a separate afterthought.</em>
            </h3>
            <p className="text-[13.5px] text-cream-deep/48 leading-[1.75] max-w-[470px]">
              Barrier-friendly ingredients help the range stay usable after stronger brightening or protocol-led steps, giving the brand a more complete skincare position.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-[72px]">
          <FadeIn className="border border-cream-deep/8 overflow-hidden bg-cream-deep/[0.025]">
            <img
              src={groupSceneVisuals.toneCorrection}
              alt="Tone correction product family"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-[22px]">
              <div className="font-mono text-[8px] uppercase tracking-[2px] text-gold-bright mb-[8px]">Visual Family 01</div>
              <h3 className="font-serif [text-wrap:balance] text-[24px] text-cream-deep/92 mb-[10px] max-w-[20ch]">Tone Correction</h3>
              <p className="text-[12.8px] text-cream-deep/45 leading-[1.75]">
                Serum and brightening finishes now read as one connected system instead of isolated SKUs.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.06} className="border border-cream-deep/8 overflow-hidden bg-cream-deep/[0.025]">
            <img
              src={groupSceneVisuals.barrierRecovery}
              alt="Barrier recovery product family"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-[22px]">
              <div className="font-mono text-[8px] uppercase tracking-[2px] text-gold-bright mb-[8px]">Visual Family 02</div>
              <h3 className="font-serif [text-wrap:balance] text-[24px] text-cream-deep/92 mb-[10px] max-w-[20ch]">Recovery Family</h3>
              <p className="text-[12.8px] text-cream-deep/45 leading-[1.75]">
                Repair and comfort products now read as a broader recovery system instead of one isolated ingredient cluster.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mb-[88px]">
          {productGalleryMoments.map((moment, index) => (
            <FadeIn key={moment.title} delay={index * 0.05} className="border border-cream-deep/8 bg-cream-deep/[0.025]">
              <div className="grid grid-cols-3 gap-[1px] bg-cream-deep/8">
                {moment.products.map((name) => {
                  const product = productsByName[name];
                  return (
                    <div key={product.slug}>
                      <ProductImage product={product} className="aspect-[3/4] bg-ink" />
                    </div>
                  );
                })}
              </div>
              <div className="p-[22px]">
                <div className="font-mono text-[8px] uppercase tracking-[2px] text-gold-bright mb-[8px]">
                  Ingredient Family {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif [text-wrap:balance] text-[24px] text-cream-deep/92 mb-[10px] max-w-[20ch]">{moment.title}</h3>
                <p className="text-[12.8px] text-cream-deep/45 leading-[1.75]">{moment.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-cream-deep/10 bg-cream-deep/10">
          {ingredientStories.slice(3).map((story, index) => (
            <FadeIn key={story.name} delay={index * 0.04} className="bg-ink-light p-[34px] md:p-[42px] border-r last:border-r-0 border-cream-deep/5 group hover:bg-cream-deep/[0.03] transition-colors relative">
              <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-cream-deep/10 uppercase">
                Story.0{index + 4}
              </div>
              {ingredientSceneMap[story.name] ? (
                <img
                  src={ingredientSceneMap[story.name]}
                  alt={story.name}
                  className="w-full aspect-[4/3] object-cover border border-cream-deep/8 mb-[24px]"
                />
              ) : null}
              <div className="font-mono text-[9px] uppercase tracking-[3px] text-gold-bright/80 mb-[20px] flex items-center gap-[8px]">
                <div className="w-[8px] h-[1px] bg-gold-bright/30"></div>
                {story.claim}
              </div>
              <h3 className="font-serif text-[28px] text-cream-deep/95 mb-[16px] tracking-[-0.5px] group-hover:text-gold-bright transition-colors">{story.name}</h3>
              <p className="text-[13.5px] text-cream-deep/45 leading-[1.8] mb-[28px] max-w-[280px]">{story.body}</p>
              
              <div className="space-y-[12px] pt-[24px] border-t border-cream-deep/5">
                <div className="font-mono text-[8px] uppercase tracking-[2px] text-cream-deep/20">Featured In</div>
                {story.foundIn.map((name) => {
                  const product = productsByName[name];
                  return (
                    <Link
                      key={product.slug}
                      to={`/products/${product.slug}`}
                      className="block font-mono text-[8.5px] uppercase tracking-[2px] text-cream-deep/50 hover:text-gold-bright transition-all flex items-center gap-[8px]"
                    >
                      <div className="w-[4px] h-[4px] rounded-full bg-cream-deep/10"></div>
                      {product.displayName}
                    </Link>
                  );
                })}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
