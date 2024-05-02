/* eslint-disable @conarti/feature-sliced/layers-slices */

import { Divider } from '@nextui-org/divider';
import { m } from 'framer-motion';
import { ChangeLanguage } from '@/features/change-language';
import { ChangeTheme } from '@/features/change-theme';
import { ToggleRandomCategories } from '@/features/toggle-random-categories';
import { InfoButton } from '@/shared/ui/info-button';

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
      {/* <Link href='/history' onClick={handleClose}>
        <button
          type='button'
          className='w-[calc(100%+8px)] h-16 rounded-3xl flex items-center bg-default shadow-base px-5 justify-between -ml-1 mb-5 hover:scale-105 hover:shadow-hover active:scale-95 active:shadow-none transition-all'
        >
          <div className='flex gap-2 items-center'>
            <PiClockCounterClockwiseBold
              size={22}
              className='flex-shrink-0 opacity-80'
            />
            <p className='font-medium pl-1'>История просмотров</p>
          </div>

          <PiCaretRightBold className='w-auto h-2/6 opacity-50' />
        </button>
      </Link> */}

      <div className='flex justify-between items-center'>
        <h6 className='font-medium'>Оформление</h6>
        <ChangeTheme />
      </div>

      <Divider />

      <div className='flex justify-between items-center'>
        <h6 className='font-medium'>Язык</h6>
        <ChangeLanguage />
      </div>

      <Divider />

      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <h6 className='font-medium'>Случайные категории</h6>
          <InfoButton>
            При каждой перезагрузке сайта категории на главной странице будут
            перемешаны случайным образом.
          </InfoButton>
        </div>

        <ToggleRandomCategories />
      </div>
    </m.div>
  );
};
