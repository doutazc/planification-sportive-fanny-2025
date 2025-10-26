

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MACROCYCLES } from '../constants';
import MesocycleCard from './MesocycleCard';

const getCurrentMesocycleId = (currentDate: Date): string | null => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const monthMap: { [key: string]: number } = {
        'JANVIER': 0, 'FÉVRIER': 1, 'MARS': 2, 'AVRIL': 3, 'MAI': 4, 'JUIN': 5,
        'JUILLET': 6, 'AOÛT': 7, 'SEPTEMBRE': 8, 'OCTOBRE': 9, 'NOVEMBRE': 10, 'DÉCEMBRE': 11,
    };

    for (const macro of MACROCYCLES) {
        for (const meso of macro.mesocycles) {
            // Regex to capture start month, optional end month, and year
            const match = meso.title.toUpperCase().match(/([A-ZÉÛ]+)(?:\s*–\s*([A-ZÉÛ]+))?\s+(\d{4})/);

            if (match) {
                const [, startMonthName, endMonthName, yearStr] = match;
                const year = parseInt(yearStr, 10);
                const startMonth = monthMap[startMonthName];
                // If there's no end month, it's the same as the start month
                const endMonth = endMonthName ? monthMap[endMonthName] : startMonth;

                if (startMonth !== undefined && endMonth !== undefined) {
                    if (currentYear === year && currentMonth >= startMonth && currentMonth <= endMonth) {
                        return meso.id;
                    }
                }
            }
        }
    }
    return null;
};


const Timeline: React.FC = () => {
  const [expandedMesocycle, setExpandedMesocycle] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Only auto-expand if there's no specific hash in the URL.
    if (location.hash && location.hash !== '#planification') return;

    const activeMesoId = getCurrentMesocycleId(new Date());
    if (activeMesoId) {
      setExpandedMesocycle(activeMesoId);
    } else {
      // If no active mesocycle is found (e.g., current date is outside plan), ensure nothing is expanded.
      setExpandedMesocycle(null);
    }
  }, [location.hash]);

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