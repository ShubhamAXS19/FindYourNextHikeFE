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
  <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
    <Image
      src={imageSrc}
      alt={`Adventure by ${username}`}
      width={600}
      height={600}
      className="w-full sm:h-40 md:h-48 lg:h-54 xl:h-60 object-cover"
    />
    <div className="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black bg-opacity-30 px-2 py-1 rounded">
      @{username}
    </div>
  </div>
);

const SocialIcon = ({
  Icon,
  label,
}: {
  Icon: React.ElementType;
  label: string;
}) => (
  <button
    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-100 flex items-center justify-center transition-colors duration-200 border border-gray-200"
    aria-label={label}
  >
    <Icon size={20} className="text-gray-600 hover:text-green-700" />
  </button>
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
  const socialIcons = [
    { Icon: GrInstagram, label: "Instagram" },
    { Icon: FaTiktok, label: "TikTok" },
    { Icon: FaFacebookF, label: "Facebook" },
    { Icon: FaXTwitter, label: "X" },
    { Icon: GrLinkedinOption, label: "LinkedIn" },
  ];
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900">
            Share your next adventure
          </h1>
          <div className="flex flex-wrap gap-3">
            {socialIcons.map(({ Icon, label }) => (
              <SocialIcon key={label} Icon={Icon} label={label} />
            ))}
          </div>
        </div>

        <p className="text-base sm:text-lg mb-8 text-gray-700">
          Show us how you #GetOutThere by tagging us @AllTrails for a chance to
          be featured!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {adventures.map((adventure) => (
            <AdventureCard
              key={adventure.id}
              imageSrc={adventure.imageSrc}
              username={adventure.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdventureSharingComponent;
