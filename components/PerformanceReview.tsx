
import React from 'react';
import { PERFORMANCE_REVIEW_DATA } from '../constants';

const PerformanceReview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-slate-800 mb-2">{PERFORMANCE_REVIEW_DATA.title}</h2>
      <p className="text-sm text-slate-500 mb-4">{PERFORMANCE_REVIEW_DATA.intro}</p>
      
      <div className="space-y-3 mb-4">
        {PERFORMANCE_REVIEW_DATA.points.map((point, index) => (
          <div key={index} className="p-3 bg-slate-50 rounded-md">
            <h4 className="font-semibold text-slate-700">{point.title}</h4>
            <p className="text-slate-600 text-sm">{point.description}</p>
          </div>
        ))}
      </div>
      
      <h3 className="font-semibold text-teal-700 mb-2">Axes d'amélioration prioritaires :</h3>
      <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
        {PERFORMANCE_REVIEW_DATA.focusAreas.map((area, index) => (
          <li key={index}>{area}</li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceReview;
