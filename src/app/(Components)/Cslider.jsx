"use client";
import Image from 'next/image';
import Slider from "react-slick";
import ProductCard from '../products/Components/ProductCard';
import Deliciosa from '/public/Deliciosa.svg';
import next from "/public/NextPage.svg";
import Pavel from '/public/Pavel.svg';
import Shvets from '/public/Shvets.svg';
import Stroobants from '/public/Stroobants.svg';
function NextArrow({ onClick }) {
    return (
        <div
            onClick={onClick}
            className="absolute -right-2 top-1/2 -translate-y-1/2 cursor-pointer z-10"
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
     nextArrow: <NextArrow/>,
     prevArrow:false,
  };
  return (
    
    
      <Slider {...settings} >
        <ProductCard Productimg={Deliciosa} Name={'Monstera Deliciosa'} Type={"Indoor Plant"} Price={"2000 - 3,400"} review={"(24)"}/>
<ProductCard Productimg={Shvets} Name={'Organic Compost Fertilizer'} Type={"Fertilizer"} Price={"60 - 440"} review={"(12)"}/>
<ProductCard Productimg={Pavel} Name={'Pruning Shears'} Type={"Equipment"} Price={"180 - 450"} review={"(34)"}/>
<ProductCard Productimg={Stroobants} Name={'Snake Plant'} Type={"Indoor Plant"} Price={" 150- 500 "} review={"(35)"}/>
<ProductCard Productimg={Shvets} Name={'Organic Compost Fertilizer'} Type={"Fertilizer"} Price={"60 - 440"} review={"(12)"}/>
<ProductCard Productimg={Stroobants} Name={'Snake Plant'} Type={"Indoor Plant"} Price={" 150- 500 "} review={"(35)"}/>
      </Slider>

  )
}

export default Cslider