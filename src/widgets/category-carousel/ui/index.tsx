import Link from 'next/link';
import { PiCaretRightBold } from 'react-icons/pi';
import { Carousel } from '@/entities/carousel';
import { CategoryType, MineralType } from '@/shared/model/mineral.type';

type Props = {
  category: CategoryType;
  collection: MineralType[];
};

export const CategoryCarousel = ({ category, collection }: Props) => {
  return (
    <div className='w-screen flex flex-col gap-3 col-span-2 -ml-24'>
      <Link
        href={`/category/${category.id}`}
        className='w-full flex justify-between items-center px-24'
      >
        <h3 className='text-2xl font-semibold'>{category.name}</h3>
        <button
          type='button'
          aria-label={category.name}
          className='p-2 rounded-full bg-default'
        >
          <PiCaretRightBold size={24} />
        </button>
      </Link>

      <Carousel collection={collection} className='category' />
    </div>
  );
};
