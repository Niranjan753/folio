"use client";
import { Canvas } from "@react-three/fiber";
import ParticlesCursorAnimation from "./particle-animation";

export default function Shader() {
  return (
    <main className="w-full aspect-square max-h-[250px] sm:max-h-[250px] md:max-h-[450px] lg:max-h-[300px]">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 35 }}
        gl={{ antialias: true }}
      >
        <ParticlesCursorAnimation />
      </Canvas>
    </main>
  );
}
