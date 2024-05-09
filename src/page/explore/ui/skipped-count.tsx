import { CircularProgress } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { MineralsData } from '@/shared/api/minerals-data';

type Props = {
  updater: number;
};

export const SkippedCount = ({ updater }: Props) => {
  const [viewedItemsIds, setViewedItemsIds] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('explore-viewed-items');
    const parsedItems = JSON.parse(items || '[]');
    setViewedItemsIds(parsedItems);
  }, [updater]);

  const itemsCount = MineralsData.length;
  const viewedItemsCount = viewedItemsIds.length;

  const viewsPercentage = Math.round((viewedItemsCount / itemsCount) * 100);

  return (
    <div className='w-full flex gap-4 md:gap-6'>
      <CircularProgress
        classNames={{
          svg: 'w-20 h-20 md:w-28 md:h-28',
          value: 'text-xl md:text-2xl font-semibold',
        }}
        value={viewsPercentage}
        color='default'
        strokeWidth={3}
        showValueLabel
        aria-label='Views circular'
      />
      <div className='flex flex-col gap-1 justify-center'>
        <h3 className='text-xl font-semibold'>Просмотрено карточек</h3>
        <p className='opacity-50 font-meduim'>
          {viewedItemsCount} / {itemsCount}
        </p>
      </div>
    </div>
  );
};
