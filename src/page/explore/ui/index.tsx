'use client';

import { useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PiCheckBold, PiQuestionBold } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';
import { DraggableCard } from '@/entities/draggable-card';

export const ExplorePage = () => {
  const x = useMotionValue(0);
  const router = useRouter();
  const [visitedItems] = useLocalStorage<number[]>('visited-items', []);

  const handleDragEnd = (_: any, info: any) => {};

  const scale = useTransform(x, [-150, 0, 150], [1, 0.4, 1]);
  // const isWatched =

  const handleClick = () => {
    if (x.get() === 0) {
      router.push('/minerals/9');
    }
  };

  return (
    <div className='w-full flex flex-col lg:flex-row gap-8'>
      <div className='w-full h-min pt-4 flex items-center justify-center'>
        <DraggableCard x={x} onClick={handleClick} onDragEnd={handleDragEnd}>
          {visitedItems?.includes(9) && (
            <div className='absolute bg-success text-white -right-4 -top-2 z-10 px-3 py-1 rounded-full flex gap-2 items-center font-medium shadow-lg shadow-success/30'>
              <PiCheckBold />
              Просмотрено
            </div>
          )}

          <div className='w-full h-full bg-[--element] shadow-base rounded-2xl flex-shrink-0 flex flex-col relative transition-all justify-end'>
            <Image
              draggable={false}
              alt='f'
              src='/ru/images/quartz_geode.webp'
              width={200}
              height={200}
              className='w-full aspect-square absolute top-0'
            />
            <div className='w-full p-4'>
              <h5 className='text-lg font-medium'>Кварцевая жеода</h5>
            </div>
          </div>
        </DraggableCard>
      </div>
      <div className='w-full h-32'>
        <div className='bg-default text-default-600 p-4 rounded-2xl shadow-base flex gap-4 items-center w-fit'>
          <PiQuestionBold size={20} className='flex-shrink-0' />
          <p className='text-sm font-medium '>
            Потяните карточку налево или направо чтобы перейти к следующему
            экспонату.
          </p>
        </div>
      </div>
    </div>
  );
};
