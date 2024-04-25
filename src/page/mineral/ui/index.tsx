'use client';

import { m } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MineralsData } from '@/shared/api/minerals-data';
import { MineralType } from '@/shared/model/mineral.type';
import { ThreeViewerDesktopAnimationVariants } from '../config/animation-variants';
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

  const mineral = MineralsData.find(
    (currMineral) => currMineral.id === Number(mineralId),
  );

  return (
    <main className='w-screen h-dvh flex overflow-hidden'>
      <m.div
        variants={ThreeViewerDesktopAnimationVariants}
        transition={{ ease: [0.1, 0.9, 0.1, 0.95], duration: 0.7 }}
        initial='static'
        animate={isExpanded ? 'fullscreen' : 'static'}
        className='h-full absolute top-0 left-0 flex items-center justify-center cursor-grab bg-[--bg] z-10 border-r-1 border-primary/10 box-content'
      >
        <DynamicThreeModelViewer
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          model={mineral?.model as string}
        />
      </m.div>

      <MineralInfo mineral={mineral as MineralType} />
    </main>
  );
};
