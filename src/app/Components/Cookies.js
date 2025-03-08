import React, { useState, useEffect } from 'react';

export default function Cookies() {
  const [accepted, setAccepted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setAccepted(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 30000); // 30 seconds timer
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setAccepted(true);
  };

  if (accepted || !visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p>This website uses cookies to enhance the user experience.</p>
      <button onClick={handleAccept} className="bg-blue-500 text-white px-4 py-2 rounded">
        Accept
      </button>
    </div>
  );
}