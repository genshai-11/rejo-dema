import Hero from '../components/Hero';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Video Showcase Section */}
      <section className="py-[96px] md:py-[120px] px-6 md:px-[52px] bg-ink border-t border-cream/5 overflow-hidden text-cream-deep">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] lg:gap-[80px] items-center">
            
            <FadeIn delay={0.2} className="order-1 lg:order-1 flex flex-col justify-center">
              <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[16px]">
                <div className="w-[14px] h-[1px] bg-gold"></div>
                Visualizing Efficacy
              </div>
              <h2 className="font-serif text-[clamp(32px,5vw,56px)] leading-[1.05] tracking-[-1px] text-cream-deep mb-[20px]">
                The science of penetration.<br />
                <em className="text-gold italic font-serif">In motion.</em>
              </h2>
              <p className="text-[14.5px] text-cream-deep/70 leading-[1.9] mb-[40px]">
                 Watch how our hydrogel matrix prevents active ingredient evaporation, driving compounds up to 3x deeper into the dermis layer. This is not a matter of different ingredients, but a matter of a superior delivery mechanism.
              </p>
              <div>
                <Link 
                  to="/products"
                  className="inline-block font-mono text-[10px] uppercase tracking-[2px] px-[32px] py-[16px] bg-cream text-ink hover:bg-gold-bright hover:text-ink transition-colors duration-300"
                >
                  Explore Formulas
                </Link>
              </div>
            </FadeIn>

            <FadeIn className="order-2 lg:order-2 relative aspect-[4/3] md:aspect-video lg:aspect-square w-full">
              <div className="w-full h-full border border-cream/5 relative overflow-hidden bg-ink-light rounded-sm">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="relative z-10 w-full h-full object-cover"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-water-drops-on-a-leaf-5244/1080p.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute bottom-[20px] left-[20px] z-20 font-mono text-[9px] uppercase tracking-[2px] text-ink bg-cream/90 backdrop-blur-md px-[12px] py-[6px] border border-cream/10">
                  Lumiglow™ Premium
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-[96px] px-6 md:px-[52px] bg-ink-light border-t border-cream-deep/5 text-cream-deep">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-end pb-[48px] border-b border-cream-deep/5 mb-[64px]">
            <FadeIn>
              <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold-bright flex items-center gap-[10px] mb-[12px]">
                <div className="w-[14px] h-[1px] bg-gold-bright"></div>
                Brand Voice
              </div>
              <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] leading-[1.0] tracking-[-0.3px] text-cream-deep/90">
                Four principles.<br />
                <em className="text-gold-bright italic">No exceptions.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[14.5px] text-cream-deep/40 leading-[1.9]">
                The way Rejo Derma speaks is as deliberate as the way it formulates. One mechanism explained clearly outperforms ten adjectives. Trust is built through specificity, not superlatives.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { num: '01', title: 'Say less. Say precisely.', body: 'No superlatives. No unsupported claims. A mechanism explained correctly has more persuasive power than any marketing adjective. We let the ingredient list and the science speak first.' },
              { num: '02', title: 'Expert friend, not lecturer.', body: 'Not a doctor presenting findings. Not a salesperson closing. Someone who understands skin and wants you to understand it too — not because understanding sells, but because it produces better results.' },
              { num: '03', title: "Never promise what we can't control.", body: 'Skin is individual. We describe mechanisms, not guaranteed outcomes. A brand that understates never disappoints. A brand that overpromises always does. We choose the former, every time.' },
              { num: '04', title: 'Korean precision. Human warmth.', body: 'Korean clinical standards in every formula. Warmth in every conversation. Premium without being cold. Expert without being distant. These are not opposites — they are the same thing executed well.' }
            ].map((item, idx) => (
              <FadeIn 
                key={idx} 
                delay={idx * 0.1}
                className={`p-[40px] pt-[40px] pb-[44px] border-t border-cream-deep/5 hover:bg-cream-deep/[0.03] transition-colors ${idx % 2 === 0 ? 'md:border-r md:border-cream-deep/5' : ''}`}
              >
                <div className="font-mono text-[9px] uppercase tracking-[2.5px] text-gold-bright/50 mb-[16px]">{item.num}</div>
                <h3 className="font-serif text-[22px] font-normal text-cream-deep/90 mb-[12px]">{item.title}</h3>
                <p className="text-[13.5px] text-cream-deep/40 leading-[1.8]">{item.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Banner */}
      <section className="py-[96px] md:py-[140px] px-6 md:px-[52px] bg-ink text-cream-deep border-t border-cream-deep/5">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-cream/5 bg-ink-light">
            <div className="relative aspect-square lg:aspect-auto overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80")' }}
              ></div>
              {/* Overlay for brand cohesiveness matching theme colors */}
              <div className="absolute inset-0 bg-ink/40 mix-blend-color"></div>
              <div className="absolute inset-0 bg-ink/20 mix-blend-multiply"></div>
              
              <div className="absolute bottom-[30px] right-[30px] font-mono text-[9px] uppercase tracking-[2px] text-gold bg-ink/90 px-[12px] py-[6px] backdrop-blur-sm border border-gold/20">
                System Core · Tranexamic Acid
              </div>
            </div>
            
            <div className="flex flex-col justify-center p-[40px] md:p-[80px]">
              <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[16px]">
                <div className="w-[14px] h-[1px] bg-gold"></div>
                Featured System
              </div>
              <h2 className="font-serif text-[clamp(28px,3.5vw,46px)] leading-[1.1] tracking-[-0.5px] text-cream-deep mb-[24px]">
                The complete standard for<br />
                <em className="text-gold italic font-serif">hyperpigmentation.</em>
              </h2>
              <p className="text-[14.5px] text-cream-deep/70 leading-[1.9] mb-[40px] max-w-[450px]">
                Brightening requires more than just Vitamin C. Our flagship 3% Tranexamic Acid protocol disrupts the melanin synthesis pathway at the cellular level, ensuring even skin tone without compromising the barrier.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-[16px] sm:items-center">
                <Link 
                  to="/system"
                  className="inline-block text-center font-mono text-[10px] uppercase tracking-[2px] px-[32px] py-[16px] border border-cream text-cream hover:bg-cream hover:text-ink transition-colors duration-300"
                >
                  View The Protocol
                </Link>
                <Link 
                  to="/science"
                  className="inline-block text-center font-mono text-[10px] uppercase tracking-[2px] px-[24px] py-[16px] text-cream/70 hover:text-gold transition-colors duration-300"
                >
                  Read Ingredient Data
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
