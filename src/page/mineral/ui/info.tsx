import { Carousel } from '@/entities/carousel';
import { useItems } from '@/shared/lib/providers/items-provider';
import { findSimilar } from '@/shared/lib/utils/find-similar';
import { MineralType } from '@/shared/model/mineral.type';
import { Chip } from '@/shared/ui/chip';
import { TextExpand } from '@/shared/ui/text-expand/ui';

type Props = {
  mineral: MineralType;
};

export const MineralInfo = ({ mineral }: Props) => {
  const items = useItems();
  const similarMinerals = findSimilar(mineral as MineralType, items);

  return (
    <div className='absolute top-0 right-0 w-full lg:w-1/2 mt-[70vh] lg:mt-0 lg:h-dvh flex flex-col gap-8 p-4 md:p-10 max-md:pt-10 pb-16 lg:overflow-y-scroll overflow-x-hidden'>
      <h1 className='text-3xl md:text-5xl font-bold select-text first-letter:uppercase'>
        {mineral.name}
      </h1>

      {mineral.description && <TextExpand text={mineral.description} />}

      {(mineral.specs.length || 0) > 0 && (
        <div className='w-full flex flex-col gap-4 mt-6'>
          <h3 className='text-xl font-semibold'>Характеристики</h3>
          <div className='w-full flex flex-col gap-2'>
            {mineral.specs.map(({ title, content }) => (
              <h5
                key={title}
                className='font-medium select-text first-letter:uppercase'
              >
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
          <h3 className='text-xl font-semibold pl-4 md:pl-10'>Похожее</h3>
          <Carousel
            collection={similarMinerals as MineralType[]}
            className='mineral'
          />
        </div>
      )}
    </div>
  );
};
