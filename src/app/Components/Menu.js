"use client";

import react from "react";
import Link from "next/link";

export default function Menu({ links }) {
  return (
    <div className="absolute top-16 right-0 w-full bg-stone-200 text-black xl:static xl:flex xl:w-auto xs:z-10 sm:z-18 xl:z-10">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block px-4 py-2 text-sm hover:bg-stone-100 text-black xl:inline-block xl:mt-0 xl:ml-4 xl:hover:bg-stone-100"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
