import Container from '../../(Components)/Container'
import ExpertCard from './ExpertCard'
import Flex from '../../(Components)/Flex'
import CEO from '/public/CEO.svg'
import Spacalist from '/public/Specialist.svg'

const Experts = () => {
  return (
    <>
    <div className="pt-[68px] pb-32 bg-white">
        <Container>
            <div className="text-center text-[#2D5016]">
                <h3 className='text-[52px] font-semibold   pb-2.5'>Meet Our Gardening Experts</h3>
                <p className='w-[1154px] m-auto font-light text-[28px] pb-[62px]'>Our passionate team of horticulturists and plant specialists brings years of combined experience to help your garden flourish

</p>
</div>
<Flex className={'justify-between'}>
<ExpertCard Expertimg={CEO} Name={'Aminul Islam Sagor'} position={'CEO & Gardening Expert'} about={`With years of hands on gardening experience, Sagor leads Trigardening with passion and expertise, ensuring our customers always get the best advice, experience and quality.`}/>
<ExpertCard Expertimg={Spacalist} Name={'Marium Nipu'} position={'Plant Care Specialist'} about={`From creative gardening blogs to personalized plant consultancy, Nipu helps our community learn, grow, and stay inspired.`}/>
<ExpertCard Expertimg={CEO} Name={'Another Person'} position={'Designation'} about={`With years of hands on gardening experience, Sagor leads Trigardening with passion and expertise, ensuring our customers always get the best advice, experience and quality.`}/>
</Flex>
            
        </Container>
    </div>
    </>
  )
}

export default Experts