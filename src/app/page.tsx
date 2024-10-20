import React from "react";
import Banner from "../../src/app/(components)/Banner/page";
import Destination from "../../src/app/(components)/Destination/page";
import AboutUs from "../../src/app/(components)/AboutUs/page";
import Trails from "../../src/app/(components)/Trails/page";
import Share from "../../src/app/(components)/Share/page";

const page = () => {
  return (
    <div>
      <Banner />
      <Trails />
      <Destination />
      <AboutUs />
      <Share />
    </div>
  );
};

export default page;
