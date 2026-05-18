import { motion } from 'motion/react';
import { launchProducts, orderedProducts } from '../data/products';

export default function Ticker() {
  const items = [
    launchProducts[1]?.displayName ?? 'Launch Mask',
    '16 Product Clinical Range',
    launchProducts[0]?.displayName ?? 'Recovery Mask',
    'Precision Skin. Pure Science.',
    'Made in Korea',
    `${orderedProducts.length} Products / One Routine`,
  ];

  return (
    <div className="bg-gold h-10 overflow-hidden flex items-center">
      <motion.div
        animate={{ x: '-50%' }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((text, idx) => (
              <div key={idx} className="flex items-center">
                <span className="font-mono font-semibold text-[9.5px] uppercase tracking-[3px] text-ink-light px-8">
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
