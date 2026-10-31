import { Brand } from '../types';
import cocoFreezeImg from '../assets/images/cocofreeze_nuevo.png';
import cocofreezeAguaDeCocoImg from '../assets/images/cocofreeze_aguadecoco.png';
import cocofreezePipaNaturalImg from '../assets/images/cocofreeze_pipa_natural.png';
import cocofreezeJugoDeCocoImg from '../assets/images/cocofreeze_jugo_de_coco.png';
import cocofreezeAguaDeCocoConPinaImg from '../assets/images/cocofreeze_agua_de_coco_con_pina.png';
import cocofreezeLimonadaDeCocoImg from '../assets/images/cocofreeze_limonada_de_coco.png';
import cocofreezePinaColadaImg from '../assets/images/cocofreeze_pina_colada.png';
import dhoyImg from '../assets/images/dhoy_marca.jpg';
import dhoyJugo100Img from '../assets/images/dhoy_jugo100.png';
import dhoyShotImg from '../assets/images/dhoy_shot.png';
import dhoyColdPressedImg from '../assets/images/dhoy_coldpressed.png';
import ecoloveImg from '../assets/images/ecolove_nuevo.png';
import hortilistoImg from '../assets/images/hortilisto_nuevo.png';

// DHOY Jugo de Naranja
import dhoy355mlImg from '../assets/naranjanormalnuevo.png';
import dhoySinPulpaImg from '../assets/naranjasinpulpanuevo.png';
import dhoyCalcioDImg from '../assets/Naranjamenosacidonuevo.png';

// DHOY Mezclas de Fruta
import dhoyNaranjaZanaImg from '../assets/Naranjazanahorianuevo.png';
import dhoyNaranjaMangoImg from '../assets/Naranjamangonuevo.png';
import dhoyNaranjaFresaImg from '../assets/naranjafresadhoy.png';
import dhoyNaranjaJengibreImg from '../assets/naranjajengibre.png';
import dhoyMoraImg from '../assets/mora355.png';
import dhoyMandarinaImg from '../assets/mandarinanuevo.png';
import dhoyCranberryImg from '../assets/cranberrynuevo.png';
import dhoyToronjaImg from '../assets/toronjanuevo.png';
import dhoyNectarFrutillaImg from '../assets/nectardefrutilla.png';
import dhoyLimonadaFresaImg from '../assets/limonadafresanuevo.png';

// DHOY Cold Pressed
import dhoyColdPitahayaImg from '../assets/pitahayanuevocoldpressed.png';
import dhoyColdPinaImg from '../assets/pinamangohierbabuenanuevocoldpressed.png';
import dhoyColdRemolachaImg from '../assets/remolachanuevocoldpressed.png';

// DHOY Shots
import dhoyShotInmuniImg from '../assets/inmunishotjengibre.png';
import dhoyShotInmuniPlusImg from '../assets/inmunishotplusnuevo.jpeg';
import dhoyShotBalanceImg from '../assets/CURCUMA.jpg';
import dhoyShotDigestiImg from '../assets/digestishotplusnuevo.png';
import dhoyShotDefenImg from '../assets/VITAMINA-C.jpg';

// DHOY Especialidades
import dhoyZumoLimonImg from '../assets/Limonzumo_blanco.png';
import dhoySabilaImg from '../assets/sabilaencubosnueva.png';

// ECOLOVE Productos
import ecoloveAceiteCocoImg from '../assets/ECOLOVE-ACEITE-COCO-EXTRAVIRGEN-473ML-2026.png';
import ecoloveAceiteCocoSinOlorImg from '../assets/ECOLOVE-ACEITE-DE-COCO-SIN-OLOR-473ML-2026.png';
import ecoloveAceiteCocoMctImg from '../assets/ECOLOVE-ACEITE-DE-COCO-MCT-250ML-2026.png';
import ecoloveAceiteAguacateImg from '../assets/ECOLOVE-ACEITE-AGUACATE-250ML.png';
import ecoloveAceiteAguacateSinOlorImg from '../assets/ECOLOVE-ACEITE-AGUACATE-SIN-OLOR-250ML-2026.png';
import ecoloveSprayCocoMctImg from '../assets/ECOLOVE-ACEITE-COCO-MCT-SPRAY180ML-2026.png';
import ecoloveSprayAguacateImg from '../assets/ECOLOVE-ACEITE-AGUACATE-SPRAY-180ML-2026.png';
import ecoloveSprayOlivaImg from '../assets/ECOLOVE-ACEITE-OLIVA-EXTRAVIRGEN-SPRAY-180ML-2026.png';
import ecoloveBebidaAlmendraImg from '../assets/ECOLOVE-BEBIDA-DE-ALMENDRA-SIN-AZUCAR-1L-2026.png';
import ecoloveBebidaAlmendraVainillaImg from '../assets/ECOLOVE-BEBIDA-DE-ALMENDRA-VAINILLA-2026.png';
import ecoloveBebidaCocoImg from '../assets/ECOLOVE-BEBIDA-DE-COCO-SIN-AZUCAR.png';
import ecoloveKombuchaJengibreImg from '../assets/kombuchajengibre.png';
import ecoloveMielAgaveImg from '../assets/ECOLOVE-MIEL-DE-AGAVE-230ML.png';
import ecolovePortadaSeccionImg from '../assets/ECOPACIFIC-ECOLOVE-SECCION-PORTADA2026.png';

// HORTILISTO Productos
import hlAguacateMaduroImg from '../assets/aguacatemaduro.jpg';
import hlAguacate6PackImg from '../assets/aguacate6pack.jpg';
import hlMixCebollaImg from '../assets/mix-cebolla.jpg';
import hlMegaMixCebollaImg from '../assets/HORTILISTO6megamixcebolla.jpg';
import hlCebollaPaitenitaImg from '../assets/cebollapaitenita.jpg';
import hlCebollaPerlitaImg from '../assets/cebollaperlitas.jpg';
import hlPimientosColoresImg from '../assets/pimientos de colores.jpg';
import hlZapalloImg from '../assets/zapallo.jpg';
import hlJengibreImg from '../assets/jengibre200g.jpg';
import hlPinaGoldenImg from '../assets/pinagolden.jpg';
import hlGuacamoleImg from '../assets/guacamole.jpg';
import hlGuacamoleTomatePimientoImg from '../assets/GUACAMOLE-CON-TOMATE-Y-PIMIENTO.png';
import hlMangoImg from '../assets/mango.jpg';

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
      primary: '#0369A1', // Azul más oscuro y elegante
      secondary: '#F0F9FF',
      accent: '#FACC15', // Toques de amarillo brillante
      badgeBg: '#FEF08A',
      badgeText: '#854D0E',
      blockBg: '#075985',
      blockText: '#FFFFFF',
      borderAccent: '#38BDF8',
      heroGradient: 'from-sky-950/95 via-sky-900/80 to-blue-950/90',
      navBg: '#075985', // Azul marino oceánico ligeramente más oscuro
      navText: '#FFFFFF',
      navHover: '#FEF08A',
      navCtaBg: '#FACC15',
      navCtaText: '#0C4A6E',
      subKickerBg: '#FEF08A',
      subKickerText: '#713F12',
      cardAccentBorder: '#38BDF8',
      cardTagBg: '#E0F2FE',
      cardTagText: '#0369A1',
      footerBg: '#075985',
      footerText: '#BAE6FD',
      vibrantTag: 'Coco Freeze · 100% Tropical & Fresco',
      buttonBg: '#0369A1',
      buttonText: '#FFFFFF',
      buttonBorder: '#FACC15'
    },
    heroImage: cocoFreezeImg,
    closingStatement: 'Cerca del origen aprendimos algo simple: cuando el coco se cosecha en su punto, se siente en cada sorbo.',
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
        imageUrl: cocofreezeAguaDeCocoImg,
        featured: true
      },
      {
        id: 'cf-pipa-natural',
        name: 'Pipa natural',
        brandId: 'coco-freeze',
        familyId: 'agua-de-coco',
        emotionalDescription: 'De la palma a tus manos. Coco natural para disfrutarlo como nació.',
        presentations: ['Pipa natural'],
        imageUrl: cocofreezePipaNaturalImg
      },
      {
        id: 'cf-jugo-coco',
        name: 'Jugo de coco / SL Coco',
        brandId: 'coco-freeze',
        familyId: 'sabores-de-coco',
        emotionalDescription: 'Cremoso, tropical y lleno de auténtico sabor a coco.',
        presentations: ['355 ml', '1 L'],
        imageUrl: cocofreezeJugoDeCocoImg
      },
      {
        id: 'cf-coco-pina',
        name: 'Agua de coco con piña',
        brandId: 'coco-freeze',
        familyId: 'sabores-de-coco',
        emotionalDescription: 'La frescura del agua de coco con el toque tropical y delicioso de la piña.',
        presentations: ['355 ml'],
        imageUrl: cocofreezeAguaDeCocoConPinaImg
      },
      {
        id: 'cf-limonada-coco',
        name: 'Limonada de coco',
        brandId: 'coco-freeze',
        familyId: 'sabores-de-coco',
        emotionalDescription: 'Limón refrescante y coco en una combinación tropical diferente.',
        presentations: ['355 ml'],
        imageUrl: cocofreezeLimonadaDeCocoImg
      },
      {
        id: 'cf-pina-colada',
        name: 'Piña colada',
        brandId: 'coco-freeze',
        familyId: 'sabores-de-coco',
        emotionalDescription: 'Coco y piña en una combinación cremosa que sabe a vacaciones.',
        presentations: ['355 ml'],
        imageUrl: cocofreezePinaColadaImg
      }
    ]
  },

  'dhoy': {
    id: 'dhoy',
    name: "D'hoy",
    slug: 'dhoy',
    valueStatement: 'DE FAMILIA Y DEL CAMPO. SABE A FRUTA DE VERDAD.',
    conceptVisual: 'fruta fresca, naranja, campo, energía, naturalidad.',
    shortDescription: 'Elegimos buena fruta y la procesamos para conservar lo que importa: su sabor. Así llevamos lo mejor del campo a tu día a día, de forma práctica y deliciosa',
    storyTitle: 'Una historia que empezó antes de amanecer',
    storyText: 'En 2009 comenzamos haciendo jugo de naranja fresco para restaurantes de Quito. Las naranjas se exprimían alrededor de las 3 de la mañana para entregar el jugo frío, fresco y con el mejor sabor posible. Desde entonces, nuestra convicción sigue siendo la misma: encontrar buena fruta y cuidar su verdadero sabor.',
    milestones: [
      {
        year: '2009',
        title: 'Nace DHOY',
        description: 'Jugo de naranja exprimido de madrugada para restaurantes de Quito.'
      },
      {
        year: '2011',
        title: 'Llegamos a más personas',
        description: 'Incorporamos un proceso tecnológico que, sin aditivos, permite alargar la vida útil y llevar DHOY a más puntos de venta.'
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
        description: 'Seguimos perfeccionando fruta y proceso para lograr un sabor consistentemente delicioso'
      }
    ],
    colors: {
      primary: '#F97316', // Naranja más claro y vibrante
      secondary: '#FFF7ED',
      accent: '#00943A', // Verde exacto de las letras DHOY en el logo
      badgeBg: '#FFEDD5',
      badgeText: '#C2410C',
      blockBg: '#EA580C',
      blockText: '#FFFFFF',
      borderAccent: '#00943A',
      heroGradient: 'from-orange-950/95 via-amber-950/80 to-stone-950/90',
      navBg: '#F97316', // Naranja más claro en la barra de arriba
      navText: '#FFFFFF',
      navHover: '#FFEDD5',
      navCtaBg: '#F97316',
      navCtaText: '#FFFFFF',
      subKickerBg: '#FFEDD5',
      subKickerText: '#C2410C',
      cardAccentBorder: '#FB923C',
      cardTagBg: '#FFEDD5',
      cardTagText: '#C2410C',
      footerBg: '#F97316', // Naranja claro en el footer
      footerText: '#FFFFFF',
      vibrantTag: "D'hoy · Sabor Cítrico Auténtico",
      buttonBg: '#F97316',
      buttonText: '#FFFFFF',
      buttonBorder: '#00943A'
    },
    heroImage: dhoyImg,
    closingStatement: "Elegimos buena fruta y cuidamos cada proceso para que cuando abras una botella de D'hoy, sientas el verdadero sabor del campo.",
    families: [
      {
        id: 'jugo-de-naranja',
        name: 'Jugo de naranja',
        tagline: 'El que empezó todo. Nuestro producto estrella y la expresión más pura de lo que significa DHOY.',
        productIds: [
          'dh-naranja-clasico',
          'dh-naranja-sin-pulpa',
          'dh-naranja-calcio-vitamina-d'
        ]
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
        name: 'Cold pressed',
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
        name: 'Especialidades DHOY',
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
        imageUrl: dhoy355mlImg,
        featured: true
      },
      {
        id: 'dh-naranja-sin-pulpa',
        name: 'Naranja sin pulpa',
        brandId: 'dhoy',
        familyId: 'jugo-de-naranja',
        emotionalDescription: 'Todo el sabor de nuestra naranja, con una textura más ligera y suave.',
        presentations: ['1 L', '2,5 L'],
        imageUrl: dhoySinPulpaImg
      },
      {
        id: 'dh-naranja-calcio-vitamina-d',
        name: 'Naranja + Calcio y Vitamina D',
        brandId: 'dhoy',
        familyId: 'jugo-de-naranja',
        emotionalDescription: 'Nuestro jugo de naranja con calcio y vitamina D para sumar algo más a tu día.',
        presentations: ['2,5 L'],
        imageUrl: dhoyCalcioDImg
      },
      {
        id: 'dh-naranja-zanahoria',
        name: 'Naranja + Zanahoria',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'La frescura de la naranja y el carácter de la zanahoria en uno de nuestros sabores favoritos.',
        presentations: ['355 ml', '1 L', '1,75 L'],
        imageUrl: dhoyNaranjaZanaImg
      },
      {
        id: 'dh-naranja-mango',
        name: 'Naranja + Mango',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Naranja fresca y mango tropical en una mezcla naturalmente deliciosa.',
        presentations: ['355 ml', '1,75 L'],
        imageUrl: dhoyNaranjaMangoImg
      },
      {
        id: 'dh-naranja-fresa',
        name: 'Naranja + Fresa',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'La frescura de la naranja se encuentra con el sabor dulce y aromático de la fresa.',
        presentations: ['355 ml'],
        imageUrl: dhoyNaranjaFresaImg
      },
      {
        id: 'dh-naranja-jengibre',
        name: 'Naranja + Jengibre',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Naranja refrescante con un toque intenso y vibrante de jengibre.',
        presentations: ['355 ml'],
        imageUrl: dhoyNaranjaJengibreImg
      },
      {
        id: 'dh-mora',
        name: 'Mora',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Intenso, frutal y lleno del sabor característico de la mora.',
        presentations: ['355 ml', '1 L'],
        imageUrl: dhoyMoraImg
      },
      {
        id: 'dh-mandarina',
        name: 'Mandarina',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Dulce, aromática y refrescante. Mandarina para disfrutar en cada sorbo.',
        presentations: ['355 ml', '1,75 L'],
        imageUrl: dhoyMandarinaImg
      },
      {
        id: 'dh-cranberry',
        name: 'Cranberry',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Un sabor frutal, intenso y ligeramente ácido que se disfruta bien frío.',
        presentations: ['355 ml', '1,75 L'],
        imageUrl: dhoyCranberryImg
      },
      {
        id: 'dh-toronja',
        name: 'Toronja',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Cítrica, refrescante y con ese carácter inconfundible de la toronja.',
        presentations: ['355 ml'],
        imageUrl: dhoyToronjaImg
      },
      {
        id: 'dh-nectar-frutilla',
        name: 'Néctar de frutilla',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Dulce, aromático y lleno del sabor que hace irresistible a la frutilla.',
        presentations: ['355 ml'],
        imageUrl: dhoyNectarFrutillaImg
      },
      {
        id: 'dh-limonada-fresa',
        name: 'Limonada de fresa',
        brandId: 'dhoy',
        familyId: 'mezclas-de-fruta',
        emotionalDescription: 'Limón refrescante y fresa en una combinación frutal y deliciosa.',
        presentations: ['355 ml'],
        imageUrl: dhoyLimonadaFresaImg
      },
      {
        id: 'dh-cold-pitahaya',
        name: 'Pitahaya',
        brandId: 'dhoy',
        familyId: 'cold-pressed',
        emotionalDescription: 'Pitahaya en una combinación suave y tropical, pensada para acompañar tu bienestar digestivo.',
        presentations: ['450 ml'],
        imageUrl: dhoyColdPitahayaImg
      },
      {
        id: 'dh-cold-pina-hierbabuena',
        name: 'Piña + Hierbabuena',
        brandId: 'dhoy',
        familyId: 'cold-pressed',
        emotionalDescription: 'Piña tropical y hierbabuena fresca en una combinación muy refrescante.',
        presentations: ['450 ml'],
        imageUrl: dhoyColdPinaImg
      },
      {
        id: 'dh-cold-remolacha',
        name: 'Remolacha + Frutas',
        brandId: 'dhoy',
        familyId: 'cold-pressed',
        emotionalDescription: 'El carácter de la remolacha equilibrado con frutas en una mezcla intensa y diferente.',
        presentations: ['450 ml'],
        imageUrl: dhoyColdRemolachaImg
      },
      {
        id: 'dh-shot-inmuni',
        name: 'Inmunishot',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Jengibre intenso en una fórmula pensada para acompañar tus defensas y darle potencia a tu rutina.',
        presentations: ['Tripack', 'Six Pack'],
        imageUrl: dhoyShotInmuniImg
      },
      {
        id: 'dh-shot-inmuni-plus',
        name: 'Inmunishot Plus',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Una fórmula reforzada para quienes buscan todavía más potencia en su rutina diaria.',
        presentations: ['Tripack'],
        imageUrl: dhoyShotInmuniPlusImg
      },
      {
        id: 'dh-shot-balance',
        name: 'Balanceshot',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Cúrcuma y otros ingredientes en una combinación funcional pensada para acompañar tu equilibrio diario.',
        presentations: ['Tripack'],
        imageUrl: dhoyShotBalanceImg
      },
      {
        id: 'dh-shot-digesti',
        name: 'Digestishot',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Papaya en una combinación funcional pensada para acompañar tu bienestar digestivo.',
        presentations: ['Tripack'],
        imageUrl: dhoyShotDigestiImg
      },
      {
        id: 'dh-shot-defen',
        name: 'Defenshot',
        brandId: 'dhoy',
        familyId: 'shots',
        emotionalDescription: 'Vitamina C como protagonista en una fórmula pensada para acompañar tus defensas todos los días.',
        presentations: ['Tripack'],
        imageUrl: dhoyShotDefenImg
      },
      {
        id: 'dh-zumo-limon',
        name: 'Zumo de limón',
        brandId: 'dhoy',
        familyId: 'especialidades-dhoy',
        emotionalDescription: 'El sabor fresco y ácido del limón listo para usar cuando lo necesites.',
        presentations: ['200 ml'],
        imageUrl: dhoyZumoLimonImg
      },
      {
        id: 'dh-pulpa-sabila',
        name: 'Pulpa de sábila',
        brandId: 'dhoy',
        familyId: 'especialidades-dhoy',
        emotionalDescription: 'Sábila lista para incorporar fácilmente a diferentes preparaciones.',
        presentations: ['En cubos / Lista para usar', 'Uso culinario'],
        imageUrl: dhoySabilaImg
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
      primary: '#1A3815', // Verde mucho más oscuro
      secondary: '#F4F7F2',
      accent: '#2D5A27',
      badgeBg: '#E2EBDD',
      badgeText: '#1A3815',
      blockBg: '#132A10',
      blockText: '#FFFFFF',
      borderAccent: '#2D5A27',
      heroGradient: 'from-stone-950/95 via-green-950/85 to-stone-950/90',
      navBg: '#1A3815', // Verde mucho más oscuro
      navText: '#FFFFFF',
      navHover: '#E2EBDD',
      navCtaBg: '#2D5A27',
      navCtaText: '#FFFFFF',
      subKickerBg: '#E2EBDD',
      subKickerText: '#1A3815',
      cardAccentBorder: '#2D5A27',
      cardTagBg: '#E2EBDD',
      cardTagText: '#1A3815',
      footerBg: '#0D1D0B', // Verde muy oscuro profundo
      footerText: '#C8DAC0',
      vibrantTag: 'Ecolove · Bienestar Botánico Diario',
      buttonBg: '#1A3815', // Botón verde mucho más oscuro
      buttonText: '#FFFFFF',
      buttonBorder: '#2D5A27'
    },
    heroImage: ecolovePortadaSeccionImg,
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
        imageUrl: ecoloveAceiteCocoImg,
        featured: true
      },
      {
        id: 'el-aceite-coco-neutro',
        name: 'Aceite de coco sin olor ni sabor',
        brandId: 'ecolove',
        familyId: 'aceites-de-coco',
        emotionalDescription: 'Perfil neutro para cocinar lo que quieras. Una forma práctica de incorporar aceite de coco sin cambiar el sabor de tus recetas.',
        presentations: ['120 ml', '265 ml', '473 ml'],
        imageUrl: ecoloveAceiteCocoSinOlorImg
      },
      {
        id: 'el-aceite-coco-mct',
        name: 'Aceite de coco MCT',
        brandId: 'ecolove',
        familyId: 'aceites-de-coco',
        emotionalDescription: 'Aceite con triglicéridos de cadena media, fácil de incorporar a bebidas y preparaciones como parte de tu rutina diaria.',
        presentations: ['180 ml', '250 ml'],
        imageUrl: ecoloveAceiteCocoMctImg
      },
      {
        id: 'el-aceite-aguacate-clasico',
        name: 'Aceite de aguacate',
        brandId: 'ecolove',
        familyId: 'aceites-de-aguacate',
        emotionalDescription: 'Con el carácter del aguacate y gran versatilidad en cocina. Su buena estabilidad al calor ayuda a tolerar altas temperaturas con menor oxidación.',
        presentations: ['250 ml'],
        imageUrl: ecoloveAceiteAguacateImg
      },
      {
        id: 'el-aceite-aguacate-sin-olor',
        name: 'Aceite de aguacate sin olor',
        brandId: 'ecolove',
        familyId: 'aceites-de-aguacate',
        emotionalDescription: 'Perfil neutro y buena estabilidad al calor para cocinar a altas temperaturas sin alterar el sabor original de tus recetas.',
        presentations: ['250 ml', '500 ml'],
        imageUrl: ecoloveAceiteAguacateSinOlorImg
      },
      {
        id: 'el-spray-coco',
        name: 'Aceite de coco líquido Spray',
        brandId: 'ecolove',
        familyId: 'aceites-en-spray',
        emotionalDescription: 'Aceite de coco líquido en spray para distribuir de manera uniforme y usar solo lo necesario en cada preparación.',
        presentations: ['180 ml'],
        imageUrl: ecoloveSprayCocoMctImg
      },
      {
        id: 'el-spray-aguacate',
        name: 'Aceite de aguacate Spray',
        brandId: 'ecolove',
        familyId: 'aceites-en-spray',
        emotionalDescription: 'Aceite de aguacate en spray para aplicar de forma uniforme y controlar mejor la cantidad en tu cocina diaria.',
        presentations: ['180 ml'],
        imageUrl: ecoloveSprayAguacateImg
      },
      {
        id: 'el-spray-oliva',
        name: 'Aceite de oliva extra virgen Spray',
        brandId: 'ecolove',
        familyId: 'aceites-en-spray',
        emotionalDescription: 'Aceite de oliva extra virgen en spray para sumar sabor y usar la cantidad justa en tus preparaciones.',
        presentations: ['180 ml'],
        imageUrl: ecoloveSprayOlivaImg
      },
      {
        id: 'el-bebida-almendra-original',
        name: 'Bebida de almendra Original',
        brandId: 'ecolove',
        familyId: 'bebidas-vegetales',
        emotionalDescription: 'Suave, ligera y versátil para acompañar cualquier momento del día.',
        presentations: ['1 L', 'Tripack 3 x 1 L'],
        imageUrl: ecoloveBebidaAlmendraImg
      },
      {
        id: 'el-bebida-almendra-vainilla',
        name: 'Bebida de almendra Vainilla',
        brandId: 'ecolove',
        familyId: 'bebidas-vegetales',
        emotionalDescription: 'Almendra con un delicado toque de vainilla para hacer cada sorbo más especial.',
        presentations: ['1 L', 'Tripack 3 x 1 L'],
        imageUrl: ecoloveBebidaAlmendraVainillaImg
      },
      {
        id: 'el-bebida-coco',
        name: 'Bebida de coco',
        brandId: 'ecolove',
        familyId: 'bebidas-vegetales',
        emotionalDescription: 'Ligera y tropical, para tomar o combinar como quieras.',
        presentations: ['1 L'],
        imageUrl: ecoloveBebidaCocoImg
      },
      {
        id: 'el-kombucha-frutos-rojos',
        name: 'Kombucha Frutos rojos',
        brandId: 'ecolove',
        familyId: 'kombucha',
        emotionalDescription: 'Frutal, refrescante y con todo el carácter de los frutos rojos.',
        presentations: ['500 ml'],
        imageUrl: ecoloveImg
      },
      {
        id: 'el-kombucha-jengibre',
        name: 'Kombucha Jengibre',
        brandId: 'ecolove',
        familyId: 'kombucha',
        emotionalDescription: 'Refrescante, intensa y con ese toque de jengibre que se siente desde el primer sorbo.',
        presentations: ['500 ml'],
        imageUrl: ecoloveKombuchaJengibreImg
      },
      {
        id: 'el-kombucha-manzana',
        name: 'Kombucha Manzana',
        brandId: 'ecolove',
        familyId: 'kombucha',
        emotionalDescription: 'Suave, aromática y fácil de disfrutar.',
        presentations: ['500 ml'],
        imageUrl: ecoloveImg
      },
      {
        id: 'el-shot-energy',
        name: 'Shot Energy',
        brandId: 'ecolove',
        familyId: 'shots-ecolove',
        emotionalDescription: 'Una combinación intensa con ginseng para esos días en los que buscas un impulso extra.',
        presentations: ['35 ml', 'Six Pack'],
        imageUrl: ecoloveImg
      },
      {
        id: 'el-shot-defense',
        name: 'Shot Defense',
        brandId: 'ecolove',
        familyId: 'shots-ecolove',
        emotionalDescription: 'El carácter del jengibre en un shot intenso y práctico para sumar a tu rutina.',
        presentations: ['35 ml'],
        imageUrl: ecoloveImg
      },
      {
        id: 'el-miel-agave',
        name: 'Miel de agave',
        brandId: 'ecolove',
        familyId: 'algo-extra',
        emotionalDescription: 'Una alternativa práctica para darle el toque dulce que tú eliges a comidas y bebidas.',
        presentations: ['230 ml'],
        imageUrl: ecoloveMielAgaveImg
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
    storyTitle: '',
    storyText: '',
    milestones: [],
    colors: {
      primary: '#007F3A',
      secondary: '#F0FDF4',
      accent: '#007F3A',
      badgeBg: '#DCFCE7',
      badgeText: '#14532D',
      blockBg: '#000000',
      blockText: '#FFFFFF',
      borderAccent: '#000000',
      heroGradient: 'from-[#005928] via-[#007F3A] to-[#004720]',
      navBg: '#000000', // Barra de menú negra como antes
      navText: '#FFFFFF',
      navHover: '#86EFAC',
      navCtaBg: '#000000',
      navCtaText: '#FFFFFF',
      subKickerBg: '#000000',
      subKickerText: '#FFFFFF',
      cardAccentBorder: '#000000',
      cardTagBg: '#14532D',
      cardTagText: '#86EFAC',
      footerBg: '#000000', // Footer negro como antes
      footerText: '#FFFFFF',
      vibrantTag: 'Hortilisto · Vegetales Frescos & Prácticos',
      buttonBg: '#000000',
      buttonText: '#FFFFFF',
      buttonBorder: '#000000'
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
        imageUrl: hlAguacateMaduroImg,
        featured: true
      },
      {
        id: 'hl-aguacate-pack-semanal',
        name: 'Aguacate Pack Semanal',
        brandId: 'hortilisto',
        familyId: 'aguacates-maduros',
        emotionalDescription: 'Aguacates maduros en un formato pensado para acompañarte durante la semana.',
        presentations: ['Pack semanal'],
        imageUrl: hlAguacate6PackImg
      },
      {
        id: 'hl-aguacate-tamano-ideal',
        name: 'Aguacate Tamaño Ideal',
        brandId: 'hortilisto',
        familyId: 'aguacates-maduros',
        emotionalDescription: 'Aguacates maduros en un tamaño de empaque práctico para tu consumo diario.',
        presentations: ['Tamaño ideal'],
        imageUrl: hlAguacateMaduroImg
      },
      {
        id: 'hl-achogcha',
        name: 'Achogcha',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Lista para convertir una receta tradicional en algo mucho más práctico.',
        presentations: ['400 g'],
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-mix-cebollas',
        name: 'Mix de cebollas',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Cebollas listas para cocinar y ahorrarte uno de esos pasos que nadie extraña.',
        presentations: ['550 g'],
        imageUrl: hlMixCebollaImg
      },
      {
        id: 'hl-mix-mega-cebollas',
        name: 'Mix Mega Cebollas',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Más cebolla lista para cocinar cuando la receta o la familia piden más.',
        presentations: ['1 kg'],
        imageUrl: hlMegaMixCebollaImg
      },
      {
        id: 'hl-paitenitas',
        name: 'Paitenitas',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Cebollitas listas para sumar sabor y practicidad a tus preparaciones.',
        presentations: ['475 g'],
        imageUrl: hlCebollaPaitenitaImg
      },
      {
        id: 'hl-perlita',
        name: 'Perlita',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Pequeñas cebollas listas para cocinar, acompañar o darle un toque diferente a tus platos.',
        presentations: ['475 g'],
        imageUrl: hlCebollaPerlitaImg
      },
      {
        id: 'hl-pimientos-colores',
        name: 'Pimientos de colores',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Color, sabor y frescura listos para darle vida a tus comidas.',
        presentations: ['Presentación lista'],
        imageUrl: hlPimientosColoresImg
      },
      {
        id: 'hl-sambo-picado',
        name: 'Sambo picado',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Limpio, picado y listo para convertirse en tu próxima receta.',
        presentations: ['600 g'],
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-zapallo-picado',
        name: 'Zapallo picado',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Todo el sabor del zapallo, con mucho menos trabajo.',
        presentations: ['700 g'],
        imageUrl: hlZapalloImg
      },
      {
        id: 'hl-verdura-mazo',
        name: 'Verdura en mazo',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Una opción práctica para tener vegetales frescos listos cuando los necesitas.',
        presentations: ['200 g'],
        imageUrl: hlJengibreImg
      },
      {
        id: 'hl-jengibre-bandeja',
        name: 'Jengibre en bandeja',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Jengibre fresco y práctico para sumar fácilmente a comidas y bebidas.',
        presentations: ['Bandeja'],
        imageUrl: hlJengibreImg
      },
      {
        id: 'hl-pina-golden',
        name: 'Piña Golden',
        brandId: 'hortilisto',
        familyId: 'vegetales-y-frutas-listas',
        emotionalDescription: 'Dulce, fresca y lista para disfrutar sin pelar ni cortar.',
        presentations: ['600 g'],
        imageUrl: hlPinaGoldenImg
      },
      {
        id: 'hl-guacamole-clasico',
        name: 'Guacamole',
        brandId: 'hortilisto',
        familyId: 'guacamole',
        emotionalDescription: 'Aguacate convertido en un guacamole práctico y delicioso para acompañar lo que quieras.',
        presentations: ['205 g'],
        imageUrl: hlGuacamoleImg
      },
      {
        id: 'hl-guacamole-tomate-pimiento',
        name: 'Guacamole Tomate + Pimiento',
        brandId: 'hortilisto',
        familyId: 'guacamole',
        emotionalDescription: 'Nuestro guacamole con tomate y pimiento para darle todavía más sabor a cada bocado.',
        presentations: ['205 g'],
        imageUrl: hlGuacamoleTomatePimientoImg
      },
      {
        id: 'hl-grosella-encurtida',
        name: 'Grosella encurtida',
        brandId: 'hortilisto',
        familyId: 'encurtidos',
        emotionalDescription: 'Ácida, intensa y de esas que hacen difícil parar después de la primera.',
        presentations: ['172 g drenado'],
        imageUrl: hortilistoImg
      },
      {
        id: 'hl-mango-encurtido',
        name: 'Mango encurtido',
        brandId: 'hortilisto',
        familyId: 'encurtidos',
        emotionalDescription: 'Ese equilibrio entre ácido, fresco y delicioso que siempre provoca otro pedazo.',
        presentations: ['172 g'],
        imageUrl: hlMangoImg
      }
    ]
  }
};
