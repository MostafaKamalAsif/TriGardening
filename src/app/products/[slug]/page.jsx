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
    <div className="bg-[#F3F3F3] py-12">
      <Container>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-[#7A9B57] hover:text-[#2D5016] transition-colors mb-8 text-lg font-medium"
        >
          <IoArrowBack className="w-6 h-6" />
          Back to Products
        </Link>

        
          <Flex className="gap-12">
            <div className="w-1/2">
              <ImageGallery images={product.images} productName={product.name}  />
            </div>

            <div className="w-1/2">
              <h1 className="text-[42px] font-bold text-[#2D5016] mb-4">{product.name}</h1>
              <p className="text-[#A7A7A7] text-[24px] font-medium mb-6">{product.type}</p>

              <Flex className="gap-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-2xl" />
                ))}
                <span className="text-[20px] font-medium text-[#2D5016] ml-2">
                  ({product.reviews} reviews)
                </span>
              </Flex>

              <h2 className="text-[48px] font-bold text-[#CC7722] mb-8">৳ {product.price}</h2>

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
                <span
                  className={`px-4 py-2 rounded-full text-white font-semibold ${
                    product.inStock ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
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
