import Link from 'next/link';
import Image from 'next/image';
import PostCard from '/public/PostCard.svg';
import Flex from '@/app/(Components)/Flex';
import React from 'react';

const RecentPostsCard = ({ Title, PostDate, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Flex className="cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
        <Image src={PostCard} alt='Recent Post' />
        <div className="pl-4.5">
          <h4 className='text-[#404040] text-[18px] font-medium leading-[27px] pb-0.5 hover:text-[#42C847] transition-colors'>
            {Title}
          </h4>
          <p className='text-[#8C8C8C] text-[16px]'>{PostDate}</p>
        </div>
      </Flex>
    </Link>
  );
};

export default RecentPostsCard;