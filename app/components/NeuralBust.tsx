"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { addFrameSubscriber } from "./animationHub";
import { BustImage } from "./StaticNeuralBust";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const modelUrl = `${basePath}/models/marble-bust/marble_bust_01_1k.gltf`;

function FrameDriver() {
  const advance = useThree((state) => state.advance);

  useEffect(() => addFrameSubscriber((milliseconds) => advance(milliseconds, true)), [advance]);
  return null;
}

function MarbleBust({ onReady }: { onReady: () => void }) {
  const gltf = useLoader(GLTFLoader, modelUrl);
  const groupRef = useRef<THREE.Group>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const { object, dustGeometry } = useMemo(() => {
    const clone = gltf.scene.clone(true);

    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const source = child.material as THREE.MeshStandardMaterial;
      child.material = new THREE.MeshPhysicalMaterial({
        map: source.map,
        normalMap: source.normalMap,
        roughnessMap: source.roughnessMap,
        color: new THREE.Color("#e6e1d7"),
        roughness: 0.72,
        metalness: 0,
        clearcoat: 0.08,
        clearcoatRoughness: 0.88,
      });
    });

    const dust = new THREE.BufferGeometry();
    const sourceMesh = clone.getObjectByProperty("type", "Mesh") as THREE.Mesh | undefined;
    if (sourceMesh) {
      const source = sourceMesh.geometry.getAttribute("position") as THREE.BufferAttribute;
      const points: number[] = [];
      for (let index = 0; index < source.count; index += 5) {
        const x = source.getX(index);
        if (x > -0.015) continue;
        const y = source.getY(index);
        const z = source.getZ(index);
        const scatter = ((index * 17) % 13) / 13;
        points.push(x - scatter * 0.018, y + Math.sin(index) * 0.002, z + Math.cos(index * 0.7) * 0.002);
      }
      dust.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    }

    return { object: clone, dustGeometry: dust };
  }, [gltf.scene]);

  useEffect(() => {
    onReady();
    return () => {
      dustGeometry.dispose();
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) (child.material as THREE.Material).dispose();
      });
    };
  }, [dustGeometry, object, onReady]);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const seconds = state.clock.elapsedTime;
    const scroll = Math.min(1, window.scrollY / Math.max(window.innerHeight * 1.6, 1));
    const targetY = -0.16 + state.pointer.x * 0.22 + Math.sin(seconds * 0.28) * 0.018;
    const targetX = state.pointer.y * 0.06 - scroll * 0.035;

    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.045);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetX, 0.045);
    group.position.y = THREE.MathUtils.lerp(group.position.y, -2.06 + scroll * 0.11, 0.035);
    group.position.x = THREE.MathUtils.lerp(group.position.x, 0.18 + state.pointer.x * 0.065, 0.035);

    if (lightRef.current) {
      lightRef.current.position.x = -2.1 + state.pointer.x * 0.55;
      lightRef.current.position.y = 0.5 - state.pointer.y * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={1.25} color="#fff8ec" />
      <directionalLight position={[3.5, 4.5, 4]} intensity={3.1} color="#fffaf0" />
      <directionalLight position={[-3, 1, 2]} intensity={1.1} color="#79828e" />
      <pointLight ref={lightRef} position={[-2.1, 0.5, 2.4]} intensity={14} distance={5} decay={2} color="#cf2028" />

      <group ref={groupRef} position={[0.18, -2.06, 0]} rotation={[0, -0.16, 0]} scale={8.05}>
        <primitive object={object} />
        <points geometry={dustGeometry} position={[-0.012, 0, 0]}>
          <pointsMaterial color="#373532" size={0.007} sizeAttenuation transparent opacity={0.34} depthWrite={false} />
        </points>
      </group>
    </>
  );
}

export default function NeuralBust() {
  const [ready, setReady] = useState(false);

  return (
    <div className={`hybrid-bust lusion-object${ready ? " is-ready" : ""}`}>
      <div className="bust-loading" aria-hidden="true"><BustImage /></div>
      <div className="object-halo" aria-hidden="true" />
      <Canvas
        className="neural-canvas"
        camera={{ position: [0, 0.02, 4.5], fov: 37, near: 0.1, far: 30 }}
        dpr={[1, 1.45]}
        frameloop="never"
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.02;
        }}
      >
        <FrameDriver />
        <Suspense fallback={null}><MarbleBust onReady={() => setReady(true)} /></Suspense>
      </Canvas>
      <span className="object-axis axis-x" aria-hidden="true" />
      <span className="object-axis axis-y" aria-hidden="true" />
      <span className="object-meta meta-top" aria-hidden="true">OBJETO / ESTRATÉGIA</span>
      <span className="object-meta meta-side" aria-hidden="true">SISTEMA 01—07</span>
    </div>
  );
}
