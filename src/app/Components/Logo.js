"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';


export default function Logo() {

  const imageStyle = {
    filter: 'invert(100%)'
  };

  /*
    function Model() {
      const geometry = useLoader(STLLoader, '/path/to/your/model.stl');
      return (
        <mesh geometry={geometry}>
          <meshStandardMaterial color="gray" />
        </mesh>
      );
    }
  */

  return (
    <div className="-mt-42 color-inverse">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.7 }}
        animate={{ x: 5, y: -25, opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="items-center"
      >
        <Image
          src="/public/logo1.stl"
          width={200}
          height={100}
          alt="text logo"
          style={imageStyle}
        />
      </motion.div>
    </div>
  );
}
