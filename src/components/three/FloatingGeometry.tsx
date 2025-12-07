import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
    }
    
    if (icosaRef.current) {
      icosaRef.current.rotation.x = t * 0.1;
      icosaRef.current.rotation.z = t * 0.2;
    }
    
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.15;
      octaRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <>
      {/* Main Torus */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={torusRef} position={[3, 1, -2]}>
          <torusGeometry args={[1.5, 0.4, 32, 64]} />
          <MeshDistortMaterial
            color="#00d4ff"
            transparent
            opacity={0.6}
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Icosahedron */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh ref={icosaRef} position={[-4, -1, -3]}>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.5}
            roughness={0.2}
            metalness={0.9}
            wireframe
          />
        </mesh>
      </Float>

      {/* Octahedron */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={octaRef} position={[5, -2, -5]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.4}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      </Float>

      {/* Small decorative spheres */}
      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1 + i * 0.2} floatIntensity={0.5 + i * 0.1}>
          <mesh
            position={[
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 8,
              -5 - Math.random() * 5
            ]}
          >
            <sphereGeometry args={[0.15 + Math.random() * 0.1, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#00d4ff" : "#8b5cf6"}
              emissive={i % 2 === 0 ? "#00d4ff" : "#8b5cf6"}
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

export default FloatingGeometry;
