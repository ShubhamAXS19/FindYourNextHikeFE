"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ExploreIcon from "@mui/icons-material/Explore"; // Import an icon for the Explore button

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(
    null
  ); // Timeout state
  const isLoggedIn = true;
  const router = useRouter();

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavBackground(true); // Change background when scrolled 100px
    } else {
      setNavBackground(false); // Remove background when at the top
    }
  };

  // UseEffect to listen for scroll event
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  // Handle redirect to different pages
  const handleRedirect = (path: string) => {
    router.push(path);
  };

  // Show dropdown
  const showDropdown = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout); // Clear any existing timeout to prevent hiding
    setDropdownVisible(true);
  };

  // Hide dropdown with a delay
  const hideDropdown = () => {
    const timeout = setTimeout(() => {
      setDropdownVisible(false);
    }, 200); // Add delay of 200ms before hiding dropdown
    setDropdownTimeout(timeout);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: navBackground ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: navBackground ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease",
        boxShadow: "none",
        paddingX: 2,
        paddingTop: 3,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo / Brand Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          SNAELAND
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          {/* Explore Button with Hover Dropdown */}
          <Box
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
            sx={{ position: "relative" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                padding: "0.5rem 1.5rem",
                borderRadius: 4,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
              startIcon={<ExploreIcon />} // Icon for Explore
            >
              Explore
            </Button>

            {/* Dropdown Menu */}
            {isDropdownVisible && (
              <Box
                onMouseEnter={showDropdown} // Ensure the dropdown stays open when hovering over it
                onMouseLeave={hideDropdown} // Hide when mouse leaves dropdown
                sx={{
                  position: "absolute",
                  top: "110%", // Position dropdown just below the button
                  right: 5, // Align to the left
                  backgroundColor: "white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  zIndex: 1,
                  height: "15vh",
                  opacity: isDropdownVisible ? 1 : 0,
                  transform: isDropdownVisible
                    ? "translateY(0)"
                    : "translateY(-10px)",
                  visibility: isDropdownVisible ? "visible" : "hidden",
                  transition:
                    "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
                }}
              >
                <MenuItem onClick={() => handleRedirect("/nearby-trails")}>
                  <p className="text-black pt-2">Nearby trails</p>
                </MenuItem>
                <MenuItem onClick={() => handleRedirect("/all-trails")}>
                  <p className="text-black pt-2">All Trails</p>
                </MenuItem>
                <MenuItem
                  onClick={() => handleRedirect("/national-park-guides")}
                >
                  <p className="text-black pt-2">National park guides</p>
                </MenuItem>
              </Box>
            )}
          </Box>

          {/* Login and Sign Up Buttons */}
          {isLoggedIn ? (
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
                onClick={() => handleRedirect("/login")}
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "0.5rem 1.5rem",
                  borderRadius: 4,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                Login
              </Button>

              <Button
                onClick={() => handleRedirect("/register")}
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "0.5rem 1.5rem",
                  borderRadius: 4,
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          ) : (
            <Typography sx={{ color: "white" }}>HI</Typography>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
