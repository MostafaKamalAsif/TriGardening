import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import ProductCard from '../ProductCard'
import Deliciosa from '/public/Deliciosa.svg'
import Shvets from '/public/Shvets.svg'
import Pavel from '/public/Pavel.svg'
import  Stroobants from '/public/Stroobants.svg'
const FeaturedProduct = () => {
  return (
    <>
    <div className="bg-[#F5F5DC] pt-[75px] pb-[116px]">
        <Container>
            <h3 className="text-[52px] font-semibold text-center text-[#2D5016] pb-20">
            Featured Product
          </h3>
          <Flex className={"justify-between"}>
<ProductCard Productimg={Deliciosa} Name={'Monstera Deliciosa'} Type={"Indoor Plant"} Price={"2000 - 3,400"} review={"(24)"}/>
<ProductCard Productimg={Shvets} Name={'Organic Compost Fertilizer'} Type={"Fertilizer"} Price={"60 - 440"} review={"(12)"}/>
<ProductCard Productimg={Pavel} Name={'Pruning Shears'} Type={"Equipment"} Price={"180 - 450"} review={"(34)"}/>
<ProductCard Productimg={Stroobants} Name={'Snake Plant'} Type={"Indoor Plant"} Price={" 150- 500 "} review={"(35)"}/>
          </Flex>
        </Container>
    </div>
    </>
  )
}

export default FeaturedProduct