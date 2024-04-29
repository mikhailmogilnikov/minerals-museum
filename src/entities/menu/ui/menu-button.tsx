import { Button } from '@nextui-org/button';
import { PiListBold } from 'react-icons/pi';

export const MenuButton = () => {
  return (
    <Button
      isIconOnly
      className='w-14 h-14 bg-default/80 rounded-full backdrop-blur-xl flex items-center justify-center shadow-base data-[hover]:opacity-100 flex-shrink-0'
    >
      <PiListBold className='w-[40%] h-auto' />
    </Button>
  );
};
