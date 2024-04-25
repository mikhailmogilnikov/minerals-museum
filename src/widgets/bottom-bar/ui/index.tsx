'use client';

import { m } from 'framer-motion';
import { MenuButton } from '@/entities/menu';
import { SearchButton } from '@/entities/search';

export const BottomBar = () => {
  return (
    <m.div
      initial={{ opacity: 0, filter: 'blur(24px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      className='fixed bottom-10 right-10 z-20 flex gap-4 origin-bottom-right'
    >
      <SearchButton />
      <MenuButton />
    </m.div>
  );
};
