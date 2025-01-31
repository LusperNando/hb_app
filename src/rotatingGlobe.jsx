import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const RotatingGlobe = () => {
  const globeRef = useRef();

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <Sphere args={[1, 32, 32]} ref={globeRef} scale={2}>
        <MeshDistortMaterial
          color="#0077ff"
          attach="material"
          distort={0.2}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};

export default RotatingGlobe;
