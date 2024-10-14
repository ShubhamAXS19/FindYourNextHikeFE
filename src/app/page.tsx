import React from "react";
import Banner from "./(components)/Banner/page";
import Destination from "./(components)/Destination/page";
import AboutUs from "./(components)/AboutUs/page";
import Trails from "./(components)/Trails/page";
import Share from "./(components)/Share/page";
const page = () => {
  return (
    <div>
      <Banner />
      <Trails />
      <AboutUs />
      <Share />
      <Destination />
    </div>
  );
};

export default page;
