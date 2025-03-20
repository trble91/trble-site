"use client";

import React, { useState } from "react";
// import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.tel)) {
      setStatus("Phone number must be exactly 10 digits.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await axios.post("/api/contact", formData);
      console.log("Form submitted successfully:", response.data);
      setStatus("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <>
      <div className="flex items-center flex-col top-5 justify-center min-h-screen snap-center">
        <p className="flex-col text-center max-w-[500px] text-red-800 font-thin">
          To inquire about any and all services. Fill out this contact form
          expressing your needs.
        </p>
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full bg-white-900 p-6 rounded-lg shadow-md mt-5 mb-10"
        >
          <label htmlFor="name" className="block text-stone-700 text-sm font-bold mb-2">
            Name:
            <input
              id="name"
              required
              type="text"
              name="name"
              autoComplete="given-name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-stone-700 bg-white-900"
            />
          </label>
          <label htmlFor="email" className="block text-stone-700 text-sm font-bold mb-2">
            Email:
            <input
              id="email"
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email@example.com"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm border-gray-700 bg-white-900"
            />
          </label>
          <label htmlFor="tel" className="block text-stone-700 text-sm font-bold mb-2">
            Phone Number:
            <input
              id="tel"
              required
              type="tel"
              name="tel"
              placeholder="7071235678"
              value={formData.tel}
              onChange={handleChange}
              pattern="\d{10}"
              maxLength="10"
              className="form-input mt-1 block w-full rounded-sm border-gray-700 bg-white-900"
            />
          </label>
          
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message:
            <textarea
              id="message"
              required
              name="message"
              placeholder="Type Here"
              value={formData.message}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-sm resize-none bg-white-900"
              rows="4"
            />
          </label>
          <button
            type="submit"
            className="text-stone-700 item-center font-bold py-2 px-4 mt-4 rounded focus:outline-gray-300 focus:shadow-outline-gray-300 hover:bg-gray-300 hover:text-gray-900 active:bg-slate-300"
          >
            Submit
          </button>
          {status && <p className="mt-4 text-gray-700">{status}</p>}
        </form>
        <p className="flex-col text-center text-sm -mt-6 max-w-[300px] text-red-800 font-thin">
        </p>
      </div>
    </>
  );
};

export default ContactForm;
