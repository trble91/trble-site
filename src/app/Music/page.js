"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import AlbumCard from "../Components/AlbumCard.js";
import Modal from "../Components/Modal.js";
import Navbar from "../Components/Navbar.js";

export default function Music() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const AlbumCards = [
    {
      title: "The Lost Baker",
      project: "EP",
      images: [
        {
          src: "/assets/tlb.jpg",
          href: "https://unitedmasters.com/m/5f57cb4c6b55ac6b383014a1",
          height: "300px",
          width: "300px",
        },
      ],
      released: "Released: 20 Oct 2017",
    },
    {
      title: "Songs About Love",
      project: "EP",
      images: [
        { src: "/assets/sal.jpg", href: "", height: "300px", width: "300px" },
      ],
      released: "Released: 20 Mar 2018",
    },
    {
      title: "Social Studies",
      project: "Mixtape",
      images: [
        {
          src: "/assets/SS.jpg",
          href: "https://unitedmasters.com/m/5f57ca266b55ac4e8d7ae3a0",
          height: "300px",
          width: "300px",
        },
      ],
      released: "Released: 21 Nov 2019",
    },
    {
      title: "Go Tina",
      project: "Single",
      images: [
        { src: "/assets/gt.jpg", href: "https://unitedmasters.com/m/gotina", height: "300px", width: "300px" },
      ],
      released: "Released: 22 Jul 2020",
    },
    {
      title: "Onto Something",
      project: "Single",
      images: [
        {
          src: "/assets/.jpg",
          href: "https://unitedmasters.com/m/ontosomething",
          height: "300px",
          width: "300px",
        },
      ],
      released: "Released: 01 Sep 2020",
    },
    {
      title: "The Side",
      project: "Single",
      images: [
        { src: "/assets/ts.jpg", href: "https://unitedmasters.com/m/thtside", height: "300px", width: "300px" },
      ],
      released: "Released: 18 Aug 2022",
    },
    {
      title: "Bad Guy",
      project: "Single",
      images: [
        {
          src: "/assets/bg1.jpg",
          href: "https://unitedmasters.com/m/badguyv1",
          height: "300px",
          width: "300px",
        },
      ],
      released: "Released: 08 Sep 2022",
    },
    {
      title: "Love Me",
      project: "Single",
      images: [
        {
          src: "/assets/SS.jpg",
          href: "https://unitedmasters.com/m/lovemelove",
          height: "300px",
          width: "300px",
        },
      ],
      released: "Released: 11 Nov 2022",
    },
    {
      title: "Thank You",
      project: "Single",
      images: [
        {
          src: "/assets/ty.jpg",
          href: "https://unitedmasters.com/m/thank-you-66",
          height: "300px",
          width: "300px",
        },
      ],
      released: "Released: 11 Mar 2025",
    },
  ];

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="flex flex-col place-items-center min-h-screen py-12 overflow-y-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {AlbumCards.map((post, index) => (
          <AlbumCard
            key={index}
            title={post.title}
            images={post.images}
            onClick={() => openModal(post)}
          />
        ))}
      </motion.div>
      {selectedPost && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedPost.title}
          images={selectedPost.images}
          project={selectedPost.project}
          released={selectedPost.released}
        />
      )}
    </>
  );
}