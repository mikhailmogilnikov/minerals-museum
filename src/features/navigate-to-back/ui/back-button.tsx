'use client';

import { AnimatePresence, m } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { PiCaretLeftBold } from 'react-icons/pi';
import { BackRoutes } from '../config/back-routes';

export const NavigateBackButton = () => {
  const { back } = useRouter();
  const pathname = usePathname();

  const normalizedPath = pathname.slice(3) === '' ? '/' : pathname.slice(3);

  const flatRoute = normalizedPath.split('/').slice(1).join('/');

  const isBackableRoute = BackRoutes.some((route) => {
    const regex = new RegExp(route);
    return regex.test(flatRoute);
  });

  const handleClick = () => {
    back();
  };

  return (
    <AnimatePresence>
      {isBackableRoute && (
        <m.button
          initial={{ opacity: 0, filter: 'blur(24px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(24px)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='backdrop-blur-2xl bg-default/70 shadow-base fixed flex gap-2 items-center top-10 left-10 rounded-full pl-2 pr-4 py-1 z-50 font-medium text-lg'
          onClick={handleClick}
        >
          <PiCaretLeftBold className='w-auto h-1/2' />
          Назад
        </m.button>
      )}
    </AnimatePresence>
  );
};
