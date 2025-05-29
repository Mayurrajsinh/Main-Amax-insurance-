import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import MobileappCard from "@/Components/MobileappCard";
import Assistance from "@/Components/Assistance";
import { Button } from "@/Components/ui/button";

function Home() {
  const tabItems = [
    { value: "personal", label: "Account", content: "Make changes to your account here." },
    { value: "commercial", label: "Commercial", content: "Change your password here." },
    { value: "msme", label: "MSME", content: "Change your password here." },
    { value: "govt schemes", label: "Govt Schemes", content: "Change your password here." },
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

  const plans = [
    { img: 'Images/youre-doing-great-overall.webp', text: 'My Health Care Plan', to: '/' },
    { img: 'Images/top-up-health-insurance.webp', text: 'Health Guard', to: '/' },
    { img: 'Images/health-ins-virus.webp', text: 'Extra Care Plan', to: '/' },
    { img: 'Images/critical-illness-insurance.svg', text: 'Criti Care', to: '/' },
    { img: 'Images/care-calculator.webp', text: 'Global Personal Guard', to: '/' },
    { img: 'Images/preventive-checkup.webp', text: 'Personal Guard', to: '/' },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 240; // width including margin
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);


  const scrollToCard = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    current?.addEventListener("scroll", handleScroll);
    return () => current?.removeEventListener("scroll", handleScroll);
  }, []);

  // Refs for top image cards
  const imageRefs = useRef([]);
  imageRefs.current = images.map((_, i) => imageRefs.current[i] ?? React.createRef());

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleImageButtonClick = (index) => {
    setActiveImageIndex(index);
    imageRefs.current[index]?.current?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  return (
    <>
      <div className='p-2 pt-24 flex justify-between h-fit bg-gradient-to-r from-blue-400 to-yellow-200 gap-1'>
        <Tabs defaultValue="personal" className="w-fit">
          <div className="w-[50%] bg-gray-200 ml-10 rounded-2xl p-5 flex flex-col gap-6 mt-5">
            <TabsList className="h-fit bg-transparent">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="py-3 m-1 h-fit px-6 cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-blue-200 rounded-full"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Top Category Images */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 w-max">
                {images.map((item, index) => (
                  <div
                    key={index}
                    ref={imageRefs.current[index]}
                    className="flex flex-col items-center min-w-[120px]"
                  >
                    <img
                      src={item.img}
                      alt={`Mini ${index}`}
                      className="w-24 h-24 object-cover rounded-xl shadow-md"
                    />
                    <p className="text-sm mt-2 font-medium text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Navigation Buttons */}
            <div className="flex w-full justify-center mt-4">
              <div className="flex gap-2 bg-gray-300 rounded-2xl p-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageButtonClick(index)}
                    className={`w-6 h-2 rounded-xl transition-colors duration-300 ${
                      activeImageIndex === index
                        ? 'bg-black'
                        : 'bg-gray-300 hover:bg-gray-500'
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full h-12 bg-blue-400 rounded-3xl font-bold text-white">
              Get quote
            </button>

            {/* Headings */}
            <div>
              <h2 className="text-2xl font-semibold">Find the Best Health Insurance</h2>
              <p className="text-gray-700">Secure Your Everyday at Every Step of the Way</p>
            </div>

            {/* Scrollable Plan Cards */}
           {/* Scrollable Plan Cards */}
            <div
  className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-2 max-h-[140px]"
  ref={scrollRef}
  onWheel={(e) => {
    // Convert vertical scroll to horizontal scroll
    if (e.deltaY !== 0) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  }}
>
  <div className="flex gap-4 w-max relative">
    {plans.map(({ img, text, to }, index) => (
      <div
        key={index}
        onClick={(e) => {
          e.preventDefault(); // prevent vertical scroll
          e.stopPropagation(); // prevent bubbling
          setSelectedCardIndex(index === selectedCardIndex ? null : index);
        }}
        className={`bg-[#d1e9ff] hover:bg-[#b8dfff] rounded-xl shadow-md p-3 min-w-[220px] h-[100px] cursor-pointer transition-all duration-300 relative ${
          selectedCardIndex === index ? "h-[140px]" : ""
        }`}
        style={{ transition: "height 0.3s ease" }}
      >
        <div className="flex items-center justify-between">
          <img
            src={`/${img}`}
            alt={text}
            className="w-12 h-12 object-contain mr-3"
          />
          <span className="text-sm font-medium text-white-800">{text}</span>
        </div>

        {/* Hidden Button (appears inside card) */}
        {selectedCardIndex === index && (
          <Link
            to={to}
            className="mt-2 absolute bottom-2 left-3 right-3 bg-black text-white text-sm text-center py-2 rounded-lg z-10"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            View Details
          </Link>
        )}
      </div>
    ))}
  </div>
</div>

            {/* Dot Scroller */}
            <ul className="flex justify-center space-x-2 mt-2">
              {plans.map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToCard(index)}
                    className={`w-3 h-3 rounded-full border border-gray-400 ${
                      activeIndex === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    aria-label={`Scroll to card ${index + 1}`}
                  />
                </li>
              ))}
            </ul>

            {/* Final Explore Button */}
            <Button className="w-full h-12 bg-white hover:bg-blue-400 text-black border border-gray-300 mt-4">
              Explore
            </Button>
          </div>

          {/* Tab Contents */}
          {tabItems.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>

        {/* Side Image */}
        <div className="img-con w-[400px]">
          <img src="/hero.svg" alt="Hero" className='h-full w-full object-contain' />
        </div>
      </div>

      <div className="flex justify-center my-8">
        <MobileappCard />
      </div>

      <div className="flex px-4 text-xl font-semibold">
        Insurance Simplified: Must-Read Articles
      </div>

      <div className="">
        <Assistance />
      </div>
    </>
  );
}

export default Home;
