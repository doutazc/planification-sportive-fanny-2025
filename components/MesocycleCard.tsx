
import React from 'react';
import type { Mesocycle } from '../types';
import { IconTarget, IconBolt, IconTrophy } from '../constants';

interface MesocycleCardProps {
  mesocycle: Mesocycle;
  isExpanded: boolean;
  onToggle: () => void;
}

const MesocycleCard: React.FC<MesocycleCardProps> = ({ mesocycle, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
      <button onClick={onToggle} className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider">{mesocycle.title}</p>
            <h3 className="text-lg font-bold text-slate-800">{mesocycle.phase}</h3>
          </div>
          <svg className={`w-6 h-6 text-slate-500 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="p-4 md:p-6 border-t border-slate-200 animate-fade-in-down">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-slate-700">Objectif Central:</h4>
              <p className="text-slate-600">{mesocycle.centralObjective}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-slate-700 mb-2">Priorités Techniques:</h4>
                <ul className="list-none space-y-1">
                  {mesocycle.technicalPriorities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <IconTarget className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-700 mb-2">Priorités Physiques:</h4>
                <ul className="list-none space-y-1">
                  {mesocycle.physicalPriorities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <IconBolt className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {mesocycle.keyEvents.length > 0 && (
              <div>
                <h4 className="font-bold text-slate-700 mb-2">Stages & Compétitions Clés:</h4>
                <ul className="list-none space-y-1">
                  {mesocycle.keyEvents.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <IconTrophy className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2">
                <h4 className="font-bold text-slate-700">Logique du Plan:</h4>
                <p className="text-slate-600 italic">"{mesocycle.planLogic}"</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MesocycleCard;
