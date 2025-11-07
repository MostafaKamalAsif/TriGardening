import React from 'react'
import Cslider from '../Cslider'
import Container from '../Container'

const PopularProducts = () => {
  return (
    <>
    <div className="bg-[#FFFFFF] pt-[57px] pb-[262px]">
        <Container>
            <h3 className="text-[52px] font-semibold text-center text-[#2D5016] ">
            Popular Products
          </h3>
          <p className='text-center text-[#2D5016] text-[26px] font-light pb-[119px]'>Discover our most popular gardening essentials</p>
         
       <Cslider/>
        </Container>
    </div>
    </>
  )
}

export default PopularProducts