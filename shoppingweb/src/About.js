import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "Design&Sence Brand",
  };

  return <HeroSection myData={data} />;
};

export default About;