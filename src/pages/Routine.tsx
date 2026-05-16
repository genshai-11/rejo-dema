import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Droplets, Leaf, ScanLine, Shield, Sparkles } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { launchProducts, productsByName, systemSteps } from '../data/products';

const benefitCards = [
  {
    title: 'Easy to follow',
    body: 'Know what to use first, what to repeat daily, and what to add when skin needs more support.',
    icon: ScanLine,
  },
  {
    title: 'More visible glow',
    body: 'Each layer supports the next, so tone care feels more consistent instead of depending on one hero product.',
    icon: Sparkles,
  },
  {
    title: 'Comfort that lasts',
    body: 'Barrier support and daily protection help brightening stay comfortable, not short-lived or aggressive.',
    icon: Shield,
  },
] as const;

const stepIcons = [Droplets, ScanLine, Sparkles, Leaf, Shield] as const;

export default function RoutinePage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = systemSteps[activeStepIndex];
  const ActiveIcon = stepIcons[activeStepIndex] ?? Droplets;

  return (
    <div className="pt-[96px] px-6 md:px-[52px] bg-cream-deep min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[12px]">
            <div className="w-[14px] h-[1px] bg-gold"></div>
            The Rejo Derma Routine
          </div>
          <h2 className="font-serif [text-wrap:balance] text-[clamp(32px,5vw,58px)] leading-[1.05] tracking-[-0.3px] text-ink mb-[14px] max-w-[22ch]">
            Five routine layers.<br />
            <em className="text-gold italic font-serif">Build visible glow without losing comfort.</em>
          </h2>
          <p className="text-[15px] text-ink/70 leading-[1.8] max-w-[620px] mt-[8px]">
            Cleanse first, refine with intention, brighten consistently, repair the barrier, and protect results every day.
            When the base routine is in place, masks become the intensive layer for faster glow or a calmer recovery moment.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[48px] mb-[80px] relative">
           {/* Vertical decorative text */}
           <div className="absolute -left-[52px] top-0 h-full hidden 2xl:flex items-center">
            <div className="font-mono text-[9px] uppercase tracking-[5px] text-ink/10 -rotate-90 origin-center whitespace-nowrap">
              Routine.Logic.System
            </div>
          </div>

          {benefitCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={0.06 * index}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="border border-ink/10 bg-white/50 backdrop-blur-sm p-[24px] md:p-[32px] h-full group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-ink/5">0{index + 1}</div>
                  <div className="w-[46px] h-[46px] border border-gold/20 bg-gold-soft/30 flex items-center justify-center text-gold mb-[24px] group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                    <Icon size={20} strokeWidth={1.3} />
                  </div>
                  <div className="font-serif text-[22px] leading-[1.1] text-ink mb-[12px] tracking-[-0.5px]">{item.title}</div>
                  <p className="text-[13.5px] text-ink/60 leading-[1.8]">{item.body}</p>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-[100px] mb-[40px] border-t border-ink/5 pt-[48px]">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-[48px]">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[12px]">
                <div className="w-[12px] h-[1px] bg-gold"></div>
                02. Interaction
              </div>
              <h2 className="font-serif text-[clamp(28px,3.5vw,46px)] leading-[1.02] text-ink">
                Choose a step to explore <br />
                <em className="text-gold italic">the formula logic.</em>
              </h2>
            </div>
            <p className="text-[14.5px] text-ink/50 leading-[1.8] max-w-[480px]">
              Open one layer at a time to see what it does, why it matters, and which curated products belong to that specific routine role.
            </p>
          </FadeIn>

          <div className="relative mb-[32px]">
            {/* Connecting line for desktop */}
            <div className="absolute top-[40px] left-0 w-full h-[1px] bg-ink/5 hidden xl:block -z-10"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-[12px]">
              {systemSteps.map((step, idx) => {
                const Icon = stepIcons[idx] ?? Droplets;
                const isActive = idx === activeStepIndex;

                return (
                  <FadeIn key={step.step} delay={idx * 0.04}>
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex(idx)}
                      className={`group w-full text-left border p-[20px] md:p-[24px] transition-all duration-300 relative ${
                        isActive
                          ? 'border-gold bg-white shadow-[0_20px_50px_rgba(212,175,55,0.08)] -translate-y-[4px]'
                          : 'border-ink/5 bg-white/50 hover:border-gold/30 hover:bg-white hover:-translate-y-[2px]'
                      }`}
                    >
                      {/* Active indicator line */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeTab"
                          className="absolute -top-[1px] left-0 w-full h-[3px] bg-gold"
                        />
                      )}

                      <div className="flex items-start justify-between gap-[12px] mb-[20px]">
                        <div className={`w-[46px] h-[46px] rounded-full border transition-colors flex items-center justify-center shrink-0 ${
                          isActive ? 'border-gold bg-gold-soft text-gold' : 'border-gold/15 bg-white text-gold/40 group-hover:border-gold/30 group-hover:text-gold/60'
                        }`}>
                          <Icon size={19} strokeWidth={1.45} />
                        </div>
                        <div className="font-mono text-[8.5px] uppercase tracking-[2.5px] text-ink/30">Step 0{step.step}</div>
                      </div>
                      <div className="font-serif text-[21px] leading-[1.05] text-ink mb-[8px]">
                        {step.label} <br />
                        <em className={`italic font-serif transition-colors whitespace-nowrap ${isActive ? 'text-gold' : 'text-gold/40 group-hover:text-gold/60'}`}>
                          {step.emphasis}
                        </em>
                      </div>
                      <div className="font-mono text-[7.5px] uppercase tracking-[1.8px] text-ink/40 flex items-center gap-[6px]">
                        <span className={`w-[4px] h-[4px] rounded-full ${isActive ? 'bg-gold' : 'bg-ink/10'}`}></span>
                        {step.products.length} {step.products.length > 1 ? 'Formulas' : 'Formula'}
                      </div>
                    </button>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border border-gold/15 bg-white p-[30px] md:p-[48px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[40px] shadow-sm relative overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-soft/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10" />

            <div>
              <div className="flex items-center gap-[16px] mb-[24px]">
                <div className="w-[54px] h-[54px] rounded-full border border-gold/25 bg-gold-soft/40 flex items-center justify-center text-gold shrink-0 shadow-inner">
                  <ActiveIcon size={22} strokeWidth={1.4} />
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-[2.5px] text-gold mb-[6px]">Routine Layer 0{activeStep.step}</div>
                  <h3 className="font-serif [text-wrap:balance] text-[clamp(28px,4vw,42px)] leading-[1.02] text-ink max-w-[20ch]">
                    {activeStep.label} <em className="text-gold italic font-serif">{activeStep.emphasis}</em>
                  </h3>
                </div>
              </div>
              <p className="text-[15px] text-ink/70 leading-[1.85] max-w-[580px] mb-[32px]">{activeStep.body}</p>
              
              <div className="flex flex-wrap gap-[12px]">
                {['Daily Ritual', 'Barrier Focus', 'Glow Support'].map(tag => (
                  <span key={tag} className="px-[12px] py-[6px] border border-gold/15 bg-gold-soft/30 text-gold text-[10px] font-mono uppercase tracking-[1.5px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-gold/10 bg-cream-deep/30 p-[24px] md:p-[32px] relative">
              <div className="font-mono text-[8.5px] uppercase tracking-[2.5px] text-gold mb-[18px] flex items-center gap-[10px]">
                <div className="w-[12px] h-[1px] bg-gold"></div>
                Curated Formulas
              </div>
              <div className="space-y-[12px]">
                {activeStep.products.map((name) => {
                  const product = productsByName[name];
                  return (
                    <Link key={name} to={`/products/${product.slug}`} className="block">
                      <motion.div 
                        whileHover={{ x: 6 }}
                        className="group border border-white/80 bg-white/40 backdrop-blur-sm px-[18px] py-[18px] flex items-center justify-between gap-[16px] transition-all hover:border-gold/30 hover:bg-white/80"
                      >
                        <div>
                          <div className="font-serif text-[18px] leading-[1.1] text-ink group-hover:text-gold transition-colors">{product.displayName}</div>
                          <div className="font-mono text-[7.5px] uppercase tracking-[1.8px] text-ink/40 mt-[6px]">{product.category}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-mono text-[8px] uppercase tracking-[1.6px] text-ink/35 mb-[4px]">{product.capacity}</div>
                          <ArrowRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <FadeIn delay={0.2} className="p-[28px] md:p-[32px] border border-gold/15 bg-gold-soft relative mt-[26px]">
            <div className="absolute top-[-11px] left-[28px] bg-gold-soft px-[10px] font-mono text-[8px] tracking-[2.5px] uppercase text-gold border border-gold/15">
              Mask Layer
            </div>

            <div className="mb-[14px] max-w-[560px]">
              <h3 className="font-serif [text-wrap:balance] text-[clamp(24px,3vw,34px)] leading-[1.06] text-ink mb-[10px] max-w-[24ch]">
                Add masks when the routine needs a faster payoff.
              </h3>
              <p className="text-[13.5px] text-ink/68 leading-[1.75]">
                Daily layers create the foundation. Masks are the higher-impact step for faster glow or a calmer recovery reset.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              {launchProducts.map((product, index) => (
                <Link key={product.slug} to={`/products/${product.slug}`} className="block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="flex h-full gap-[14px] items-start border border-gold/15 bg-white/65 p-[16px] hover:bg-white transition-colors"
                  >
                    <div className="w-[38px] h-[38px] rounded-full border border-gold/20 bg-gold-soft/45 flex items-center justify-center text-[14px] text-gold shrink-0 mt-[2px]">
                      {index === 0 ? <Sparkles size={16} strokeWidth={1.5} /> : <Leaf size={16} strokeWidth={1.5} />}
                    </div>
                    <div>
                      <div className="font-serif [text-wrap:balance] text-[16px] font-normal text-ink mb-[4px] max-w-[16ch]">
                        {product.displayName}
                        <span className="font-mono text-[7.5px] tracking-[1.5px] bg-gold text-white px-[6px] py-[2px] ml-[6px] align-middle">NEW</span>
                      </div>
                      <p className="text-[12.5px] text-ink/70 leading-[1.65]">
                        {index === 0
                          ? 'Choose this mask for a fresher, more radiant finish and a more elevated glow ritual.'
                          : 'Choose this mask when skin feels dry, stressed, or in need of a calmer recovery layer.'}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}

              <div className="font-mono text-[8.5px] tracking-[1px] text-gold mt-[16px] pt-[14px] border-t border-gold/15 md:col-span-2">
                Lumiglow pushes visible glow forward. Intensive Soothing helps skin reset. The daily routine still does the long-term work.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.28} className="mt-[28px] border border-ink/5 bg-ink-light text-cream-deep p-[28px] md:p-[34px] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-[24px] items-center">
            <div>
              <div className="font-mono text-[8px] uppercase tracking-[2px] text-gold-bright mb-[10px]">Next step</div>
              <h3 className="font-serif [text-wrap:balance] text-[clamp(26px,3vw,36px)] leading-[1.05] text-cream-deep/92 mb-[10px] max-w-[24ch]">
                Ready to turn the routine into a product shortlist?
              </h3>
              <p className="text-[13.5px] text-cream-deep/55 leading-[1.75] max-w-[560px]">
                Explore the full range by routine role or move into ingredient stories if you want to understand the formulas behind the glow-and-recovery logic.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-[12px] md:min-w-[220px]">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-[8px] px-[22px] py-[14px] bg-gold text-ink font-mono text-[9px] uppercase tracking-[2px] hover:bg-gold-bright transition-colors"
              >
                View Products
                <ArrowRight size={12} />
              </Link>
              <Link
                to="/ingredients"
                className="inline-flex items-center justify-center gap-[8px] px-[22px] py-[14px] border border-cream-deep/15 text-cream-deep font-mono text-[9px] uppercase tracking-[2px] hover:border-gold-bright hover:text-gold-bright transition-colors"
              >
                Explore Ingredients
                <ArrowRight size={12} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
