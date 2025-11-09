'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import Button from '@/app/(Components)/Button';
import Flex from '@/app/(Components)/Flex';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) return null; // <-- safety check

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="w-[359px] h-[543px] rounded-[20px] shadow bg-[#FFFFFF] relative group cursor-pointer">
        <Image 
          src={product.images[0]} 
          alt={product.name} 
          width={359} 
          height={267} 
          className="rounded-t-[20px]" 
        />

        <div className="pl-[27px] pr-[31px] pt-[31px] pb-[26px]">
          <h3 className='font-medium text-[22px] text-[#2D5016]'>{product.name}</h3>
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
            className={'py-2 pl-[92px] pr-[81px] text-white bg-[#2D5016] text-[22px] font-semibold rounded-[10px] mt-5'}
          >
            Add to Cart
          </Button>
        </div>

        <div className="absolute inset-0 rounded-[20px] bg-white/80 pt-[89px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <Button 
            onClick={handleAddToCart}
            className={'py-[22px] pl-[92px] pr-[81px] w-fit ml-6 mr-8.5 text-white bg-[#2D5016] text-[22px] font-semibold rounded-[10px] mt-5 mb-[275px]'}
          >
            Add to Cart
          </Button>
          <div onClick={(e) => e.stopPropagation()}>
            <Button className={'text-[26px] font-semibold bg-[#7A9B57] mb-0 px-[99px] pt-4 pb-[27px] rounded-b-[20px]'}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
