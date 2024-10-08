import React from "react";
import Banner from "./(components)/Banner/page";
import Destination from "./(components)/Destination/page";
import AboutUs from "./(components)/AboutUs/page";
const page = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      {/* trail that fits you */}
      <Destination />
    </div>
  );
};

export default page;
