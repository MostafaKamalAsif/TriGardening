import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from 'next/image'
import Plant_Clinic_Analysis from '/public/PlantAnalysis.svg'
import Expert_Blog_Content from '/public/Content.svg'
import Satisfaction_Guarantee from '/public/Satisfaction.svg'
const Commitment = () => {
  return (
    <> 
    <div className="pt-[67px] pb-[146px] bg-[#F5F5DC]">
        <Container>
                       <div className="text-center text-[#2D5016]">
                <h3 className='text-[52px] font-semibold   pb-2.5'>Our Commitment to You</h3>
                <p className='w-[1154px] m-auto font-light text-[28px] pb-[72px]'>We're dedicated to providing you with the knowledge, tools, and support needed for gardening success</p>
</div>
            <Flex className={' pl-[125px] gap-x-[161px]'}>
<div className="">
    <Image src={Plant_Clinic_Analysis} alt='Plant Clinic Analysis' className='m-auto pb-[33px]' />
    <h4 className='text-[#000000] text-[27px] font-semibold pb-3 text-center'>Plant Clinic Analysis</h4>
    <p className='w-[371px] text-[#000000] text-xl font-light m-auto text-center'>Get expert diagnosis for plant problems with our comprehensive AI analysis service. Upload photos and receive detailed treatment plans.</p>
</div>
<div className="">
    <Image src={Expert_Blog_Content} alt='Expert Blog Content' className='m-auto pb-[33px]' />
    <h4 className='text-[#000000] text-[27px] font-semibold pb-3 text-center'>Expert Blog Content</h4>
    <p className='w-[371px] text-[#000000] text-xl font-light m-auto text-center'>Access weekly articles, seasonal guides, and in-depth tutorials written by our certified horticulturists and plant specialists.</p>
</div>

<div className="">
    <Image src={Satisfaction_Guarantee} alt='Satisfaction Guarantee' className='m-auto pb-[33px]' />
    <h4 className='text-[#000000] text-[27px] font-semibold pb-3 text-center'>Satisfaction Guarantee</h4>
    <p className='w-[371px] text-[#000000] text-xl font-light m-auto text-center'>We stand behind our advice and products. If you're not completely satisfied, we'll work with you until we find the right solution.</p>
</div>

            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Commitment