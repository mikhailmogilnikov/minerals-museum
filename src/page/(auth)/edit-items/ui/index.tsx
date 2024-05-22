'use client';

import { Button } from '@nextui-org/button';
import { PiPlusCircleBold } from 'react-icons/pi';
import { useItems } from '@/shared/lib/providers/items-provider';
import { Card } from '@/shared/ui/card';

export const EditItemsPage = () => {
  const items = useItems();

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
      <Button className='w-full aspect-[3/4] h-full bg-[--element]'>
        <PiPlusCircleBold size={150} className='opacity-50 flex-shrink-0' />
      </Button>
      {items.map(({ name, id, img }) => (
        <div key={id} className='w-full aspect-[3/4]'>
          <Card title={name} img={img} path={`/minerals/${id}`} />
        </div>
      ))}
    </div>
  );
};
