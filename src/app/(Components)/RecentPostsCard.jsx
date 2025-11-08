import React from 'react'
import Flex from './Flex'
import Image from 'next/image'
import PostCard from '/public/PostCard.svg'

const RecentPostsCard = ({Title,PostDate}) => {
  return (
    <Flex>
        <Image src={PostCard} alt='Reacent Post'/>
        <div className="pl-4.5">
            <h4 className='text-[#404040] text-[18px] font-medium leading-[27px] pb-0.5'>{Title}</h4>
            <p className='text-[#8C8C8C] text-[16px]'>{PostDate}</p>
        </div>
    </Flex>
  )
}

export default RecentPostsCard