import React from "react";
import { ChevronDown } from "lucide-react"; // For the down arrow icon

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

const RegistrationInputBox = () => {
    const [carType, setCarType] = React.useState("Select Car Type");
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px]">
      <div className="bg-[#eff0f3] shadow-lg rounded-xl p-6 w-full max-w-md">
        <label htmlFor="regNumber" className="block text-sm font-semibold mb-2 text-gray-700 ml-2">
          Your <span className="text-blue-700">Car</span> registration number
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

         <div className="mt-3">
  <label className="block text-sm font-semibold mb-2 text-gray-700 ml-2">
    Car type
  </label>

  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <button
        className="w-full px-4 py-3 rounded-md text-sm border-none focus:outline-none bg-white shadow-inner placeholder-gray-400 flex justify-between items-center"
        style={{
          boxShadow: "inset 0 2px 8px rgba(147, 147, 147, 0.94)",
        }}
      >
        {carType}
        <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-full">
      <DropdownMenuItem onClick={() => setCarType("Ola / Uber")}>Ola / Uber</DropdownMenuItem>
      <DropdownMenuItem onClick={() => setCarType("Taxi")}>Taxi</DropdownMenuItem>
      <DropdownMenuItem onClick={() => setCarType("Tourist Vehicle")}>Tourist Vehicle</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
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