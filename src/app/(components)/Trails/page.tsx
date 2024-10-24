"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const activitiesGroup1 = [
  { name: "Hiking", imageSrc: "/trails/hikinh.jpg" },
  { name: "Mountain biking", imageSrc: "/trails/Mountain-bike.jpg" },
  { name: "Winter Camping", imageSrc: "/trails/winter-camping.jpg" },
  { name: "Dog-friendly", imageSrc: "/trails/Dog-Hike.jpg" },
  { name: "Rock Climbing", imageSrc: "/trails/rock-climb.jpg" },
  { name: "Surfing", imageSrc: "/trails/surf.jpg" },
];

const activitiesGroup2 = [
  { name: "Back Packing", imageSrc: "/trails/backpacking.jpg" },
  { name: "Paddle Boarding", imageSrc: "/trails/paddle-board.jpg" },
  { name: "Off Roading", imageSrc: "/trails/off-roading.jpg" },
  { name: "Camping", imageSrc: "/trails/camping.jpg" },
  { name: "Scenic driving", imageSrc: "/trails/sky-dive.jpg" },
  { name: "Skiing", imageSrc: "/trails/ski.jpg" },
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
    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:h-[80vh] p-4 lg:px-10 bg-trail">
      <div className="w-full lg:w-2/3">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center h-12 w-12 md:h-16 md:w-24 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            <FaArrowLeft className="h-6 w-6 md:h-8 md:w-8" size={40} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {activities.map((activity) => (
              <div key={activity.name} className="relative w-full">
                <div className="relative w-full" style={{ paddingTop: "90%" }}>
                  <Image
                    src={activity.imageSrc}
                    alt={activity.name}
                    className="rounded-3xl object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-4 left-2 bg-opacity-50 text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold p-2 rounded-b-lg">
                  {activity.name}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center justify-center h-12 w-12 md:h-16 md:w-24 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            <FaArrowRight className="h-6 w-6 md:h-8 md:w-8" size={40} />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between items-start gap-6 lg:gap-14 text-center w-full lg:w-1/3 mt-8 lg:mt-0">
        <h2 className="sm:text-lg md:text-xl lg:text-3xl xl:text-5xl text-left font-semibold">
          Trails that fit your nature
        </h2>
        <p className="sm:text-base md:text-lg lg:text-2xl xl:text-4xl text-left text-gray-500">
          Whether you are pushing your limits or pushing a stroller, we have got
          you covered.
        </p>
        <button className="px-6 py-2 bg-green-600 text-white sm:text-base md:text-base lg:text-xl xl:text-3xl rounded-full hover:bg-green-700">
          Sign up
        </button>
      </div>
    </div>
  );
}
