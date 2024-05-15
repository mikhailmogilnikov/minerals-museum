'use client';

import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { MenuButton } from '@/entities/menu';
import { SearchButton } from '@/entities/search';
import { useScrollDirection } from '@/shared/lib/hooks/use-scroll-direction';
import { detectRoute } from '@/shared/lib/utils/detect-route';
import { WithoutMenuRoutes } from '../config/without-menu-routes';

export const BottomBar = () => {
  const pathname = usePathname();
  const scrollDir = useScrollDirection();

  const isScrolledDown = scrollDir === 'down';
  const isBackableRoute = detectRoute(pathname, WithoutMenuRoutes);

  return (
    <AnimatePresence>
      {!isScrolledDown && !isBackableRoute && (
        <m.menu
          initial={{ y: '200%' }}
          animate={{ y: 0 }}
          exit={{ y: '200%' }}
          className='fixed max-sm:left-6 md:w-fit bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex gap-4 origin-bottom-right'
        >
          <SearchButton />
          <MenuButton />
        </m.menu>
      )}
    </AnimatePresence>
  );
};
