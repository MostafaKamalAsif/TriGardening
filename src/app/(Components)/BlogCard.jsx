import Image from 'next/image'
import React from 'react'
import Flex from './Flex'

const BlogCard = ({BlogImg}) => {
  return (
    <>
    <div className=" w-xl h-[579px] bg-[#FFFFFF] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)]  rounded-[20px]">
    <Image src={BlogImg} alt='Blog Post' width={576} height={267} quality={100}/>
    <div className="pt-[23px] pb-9 pl-9.5 pr-[57px]">
        <h4 className=' text-xl font-medium text-[#42C847] pb-2.5'>Post Type</h4>
 <h3 className='text-[24px] font-medium text-[#000000] pb-6.5'>10 Essential Tips for Indoor Plant Care</h3>
 <p className='text-[18px] text-[#000000] pb-[43px]'>Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...</p>
 <Flex className={"justify-between"}>
 <h3 className='text-[#898989] text-[18px] '>September 19, 2025</h3>
 <h3 className='text-[#898989] text-[18px] '>5min Read</h3>

 </Flex>

    </div>
    </div>
    </>
  )
}

export default BlogCard