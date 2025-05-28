import React from 'react'
import { NavLink } from 'react-router-dom';



const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-md hover:bg-gray-100 ${
    isActive ? 'text-blue-600 ' : 'text-black'
  }`;

function Footer() {

  return (
    <div className='h-fit w-full  bg-gray-100 mt-2'>
        <footer className='h-full w-full px-1'>
            <div className="upper-footer  my-2 flex items-center justify-between gap-1">
            <div className="logo h-32 aspect-square">
                <img src="/AMAX.png " className='' alt="" />
            </div>
            <div className="link text-right">
  <NavLink to="/" className={navLinkClass}>Home</NavLink>
<NavLink to="/claim/health-insurance" className={navLinkClass}>Claim</NavLink>
<NavLink to="/support" className={navLinkClass}>Support</NavLink>
            </div>
            </div>
            <div className="mid-footer">
                
            </div>
            <div className="bottom-footer ">
                <h4 className='font-bold'>Disclaimer</h4>
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
                <div className="allright text-center my-2 bg-blue-500 text-blue-200 py-2">
                    © Copyright 2025 Bajaj Allianz - All Rights Reserved
                </div>
    </div>
  )
}

export default Footer