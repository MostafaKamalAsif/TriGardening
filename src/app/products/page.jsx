'use client';
import { IoIosArrowDown } from "react-icons/io";
import Button from '../(Components)/Button';
import CategoryList from './Components/CategoryList';
import Container from '../(Components)/Container';
import Flex from '../(Components)/Flex';
import PriceSlider from './Components/PriceSlider';
import ProductCard from './Components/ProductCard';
import { products } from '../data/productsData';

const ProductsPage = () => {
  return (
    <div className="bg-[#F3F3F3] pt-10 pb-[151px]">
      <Container className={'flex gap-x-[70px]'}>
        <div className="w-[340px] h-[728px] px-7.5 pt-4.5 pb-9.5 bg-[#FFFFFF] rounded-[10px]">
          <h3 className='text-[#404040] text-[24px] font-semibold'>Filter Products</h3>
          <p className='text-[#404040] text-[18px] font-medium pt-4 pb-2.5'>Category</p>
          <CategoryList text={'Indoor Plants (32)'} />
          <CategoryList text={'Outdoor Plants (16)'} className={'pt-2'} />
          <h3 className='text-[#404040] text-[18px] font-medium pt-[27px] pb-5'>Price Range</h3>
          <PriceSlider />
          <h3 className='text-[#404040] text-[18px] font-medium pt-[39px] pb-2.5'>Size</h3>
          <CategoryList text={'Small (20)'} />
          <CategoryList text={'Medium(27)'} className={'pt-2'} />
          <CategoryList text={'Large (16)'} className={'pt-2'} />
          <h3 className='text-[#404040] text-[18px] font-medium pt-7 pb-2.5'>Light Requirements</h3>
          <CategoryList text={'Low Light (16)'} />
          <CategoryList text={'Medium Light (16)'} className={'pt-2'} />
          <CategoryList text={'Bright Light (16)'} className={'pt-2'} />
          <Button className={'text-[#FFFFFF] text-[17px] font-semibold bg-[#7A9B57] rounded-[10px] px-[70px] py-2.5 mt-[25px] cursor-pointer'}>
            Apply Filters
          </Button>
        </div>

        <div>
          <div className="flex gap-x-[567px] items-center">
            <div>
              <h3 className='text-[#404040] text-[40px] font-semibold'>Plants</h3>
              <p className='text-[#404040] text-xl pb-7'>Showing {products.length} of 40 products</p>
            </div>
            <div className="text-[#404040] text-[20px] flex items-center gap-x-[63px] bg-[#FFFFFF] rounded-[10px] pl-[29px] pr-[18px] py-[15px] cursor-pointer border border-[#B7B7B7]">
              Sort By: Popular <IoIosArrowDown />
            </div>
          </div>

          <Flex className={"flex-wrap gap-x-[23px] gap-y-7"}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flex>
          <Button className={'text-[#FFFFFF] text-[22px] font-semibold bg-[#7A9B57] rounded-[10px] px-10 py-4.5 mt-[113px] cursor-pointer w-fit ml-100'}>
            Load More Products
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
