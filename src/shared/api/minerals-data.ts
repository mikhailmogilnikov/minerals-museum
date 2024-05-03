import { MineralType, CategoryType } from '../model/mineral.type';

export const MineralsData: MineralType[] = [
  {
    id: 0,
    name: 'Флюорит',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/fluorite.glb',
    img: '/ru/images/fluorite.png',
  },
  {
    id: 1,
    name: 'Арагонит',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/aragonite.glb',
    img: '/ru/images/aragonite.png',
  },
  {
    id: 2,
    name: 'Перит',
    description:
      'Гетерогенная горная порода, состоящая из разнообразных минералов, среди которых доминируют пирит, кварц, мусковит, хлорит, кальцит, доломит и турмалин.',
    categories: [0],
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
    ],
    model: '/ru/models/pyrite.glb',
    img: '/ru/images/pyrite.png',
  },
  {
    id: 3,
    name: 'Аметист',
    description: '',
    categories: [],
    specs: [],
    model: '/ru/models/amethyst.glb',
    img: '/ru/images/amethyst.png',
  },
  {
    id: 4,
    name: 'Сланец',
    description: '',
    categories: [],
    specs: [],
    model: '/ru/models/testStone.glb',
    img: '/ru/images/testStone.png',
  },
  {
    id: 5,
    name: 'Голубой кальцит',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/calcite.glb',
    img: '/ru/images/calcite.webp',
  },
  {
    id: 6,
    name: 'Базальт',
    description: '',
    categories: [8],
    specs: [],
    model: '/ru/models/basalt.glb',
    img: '/ru/images/basalt.webp',
  },
  {
    id: 7,
    name: 'Халит',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/halite.glb',
    img: '/ru/images/halite.webp',
  },
  {
    id: 8,
    name: 'Мусковит',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/muscovite.glb',
    img: '/ru/images/muscovite.webp',
  },
  {
    id: 9,
    name: 'Кварцевая жеода',
    description: '',
    categories: [0],
    specs: [],
    model: '/ru/models/quartz_geode.glb',
    img: '/ru/images/quartz_geode.webp',
  },
];

export const Categories: CategoryType[] = [
  {
    id: 0,
    name: 'Минералы',
    description:
      'Однородная по составу и строению часть горных пород, руд, метеоритов, являющаяся естественным продуктом геологических процессов и представляющая собой химическое соединение или химический элемент. \nМинерал может находиться в любом агрегатном состоянии, при этом большинство минералов — твёрдые тела. Минералы подразделяют на имеющие кристаллическую структуру, аморфные и минералы, имеющие внешнюю форму кристаллов, но находящиеся в аморфном состоянии (метамиктные минералы).',
  },
  {
    id: 1,
    name: 'Алевриты',
    description: 'Описание для категории 2',
  },
  {
    id: 2,
    name: 'Кубическая сингония',
    description: 'Описание для категории 3',
  },
  {
    id: 3,
    name: 'Галогениды',
    description:
      'Расширенное текстовое писание для категории 4. Расширенное текстовое писание для категории 4. Расширенное текстовое писание для категории 4. Расширенное текстовое писание для категории 4.',
  },
  {
    id: 4,
    name: 'Песчаники',
    description: 'Описание для категории 1',
  },
  {
    id: 5,
    name: 'Осадочные породы',
    description: 'Описание для категории 2',
  },
  {
    id: 6,
    name: 'Тетрагональная сингония',
    description: 'Описание для категории 3',
  },
  {
    id: 7,
    name: 'Оксиды',
    description:
      'Расширенное текстовое писание для категории 4. Расширенное текстовое писание для категории 4. Расширенное текстовое писание для категории 4. Расширенное текстовое писание для категории 4.',
  },
  {
    id: 8,
    name: 'Магматические породы',
    description:
      'Конечные продукты магматической деятельности, возникшие в результате затвердевания природного расплава (магмы, лавы). Переход расплава в твёрдое состояние сопровождается кристаллизацией вещества. \nВстречаются в широком диапазоне геологических условий: щиты, платформы, орогены, океаническая кора и др. Магматические и метаморфические породы по объёму составляют 90—95 % верхней (16 км) земной коры. \nМагматические породы образуют около 15 % современной поверхности Земли.',
  },
];
