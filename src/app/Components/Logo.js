"use client";
"use strict";

import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="-mt-42">
      <motion.div
        initial={{ x: -500, opacity: 1, scale: 1 }}
        animate={{ x: 5, y: -25, opacity: 1, scale: 1.2, rotateY: 1080 }}
        transition={{ duration: 0.8 }}
        className="items-center"
      >
        <motion.img
          src="/logo2.png"
          alt="Logo"
          style={{ width: 300, height: 300 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  );
}