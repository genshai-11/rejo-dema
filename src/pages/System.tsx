import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';

export default function SystemPage() {
  return (
    <div className="pt-[96px] px-6 md:px-[52px] bg-cream-deep min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[12px]">
            <div className="w-[14px] h-[1px] bg-gold"></div>
            The Brightening System
          </div>
          <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] leading-[1.0] tracking-[-0.3px] text-ink mb-[14px]">
            Four daily steps.<br />
            <em className="text-gold italic font-serif">One weekly boost.</em>
          </h2>
          <p className="text-[14.5px] text-ink/70 leading-[1.9] max-w-[540px] mt-[8px]">
            The daily routine follows a clear skin logic — four actions, each building on the previous. The two masks sit outside this daily flow: used twice a week, they amplify what the routine has already put in place.
          </p>
        </FadeIn>

        <div className="mt-[60px]">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-4 gap-0 relative mb-[3px]">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute left-[28px] right-[28px] top-[27px] h-[1px] bg-gradient-to-r from-gold to-gold/15 z-0"></div>
            
            {[
              { icon: '🧴', n: '01 · Prep', title: 'Cleanse', emp: 'properly.', body: 'Clean skin absorbs actives up to 40% more effectively. This step is not cosmetic — it is the condition that makes every other step function.', prod: 'Micellar Water · Cleansing Foam' },
              { icon: '✦', n: '02 · Brighten', title: 'Interrupt', emp: 'melanin.', body: 'Three mechanisms simultaneously: block synthesis at the source, block transfer to the surface, and prevent UV from reactivating the entire process. Morning and evening.', prod: 'TA Serum · Spotless Cream (PM)' },
              { icon: '🛡', n: '03 · Repair', title: 'Rebuild', emp: 'the barrier.', body: 'Actives only work when the barrier holding them in is intact. Peptides, Ceramide, and Retinol — alternated correctly — rebuild structure overnight without conflict.', prod: 'Peptide Cream · Heal Serum (alt.)' },
              { icon: '☀️', n: '04 · Protect', title: 'Block UV', emp: 'reactivation.', body: 'UV triggers melanin synthesis faster than any active can suppress it. LumiShield™ SPF closes the loop — and contains TA + Niacinamide to continue brightening while it protects.', prod: 'LumiShield™ Brightening SPF' }
            ].map((step, idx) => (
              <div key={idx} className={`relative z-10 pb-[36px] lg:px-[28px] ${idx===0?'lg:pl-0':''} ${idx===3?'lg:pr-0':''}`}>
                <div className="w-[54px] h-[54px] rounded-full border border-ink/5 bg-cream-deep flex items-center justify-center text-[18px] mb-[20px] relative z-10 transition-all hover:border-gold hover:bg-gold-soft">
                  {step.icon}
                </div>
                <div className="font-mono text-[8.5px] tracking-[2px] uppercase text-gold mb-[8px]">{step.n}</div>
                <div className="font-serif text-[20px] font-normal text-ink mb-[6px]">
                  {step.title} <em className="text-gold italic font-serif">{step.emp}</em>
                </div>
                <p className="text-[13px] text-ink/70 leading-[1.75] mb-[10px]">{step.body}</p>
                <div className="font-mono text-[8.5px] tracking-[1px] uppercase text-ink/50 py-[4px] px-[10px] bg-cream-dark inline-block">{step.prod}</div>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.2} className="p-[28px] md:p-[32px] border border-gold/15 bg-gold-soft relative mt-[20px]">
            <div className="absolute top-[-11px] left-[28px] bg-gold-soft px-[10px] font-mono text-[8px] tracking-[2.5px] uppercase text-gold border border-gold/15">
              2× / week
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <div className="flex gap-[14px] items-start">
                <div className="text-[18px] shrink-0 mt-[2px]">✨</div>
                <div>
                  <div className="font-serif text-[15px] font-normal text-ink mb-[3px]">
                    LumiGlow™ Hydrogel Mask
                    <span className="font-mono text-[7.5px] tracking-[1.5px] bg-gold text-white px-[6px] py-[2px] ml-[6px] align-middle">NEW</span>
                  </div>
                  <p className="text-[12.5px] text-ink/70 leading-[1.65]">Boosts Step 02 — Brighten. Hydrogel seal drives TA + Alpha-Arbutin 3–5× deeper on the two days it is used. Applied over the serum: sandwich technique.</p>
                </div>
              </div>
              <div className="flex gap-[14px] items-start">
                <div className="text-[18px] shrink-0 mt-[2px]">🌿</div>
                <div>
                  <div className="font-serif text-[15px] font-normal text-ink mb-[3px]">
                    Intensive Soothing Mask
                    <span className="font-mono text-[7.5px] tracking-[1.5px] bg-gold text-white px-[6px] py-[2px] ml-[6px] align-middle">NEW</span>
                  </div>
                  <p className="text-[12.5px] text-ink/70 leading-[1.65]">Boosts Step 03 — Repair. Beta-Glucan and 5× Probiotic Ferments restore barrier and microbiome after Retinol or treatment. Used after every Retinol evening — without exception.</p>
                </div>
              </div>
              
              <div className="font-mono text-[8.5px] tracking-[1px] text-gold mt-[16px] pt-[14px] border-t border-gold/15 md:col-span-2">
                Masks do not replace any daily step — they intensify the routine on the two days they are used.
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
