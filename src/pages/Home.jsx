import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import Programmer from '../models/Programmer';

const Home = () => {

  const adjustProgrammerSceneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [programmerSceneScale, programmerScenePosition, programmerSceneRotaion] = adjustProgrammerSceneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        POpup
      </div> */}
      <Canvas className="w-full h-screen relative" camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Programmer position={programmerScenePosition} scale={programmerSceneScale} rotation={programmerSceneRotaion} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
