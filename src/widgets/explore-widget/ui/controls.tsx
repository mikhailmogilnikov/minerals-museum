import { Button } from '@nextui-org/button';
import { useRouter } from 'next/navigation';
import {
  PiArrowCircleUpBold,
  PiCaretRightBold,
} from 'react-icons/pi';

type Props = {
  isClosable: boolean;
  itemId: number;
  // handleClickBack: () => void;
  // isBackable: boolean;
  handleClickForward: () => void;
};

export const ExploreControls = ({
  isClosable,
  itemId,
  // handleClickBack,
  // isBackable,
  handleClickForward,
}: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/minerals/${itemId}`);
  };

  return (
    <div className='flex gap-4'>
      {/* <Button
        startContent={<PiCaretLeftBold size={20} />}
        radius='full'
        isIconOnly
        className='shadow-base'
        isDisabled={!isBackable}
        onPress={handleClickBack}
      /> */}

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
        onPress={handleClickForward}
        className='shadow-base'
      />
    </div>
  );
};
