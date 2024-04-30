'use client';

import { useLocalStorage, useMedia } from 'react-use';
import { Categories, MineralsData } from '@/shared/api/minerals-data';
import { shuffleCollection } from '@/shared/lib/utils/shuffle-collection';
import { sortCategories } from '@/shared/lib/utils/sort-categories';
import { CategoriesListDesktop } from './categories-list-desktop';
import { CategoriesListMobile } from './categories-list-mobile';

export const CategoriesList = () => {
  const [isRandom] = useLocalStorage('random-categories', false);
  const isMobile = useMedia('(max-width: 767px)', false);

  const categoriesList = isRandom
    ? shuffleCollection(Categories)
    : sortCategories(Categories, MineralsData);

  return isMobile ? (
    <CategoriesListMobile categoriesList={categoriesList} />
  ) : (
    <CategoriesListDesktop categoriesList={categoriesList} />
  );
};
