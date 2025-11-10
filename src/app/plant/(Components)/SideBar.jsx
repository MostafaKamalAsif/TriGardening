'use client'
import Flex from '@/app/(Components)/Flex'
import Image from 'next/image'
import Logo from '/public/ChatLogo.svg'
import Bar from '/public/Side_Panel.svg'
import Chat from '/public/NewChat.svg'
import { IoSearchSharp,IoImageOutline } from "react-icons/io5";
import { useState } from 'react';



const SideBar = () => {
  const [activeChat, setActiveChat] = useState(0);
const chatHistory = [
    { id: 1, text: "How to fix yellow leaves" },
    { id: 2, text: "Mango plant leaf issue" },
    { id: 3, text: "গোলাপ গাছে ফোকা হলে...." },
    { id: 4, text: "সবচেয়ে ভালো ভেজ সার" },
    { id: 5, text: "টমেটো গাছের পাতা হলুদ" }
  ];

  return (
    <>
    <div className="bg-[#7A9B57] w-[373px] pb-[1900px] pt-7 pl-[23px] pr-2.5">
     
     
    <Flex className={'justify-between'}> 
        <Image src={Logo} alt='logo' quality={100}/>
        <Image src={Bar} alt='Bar'/>
    </Flex>
     {/* Menu Items */}
    <div className="pt-[58px] pb-16 space-y-4">
        <Flex className={'gap-x-[22px]'}>
            <Image src={Chat} alt='New Chat'/>
            <h3 className='text-[23px] text-white '>New Chat</h3>
        </Flex>
        <Flex className={'gap-x-[22px]'}>
            <IoSearchSharp className='w-[41px] h-[41px] text-white'/>
            <h3 className='text-[23px] text-white '>New Chat</h3>
        </Flex>
        <Flex className={'gap-x-[22px]'}>
            <IoImageOutline className='w-[41px] h-[41px] text-white'/>
            <h3 className='text-[23px] text-white '>New Chat</h3>
        </Flex>
    </div>

     {/* History Section */}
      <div className="">
        <h3 className="pl-5 text-[23px] font-bold mb-3 text-white   ">
          History
        </h3>
        
        <div className="space-y-2 ">
          {chatHistory.map((chat, index) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(index)}
              className={`w-full  px-5   py-3 rounded-[19px]  ${
                activeChat === index
                  ? 'bg-[#F5F5DC]/70 shadow-lg text-[#2D5016]'
                  : 'bg-transparent hover:bg-white/15 text-[#FFFFFF] '
              }`}
            >
              <p className=" font-medium truncate text-[23px]">{chat.text}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default SideBar