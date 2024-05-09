import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import {
  PiArrowCircleUpBold,
  PiCaretLeftBold,
  PiCaretRightBold,
} from 'react-icons/pi';

type Props = {
  isClosable: boolean;
};

export const ExploreControls = ({ isClosable }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/minerals/9');
  };

  return (
    <div className='flex gap-4'>
      <Button
        startContent={<PiCaretLeftBold size={20} />}
        radius='full'
        isIconOnly
        className='shadow-base'
      />

      <Button
        onClick={handleClick}
        radius='full'
        className='shadow-base font-semibold'
        startContent={<PiArrowCircleUpBold size={20} />}
      >
        Изучить
      </Button>
      <Button
        endContent={<PiCaretRightBold size={20} />}
        radius='full'
        color={isClosable ? 'primary' : 'default'}
        isIconOnly
        className='shadow-base'
      />
    </div>
  );
};
