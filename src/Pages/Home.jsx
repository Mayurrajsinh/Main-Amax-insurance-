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

        <div className="flex px-4 text-xl font-semibold">
          Insurance Simplified: Must-Read Articles
        </div>

        <div className="">
          <Assistance />
        </div>
      </div>
    </>
  );
}

export default Home;
