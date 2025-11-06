import Image from 'next/image'
import React from 'react'
import Flex from './Flex'
import { FaStar } from "react-icons/fa";
import Button from './Button';
const ProductCard = ({Productimg,Name,Type, Price,review}) => {
  return (
    <>
    <div className="w-[359px] h-[543px] rounded-[20px] bg-[#FFFFFF]">
        <Image src={Productimg} alt='Product'/>
        <div className="pl-[27px] pr-[31px] pt-[31px] pb-[26px]">
            <h3 className='font-medium text-[22px] text-[#2D5016]'>{Name}</h3>
            <p className='text-[#A7A7A7] text-[18px] font-medium pb-4.5'>{Type}</p>
            <h2 className='text-[32px] font-semibold text-[#CC7722]'>৳ {Price}</h2>
            <Flex className={'gap-x-[5px]'}>
 <FaStar className='text-yellow-400  ' />
 <FaStar className='text-yellow-400 '/>
 <FaStar className='text-yellow-400 '/>
 <FaStar className='text-yellow-400 '/>
 <FaStar className='text-yellow-400 '/>
 <h3 className='text-[22px] font-medium pl-0.5 text-[#2D5016]'>{review}</h3>
            </Flex>
            <Button className={'py-2 pl-[92px] pr-[81px] text-white bg-[#2D5016] text-[22px] font-semibold'}>Add to Cart</Button>
        </div>
        
    </div>
    </>
  )
}

export default ProductCard