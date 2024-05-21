"use client";
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import React from "react";
import { DoubleSide } from "three";

const Stickers = () => {
  const texture = useTexture("/models/hybridly-stickers/avatartion.png");
  return (
    <>
      <mesh>
        <planeGeometry />
        <meshPhysicalMaterial
          map={texture}
          transparent
          clearcoat={1}
          roughness={0}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
};

export default function Scene() {
  const { nodes }: any = useGLTF("/models/hybridly-stickers/hybridly.glb");

  return (
    <div className="relative size-[300px] lg:size-[600px] mx-auto bg-gray-6">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
        <OrbitControls target={[0, 0, 0]} />
        <Physics
          // debug={debug}
          interpolate
          gravity={[0, -40, 0]}
          timeStep={1 / 60}
        >
          <group dispose={null}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes?.Object_4?.geometry}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <MeshTransmissionMaterial />
            </mesh>
          </group>
        </Physics>

        <Stickers />

        <ambientLight intensity={2} />
        <Environment preset="city" blur={0} />
      </Canvas>
    </div>
  );
}
