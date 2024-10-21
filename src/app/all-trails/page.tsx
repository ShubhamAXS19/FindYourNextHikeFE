"use client";
import React, { useEffect, useState } from "react";
// import TourCard from "../(components)/TourCard/page";
import axios from "axios";
import { useRecoilState } from "recoil";
import TourCard from "./TourCard";
import { allTourAtom } from "../../Store/Atoms/tourAtom";
import { ITour } from "../Types/tour";

const ToursList = () => {
  const [tours, setTours] = useRecoilState<ITour[]>(allTourAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      if (tours.length === 0) {
        try {
          const res = await axios.get(
<<<<<<< HEAD
          `${process.env.NEXT_PUBLIC_API_URL}/tours/`
=======
            `${process.env.NEXT_PUBLIC_API_URL}/tours/`
>>>>>>> 8cba73c586d1ab2685b39e66a681e73016df8cfe
          );
          // const res = await axios.get(
          //   "https://vu2gsx77o6.execute-api.ap-south-1.amazonaws.com/prod/api/v1/tours"
          // );
          const data = res.data.data.data;
          console.log(process.env.NEXT_PUBLIC_API_URL);
          setTours(data);
        } catch (error) {
          console.error("Error fetching tours:", error);
        }
      }
      setLoading(false);
    };

    fetchTours();
  }, [tours, setTours]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // const tour = {
  //   startLocation: {
  //     description: "Vatnajökull National Park, Iceland",
  //     type: "Point",
  //     coordinates: [-16.7488, 64.0632],
  //     address: "Vatnajökull National Park, Southern Region, Iceland",
  //   },
  //   ratingsAverage: 4.9,
  //   ratingsQuantity: 120,
  //   images: [
  //     "trails/backpacking.jpg",
  //     "trails/camping.jpg",
  //     "trails/Dog-Hike.jpg",
  //   ],
  //   startDates: [
  //     "2022-05-01T08:00:00.000Z",
  //     "2022-07-15T08:00:00.000Z",
  //     "2022-09-10T08:00:00.000Z",
  //   ],
  //   _id: "5c88fa8cf4afda39709c3010",
  //   name: "The Vatnajökull Glacier Trek",
  //   duration: 8,
  //   maxGroupSize: 12,
  //   difficulty: "difficult",
  //   guides: ["5c8a23412f8fb814b56fa18c", "5c8a21f22f8fb814b56fa18a"],
  //   price: 1800,
  //   summary:
  //     "Trek across Europe's largest glacier in Vatnajökull National Park",
  //   description:
  //     "Embark on an adventurous trek across Vatnajökull, Iceland's massive glacier, and witness stunning ice caves, dramatic mountain peaks, and glacial landscapes.",
  //   imageCover: "vatnajokull-cover.jpg",
  //   locations: [
  //     {
  //       _id: "5c88fa8cf4afda39709c3011",
  //       description: "Skaftafell",
  //       type: "Point",
  //       coordinates: [-16.8757, 64.0168],
  //       day: 2,
  //     },
  //     {
  //       _id: "5c88fa8cf4afda39709c3012",
  //       description: "Jökulsárlón Glacier Lagoon",
  //       type: "Point",
  //       coordinates: [-16.1794, 64.0486],
  //       day: 6,
  //     },
  //   ],
  // };

  return (
    <main className="pt-28 bg-gray-50">
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {tours.map((tour: ITour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </main>
  );
};

export default ToursList;
