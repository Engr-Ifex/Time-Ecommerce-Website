import React, { useContext } from 'react';
import Nav from './Nav';
import { CartContext } from './cartContext';
import Footer from './footer';
import {Link} from 'react-router-dom'
const Cart = () => {
  const { cart, updateQuantity, removeItem, popupMessage } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const increaseQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const decreaseQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    if (item) {
      if (item.quantity > 1) {
        updateQuantity(productId, item.quantity - 1);
      } else if (item.quantity === 1) {
        removeItem(productId);
      }
    }
  };

  if (cart.length === 0) {
    return <div className="text-white p-10">Your cart is empty!</div>;
  }

  return (
    <div>
      <Nav />
      <div className="text-white font-body h-full bg-[#1B1D22] flex flex-col justify-center items-center pt-[130px] px-10">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-5 gap-4 text-[#9A836C] text-sm mb-4">
            <p className="text-left">PRODUCT</p>
            <p className="text-center">UNIT PRICE</p>
            <p className="text-center">QUANTITY</p>
            <p className="text-center">PRICE</p>
            <p className="text-right">ACTIONS</p>
          </div>
          <hr className="border-[#9A836C] mb-4" />
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-5 gap-4 items-center text-sm py-4">
              <div className="flex items-center text-left">
                <img src={item.image} alt="img" className="w-12 h-12 mr-4 max-[900px]:hidden" />
                <p className="text-xs">{item.title}</p>
              </div>
              <p className="text-center">${item.price.toFixed(2)}</p>
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 border border-[#9A836C] text-white"
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 border border-[#9A836C] text-white"
                >
                  +
                </button>
              </div>
              <p className="text-center">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                className="px-3 py-1 border border-[#B1A48F] text-[#B1A48F] hover:bg-[#B1A48F] hover:text-[#1B1D22] text-xs max-[900px]:text-[10px]"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <hr className="border-[#9A836C] mt-4" />
          <div className="flex justify-between items-center mt-4 text-lg font-bold pb-5">
            <p>Total Price:</p>
            <p>${calculateTotal()}</p>
          </div>

          <div className='pb-10 flex gap-10'>
          <button className="px-10 py-2 bg-[#9A836C] text-white hover:bg-[#B1A48F] hover:text-[#1B1D22] text-sm">
              <Link to={"/Payment"}>Checkout</Link>
            </button>
            <button className="px-10 py-2 border border-[#9A836C] text-[#9A836C] hover:text-[#fff] text-sm">
              <Link to={"/"}>Continue Shopping</Link>
            </button>

          </div>
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

export default Cart;
