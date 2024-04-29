/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { AnimatePresence, m } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { PiCaretLeftBold } from 'react-icons/pi';
import { useOriginContext } from '@/shared/lib/providers';
import { detectRoute } from '@/shared/lib/utils/detect-route';
import { BackRoutes } from '../config/back-routes';

export const NavigateBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isWithinPage = useOriginContext();

  const isBackableRoute = detectRoute(pathname, BackRoutes);

  const handleClick = useCallback(() => {
    if (isWithinPage) router.back();
    else router.push('/');
  }, [isWithinPage, router]);

  return (
    <AnimatePresence>
      {isBackableRoute && (
        <m.button
          initial={{ opacity: 0, filter: 'blur(24px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{
            opacity: 0,
            filter: 'blur(24px)',
            transition: { duration: 0.3 },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='backdrop-blur-2xl bg-default/70 shadow-base fixed flex gap-2 items-center top-4 left-4 xl:top-10 xl:left-10 rounded-full pl-2 pr-4 py-1 z-40 font-medium text-md md:text-lg'
          onClick={handleClick}
        >
          <PiCaretLeftBold className='w-auto h-1/2' />
          Назад
        </m.button>
      )}
    </AnimatePresence>
  );
};
