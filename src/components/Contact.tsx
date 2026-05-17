import { ChevronRight } from 'lucide-react';
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
          <div className="pt-6 mt-4 font-mono text-[9px] uppercase tracking-widest text-ink/30 text-center md:text-left">
            For official availability, please use verified Rejo Derma channels or the contact form.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
