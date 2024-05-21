"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./modal";

export default function Scene() {
  return (
    <Canvas className="bg-background">
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="studio" />
    </Canvas>
  );
}
