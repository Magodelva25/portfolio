import React from "react";
import Herosection from "./../components/heroSection";
import InfoSection from "./../components/infoSection";
import Carousel from "./../components/landingCarousel";
import TechSliderAnimate from "./../components/techSliderAnimate";

const Landing = () => {
  return (
    <div className="landing-container">
      <Herosection />
      <div className="info">
        <InfoSection />
      </div>
      <div className="techs">
        <TechSliderAnimate />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default Landing;
