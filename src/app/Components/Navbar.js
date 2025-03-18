"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/Homepage", label: "Home" },
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
      <nav className="relative flex justify-end items-center p-6 bg-white-800 text-white">
        <button
          className="block xl:hidden focus:outline-none"
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 right-0 w-full bg-white text-black xl:static xl:flex xl:w-auto`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm hover:bg-white text-black xl:inline-block xl:mt-0 xl:ml-4"     >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}