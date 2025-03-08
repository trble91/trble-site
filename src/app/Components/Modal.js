import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

const Modal = ({ isOpen, onClose, title, images, project, released }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700  whitespace-pre-wrap">{project}</p>
        {href.map(() => (
          <Link href="" />
        ))}
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="album cover"
            layout="responsive"
            className="w-1/2 h-auto p-2"
            width={700}
            height={475}
          />
        ))}
        <p className="block font-sans uppercase text-base antialiased font-normal leading-relaxed text-inherit">
          {released}
        </p>
        <button
          onClick={onClose}
          className="px-2 py-2 block w-1/4 text-xs font-thin uppercase transition bg-zinc-500 text-stone-200 rounded-lg shadow-md hover:shadow-lg hover:opacity-85 focus:opacity-85 active:opacity-85"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
