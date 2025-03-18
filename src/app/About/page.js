"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';

export default function About() {

  const text = " TRBLE - a creator of the arts, has a unique sound blended with hip hop roots. TRBLE offers a majestic feel every time you hear a note. He usually starts off the conversation by explaining the acronym of his name, To Really Believe Love Exists - much like his music, TRBLE has an interesting take on wordplay. Sending a message of love & perseverance seems to be his main objective."
  
  return (
    <>
      <Navbar />
      <motion.div 
        className="flex relative flex-row justify-center mt-4 mb-4 snap-center -z-80 xl:-pt-20 xl:pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-center items-center relative w-full h-64">
          <motion.div
            className="absolute flex-col justify-center items-center text-center"
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
           {text}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}