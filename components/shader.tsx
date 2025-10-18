"use client";
import { Canvas } from "@react-three/fiber";
import ParticlesCursorAnimation from "./particle-animation";

export default function Shader() {
  return (
    <main className="w-full aspect-square max-h-[256px]">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 35 }}
        gl={{ antialias: true }}
      >
        <ParticlesCursorAnimation />
      </Canvas>
    </main>
  );
}
