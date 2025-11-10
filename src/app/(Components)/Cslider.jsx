"use client";

import Image from 'next/image';
import Slider from "react-slick";
import ProductCard from '../products/Components/ProductCard';
import { products } from '../data/productsData';
import next from "/public/NextPage.svg";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute -right-11 top-1/2 -translate-y-1/2 cursor-pointer z-10  "
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
    nextArrow: <NextArrow />,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };

  return (
    <div className="relative py-8 px-8 md:px-12">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>

      
    </div>
  );
};

export default Cslider;