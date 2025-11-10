'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import Flex from '@/app/(Components)/Flex';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice';
import { useState } from 'react';

const ProductCard = ({ product, className }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [justAdded, setJustAdded] = useState(false);

  if (!product) {
    console.error(' ProductCard: No product data provided');
    return null;
  }

  const handleAddToCart = (e) => {
    // Prevent all default behaviors and propagation
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log(' Adding to cart:', product.name);
    
    try {
      dispatch(addToCart(product));
      console.log(' Successfully added to cart');
      
      // Visual feedback
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1500);
      
    } catch (error) {
      console.error(' Error adding to cart:', error);
    }
    
    return false; // Extra safety
  };

  const handleViewDetails = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    router.push(`/products/${product.slug}`);
  };

  const handleCardClick = (e) => {
    // Only navigate if clicking the card itself, not buttons
    const target = e.target;
    const isButton = target.closest('button') || target.closest('.hover-overlay-button');
    
    if (!isButton) {
      router.push(`/products/${product.slug}`);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`w-[359px] h-[543px] rounded-[20px] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] bg-[#FFFFFF] relative group cursor-black ${className}`}
    >
      <Image 
        src={product.images?.[0] || '/placeholder.jpg'} 
        alt={product.name || 'Product'} 
        width={359} 
        height={267} 
        className="rounded-t-[20px] object-cover pointer-events-none" 
      />

      <div className="pl-[27px] pr-[31px] pt-[31px] pb-[26px]">
        <h3 className='font-medium text-[22px] text-[#2D5016] line-clamp-1'>{product.name}</h3>
        <p className='text-[#A7A7A7] text-[18px] font-medium pb-4.5'>{product.type}</p>
        <h2 className='text-[32px] font-semibold text-[#CC7722]'>৳ {product.price}</h2>

        <Flex className="gap-x-[5px] pt-[19px] items-center">
  {[...Array(5)].map((_, i) => {
    const rating = product.rating || 5; // fallback if missing
    if (i < Math.floor(rating)) {
      return <FaStar key={i} className="text-yellow-400 text-3xl" />;
    } else if (i < rating) {
      return <FaStarHalfAlt key={i} className="text-yellow-400 text-3xl" />;
    } else {
      return <FaRegStar key={i} className="text-yellow-400 text-3xl" />;
    }
  })}
  <h3 className="text-[22px] font-medium pl-0.5 text-[#2D5016]">
    ({product.reviews})
  </h3>
</Flex>
        
        <button
          type="button"
          onClick={handleAddToCart}
          className={`py-2 pl-[92px] pr-[81px] text-white text-[22px] font-semibold rounded-[10px] mt-5 transition-all cursor-black ${
            justAdded 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-[#2D5016] hover:bg-[#1d3910]'
          }`}
        >
          {justAdded ? 'Added! ✓' : 'Add to Cart'}
        </button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 rounded-[20px] bg-white/90 pt-[89px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col items-center justify-center  ">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`hover-overlay-button py-[22px] px-12 text-white text-[22px] font-semibold rounded-[10px] mb-6 transition-all cursor-black ${
            justAdded 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-[#2D5016] hover:bg-[#1d3910]'
          }`}
        >
          {justAdded ? 'Added! ✓' : 'Add to Cart'}
        </button>
        
        <button
          type="button"
          onClick={handleViewDetails}
          className='hover-overlay-button text-[26px] font-semibold bg-[#7A9B57] px-[99px] py-4 mt-[282px] rounded-b-[10px] hover:bg-[#6B8A4D] transition-colors cursor-black'
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;