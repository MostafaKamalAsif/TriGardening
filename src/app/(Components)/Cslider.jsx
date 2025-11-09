"use client";

import Image from 'next/image';
import Slider from "react-slick";
import ProductCard from '../products/Components/ProductCard';
import Deliciosa from '/public/Deliciosa.svg';
import Pavel from '/public/Pavel.svg';
import Shvets from '/public/Shvets.svg';
import Stroobants from '/public/Stroobants.svg';
import next from "/public/NextPage.svg";

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

const sliderProducts = [
  {
    id: 1,
    slug: "monstera-deliciosa",
    images: [Deliciosa],
    name: "Monstera Deliciosa",
    type: "Indoor Plant",
    price: "2000 - 3,400",
    reviews: 24,
  },
  {
    id: 2,
    slug: "organic-compost-fertilizer",
    images: [Shvets],
    name: "Organic Compost Fertilizer",
    type: "Fertilizer",
    price: "60 - 440",
    reviews: 12,
  },
  {
    id: 3,
    slug: "pruning-shears",
    images: [Pavel],
    name: "Pruning Shears",
    type: "Equipment",
    price: "180 - 450",
    reviews: 34,
  },
  {
    id: 4,
    slug: "snake-plant",
    images: [Stroobants],
    name: "Snake Plant",
    type: "Indoor Plant",
    price: "150 - 500",
    reviews: 35,
  },
  {
    id: 5,
    slug: "organic-compost-fertilizer-2",
    images: [Shvets],
    name: "Organic Compost Fertilizer",
    type: "Fertilizer",
    price: "60 - 440",
    reviews: 12,
  },
  {
    id: 6,
    slug: "snake-plant-2",
    images: [Stroobants],
    name: "Snake Plant",
    type: "Indoor Plant",
    price: "150 - 500",
    reviews: 35,
  },
];

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
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sliderProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Slider>
  );
};

export default Cslider;
