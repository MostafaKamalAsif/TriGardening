import Image from 'next/image'
import React from 'react'

const CatagoryCard = ({icon,title,Details}) => {
  return (
    <>
<div className="w-[369px] pt-15 pb-14 px-8.5 bg-[#F5F5DC] rounded-[20px]">
<div className="w-[125px] h-[125px] rounded-full  m-auto bg-white flex items-center justify-center">
    <Image src={icon} alt="catagory" />
</div>
<h3 className='font-semibold text-[27px] text-center text-[#000000] pt-6 pb-5'>{title}</h3>
<p className='font-light text-[22px] text-center text-[#000000]'>{Details}</p>

</div>
    </>
  )
}

export default CatagoryCard