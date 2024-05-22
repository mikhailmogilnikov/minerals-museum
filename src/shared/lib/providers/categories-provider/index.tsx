/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { Categories } from '@/shared/api/minerals-data';
import { CategoryType } from '@/shared/model/mineral.type';

const CategoriesContext = createContext<CategoryType[]>([]);

type Props = {
  children: React.ReactNode;
};

export const CategoriesProvider = ({ children }: Props) => {
  const [list, setList] = useState<CategoryType[]>([]);

  useEffect(() => {
    const categoriesList = Categories;
    setList(categoriesList);
  }, []);

  return (
    <CategoriesContext.Provider value={list}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => useContext(CategoriesContext);
