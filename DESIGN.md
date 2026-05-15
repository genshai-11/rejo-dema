# Rejo Derma Design System

## Product Context
- What this is: A clinical skincare brand site that introduces the full Rejo Derma range, not just the two launch masks.
- Who it is for: Customers evaluating the brand story and clinics reviewing the range for treatment-led use.
- Project type: Editorial product website with catalog, protocol, science, and partnership pages.

## Aesthetic Direction
- Direction: Clinical-editorial luxury.
- Mood: Calm, exact, premium, and product-first. The site should read like a refined product dossier rather than a loud beauty campaign.
- Visual rule: Packaging and ingredient logic lead the composition. Decoration supports, but never replaces, product clarity.

## Typography
- Display/Hero: `Cormorant Garamond`
- Body/UI: `Jost`
- Utility/Data Labels: `DM Mono`
- Use serif for narrative emphasis and mono for structure, counts, tags, and protocol labels.

## Color
- Primary surface palette: `cream / cream-deep / cream-dark`
- Primary text palette: `ink / ink-light`
- Accent palette: `gold / gold-bright / gold-soft`
- Secondary clinical accent: `sage / sage-soft`
- Warm support accent: `blush / blush-soft`
- Accent colors should be sparse and intentional. Gold signals brand emphasis; sage signals recovery; blush is occasional support only.

## Layout & Spacing
- Large horizontal breathing room on desktop.
- Clear sectional rhythm with border-based separation rather than heavy boxes.
- Product grids should feel editorial first and e-commerce second.
- Launch products deserve larger image areas and more narrative framing than supporting SKUs.

## Motion
- Use subtle fade/slide reveals to guide reading order.
- Hover effects should be soft: slight image zoom, border tint, and copy emphasis.
- Avoid overly animated product cards or decorative movement that competes with the product images.

## Image Treatment
- Product images in `public/product` are the visual source of truth.
- Variants can crop for hero, feature, or grid use, but should preserve the original lighting, color balance, and pack integrity.
- Neutral backgrounds, generous margins, and disciplined crops are preferred over collage-heavy layouts.

## Content Rules
- English-first.
- Exact product names must match the spreadsheet in the catalog data model.
- Marketing labels can shorten the display name, but never replace the canonical product title internally.
- Do not introduce products or SPF lines that are not present in the approved catalog scope.
