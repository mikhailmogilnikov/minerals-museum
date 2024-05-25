'use client';

import { GroupList } from '@/widgets/group-list';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useGroups } from '@/shared/lib/providers/groups-provider';
import { useItems } from '@/shared/lib/providers/items-provider';
import { CategoryCard } from '@/shared/ui/card';

type Props = {
  lng: string;
};

export const CategoriesPage = ({ lng }: Props) => {
  const groups = useGroups();
  const categories = useCategories();
  const items = useItems();

  const filteredGroups = groups
    .filter(({ id }) => categories.some((cat) => cat.group === id))
    .sort((a, b) => a.name.localeCompare(b.name));

  const restCategories = categories.filter(
    ({ group }) => typeof group === 'undefined',
  );

  const filteredRestCategories = restCategories
    .filter((cat) =>
      items.some(({ categories: currCats }) => currCats.includes(cat.id)),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className='w-full flex flex-col gap-16'>
      {filteredGroups.map((group) => (
        <GroupList key={group.id} group={group} hideEmpty />
      ))}

      <div className='w-full flex flex-col gap-8'>
        <h5 className='text-2xl lg:text-4xl font-semibold'>
          Остальные категории
        </h5>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8'>
          {filteredRestCategories.map(({ id, name }) => (
            <div className='w-full aspect-[3/4] flex-shrink-0'>
              <CategoryCard id={id} name={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
