import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { SearchModal } from './search-modal';

export const SearchButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpen = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <Button
        onPress={handleOpen}
        className='w-full md:w-56 h-14 bg-default/80 rounded-full backdrop-blur-xl flex items-center justify-start gap-4 px-6 shadow-base data-[hover]:opacity-100'
      >
        <PiMagnifyingGlassBold className='w-auto h-[40%] opacity-50' />
        <p className='text-lg font-medium opacity-50'>Поиск</p>
      </Button>

      <SearchModal isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </>
  );
};
