import React, { Children } from 'react'
import Image from 'next/image';
import BotLogo from '/public/ChatBoxLogo.svg';
const ChatCard = ({answer,className,children,SuggestionClass}) => {
  return (
    <>
    <div className={`flex items-start gap-x-4.5 ${className}`}>
    <Image src={BotLogo} alt='Bot Logo'/>
    <div className={`w-[651px] bg-[#F5F5DC] text-[23px] text-[#2D5016] rounded-[20px] px-8 pt-[27px] pb-4.5 drop-shadow-[0_4px_9.1px_rgba(0,0,0,0.11)] ${SuggestionClass} `}>
        <p className=''>{answer}

</p>

    </div>
    
</div>
{children}
    </>
  )
}

export default ChatCard