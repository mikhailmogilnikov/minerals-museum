/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { Categories, MineralsData } from '@/shared/api/minerals-data';
import { CategoryType } from '@/shared/model/mineral.type';
import { shuffleCollection } from '../../utils/shuffle-collection';
import { sortCategories } from '../../utils/sort-categories';

const CategoriesContext = createContext<CategoryType[]>([]);

type Props = {
  children: React.ReactNode;
};

export const CategoriesProvider = ({ children }: Props) => {
  const [isRandom] = useLocalStorage('random-categories', false);
  const [list, setList] = useState<CategoryType[]>([]);

  useEffect(() => {
    const categoriesList = isRandom
      ? shuffleCollection(Categories)
      : sortCategories(Categories, MineralsData);

    setList(categoriesList);
  }, []);

  return (
    <CategoriesContext.Provider value={list}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => useContext(CategoriesContext);
