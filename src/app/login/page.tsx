"use client";

import React from "react";
import Image from "next/image";
import backgroundImage from "../../../assets/login-signup.jpg";
import { TextField, Button } from "@mui/material";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

      {/* Login Form */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-6">Login to Your Account</h1>
        <form className="flex flex-col space-y-4 w-full max-w-md">
          {/* Email Field */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 1,
            }}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 1,
            }}
          />

          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "white",
              color: "black",
              padding: "12px 0",
              borderRadius: 1,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            }}
          >
            Login
          </Button>
          <div className="flex text-xl">
            <p>Don't have an account?</p>
            <Link href="/register" className="ml-2 text-blue-500 underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
