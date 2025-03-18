"use client";
"use strict";

import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion";
import { TextureLoader } from "three";

export default function Logo() {
  function Model() {
    const texture = useLoader(TextureLoader, "/logo2.png");
    return (
      <mesh>
        <planeBufferGeometry attach="geometry" args={[1, 1]} />
        <meshStandardMaterial attach="material" map={texture} />
      </mesh>
    );
  }

  return (
    <div className="-mt-42">
      <motion.div
        initial={{ x: -500, opacity: 1, scale: 1 }}
        animate={{ x: 5, y: -25, opacity: 1, scale: 1.2, rotateY: 1080 }}
        transition={{ duration: 0.8 }}
        className="items-center"
      >
        <Canvas style={{ width: 200, height: 300 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model />
        </Canvas>
      </motion.div>
    </div>
  );
}