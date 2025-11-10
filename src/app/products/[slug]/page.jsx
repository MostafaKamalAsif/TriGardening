'use client';

import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Container from '@/app/(Components)/Container';
import Button from '@/app/(Components)/Button';
import Flex from '@/app/(Components)/Flex';
import { products } from '@/app/data/productsData';
import ImageGallery from '../Components/ImageGallery';
import PotColorSelector from '../Components/PotColor';
import ProductReviews from '../Components/ProductReviews';
import { addToCart, increaseQuantity, decreaseQuantity } from '@/app/redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Description from '/public/Description.svg'



  
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
const { items, totalQuantity } = useSelector((state) => state.cart);
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
              <Flex className="gap-x-2 mb-5 items-center">
  {[...Array(5)].map((_, i) => {
    const rating = product.rating || 5; // fallback if missing
    if (i < Math.floor(rating)) {
      return <FaStar key={i} className="text-yellow-500 w-[31px] h-[31px]" />;
    } else if (i < rating) {
      return <FaStarHalfAlt key={i} className="text-yellow-500 w-[31px] h-[31px]" />;
    } else {
      return <FaRegStar key={i} className="text-yellow-500 w-[31px] h-[31px]" />;
    }
  })}
  <span className="text-[22px] font-medium text-[#2D5016] ml-2">
    ({product.reviews} reviews)
  </span>

  <Flex className="pl-[58px] gap-x-3">
    <div className="h-[27px] w-[27px] rounded-full bg-[#7A9B57]"></div>
    <span className="text-[#7A9B57] font-medium text-[22px]">
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
 <div className="pt-[27px]">
<hr className='w-[527px]  border-[#B7B7B7] pb-2.5' />
<p className='w-[527px] text-[19px] text-[#2D5016] '>গোল্ডেন পাথোস (Golden Pothos / Epipremnum aureum) ঘর সাজানোর জন্য অন্যতম সেরা ও সহজে পরিচর্যা করা যায় এমন ইনডোর প্ল্যান্ট। এর হৃদয় আকৃতির <span className='text-xl text-[#CC7722]'>See more...</span>
</p>
<hr className='w-[527px] border-[#B7B7B7] pt-2.5' />

 </div>

<Flex className="w-[522px] justify-between mt-6">
  {/* Product Price */}
  <h3 className="text-[48px] font-bold text-[#CC7722]">৳ {product.price}</h3>

  {/* Quantity Controls */}
  <div className="  text-[#000000] ">
    <p className='text-[16px] text-center pb-2.5'>Quantity</p>
    <Flex className={'w-[174px] border justify-center border-[#D9D9D9] rounded-[13px] gap-x-5 text-[28px] font-semibold'}>
      <button
      onClick={() => {
        const existingItem = items.find((item) => item.id === product.id);
        if (existingItem && existingItem.quantity > 0) {
          dispatch(decreaseQuantity(product.id));
        }
      }}
     
    >
      -
    </button>

    <span >
      {items.find((item) => item.id === product.id)?.quantity || 0}
    </span>

    <button
      onClick={() => {
        const existingItem = items.find((item) => item.id === product.id);
        if (existingItem) {
          dispatch(increaseQuantity(product.id));
        } else {
          dispatch(addToCart(product)); // first time adding to cart
        }
      }}
     
    >
      +
    </button>
    </Flex>
    
  </div>

</Flex>

              

              {/*  Redux Add to Cart  */}
              <Button
                onClick={handleAddToCart}
                className={
                  'text-white bg-[#2D5016] text-[28px] mt-6 mb-[66px] font-semibold rounded-[13px] pl-[177px] pr-[181px] py-3 hover:bg-[#3D6020] transition-all cursor-pointer'
                }
              >
                Add to Cart
              </Button>
            </div>
            <div className="">
<div className=" w-[349px] pb-[30px] bg-[#FFFFFF] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] rounded-[20px] pt-5 pl-8.5">
             <h3 className='text-[#404040] text-[23px] font-semibold pb-7.5'>You may also like</h3>
             <Flex className={'gap-x-[23px] pb-7'}>
              <Image src={'/Fiddle.svg'} alt='Fiddle' width={71} height={71}/>
              <div>
                <h4 className='text-[18px] text-[#404040] font-medium'> Fiddle Leaf Plant</h4>
                <p className='text-[16px] text-[#8C8C8C] py-1.5'>Indoor Plant</p>
                <h4 className='text-[#CC7722] text-[16px]'>৳ 150</h4>
              </div>
             </Flex>

             <Flex className={'gap-x-[23px] pb-7'}>
              <Image src={'/snake.svg'} alt='Fiddle' width={71} height={71}/>
              <div>
                <h4 className='text-[18px] text-[#404040] font-medium'> Snake Plant</h4>
                <p className='text-[16px] text-[#8C8C8C] py-1.5'>Indoor Plant</p>
                <h4 className='text-[#CC7722] text-[16px]'>৳ 150</h4>
              </div>
             </Flex>


             <Flex className={'gap-x-[23px] pb-7'}>
              <Image src={'/Monstera.svg'} alt='Fiddle' width={71} height={71}/>
              <div>
                <h4 className='text-[18px] text-[#404040] font-medium'> Monstera Delisiosa</h4>
                <p className='text-[16px] text-[#8C8C8C] py-1.5'>Indoor Plant</p>
                <h4 className='text-[#CC7722] text-[16px]'>৳ 3,400</h4>
              </div>
             </Flex>


             <Flex className={'gap-x-[23px] pb-7'}>
              <Image src={'/Vermi.svg'} alt='Fiddle' width={71} height={71}/>
              <div>
                <h4 className='text-[18px] text-[#404040] font-medium'> Vermi Compost</h4>
                <p className='text-[16px] text-[#8C8C8C] py-1.5'>Fertilizer</p>
                <h4 className='text-[#CC7722] text-[16px]'>৳ 200</h4>
              </div>
             </Flex>


             <Flex className={'gap-x-[23px] pb-7'}>
              <Image src={'/Vine.svg'} alt='Fiddle' width={71} height={71}/>
              <div>
                <h4 className='text-[18px] text-[#404040] font-medium'> Vine</h4>
                <p className='text-[16px] text-[#8C8C8C] py-1.5'>Outdoor Plant</p>
                <h4 className='text-[#CC7722] text-[16px]'>৳ 150</h4>
              </div>
             </Flex>
            
       </div>
        <Image src={'/love.svg'} alt='love icon' width={94} height={65} className='pt-[161px]'/>
</div>
          </Flex>
          
          <Image src={Description} alt={`${product.name} Description`}/>
      
       <ProductReviews/>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
