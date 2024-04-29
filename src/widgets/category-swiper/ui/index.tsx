import Link from 'next/link';
import { PiPlusBold } from 'react-icons/pi';
import { CategoryType, MineralType } from '@/shared/model/mineral.type';
import { Swiper } from './swiper';

type Props = {
  category: CategoryType;
  collection: MineralType[];
};

export const CategorySwiper = ({ category, collection }: Props) => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between gap-8 md:gap-24 col-span-2 mb-10'>
      <div className='w-full flex flex-col justify-center gap-4'>
        <h3 className='text-xl md:text-4xl font-semibold '>{category.name}</h3>
        <h4 className='w-full text-lg md:text-xl font-semibold opacity-50 line-clamp-2'>
          {category.description}
        </h4>

        <Link href={`/category/${category.id}`}>
          <button
            type='button'
            className='w-fit px-5 py-3 rounded-full bg-default flex gap-3 items-center text-lg font-semibold mt-6 hover:scale-105 active:scale-95 transition-all shadow-base hover:shadow-hover active:shadow-none '
          >
            <PiPlusBold size={20} />
            Подробнее
          </button>
        </Link>
      </div>

      <div className='w-[calc(100%+32px)] max-md:pl-[6%] max-md:sm:pl-[28%] max-md:-ml-4 md:w-1/3 aspect-square max-h-[400px] flex-shrink-0 max-md:overflow-x-clip'>
        <Swiper collection={collection} />
      </div>
    </div>
  );
};
