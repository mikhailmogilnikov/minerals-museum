/* eslint-disable react-hooks/exhaustive-deps */

import { m } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PiHouseBold } from 'react-icons/pi';

export const HomeButton = () => {
  const [pagesCounter, setPagesCounter] = useState(0);
  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    setPagesCounter(pagesCounter + 1);
  }, [pathname]);

  const handleClick = () => {
    router.push('/');
  };

  return (
    pagesCounter > 1 && (
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
        className='w-8 md:w-9 aspect-square backdrop-blur-2xl bg-default/70 shadow-base fixed flex gap-2 items-center justify-center top-4 left-[124px] xl:top-10 xl:left-40 rounded-full z-40 font-medium text-md md:text-lg'
        onClick={handleClick}
      >
        <PiHouseBold size={20} />
      </m.button>
    )
  );
};
