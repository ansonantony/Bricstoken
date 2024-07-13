import React, { useState } from 'react';
import axios from 'axios';

const BuyToken = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      const response = await axios.post('http://localhost:3000/api/token/buy-token', { amount }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      // Handle response
    } catch (error) {
      console.error('Buy Token failed:', error);
      setError('Buy Token failed. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">Buy Token</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="country" className="block text-white mb-2">Select Country</label>
            <select id="country" name="country" className="w-full p-2 rounded-md bg-gray-700 text-white">
              <option value="" disabled>Select Country</option>
              <option value="Brazil">Brazil</option>
              <option value="Russia">Russia</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="South Africa">South Africa</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Iran">Iran</option>
              <option value="Egypt">Egypt</option>
              <option value="Ethiopia">Ethiopia</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-white mb-2">Enter Amount</label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              id="amount"
              name="amount"
              className="w-full p-2 rounded-md bg-gray-700 text-white"
              type="text"
              placeholder="1.00"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="asset" className="block text-white mb-2">Select Asset</label>
            <select id="asset" name="asset" className="w-full p-2 rounded-md bg-gray-700 text-white">
              <option value="" disabled>Select Asset</option>
              <option value="native">XLM</option>
              <option value="native">BRIC</option>
            </select>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
              Buy Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyToken;
