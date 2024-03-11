import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';
import Programmer from '../models/Programmer';
import Sky from '../models/Sky';

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(null);

  const adjustProgrammerSceneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-0, 1, -7];
    let rotation = [0.66, 7.5, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [programmerSceneScale, programmerScenePosition, programmerSceneRotaion] =
    adjustProgrammerSceneForScreenSize();

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
            rotation={programmerSceneRotaion}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
