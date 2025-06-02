import React from "react";
import { useParams } from 'react-router-dom'

const RegistrationInputBox = () => {
    const { type } = useParams()
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px]">
      <div className="bg-[#eff0f3] shadow-lg rounded-xl p-6 w-full max-w-md">
        <label htmlFor="regNumber" className="block text-sm font-semibold mb-2 text-gray-700 ml-2">
          Your <span className="text-blue-700">{type.split("-")[0]}</span> registration number
        </label>

        <input
          type="text"
          name="regNumber"
          id="regNumber"
          placeholder="GJ01AB1234"
          className="w-full px-4 py-3 rounded-md text-sm border-none focus:outline-none bg-white shadow-inner placeholder-gray-400"
          style={{
            boxShadow: "inset 0 2px 8px rgba(147, 147, 147, 0.94)",
          }}
        />
        <div className="mt-3">
            <label htmlFor="regNumber" className="block text-sm font-semibold mb-2 text-gray-700 ml-2">
            Mobile number
            </label>

            <input
            type="text"
            name="regNumber"
            id="regNumber"
            placeholder="Enter Mobile Number"
            className="w-full px-4 py-3 rounded-md text-sm border-none focus:outline-none bg-white shadow-inner placeholder-gray-400"
            style={{
                boxShadow: "inset 0 2px 8px rgba(147, 147, 147, 0.94)",
            }}
            />
        </div>

        <div className="flex justify-center mt-4 ">
          <button
            className="px-6 py-2 text-white rounded-full text-sm font-semibold shadow-md transition-all duration-300"
            style={{
              background: "linear-gradient(179deg, rgba(13, 53, 148, 0.9) -102%, #35d3e1 162%)",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationInputBox;