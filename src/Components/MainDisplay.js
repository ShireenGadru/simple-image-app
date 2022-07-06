import React from "react";
import "./MainDisplay.css";

const MainDisplay = ({ imgPath }) => {
  return (
    <div className="display-container">
      <img src={imgPath} alt="" className="mainImg" />
    </div>
  );
};

export default MainDisplay;
