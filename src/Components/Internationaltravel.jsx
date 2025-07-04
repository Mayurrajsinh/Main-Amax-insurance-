import React, { useEffect, useState } from 'react'
import { Stethoscope , Headset , Timer , BriefcaseMedical, Search} from "lucide-react";
import { Item } from '@radix-ui/react-accordion';
import { Input } from "@/components/ui/input"
import countryData from "@/data/countries.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { User } from "lucide-react";
import { ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"


const heightLink = {
  color:"blue"
}


function internationaltravel() {
  const whyAmax =[
    {
      icon : <Stethoscope className="w-8 h-8 text-blue-600" />,
      title : 'No health checkup required',
      desc : 'Get travel insurance without any medical checkup'
    },
    {
      icon : <Headset className="w-8 h-8 text-blue-600"/>,
      title :'24 × 7 support helpline',
      desc : 'Get assistance anytime anywhere'
    },
    {
      icon : <Timer className="w-8 h-8 text-yellow-600" />,
      title : 'Quick claim settlement',
      desc : 'With cashless facility'
    },
    {
      icon : <BriefcaseMedical className="w-8 h-8 text-red-600" />,
      title : 'PED Covered',
      desc : 'Get coverage with existing health issues'
    }
    
  ]
   const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [travelerCount, setTravelerCount] = useState(0);


  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCountries([]);
      return;
    }

    const filtered = countryData.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm]);

  return (
    <>
       <div
       className="bg-cover bg-center bg-no-repeat min-h-screen brightness-110"
       style={{backgroundImage : "url(./public/images/plane-flying-in-air.jpg)"}}
       >
        <div className="grid grid-cols-2 justify-center mx-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-130 mt-3">
            <h1 className='font-bold text-3xl'>Travel without any worries,plans starting <span className='text-violet-500'>₹30 per day</span></h1>
            <h5 className='font-bold text-lg mt-12 mb-3'>Why Amax Insurance?</h5>
            {
              whyAmax.map((item , index) => (
                <div key={index} className= "flex items-center gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-bold text-lg text-[#FFF8DC]">{item.title}</h3>
                    <p className="text-sm text-[#000000]">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
          <div style={
            {
              backdropFilter: "blur(14px)",
             
            }
          }  className='w-130 h-fit mt-40 p-8 border  border-gray-300 shadow-sm rounded-3xl '>
                <h1 className='font-bold text-2xl flex-wrap justify-start text-[#FFD700]'>where are you travelling?</h1>
                <div className='my-2 relative'>
                  <div className="my-2 relative ">
                    {/* Input-like wrapper */}
                    <div className="flex flex-wrap items-center min-h-[3.5rem] border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 w-full">
                      
                      {/* Selected countries as pills inside the input box */}
                      {selectedCountries.map((country, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mb-1"
                        >
                          {country}
                          <button
                            className="ml-1 text-blue-600 hover:text-red-600"
                            onClick={() => {
                              setSelectedCountries(selectedCountries.filter(c => c !== country));
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))}

                      {/* Actual input field for typing */}
                      <input
                        type="text"
                        placeholder={selectedCountries.length === 0 && searchTerm === "" ? "Search your destination country" : ""}
                        className="flex-1 border-none focus:outline-none text-base min-w-[120px] h-8 placeholder:text-gray-900"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>

                    {/* Dropdown suggestion box */}
                    {filteredCountries.length > 0 && (
                      <ul className="absolute z-10 bg-white border border-gray-200 rounded-md mt-1 w-full max-h-48 overflow-y-auto shadow-lg">
                        {filteredCountries.map((country, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              if (!selectedCountries.includes(country.name)) {
                                setSelectedCountries([...selectedCountries, country.name]);
                              }
                              setSearchTerm("");
                              setFilteredCountries([]);
                            }}
                          >
                            {country.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {filteredCountries.length > 0 && (
                    <ul className="absolute z-10 bg-white border border-gray-200 rounded-md mt-1 w-full max-h-48 overflow-y-auto shadow-lg">
                      {filteredCountries.map((country, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                          if (!selectedCountries.includes(country.name)) {
                            setSelectedCountries([...selectedCountries, country.name]);
                          }
                          setSearchTerm("");
                          setFilteredCountries([]);
                        }}
                        >
                          {country.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-sm text-[#F1EFEC]">Start Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      if (endDate && date > endDate) {
                        setEndDate(null);
                      }
                    }}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    placeholderText="Select Start Date"
                    dateFormat="dd MMM yyyy"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-yellow-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 font-semibold text-sm text-[#F1EFEC]">End Date</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate || new Date()}
                    placeholderText="Select End Date"
                    dateFormat="dd MMM yyyy"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-yellow-500"
                  />
                </div>
                </div>
                <div className="border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between w-full max-w-md mt-4">
                  {/* Left icon */}
                  <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                    <User className="w-5 h-5 text-white" />
                  </div>
                    <span className="text-lg font-bold text-green-500  ">
                      {travelerCount} Traveler{travelerCount !== 1 ? 's' : ''} Selected
                    </span>
                  </div>

                  {/* Add Travelers Button */}
                  <button
                    onClick={() => setTravelerCount((prev) => prev + 1)}
                    className="text-blue-600 text-sm font-semibold"
                  >
                    + Add Travelers
                  </button>
                </div>
                <div className='flex justify-center'>
                    <Button variant="secondary" size="icon" className="size-8 w-40 bg-blue-500 text-lg text-white my-4">
                  View Plans<ChevronRightIcon />
                </Button>
                </div>
                <p className="text-xs px-5 text-[#F1EFEC]">By Click on "View Plans" you agree to our <a style={heightLink} href="#">privet policy</a> and <a style={heightLink} href="#">Term use</a></p>
          </div>
        </div>
    </div>
    </>
  )
}

export default internationaltravel