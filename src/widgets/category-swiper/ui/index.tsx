import Link from 'next/link';
import { PiCaretRightBold, PiPlusBold } from 'react-icons/pi';
import { CategoryType, MineralType } from '@/shared/model/mineral.type';
import { Swiper } from './swiper';

type Props = {
  category: CategoryType;
  collection: MineralType[];
};

export const CategorySwiper = ({ category, collection }: Props) => {
  return (
    <div className='w-[100vw] -ml-4 sm:-ml-6 xl:-ml-24 flex flex-col lg:flex-row justify-between gap-2 md:gap-0 lg:gap-24 col-span-2 mb-6 overflow-hidden pb-12'>
      <div className='w-full flex md:flex-col justify-between max-md:items-center md:justify-center gap-4 px-4 sm:px-6 xl:px-24'>
        <h3 className='text-xl md:text-4xl font-semibold '>{category.name}</h3>

        <h4 className='w-full text-md md:text-lg font-medium opacity-50 line-clamp-2 max-md:hidden'>
          {category.description}
        </h4>

        <Link href={`/category/${category.id}`}>
          <button
            type='button'
            className='w-fit max-md:hidden px-5 py-3 rounded-full bg-default flex gap-3 items-center text-lg font-semibold mt-6 hover:scale-105 active:scale-95 transition-all shadow-base hover:shadow-hover active:shadow-none '
          >
            <PiPlusBold size={20} />
            Подробнее
          </button>
          <button
            type='button'
            aria-label={category.name}
            className='p-2 rounded-full bg-default md:hidden'
          >
            <PiCaretRightBold size={24} />
          </button>
        </Link>
      </div>

      <div className='w-[calc(100%+32px)] max-md:pl-[6%] max-lg:sm:pl-[28%] max-md:-ml-4 lg:w-1/3 aspect-square max-h-[400px] flex-shrink-0 max-md:overflow-x-clip xl:pl-[4%]'>
        <Swiper collection={collection} />
      </div>
    </div>
  );
};
