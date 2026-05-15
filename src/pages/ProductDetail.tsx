import { Link, Navigate, useParams } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import ProductImage from '../components/ProductImage';
import { orderedProducts, productsBySlug } from '../data/products';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !productsBySlug[slug]) {
    return <Navigate to="/products" replace />;
  }

  const product = productsBySlug[slug];
  const relatedProducts = orderedProducts
    .filter((entry) => entry.slug !== product.slug && entry.category === product.category)
    .slice(0, 3);
  const ingredientList = product.fullIngredients
    ? product.fullIngredients.split(',').map((ingredient) => ingredient.trim()).filter(Boolean)
    : [];
  const detailScenePath = product.detailScenePath ?? product.sceneHeroPath ?? product.assetPath;
  const sceneFitClass = product.sceneFit === 'cover' ? 'object-cover' : 'object-contain';

  return (
    <div className="pt-[96px] px-6 md:px-[52px] bg-cream min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto pb-[96px]">
        <div className="border-b border-ink/5 pb-[24px] mb-[40px]">
          <Link
            to="/products"
            className="inline-flex items-center gap-[10px] font-mono text-[9px] uppercase tracking-[2.4px] text-ink/45 hover:text-gold transition-colors"
          >
            <span className="w-[14px] h-[1px] bg-current"></span>
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-[28px] lg:gap-[56px] items-start mb-[88px]">
          <FadeIn className="space-y-[18px]">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_200px] gap-[18px] items-stretch">
              <div className="border border-ink/5 bg-cream-dark/60 aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden">
                <img
                  src={detailScenePath}
                  alt={product.displayName}
                  className={`w-full h-full ${sceneFitClass} object-center`}
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-[18px]">
                <ProductImage
                  product={product}
                  className="border border-ink/5 bg-white min-h-[180px]"
                  imageClassName="scale-[1.01]"
                />
                <ProductImage product={product} className="border border-ink/5 bg-gold-soft/35 min-h-[180px]" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px]">
              {product.ingredientHighlights.slice(0, 3).map((highlight) => (
                <div key={highlight} className="border border-ink/5 bg-white px-[14px] py-[16px]">
                  <div className="font-mono text-[8px] uppercase tracking-[2px] text-ink/35 mb-[10px]">Key Active</div>
                  <div className="font-serif text-[17px] leading-[1.15] text-ink">{highlight}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="font-mono text-[9.5px] uppercase tracking-[3px] text-gold flex items-center gap-[10px] mb-[14px]">
              <div className="w-[14px] h-[1px] bg-gold"></div>
              {product.category}
            </div>
            <h1 className="font-serif text-[clamp(32px,4.8vw,58px)] leading-[0.96] tracking-[-0.5px] text-ink mb-[14px]">
              {product.displayName}
            </h1>
            <div className="flex flex-wrap items-center gap-[10px] mb-[20px]">
              <span className="font-mono text-[8px] uppercase tracking-[2px] px-[10px] py-[4px] bg-sage-soft text-sage">
                {product.systemRole}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[2px] px-[10px] py-[4px] bg-gold-soft text-ink">
                {product.capacity}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[2px] px-[10px] py-[4px] border border-ink/10 text-ink/50">
                {product.availabilityPhase}
              </span>
            </div>
            <p className="font-serif italic text-[20px] leading-[1.45] text-ink-light mb-[18px]">{product.tagline}</p>
            <p className="text-[14.5px] text-ink/72 leading-[1.9] mb-[18px]">{product.shortDescription}</p>
            <p className="text-[14.5px] text-ink/72 leading-[1.9] mb-[28px]">{product.detailNarrative}</p>

            <div className="border border-ink/5 bg-white p-[22px] mb-[20px]">
              <div className="font-mono text-[8.5px] uppercase tracking-[2.4px] text-ink/35 mb-[12px]">Usage Direction</div>
              <div className="space-y-[10px]">
                {product.usageNotes.map((note) => (
                  <p key={note} className="text-[13px] text-ink/68 leading-[1.75]">
                    {note}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[14px]">
              <div className="border border-ink/5 bg-gold-soft/45 p-[18px]">
                <div className="font-mono text-[8px] uppercase tracking-[2px] text-ink/35 mb-[8px]">Official Product Name</div>
                <div className="text-[13px] leading-[1.7] text-ink/75">{product.exactName}</div>
              </div>
              <div className="border border-ink/5 bg-cream-dark p-[18px]">
                <div className="font-mono text-[8px] uppercase tracking-[2px] text-ink/35 mb-[8px]">Routine Role</div>
                <div className="text-[13px] leading-[1.7] text-ink/75">Designed to support the {product.systemRole.toLowerCase()} step within the Rejo Derma routine.</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[28px] lg:gap-[36px] mb-[88px]">
          <FadeIn className="border border-ink/5 bg-white p-[28px] md:p-[34px]">
            <div className="font-mono text-[9px] uppercase tracking-[2.4px] text-gold mb-[12px]">Ingredient View</div>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] leading-[1.05] text-ink mb-[16px]">
              Full ingredient list.
            </h2>
            {ingredientList.length ? (
              <div className="flex flex-wrap gap-[8px]">
                {ingredientList.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="px-[10px] py-[7px] text-[11.5px] leading-[1.45] border border-ink/8 bg-cream text-ink/74"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[13.5px] text-ink/65 leading-[1.8]">
                The complete ingredient list for this product is being prepared for publication. Please refer to official Rejo Derma channels for the most current product information.
              </p>
            )}
          </FadeIn>

          <FadeIn delay={0.08} className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[18px]">
            <div className="border border-ink/5 bg-ink-light text-cream-deep p-[28px] md:p-[34px]">
              <div className="font-mono text-[9px] uppercase tracking-[2.4px] text-gold-bright mb-[12px]">Why It Lives Here</div>
              <h2 className="font-serif text-[clamp(24px,3vw,34px)] leading-[1.04] text-cream-deep/92 mb-[16px]">
                Built around routine role, not exaggerated claims.
              </h2>
              <p className="text-[13.5px] text-cream-deep/52 leading-[1.85] mb-[22px]">
                Rejo Derma is easiest to understand when each product has a clear place in the routine. This page connects the formula to its category, key ingredients, and daily or advanced-use role.
              </p>
              <div className="space-y-[10px]">
                {product.ingredientHighlights.map((highlight, index) => (
                  <div key={highlight} className="flex items-center justify-between border-t border-cream-deep/10 pt-[10px]">
                    <span className="font-mono text-[8px] uppercase tracking-[2px] text-cream-deep/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[12.5px] text-cream-deep/80">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-rows-[1fr_auto] gap-[18px]">
              <ProductImage product={product} alt="" className="border border-ink/5 min-h-[260px] bg-white" />
              <div className="border border-ink/5 bg-white p-[18px]">
                <div className="font-mono text-[8px] uppercase tracking-[2px] text-ink/35 mb-[8px]">Routine Position</div>
                <p className="text-[12.5px] leading-[1.75] text-ink/68">
                  {product.displayName} belongs to <span className="text-ink">{product.category}</span> and supports the <span className="text-ink">{product.systemRole}</span> stage of the routine.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {relatedProducts.length ? (
          <div>
            <FadeIn className="mb-[22px]">
              <div className="font-mono text-[9px] uppercase tracking-[2.4px] text-ink/40 mb-[10px]">Related In This Family</div>
              <h2 className="font-serif text-[clamp(24px,3vw,34px)] leading-[1.04] text-ink">
                More from the same <em className="text-gold italic font-serif">routine family.</em>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
              {relatedProducts.map((entry, index) => (
                <FadeIn key={entry.slug} delay={index * 0.05}>
                  <Link
                    to={`/products/${entry.slug}`}
                    className="block border border-ink/5 bg-white hover:border-gold/40 transition-colors"
                  >
                    <ProductImage product={entry} className="aspect-[4/5]" />
                    <div className="p-[18px]">
                      <div className="font-mono text-[8px] uppercase tracking-[2px] text-gold mb-[8px]">
                        {entry.systemRole} / {entry.capacity}
                      </div>
                      <h3 className="font-serif text-[21px] leading-[1.05] text-ink mb-[8px]">{entry.displayName}</h3>
                      <p className="text-[12.5px] text-ink/62 leading-[1.7]">{entry.shortDescription}</p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
