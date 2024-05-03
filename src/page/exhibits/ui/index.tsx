'use client';

import { Button } from '@nextui-org/button';
import { clsx } from 'clsx';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import { useLocalStorage } from 'react-use';
import { MineralsData } from '@/shared/api/minerals-data';
import { Card } from '@/shared/ui/card';

export const ExhibitsPage = () => {
  const sortedCollection = MineralsData.sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const [isFade, setIsFade] = useLocalStorage<boolean>('is-fadeble', false);
  const [visited] = useLocalStorage<number[]>('visited-items', []);

  const handleSetFade = () => {
    setIsFade(!isFade);
  };

  return (
    <>
      <Button
        onPress={handleSetFade}
        size='md'
        color={isFade ? 'primary' : 'default'}
        className='w-min rounded-2xl font-medium shadow-base'
      >
        {isFade ? <PiEyeBold size={20} /> : <PiEyeClosedBold size={20} />}
        Затемнять просмотренные
      </Button>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 -mt-2'>
        {sortedCollection.map(({ name, id, img }) => {
          const isFaded = isFade && visited?.includes(id);

          const cardStyles = clsx('w-full aspect-[3/4] transition-opacity', {
            'opacity-50': isFaded,
            'opacity-100': !isFaded,
          });

          return (
            <div key={id} className={cardStyles}>
              <Card title={name} img={img} path={`/minerals/${id}`} />
            </div>
          );
        })}
      </div>
    </>
  );
};
