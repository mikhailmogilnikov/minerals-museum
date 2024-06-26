/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { m } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useLocalStorage, useMedia } from 'react-use';
import { BASE_URL } from '@/shared/config';
import { useItems } from '@/shared/lib/providers/items-provider';
import { MineralType } from '@/shared/model/mineral.type';
import { ThreeViewerAnimationVariants } from '../config/animation-variants';
import { MineralInfo } from './info';

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
  const [visitedIds, setVisitedIds] = useLocalStorage<number[]>(
    'visited-items',
    [],
  );
  const isMobile = useMedia('(max-width: 1023px)', false);
  const items = useItems();

  useEffect(() => {
    const numMineralId = Number(mineralId);
    const filteredIds =
      visitedIds?.filter((visitedId) => visitedId !== numMineralId) || [];
    const newCollection = [numMineralId, ...filteredIds];

    setVisitedIds(newCollection);
  }, []);

  const mineral = items.find(
    (currMineral) => currMineral.id === Number(mineralId),
  );

  return (
    <main className='w-screen lg:h-dvh flex lg:overflow-hidden'>
      <m.div
        variants={ThreeViewerAnimationVariants(isMobile)}
        transition={{ ease: [0.1, 0.9, 0.1, 0.95], duration: 0.7 }}
        animate={isExpanded ? 'fullscreen' : 'static'}
        className='h-[70vh] lg:h-full w-full lg:w-1/2 absolute top-0 left-0 flex items-center justify-center cursor-grab bg-[--bg] z-10 max-lg:border-b-1 lg:border-r-1 border-primary/10 box-content'
      >
        <DynamicThreeModelViewer
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          model={`${BASE_URL}${mineral?.model}` as string}
        />
      </m.div>

      <MineralInfo mineral={mineral as MineralType} />
    </main>
  );
};
