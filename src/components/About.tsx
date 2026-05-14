import FadeIn from './FadeIn';

export default function About() {
  const labs = [
    { name: 'Picostech', spec: 'Peptide Lab', prods: 'Peptide Cream' },
    { name: 'Yeonje', spec: 'Clinical Actives', prods: 'TA Serum · B5 Repair' },
    { name: 'Rainbow', spec: 'SPF Specialist', prods: 'Shield™ SPF series' },
    { name: 'reBom', spec: 'Recovery & Barrier', prods: 'Soothing Mask' }
  ];

  return (
    <section id="about" className="bg-cream py-24 px-6 md:px-12 border-t border-ink/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <FadeIn className="lg:pr-16 lg:border-r border-ink/10">
          <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-3 mb-6">
            <span className="w-4 h-[1px] bg-gold"></span>
            About Rejo Derma
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1] text-ink mb-12">
            The problem with skincare is not<br /><em className="italic text-gold">the products.</em>
          </h2>
          
          <div className="border-l-[3px] border-gold pl-8 py-2 my-10 bg-gold-soft/20 pr-4">
            <p className="font-serif italic text-2xl text-ink-light leading-snug">
              "The system was incomplete. Not the individual products. The system. The order. The timing."
            </p>
            <div className="font-mono text-[10px] uppercase tracking-widest text-gold mt-4">— Rejo Derma</div>
          </div>

          <div className="mt-16">
            <div className="font-mono text-[9px] uppercase tracking-[2px] text-ink/40 mb-6 pb-2 border-b border-ink/5">
              Four Korean laboratories. Not one.
            </div>
            <div className="space-y-0">
              {labs.map((lab, i) => (
                <div key={i} className="flex flex-wrap items-baseline gap-4 py-4 border-b border-ink/5 first:border-t">
                  <div className="font-serif text-[17px] text-ink w-24 shrink-0">{lab.name}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-gold w-32 shrink-0">{lab.spec}</div>
                  <div className="text-[12.5px] text-ink/40">{lab.prods}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="text-ink/60 text-[15px] leading-loose space-y-8">
          <p>
            We started with a question most skincare brands avoid: Why does brightening fade? 
            Why does a laser session lose its results in six weeks? Why do people with a 
            well-researched ten-step routine still wake up to uneven skin?
          </p>
          <p>
            <strong className="text-ink font-medium uppercase tracking-widest text-[11px]">The answer is always the same: the system was incomplete.</strong>
          </p>
          <p>
            Not the individual products. The system. The order. The timing. The step that protects every other step.
            Rejo Derma is Korean clinical skincare built around one conviction: every product must serve the whole. 
            Nothing exists in isolation. 
          </p>
          <p>
            We formulate with four specialist Korean laboratories — each selected for what they do best. 
            Every formula is the result of specific expertise, not a generalised production line.
            We publish ingredient lists in full, at real concentrations. Because a customer who 
            understands what they are applying gets better results.
          </p>
          <div className="font-serif italic text-lg text-gold pt-6">
            This is skincare that works — methodically, consistently, for as long as you use it correctly.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
