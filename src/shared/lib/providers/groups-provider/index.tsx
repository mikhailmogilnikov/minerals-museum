/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useContext, useEffect, useState } from 'react';
import { GroupsData } from '@/shared/api/groups-data';
import { GroupType } from '@/shared/model/mineral.type';

const GroupsContext = createContext<GroupType[]>([]);

type Props = {
  children: React.ReactNode;
};

export const GroupsProvider = ({ children }: Props) => {
  const [list, setList] = useState<GroupType[]>([]);

  useEffect(() => {
    const response = GroupsData;
    setList(response);
  }, []);

  return (
    <GroupsContext.Provider value={list}>{children}</GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
