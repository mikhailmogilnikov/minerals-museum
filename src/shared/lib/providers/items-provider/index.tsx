/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from '@/shared/config';
import { MineralType } from '@/shared/model/mineral.type';

const ItemsContext = createContext<MineralType[]>([]);

type Props = {
  children: React.ReactNode;
};

export const ItemsProvider = ({ children }: Props) => {
  const [list, setList] = useState<MineralType[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get<MineralType[]>(`${API_URL}/items/`);
      setList(response.data);
    };

    getItems();
  }, []);

  return <ItemsContext.Provider value={list}>{children}</ItemsContext.Provider>;
};

export const useItems = () => useContext(ItemsContext);
