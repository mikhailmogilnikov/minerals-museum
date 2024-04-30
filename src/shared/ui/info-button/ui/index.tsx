import { Button } from '@nextui-org/button';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import { PiQuestionBold } from 'react-icons/pi';

type Props = {
  children: React.ReactNode;
};

export const InfoButton = ({ children }: Props) => {
  return (
    <Popover
      backdrop='blur'
      classNames={{
        content: 'max-w-72 p-3',
        backdrop: 'bg-white/30 dark:bg-black/30',
      }}
    >
      <PopoverTrigger>
        <Button
          className='w-6 h-6 min-w-5 flex-shrink-0 shadow-base'
          isIconOnly
          radius='full'
        >
          <PiQuestionBold size={16} className='opacity-70' />
        </Button>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
