import React from 'react'

function MobileappCard() {
  return (
    <div className="h-90 w-[80%]  flex items-center rounded-2xl"
        style={{
                    background: 'linear-gradient(to left, #00559C 0%, #1882B9 27.4%, #42D0E9 67.24%)'
                }}
        >
             <img src="/Images/bmvpl.webp" className="h-full w-90"/>
             <h1 className="flex flex-col font-bold text-2xl w-[50%] text-white">
                Effortlessly Manage Insurance at Your Fingertips.
                 <p className="text-base mt-2">
                Download the App Now!
              </p>
              <div className="flex gap-3 mt-4">
                <img src="/Images/app_store_696810fe31.svg" className="h-full w-40 "/>
                <img src="/Images/google_play_badge_c786de1341.svg" className="h-full w-40 "/>
              </div>
              </h1>
             
    </div>
  )
}

export default MobileappCard