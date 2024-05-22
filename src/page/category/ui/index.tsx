'use client';

import { MineralsList } from '@/widgets/minerals-list';
import { useCategories } from '@/shared/lib/providers/categories-provider';
import { useItems } from '@/shared/lib/providers/items-provider';
import { TextExpand } from '@/shared/ui/text-expand/ui';

type Props = {
  lng: string;
  categoryId: string;
};

export const CategoryPage = ({ lng, categoryId }: Props) => {
  const categories = useCategories();
  const items = useItems();

  const category = categories.find(
    (currCategory) => currCategory.id === Number(categoryId),
  );

  const collection = items.filter(
    ({ categories: collectionCategories }) =>
      collectionCategories.includes(Number(categoryId)),
  );

  const sortedCollection = collection.sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <main className='w-full min-h-screen flex flex-col gap-8 md:gap-16 p-4 sm:p-6 xl:p-24 !pb-32'>
      <div className='flex flex-col gap-5 md:gap-8 mt-14 xl:mt-0'>
        <h1 className='text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold'>
          {category?.name}
        </h1>
        <TextExpand text={category?.description as string} />
      </div>
      <MineralsList list={sortedCollection} />
    </main>
  );
};
