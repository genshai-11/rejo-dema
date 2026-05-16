import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import { brandVisuals, launchProducts, orderedProducts } from '../data/products';

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[100svh] bg-ink-light pt-16 flex flex-col overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={brandVisuals.homeHero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 pointer-events-none grain-overlay opacity-55 z-0"></div>
        <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-ink via-ink/78 to-ink/36"></div>
        <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/24"></div>

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
                Korean Clinical Skincare / Glow, Repair, Protect
              </span>
            </motion.div>

            <h1 className="font-serif leading-[0.85] tracking-[-3px] mb-2 font-normal">
              <FadeIn direction="up" delay={0.2} duration={1.2} className="block text-[clamp(64px,10vw,142px)] text-cream-deep/95">
                Precision
              </FadeIn>
              <FadeIn direction="up" delay={0.3} duration={1.2} className="block text-[clamp(64px,10vw,142px)] italic text-gold-bright pl-[52px] -mt-[0.1em]">
                Skin.
              </FadeIn>
              <FadeIn direction="up" delay={0.4} duration={1.2} className="block text-[clamp(28px,4vw,56px)] font-light text-cream-deep/20 tracking-[-1.5px] mt-[12px]">
                Calm Routine.
              </FadeIn>
            </h1>

            <FadeIn delay={0.5} duration={1}>
              <p className="text-[16px] text-cream-deep/45 leading-[1.85] max-w-[480px] mb-[48px]">
                Korean clinical skincare built to brighten visibly, recover comfortably, and protect daily.
                Formulated for results, designed for the ritual.
              </p>
            </FadeIn>

            <FadeIn delay={0.65} className="flex flex-wrap items-center gap-[24px]">
              <Link
                to="/products"
                className="group relative overflow-hidden bg-gold text-ink font-mono text-[10px] uppercase tracking-[3px] px-[32px] py-[16px] transition-all duration-500"
              >
                <span className="absolute inset-0 bg-gold-bright translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 flex items-center gap-[12px]">
                  Explore Products
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/routine"
                className="group flex items-center gap-3 text-cream-deep/40 hover:text-gold-bright transition-all font-mono text-[10px] uppercase tracking-[2.5px]"
              >
                <span className="border-b border-cream-deep/15 group-hover:border-gold-bright pb-1 transition-colors">Build Your Routine</span>
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </Link>
            </FadeIn>
          </div>

          <div className="hidden lg:block pb-12">
            <FadeIn delay={0.7} className="flex flex-col">
              <div className="flex items-center gap-[10px] mb-[14px]">
                <span className="font-mono text-[8.5px] uppercase tracking-[3px] text-cream-deep/20">Hero products</span>
                <div className="flex-1 h-[1px] bg-cream-deep/5"></div>
              </div>

              <div className="space-y-0">
                {launchProducts.map((item) => (
                  <div key={item.slug} className="flex items-center group cursor-default py-[14px] border-t border-cream-deep/5 border-l-2 border-gold-bright pl-[14px]">
                    <span className="bg-gold-bright text-ink-light text-[7.5px] px-[7px] py-[2px] mr-[10px] font-mono tracking-[1.5px]">NEW</span>
                    <span className="font-serif text-[15px] font-normal text-cream-deep/90 flex-1 leading-[1.2]">
                      {item.displayName}
                    </span>
                    <span className="font-mono text-[9px] text-cream-deep/20 pl-[12px]">{item.capacity}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[10px] mb-[14px] mt-[24px]">
                <span className="font-mono text-[8.5px] uppercase tracking-[3px] text-cream-deep/20">Supporting range</span>
                <div className="flex-1 h-[1px] bg-cream-deep/5"></div>
              </div>

              <div className="space-y-0">
                {orderedProducts.slice(2, 6).map((item) => (
                  <div key={item.slug} className="flex items-center py-[14px] border-t border-cream-deep/5 hover:bg-cream-deep/[0.03] transition-colors">
                    <span className="font-serif text-[15px] font-normal text-cream-deep/55 flex-1 leading-[1.2]">{item.displayName}</span>
                    <span className="font-mono text-[9px] text-cream-deep/20 pl-[12px]">{item.capacity}</span>
                  </div>
                ))}
                <div className="py-[12px] font-mono text-[9px] tracking-[1px] text-cream-deep/20">
                  + {orderedProducts.length - 6} more products in the routine {'->'}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="bg-gold h-10 overflow-hidden flex items-center border-t border-cream-deep/5 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: '-50%' }}
            transition={{
              opacity: { delay: 1.1, duration: 1 },
              x: { duration: 50, repeat: Infinity, ease: 'linear' },
            }}
            className="flex whitespace-nowrap items-center"
          >
            {[...Array(4)].map((_, loop) => (
              <div key={loop} className="flex items-center">
                {[
                  { n: '2', l: 'Masks launching' },
                  { n: String(orderedProducts.length), l: 'Total products' },
                  { n: '5', l: 'Routine steps' },
                  { n: '6', l: 'Product families' },
                  { n: '100%', l: 'Made in Korea' },
                ].map((stat, idx) => (
                  <div key={`${loop}-${idx}`} className="flex items-center px-[20px] shrink-0">
                    <span className="font-serif font-semibold text-[16px] text-ink-light leading-none">{stat.n}</span>
                    <span className="font-mono font-semibold text-[8px] uppercase tracking-[1.7px] text-ink-light/80 ml-[8px]">
                      {stat.l}
                    </span>
                    <span className="w-[3px] h-[3px] rounded-full bg-ink-light/25 ml-[14px]"></span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
