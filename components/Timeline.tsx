
import React, { useState } from 'react';
import { MACROCYCLES } from '../constants';
import MesocycleCard from './MesocycleCard';

const Timeline: React.FC = () => {
  const [expandedMesocycle, setExpandedMesocycle] = useState<string | null>(MACROCYCLES[0]?.mesocycles[0]?.id || null);

  const toggleMesocycle = (id: string) => {
    setExpandedMesocycle(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-12">
      {MACROCYCLES.map((macrocycle, macroIndex) => (
        <div key={macrocycle.id}>
          <div className="flex items-center mb-4">
            <span className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">{macrocycle.id}</span>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-slate-800">{macrocycle.title}</h2>
              <p className="text-sm font-medium text-slate-500">{macrocycle.period} &mdash; <span className="text-teal-700">{macrocycle.goal}</span></p>
            </div>
          </div>
          <div className="relative pl-5 ml-5 border-l-2 border-slate-300">
            {macrocycle.mesocycles.map((mesocycle, mesoIndex) => (
              <div key={mesocycle.id} className="mb-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-2 border-teal-600 rounded-full"></div>
                <MesocycleCard 
                  mesocycle={mesocycle}
                  isExpanded={expandedMesocycle === mesocycle.id}
                  onToggle={() => toggleMesocycle(mesocycle.id)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
