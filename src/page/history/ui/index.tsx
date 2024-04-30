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

  return (
    <main className='w-full min-h-screen flex flex-col gap-8 p-4 sm:p-6 xl:p-24 !pb-32'>
      <div className='flex flex-col gap-3 md:gap-8 mt-14 xl:mt-0'>
        <h1 className='text-[24px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold'>
          История просмотров
        </h1>
      </div>
      {collection.length > 0 ? (
        <MineralsList list={collection as MineralType[]} />
      ) : (
        <Placeholder
          icon={<PiMagnifyingGlass size={60} className='mt-10' />}
          title='Пока тут пусто'
          desc='Пополните Вашу коллекцию, изучив один из экспонатов'
        />
      )}
    </main>
  );
};
