'use client';

import { useState } from 'react';
import { ExploreWidget } from '@/widgets/explore-widget';
import { ExploreInfo } from './info';

export const ExplorePage = () => {
  const [updater, setUpdater] = useState(0);

  const incUpdater = () => {
    setUpdater(updater + 1);
  };

  return (
    <div className='w-full flex flex-col lg:flex-row gap-8'>
      <ExploreWidget incUpdater={incUpdater} />
      <ExploreInfo updater={updater} />
    </div>
  );
};
