/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { CategoryType } from '@/shared/model/mineral.type';
import { shuffleCollection } from '../../utils/shuffle-collection';
import { sortCategories } from '../../utils/sort-categories';
import { useCategories } from '../categories-provider';
import { useItems } from '../items-provider';

const HomeCategoriesContext = createContext<CategoryType[]>([]);

type Props = {
  children: React.ReactNode;
};

export const HomeCategoriesProvider = ({ children }: Props) => {
  const [isRandom] = useLocalStorage('random-categories', false);
  const items = useItems();
  const categories = useCategories();
  const [list, setList] = useState<CategoryType[]>([]);

  useEffect(() => {
    const categoriesList = isRandom
      ? shuffleCollection(categories)
      : sortCategories(categories, items);

    setList(categoriesList);
  }, [items, categories]);

  return (
    <HomeCategoriesContext.Provider value={list}>
      {children}
    </HomeCategoriesContext.Provider>
  );
};

export const useHomeCategoriesContext = () => useContext(HomeCategoriesContext);
