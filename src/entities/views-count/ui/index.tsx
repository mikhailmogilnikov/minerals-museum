'use client';

import { CircularProgress } from '@nextui-org/progress';
import { useLocalStorage } from 'react-use';
import { MineralsData } from '@/shared/api/minerals-data';

export const ViewsCount = () => {
  const [visitedItems] = useLocalStorage<number[]>('visited-items', []);
  const itemsCount = MineralsData.length;
  const visitedItemsCount = (visitedItems || []).length;

  const viewsPercentage = Math.round((visitedItemsCount / itemsCount) * 100);

  return (
    <div className='w-full flex gap-4 md:gap-6'>
      <CircularProgress
        classNames={{
          svg: 'w-20 h-20 md:w-28 md:h-28',
          value: 'text-xl md:text-2xl font-semibold',
        }}
        value={viewsPercentage}
        color='success'
        strokeWidth={3}
        showValueLabel
        aria-label='Views circular'
      />
      <div className='flex flex-col gap-1 justify-center'>
        <h3 className='text-xl font-semibold'>Изучено экспонатов</h3>
        <p className='opacity-50 font-meduim'>
          {visitedItemsCount} / {itemsCount}
        </p>
      </div>
    </div>
  );
};
