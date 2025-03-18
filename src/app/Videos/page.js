"use client";

import React from 'react'
import Navbar from '../Components/Navbar'

export default function Video() {
  return (
    <>
      <Navbar />
    <div className="flex relative flex-row justify-center mb-4 snap-center xl:-pt-20 xl:pb-20">
      <div className="flex flex-col justify-center items-center">
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/pBBYIv61Ij4?si=S5M9xWahMJUkw1O7" 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/tgVnDj8vx3g?si=oCBb0MwBp7B9X0rd"           
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/RWwn8TS7g1o?si=D8xgFZw9thnvJFyb"           
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </>
  );
}