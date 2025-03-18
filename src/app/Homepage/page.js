'use client';

import React from "react";
import Navbar from "../Components/Navbar";
import SplashScreen from "../Components/SplashScreen";
import LatestRelease from "../Components/LatestRelease";

export default function Homepage() {
  return (
    <div>
      <SplashScreen />
      <Navbar />
      <LatestRelease />
    </div>
  );
}
