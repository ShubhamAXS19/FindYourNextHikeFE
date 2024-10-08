"use client";
import React, { useEffect, useState } from "react";
import TourCard from "../(components)/TourCard/page";
import axios from "axios";
const ToursList = () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const fetchTours = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/tours");
      const data = await res.data.data.data;
      console.log(data);
      setTours(data);
    };
    fetchTours();
  }, []);
  return (
    <main className="main py-8 bg-gray-50">
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {tours.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </main>
  );
};

export default ToursList;
