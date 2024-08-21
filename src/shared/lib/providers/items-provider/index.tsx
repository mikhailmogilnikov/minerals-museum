/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useContext, useEffect, useState } from 'react';
import axios from '@/shared/config/axios';
import { MineralType } from '@/shared/model/mineral.type';

const ItemsContext = createContext<MineralType[]>([]);

type Props = {
  children: React.ReactNode;
};

export const ItemsProvider = ({ children }: Props) => {
  const [list, setList] = useState<MineralType[]>([]);

  useEffect(() => {
    axios.get<MineralType[]>('items/').then((resp) => setList(resp.data));
  }, []);

  return <ItemsContext.Provider value={list}>{children}</ItemsContext.Provider>;
};

export const useItems = () => useContext(ItemsContext);
