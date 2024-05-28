'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiFolderBold, PiPlusBold } from 'react-icons/pi';
import { GroupList } from '@/widgets/group-list';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useGroups } from '@/shared/lib/providers/groups-provider';
import { GroupType } from '@/shared/model/mineral.type';
import { CategoryCard } from '@/shared/ui/card';

export const EditCategoriesPage = () => {
  const groups = useGroups();
  const categories = useCategories();

  const [groupsList, setGroupsList] = useState<GroupType[]>([]);

  useEffect(() => {
    if (groups.length > 0) {
      const itemsCopy = [...groups];
      setGroupsList(itemsCopy.reverse());
    }
  }, [groups]);

  const restCategories = categories.filter(
    ({ group }) => typeof group === 'undefined',
  );

  return (
    <div className='w-full flex flex-col gap-12'>
      <div className='w-full flex flex-col md:flex-row gap-4'>
        <Button
          as={Link}
          href='/admin/new/category'
          size='lg'
          color='primary'
          radius='full'
          className='md:w-fit font-medium'
        >
          <PiPlusBold size={18} />
          Добавить категорию
        </Button>
        <Button
          as={Link}
          href='/admin/new/group'
          size='lg'
          radius='full'
          className='md:w-fit font-medium'
        >
          <PiFolderBold size={18} />
          Создать группу
        </Button>
      </div>

      {groupsList.map((group) => (
        <GroupList
          key={group.id}
          group={group}
          isEditable
          href='/admin/edit/category'
        />
      ))}

      <div className='w-full flex flex-col gap-8'>
        <h5 className='text-2xl lg:text-4xl font-semibold'>
          Категории без группы
        </h5>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
          {restCategories.map(({ id, name }) => (
            <div className='w-full aspect-[3/4] flex-shrink-0'>
              <CategoryCard
                key={id}
                id={id}
                name={name}
                href='/admin/edit/category'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
