import React from "react";
import HeroSection from "../components/home/HeroSection";
import ImpactStats from "../components/home/ImpactStats";
import CTA from "../components/home/cta";
import Welcome from "../components/home/welcome";

const Home = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Welcome />
      <br />
      <ImpactStats />
      <br />
      <br />
      <HeroSection />

      <br />
      <br />
      <CTA />

      

    </div>
  );
};

export default Home;
