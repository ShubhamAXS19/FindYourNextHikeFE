"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineExplore } from "react-icons/md";

const Header = () => {
  const navBackground = true;
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const isLoggedIn = false; // Updated to show login/signup when logged out
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

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  return (
    <header
      className={`transition-colors duration-300 ease-in-out ${
        navBackground ? "bg-header bg-opacity-80 backdrop-blur" : "bg-header"
      } shadow-none px-4 py-6 fixed w-full top-0 z-30`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-black">Dreamland</h1>

        <div className="flex gap-5">
          <div className="hidden sm:block relative">
            <div
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black hover:bg-opacity-80 flex items-center gap-2 text-xl"
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
                className="absolute top-full right-0 mt-2 py-2 bg-black shadow-md rounded-md z-50 w-64 h-48 flex flex-col items-start justify-around opacity-100 transform translate-y-0 visible transition-all duration-300 ease-in-out"
                style={{ zIndex: 50 }} // Set high z-index for dropdown
              >
                <div
                  className="cursor-pointer text-white px-4 text-lg"
                  onClick={() => handleRedirect("/nearby-trails")}
                >
                  All trails
                </div>
                <div
                  className="cursor-pointer text-white px-4 text-lg"
                  onClick={() => handleRedirect("/all-trails")}
                >
                  Nearby Trails
                </div>
                <div
                  className="cursor-pointer text-white px-4 text-lg"
                  onClick={() => handleRedirect("/national-park-guides")}
                >
                  National park guides
                </div>
              </div>
            )}
          </div>

          <div className="hidden sm:flex gap-5">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => handleRedirect("/login")}
                  className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:bg-opacity-80 text-xl"
                >
                  Login
                </button>
                <button
                  onClick={() => handleRedirect("/register")}
                  className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:bg-opacity-80 text-xl"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="text-white">HI</div>
            )}
          </div>
        </div>
      </div>

      {isDropdownVisible && (
        <div className="sm:hidden bg-black p-4 z-50" style={{ zIndex: 50 }}>
          <div
            className="cursor-pointer text-white p-2"
            onClick={() => handleRedirect("/nearby-trails")}
          >
            All Trails
          </div>
          <div
            className="cursor-pointer text-white p-2"
            onClick={() => handleRedirect("/all-trails")}
          >
            Nearby Trails
          </div>
          <div
            className="cursor-pointer text-white p-2"
            onClick={() => handleRedirect("/national-park-guides")}
          >
            National park guides
          </div>
          {!isLoggedIn ? (
            <>
              <div
                className="cursor-pointer text-white p-2"
                onClick={() => handleRedirect("/login")}
              >
                Login
              </div>
              <div
                className="cursor-pointer text-white p-2"
                onClick={() => handleRedirect("/register")}
              >
                Sign Up
              </div>
            </>
          ) : (
            <div className="text-white p-2">HI</div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
