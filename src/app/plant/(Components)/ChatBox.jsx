import React from "react";
import { IoSend } from "react-icons/io5";
import { FaMicrophone,FaCamera ,FaPaperclip } from "react-icons/fa";
import ChatCard from "./ChatCard";
import Image from "next/image";
import usericon from "/public/UserChat.svg";
import UserProvide from "/public/yellowLeaf.svg";
import ChatCardUsage from "./ChatCardUsage";
import Button from "@/app/(Components)/Button";
import Flex from "@/app/(Components)/Flex";
import Container from "@/app/(Components)/Container";

const ChatBox = () => {
  return (
    <>
      <div className="pl-[98px] pr-[118px] pb-[103px] pt-[179px]">
        <Container>
        {/* Doctor side */}
        <ChatCard
          className={"pb-15"}
          answer={`ট্রাইগার্ডেনিং এর, প্ল্যান্ট ক্লিনিকে আপনাকে স্বাগতম। আমি আপানার প্লান্ট ডক্টর। আপনার গাছের কোন সমস্যা নিয়ে আজ কথা বলতে চান? আক্রান্ত পাতার ছবি শেয়ার করুন অথবা আপনার প্রশ্ন লিখুন।`}
        />

        {/* User side */}
        <div className={`flex items-start gap-x-4.5  `}>
          <div className="w-[651px] ms-auto bg-[#2D5016] rounded-[20px] px-8 pt-[27px] pb-4.5 drop-shadow-[0_4px_9.1px_rgba(0,0,0,0.11)] ">
            <p className="text-[23px] text-[#FFFFFF]">
              আমার গাছের পাতায় কিছু দাগ দেখা যাচ্ছে কি করতে পারি?
            </p>
          </div>

          <Image src={usericon} alt=" user" />
        </div>

        {/* Doctor side */}
        <ChatCard
          className={"pb-15 pt-[57px]"}
          answer={`অনুগ্রহ করে আপনার গাছের পাতার ছবিটি দিন আমি ছবিটি বিশ্লেষণ করে আপনাকে জানাচ্ছি। 

`}
        />

        {/* User side */}
        <div className={`flex items-start gap-x-4.5  `}>
          <div className="w-[651px] ms-auto rounded-[20px]    drop-shadow-[0_4px_9.1px_rgba(0,0,0,0.11)] ">
            <Image src={UserProvide} alt="User Provide"/>
          </div>

          <Image src={usericon} alt=" user" />
        </div>

 {/* Doctor side */}
        <ChatCardUsage/>

  {/* Doctor side */}
        <ChatCard
          className={"pb-15 pt-[57px] "} SuggestionClass={'pb-[105px]'}
          answer={`ধন্যবাদ। হলুদ দাগ সাধারণত পুষ্টির অভাব বা ছত্রাকের আক্রমণের লক্ষণ হতে পারে। আপনি কি এই বিষয়ে আরও বিস্তারিত জানতে চান?`}/>
          <Flex className={'gap-x-7 absolute -bottom-[142%] right-[40.5%] '}>
<Button className={'text-[23px] bg-[#7A9B57] hover:bg-[#2D5016] duration-300 rounded-[10px] pl-9.5 pr-8 py-2.5 w-[255px] cursor-pointer'}>হ্যাঁ, বিস্তারিত চাই</Button>
<Button className={'text-[23px] bg-[#7A9B57] hover:bg-[#2D5016] duration-300 rounded-[10px] pl-9.5 pr-8 py-2.5 w-[255px] cursor-pointer'}>না, ধন্যবাদ</Button>

        </Flex>  
           
        {/* Input Area */}
        <div className="  ">
          <div className="flex items-center gap-3  mx-auto  mt-[356px]">
           
            <Button className={'w-[69px] h-[81px] rounded-full bg-[#2D5016]  flex items-center justify-center text-white transition-all shadow-lg'}>
                 <FaCamera  className="text-[#FFFFFF] w-[42px] h-[42px]" />
            </Button>

            <Button className={'w-[69px] h-[81px] rounded-full bg-[#2D5016]  flex items-center justify-center text-white transition-all shadow-lg'}>
                 <FaPaperclip  className="text-[#FFFFFF] w-[42px] h-[42px]" />
            </Button>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="আপনার গাছের ছবি আপলোত করুন অথবা গাছ নিয়ে যেকোনো প্রশ্ন লিখুন......"
                className="w-[1020px]  pl-[39px] py-8 bg-gray-50 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#7A9B57] transition-all text-gray-700 placeholder:text-[26px] placeholder:text-[#7A9B57]"
              />
              <FaMicrophone  className="absolute top-1/2 right-[8%] text-[#2D5016] w-[55px] h-[55px] -translate-y-1/2" />
            </div>

             

             <Button className={'w-[69px] h-[81px] rounded-full bg-[#2D5016]  flex items-center justify-center text-white transition-all shadow-lg'}>
                 <IoSend  className="text-[#FFFFFF] w-[42px] h-[42px]" />
            </Button>
          </div>
        </div>
        </Container>
      </div>
    </>
  );
};

export default ChatBox;
