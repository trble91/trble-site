import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";

export default function Store() {
  return (
    <>
    <Navbar />
    <p className="text-center text-sm text-slate-700 font-thin mt-7 -mb-8">
        Store soon to come. 
      </p>
      <div className="flex mt-96 flex-col items-center">
      <Footer />
      </div>
    </>
  )
}
