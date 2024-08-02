"use client";
import { FaEye } from "react-icons/fa";

import React, { useState } from "react";
const ImageShow = ({ imageurl }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative flex items-center justify-center">
      <div className="group">
        <FaEye
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        ></FaEye>
        {hover && (
          <div className="absolute -left-3/4 transform -translate-x-3/4 mt-2 w-64 z-10 ">
            <img src={imageurl} alt="Hover" className="rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageShow;
