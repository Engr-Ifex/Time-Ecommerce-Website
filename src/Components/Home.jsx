import React from 'react';
import Nav from './Nav'
import watch from './Images/watch.png'
import Products from './Products'
import About from './about';
import Footer from './footer'

const Home = () => {
  return (
    <div>
        <Nav />
        <div className='bg-hero-pattern bg-cover bg-center h-screen bg-[#1B1D22] text-white font-body flex justify-center items-center max-[900px]:h-full   '>
            <div className='flex justify-center items-center gap-[140px] max-[900px]:flex-col-reverse max-[900px]:mt-[100px] max-[900px]:mx-10 max-[900px]:my-10 max-[900px]:text-center max-[900px]:gap-[50px]'>
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
                <div >
                    <div className='relative bg-watch bg-[-50px] bg-[#1B1D22] bg-200% w-[300px] h-[300px]'>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80"></div>
                        <div className='relative'>
                            <img src={watch} alt="" className='w-[250px]' />
                        </div>
                    </div>
                  <div className='bg-[#1B1D22] shadow-lg p-3 '>
                      <p className='text-[13px] pb-[10px]'>$215</p>
                      <p className='font-bold'>Calibre 9001-Classic Watch</p>
                  </div>
                </div>
            </div>
        </div>
        <Products/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home