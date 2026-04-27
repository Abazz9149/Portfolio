import { useRef, useState, useMemo, memo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Preload, AdaptiveDpr, AdaptiveEvents, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = memo(() => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4);
      meshRef.current.rotation.y = Math.sin(time / 2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <torusKnotGeometry args={[1, 0.3, 100, 24]} />
        <MeshDistortMaterial
          color={hovered ? "#06b6d4" : "#a855f7"}
          speed={3}
          distort={0.4}
          radius={1}
        />
      </mesh>
    </Float>
  );
});

const Particles = memo(() => {
  const count = 300;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#06b6d4" transparent opacity={0.4} />
    </points>
  );
});

const Scene = memo(() => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      {isInView && (
        <Canvas
          dpr={[1, 1.5]}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
            preserveDrawingBuffer: false
          }}
          camera={{ fov: 75 }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          
          <AnimatedShape />
          <Particles />
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Preload all />
        </Canvas>
      )}
    </div>
  );
});

export default Scene;
