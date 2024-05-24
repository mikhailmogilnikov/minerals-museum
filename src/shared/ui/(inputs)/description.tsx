import { Textarea } from '@nextui-org/input';
import { memo } from 'react';

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export const InputDescription = memo(({ value, setValue }: Props) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <p className='font-medium opacity-50'>Описание</p>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Вы можете переносить содержимое на новый абзац нажатием Enter.'
        size='lg'
        classNames={{ inputWrapper: '!bg-default' }}
      />
      <p className='font-medium opacity-30'>
        Размещайте в первом абзаце (который виден всегда) короткую, но главную
        информацию. Второй и последующие абзацы описания скрываются под кнопку
        &quot;Раскрыть описание&quot;.
      </p>
    </div>
  );
});
