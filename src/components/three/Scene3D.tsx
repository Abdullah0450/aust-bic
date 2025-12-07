import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleField from './ParticleField';
import FloatingGeometry from './FloatingGeometry';

interface Scene3DProps {
  className?: string;
  showGeometry?: boolean;
}

const Scene3D = ({ className = '', showGeometry = true }: Scene3DProps) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />
          
          <ParticleField count={600} spread={30} />
          {showGeometry && <FloatingGeometry />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
