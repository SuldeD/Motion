import React, { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model(props: any) {
  const { nodes }: any = useGLTF("/medias/donut.glb");
  const { viewport } = useThree();
  const torus: any = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
    torus.current.rotation.y += 0.04;
  });

  const materialProps: any = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },

    roughness: { value: 0, min: 0, max: 1, step: 0.1 },

    transmission: { value: 1, min: 0, max: 1, step: 0.1 },

    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },

    chromaticAberration: { value: 0.02, min: 0, max: 1 },

    backside: { value: true },
  });

  return (
    <group {...props} dispose={null} scale={viewport.width / 1.5}>
      <Text
        position={[0, 0.2, -1]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        MUNKHSULD
      </Text>
      <mesh
        ref={torus}
        castShadow
        receiveShadow
        position={[0, 6.189, 2.043]}
        {...nodes.Donut}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
