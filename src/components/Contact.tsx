import { Facebook, Instagram, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-12 border-t border-ink/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <FadeIn className="lg:pr-20 lg:border-r border-ink/10">
          <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-3 mb-6">
            <span className="w-4 h-[1px] bg-gold"></span>
            Find Rejo Derma
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-ink leading-[1] mb-8">
            Available through<br /><em className="italic text-gold">official channels.</em>
          </h2>
          <p className="text-[15px] text-ink/60 leading-relaxed max-w-md">
            For product information, routine guidance, retail availability, or professional partnership inquiries,
            reach out through the official Rejo Derma channels.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="space-y-4">
          {[
            { icon: <Facebook size={20} className="text-gold" />, platform: 'Facebook', name: 'Rejo Derma Official', link: 'https://facebook.com/rejoderma' },
            { icon: <Instagram size={20} className="text-gold" />, platform: 'Instagram', name: '@rejoderma.official', link: 'https://instagram.com/rejoderma.official' },
          ].map((ch, i) => (
            <a
              key={i}
              href={ch.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-6 p-6 md:p-8 bg-white border border-ink/5 hover:border-gold hover:bg-gold-soft/30 transition-all duration-300 group"
            >
              <div className="bg-cream p-3 rounded-full group-hover:scale-110 transition-transform">
                {ch.icon}
              </div>
              <div className="flex-1">
                <div className="font-mono text-[8.5px] uppercase tracking-widest text-ink/30 mb-0.5">{ch.platform}</div>
                <div className="font-serif text-xl text-ink">{ch.name}</div>
              </div>
              <ChevronRight size={18} className="text-ink/20 group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </a>
          ))}
          <div className="pt-6 mt-4 border-t border-ink/5 font-mono text-[9px] uppercase tracking-widest text-ink/30 text-center md:text-left">
            For official availability, please use verified Rejo Derma channels.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
