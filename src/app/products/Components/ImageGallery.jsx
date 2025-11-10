"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ImageGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="w-[627px] h-[635px] bg-gray-100 rounded-[20px] overflow-hidden mb-6">
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
            className={`w-[127px] h-[127px] rounded-[10px] overflow-hidden border-4 transition-all ${
              selectedImage === index
                ? 'border-[#7A9B57] shadow-lg scale-105'
                : 'border-gray-200 hover:border-[#7A9B57]/50'
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