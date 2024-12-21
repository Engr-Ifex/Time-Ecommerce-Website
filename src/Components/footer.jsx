import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='font-body h-full bg-[#1B1D22] flex justify-center items-center bg-footer-bg bg-cover bg-center text-white gap-[40px] py-[40px] max-[900px]:grid'>
            <div className='grid gap-[20px] mr-20'>
                <h1 className='font-semibold text-[19px] text-white '>TIMES</h1>
                <p className='text-[#B1B1B1] text-[13px]'>When it came near enough he perceived that <br /> it was not grass; there were no blades, but <br /> only purple roots the roots.</p>
                <p className='text-[#B1B1B1] text-[13px]' ><span className='text-white'>© 2024 TIMES.</span> All Rights Reserved</p>
            </div>
            <div className='grid gap-[10px]'>
                <h1 className='text-[#B1A48F] font-bold'>Site Map</h1>
                <p className='text-[#B1B1B1] text-[13px]'>Home</p>
                <p className='text-[#B1B1B1] text-[13px]'>Product</p>
                <p className='text-[#B1B1B1] text-[13px]'>About</p>
                <p className='text-[#B1B1B1] text-[13px]'>Blog</p>
            </div>
            <div className='grid gap-[10px] mb-[55px]'>
                <h1 className='text-[#B1A48F] font-bold'>Contact</h1>
                <p className='text-[#B1B1B1] text-[13px]'>Email: times@gmail.com</p>
                <p className='text-[#B1B1B1] text-[13px]'>Phone: +880 1000 0000</p>
            </div>
            <div className='grid gap-[10px] mb-[45px]'>
                <h1 className='text-[#B1A48F] font-bold'>Subscribe Newsletter</h1>
                <p className='text-[#B1B1B1] text-[13px]'>What looked like a small patch of purple .</p>
                <input type="text" placeholder='Enter Your Email' className='p-2 bg-[#21242B] placeholder:text-[#B1B1B1] placeholder:text-[14px]' />
            </div>
        </div>
    </div>
  )
}

export default Footer