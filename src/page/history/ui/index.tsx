'use client';

import { PiMagnifyingGlass } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';
import { MineralsList } from '@/widgets/minerals-list';
import { ViewsCount } from '@/entities/views-count';
import { useItems } from '@/shared/lib/providers/items-provider';
import { MineralType } from '@/shared/model/mineral.type';
import { Placeholder } from '@/shared/ui/placeholder';

export const HistoryPage = () => {
  const [itemsIds] = useLocalStorage<number[]>('visited-items', []);
  const items = useItems();

  const collection =
    itemsIds?.map((id) => items.find((mineral) => mineral.id === id)) ||
    [];

  return (
    <>
      <ViewsCount />

      {collection.length > 0 ? (
        <MineralsList list={collection as MineralType[]} />
      ) : (
        <Placeholder
          icon={<PiMagnifyingGlass size={60} className='mt-4' />}
          title='Пока тут пусто'
          desc='Пополните Вашу коллекцию, изучив один из экспонатов'
        />
      )}
    </>
  );
};
