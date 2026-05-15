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
    <div className="relative h-[520px] w-full">
      <div className="absolute inset-0 border border-cream-deep/8 bg-cream-deep/[0.025]"></div>
      <div className="absolute inset-[28px] border border-gold-bright/20"></div>
      <div className="absolute left-[9%] top-[12%] w-[82%] h-[58%] border border-cream-deep/10 rounded-[999px]"></div>
      <div className="absolute left-[24%] top-[23%] w-[52%] h-[32%] border border-gold-bright/20 rounded-[999px]"></div>
      <div className="absolute left-[50%] top-[50%] w-[1px] h-[38%] bg-gradient-to-b from-gold-bright/55 to-transparent"></div>
      <div className="absolute left-[50%] top-[15%] w-[1px] h-[30%] bg-gradient-to-t from-gold-bright/35 to-transparent"></div>
      <div className="absolute left-[16%] top-[18%] w-[68%] h-[1px] bg-cream-deep/10"></div>
      <div className="absolute left-[16%] bottom-[22%] w-[68%] h-[1px] bg-cream-deep/10"></div>

      <div className="absolute left-1/2 top-1/2 w-[146px] h-[146px] -translate-x-1/2 -translate-y-1/2 border border-gold-bright/28 bg-ink/70 backdrop-blur-sm flex items-center justify-center">
        <Beaker size={30} className="text-gold-bright" strokeWidth={1.35} />
      </div>

      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <div
            key={index}
            className={`absolute w-[72px] h-[72px] border border-cream-deep/10 bg-ink/45 backdrop-blur-sm flex items-center justify-center ${node.position}`}
          >
            <div className="w-[40px] h-[40px] border border-gold-bright/30 bg-ink-light flex items-center justify-center text-gold-bright">
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
            <div className="w-[34px] h-[34px] border border-gold-bright/30 bg-ink-light flex items-center justify-center text-gold-bright">
              <Icon size={15} strokeWidth={1.4} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function IngredientOrbit() {
  const nodes = [
    { label: 'Tranexamic', icon: Sparkles, product: 'Rejo Derma Tranexamic Acid Serum' },
    { label: 'Beta-Glucan', icon: Shield, product: 'Rejo Derma Intensive Soothing Mask' },
    { label: 'Peptides', icon: Activity, product: 'Rejo Derma Repair Peptide Cream' },
    { label: 'Ferments', icon: Beaker, product: 'Rejo Derma B5 Repair Serum' },
    { label: 'Hydration', icon: Droplets, product: 'Rejo Derma Aqua Repair MTS Serum ' },
  ];

  return (
    <div className="relative h-[400px] md:h-[520px] border border-cream-deep/8 bg-cream-deep/[0.025] overflow-hidden group">
      {/* Background Orbits with subtle pulse */}
      <motion.div 
        animate={{ scale: [1, 1.02, 1], opacity: [0.18, 0.25, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[38px] border border-gold-bright/18 rounded-[999px]"
      />
      <div className="absolute inset-[86px] border border-cream-deep/8 rounded-[999px]"></div>
      
      {/* Grid lines */}
      <div className="absolute left-1/2 top-1/2 w-[1px] h-[80%] -translate-y-1/2 bg-cream-deep/5"></div>
      <div className="absolute left-1/2 top-1/2 h-[1px] w-[90%] -translate-x-1/2 bg-cream-deep/5"></div>

      {/* Center Core */}
      <div className="absolute left-1/2 top-1/2 w-[130px] h-[130px] -translate-x-1/2 -translate-y-1/2 border border-gold-bright/35 bg-ink-light/80 backdrop-blur-md flex flex-col items-center justify-center text-center z-20 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
        <FlaskConical size={26} className="text-gold-bright mb-[12px]" strokeWidth={1.3} />
        <div className="font-mono text-[8px] uppercase tracking-[2.5px] text-cream-deep/45 mb-[2px]">Ingredient</div>
        <div className="font-serif text-[24px] leading-none text-cream-deep/95">Logic</div>
      </div>

      {/* Orbiting Nodes */}
      <div className="absolute inset-0 z-10">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const product = productsByName[node.product];
          const angle = -90 + index * 72;
          const radius = 36; // radius in percentage
          
          return (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="absolute w-[140px] -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ 
                left: `${50 + Math.cos((angle * Math.PI) / 180) * radius}%`, 
                top: `${50 + Math.sin((angle * Math.PI) / 180) * radius}%` 
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, y: -5 }}
                className="cursor-default"
              >
                <div className="mx-auto mb-[10px] w-[46px] h-[46px] border border-gold-bright/30 bg-ink-light flex items-center justify-center text-gold-bright shadow-lg group-hover:border-gold-bright transition-colors">
                  <Icon size={18} strokeWidth={1.35} />
                </div>
                <div className="font-serif text-[18px] leading-none text-cream-deep/90 mb-[6px]">{node.label}</div>
                <div className="font-mono text-[7px] uppercase tracking-[1.5px] text-cream-deep/35 max-w-[120px] mx-auto leading-relaxed">
                  {product.displayName}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
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
    <div className="relative min-h-[360px] border border-ink/5 bg-white overflow-hidden p-[28px]">
      <div className="absolute inset-[24px] border border-gold/18"></div>
      <div className="grid grid-cols-2 gap-[14px] h-full relative z-10">
        {labs.map((lab, index) => {
          const Icon = lab.icon;
          return (
            <div key={lab.label} className="border border-ink/5 bg-cream p-[22px] flex flex-col justify-between min-h-[145px]">
              <div className="w-[42px] h-[42px] border border-gold/30 bg-white flex items-center justify-center text-gold">
                <Icon size={18} strokeWidth={1.4} />
              </div>
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[2px] text-ink/35">Lab 0{index + 1}</div>
                <div className="font-serif text-[24px] text-ink leading-none">{lab.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
