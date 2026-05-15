import FadeIn from './FadeIn';
import { orderedProducts } from '../data/products';

export default function About() {
  const labs = [
    { name: 'Picostech', spec: 'Peptide Lab', prods: 'Repair Peptide Cream / Heal Serum' },
    { name: 'Yeonje', spec: 'Clinical Actives', prods: 'Tranexamic Acid Serum / B5 Repair Serum' },
    { name: 'Rainbow', spec: 'Protection Specialist', prods: 'Daily Tone Up Sunscreen' },
    { name: 'reBom', spec: 'Recovery & Barrier', prods: 'Intensive Soothing Mask / Heal Cream' },
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
            Radiance needs more than<br /><em className="italic text-gold">one product.</em>
          </h2>

          <div className="border-l-[3px] border-gold pl-8 py-2 my-10 bg-gold-soft/20 pr-4">
            <p className="font-serif italic text-2xl text-ink-light leading-snug">
              "The best routine is the one where every step has a clear purpose."
            </p>
            <div className="font-mono text-[10px] uppercase tracking-widest text-gold mt-4">- Rejo Derma</div>
          </div>

          <div className="mt-16">
            <div className="font-mono text-[9px] uppercase tracking-[2px] text-ink/40 mb-6 pb-2 border-b border-ink/5">
              Korean skincare expertise. One connected routine.
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
            Rejo Derma brings {orderedProducts.length} products into a structured Korean skincare routine,
            from cleansing and glow care to recovery and daily protection.
          </p>
          <p>
            <strong className="text-ink font-medium uppercase tracking-widest text-[11px]">The routine matters as much as the individual formula.</strong>
          </p>
          <p>
            Cleansing prepares the skin. Brightening care supports tone clarity. Repair keeps the barrier supported.
            Protection helps preserve the routine during the day.
          </p>
          <p>
            Rejo Derma frames each product inside the wider routine instead of selling every SKU as a miracle on its own.
          </p>
          <div className="font-serif italic text-lg text-gold pt-6">
            This is skincare designed to feel methodical, consistent, and easy to follow.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
