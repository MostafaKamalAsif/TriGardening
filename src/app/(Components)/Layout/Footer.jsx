import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { FaFacebook ,FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
    <div className="pt-[114px] pb-[73px] bg-[#2D5016]">
      <Container className={'flex'}>
     
        <div className="pr-[225px] ">
          <h3 className='text-[40px] font-semibold text-white '>TriGardening</h3>
          <p className='text-[32px]  text-white'>Your Slogan goes here</p>
        </div>
        <div className="pr-[109px]">
<h3 className='text-[28px] font-semibold text-white pb-[47px] '>Quick Links</h3>
<ul>
  <li className='text-[26px]  text-white pb-[15px]'>About Us</li>
  <li className='text-[26px]  text-white pb-[15px]'>Contact</li>
  <li className='text-[26px]  text-white pb-[15px]'>Shippings</li>
  <li className='text-[26px]  text-white '>Referral Program</li>
</ul>
        </div>
        <div className="pr-[170px]">
<h3 className='text-[28px] font-semibold text-white pb-[47px] '>Categories</h3>
<ul>
  <li className='text-[26px]  text-white pb-[15px]'>Plants</li>
  <li className='text-[26px]  text-white pb-[15px]'>Tools</li>
  <li className='text-[26px]  text-white pb-[15px]'>Fertilizers</li>
  <li className='text-[26px]  text-white '>Pesticides</li>
</ul>
        </div>
        <div className="">
          <h3 className='text-[28px] font-semibold text-white pb-[21px] '>Connect With Us</h3>
          <Flex className={'gap-x-[43px]'}>
            <FaFacebook className='text-white w-11 h-11'/>
            <RiInstagramFill className='text-white w-11 h-11'/>
            <FaTwitter className='text-white w-11 h-11'/>
            <FaYoutube className='text-white w-11 h-11'/>
          </Flex>
          <p className='text-[26px]  text-white pt-[26px] pb-8'>supprot@trigardening.com</p>
          <h4 className='text-[28px] font-semibold text-[#F5F5DC] pb-3.5'>Call Now</h4>
          <p className='text-[26px]  text-white'>+8801234567890</p>
        </div>
     
      </Container>
    </div>
    </>
  )
}

export default Footer