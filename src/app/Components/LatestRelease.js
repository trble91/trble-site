import React from 'react';
import Image from 'next/image';

export default function LatestRelease() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Latest Release</h2>
      <div className="flex items-center">
        <Image src="/path/to/album-cover.jpg" alt="Album Cover" className="w-32 h-32 mr-4 rounded-lg" />
        <div>
          <h3 className="text-xl font-semibold">Album Title</h3>
          <p className="text-gray-400">Release Date: March 11, 2025</p>
          <p className="mt-2">Description of the latest release. This album features...</p>
          <a href="/path/to/album" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Listen Now
          </a>
        </div>
      </div>
    </div>
  );
}