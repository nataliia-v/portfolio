import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import Programmer from '../models/Programmer';
import Sky from '../models/Sky';
import Platform from '../models/Platform';

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(null);

  const adjustProgrammerSceneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 1, -7];

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
    } else {
      screenScale = [0.8, 0.8, 0.8];
    }

    return [screenScale, screenPosition];
  };
  
  const adjustPlatformForScreenSize = () => {
    let screenScale;
    let screenPosition = [0, 0, -7];

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [240, 20, 300];
    } else {
      screenScale = [300, 20, 500];
    }

    return [screenScale, screenPosition];
  };

  const [programmerSceneScale, programmerScenePosition] = adjustProgrammerSceneForScreenSize();

  const [platformScale, platformPosition] = adjustPlatformForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        POpup
      </div> */}

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.3, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 6, 1]} intensity={2} />
          <ambientLight intensity={0.1} />
          {/* <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} /> */}

          <Sky />
          <Programmer
            position={programmerScenePosition}
            scale={programmerSceneScale}
            rotation={[0.66, 7.5, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Platform
            position={platformPosition}
            scale={platformScale}
            rotation={[0.66, 7.5, 0]}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
