import React from 'react'
import { Stethoscope , Headset , Timer , BriefcaseMedical, Search} from "lucide-react";
import { Item } from '@radix-ui/react-accordion';
import { Input } from "@/components/ui/input"
function internationaltravel() {
  const whyAmax =[
    {
      icon : <Stethoscope className="w-8 h-8 text-blue-600" />,
      title : 'No health checkup required',
      desc : 'Get travel insurance without any medical checkup'
    },
    {
      icon : <Headset className="w-8 h-8 text-blue-600"/>,
      title :'24 × 7 support helpline',
      desc : 'Get assistance anytime anywhere'
    },
    {
      icon : <Timer className="w-8 h-8 text-yellow-600" />,
      title : 'Quick claim settlement',
      desc : 'With cashless facility'
    },
    {
      icon : <BriefcaseMedical className="w-8 h-8 text-red-600" />,
      title : 'PED Covered',
      desc : 'Get coverage with existing health issues'
    }
  ]
  return (
    <>
       <div>International Travels
        <div>
          <h1>Travel without any worries,plans starting ₹30 per day</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 w-110 bg-red-100 mt-3">
            <h5>Why Amax Insurance?</h5>
            {
              whyAmax.map((item , index) => (
                <div key={index} className= "flex items-center gap-4">
                  {item.icon}
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className='w-130 h-fit bg-white-100 mt-5 p-3'>
                <h1 className='font-bold flex-wrap justify-start '>where are you travelling?</h1>
                <div className='my-2'>
                  <Input  placeholder="search your destination country" className="h-14 text-lg px-6 w-full"/>
                </div>
                <div className='flex gap-2'>
                    <h3 className="font-bold">Popular Destinations</h3>
                    <span className='text-sm text-gray-400'>(You can  select multiple destination)</span>
                </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default internationaltravel