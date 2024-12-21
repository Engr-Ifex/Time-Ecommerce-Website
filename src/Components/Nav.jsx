import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { CartContext } from './cartContext';



const Nav = () => {
    const [openMenu, setopenMenu] = useState(false);

    const toggleMenu = () => {
        setopenMenu(!openMenu)
    }
    const { cart } = useContext(CartContext); 

  return (
    <div>
        <nav className='flex justify-center gap-[300px] p-5 max-w-[1200px] absolute left-0 right-0 mx-auto max-[900px]:hidden '>
            <div className='flex justify-center gap-[100px] text-[16px] tracking-widest '>
                <Link className='font-semibold text-[19px] text-white ' to={"/"}>TIMES</Link>
                <Link className='text-[#C5C5C5] hover:text-white' to={"/"}>PRODUCTS</Link>
                <Link className='text-[#C5C5C5] hover:text-white' to={"/"}>ABOUT-US</Link>
            </div>
            <div className='relative'>
                <div className='absolute bottom-4 left-3 bg-[#9A836C] inline-flex items-center justify-center w-4 h-4 text-[11px] font-bold rounded-full'>
                    {cart.length}
                </div>
                <Link className='text-xl text-[#C5C5C5] hover:text-white' to={"/cart"}><IoCartOutline /></Link>
            </div>
        </nav>

        <nav className='flex justify-between p-5 absolute left-0 right-0  min-[900px]:hidden min-[900px]:mx-0'>
            <div className={`flex flex-col gap-[30px] bg-[#1B1D22] h-screen z-10 w-full absolute top-0 px-2 py-5 transform ${
                    openMenu ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}>
                <div className= 'flex gap-[20px] mt-5'>
                    <LiaTimesSolid className='text-white mt-1 text-2xl' onClick={toggleMenu} />
                    <Link className='font-semibold text-[19px] text-white mb-10 ' to={"/"}>TIMES</Link>
                </div>
                <Link className='text-[#C5C5C5] hover:text-white' to={"/"}>PRODUCTS</Link>
                <hr />
                <Link className='text-[#C5C5C5] hover:text-white' to={"/"}>ABOUT-US</Link>
            </div>
            <div className='flex justify-center gap-3 items-center text-[16px] tracking-widest '>
                <FaBars className='text-white' onClick={toggleMenu} />
                <Link className='font-semibold text-[19px] text-white ' to={"/"}>TIMES</Link>
            </div>
            <div className='relative'>
                <div className='absolute bottom-4 left-3 bg-[#9A836C] inline-flex items-center justify-center w-4 h-4 text-[11px] font-bold rounded-full'>
                    {cart.length}
                </div>
                <Link className='text-xl text-[#C5C5C5] hover:text-white' to={"/cart"}><IoCartOutline /></Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav