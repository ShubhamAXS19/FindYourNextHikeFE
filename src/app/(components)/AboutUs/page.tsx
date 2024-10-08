import React from "react";

const page = () => {
  return (
    <div className="mx-8 my-6">
      <h1 className="text-2xl">[About Us]</h1>
      <p className="text-4xl mt-4">
        It all began with a single journey — a trip to the land of fire and ice
        that sparked a profound love for Iceland. Enchanted by its rugged beauty
        and rich culture, we knew we had found something truly special.
      </p>
      <div className="flex items-center justify-evenly mt-8">
        <div className="flex flex-col">
          <h2 className="text-6xl">95%</h2>
          <p className="text-lg">Customer Satisfaction</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-6xl">72+</h2>
          <p className="text-lg">Popular Destinations</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-6xl">250+</h2>
          <p className="text-lg">Experience Guides</p>
        </div>
      </div>
    </div>
  );
};

export default page;
