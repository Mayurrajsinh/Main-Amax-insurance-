import React from 'react'

function RenewDetail() {
    const rewinfo = [
        {img : "Images/rating.svg" , des : "Google Review Rating",},
        {img : "Images/car5.svg" , des : "7.7 Crore" , value : "Happy Customer"},
        {img : "Images/handShake2.svg", des : "Claim Relationship Manager", value : "assigned on  policy purches"},
        {img : "Images/file3.svg", des : "440 Crore", value : "worth cliams settled in last year"}
    ]
  return (
    <>
    {/* <p>Google Review Rating</p>
    <h4>7.7 crore Happy  Cutomers</h4> */}
    <div className="flex flex-row gap-6 justify-center  items-center flex-wrap md:flex-nowrap px-4 py-6 w-full rounded-t-2xl ">
      {rewinfo.map((item, index) => (
        <div
          key={index}
          className={`flex ${
            index === 0 ? "flex-col items-center text-center" : "flex-row items-start"
          } lg p-4  w-full sm:w-[300px]`}
        >
          <img src={`/${item.img}`} alt={item.des} className={`mb-2 ${index === 0 ? "w-30 h-12" : "w-10 h-10 mr-3 "}`} />
          <div className= {`${index !== 0 ? "flex flex-col" : ""}`}>
            <p className="text-sm font-semibold text-[#253858]">{item.des}</p>
            {item.value && (
              <p className="text-xs text-gray-500 mt-1">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default RenewDetail