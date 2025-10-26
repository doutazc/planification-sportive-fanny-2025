
import React from 'react';
import { WEEKLY_SCHEDULE } from '../constants';

const MicrocycleSchedule: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Microcycle hebdomadaire type</h2>
      <div className="space-y-4">
        {WEEKLY_SCHEDULE.map((item, index) => (
          <div key={index} className="p-3 border-l-4 rounded-r-md" style={{ borderColor: item.isOptional ? '#fbbf24' : '#14b8a6' }}>
            <h3 className="font-bold text-slate-700 flex items-center">
              {item.day}
              {item.isOptional && <span className="ml-2 text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Facultatif</span>}
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-600 mt-1">
              {item.activities.map((activity, actIndex) => (
                <li key={actIndex}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
        <p className="text-sm text-slate-500 italic pt-2">Cette structure permet une alternance entre charge et récupération et un travail sur différentes composantes (technique, physique, tactique), adaptées aux besoins individuels.</p>
      </div>
    </div>
  );
};

export default MicrocycleSchedule;
