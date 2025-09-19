import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const VisitButton = () => {
  return (
    
      <div className="visit-home cursor-target">
        <div className="buttom-visit cursor-target">
          <span className="cursor-target">Visitar</span>
        </div>
        <ArrowForwardIosIcon 
          className="cursor-target"
        />
      </div>
  );
};

export default VisitButton;
