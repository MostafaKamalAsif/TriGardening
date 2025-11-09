import Flex from '@/app/(Components)/Flex'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="w-xl h-[579px] bg-[#FFFFFF] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] rounded-[20px] cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <Image 
          src={blog.image} 
          alt={blog.title} 
          width={576} 
          height={267} 
          quality={100}
          className="rounded-t-[20px] object-cover"
        />
        <div className="pt-[23px] pb-9 pl-9.5 pr-[57px]">
          <h4 className='text-xl font-medium text-[#42C847] pb-2.5'>{blog.category}</h4>
          <h3 className='text-[24px] font-medium text-[#000000] pb-6.5'>{blog.title}</h3>
          <p className='text-[18px] text-[#000000] pb-[43px]'>{blog.excerpt}</p>
          <Flex className={"justify-between"}>
            <h3 className='text-[#898989] text-[18px]'>{blog.date}</h3>
            <h3 className='text-[#898989] text-[18px]'>{blog.readTime}</h3>
          </Flex>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard