import { Button } from '@nextui-org/button';
import { PiXBold } from 'react-icons/pi';

type Props = {
  handleClose: () => void;
};

export const MenuCloseButton = ({ handleClose }: Props) => {
  return (
    <Button
      isIconOnly
      onPress={handleClose}
      className='w-14 h-14 bg-default/80 rounded-full backdrop-blur-xl flex items-center justify-center shadow-base data-[hover]:opacity-100 flex-shrink-0 absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30'
    >
      <PiXBold className='w-[40%] h-auto' />
    </Button>
  );
};
