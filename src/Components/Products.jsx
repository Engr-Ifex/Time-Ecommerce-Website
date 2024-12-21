import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from './cartContext';
import { MdSelectAll } from "react-icons/md";
import { GiJewelCrown } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { GrRestroomMen } from "react-icons/gr";
import { MdElectricalServices } from "react-icons/md";

const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const { addToCart, popupMessage } = useContext(CartContext); 

  useEffect(() => {
    const fetchProducts= async () => {

      try {
        let url = ''
        if (category === 'all'){
          url ='https://fakestoreapi.com/products'
        } else{
          url = `https://fakestoreapi.com/products/category/${category}`
        }
        const response = await fetch(url)
        const data = await response.json();
         setProducts(data)   
        console.log("Fetched data:", data);
      } catch (error) {
          console.error("Error fetching data:", error)
      } 
    };
      fetchProducts();
  }, [category]);


  return (
    <div id='products' className='font-body'>
        <div className='bg-pro-bg bg-cover bg-center bg-[#1B1D22] h-full text-white flex flex-col justify-center items-center pb-20 '>
            <div className='text-center pt-20 pb-10'>
              <h1 className='font-semibold mb-3'>FEATURED CATEGORIES OF TIMES</h1>
              <p className='font-normal text-xs text-[#B1B1B1]'>What looked like a small patch of purple grass, above five feet <br /> square, was moving across the sand in thei.</p>
            </div>
            <div className='flex justify-center items-center gap-10 px-2 mb-20 max-[900px]:hidden'>
              <button onClick={() => setCategory("all")} className='px-10 py-4 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'>All</button>
              <button onClick={() => setCategory("jewelery")} className='px-10 py-4 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'>Jewelry</button>
              <button onClick={() => setCategory("men's clothing")} className='px-10 py-4 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'>Men</button>
              <button onClick={() => setCategory("women's clothing")} className='px-10 py-4 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'>Women</button>
              <button onClick={() => setCategory("electronics")}className='px-10 py-4 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'>Electronics</button>
            </div>

            <div className='flex justify-center items-center gap-4 px-2 mb-20 min-[900px]:hidden'>
              <button onClick={() => setCategory("all")} className='px-4 py-2 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'><MdSelectAll /></button>
              <button onClick={() => setCategory("jewelery")} className='px-4 py-2 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'><GiJewelCrown /></button>
              <button onClick={() => setCategory("men's clothing")} className='px-4 py-2 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'><GrRestroomMen /></button>
              <button onClick={() => setCategory("women's clothing")} className='px-4 py-2 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'><GrRestroomWomen /></button>
              <button onClick={() => setCategory("electronics")}className='px-4 py-2 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold hover:bg-[#B1A48F] hover:text-[#1B1D22]'><MdElectricalServices /></button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {
                  
                products.length > 0 ? (
                  
                  products.map((product) => {
                    return (
  
                    <div key={product.id}>
                      <div className='relative  bg-white w-[250px] h-[200px] flex justify-center items-center'>
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80"></div> */}
                            <div className='relative'>
                                <Link to={`/details/${product.id}`}><img src={product.image} alt={product.title} className='w-[180px] h-[180px]' /></Link>
                            </div>
                      </div>
                      <div className='w-[250px]'>
                        <div className='py-3'>
                          <Link to={`/details/${product.id}`}>
                            <p className='text-[#B1B1B1] text-[14px] pb-3'>{product.title}</p>
                          </Link>
                          <p>${product.price}</p>
                        </div>
                        {/* <p className='text-[#B1B1B1] text-[14px] pb-5'>What looked like a small patch of purple grass, above five feet square wan.</p> */}
                        <button className='px-[20px] py-4 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold w-[250px] hover:bg-[#B1A48F] hover:text-[#1B1D22] '
                        onClick={() => addToCart(product)}
                        >ADD TO CART</button>
                      </div>
                    </div>
                    )
  
                  })
                ) : (
                  <div className='text-center'>
                    <p>Loading products ...</p>
                  </div>
                )
              }
            </div>
            {popupMessage && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white p-4 rounded-lg">
            {popupMessage}
          </div>
          )}
        </div>
    </div>
  )
}

export default Products

