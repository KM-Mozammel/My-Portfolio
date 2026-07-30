"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
// import HumanModel from "./HumanModel";

export default function Avatar() {
    return (
        <Canvas
          camera={{ position: [0, 1.5, 3], fov: 50 }}
          style={{ height: "500px" }}
        >
          {/* Light */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* 3D Model */}
          {/* <HumanModel /> */}

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
          />

          {/* Realistic environment */}
          <Environment preset="city" />
        </Canvas>
    );
}
