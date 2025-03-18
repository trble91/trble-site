'use client';

import React from "react";
import Navbar from "./Components/Navbar";
import SplashScreen from "./Components/SplashScreen";

export default function page() {
  return (
    <div>
      <SplashScreen />
      <Navbar />
    </div>
  );
}
