"use client";

import React from "react";
import Navbar from "../Components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Components/Footer";

export default function Video() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <>
      <Navbar />
      <div className="flex relative flex-row justify-center mt-4 mb-4 snap-center xl:-pt-20 xl:pb-20">
        <div className="flex flex-col z-0 justify-center items-center">
          <motion.div
            style={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <motion.iframe
              style={{ scale }}
              width="80%"
              height="300"
              src="https://www.youtube.com/embed/pBBYIv61Ij4?si=S5M9xWahMJUkw1O7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <motion.iframe
              style={{ scale }}
              width="80%"
              height="300"
              src="https://www.youtube.com/embed/tgVnDj8vx3g?si=oCBb0MwBp7B9X0rd"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <motion.iframe
              style={{ scale }}
              width="80%"
              height="300"
              src="https://www.youtube.com/embed/RWwn8TS7g1o?si=D8xgFZw9thnvJFyb"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}