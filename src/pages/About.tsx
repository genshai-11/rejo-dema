import FadeIn from '../components/FadeIn';

export default function AboutPage() {
  return (
    <>
      <div className="pt-[96px] px-6 md:px-[52px] bg-cream">
        <div className="max-w-7xl mx-auto">
          
          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mt-[64px] pb-[96px]">
            <FadeIn className="lg:pr-[72px] lg:border-r border-ink/5">
              <div>
                <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[12px]">
                  <div className="w-[14px] h-[1px] bg-gold"></div>
                  About Rejo Derma
                </div>
                <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] leading-[1.0] tracking-[-0.3px] text-ink mb-[14px]">
                  The problem with skincare is not<br />
                  <em className="text-gold italic font-serif">the products.</em>
                </h2>
                <div className="border-l-[3px] border-gold pl-[28px] py-[4px] my-[36px]">
                  <p className="font-serif italic text-[clamp(20px,2.4vw,26px)] font-normal text-ink-light leading-[1.4]">
                    "The system was incomplete. Not the individual products. The system. The order. The timing. The step that protects every other step."
                  </p>
                  <div className="font-mono text-[10px] tracking-[2px] text-gold mt-[10px]">
                    — Rejo Derma
                  </div>
                </div>
              </div>
              
              <div className="mt-[32px]">
                <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[16px]">
                  <div className="w-[14px] h-[1px] bg-gold"></div>
                  Four Korean laboratories. Not one.
                </div>
                <div className="flex flex-col gap-0 mt-[32px]">
                  {[
                    { name: 'Picostech', spec: 'Peptide Lab', prod: 'Repair Peptide Cream · Heal Serum' },
                    { name: 'Yeonje', spec: 'Clinical Actives', prod: 'TA Serum · B5 Repair · Aqua MTS' },
                    { name: 'Rainbow', spec: 'SPF Specialist', prod: 'LumiShield™ · FirmShield™ · CalmShield™' },
                    { name: 'reBom', spec: 'Recovery & Barrier', prod: 'Heal Cream · Soothing Mask · Cleansing' },
                  ].map((lab, i) => (
                    <div key={i} className="flex items-baseline gap-[16px] py-[12px] border-b border-ink/5 first:border-t">
                      <div className="font-serif text-[17px] font-normal text-ink min-w-[100px]">{lab.name}</div>
                      <div className="font-mono text-[9px] uppercase tracking-[1.5px] text-gold min-w-[140px]">{lab.spec}</div>
                      <div className="text-[12.5px] text-ink/50">{lab.prod}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:pl-[72px] mt-12 lg:mt-0">
              <div className="text-[15px] text-ink/70 leading-[1.9] space-y-[20px]">
                <p>We started with a question most skincare brands avoid: Why does brightening fade? Why does a laser session lose its results in six weeks? Why do people with a well-researched ten-step routine still wake up to uneven skin?</p>
                <p><strong className="text-ink font-medium">The answer is always the same: the system was incomplete.</strong></p>
                <p>Not the individual products. The system. The order. The timing. The step that protects every other step.</p>
                <p>Rejo Derma is Korean clinical skincare built around one conviction: every product must serve the whole. Nothing exists in isolation. The cleanser prepares for the serum. The serum prepares for the moisturiser. The SPF protects everything that came before it — <em className="text-gold italic font-serif">and continues working while it does.</em></p>
                <p>We formulate with four specialist Korean laboratories — each selected for what they do best, not because one can do everything. Every formula is the result of specific expertise, not a generalised production line.</p>
                <p>We publish ingredient lists in full, at real concentrations. We explain the mechanisms. We tell you why a step matters, not just that it does. Because a customer who understands what they are applying makes better decisions — and gets better results.</p>
                <p>This is not skincare that promises transformation in seven days.</p>
                <p><em className="text-gold italic font-serif">This is skincare that works — methodically, consistently, for as long as you use it correctly.</em></p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-[96px] px-6 md:px-[52px] bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-0 min-h-[560px]">
            <div className="lg:px-[52px] lg:border-r border-ink/5 flex flex-col justify-between py-[72px] pr-0 lg:pr-12">
              <div className="font-serif text-[clamp(32px,4vw,52px)] font-light leading-[1.0] tracking-[-1.5px] text-ink mb-12">
                Precision Skin.<br />
                <em className="text-gold italic font-serif block mt-2">Pure Science.</em>
              </div>
              <div className="flex flex-col gap-0 mt-auto">
                {[
                  { n: '2', hl: 'Launching now', d: 'LumiGlow™ Hydrogel Mask + Intensive Soothing Mask' },
                  { n: '15', hl: 'Total products', d: 'Across five complete sets. No redundancy.' },
                  { n: '4', hl: 'Korean lab partners', d: 'Picostech · Yeonje · Rainbow · reBom' },
                  { n: '3', hl: 'Dedicated SPF lines', d: 'LumiShield™ · FirmShield™ · CalmShield™' }
                ].map((s, i) => (
                  <div key={i} className="py-[20px] border-b border-ink/5 flex items-baseline gap-[12px] first:border-t">
                    <div className="font-serif text-[40px] text-gold font-normal leading-none">{s.n}</div>
                    <div className="text-[12.5px] text-ink/70">
                      <strong className="block font-mono text-[9px] uppercase tracking-[2px] text-ink/50 font-normal mb-[2px]">{s.hl}</strong>
                      {s.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-[56px] py-[72px]">
              <h2 className="font-serif text-[clamp(24px,2.8vw,34px)] font-normal leading-[1.2] text-ink mb-[28px]">
                The insight came from dermatology, not marketing.
              </h2>
              <div className="text-[15px] text-ink/70 leading-[1.9] space-y-[20px]">
                <p>Ask anyone who has tried to fix hyperpigmentation why it came back. Ask someone who spent real money on laser treatment why their skin looked the same two months later. Ask a person with a well-researched routine why they still cannot hold their results.</p>
                <p><strong className="text-ink font-medium">The products were fine. The science behind them was sound. What was missing was architecture.</strong></p>
                <p>UV exposure reactivates melanin synthesis faster than any brightening active can suppress it — which means every laser session, every bottle of serum, every carefully layered routine loses its results without a sunscreen that works with the treatment, not just over it.</p>
                <p>Rejo Derma solved this by formulating three dedicated SPF lines — each containing the active ingredients that extend the routine they belong to. Not sunscreens applied after treatment. <em className="text-gold italic font-serif">Sunscreens that are part of the treatment.</em></p>
                <p>Every ingredient at a real concentration. Every mechanism explained. Every compatibility rule published.</p>
                <p className="font-serif italic text-[18px] text-gold mt-[28px] mb-0 leading-[1.6]">
                  Because the most important thing a skincare brand can give its customers is not a result. It is an understanding — of what is actually happening to their skin, and why.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
