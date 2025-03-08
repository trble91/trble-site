"use client";

import React from "react";
import Image from "next/image";

const AlbumCard = ({ title, images, onClick }) => {

  return (
    <div className="relative max-w-[24rem] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-4">
      <div className="relative m-0 overflow-scroll text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Post image ${index + 1}`}
            layout="responsive"
            className="w-1/2 h-auto p-2" 
            width={700}
            height={475}
          />
        ))}
      </div>
      <div className="p-6">
        <h4
          onClick={onClick}
          className="block font-sans text-2xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-pointer"
        >
          {title}
        </h4>
      </div>
 
    </div>
  );
};

export default AlbumCard;