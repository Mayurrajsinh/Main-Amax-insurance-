import React from 'react'

function ContactBox() {
  return (
    <div className= "mx-50 my-15">
        <h3 className="text-xl font-semibold mb-4">Register Claim</h3>

        <div className=" contact flex gap-6">
          {[
            { img: 'Images/Mobilenumber.svg', title: 'Dial Our Toll Free Number', des: '1800-209-5858' },
            { img: 'Images/Email-id.svg', title: 'Email us on', des: 'amax@insuranceservice.com' },
          ].map(({ img, title, des }, i) => (
            <div
              key={i}
              className=" hover:bg-[#b8dfff] transition-colors duration-200 shadow-md text-center rounded-xl p-4 w-1/2 h-55  flex items-center"
            >
              <img
                src={`/${img}`}
                alt="feature"
                className="w-16 h-16 object-contain mr-4"
              />
              <div className="text-left">
                <div className="text-base font-semibold text-gray-800">{title}</div>
                <div className="text-sm text-gray-700">{des}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default ContactBox