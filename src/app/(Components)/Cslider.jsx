"use client";
import Image from 'next/image';
import React from 'react'
import Deliciosa from '/public/Deliciosa.svg'
import Shvets from '/public/Shvets.svg'
import Pavel from '/public/Pavel.svg'
import  Stroobants from '/public/Stroobants.svg'
import Slider from "react-slick";
import next from "/public/NextPage.svg"
import ProductCard from './ProductCard';
function NextArrow({ onClick }) {
    return (
        <div
            onClick={onClick}
            className="absolute -right-12 top-1/2 -translate-y-1/2 cursor-pointer z-10"
        >
            <Image src={next} alt="Next" />
        </div>
    );
}

const Cslider = () => {
      const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <NextArrow/>
  };
  return (
      <div className="slider-container">
      <Slider {...settings}>
        <ProductCard Productimg={Deliciosa} Name={'Monstera Deliciosa'} Type={"Indoor Plant"} Price={"2000 - 3,400"} review={"(24)"}/>
<ProductCard Productimg={Shvets} Name={'Organic Compost Fertilizer'} Type={"Fertilizer"} Price={"60 - 440"} review={"(12)"}/>
<ProductCard Productimg={Pavel} Name={'Pruning Shears'} Type={"Equipment"} Price={"180 - 450"} review={"(34)"}/>
<ProductCard Productimg={Stroobants} Name={'Snake Plant'} Type={"Indoor Plant"} Price={" 150- 500 "} review={"(35)"}/>
<ProductCard Productimg={Shvets} Name={'Organic Compost Fertilizer'} Type={"Fertilizer"} Price={"60 - 440"} review={"(12)"}/>
<ProductCard Productimg={Stroobants} Name={'Snake Plant'} Type={"Indoor Plant"} Price={" 150- 500 "} review={"(35)"}/>
      </Slider>
    </div>
  )
}

export default Cslider