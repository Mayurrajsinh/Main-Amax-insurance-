import React from 'react'
import { Link } from 'react-router-dom';

function CardBox() {
  return (
    <div className="bg-cover bg-center px-4 py-8 text-center">
        <h1 className= "text-start text-4xl font-bold text-green-400"> We Hope Everything Is Fine</h1>
        <div className="w-full flex gap-6 h-60 justify-center mt-10">
        {[
            { img: 'Images/ProposalForm.svg', text: 'Register Claim Online', to: '/register-claim' },
            { img: 'Images/ClaimForm.svg', text: 'Check Claim Status', to: '/claim-status' },
            { img: 'Images/ABHA.svg', text: 'Online Claim Submission', to: '/submit-claim' },
            { img: 'Images/ProposalForm.svg', text: 'Instruction to fill the', to: '/instructions' },
        ].map(({ img, text, to }, i) => (
            <Link
            to={to}
            key={i}
            className="bg-[#d1e9ff] hover:bg-[#b8dfff] transition-colors duration-200 shadow-md text-center rounded-xl p-4 w-65 h-70 cursor-pointer"
            >
            <img
                src={`/${img}`}
                alt="feature"
                className="w-16 h-16 object-contain mx-auto mb-2"
            />
            <div className="text-sm font-medium text-gray-800 mt-30">{text}</div>
            </Link>
        ))}
        </div>

      </div>
  )
}

export default CardBox