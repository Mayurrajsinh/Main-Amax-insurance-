import React from 'react'
import { Link } from 'react-router-dom'

function Health_insurance() {
  return (
    <>
      <h1>Comprehensive Health Insurance Plans in One Place</h1>
      <p>Compare & Choose from a wide range of plans specially curated for your Health</p>
      <div className='flex justify-center items-center gap-50'>
            <div className='w-100 h-fit border border-black m-10'>
          <div className="w-fit rounded-sm flex gap-3 m-8 bg-yellow-300 font-bold">
            <Link
              to="/consumer"
              className="p-3 px-10 rounded-sm border border-transparent hover:border-black  hover:shadow-md transition-all duration-200"
            >
              Consumer
            </Link>
            <Link
              to="/partner"
              className="p-3 px-10 rounded-sm border border-transparent hover:border-black  hover:shadow-md transition-all duration-200"
            >
              Partner
            </Link>
        </div>
        <div className='w-80 h-fit border border-black p-3 rounded-sm space-y-4 py-5 m-8'>
          <input
          type="input"
          placeholder='Enter Full Name' 
          className='w-70 h-8 border border-black rounded-sm p-3'
          />
          <input
          type="input"
          placeholder='Enter Phone Number' 
          className='w-70 h-8 border border-black rounded-sm p-3'
          />
          <input
          type="input"
          placeholder='Enter Pincode' 
          className='w-70 h-8 border border-black rounded-sm p-3'
          />
          <button className='border border-black rounded-sm p-2 bg-blue-500 text-white px-10 w-70'>Inquire</button>
        </div>
      </div>
      <div>
        <img src="./public/images/Healthcare Heroes banner.png" className="w-120 f-50" />
      </div>
      </div>
    </>
  )
}

export default Health_insurance