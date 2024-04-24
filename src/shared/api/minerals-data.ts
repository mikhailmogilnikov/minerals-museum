import { MineralType, CategoryType } from '../model/mineral.type';

export const MineralsData: MineralType[] = [
  {
    id: 0,
    name: 'Флюорит',
    description: '',
    categories: [0, 2, 3, 4, 6],
    specs: [],
    model: '/ru/models/fluorite.glb',
    img: '/ru/images/fluorite.png',
  },
  {
    id: 1,
    name: 'Арагонит',
    description: '',
    categories: [0, 2, 3, 5, 6, 7],
    specs: [],
    model: '/ru/models/aragonite.glb',
    img: '/ru/images/aragonite.png',
  },
  {
    id: 2,
    name: 'Перит',
    description:
      'Гетерогенная горная порода, состоящая из разнообразных минералов, среди которых доминируют пирит, кварц, мусковит, хлорит, кальцит, доломит и турмалин.',
    categories: [1, 2, 3, 4, 5, 6, 7],
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
    categories: [2, 3, 5, 7],
    specs: [],
    model: '/ru/models/amethyst.glb',
    img: '/ru/images/amethyst.png',
  },
  {
    id: 4,
    name: 'Халцедон',
    description: '',
    categories: [0, 1, 3, 4, 6],
    specs: [],
    model: '/ru/models/testStone.glb',
    img: '/ru/images/testStone.png',
  },
  {
    id: 5,
    name: 'Флюорит',
    description: '',
    categories: [0, 1, 2, 3, 5, 7],
    specs: [],
    model: '/ru/models/fluorite.glb',
    img: '/ru/images/fluorite.png',
  },
  {
    id: 6,
    name: 'Арагонит',
    description: '',
    categories: [0, 2, 3, 4, 5, 6, 7],
    specs: [],
    model: '/ru/models/aragonite.glb',
    img: '/ru/images/aragonite.png',
  },
  {
    id: 7,
    name: 'Перит',
    description: '',
    categories: [1, 2, 4, 5, 6, 7],
    specs: [],
    model: '/ru/models/pyrite.glb',
    img: '/ru/images/pyrite.png',
  },
  {
    id: 8,
    name: 'Аметист',
    description: '',
    categories: [2, 4, 5, 6, 7],
    specs: [],
    model: '/ru/models/amethyst.glb',
    img: '/ru/images/amethyst.png',
  },
  {
    id: 9,
    name: 'Халцедон',
    description: '',
    categories: [0, 1, 4, 5, 6, 7],
    specs: [],
    model: '/ru/models/testStone.glb',
    img: '/ru/images/testStone.png',
  },
];

export const Categories: CategoryType[] = [
  {
    id: 0,
    name: 'Минералы',
    description: 'Описание для категории 1',
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
];
