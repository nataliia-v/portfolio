import React from 'react';
import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3d/galaxy_sky_background.glb';

const Sky = () => {
  const sky = useGLTF(skyScene);

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
