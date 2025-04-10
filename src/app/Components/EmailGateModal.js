'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo.js';

export default function EmailGateModal({ onSubmit }) {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = async () => {
    if (email && email.includes('@')) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'music-gate' }),
        });
  
        localStorage.setItem('emailCaptured', 'true');
        onSubmit(email);
        setIsVisible(false);
      } catch (err) {
        console.error('Email submission failed:', err);
        // Optional: Add error UI
      }
    }
  };

  const handleSkip = () => {
    localStorage.setItem('emailCaptured', 'true');
    setIsVisible(false);
  };

  useEffect(() => {
    const alreadyCaptured = localStorage.getItem('emailCaptured');
    if (alreadyCaptured) {
      setIsVisible(false);
    } else {
      setIsAnimating(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        className={`bg-[#292828] text-white p-8 rounded-lg max-w-md w-full shadow-lg border border-white/10 transform transition-all duration-500 ${
          isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex justify-center mb-6">
          <Logo className="w-24 h-auto invert-100" />
        </div>
        <h2 className="text-2xl font-semibold tracking-wide mb-4 uppercase text-center">
          Access Granted
        </h2>
        <p className="text-gray-400 mb-6 text-sm text-center">
          To hear the prerelease track, enter your email below. We’ll let you know when new drops are coming too.
        </p>
        <input
          type="email"
          placeholder="you@email.com"
          className="w-full p-3 rounded bg-blck text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-300 transition-all"
        >
          Unlock Track
        </button>
        {/* <button
          onClick={handleSkip}
          className="mt-4 w-full text-sm text-gray-500 hover:text-white transition-all underline"
        >
          
          {`No thanks / I’ll wait`}
        </button> */}
      </div>
    </div>
  );
}
