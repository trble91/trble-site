"use client";
"use strict";

import "../app/globals.css";
import React from "react";
import Home from "./Home/page.js";


export default function Page() {
  return (
    <>
      <React.StrictMode>
        <main className="min-h-screen flex-col items-center">
          <Home />
        </main>

      </React.StrictMode>
    </>
  );
}