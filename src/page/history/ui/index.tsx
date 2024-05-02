'use client';

import { PiMagnifyingGlass } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';
import { MineralsList } from '@/widgets/minerals-list';
import { MineralsData } from '@/shared/api/minerals-data';
import { MineralType } from '@/shared/model/mineral.type';
import { Placeholder } from '@/shared/ui/placeholder';

export const HistoryPage = () => {
  const [itemsIds] = useLocalStorage<number[]>('visited-items', []);

  const collection =
    itemsIds?.map((id) => MineralsData.find((mineral) => mineral.id === id)) ||
    [];

  return collection.length > 0 ? (
    <MineralsList list={collection as MineralType[]} />
  ) : (
    <Placeholder
      icon={<PiMagnifyingGlass size={60} className='mt-10' />}
      title='Пока тут пусто'
      desc='Пополните Вашу коллекцию, изучив один из экспонатов'
    />
  );
};
