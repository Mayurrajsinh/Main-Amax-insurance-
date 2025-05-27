import React from 'react';
import { useParams } from 'react-router-dom';
import CardBox from '@/Components/CardBox';
import Claimcard from '@/Components/Claimcard';
import ContactBox from '@/Components/ContactBox';
import Descsec from '@/Components/Descsec';
import Faqsec from '@/Components/Faqsec';

function Claim() {
  const { insuranceType } = useParams();

  return (
    <>
      <div className="p-2 pt-22">
      </div>
      <CardBox />
      <ContactBox />
      <Claimcard />
      <Descsec insuranceType={insuranceType} />
      <Faqsec />
    </>
  );
}

export default Claim;
