'use client';

import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import Container from '@/app/(Components)/Container';
import Button from '@/app/(Components)/Button';
import Flex from '@/app/(Components)/Flex';
import { products } from '@/app/data/productsData';
import ImageGallery from '../Components/ImageGallery';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/redux/cartSlice';
import PotColorSelector from '../Components/PotColor';

const ProductDetailPage = ({ params }) => {
  // ✅ unwrap the async params (Next.js 16+)
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;

  const product = products.find((p) => p.slug === slug);
  const dispatch = useDispatch();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-[#F3F3F3] pt-[74px] pb-[191px]">
      <Container>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[#7A9B57] hover:text-[#2D5016] transition-colors mb-8 text-lg font-medium"
        >
          <IoArrowBack className="w-6 h-6" />
          Back to Products
        </Link>

        
          <Flex className="items-start gap-x-[92px]">
            {/* Image Gallery  */}
            <div className="">
              <ImageGallery images={product.images} productName={product.name}  />
            </div>
            
            <div className="">
              <h3 className="text-[36px] text-start font-semibold text-[#000000] mb-6">{product.name}</h3>
              
 {/* Start and review  */}
              <Flex className="gap-x-2 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-[31px] h-[31px]" />
                ))}
                <span className="text-[22px] font-medium text-[#2D5016] ml-2">
                  ({product.reviews} reviews)
                </span>
                <Flex className={'pl-[58px] gap-x-3'}>
                  <div className="h-[27px] w-[27px] rounded-full bg-[#7A9B57]"></div>
 <span
                  className={` text-[#7A9B57] font-medium text-[22px] `}
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                </Flex>
               
              </Flex>

           
            <p className="text-[#8C8C8C] text-[22px] ">{product.type}</p>
               
 {/* size box  */}
 <div className="w-[319px] pt-3">
  <h3 className='text-[25px] text-[#000000] font-medium pb-1'>Size</h3>
  <Flex className={'gap-x-3.5'}>
    <div className="w-[97px] h-[86px] shadow bg-[#F3F3F3] border borde-[#CDCDCD] rounded-[10px] px-[21px] pt-4  duration-300 cursor-pointer hover:border-[#7A9B57] hover:bg-[#EDFFDA]">
    <h4 className='text-[#000000] text-[18px] text-center font-medium pb-1'>Small</h4>
    <p className='text-[#404040] text-[18px]  '>৳ 240</p>
    </div>

     <div className="w-[97px] h-[86px] shadow bg-[#F3F3F3] border borde-[#CDCDCD] rounded-[10px] px-[21px] pt-4  duration-300 cursor-pointer hover:border-[#7A9B57] hover:bg-[#EDFFDA]">
    <h4 className='text-[#000000] text-[16px] text-center font-medium pb-1'>Medium</h4>
    <p className='text-[#404040] text-[18px]  '>৳ 350</p>
    </div>

     <div className="w-[97px] h-[86px] shadow bg-[#F3F3F3] border borde-[#CDCDCD] rounded-[10px] px-[21px] pt-4  duration-300 cursor-pointer hover:border-[#7A9B57] hover:bg-[#EDFFDA]">
    <h4 className='text-[#000000] text-[18px] text-center font-medium pb-1'>Large</h4>
    <p className='text-[#404040] text-[18px]  '>৳ 450</p>
    </div>
  </Flex>

 </div>


  {/*Include Pot */}
 <div className="w-[319px] pt-5">
  <h3 className='text-[25px] text-[#000000] font-medium pb-1'>Include Pot</h3>
  <Flex className={'gap-x-3.5'}>
    <div className="w-[97px] h-[86px] shadow bg-[#F3F3F3] border borde-[#CDCDCD] rounded-[10px] px-[21px] pt-4  duration-300 cursor-pointer hover:border-[#7A9B57] hover:bg-[#EDFFDA]">
    <h4 className='text-[#000000] text-[18px] text-center font-medium pb-1'>Small</h4>
    <p className='text-[#404040] text-[18px]  '>৳ 100</p>
    </div>

     <div className="w-[97px] h-[86px] shadow bg-[#F3F3F3] border borde-[#CDCDCD] rounded-[10px] px-[21px] pt-4  duration-300 cursor-pointer hover:border-[#7A9B57] hover:bg-[#EDFFDA]">
    <h4 className='text-[#000000] text-[16px] text-center font-medium pb-1'>Medium</h4>
    <p className='text-[#404040] text-[18px]  '>৳ 130</p>
    </div>

     <div className="w-[97px] h-[86px] shadow bg-[#F3F3F3] border borde-[#CDCDCD] rounded-[10px] px-[21px] pt-4  duration-300 cursor-pointer hover:border-[#7A9B57] hover:bg-[#EDFFDA]">
    <h4 className='text-[#000000] text-[18px] text-center font-medium pb-1'>Large</h4>
    <p className='text-[#404040] text-[18px]  '>৳ 170</p>
    </div>
  </Flex>

 </div>
 <PotColorSelector/>


              <h3 className="text-[48px] font-bold text-[#CC7722] mb-8">৳ {product.price}</h3>

              <div className="mb-8">
                <h3 className="text-[24px] font-semibold text-[#2D5016] mb-4">Description</h3>
                <p className="text-[#404040] text-[18px] leading-relaxed">{product.description}</p>
              </div>

              {product.category && (
                <div className="mb-4">
                  <span className="text-[#404040] font-semibold">Category: </span>
                  <span className="text-[#7A9B57]">{product.category}</span>
                </div>
              )}
              {product.size && (
                <div className="mb-4">
                  <span className="text-[#404040] font-semibold">Size: </span>
                  <span className="text-[#7A9B57]">{product.size}</span>
                </div>
              )}
              {product.lightRequirement && (
                <div className="mb-4">
                  <span className="text-[#404040] font-semibold">Light Requirement: </span>
                  <span className="text-[#7A9B57]">{product.lightRequirement}</span>
                </div>
              )}
              {product.careInstructions && (
                <div className="mb-8">
                  <span className="text-[#404040] font-semibold">Care Instructions: </span>
                  <span className="text-[#404040]">{product.careInstructions}</span>
                </div>
              )}

              <div className="mb-8">
                
              </div>

              {/* ✅ Redux Add to Cart (design unchanged) */}
              <Button
                onClick={handleAddToCart}
                className={
                  'text-white bg-[#2D5016] text-[24px] font-semibold rounded-[10px] px-16 py-5 hover:bg-[#3D6020] transition-all'
                }
              >
                Add to Cart
              </Button>
            </div>
          </Flex>
      
      </Container>
    </div>
  );
};

export default ProductDetailPage;
