"use client";

import React from 'react';
import { motion } from 'framer-motion'; 


export default function LatestRelease() {
  return (
    <div className="flex relative flex-row justify-center mt-4 mb-4 snap-center -z-80 xl:-pt-20 xl:pb-20">
    <div className="bg-white-900 text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Latest Release</h2>
      <div className="flex items-center">
      <motion.video
      src="/thank you_yt.mp4"
      autoPlay
      loop
      muted
      className="w-full h-auto rounded-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
        </div>
      </div>
      </div>
  );
}
