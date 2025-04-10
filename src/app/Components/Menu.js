"use client";

import Link from "next/link";

export default function Menu({ links }) {
  return (
    <div className="absolute top-5 w-full text-center shadow-lg z-50 rounded-xl bg-white text-black">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block px-4 py-2 text-sm rounded-lg hover:bg-stone-100 text-black"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
