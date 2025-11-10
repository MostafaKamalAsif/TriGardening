'use client';
import { useState } from 'react';

const PotColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState('white');

  const colors = [
    { name: 'White', value: 'white', bg: 'bg-white' },
    { name: 'Brown', value: 'brown', bg: 'bg-[#A0522D]' }, 
  ];

  return (
    <div className="pt-3.5">
      <h3 className="text-[25px] font-medium text-[#000000]">Pot Color</h3>
      <div className="flex pt-3 gap-x-5  ">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setSelectedColor(color.value)}
            className={`
              w-[42px] h-[42px] rounded-full border-[5px]  cursor-pointer transition-all duration-200
              ${selectedColor === color.value ? 'border-[#DADADA]' : ''} 
              ${color.bg}
              transition-all
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default PotColorSelector;
