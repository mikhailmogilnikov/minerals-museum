import Link from 'next/link';
import { CategoryType, MineralType } from '@/shared/model/mineral.type';
import { CardGallery } from './gallery';

type Props = {
  category: CategoryType;
  collection: MineralType[];
};

export const CategoryCard = ({ category, collection }: Props) => {
  return (
    <Link href={`/category/${category.id}`}>
      <button
        type='button'
        className='w-full aspect-[5/4] md:aspect-[16/10] bg-[--element] rounded-3xl md:rounded-4xl shadow-base hover:scale-[1.02] hover:shadow-hover active:scale-[0.98] active:shadow-none relative transition-all overflow-clip max-md:pt-4'
      >
        <div className='absolute top-6 left-6 md:top-8 md:left-8 flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold'>{category.name}</h3>
        </div>
        <CardGallery category={category} collection={collection} />
      </button>
    </Link>
  );
};
