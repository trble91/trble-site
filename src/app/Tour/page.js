"use client";
"use strict";

import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import Link from "next/link";
import Head from "next/head";

export default function Tour() {
  const featureLink = {
    href: "/Contact",
  };
  return (
    <>
      <Head>
        <title>Tour - No Shows Available</title>
        <meta name="description" content="Stay updated on future tour dates and RSVP for upcoming shows." />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <p className="text-center items-center text-sm text-slate-700 font-thin">
          No Shows at This Time. <br />Click below to RSVP for future shows.
        </p>
        <div className="flex flex-col items-center justify-center">
        <Link href={featureLink.href}>
        <button 
              className="flex flex-row shadow-lg   w-half uppercase text-center text-sm mb-2 mt-16 mr-6 px-4 py-2 bg-slate-500 text-white font-semibold rounded-md hover:bg-slate-700 transition-all"
              aria-label="RSVP for future shows"
            >
              Click Here to RSVP
            </button>
      
        </Link>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};
