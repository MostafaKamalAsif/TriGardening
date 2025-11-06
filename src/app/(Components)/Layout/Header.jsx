"use client"

import Container from '../Container'
import Flex from '../Flex'
import Image from 'next/image'
import Logo from '/public/Logo.svg'
import Link from 'next/link'
import Button from '../Button'
import { IoCall } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
const Header = () => {
  
  return (
    <>
    <header className='bg-[#2D5016] pt-4.5 pb-[21px] font-'>
    <Container>
      <Flex className={"justify-between "}>
        <div className=" flex items-center">
      <Image src={Logo} alt='Logo' width={86} height={86} quality={100} className='mt-3'/>
      <h2 className='font-semibold text-[32px] text-white -ml-6'>TriGardening</h2>
        </div>
        <div className="">
          <ul className='flex items-center gap-x-20 '>
            <li className='text-[22px] text-white'><Link href={"/"}>Home</Link></li>
            <li className='text-[22px] text-white'><Link href={"/products"}>Products</Link></li>
            <li className='text-[22px] text-white'><Link href={"/blog"}>Blog</Link></li>
            <li className='text-[22px] text-white'><Link href={"/plant"}>Plant Clinic</Link></li>
          </ul>
        </div>
        <div className="">
          <Button className={"rounded-[14px] pl-2.5 pr-5 py-2 text-[22px] flex items-center gap-x-[9px] bg-[#CC7722]"}><IoCall className='text-white'/> Call Now</Button>
       
        </div>
        <div className="relative">
          <input type="text" placeholder='Search plants, tools' className='placeholder:text-[22px] placeholder:text-white border rounded-full pl-[22px] pt-3 pb-[9px] pr-[88px]  ' />
          <IoSearchSharp className='absolute top-[50%]  right-5 -translate-y-[50%] text-2xl '/>
        </div>
        <div className=" flex items-center gap-x-[52px]">
          <MdShoppingCart className='text-white w-[35px] h-[35px]'/>
           <FaUser className='text-white w-[35px] h-[35px]'/>
        </div>
      </Flex>
    </Container>
    

    </header>
    </>
  )
}

export default Header