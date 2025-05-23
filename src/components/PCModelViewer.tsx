import { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

function Model() {
  const gltf = useGLTF('/desktoppc/scene.gltf');
  const modelRef = useRef<Mesh>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.PI / 4;
    }
  }, []);

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={0.77}
      position={[0, -0.5, 0]}
    />
  );
}

function PCModelViewer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    useGLTF.preload('/desktoppc/scene.gltf');
  }, []);

  return (
    <div
      className="
        w-full h-full 
        bg-gradient-to-b from-gray-900 to-purple-900/20 
        border-0 shadow-none
      "
    >
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        gl={{ antialias: true }}
        onCreated={() => setIsLoaded(true)}
      >
        <fog attach="fog" args={['#171720', 10, 20]} />

        <PerspectiveCamera makeDefault position={[-2, 1, 15]} fov={100} />

        <directionalLight 
          position={[-20, 50, 10]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />

        <ambientLight intensity={1} />

        <pointLight position={[-5, 2, -10]} color="#a855f7" intensity={2} />
        <pointLight position={[5, 0, -5]} color="#7c3aed" intensity={1} />

        <Environment preset="city" />

        <Model />

        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          minDistance={4}
          maxDistance={8}
          autoRotate={isLoaded}
          autoRotateSpeed={1.25}
        />
      </Canvas>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
          <div className="text-white">Loading 3D model...</div>
        </div>
      )}
    </div>
  );
}

export default PCModelViewer;
