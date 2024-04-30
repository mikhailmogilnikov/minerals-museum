import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { PiListBold } from 'react-icons/pi';
import { MenuModal } from './menu-modal';

export const MenuButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpen = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <Button
        isIconOnly
        onPress={handleOpen}
        className='w-14 h-14 bg-default/80 rounded-full backdrop-blur-xl flex items-center justify-center shadow-base data-[hover]:opacity-100 flex-shrink-0 '
      >
        <PiListBold className='w-[40%] h-auto' />
      </Button>
      <MenuModal isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </>
  );
};
