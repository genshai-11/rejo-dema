import FadeIn from '../components/FadeIn';

const ingredients = [
  {
    num: '01',
    name: 'Tranexamic Acid',
    claim: 'Brightening · Anti-Pigmentation',
    body: 'Interrupts the signaling pathway between keratinocytes and melanocytes, preventing melanin from being synthesized at the source. More stable than Vitamin C in formulation, gentler than Hydroquinone clinically. At 3%, it sits at the effective therapeutic threshold. Present in both serum and LumiShield™ SPF for 24-hour brightening efficacy.',
    found: 'TA Serum · LumiGlow™ Mask · LumiShield™ SPF',
    theme: 'gold'
  },
  {
    num: '02',
    name: 'Beta-Glucan',
    claim: 'Recovery · Wound Healing',
    body: "Activates Langerhans cells — the skin's primary immune responders. In clinical wound healing studies, Beta-Glucan outperforms Hyaluronic Acid alone for repair speed. Cornerstone of the Recovery Routine; appears in both Soothing Mask and B5 Repair Serum for a doubled wound-healing response.",
    found: 'Intensive Soothing Mask · B5 Repair Serum',
    theme: 'sage'
  },
  {
    num: '03',
    name: 'Copper Tripeptide-1',
    claim: 'Firming · Collagen Synthesis',
    body: 'A signal peptide that directly stimulates fibroblasts to synthesize collagen type I and III. Clinical studies demonstrate measurable collagen increase after 8 weeks of consistent use. FirmShield™ SPF protects newly synthesized collagen from photo-degradation during the day — closing the loop between PM production and AM protection.',
    found: 'Repair Peptide Cream',
    theme: 'blush'
  },
  {
    num: '04',
    name: 'Ectoin',
    claim: 'DNA Protection · Stress Shield',
    body: 'An extremolyte that protects cellular DNA from UV damage and oxidative stress through a mechanism distinct from conventional antioxidants — it forms a protective hydration shell around cellular structures. Appears in B5 Repair Serum, Peptide Cream, and FirmShield™ SPF for continuous DNA protection around the clock.',
    found: 'B5 Repair Serum · Repair Peptide Cream · FirmShield™ SPF',
    theme: 'gold'
  },
  {
    num: '05',
    name: 'Madecassoside',
    claim: 'Healing · Anti-Inflammatory',
    body: 'A purified isolate from Centella Asiatica — more potent than whole extract because the healing-active fraction is concentrated. Simultaneously stimulates collagen synthesis and accelerates wound closure. In Korea, Madecassoside is the clinical standard for post-treatment skincare. Appears in B5 Repair Serum and CalmShield™ SPF for uninterrupted healing day and night.',
    found: 'B5 Repair Serum · Aqua Repair Serum · CalmShield™ SPF',
    theme: 'sage'
  },
  {
    num: '06',
    name: 'Probiotic Ferment ×5',
    claim: 'Microbiome · Skin Resilience',
    body: 'Five distinct ferments — Lactobacillus from Rice, Ginseng, and Soybean; Saccharomyces from Potato and Coix Seed — each targeting a different component of the skin microbiome. Together they build a resilient microbiome that responds better to actives and recovers faster from treatment. Present in Soothing Mask and LumiShield™ SPF.',
    found: 'Intensive Soothing Mask · LumiShield™ SPF',
    theme: 'blush'
  }
];

export default function SciencePage() {
  return (
    <div className="pt-[96px] px-6 md:px-[52px] bg-ink-light text-cream-deep min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-end pb-[48px] border-b border-cream-deep/5 mb-[64px]">
          <FadeIn>
            <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold-bright flex items-center gap-[10px] mb-[12px]">
              <div className="w-[14px] h-[1px] bg-gold-bright"></div>
              The Science
            </div>
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] leading-[1.0] tracking-[-0.3px] text-cream-deep/90">
              Every ingredient<br />
              <em className="text-gold-bright italic font-serif">has a reason.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[14.5px] text-cream-deep/40 leading-[1.9]">
              No ingredient in Rejo Derma exists for aesthetics or label appeal. Each active is selected for a specific clinical mechanism and included at concentrations that match that mechanism — not at trace amounts for marketing purposes.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] mt-[64px]">
          {ingredients.map((ing, i) => (
            <FadeIn 
              key={i} 
              delay={i * 0.1}
              className={`p-[44px] px-[36px] bg-cream-deep/[0.025] hover:bg-cream-deep/[0.05] border-t-2 transition-colors ${
                ing.theme === 'gold' ? 'border-gold' : 
                ing.theme === 'sage' ? 'border-sage' : 'border-blush'
              }`}
            >
              <div className={`font-mono text-[9px] uppercase tracking-[3px] mb-[18px] opacity-40 ${
                ing.theme === 'gold' ? 'text-gold' : 
                ing.theme === 'sage' ? 'text-sage' : 'text-blush'
              }`}>
                {ing.num}
              </div>
              <h3 className="font-serif text-[22px] font-normal text-cream-deep/90 mb-[5px]">{ing.name}</h3>
              <div className={`font-mono text-[8.5px] uppercase tracking-[2px] mb-[14px] ${
                ing.theme === 'gold' ? 'text-gold-bright' : 
                ing.theme === 'sage' ? 'text-[#8aac7a]' : 'text-[#d09080]'
              }`}>
                {ing.claim}
              </div>
              <p className="text-[13px] text-cream-deep/40 leading-[1.8] mb-[14px]">{ing.body}</p>
              <div className="font-mono text-[9.5px] text-cream-deep/20 leading-[1.65]">
                Found in: <strong className="font-mono font-normal text-cream-deep/40">{ing.found}</strong>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Spacer before footer */}
        <div className="h-[96px]"></div>
      </div>
    </div>
  );
}
