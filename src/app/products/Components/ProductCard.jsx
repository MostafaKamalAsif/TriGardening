'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaStar } from "react-icons/fa";
import Button from '@/app/(Components)/Button';
import Flex from '@/app/(Components)/Flex';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice';

const ProductCard = ({ product, className }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleViewDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/products/${product.slug}`);
  };

  const handleCardClick = () => {
    router.push(`/products/${product.slug}`);
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`w-[359px] h-[543px] rounded-[20px] shadow bg-[#FFFFFF] relative group cursor-pointer ${className}`}
    >
      <Image 
        src={product.images?.[0] || '/placeholder.jpg'} 
        alt={product.name || 'Product'} 
        width={359} 
        height={267} 
        className="rounded-t-[20px] object-cover" 
      />

      <div className="pl-[27px] pr-[31px] pt-[31px] pb-[26px]">
        <h3 className='font-medium text-[22px] text-[#2D5016] line-clamp-1'>{product.name}</h3>
        <p className='text-[#A7A7A7] text-[18px] font-medium pb-4.5'>{product.type}</p>
        <h2 className='text-[32px] font-semibold text-[#CC7722]'>৳ {product.price}</h2>

        <Flex className={'gap-x-[5px] pt-[19px]'}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className='text-yellow-400 text-3xl' />
          ))}
          <h3 className='text-[22px] font-medium pl-0.5 text-[#2D5016]'>({product.reviews})</h3>
        </Flex>
        
        <Button 
          onClick={handleAddToCart}
          className={'py-2 pl-[92px] pr-[81px] text-white bg-[#2D5016] text-[22px] font-semibold rounded-[10px] mt-5 hover:bg-[#1d3910] transition-colors'}
        >
          Add to Cart
        </Button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 rounded-[20px] bg-white/90 pt-[89px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col items-center justify-center">
        <Button 
          onClick={handleAddToCart}
          className={'py-[22px] px-12 text-white bg-[#2D5016] text-[22px] font-semibold rounded-[10px] mb-6 hover:bg-[#1d3910] transition-colors'}
        >
          Add to Cart
        </Button>
        
        <Button 
          onClick={handleViewDetails}
          className={'text-[26px] font-semibold bg-[#7A9B57] px-[99px] py-4 mt-[275px] rounded-[10px] hover:bg-[#6B8A4D] transition-colors'}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
