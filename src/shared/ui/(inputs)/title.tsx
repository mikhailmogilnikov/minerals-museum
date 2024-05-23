import { Input } from '@nextui-org/input';
import { memo } from 'react';

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export const InputTitle = memo(({ value, setValue }: Props) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <p className='font-medium opacity-50'>Название</p>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Название экспоната'
        size='lg'
        classNames={{ inputWrapper: '!bg-default' }}
      />
    </div>
  );
});
