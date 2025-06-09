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
  const handleCarRenewClick = () => {
  setFeatureData([
    { heading: "Coverage Highlights", description: "Know more" },
    { heading: "Inclusions", description: "What's covered?" },
    { heading: "Exclusions", description: "What's not covered?" },
    { heading: "Additional Covers", description: "What else can you get?" },
    { heading: "Key Highlights", description: "Know now" }, 
  ]);
};

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
          <div className="w-full max-w-[700px] bg-white px-8 py-6 rounded-2xl shadow-2xl ml-auto mr-6 space-y-8">

          {/* Static top section */}
          <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-bold text-gray-900">Key Features</h2>
            <p className="text-sm text-gray-600">Renew Your Ride, Secure Your Journey!</p>
          </div>

          {/* Toggleable sections */}
          {featureData.map((item, index) => (
            <div key={index} className="border-t pt-5">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800">{item.heading}</h3>
                  <p className="text-lg text-gray-600 whitespace-nowrap">{item.description}</p>
                </div>

                <div className="ml-4 text-gray-600 text-xl">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {openIndex === index && (
                <div className="mt-4 text-sm text-gray-700 space-y-3 pl-2">
                  {item.heading === "Coverage Highlights" ? (
                    <>
                      {[
          ["Accidental Damage:", "Covers repair or replacement costs from collisions or mishaps"],
          ["Theft Protection:", "Safeguards against loss or attempted theft of the vehicle"],
          ["Third-Party Liability:", "Protection for injuries and property damage to others"],
          ["Fire & Natural Calamities:", "Covers damages from fire incidents or extreme weather"],
          ["Personal Accident Cover:", "Financial support for injuries sustained during an accident"]
        ].map(([title, desc], i) => (
          <div key={i} className="mb-3">
            <strong className="block text-lg text-[#264A9F]">{title}</strong>
            <span className="text-gray-700 text-sm">{desc}</span>
          </div>
        ))}

            </>
          ) : item.heading === "Inclusions" ? (
            <ul className="list-disc ml-5 space-y-2 text-lg">
              <li>Damage due to accidents, fire, theft, and natural calamities</li>
              <li>Third-party liabilities including bodily injury and property damage</li>
              <li>Personal accident cover for both the policyholder and optional pillion rider</li>
              <li>Coverage for damages incurred during transit of the vehicle</li>
              <li>Add-on covers like zero depreciation and engine protection (as opted)</li>
            </ul>
          ) : item.heading === "Exclusions" ? (
            <ul className="list-disc ml-5 space-y-2 text-lg">
              <li>Normal wear and tear or mechanical/electrical breakdowns</li>
              <li>Riding without a valid licence or under the influence of alcohol or drugs</li>
              <li>Unauthorised modifications and racing-related damages</li>
              <li>Damage outside the geographical limits of the policy</li>
              <li>Intentional damage or fraudulent claims (as opted)</li>
            </ul>
          ) : item.heading === "Additional Covers" ? (
            <ul className="list-disc ml-5 space-y-2 text-lg">
              <li>24/7 emergency claim assistance and customer support</li>
              <li>Dedicated digital policy management platform</li>
              <li>Fast-track claim processing for quick settlements</li>
              <li>Free roadside assistance and towing services</li>
              <li>Regular updates on policy benefits and renewal reminders</li>
              <li>Expert advice for maintenance and safety enhancements</li>
            </ul>
          ) : item.heading === "Key Highlights" ? (
            <ul className="list-disc ml-5 space-y-2 text-lg">
              <li>Best-in-class renewal coverage options</li>
              <li>Seamless online policy updates</li>
              <li>Instant premium calculation and discounts</li>
              <li>24x7 support for claims and queries</li>
              <li>Dedicated assistance for expired policies</li>
            </ul>
          ) :
          (
            <p className="text-gray-600">Content coming soon...</p>
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
