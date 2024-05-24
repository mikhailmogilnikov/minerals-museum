import { PropsWithChildren } from 'react';
import { CategoriesProvider } from '../categories-provider';
import { GroupsProvider } from '../groups-provider';
import { HomeCategoriesProvider } from '../home-categories-provider';
import { ItemsProvider } from '../items-provider';

export const DataProvider = ({ children }: PropsWithChildren) => {
  return (
    <ItemsProvider>
      <CategoriesProvider>
        <GroupsProvider>
          <HomeCategoriesProvider>{children}</HomeCategoriesProvider>
        </GroupsProvider>
      </CategoriesProvider>
    </ItemsProvider>
  );
};
