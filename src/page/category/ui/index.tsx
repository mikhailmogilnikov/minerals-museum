import { MineralsList } from '@/widgets/minerals-list';
import { Categories, MineralsData } from '@/shared/api/minerals-data';

type Props = {
  lng: string;
  categoryId: string;
};

export const CategoryPage = ({ lng, categoryId }: Props) => {
  const category = Categories.find(
    (currCategory) => currCategory.id === Number(categoryId),
  );

  const collection = MineralsData.filter(({ categories }) =>
    categories.includes(Number(categoryId)),
  );

  return (
    <main className='w-full min-h-screen flex flex-col gap-12 p-4 sm:p-6 md:p-12 lg:p-24'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold'>
          {category?.name}
        </h1>
        <h2 className='text-md lg:text-2xl font-medium opacity-60'>
          {category?.description}
        </h2>
      </div>
      <MineralsList list={collection} />
    </main>
  );
};
