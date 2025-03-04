"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {

  const imageStyle = {
    filter: 'invert(100%)'
  };

  return (
    <div className="-mt-42 color-inverse">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.7 }}
        animate={{ x: 5, y: -25, opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="items-center"
      >
        <Image
          src="/assets/whtLogo.png"
          width={200}
          height={100}
          alt="text logo"
          style={imageStyle}
        />
      </motion.div>
    </div>
  );
}
