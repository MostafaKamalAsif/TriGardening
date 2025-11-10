'use client';
import { useState } from 'react';
import Flex from '@/app/(Components)/Flex';

const PotColorSelector = () => {

  const [selected, setSelected] = useState(null);

  
  const colors = ['#FFFFFF', '#FFFFFF']; 

  return (
    <div>
      <h3 className='font-medium text-[25px] text-[#000000] pt-3.5 pb-3'>Pot Color</h3>
      <Flex className={'gap-x-5'}>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`w-[42px] h-[42px] rounded-full border-[5px] border-[#DADADA] cursor-pointer transition-all duration-200 ${
              selected === index ? 'bg-[#9E6431]' : 'bg-[#FFFFFF]'
            }`}
          ></div>
        ))}
      </Flex>
    </div>
  );
};

export default PotColorSelector;
