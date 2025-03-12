import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const VisitButton = (props) => {
  return (
    <div className="visit-home">
      <Link to={props.url} target="_blank">
       <div className="buttom-visit">
       <span>Visitar</span>
       <ArrowForwardIosIcon/>
       </div>
      </Link>
    </div>
  );
};

export default VisitButton;
