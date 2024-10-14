"use client";
import React, { useEffect, useState } from "react";
// import TourCard from "../(components)/TourCard/page";
import axios from "axios";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { allTourAtom } from "../../Store/Atoms/tourAtom";
import { ITour, TourProps } from "../Types/tour";

const TourCard: React.FC<TourProps> = ({ tour }) => {
  return <div>{tour.name}</div>;
};

const ToursList = () => {
  const [tours, setTours] = useRecoilState<ITour[]>(allTourAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      if (tours.length === 0) {
        try {
          const res = await axios.get("http://localhost:5000/api/v1/tours");
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
    return <div>Loading...</div>;
  }

  return (
    <main className="main py-8 bg-gray-50">
      <div className="card-container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {tours.map((tour: ITour) => (
          <Link key={tour._id} href={`/tour/${tour._id}`} className="block">
            <TourCard tour={tour} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ToursList;
