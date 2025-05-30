// insuranceDescriptions.js

const insuranceDescriptions = {
  'health-insurance': {
    title: 'Health Insurance Claim Process',
    oneLiner: 'The good things in life can last forever',
    description: 'In our endeavour to provide you the best coverage along with a host of other value added services, our online General Insurance claims system has been designed keeping your ease in mind...',
    procedure: [
      'Your doctor advises treatment or hospitalization',
      'Intimate the claim on your health insurance',
      'Visit Network hospital (For cashless claim) or Visit a hospital of your choice and pay accordingly (For reimbursement claim)',
      'TPA desk of network hospital contacts BAGIC for cashless treatment (For cashless claim) or Submit original hospitalization related documents to BAGIC -HAT upon discharge (For reimbursement claim)',
      'TPAs with us: Medi Assist Insurance TPA Pvt Ltd, Family Health Plan Insurance TPA Pvt Ltd.(FHPL), Paramount Healthcare Services Pvt Ltd., Good Health Insurance TPA Pvt Ltd.(GHPL), Vidal Health Insurance TPA Pvt Ltd., MDIndia Insurance TPA Pvt Ltd., Health India Insurance TPA Pvt Ltd., Volo Health Insurance TPA Private Limited.',
    ],
    claimForms: [
      'Cashless Request Form ,',
      'Reimbursement Form',
      'Personal Accident',
      'Global Personal Guard',
      'Non-Medical Expenses List',
      'KYC Form',
      'NEFT form',
      'Indemnity Bond format',
      'Legal Heir certificate format',
      'Editable Reimbursement Claim Form',
      'Editable OPD Claim Form',
      'Editable Global Personal Guard',
    ],
    documentsRequired: {
      hospitalization: [
        'Hospitalization Claim form duly filled and signed by the insured',
        'Original Discharge summary document',
        'Original hospital bill with detailed cost break-up',
        'Original paid receipts',
        'All Lab and test reports',
        'Copy of Invoice/Stickers/barcode in case of implants',
        'First consultation letter from doctor',
        'KYC form',
        'Completely filled and signed NEFT form by Policy Holder/proposer',
      ],
      death: [
        'Claim form duly filled and signed by the insured',
        'Original Death summary document',
        'Original hospital bill with detailed cost break-up',
        'Original paid receipts',
        'All Lab and test reports',
        'Copy of Invoice/Stickers/barcode in case of implants',
        'First consultation letter from doctor',
        'Legal heir certificate containing affidavit and indemnity bond',
        'Completely filled and signed NEFT form by Policy Holder/proposer.',
      ],
      personalAccident: [
        'Claim form duly filled and signed by the insured / Claimant.',
        'Beneficiary Name against the Policy and NEFT Details of Insured / Nominee.',
        'Completely filled NEFT details stating Branch, Branch IFSC Code, Account type, Complete Account Number duly signed by Nominee / Claimant with original pre printed cancel cheque if pre-printed cheque is not available Kindly provide 1st Page of Bank Pass Book/ Bank statement Attested by the Bank which clearly indicates Beneficiary Name & Complete Account no as well IFSC code.(All Fields in the form are mandatory to process).',
        'Aadhar Card & Pancard details of Nominee / Claimant/ Insured.',
        'We will require Salary Slip/ ITR at the time of issuance of the policy for Salary Commensuration.',
      ],
      accidentalHospitalization: [
        'Original Discharge Summary.',
        'All the previous Consultation Papers.',
        'Investigation Reports supporting the diagnosis.',
        'Operation Theatre Notes.',
        'Original Final Bill with detailed bill break up and Paid Receipts.',
        'Original Pharmacy and Investigation Bills.',
      ],
      deathDocuments: [
        'Attested copy of Death certificate.',
        'Attested copy of FIR / Panchanama / Inquest.',
        'Attested copy of Post Mortem Report.',
        'Attested copy of Viscera /Chemical analysis Report if any.',
        'Hospitalization documents, if any.',
        'In case of Death if Nominee is not defined on the policy copy then we will require the below documents.',
        'Legal heir certificate containing affidavit and indemnity bond on 200 INR (As per attached format).The same should be duly signed by all legal heirs, notarized.',
        'If the Nominee is minor then we will require a Decree Certificate from the Court stating the guardian of the insured..',
      ],
      permanentDisability: [
        'Duly filled Medical Certificate attached in the Personal Accident Claim Form.',
        'X-ray films /Investigation reports supporting the diagnosis.',
        'Permanent Total Disability and Permanent Partial Disability Certificate from the Government authority certifying the disability of the insured.',
        'Photograph of the patient before and after the accident to support the disability.',
      ],
      temporaryDisability: [
        'Duly filled Medical Certificate attached in the Group Personal Accident Claim Form',
        'Leave certificate from employer stating the exact leave period, duly signed and sealed by the employer.',
        'All the consultation papers with details of treatment during TTD period.',
        'Final medical fitness certificate from the treating doctor stating the type of disability, disability period and declaration that the patient is fit to resume his duty on a given date.',
        'X-ray films /Investigation reports supporting the diagnosis.',
      ],
      childrenEducationBonus: [
        'In Case of Death and PTD, kindly provide bonafide certificate from the school authorities stating that child of the insured is studying over there. (Mentioning - Name, S/D/o, Date of Birth and Class) School Identity Card.',
      ],
      burialExpenses: [
        'Original Paid Receipts',
      ],
      hospitalizationCashExpenses: [
        'Copy of Final Bill and Discharge Summary.',
        'Investigation reports toward diagnosis.',
      ],
    },
  },
  'home-insurance': {
    title: 'Home Insurance Claims Process',
    oneLiner: 'You are just a single click away from a comprehensive home insurance claim settlement',
    description: 'We understand that unforeseen events and accidents can disrupt you with huge loss, we are here to provide you with efficient and reliable claim handling. Our experienced team of insurance professionals is dedicated to guide you through the claim process, ensuring a smooth and hassle-free claim experience. Our goal is to minimize the financial impact on you and serve you to get back on track as quickly as possible.',
    procedure: [
      'Intimate us about your general insurance claim and other information',
      'We will corroborate request and take it to claims department',
      'We appoint surveyor within 48 hours',
      'Surveyor submits final report within 7 working days',
      'Claims department will process claim within 7 working days',
      'In case of theft, burglary, fire or any other natural calamity, don’t think twice before picking up the phone and dialling our Toll Free Insurance helpline 1800-209-5858. We are on your 24x7 speed dial, making sure no residential property damage or loss is bad enough to burn a hole in your pocket',
      'All you need to do is provide us your policy details and other information relevant to your General Insurance claim',
      'We will validate the claim’s authenticity and hand it over to our claims department, pronto!',
      'Once your claim request is registered, we will immediately appoint a surveyor within 48 hours. That’s faster than any insurance company',
      'Submit all relevant information to the surveyor/assessor, who will then submit the final report to us within 7-15 working days (this time is situation specific)',
      'Now, put your feet up and relax. We will process your general insurance claim within maximum 10 days',
    ],
    claimForms: [
      'All Risk Claim Form',
      'Fire',
      'Burglary',
      'Electronic Equipment',
      'Machinery Breakdown',
      'Mobile Phones',
    ],
    documentsRequired: {
      damages: [
        'Claim form duly filled and signed by the insured',
        'Brief narration about the loss',
        'Purchase Invoice of damaged Item',
        'Estimate of repair',
        'Service report from repairer',
        'Repair bill',
        'Payment Receipt',
        'NEFT Documents',
        'KYC Documents if amount is more than 1 Lakh',
        'Consent',
      ],
      theft: [
        'Claim form duly filled and signed by the insured',
        'Details of lost item covered under the policy',
        'Purchase Invoice of the lost item',
        'Brief narration about the incidence occurred',
        'First Information Report - FIR',
        'Final Police Report',
        'Indemnity Bond (if required)',
        'NEFT Documents',
        'KYC Documents if amount is more than 1 Lakh',
        'Consent',
      ],
      burglary: [
        'Claim form duly filled and signed by the insured',
        'FIR/Police Panchnama',
        'Final Police Report',
        'Indemnity Bond (if required)',
        'Purchase Invoice of the lost items',
        'NEFT Documents',
        'KYC Documents if amount is more than 1 Lakh',
        'Paper cutting etc. if any',
        'Insured\'s consent/confirmation',
        'NEFT Documents',
        'KYC Documents if amount is more than 1 Lakh',
        'Discharge voucher',
      ],
    },
    'pet-insurance': {
        title: "Pet Insurance Claim",
        oneLiner: "Start your pet insurance claim within 24 hours of the incident to ensure smooth processing.",
        description:
            "To complete the Pet Insurance claim process successfully, notify the insurer within 24 hours. Bajaj Allianz representatives are available via toll-free number. Get immediate help for your pet from a qualified veterinary doctor. Claims are reimbursed, so seek treatment first and then file the claim with all required documents.",
        procedure: [
            "Visit the Bajaj Allianz Pet Insurance Product Page to verify claim eligibility.",
            "Check Inclusions and Exclusions to see covered illnesses and scenarios.",
            "Call the insurer and report the incident.",
            "Submit the claim and required documents as per the checklist.",
        ],
        claimForms: [
            "Duly completed claim form",
            "Vaccination Certificates",
            "Death Certificate with photographs (for Mortality Benefit Cover)",
            "Vet Medical Papers and Bill (for various covers)",
            "General Diary Entry (for Theft/Lost/Straying Cover)",
            "FIR (for Third Party Liability Cover)",
            "Copy of advertisement (for Theft/Lost/Straying Cover)",
            "Hospital bill (for Hospitalization)",
            "Court Orders (for Third Party Liability Cover)",
            "Diagnostics Report (for Terminal Diseases, Long Term Care, OPD Cover)",
            "Photos of pet with newspaper showing date",
            "Photo of RFID Tag/Microchip (if applicable)",
            "Any other documents as required by the company"
        ],
        documentsRequired: {
            waitingPeriod: [
            "30 days for claims under Surgery & Hospitalization, Terminal Diseases, Long Term Care, OPD, Mortality Benefit.",
            "90 days for claims under Theft/Lost/Straying Cover.",
            "No waiting period for Third Party Liability Cover or accident claims.",
            "No waiting period if policy is continuously renewed."
            ],
            paymentResponsibility: [
            "You pay the service provider directly.",
            "File the claim afterward for reimbursement.",
            "Co-pay or deductible may apply for some sections."
            ],
            processingTime: [
            "Claim is typically processed within 15 days after submitting all documents and resolving queries."
            ],
            theftProcedure: [
            "Inform the police immediately after pet theft.",
            "FIR is not mandatory; General Diary Entry is accepted.",
            "Report the theft to the insurer within 24 hours.",
            "Submit the claim if pet is not found within 45 days."
            ]
        }
    }
  },
  // Add other insurance types similarly...
};

export default insuranceDescriptions;
