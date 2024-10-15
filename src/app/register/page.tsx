"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../../Store/Atoms/userAtom"; // Assuming you have a userAtom atom

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [userID, setUserID] = useState("");

  const router = useRouter();
  const setUser = useSetRecoilState(userAtom);

  const handleVerification = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("userID", userID);
    toast.promise(
      axios.post(
        `http://localhost:9000/api/v1/users/verifyEmail/${userID}/${verificationCode}`,
        {
          id: userID,
          verificationCode: verificationCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ),
      {
        loading: "Verifying your account...",
        success: () => {
          toast.success("Verification Successful! Please login.");
          toast("Redirecting to login page...", {
            duration: 2000,
            icon: "🚀",
          });
          setTimeout(() => {
            router.push("/login");
          }, 2500);
          return "Verification Successful! Please login.";
        },
        error: () => {
          return "Something went wrong. Please try again.";
        },
      }
    );
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(
      axios.post(
        "http://localhost:9000/api/v1/users/signup",
        {
          name: fullName,
          password,
          passwordConfirm: confirmPassword,
          email,
          role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ),
      {
        loading: "Registering your account...",
        success: (response) => {
          setIsModalOpen(true);
          setUserID(response.data.userId); // Assuming the backend returns a userId
          setUser(response.data.user); // Update Recoil state with user data
          return "Registration Successful! Please check your email.";
        },
        error: (err) => {
          const status = err.response?.status;
          if (status === 409) {
            return "Account already exists.";
          }
          return "Something went wrong. Please try again.";
        },
      }
    );
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/login-signup.jpg"
          alt="Register Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-5"></div>

      {/* Registration Form */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-6">Create an Account</h1>
        <form
          onSubmit={handleRegister}
          className="flex flex-col space-y-4 w-full max-w-md"
        >
          <TextField
            label="Full Name"
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
            onChange={(e) => setFullName(e.target.value)}
          />
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
            onChange={(e) => setEmail(e.target.value)}
          />
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
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
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <TextField
            label="User | Admin | Guide | Lead Guide"
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
            onChange={(e) => setRole(e.target.value)}
          />
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
            Register
          </Button>
        </form>
        <div className="flex text-xl mt-4">
          <p>Already have an account?</p>
          <Link href="/login" className="ml-2 text-blue-500 underline">
            Login
          </Link>
        </div>
      </div>

      {/* Verification Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <h2 className="text-2xl mb-4 text-gray-800">Verify Your Email</h2>
            <p className="text-lg mb-6 text-gray-600">
              A verification email has been sent to {email}. Please enter the
              verification code to verify and continue.
            </p>
            <form onSubmit={handleVerification} className="space-y-4">
              <TextField
                label="Verification Code"
                variant="outlined"
                fullWidth
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <TextField
                label="UserId"
                variant="outlined"
                fullWidth
                onChange={(e) => setUserID(e.target.value)}
              />
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
              >
                Verify
              </Button>
            </form>
          </div>
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default RegisterPage;
