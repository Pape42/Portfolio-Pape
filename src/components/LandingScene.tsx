"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/blackhole.glb");

  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = false;
        obj.receiveShadow = false;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={1.7} position={[0, -0.8, 0]} />;
}

useGLTF.preload("/models/blackhole.glb");

function ZoomEffect({
  start,
  onComplete,
}: {
  start: boolean;
  onComplete: () => void;
}) {
  const { camera } = useThree();

  const from = useMemo(() => new THREE.Vector3(0, 1.5, 4), []);
  const to = useMemo(() => new THREE.Vector3(0, 0.2, 1), []);

  const t = useRef(0);
  const done = useRef(false);

  useEffect(() => {
    if (!start) {
      t.current = 0;
      done.current = false;
      camera.position.copy(from);
      camera.lookAt(0, -0.8, 0);
    }
  }, [start, camera, from]);

  useFrame((_, delta) => {
    if (!start || done.current) return;

    t.current = Math.min(1, t.current + delta * 1.2);

    const x = t.current;
    const eased = x * x * (3 - 2 * x);

    camera.position.lerpVectors(from, to, eased);
    camera.lookAt(0, -0.8, 0);

    if (t.current >= 1) {
      done.current = true;
      onComplete();
    }
  });

  return null;
}

function FallbackMesh() {
  return (
    <mesh position={[0, -0.8, 0]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  );
}

export default function LandingScene({
  zooming,
  onFinish,
}: {
  zooming: boolean;
  onFinish: () => void;
}) {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Suspense fallback={<FallbackMesh />}>
        <Model />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={!zooming}
        autoRotateSpeed={1.2}
      />

      <ZoomEffect start={zooming} onComplete={onFinish} />
    </Canvas>
  );
}