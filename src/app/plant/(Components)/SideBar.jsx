import Flex from '@/app/(Components)/Flex'
import Image from 'next/image'
import React from 'react'
import Logo from '/public/ChatLogo.svg'
import Bar from '/public/Side_Panel.svg'
import Chat from '/public/NewChat.svg'
import { IoSearchSharp,IoImageOutline } from "react-icons/io5";

const chatHistory = [
    { id: 1, text: "How to fix yellow leaves" },
    { id: 2, text: "Mango plant leaf issue" },
    { id: 3, text: "গোলাপ গাছে ফোকা হলে...." },
    { id: 4, text: "সবচেয়ে ভালো ভেজ সার" },
    { id: 5, text: "টমেটো গাছের পাতা হলুদ" }
  ];
const SideBar = () => {
  return (
    <>
    <div className="bg-[#7A9B57] pb-[1795px] pt-7 pl-[23px] pr-2.5">
     
    <Flex className={'justify-between'}> 
        <Image src={Logo} alt='logo' quality={100}/>
        <Image src={Bar} alt='Bar'/>
    </Flex>
     {/* Menu Items */}
    <div className="pt-[58px] pb-[64px] space-y-4">
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
     <div className="flex-1 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <h3 className="text-sm font-semibold mb-3 text-white/70 uppercase tracking-wider">
          History
        </h3>
        
        <div className="space-y-2 pb-4">
          {chatHistory.map((chat, index) => (
            <button
              key={chat.id}
              
              className={`w-full text-left px-4 py-3 rounded-xl transition-all `}
            >
              <p className="text-sm font-medium truncate">{chat.text}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default SideBar