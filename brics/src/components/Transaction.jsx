import React, { useState } from "react";
import { Search } from "@mui/icons-material";

const Transaction = () => {
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // State to track selected user
  const [proceed, setProceed] = useState(false); // State to track proceed action

  const users = ["Person1", "Person2", "Person3", "Person4"];

  const renderUsers = () => {
    return users.map((user) => (
      <button
        key={user}
        className={`user-item bg-slate-800 rounded-md hover:border-b hover:scale-105 hover:cursor-pointer ${
          selectedUser === user ? "bg-slate-500 text-white" : ""
        }`}
        onClick={() => setSelectedUser(user)}
      >
        {user}
      </button>
    ));
  };

  const handleProceedClick = () => {
    setProceed(true);
  };

  return (
    <div className={`relative ${proceed ? "bg-black bg-opacity-50" : ""}`}>
      <div className="flex flex-col gap-4 px-3 py-5 mt-10 border-2 rounded-[20px] border-white bg-gray-900 mx-auto w-[40%]">
        <div className="font-semibold uppercase text-2xl text-center">
          Transaction
        </div>
        <div>
          <div className="input-box flex items-center gap-1">
            <Search color="primary" />
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input p-2 text-black rounded-xl bg-gray-300 placeholder:text-black w-full"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search user"
            />
          </div>
        </div>
        <div className="w-3/4 flex flex-col gap-2 px-4 py-2 rounded-xl">
          <div className="text-xl font-semibold">Contacts</div>
          <div className="flex flex-col gap-2">{renderUsers()}</div>
          {selectedUser && (
            <button
              className="proceed-button bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
              onClick={handleProceedClick}
            >
              Proceed
            </button>
          )}
        </div>
      </div>
      {proceed && (
        <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center ">
          <div className="btoken-container">
            <div className="bg-gray-800" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '110px', height: '60vh', borderRadius: '10px' }}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label center-item font-bold">Enter Amount</label>
                <div className="join">
                  <div className="grow">
                    <div className='center-item drop-item'>
                      <input id="amount" name="amount" className="center-item input join-item ip-padding" type="text" placeholder="1.00" />
                    </div>
                  </div>
                  <div className='center-item drop-item'>
                    <select id="asset" name="asset" className="select-bordered select join-item ip-padding">
                      <option value="" disabled>Select Asset</option>
                      <option value="native">XLM</option>
                      <option value="native">BRIC</option>
                    </select>
                  </div>
                </div>
                <div className='center-item'>
                  <button type="button" className="px-3 py-2 border-2 border-green-700 text-green-600 rounded-lg hover:bg-green-600 hover:text-white font-bold">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
