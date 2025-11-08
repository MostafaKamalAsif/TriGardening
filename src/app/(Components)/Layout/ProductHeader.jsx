"use client";
import React, { useState } from "react";
import Container from "../Container";
import Link from "next/link";

const ProductHeader = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    "Plants",
    "Tools",
    "Fertilizers",
    "Seeds",
    "Medicine",
    "Equipments",
  ];

  return (
    <>
      <header className="pt-8  bg-white">
        <Container>
          <div>
            <ul className="flex items-center gap-x-[55px]">
              <li className="text-[22px] text-[#404040] relative">
                <Link
                  href="/products"
                  onClick={() => setActiveItem("Home")}
                  className={`${
                    activeItem === "Home"
                      ? "text-[#7A9B57] text-2xl"
                      : "text-[#404040]"
                  }`}
                >
                  Home
                </Link>
                {activeItem === "Home" && (
                  <span className="absolute left-0 bottom-[-6px] h-[3px] bg-[#7A9B57] rounded w-full"></span>
                )}
              </li>
              {menuItems.map((item) => (
                <li key={item} className="relative text-[22px]">
                  <Link
                    href="/products"
                    onClick={() => setActiveItem(item)}
                    className={`${
                      activeItem === item
                        ? "text-[#7A9B57] text-2xl"
                        : "text-[#404040]"
                    }`}
                  >
                    {item}
                  </Link>
                  {activeItem === item && (
                    <span className="absolute left-0 bottom-[-6px] h-[3px] bg-[#7A9B57] rounded w-full"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white pt-[49px] pb-[19px]">
        <Container>
          <div className="flex items-center gap-2 text-[18px] text-[#404040]">
            <Link href="/" className="hover:text-[#7A9B57]">
              Home
            </Link>
            <span className="text-[#7A9B57]">{">"}</span>
            <Link href="/products" className="hover:text-[#7A9B57]">
              Products
            </Link>
            <span className="text-[#7A9B57]">{">"}</span>
            <span className="text-[#7A9B57] font-semibold">{activeItem}</span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductHeader;
