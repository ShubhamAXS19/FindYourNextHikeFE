// components/ParkGuides.js
import Card from "./card";

export default function ParkGuides() {
  const parks = [
    {
      title: "Top Picks in Zion National Park",
      backgroundImage: "/assets/landing-snow.jpg",
    },
    {
      title: "Backpacking in Great Smoky Mountains",
      backgroundImage: "/assets/landing-snow.jpg",
    },
    {
      title: "Top Picks in Yosemite National Park",
      backgroundImage: "/assets/landing-snow.jpg",
    },
    {
      title: "Hidden Gems in Acadia National Park",
      backgroundImage: "/assets/landing-snow.jpg",
    },
    {
      title: "Top Picks in Banff National Park",
      backgroundImage: "/assets/landing-snow.jpg",
    },
  ];

  return (
    <div className="relative flex justify-center items-center py-8">
      <div className="flex justify-center">
        {parks.map((park, index) => (
          <div key={index} className={` ml-100 ${index === 2 ? "z-20" : ""}`}>
            <Card
              title={park.title}
              backgroundImage={park.backgroundImage}
              isCenter={index === 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
