import React from 'react'
import about from './Images/about.png'

const About = () => {
  return (
    <div>
        <div className='flex justify-center items-center h-full bg-[#1B1D22] font-body py-[50px] gap-[100px] text-white max-[900px]:flex-col max-[900px]:text-center px-10 '>
            <div>
                <img src={about} alt="aboutimg" className='w-[500px]' />
            </div>

            <div>
            <h1 className='text-[40px] font-bold mb-[20px] max-[900px]:text-[24px]'>
                        Discover <br className='max-[900px]:hidden'/> 
                        Luxurious Products <br className='max-[900px]:hidden'/> 
                        Which You Will Love.
                    </h1>
                    <p className='text-[13px] mb-[20px] text-[#B1B1B1]'>
                        What looked like a small patch of purple grass, above five feet square,<br className='max-[900px]:hidden'/>  was moving across the sand in their direction. Almost do am or limits <br className='max-[900px]:hidden'/>  hearts. Resolve parties but why she shewing. She sang know now <br className='max-[900px]:hidden'/>  how nay cold real case
                    </p>
                    <button className='px-10 py-4 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold'>READ MORE</button>
            </div>

        </div>
    </div>
  )
}

export default About