import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
          About Us
        </h1>
        <p className=" sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-light leading-relaxed text-gray-800 max-w-4xl">
          It all began with a single journey — a trip to the land of fire and
          ice that sparked a profound love for Iceland. Enchanted by its rugged
          beauty and rich culture, we knew we had found something truly special.
        </p>
      </div>

      {/* First Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
        {[
          { number: "95%", label: "Customer Satisfaction" },
          { number: "72+", label: "Popular Destinations" },
          { number: "250+", label: "Experience Guides" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-2">
              {stat.number}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Second Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            number: "450K+",
            label: "curated trails",
            description: "Discover unexpected gems, even in your own backyard.",
          },
          {
            number: "65M+",
            label: "fellow explorers",
            description:
              "Share your adventures and learn from our global community",
          },
          {
            number: "1.8B+",
            label: "logged kilometers",
            description:
              "Navigate your way and keep a record of all your travels.",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-2">
              {stat.number}
            </h2>
            <p className="text-base sm:text-lg font-medium text-gray-700 mb-2">
              {stat.label}
            </p>
            <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
