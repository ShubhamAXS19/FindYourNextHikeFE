"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineExplore } from "react-icons/md";

const Header = () => {
  const navBackground = true;
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const isLoggedIn = false; // Simulating logged-out state for login/signup buttons
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const showDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  return (
    <header
      className={`transition-colors duration-300 ease-in-out ${
        navBackground ? "bg-header bg-opacity-80 backdrop-blur" : "bg-header"
      } shadow-none px-4 py-4 fixed w-full top-0 z-30`}
    >
      <div className="flex justify-between items-center">
        <h1
          className="font-bold text-black text-xl sm:text-2xl cursor-pointer"
          onClick={() => handleRedirect("/")}
        >
          Dreamland
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-5">
          <div className="relative">
            <div
              className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 flex items-center gap-2 sm-text-sm md:text-base lg:text-lg xl:text-2xl cursor-pointer transition-colors duration-200"
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <MdOutlineExplore size={20} />
              Explore
            </div>

            {isDropdownVisible && (
              <div
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="absolute top-full right-0 mt-2 py-2 bg-black shadow-md rounded-md z-50 w-48 sm:w-64 flex flex-col items-start justify-around transition-opacity duration-300 ease-in-out"
              >
                <div
                  className="cursor-pointer text-white px-4 py-2 text-base sm:text-lg hover:bg-gray-800 w-full"
                  onClick={() => handleRedirect("/all-trails")}
                >
                  All Trails
                </div>
                <div
                  className="cursor-pointer text-white px-4 py-2 text-base sm:text-lg hover:bg-gray-800 w-full"
                  onClick={() => handleRedirect("/nearby-trails")}
                >
                  Nearby Trails
                </div>
                <div
                  className="cursor-pointer text-white px-4 py-2 text-base sm:text-lg hover:bg-gray-800 w-full"
                  onClick={() => handleRedirect("/national-park-guides")}
                >
                  National Park Guides
                </div>
              </div>
            )}
          </div>

          {/* Login/Signup buttons for large screens */}
          {!isLoggedIn ? (
            <div className="flex gap-4">
              <button
                onClick={() => handleRedirect("/login")}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 sm:text-sm md:text-base lg:text-lg xl:text-2xl transition-transform duration-200 transform hover:scale-105"
              >
                Login
              </button>
              <button
                onClick={() => handleRedirect("/register")}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 sm:text-sm md:text-base lg:text-lg xl:text-2xl transition-transform duration-200 transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="text-white text-lg sm:text-xl">Hi, User</div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex items-center">
          <button
            className="bg-black text-white px-4 py-2 rounded-md text-lg"
            onClick={showDropdown}
          >
            <MdOutlineExplore size={24} />
          </button>

          {isDropdownVisible && (
            <div className="absolute top-16 left-0 w-full bg-black p-4 z-50 flex flex-col gap-2">
              <div
                className="cursor-pointer text-white p-2 text-base hover:bg-gray-800 w-full"
                onClick={() => handleRedirect("/all-trails")}
              >
                All Trails
              </div>
              <div
                className="cursor-pointer text-white p-2 text-base hover:bg-gray-800 w-full"
                onClick={() => handleRedirect("/nearby-trails")}
              >
                Nearby Trails
              </div>
              <div
                className="cursor-pointer text-white p-2 text-base hover:bg-gray-800 w-full"
                onClick={() => handleRedirect("/national-park")}
              >
                National Park Guides
              </div>
              {!isLoggedIn ? (
                <>
                  <div
                    className="cursor-pointer text-white p-2 text-base hover:bg-gray-800 w-full"
                    onClick={() => handleRedirect("/login")}
                  >
                    Login
                  </div>
                  <div
                    className="cursor-pointer text-white p-2 text-base hover:bg-gray-800 w-full"
                    onClick={() => handleRedirect("/register")}
                  >
                    Sign Up
                  </div>
                </>
              ) : (
                <div className="cursor-pointer text-white p-2 text-base hover:bg-gray-800 w-full">
                  Hi, User
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
