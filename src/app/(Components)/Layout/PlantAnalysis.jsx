import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from 'next/image'
import Plants from "/public/Plants.svg"
import Button from '../Button'
import { IoCamera } from "react-icons/io5";
const PlantAnalysis = () => {
  return (
    <>
    <div className="pb-[202px] bg-[#FFFFFF]">
        <Container>
            <Flex className={'gap-x-[82px]'}>
                <div className="">
                    <h3 className='text-[#2D5016] text-[52px] font-semibold pb-[37px]'>Plant Clinic Analysis</h3>
                    <p className='w-[1112px] text-[#000000] text-[32px] pb-15'>Upload a photo of your plant and get instant AI-powered diagnosis with treatment recommendations from our experts</p>
                    <Button className={"text-[32px] bg-[#7A9B57] w-[492px]  font-medium text-white flex items-center gap-x-[33px] rounded-[69px] pr-[45px] py-5.5 pl-[38px]"}> <IoCamera/> Diagnose Your Plant </Button>
                    
                </div>
                <div className="">
                    <Image src={Plants} alt='Plants'/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default PlantAnalysis