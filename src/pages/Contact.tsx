import { type FormEvent, useState } from 'react';
import FadeIn from '../components/FadeIn';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="pt-[110px] md:pt-[96px] pb-[96px] px-6 md:px-[52px] bg-white min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-start mt-[40px]">
          <FadeIn className="md:pr-[80px] md:border-r border-ink/5">
            <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[12px]">
              <div className="w-[14px] h-[1px] bg-gold"></div>
              Find Rejo Derma
            </div>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] leading-[1.0] tracking-[-0.3px] text-ink">
              Available through<br />
              <em className="text-gold italic font-serif">official channels.</em>
            </h2>
            <p className="text-[14.5px] text-ink/70 leading-[1.9] mt-[12px] mb-[40px]">
              For product information, routine guidance, retail availability, or professional partnership inquiries,
              reach out through the official Rejo Derma channels or our contact form.
            </p>

            <div className="mt-[16px] font-mono text-[9px] tracking-[1px] text-ink/40 pt-[14px] border-t border-ink/5">
              For official availability, please use verified Rejo Derma channels.
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="md:pl-[80px]">
            <div className="bg-cream p-[40px] border border-ink/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-bright"></div>
              <div className="font-mono text-[10px] uppercase tracking-[3px] text-gold mb-[24px]">Professional Partnerships</div>
              <h3 className="font-serif text-[28px] text-ink mb-[8px] leading-tight">Partner With Rejo Derma</h3>
              <p className="text-[13px] text-ink/60 mb-[32px] leading-relaxed">
                For clinics, distributors, and professional beauty partners, submit your details for a product range
                conversation with the Rejo Derma team.
              </p>

              {formStatus === 'success' ? (
                <div className="py-[40px] text-center border border-sage/30 bg-sage/5">
                  <div className="w-[48px] h-[48px] rounded-full bg-sage/10 text-sage flex items-center justify-center mx-auto mb-[16px]">OK</div>
                  <h4 className="font-serif text-[20px] text-ink mb-[8px]">Inquiry Received</h4>
                  <p className="text-[13px] text-ink/60">The Rejo Derma team will review your inquiry and respond as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-[2px] text-ink/50 mb-[8px]">Clinic/Practice Name</label>
                    <input required type="text" className="w-full bg-white border border-ink/10 p-[12px] text-[14px] font-sans text-ink focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-[2px] text-ink/50 mb-[8px]">Contact Name</label>
                      <input required type="text" className="w-full bg-white border border-ink/10 p-[12px] text-[14px] font-sans text-ink focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div>
                      <label className="block font-mono text-[9px] uppercase tracking-[2px] text-ink/50 mb-[8px]">Email Address</label>
                      <input required type="email" className="w-full bg-white border border-ink/10 p-[12px] text-[14px] font-sans text-ink focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-[2px] text-ink/50 mb-[8px]">Message / Inquiry</label>
                    <textarea required rows={4} className="w-full bg-white border border-ink/10 p-[12px] text-[14px] font-sans text-ink resize-none focus:outline-none focus:border-gold transition-colors"></textarea>
                  </div>
                  <button
                    disabled={formStatus === 'submitting'}
                    type="submit"
                    className="mt-[10px] w-full bg-ink text-white font-mono text-[10px] uppercase tracking-[3px] py-[16px] hover:bg-gold-bright transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
