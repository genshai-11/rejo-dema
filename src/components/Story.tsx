import FadeIn from './FadeIn';

export default function Story() {
  const stats = [
    { n: '2', t: 'Launching now', sub: 'LumiGlow™ + Soothing Mask' },
    { n: '15', t: 'Total products', sub: 'Across five complete sets' },
    { n: '4', t: 'Lab partners', sub: 'Clinical specialists' }
  ];

  return (
    <section className="bg-cream-dark py-24 px-6 md:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-0">
        <FadeIn className="px-10 py-16 border-r border-ink/10 flex flex-col justify-between hidden lg:flex">
          <div className="font-serif text-[52px] font-light leading-[1] tracking-tighter text-ink">
            Precision Skin.<br />
            <em className="block italic text-gold">Pure Science.</em>
          </div>

          <div className="space-y-0 mt-20">
            {stats.map((s, i) => (
              <div key={i} className="py-6 border-b border-ink/10 first:border-t flex items-baseline gap-4">
                <span className="font-serif text-5xl text-gold leading-none">{s.n}</span>
                <div className="space-y-1">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-ink/40">{s.t}</div>
                  <div className="text-[12.5px] text-ink/70">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="right" className="px-10 lg:px-20 py-16">
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-[1.2] mb-10">
            The insight came from dermatology, not marketing.
          </h2>
          <div className="space-y-8 text-ink/60 text-[15px] leading-loose max-w-2xl">
            <p>
              Ask anyone who has tried to fix hyperpigmentation why it came back. 
              Ask someone who spent real money on laser treatment why their skin looked the 
              same two months later. 
            </p>
            <p>
              <strong className="text-ink font-medium">The products were fine. What was missing was architecture.</strong>
            </p>
            <p>
              UV exposure reactivates melanin synthesis faster than any brightening active can suppress it 
              — which means every laser session loses its results without a sunscreen that works 
              with the treatment, not just over it.
            </p>
            <p>
              Rejo Derma solved this by formulating dedicated SPF lines — each containing 
              the active ingredients that extend the routine they belong to. 
              Not sunscreens applied after treatment. <em className="italic text-gold">Sunscreens that are part of the treatment.</em>
            </p>
            <p className="font-serif italic text-lg text-gold pt-4">
              Because the most important thing a skincare brand can give its customers is not a result. 
              It is an understanding — of what is actually happening to their skin.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
