/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei';

export const Model = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} />;
};
