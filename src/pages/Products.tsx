import FadeIn from '../components/FadeIn';

export default function ProductsPage() {
  return (
    <div className="pt-[96px] px-6 md:px-[52px] bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-end pb-[56px] border-b border-ink/5 mb-[64px]">
          <FadeIn>
            <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[12px]">
              <div className="w-[14px] h-[1px] bg-gold"></div>
              New Launch
            </div>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] leading-[1.0] tracking-[-0.3px] text-ink">
              Two masks.<br />
              <em className="text-gold italic font-serif">Two mechanisms.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[14.5px] text-ink/70 leading-[1.9]">
              LumiGlow™ solves the penetration problem most masks ignore. Intensive Soothing addresses the recovery step most routines skip. Neither is designed to be used alone — both are designed to make the system work harder.
            </p>
          </FadeIn>
        </div>

        {/* Masks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-[96px]">
          
          {/* LumiGlow */}
          <FadeIn className="relative overflow-hidden group border-r border-ink/5">
            <div className="relative overflow-hidden flex items-end aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f1808] via-[#2e2005] to-[#181510] transition-transform duration-700 group-hover:scale-[1.04]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_64%_64%_at_62%_28%,rgba(181,129,26,0.28)_0%,transparent_58%),radial-gradient(ellipse_28%_36%_at_18%_75%,rgba(181,129,26,0.1)_0%,transparent_50%)]"></div>
              </div>
              <div className="absolute top-[28px] right-[22px] text-[72px] opacity-[0.12] leading-none transition-all duration-400 group-hover:opacity-[0.22] group-hover:scale-110 group-hover:-translate-y-1">✨</div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,12,7,0.86)] via-[rgba(15,12,7,0.14)_46%] to-transparent"></div>
              
              <div className="relative z-10 p-[26px] md:p-[30px] w-full">
                <div className="inline-block font-mono text-[8px] tracking-[2px] uppercase bg-gold-bright text-ink-light px-[10px] py-[3px] mb-[10px]">
                  ✦ Brightening · Now
                </div>
                <div className="font-serif text-[clamp(22px,3vw,34px)] font-normal text-cream-deep/95 leading-[1.0] mb-[5px]">
                  LumiGlow™<br/><em className="text-gold-bright italic">Hydrogel Mask</em>
                </div>
                <div className="font-mono text-[9px] tracking-[2px] uppercase text-cream-deep/30">
                  루미글로우™ · 30g per sheet
                </div>
              </div>
            </div>

            <div className="p-[28px] md:p-[30px] pb-[32px] bg-white border-t border-ink/5">
              <p className="text-[13.5px] text-ink/70 leading-[1.82] mb-[22px]">
                Standard sheet masks lose up to 60% of their essence to evaporation. LumiGlow™ uses hydrogel technology to create a zero-evaporation seal — Alpha-Arbutin, Tranexamic Acid, and Peptide Complex penetrate three to five times deeper, with nothing lost to air.
              </p>
              
              <div className="flex flex-col gap-0 mb-[20px]">
                {[
                  { c: 'Deliver', n: 'Hydrogel Sheet', r: 'Zero evaporation seal' },
                  { c: 'Act.', n: 'Alpha-Arbutin', r: 'Tyrosinase inhibition, direct brightening' },
                  { c: 'Act.', n: 'Tranexamic অ্যাসিড', r: 'Amplifies serum beneath — sandwich effect' },
                  { c: 'Boost', n: 'Peptide Complex', r: 'Structural skin support' },
                  { c: 'Hydra', n: 'Hyal. Acid + Tremella', r: 'Deep plumping, glass skin' },
                ].map((ing, idx) => (
                  <div key={idx} className="flex gap-[12px] items-baseline py-[8px] border-b border-ink/5 last:border-0">
                    <span className="font-mono text-[9px] tracking-[0.5px] min-w-[40px] shrink-0 text-gold">{ing.c}</span>
                    <span className="text-[13px] font-medium text-ink flex-1 leading-[1.35]">{ing.n}</span>
                    <span className="text-[11.5px] text-ink/50">{ing.r}</span>
                  </div>
                ))}
              </div>

              <div className="p-[12px] md:p-[14px] border-l-2 border-gold bg-gold-soft/50 text-[12.5px] text-ink/70 leading-[1.7]">
                Use Tuesday & Friday evenings — over TA Serum (sandwich technique). 25–30 minutes. Seal with Spotless Brightening Cream. The mask does not replace the routine. It makes the routine work harder.
              </div>
            </div>
          </FadeIn>

          {/* Soothing */}
          <FadeIn delay={0.2} className="relative overflow-hidden group">
            <div className="relative overflow-hidden flex items-end aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d1410] via-[#152018] to-[#0d1310] transition-transform duration-700 group-hover:scale-[1.04]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_64%_64%_at_62%_28%,rgba(106,124,94,0.22)_0%,transparent_58%)]"></div>
              </div>
              <div className="absolute top-[28px] right-[22px] text-[72px] opacity-[0.12] leading-none transition-all duration-400 group-hover:opacity-[0.22] group-hover:scale-110 group-hover:-translate-y-1">🌿</div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,12,10,0.88)] via-[rgba(8,12,10,0.14)_46%] to-transparent"></div>
              
              <div className="relative z-10 p-[26px] md:p-[30px] w-full">
                <div className="inline-block font-mono text-[8px] tracking-[2px] uppercase border border-sage/60 text-[#b4d2af]/80 px-[10px] py-[3px] mb-[10px]">
                  ◇ Recovery · Now
                </div>
                <div className="font-serif text-[clamp(22px,3vw,34px)] font-normal text-cream-deep/95 leading-[1.0] mb-[5px]">
                  Intensive<br/><em className="text-[#a0d2af]/85 italic font-serif">Soothing Mask</em>
                </div>
                <div className="font-mono text-[9px] tracking-[2px] uppercase text-cream-deep/30">
                  인텐시브 수딩 마스크 · 27ml
                </div>
              </div>
            </div>

            <div className="p-[28px] md:p-[30px] pb-[32px] bg-white border-t border-ink/5">
              <p className="text-[13.5px] text-ink/70 leading-[1.82] mb-[22px]">
                Clinical wound healing research places Beta-Glucan above Hyaluronic Acid alone for barrier recovery. Five probiotic ferments restore the microbiome that treatments, peels, and Retinol disrupt. Used daily in Week 1 post-treatment — protocol, not suggestion.
              </p>
              
              <div className="flex flex-col gap-0 mb-[20px]">
                {[
                  { c: 'Act.', n: 'Beta-Glucan', r: 'Activates Langerhans cells — clinical healing' },
                  { c: '×5', n: 'Probiotic Ferments', r: 'Restores microbiome post-treatment' },
                  { c: 'Act.', n: 'Allantoin + Veronica', r: 'Accelerates cell proliferation' },
                  { c: 'Hydra', n: 'S. Hyaluronate + Trehalose', r: 'Deep moisture, cellular protection' },
                ].map((ing, idx) => (
                  <div key={idx} className="flex gap-[12px] items-baseline py-[8px] border-b border-ink/5 last:border-0">
                    <span className="font-mono text-[9px] tracking-[0.5px] min-w-[40px] shrink-0 text-sage">{ing.c}</span>
                    <span className="text-[13px] font-medium text-ink flex-1 leading-[1.35]">{ing.n}</span>
                    <span className="text-[11.5px] text-ink/50">{ing.r}</span>
                  </div>
                ))}
              </div>

              <div className="p-[12px] md:p-[14px] border-l-2 border-sage bg-sage-soft/50 text-[12.5px] text-ink/70 leading-[1.7]">
                After every Retinol evening. Daily in Week 1 post-treatment. 3–4 times in Week 2. Twice weekly thereafter. Recovery is not passive — this mask makes it active.
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Full Range Section added as requested */}
        <div className="pb-[96px]">
          <FadeIn className="mb-[40px]">
             <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-ink/40 flex items-center gap-[10px] mb-[12px]">
               <div className="w-[14px] h-[1px] bg-ink/20"></div>
               Full Clinical Range
             </div>
             <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-[1.0] tracking-[-0.3px] text-ink">
                System <em className="text-gold italic font-serif">Essentials.</em>
             </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
             {[
                { name: 'Tranexamic Acid Serum', size: '7ml', desc: 'Interrupts melanin synthesis at the source. Contains 3% TA.', use: 'Step 02 · AM & PM', badge: 'Brighten' },
                { name: 'Spotless Brightening Cream', size: '30ml', desc: 'Seals in brightening actives while preventing environmental oxidation.', use: 'Step 02 · PM', badge: 'Brighten' },
                { name: 'Repair Peptide Cream', size: '50ml', desc: 'Copper Tripeptide-1 rebuilds structure overnight without conflict.', use: 'Step 03 · PM', badge: 'Repair' },
                { name: 'Aqua Repair MTS Serum', size: '50ml', desc: 'Madecassoside isolate for intense post-treatment recovery and healing.', use: 'Step 03 · Alt. PM', badge: 'Heal' }
             ].map((prod, i) => (
                <FadeIn key={i} delay={i * 0.1} className="border border-ink/5 bg-white p-[28px] hover:border-gold/50 transition-colors group">
                   <div className="font-mono text-[8.5px] uppercase tracking-[2px] text-gold mb-[16px] flex justify-between items-center">
                     <span>{prod.use}</span>
                     <span className="bg-cream-dark px-[6px] py-[2px] text-ink/70">{prod.badge}</span>
                   </div>
                   <h4 className="font-serif text-[20px] font-normal text-ink mb-[8px] leading-tight group-hover:text-gold transition-colors">{prod.name}</h4>
                   <div className="font-mono text-[9px] text-ink/40 mb-[16px]">{prod.size}</div>
                   <p className="text-[13px] text-ink/60 leading-[1.7]">{prod.desc}</p>
                </FadeIn>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
