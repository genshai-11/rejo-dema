import { motion } from 'motion/react';
import { Activity, Beaker, Droplets, FlaskConical, Leaf, ScanLine, Shield, Sparkles } from 'lucide-react';
import { productsByName, systemSteps } from '../data/products';

const systemIcons = [Droplets, ScanLine, Sparkles, Leaf, Shield];

export function HeroProductSystem() {
  const nodes = [
    { icon: Sparkles, position: 'left-[11%] top-[16%]' },
    { icon: FlaskConical, position: 'left-[39%] top-[10%]' },
    { icon: Leaf, position: 'right-[11%] top-[18%]' },
    { icon: Shield, position: 'left-[19%] bottom-[22%]' },
    { icon: ScanLine, position: 'right-[18%] bottom-[16%]' },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:hidden">
        <div className="col-span-2 border border-gold-bright/20 bg-ink/70 px-5 py-6 text-center">
          <Beaker size={24} className="mx-auto mb-3 text-gold-bright" strokeWidth={1.35} />
          <div className="font-mono text-[8px] uppercase tracking-[2px] text-cream-deep/45">System Core</div>
          <div className="font-serif text-[24px] leading-none text-cream-deep/95">Formula Logic</div>
        </div>
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div key={index} className="border border-cream-deep/10 bg-ink/45 p-4 backdrop-blur-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center border border-gold-bright/30 bg-ink-light text-gold-bright">
                <Icon size={16} strokeWidth={1.4} />
              </div>
              <div className="font-mono text-[8px] uppercase tracking-[1.8px] text-cream-deep/45">
                Step 0{index + 1}
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative hidden w-full overflow-hidden md:block md:aspect-[16/11] md:min-h-[420px] md:max-h-[560px]">
        <div className="absolute inset-0 border border-cream-deep/8 bg-cream-deep/[0.025]"></div>
        <div className="absolute inset-[clamp(18px,3vw,28px)] border border-gold-bright/20"></div>
        <div className="absolute left-[9%] top-[12%] h-[58%] w-[82%] rounded-[999px] border border-cream-deep/10"></div>
        <div className="absolute left-[24%] top-[23%] h-[32%] w-[52%] rounded-[999px] border border-gold-bright/20"></div>
        <div className="absolute left-[50%] top-[50%] h-[38%] w-px bg-gradient-to-b from-gold-bright/55 to-transparent"></div>
        <div className="absolute left-[50%] top-[15%] h-[30%] w-px bg-gradient-to-t from-gold-bright/35 to-transparent"></div>
        <div className="absolute left-[16%] top-[18%] h-px w-[68%] bg-cream-deep/10"></div>
        <div className="absolute bottom-[22%] left-[16%] h-px w-[68%] bg-cream-deep/10"></div>

        <div className="absolute left-1/2 top-1/2 flex h-[clamp(112px,16vw,146px)] w-[clamp(112px,16vw,146px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-gold-bright/28 bg-ink/70 backdrop-blur-sm">
          <Beaker size={30} className="text-gold-bright" strokeWidth={1.35} />
        </div>

        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div
              key={index}
              className={`absolute flex h-[clamp(60px,8vw,72px)] w-[clamp(60px,8vw,72px)] items-center justify-center border border-cream-deep/10 bg-ink/45 backdrop-blur-sm ${node.position}`}
            >
              <div className="flex h-[clamp(34px,4.8vw,40px)] w-[clamp(34px,4.8vw,40px)] items-center justify-center border border-gold-bright/30 bg-ink-light text-gold-bright">
                <Icon size={17} strokeWidth={1.4} />
              </div>
            </div>
          );
        })}

        {systemSteps.slice(0, 4).map((step, index) => {
          const Icon = systemIcons[index] ?? Activity;
          return (
            <div
              key={step.step}
              className="absolute"
              style={{
                left: `${12 + index * 17}%`,
                bottom: `${8 + (index % 2) * 8}%`,
              }}
            >
              <div className="flex h-[clamp(28px,4vw,34px)] w-[clamp(28px,4vw,34px)] items-center justify-center border border-gold-bright/30 bg-ink-light text-gold-bright">
                <Icon size={15} strokeWidth={1.4} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function IngredientOrbit() {
  const ingredients = [
    { label: 'Tranexamic', icon: Sparkles, weight: '157.2 g/mol', target: 'Melanocyte', product: 'Tranexamic Acid Serum' },
    { label: 'Beta-Glucan', icon: Shield, weight: 'Varies', target: 'Epidermis', product: 'Intensive Soothing Mask' },
    { label: 'Peptides', icon: Activity, weight: '< 500 Da', target: 'Dermis', product: 'Repair Peptide Cream' },
    { label: 'Ferments', icon: Beaker, weight: 'Bio-active', target: 'Microbiome', product: 'B5 Repair Serum' },
    { label: 'Hydration', icon: Droplets, weight: '1.2M Da', target: 'S. Corneum', product: 'Aqua Repair MTS Serum' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 border-y border-cream-deep/10 bg-ink-light/20">
      {ingredients.map((ing, i) => {
        const Icon = ing.icon;
        return (
          <div 
            key={ing.label} 
            className={`p-6 md:p-10 border-cream-deep/5 group hover:bg-gold-bright/[0.04] transition-all duration-500 
              ${i % 2 === 0 ? 'border-r' : 'md:border-r'} 
              ${i < 4 ? 'border-b md:border-b-0' : 'border-b-0'}
              ${i === 4 ? 'col-span-2 md:col-span-1 border-r-0' : ''}
            `}
          >
            <div className="flex items-center justify-between mb-10 md:mb-16">
              <div className="w-10 h-10 border border-gold-bright/25 bg-ink-light flex items-center justify-center text-gold-bright transition-all group-hover:bg-gold-bright group-hover:text-ink">
                <Icon size={18} strokeWidth={1.2} />
              </div>
              <span className="font-mono text-[7px] md:text-[8px] text-cream-deep/15 tracking-[2px]">MOL.REF.0{i+1}</span>
            </div>
            
            <div className="mb-6 md:mb-8">
              <div className="font-mono text-[8px] md:text-[9px] uppercase tracking-[3px] text-gold-bright mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                Target: {ing.target}
              </div>
              <h4 className="font-serif text-[24px] md:text-[28px] leading-none text-cream-deep/90 tracking-[-0.5px]">
                {ing.label}
              </h4>
            </div>

            <div className="space-y-2 pt-6 border-t border-cream-deep/5">
              <div className="flex justify-between items-center font-mono text-[7.5px] uppercase tracking-[1.5px] text-cream-deep/30">
                <span>Weight</span>
                <span className="text-cream-deep/50">{ing.weight}</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[7.5px] uppercase tracking-[1.5px] text-cream-deep/30">
                <span>Phase</span>
                <span className="text-cream-deep/50">Clinical</span>
              </div>
              <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="font-mono text-[7px] text-gold-bright uppercase tracking-[2px]">View Analysis →</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function LabGridGraphic() {
  const labs = [
    { label: 'Peptide', icon: Activity },
    { label: 'Actives', icon: FlaskConical },
    { label: 'Protect', icon: Shield },
    { label: 'Recover', icon: Leaf },
  ];

  return (
    <div className="relative min-h-[360px] overflow-hidden border border-ink/5 bg-white p-[28px]">
      <div className="absolute inset-[24px] border border-gold/18"></div>
      <div className="relative z-10 grid h-full grid-cols-2 gap-[14px]">
        {labs.map((lab, index) => {
          const Icon = lab.icon;
          return (
            <div key={lab.label} className="flex min-h-[145px] flex-col justify-between border border-ink/5 bg-cream p-[22px]">
              <div className="flex h-[42px] w-[42px] items-center justify-center border border-gold/30 bg-white text-gold">
                <Icon size={18} strokeWidth={1.4} />
              </div>
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[2px] text-ink/35">Lab 0{index + 1}</div>
                <div className="font-serif text-[24px] leading-none text-ink">{lab.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
