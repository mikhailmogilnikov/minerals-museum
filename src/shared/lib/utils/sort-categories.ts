import { CategoryType, MineralType } from '@/shared/model/mineral.type';

export const sortCategories = (
  categories: CategoryType[],
  minerals: MineralType[],
) => {
  const counter = minerals.reduce((acc: { [key: number]: number }, mineral) => {
    mineral.categories.forEach((categoryId) => {
      if (!acc[categoryId]) {
        acc[categoryId] = 0;
      }
      acc[categoryId] += 1;
    });

    return acc;
  }, {});

  return categories.sort((a, b) => counter[b.id] - counter[a.id]);
};
