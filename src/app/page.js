"use client";

import React from "react";
import Home from './Home/page.js';
import Music from "./Music/page.js";
import Video from "./Videos/page.js";
import About from "./About/page.js";

export default function Page() {
  return (
    <div>
      <Home />
      <Music />
      <Video />
      <About />
    </div>
  );
}
