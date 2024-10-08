"use client";

import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  // Handle redirect to different pages
  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: navBackground ? "rgba(0, 0, 0, 0.8)" : "transparent",
        backdropFilter: navBackground ? "blur(10px)" : "none",
        transition: "background-color 0.3s ease",
        boxShadow: "none",
        paddingX: 2, // 8 units on x-axis (2 * 4 = 8)
        paddingTop: 3, // 4 units from the top (1 * 4 = 4)
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
          {isLoggedIn ? (
            <Box sx={{ display: "flex", gap: "20px" }}>
              {/* Login Button */}
              <Button
                onClick={() => handleRedirect("/login")}
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "0.5rem 1.5rem",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                Login
              </Button>

              {/* Sign Up Button */}
              <Button
                onClick={() => handleRedirect("/register")}
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "0.5rem 1.5rem",
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
