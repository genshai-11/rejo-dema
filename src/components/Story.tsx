import FadeIn from './FadeIn';
import { orderedProducts } from '../data/products';

export default function Story() {
  const stats = [
    { n: '2', t: 'Launching now', sub: 'Lumiglow Premium + Intensive Soothing' },
    { n: String(orderedProducts.length), t: 'Total products', sub: 'Organized into one routine' },
    { n: '4', t: 'Lab partners', sub: 'Clinical specialists' },
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
            The insight starts with routine clarity.
          </h2>
          <div className="space-y-8 text-ink/60 text-[15px] leading-loose max-w-2xl">
            <p>
              Good products become easier to trust when customers can understand the order,
              compatibility, and purpose behind each step.
            </p>
            <p>
              <strong className="text-ink font-medium">The routine is what turns products into a clear skincare experience.</strong>
            </p>
            <p>
              Cleansing, brightening, repair, protection, and masks fit into one connected story
              instead of competing fragments.
            </p>
            <p className="font-serif italic text-lg text-gold pt-4">
              Because a strong skincare brand should give customers more than a promise.
              It should give them a routine they can understand and repeat.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
