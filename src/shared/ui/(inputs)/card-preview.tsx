import { memo } from 'react';
import { Card } from '@/shared/ui/card';

type Props = {
  image: File | string;
  title: string;
};

export const CardPreview = memo(({ image, title }: Props) => {
  return (
    <div className='w-full flex flex-col gap-4 items-center '>
      <p className='text-2xl font-semibold mb-4'>Предпросмотр карточки</p>
      <div className='w-72 aspect-[3/4] relative'>
        <div className='absolute w-52 h-52 z-10 rounded-full border-4 border-dotted border-black/20 dark:border-white/20 top-10 left-10' />
        <Card
          title={title}
          img={typeof image === 'string' ? image : URL.createObjectURL(image)}
          path=''
        />
      </div>
      <p className='font-medium opacity-50 max-w-[420px] text-center'>
        Старайтесь держать изображение в рамках круга, обозначенного пунктирной
        линией. Воспользуйтесь возможностью &quot;Переснять миниатюру&quot; для
        подгонки размеров.
      </p>
    </div>
  );
});
