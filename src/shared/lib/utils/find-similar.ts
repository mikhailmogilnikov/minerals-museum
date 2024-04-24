import { MineralType } from '@/shared/model/mineral.type';

export const findSimilar = (
  mineral: MineralType,
  mineralsList: MineralType[],
) => {
  const counter = mineralsList.reduce(
    (acc: { [key: number]: number }, currMineral) => {
      if (currMineral.id === mineral.id) return acc;

      currMineral.categories.forEach((categoryId) => {
        if (!acc[currMineral.id]) {
          acc[currMineral.id] = 0;
        }
        if (mineral.categories.includes(categoryId)) {
          acc[currMineral.id] += 1;
        }
      });

      return acc;
    },
    {},
  );

  const filteredMineralsIds = Object.entries(counter)
    .filter(([_, value]) => value > 3)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key);

  return filteredMineralsIds.map((mineralId) =>
    mineralsList.find((filtMineral) => filtMineral.id === Number(mineralId)),
  );
};
