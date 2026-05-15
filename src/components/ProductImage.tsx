import { useState } from 'react';
import type { ProductRecord } from '../data/products';

type ProductImageProps = {
  product: ProductRecord;
  alt?: string;
  className?: string;
  imageClassName?: string;
};

export default function ProductImage({
  product,
  alt,
  className = '',
  imageClassName = '',
}: ProductImageProps) {
  const imagePath = product.sceneHeroPath || product.assetPath;
  const [hasImageError, setHasImageError] = useState(!imagePath);
  const fitClass = product.sceneHeroPath ? 'object-cover' : (product.imageFit === 'cover' ? 'object-cover' : 'object-contain');
  const focusClass =
    product.visualFocus === 'top'
      ? 'object-top'
      : product.visualFocus === 'bottom'
        ? 'object-bottom'
        : 'object-center';

  return (
    <div className={`overflow-hidden bg-cream-dark ${className}`}>
      {hasImageError ? (
        <div className="w-full h-full min-h-[140px] flex flex-col items-center justify-center px-[18px] text-center bg-cream-dark text-ink/45">
          <span className="font-serif text-[18px] leading-[1.1] text-ink/60">{product.displayName}</span>
          <span className="font-mono text-[8px] uppercase tracking-[2px] mt-[10px] text-gold">Image coming soon</span>
        </div>
      ) : (
        <img
          src={imagePath}
          alt={alt ?? product.displayName}
          onError={() => setHasImageError(true)}
          className={`w-full h-full ${fitClass} ${focusClass} ${imageClassName}`}
        />
      )}
    </div>
  );
}
