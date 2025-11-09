"use client";
import React, { useState } from "react";

const PriceSlider = () => {

  const [value, setValue] = useState(5000); 
  

  const progressFillColor = "#7A9B57"; 
  
  const remainingTrackColor = "#F5F5DC";
  const handleColor = "#CC7722"; 

  
  const numericValue = Number(value);
  const percentage = (numericValue / 10000) * 100; 
  
 
  const sliderStyle = {
 
    background: `linear-gradient(to right, ${progressFillColor} 0%, ${progressFillColor} ${percentage}%, ${remainingTrackColor} ${percentage}%, ${remainingTrackColor} 100%)`,
 
    accentColor: handleColor,
  };

  return (
    <div className="w-[254px] ">
      <input
        type="range"
        min="0"
        max="10000"
        value={value}
       
        onChange={(e) => setValue(e.target.value)}
     
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={sliderStyle}
      />
      <div className="flex justify-between text-sm mt-2 text-gray-700">
        <span>৳ 0</span>
        <span>৳ 10,000+</span>
      </div>
      <div className="text-right font-medium mt-1" style={{ color: progressFillColor }}>
        Selected: ৳ {numericValue.toLocaleString()}
      </div>
    </div>
  );
};

export default PriceSlider;