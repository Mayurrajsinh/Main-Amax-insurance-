import React from 'react';
import { Link } from 'react-router-dom';
import HelpLevels from '../Components/HelpLevels';

function Support() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-160px)] pt-23 pb-24 text-white overflow-hidden">
        {/* Half-height Background Layer */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-[#0065ff] z-0"></div>

        {/* Main Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-3">
          {/* Breadcrumb & Intro */}
          <div className="mb-8">
            <Link to="/" className="text-white hover:underline mr-2">Home</Link>
            <span>Contact Us</span>
            <p className="mt-5 text-white">
              At Policybazaar, it is our constant endeavour to provide great customer experience.
              In case you require assistance, we have created multiple ways to reach out to us.
              We commit to resolving your queries to your satisfaction.
            </p>
          </div>

          {/* Boxes Section */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-7 mt-10">
            {/* Left Box */}
            <div className="bg-white rounded-2xl flex items-center h-90 w-full md:w-[70%] min-w-[200px] shadow-md">
              <img src="Images/contact-banner.svg" className="h-full w-40 object-contain ml-5" />
              <div className="ml-6 text-black">
                <h3 className="font-bold text-2xl">My Account</h3>
                <p>Fastest One-stop Servicing Gateway</p>
                <ul className="text-gray-700 mt-4 space-y-1 text-sm leading-8">
                  <li>⭐ Download policy</li>
                  <li>⭐ Share feedback</li>
                  <li>⭐ Request a callback</li>
                  <li>⭐ Raise a query</li>
                  <li>⭐ Track policy status</li>
                  <li>⭐ View policy details & more</li>
                </ul>
                <button className="bg-black px-5 py-2 rounded-3xl hover:bg-green-400 hover:shadow-lg mt-4 text-yellow-300 hover:text-white">
                  Login to my account
                </button>
              </div>
            </div>

            {/* Right Box */}
            <div className="bg-white rounded-2xl flex flex-col justify-start h-90 w-full md:w-[355px] shadow-md p-5">
              <div className="text-black mb-4">
                <h3 className="text-2xl font-bold">Need help?</h3>
                <p>Choose how you like to connect with us</p>
              </div>

              {/* Help Options */}
              <div className="space-y-3 text-sm">
                <a href="#" className="flex items-center justify-between bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition">
                  <img src="Images/request_callback.svg" alt="Row 1" className="w-10 h-10 object-contain" />
                  <p className="flex-1 ml-3 text-gray-700 font-medium">Request a call back</p>
                  <span className="text-gray-500 text-lg font-bold">{'>'}</span>
                </a>

                <a href="#" className="flex items-center justify-between bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition">
                  <img src="Images/chatwithus.svg" alt="Row 2" className="w-10 h-10 object-contain" />
                  <p className="flex-1 ml-3 text-gray-700 font-medium">Chat with us</p>
                  <span className="text-gray-500 text-lg font-bold">{'>'}</span>
                </a>

                <a href="#" className="flex items-center bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition">
                  <img src="Images/connectwhatapp.svg" alt="Row 3" className="w-10 h-10 object-contain" />
                  <div className="ml-3">
                    <p className="text-gray-700 font-medium">Contact on WhatsApp</p>
                    <p className="text-green-600 font-bold text-sm">+91 9328881836</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 24x7 assistance card  */}
         <div className="h-90 flex items-center justify-center my-5">
            <div className="assi-card flex flex-col md:flex-row items-center justify-center shadow-md overflow-hidden p-6 gap-6 w-[80%] bg-red-300 rounded-2xl"
                    style={{
                            background: 'linear-gradient(270deg, #15EFEF 0%, #FEDA82 100%)'
                            }}
            >
            {/* Image Section */}
            <div className="w-[200px] ">
                {/* Desktop Image */}
                <img
                src="Images/assistance.png"
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
                {/* <div className="flex justify-end">
                    <a
                        href="https://www.amaxinsurance.com/about-us/customer-service.html"
                        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                        Connect Now
                    </a>
                </div> */}
            </div>
            </div>
        </div>

        {/* Help Levels Section */}
        <div className="flex justify-center mt-12">
        <div className="w-330 ">
            <HelpLevels />
        </div>
        </div>


        {/* Message Section */}
          <div className="border-b-2 text-black space-y-4 p-6 mt-10 bg-white rounded-lg ">
                <h3 className="text-2xl font-bold text-gray-800">Message from Head of Customer</h3>
                <h5 className="text-lg font-semibold text-gray-700">Dear Valued Customer,</h5>
                <p>Thank you for placing your trust in us.</p>
                <p>
                    Amax Insurance General Insurance has always been known as a forward-looking, customer-centric organization.
                    We take immense pride in the spirit of service and the culture of keeping the customer first in our scheme of things.
                </p>
                <p>
                    Connect with us by downloading our{" "}
                    <a href="#" className="text-blue-600 no-underline hover:text-blue-800">Caringly Yours</a> App and avail various services such as claim via Motor OTS & Health CDC,
                    Add your policy, save E-cards, and manage your policies.
                </p>
                <p>
                    We are available on social media:{" "}
                    <a href="#" className="text-blue-600 no-underline hover:text-blue-800">Twitter</a>,{" "}
                    <a href="#" className="text-blue-600 no-underline hover:text-blue-800">Facebook</a>, and{" "}
                    <a href="#" className="text-blue-600 no-underline hover:text-blue-800">Instagram</a>.
                </p>
                <p>
                    For motor claims up to INR 30,000, you can even use our Motor OTS.{" "}
                    <a href="#" className="text-blue-600 no-underline hover:text-blue-800">Click here</a> to know more.
                </p>
                <p>
                    Smart Care Executive 24×7
                </p>
                <p>
                    Send us a 'Hi' on{" "}
                    <a href="tel:9328881836" className="text-blue-600 no-underline hover:text-blue-800">9328881836</a> to get instant care.
                </p>
                <p>
                    For knowing more about our Grievance Redressal Procedure, please{" "}
                    <a href="#" className="text-blue-600 no-underline hover:text-blue-800">Click here</a>.
                </p>
                <p>
                    For knowing more about our Service Parameters and Turnaround Times, please{" "}
                    <a href="#" className="text-blue-600 no-underline hover:text-blue-800">Click here</a>.
                </p>
            </div>
        {/* 2 message section */}
            <div className=" text-black space-y-4 p-6 mt-12 bg-white  shadow ">
                <h3 className="text-2xl font-bold text-gray-800">Head, Customer Experience</h3>
                <h5 className="text-lg font-semibold text-gray-700">Please allow our service network sufficient time to work on your concern.</h5>

                <p>
                    We believe in <strong>‘Caringly Yours’</strong> and I assure you that every employee of this company stands firmly with this promise.
                </p>

                <p>
                    If after having followed level 1, 2, 3 and 4 your issue remains unresolved, you may approach the Insurance Ombudsman for Redressal.
                    Kindly find your nearest Ombudsman office at{" "}
                    <a
                    href="https://www.cioins.co.in/Ombudsman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 no-underline hover:text-blue-800"
                    >
                    https://www.cioins.co.in/Ombudsman
                    </a>
                </p>

                <p>
                    We are on our toes to ensure that your experience with us remains hassle-free and speedy.
                </p>

                <p>
                    I urge each and every one of you to stay safe and take care!
                </p>

                <p>
                    <strong>Caringly Yours,</strong>
                    <br />
                    Ankit Goenka, Head - Customer Experience
                </p>

                <p>
                    We make efforts to keep our communication complete and provide solutions that are satisfactory, however, if you are still not satisfied with the solutions provided, or have some feedback for us,
                    write to me directly at{" "}
                    <a
                    href="mailto:head.customerservice@amaxinsurance.co.in"
                    className="text-blue-600 no-underline hover:text-blue-800"
                    >
                    head.customerservice@amaxinsurance.co.in
                    </a>
                </p>
            </div>

      </div>
    </>
  );
}

export default Support;
