
import React from 'react';
import { GENERAL_PRINCIPLES } from '../constants';

const GeneralPrinciples: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Principes généraux de la planification</h2>
      <div className="space-y-4">
        {GENERAL_PRINCIPLES.map((principle, index) => (
          <div key={index}>
            <h3 className="font-semibold text-orange-500">{principle.title}</h3>
            <p className="text-slate-600 text-sm">{principle.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralPrinciples;
