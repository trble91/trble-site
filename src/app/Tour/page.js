"use client";
"use strict";

import React, { use } from 'react'
import Navbar from '../Components/Navbar'
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
      <p className="text-center text-sm text-slate-700 font-thin mt-7 -mb-8">
        No Shows at This Time. <br />Click below to RSVP for future shows.
      </p>
      <Link href={featureLink.href}>
      <button 
        className="text-center text-sm mb-8 mt-5 px-4 py-2 bg-slate-500 text-white font-semibold rounded-md hover:bg-slate-700 transition-all"      
      >
        Click Here to RSVP
      </button>
      </Link>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
    </>
  );
};