import Image from 'next/image'
import Button from '../../(Components)/Button'
import Container from '../../(Components)/Container'
import Flex from '../../(Components)/Flex'
import Facebook from '/public/facebook.svg'
import phone from '/public/phone.svg'
import Whatsapp from '/public/whatsapp.svg'
const Contact = () => {
  return (
   <>
   <div className="pt-[70px] pb-24 bg-[#FFFFFF]">
    <Container>
                <div className="text-center text-[#2D5016]">
                <h3 className='text-[52px] font-semibold   pb-2.5'>Get In Touch</h3>
                <p className='w-[1154px] m-auto font-light text-[28px] pb-[47px]'>Have questions? We're here to help you grow your gardening knowledge</p>
                </div>

                <Flex className={'justify-between'}>
                     <div className="space-y-[71px]">
                        <Flex>
<Image src={phone} alt='Phone'/>
                            <div className="pl-[27px] text-[#2D5016] text-[22px]">
                                <h4 className='  font-semibold'>Phone</h4>
                                <p>01712-452342</p>
                            </div>

                        </Flex>
                            
                            <Flex>
<Image src={Facebook} alt='Facebook Page'/>
                            <div className="pl-[27px] text-[#2D5016] text-[22px]">
                                <h4 className='  font-semibold'>Facebook Page</h4>
                                <p>fb.com/gardening.tri</p>
                            </div>

                        </Flex>
                        <Flex>
<Image src={Whatsapp} alt='Whatsapp'/>
                            <div className="pl-[27px] text-[#2D5016] text-[22px]">
                                <h4 className='  font-semibold'>Whatsapp</h4>
                                <p>01712-452342</p>
                            </div>

                        </Flex>
                            
                        </div>
                     
<div className="w-[874px] border border-[#B7B7B7] rounded-[37px] pt-11.5 pl-9.5 pr-[49px] pb-[41px]">
 <Flex className={'gap-x-5 pb-6.5'}>
    <input type="text" placeholder='Your Name' className='w-[383.55px] border border-[#B7B7B7] rounded-[7px] pt-4 pb-[17px] pl-[19px] placeholder:text-[#B7B7B7] placeholder:text-[18px]'/>
    <input type="email" placeholder='Your Email' className='w-[383.55px] border border-[#B7B7B7] rounded-[7px] pt-4 pb-[17px] pl-[19px] placeholder:text-[#B7B7B7] placeholder:text-[18px]'/>
 </Flex>
 <input type="text" placeholder='Subject' className='w-[784px] border border-[#B7B7B7] rounded-[7px] pt-4 pb-[17px] pl-[19px] placeholder:text-[#B7B7B7] placeholder:text-[18px]'/>
  <input type="text" placeholder='Your Message' className='w-[784px] max-h-[146px] border border-[#B7B7B7] rounded-[7px] pt-4 pb-[105px] pl-[19px] my-6.5 placeholder:text-[#B7B7B7] placeholder:text-[18px]'/>
  <Button className={'text-[22px] bg-[#7A9B57] rounded-xl px-[308px] py-[15px] '}>Send Message</Button>
</div>

                </Flex>
    </Container>
   </div>
   </>
  )
}

export default Contact