"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6"; // Import icons
import { FaArrowRight } from "react-icons/fa"; // Import icons
import Image from "next/image";

const activitiesGroup1 = [
  { name: "Hiking", imageSrc: "/assets/landing.jpg" },
  { name: "Mountain biking", imageSrc: "/assets/landing.jpg" },
  { name: "Running", imageSrc: "/assets/landing.jpg" },
  { name: "Dog-friendly", imageSrc: "/assets/landing.jpg" },
  { name: "Wheelchair-friendly", imageSrc: "/assets/landing.jpg" },
  { name: "Road biking", imageSrc: "/assets/landing.jpg" },
];

const activitiesGroup2 = [
  { name: "Backpacking", imageSrc: "/assets/landing.jpg" },
  { name: "Walking", imageSrc: "/assets/landing.jpg" },
  { name: "Stroller-friendly", imageSrc: "/assets/landing.jpg" },
  { name: "Camping", imageSrc: "/assets/landing.jpg" },
  { name: "Scenic driving", imageSrc: "/assets/landing.jpg" },
  { name: "Kid-friendly", imageSrc: "/assets/landing.jpg" },
];

export default function ActivityCarousel() {
  const [currentGroup, setCurrentGroup] = useState(1);

  const handleNext = () => {
    setCurrentGroup(currentGroup === 1 ? 2 : 1);
  };

  const handlePrevious = () => {
    setCurrentGroup(currentGroup === 2 ? 1 : 2);
  };

  const activities = currentGroup === 1 ? activitiesGroup1 : activitiesGroup2;

  return (
    <div className="flex items-center justify-between w-full gap-8 h-[80vh] px-20 bg-[#f2e8cf]">
      <div className="w-2/3">
        <div className="mt-6 flex items-center space-x-4">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center h-16 w-24 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            <FaArrowLeft size={40} />
          </button>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activities.map((activity) => (
              <div key={activity.name} className="relative">
                <Image
                  src={activity.imageSrc}
                  alt={activity.name}
                  className="rounded-3xl"
                  width={600}
                  height={700}
                  objectFit="cover"
                />
                <div className="absolute bottom-4 left-6 bg-opacity-50 text-white text-3xl font-bold p-2 rounded-b-lg">
                  {activity.name}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="flex items-center justify-center h-16 w-24 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            <FaArrowRight size={40} />
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-between mt-6 text-center w-1/3">
        <h2 className="text-7xl text-left font-semibold">
          Trails that fit your nature
        </h2>
        <p className="text-4xl text-left text-gray-500 mt-2">
          Whether you are pushing your limits or pushing a stroller, we have got
          you covered.
        </p>
        <button className="px-6 py-2 bg-green-600 text-white text-3xl rounded-full hover:bg-green-700">
          Sign up
        </button>
      </div>
    </div>
  );
}
