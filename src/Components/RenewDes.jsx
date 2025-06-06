import React from 'react'
function RenewDes() {

    const BenefitBox =[
        {img : "Images/20250606_1153_Referee Stopwatch Icon_simple_compose_01jx1yf0wbf94brs0eyqkdjyne.png",
            title:"24x7 Access",
            des:"Whether it's raising a claim or buying a new insurance policy for bike, you can do it from anywhere, anytime. You need not wait for the insurer’s office to open but instead access the bike policy services online."
        },
        {
            img: "Images/20250606_1203_Time-Saving Symbol_simple_compose_01jx1z188xfdjbe9va2xkvh25d.png",
            title:"Saves Time",
            des:"Purchasing bike insurance online saves you a lot of time and effort. You can purchase the bike policy online within a few minutes from the comfort of your home. It saves both time and effort."
        },
        {img :"Images/Bike_insurance_benefits_Compare_and_buy_6cd18a5fba.svg", title : "Compare and Buy", 
            des:"Buying two wheeler insurance online offers the convenience of comparing different two-wheeler insurance policies before making the purchase decision. You can compare before buying insurance for a bike and make an informed choice depending on the coverage offered."},
        {img:"Images/20250606_1217_Renewal Shield Symbol_simple_compose_01jx1zw0smfzmr94gyt73zcmyx.png",
            title:"Easy Renewal",
            des:"Through the online process, you can easily do two wheeler insurance renewal as well. During the renewal, you can either renew the existing policy or get a new one if you are not satisfied with the existing coverage of your bike insurance policy."
        }
    ]
    const Insrres = [
        {
            title : "Financial Coverage",
            des : "Whether your bike is lost, stolen, or suffers any substantial damage, you will get financial protection for all such unpredictable events with a bike insurance policy."
        },
        {
            title : "Add-ons",
            des : "There are multiple add-ons that you can include in your two wheeler insurance policy, such as Zero Depreciation Cover, Key Loss Cover, Roadside Assistance, and more. These add-ons are available at higher premiums but also offer greater protection."
        },
        {
            title : "Legal Mandate",
            des : "To adhere to the Motor Vehicle Act of 1988, having at least a third-party bike insurance policy is important. If caught riding without a valid two-wheeler policy, you will end up paying hefty fines. You should thus renew bike insurance before the expiry date to get continued coverage and protection for your precious two wheeler."
        },
        {
            title : "Personal Accident Cover",
            des : "A Personal Accident Cover is also mandatory for all bike owners. This cover provides financial protection of up to Rs.15 lakhs in case of unfortunate events when the policyholder meets an unfortunate demise. "
        },
        {
            title : "No Claim Bonus Benefit",
            des : "No Claim Bonus is a reward given to a policyholder for raising no claims in a given year. So, when buying a two wheeler insurance policy, you can take advantage of NCB and save on premiums."
        },
        {
            title : "Coverage for All Two-wheelers",
            des : "A two-wheeler insurance policy provides financial coverage for damage to all vehicles, including mopeds, motorcycles, scooters, and others."
        }
    ]
  return (
    <div className="flex flex-col justify-center items-center w-full ">
         <div className="flex flex-col justify-center items-center  w-[80%] h-auto p-4 ">
            <h1 className="text-2xl font-bold my-3">What is Bike Insurnace</h1>
            <p>Bike insurance or two wheeler insurance is an insurance policy that covers you against damages to your two-wheeler due to accidents, natural/man-made disasters, fire, and theft. The motorcycle insurance policy also provides law-mandated coverage against third-party liabilities such as damage to another person’s vehicle/property or injuries/death of a third party caused due to the insured two-wheeler. You can buy or do bike insurance renewal to get coverage for motorcycles, scooters, mopeds, etc.</p>
            <h1 className="text-2xl font-bold leading-relaxed my-6">Features of Amax Two wheeler Insurance Policy</h1>
            <div className="overflow-x-auto">
                <table className="w-full table-fixed border border-gray-500 rounded-lg">
                    <thead className="bg-blue-100 text-[#253858]">
                    <tr className="text-center">
                        <th className="w-1/2 px-4 py-3 text-xl font-bold border-r border-gray-500">Key Feature</th>
                        <th className="w-1/2 px-4 py-3 text-xl font-bold">Amax Advantage</th>
                    </tr>
                    </thead>
                    <tbody className="text-center text-lg text-gray-800">
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Bike insurance premium</td>
                        <td className="px-4 py-3">Plans start at Rs.457*</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Third-party liability</td>
                        <td className="px-4 py-3">Covered</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Own Damage (OD) Cover</td>
                        <td className="px-4 py-3">Available with the Comprehensive Bike Policy</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">No Claim Bonus (NCB)</td>
                        <td className="px-4 py-3">Up to 50% discount for 5 claim-free years</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Personal Accident (PA) Cover</td>
                        <td className="px-4 py-3">Coverage up to Rs. 15 lakhs for permanent disability/death</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Claim settlement</td>
                        <td className="px-4 py-3">Online, paperless & cashless. Instant settlements within 2 hours for minor damage</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Cashless repair service</td>
                        <td className="px-4 py-3">Available at network garages</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Claim Settlement Ratio (CSR)</td>
                        <td className="px-4 py-3">98.40% in FY 2023-24 (Two-wheeler OD portfolio)</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Buying/renewal</td>
                        <td className="px-4 py-3">Instant two-wheeler insurance renewal</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-3 border-r border-gray-500">Paperless Experience</td>
                        <td className="px-4 py-3">Available</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="my-5 h-auto w-450 bg-purple-50 flex flex-col justify-center items-center mt-17">
                <h1 className="text-3xl font-bold my-10 mt-18">Benefits of Buying Two wheeler Insurance Online</h1>
                <p className="mb-5 text-lg">Here are the advantages of buying online bike insurance.</p>
                <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
                    {BenefitBox.map((item, index) => (
                        <div
                        key={index}
                        className="bg-white shadow-md  p-6 w-full md:w-[35%] flex flex-col items-center text-left"
                        >
                        <img
                            src={`/${item.img}`}
                            alt={item.title}
                            className="w-35 h-35 object-contain mb-4"
                        />
                        <h2 className="text-2xl font-semibold text-[#253858] w-full">{item.title}</h2>
                        <p className="text-lg text-gray-600 mt-2 w-full">{item.des}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-5 h-auto w-450  flex flex-col justify-center items-center mt-25">
                <h1 className="text-3xl font-bold my-10 mt-18">Why Should You Buy Bike Insurance?</h1>
                <p className="mb-9 text-lg">Here are some of the reasons why you should have an insurance policy for two-wheeler:</p>
                <div className="flex flex-wrap justify-center gap-4 px-2 py-4">
                    {Insrres.map((item, index) => (
                        <div
                        key={index}
                        className="  p-6 w-full md:w-[25%] flex flex-col items-center text-left"
                        >
                        <h2 className="text-2xl font-semibold text-[#253858] w-full">{item.title}</h2>
                        <p className="text-lg text-gray-600 mt-2 w-full">{item.des}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RenewDes