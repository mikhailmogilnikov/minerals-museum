'use client';

import { ScrollShadow } from '@nextui-org/scroll-shadow';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Carousel } from '@/entities/carousel';
import { MineralsData } from '@/shared/api/minerals-data';
import { findSimilar } from '@/shared/lib/utils/find-similar';
import { MineralType } from '@/shared/model/mineral.type';
import { Chip } from '@/shared/ui/chip';

const DynamicThreeModelViewer = dynamic(
  () =>
    import('@/widgets/three-model-viewer').then((mod) => mod.ThreeModelViewer),
  { ssr: false },
);

type Props = {
  mineralId: string;
};

export const MineralPage = ({ mineralId }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mineral = MineralsData.find(
    (currMineral) => currMineral.id === Number(mineralId),
  );

  const similarMinerals = findSimilar(mineral as MineralType, MineralsData);

  return (
    <main className='w-screen h-dvh flex overflow-hidden'>
      <div className='w-full flex items-center justify-center relative cursor-grab'>
        <DynamicThreeModelViewer
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          model={mineral?.model as string}
        />
      </div>

      <div className='w-[1px] h-dvh bg-black/10 dark:bg-white/10 flex-shrink-0' />

      <ScrollShadow className='w-full h-dvh flex flex-col gap-8 p-10'>
        <h1 className='text-3xl md:text-5xl font-bold'>{mineral?.name}</h1>

        {mineral?.description && (
          <h2 className='md:text-xl font-medium opacity-50'>
            {mineral.description}
          </h2>
        )}

        {(mineral?.specs.length || 0) > 0 && (
          <div className='w-full flex flex-col gap-4 mt-6'>
            <h3 className='text-xl font-semibold'>Характеристики</h3>
            <div className='w-full flex flex-col gap-2'>
              {mineral?.specs.map(({ title, content }) => (
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
            {mineral?.categories.map((category) => (
              <Chip key={category} categoryId={category} />
            ))}
          </div>
        </div>

        {similarMinerals.length > 0 && (
          <div className='w-full flex flex-col gap-4 mt-6 -ml-10'>
            <h3 className='text-xl font-semibold pl-10'>Похожие минералы</h3>
            <Carousel
              collection={similarMinerals as MineralType[]}
              className='mineral'
            />
          </div>
        )}
      </ScrollShadow>
    </main>
  );
};
