"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ExploreIcon from "@mui/icons-material/Explore";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const isLoggedIn = true;
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const showDropdown = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    const timeout = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <AppBar
      position="fixed"
      className={`transition-colors duration-300 ease-in-out ${
        navBackground
          ? "bg-black bg-opacity-80 backdrop-blur"
          : "bg-transparent"
      } shadow-none px-4 py-6`}
    >
      <Toolbar className="justify-between">
        <Typography
          variant="h6"
          component="div"
          className="font-bold text-black"
        >
          Dreamland
        </Typography>

        <Box className="flex gap-5">
          <div className="hidden sm:block relative">
            <Button
              variant="contained"
              className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:bg-opacity-80"
              startIcon={<ExploreIcon />}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              Explore
            </Button>

            {isDropdownVisible && (
              <Box
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="absolute top-full right-0 mt-2 bg-black shadow-md rounded-md z-10 w-48 opacity-100 transform translate-y-0 visible transition-all duration-300 ease-in-out"
              >
                <MenuItem onClick={() => handleRedirect("/nearby-trails")}>
                  <p className="text-white pt-2">Nearby trails</p>
                </MenuItem>
                <MenuItem onClick={() => handleRedirect("/all-trails")}>
                  <p className="text-white pt-2">All Trails</p>
                </MenuItem>
                <MenuItem
                  onClick={() => handleRedirect("/national-park-guides")}
                >
                  <p className="text-white pt-2">National park guides</p>
                </MenuItem>
              </Box>
            )}
          </div>

          <div className="hidden sm:flex gap-5">
            {isLoggedIn ? (
              <>
                <Button
                  onClick={() => handleRedirect("/login")}
                  variant="contained"
                  className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:bg-opacity-80"
                >
                  Login
                </Button>
                <Button
                  onClick={() => handleRedirect("/register")}
                  variant="contained"
                  className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:bg-opacity-80"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Typography className="text-white">HI</Typography>
            )}
          </div>

          <Button className="sm:hidden" onClick={toggleDropdown}>
            <MenuIcon />
          </Button>
        </Box>
      </Toolbar>

      {isDropdownVisible && (
        <Box className="sm:hidden bg-black p-4">
          <MenuItem onClick={() => handleRedirect("/nearby-trails")}>
            <Typography className="text-white">All Trails</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleRedirect("/all-trails")}>
            <Typography className="text-white">Nearby Trails</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleRedirect("/national-park-guides")}>
            <Typography className="text-white">National park guides</Typography>
          </MenuItem>
          {isLoggedIn ? (
            <>
              <MenuItem onClick={() => handleRedirect("/login")}>
                <Typography className="text-white">Login</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleRedirect("/register")}>
                <Typography className="text-white">Sign Up</Typography>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <Typography className="text-white">HI</Typography>
            </MenuItem>
          )}
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
