'use client';

import { MineralsList } from '@/widgets/minerals-list';
import { CarouselCategory } from '@/entities/carousel';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useGroups } from '@/shared/lib/providers/groups-provider';
import { useItems } from '@/shared/lib/providers/items-provider';
import { TextExpand } from '@/shared/ui/text-expand/ui';

type Props = {
  lng: string;
  categoryId: string;
};

export const CategoryPage = ({ lng, categoryId }: Props) => {
  const groups = useGroups();
  const categories = useCategories();
  const items = useItems();

  const category = categories.find(
    (currCategory) => currCategory.id === Number(categoryId),
  );

  const group = groups.find(({ id }) => category?.group === id);
  const groupCategories = categories.filter(
    ({ group: currGroupId }) => currGroupId === group?.id,
  );
  const filteredGroupCategories = groupCategories
    .filter(
      (cat) =>
        items.some(({ categories: currCats }) => currCats.includes(cat.id)) &&
        cat.id !== category?.id,
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const collection = items.filter(({ categories: collectionCategories }) =>
    collectionCategories.includes(Number(categoryId)),
  );

  const sortedCollection = collection.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <main className='w-full min-h-screen flex flex-col gap-12 md:gap-16 p-4 sm:p-6 xl:p-24 !pb-32'>
      <div className='flex flex-col gap-5 md:gap-8 mt-14 xl:mt-0'>
        <h1 className='text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold'>
          {category?.name}
        </h1>
        <TextExpand text={category?.description as string} />
      </div>
      {group && (
        <div className='w-full flex flex-col gap-4 -ml-4 sm:-ml-6 xl:-ml-24'>
          <h5 className='w-[calc(100%+16px)] text-xl font-semibold pl-4 sm:pl-6 xl:pl-24'>
            {group.name}
          </h5>

          <CarouselCategory
            collection={filteredGroupCategories}
            className='category'
          />
        </div>
      )}
      <h5 className='text-xl font-semibold -mb-4 md:-mb-6'>Экспонаты</h5>
      <MineralsList list={sortedCollection} />
    </main>
  );
};
