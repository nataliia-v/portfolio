import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import scene from '../assets/3d/bunny.glb';

export const Bunny = ({ currentAnimation, ...props }) => {
  const bunnyRef = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, bunnyRef);

  useFrame(() => {
    bunnyRef.current.rotation.y += 0.01;
  });

  useEffect(() => {
    Object.values(actions).forEach(action => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={bunnyRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        {/* <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}> */}
        <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[-Math.PI / 2, 0, 0]}>
              <group name="Armature_39">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Bunny}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Whiskers}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Bunny_38" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(scene);
