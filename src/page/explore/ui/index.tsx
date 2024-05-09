'use client';

import { ExploreWidget } from '@/widgets/explore-widget';

export const ExplorePage = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-8'>
      <ExploreWidget />
      <div className='w-full h-32' />
    </div>
  );
};
