import { motion } from 'motion/react';

export default function Ticker() {
  const items = [
    "LumiGlow™ Hydrogel Mask",
    "Launching Now",
    "Intensive Soothing Mask",
    "Precision Skin. Pure Science.",
    "Made in Korea",
    "Brightening · Recovery · Firming"
  ];

  return (
    <div className="bg-gold h-10 overflow-hidden flex items-center">
      <motion.div 
        animate={{ x: "-50%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((text, idx) => (
              <div key={idx} className="flex items-center">
                <span className="font-mono text-[9.5px] uppercase tracking-[3px] text-ink-light px-8">
                  {text}
                </span>
                <div className="w-[3px] h-[3px] rounded-full bg-ink-light/20"></div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
