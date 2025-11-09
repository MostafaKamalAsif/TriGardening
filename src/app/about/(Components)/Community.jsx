import Image from 'next/image'
import Container from '../../(Components)/Container'
import Flex from '../../(Components)/Flex'
import Conference from '/public/Conference.svg'
import Terp from '/public/Terp.svg'
import YouTube from '/public/YouTube.svg'

const Community = () => {
  return (
    <>
    <div className="pt-[71px] pb-[87px] bg-[#7A9B57] ">
      <Container>
                              <div className="text-center text-[#FFFFFF]">
                <h3 className='text-[52px] font-semibold   pb-2.5'>Our Commitment to You</h3>
                <p className='w-[1154px] m-auto font-light text-[28px] pb-[51px]'>We're dedicated to providing you with the knowledge, tools, and support needed for gardening success</p>
                </div>
                <div className="flex gap-x-[173px]  ">
                 <div className="pt-7.5">
                  <Flex className={'gap-x-[27px]'}>
                    <Image src={Conference } alt='Conference '/>
                    <div className="text-[#FFFFFF]">
                      <h4 className='text-[28px] font-semibold '>Facebook Community Forum</h4>
                      <p className='text-xl font-light w-[713px] '>Connect with 10,000+ gardeners across the Bangladesh. Ask questions, share tips, and celebrate your growing journey.</p>
                    </div>
                  </Flex>

                   <Flex className={'pt-[82px] gap-x-[27px] '}>
                    <Image src={YouTube } alt='YouTube' className='-mt-22'/>
                    <div className="text-[#FFFFFF]">
                      <h4 className='text-[28px] font-semibold '>Trigardening Youtube Channel</h4>
                      <p className='text-xl font-light w-[713px] pb-[87px] '>Join us on YouTube for quick gardening tips, tricks, and guides to grow smarter.</p>
                    </div>
                  </Flex>
                 
                  <div className="text-[#2D5016] px-[21px] py-[17px] bg-[#FFFFFF] rounded-[21px] w-[288px] m-auto  font-medium text-[23px]">
                       Join Our Community
                  </div>
                 </div>
                   
                   <Image src={Terp} alt='Trap' className='pb-[186px]'/>
                </div>
      </Container>
    </div>
    </>
  )
}

export default Community