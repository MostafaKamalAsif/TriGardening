

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import { BiLike, BiDislike } from "react-icons/bi";
import Button from '@/app/(Components)/Button';

const ProductReviews = () => {
  const reviewStats = [
    { stars: 5, count: 847, percentage: 85, color: '#7A9B57' },
    { stars: 4, count: 274, percentage: 27, color: '#97DE4C' },
    { stars: 3, count: 75, percentage: 8, color: '#D84315' },
    { stars: 2, count: 37, percentage: 4, color: '#D84315' },
    { stars: 1, count: 14, percentage: 1, color: '#C62828' }
  ];

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
      avatar: '/Comment.svg',
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
      avatar: '/Comment.svg',
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
      avatar: '/Comment.svg',
      verified: true,
      rating: 4,
      date: '2 Week ago ( 1 August, 2025 )',
      comment: 'আমার ইন্দোর গার্ডেনের জন্য এটাকেতর পারপেক্ত। পাত্র পুক্তঃ গাছ এককোম এম্প এমন বাসুকাম সুলভ পরিস্থিতি আপনার মধ্যে সঙ ব্যবহার। সবার পরে অনেক অপেক্ষা বেরিদ শেখিতসে। কারণ গাছ সামিবান তীবের গার থো কোন প্রকল্প করবে এবং তারের করবে এবং কাউসুর সেভার টারগানের করুম।',
      helpful: 12,
      notHelpful: 0,
      images: ['/review1.jpg', '/review2.jpg']
    }
  ];

  return (
    <div className="bg-white rounded-[20px] mt-12 pt-10 pb-12 px-12">
      {/* Header */}
      <h2 className="text-[28px] font-semibold text-[#000000] mb-2">Customer Reviews & Ratings</h2>
      <p className="text-[16px] text-[#616161] mb-10">See what other gardeners are saying about this product</p>

      {/* Rating Overview */}
      <div className="flex gap-16 mb-12 pb-12 border-b border-[#E0E0E0]">
        {/* Left: Average Rating */}
        <div className="flex flex-col items-center pr-12 border-r border-[#E0E0E0]">
          <div className="text-[#2D5016] text-[80px] font-bold leading-none mb-3">4.7</div>
          <div className="flex gap-1 mb-2">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-[#FFA726] w-6 h-6" />
            ))}
            <FaStar className="text-[#FFA726] w-6 h-6 opacity-50" />
          </div>
          <p className="text-[14px] text-[#757575] mb-1">(24)</p>
          <p className="text-[13px] text-[#9E9E9E]">Based on 1,247 reviews</p>
        </div>

        {/* Right: Rating Bars */}
        <div className="flex-1 space-y-3">
          {reviewStats.map((stat) => (
            <div key={stat.stars} className="flex items-center gap-3">
              <span className="text-[14px] text-[#424242] w-16 font-medium">{stat.stars} Star</span>
              <div className="flex-1 h-2 bg-[#E0E0E0] rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all"
                  style={{ 
                    width: `${stat.percentage}%`,
                    backgroundColor: stat.color
                  }}
                />
              </div>
              <span className="text-[14px] text-[#424242] w-12 text-right font-medium">{stat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Button */}
      <div className="mb-10">
        <button className="flex items-center gap-2 bg-[#2D5016] text-white px-6 py-3 rounded-[8px] hover:bg-[#1d3910] transition-colors">
          <MdEdit size={20} />
          <span className="text-[15px] font-medium">Write Review</span>
        </button>
      </div>

      {/* Review Highlights */}
      <div className="mb-10">
        <h3 className="text-[20px] font-semibold text-[#000000] mb-4">Review Highlights</h3>
        <div className="flex flex-wrap gap-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-[20px] text-[14px] font-medium transition-all hover:shadow-md cursor-pointer"
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
          <div key={review.id} className="pb-8 border-b border-[#E0E0E0] last:border-0">
            {/* Reviewer Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#BDBDBD] overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-[#7A9B57] to-[#2D5016]" />
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
                </div>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4 ml-15">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < review.rating ? 'text-[#FFA726]' : 'text-[#E0E0E0]'} 
                  size={18}
                />
              ))}
            </div>

            {/* Review Content */}
            <div className="bg-white border border-[#B7B7B7] rounded-[8px] p-6 mb-4 ml-15">
              <p className="text-[#2D5016] text-[16px] leading-relaxed">{review.comment}</p>
            </div>

            {/* Review Images */}
            {review.images && (
              <div className="flex gap-3 mb-4 ml-15">
                {review.images.map((img, idx) => (
                  <div key={idx} className="w-20 h-20 rounded-[8px] bg-[#E0E0E0] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#BDBDBD] to-[#9E9E9E]" />
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
        <button className="bg-white border-2 border-[#7A9B57] text-[#2D5016] px-10 py-3 rounded-[8px] text-[16px] font-medium hover:bg-[#E8F5E9] transition-all">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ProductReviews;