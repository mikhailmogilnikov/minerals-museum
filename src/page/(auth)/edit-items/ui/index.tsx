'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiPlusCircleBold } from 'react-icons/pi';
import { useItems } from '@/shared/lib/providers/items-provider';
import { MineralType } from '@/shared/model/mineral.type';
import { Card } from '@/shared/ui/card';

export const EditItemsPage = () => {
  const items = useItems();
  const [itemsList, setItemsList] = useState<MineralType[]>([]);

  useEffect(() => {
    if (items.length > 0) {
      setItemsList(items.reverse());
    }
  }, [items]);

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
      <Button
        as={Link}
        href='/admin/new/item'
        className='w-full aspect-[3/4] h-full bg-[--element] shadow-base rounded-2xl'
      >
        <PiPlusCircleBold size={150} className='opacity-50 flex-shrink-0 ' />
      </Button>
      {itemsList.map(({ name, id, img }) => (
        <div key={id} className='w-full aspect-[3/4]'>
          <Card title={name} img={img} path={`/admin/edit/item/${id}`} />
        </div>
      ))}
    </div>
  );
};
