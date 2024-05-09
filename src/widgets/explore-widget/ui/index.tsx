import { useMotionValue } from 'framer-motion';
import { useState } from 'react';
import { PiQuestionBold } from 'react-icons/pi';
import { ClosableNotification } from '@/shared/ui/closable-notification';
import { ExploreCard } from './card';
import { ExploreControls } from './controls';

export const ExploreWidget = () => {
  const x = useMotionValue(0);
  const [isClosable, setIsClosable] = useState(false);

  const handleDragEnd = (_: any, info: any) => {
    setIsClosable(false);
  };

  return (
    <div className='w-full h-min pt-4 flex flex-col gap-8 items-center justify-center'>
      <ExploreCard
        x={x}
        handleDragEnd={handleDragEnd}
        setIsClosable={setIsClosable}
      />
      <ExploreControls isClosable={isClosable} />
      <ClosableNotification
        icon={<PiQuestionBold size={20} className='flex-shrink-0' />}
      >
        Потяните карточку налево или направо чтобы перейти к следующему
        экспонату.
      </ClosableNotification>
    </div>
  );
};
