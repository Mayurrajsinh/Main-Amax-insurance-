import React from 'react'
import { useParams } from 'react-router-dom'
import Inpbox from './inpbox'
import Inpbox2 from './Inpbox2';
import Inpbox3 from './Inpbox3'

const serviceData = {
  'car-insurance': {
    heading: 'Buy/Renew Car Insurance Online',
    description: 'Believe it or Not! Save up to* 75% on TATA AIG Car Insurance',
    headingTag: 'h3',
    className: 'text-xl font-semibold',
  },
  'bike-insurance': {
    heading: 'Buy/Renew Bike Insurance Online',
    description: 'Believe it or Not! Save up to* 75% on TATA AIG Bike Insurance',
    headingTag: 'h3',
    className: 'text-xl font-semibold',
  },
  'AutoRickshaw-insurance': {
    heading: 'Auto Rickshaw Insurance',
    headingTag: 'h1',
    className: 'text-3xl font-bold text-green-600',
  },
  'Commercial-insurance': {
    heading: 'Commercial Vehicle Insurance',
    headingTag: 'h1',
    className: 'text-3xl font-bold text-blue-600',
  },
}

function ServicePage() {
  const { type } = useParams()
  const data = serviceData[type]

  if (!data) {
    return <p className="text-red-500">Service type not found.</p>
  }

  const HeadingTag = data.headingTag // h1 or h3

  return (
    <div className="p-4">
        {/* <h1 className="h-20 w-30 bg-yellow-200 font-bold text-2x1">{type.split("-")[0]} Insurance Renewal</h1> */}
      <HeadingTag className={data.className}>
        {data.heading}
      </HeadingTag>
      <p className="mt-2 text-gray-700">
        {data.description}
      </p>
      {(type === 'car-insurance' || type === 'bike-insurance') && (
        <div className="mt-6">
          <Inpbox type={type} />
        </div>
      )}
      {(type === 'AutoRickshaw-insurance') && (
        <div className="mt-6">
          <Inpbox2 type={type} />
        </div>
      )}
      {(type === 'Commercial-insurance') && (
        <div className="mt-6">
          <Inpbox3 type={type} />
        </div>
      )}
    </div>
  )
}


export default ServicePage
