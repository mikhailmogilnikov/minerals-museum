'use client';

import { CircularProgress } from '@nextui-org/progress';
import { Center, OrbitControls, Resize, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Model } from './model';

export const ThreeModelViewer = () => {
  const { progress } = useProgress();

  return (
    <div className='w-full relative'>
      <Suspense
        fallback={
          <div className='w-full h-full flex items-center justify-center'>
            <CircularProgress value={progress} />
          </div>
        }
      >
        <Canvas>
          <Resize scale={4.5}>
            <Center>
              <Model modelPath='/models/amethyst.glb' />
            </Center>
          </Resize>

          <OrbitControls
            autoRotate={false}
            enablePan={false}
            minDistance={2.4}
            maxDistance={20}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};
