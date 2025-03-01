import React from 'react';
import { motion } from "framer-motion";
import info from "./../info.json";
import TechCard from "./techCard";

const TechSliderAnimate = () => {
  const { skills } = info;
  const techItems = skills.flatMap((skill, index) =>
    skill.keywords.map((keyword, i) => (
      <TechCard key={`${index}-${i}`} techs={keyword} />
    ))
  );

  return (
    <div className="techs-container">
      <div className="techs">
        <motion.div
          className="techs-slider"
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, duration: 500, ease: "linear" }}
        >
          {techItems.concat(techItems, techItems, techItems, techItems, techItems, techItems, techItems, techItems, techItems)}
        </motion.div>
      </div>
    </div>
  );
};

export default TechSliderAnimate;
