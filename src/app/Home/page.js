'use client';

import React from "react";
import Navbar from "../Components/Navbar";
import SplashScreen from "../Components/SplashScreen";
import LatestRelease from "../Components/LatestRelease";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen mt-10 flex-col items-center">  
      <SplashScreen />
      <Navbar />
      <LatestRelease />
      <div className="flex mt-36 flex-col items-center">
      <Footer />
      </div>
    </div>
  );
}
