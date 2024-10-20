import Link from "next/link";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { TourProps } from "../Types/tour";
import { FaArrowRight } from "react-icons/fa6";

const TourCard: React.FC<TourProps> = ({ tour }) => {
  return (
    <div className="w-full m-auto border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {tour.images && tour.images.length > 0 ? (
          tour.images.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <div className="w-[25vw] h-[15vw] md:w-full md:h-[25vw] relative">
                <Link href={`/tour/${tour.name}`}>
                  <img
                    src={`/${image}`}
                    alt={`Tour image ${index + 1}`}
                    className="flex items-center justify-center w-full h-full object-cover"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div>No images available for this tour.</div>
          </SwiperSlide>
        )}
      </Swiper>
      <div className="flex items-center justify-center my-2">
        <div className="flex-grow border-t-2 mx-4"></div>
      </div>
      {/* content */}
      <div className="flex flex-col items-left p-4 ">
        <h2 className="text-2xl underline font-bold">{tour.name}</h2>
        <p className="text-gray-500">
          Start Location : {tour.startLocation?.address}
        </p>
        <div className="flex items-center mt-2 justify-start gap-3">
          <span className="bg-[#F7B538] py-2 px-4 rounded-md font-medium">
            Duration : {tour.duration} Days
          </span>
          <span className="bg-[#F7B538] py-2 px-4 rounded-md font-medium">
            Difficulty Level:{" "}
            {tour.difficulty === "easy"
              ? "Easy"
              : tour.difficulty === "medium"
              ? "Medium"
              : "Tough"}
          </span>

          <p className="bg-[#F7B538] py-2 px-4 rounded-md font-medium">
            {tour.ratingsQuantity} Reviews
          </p>
        </div>

        <div className="flex flex-row items-center justify-start gap-4 mt-2">
          <div className="inline-flex items-center bg-[#DB7C26] py-2 px-4 rounded-md text-blue-100 font-medium">
            <p className="mr-2">Rating:</p>
            <Rating
              name="half-rating"
              defaultValue={tour.ratingsAverage}
              precision={0.1}
            />
            <p className="ml-2">{tour.ratingsAverage} / 5</p>
          </div>
          <div className="inline-flex items-center bg-[#a7c957] py-2 px-4 rounded-md font-medium">
            Flat{" "}
            {tour.priceDiscount
              ? ((tour.priceDiscount / tour.price) * 100).toFixed(1)
              : Math.floor(Math.random() * 50)}
            % Off for next {Math.floor(Math.random() * 10)} user
          </div>
        </div>

        <div></div>

        <div className=" bg-blue-500 text-white py-2 px-4 mt-2 rounded-md font-medium">
          <Link href={`/tour/${tour.name}`} className="flex items-center gap-1">
            <p>More Detail </p>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
