
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

import Cslider from '../Cslider'


const FeaturedProduct = () => {

  return (
    <>
    <div className="bg-[#F5F5DC] pt-[75px] pb-[116px]">
        <Container>
            <h3 className="text-[52px] font-semibold text-center text-[#2D5016] pb-20">
            Featured Product
          </h3>
         
       <Cslider/>
        </Container>
    </div>
    </>
  )
}

export default FeaturedProduct