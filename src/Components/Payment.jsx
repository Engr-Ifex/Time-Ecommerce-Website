import React, { useContext, useState } from 'react';
import { CartContext } from './cartContext';
import { useNavigate } from 'react-router-dom'; // For navigation

const Payment = () => {
  const { cart } = useContext(CartContext);
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptId, setReceiptId] = useState('');
  const navigate = useNavigate(); // Navigation hook

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Function to generate a random receipt ID
  const generateReceiptId = () => {
    return `RECEIPT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  };

  const handlePayment = () => {
    // Simulate payment processing
    alert('Processing payment...');
    setTimeout(() => {
      setReceiptId(generateReceiptId()); // Generate receipt ID
      setShowReceipt(true);
    }, 2000); // Show receipt after 2 seconds
  };

  const printReceipt = () => {
    window.print();
  };

  const goHome = () => {
    navigate('/'); // Navigate back to the home page
  };

  if (showReceipt) {
    return (
      <div className="h-screen bg-white text-black flex flex-col items-center justify-center">
        <div className="w-96 p-5 rounded-lg shadow-lg border border-gray-300">
          <h1 className="text-2xl mb-4">Receipt</h1>
          <p className="mb-4">Thank you for your payment!</p>
          <p className="font-bold mb-4">Receipt ID: {receiptId}</p>
          <div className="mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-1">
                <span>{item.title}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <hr className="border-gray-400 my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          <button
            onClick={printReceipt}
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 mr-10"
          >
            Print Receipt
          </button>
          <button
            onClick={goHome}
            className="bg-gray-500 text-white py-2 px-4 mt-4 rounded hover:bg-gray-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#1B1D22] text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6">Payment Page</h1>
      <div className="w-96 bg-gray-800 p-5 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.title}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <hr className="border-gray-600 my-4" />
        <h3 className="text-lg">Total: ${calculateTotal()}</h3>
        <button
          onClick={handlePayment}
          className="bg-[#9A836C] w-full text-white py-2 mt-5 rounded hover:bg-green-700"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
