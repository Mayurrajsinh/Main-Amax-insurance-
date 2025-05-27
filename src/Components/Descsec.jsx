import React from 'react';
import insuranceDescriptions from './insuranceDescriptions';

const Descsec = ({ insuranceType }) => {
  const description = insuranceDescriptions[insuranceType];

  if (!description) {
    return <p>No description available for this insurance type.</p>;
  }

  return (
    <div className="flex justify-center px-3 py-8 bg-gray-100 h-590">
      <div className="max-w-8xl w-400 bg-white p-6 rounded-xl shadow-lg overflow-auto">
        <h2 className="text-3xl font-bold mb-2 text-blue-700">{description.title}</h2>
        <p className=" mb-4 text-gray-600 text-lg">{description.oneLiner}</p>
        <p className="mb-6 text-gray-700">{description.description}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Procedure</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 ">
            {description.procedure.map((step, index) => (
              <li key={index} className="mb-1">{step}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800">Claim Forms</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            {description.claimForms.map((form, index) => (
              <li key={index} className="mb-1">{form}</li>
            ))}
          </ul>
        </div>

        {description.documentsRequired && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Documents Required</h3>
            {Object.entries(description.documentsRequired).map(([category, documents]) => (
              <div key={category} className="mb-4">
                <h4 className="font-bold text-blue-600 capitalize text-lg">
                  {category.replace(/([A-Z])/g, ' $1')}
                </h4>
                <ul className="list-disc pl-6 text-sm text-gray-700">
                  {documents.map((doc, index) => (
                    <li key={index} className="mb-1 text-lg">{doc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Descsec;
