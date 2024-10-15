"use client";

import React from "react";
import RollingImages from "./Rolling"; // Adjust the import path as needed
import landing1 from "../../../../public/assets/landing-snow.jpg";
import landing2 from "../../../../public/assets/login-signup.jpg";
import landing3 from "../../../../public/assets/landing.jpg";

const LandingPage = () => {
  // Extract the `src` from each StaticImageData object
  const images = [landing1.src, landing2.src, landing3.src];
  const staticText = "Welcome to Our";
  const changingWords = ["Wonderland", "Journey", "Adventure"];

  return (
    <div className="flex justify-center items-center h-[90vh] p-4">
      <RollingImages
        images={images}
        staticText={staticText}
        changingWords={changingWords}
      />
    </div>
  );
};

export default LandingPage;
