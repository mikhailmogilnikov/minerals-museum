'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PiFolderBold, PiPlusBold } from 'react-icons/pi';
import { GroupList } from '@/widgets/group-list';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useGroups } from '@/shared/lib/providers/groups-provider';
import { CategoryCard } from '@/shared/ui/card';

export const EditCategoriesPage = () => {
  const groups = useGroups();
  const categories = useCategories();

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

      {groups.map((group) => (
        <GroupList key={group.id} group={group} isEditable />
      ))}

      <div className='w-full flex flex-col gap-8'>
        <h5 className='text-2xl lg:text-4xl font-semibold'>
          Категории без группы
        </h5>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
          {restCategories.map(({ id, name }) => (
            <div className='w-full aspect-[3/4] flex-shrink-0'>
              <CategoryCard id={id} name={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
