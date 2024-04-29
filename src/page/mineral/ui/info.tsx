import { Carousel } from '@/entities/carousel';
import { MineralsData } from '@/shared/api/minerals-data';
import { findSimilar } from '@/shared/lib/utils/find-similar';
import { MineralType } from '@/shared/model/mineral.type';
import { Chip } from '@/shared/ui/chip';

type Props = {
  mineral: MineralType;
};

export const MineralInfo = ({ mineral }: Props) => {
  const similarMinerals = findSimilar(mineral as MineralType, MineralsData);

  return (
    <div className='absolute top-0 right-0 w-full lg:w-1/2 mt-[70vh] lg:mt-0 lg:h-dvh flex flex-col gap-8 p-4 md:p-10 max-md:pt-10 lg:overflow-y-scroll'>
      <h1 className='text-3xl md:text-5xl font-bold'>{mineral.name}</h1>

      {mineral.description && (
        <h2 className='md:text-xl font-medium opacity-50'>
          {mineral.description}
        </h2>
      )}

      {(mineral.specs.length || 0) > 0 && (
        <div className='w-full flex flex-col gap-4 mt-6'>
          <h3 className='text-xl font-semibold'>Характеристики</h3>
          <div className='w-full flex flex-col gap-2'>
            {mineral.specs.map(({ title, content }) => (
              <h5 key={title} className='text-lg font-medium'>
                <span className='opacity-50'>{title}: </span> {content}
              </h5>
            ))}
          </div>
        </div>
      )}

      <div className='w-full flex flex-col gap-4 mt-6'>
        <h3 className='text-xl font-semibold'>Категории</h3>
        <div className='w-full flex gap-3 flex-wrap'>
          {mineral.categories.map((category) => (
            <Chip key={category} categoryId={category} />
          ))}
        </div>
      </div>

      {similarMinerals.length > 0 && (
        <div className='w-full flex flex-col gap-4 mt-6 -ml-4 md:-ml-10'>
          <h3 className='text-xl font-semibold pl-4 md:pl-10'>
            Похожее
          </h3>
          <Carousel
            collection={similarMinerals as MineralType[]}
            className='mineral'
          />
        </div>
      )}
    </div>
  );
};
