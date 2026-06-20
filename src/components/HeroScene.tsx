"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// A simulated conveyor belt using moving ridges
function ConveyorBelt() {
  const groupRef = useRef<THREE.Group>(null);
  const RIDGE_COUNT = 40;
  const RIDGE_SPACING = 0.5;
  const SPEED = 2;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child) => {
        child.position.z += SPEED * delta;
        if (child.position.z > 10) {
          child.position.z -= RIDGE_COUNT * RIDGE_SPACING;
        }
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* The main belt base */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[4, 0.1, 25]} />
        <meshStandardMaterial color="#111" roughness={0.7} metalness={0.2} />
      </mesh>
      
      {/* Moving ridges */}
      {Array.from({ length: RIDGE_COUNT }).map((_, i) => (
        <mesh 
          key={i} 
          position={[0, 0, -10 + i * RIDGE_SPACING]} 
          receiveShadow
        >
          <boxGeometry args={[3.8, 0.05, 0.2]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function ProxyGlass() {
  const glassRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (glassRef.current) {
      glassRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float
      speed={2} 
      rotationIntensity={0.2} 
      floatIntensity={0.5} 
      floatingRange={[-0.1, 0.1]}
    >
      <mesh ref={glassRef} position={[0, 0, 0]} castShadow>
        {/* Placeholder for a cocktail glass: An inverted cone on a cylinder */}
        <group>
          {/* Bowl */}
          <mesh position={[0, 0.8, 0]}>
            <coneGeometry args={[0.6, 1.2, 32, 1, true]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              transmission={0.9} 
              opacity={1} 
              metalness={0.1} 
              roughness={0.05} 
              ior={1.5} 
              thickness={0.1}
              transparent
            />
          </mesh>
          {/* Liquid inside */}
          <mesh position={[0, 0.7, 0]}>
            <coneGeometry args={[0.5, 1.0, 32]} />
            <meshStandardMaterial color="#D4AF37" transparent opacity={0.8} />
          </mesh>
          {/* Stem */}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              transmission={0.9} 
              transparent
            />
          </mesh>
          {/* Base */}
          <mesh position={[0, -0.4, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
            <meshPhysicalMaterial 
              color="#ffffff" 
              transmission={0.9} 
              transparent
            />
          </mesh>
        </group>
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full">
      <Canvas
        shadows
        camera={{ position: [0, 2, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <fog attach="fog" args={["#0a0a0a", 5, 15]} />
        
        {/* Very low ambient light to keep it dark */}
        <ambientLight intensity={0.1} />
        
        {/* Warm Gold Spotlight from top/front */}
        <spotLight 
          position={[0, 5, 2]} 
          angle={0.4} 
          penumbra={1} 
          intensity={15} 
          color="#D4AF37" 
          castShadow
        />
        
        {/* Cyan/Purple Rim light from back/side */}
        <spotLight 
          position={[-3, 2, -4]} 
          angle={0.6} 
          penumbra={0.8} 
          intensity={20} 
          color="#8A2BE2" 
        />
        <spotLight 
          position={[3, 1, -4]} 
          angle={0.6} 
          penumbra={0.8} 
          intensity={15} 
          color="#00FFFF" 
        />

        <ConveyorBelt />
        <ProxyGlass />
        
        {/* Soft shadow underneath */}
        <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={5} blur={2} />
        
        <Environment preset="city" environmentIntensity={0.1} />
      </Canvas>
    </div>
  );
}
