import React from 'react'
import ImageCardGrid from '@/Components/ImageCardGrid';

function Claimcard() {
    const data = [
  { img: 'Images/Customizableaddons.png', descri: 'Motor insurance claims' },
  { img: 'Images/Health Renew.png', descri: 'Health insurance claims' },
  { img: 'Images/flexible-coverages.webp', descri: 'Travel insurance claim' },
  { img: 'Images/cyber-other.png', descri: 'Cyber insurance claim' },
];
  return (
    <div>
         <div className="mx-30 my-45">
          <div className="flex justify-between items-center w-290 h-10 px-4">
               <h3 className="text-xl font-bold ">Claim</h3>
               <button className="border-2 px-4 py-1 rounded-3xl">View all</button>
          </div>
            <ImageCardGrid cards={data} />
        </div>
    </div>
  )
}

export default Claimcard