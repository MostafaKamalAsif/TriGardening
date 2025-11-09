'use client'
import React, { useState } from 'react';
import ChatCard from './ChatCard';
import { ChevronRight, Check } from 'lucide-react';

const ChatCardUsage = () => {
  const [selectedId, setSelectedId] = useState(null);

  const suggestions = [
    { id: 1, text: 'গাছের পাতার এই রোগ গুলোকে কি বলে?' },
    { id: 2, text: 'এই দাগগুলো কি হনুদ, নাদামী নাকি কালো?' },
    { id: 3, text: 'সমস্যাটি কি সংক্রামক?' },
    { id: 4, text: 'গাছের এমন অবস্থায় কখন গাছে পানি দেয়া উচিত?' }
  ];

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="space-y-5.5">
      <ChatCard
        className="pt-[57px]"
        answer="ছবিটি বিশ্লেষণ করে বেশ কিছু সম্ভাব্য সমস্যা পাওয়া গেছে। আপনার গাছের সঠিক রোগ নির্ণয়ের জন্য, অনুগ্রহ করে নিচের প্রশ্নগুলোর থেকে একটি বেছে নিন।"
      >
        {/* Suggestions below the answer */}
        <div className="flex flex-col gap-4 mt-6 ml-20">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleClick(suggestion.id)}
              className={`text-[23px] rounded-[20px] px-6 py-5 drop-shadow-[0_4px_9.1px_rgba(0,0,0,0.11)] transition-all duration-300 text-left flex items-center justify-between group ${
                selectedId === suggestion.id
                  ? 'bg-[#3D5A29] text-white w-[697px]'
                  : 'bg-[#F5F5DC] text-[#2D5016] w-[650px] hover:bg-[#EEEEC8]'
              }`}
            >
              <p className="leading-relaxed">{suggestion.text}</p>
              {selectedId === suggestion.id ? (
                <Check size={28} className="flex-shrink-0 ml-4" strokeWidth={2.5} />
              ) : (
                <ChevronRight
                  size={28}
                  className="flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          ))}
        </div>
      </ChatCard>
    </div>
  );
};

export default ChatCardUsage;
