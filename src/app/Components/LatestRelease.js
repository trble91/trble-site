"use client";

import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';


export default function LatestRelease() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="flex relative flex-row mb-10 justify-center mt-4 snap-center xl:-pt-20 xl:pb-20">
    <div className="bg-white-900 text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Latest Release</h2>
      <div className="flex items-center">
      <motion.iframe
      className="w-fit h-auto rounded-xl"
      style={{ scale }}
      width="500"
      height="400"
      src="https://www.youtube.com/embed/ishDCF1ojyA?si=uJ-0iTIUfDdrXIRC"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
        </div>
        <div className="flex flex-col items-center justify-center">
        <Link href="https://unitedmasters.com/m/thank-you-66">
        <button 
              className="flex flex-row shadow-lg w-half uppercase text-center text-sm mb-2 mt-16 mr-6 px-4 py-2 bg-gray-200 text-slate-700 font-semibold rounded-md hover:bg-gray-600 transition-all"
              aria-label="music links"
            >
              Click For all platforms
            </button>
        </Link>
          </div>

      </div>
      </div>
  );
}
