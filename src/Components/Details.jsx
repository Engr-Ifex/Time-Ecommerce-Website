import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './cartContext';
import Footer from './footer';
import Nav from './Nav';

const Details = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const { addToCart, popupMessage } = useContext(CartContext); 

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Nav/>
        <div className="text-white font-body h-screen bg-[#1B1D22] bg-details-bg bg cover bg-center  flex justify-center items-center gap-[100px] max-[900px]:flex-col-reverse max-[900px]:pt-[150px] px-[20px] max-[900px]:h-full pb-[50px]">
          

            <div className='grid gap-5'>
                <p className='text-[#B1B1B1] text-[18px]'>${product.price}</p>
                <h1 className='text-xl'>{product.title}</h1>
                <div className='w-[500px] max-[900px]:w-[300px]'>
                    <p className='text-[#B1B1B1] text-[13px]'>{product.description}</p>
                </div>
                <button className='px-[20px] py-4 border-2 border-[#B1A48F] text-[#B1A48F] font-semibold w-[250px] hover:bg-[#B1A48F] hover:text-[#1B1D22] '
                        onClick={() => addToCart(product)}
                        >ADD TO CART</button>
            </div>
            <div>
                <img src={product.image} alt={product.title} className='w-[300px]' />
            </div>
            {popupMessage && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white p-4 rounded-lg">
            {popupMessage}
          </div>
          )}
        </div>
        <Footer/>
    </div>
  );
};

export default Details;
