import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import Image from "next/image";
interface AdventureCardProps {
  imageSrc: string;
  username: string;
}
const AdventureCard: React.FC<AdventureCardProps> = ({
  imageSrc,
  username,
}) => (
  <div className="relative rounded-lg overflow-hidden">
    <Image
      src={imageSrc}
      alt={`Adventure by ${username}`}
      width={400}
      height={200}
      className="w-full h-48 object-cover"
    />
    <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
      @{username}
    </div>
  </div>
);

const AdventureSharingComponent = () => {
  const adventures = [
    {
      id: 1,
      imageSrc: "/assets/login-signup.jpg",
      username: "everydayadventurefam",
    },
    { id: 2, imageSrc: "/assets/login-signup.jpg", username: "kylamsteele" },
    { id: 3, imageSrc: "/assets/login-signup.jpg", username: "veganpattyy" },
    {
      id: 4,
      imageSrc: "/assets/login-signup.jpg",
      username: "anastasias.true",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[70vw] mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-green-900">
            Share your next adventure
          </h1>
          <div className="flex space-x-2">
            <GrInstagram size={24} />
            <FaTiktok size={24} />
            <FaFacebookF size={24} />
            <FaXTwitter size={24} />
            <GrLinkedinOption size={24} />
          </div>
        </div>
        <p className="text-lg mb-6">
          Show us how you #GetOutThere by tagging us @AllTrails for a chance to
          be featured!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {adventures.map((adventure) => (
            <AdventureCard
              key={adventure.id}
              imageSrc={adventure.imageSrc}
              username={adventure.username}
            />
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-gray-500 hover:text-gray-700">&lt;</button>
          <button className="text-gray-500 hover:text-gray-700">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default AdventureSharingComponent;
