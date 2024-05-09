import { Input } from '@nextui-org/input';
import { m, useWillChange } from 'framer-motion';
import { useState } from 'react';
import { PiMagnifyingGlassBold, PiXBold } from 'react-icons/pi';
import { useDebounce } from 'react-use';
import { SearchModalFormAnimationVariants } from '../config/animation-variants';

type Props = {
  setDebouncedValue: (text: string) => void;
  handleClose: () => void;
  setIsLoading: (bool: boolean) => void;
};

export const SearchInput = ({
  setDebouncedValue,
  handleClose,
  setIsLoading,
}: Props) => {
  const [value, setValue] = useState('');
  const willChange = useWillChange();

  useDebounce(
    () => {
      setDebouncedValue(value);
      setIsLoading(false);
    },
    1000,
    [value],
  );

  return (
    <m.form
      variants={SearchModalFormAnimationVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      style={{ willChange }}
      className='w-full h-[68px] md:h-28 px-4 sm:px-8 md:px-12 lg:px-24 pt-4 md:pt-12 max-md:mt-4 flex gap-4 md:gap-8'
    >
      <Input
        value={value}
        onChange={({ currentTarget }) => {
          setIsLoading(true);
          setValue(currentTarget.value);
        }}
        autoFocus
        placeholder='Поиск'
        startContent={
          <PiMagnifyingGlassBold className='w-auto h-6 opacity-50' />
        }
        classNames={{
          base: 'shadow-base rounded-full',
          inputWrapper:
            'w-full h-full px-6 md:px-8 rounded-full shadow-base !bg-default shadow-base',
          input: 'ml-2 md:ml-4 text-lg md:text-xl font-medium',
        }}
      />

      <button
        type='button'
        aria-label='close'
        onClick={handleClose}
        className='h-full aspect-square rounded-full flex items-center justify-center bg-default shadow-base hover:shadow-hover active:shadow-none hover:scale-105 active:scale-95 transition-all'
      >
        <PiXBold className='w-auto h-[40%]' />
      </button>
    </m.form>
  );
};
