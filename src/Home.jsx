import React from "react";
import web from "../src/images/main.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow business with Thapa"
        imgsrc={web}
        visit ='/'
        btname="Get Started"
      />
    </>
  );
};

export default Home;
