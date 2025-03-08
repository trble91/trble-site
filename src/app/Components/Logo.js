"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

export default function Logo() {
  function Model() {
    const geometry = useLoader(STLLoader, "/logo1.stl");
    return (
      <mesh geometry={geometry}>
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  return (
    <div className="-mt-42">
      <motion.div
        initial={{ x: -500, opacity: 0.5, scale: 1 }}
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
