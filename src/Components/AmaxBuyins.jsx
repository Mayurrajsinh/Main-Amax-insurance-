import { Headset, House, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "../App.css";
import { useState } from "react";

function AmaxBuyins() {
  const [value, setValue] = useState(30000);
  const [isOpen, setIsOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [addOnOpen, setAddOnOpen] = useState(true);
  const [asseOpen, setAsseOpen] = useState(true);
  const [addition, setAddition] = useState(true);
  const [rightdd, setRightdd] = useState(true);
  const [isGSTIncluded, setIsGSTIncluded] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState({});
  const [selectedasse, setSelectedasse] = useState({});
  const [selectedaddition, setSelectedaddition] = useState({});
  const [selectedrigtdd, setSelectedrigtdd] = useState({});
  const [sortOrder, setSortOrder] = useState("Low to High");

  const handleIsCheckedChange = () => {
  setIsChecked((prev) => !prev);
};
  const handleAddOnChange = (option) => {
    setSelectedAddOns((prev) => ({ ...prev, [option]: !prev[option] }));
  };
  const handleAsseChange = (option) => {
    setSelectedasse((prev) => ({...prev, [option]: !prev[option] }))
  };
  const handleAdditionChange =(option) => {
    setSelectedaddition((prev) => ({...prev, [option]: !prev[option]}))
  }
  const handlerightddChange =(option) => {
    setSelectedrigtdd((prev) => ({...prev, [option]: !prev[option]}))
  }

  
  const insuranceData = [
    { name: "Bajaj-Allianz-Insurance.webp", idv: "₹18,500", price: "₹799", price2 : "₹ 999" },
    { name: "Birla_Sunlife_Insurance.webp", idv: "₹19,000", price: "₹850" ,price2: "₹1150" },
    { name: "Canara_HSBC_Insurance..webp", idv: "₹20,000", price: "₹810", price2:"₹1010"},
    { name: "Care-Insurance.webp", idv: "₹17,900", price: "₹780", price2 : "₹950"},
    { name: "Cholamandalam-Insurance..webp", idv: "₹20,200", price: "₹870", price2: "₹1200" },
    { name: "Edelweis_Tokio_Insurance.d2d8fc7e75f9ef7b16ef.webp", idv: "₹18,750", price: "₹825", price2 : "₹910" },
    { name: "Exide-insurance.webp", idv: "₹19,300", price: "₹805", price2 : "₹910" },
    { name: "Future-Generali-Insurance.webp", idv: "₹20,400", price: "₹860", price2: "₹1150" },
    { name: "HDFC_Life_Insurance.webp", idv: "₹19,500", price: "₹895", price2:"₹1250" },
    { name: "HDFC-ERGO-Insurance.webp", idv: "₹20,000", price: "₹875",price2:"₹1210" },
    { name: "ICICI_Pru_Insurance.webp", idv: "₹18,950", price: "₹840", price2:"₹1170" },
    { name: "ICICI-Lombard-Insurance.webp", idv: "₹19,850", price: "₹815", price2:"₹1100" },
  ];
     const sortedData = [...insuranceData].sort((a, b) => {
    const priceA = Number((isGSTIncluded ? a.price2 : a.price).replace(/[₹,\s]/g, ""));
    const priceB = Number((isGSTIncluded ? b.price2 : b.price).replace(/[₹,\s]/g, ""));
    return sortOrder === "Low to High" ? priceA - priceB : priceB - priceA;
  });
  return (
    <>
      <div className="w-full h-20 flex items-center justify-between px-8">
        <Link to="/">
          <img src="/Images/NewAmaxinsBuy.png" alt="Amax Logo" className="h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-2 px-4 py-2 rounded">
          <span className="text-xl"><Headset /></span>
          <p className="text-sm font-semibold">Helpline: 9328881836</p>
        </div>
      </div>

      <div className="flex items-center gap-x-4 ml-10">
        <Link to="/">
          <House />
        </Link>
        <img src="/Images/right-arrow.svg" />
        <p>Moter Insurance</p>
        <img src="/Images/right-arrow.svg" />
        <p>Quotes Listing</p>
      </div>
       {/* Vehicle Info Box */}
      <div className="flex flex-wrap items-start gap-3 p-4 bg-white rounded-lg shadow mt-6 mx-2">
        {[{ title: 'Vehical Variant, Fual & RTO/City', des: 'Honda Activa 4g 110 cc, Petrol , Ahmedabad(Gj27)' },
          { title: 'Mfg. Yea', des: 'Jan 2017' },
          { title: 'Registaration Date', des: '03-Nov-2017' },
          { title: 'Policy Expiry Date', des: '31-Oct-2019' },
          { title: 'Privious Insurance', des: 'Based on selection' },
          { title: 'Previous NCB', des: '0%' },
          { title: 'New NCB', des: '0 %' }].map((item, index) => (
          <div key={index} className="min-w-[10rem]">
            <h4 className="text-sm font-semibold text-gray-700 mb-1 whitespace-nowrap">{item.title}</h4>
            <p className="text-sm text-gray-500 whitespace-nowrap">{item.des}</p>
          </div>
        ))}
        <Button>Edit</Button>
      </div>
      <div className="flex w-full mt-6 px-6 gap-6">
        {/* Left Side Section */}
        <div className="w-1/3 space-y-4 border border-gray-200">
          {/* Slider */}
          <div className="bg-[#edf2fc] p-4 rounded">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-700">CHOOSE IDV</span>
              <div className="flex items-center border border-gray-300 rounded bg-white focus-within:ring-2 focus-within:ring-blue-500">
                <span className="px-2 text-black bg-gray-300 rounded-l">₹</span>
                <input
                  type="number"
                  min={30000}
                  max={80000}
                  step={1000}
                  value={value}
                  onChange={(e) => {
                    const val = Math.max(30000, Math.min(80000, Number(e.target.value)));
                    setValue(val);
                  }}
                  className="w-24 px-2 py-1 outline-none bg-transparent text-sm"
                />
              </div>
            </div>
            <input
              type="range"
              min="30000"
              max="80000"
              step="1000"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>₹30,000</span>
              <span>₹80,000</span>
            </div>
          </div>

          {/* CPA Section */}
          <div className="w-full max-w-lg mx-auto bg-white shadow rounded-lg  mt-6">
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <h4 className="text-lg font-semibold text-gray-800">CPA</h4>
              {isOpen ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
            </div>
            {isOpen && (
              <div className="px-4 py-3 border-t border-gray-200">
                <label className="flex items-center space-x-2 text-gray-700">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleIsCheckedChange}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span>Compulsory Personal Accident</span>
                </label>
              </div>
            )}
          </div>
          {/* Add-ons Section */}
          <div className="w-full max-w-lg mx-auto bg-white shadow rounded-lg  mt-4">
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer" onClick={() => setAddOnOpen(!addOnOpen)}>
              <h4 className="text-lg font-semibold text-gray-800">Add-ons</h4>
              {addOnOpen ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
            </div>
            {addOnOpen && (
              <div className="px-4 py-3 border-t border-gray-200 space-y-2">
                {["Zero Depreciation", "Road Side Assistance", "Consumable", "Engine Protector", "Return To Invoice", "Emergency Medical Expenses"].map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedAddOns[option] || false}
                      onChange={() => handleAddOnChange(option)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          {/* Accessories Section */}
          <div className="w-full max-w-lg mx-auto bg-white shadow rounded-lg mt-4">
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer" onClick={() => setAsseOpen(!asseOpen)}>
              <h4 className="text-lg font-semibold text-gray-800">Accessories</h4>
              {asseOpen ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
            </div>
            {asseOpen && (
              <div className="px-4 py-3 border-t border-gray-200 space-y-2">
                {["Electric Accessories", "Non-Electrical Accessories"].map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedasse[option] || false}
                      onChange={() => handleAsseChange(option)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          {/* Additional Covers */}
          <div className="w-full max-w-lg mx-auto bg-white shadow rounded-lg mt-4">
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer" onClick={() => setAddition(!addition)}>
              <h4 className="text-lg font-semibold text-gray-800">Addition Covers</h4>
              {addition ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
            </div>
            {addition && (
              <div className="px-4 py-3 border-t border-gray-200 space-y-2">
                {["Unnamed Passenger PA Cover", "LL Paid driver", "Geographical Extension"].map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedaddition[option] || false}
                      onChange={() => handleAdditionChange(option)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          {/* Discounts/Deductibles */}
          <div className="w-full max-w-lg mx-auto bg-white shadow rounded-lg mt-4 mb-10">
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer" onClick={() => setRightdd(!rightdd)}>
              <h4 className="text-lg font-semibold text-gray-800">Discounts/Deductibles</h4>
              {rightdd ? <ChevronUp className="w-5 h-5 text-gray-600" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
            </div>
            {rightdd && (
              <div className="px-4 py-3 border-t border-gray-200 space-y-2">
                {["Vehical is fitted with ARAI approved antitheft device", "Voluntary Deductible", "TPPD Cover"].map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedrigtdd[option] || false}
                      onChange={() => handlerightddChange(option)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          {/* Clear/Update Buttons */}
          <div className="flex justify-start gap-6 mt-4">
            <button className="px-4 py-2 bg-gray-200 rounded">Clear All</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Update</button>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="w-2/3">
          {/* Top Filters */}
          <div className="flex items-center justify-between mb-4 border border-gray-200 rounded-2xl">
            <div className="flex gap-3 items-center">
              <Link to="#" className="px-3 py-1">Comprehensive</Link>
              <Link to="#" className="px-3 py-1">Third Party</Link>

              <select className="border rounded-xl px-2 py-1 mx-4">
                <option>Individual</option>
                <option>Corporate</option>
              </select>

              <select
                className="border rounded-xl px-2 py-1"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
              </select>
              <div className="flex items-center gap-2 ml-9">
                <span className="text-sm">Inc. GST</span>
                <button
                  onClick={() => setIsGSTIncluded(!isGSTIncluded)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isGSTIncluded ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isGSTIncluded ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Quotes */}
            <div className="overflow-y-auto">
        {sortedData.map((item, index) => (
          <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 shadow mb-6">
            <div className="w-1/4 flex items-center">
              <img src={`/Images/PartnerImg/${item.name}`} alt={item.name} className="h-12 w-auto" />
            </div>
            <div className="w-1/2 text-center">
              <p className="text-sm text-gray-600">IDV</p>
              <p className="text-base font-semibold">{item.idv}</p>
            </div>
            <div className="w-1/4 flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {isGSTIncluded ? item.price2 : item.price}
              </button>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </>
  );
}

AmaxBuyins.hideNavbar = true;

export default AmaxBuyins;