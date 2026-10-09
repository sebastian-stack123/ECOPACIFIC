import { Brand } from '../types';
import cocoFreezeImg from '../assets/images/cocofreezeimagenmenu.jpg';
import dhoyImg from '../assets/images/dhoyimagenmenu.jpg';
import ecoloveImg from '../assets/images/imagenmenuecolove.jpg';
import hortilistoImg from '../assets/images/brand_hortilisto_vegetables_1790632711765.jpg';

export const BRANDS_DATA: Record<string, Brand> = {
  'coco-freeze': {
    id: 'coco-freeze',
    name: 'Coco Freeze',
    slug: 'coco-freeze',
    valueStatement: 'COSECHADO EN SU PUNTO',
    conceptVisual: 'coco, frescura, origen, tropical, natural.',
    shortDescription: 'Cocos seleccionados en su punto ideal para llevar a cada botella sabor naturalmente dulce, fresco y auténtico.',
    storyTitle: 'Todo comenzó con 200 cocos',
    storyText: 'En 2004, Kevin Barcia comenzó vendiendo pipa natural: llevó 200 cocos frescos y en apenas una hora se habían terminado. Así nació Coco Freeze, primero acercando el coco en su forma más natural y luego evolucionando al agua de coco en botella, un formato que permitió llevar su frescura y sabor a muchos más consumidores.',
    milestones: [
      {
        year: '2004',
        title: 'El comienzo',
        description: '200 cocos frescos vendidos en una hora dan inicio a Coco Freeze.'
      },
      {
        year: '2006',
        title: 'Del coco a la botella',
        description: 'Logramos llevar el agua de coco a botella, ganando versatilidad y abriendo el camino para crecer en las principales cadenas del país.'
      },
      {
        year: '2010',
        title: 'Aprender desde el cultivo',
        description: 'Nace la finca NDP como un proyecto para aprender del cultivo de coco y convertir ese conocimiento en un motor para compartir mejores prácticas con los agricultores de la zona.'
      },
      {
        year: '2026',
        title: 'Cosechado en su punto',
        description: 'Una nueva etapa que pone en valor más de 20 años de conocimiento del coco y su cosecha.'
      }
    ],
    colors: {
      primary: '#0284C7', // Azul brillante
      secondary: '#F0F9FF',
      accent: '#FACC15', // Toques de amarillo brillante
      badgeBg: '#FEF08A',
      badgeText: '#854D0E',
      blockBg: '#0369A1',
      blockText: '#FFFFFF',
      borderAccent: '#38BDF8',
      heroGradient: 'from-sky-950/95 via-sky-900/80 to-blue-950/90',
      navBg: '#0284C7',
      navText: '#FFFFFF',
      navHover: '#FEF08A',
      navCtaBg: '#FACC15',
      navCtaText: '#0C4A6E',
      subKickerBg: '#FEF08A',
      subKickerText: '#713F12',
      cardAccentBorder: '#38BDF8',
      cardTagBg: '#E0F2FE',
      cardTagText: '#0369A1',
      footerBg: '#082F49',
      footerText: '#BAE6FD',
      vibrantTag: 'Coco Freeze · 100% Tropical & Fresco',
      buttonBg: '#0284C7',
      buttonText: '#FFFFFF',
      buttonBorder: '#FACC15'
    },
    heroImage: cocoFreezeImg,
    closingStatement: 'Más de 20 años cerca del origen nos han enseñado algo simple: cuando el coco se cosecha en su punto, se siente en cada sorbo.',
    families: [
      {
        id: 'agua-de-coco',
        name: 'Agua de coco',
        tagline: 'El coco en su forma más refrescante. Agua de coco para disfrutar el sabor natural de una fruta cosechada en su punto.',
        productIds: ['cf-agua-de-coco', 'cf-pipa-natural']
      },
      {
        id: 'sabores-de-coco',
        name: 'Sabores de coco',
        tagline: 'El coco también tiene un lado irresistible. Combinaciones tropicales, refrescantes y deliciosas.',
        productIds: ['cf-jugo-coco', 'cf-coco-pina', 'cf-limonada-coco', 'cf-pina-colada']
      }
    ],
    products: [
      {
        id: 'cf-agua-de-coco',
        name: 'Agua de Coco',
        brandId: 'coco-freeze',
        familyId: 'agua-de-coco',
        emotionalDescription: 'Refrescante, naturalmente dulce y lista para acompañarte donde quieras.',
        presentations: ['200 ml Six Pack', '240 ml', '300 ml vidrio', '355 ml', '500 ml', '1 L', '2 L'],
        technicalInfo: {
          ingredients: '100% Agua de coco natural cosechada en su punto.',
          conservation: 'Mantener refrigerado entre 2°C y 4°C. Una vez abierto consumir en el menor tiempo posible.',
          origin: 'Cultivo de la costa del Pacífico, Finca NDP y productores aliados.'
        },
        imageUrl: cocoFreezeImg,
        featured: true
      },
      {
        id: 'cf-pipa-natural',
        name: 'Pipa natural',
        brandId: 'coco-freeze',
        familyId: 'agua-de-coco',
        emotionalDescription: 'De la palma a tus manos. Coco natural para disfrutarlo como nació.',
        presentations: ['Pipa natural'],
        technicalInfo: {
          ingredients: 'Coco natural entero seleccionado en su punto.',
          conservation: 'Almacenar en lugar fresco y seco o refrigerar para un consumo óptimo.',
          origin: 'Palmas seleccionadas de la costa pacífica.'
        },
        imageUrl: cocoFreezeImg
      },
      {
        id: 'cf-jugo-coco',
        name: 'Jugo de coco / SL Coco',
        brandId: 'coco-freeze',
        familyId: 'sabores-de-coco',
        emotionalDescription: 'Cremoso, tropical y lleno de auténtico sabor a coco.',
        presentations: ['355 ml', '1 L'],
        technicalInfo: {
          ingredients: 'Agua de coco, extracto de pulpa de coco.',
          conservation: 'Mantener en refrigeración. Agitar bien antes de disfrutar.',
          origin: 'Cocos frescos ecuatorianos.'
        },
        imageUrl: cocoFreezeImg
      },
      {
        id: 'cf-coco-pina',
        name: 'Agua de coco con piña',
        brandId: 'coco-freeze',
        familyId: 'sabores-de-coco',
        emotionalDescription: 'La frescura del agua de coco con el toque tropical y delicioso de la piña.',
        presentations: ['355 ml'],
        technicalInfo: {
          ingredients: 'Agua de coco natural, jugo de piña seleccionada.',
          conservation: 'Mantener refrigerado entre 2°C y 4°C.',
          origin: 'Frutas cosechadas en zonas tropicales de origen.'
        },
        imageUrl: cocoFreezeImg
      },
      {
        id: 'cf-limonada-coco',
        name: 'Limonada de coco',
        brandId: 'coco-freeze',
        familyId: 'sabores-de-coco',
        emotionalDescription: 'Limón refrescante y coco en una combinación tropical diferente.',
        presentations: ['355 ml'],
        technicalInfo: {
          ingredients: 'Agua de coco, jugo fresco de limón y notas de coco.',
          conservation: 'Mantener frío para preservar frescura cítrica.',
          origin: 'Cítricos y cocos del Pacífico.'
        },
        imageUrl: cocoFreezeImg
      },
      {
        id: 'cf-pina-colada',
        name: 'Piña colada',
        brandId: 'coco-freeze',
        familyId: 'sabores-de-coco',
        emotionalDescription: 'Coco y piña en una combinación cremosa que sabe a vacaciones.',
        presentations: ['355 ml'],
        technicalInfo: {
          ingredients: 'Base de agua y crema de coco, jugo de piña tropical.',
          conservation: 'Refrigerar siempre para servir bien frío.',
          origin: 'Frutas tropicales de campo.'
        },
        imageUrl: cocoFreezeImg
      }
    ]
  },

  'dhoy': {
    id: 'dhoy',
    name: "D'hoy",
    slug: 'dhoy',
    valueStatement: 'DE FAMILIA Y DEL CAMPO. SABE A FRUTA DE VERDAD.',
    conceptVisual: 'fruta fresca, naranja, campo, energía, naturalidad.',
    shortDescription: 'Elegimos buena fruta y la procesamos para conservar lo que importa: su sabor. Lo mejor del campo a tu día a día.',
    storyTitle: 'Una historia que empezó antes de amanecer',
    storyText: 'En 2009 comenzamos haciendo jugo de naranja fresco para restaurantes de Quito. Las naranjas se exprimían alrededor de las 3 de la mañana para entregar el jugo frío, fresco y con el mejor sabor posible. Desde entonces, nuestra convicción sigue siendo la misma: encontrar buena fruta y cuidar su verdadero sabor.',
    milestones: [
      {
        year: '2009',
        title: "Nace D'hoy",
        description: 'Jugo de naranja exprimido de madrugada para restaurantes de Quito.'
      },
      {
        year: '2011',
        title: 'Llegamos a más personas',
        description: 'Incorporamos un proceso tecnológico que, sin aditivos, permite alargar la vida útil y llevar D\'hoy a más puntos de venta.'
      },
      {
        year: '2012',
        title: 'Tecnología para cuidar la fruta',
        description: 'Incorporamos tecnología avanzada de extracción para cuidar mejor la calidad y el sabor de los cítricos.'
      },
      {
        year: '2016',
        title: 'Nacen los shots',
        description: 'Inmunishot de jengibre se convierte en el protagonista de una nueva categoría.'
      },
      {
        year: '2026',
        title: 'Fruta de verdad',
        description: 'Seguimos perfeccionando fruta y proceso para lograr un sabor consistentemente delicioso.'
      }
    ],
    colors: {
      primary: '#EA580C', // Naranja fuerte
      secondary: '#FFF7ED',
      accent: '#15803D', // Verde fuerte
      badgeBg: '#FFEDD5',
      badgeText: '#C2410C',
      blockBg: '#C2410C',
      blockText: '#FFFFFF',
      borderAccent: '#16A34A',
      heroGradient: 'from-orange-950/95 via-amber-950/80 to-stone-950/90',
      navBg: '#EA580C',
      navText: '#FFFFFF',
      navHover: '#FFEDD5',
      navCtaBg: '#EA580C',
      navCtaText: '#FFFFFF',
      subKickerBg: '#FFEDD5',
      subKickerText: '#C2410C',
      cardAccentBorder: '#FB923C',
      cardTagBg: '#FFEDD5',
      cardTagText: '#C2410C',
      footerBg: '#7C2D12',
      footerText: '#FED7AA',
      vibrantTag: "D'hoy · Sabor Cítrico Auténtico",
      buttonBg: '#EA580C',
      buttonText: '#FFFFFF',
      buttonBorder: '#15803D'
    },
    heroImage: dhoyImg,
    closingStatement: "Elegimos buena fruta y cuidamos cada proceso para que cuando abras una botella de D'hoy, sientas el verdadero sabor del campo.",
    families: [
      {
        id: 'jugo-de-naranja',
        name: 'Jugo de naranja',
        tagline: "El que empezó todo. Nuestro producto estrella y la expresión más pura de lo que significa D'hoy.",
        productIds: ['dh-naranja-clasico', 'dh-naranja-sin-pulpa', 'dh-naranja-calcio-vitamina-d']
      },
      {
        id: 'mezclas-de-fruta',
        name: 'Mezclas de fruta',
        tagline: 'Frutas que juntas saben todavía mejor. Combinaciones naturales, intensas y deliciosas.',
        productIds: [
          'dh-naranja-zanahoria',
          'dh-naranja-mango',
          'dh-naranja-fresa',
          'dh-naranja-jengibre',
          'dh-mora',
          'dh-mandarina',
          'dh-cranberry',
          'dh-toronja',
          'dh-nectar-frutilla',
          'dh-limonada-fresa'
        ]
      },
      {
        id: 'cold-pressed',
        name: 'Cold Pressed',
        tagline: 'Frutas y vegetales prensados en frío, con combinaciones pensadas para sumar sabor y funcionalidad a tu día.',
        productIds: ['dh-cold-pitahaya', 'dh-cold-pina-hierbabuena', 'dh-cold-remolacha']
      },
      {
        id: 'shots',
        name: 'Shots',
        tagline: 'Ingredientes potentes y combinaciones funcionales creadas para acompañar distintos momentos y necesidades de tu rutina.',
        productIds: ['dh-shot-inmuni', 'dh-shot-inmuni-plus', 'dh-shot-balance', 'dh-shot-digesti', 'dh-shot-defen']
      },
      {
        id: 'especialidades-dhoy',
        name: "Especialidades D'hoy",
        tagline: 'Formatos prácticos para llevar ingredientes naturales a distintas preparaciones.',
        productIds: ['dh-zumo-limon', 'dh-pulpa-sabila']
      }
    ],
    products: [
      {
        id: 'dh-naranja-clasico',
        name: 'Jugo de naranja',
        brandId: 'dhoy',
        familyId: 'jugo-de-naranja',
        emotionalDescription: 'Naranjas seleccionadas por su sabor para disfrutar un jugo fresco, auténtico y delicioso todos los días.',
        presentations: ['200 ml Six Pack', '240 ml', '355 ml', '1 L', '1,75 L', '2,5 L', '3,8 L'],
        technicalInfo: {
          ingredients: '100% Jugo puro de naranja recién exprimido con pulpa natural.',
          conservation: 'Mantener refrigerado a 4°C. Agitar suavemente antes de servir.',
          origin: 'Huertos de cítricos seleccionados por EcoPacific.'
        },
        imageUrl: dhoyImg,
        featured: true
      },
      {
        id: 'dh-naranja-sin-pulpa',
        name: 'Naranja sin pulpa',
        brandId: 'dhoy',
        familyId: 'jugo-de-naranja',
        emotionalDescription: 'Todo el sabor de nuestra naranja, con una textura más ligera y suave.',
        presentations: ['1 L', '2,5 L'],
        technicalInfo: {
          ingredients: '100% Jugo puro de naranja filtrado suavemente.',
          conservation: 'Conservar siempre en frío.',
          origin: 'Cítricos de cosecha controlada.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-naranja-calcio-vitamina-d',
        name: 'Naranja + Calcio y Vitamina D',
        brandId: 'dhoy',
        familyId: 'jugo-de-naranja',
        emotionalDescription: 'Nuestro jugo de naranja con calcio y vitamina D para sumar algo más a tu día.',
        presentations: ['2,5 L'],
        technicalInfo: {
          ingredients: 'Jugo de naranja exprimido, citrato de calcio, colecalciferol (vitamina D).',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Huertos ecuatorianos.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-naranja-zanahoria',
        name: 'Naranja + Zanahoria',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'La frescura de la naranja y el carácter de la zanahoria en uno de nuestros sabores favoritos.',
        presentations: ['355 ml', '1 L', '1,75 L'],
        technicalInfo: {
          ingredients: 'Jugo de naranja exprimido, jugo fresco de zanahoria.',
          conservation: 'Refrigerar entre 2°C y 4°C.',
          origin: 'Cultivos de altura y valles cálidos.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-naranja-mango',
        name: 'Naranja + Mango',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Naranja fresca y mango tropical en una mezcla naturalmente deliciosa.',
        presentations: ['355 ml', '1,75 L'],
        technicalInfo: {
          ingredients: 'Jugo de naranja exprimido, pulpa de mango natural.',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Frutas tropicales del campo.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-naranja-fresa',
        name: 'Naranja + Fresa',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'La frescura de la naranja se encuentra con el sabor dulce y aromático de la fresa.',
        presentations: ['355 ml'],
        technicalInfo: {
          ingredients: 'Jugo de naranja y pulpa seleccionada de fresa.',
          conservation: 'Refrigerar entre 2°C y 4°C.',
          origin: 'Orígenes seleccionados.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-naranja-jengibre',
        name: 'Naranja + Jengibre',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Naranja refrescante con un toque intenso y vibrante de jengibre.',
        presentations: ['355 ml'],
        technicalInfo: {
          ingredients: 'Jugo de naranja y extracto fresco de jengibre.',
          conservation: 'Mantener refrigerado.',
          origin: 'Cítricos y raíces de cultivo nacional.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-mora',
        name: 'Mora',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Intenso, frutal y lleno del sabor característico de la mora.',
        presentations: ['355 ml', '1 L'],
        technicalInfo: {
          ingredients: 'Pulpa de mora andina seleccionada, agua purificada.',
          conservation: 'Refrigeración continua.',
          origin: 'Valles andinos.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-mandarina',
        name: 'Mandarina',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Dulce, aromática y refrescante. Mandarina para disfrutar en cada sorbo.',
        presentations: ['355 ml', '1,75 L'],
        technicalInfo: {
          ingredients: '100% Jugo puro de mandarinas cosechadas en temporada.',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Huertos de cítricos dulces.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-cranberry',
        name: 'Cranberry',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Un sabor frutal, intenso y ligeramente ácido que se disfruta bien frío.',
        presentations: ['355 ml', '1,75 L'],
        technicalInfo: {
          ingredients: 'Jugo concentrado de arándano rojo (cranberry), agua.',
          conservation: 'Mantener en frío.',
          origin: 'Selección de berries de calidad.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-toronja',
        name: 'Toronja',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Cítrica, refrescante y con ese carácter inconfundible de la toronja.',
        presentations: ['355 ml'],
        technicalInfo: {
          ingredients: '100% Jugo de toronja fresca.',
          conservation: 'Refrigerar entre 2°C y 4°C.',
          origin: 'Cultivos de cítricos.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-nectar-frutilla',
        name: 'Néctar de frutilla',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Dulce, aromático y lleno del sabor que hace irresistible a la frutilla.',
        presentations: ['355 ml'],
        technicalInfo: {
          ingredients: 'Pulpa de frutillas maduras seleccionadas.',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Campos frutícolas.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-limonada-fresa',
        name: 'Limonada de fresa',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Limón refrescante y fresa en una combinación frutal y deliciosa.',
        presentations: ['355 ml'],
        technicalInfo: {
          ingredients: 'Jugo natural de limón, pulpa de fresa.',
          conservation: 'Mantener refrigerado.',
          origin: 'Frutas frescas de huerto.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-cold-pitahaya',
        name: 'Pitahaya Cold Pressed',
        brandId: 'dhoy',
        familyId: 'cold-pressed',
        emotionalDescription: 'Pitahaya en una combinación suave y tropical, pensada para acompañar tu bienestar digestivo.',
        presentations: ['450 ml'],
        technicalInfo: {
          ingredients: 'Pitahaya prensada en frío con toque de limón.',
          conservation: 'Refrigerar estrictamente entre 2°C y 4°C.',
          origin: 'Cultivos de pitahaya ecuatoriana.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-cold-pina-hierbabuena',
        name: 'Piña + Hierbabuena Cold Pressed',
        brandId: 'dhoy',
        familyId: 'cold-pressed',
        emotionalDescription: 'Piña tropical y hierbabuena fresca en una combinación muy refrescante.',
        presentations: ['450 ml'],
        technicalInfo: {
          ingredients: 'Piña Golden prensada en frío, hojas frescas de hierbabuena.',
          conservation: 'Mantener en frío.',
          origin: 'Cosechas tropicales.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-cold-remolacha',
        name: 'Remolacha + Frutas Cold Pressed',
        brandId: 'dhoy',
        familyId: 'cold-pressed',
        emotionalDescription: 'El carácter de la remolacha equilibrado con frutas en una mezcla intensa y diferente.',
        presentations: ['450 ml'],
        technicalInfo: {
          ingredients: 'Remolacha prensada en frío, manzana, naranja y limón.',
          conservation: 'Mantener entre 2°C y 4°C.',
          origin: 'Hortalizas y frutas de origen.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-shot-inmuni',
        name: 'Inmunishot',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Jengibre intenso en una fórmula pensada para acompañar tus defensas y darle potencia a tu rutina.',
        presentations: ['Tripack', 'Six Pack'],
        technicalInfo: {
          ingredients: 'Extracto puro prensado de raíz de jengibre, limón, miel de abeja y cayena.',
          conservation: 'Mantener en frío.',
          origin: 'Raíces frescas de cultivo.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-shot-inmuni-plus',
        name: 'Inmunishot Plus',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Una fórmula reforzada para quienes buscan todavía más potencia en su rutina diaria.',
        presentations: ['Tripack'],
        technicalInfo: {
          ingredients: 'Jengibre reforzado, cúrcuma viva, limón concentrado y pimienta negra.',
          conservation: 'Conservar refrigerado.',
          origin: 'Raíces y cítricos seleccionados.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-shot-balance',
        name: 'Balanceshot',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Cúrcuma y otros ingredientes en una combinación funcional pensada para acompañar tu equilibrio diario.',
        presentations: ['Tripack'],
        technicalInfo: {
          ingredients: 'Raíz de cúrcuma prensada, naranja, jengibre y pimienta.',
          conservation: 'Mantener en frío.',
          origin: 'Campos de cultivo agroecológico.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-shot-digesti',
        name: 'Digestishot',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Papaya en una combinación funcional pensada para acompañar tu bienestar digestivo.',
        presentations: ['Tripack'],
        technicalInfo: {
          ingredients: 'Extracto de papaya madura, sábila fresca, limón.',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Frutas tropicales.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-shot-defen',
        name: 'Defenshot',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Vitamina C como protagonista en una fórmula pensada para acompañar tus defensas todos los días.',
        presentations: ['Tripack'],
        technicalInfo: {
          ingredients: 'Concentrado de cítricos (naranja, toronja, limón), acerola y vitamina C.',
          conservation: 'Refrigerar siempre.',
          origin: 'Cítricos de máxima concentración.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-zumo-limon',
        name: 'Zumo de limón',
        brandId: 'dhoy',
        familyId: 'especialidades-dhoy',
        emotionalDescription: 'El sabor fresco y ácido del limón listo para usar cuando lo necesites.',
        presentations: ['200 ml'],
        technicalInfo: {
          ingredients: '100% Zumo natural de limón prensado sin aditivos.',
          conservation: 'Mantener refrigerado una vez abierto.',
          origin: 'Limones de cosecha nacional.'
        },
        imageUrl: dhoyImg
      },
      {
        id: 'dh-pulpa-sabila',
        name: 'Pulpa de sábila',
        brandId: 'dhoy',
        familyId: 'especialidades-dhoy',
        emotionalDescription: 'Sábila lista para incorporar fácilmente a diferentes preparaciones.',
        presentations: ['450 g'],
        technicalInfo: {
          ingredients: 'Cristales de sábila (Aloe vera) procesados en frío.',
          conservation: 'Conservar refrigerado.',
          origin: 'Cultivos de aloe de origen local.'
        },
        imageUrl: dhoyImg
      }
    ]
  },

  'ecolove': {
    id: 'ecolove',
    name: 'Ecolove',
    slug: 'ecolove',
    valueStatement: 'BIENESTAR DIARIO',
    conceptVisual: 'bienestar, cocina, ingredientes naturales, vida cotidiana, moderno y limpio.',
    shortDescription: 'Pequeñas decisiones que hacen más fácil comer y sentirte mejor, sin complicarte.',
    storyTitle: 'Una marca que ha evolucionado con nuevas formas de cuidarnos',
    storyText: 'Ecolove nació explorando nuevas alternativas para comer mejor. Con los años incorporó fermentados, aceites y bebidas vegetales hasta evolucionar hacia una idea más amplia: hacer que el bienestar sea parte natural de todos los días.',
    milestones: [
      {
        year: '2017',
        title: 'Primeros pasos',
        description: 'Nace nuestra kombucha y comienza la exploración de nuevas formas de bienestar.'
      },
      {
        year: '2018',
        title: 'Llegan los aceites',
        description: 'Lanzamos nuestro aceite de coco, hoy uno de los pilares de Ecolove.'
      },
      {
        year: '2021',
        title: 'Bebidas vegetales',
        description: 'Lanzamos nuestra bebida de almendra y ampliamos nuevas formas de disfrutar lo vegetal.'
      },
      {
        year: '2022',
        title: 'Nuevas opciones',
        description: 'Lanzamos aceite de aguacate y aceites en spray, ampliando las opciones para cocinar con bienestar todos los días.'
      },
      {
        year: '2026',
        title: 'Bienestar diario',
        description: 'Ecolove evoluciona más allá de lo vegano hacia pequeñas decisiones que suman bienestar.'
      }
    ],
    colors: {
      primary: '#558B2F', // Verde aguacate fuerte
      secondary: '#F7FEE7',
      accent: '#84CC16', // Verde lima aguacate
      badgeBg: '#ECFCCB',
      badgeText: '#365314',
      blockBg: '#3F6212',
      blockText: '#F7FEE7',
      borderAccent: '#A3E635',
      heroGradient: 'from-stone-950/95 via-lime-950/80 to-stone-950/90',
      navBg: '#3F6212',
      navText: '#FFFFFF',
      navHover: '#ECFCCB',
      navCtaBg: '#558B2F',
      navCtaText: '#FFFFFF',
      subKickerBg: '#ECFCCB',
      subKickerText: '#365314',
      cardAccentBorder: '#A3E635',
      cardTagBg: '#ECFCCB',
      cardTagText: '#365314',
      footerBg: '#1A2E05',
      footerText: '#D9F99D',
      vibrantTag: 'Ecolove · Bienestar Botánico Diario',
      buttonBg: '#558B2F',
      buttonText: '#FFFFFF',
      buttonBorder: '#A3E635'
    },
    heroImage: ecoloveImg,
    closingStatement: 'Ecolove hace que el bienestar no sea un esfuerzo, sino una elección simple y deliciosa que acompaña cada momento de tu cocina y de tu día.',
    families: [
      {
        id: 'aceites-de-coco',
        name: 'Aceites de coco',
        tagline: 'Versátiles para cocinar y disfrutar de distintas formas. Una alternativa vegetal que ayuda a variar las grasas que usas cada día.',
        productIds: ['el-aceite-coco-extra-virgen', 'el-aceite-coco-neutro', 'el-aceite-coco-mct']
      },
      {
        id: 'aceites-de-aguacate',
        name: 'Aceites de aguacate',
        tagline: 'Versátiles para la cocina diaria y reconocidos por su buena estabilidad al calor, que ayuda a tolerar altas temperaturas con menor oxidación. Una forma práctica de sumar bienestar y variedad a tus preparaciones.',
        productIds: ['el-aceite-aguacate-clasico', 'el-aceite-aguacate-sin-olor']
      },
      {
        id: 'aceites-en-spray',
        name: 'Aceites en spray',
        tagline: 'La forma más práctica de aplicar justo lo que necesitas al cocinar, ayudándote a controlar mejor la cantidad que usas.',
        productIds: ['el-spray-coco', 'el-spray-aguacate', 'el-spray-oliva']
      },
      {
        id: 'bebidas-vegetales',
        name: 'Bebidas vegetales',
        tagline: 'Lo vegetal también puede ser delicioso. Para tomar solas o sumar a café, cereales, batidos y recetas.',
        productIds: ['el-bebida-almendra-original', 'el-bebida-almendra-vainilla', 'el-bebida-coco']
      },
      {
        id: 'kombucha',
        name: 'Kombucha',
        tagline: 'Té fermentado con probióticos, pensado para acompañar tu bienestar digestivo de una forma refrescante y llena de sabor.',
        productIds: ['el-kombucha-frutos-rojos', 'el-kombucha-jengibre', 'el-kombucha-manzana']
      },
      {
        id: 'shots-ecolove',
        name: 'Shots',
        tagline: 'Pequeños, intensos y fáciles de sumar a tu día.',
        productIds: ['el-shot-energy', 'el-shot-defense']
      },
      {
        id: 'snacks',
        name: 'Snacks',
        tagline: 'Algo rico también puede ser una mejor elección.',
        productIds: ['el-snack-papas-coco']
      },
      {
        id: 'algo-extra',
        name: 'Algo extra',
        tagline: 'Una opción simple para endulzar tus comidas y bebidas a tu manera.',
        productIds: ['el-miel-agave']
      }
    ],
    products: [
      {
        id: 'el-aceite-coco-extra-virgen',
        name: 'Aceite de coco extra virgen',
        brandId: 'ecolove',
        familyId: 'aceites-de-coco',
        emotionalDescription: 'Conserva el aroma y sabor característico del coco. Una opción vegetal versátil para cocinar, hornear o terminar tus preparaciones.',
        presentations: ['115 ml', '120 ml', '190 ml', '265 ml', '380 ml', '473 ml', '980 ml'],
        technicalInfo: {
          ingredients: '100% Aceite de coco virgen prensado en frío sin refinar.',
          conservation: 'Almacenar a temperatura ambiente. Solidifica de forma natural por debajo de los 24°C.',
          origin: 'Cocos frescos de fincas costeras.'
        },
        imageUrl: ecoloveImg,
        featured: true
      },
      {
        id: 'el-aceite-coco-neutro',
        name: 'Aceite de coco sin olor ni sabor',
        brandId: 'ecolove',
        familyId: 'aceites-de-coco',
        emotionalDescription: 'Perfil neutro para cocinar lo que quieras. Una forma práctica de incorporar aceite de coco sin cambiar el sabor de tus recetas.',
        presentations: ['120 ml', '265 ml', '473 ml'],
        technicalInfo: {
          ingredients: 'Aceite de coco desodorizado mediante vaporización natural sin químicos.',
          conservation: 'Guardar en lugar fresco, seco y protegido de la luz directa.',
          origin: 'Cocos seleccionados.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-aceite-coco-mct',
        name: 'Aceite de coco MCT',
        brandId: 'ecolove',
        familyId: 'aceites-de-coco',
        emotionalDescription: 'Aceite con triglicéridos de cadena media, fácil de incorporar a bebidas y preparaciones como parte de tu rutina diaria.',
        presentations: ['180 ml', '250 ml'],
        technicalInfo: {
          ingredients: 'Triglicéridos de cadena media (C8 y C10) extraídos de aceite de coco.',
          conservation: 'Conservar a temperatura ambiente.',
          origin: 'Aceite de coco natural fraccionado.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-aceite-aguacate-clasico',
        name: 'Aceite de aguacate',
        brandId: 'ecolove',
        familyId: 'aceites-de-aguacate',
        emotionalDescription: 'Con el carácter del aguacate y gran versatilidad en cocina. Su buena estabilidad al calor ayuda a tolerar altas temperaturas con menor oxidación.',
        presentations: ['250 ml'],
        technicalInfo: {
          ingredients: '100% Aceite puro de pulpa de aguacate Hass.',
          conservation: 'Guardar en botella oscura en alacena fresca.',
          origin: 'Aguacates maduros seleccionados.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-aceite-aguacate-sin-olor',
        name: 'Aceite de aguacate sin olor',
        brandId: 'ecolove',
        familyId: 'aceites-de-aguacate',
        emotionalDescription: 'Perfil neutro y buena estabilidad al calor para cocinar a altas temperaturas sin alterar el sabor original de tus recetas.',
        presentations: ['250 ml', '500 ml'],
        technicalInfo: {
          ingredients: 'Aceite de aguacate puro con filtrado suave para perfil neutro.',
          conservation: 'Temperatura ambiente, alejado de calor directo.',
          origin: 'Aguacates de productores aliados.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-spray-coco',
        name: 'Aceite de coco líquido Spray',
        brandId: 'ecolove',
        familyId: 'aceites-en-spray',
        emotionalDescription: 'Aceite de coco líquido en spray para distribuir de manera uniforme y usar solo lo necesario en cada preparación.',
        presentations: ['180 ml'],
        technicalInfo: {
          ingredients: 'Aceite de coco fraccionado líquido en envase spray sin propelentes dañinos.',
          conservation: 'Guardar a temperatura ambiente.',
          origin: 'Fincas de coco.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-spray-aguacate',
        name: 'Aceite de aguacate Spray',
        brandId: 'ecolove',
        familyId: 'aceites-en-spray',
        emotionalDescription: 'Aceite de aguacate en spray para aplicar de forma uniforme y controlar mejor la cantidad en tu cocina diaria.',
        presentations: ['180 ml'],
        technicalInfo: {
          ingredients: 'Aceite puro de aguacate prensado.',
          conservation: 'Almacenar en lugar seco y fresco.',
          origin: 'Aguacates seleccionados.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-spray-oliva',
        name: 'Aceite de oliva extra virgen Spray',
        brandId: 'ecolove',
        familyId: 'aceites-en-spray',
        emotionalDescription: 'Aceite de oliva extra virgen en spray para sumar sabor y usar la cantidad justa en tus preparaciones.',
        presentations: ['180 ml'],
        technicalInfo: {
          ingredients: 'Aceite de oliva extra virgen de primera extracción en frío.',
          conservation: 'Conservar en lugar fresco.',
          origin: 'Aceitunas seleccionadas.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-bebida-almendra-original',
        name: 'Bebida de almendra Original',
        brandId: 'ecolove',
        familyId: 'bebidas-vegetales',
        emotionalDescription: 'Suave, ligera y versátil para acompañar cualquier momento del día.',
        presentations: ['1 L', 'Tripack 3 x 1 L'],
        technicalInfo: {
          ingredients: 'Agua purificada, pasta de almendras tostadas, carbonato de calcio.',
          conservation: 'Una vez abierto, mantener refrigerado y consumir en 5 días.',
          origin: 'Almendras seleccionadas.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-bebida-almendra-vainilla',
        name: 'Bebida de almendra Vainilla',
        brandId: 'ecolove',
        familyId: 'bebidas-vegetales',
        emotionalDescription: 'Almendra con un delicado toque de vainilla para hacer cada sorbo más especial.',
        presentations: ['1 L', 'Tripack 3 x 1 L'],
        technicalInfo: {
          ingredients: 'Base de almendra y extracto de vainilla natural.',
          conservation: 'Conservar en frío una vez abierto.',
          origin: 'Almendras e ingredientes de origen natural.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-bebida-coco',
        name: 'Bebida de coco',
        brandId: 'ecolove',
        familyId: 'bebidas-vegetales',
        emotionalDescription: 'Ligera y tropical, para tomar o combinar como quieras.',
        presentations: ['1 L'],
        technicalInfo: {
          ingredients: 'Agua de coco y leche de coco ligera.',
          conservation: 'Refrigerar tras abrir.',
          origin: 'Cocos frescos del Pacífico.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-kombucha-frutos-rojos',
        name: 'Kombucha Frutos rojos',
        brandId: 'ecolove',
        familyId: 'kombucha',
        emotionalDescription: 'Frutal, refrescante y con todo el carácter de los frutos rojos.',
        presentations: ['500 ml'],
        technicalInfo: {
          ingredients: 'Té verde y negro fermentado con cultivo vivo (SCOBY), jugo de frutos rojos.',
          conservation: 'Mantener permanentemente en refrigeración a 4°C.',
          origin: 'Fermentación artesanal controlada.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-kombucha-jengibre',
        name: 'Kombucha Jengibre',
        brandId: 'ecolove',
        familyId: 'kombucha',
        emotionalDescription: 'Refrescante, intensa y con ese toque de jengibre que se siente desde el primer sorbo.',
        presentations: ['500 ml'],
        technicalInfo: {
          ingredients: 'Té fermentado, jugo de jengibre fresco prensado en frío.',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Jengibre de campo y té seleccionado.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-kombucha-manzana',
        name: 'Kombucha Manzana',
        brandId: 'ecolove',
        familyId: 'kombucha',
        emotionalDescription: 'Suave, aromática y fácil de disfrutar.',
        presentations: ['500 ml'],
        technicalInfo: {
          ingredients: 'Té fermentado con manzana prensada.',
          conservation: 'Conservar en frío.',
          origin: 'Frutas seleccionadas.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-shot-energy',
        name: 'Shot Energy',
        brandId: 'ecolove',
        familyId: 'shots-ecolove',
        emotionalDescription: 'Una combinación intensa con ginseng para esos días en los que buscas un impulso extra.',
        presentations: ['35 ml', 'Six Pack'],
        technicalInfo: {
          ingredients: 'Extracto de ginseng coreano, jengibre, guaraná natural y manzana.',
          conservation: 'Almacenar en frío o fresco.',
          origin: 'Ingredientes botánicos puros.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-shot-defense',
        name: 'Shot Defense',
        brandId: 'ecolove',
        familyId: 'shots-ecolove',
        emotionalDescription: 'El carácter del jengibre en un shot intenso y práctico para sumar a tu rutina.',
        presentations: ['35 ml'],
        technicalInfo: {
          ingredients: 'Zumo de jengibre concentrado, limón y miel.',
          conservation: 'Mantener en refrigeración.',
          origin: 'Cultivos locales.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-snack-papas-coco',
        name: 'Papas fritas en aceite de coco',
        brandId: 'ecolove',
        familyId: 'snacks',
        emotionalDescription: 'Crujientes, deliciosas y fritas en aceite de coco para disfrutar cada mordida.',
        presentations: ['100 g'],
        technicalInfo: {
          ingredients: 'Papas seleccionadas, 100% aceite de coco virgen, sal marina.',
          conservation: 'Conservar en lugar fresco y seco, sellar empaque tras abrir.',
          origin: 'Papas andinas cultivadas en altura.'
        },
        imageUrl: ecoloveImg
      },
      {
        id: 'el-miel-agave',
        name: 'Miel de agave',
        brandId: 'ecolove',
        familyId: 'algo-extra',
        emotionalDescription: 'Una alternativa práctica para darle el toque dulce que tú eliges a comidas y bebidas.',
        presentations: ['230 ml'],
        technicalInfo: {
          ingredients: '100% Jarabe puro de agave azul orgánico.',
          conservation: 'Temperatura ambiente.',
          origin: 'Agave seleccionado.'
        },
        imageUrl: ecoloveImg
      }
    ]
  },

  'hortilisto': {
    id: 'hortilisto',
    name: 'Hortilisto',
    slug: 'hortilisto',
    valueStatement: 'LA COMIDA ES EL MEJOR MOMENTO PARA COMPARTIR.',
    conceptVisual: 'vegetales frescos, cocina, practicidad, familia, compartir.',
    shortDescription: 'Vegetales deliciosos, listos para hacerte la cocina más práctica y dejarte más tiempo para disfrutar.',
    storyTitle: 'La comida es el mejor momento para compartir',
    storyText: 'Hortilisto nace de la convicción de que cocinar con ingredientes frescos no debería ser complicado ni demandar horas pelando y cortando. Llevamos hortalizas y vegetales de primera calidad, cuidadosamente seleccionados y listos para cocinar, para que puedas enfocarte en lo que de verdad importa: compartir la mesa con quienes quieres.',
    milestones: [
      {
        year: '2015',
        title: 'Del huerto a la cocina',
        description: 'Iniciamos seleccionando aguacates y hortalizas frescas directamente con agricultores de valles locales.'
      },
      {
        year: '2018',
        title: 'Vegetales listos y frescos',
        description: 'Incorporamos tecnología de empaque en atmósfera protectora para mantener la frescura de cebollas, pimientos y zapallos picados.'
      },
      {
        year: '2021',
        title: 'Nace la línea de guacamole',
        description: 'Lanzamos guacamole fresco listo para abrir y compartir, con el punto exacto de sazón y aguacate.'
      },
      {
        year: '2026',
        title: 'Cocinar y compartir',
        description: 'Consolidamos un portafolio diseñado para ahorrar tiempo en la cocina con máxima calidad.'
      }
    ],
    colors: {
      primary: '#0D9488', // Turquesa fuerte
      secondary: '#F0FDFA',
      accent: '#16A34A', // Tonos de verde fuerte
      badgeBg: '#CCFBF1',
      badgeText: '#0F766E',
      blockBg: '#09090B', // Negro profundo con turquesa
      blockText: '#2DD4BF',
      borderAccent: '#2DD4BF',
      heroGradient: 'from-black/95 via-teal-950/85 to-stone-950/90',
      navBg: '#09090B', // Negro predominante
      navText: '#FFFFFF',
      navHover: '#2DD4BF',
      navCtaBg: '#0D9488', // Turquesa botón
      navCtaText: '#FFFFFF',
      subKickerBg: '#0F766E',
      subKickerText: '#FFFFFF',
      cardAccentBorder: '#2DD4BF',
      cardTagBg: '#134E4A',
      cardTagText: '#5EEAD4',
      footerBg: '#09090B',
      footerText: '#99F6E4',
      vibrantTag: 'Hortilisto · Vegetales Frescos & Prácticos',
      buttonBg: '#0D9488',
      buttonText: '#FFFFFF',
      buttonBorder: '#09090B'
    },
    heroImage: hortilistoImg,
    closingStatement: 'Nosotros adelantamos el trabajo con vegetales de primera calidad. Tú haces la comida y disfrutas el momento.',
    families: [
      {
        id: 'aguacates-maduros',
        name: 'Aguacates maduros',
        tagline: 'Aguacates seleccionados para que encuentres la madurez que buscas, en distintos tamaños de empaque.',
        productIds: ['hl-aguacate-maduro', 'hl-aguacate-pack-semanal', 'hl-aguacate-tamano-ideal']
      },
      {
        id: 'vegetales-y-frutas-listas',
        name: 'Vegetales y frutas listas',
        tagline: 'Nosotros adelantamos el trabajo. Tú haces la comida. Productos seleccionados, pelados, picados o listos para disfrutar.',
        productIds: [
          'hl-achogcha',
          'hl-mix-cebollas',
          'hl-mix-mega-cebollas',
          'hl-paitenitas',
          'hl-perlita',
          'hl-pimientos-colores',
          'hl-sambo-picado',
          'hl-zapallo-picado',
          'hl-verdura-mazo',
          'hl-jengibre-bandeja',
          'hl-pina-golden'
        ]
      },
      {
        id: 'guacamole',
        name: 'Guacamole',
        tagline: 'Abrir, servir, disfrutar. Aguacate convertido en un guacamole práctico y delicioso para acompañar lo que quieras.',
        productIds: ['hl-guacamole-clasico', 'hl-guacamole-tomate-pimiento']
      },
      {
        id: 'encurtidos',
        name: 'Encurtidos',
        tagline: 'Para cuando quieres algo diferente. Sabores intensos y ácidos para comer como snack o acompañar tus comidas.',
        productIds: ['hl-grosella-encurtida', 'hl-mango-encurtido']
      }
    ],
    products: [
      {
        id: 'hl-aguacate-maduro',
        name: 'Aguacate Maduro',
        brandId: 'hortilisto',
        familyId: 'aguacates-maduros',
        emotionalDescription: 'Seleccionado en su punto para que tengas un aguacate maduro cuando realmente lo necesitas.',
        presentations: ['Presentación estándar'],
        technicalInfo: {
          ingredients: '100% Aguacate variedad Hass o Fuerte madurado en cámara controlada.',
          conservation: 'Mantener a temperatura ambiente hasta abrir; refrigerar envuelto una vez cortado.',
          origin: 'Valles de clima templado de agricultores asociados.'
        },
        imageUrl: hortilistoImg,
        featured: true
      },
      {
        id: 'hl-aguacate-pack-semanal',
        name: 'Aguacate Pack Semanal',
        brandId: 'hortilisto',
        familyId: 'aguacates-maduros',
        emotionalDescription: 'Aguacates maduros en un formato pensado para acompañarte durante la semana.',
        presentations: ['Pack semanal'],
        technicalInfo: {
          ingredients: 'Selección de aguacates con maduración escalonada.',
          conservation: 'Conservar en frutero ventilado.',
          origin: 'Productores locales certificados.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-aguacate-tamano-ideal',
        name: 'Aguacate Tamaño Ideal',
        brandId: 'hortilisto',
        familyId: 'aguacates-maduros',
        emotionalDescription: 'Aguacates maduros en un tamaño de empaque práctico para tu consumo diario.',
        presentations: ['Tamaño ideal'],
        technicalInfo: {
          ingredients: 'Aguacates seleccionados por calibre y textura cremosa.',
          conservation: 'Lugar fresco y ventilado.',
          origin: 'Cultivos de valle.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-achogcha',
        name: 'Achogcha',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Lista para convertir una receta tradicional en algo mucho más práctico.',
        presentations: ['400 g'],
        technicalInfo: {
          ingredients: 'Achogcha fresca limpia, desvenada y lista para rellenar o guisar.',
          conservation: 'Refrigerar en su empaque entre 2°C y 6°C.',
          origin: 'Huertos andinos.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-mix-cebollas',
        name: 'Mix de cebollas',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Cebollas listas para cocinar y ahorrarte uno de esos pasos que nadie extraña.',
        presentations: ['550 g'],
        technicalInfo: {
          ingredients: 'Cebolla colorada (paitena) y cebolla perla peladas y picadas en cubos uniformes.',
          conservation: 'Mantener en refrigeración. Consumir dentro de la fecha del empaque.',
          origin: 'Cosechas seleccionadas.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-mix-mega-cebollas',
        name: 'Mix Mega Cebollas',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Más cebolla lista para cocinar cuando la receta o la familia piden más.',
        presentations: ['1 kg'],
        technicalInfo: {
          ingredients: 'Formato familiar de cebollas seleccionadas picadas.',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Agricultores aliados.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-paitenitas',
        name: 'Paitenitas',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Cebollitas listas para sumar sabor y practicidad a tus preparaciones.',
        presentations: ['475 g'],
        technicalInfo: {
          ingredients: 'Cebollitas moradas paitenas enteras peladas y limpias.',
          conservation: 'Refrigerar entre 2°C y 6°C.',
          origin: 'Campos de cultivo de hortalizas.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-perlita',
        name: 'Perlita',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Pequeñas cebollas listas para cocinar, acompañar o darle un toque diferente a tus platos.',
        presentations: ['475 g'],
        technicalInfo: {
          ingredients: 'Cebollitas perla tiernas peladas y lavadas.',
          conservation: 'Mantener en frío.',
          origin: 'Huertos de altura.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-pimientos-colores',
        name: 'Pimientos de colores',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Color, sabor y frescura listos para darle vida a tus comidas.',
        presentations: ['Bandeja surtida'],
        technicalInfo: {
          ingredients: 'Pimientos rojos, amarillos y verdes lavados, dessemillados y picados.',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Invernaderos y huertos tecnificados.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-sambo-picado',
        name: 'Sambo picado',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Limpio, picado y listo para convertirse en tu próxima receta.',
        presentations: ['600 g'],
        technicalInfo: {
          ingredients: 'Cucurbita ficifolia (sambo tierno) pelado y picado.',
          conservation: 'Conservar en refrigeración.',
          origin: 'Zonas agrícolas andinas.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-zapallo-picado',
        name: 'Zapallo picado',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Todo el sabor del zapallo, con mucho menos trabajo.',
        presentations: ['700 g'],
        technicalInfo: {
          ingredients: 'Zapallo maduro pelado, sin semillas, cortado en dados.',
          conservation: 'Refrigerar entre 2°C y 5°C.',
          origin: 'Campos de hortalizas.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-verdura-mazo',
        name: 'Verdura en mazo',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Una opción práctica para tener vegetales frescos listos cuando los necesitas.',
        presentations: ['200 g'],
        technicalInfo: {
          ingredients: 'Selección de hierbas y vegetales de aroma (apio, perejil, culantro) atados y lavados.',
          conservation: 'Refrigerar con humedad controlada.',
          origin: 'Huertos locales.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-jengibre-bandeja',
        name: 'Jengibre en bandeja',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Jengibre fresco y práctico para sumar fácilmente a comidas y bebidas.',
        presentations: ['Bandeja estándar'],
        technicalInfo: {
          ingredients: 'Rizomas seleccionados de jengibre fresco lavados.',
          conservation: 'Conservar en ambiente seco o refrigeración.',
          origin: 'Cosechas nacionales.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-pina-golden',
        name: 'Piña Golden',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Dulce, fresca y lista para disfrutar sin pelar ni cortar.',
        presentations: ['600 g'],
        technicalInfo: {
          ingredients: '100% Piña Golden cortada en trozos jugosos.',
          conservation: 'Mantener estrictamente refrigerado a 4°C.',
          origin: 'Plantaciones tropicales del litoral.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-guacamole-clasico',
        name: 'Guacamole',
        brandId: 'hortilisto',
        familyId: 'guacamole',
        emotionalDescription: 'Aguacate convertido en un guacamole práctico y delicioso para acompañar lo que quieras.',
        presentations: ['205 g'],
        technicalInfo: {
          ingredients: 'Aguacate fresco Hass, sal, toque de limón y especias naturales.',
          conservation: 'Mantener refrigerado entre 2°C y 4°C. Consumir dentro de 48h de abierto.',
          origin: 'Aguacates de fincas asociadas.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-guacamole-tomate-pimiento',
        name: 'Guacamole Tomate + Pimiento',
        brandId: 'hortilisto',
        familyId: 'guacamole',
        emotionalDescription: 'Nuestro guacamole con tomate y pimiento para darle todavía más sabor a cada bocado.',
        presentations: ['205 g'],
        technicalInfo: {
          ingredients: 'Aguacate Hass, dados de tomate fresco, pimiento dulce, cilantro y limón.',
          conservation: 'Refrigerar a 4°C.',
          origin: 'Vegetales cosechados en origen.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-grosella-encurtida',
        name: 'Grosella encurtida',
        brandId: 'hortilisto',
        familyId: 'encurtidos',
        emotionalDescription: 'Ácida, intensa y de esas que hacen difícil parar después de la primera.',
        presentations: ['172 g drenado'],
        technicalInfo: {
          ingredients: 'Grosellas silvestres enteras, salmuera tradicional con especias.',
          conservation: 'Almacenar a temperatura ambiente; refrigerar una vez abierto.',
          origin: 'Frutos de recolección local.'
        },
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-mango-encurtido',
        name: 'Mango encurtido',
        brandId: 'hortilisto',
        familyId: 'encurtidos',
        emotionalDescription: 'Ese equilibrio entre ácido, fresco y delicioso que siempre provoca otro pedazo.',
        presentations: ['172 g'],
        technicalInfo: {
          ingredients: 'Tiras de mango verde en salmuera con toque cítrico y especias.',
          conservation: 'Guardar en lugar fresco.',
          origin: 'Mangos de fincas costeras.'
        },
        imageUrl: hortilistoImg
      }
    ]
  }
};
