"use client";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="m-[2vw]">
        <h1 className="text-2xl my-[2vh]">[Destinations]</h1>
        {/* div1 */}
        <div className="flex justify-between mb-[4vh]">
          <h1 className="text-4xl w-1/3 text-left">
            A unique blend of adventure, culture and natural wonders
          </h1>
          <p className="text-xl w-1/3 text-left">
            Discover a fusion of adventure, culture and scenic beauty across our
            diverse adventure destinations, offering unforgettable experiences
            at every turn.
          </p>
        </div>

        {/* div2 */}
        {/* top video  */}
        <div>
          <div className="relative w-full h-[60vh] mb-8">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
              <video
                src="/assets/banff-kayaking.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-xl"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-5 rounded-xl"></div>
            {/* Main Section (Text on Video) */}
            <div className="relative z-10 flex flex-col h-full text-left text-white p-6">
              <h1 className="text-3xl font-bold leading-tight">
                Arctic Adventures Awaits You
              </h1>
              <p className="mt-4 text-lg">
                Explore the wonders of the North, from the stunning landscapes
                to the vibrant culture.
              </p>
            </div>
          </div>
        </div>

        {/* div3 */}

        <div className="flex justify-between">
          {/* lower left */}
          <div className="relative w-1/2 h-[60vh] mr-8">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
              <video
                src="/assets/snowy-mountain.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-xl"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-5 rounded-xl"></div>
            {/* Main Section (Text on Video) */}
            <div className="relative z-10 flex flex-col h-full text-left text-white p-6">
              <h1 className="text-3xl font-bold leading-tight">
                Arctic Adventures Awaits You
              </h1>
              <p className="mt-4 text-lg">
                Explore the wonders of the North, from the stunning landscapes
                to the vibrant culture.
              </p>
            </div>
          </div>

          {/* lower right */}
          <div className="relative w-1/2 h-[60vh]">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 rounded-xl overflow-hidden">
              <video
                src="/assets/antarctica.webm"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 z-5 rounded-xl"></div>
            {/* Main Section (Text on Video) */}
            <div className="relative z-10 flex flex-col  h-full text-left text-white p-6">
              <h1 className="text-3xl font-bold leading-tight">
                Discover Kayaking in Banff
              </h1>
              <p className="mt-4 text-lg">
                Embark on a breathtaking journey through the pristine waters of
                Banff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
