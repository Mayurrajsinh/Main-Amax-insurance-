import React from 'react'
import { NavLink } from 'react-router-dom';



const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-md hover:bg-gray-100 ${
    isActive ? 'text-blue-600 ' : 'text-black'
  }`;

const detailss = [
    {
      title: "Company",
      Links: [
        "About Us",
        "Public Disclosures",
        "Investors",
        "Contact Us",
        "Careers",
        "Agent Registration",
      ],
    },
    {
      title: "Resource",
      Links: [
        "Blog",
        "Insurance FAQs",
        "Vendor code of conduct",
        "Surety Bond policies",
        "Horizon watch",
      ],
    },
    {
      title: "Service",
      Links: ["Renewals", "Self Service"],
    },
    {
      title: "Group Companies",
      Links: ["Amax Group"],
    },
  ];

function Footer() {

  return (
    <>
    <div className="w-full bg-gray-100 py-10 px-5 mt-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        {detailss.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4 text-black">{section.title}</h3>
            <ul className="space-y-2">
              {section.Links.map((link, idx) => (
                <li key={idx} className="text-gray-500 hover:text-orange-500 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className='h-fit w-full  bg-gray-100 mt-2'>
        <footer className='h-full w-full px-1'>
            <div className="upper-footer  my-2 flex items-center justify-between gap-1">
            <div className="logo h-32 aspect-square">
                <img src="/AMAX.png " className='' alt="" />
            </div>
            <h4 className='font-bold flex justify-start'>Disclaimer</h4>
            <div className="link text-right">
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/claim/health-insurance" className={navLinkClass}>Claim</NavLink>
              <NavLink to="/support" className={navLinkClass}>Support</NavLink>
            </div>
            </div>
            <div className="mid-footer">
                
            </div>
            <div className="bottom-footer ">
                <p className='text-sm'>
                    <span className='text-blue-400'>
                    Notwithstanding my telephone/mobile is registered with NDNC and or notwithstanding the Telecom Regulatory Authority of India [TRAI] restrictions/guidelines on unsolicited telecalls, by my accessing this web site and leaving the site half way enquiring/verify amax Allianz General Insurance Co. Ltd's (BAGIC) products/services and or my making a request to call me back, it is deemed that I have expressly authorized BAGIC and or I am hereby authorizing BAGIC to call me back or send me text messages for solicitation and procurement of various insurance products and services of BAGIC. In this regard I shall not have any complaint nor complain to TRAI as to any alleged unsolicited calls by BAGIC to me.
                    </span>
                    <br />
                    <span>
                    Images used on this website and the models photographed in them are for representative purposes only and are not indicative of anyone's personal thoughts or ideas.Tax benefits are subject to changes in tax laws.Beware Of Spurious Phone Calls: IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.
                    </span>

                </p>
            </div>
        </footer>
                <div className="flex justify-between items-center bg-blue-500 text-blue-200 py-2 px-4">
                  {/* Left: Copyright */}
                  <div className="text-sm">
                    © Copyright 2025 Bajaj Allianz - All Rights Reserved
                  </div>

                  {/* Right: Social Icons */}
                  <ul className="flex space-x-4">
                    {[
                      { href: "#", src: "Images/FB.svg", alt: "Facebook" },
                      { href: "#", src: "Images/linkedin-in.svg", alt: "LinkedIn" },
                      { href: "#", src: "Images/instagram.svg", alt: "Instagram" },
                      { href: "#", src: "Images/x-twitter.svg", alt: "Twitter" },
                    ].map((icon, index) => (
                      <li key={index}>
                        <a href={icon.href} target="_blank" rel="noopener noreferrer">
                          <div className="h-10 w-10 rounded-full flex items-center justify-center transition transform hover:scale-110 bg-black">
                            <img src={icon.src} alt={icon.alt} className="h-5 w-5" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

    </div>
    </>
  )
}

export default Footer