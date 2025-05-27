import React, { useState } from "react";

const HelpLevels = () => {
  const [showLevel1, setShowLevel1] = useState(false);
  const [showLevel2, setShowLevel2] = useState(false);
  const [showLevel3, setShowLevel3] = useState(false);
  const [fileName2, setFileName2] = useState("");
  const [fileName3, setFileName3] = useState("");

  return (
    <div className=" text-black w-full mt-12 rounded-xl p-6">
      <h2 className="font-bold text-3xl mb-4">Here's how to receive help</h2>
      <div className="bg-white rounded-2xl shadow-md p-5 w-full space-y-3">
        {/* Level 1 */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowLevel1(!showLevel1)}
          >
            <div className="flex items-center space-x-3">
              <p className="transform rotate-[270deg] text-sm text-gray-500">Level</p>
              <span className="text-lg font-bold">1</span>
              <p className="text-gray-700">Login to My Account to raise a Service Request</p>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700">
              ▼
            </div>
          </div>
          {showLevel1 && (
            <div className="mt-4 px-4 text-sm text-gray-800 space-y-3">
              <p>
                If you have any query regarding your policies, kindly log in to My Account to raise a Service Request.
              </p>
              <button className="bg-black text-yellow-300 hover:text-white hover:bg-green-500 px-4 py-2 rounded-xl">
                Login to My Account
              </button>
            </div>
          )}
        </div>

        {/* Level 2 */}
        <div className="bg-gray-100 rounded-lg p-4 ">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowLevel2(!showLevel2)}
          >
            <div className="flex items-center space-x-3">
              <p className="transform rotate-[270deg] text-sm text-gray-500">Level</p>
              <span className="text-lg font-bold">2</span>
              <p className="text-gray-700">Reach out to our Head of Customer Services</p>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700">
              ▼
            </div>
          </div>
          {showLevel2 && (
            <form
              className="mt-4 space-y-3 px-4 text-sm pl-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <label>Ticket ID</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter Ticket ID" />
                <p className="text-gray-500 text-sm mt-1">{`>`} Description based on ticket</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" className="p-2 border rounded" placeholder="Full Name" />
                <input type="email" className="p-2 border rounded" placeholder="Email" />
                <input type="tel" className="p-2 border rounded" placeholder="Mobile Number" />
                <input type="tel" className="p-2 border rounded" placeholder="Alternate Mobile Number" />
              </div>
              <div>
                <label className="block mb-1">Upload Document</label>
                <input
                  type="file"
                  className="block"
                  onChange={(e) => setFileName2(e.target.files[0]?.name || "")}
                />
                {fileName2 && <p className="text-blue-600 text-sm mt-1">Uploaded: {fileName2}</p>}
              </div>
              <textarea className="w-full p-2 border rounded" placeholder="Detail Complaint"></textarea>
              <div className="flex gap-3 items-center">
                <p className="text-sm">Captcha Code: <strong>8X3Y2</strong></p>
                <input type="text" className="p-2 border rounded" placeholder="Enter Captcha" />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800">
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Level 3 */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowLevel3(!showLevel3)}
          >
            <div className="flex items-center space-x-3">
              <p className="transform rotate-[270deg] text-sm text-gray-500">Level</p>
              <span className="text-lg font-bold">3</span>
              <p className="text-gray-700">Reach out to our Chif Grievance</p>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700">
              ▼
            </div>
          </div>
          {showLevel3 && (
            <form
              className="mt-4 space-y-3 px-4 text-sm pl-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <label>Ticket ID</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter Ticket ID" />
                <p className="text-gray-500 text-sm mt-1">{`>`} Description based on ticket</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" className="p-2 border rounded" placeholder="Full Name" />
                <input type="email" className="p-2 border rounded" placeholder="Email" />
                <input type="tel" className="p-2 border rounded" placeholder="Mobile Number" />
                <input type="tel" className="p-2 border rounded" placeholder="Alternate Mobile Number" />
              </div>
              <div>
                <label className="block mb-1">Upload Document</label>
                <input
                  type="file"
                  className="block"
                  onChange={(e) => setFileName3(e.target.files[0]?.name || "")}
                />
                {fileName3 && <p className="text-blue-600 text-sm mt-1">Uploaded: {fileName3}</p>}
              </div>
              <textarea className="w-full p-2 border rounded" placeholder="Detail Complaint"></textarea>
              <div className="flex gap-3 items-center">
                <p className="text-sm">Captcha Code: <strong>5F6Z9</strong></p>
                <input type="text" className="p-2 border rounded" placeholder="Enter Captcha" />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpLevels;
