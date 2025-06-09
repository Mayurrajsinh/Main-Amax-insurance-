// ItemBox.jsx
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Button } from "@/Components/ui/button";

const ItemBox = ({ tabItems, tabImages, plans }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("personal");

  const cardWidth = 240;

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, plans.length - 1));
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    current?.addEventListener("scroll", handleScroll);
    return () => current?.removeEventListener("scroll", handleScroll);
  }, []);

  const imageRefs = useRef([]);
    imageRefs.current = (tabImages[activeTab] || []).map(
    (_, i) => imageRefs.current[i] ?? React.createRef()
    );


  const handleImageButtonClick = (index) => {
    setActiveImageIndex(index);
    imageRefs.current[index].current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  };

  return (
    <Tabs defaultValue="personal" className="w-fit">
      <div className="w-[50%] bg-gray-200 ml-10 rounded-2xl p-5 flex flex-col gap-6 mt-5">
        <TabsList className="h-fit bg-transparent">
          {tabItems.map((tab) => (
            <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => {
                    setActiveTab(tab.value);
                    setActiveImageIndex(0); // Reset dot nav
                }}
                className="py-3 m-1 h-fit px-6 cursor-pointer data-[state=active]:bg-blue-600 data-[state=active]:text-blue-200 rounded-full"
                >
                {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Top Category Images */}
        <div className="w-full max-w-[600px] mx-auto">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 w-max px-2 py-4">
              {(tabImages[activeTab] || []).map((item, index) => (
                <div
                    key={index}
                    ref={imageRefs.current[index]}
                    className="flex flex-col items-center min-w-[160px] scroll-smooth"
                >
                    <img
                    src={item.img}
                    alt={`Slide ${index}`}
                    className="w-36 h-36 object-cover rounded-xl shadow-lg"
                    />
                    <p className="text-sm mt-2 font-medium text-gray-700 text-center">{item.desc}</p>
                </div>
                ))}
            </div>
          </div>

          {/* Dot Navigation for Images */}
          <div className="flex w-full justify-center mt-4">
            <div className="flex gap-2 bg-gray-200 rounded-full p-2">
              {(tabImages[activeTab] || []).map((_, index) => ( 
                <button
                  key={index}
                  onClick={() => handleImageButtonClick(index)}
                  className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                    activeImageIndex === index ? 'bg-black' : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <button className="w-full h-12 bg-blue-400 rounded-3xl font-bold text-white">
          Get quote
        </button>

        <div>
          <h2 className="text-2xl font-semibold">Find the Best Health Insurance</h2>
          <p className="text-gray-700">Secure Your Everyday at Every Step of the Way</p>
        </div>

        {/* Scrollable Plan Cards */}
        <div
          className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-2 max-h-[140px]"
          ref={scrollRef}
          onWheel={(e) => {
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
                  e.preventDefault();
                  e.stopPropagation();
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
                {selectedCardIndex === index && (
                  <Link
                    to={to}
                    className="mt-2 absolute bottom-2 left-3 right-3 bg-black text-white text-sm text-center py-2 rounded-lg z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dot Navigation for Plans */}
        <div className="flex w-full justify-center mt-4">
          <div className="flex gap-2 bg-gray-200 rounded-full p-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-black' : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <Button className="w-full h-12 bg-white hover:bg-blue-400 text-black border border-gray-300 mt-4">
          Explore
        </Button>
      </div>

      {tabItems.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ItemBox;
