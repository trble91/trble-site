"use client";

import react from "react";
import Link from "next/link";

export default function Menu({ links }) {
  return (
    <div className="absolute top-16 right-0 w-full bg-stone-200 text-black sm:z-50 xl:z-50">
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
