/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from 'react';
import { MineralsData } from '@/shared/api/minerals-data';
import { MineralType } from '@/shared/model/mineral.type';

const ItemsContext = createContext<MineralType[]>([]);

type Props = {
  children: React.ReactNode;
};

export const ItemsProvider = ({ children }: Props) => {
  const [list, setList] = useState<MineralType[]>([]);

  useEffect(() => {
    const response = MineralsData;
    setList(response);
  }, []);

  return <ItemsContext.Provider value={list}>{children}</ItemsContext.Provider>;
};

export const useItems = () => useContext(ItemsContext);
