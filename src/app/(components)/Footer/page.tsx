"use client";
import React from "react";
import Image from "next/image"; // Import Image from Next.js
import Link from "next/link"; // Import Link from Next.js
import { ArrowRightAlt } from "@mui/icons-material"; // Import ArrowRightAlt icon from Material UI

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/northern-lights.avif"
          alt="Landing Background"
          layout="fill" // Use fill layout to cover the parent
          objectFit="cover" // Ensure the image covers the area
          quality={100} // Set quality
        />
      </div>

      {/* Overlay to Darken Background */}
      <div className="absolute inset-0 bg-black opacity-30 z-5"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center pt-16 px-4 sm:px-8 md:px-12 lg:px-24">
        {/* Headline */}
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
          Find the perfect trip for you and discover extraordinary adventures
          with us!
        </h1>

        {/* Subheadline */}
        <p className="text-white mt-4 text-lg sm:text-xl max-w-3xl">
          Embark on a journey of exploration and excitement as we guide you
          towards unforgettable experiences across the globe.
        </p>

        {/* Get Started Button */}
        <Link href="#">
          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-opacity-90">
            <span>Get Started</span>
            <ArrowRightAlt />
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-800 bg-opacity-80 text-white py-10 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Description */}
          <div>
            <h2 className="text-3xl font-bold">SNAELAND</h2>
            <p className="mt-2">
              Your gateway to the extraordinary beauty, culture, and
              exhilarating adventures awaiting in the captivating landscapes of
              Iceland.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  X
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>
              <a href="mailto:travel@snaeland.io" className="hover:underline">
                travel@snaeland.io
              </a>
            </p>
            <p>(704) 555-0127</p>
            <p>2118 Thornridge Cir, Syracuse, Connecticut 35624</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center border-t border-gray-600 pt-4 text-sm">
          <Link href="#" className="hover:underline mx-2">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline mx-2">
            Terms & Conditions
          </Link>
          <p className="mt-2">&copy; SNAELAND 2024. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
