"use client";

import React from "react";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/northern-lights.avif"
          alt="Landing Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      {/* Main Section */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white pl-12">
        <h1 className="text-6xl font-bold leading-tight">
          Weaving Your Dreams into <br /> Unforgettable Adventures
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Discover the captivating allure of Arctic wonders, from stunning
          landscapes to vibrant culture, on an unforgettable journey through the
          North.
        </p>

        {/* Buttons */}
        {/* <div className="mt-8 flex space-x-4">
          <a
            href="#"
            className="bg-white text-black py-3 px-6 rounded-lg font-semibold flex items-center shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Book Now
            <svg
              className="ml-2 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="/tours"
            className="text-white border border-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore More
          </a>
        </div> */}
      </div>
      {/* Social Media Links */}
      <div className="absolute bottom-6 right-6 flex flex-col space-y-4 z-10">
        <a href="#" className="text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M..."></path> {/* Instagram SVG */}
          </svg>
        </a>
        <a href="#" className="text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M..."></path> {/* Twitter SVG */}
          </svg>
        </a>
        <a href="#" className="text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M..."></path> {/* YouTube SVG */}
          </svg>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
