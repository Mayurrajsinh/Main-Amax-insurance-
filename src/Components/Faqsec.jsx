import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Faqsec() {
  return (
     <div className="w-full bg-[#f1f1f1] h-130">
          <Tabs defaultValue="Genral" className="w-300  px-2 mx-auto">
        <h3 className="text-3xl mt-10">FAQ's</h3>
        <TabsList className="flex gap-2 justify-center  mx-auto mb-8">
          <TabsTrigger
            value="Genral"
            className="py-6 px-8 rounded-full  data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Genral
          </TabsTrigger>
          <TabsTrigger
            value="Policies"
            className="py-6 px-8  rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Policies
          </TabsTrigger>
          <TabsTrigger
            value="Claims"
            className="py-6 px-8  rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Claims
          </TabsTrigger>
          <TabsTrigger
            value="Renewal"
            className="py-6 px-8  rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Renewal
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Genral">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className= "text-lg font-semibold">What is Cover note?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                It is a temporary insurance certificate that your insurer will give you, prior to the issuance of a policy. This is after you have duly filled and signed the proposal form and paid up the premium in full. It is valid for a period of 60 days (from the date of its issue) and warrants the Insurance Company to furnish the insurance certificate before
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className= "text-lg font-semibold">What if i want to make certain changes within the poicy?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                The term you might be looking for here is endorsement, which is an agreement in writing, concerning changes in your insurance policy. An endorsement can be put into action during issuance of the policy in order to introduce add-ons and a more extensive coverage or impose certain restrictions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className= "text-lg font-semibold">What is a No Claim Bounus?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                You will be eligible for a No Claim Bonus (NCB) in case you don’t make a single insurance claim over the course of your policy. It reduces the premium on your car insurance policy and is a token for you being the good driver that you are. NCB can be transferred to a new vehicle belonging to the same class and is valid for a period of 90 days from
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className= "text-lg font-semibold">What to do when my policy expires?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Keep Bajaj Allianz on your speed dial and give us a holler on our Toll Free Number 1800-209-5858 in case your policy expires. We are working 24 hours, just to provide you a hassle-free insurance experience!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className= "text-lg font-semibold">Can i register my claim onlune?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
              Absolutely! If calling our Toll Free Number doesn’t work out for you, you can always register your claim online.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="Policies">
              <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className= "text-lg font-semibold">What is a home insurance policy?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                A home insurance policy protects homeowners from financial losses related to damage or destruction of their property and its contents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className= "text-lg font-semibold">Can i get an insurance policy for my home ?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Yes, home insurance policies are widely available. However, the availability and specific types of coverage can vary depending on your location and the characteristics of your home.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className= "text-lg font-semibold">What is the cost of home insurance policy ?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                The cost of a home insurance policy varies significantly based on factors such as the home's location, size, age, construction materials, coverage limits, and deductible amount.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className= "text-lg font-semibold">What doucments do i need to get a home insurance policy ?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Home insurance can be obtained by providing basic information about your property, including its address, age, square footage, and construction details. Some insurance providers may also require documentation related to the home's value, such as an appraisal or purchase agreement. Check with the specific insurance provider for requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className= "text-lg font-semibold">what are common exclusions in home insurance policies?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Common exclusions often include damage from floods, earthquakes, wear and tear, mold, and certain types of water damage. It's crucial to review your policy documents to understand the specific exclusions that apply.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="Claims">
              <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className= "text-lg font-semibold">How do I register my claim?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                To initiate a claim, you must promptly notify your insurer. It is important to provide details such as the date and time of the incident, along with a summary of what happened. Quick reporting allows for a timely assessment and response to your claim.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className= "text-lg font-semibold">Cashless Claim vs. Reimbursement Claim: Which is better?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                A cashless claim is typically more convenient, as Amax insurance directly settles the hospital bill without requiring any upfront payments from you, allowing you to focus on recovery. Reimbursement claims require you to pay the bills first and then apply for reimbursement, which can take additional steps and processing time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className= "text-lg font-semibold">What is the claim settlement process under the vehicle insurance?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Claim form ,Policy copy , FIR ,Driver’s license ,RC (Registration Certificate) of the vehicle,Repair estimate and bills  ,Photos or video of the damage , Surveyor submits a report which helps in claim approval.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className= "text-lg font-semibold">How many times can i raise a claim on my health insurance policy?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                While there is typically no fixed limit on the number of claims, frequent filings can influence your policy. Multiple claims within a short timeframe may lead to adjustments in your premiums. Insurance providers evaluate risk based on claim history, and consistent filings can indicate a higher risk profile, affecting future coverage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className= "text-lg font-semibold">what is network hospital?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Common exclusions often include damage from floods, earthquakes, wear and tear, mold, and certain types of water damage. It's crucial to review your policy documents to understand the specific exclusions that apply.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="Renewal">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className= "text-lg font-semibold">How 'no claim bonus' is calculated at the time of renewal?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                No claim bonus is calculated at renewal based on the consecutive years the insured has not filed a claim. The discount percentage usually increases each year, following the policy terms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className= "text-lg font-semibold">What is break in insurance? What should I do in case of break-in?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                The time gap between the policy expiration and the renewal of the policy is known as the break-in period. Your policy will remain inactive during this period. In case of a break-in, you are advised to renew your policy as soon as possible. You can complete the procedure online easily and your policy gets instantly activated.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className= "text-lg font-semibold">What are the standard renewal terms for health insurance plans??</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                Many health insurance plans offer long-term or lifetime renewal, requiring for consistent annual renewals and adherence to policy terms. However, policy renewal might get denied in case of misrepresentation, fraud, or non-compliance. It is important to renew your insurance plan. Contact your insurance provider for specific renewal details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className= "text-lg font-semibold">What is the grace period for renewing my health insurance policy?</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700 leading-relaxed">
                There is a grace period offered by the insurance provider even if you have exceeded the date of policy's expiration, during which you can still renew it without losing coverage. The length of the grace period varies by insurer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
      </div>
  )
}

export default Faqsec