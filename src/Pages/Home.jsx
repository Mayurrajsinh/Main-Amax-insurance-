import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import MobileappCard from '@/Components/MobileappCard';
import Assistance from '@/Components/Assistance';
import { Menu } from "lucide-react";

function Home() {
  const tabItems = [
  { value: "personal", label: "Account", content: "Make changes to your account here." },
  { value: "commercial", label: "Commercial", content: "Change your password here." },
  { value: "msme", label: "MSME", content: "Change your password here." },
  { value: "govt schemes", label: "Govt Schemes", content: "Change your password here." },
  { value: "Rural", label: "Rural", content: "Change your password here." },
];
  return (
    <>
         <div className='p-2 pt-24 flex justify-between h-lvh bg-gradient-to-r from-blue-400 to-yellow-200  gap-1'>
      <Tabs defaultValue="personal" className=" w-fit ">
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
      {tabItems.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
    <div className="img-con  w-[400px]">
      <img src="/hero.svg" alt="" className='h-full w-full object-contain' />
    </div>
    </div>
    <div className="flex justify-center my-8">
        <MobileappCard />
    </div>
    <div className="flex">
      <h1>Insurance Simplified: Must-Read Articles
      </h1>
    </div>
    <div className="">
      <Assistance />
    </div>
    </>

  )
}

export default Home