import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import RenewDetail from "./ui/RenewDetail";
import { FaChevronDown, FaChevronUp, FaArrowRight } from "react-icons/fa";

const RegistrationInputBox = () => {
  const { type } = useParams();
  const featureData = [
    { heading: "Coverage Highlights", description: "Know more" },
    { heading: "Inclusions", description: "What's covered?" },
    { heading: "Exclusions", description: "What's not covered?" },
    { heading: "Additional Covers", description: "What else can you get?" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div
        className="w-full py-10 px-4"
        style={{
          background: "linear-gradient(270deg, #01699e -1.31%, #22a6c7 101.31%)",
        }}
      >
        <div className="flex flex-row justify-between items-start w-full px-6 py-10 gap-8">

          {/* Left Side – Input Box */}
          <div className="w-full max-w-md flex flex-col gap-4">
            <h1 className="bg-[#516587] rounded-full py-1 px-6 text-white inline-block text-xl font-bold">
              Best price for your requirement
            </h1>

            <div className="bg-[#eff0f3] shadow-lg rounded-xl p-6 w-full">
              <label
                htmlFor="regNumber"
                className="block text-sm font-semibold mb-2 text-gray-700 ml-2"
              >
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

              <div className="flex justify-center mt-4">
                <button
                  className="px-6 py-2 text-white rounded-full text-sm font-semibold shadow-md transition-all duration-300"
                  style={{
                    background: "linear-gradient(179deg, rgba(13, 53, 148, 0.9) -102%, #35d3e1 162%)",
                  }}
                >
                  Get Price
                </button>
              </div>
            </div>

            <h1 className="font-bold mt-2 text-white text-base">
              Brand New {type.split("-")[0]}?{" "}
              <a href="#" className="text-black underline ml-2">Click here</a>
            </h1>
          </div>

          {/* Right Side – Info Box */}
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4">

            {/* Static top section */}
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-gray-800">Key Features</h2>
              <p className="text-sm text-gray-600">Renew Your Ride, Secure Your Journey!</p>
            </div>

            {/* Toggleable sections */}
            {featureData.map((item, index) => (
  <div key={index} className="border-t pt-4">
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={() => toggleSection(index)}
    >
      <div className="flex gap-2 items-center">
        {/* Round icon before heading */}
        <div className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">
          <FaArrowRight />
        </div>
        <h2 className="text-lg font-bold text-gray-800">{item.heading}</h2>
      </div>

      <div className="ml-4 text-gray-600">
        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
      </div>
    </div>

    {openIndex === index && (
      <div className="mt-2 ml-8 text-sm text-gray-700 space-y-2">
        {/* Show normal description for others */}
        {item.heading === "Coverage Highlights" ? (
          <>
            <div><strong>Accidental Damage:</strong> Covers repair or replacement costs from collisions or mishaps</div>
            <div><strong>Theft Protection:</strong> Safeguards against loss or attempted theft of the vehicle</div>
            <div><strong>Third-Party Liability:</strong> Protection for injuries and property damage to others</div>
            <div><strong>Fire & Natural Calamities:</strong> Covers damages from fire incidents or extreme weather</div>
            <div><strong>Personal Accident Cover:</strong> Financial support for injuries sustained during an accident</div>
          </>
        ) : (
          <p>{item.description}</p>
        )}
      </div>
    )}
  </div>
))}

          </div>

        </div>
      </div>

      {/* Keep RenewDetail outside of the gradient section */}
      <RenewDetail />
    </div>
  );
};

export default RegistrationInputBox;
