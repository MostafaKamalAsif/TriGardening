

'use client';
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import { BiLike, BiDislike } from "react-icons/bi";
import Container from '@/app/(Components)/Container';
import Flex from '@/app/(Components)/Flex';
import Button from '@/app/(Components)/Button';
import Image from 'next/image';
import rating from '/public/rateing.svg'
import ProductCard from './ProductCard';
import { products } from '@/app/data/productsData';
import Login from '@/app/(Components)/Login';
const ProductReviews = () => {
 const [loginshow,setLoginshow]=useState(false)
const handebtnLoging=()=>{
  setLoginshow(!loginshow)
}

  const highlights = [
    { text: 'Easy to Grow', bgColor: '#E8F5E9', textColor: '#2D5016' },
    { text: 'Good Quality', bgColor: '#E3F2FD', textColor: '#1565C0' },
    { text: 'Arrived Healthy', bgColor: '#F3E5F5', textColor: '#7B1FA2' },
    { text: 'Great Value', bgColor: '#FFF3E0', textColor: '#E65100' },
    { text: 'Smaller Than Expected', bgColor: '#FFEBEE', textColor: '#C62828' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Ismita Chowdhury',
      avatar: '/ismita.svg',
      verified: true,
      rating: 5,
      date: '4 Days ago ( 12 September, 2025 )',
      comment: 'এই গাছটা একেবারেই দারুণ! একদম ভালো অবস্থায় পেয়েছি এবং আমার বাগানে দারুণভাবে বেড়ে উঠছে। এর মান আমার প্রত্যাশার থেকেও ভালো এবং ইতিমধ্যেই নতুন কুঁড়ি গজাচ্ছে। নতুন কিংবা অভিজ্ঞ উভয় ধরনের মালীদের জন্যই আমি এটিকে অত্যন্ত সুপারিশ করব।',
      helpful: 12,
      notHelpful: 0,
      reply: {
        text: 'আপনাকে অনেক ধন্যবাদ মূল্যবান পরামর্শ দেওয়ার জন্য। নিজের গাছ ভালো রাখিছে তাই শুনে খুশী হলাম। ট্রাইগার্ডেনিং থেকে উৎপাদন প্রযুক্তি দিচ্ছি। তারবার বাড়ি পড়লে কো পানী দেওয়া আমাদের সাথে যোগাযোগ করে জন্য নির্দিষ্ট মিস্থানী পানি ও ডেনার আর ট্রাইগার্ডেনিং আপনার সবসময় পাশে আছে!',
        date: '( 12 September, 2025 )'
      }
    },
    {
      id: 2,
      name: 'Aminul Islam',
      avatar: '/aminul.svg',
      verified: true,
      rating: 4,
      date: '1 Week ago ( 4 September, 2025 )',
      comment: 'গাছের মান ভালো ছিলো, প্যাকিজিং দারুণ হয়েছে। আমি খুশি তবুলান সাথের পাত্র সাথে কিছু টা সমস্যা আছে তাই।',
      helpful: 12,
      notHelpful: 0,
      reply: {
        text: 'আপনার মতামতের জন্য আমরা নতুন মার্জিন উক্ত করছি খুব দুঃখিতঃ শ্যাবত বলতে হয় যে এতো তুই সর্বনাশ ধরে কেশ অঞ্চল আরো অবস্থাতত এমন মার্জিন দেখিনে নিশ্চিত করলে ওরেক্সন মেনে সকল ফটো সহিত আমাদের সাথে যোগাযোগ করুন। ট্রাইগার্ডেনিং আপনার তবুলা কাস্টমার আমাদের তবুলাবাল সন্তুষ্ট না হলে জোকোন আমার প্রতিকম আমাদের সবসময় চলছে।',
        date: '( 5 September, 2025 )'
      }
    },
    {
      id: 3,
      name: 'Hridoy Shil',
      avatar: '/Hridoy.svg',
      verified: true,
      rating: 4,
      date: '2 Week ago ( 1 August, 2025 )',
      comment: 'আমার ইন্দোর গার্ডেনের জন্য এটাকেতর পারপেক্ত। পাত্র পুক্তঃ গাছ এককোম এম্প এমন বাসুকাম সুলভ পরিস্থিতি আপনার মধ্যে সঙ ব্যবহার। সবার পরে অনেক অপেক্ষা বেরিদ শেখিতসে। কারণ গাছ সামিবান তীবের গার থো কোন প্রকল্প করবে এবং তারের করবে এবং কাউসুর সেভার টারগানের করুম।',
      helpful: 12,
      notHelpful: 0,
      images: ['/HridoySent_1.svg', '/HridoySent_2.svg']
    }
  ];

  return (
    <>
    <Container className={'pt-[124px] relative '}>
     
    <div className="w-[1652px]  pb-[124px]">
      <h3 className='text-[52px] font-semibold text-[#2D5016] text-center pb-[61px]'>Related Products</h3>
<Flex className={"flex-wrap justify-between  gap-y-7"}>
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flex>
    </div>
      {/* Header */}
      <h2 className="text-[52px] font-semibold text-[#2D5016] mb-2">Customer Reviews & Ratings</h2>
      <div className="">
      <p className="text-[22px] font-medium text-[#2D5016] pb-[81px]">See what other gardeners are saying about this product</p>



      {/* Rating Overview */}
      <div className=" w-[1641px] pb-9 pt-10 pl-14.5 pr-15.5 mb-[39px]  bg-[#FFFFFF] rounded-[20px]">
        <Flex className={'flex gap-x-[344px]'}>
        {/* Left: Average Rating */}
        <div className="text-center ">
          <h3 className="text-[#2D5016] text-[99px] font-semibold pl-[250px]">4.7</h3>
          <div className="flex justify-center gap-x-1 mb-5 pl-[217px]">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-[#FFA726] w-6 h-6" />
            ))}
            < FaStarHalfAlt className="text-[#FFA726] w-6 h-6 " />
            <div className="">
<p className="text-[22px] font-medium text-[#2D5016] pl-2">(24)</p>
 </div>
          </div>
                  <p className="text-[22px] font-medium text-[#2D5016] pl-[213px]">Based on 1,247 reviews</p>

          
          
        </div>

        {/* Right: Rating Bars */}
        <div className="flex- space-y-3">
        <Image src={rating} alt='rating'/>
        </div>
       

        </Flex>
        <hr  className='w-[1521px] mt-[86px] mb-[38.3px] border border-[#D9D9D9]'/>
        <Button onClick={handebtnLoging} className={' w- [301px] flex items-center gap-2 bg-[#2D5016] text-white px-6 py-3 rounded-[8px] hover:bg-[#1d3910] transition-colors'}>
 <MdEdit size={26} />
          <p className="text-[26px] font-medium">Write Review</p>
          
        </Button>
        
      </div>

      
     

      {/* Review Highlights */}
      <div className="w-[1641px] pt-7.5 pl-13.5 pb-[45px] mb-[47px] bg-[#FFFFFF] rounded-[20px] ">
        <h3 className="text-[34px] font-semibold text-[#2D5016] mb-4">Review Highlights</h3>
        <div className="flex flex-wrap gap-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-[20px] text-[18px] font-medium transition-all hover:shadow-md cursor-pointer"
              style={{ 
                backgroundColor: highlight.bgColor,
                color: highlight.textColor
              }}
            >
              {highlight.text}
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="pb-8 w-[1641px] pt-[43px] pl-[58px] pr-[62px] bg-[#FFFFFF] rounded-[20px] ">
            {/* Reviewer Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#BDBDBD] overflow-hidden flex-shrink-0">
                <Image src={review.avatar} alt='avater' width={61} height={61}/>
              </div>
              <div>
                <h4 className="text-[16px] font-semibold text-[#1E1E1E] mb-1">{review.name}</h4>
                <div className="flex items-center gap-4 text-[14px]">
                  {review.verified && (
                    <span className="flex items-center gap-1 text-[#2D5016] bg-[#E8F5E9] px-2.5 py-0.5 rounded-[16.5px] font-medium">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                      Verified Purchase
                    </span>
                  )}
                  <span className="text-[#7A9B57]">{review.date}</span>
                   {/* Rating Stars */}
            <div className="flex gap-1  mb-4 ml-[1014px]">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < review.rating ? 'text-[#FFA726]' : 'text-[#E0E0E0]'} 
                  size={18}
                />
              ))}
            </div>
                </div>
              </div>
            </div>

           

            {/* Review Content */}
            <div className="bg-white border border-[#B7B7B7] rounded-[8px] p-6 mb-4 ml-15">
              <p className="text-[#2D5016] text-[16px] leading-relaxed">{review.comment}</p>
            </div>

            {/* Review Images */}
            {review.images && (
              <div className="flex gap-3 mb-4 ml-15">
                {review.images.map((img, idx) => (
                 
                  <div key={idx}  className="">
                    <Image  src={img} alt='Images' width={118}  height={118}/>
                    
                  </div>
                  
                  
                  
                  
                ))}
                
              </div>
            )}

            {/* Helpful Buttons */}
            <div className="flex items-center gap-5 text-[14px] text-[#4B4B4B] mb-6 ml-15">
              <button className="flex items-center gap-1.5 hover:text-[#2D5016] transition-colors">
                <BiLike size={18} />
                <span>Helpful ({review.helpful})</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-[#C62828] transition-colors">
                <BiDislike size={18} />
                <span>Not Helpful ({review.notHelpful})</span>
              </button>
            </div>

            {/* Seller Reply */}
            {review.reply && (
              <div className="ml-15 bg-[#E8F5E9] border-l-4 border-[#7A9B57] rounded-[8px] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-[14px] font-medium text-[#2D5016]">
                    Reply from Trigardening <span className="text-[#7A9B57] font-normal">{review.reply.date}</span>
                  </p>
                </div>
                <p className="text-[14px] text-[#2D5016] leading-relaxed">{review.reply.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-10">
        <button className="bg-white border-2 border-[#7A9B57] text-[#2D5016] px-10 py-3 rounded-[8px] text-[22px] font-medium hover:bg-[#E8F5E9] transition-all">
          Load More Reviews
        </button>
      </div>
    </div>
     {loginshow &&(
      <div className="absolute top-1/2 left-1/2 -translate-1/2">
        <Login/>
      </div>
        
      
          )}
    </Container>
    </>
  );
};

export default ProductReviews;