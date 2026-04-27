"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  Torus,
  MeshWobbleMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color, type }) {
  const meshRef = useRef(THREE.Mesh);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 8;
    meshRef.current.rotation.y = Math.sin(t / 4) / 8;
    meshRef.current.position.y = position[1] + Math.sin(t / 2) / 10;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      {type === "donut" && (
        <Torus ref={meshRef} position={position} args={[0.5, 0.2, 16, 100]}>
          <meshStandardMaterial color={color} roughness={0.1} metalness={0.2} />
        </Torus>
      )}
      {type === "sphere" && (
        <Sphere ref={meshRef} position={position} args={[0.4, 32, 32]}>
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={0.3}
            radius={1}
          />
        </Sphere>
      )}
      {type === "blob" && (
        <Sphere ref={meshRef} position={position} args={[0.6, 32, 32]}>
          <MeshWobbleMaterial color={color} factor={0.4} speed={1} />
        </Sphere>
      )}
    </Float>
  );
}

function Scene() {
  const shapes = useMemo(
    () => [
      {
        position: [-2, 1, -1],
        color: "#D79A58",
        type: "donut",
      },
      {
        position: [2, -1, -2],
        color: "#6E393F",
        type: "sphere",
      },
      {
        position: [-1.5, -1.5, -3],
        color: "#CDC0BA",
        type: "blob",
      },
      {
        position: [1.8, 1.5, -2],
        color: "#E5B785",
        type: "donut",
      },
    ],
    [],
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />

      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
