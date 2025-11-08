import Image from 'next/image'
import React from 'react'

const ExpertCard = ({Expertimg,Name,position,about}) => {
  return (
    <div className='w-[475px] h-[505px] rounded-[20px] px-13  pt-[46px] bg-[#F5F5DC] '>
        <Image src={Expertimg} alt='Experte Photo' className='m-auto pb-4.5'/>
      <h3 className='text-[#000000] text-[27px] font-semibold  text-center pb-[13px]'>{Name}</h3>
      <p className='text-[#7A9B57] text-[18px] font-semibold  text-center pb-7'>{position}</p>
      <p className='text-[#000000] text-[16px] font-light  text-center'>{about}</p>

    </div>
  )
}

export default ExpertCard