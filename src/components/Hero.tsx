import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[100svh] bg-ink-light pt-16 flex flex-col overflow-hidden">
        {/* Decorative Overlays */}
        <div className="absolute inset-0 pointer-events-none grain-overlay opacity-55 z-0"></div>
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_60%_70%_at_78%_28%,rgba(181,129,26,0.16)_0%,transparent_55%),radial-gradient(ellipse_35%_40%_at_10%_78%,rgba(181,129,26,0.07)_0%,transparent_50%)]"></div>

        <div className="flex-1 px-6 md:px-[52px] pt-[72px] grid grid-cols-1 lg:grid-cols-[1fr_440px] items-end relative z-10 pb-12 gap-0">
          <div className="pb-12">
            <motion.div 
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex items-center gap-[14px] mb-[28px]"
            >
              <div className="w-[28px] h-[1px] bg-gold-bright shrink-0"></div>
              <span className="font-mono text-[9.5px] uppercase tracking-[4px] text-gold-bright">
                Korean Clinical Skincare · 2025
              </span>
            </motion.div>

            <h1 className="font-serif leading-[0.9] tracking-[-2px] mb-2 font-normal">
              <FadeIn direction="up" delay={0.28} className="block text-[clamp(60px,9vw,124px)] text-cream-deep/90">
                Precision
              </FadeIn>
              <FadeIn direction="up" delay={0.36} className="block text-[clamp(60px,9vw,124px)] italic text-gold-bright pl-[52px]">
                Skin.
              </FadeIn>
              <FadeIn direction="up" delay={0.44} className="block text-[clamp(28px,4vw,52px)] font-light text-cream-deep/20 tracking-[-1px] mt-[10px]">
                Pure Science.
              </FadeIn>
            </h1>

            <FadeIn delay={0.44}>
              <p className="text-[14.5px] text-cream-deep/40 leading-[1.9] max-w-[420px] mb-[44px]">
                A system where every product serves the whole. Nothing exists in isolation. 
                The SPF protects everything that came before it — and continues working while it does.
              </p>
            </FadeIn>

            <FadeIn delay={0.58} className="flex flex-wrap items-center gap-[20px]">
              <Link 
                to="/products"
                className="bg-gold hover:bg-gold-bright hover:gap-[18px] text-ink font-mono text-[9.5px] uppercase tracking-[2.5px] px-[26px] py-[13px] flex items-center gap-[12px] transition-all duration-300 group"
              >
                Discover the Masks
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about"
                className="text-cream-deep/35 hover:text-cream-deep/70 border-b border-cream-deep/15 hover:border-cream-deep/45 transition-all font-mono text-[9.5px] uppercase tracking-[2px] pb-[2px]"
              >
                Our Philosophy
              </Link>
            </FadeIn>
          </div>

          <div className="hidden lg:block pb-12">
            <FadeIn delay={0.7} className="flex flex-col">
              <div className="flex items-center gap-[10px] mb-[14px]">
                <span className="font-mono text-[8.5px] uppercase tracking-[3px] text-cream-deep/20">Launching now</span>
                <div className="flex-1 h-[1px] bg-cream-deep/5"></div>
              </div>
              
              <div className="space-y-0">
                {[
                  { name: 'LumiGlow™ ', type: 'Hydrogel Mask', size: '30g', isNew: true },
                  { name: 'Intensive ', type: 'Soothing Mask', size: '27ml', isNew: true },
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center group cursor-default py-[14px] border-t border-cream-deep/5 ${item.isNew ? 'border-l-2 border-gold-bright pl-[14px]' : ''}`}>
                    {item.isNew && <span className="bg-gold-bright text-ink-light text-[7.5px] px-[7px] py-[2px] mr-[10px] font-mono tracking-[1.5px]">NEW</span>}
                    <span className="font-serif text-[15px] font-normal text-cream-deep/90 flex-1 leading-[1.2]">
                      {item.name} <em className="text-gold-bright italic font-serif">{item.type}</em>
                    </span>
                    <span className="font-mono text-[9px] text-cream-deep/20 pl-[12px]">{item.size}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[10px] mb-[14px] mt-[24px]">
                <span className="font-mono text-[8.5px] uppercase tracking-[3px] text-cream-deep/20">Full range</span>
                <div className="flex-1 h-[1px] bg-cream-deep/5"></div>
              </div>

              <div className="space-y-0">
                {[
                  { name: 'Tranexamic Acid Serum', size: '7ml' },
                  { name: 'Spotless Brightening Cream', size: '30ml' },
                  { name: 'Repair Peptide Cream', size: '50ml' },
                  { name: 'Aqua Repair MTS Serum', size: '50ml' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center py-[14px] border-t border-cream-deep/5 hover:bg-cream-deep/[0.03] transition-colors">
                    <span className="font-serif text-[15px] font-normal text-cream-deep/55 flex-1 leading-[1.2]">{item.name}</span>
                    <span className="font-mono text-[9px] text-cream-deep/20 pl-[12px]">{item.size}</span>
                  </div>
                ))}
                <div className="py-[12px] font-mono text-[9px] tracking-[1px] text-cream-deep/20">+ 9 more products in the system →</div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="px-6 md:px-[52px] py-[18px] border-t border-cream-deep/5 flex gap-0 overflow-x-auto no-scrollbar relative z-10"
        >
          {[
            { n: '2', l: 'Masks launching' },
            { n: '15', l: 'Total products' },
            { n: '4', l: 'Korean labs' },
            { n: '3', l: 'SPF lines' },
            { n: '100%', l: 'Made in Korea' },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-baseline gap-[8px] px-[28px] first:pl-0 border-r border-cream-deep/5 last:border-0 shrink-0">
              <span className="font-serif text-[26px] text-gold-bright font-normal">{stat.n}</span>
              <span className="font-mono text-[8.5px] uppercase tracking-[1.5px] text-cream-deep/25">{stat.l}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Ticker */}
      <div className="h-[40px] bg-gold overflow-hidden flex items-center">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-mono text-[9.5px] tracking-[3px] uppercase text-ink-light px-[26px]">LumiGlow™ Hydrogel Mask</span>
              <div className="w-[3px] h-[3px] rounded-full bg-ink/20 shrink-0"></div>
              <span className="font-mono text-[9.5px] tracking-[3px] uppercase text-ink-light px-[26px]">Launching Now</span>
              <div className="w-[3px] h-[3px] rounded-full bg-ink/20 shrink-0"></div>
              <span className="font-mono text-[9.5px] tracking-[3px] uppercase text-ink-light px-[26px]">Intensive Soothing Mask</span>
              <div className="w-[3px] h-[3px] rounded-full bg-ink/20 shrink-0"></div>
              <span className="font-mono text-[9.5px] tracking-[3px] uppercase text-ink-light px-[26px]">Precision Skin. Pure Science.</span>
              <div className="w-[3px] h-[3px] rounded-full bg-ink/20 shrink-0"></div>
              <span className="font-mono text-[9.5px] tracking-[3px] uppercase text-ink-light px-[26px]">Made in Korea</span>
              <div className="w-[3px] h-[3px] rounded-full bg-ink/20 shrink-0"></div>
              <span className="font-mono text-[9.5px] tracking-[3px] uppercase text-ink-light px-[26px]">Brightening · Recovery · Firming</span>
              <div className="w-[3px] h-[3px] rounded-full bg-ink/20 shrink-0"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
