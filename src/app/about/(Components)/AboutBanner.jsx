import Button from '../../(Components)/Button'

const AboutBanner = () => {
  return (
    <>
    <div className="bg-[url(/AboutBanner.svg)] bg-no-repeat bg-center bg-cover pt-[161px] pb-[179px]">
    <h2 className='font-semibold text-[62px] w-[849px] m-auto text-center text-white'>Your Trusted Partner in Gardening</h2>
    <p className='w-[1005px] m-auto text-center text-[30px] text-white pt-[45px]'>Cultivating expertise, growing communities, and nurturing your green dreams for over a decade
</p>
<Button className={'px-[31px] py-[21px]  bg-[#CC7722] rounded-[63.16px] mt-12 w-fit m-auto text-[30px] font-medium cursor-pointer'}>Meet Our Team</Button>
    </div>
    </>
  )
}

export default AboutBanner