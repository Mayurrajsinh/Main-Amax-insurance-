import React from "react";
import { Tabs } from "@/Components/ui/tabs";
import MobileappCard from "@/Components/MobileappCard";
import Assistance from "@/Components/Assistance";
import ItemsBox from "@/Components/ItemsBox"; // ✅ reusable box

function Home() {
  const tabItems = [
    { value: "personal", label: "Account", content: "Make changes to your account here." },
    { value: "commercial", label: "Commercial", content: "Change your password here." },
    { value: "msme", label: "MSME", content: "Change your password here." },
    { value: "Govt Schemes", label: "Govt Schemes", content: "Change your password here." },
    { value: "Rural", label: "Rural", content: "Change your password here." },
  ];

  const images = [
    { img: 'Images/healthbannerimg.webp', desc: 'Health' },
    { img: 'Images/motor-banner-lop.webp', desc: 'Car' },
    { img: 'Images/bike-banner-img.webp', desc: 'Bike' },
    { img: 'Images/dyanamic-pricing.webp', desc: 'Climatesafe' },
    { img: 'Images/travel-banner-img.webp', desc: 'Travel' },
    { img: 'Images/home-banner-img.webp', desc: 'Home' },
    { img: 'Images/pet-banner-img.webp', desc: 'Pet' },
    { img: 'Images/ev-insurance-banner-img.webp', desc: 'EV' },
    { img: 'Images/cyber-insurance-banner-img.webp', desc: 'Cyber' },
  ];
  const images2 =[
    { img : 'Images/group-health-insurance.webp', desc : 'Employee'},
    {img : 'Images/marine-banner-img.webp',desc : 'Transit'},
    {img : 'Images/home-banner-img.webp', desc :'Property'},
    {img : 'Images/liability-banner-img.webp', desc : 'Liability'},
    {img : 'Images/engineering-banner-img.webp', desc :'Engineering'}
  ]
  const images3 = [
    {img : 'Images/fire-insurance-banner-img-2.webp', desc : 'Fire'},
    {img : 'Images/marine-banner-img.webp',desc : 'Marine'},
    {img : 'Images/shop-insurance-banner-img.webp', desc : 'Shop'},
    {img : 'Images/engineering-banner-img.webp', desc :'Engineering'},
    {img : 'Images/liability-banner-img.webp',desc : 'Liaibility'},
    {img : 'Images/miscellaneous-insurance-banner-img.webp', desc : 'miscellaneous'},
    {img : 'Images/claim-registration-banner-img.webp', desc : 'Claim Reg'},
    {img : 'Images/renew-policy-banner-img.webp', desc : 'Renew'}
  ]
  const images4 =[
    {img : 'Images/pm-jay-insurance-banner-img.webp', desc : 'PMJY'},
    {img : 'Images/pradhan-mantri-suraksha-bima-yojana-img.webp', desc : 'PMSBY'},
    {img : 'Images/pradhan-mantri-fasal-bima-yojana-img.webp', desc : 'PMFBY'},
    {img : 'Images/weather-insurance-banner-img.webp', desc : 'Wether'}
  ]
  const images5 = [
    {img : 'Images/crop-insurance-banner-img.webp', desc : 'Crop'},
    {img : 'Images/weather-insurance-banner-img.webp', desc : 'Wether'}
  ]
  const plans = [
    { img: 'Images/youre-doing-great-overall.webp', text: 'My Health Care Plan', to: '/' },
    { img: 'Images/top-up-health-insurance.webp', text: 'Health Guard', to: '/' },
    { img: 'Images/health-ins-virus.webp', text: 'Extra Care Plan', to: '/' },
    { img: 'Images/critical-illness-insurance.svg', text: 'Criti Care', to: '/' },
    { img: 'Images/care-calculator.webp', text: 'Global Personal Guard', to: '/' },
    { img: 'Images/preventive-checkup.webp', text: 'Personal Guard', to: '/' },
  ];

  const tabImages = {
    personal: images,
    commercial: images2,
    msme: images3,
    "Govt Schemes": images4,
    Rural: images5
  };

  return (
    <>
      <div className="overflow-x-hidden w-full">
        <div className="p-2 pt-24 flex justify-between h-fit bg-gradient-to-r from-blue-400 to-yellow-200 gap-1 ">
          <Tabs defaultValue="personal" className="w-full">
            {/* ✅ Use reusable component */}
            <ItemsBox tabItems={tabItems} tabImages={tabImages} plans={plans} />
          </Tabs>
        </div>

        <div className="flex justify-center my-8 ">
          <MobileappCard />
        </div>
        <div className="mt-20">
          <h3 className="font-bold text-2xl ml-8">What Our Cutomers Are Saying</h3>
          <div className="flex px-4 text-xl ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  {[
    {
      title: "Rajveer Sharma",
      des: "I would like to thank the website 'www.policybazaar.com' because of which I could get a good policy."
    },
    {
      title: "Vikash Yadav",
      des: "Thanking you very much for your support for getting our policy quickly, I would appreciate your work."
    },
    {
      title: "Jone Weak",
      des: "The services provided by Policybazaar are extremely helpful in making the right choice. Overall I had a good experience with Policybazaar."
    }
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
    >
      <h4 className="text-xl font-semibold mb-4 text-gray-800">
        {item.title}
      </h4>
      <p className="text-gray-600 text-sm">{item.des}</p>
    </div>
  ))}
</div>

        </div>
        </div>

        <div className="">
          <Assistance />
        </div>
      </div>
      <div className="flex justify-center">
          <div className="w-300 h-fit bg-[#f7f9ff]">
            <h1 className="flex justify-center font-bold text-3xl my-4">Our Partner</h1>
            <p className="flex justify-center opacity-30 mb-9">Leading insurers for your financial freedom</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {[
              "Bajaj-Allianz-Insurance.webp",
              "Birla_Sunlife_Insurance.webp",
              "Canara_HSBC_Insurance..webp",
              "Care-Insurance.webp",
              "Cholamandalam-Insurance..webp",
              "Edelweis_Tokio_Insurance.d2d8fc7e75f9ef7b16ef.webp",
              "Exide-insurance.webp",
              "Future-Generali-Insurance.webp",
              "HDFC_Life_Insurance.webp",
              "HDFC-ERGO-Insurance.webp",
              "ICICI_Pru_Insurance.webp",
              "ICICI-Lombard-Insurance.webp",
              "IDBI_Fed_Insurance.webp",
              "IFFCO-Tokio-Insurance.webp",
              "Kotak-General-Insurance.webp",
              "Manipal-Cigna-Insurance.webp",
              "Niva-Bupa-Insurance.webp",
              "Oriental-Insurance.webp",
              "Reliance-Insurance.webp",
              "SBI-Insurance.webp",
              "Star-Insurance.webp",
              "United-India-Insurance.webp",
              "Universal_Sompo.webp",
              "Royal_Sundram.png",
            ].map((file, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm flex justify-center items-center 
                          opacity-20 hover:opacity-100 transition duration-300 ease-in-out"
              >
                <img
                  src={`/Images/PartnerImg/${file}`}
                  alt={`Partner ${index}`}
                  className="w-28 h-auto object-contain"
                />
              </div>
            ))}
          </div>

          </div>
      </div>
    </>
  );
}

export default Home;
