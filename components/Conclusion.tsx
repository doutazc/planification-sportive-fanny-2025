import React from 'react';
import { CONCLUSION_TEXT } from '../constants';

const PlanPhase: React.FC<{ title: string, color: string }> = ({ title, color }) => (
    <div className={`text-white text-center font-bold text-sm py-2 rounded-md shadow ${color}`}>
      {title}
    </div>
);

const Conclusion: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Conclusion et vision globale</h2>
      
      <div className="flex-grow flex flex-col md:flex-row gap-6">
        
        <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center gap-4">
                <div className="p-2 border-2 border-slate-400 rounded-md">
                    <div className="space-y-2 w-full">
                        <PlanPhase title="Analyse initiale" color="bg-sky-500" />
                        <PlanPhase title="Phase préparatoire" color="bg-teal-500" />
                        <PlanPhase title="Phase de compétition" color="bg-amber-500" />
                        <PlanPhase title="Phase de transition" color="bg-indigo-500" />
                        <PlanPhase title="Suivi continu" color="bg-slate-500" />
                    </div>
                </div>
                <div style={{ writingMode: 'vertical-rl' }} className="transform rotate-180 whitespace-nowrap">
                    <p className="font-bold text-slate-700 text-sm">
                        Macrocycle annuel
                        <span className="block text-xs font-normal text-slate-500">(août 2025 - juillet 2026)</span>
                    </p>
                </div>
            </div>
        </div>

        <p className="flex-1 text-slate-600 text-sm leading-relaxed self-center">
            {CONCLUSION_TEXT}
        </p>
      </div>
    </div>
  );
};

export default Conclusion;
