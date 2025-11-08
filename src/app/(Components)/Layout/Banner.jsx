"use client";
import React from 'react'
import Button from '../Button'
import Link from 'next/link'

import Slider from "react-slick";

import Container from '../Container';
const Banner = () => {
      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
      
  };
  return (
   <>
   
      <div className='slider-container relative  overflow-hidden'>
      <Slider {...settings} >
       <div className="bg-[url(/banner.svg)] bg-no-repeat bg-center bg-cover pt-[242px] pb-72">
<Container className={""}>
   <h1 className='font-semibold text-[58.59px] text-white '>Nurture Your Green Paradise</h1>
   <p className='text-[29.29px] pt-3.5 pb-[60px]'>Your slogan goes here</p>
   <div className=" gap-x-11 flex items-center">
    <Button className={"bg-[#CC7722] rounded-[63.16px] px-[72px] py-[23px] text-[29.29px] font-medium"}><Link href={"/products"}>Shop Now</Link></Button>
    <Button className={"bg-[#CC7722] rounded-[63.16px] px-[72px] py-[23px] text-[29.29px] font-medium"}><Link href={'about'}>Call Now</Link> </Button>
   </div>
   </Container>
   </div>

<div className="bg-[url(/banner.svg)] bg-no-repeat bg-center bg-cover pt-[242px] pb-72">
<Container className={""}>
   <h1 className='font-semibold text-[58.59px] text-white '>Nurture Your Green Paradise</h1>
   <p className='text-[29.29px] pt-3.5 pb-[60px]'>Your slogan goes here</p>
   <div className=" gap-x-11 flex items-center">
    <Button className={"bg-[#CC7722] rounded-[63.16px] px-[72px] py-[23px] text-[29.29px] font-medium"}><Link href={"/products"}>Shop Now</Link></Button>
    <Button className={"bg-[#CC7722] rounded-[63.16px] px-[72px] py-[23px] text-[29.29px] font-medium"}>Call Now</Button>
   </div>
   </Container>
   </div>


   <div className="bg-[url(/banner.svg)] bg-no-repeat bg-center bg-cover pt-[242px] pb-72">
<Container className={""}>
   <h1 className='font-semibold text-[58.59px] text-white '>Nurture Your Green Paradise</h1>
   <p className='text-[29.29px] pt-3.5 pb-[60px]'>Your slogan goes here</p>
   <div className=" gap-x-11 flex items-center">
    <Button className={"bg-[#CC7722] rounded-[63.16px] px-[72px] py-[23px] text-[29.29px] font-medium"}><Link href={"/products"}>Shop Now</Link></Button>
    <Button className={"bg-[#CC7722] rounded-[63.16px] px-[72px] py-[23px] text-[29.29px] font-medium"}>Call Now</Button>
   </div>
   </Container>
   </div>
      </Slider>
   </div>
   </>
  )
}

export default Banner