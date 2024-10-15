"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ITour } from "@/app/Types/tour";

interface Params {
  name: string;
}

const TourDetailPage = ({ params }: { params: Params }) => {
  const { name } = params;

  const [tourDetail, setTourDetail] = useState<ITour | undefined>();

  function decodeTitle(encodedTitle: string) {
    return decodeURIComponent(encodedTitle);
  }

  const decodedTitle = decodeTitle(name);

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/v1/tours/${decodedTitle}`
        );
        setTourDetail(response.data.data.tour);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTourDetails();
  }, [decodedTitle]);

  console.log(tourDetail);

  return (
    <div className="mt-24">
      <h1>{tourDetail?.name}</h1>
      <p>{tourDetail?.description}</p>
    </div>
  );
};

export default TourDetailPage;
