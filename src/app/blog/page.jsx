import React from 'react'
import Container from '../(Components)/Container'
import Flex from '../(Components)/Flex'
import { IoSearchSharp } from "react-icons/io5";
import Image from 'next/image';
import BlogBanner from '/public/BlogPost.svg'
import BlogCard from '../(Components)/BlogCard';
import Blog_1 from '/public/FirstPost.svg'
const Blog = () => {
  return (
    <>
    <div className="pt-[97px] pb-[527px] bg-[#CDCDCD]">
      <Container>
        <Flex className={'gap-x-[87px]'}>
 <div className="  text-[#404040] w-[1191px]">
        <h2 className='font-semibold text-[52px] text-center'>The TriGardening Journal</h2>
        <p className='text-[32px] text-center pb-7'>Your slogan goes here</p>
        <Image src={BlogBanner} alt='BlogBanner'/>
        <Flex className={'flex-wrap justify-between  gap-y-[31px]'}>
      <BlogCard BlogImg={Blog_1}/>
      <BlogCard BlogImg={Blog_1}/>
      <BlogCard BlogImg={Blog_1}/>
      <BlogCard BlogImg={Blog_1}/>
     </Flex>

        </div>

        <div className="">
<div className="bg-[#FFFFFF] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] w-[409px] rounded-[20px] py-[27px] px-9 ">
     <h3 className='text-black text-[28px] font-medium pb-[27px]'>Search Blog</h3>
     <div className="relative">
      <input type="text"  placeholder='Search articles...' className='pl-6.5 w-[336px] pt-[9px] pb-2 border  border-[#B7B7B7] rounded-[15px] placeholder:text-[22px] placeholder:text-[#B7B7B7]' />
     <IoSearchSharp className='absolute top-[50%] right-3 -translate-y-1/2 text-[#B7B7B7] w-[30px] h-[30px]'/>
     </div>
     
</div>

        </div>
        </Flex>
       
      </Container>
    </div>
    </>
  )
}

export default Blog