import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Artist Name</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/About" className="hover:text-gray-400">About</Link>
          <Link href="/Music" className="hover:text-gray-400">Music</Link>
          <Link href="/Videos" className="hover:text-gray-400">Videos</Link>
          <Link href="/Tour" className="hover:text-gray-400">Tour</Link>
          <Link href="/Contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}