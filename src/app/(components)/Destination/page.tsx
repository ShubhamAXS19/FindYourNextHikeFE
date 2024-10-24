"use client";
import React from "react";

const VideoCard = ({
  videoSrc,
  title,
  description,
  className = "",
}: {
  videoSrc: string;
  title: string;
  description: string;
  className?: string;
}) => (
  <div
    className={`relative w-full h-[60vh] md:h-[50vh] lg:h-[60vh] ${className}`}
  >
    {/* Background Video */}
    <div className="absolute inset-0 z-0 rounded-lg overflow-hidden">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-40 z-5 rounded-lg"></div>
    {/* Content */}
    <div className="relative z-10 flex flex-col justify-end h-full text-left text-white p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold leading-tight">{title}</h2>
      <p className="mt-2 sm:mt-4 text-base sm:text-lg">{description}</p>
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-[1920px] mx-auto">
      <h1 className="text-xl sm:text-2xl my-4 sm:my-6">[Destinations]</h1>

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl lg:w-1/2">
          A unique blend of adventure, culture and natural wonders
        </h1>
        <p className="text-base sm:text-lg lg:text-xl lg:w-1/3">
          Discover a fusion of adventure, culture and scenic beauty across our
          diverse adventure destinations, offering unforgettable experiences at
          every turn.
        </p>
      </div>

      {/* Videos Grid */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Main Featured Video */}
        <VideoCard
          videoSrc="/assets/banff-kayaking.mp4"
          title="Arctic Adventures Awaits You"
          description="Explore the wonders of the North, from the stunning landscapes to the vibrant culture."
        />

        {/* Lower Videos Grid */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          <VideoCard
            videoSrc="/assets/snowy-mountain.mp4"
            title="Arctic Adventures Awaits You"
            description="Explore the wonders of the North, from the stunning landscapes to the vibrant culture."
            className="md:w-1/2"
          />

          <VideoCard
            videoSrc="/assets/antarctica.webm"
            title="Discover Kayaking in Banff"
            description="Embark on a breathtaking journey through the pristine waters of Banff."
            className="md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
