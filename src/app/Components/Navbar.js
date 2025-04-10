"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("./Menu"), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/Home", label: "Home" },
    { href: "/Music", label: "Music" },
    { href: "/Videos", label: "Videos" },
    { href: "/Tour", label: "Shows" },
    { href: "/About", label: "About" },
    { href: "/Store", label: "Shop" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
<nav className="relative left-0 z-50 flex justify-end items-center p-8 bg-gray-150 text-black">
<button
          className="block focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="black"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {isOpen && (
          <Menu links={links} />
        )}
      </nav>
    </>
  );
}
