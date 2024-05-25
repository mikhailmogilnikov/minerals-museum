import { Input } from '@nextui-org/input';
import { memo } from 'react';

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export const InputTitle = memo(({ value, setValue }: Props) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='w-full flex gap-2 items-center'>
        <p className='font-medium opacity-50'>Название</p>
        <div className='w-2 h-2 rounded-full bg-danger shadow-2xl shadow-red-600 mt-[2px]' />
      </div>

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
