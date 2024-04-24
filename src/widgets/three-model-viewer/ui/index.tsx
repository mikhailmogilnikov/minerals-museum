import { CircularProgress } from '@nextui-org/progress';
import { Center, OrbitControls, Resize, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { useLocalStorage } from 'react-use';
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
    false,
  );

  const [autoRotate, setAutoRotate] = useState(autoRotateStore);

  const toggleAutoRotate = () => {
    const newAutoRotate = !autoRotate;
    setAutoRotate(newAutoRotate);
    setAutoRotateStore(newAutoRotate);
  };

  const handleClickControl = (e: any) => {
    const {
      currentTarget: { id },
    } = e;

    switch (id) {
      case 'rotate':
        toggleAutoRotate();
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
        <Canvas>
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
      </Suspense>
      <ThreeControls
        isAutoRotate={autoRotate as boolean}
        isFullscreen={isExpanded}
        handleClickControl={handleClickControl}
      />
    </>
  );
};
