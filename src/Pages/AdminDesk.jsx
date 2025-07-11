import React from 'react'
import { HousePlus, User, NotepadText, BriefcaseBusiness, Banknote, BellRing, UsersRound, Settings } from 'lucide-react'

function AdminDesk() {
  return (
    <>
    <div className='flex'>
         <div className="w-90 h-screen bg-[#c3e0e5] ">
        <p className="font-bold flex items-center justify-center w-full h-10  text-black  mb-8 pt-4">
            Insurance Dashboard
        </p>

        <ul className="space-y-2">
            {[
            { icon: HousePlus, label: "Customers" },
            { icon: User, label: "Policies" },
            { icon: NotepadText, label: "Claim" },
            { icon: BriefcaseBusiness, label: "Renewals" },
            { icon: Banknote, label: "Payments" },
            { icon: BellRing, label: "Notifications" },
            { icon: UsersRound, label: "Sub Admin" },
            { icon: Settings, label: "Settings" },
            ].map((item, index) => (
            <li
                key={index}
                className="flex items-center gap-2 w-full h-10 px-3 rounded-md transition-all duration-200
                        hover:bg-[#5885af] hover:shadow-md hover:border-l-4 hover:border-white"
            >
                <item.icon className="shrink-0" />
                <span className="text-black font-medium">{item.label}</span>
            </li>
            ))}
        </ul>
    </div>
    <div className='flex flex-1 gap-4 ml-8'>
        {[
            {title : 'Open Claim', count : 12},
            {title : 'Resolved Claims', count : 8},
            {title : 'Claims This Week', count : 5},
            {title : 'Fraud Aleart', count:1}
        ].map((item,index)=>(
            <div 
                key={index}
                className='w-45 h-fit bg-gray-200 p-4 rounded-2xl'
            >
                <h4 className='flex justify-center font-bold'>{item.title}</h4>
                <p  className='flex  justify-center'>{item.count}</p>
            </div>
        ))}
    </div>
    </div>
    <div>
    </div>
    </>
  )
}

export default AdminDesk