import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/default-model.glb');
  return <primitive object={scene} />;
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}

useGLTF.preload('/default-model.glb');

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
