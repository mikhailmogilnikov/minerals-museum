import { MineralType, CategoryType } from '../model/mineral.type';
import { CategoriesData } from './categories-data';

export const MineralsData: MineralType[] = [
  {
    id: 0,
    name: 'Флюорит',
    description:
      'Минерал, фторид кальция. Хрупок, окрашен в различные цвета: жёлтый, зелёный, синий, голубой, красновато-розовый, фиолетовый, иногда фиолетово-чёрный. Бесцветные кристаллы редки. \nХарактерна зональность окраски. Окраска вызвана дефектами кристаллической структуры, которая весьма тонко реагирует на радиационное облучение и нагревание. Иногда содержит примеси радиоактивных элементов, в некоторых месторождениях — урана и тория.',
    categories: [0, 2],
    specs: [
      {
        title: 'Цвет',
        content:
          'Белый или бесцветный, фиолетовый, синий, сине-зелёный, жёлтый, коричнево-жёлтый или красный',
      },
      {
        title: 'Цвет черты',
        content: 'Белая',
      },
      {
        title: 'Блеск',
        content: 'Стеклянный',
      },
      {
        title: 'Твёрдость',
        content: '4',
      },
      {
        title: 'Спайность',
        content: 'Совершенная по {111}',
      },
      {
        title: 'Излом',
        content: 'Ступенчатый',
      },
      {
        title: 'Плотность',
        content: '3,18 г/см³',
      },
      {
        title: 'Сингония',
        content: 'Кубическая',
      },
      {
        title: 'Показатель преломления',
        content: '1,433—1,435',
      },
    ],
    model: '/ru/models/fluorite.glb',
    img: '/ru/images/fluorite.png',
  },
  {
    id: 1,
    name: 'Арагонит',
    description:
      'Минерал, один из естественных полиморфов карбоната кальция, образующийся, когда ионы магния препятствуют образованию кристаллов кальцита. Назван по области Арагон в Испании. \nАрагонит — нестабильная фаза карбоната кальция, и за отрезок времени порядка 10—100 миллионов лет видоизменяется до кальцита. Трансформация арагонита в кальцит сопровождается увеличением объёма. При нагревании свыше 400 °C происходит быстрый переход арагонита в кальцит, а на огне он рассыпается в тонкую кальцитовую пудру.',
    categories: [0, 1],
    specs: [
      {
        title: 'Цвет',
        content:
          'Бесцветный, белый, серый, желтоватый, красноватый,бирюзовато-прозрачноватый',
      },
      {
        title: 'Цвет черты',
        content: 'Белая',
      },
      {
        title: 'Блеск',
        content: 'Стеклянный',
      },
      {
        title: 'Прозрачность',
        content: 'Прозрачный, просвечивающий',
      },
      {
        title: 'Твёрдость',
        content: '3,5 — 4',
      },
      {
        title: 'Спайность',
        content: 'Несовершенная по {010}',
      },
      {
        title: 'Сингония',
        content: 'Ромбическая',
      },
      {
        title: 'Показатель преломления',
        content: '1,433—1,435',
      },
    ],
    model: '/ru/models/aragonite.glb',
    img: '/ru/images/aragonite.png',
  },
  {
    id: 2,
    name: 'Перит',
    description:
      'Гетерогенная горная порода, состоящая из разнообразных минералов, среди которых доминируют пирит, кварц, мусковит, хлорит, кальцит, доломит и турмалин.',
    categories: [0, 3],
    specs: [
      {
        title: 'Цвет',
        content: 'Серно-жёлтый',
      },
      {
        title: 'Текстура',
        content: 'Массивная, полосчатая или сланцевая',
      },
      {
        title: 'Блеск',
        content: 'Алмазный',
      },
      {
        title: 'Плотность',
        content: '8,16 г/см³',
      },
      {
        title: 'Молекулярная масса',
        content: '483,63',
      },
      {
        title: 'Сингония',
        content: 'Ортоомбическая',
      },
    ],
    model: '/ru/models/pyrite.glb',
    img: '/ru/images/pyrite.png',
  },
  {
    id: 3,
    name: 'Аметист',
    description:
      'Фиолетовая, синевато-розовая или красно-фиолетовая разновидность кварца. Прозрачный аметист относится к полудрагоценным камням. Непрозрачный — ценный поделочный камень. Весьма высоко ценится как коллекционный минерал. \nВстречается обычно в виде свободно сидящих в пустотах и жилах среди кристаллических горных пород кристаллов и их сростков. Кристаллы образованы комбинацией плоскостей призмы и ромбоэдра, причём из всех кварцев именно для аметиста характерной чертой является преобладание граней ромбоэдра. Реже кристаллы имеют длиннопризматический или скипетровидный облик. Обычен в друзах и кристаллических щётках внутри агатовых жеод и в миндалинах и трещинах вулканических пород. \nИногда аметист заключает в себе тонкие кристаллические пластинки гематита или игольчатые кристаллики гётита и тогда получает название «волосистого». Обычны для кристаллов аметиста, в особенности для крупных, жидкие и газово-жидкие включения; часто они имеют форму тончайших трубок-канальцев с пережимами и располагаются по радиусам от центра роста. Естественная смесь аметиста и цитрина называется аметрин.',
    categories: [0, 4],
    specs: [
      {
        title: 'Цвет',
        content: 'Фиолетовый до бледного красновато-фиолетового',
      },
      {
        title: 'Цвет черты',
        content: 'Белый',
      },
      {
        title: 'Блеск',
        content: 'Стеклянный, перламутровый',
      },
      {
        title: 'Прозрачность',
        content: 'Прозрачный',
      },
      {
        title: 'Твёрдость',
        content: '7',
      },
      {
        title: 'Спайность',
        content: 'Отсутствует',
      },
      {
        title: 'Излом',
        content: 'Раковистый; довольно хрупок',
      },
      {
        title: 'Плотность',
        content: '2,63—2,65 г/см³',
      },
      {
        title: 'Сингония',
        content: 'Тригональная',
      },
      {
        title: 'Показатель преломления',
        content: '1,543—1,554',
      },
    ],
    model: '/ru/models/amethyst.glb',
    img: '/ru/images/amethyst.png',
  },
  {
    id: 4,
    name: 'Гематит',
    description:
      'Широко распространённый минерал, одна из главнейших железных руд. В переводе с греческого слово «гематит» означает «кроваво-красный».\nГематит можно найти в различных геологических условиях, включая магматические, метаморфические и осадочные породы.',
    categories: [0, 4],
    specs: [
      {
        title: 'Цвет',
        content: 'От красновато-бурого до железно-чёрного',
      },
      {
        title: 'Цвет черты',
        content: 'Красный',
      },
      {
        title: 'Блеск',
        content: 'Металлический',
      },
      {
        title: 'Прозрачность',
        content: 'Непрозрачный',
      },
      {
        title: 'Твёрдость',
        content: '5,5 - 6,5 по шкале Мооса',
      },
      {
        title: 'Спайность',
        content: 'Отсутствует',
      },
      {
        title: 'Излом',
        content: 'Раковистый, неровный',
      },
      {
        title: 'Плотность',
        content: '5,1 - 5,3 г/см³',
      },
      {
        title: 'Сингония',
        content: 'Тригональная',
      },
      {
        title: 'Химический состав',
        content: 'Fe₂O₃ (оксид железа)',
      },
    ],
    model: '/ru/models/hematite.glb',
    img: '/ru/images/hematite.webp',
  },
  {
    id: 5,
    name: 'Голубой кальцит',
    description:
      'Минерал, являющийся полупрозрачной или непрозрачной разновидностью кальцита. Окрашен в голубые или голубовато-зеленые цвета за счет примесей меди, марганца или железа. Встречается в виде кристаллов, массивных образований, сталактитов и натеков.',
    categories: [0, 3],
    specs: [
      {
        title: 'Цвет',
        content: 'Голубой, голубовато-зеленый',
      },
      {
        title: 'Цвет черты',
        content: 'Белый',
      },
      {
        title: 'Блеск',
        content: 'Стеклянный',
      },
      {
        title: 'Прозрачность',
        content: 'Прозрачный, полупрозрачный, непрозрачный',
      },
      {
        title: 'Твердость',
        content: '3 по шкале Мооса',
      },
      {
        title: 'Спайность',
        content: 'Совершенная в трех направлениях',
      },
      {
        title: 'Излом',
        content: 'Раковистый',
      },
      {
        title: 'Плотность',
        content: '2,8 - 2,9 г/см³',
      },
      {
        title: 'Сингония',
        content: 'Тригональная',
      },
      {
        title: 'Химический состав',
        content: 'CaCO₃ (карбонат кальция)',
      },
    ],
    model: '/ru/models/calcite.glb',
    img: '/ru/images/calcite.webp',
  },
  {
    id: 6,
    name: 'Базальт',
    description:
      'Базальт - это магматическая горная порода, образовавшаяся при остывании и застывании лавы. Он является одним из самых распространенных типов горных пород на Земле и встречается в различных формах, включая вулканические потоки, жерла и дайки. \nБазальт обычно имеет темный, почти черный цвет, но может также быть темно-серым или зеленоватым. Он состоит из различных минералов, включая пироксенов, плагиоклаза и оливина.',
    categories: [8],
    specs: [
      {
        title: 'Цвет',
        content: 'От темно-серого до черного, тёмно-зеленый',
      },
      {
        title: 'Прозрачность',
        content: 'Непрозрачный',
      },
      {
        title: 'Плотность',
        content: '2,6 — 3,1 г/см³',
      },
      {
        title: 'Температура плавления',
        content: '1100 — 1250°C',
      },
    ],
    model: '/ru/models/basalt.glb',
    img: '/ru/images/basalt.webp',
  },
  {
    id: 7,
    name: 'Галит',
    description:
      'Каменная соль, минерал подкласса хлоридов, кристаллическая форма хлорида натрия (NaCl). \nГалит формируется в виде кубических кристаллов, от бесцветного до белого, светло- и тёмно-голубого, жёлтого и розового. Окраска связана с примесями, в том числе красноватая окраска может быть вызвана присутствием некоторых мёртвых бактерий и примесей мёртвых растений, а также любых неорганических веществ. \nОбычно встречается с другими продуктами испарения солёной воды — сульфатами, боратами.',
    categories: [0, 2, 11],
    specs: [
      {
        title: 'Цвет',
        content:
          'Бесцветный или белый; примеси придают голубой, фиолетовый, розовый, жёлтый и серый оттенок',
      },
      {
        title: 'Цвет черты',
        content: 'Белый',
      },
      {
        title: 'Блеск',
        content: 'Стеклянный',
      },
      {
        title: 'Прозрачность',
        content: 'Прозрачный, полупрозрачный',
      },
      {
        title: 'Твердость',
        content: '2',
      },
      {
        title: 'Спайность',
        content: 'Совершенная по кубу',
      },
      {
        title: 'Излом',
        content: 'Ступенчатый',
      },
      {
        title: 'Плотность',
        content: '2,1 - 2,2 г/см³',
      },
      {
        title: 'Расщепление',
        content: 'Спайность в трёх направлениях',
      },
      {
        title: 'Отражение',
        content: 'Стекловидное',
      },
      {
        title: 'Растворимость',
        content: 'В воде',
      },
      {
        title: 'Вкус',
        content: 'Солёный',
      },
      {
        title: 'Сингония',
        content: 'Кубическая',
      },
      {
        title: 'Формула',
        content: 'NaCl',
      },
      {
        title: 'Показатель преломления',
        content: '1,544',
      },
    ],
    model: '/ru/models/halite.glb',
    img: '/ru/images/halite.webp',
  },
  {
    id: 8,
    name: 'Мусковит',
    description:
      'Минерал, калиевая слюда. Используют в электро- и радиотехнике, для изготовления смотровых оконцев в котлах, печах и др.\nНазвание минерала связано с тем, что в Средние века основным поставщиком слюды в Европу было Русское государство, часто называемое Московия. В результате в английском языке слюда получила название Muscovy glass — московское стекло. Русское минералогическое название слюды — мусковит. \nСуществуют также и другие названия минерала и его разновидностей: московская звезда, калиевая слюда, белая слюда, серицит, антонит, лейкофиллит.',
    categories: [0, 7, 12],
    specs: [
      {
        title: 'Цвет',
        content: 'Белый, серый, серебряный, коричневатый, бледно-зелёный',
      },
      {
        title: 'Цвет черты',
        content: 'Белый',
      },
      {
        title: 'Блеск',
        content: 'Перламутровый',
      },
      {
        title: 'Прозрачность',
        content: 'Просвечивающий, полупрозрачный',
      },
      {
        title: 'Твердость',
        content: '2—2,5',
      },
      {
        title: 'Спайность',
        content: 'Весьма совершенная по {001}',
      },
      {
        title: 'Излом',
        content: 'Минерал эластичен',
      },
      {
        title: 'Плотность',
        content: '2,76 — 3,10 г/см³',
      },
      {
        title: 'Сингония',
        content: 'Моноклинная',
      },
      {
        title: 'Показатель преломления',
        content: '1,6',
      },
    ],
    model: '/ru/models/muscovite.glb',
    img: '/ru/images/muscovite.webp',
  },
  {
    id: 9,
    name: 'Кварцевая жеода',
    description:
      'Кварц - один из самых распространённых минералов в земной коре, породообразующий минерал большинства магматических и метаморфических пород. Свободное содержание в земной коре — 12 %. Входит в состав других минералов в виде смесей и силикатов.',
    categories: [0, 4, 13],
    specs: [
      {
        title: 'Цвет',
        content:
          'Бесцветный, розовый, белый, фиолетовый, серый, жёлтый, коричневый, чёрный',
      },
      {
        title: 'Цвет черты',
        content: 'Белый',
      },
      {
        title: 'Блеск',
        content: 'Стеклянный, в сплошных массах иногда жирный',
      },
      {
        title: 'Прозрачность',
        content: 'Полупрозрачный,прозрачный',
      },
      {
        title: 'Твердость',
        content: '7',
      },
      {
        title: 'Спайность',
        content: 'Отсутствует',
      },
      {
        title: 'Излом',
        content: 'Раковистый',
      },
      {
        title: 'Плотность',
        content: '2,6 — 2,65 г/см³',
      },
      {
        title: 'Сингония',
        content: 'Тригональная',
      },
      {
        title: 'Показатель преломления',
        content: '1,544',
      },
    ],
    model: '/ru/models/quartz_geode.glb',
    img: '/ru/images/quartz_geode.webp',
  },
  {
    id: 10,
    name: 'Геденбергит',
    description:
      'Минерал, силикат из группы пироксенов. Назван по имени шведского химика и минералога XIX века Андерса Людвига Геденберга (1781—1809).\nКристаллы Геденбергита представляют собой уплощённые призмы.Встречается в ассоциации с магнетитом и гранатом, иногда с галенитом, сфалеритом, халькопиритом. \nВ магматических процессах выделяется при кристаллизации низкоплавких кислых пород. Находится в метаморфических известняках, преимущественно в скарнах.',
    categories: [0, 7, 14],
    specs: [
      {
        title: 'Цвет',
        content: 'От тёмно-зелёного до черно-зеленого и почти чёрного',
      },
      {
        title: 'Цвет черты',
        content: 'Светло-серый с зелёным оттенком',
      },
      {
        title: 'Блеск',
        content: 'Стеклянный',
      },
      {
        title: 'Твердость',
        content: '5,5 - 6',
      },
      {
        title: 'Спайность',
        content: 'Ясная по призме {110}',
      },
      {
        title: 'Излом',
        content: 'Раковистый',
      },
      {
        title: 'Плотность',
        content: '3,5 - 3,6 г/см³',
      },
      {
        title: 'Сингония',
        content: 'Моноклинная',
      },
    ],
    model: '/ru/models/pyroxene.glb',
    img: '/ru/images/pyroxene.webp',
  },
  {
    id: 11,
    name: 'Гипс',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/gypsum.glb',
    img: '/ru/images/gypsum.webp',
  },
  {
    id: 12,
    name: 'Галенит',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/galena_pbs.glb',
    img: '/ru/images/galena_pbs.webp',
  },
  {
    id: 13,
    name: 'Кианит',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/kyanite.glb',
    img: '/ru/images/kyanite.webp',
  },
  // {
  //   id: 14,
  //   name: 'Графит',
  //   description: '',
  //   categories: [0],
  //   specs: [],
  //   model: '/ru/models/graphite.glb',
  //   img: '/ru/images/graphite.webp',
  // },
  {
    id: 15,
    name: 'Гранат',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/garnet.glb',
    img: '/ru/images/garnet.webp',
  },
  {
    id: 16,
    name: 'Шлак',
    description: '',
    categories: [8],
    specs: [],
    model: '/ru/models/scoria.glb',
    img: '/ru/images/scoria.webp',
  },
  {
    id: 17,
    name: 'Риолит',
    description: '',
    categories: [8, 9],
    specs: [],
    model: '/ru/models/rhyolite.glb',
    img: '/ru/images/rhyolite.webp',
  },
  {
    id: 18,
    name: 'Пегматит',
    description: '',
    categories: [8],
    specs: [],
    model: '/ru/models/pegmatite.glb',
    img: '/ru/images/pegmatite.webp',
  },
  {
    id: 19,
    name: 'Обсидиан',
    description: '',
    categories: [8],
    specs: [],
    model: '/ru/models/obsidian.glb',
    img: '/ru/images/obsidian.webp',
  },
  {
    id: 20,
    name: 'Кимберлит',
    description: '',
    categories: [8],
    specs: [],
    model: '/ru/models/kimberlite.glb',
    img: '/ru/images/kimberlite.webp',
  },
  {
    id: 21,
    name: 'Гранит',
    description: '',
    categories: [8],
    specs: [],
    model: '/ru/models/granite.glb',
    img: '/ru/images/granite.webp',
  },
  {
    id: 22,
    name: 'Габбро',
    description: '',
    categories: [8],
    specs: [],
    model: '/ru/models/gabbro.glb',
    img: '/ru/images/gabbro.webp',
  },
  {
    id: 23,
    name: 'Диорит',
    description: '',
    categories: [8],
    specs: [],
    model: '/ru/models/diorite.glb',
    img: '/ru/images/diorite.webp',
  },
  {
    id: 24,
    name: 'Белый мрамор',
    description: '',
    categories: [10],
    specs: [],
    model: '/ru/models/white_marble.glb',
    img: '/ru/images/white_marble.webp',
  },
  {
    id: 25,
    name: 'Серпентинит',
    description: '',
    categories: [10],
    specs: [],
    model: '/ru/models/serpentinite.glb',
    img: '/ru/images/serpentinite.webp',
  },
  {
    id: 26,
    name: 'Сланец',
    description: '',
    categories: [10],
    specs: [],
    model: '/ru/models/schist.glb',
    img: '/ru/images/schist.webp',
  },
  {
    id: 27,
    name: 'Рябь',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/sedimentary_structure_ripples.glb',
    img: '/ru/images/sedimentary_structure_ripples.webp',
  },
  {
    id: 28,
    name: 'Котелец',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/сoquina.glb',
    img: '/ru/images/сoquina.webp',
  },
  {
    id: 29,
    name: 'Кварцевый песчаник',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/quartz_sandstone.glb',
    img: '/ru/images/quartz_sandstone.webp',
  },
  {
    id: 30,
    name: 'Розовый кварцит',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/pink_quartzite.glb',
    img: '/ru/images/pink_quartzite.webp',
  },
  {
    id: 31,
    name: 'Ископаемый известняк',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/fossiliferous_limestone.glb',
    img: '/ru/images/fossiliferous_limestone.webp',
  },
  {
    id: 32,
    name: 'Подошвенные следы',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/flute_cast.glb',
    img: '/ru/images/flute_cast.webp',
  },
  {
    id: 33,
    name: 'Будинаж в сланце',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/boudinage_in_shale.glb',
    img: '/ru/images/boudinage_in_shale.webp',
  },
  {
    id: 34,
    name: 'Горючий сланец',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/bituminous_shale.glb',
    img: '/ru/images/bituminous_shale.webp',
  },
  {
    id: 35,
    name: 'Антрацит',
    description: '',
    categories: [5],
    specs: [],
    model: '/ru/models/anthracite_coal.glb',
    img: '/ru/images/anthracite_coal.webp',
  },
];

export const Categories: CategoryType[] = CategoriesData;
