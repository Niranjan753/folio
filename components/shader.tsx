"use client";
import { Canvas } from "@react-three/fiber";
import ParticlesCursorAnimation from "./particle-animation";

export default function Shader() {
  return (
    <main className="w-full aspect-auto mt-[-100px]">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 35 }}
        gl={{ antialias: true }}
      >
        {/* <color attach="background" args={["#000000"]} /> */}
        <ParticlesCursorAnimation />
      </Canvas>
    </main>
  );
}
