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
        className='w-full aspect-[16/10] bg-[--element] rounded-4xl shadow-base hover:scale-[1.02] hover:shadow-hover active:scale-[0.98] active:shadow-none relative transition-all overflow-clip'
      >
        <div className='absolute top-8 left-8 flex flex-col'>
          <h3 className='text-2xl font-semibold'>{category.name}</h3>
        </div>
        <CardGallery category={category} collection={collection} />
      </button>
    </Link>
  );
};
