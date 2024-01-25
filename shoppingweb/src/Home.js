import React from "react";
import HeroCarousel from "./components/HeroCarousel"; 
import FeatureProduct from "./components/FeatureProduct";
import Trusted from "./components/Trusted";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <FeatureProduct />
      <Trusted />
    </>
  );
};

export default Home;
