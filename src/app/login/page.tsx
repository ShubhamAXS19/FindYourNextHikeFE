"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../../Store/Atoms/userAtom"; // Assuming you have a userAtom atom

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const setUser = useSetRecoilState(userAtom);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/api/v1/users/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("accessToken", res.data.token);
      setUser(res.data.user); // Update Recoil state with user data

      toast.success("Welcome Aboard!!!");
      toast.success("Let's Explore!!!");
      router.push("/all-trails");
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/login-signup.jpg"
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
        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-4 w-full max-w-md"
        >
          {/* Email Field */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          {/* Forgot Password Link */}
          <Link
            href="/forgot-password"
            className="text-blue-500 text-sm self-start"
          >
            Forgot Password?
          </Link>

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
            <p>Don&apos;t have an account?</p>
            <Link href="/register" className="ml-2 text-blue-500 underline">
              Register
            </Link>
          </div>
        </form>
      </div>

      <Toaster />
    </div>
  );
};

export default LoginPage;
