import React from "react";
import web from "../src/images/about.png"
import Common from "./Common";

const About = () => {
  return (
    <>
        <Common
        name="Welcome To About Page"
        imgsrc={web}
        visit ='/'
        btname="Dicover More"
      />
    </>
  );
};

export default About;
