import React, { useState, useEffect } from "react";
import Image from "next/image";

interface RollingImagesProps {
  images: string[];
  staticText: string;
  changingWords: string[];
}

const RollingImages: React.FC<RollingImagesProps> = ({
  images,
  staticText,
  changingWords,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[90vw] h-[60vh] aspect-[4/3] relative overflow-hidden rounded-2xl sm:w-[85vw] sm:h-[65vh] md:w-[80vw] md:h-[70vh] lg:w-[80vw] lg:h-[75vh] xl:w-[90vw] xl:h-[80vh]">
      {[currentIndex, nextIndex].map((index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100"
              : "opacity-0 translate-y-full"
          }`}
        >
          <Image
            src={images[index]}
            alt={`Landing image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority // Ensure images load responsively
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
        <h2 className="text-2xl font-bold text-white p-2 bg-black bg-opacity-50 rounded-lg inline-flex items-baseline sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span>{staticText}</span>{" "}
          <span className="inline-block overflow-hidden h-[1.2em] ml-2 sm:h-[1.5em]">
            {[currentIndex, nextIndex].map((index) => (
              <span
                key={index}
                className={`block transition-all duration-1000 ease-in-out ${
                  index === currentIndex ? "translate-y-0" : "translate-y-full"
                }`}
              >
                {changingWords[index]}
              </span>
            ))}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default RollingImages;
