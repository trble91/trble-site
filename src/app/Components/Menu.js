"use client";

import Link from "next/link";

export default function Menu({ links }) {
  return (
    <div className="absolute top-16 left-0 shadow-lg z-50  bg-stone-200 text-black">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block px-4 py-2 text-sm hover:bg-stone-100 text-black"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
