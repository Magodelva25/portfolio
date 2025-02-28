import React from "react";
import Herosection from "../components/herosection";
import InfoSection from "../components/infoSection";
import Divider from "../components/divider";
import Carousel from "../components/carousel";
import "../styles/landing.css";
import TechCard from "../components/techCard";
import info from "./../info.json";


const Landing = () => {
  const { skills } = info;

  return (
    <div className="landing-container">
        <Herosection />
      <div className="info">
        <InfoSection />
      </div>
      <div className="divider1">
        <Divider />
      </div>
      <div className="techs">
      {skills.map((skill, index) => (
          skill.keywords.map((keyword, i) => (
            <TechCard key={`${index}-${i}`} techs={keyword} />
          ))
        ))}

      </div>
      <div className="divider2">
        <Divider />
      </div>
      <div className="carousel">
        <Carousel/>
      </div>
    </div>
  );
};

export default Landing;
