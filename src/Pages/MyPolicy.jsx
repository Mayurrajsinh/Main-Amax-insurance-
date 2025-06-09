import React, { useEffect, useRef, useCallback } from 'react';

function MyPolicy() {
  const scrollRef = useRef(null);

  const slides = [
    { img: '/Images/car.svg', text: 'Stay updated with alerts of challans' },
    { img: '/Images/AbhaCard.svg', text: 'Seamlessly create ABHA card and track all' },
    { img: '/Images/corporateHealthPolicyCheckup.svg', text: 'Link your corporate health policy and review.' },
    { img: '/Images/flightStatus.svg', text: 'Get to know your real-time flight status.' },
    { img: '/Images/travelChecklist.svg', text: 'Easily create your travel checklist for hassle-free travel.' },
    { img: '/Images/offlineAvailablity.svg', text: 'Offline availability of downloaded policy.' },
    { img: '/Images/healthCheckup.svg', text: 'Avail Cashless health checkups!.' },
  ];

  const services = [
    { img: '/Images/downloadPolicy.svg', text: 'Download Policy' },
    { img: '/Images/servicePen.svg', text: 'Edit Policy' },
    { img: '/Images/downloadPolicy.svg', text: 'Renewal Document Download' },
    { img: '/Images/serviceInitiateClaim.svg', text: 'Initiate Claim' },
    { img: '/Images/serviceTrackClaim.svg', text: 'Track Claim' },
    { img: '/Images/serviceMyRequest.svg', text: 'My Request' },
  ];

  const supportCards = [
    {
      icon: 'https://www.tataaig.com/s3/whatsapp_927eb8542b.svg',
      title: 'WhatsApp',
      detail: '+91-9328881836',
    },
    {
      icon: 'https://www.tataaig.com/s3/headphone_8bbfed9b62_bb0584a6cf.svg',
      title: 'Call to Buy New Policy',
      detail: '+91-7801981071 , 9328881836',
    },
    {
      icon: 'https://www.tataaig.com/s3/Group_10767_40825a8834.svg',
      title: 'Email:',
      detail: 'contact@amaxinsuranceservices.com',
    },
  ];

  const locatorCards = [
    { icon: '/Images/darkLocation.svg', title: 'Branch Locator' },
    { icon: '/Images/productHospital.svg', title: 'Hospital Locator' },
    { icon: '/Images/productGarage.svg', title: 'Garage Locator' },
  ];

  const autoScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % slides.length;
      container.scrollTo({
        left: index * container.offsetWidth,
        behavior: 'smooth',
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const clear = autoScroll();
    return clear;
  }, [autoScroll]);

  return (
    <div className="pt-24 px-4 pb-10 overflow-x-hidden bg-[#f9fafc] min-h-screen">
      <h1 className="text-[#264A9F] md:text-4xl text-2xl font-bold mb-6 text-center">
        All Our Services Under One Roof
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 grid grid-cols-3 gap-4">
          {services.map(({ img, text }, i) => (
            <div key={i} className="bg-white rounded-xl shadow text-center p-4 hover:shadow-lg transition-all">
              <img src={img} alt={text} className="w-14 h-14 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-800">{text}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 bg-[#f4f6ff] rounded-xl p-4 shadow">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img src="/Images/mobilev2.png" alt="Mobile Promo" className="w-36 md:w-48 object-contain" />
            <div className="w-full">
              <h2 className="text-[#264A9F] font-semibold text-base md:text-xl mb-1">
                Experience Convenience at Your Fingertips!
              </h2>
              <p className="text-xs text-gray-600 mb-2">
                Download our app now for exclusive features & services!
              </p>

              <div ref={scrollRef} className="relative w-full h-28 overflow-hidden rounded-lg">
                <div className="flex transition-transform duration-500 ease-in-out">
                  {slides.map(({ img, text }, i) => (
                    <div
                      key={i}
                      className="min-w-full flex items-center gap-3 bg-[#f4f6ff] rounded-lg p-4"
                    >
                      <img src={img} alt={`slide-${i}`} className="w-12 h-12 object-contain" />
                      <span className="text-sm text-[#333] font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Center */}
      <h1 className="text-[#264A9F] md:text-4xl text-2xl font-bold mt-12 mb-4">
        Help Center
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-xl shadow p-6">
        {supportCards.map((card, idx) => (
          <div
            key={idx}
            className="flex items-center bg-[#f4f6ff] rounded-lg shadow p-4 hover:bg-blue-50 cursor-pointer"
          >
            <div className="w-14 h-14 flex justify-center items-center">
              <img src={card.icon} alt={card.title} className="w-10 h-10 object-contain" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold text-[#264A9F]">{card.title}</p>
              <p className="text-xs text-gray-700">{card.detail}</p>
            </div>
          </div>
        ))}

        {locatorCards.map((loc, idx) => (
          <button
            key={idx}
            type="button"
            className="flex items-center justify-between bg-[#f4f6ff] rounded-lg shadow px-4 py-3 hover:bg-blue-50 transition"
          >
            <div className="flex items-center">
              <img src={loc.icon} alt={loc.title} className="w-10 h-10 mr-3" />
              <span className="text-sm font-medium text-gray-800">{loc.title}</span>
            </div>
            <img src="/Images/forwardArrow.svg" alt="Next" className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyPolicy;
