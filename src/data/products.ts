export type ProductCategory =
  | 'Launch Masks'
  | 'Cleansing'
  | 'Exfoliation & Prep'
  | 'Brightening'
  | 'Repair & Recovery'
  | 'Protection'
  | 'Professional Protocols';

export type SystemRole =
  | 'Launch Highlight'
  | 'Daily Cleanse'
  | 'Weekly Exfoliation'
  | 'Daily Brighten'
  | 'Barrier Support'
  | 'Daily Protect'
  | 'Professional Protocol';

export type ProductImageFit = 'contain' | 'cover';
export type ProductVisualFocus = 'center' | 'top' | 'bottom';
export type ProductSceneFit = 'contain' | 'cover';

export type ProductSourceSheet = 'REJO DERMA (Final)' | 'Barcode + CFS';

export type ProductRecord = {
  exactName: string;
  displayName: string;
  slug: string;
  capacity: string;
  assetPath: string;
  sceneHeroPath?: string;
  detailScenePath?: string;
  sceneFit?: ProductSceneFit;
  excelOrder?: number;
  sourceSheets?: ProductSourceSheet[];
  sourceCategory?: string;
  sourceForm?: string;
  sourceDescription?: string;
  retailPrice?: number;
  supplyPrice?: number;
  totalQuantity?: number;
  koreaQuantity?: number;
  vietnamQuantity?: number;
  imageSource?: string;
  visualFocus?: ProductVisualFocus;
  imageFit?: ProductImageFit;
  priority: number;
  launchPriority: boolean;
  category: ProductCategory;
  systemRole: SystemRole;
  availabilityPhase: 'Phase I' | 'Phase II';
  tagline: string;
  shortDescription: string;
  ingredientHighlights: string[];
  fullIngredients: string;
  usageNotes: string[];
  detailNarrative: string;
};

export const products: ProductRecord[] = [
  {
    exactName: 'Rejo Derma Intensive Soothing Mask',
    displayName: 'Intensive Soothing Mask',
    slug: 'rejo-derma-intensive-soothing-mask',
    capacity: '27ml',
    assetPath: '/product/rejo-derma-intensive-soothing-mask.png',
    sceneHeroPath: '/product-scenes/intensive-soothing-mask-hero.png',
    detailScenePath: '/product-scenes/intensive-soothing-mask-hero.png',
    sceneFit: 'contain',
    excelOrder: 15,
    sourceSheets: ["Barcode + CFS"],
    imageSource: "https://drive.google.com/drive/folders/1T4r0bw6wpA3aP_mwPZVXi-ZlWRB1UZpG?usp=sharing",
    priority: 1,
    launchPriority: true,
    category: 'Launch Masks',
    systemRole: 'Launch Highlight',
    availabilityPhase: 'Phase II',
    tagline: 'Comfort-first sheet mask for skin that needs calm.',
    shortDescription:
      'A soothing sheet mask built around Beta-Glucan, probiotic ferments, and barrier-supporting humectants for skin that feels stressed, dry, or overworked.',
    ingredientHighlights: ['Beta-Glucan', 'Probiotic Ferments', 'Allantoin', 'Sodium Hyaluronate'],
    fullIngredients:
      "WATER, BUTYLENE GLYCOL, GLYCERETH-26, DIPROPYLENE GLYCOL, GLYCERIN, TREHALOSE, PEG/PPG-17/6 COPOLYMER, PHENOXYETHANOL, CHLORPHENESIN, ARGININE, CARBOMER, PEG-60 HYDROGENATED CASTOR OIL, PROPANEDIOL, XANTHAN GUM, DISODIUM E DTA, ALLANTOIN, 1.2-HEXANEDIOL, VERONICA OFFICINALIS EXTRACT, BETA-GLUCAN, LACTO BACILLUS/RICE FERMENT, LACTOBACILLUS/PANAX GINSENG ROOT FERMENT FILTRATE, LACTO BACILLUS/SOYBEAN FERMENT EXTRACT, SACCHAROMYCES/POTATO EXTRACT FERMENT FILTRATE, SACCHAROMYCES/COIX LACRYMA-JOBI MA-YUEN SEED FERMENT FILTRATE, SODIUM HYALURONATE, ETHYLHEXYLGLYCERIN, FRAGRANCE",
    usageNotes: [
      'Use when skin feels dry, warm, or in need of a calming reset.',
      'Best positioned as the comfort layer in a brightening and recovery routine.',
    ],
    detailNarrative:
      'This mask is the reset step for moments when skin needs moisture, comfort, and a softer finish. Ferments, humectants, and barrier-supporting actives help the routine feel balanced rather than aggressive.',
  },
  {
    exactName: 'Rejo Derma Lumiglow Premium Hydrogel Mask',
    displayName: 'Lumiglow Premium Hydrogel Mask',
    slug: 'rejo-derma-lumiglow-premium-hydrogel-mask',
    capacity: '30g',
    assetPath: '/product/rejo-derma-lumiglow-premium-hydrogel-mask.jpg',
    sceneHeroPath: '/product-scenes/lumiglow-hydrogel-mask-hero.png',
    detailScenePath: '/product-scenes/lumiglow-hydrogel-mask-hero.png',
    sceneFit: 'contain',
    excelOrder: 16,
    sourceSheets: ["Barcode + CFS"],
    imageSource: "https://drive.google.com/drive/folders/1T4r0bw6wpA3aP_mwPZVXi-ZlWRB1UZpG?usp=sharing",
    priority: 2,
    launchPriority: true,
    category: 'Launch Masks',
    systemRole: 'Launch Highlight',
    availabilityPhase: 'Phase II',
    tagline: 'Hydrogel delivery mask for brighter-looking skin.',
    shortDescription:
      'A premium hydrogel mask designed to make glow care feel cooling, elevated, and visibly pampering within the Rejo Derma routine.',
    ingredientHighlights: ['Hydrogel Mask', 'Glow Care', 'Cooling Feel', 'Premium Ritual'],
    fullIngredients: '',
    usageNotes: [
      'Use as the brightening boost step over serum.',
      'Designed to intensify the routine rather than replace it.',
    ],
    detailNarrative:
      'Lumiglow is the more radiant, sensorial counterpart to the soothing mask. Its role is to turn glow care into a high-contact mask ritual while keeping the product story elegant and easy to understand.',
  },
  {
    exactName: 'Rejo Derma Purifying Micellar Water',
    displayName: 'Purifying Micellar Water',
    slug: 'rejo-derma-purifying-micellar-water',
    capacity: '200ml',
    assetPath: '/product/rejo-derma-purifying-micellar-water.png',
    sceneHeroPath: '/product-scenes/purifying-micellar-water-hero.png',
    detailScenePath: '/product-scenes/purifying-micellar-water-hero.png',
    sceneFit: 'contain',
    excelOrder: 1,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Căng bóng",
    sourceForm: "Bôi",
    sourceDescription: "Tẩy trang",
    retailPrice: 590000,
    supplyPrice: 117000,
    totalQuantity: 500,
    koreaQuantity: 200,
    vietnamQuantity: 300,
    imageSource: "https://drive.google.com/file/d/1L1RXWZL6Wn2KvPKat-HvX9JgCdfiPQ-9/view?usp=drive_link",
    priority: 3,
    launchPriority: false,
    category: 'Cleansing',
    systemRole: 'Daily Cleanse',
    availabilityPhase: 'Phase I',
    tagline: 'Low-friction first cleanse for daily residue removal.',
    shortDescription:
      'A cleansing water that clears sunscreen, makeup, and city residue without turning the first step into an aggressive stripping moment.',
    ingredientHighlights: ['Witch Hazel Extract', 'Licorice Root Extract', 'Centella Asiatica', 'Sodium Hyaluronate'],
    fullIngredients:
      "Water, Butylene Glycol, Hamamelis Virginiana (Witch Hazel) Extract, Sodium Hyaluronate, Glycyrrhiza Uralensis (Licorice) Root Extract, Camellia Sinensis Leaf Extract, Rosmarinus Officinalis (Rosemary) Extract, Centella Asiatica Extract, Anthemis Nobilis Flower Extract, Polygonum Cuspidatum Root Extract, Scutellaria Baicalensis Root Extract, Salix Alba (Willow) Bark Extract, Carica Papaya (Papaya) Fruit Extract, Pinus Radiata Bark Extract, Polyglutamic Acid, 1,2 - Hexanediol, Caprylyl Glycol, Illicium Verum (Anise) Fruit Extract, Disodium EDTA",
    usageNotes: ['Use as the first cleanse or a gentle reset before foam cleansing.'],
    detailNarrative:
      'This product opens the routine by removing sunscreen, makeup, and environmental residue without demanding a harsh first contact with skin. It sets up the next cleanse rather than trying to replace it.',
  },
  {
    exactName: 'Rejo Derma Clinical Cleansing Foam',
    displayName: 'Clinical Cleansing Foam',
    slug: 'rejo-derma-clinical-cleansing-foam',
    capacity: '150ml',
    assetPath: '/product/rejo-derma-clinical-cleansing-foam.jpg',
    sceneHeroPath: '/product-scenes/clinical-cleansing-foam-hero.png',
    detailScenePath: '/product-scenes/clinical-cleansing-foam-hero.png',
    sceneFit: 'contain',
    excelOrder: 2,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Căng bóng",
    sourceForm: "Bôi",
    sourceDescription: "Gel rửa mặt",
    retailPrice: 590000,
    supplyPrice: 117000,
    totalQuantity: 0,
    koreaQuantity: 0,
    vietnamQuantity: 0,
    imageSource: "https://drive.google.com/file/d/1MVdt7fd_s1gab5YDbIPkBXrsA21v8sd1/view?usp=drive_link",
    priority: 4,
    launchPriority: false,
    category: 'Cleansing',
    systemRole: 'Daily Cleanse',
    availabilityPhase: 'Phase I',
    tagline: 'Second cleanse with a cleaner clinical finish.',
    shortDescription:
      'A foam cleanser positioned as the daily wash step after micellar removal, keeping the routine clean without making the barrier pay for it.',
    ingredientHighlights: ['Decyl Glucoside', 'Potassium Cocoyl Glycinate', 'Betaine', 'Panax Ginseng Root Extract'],
    fullIngredients:
      "Water, Decyl Glucoside, Potassium Cocoyl Glycinate, Glycerin, Propanediol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Arginine, Butylene Glycol, 1,2-Hexanediol, Betaine, Caprylyl Glycol, Trehalose, Fragrance, Hydrolyzed Corn Starch, Caramel, Panax Ginseng Root Extract",
    usageNotes: ['Use as the main rinse-off cleanse in both AM and PM routines.'],
    detailNarrative:
      'The foam cleanser is the rinse-off step that gives the range a cleaner clinical rhythm. Mild surfactants, humectants, and supportive extracts keep it aligned with the barrier-conscious direction of the catalog.',
  },
  {
    exactName: 'Rejo Derma Chemical Acid Peel',
    displayName: 'Chemical Acid Peel',
    slug: 'rejo-derma-chemical-acid-peel',
    capacity: '20ml',
    assetPath: '/product/rejo-derma-chemical-acid-peel.png',
    sceneHeroPath: '/product-scenes/chemical-acid-peel-hero.png',
    detailScenePath: '/product-scenes/chemical-acid-peel-hero.png',
    sceneFit: 'contain',
    excelOrder: 4,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Căng bóng",
    sourceForm: "Bôi",
    sourceDescription: "Peel da căng bóng",
    retailPrice: 900000,
    supplyPrice: 180000,
    totalQuantity: 1000,
    koreaQuantity: 1000,
    vietnamQuantity: 0,
    imageSource: "https://drive.google.com/file/d/1bpEKX19rXpPFrogNZG6KDBemXwNq0cHV/view?usp=drive_link",
    priority: 5,
    launchPriority: false,
    category: 'Professional Protocols',
    systemRole: 'Weekly Exfoliation',
    availabilityPhase: 'Phase I',
    tagline: 'Controlled exfoliation for smoother-looking texture.',
    shortDescription:
      'An acid peel for structured exfoliation moments, designed to support a smoother-looking surface when used with clear frequency guidance.',
    ingredientHighlights: ['Lactic Acid', 'Glycolic Acid', 'Salicylic Acid', 'Centella Asiatica'],
    fullIngredients:
      "Water, Lactic Acid, Glycolic Acid, Salicylic Acid, Propylene Glycol, Denatured Alcohol, Potassium Hydroxide, 1,2-Hexanediol, Citric Acid, Xanthan Gum, Butylene Glycol, Gluconolactone, Centella Asiatica Extract, Aloe Vera Leaf Extract, Sodium PCA, Maranta Arundinacea Root Extract, Glycyrrhiza Glabra Root Extract, Paeonia Suffruticosa Root Extract, Citrus Tangerina Extract, Cnidium Officinale Root Extract, Disodium EDTA",
    usageNotes: ['Position as an advanced step with clear frequency guidance.'],
    detailNarrative:
      'This peel belongs to a structured exfoliation routine rather than casual daily layering. The acid blend supports surface refinement, while soothing and humectant ingredients keep the formula aligned with a balanced skincare rhythm.',
  },
  {
    exactName: 'Rejo Derma Chemical Neutralizer Oil',
    displayName: 'Chemical Neutralizer Oil',
    slug: 'rejo-derma-chemical-neutralizer-oil',
    capacity: '20ml',
    assetPath: '/product/rejo-derma-chemical-neutralizer-oil.png',
    sceneHeroPath: '/product-scenes/chemical-neutralizer-oil-hero.png',
    detailScenePath: '/product-scenes/chemical-neutralizer-oil-hero.png',
    sceneFit: 'contain',
    excelOrder: 5,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Căng bóng",
    sourceForm: "Bôi",
    sourceDescription: "",
    retailPrice: 900000,
    supplyPrice: 180000,
    totalQuantity: 1000,
    koreaQuantity: 1000,
    vietnamQuantity: 0,
    imageSource: "https://drive.google.com/file/d/1i-GAKyRrBvLt1XrX01zY12x8bcZeBbAk/view?usp=drive_link",
    priority: 6,
    launchPriority: false,
    category: 'Professional Protocols',
    systemRole: 'Weekly Exfoliation',
    availabilityPhase: 'Phase I',
    tagline: 'Neutralizing support for the peel protocol.',
    shortDescription:
      'A neutralizer oil designed to complete the acid-use routine, making exfoliation feel structured rather than like a loose standalone step.',
    ingredientHighlights: ['Mineral Oil', 'Acetyl Hexapeptide-8', 'Tocopheryl Acetate'],
    fullIngredients:
      "Mineral Oil, Isopropyl Palmitate, Solves-30 Tetraoleate, Isostearic Acid, Sorbitan Sesquioleate, Glycerin, Tocopheryl Acetate, Acetyl Hexapeptide-8, Water, 1,2-Hexanediol, Ethylhexylglycerin, Caprylyl Glycol",
    usageNotes: ['Always position with the peel routine, not as an isolated hero SKU.'],
    detailNarrative:
      'The neutralizer completes the acid peel routine. It reinforces that exfoliation in this range has a clear beginning and end.',
  },
  {
    exactName: 'Rejo Derma B5 Repair Serum',
    displayName: 'B5 Repair Serum',
    slug: 'rejo-derma-b5-repair-serum',
    capacity: '50ml',
    assetPath: '/product/rejo-derma-b5-repair-serum.jpg',
    sceneHeroPath: '/product-scenes/b5-repair-serum-hero.png',
    detailScenePath: '/product-scenes/b5-repair-serum-hero.png',
    sceneFit: 'contain',
    excelOrder: 6,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Căng bóng",
    sourceForm: "Bôi",
    sourceDescription: "Serum phục hồi căng bóng",
    retailPrice: 750000,
    supplyPrice: 165000,
    totalQuantity: 1000,
    koreaQuantity: 1000,
    vietnamQuantity: 0,
    imageSource: "https://drive.google.com/file/d/1KyQfgEFVgIxK3K807yhS_vDwnt40Ydfn/view?usp=drive_link",
    priority: 7,
    launchPriority: false,
    category: 'Repair & Recovery',
    systemRole: 'Barrier Support',
    availabilityPhase: 'Phase I',
    tagline: 'Daily repair serum for barrier-first routines.',
    shortDescription:
      'A repair serum that supports the barrier, helps skin feel calmer, and keeps brightening routines balanced for everyday use.',
    ingredientHighlights: ['Ectoin', 'Madecassoside', 'Centella Asiatica', 'Beta-Glucan'],
    fullIngredients:
      "Water, Butylene Glycol, Olea Europaea (Olive) Fruit Oil, Pinus Pinaster Bark Extract, Ectoin, Aloe Barbadensis Leaf Extract, Madecassoside, Centella Asiatica Leaf Extract. Asiaticoside, Glutathione, Niacinamide, Beta-Glucan, Panthenol, Allantoin, Dipotassium Glycyrrhizate, Juniperus Virginiana Oil, Pelargonium Graveolens Extract, Coriandrum Sativum (Coriander) Fruit Oil, Lavandula Angustifolia (Lavender) Oil, Anthemis Nobilis Flower Oil, Lecithin, Ammonium Acryloyldimethyltaurate/VP Copolymer, Sodium Acrylates Copolymer, Chlorphenesin, 1,2-Hexanediol, Caprylyl Glycol, Disodium EDTA, Maltodextri",
    usageNotes: ['Use after exfoliation nights or whenever the skin barrier needs extra support.'],
    detailNarrative:
      'B5 Repair Serum carries the barrier-support story with a mix of ectoin, centella derivatives, and humectant support. It is the product that keeps high-ambition routines usable over time.',
  },
  {
    exactName: 'Rejo Derma Repair Peptide Cream',
    displayName: 'Repair Peptide Cream',
    slug: 'rejo-derma-repair-peptide-cream',
    capacity: '50ml',
    assetPath: '/product/rejo-derma-repair-peptide-cream.png',
    sceneHeroPath: '/product-scenes/repair-peptide-cream-hero.png',
    detailScenePath: '/product-scenes/repair-peptide-cream-hero.png',
    sceneFit: 'contain',
    excelOrder: 7,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Căng bóng",
    sourceForm: "Bôi",
    sourceDescription: "Kem phục hồi căng bóng",
    retailPrice: 900000,
    supplyPrice: 199500,
    totalQuantity: 500,
    koreaQuantity: 0,
    vietnamQuantity: 500,
    imageSource: "https://drive.google.com/file/d/1hEihV1xq8vWebDfj7JXKiEKD3Wz-vrjx/view?usp=drive_link",
    priority: 8,
    launchPriority: false,
    category: 'Repair & Recovery',
    systemRole: 'Barrier Support',
    availabilityPhase: 'Phase I',
    tagline: 'Peptide cream to finish and reinforce recovery.',
    shortDescription:
      'A peptide-led finishing cream built to seal in care steps and make barrier support feel intentional rather than optional.',
    ingredientHighlights: ['Niacinamide', 'Copper Tripeptide-1', 'Ceramide NP', 'Madecassoside'],
    fullIngredients:
      "Water, Butylene Glycol, Cyclohexasiloxane, Cetearyl Alcohol, Glycerin, Triethylhexanoin, Niacinamide, Glutathione, Polyglyceryl-3 Distearate, Cetyl Ethylhexanoate, Dipentaerythrityl Hexa C5-9 Acid Esters, Betaine, Allantoin, Ectoin, Sodium Hyaluronate, Citric Acid , Ammonium Acryloyldimethyltaurate/VP Copolymer, Carbomer, Sorbitan Olivate, Dipotassium Glycyrrhizate, Pinus Pinaster Bark Extract, Sodium Polyacrylate, Ubiquinone, Hydrogenated Lecithin, Adenosine, Cholesterol, Brassica Campestris (Rapeseed) Sterols, Panthenol, Madecassoside, Asiaticoside, Madecassic Acid, Asiatic Acid, Ceramide NP, Rosa Canina Fruit Oil, Polyglyceryl-10 Laurate, Palmitoyl Pentapeptide-4, Palmitoyl Tripeptide-1, Hexapeptide-9, Acetyl Hexapeptide-8, Tripeptide-1, Caprylyl Glycol, Copper Tripeptide-1, Pimpinella Anisum (Anise) Fruit Extract, Vanilla Planifolia Fruit Extract, Camellia Sinensis Leaf Extract, Rosa Centifolia Flower Extract, Pyrus Communis (Pear) Fruit Extract, Cocos Nucifera (Coconut) Oil, Rosa Damascena Flower Water, Glyceryl Stearate Citrate, Cetearyl Olivate.",
    usageNotes: ['Use as the closing cream in recovery-oriented evening routines.'],
    detailNarrative:
      'This cream finishes the repair side of the routine with peptides, ceramide support, and centella-linked recovery cues. It acts as the structural closer of the evening routine.',
  },
  {
    exactName: 'Rejo Derma Daily Tone Up Sunscreen',
    displayName: 'Daily Tone Up Sunscreen',
    slug: 'rejo-derma-daily-tone-up-sunscreen',
    capacity: '50ml',
    assetPath: '/product/rejo-derma-daily-tone-up-sunscreen.jpg',
    sceneHeroPath: '/product-scenes/daily-tone-up-sunscreen-hero.png',
    detailScenePath: '/product-scenes/daily-tone-up-sunscreen-hero.png',
    sceneFit: 'contain',
    excelOrder: 8,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Bảo vệ da",
    sourceForm: "Bôi",
    sourceDescription: "Kem chống nắng Tone Up",
    retailPrice: 900000,
    supplyPrice: 180000,
    totalQuantity: 1000,
    koreaQuantity: 1000,
    vietnamQuantity: 0,
    imageSource: "https://drive.google.com/file/d/1JZmkcb_hy3RiV2ZOYv9OO36D19HlkKkV/view?usp=drive_link",
    priority: 9,
    launchPriority: false,
    category: 'Protection',
    systemRole: 'Daily Protect',
    availabilityPhase: 'Phase I',
    tagline: 'Daily protection with an immediate tone-up finish.',
    shortDescription:
      'A sunscreen that closes the daytime routine with protection and a cosmetic finish, helping tone-care steps stay supported in daylight.',
    ingredientHighlights: ['Titanium Dioxide', 'Niacinamide', 'Ferments', 'Sodium Hyaluronate'],
    fullIngredients:
      "Water, Dicaprylyl Carbonate, Homosalate, Butylene Glycol, Ethylhexyl Salicylate, Titanium Dioxide, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Dimethicone, Propanediol, Cetyl Peg/Ppg-10/1 Dimethicone, Glycerin, Niacinamide, Butylene Glycol Dicaprylate/ Dicaprate, Sodium Chloride, Silica, Ethylhexyl Stearate, Magnesium Stearate, Hydroxyacetophenone, 1,2-Hexanediol, Dimethicone/Vinyl Dimethicone Crosspolymer, Xanthan Gum, Aluminum Hydroxide, Ci 77491, Triethoxycaprylylsilane, Ci 77492, Adenosine, Hippophae Rhamnoides Fruit Extract, Sodium Hyaluronate Crosspolymer, Hydrolyzed Glycosaminoglycans, Lactobacillus/ Rice Ferment, Lactobacillus/ Panax Ginseng Root Ferment Filtrate, Lactobacillus/ Soybean Ferment Extract, Saccharomyces/Potato Extract Ferment Filtrate, Saccharomyces/ Coix Lacryma-Jobi Ma-Yuen Seed Ferment, Filtrate, Sodium Hyaluronate, Benzyl Glycol, Hydrolyzed Hyaluronic Acid, Ethylhexylglycerin, Hyaluronic Acid, Raspberry Ketone, Eugenol, Linalool, Fragrance",
    usageNotes: ['Position as the final AM step and the protection anchor of the routine.'],
    detailNarrative:
      'Daily Tone Up Sunscreen protects the brightening work done elsewhere in the range. It combines UV filters with tone-up payoff, so protection does not feel like a compromise step.',
  },
  {
    exactName: 'Rejo Derma Spotless Brightening Cream',
    displayName: 'Spotless Brightening Cream',
    slug: 'rejo-derma-spotless-brightening-cream',
    capacity: '30ml',
    assetPath: '/product/rejo-derma-spotless-brightening-cream.png',
    sceneHeroPath: '/product-scenes/spotless-brightening-cream-hero.png',
    detailScenePath: '/product-scenes/spotless-brightening-cream-hero.png',
    sceneFit: 'contain',
    excelOrder: 9,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Hỗ trợ điều trị nám",
    sourceForm: "",
    sourceDescription: "Kem arbutin hỗ trợ điều trị nám",
    retailPrice: 1200000,
    supplyPrice: 270000,
    totalQuantity: 1500,
    koreaQuantity: 0,
    vietnamQuantity: 1500,
    imageSource: "https://drive.google.com/file/d/1z3TrVRTqV20jVAUYy5PgmsqpMarc2O-y/view?usp=drive_link",
    priority: 10,
    launchPriority: false,
    category: 'Brightening',
    systemRole: 'Daily Brighten',
    availabilityPhase: 'Phase I',
    tagline: 'Brightening cream for targeted evening continuity.',
    shortDescription:
      'A brightening support cream that helps turn pigment care into a complete routine rather than a one-serum bet.',
    ingredientHighlights: ['Arbutin', 'Niacinamide', 'Vitamin C Derivatives', 'Sodium Hyaluronate'],
    fullIngredients:
      "Water, Arbutin, Glycerin, Caprylic/Capric Triglyceride, Niacinamide, Cetearyl Alcohol, Butylene Glycol, Glyceryl Stearate, Cyclopentasiloxane, Cetyl Ethylhexanoate, PEG-40 Stearate, Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Sodium Hyaluronate, Allantoin, Benzyl Glycol, Cyclohexasiloxane, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Tocopheryl Acetate, Ascorbyl Glucoside, Sodium Ascorbyl Phosphate, Magnesium Ascorbyl Phosphate, Tetrahexyldecyl Ascorbate, Sodium Riboflavin Phosphate, Carbomer, Triethanolamine, 1,2-Hexanediol, Ethylhexylglycerin, Polysorbate 60, Disodium EDTA, Propanediol, Sorbitan Sesquioleate, Sorbitan Isostearate, Sodium Hyaluronate Crosspolymer, Hydrolyzed Hyaluronic Acid, Hydrolyzed Glycosaminoglycans, Hippophae Rhamnoides Fruit Extract, Milk Protein Extract, Boswellia Serrata Resin Extract, Nicotinamide Mononucleotide.",
    usageNotes: ['Use as the brightening seal after serum or mask evenings.'],
    detailNarrative:
      'Spotless Brightening Cream extends the pigment-care story into the finish step. Arbutin, niacinamide, and multiple vitamin C derivatives give it a denser brightening identity than a standard moisturizer.',
  },
  {
    exactName: 'Rejo Derma Tone up Whitening Cream',
    displayName: 'Tone up Whitening Cream',
    slug: 'rejo-derma-tone-up-whitening-cream',
    capacity: '30ml',
    assetPath: '/product/rejo-derma-tone-up-whitening-cream.png',
    sceneHeroPath: '/product-scenes/tone-up-whitening-cream-hero.png',
    detailScenePath: '/product-scenes/tone-up-whitening-cream-hero.png',
    sceneFit: 'contain',
    excelOrder: 10,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Hỗ trợ điều trị nám",
    sourceForm: "",
    sourceDescription: "Kem trắng da tone up",
    retailPrice: 1100000,
    supplyPrice: 240000,
    totalQuantity: 1000,
    koreaQuantity: 1000,
    vietnamQuantity: 0,
    imageSource: "https://drive.google.com/file/d/1icTCYXUueM_YaRaPp62lbDZElpUerY-Z/view?usp=drive_link",
    priority: 11,
    launchPriority: false,
    category: 'Brightening',
    systemRole: 'Daily Brighten',
    availabilityPhase: 'Phase I',
    tagline: 'Tone-up cream with brightening support.',
    shortDescription:
      "A finish-focused cream for users who want immediate tone correction while still staying inside the brand's brightening story.",
    ingredientHighlights: ['Niacinamide', 'Glutathione', 'Ferments', 'Sodium Hyaluronate'],
    fullIngredients:
      "Water, Butylene Glycol, Cyclopentasiloxane, Cyclohexasiloxane, Ethylhexyl Methoxycinnamate, Caprylic/Capric Triglyceride, Phenyl Trimethicone, Cetyl PEG/PPG-10/1 Dimethicone, Titanium Dioxide, Niacinamide, Dimethicone, Sodium Chloride, Dimethicone/Vinyl Dimethicone Crosspolymer, Hydroxyacetophenone, 1,2-Hexanediol, Xanthan Gum, Aluminum Hydroxide, Propanediol, Triethoxycaprylylsilane, Adenosine, Allantoin, Hippophae Rhamnoides Fruit Extract, Glutathione, Glycerin, Sodium Hyaluronate Crosspolymer, Hydrolyzed Glycosaminoglycans, Sodium Hyaluronate, Lactobacillus/Rice Ferment, Lactobacillus/Panax Ginseng Root Ferment Filtrate, Lactobacillus/Soybean Ferment Extract, Saccharomyces/Potato Extract Ferment Filtrate, Saccharomyces/Coix Lacryma-Jobi Ma-yuen Seed Ferment Filtrate, Benzyl Glycol, Hydrolyzed Hyaluronic Acid, Ethylhexylglycerin, Hyaluronic Acid, Raspberry Ketone.",
    usageNotes: ['Use when the routine needs visible tone-up payoff alongside brightening care.'],
    detailNarrative:
      'Tone up Whitening Cream is more visual in its payoff than deeper care products, but it still stays inside the brightening routine through niacinamide, glutathione, and hydration support.',
  },
  {
    exactName: 'Rejo Derma Tranexamic Acid Serum',
    displayName: 'Tranexamic Acid Serum',
    slug: 'rejo-derma-tranexamic-acid-serum',
    capacity: '7ml',
    assetPath: '/product/rejo-derma-tranexamic-acid-serum.png',
    sceneHeroPath: '/product-scenes/tranexamic-acid-serum-hero.png',
    detailScenePath: '/product-scenes/tranexamic-acid-serum-hero.png',
    sceneFit: 'contain',
    excelOrder: 10,
    sourceSheets: ["Barcode + CFS"],
    imageSource: "https://drive.google.com/file/d/1jCIlrMImR7Jj30L06xj6WrJWiji0w590/view?usp=drive_link",
    priority: 12,
    launchPriority: false,
    category: 'Brightening',
    systemRole: 'Daily Brighten',
    availabilityPhase: 'Phase II',
    tagline: 'Focused serum for pigment-interruption routines.',
    shortDescription:
      'A concise tranexamic-focused serum positioned as the core pigment-interruption step in the daily brightening routine.',
    ingredientHighlights: ['Tranexamic Acid', 'Kojic Acid', 'Niacinamide', 'Licorice Root Extract'],
    fullIngredients:
      "Water, Isopentyldiol, Tranexamic Acid, Propanediol, Citric Acid, Kojic Acid, Niacinamide, Hydroxyacetophenone, Isododecane, Polyacrylate Crosspolymer-6, Glycyrrhiza Glabra (Licorice) Root Extract, Panthenol, Glycerin, Xanthan Gum, Tremella Fuciformis Sporocarp Extract, Phenoxyethanol, Ethylhexylglycerin, Betaine, Sodium Hyaluronate, Sodium Phytate, Potassium Sorbate, Tocopherol.",
    usageNotes: ['Use as the central serum step in routines focused on uneven-looking tone.'],
    detailNarrative:
      'This serum is the clearest single brightening anchor in the range. Tranexamic acid, kojic acid, niacinamide, and licorice build a focused story around visible tone interruption.',
  },
  {
    exactName: 'Rejo Derma Bringtening MTS Serum ',
    displayName: 'Bringtening MTS Serum',
    slug: 'rejo-derma-bringtening-mts-serum',
    capacity: '5ml',
    assetPath: '/product/rejo-derma-bringtening-mts-serum.png',
    sceneHeroPath: '/product-scenes/bringtening-mts-serum-hero.png',
    detailScenePath: '/product-scenes/bringtening-mts-serum-hero.png',
    sceneFit: 'contain',
    excelOrder: 11,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Hỗ trợ điều trị nám",
    sourceForm: "Bôi, Điện di, Lăn kim",
    sourceDescription: "Lăn kim trắng da, hỗ trợ điều trị nám",
    retailPrice: 1200000,
    supplyPrice: 240000,
    imageSource: "https://drive.google.com/file/d/1V31ASWfjCBtyqs7MM6o_MmUPjPWzmXIw/view?usp=drive_link",
    priority: 13,
    launchPriority: false,
    category: 'Professional Protocols',
    systemRole: 'Professional Protocol',
    availabilityPhase: 'Phase II',
    tagline: 'Professional-format brightening support.',
    shortDescription:
      'An MTS-format serum for advanced brightening care, best presented as a professional protocol product rather than a casual daily serum.',
    ingredientHighlights: ['Glutathione', 'Tranexamic Acid', 'Peptides', 'Retinol'],
    fullIngredients:
      "Water, Sodium Chloride, Glutathione, Sodium Hyaluronate, Sodium Phosphate, Ascorbic Acid, Inositol, Biotin, Calcium Pantothenate, Niacinamide, Tocopherol, Cyanocobalamin, Palmitoyl tripeptide-1, Copper Tripeptide-1, Acetyl Octapeptide-17 Amide, Tetrapeptide-44, Tranexamic Acid, Pyridoxine, Riboflavin, Thiamine HCl, Sodium Bicarbonate, Potassium Chloride, Calcium Chloride, Magnesium Sulfate, Alanine, Aspartic Acid, Glutamic Acid, Glycine, Arginine, Folic Acid, sh-Oligopeptide-1, sh-Polypeptide-1, sh-Oligopeptide-2, sh-Polypeptide-9, sh-Polypeptide-3, sh-Polypeptide-22, sh-Polypeptide-60, Retinol, Asparagine, Cystine, Cysteine, Glutamine, Histidine, Isoleucine, Leucine, Lysine, Methionine, Phenylalanine, Proline, Serine, Threonine, Tryptophan, Tyrosine, Valine, Adenosine, Cytidine, Guanosine, Uridine, Thymidine",
    usageNotes: ['Describe as an advanced protocol product, not a casual daily serum.'],
    detailNarrative:
      'Bringtening MTS Serum reads as a professional-format brightening formula. The formula layers peptides, glutathione, vitamins, and tranexamic acid into a more specialized care story than a simple retail serum.',
  },
  {
    exactName: 'Rejo Derma Aqua Repair MTS Serum ',
    displayName: 'Aqua Repair MTS Serum',
    slug: 'rejo-derma-aqua-repair-mts-serum',
    capacity: '50ml',
    assetPath: '/product/rejo-derma-aqua-repair-mts-serum.png',
    sceneHeroPath: '/product-scenes/aqua-repair-mts-serum-hero.png',
    detailScenePath: '/product-scenes/aqua-repair-mts-serum-hero.png',
    sceneFit: 'contain',
    excelOrder: 12,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Hỗ trợ điều trị nám",
    sourceForm: "",
    sourceDescription: "Serum lăn kim điện di cấp ẩm",
    retailPrice: 1200000,
    supplyPrice: 240000,
    imageSource: "https://drive.google.com/file/d/1i5Z0RVmsTEDZycVE-0pZpDxSXvsxRuB5/view?usp=drive_link",
    priority: 14,
    launchPriority: false,
    category: 'Repair & Recovery',
    systemRole: 'Professional Protocol',
    availabilityPhase: 'Phase II',
    tagline: 'Hydration-focused repair support for advanced care.',
    shortDescription:
      'A repair-led MTS serum that supports hydration and comfort for advanced routines where skin needs extra care.',
    ingredientHighlights: ['Bifida Ferment Filtrate', 'Niacinamide', 'Ceramide NP', 'Madecassoside'],
    fullIngredients:
      "Water, Butylene Glycol, Glycerin, Glycereth-26, 1,2-Hexanediol, Niacinamide, Bifida Ferment Filtrate, Betaine, Sodium Hyaluronate, Saccharide Isomerate, Pentylene Glycol, Opuntia Ficus-Indica Stem Extract, Propanediol, Dipotassium Glycyrrhizate, Sodium Hyaluronate Crosspolymer, Xylitylglucoside, Hydrolyzed Glycosaminoglycans, Anhydroxylitol, Xylitol, Madecassoside, Glucose, Nelumbo Nucifera Flower Extract, Nelumbo Nucifera Germ Extract, Hydrolyzed Hyaluronic Acid, Caprylic/ Capric Triglyceride, Phospholipids, Ceramide NP, Cholesterol, Hyaluronic Acid, Arginine, Phytosterols, Adenosine, Sodium Citrate, Citric Acid, Ethylhexylglycerin, Caprylhydroxamic Acid, Disodium EDTA",
    usageNotes: ['Frame as advanced recovery support or clinic-protocol inventory.'],
    detailNarrative:
      'Aqua Repair MTS Serum is the hydration-heavy recovery counterpart to the brighter protocol products. Ferments, ceramide support, and madecassoside keep it aligned with comfort, moisture, and resilience.',
  },
  {
    exactName: 'Rejo Derma Heal Cream',
    displayName: 'Heal Cream',
    slug: 'rejo-derma-heal-cream',
    capacity: '30ml',
    assetPath: '/product/rejo-derma-heal-cream.png',
    sceneHeroPath: '/product-scenes/heal-cream-hero.png',
    detailScenePath: '/product-scenes/heal-cream-hero.png',
    sceneFit: 'contain',
    excelOrder: 13,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Hỗ trợ điều trị mụn",
    sourceForm: "Kem mụn",
    sourceDescription: "Kem hỗ trợ điều trị mụn, giảm mẩn ngứa",
    retailPrice: 900000,
    supplyPrice: 180000,
    imageSource: "https://drive.google.com/file/d/14bd-VDfdL8yAjVULx5bCHjWOLoWpY-F0/view?usp=drive_link",
    priority: 15,
    launchPriority: false,
    category: 'Repair & Recovery',
    systemRole: 'Barrier Support',
    availabilityPhase: 'Phase II',
    tagline: 'Recovery cream for stressed or reactive skin states.',
    shortDescription:
      'A richer recovery cream for skin that feels irritated, reactive, or stressed and needs calm, cushion, and support.',
    ingredientHighlights: ['Shea Butter', 'Jojoba Seed Oil', 'Centella Asiatica', 'Beta-Glucan'],
    fullIngredients:
      "Water, Dipropylene Glycol Helianthus Annuus (Sunflower) Seed Oil, Butyrospermum Parkii Shea Butter, Glycerin, Olea Europaea (Olive) Fruit Oil, Cetearyl Alcohol, Stearic Acid, Simmondsia Chinensis Jojoba Seed Oil, Cetearyl Olivate, Chamaecyparis Obtusa Water, Sorbitan Olivate, Thuja Occidentalis Leaf Oil, 1,2-Hexanediol, Cetyl Palmitate, Sorbitan Palmitate, Caprylyl/Capryl Glucoside, Butylene Glycol, Arginine, Carbomer, Sorbitan Oleate, Xanthan Gum, Illicium Verum (Anise) Fruit Extract, Scutellaria Baicalensis Root Extract, Disodium EDTA, Sodium Hyaluronate, Beta-Glucan, Biosaccharide Gum-1, Centella Asiatica Extract, Ethylhexylglycerin, Colloidal Diamond, Glutathione, Thioctic Acid, Glucosyl Hesperidin.",
    usageNotes: ['Use when the routine needs more recovery than a standard finishing cream can provide.'],
    detailNarrative:
      'Heal Cream pushes further into rich recovery territory with oils, butters, and calming support. It is the product for stressed skin states when a lighter repair layer is not enough.',
  },
  {
    exactName: 'Rejo Derma Heal Serum ',
    displayName: 'Heal Serum',
    slug: 'rejo-derma-heal-serum',
    capacity: '50ml',
    assetPath: '/product/rejo-derma-heal-serum.png',
    sceneHeroPath: '/product-scenes/heal-serum-hero.png',
    detailScenePath: '/product-scenes/heal-serum-hero.png',
    sceneFit: 'contain',
    excelOrder: 14,
    sourceSheets: ["REJO DERMA (Final)", "Barcode + CFS"],
    sourceCategory: "Hỗ trợ điều trị mụn",
    sourceForm: "Bôi, Điện di",
    sourceDescription: "Serum hỗ trợ điều trị mụn",
    retailPrice: 1200000,
    supplyPrice: 240000,
    imageSource: "https://drive.google.com/file/d/1Cuunxvq0wVjCQPzGKDJHsEEAOtIsMmeK/view?usp=drive_link",
    priority: 16,
    launchPriority: false,
    category: 'Repair & Recovery',
    systemRole: 'Barrier Support',
    availabilityPhase: 'Phase II',
    tagline: 'Lightweight recovery serum for skin under stress.',
    shortDescription:
      'A recovery serum that extends the healing story into a lighter serum format for compromised or sensitized skin.',
    ingredientHighlights: ['Retinyl Palmitate', 'Centella Asiatica', 'Sodium DNA', 'Amino Acids'],
    fullIngredients:
      "Water, Propanediol, Butylene Glycol, 1,2-Hexanediol, Anemarrhena Asphodeloides Root Extract, Retinyl Palmitate, Ginkgo Biloba Leaf Extract, Centella Asiatica Extract, Sodium DNA, Passiflora Incarnata Extract, Houttuynia Cordata Extract, Eclipta Prostrata Extract, Polygonum Multiflorum Root Extract, Phyllostachys Nigra Leaf Extract, Urtica Dioica (Nettle) Extract, Glycine, Serine, Glutamic Acid, Aspartic Acid, Leucine, Alanine, Lysine, Arginine, Tyrosine, Phenylalanine, Threonine, Proline, Valine, Isoleucine, Histidine, Methionine, Cysteine, Tocopherol, Arachis Hypogaea (Peanut) Oil, Dipropylene Glycol, Glycerin, Sodium Hyaluronate, Polyglyceryl-4 Caprate, Allantoin, Adenosine, Caprylyl Glycol, Disodium EDTA",
    usageNotes: ['Position as a supportive serum rather than a brightening hero.'],
    detailNarrative:
      'Heal Serum gives the range a lighter recovery option for skin under stress. Botanical extracts, amino acids, sodium DNA, and centella keep the formula aligned with comfort and barrier support.',
  },
];

export const productsByName = Object.fromEntries(
  products.map((product) => [product.exactName, product]),
) as Record<string, ProductRecord>;

export const productsBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<string, ProductRecord>;

export const brandVisuals = {
  homeHero: '/brand/rejo-derma-home-hero-v3.png',
  productsHero: '/brand/rejo-derma-products-hero-band.png',
  launchStory: '/brand/proposals/about-banner-korean-lab-tech-v1.png',
  scienceBrightening: '/brand/rejo-derma-science-brightening-band-v2.png',
  scienceRepair: '/brand/rejo-derma-science-repair-band-v2.png',
  aboutArchitecture: '/brand/rejo-derma-about-clinical-architecture-band-v2.png',
} as const;

export const groupSceneVisuals = {
  launchMasks: '/product-scenes/launch-masks-duo-scene.png',
  toneCorrection: '/product-scenes/tone-correction-scene.png',
  barrierRecovery: '/product-scenes/barrier-recovery-scene.png',
  professionalProtocol: '/product-scenes/professional-protocol-scene.png',
} as const;

export const scienceIngredientSceneVisuals = {
  tranexamicAcid: '/product-scenes/proposals/science/science-tranexamic-scene-v1.png',
  betaGlucan: '/product-scenes/proposals/science/science-beta-glucan-scene-v1.png',
  copperTripeptide: '/product-scenes/proposals/science/science-copper-peptide-scene-v1.png',
  fermentsHumectants: '/product-scenes/proposals/science/science-ferments-humectants-scene-v1.png',
} as const;

export const orderedProducts = [...products].sort((a, b) => a.priority - b.priority);
export const launchProducts = orderedProducts.filter((product) => product.launchPriority);

export const catalogGroups: ProductCategory[] = [
  'Launch Masks',
  'Cleansing',
  'Exfoliation & Prep',
  'Brightening',
  'Repair & Recovery',
  'Protection',
  'Professional Protocols',
];

export const systemSteps = [
  {
    step: '01',
    label: 'Cleanse',
    emphasis: 'prepare the surface.',
    body: 'Remove sunscreen, makeup, and daily buildup first so every later step feels cleaner, smoother, and more effective.',
    products: [
      'Rejo Derma Purifying Micellar Water',
      'Rejo Derma Clinical Cleansing Foam',
    ],
  },
  {
    step: '02',
    label: 'Refine',
    emphasis: 'reset texture.',
    body: 'Smooth texture and manage congestion so brightening layers sit on a clearer, more even-looking surface.',
    products: [
      'Rejo Derma Chemical Acid Peel',
      'Rejo Derma Chemical Neutralizer Oil',
    ],
  },
  {
    step: '03',
    label: 'Brighten',
    emphasis: 'interrupt uneven tone.',
    body: 'Target uneven-looking tone with consistent serum and cream layers that build clarity and glow over time.',
    products: [
      'Rejo Derma Tranexamic Acid Serum',
      'Rejo Derma Spotless Brightening Cream',
      'Rejo Derma Tone up Whitening Cream',
      'Rejo Derma Bringtening MTS Serum ',
    ],
  },
  {
    step: '04',
    label: 'Repair',
    emphasis: 'hold the barrier.',
    body: 'Support the barrier so glow stays comfortable, hydrated, and easier to maintain day after day.',
    products: [
      'Rejo Derma B5 Repair Serum',
      'Rejo Derma Repair Peptide Cream',
      'Rejo Derma Aqua Repair MTS Serum ',
      'Rejo Derma Heal Cream',
      'Rejo Derma Heal Serum ',
    ],
  },
  {
    step: '05',
    label: 'Protect',
    emphasis: 'keep the work intact.',
    body: 'Finish with daily sunscreen so tone-care progress stays better protected against UV exposure.',
    products: ['Rejo Derma Daily Tone Up Sunscreen'],
  },
];

export const ingredientStories = [
  {
    name: 'Tranexamic Acid',
    claim: 'Tone-evening support',
    body: 'Used as a clear brightening anchor inside the range, Tranexamic Acid appears in the serum-first part of the routine where uneven-looking tone needs consistency, not hype.',
    foundIn: [
      'Rejo Derma Tranexamic Acid Serum',
      'Rejo Derma Bringtening MTS Serum ',
    ],
    theme: 'gold',
  },
  {
    name: 'Beta-Glucan',
    claim: 'Barrier recovery',
    body: 'Beta-Glucan gives the recovery side of the catalog a clear comfort-focused voice, especially in products meant to help skin feel calmer after stronger routine pressure.',
    foundIn: [
      'Rejo Derma Intensive Soothing Mask',
      'Rejo Derma B5 Repair Serum',
      'Rejo Derma Heal Cream',
    ],
    theme: 'sage',
  },
  {
    name: 'Copper Tripeptide-1',
    claim: 'Structural support',
    body: 'The peptide story in Rejo Derma is less about abstract anti-aging language and more about keeping skin structure supported while the routine does harder work elsewhere.',
    foundIn: [
      'Rejo Derma Repair Peptide Cream',
      'Rejo Derma Bringtening MTS Serum ',
    ],
    theme: 'blush',
  },
  {
    name: 'Madecassoside',
    claim: 'Calm, repair, repeat',
    body: 'Madecassoside threads through the repair side of the range to support skin that feels fragile, overworked, or in need of stability.',
    foundIn: [
      'Rejo Derma B5 Repair Serum',
      'Rejo Derma Aqua Repair MTS Serum ',
    ],
    theme: 'sage',
  },
  {
    name: 'Ferments & Humectants',
    claim: 'Recovery environment',
    body: 'Ferments, humectants, and hydration-support actives show up where the brand wants skin to feel more resilient, less stripped, and more comfortable.',
    foundIn: [
      'Rejo Derma Intensive Soothing Mask',
      'Rejo Derma Daily Tone Up Sunscreen',
      'Rejo Derma Aqua Repair MTS Serum ',
    ],
    theme: 'gold',
  },
  {
    name: 'Arbutin & Niacinamide',
    claim: 'Visible brightening continuity',
    body: 'This pairing carries the visible brightening layer of the routine through creams and finish products, so tone care is not limited to one isolated serum slot.',
    foundIn: [
      'Rejo Derma Spotless Brightening Cream',
      'Rejo Derma Tone up Whitening Cream',
      'Rejo Derma Daily Tone Up Sunscreen',
    ],
    theme: 'blush',
  },
];

export const familyCards = [
  {
    title: 'Launch Masks',
    eyebrow: 'Priority 01',
    description:
      'The mask duo leads the first impression with recovery and glow, while still pointing back to the wider routine.',
    products: launchProducts.map((product) => product.exactName),
  },
  {
    title: 'Daily Routine',
    eyebrow: 'Daily Care',
    description:
      'Daily-use essentials help the range feel practical, repeatable, and easier to understand from first visit.',
    products: [
      'Rejo Derma Purifying Micellar Water',
      'Rejo Derma Tranexamic Acid Serum',
      'Rejo Derma B5 Repair Serum',
      'Rejo Derma Daily Tone Up Sunscreen',
    ],
  },
  {
    title: 'Professional Protocols',
    eyebrow: 'Advanced Use',
    description:
      'Protocol-led products give the brand a stronger professional edge for clinics, partners, and advanced care routines.',
    products: [
      'Rejo Derma Chemical Acid Peel',
      'Rejo Derma Chemical Neutralizer Oil',
      'Rejo Derma Bringtening MTS Serum ',
      'Rejo Derma Aqua Repair MTS Serum ',
    ],
  },
];

export const productGalleryMoments = [
  {
    title: 'Barrier Recovery',
    body: 'A calmer product family built for stressed skin, compromised-feeling barrier states, and recovery pacing.',
    products: [
      'Rejo Derma Intensive Soothing Mask',
      'Rejo Derma B5 Repair Serum',
      'Rejo Derma Repair Peptide Cream',
    ],
  },
  {
    title: 'Tone Correction',
    body: 'Brightening formulas that combine correction, continuity, and visible finish across multiple texture formats.',
    products: [
      'Rejo Derma Tranexamic Acid Serum',
      'Rejo Derma Spotless Brightening Cream',
      'Rejo Derma Tone up Whitening Cream',
    ],
  },
  {
    title: 'Professional Protocol',
    body: 'Advanced-care products that make exfoliation and MTS use feel like a structured protocol rather than isolated steps.',
    products: [
      'Rejo Derma Chemical Acid Peel',
      'Rejo Derma Chemical Neutralizer Oil',
      'Rejo Derma Aqua Repair MTS Serum ',
    ],
  },
];
