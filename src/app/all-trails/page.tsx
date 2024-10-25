"use client";
import React, { useEffect, useState } from "react";
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
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/tours/`
          );
          const data = res.data.data.data;
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main className="pt-16 sm:pt-20 lg:pt-28 bg-gray-50 min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {tours.map((tour: ITour) => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ToursList;
