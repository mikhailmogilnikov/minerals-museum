/* eslint-disable @conarti/feature-sliced/layers-slices */

import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { m } from 'framer-motion';
import Link from 'next/link';
import { ChangeLanguage } from '@/features/change-language';
import { ChangeTheme } from '@/features/change-theme';
import { CleanHistoryButton } from '@/features/clean-views-history';

type Props = {
  handleClose: () => void;
};

export const MenuControls = ({ handleClose }: Props) => {
  return (
    <m.div
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',

        transition: { delay: 0.3, ease: [0.1, 1, 0.1, 1], duration: 1 },
      }}
      exit={{
        y: 70,
        opacity: 0,
        filter: 'blur(30px)',
        transition: { duration: 0.3 },
      }}
      className='p-4 sm:p-6 xl:p-24 max-md:pt-10 w-full box-border md:box-content md:w-[400px] flex flex-col gap-4 z-20 origin-bottom overflow-y-scroll'
    >
      <Button
        as={Link}
        onPress={() => handleClose()}
        href='/login'
        size='lg'
        className='w-full mb-10 font-medium shadow-base'
      >
        Войти
      </Button>
      <div className='flex justify-between items-center'>
        <h6 className='font-medium'>Оформление</h6>
        <ChangeTheme />
      </div>

      <Divider />

      <div className='flex justify-between items-center mb-10'>
        <h6 className='font-medium'>Язык</h6>
        <ChangeLanguage />
      </div>

      <CleanHistoryButton />
    </m.div>
  );
};
