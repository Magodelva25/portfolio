import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import info from "./../info.json";
import TechCard from "./techCard";

const TechSliderAnimate = () => {
  const { skills } = info;

  // Generamos los elementos a mostrar
  const techItems = skills.flatMap((skill, skillIndex) =>
    skill.keywords.map((keyword, index) => (
      <TechCard key={`${skillIndex}-${index}`} techs={keyword} />
    ))
  );

  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - -itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const firstPosition = e.pageX - itemsRef.current.offsetLeft;
    const pasos = (firstPosition - startX) * 0.8;
    itemsRef.current.scrollLeft = scrollLeft - pasos;
  };

  return (
    <div className="techs-container">
      {/* El div del slider debe permitir overflow para hacer el efecto */}
      <div
        ref={itemsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="techs-slider"
      >
        <motion.div
          className="techs-items"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          {techItems.concat(techItems)}
        </motion.div>
      </div>
    </div>
  );
};

export default TechSliderAnimate;
