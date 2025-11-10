"use client";

import Container from "../Container";
import Flex from "../Flex";
import Image from "next/image";
import Logo from "/public/Logo.svg";
import Link from "next/link";
import Button from "../Button";
import { IoCall } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
  // ✅ Get total quantity from Redux store
  const totalQuantity = useSelector((state) => {
    console.log('🔍 Header - Redux State:', state);
    console.log('🛒 Header - Total Quantity:', state.cart?.totalQuantity);
    return state.cart?.totalQuantity || 0;
  });

  useEffect(() => {
    console.log('🔄 Header mounted/updated - Total Quantity:', totalQuantity);
  }, [totalQuantity]);

  return (
    <>
      <header className="bg-[#2D5016] pt-4.5 pb-[21px]">
        <Container>
          <Flex className={" "}>
            <div className=" flex items-center pr-[82px]">
              <Image
                src={Logo}
                alt="Logo"
                width={86}
                height={86}
                quality={100}
                className="mt-3"
              />
              <h2 className="font-semibold text-[32px] text-white -ml-6">
                TriGardening
              </h2>
            </div>
            <div className="">
              <ul className="flex items-center gap-x-20  ">
                <li className="text-xl text-white">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="text-xl text-white">
                  <Link href={"/products"}>Products</Link>
                </li>
                <li className="text-xl text-white">
                  <Link href={"/blog"}>Blog</Link>
                </li>
                <li className="text-xl text-white">
                  <Link href={"/plant"}>Plant Clinic</Link>
                </li>
              </ul>
            </div>
            <div className="pr-[55px] pl-[60px]">
              <Button
                className={
                  "rounded-[14px] w-[156px] pl-2.5 pr-5 py-2 text-[20px] flex items-center gap-x-[9px] bg-[#CC7722] "
                }
              >
                <IoCall className="text-white" /> <Link href={'about'}>Call Now</Link> 
              </Button>
            </div>

            <div className="relative pr-[43px] ">
              <input
                type="text"
                placeholder="Search plants, tools"
                className="placeholder:text-[22px]  placeholder:text-white  outline outline-[#B7B7B7] w-[328px] rounded-full pl-[22px] pt-3 pb-[9px] pr-[88px]  "
              />
             <IoSearchSharp className="absolute top-[50%] right-14  -translate-y-[50%] text-2xl " />
            </div>
            
            {/* ✅ Cart Icon with Badge */}
            <div className=" flex items-center gap-x-[52px] pr-0">
              <Link href="/cart" className="relative">
                <MdShoppingCart className="text-white w-[35px] h-[35px]" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {totalQuantity}
                  </span>
                )}
               
              </Link>
              <FaUser className="text-white w-[35px] h-[35px]" />
            </div>
          </Flex>
        </Container>
      </header>
    </>
  );
};

export default Header;