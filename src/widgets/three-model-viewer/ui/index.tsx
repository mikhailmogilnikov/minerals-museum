import { CircularProgress } from '@nextui-org/progress';
import { Center, OrbitControls, Resize, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { m } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { ThreeModelAnimationVariants } from '../config/animation-variants';
import { ThreeControls } from './controls';
import { Model } from './model';

type Props = {
  isExpanded: boolean;
  setIsExpanded: (state: boolean) => void;
  model: string;
};

export const ThreeModelViewer = ({
  isExpanded,
  setIsExpanded,
  model,
}: Props) => {
  const { progress } = useProgress();
  const [autoRotateStore, setAutoRotateStore] = useLocalStorage(
    'autoRotate',
    true,
  );
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  }, [isExpanded]);

  const [autoRotate, setAutoRotate] = useState(autoRotateStore);

  const toggleAutoRotate = () => {
    const newAutoRotate = !autoRotate;
    setAutoRotate(newAutoRotate);
    setAutoRotateStore(newAutoRotate);
  };

  const toggleFullscreen = () => {
    setIsExpanded(!isExpanded);
    window.scrollTo({ top: 0 });
  };

  const handleClickControl = (e: any) => {
    const {
      currentTarget: { id },
    } = e;

    switch (id) {
      case 'rotate':
        toggleAutoRotate();
        break;
      case 'fullscreen':
        toggleFullscreen();
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Suspense
        fallback={<CircularProgress aria-label='Spinner' value={progress} />}
      >
        <m.div
          variants={ThreeModelAnimationVariants}
          initial='animating'
          animate={isAnimating ? 'animating' : 'static'}
          className='w-full h-full flex justify-center items-center'
        >
          <Canvas frameloop={autoRotate ? 'always' : 'demand'}>
            <Resize scale={4}>
              <Center>
                <Model modelPath={model} />
              </Center>
            </Resize>
            <OrbitControls
              autoRotate={autoRotate}
              enablePan={false}
              minDistance={2.4}
              maxDistance={20}
            />
          </Canvas>
        </m.div>
      </Suspense>

      <ThreeControls
        isAutoRotate={autoRotate as boolean}
        isFullscreen={isExpanded}
        handleClickControl={handleClickControl}
      />
    </>
  );
};
