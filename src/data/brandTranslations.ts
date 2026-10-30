import { Brand, Language } from '../types';

export interface BrandTranslationData {
  valueStatement?: string;
  shortDescription?: string;
  storyTitle?: string;
  storyText?: string;
  milestones?: Record<string, { title: string; description: string }>;
  families?: Record<string, { name: string; tagline?: string }>;
  products?: Record<string, { name: string; emotionalDescription?: string }>;
}

export const BRAND_TRANSLATIONS_EN: Record<string, BrandTranslationData> = {
  'coco-freeze': {
    valueStatement: 'HARVESTED AT ITS PEAK',
    shortDescription:
      'It all starts in the field. We select coconuts at their ideal harvest point to bring that naturally sweet, fresh, and authentic coconut flavor into every bottle. Over 20 years close to the origin have taught us something simple: when coconuts are harvested at their peak, you feel it in every sip.',
    storyTitle: 'It all began with 200 coconuts',
    storyText:
      'In 2004, Kevin Barcia began by selling fresh green coconuts: he brought 200 fresh coconuts and in barely an hour they were sold out. That is how Coco Freeze was born, first offering coconut in its purest form and later evolving into bottled coconut water, bringing its freshness and flavor to many more consumers.',
    milestones: {
      '2004': {
        title: 'The beginning',
        description: '200 fresh coconuts sold in an hour marked the start of Coco Freeze.',
      },
      '2006': {
        title: 'From coconut to bottle',
        description:
          'We successfully bottled coconut water, gaining versatility and paving the way to grow across the country\'s leading supermarket chains.',
      },
      '2010': {
        title: 'Learning from cultivation',
        description:
          'NDP Farm is established as a project to learn coconut farming and turn that knowledge into a driver for sharing best practices with local growers.',
      },
      '2026': {
        title: 'Harvested at its peak',
        description:
          'A new chapter celebrating over 20 years of expertise in coconuts and harvesting.',
      },
    },
    families: {
      'agua-de-coco': {
        name: 'Coconut Water',
        tagline: '100% natural, refreshing, and hydrating.',
      },
      'sabores-de-coco': {
        name: 'Coconut Flavors',
        tagline: 'Coconut water blended with tropical fruits.',
      },
    },
    products: {
      'cf-agua-de-coco': {
        name: 'Coconut Water',
        emotionalDescription:
          '100% natural coconut water, harvested at its peak to preserve its pure flavor.',
      },
      'cf-pipa-natural': {
        name: 'Fresh Green Coconut',
        emotionalDescription:
          'Straight from the palm to your hands. The purest and most traditional coconut experience.',
      },
      'cf-jugo-coco': {
        name: 'Coconut Juice',
        emotionalDescription:
          'Naturally sweet and smooth, perfect to enjoy at any time of day.',
      },
      'cf-coco-pina': {
        name: 'Coconut Water with Pineapple',
        emotionalDescription:
          'A tropical fusion pairing the freshness of coconut water with the sweetness of golden pineapple.',
      },
      'cf-limonada-coco': {
        name: 'Coconut Lemonade',
        emotionalDescription:
          'The citrusy punch of lime blended with the tropical sweetness of coconut.',
      },
      'cf-pina-colada': {
        name: 'Piña Colada',
        emotionalDescription:
          'Rich tropical creaminess with natural pineapple and coconut notes.',
      },
    },
  },

  'dhoy': {
    valueStatement: 'FROM FAMILY AND THE FIELD. TASTES LIKE REAL FRUIT.',
    shortDescription:
      '100% real fruit juices and delicious blends crafted to accompany your daily life with the authentic flavor of the Ecuadorian countryside.',
    storyTitle: 'A story born from real fruit',
    storyText:
      'D\'Hoy was born with a clear conviction: the best fruit needs no disguise. We began by crafting 100% pure orange juice and over time expanded our passion into fruit blends, cold-pressed juices, and functional shots, always preserving our commitment to origin and freshness.',
    milestones: {
      '2009': {
        title: 'D\'Hoy is born',
        description:
          'We began with 100% natural orange juice, straight from the orchard to the table.',
      },
      '2011': {
        title: 'Reaching more people',
        description:
          'We expanded into Ecuador\'s leading retail supermarkets nationwide.',
      },
      '2012': {
        title: 'Technology to care for fruit',
        description:
          'We opened our gentle pasteurization facility to keep nutrients and flavor pristine.',
      },
      '2016': {
        title: 'Functional shots arrive',
        description:
          'Ginger Inmunishot leads the way in a brand new category of daily wellness.',
      },
      '2026': {
        title: 'Real fruit taste',
        description:
          'Over 15 varieties celebrating the genuine flavor of the Ecuadorian land.',
      },
    },
    families: {
      'jugo-de-naranja': {
        name: 'Orange Juice',
        tagline: '100% pure orange juice, uncompromised natural freshness.',
      },
      'mezclas-de-fruta': {
        name: 'Fruit Blends',
        tagline: 'Delicious combinations of fruits from our land.',
      },
      'cold-pressed': {
        name: 'Cold Pressed',
        tagline: 'Hydraulic cold-pressed juices preserving living nutrients.',
      },
      'shots': {
        name: 'Functional Shots',
        tagline: 'Concentrated vitality and daily defense in practical formats.',
      },
      'especialidades-dhoy': {
        name: 'Specialties',
        tagline: 'Natural solutions crafted for practical healthy living.',
      },
    },
    products: {
      'dh-naranja-original': {
        name: '100% Orange Juice with Pulp',
        emotionalDescription:
          'Direct from fresh oranges. Pure, authentic citrus flavor with natural pulp in every sip.',
      },
      'dh-naranja-sin-pulpa': {
        name: '100% Orange Juice without Pulp',
        emotionalDescription:
          'The same natural orange sweetness in a completely smooth, pulp-free texture.',
      },
      'dh-naranja-calcio-d': {
        name: 'Orange Juice + Calcium & Vitamin D',
        emotionalDescription:
          'Naturally sweet orange juice fortified with Calcium and Vitamin D for family wellbeing.',
      },
      'dh-naranja-zanahoria': {
        name: 'Orange + Carrot',
        emotionalDescription:
          'The citrusy brightness of orange blended with the sweet earthiness of fresh carrots.',
      },
      'dh-naranja-mango': {
        name: 'Orange + Mango',
        emotionalDescription:
          'Fresh orange and tropical golden mango in a naturally luscious blend.',
      },
      'dh-naranja-fresa': {
        name: 'Orange + Strawberry',
        emotionalDescription:
          'The crispness of orange meets the sweet, aromatic flavor of ripe strawberries.',
      },
      'dh-naranja-jengibre': {
        name: 'Orange + Ginger',
        emotionalDescription:
          'Refreshing orange juice with a vibrant, invigorating kick of fresh ginger.',
      },
      'dh-mora': {
        name: 'Blackberry Juice',
        emotionalDescription:
          'Bold, deeply fruity, and packed with the signature tart sweetness of Andean blackberries.',
      },
      'dh-mandarina': {
        name: 'Mandarin Juice',
        emotionalDescription:
          'Sweet, highly aromatic, and intensely refreshing mandarin in every drop.',
      },
      'dh-cranberry': {
        name: 'Cranberry Juice',
        emotionalDescription:
          'A crisp, bold, and delightfully tart berry juice best enjoyed ice-cold.',
      },
      'dh-toronja': {
        name: 'Grapefruit Juice',
        emotionalDescription:
          'Citrusy, deeply refreshing, and carrying that unmistakable tangy grapefruit note.',
      },
      'dh-nectar-frutilla': {
        name: 'Strawberry Nectar',
        emotionalDescription:
          'Sweet, richly aromatic, and filled with the irresistible flavor of fresh strawberries.',
      },
      'dh-limonada-fresa': {
        name: 'Strawberry Lemonade',
        emotionalDescription:
          'Zesty lime and sweet strawberry in a delightfully balanced thirst-quencher.',
      },
      'dh-cp-pitahaya': {
        name: 'Cold Pressed Pitahaya',
        emotionalDescription:
          '100% cold-pressed yellow dragon fruit, naturally supporting gut health and hydration.',
      },
      'dh-cp-pina': {
        name: 'Cold Pressed Pineapple',
        emotionalDescription:
          'Cold-pressed golden pineapple preserving maximum enzyme activity and tropical taste.',
      },
      'dh-cp-remolacha': {
        name: 'Cold Pressed Beetroot',
        emotionalDescription:
          'Earthy beetroot cold-pressed with citrus notes for vitality and endurance.',
      },
      'dh-shot-inmuni': {
        name: 'Inmunishot Ginger',
        emotionalDescription:
          'Cold-pressed ginger root in a potent daily booster for your immune defense.',
      },
      'dh-shot-inmuni-plus': {
        name: 'Inmunishot Extreme',
        emotionalDescription:
          'An amplified concentration of ginger and citrus for demanding days.',
      },
      'dh-shot-balance': {
        name: 'Balance Shot Turmeric',
        emotionalDescription:
          'Golden turmeric root blend with black pepper extract for natural recovery.',
      },
      'dh-shot-digestive': {
        name: 'Digestive Shot',
        emotionalDescription:
          'Synergistic botanical blend formulated to comfort and support digestion.',
      },
      'dh-shot-defensa': {
        name: 'Defense Shot Vitamin C',
        emotionalDescription:
          'High-potency natural Vitamin C formulation to keep your defenses fortified.',
      },
      'dh-zumo-limon': {
        name: 'Natural Lime Juice',
        emotionalDescription:
          'Pure, freshly squeezed lime juice ready whenever your kitchen calls.',
      },
      'dh-pulpa-sabila': {
        name: 'Aloe Vera Pulp',
        emotionalDescription:
          'Ready-to-use pure aloe vera pulp for smoothies, beverages, and daily wellness.',
      },
    },
  },

  'ecolove': {
    valueStatement: 'DAILY WELLBEING BORN FROM NATURE',
    shortDescription:
      'Pure oils, plant-based drinks, and everyday natural choices for those seeking simple, transparent wellness.',
    storyTitle: 'Wellbeing that began with coconut oil',
    storyText:
      'EcoLove was created to make conscious eating accessible. We began with cold-pressed extra virgin coconut oil and today offer a portfolio of healthy oils, plant-based beverages, and everyday essentials crafted to nourish you with transparency and respect for nature.',
    milestones: {
      '2017': {
        title: 'First steps',
        description:
          'EcoLove is born with cold-pressed extra virgin coconut oil.',
      },
      '2018': {
        title: 'Expanding healthy oils',
        description:
          'We introduced avocado oil and practical formats for everyday cooking.',
      },
      '2021': {
        title: 'Plant-based beverages',
        description:
          'We launched almond and coconut plant-based milks with zero added sugar.',
      },
      '2022': {
        title: 'New convenient options',
        description:
          'We introduced spray cooking oils without chemical propellants for light cooking.',
      },
      '2026': {
        title: 'Daily wellbeing',
        description:
          'Natural, delicious options designed to nourish your healthy lifestyle.',
      },
    },
    families: {
      'aceites-de-coco': {
        name: 'Coconut Oils',
        tagline: 'Pure, versatile oils for cooking and wellbeing.',
      },
      'aceites-de-aguacate': {
        name: 'Avocado Oils',
        tagline: 'High smoke-point culinary oils rich in healthy fats.',
      },
      'aceites-en-spray': {
        name: 'Spray Oils',
        tagline: 'Non-aerosol, 100% pure cooking sprays.',
      },
      'bebidas-vegetales': {
        name: 'Plant-Based Drinks',
        tagline: 'Creamy, lactose-free, and unsweetened dairy alternatives.',
      },
      'kombucha': {
        name: 'Kombucha',
        tagline: 'Naturally fermented, effervescent probiotic tea.',
      },
      'algo-extra': {
        name: 'Something Extra',
        tagline: 'Natural sweeteners and wholesome pantry additions.',
      },
    },
    products: {
      'el-aceite-coco-extra-virgen': {
        name: 'Extra Virgin Coconut Oil',
        emotionalDescription:
          'Retains the gentle aroma and taste of fresh coconut. Ideal for cooking, baking, or raw dressings.',
      },
      'el-aceite-coco-sin-olor': {
        name: 'Odorless Coconut Oil',
        emotionalDescription:
          'All the thermal benefits of coconut oil with a neutral aroma and flavor for high-heat cooking.',
      },
      'el-aceite-coco-mct': {
        name: 'Pure MCT Coconut Oil',
        emotionalDescription:
          'Fast-absorbing medium-chain triglycerides for clean energy in coffee, smoothies, and salads.',
      },
      'el-aceite-aguacate-extra-virgen': {
        name: 'Extra Virgin Avocado Oil',
        emotionalDescription:
          'First cold-pressed avocado oil, rich in monounsaturated fats and boasting a buttery finish.',
      },
      'el-aceite-aguacate-sin-olor': {
        name: 'Odorless Avocado Oil',
        emotionalDescription:
          'Neutral, high-heat cooking oil made from 100% pure avocados.',
      },
      'el-spray-coco-mct': {
        name: 'MCT Coconut Oil Spray',
        emotionalDescription:
          'Clean mist spray without propellants, perfect for pans, air fryers, and grills.',
      },
      'el-spray-aguacate': {
        name: 'Avocado Oil Spray',
        emotionalDescription:
          'Even, non-stick mist of pure avocado oil for precise, light culinary use.',
      },
      'el-spray-oliva': {
        name: 'Extra Virgin Olive Oil Spray',
        emotionalDescription:
          'Mediterranean extra virgin olive oil in a convenient portion-controlled fine mist spray.',
      },
      'el-bebida-almendra-sin-azucar': {
        name: 'Unsweetened Almond Drink',
        emotionalDescription:
          'Smooth and creamy plant-based beverage with no added sugars or artificial flavors.',
      },
      'el-bebida-almendra-vainilla': {
        name: 'Almond Vanilla Drink',
        emotionalDescription:
          'Delicate natural vanilla notes in a creamy dairy-free almond base.',
      },
      'el-bebida-coco': {
        name: 'Unsweetened Coconut Drink',
        emotionalDescription:
          'Naturally refreshing, velvety coconut milk alternative with zero added sugar.',
      },
      'el-kombucha-frutos-rojos': {
        name: 'Red Berries Kombucha',
        emotionalDescription:
          'Fruity, sparkling, and infused with the vibrant tang of antioxidant-rich berries.',
      },
      'el-kombucha-jengibre': {
        name: 'Ginger Kombucha',
        emotionalDescription:
          'Crisp, effervescent probiotic tea with an invigorating kick of fresh ginger.',
      },
      'el-kombucha-manzana': {
        name: 'Apple Kombucha',
        emotionalDescription:
          'Crisp, balanced green apple notes with gentle fermentation sparkle.',
      },
      'el-shot-energy': {
        name: 'Energy Shot',
        emotionalDescription:
          'Natural botanical energy booster formulated with adaptogens and fruit extracts.',
      },
      'el-shot-defense': {
        name: 'Defense Shot',
        emotionalDescription:
          'Potent ginger and botanical blend crafted to support everyday vitality.',
      },
      'el-miel-agave': {
        name: 'Organic Agave Nectar',
        emotionalDescription:
          'Low-glycemic natural sweetener ideal for coffee, teas, pancakes, and baking.',
      },
    },
  },

  'hortilisto': {
    valueStatement: 'FOOD IS THE BEST MOMENT TO SHARE.',
    shortDescription:
      'Delicious fresh vegetables, ready to make your cooking practical and give you more time to enjoy.',
    storyTitle: '',
    storyText: '',
    milestones: {},
    families: {
      'aguacates-maduros': {
        name: 'Ripe Avocados',
        tagline: 'Hand-picked and at the exact point of ripeness to enjoy.',
      },
      'vegetales-y-frutas-listas': {
        name: 'Ready Vegetables & Fruits',
        tagline: 'Washed, chopped, and prepped to save you time.',
      },
      'guacamole': {
        name: 'Fresh Guacamole',
        tagline: 'Homemade taste and texture, ready to serve and share.',
      },
      'encurtidos': {
        name: 'Pickled Fruits & Vegetables',
        tagline: 'Authentic traditional flavor with a delightful crunch.',
      },
    },
    products: {
      'hl-aguacate-maduro': {
        name: 'Ripe Ready Avocado',
        emotionalDescription:
          'Creamy, buttery, and ripe to perfection. Ready to cut and elevate any meal.',
      },
      'hl-aguacate-6pack': {
        name: 'Ripe Avocado 6-Pack',
        emotionalDescription:
          'Ideal family pack of hand-selected ripe avocados for the entire week.',
      },
      'hl-mix-cebolla': {
        name: 'Onion Mix',
        emotionalDescription:
          'Pre-chopped onion blend ready to sauté, saving you tears and kitchen time.',
      },
      'hl-megamix-cebolla': {
        name: 'Mega Onion Mix',
        emotionalDescription:
          'Generous portion of fresh chopped onions ready for stews, sauces, and roasts.',
      },
      'hl-cebolla-paiteña': {
        name: 'Chopped Red Onion',
        emotionalDescription:
          'Freshly diced red onion, ideal for salads, ceviches, and savory dressings.',
      },
      'hl-cebolla-perla': {
        name: 'Chopped White Onion',
        emotionalDescription:
          'Sweet, mild white onion prepped for quick, clean cooking.',
      },
      'hl-pimientos-colores': {
        name: 'Bell Pepper Medley',
        emotionalDescription:
          'Vibrant red, yellow, and green bell pepper strips ready for stir-fries and fajitas.',
      },
      'hl-zapallo-troceado': {
        name: 'Diced Pumpkin',
        emotionalDescription:
          'Tender diced pumpkin ready for soups, purees, and comforting broths.',
      },
      'hl-jengibre-bandeja': {
        name: 'Fresh Ginger',
        emotionalDescription:
          'Washed, aromatic ginger roots ready for teas, infusions, and cooking.',
      },
      'hl-pina-golden': {
        name: 'Golden Pineapple Chunks',
        emotionalDescription:
          'Sweet, juicy golden pineapple cut into bite-sized chunks to enjoy anytime.',
      },
      'hl-guacamole-original': {
        name: 'Traditional Guacamole',
        emotionalDescription:
          '100% fresh avocado guacamole seasoned with cilantro, lime, and onion.',
      },
      'hl-guacamole-tomate-pimiento': {
        name: 'Guacamole with Tomato & Pepper',
        emotionalDescription:
          'Chunky guacamole loaded with diced fresh tomato and bell peppers.',
      },
      'hl-mango-encurtido': {
        name: 'Pickled Green Mango',
        emotionalDescription:
          'Crisp, tangy pickled green mango prepared to traditional Ecuadorian taste.',
      },
    },
  },
};

/**
 * Returns a translated version of a Brand object based on the active language.
 */
export function getTranslatedBrand(brand: Brand, language: Language): Brand {
  if (language === 'es') {
    return brand;
  }

  const translation = BRAND_TRANSLATIONS_EN[brand.id];
  if (!translation) {
    return brand;
  }

  return {
    ...brand,
    valueStatement: translation.valueStatement || brand.valueStatement,
    shortDescription: translation.shortDescription || brand.shortDescription,
    storyTitle: translation.storyTitle !== undefined ? translation.storyTitle : brand.storyTitle,
    storyText: translation.storyText !== undefined ? translation.storyText : brand.storyText,
    milestones: brand.milestones?.map((m) => {
      const mTrans = translation.milestones?.[m.year];
      if (!mTrans) return m;
      return {
        ...m,
        title: mTrans.title || m.title,
        description: mTrans.description || m.description,
      };
    }),
    families: brand.families.map((f) => {
      const fTrans = translation.families?.[f.id];
      if (!fTrans) return f;
      return {
        ...f,
        name: fTrans.name || f.name,
        tagline: fTrans.tagline || f.tagline,
      };
    }),
    products: brand.products.map((p) => {
      const pTrans = translation.products?.[p.id];
      if (!pTrans) return p;
      return {
        ...p,
        name: pTrans.name || p.name,
        emotionalDescription: pTrans.emotionalDescription || p.emotionalDescription,
      };
    }),
  };
}
