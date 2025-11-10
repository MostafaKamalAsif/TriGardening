"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ImageGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className=" ">
      {/* Main Image */}
      <div className="w-[627px] h-[635px] bg-gray-100 drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)]  rounded-[31px] overflow-hidden mb-6.5">
        <Image
          src={images[selectedImage]}
          alt={`${productName} - Image ${selectedImage + 1}`}
          width={627}
          height={635}
          className="w-full h-full object-cover"
        />
      </div>
 
      {/* Thumbnail Images */}
      <div className="flex items-center gap-x-[39px]">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-[127px] h-[127px] rounded-[10px] overflow-hidden border-4 transition-all cursor-pointer ${
              selectedImage === index
                ? '  drop-shadow-[0_4px_10.5px_rgba(0,0,0,0.11)] scale-105'
                : 'border-gray-200 hover:border-[#CDCDCD] '
            }`}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              width={150}
              height={120}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;