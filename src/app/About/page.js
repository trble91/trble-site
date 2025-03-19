"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function About() {

  const text = `TRBLE – a visionary creator of the arts, blends his deep hip-hop roots with a sound that is both ethereal and powerful. With every note, he crafts a majestic experience that lingers long after the music fades. More than just an artist, TRBLE is a storyteller, using wordplay and melody to weave narratives of love, perseverance, and self-discovery.

From a young age, TRBLE was drawn to the art of production, shaping his own sound and refining his skills behind the boards. His passion for music soon led him to explore other creative avenues within the trade, including photography, mixing, and software engineering. This multidimensional approach allows him to not only perfect his craft but also bring a unique perspective to every project he touches.

The acronym behind his name—To Really Believe Love Exists—is not just an introduction but a philosophy that fuels his artistry. His lyrics reflect a unique perspective, drawing listeners into a world where vulnerability meets strength, and rhythm meets emotion. Whether through intricate bars, soul-stirring harmonies, or polished production, TRBLE's music is a testament to the power of belief, resilience, and the pursuit of something greater.

From electrifying performances to introspective anthems, TRBLE continues to push the boundaries of sound and visual storytelling, inviting audiences to not just listen, but feel.`
  
  return (
    <>
      <Navbar />
      <div>
      <motion.div 
        className="flex flex-col items-center mb:8  min-h-screen py-12 snap-center sm:p-20 xl:-pt-20 xl:pb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col justify-center items-center relative w-full ">
          <motion.div
            className="flex sticky flex-row text-start text-slate-800 top-0.5 sm:text-center text-lg xl:flex-row max-w-[700px] items-center snap-center"
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <p className="flex relative ml-1 text-left font-thin text-m mb-8">
           {text}
            </p>
          </motion.div>
        </div>
      </motion.div>
      </div>
      <Footer />
    </>
  )
}