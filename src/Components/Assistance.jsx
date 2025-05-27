import React from 'react'

function Assistance() {
  return (
    <div>
        <div className="h-90 flex items-center justify-center">
            <div className="assi-card flex flex-col md:flex-row items-center justify-center shadow-md overflow-hidden p-6 gap-6 w-[80%] bg-red-300 rounded-2xl"
                    style={{
                            background: 'linear-gradient(270deg, #15EFEF 0%, #FEDA82 100%)'
                            }}
            >
            {/* Image Section */}
            <div className="w-[200px] ">
                {/* Desktop Image */}
                <img
                src="/Images/assistance.png"
                alt="Assistance"
                className="hidden md:block w-fit h-auto"
                />
                {/* Mobile Image */}
                <img
                src="/Images/assistance.png"
                alt="Assistance Mobile"
                className="block md:hidden w-full h-auto"
                />
            </div>
            {/* Content Section */}
            <div className="flex-1 md:w-1/2 flex items-center justify-between gap-6 ">
                <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800">24/7 Assistance</h2>
                <p className="mt-2 text-gray-600">
                    Get the assistance you need for all your insurance queries. We're here to help!
                </p>
                </div>
                <div className="flex justify-end">
                    <a
                        href="https://www.amaxinsurance.com/about-us/customer-service.html"
                        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                        Connect Now
                    </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Assistance