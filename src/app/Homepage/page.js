'use client';

import React from "react";
import Navbar from "../Components/Navbar";
import SplashScreen from "../Components/SplashScreen";
import LatestRelease from "../Components/LatestRelease";
import Footer from "../Components/Footer";

export default function Homepage() {
  return (
    <div>
      <SplashScreen />
      <Navbar />
      <LatestRelease />
      <Footer />
    </div>
  );
}
