"use client";

import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/Music", label: "Music" },
    { href: "/Videos", label: "Videos" },
    { href: "/Tour", label: "Shows" },
    { href: "/About", label: "About" },
    { href: "/Store", label: "Shop" },
  ];

  return (
    <>
      <nav className="flex justify-end space-x-2 mt-12 xl:mr-6 text-slate-700 font-thin uppercase tracking-[2px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-red-800 cursor-pointer text-xs sm:text-sm md:text-base"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
