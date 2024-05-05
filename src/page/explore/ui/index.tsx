'use client';

import { m } from 'framer-motion';
import Image from 'next/image';

export const ExplorePage = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-8'>
      <div className='w-full aspect-square flex items-center justify-center'>
        <m.div
          drag
          dragConstraints={{ top: 100, bottom: 100, left: 100, right: 100 }}
          dragSnapToOrigin
          className='w-72 aspect-[3/4]'
        >
          <div className='w-full h-full bg-[--element] shadow-base rounded-2xl flex-shrink-0 flex flex-col hover:scale-[1.02] hover:shadow-hover active:scale-[0.98] active:shadow-none relative transition-all justify-end'>
            <Image
              alt='f'
              src=''
              width={200}
              height={200}
              className='w-full aspect-square absolute top-0'
            />
            <div className='w-full p-4'>
              <h5 className='text-lg font-medium'>ffds</h5>
            </div>
          </div>
        </m.div>
      </div>
      <div className='w-full h-32' />
    </div>
  );
};
